# Базовий plan contract

План має бути decision-complete: інший implementer може виконати його без прихованих product або architecture рішень.

Обов’язково встанови:

- outcome, audience, scope, constraints і acceptance criteria;
- підтверджений current state та істотні assumptions;
- обраний approach, components, interfaces і data/state flow;
- compatibility, migration або rollout/rollback, якщо застосовно;
- edge cases, failure modes і safety boundaries;
- automated checks, manual scenarios і відповідність кожного acceptance criterion конкретній перевірці.

Для UI-планів окремо визнач automated checks, browser acceptance і human visual acceptance. Production build може підтверджувати компіляцію та packaging, але не є доказом коректного рендерингу CSS.

Readiness gate не пройдено, якщо лишилися невирішені високовпливові питання щодо scope, поведінки, interfaces, data handling, migration або acceptance criteria. Явно познач такі питання як blockers; не передавай їх implementer-у як неявний вибір.

Repository `PLANS.md`, якщо він існує, може додавати локальні поля або суворіші вимоги, але не є залежністю цього contract.
