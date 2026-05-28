import 'package:flutter/material.dart';

class AppTheme {
  static const Color background = Color(0xFFF8FAFC);
  static const Color primary = Color(0xFF00C2E8);
  static const Color accent = Color(0xFFE87A24);

  static ThemeData lightTheme = ThemeData(
    useMaterial3: true,
    scaffoldBackgroundColor: background,
    appBarTheme: const AppBarTheme(
      backgroundColor: primary,
      foregroundColor: Colors.white,
      centerTitle: true,
      elevation: 0,
    ),
    colorScheme: const ColorScheme.light(
      primary: primary,
      secondary: accent,
      surface: background,
    ),
    elevatedButtonTheme: ElevatedButtonThemeData(
      style: ElevatedButton.styleFrom(
        backgroundColor: accent,
        foregroundColor: Colors.white,
        padding: const EdgeInsets.symmetric(vertical: 14),
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.all(Radius.circular(12)),
        ),
      ),
    ),
  );
}
