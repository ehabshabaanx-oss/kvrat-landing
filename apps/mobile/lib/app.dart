import 'package:flutter/material.dart';

import '../../features/home/home_screen.dart';
import '../../features/login/login_screen.dart';
import '../../features/dashboard/dashboard_screen.dart';
import '../../features/profile/profile_screen.dart';
import '../../features/tasks/tasks_screen.dart';

class AppRouter {
  static Route<dynamic> onGenerateRoute(RouteSettings settings) {
    switch (settings.name) {
      case '/login':
        return MaterialPageRoute(
          builder: (_) => const LoginScreen(),
        );

      case '/home':
        return MaterialPageRoute(
          builder: (_) => const HomeScreen(),
        );

      case '/dashboard':
        return MaterialPageRoute(
          builder: (_) => const DashboardScreen(),
        );

      case '/profile':
        return MaterialPageRoute(
          builder: (_) => const ProfileScreen(),
        );

      case '/tasks':
        return MaterialPageRoute(
          builder: (_) => const TasksScreen(),
        );

      default:
        return MaterialPageRoute(
          builder: (_) => const Scaffold(
            body: Center(
              child: Text('Route not found'),
            ),
          ),
        );
    }
  }
}