# Red-Team Adversarial Quality Gate

## Ментальна модель Red-Team
Ревізор у режимі Red-Team **структурно не може просто погодитися** зі змінами без спроби знайти вразливості або приховані баги. Його мета — знайти, що саме зламається при реальних навантаженнях, крайніх вхідних даних або збоях мережі.

## Чекліст перевірки:

1. **Adversarial Edge Cases & Fuzzing:**
   - Що станеться при `null`, `undefined`, пустому рядку, масиві на 100k елементів, невалідному JSON?
   - Чи обробляються помилки мережі (timeout, 500, network offline)?
2. **Security & Injection:**
   - Чи немає XSS, SQL/NoSQL injection, витоку секретів у консоль або лог?
   - Чи валідуються вхідні дані на рівні схеми (Zod/Valibot/типізація)?
3. **Concurrency & Race Conditions:**
   - Чи безпечний стан при одночасних асинхронних викликах?
   - Чи відміняються попередні запити при зміні параметрів (AbortController)?
4. **Memory Leaks & Performance:**
   - Чи очищаються event listeners, timers, web sockets, subscriptions?
5. **Blast Radius Analysis:**
   - Які інші модулі імпортують змінені файли? Чи немає ламаючих змін в інтерфейсах (breaking changes)?
6. **2026 Enterprise Tech Debt & Regulatory Check (`tech-debt-auditor`):**
   - **GIST / AI Slop:** чи немає залишених невпевнених коментарів (`TODO: verify ai code`), непротестованих галюцинованих функцій або захардкодcolumn-секретів?
   - **RSC Security Boundary:** чи не витікають секрети/DB-об'єкти через пропси клієнтських компонентів (`'use client'`)?
   - **Legal a11y (EAA / WCAG 2.1+ AA):** чи реалізовано коректний focus management та ARIA для інтерактивних елементів?
   - **Web Meta & Social Compliance:** чи наявні обов'язкові meta-теги, favicon matrix, valid og:image (чи є згенерований дефолтний банер), чи немає дублікатів canonical?
   - **Backend Outbox & Resilience:** чи не з'явився dual-write або мутації без таймаутів/ідемпотентності?
   - **Cognitive & Intent:** чи зафіксовано архітектурні рішення (ADR), якщо змінено структуру чи контракти?

## Критерій вердикту:
- **`FAIL`**: знайдено щонайменше 1 дефект рівня Critical або High, блокуючий техборг (EAA/CRA порушення, витік секретів RSC, GIST без тестів), або відсутні обов'язкові тести на змінену бізнес-логіку.
- **`PASS`**: відсутні дефекти Critical/High, усі тести проходять, техборг перевірено, blast radius підтверджено безпечним.
