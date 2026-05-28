KVRAT AI Manager System
Goal:
Central AI layer ���� �� ����� ������...
KVRAT AI Manager System

Goal:
Central AI layer يدير كل أجزاء النظام (web/mobile/backend) ويقوم بالتوجيه الذكي للطلبات وتنفيذ المهام وربط الخدمات
Architecture:
Backend: NestJS
Web: Next.js
Mobile: Flutter
Database: SQLite (initial) ثم قابل للتوسع PostgreSQL
AI Manager Core Modules:
AIManagerModule
PromptRouter
ContextMemoryService
ToolExecutorService
AgentOrchestrator
TaskScheduler
Backend Modules:
AuthModule
UsersModule
WalletModule
MediaModule
AIModule (new)
AI Flow:
User Request → API Gateway → PromptRouter → ContextMemory → Decision Engine → ToolExecutor → Response
Tools Layer:
Database tools
File system tools
Wallet actions
Media processing
External API connectors
AI Capabilities:
Auto routing للطلبات
إدارة المحادثات
تنفيذ أوامر النظام
تحليل البيانات
تشغيل مهام مجدولة
Project Folder Structure:
/apps/backend/src
/modules
/auth
/users
/wallet
/media
/ai-manager
/services
prompt-router.service.ts
context-memory.service.ts
tool-executor.service.ts
agent-orchestrator.service.ts
/apps/web/app
/apps/mobile/lib
Infrastructure:
.env central configuration
API Gateway between apps
Shared DTOs package لاحقاً
CI-ready structure
Estimated Build Time:
Core AI Manager MVP: 18-30 hours
Full stable system: 50-80 hours
Phases:
Phase 1: Backend AI core + routing (6-10 hours)
Phase 2: Tool execution + modules integration (6-12 hours)
Phase 3: Web integration (4-8 hours)
Phase 4: Mobile integration (4-8 hours)
Phase 5: stabilization + testing (8-12 hours)
Output Principle:
No direct business logic inside controllers
All intelligence inside AI Manager layer
Scalable modular design ready for expansion



KVRAT System Architecture

Client Layer
Web App (Next.js)
Mobile App (Flutter)

↓ API Calls

Backend Layer (NestJS)
API Gateway / Main Server
Auth Module
Users Module
Wallet Module
Media Module
AI Manager Module

↓ Internal Communication

AI Manager Core
Prompt Router
Context Memory Service
Decision Engine
Agent Orchestrator
Tool Executor
Task Scheduler

↓ Executes Actions

Service Layer
Database Service
File Storage Service
External API Service
Notification Service

↓ Data Layer
SQLite (MVP)
PostgreSQL (Scalable Future)

↓ Storage Layer
Local Storage (dev)
Cloud Storage (production)

External Integrations
Payment APIs
AI Models APIs
Media Processing APIs
3rd Party Services

System Flow

User → Web/Mobile → API Gateway → AI Manager → Decision Engine → Tools/Modules → Data/External APIs → Response → User

Key Principle
AI Manager is the brain
Modules are execution tools
Frontend is only interface
Backend is controlled by AI orchestration layer


KVRAT/
├── apps/
│ ├── web/ (Next.js)
│ │ ├── app/
│ │ ├── components/
│ │ ├── src/
│ │ ├── services/
│ │ └── public/
│ │
│ ├── mobile/ (Flutter)
│ │ ├── lib/
│ │ │ ├── core/
│ │ │ ├── features/
│ │ │ ├── services/
│ │ │ └── shared/
│ │ └── assets/
│ │
│ └── backend/ (NestJS)
│ ├── src/
│ │ ├── modules/
│ │ │ ├── auth/
│ │ │ ├── users/
│ │ │ ├── wallet/
│ │ │ ├── media/
│ │ │ └── ai-manager/
│ │ │
│ │ ├── ai-manager/
│ │ │ ├── prompt-router/
│ │ │ ├── context-memory/
│ │ │ ├── decision-engine/
│ │ │ ├── agent-orchestrator/
│ │ │ └── tool-executor/
│ │ │
│ │ ├── common/
│ │ ├── config/
│ │ └── main.ts
│
├── packages/
│ ├── shared-types/
│ ├── ui-kit/
│ └── utils/
│
├── docs/
│ └── architecture.md
│
├── infra/
│ ├── docker/
│ ├── db/
│ └── nginx/
│
└── .env


باك اند




## تقرير حالة مشروع KVRAT (Backend + AI Manager)

---

# 1) ما تم إنجازه فعلياً

## البنية الأساسية

* إنشاء مشروع NestJS Backend كامل
* تشغيل السيرفر بنجاح
* إعداد TypeORM + SQLite (`better-sqlite3`)
* تنظيم Modules بشكل احترافي

## الوحدات (Modules)

تم بناء وربط:

* UsersModule
* AuthModule (JWT + Passport)
* WalletModule
* MediaModule
* AiManagerModule (جديد)

---

## نظام الذكاء الاصطناعي (AI Manager)

تم تنفيذ نظام كامل:

### API

* Endpoint جاهز:

```
POST /ai/route
```

### الوظيفة

* استقبال رسالة من المستخدم
* إرسالها إلى OpenAI
* إرجاع رد AI مع تصنيف module

### التكامل

* OpenAI SDK مثبت ومربوط
* استخدام GPT-4o-mini
* API Key عبر `.env`

---

## DTO + Validation

* AiRequestDto تم إنشاؤه
* class-validator مفعّل

---

## تشغيل النظام

* السيرفر يعمل بنجاح
* حل مشاكل:

  * missing modules
  * missing dotenv
  * port conflicts
  * OpenAI missing key
* تشغيل على منفذ بديل 4001

---

# 2) الوضع الحالي

النظام الآن:

* شغال بدون أخطاء
* API AI يعمل فعلياً
* قادر يستقبل طلبات خارجية
* جاهز للتطوير الفعلي

---

# 3) الأهداف المتبقية (المرحلة القادمة)

## أولاً: AI Manager System (تطوير)

* إضافة Memory قصيرة للـ AI
* إضافة Routing ذكي بين modules
* إضافة أدوات (Tools Calling)

---

## ثانياً: Wallet System

* تحويل wallet logic إلى معاملات حقيقية
* ربط transactions history
* validation + security layer

---

## ثالثاً: Users & Auth

* حماية routes بـ Guards
* Role-based access control
* Refresh token system

---

## رابعاً: Media System

* رفع ملفات فعلي (upload)
* تخزين خارجي (filesystem أو cloud)
* ربط مع AI analysis لاحقاً

---

## خامساً: تحسين المعمارية

* فصل services بشكل أقوى
* إضافة logging system
* إعداد environment config module
* إضافة testing structure

---

## سادساً: الإنتاج (Production Ready)

* Docker setup
* CI/CD pipeline
* env separation (dev / prod)
* security hardening

---

# 4) المرحلة الحالية

أنت الآن في مرحلة:

**Core Backend + AI Gateway مكتمل مبدئياً**

