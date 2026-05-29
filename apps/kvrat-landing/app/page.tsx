"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    role: "user"
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (!form.name || !form.phone) {
      setError("من فضلك املأ البيانات");
      return;
    }

    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const res = await fetch("http://localhost:4000/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      if (!res.ok) throw new Error();

      setSuccess(true);

      setForm({
        name: "",
        phone: "",
        role: "user"
      });

    } catch {
      setError("حدث خطأ أثناء الإرسال");
    }

    setLoading(false);
  };

  return (
    <main style={{
      fontFamily: "Arial",
      background: "#F9FAFB",
      minHeight: "100vh",
      padding: 40
    }}>

      {/* HEADER */}
      <header style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 40
      }}>
        <h2 style={{ color: "#0A84FF", fontWeight: "bold" }}>KVRAT</h2>

        <button style={{
          background: "#F59E0B",
          color: "#fff",
          padding: "10px 16px",
          border: 0,
          borderRadius: 10,
          fontWeight: "bold"
        }}>
          تسجيل اهتمام
        </button>
      </header>

      {/* HERO */}
      <section style={{
        textAlign: "center",
        background: "#fff",
        padding: 40,
        borderRadius: 16,
        boxShadow: "0 5px 20px rgba(0,0,0,0.05)"
      }}>

        <h1 style={{
          color: "#0A84FF",
          fontSize: 42,
          marginBottom: 10,
          direction: "rtl"
        }}>
          انضم إلى تطبيق KVRAT الآن
        </h1>

        <p style={{ color: "#666", fontSize: 16 }}>
          منصة تجمع المستخدمين والتجار والموردين في مكان واحد
        </p>

        <div style={{ marginTop: 20 }}>
          <Image
            src="/images/kavroto.png"
            alt="Kavroto"
            width={220}
            height={220}
          />
        </div>

        <div style={{
          marginTop: 20,
          display: "flex",
          justifyContent: "center",
          gap: 10,
          flexWrap: "wrap"
        }}>
          <span style={{ background: "#0A84FF", color: "#fff", padding: "6px 12px", borderRadius: 20 }}>
            مستخدمين
          </span>

          <span style={{ background: "#F59E0B", color: "#fff", padding: "6px 12px", borderRadius: 20 }}>
            تجار
          </span>

          <span style={{ background: "#111827", color: "#fff", padding: "6px 12px", borderRadius: 20 }}>
            موردين
          </span>
        </div>
      </section>

      {/* FORM */}
      <section style={{
        maxWidth: 420,
        margin: "40px auto 0",
        background: "#fff",
        padding: 25,
        borderRadius: 16,
        boxShadow: "0 5px 20px rgba(0,0,0,0.05)"
      }}>

        <input
          placeholder="الاسم"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          style={{
            width: "100%",
            padding: 12,
            marginBottom: 10,
            borderRadius: 8,
            border: "1px solid #ddd"
          }}
        />

        <input
          placeholder="رقم الهاتف"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          style={{
            width: "100%",
            padding: 12,
            marginBottom: 10,
            borderRadius: 8,
            border: "1px solid #ddd"
          }}
        />

        <select
          value={form.role}
          onChange={(e) => setForm({ ...form, role: e.target.value })}
          style={{
            width: "100%",
            padding: 12,
            marginBottom: 20,
            borderRadius: 8,
            border: "1px solid #ddd"
          }}
        >
          <option value="user">مستخدم</option>
          <option value="vendor">تاجر</option>
          <option value="supplier">مورد</option>
        </select>

        <button
          onClick={handleSubmit}
          disabled={loading}
          style={{
            width: "100%",
            padding: 14,
            background: loading ? "#ccc" : "#0A84FF",
            color: "#fff",
            border: 0,
            borderRadius: 10,
            fontWeight: "bold",
            cursor: "pointer"
          }}
        >
          {loading ? "جاري الإرسال..." : "تسجيل"}
        </button>

        {success && (
          <p style={{ color: "green", marginTop: 10, textAlign: "center" }}>
            تم التسجيل بنجاح
          </p>
        )}

        {error && (
          <p style={{ color: "red", marginTop: 10, textAlign: "center" }}>
            {error}
          </p>
        )}

      </section>

    </main>
  );
}