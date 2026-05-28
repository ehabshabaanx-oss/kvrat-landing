import 'package:flutter/material.dart';
import 'package:kvrat_app/core/core.dart';

class LoginScreen extends StatelessWidget {
  const LoginScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text("Login")),
      body: Center(
        child: ElevatedButton(
          onPressed: () {
            Navigator.pushNamed(context, AppRoutes.dashboard);
          },
          child: const Text("Enter Dashboard"),
        ),
      ),
    );
  }
}