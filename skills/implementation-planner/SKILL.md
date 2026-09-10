---
name: implementation-planner
description: Створює decision-complete плани реалізації та SDD-специфікації з обов'язковою маршрутизацією моделей (flash/pro), вимірними критеріями прийнятності та бюджетами токенів без зміни файлів коду. Використовувати для запитів «сплануй реалізацію», «план перед кодом», «розбий складну фічу», «створи SDD специфікацію», architecture planning, migrations або неоднозначних багатокрокових змін.
---

# Implementation Planner (Spec-Driven Development)

Створює детерміновані, завершені специфікації реалізації (SDD) у форматі `implementation_plan.md` згідно з [sdd-task-template.md](references/sdd-task-template.md) та контрактом [plan-contract.md](references/plan-contract.md).

## 1. Головні правила планування (SDD Doctrine)

1. **Жодних змін коду:** Планувальник виключно досліджує кодову базу і створює артефакт `implementation_plan.md`.
2. **Вимірні Acceptance Criteria:** Кожна вимога повинна бути об'єктивно перевірюваною (`pnpm verify`, 0 `any`, час відгуку, скриншот).
3. **Обов'язкова маршрутизація моделей та бюджети токенів (Model Routing & Token Budgets):**
   - У плані для кожної хвилі/підзадачі ПОВИННА бути явно прописана таблиця з колонками:
     - **Хвиля (Wave)**
     - **Виконавець / Роль**
     - **Модель (`flash` / `pro`)**
     - **File Ownership Matrix (Зона файлів)**
     - **Бюджет токенів та ітерацій (наприклад: `~30k токенів / макс 3 ітерації`)**
   - Хвиля 0 (Контракти/Типи): `Model: 'pro'` (~40k токенів)
   - Хвиля 1..N (Виконавці модулів): `Model: 'flash'` (~30k токенів на воркера)
   - Хвиля 3 (Adversarial Red-Team): `Model: 'pro'` (~40k токенів)
4. **Аналіз та запобігання технічному боргу (`tech-debt-auditor`):**
   - Перед створенням плану вияви існуючий техборг (legacy, security, RSC, missing indexes, cognitive/intent gaps).
   - У плані обов'язково передбачити усунення виявленого боргу або захист від внесення нового (EAA a11y, CRA/SBOM, Idempotency, Transactional Outbox).
5. **Human Approval Gate:** Планувальник виставляє `RequestFeedback: true` і чекає на команду користувача **Proceed** перед передачею плану в оркестратор.
