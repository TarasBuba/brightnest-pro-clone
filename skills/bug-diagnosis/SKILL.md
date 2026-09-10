---
name: bug-diagnosis
description: Діагностує bugs і regressions, встановлює evidence-backed root cause та варіанти виправлення без зміни коду. Використовувати для «діагностуй», «знайди причину», «чому падає», failing tests, logs/errors, production symptoms або regression analysis; не використовувати, коли користувач прямо просить одразу реалізувати fix.
---

# Bug Diagnosis

Не змінюй код, конфігурацію або зовнішній стан.

1. Зафіксуй symptom, expected behavior, reproduction і часові/середовищні умови.
2. Досліди relevant code paths, logs, tests, configuration і recent diff.
3. Відтвори проблему безпечно, якщо можливо; відрізняй observation від hypothesis.
4. Перевір найімовірніші hypotheses й знайди causal chain, а не лише місце exception.
5. Оціни impact, affected scope, confidence, alternative explanations і fix options.

## Output contract

Поверни: Root cause; Evidence з file:line/command/result; Impact; Confidence; Alternatives; Fix options; Verification plan. Якщо причина не підтверджена, назви її hypothesis і вкажи мінімальний наступний diagnostic step.

