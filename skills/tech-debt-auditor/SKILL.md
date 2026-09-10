---
name: tech-debt-auditor
description: >-
  Проводить комплексний архітектурний та інженерний аудит кодової бази рівня Enterprise (Fullstack/Frontend/Backend) станом на 2026 рік. Оцінює якість за стандартом ISO/IEC 25010:2023, виявляє класичний технічний борг (N+1, DB locks, race conditions, CWV, BOLA), а також сучасні вектори: агентний борг, стохастичний податок LLM, GIST/AI Slop, когнітивний борг та борг намірів, RSC security leaks, Transactional Outbox/CDC, регуляторні ризики (EAA, CRA/PLD, SBOM) та екологічний борг (ISO/IEC 21031 SCI). Використовувати для «аудит ентерпрайз рівня», «знайди технічний борг у бекенді/фронтенді», «перевір архітектуру на production readiness», «2026 tech debt audit».
---

# Enterprise Architecture & Tech Debt Auditor (2026 Fullstack Taxonomy)

Спеціалізований скіл для проведення глибокого архітектурного, соціотехнічного та регуляторного аудиту кодової бази рівня **Enterprise Production Readiness** (Frontend, Backend, AI/Agentic, Fullstack) за міжнародним стандартом **ISO/IEC 25010:2023** та екологічним стандартом **ISO/IEC 21031:2024 (SCI)**.

> [!NOTE]
> Скіл ігнорує тривіальні речі (форматування, коментарі, видалення яких автоматизовано бандлерами/лінтерами) і фокусується на **високовартісних архітектурних ризиках, AI/агентній крихкості, стохастичному податку, когнітивному навантаженні, правовій відповідності (EAA/CRA) та системній відмовостійкості**.

---

## 🏛️ 1. БЕКЕНД ТА РОЗПОДІЛЕНІ СИСТЕМИ

1. **Бази даних та доступ до даних (Data Access & DB Health):**
   - **N+1 Queries & Unbounded Queries:** неявні цикли в ORM, відсутність cursor/offset пагінації (`SELECT *` без `LIMIT`).
   - **Missing Indexes & Pool Exhaustion:** брак індексів на FK/фільтрах/сортуваннях; вичерпання пулу з'єднань через довгі I/O операції всередині ACID-транзакцій.
2. **Подієво-орієнтовані системи та узгодженість (EDA & Distributed Consistency):**
   - **Dual-Write Problem Debt:** оновлення БД та публікація в брокер (Kafka/RabbitMQ) без атомарності.
   - **Outbox Implementation Debt:** примітивний polling outbox-таблиці замість Change Data Capture (CDC / Debezium) з читанням WAL.
   - **Saga & Compensation Debt:** неповна або помилкова логіка компенсуючих дій при збоях у розподілених транзакціях.
   - **API Contract Drift:** розбіжність між кодом та OpenAPI/AsyncAPI/GraphQL без Consumer-Driven Contract Testing (Pact).
3. **Конкурентність, Стан та Відмовостійкість (Concurrency & Resilience):**
   - **Race Conditions & Lost Updates:** мутації без оптимістичного/песимістичного блокування або атомарних операцій.
   - **Cascading Failures & Timeouts:** відсутність таймаутів, Circuit Breakers, Retry з Exponential Backoff + Jitter на зовнішніх викликах.
   - **Non-Idempotent Mutations:** відсутність Idempotency Keys на критичних операціях (платежі, замовлення).
4. **Enterprise Безпека та Спостережуваність (Security & Observability):**
   - **BOLA / IDOR:** авторизація без перевірки належності об'єкта суб'єкту.
   - **Sensitive Data & Secret Hardcoding:** PII, паролі або API-ключі у логах/репозиторії (ризик CRA/PLD).
   - **Distributed Tracing:** наскрізний `correlation_id` / `trace_id`, OpenTelemetry, Healthchecks (`/health/live` vs `/health/ready`), Graceful Shutdown.

---

## 🎨 2. ФРОНТЕНД ТА КЛІЄНТ-СЕРВЕРНІ МЕЖІ

1. **Core Web Vitals & Навантаження (LCP, INP, CLS):**
   - **Main Thread Blocking (INP):** важкі синхронні обчислення без `useTransition`, Web Workers чи `content-visibility`.
   - **Layout Instability (CLS):** динамічний контент, медіа без зафіксованих aspect-ratio, FOUT.
   - **Waterfall & Bundle Bloat:** каскадні клієнтські запити, імпорт монолітних пакетів замість модульних, брак `React.lazy` / динамічних імпортів.
2. **Мікрофронтенди vs Модульний Моноліт (MFE Debt):**
   - **Dependency Duplication Debt:** дублювання версій фреймворків/бібліотек через невдалу Module Federation.
   - **Remote Entry Waterfall & Shell Fragility:** затримки композиції в runtime, відсутність контрактів між мікрододатками.
   - **UX Drift:** візуальна та поведінкова неузгодженість UI; перевага віддається модульним монолітам (Feature-Sliced Design) з лінтер-бар'єрами.
3. **React Server Components (RSC) & Клієнт-Серверні Межі:**
   - **Security Boundary Leak Debt:** випадковий витік секретів, environment variables або сирих DB-об'єктів через props у клієнтські компоненти (`'use client'`).
   - **RSC Flight Deserialization Risks:** вразливості типу CVE-2025-55182 (React2Shell).
   - **Architectural Mismatch:** використання RSC для read-heavy підходить, але створення милиць замість TanStack Query для частих мутацій/офлайн-станів.
4. **Правовий борг доступності (Accessibility Debt — EAA / WCAG 2.1+ AA):**
   - Брак семантичного HTML, некерований фокус (Focus Trapping) у модалках/меню, відсутність ARIA-станів, неконтрастний UI (прямі регуляторні штрафи за European Accessibility Act).
5. **Відмовостійкість клієнта (Client Resilience):**
   - Гранулярні Error Boundaries, безпечне збереження сесій (`httpOnly`, `SameSite=Strict` cookies замість `localStorage`), Content Security Policy (CSP).

---

## 🤖 3. AI, LLM ТА АГЕНТНИЙ ТЕХНІЧНИЙ БОРГ

1. **Агентний технічний борг (Agentic Technical Debt):**
   - **Борг промптів та контексту:** неструктуровані гігантські промпти, відсутність версіонування системних промптів, неефективний RAG, що деградує контекст.
   - **Tool & Schema Debt:** крихкі JSON-схеми інструментів, брак жорстких контрактів та обробки помилок галюцинацій аргументів.
   - **Борг пам'яті та стану:** відсутність чітких політик збереження/очищення епізодичної пам'яті, використання застарілого стану агентами.
   - **Борг оркестрації:** брак надійних шляхів ескалації (Human-in-the-loop), крихкі послідовні DAG без обробки проміжних відмов.
2. **Стохастичний податок (Stochastic Tax):**
   - Мультиплікація витрат токенів та затримок через нескінченні retries, збої валідації відповідей, брак локальних eval suites / LLM-суддів.
3. **Борг LLM-інтеграцій та залежностей:**
   - **Model Dependency Debt:** надмірна прив'язка логіки парсингу до специфічної поведінки конкретної моделі/версії.
   - **Model-Stack Workaround Debt:** милиці для обходу обмежень контексту, які цементуються в кодовій базі.
4. **Vibe Coding, AI Slop та GIST (GenAI-Induced SATD):**
   - **GIST:** наявність згенерованого коду з коментарями невпевненості розробника (`TODO: check if copilot code works`).
   - **AI Slop & Shadow AI:** надлишковий, правдоподібний, але неперевірений код без тестів, підвищений ризик захардкодcolumn-секретів.

---

## 🧠 4. СОЦІОТЕХНІЧНИЙ БОРГ ТА БОРГ НАМІРІВ

1. **Когнітивний борг (Cognitive Debt):**
   - Ерозія спільного розуміння кодової бази через когнітивну капітуляцію (прийняття ШІ-коду без розуміння «чому»).
   - Низький bus-фактор, параліч онбордингу нових розробників через відсутність пояснення архітектурних мотивів.
2. **Борг намірів (Intent Debt):**
   - Відсутність або застарілість **Architecture Decision Records (ADRs)**, специфікацій та бізнес-обмежень.
   - Ризик дрейфу мети (Goal Drift), коли автономні агенти або нові розробники рефакторять код без знання первинних вимог.

---

## ⚖️ 5. РЕГУЛЯТОРНИЙ, ПРАВОВИЙ ТА ЕКОЛОГІЧНИЙ БОРГ

1. **Борг кіберстійкості (Cyber Resilience Act — CRA & Product Liability Directive — PLD):**
   - Відсутність автоматичної генерації **SBOM** (Software Bill of Materials).
   - Накопичення незакритих CVE в open-source залежностях, за які вендор несе пряму юридичну відповідальність.
2. **Екологічний борг (Software Carbon Intensity — ISO/IEC 21031 SCI):**
   - Неоптимальне навантаження CPU/GPU, надмірний рендеринг на слабких клієнтах замість кешування.
   - Використання важких LLM для детермінованих задач, що призводить до перевитрат енергії та FinOps-бюджету.

---

## 🗺️ 6. Кореляція таксономії з ISO/IEC 25010:2023

| Категорія боргу | Основні прояви | Характеристика ISO/IEC 25010:2023 |
| :--- | :--- | :--- |
| **Когнітивний борг** | Втрата ментальної моделі, низький bus-factor, AI-капітуляція | **Maintainability** (Modifiability, Analysability) |
| **Борг намірів (Intent Debt)** | Відсутність ADRs, дрейф архітектурної мети | **Maintainability**, **Interaction Capability** |
| **GIST & AI Slop** | Неверифікований GenAI код, TODO-сумніви розробників | **Reliability** (Maturity), **Functional Suitability** |
| **Агентний борг** | Крихкі tool schemas, пам'ять, RAG, деградація промптів | **Reliability** (Fault tolerance), **Maintainability** |
| **Стохастичний податок** | Рекурентні перевитрати на retries, evals, токени | **Performance Efficiency** (Resource utilization) |
| **Борг мікрофронтендів** | Дублювання бандлів, розсинхрон UX, runtime waterfalls | **Performance Efficiency**, **Interaction Capability** |
| **RSC Security Leaks** | Витік секретів у props клієнта, CVE десеріалізації | **Security** (Confidentiality, Integrity) |
| **Dual-Write & EDA Debt** | Відсутність CDC/Debezium, ненадійні Sagas | **Reliability** (Fault tolerance, Maturity) |
| **API Contract Drift** | Відсутність Consumer-Driven Contract testing | **Compatibility** (Interoperability) |
| **Accessibility Debt (EAA)** | Порушення WCAG 2.1+ AA, штрафи за регуляцією ЄС | **Interaction Capability** (Inclusivity, Accessibility) |
| **CRA / PLD Debt** | Відсутність SBOM, некеровані вразливості в supply chain | **Security**, **Safety** (Freedom from risk) |
| **Екологічний борг (SCI)** | Нераціональне використання обчислень (ISO/IEC 21031) | **Performance Efficiency** (Resource utilization) |

---

## 📊 Формат підсумкового висновку (Enterprise Readiness Audit 2026)

```markdown
# 🏛️ Enterprise Architecture & Tech Debt Audit (2026 Edition)

### Загальний вердикт: [READY FOR PROD / REQUIRES REMEDIATION / HIGH RISK / REGULATORY NON-COMPLIANT]
### Enterprise Readiness Score: [A / B / C / D / F]

## 1. Критичні архітектурні та правові ризики (P0: Security, Legal/EAA/CRA, Data Loss, Cascading Failures)
| Модуль / Шлях | Категорія боргу (2026) | ISO 25010 Характеристика | Проблема (Root Cause) | Сценарій відмови / Ризик | Рекомендований патерн / Fix |
| :--- | :--- | :--- | :--- | :--- | :--- |

## 2. Агентні системи, Продуктивність та Стохастичний податок (P1: Agentic Debt, DB Locks, CWV, RSC Leaks)
| Модуль | Вектор боргу | Поточний стан (Метрика/Витрата) | Оптимальне архітектурне рішення |
| :--- | :--- | :--- | :--- |

## 3. Соціотехнічний стан та Інженерна зрілість (P2: Cognitive Debt, Intent/ADRs, GIST/AI Slop)
- **Рівень Intent & ADR покриття:** [Повний / Частковий / Відсутній]
- **Оцінка когнітивної безпеки (Bus Factor & Knowledge Distribution):** ...
- **Присутність GIST / AI Slop у коді:** ...

## 4. Матриця усунення боргу (Architectural Remediation Roadmap)
- **Quick Architectural & Legal Wins (< 2-4 год):** виправлення індексів, timeouts, basic a11y focus traps, SBOM generation.
- **Structural Refactoring (Sprint Backlog):** впровадження Transactional Outbox + CDC, декомпозиція MFE/RSC меж, стандартизація схем агентних інструментів, написання ADRs.
- **Strategic Modernization:** впровадження Consumer-Driven Contracts, оптимізація Software Carbon Intensity (SCI), побудова надійних агентних Eval-контурів.
```
