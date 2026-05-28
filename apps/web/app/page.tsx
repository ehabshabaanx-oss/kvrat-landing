'use client';

import { useState } from 'react';

const API = process.env.NEXT_PUBLIC_API_URL;

export default function Page() {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [history, setHistory] = useState<any[]>([]);
  const [tab, setTab] = useState<'brain' | 'image'>('brain');

  const send = async () => {
    setLoading(true);
    setResult(null);

    const endpoint =
      tab === 'brain' ? '/ai/brain' : '/image/generate';

    const body =
      tab === 'brain'
        ? { message: input }
        : { prompt: input };

    const res = await fetch(`${API}${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    const data = await res.json();

    setResult(data);
    setHistory((prev) => [
      { input, tab, data },
      ...prev.slice(0, 9),
    ]);

    setLoading(false);
  };

  const getImage = () => {
    return result?.result?.image?.url;
  };

  return (
    <main style={styles.main}>
      <div style={styles.container}>

        <h1 style={styles.title}>KVRAT CONTROL CENTER</h1>

        <div style={styles.tabs}>
          <button
            onClick={() => setTab('brain')}
            style={tab === 'brain' ? styles.activeTab : styles.tab}
          >
            Brain
          </button>

          <button
            onClick={() => setTab('image')}
            style={tab === 'image' ? styles.activeTab : styles.tab}
          >
            Image
          </button>
        </div>

        <input
          style={styles.input}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter command..."
        />

        <button style={styles.button} onClick={send}>
          {loading ? 'Processing...' : 'Run'}
        </button>

        <div style={styles.result}>
          {getImage() ? (
            <img src={getImage()} style={styles.image} />
          ) : (
            <pre>{JSON.stringify(result, null, 2)}</pre>
          )}
        </div>

        <div style={styles.history}>
          <h3>History</h3>
          {history.map((h, i) => (
            <div key={i} style={styles.historyItem}>
              <b>{h.tab}</b>: {h.input}
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}

const styles: Record<string, any> = {
  main: {
    minHeight: '100vh',
    background: '#050814',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Arial',
  },

  container: {
    width: '750px',
    textAlign: 'center',
  },

  title: {
    fontSize: '34px',
    marginBottom: '20px',
  },

  tabs: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    marginBottom: '15px',
  },

  tab: {
    padding: '10px 20px',
    background: '#0b1224',
    border: '1px solid #333',
    color: 'white',
    cursor: 'pointer',
  },

  activeTab: {
    padding: '10px 20px',
    background: '#4ea1ff',
    border: '1px solid #4ea1ff',
    color: 'white',
  },

  input: {
    width: '100%',
    padding: '12px',
    marginBottom: '10px',
    background: '#0b1224',
    border: '1px solid #333',
    color: 'white',
  },

  button: {
    padding: '10px 20px',
    background: '#4ea1ff',
    border: 'none',
    cursor: 'pointer',
    marginBottom: '15px',
  },

  result: {
    background: '#0b1224',
    padding: '15px',
    borderRadius: '10px',
    textAlign: 'left',
    minHeight: '200px',
  },

  image: {
    width: '100%',
    borderRadius: '10px',
  },

  history: {
    marginTop: '20px',
    textAlign: 'left',
    background: '#0b1224',
    padding: '10px',
    borderRadius: '10px',
  },

  historyItem: {
    fontSize: '12px',
    borderBottom: '1px solid #222',
    padding: '5px 0',
  },
};