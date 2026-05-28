import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

class HomeScreen extends StatefulWidget {
  const HomeScreen({super.key});

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  final TextEditingController controller = TextEditingController();

  String response = "";
  bool loading = false;

  Future<void> sendToBrain() async {
    setState(() {
      loading = true;
      response = "";
    });

    try {
      final uri = Uri.parse("http://10.0.2.2:4002/ai/brain");

      final res = await http.post(
        uri,
        headers: {"Content-Type": "application/json"},
        body: jsonEncode({
          "message": controller.text,
        }),
      );

      setState(() {
        response = res.body;
        loading = false;
      });
    } catch (e) {
      setState(() {
        response = e.toString();
        loading = false;
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("KVRAT Mobile AI"),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          children: [
            TextField(
              controller: controller,
              decoration: const InputDecoration(
                hintText: "Enter prompt...",
              ),
            ),
            const SizedBox(height: 10),
            ElevatedButton(
              onPressed: loading ? null : sendToBrain,
              child: Text(loading ? "Loading..." : "Send"),
            ),
            const SizedBox(height: 20),
            Expanded(
              child: SingleChildScrollView(
                child: Text(response),
              ),
            ),
          ],
        ),
      ),
    );
  }
}