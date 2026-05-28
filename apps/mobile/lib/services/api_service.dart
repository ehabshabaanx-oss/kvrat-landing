import 'dart:convert';
import 'package:http/http.dart' as http;

class ApiService {

  static const String baseUrl = "http://localhost:3000";
  // =========================
  // 🔐 LOGIN
  // =========================
  static Future<bool> login({
    required String email,
    required String password,
  }) async {

    try {

      final response = await http.post(
        Uri.parse("$baseUrl/auth/login"),
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: jsonEncode({
          "email": email,
          "password": password,
        }),
      );

      // 🔥 Debug مهم جدًا
      print("STATUS: ${response.statusCode}");
      print("LOGIN RESPONSE: ${response.body}");

      // ✔ نجاح مبدئي لأي 200
      if (response.statusCode == 200) {
        final data = jsonDecode(response.body);

        final token = data["access_token"];
        final success = data["success"];

        return token != null || success == true;
      }

      return false;

    } catch (e) {
      print("LOGIN ERROR: $e");
      return false;
    }
  }

  // =========================
  // 💰 GET WALLET
  // =========================
  static Future<Map<String, dynamic>?> getWallet() async {

    try {

      final response = await http.get(
        Uri.parse("$baseUrl/wallet"),
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
      );

      print("WALLET RESPONSE: ${response.body}");

      if (response.statusCode == 200) {
        return jsonDecode(response.body);
      }

      return null;

    } catch (e) {
      print("WALLET ERROR: $e");
      return null;
    }
  }

  // =========================
  // 👤 PROFILE
  // =========================
  static Future<Map<String, dynamic>?> getProfile() async {

    try {

      final response = await http.get(
        Uri.parse("$baseUrl/user/profile"),
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
      );

      print("PROFILE RESPONSE: ${response.body}");

      if (response.statusCode == 200) {
        return jsonDecode(response.body);
      }

      return null;

    } catch (e) {
      print("PROFILE ERROR: $e");
      return null;
    }
  }
}