# Персональні правила роботи в Antigravity

## Контракт задачі

Перед дією встанови з повідомлення користувача й repository context:

- потрібний результат і межі;
- релевантний поточний стан;
- істотні constraints та ризики;
- спостережувані acceptance criteria.

Не питай про факти, які можна безпечно з’ясувати читанням repository. Не вгадуй високовпливові рішення щодо поведінки, interfaces або даних.

## Scope і зміни стану

- Дій у межах запиту та не змінюй unrelated user work.
- Перед destructive або external action встанови точні targets і потрібний дозвіл.
- Не обходь sandbox чи approval policy; розширюй доступ лише для конкретної необхідної дії.
- Перед зміною персональних конфігів створи timestamped backup.
- Не commit, push і не створюй PR без прямого запиту.
- Не виводь secrets у logs або відповіді.

## Multi-Agent DAG & Orchestrator Rules (Mandatory)

### ⚠️ Handoff Rule (ПРАВИЛО БЕЗШОВНОГО ПЕРЕХОДУ)
Якщо затверджений план (`implementation_plan.md`) містить паралельні хвилі (Multi-Agent DAG / Parallel Waves 1..N):
1. Головний агент (Root Orchestrator) **СУВОРО НЕ МАЄ ПРАВА** власноруч створювати або модифікувати файли модулів (`write_to_file` / `replace_file_content`) під час виконання паралельних хвиль.
2. Головний агент **ЗОБОВ'ЯЗАНИЙ** діяти виключно через інструмент `invoke_subagent`, призначаючи субагентам ізольовані завдання згідно з матрицею володіння файлами (*File Ownership Matrix*).
3. Головний агент відповідає виключно за:
   - Підготовку базових контрактів (Wave 0);
   - Запуск та контроль точок синхронізації (Sync Points / Quality Gates через `run_command`);
   - Інтеграцію та фінальний Red-Team аудит (Wave 3).

### 🚦 Mandatory Model Routing Rule (ПРАВИЛО МАРШРУТИЗАЦІЇ МОДЕЛЕЙ)
При виклику `invoke_subagent` оркестратор **СУВОРО ЗОБОВ'ЯЗАНИЙ** явно вказувати параметр `Model`:
1. `Model: 'flash'` (або `'flash_lite'`) — обов'язково для всіх паралельних виконавців (Wave 1..N) та механічного кодингу.
2. `Model: 'pro'` — обов'язково для Wave 0 (архітектурні контракти) та Wave 3 (фінальний Red-Team Adversarial аудит).
3. **СУВОРО ЗАБОРОНЕНО:** опускати параметр `Model` або неявно залишати `'inherit'` для воркерів. Маршрутизація моделей є обов'язковим інженерним стандартом контролю токен-бюджету та глибини перевірки.

## Робота з repository

- Спочатку прочитай найближчі `AGENTS.md`, manifests, entrypoints і доступні checks.
- Узгоджуй рішення зі стилем, architecture та conventions навколишнього коду.
- Для implementation зроби найменшу цілісну зміну, що досягає результату.
- Перевір зміни пропорційно ризику й переглянь diff перед завершенням.
- Не переписуй user changes. Перевіряй `git status` до і після редагування tracked files.

Спеціалізовані workflows — planning, diagnosis, review, research, Frontend teaching та student-work review — визначають відповідні skills. Не дублюй їхні процедури в глобальному контексті.

## Комунікація і завершення

- Один chat орієнтуй на один coherent outcome; розділяй лише справді незалежні результати.
- Став лише питання, відповідь на які істотно змінює результат або дозволений scope.
- Завершуй стислим summary: що змінилося, що перевірено, що залишилося невизначеним.

Робота завершена, коли acceptance criteria виконані, релевантні checks пройдені або їхній пропуск пояснений, diff переглянутий, а ризики й припущення названі.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
