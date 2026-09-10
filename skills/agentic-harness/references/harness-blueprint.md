# Polyglot Harness Blueprints (Stack-Agnostic)

Цей документ містить типові шаблони `AGENTS.md` та структуру репозиторіїв для будь-якого обраного стеку.

---

## 1. Загальна концепція репозиторію
Незалежно від мови, будь-який репозиторій з якісним harness містить:
```text
my-project/
├── AGENTS.md                 # Головний контракт для AI-агентів (стек, команди, правила)
├── <маніфест проєкту>        # package.json / pyproject.toml / Cargo.toml / go.mod
└── <код та тести>            # src/ або app/, tests/
```

---

## 2. Шаблон AGENTS.md для Node.js / TypeScript (Frontend, Backend, Fullstack)

```markdown
# AGENTS.md — [Project Name]

## 1. Стек та Архітектура
- **Runtime:** Node.js 22 LTS / Bun / Browser
- **Language:** TypeScript 5.8+ (Strict mode, zero explicit `any`)
- **Framework:** React / Vue / Fastify / Next.js / Astro
- **Package Manager:** `pnpm`

## 2. Ключові команди
- `pnpm dev` — запуск у режимі розробки
- `pnpm build` — компіляція / збірка
- `pnpm typecheck` — сувора перевірка типів
- `pnpm lint` — статичний аналіз коду
- `pnpm test` — запуск юніт/інтеграційних тестів
- `pnpm verify` — єдиний детермінований гейт готовності (`pnpm typecheck && pnpm lint && pnpm test && pnpm build`)

## 3. Правила та Guardrails
- **Zero any:** Заборонено використання `any` без обґрунтування.
- **Evidence-first:** Зміни обов'язково покриваються тестами.
- **Handoff Rule:** Паралельні задачі виконуються ізольованими сабагентами згідно з File Ownership Matrix.
```

---

## 3. Шаблон AGENTS.md для Python (FastAPI / Django / CLI / ML)

```markdown
# AGENTS.md — [Project Name]

## 1. Стек та Архітектура
- **Runtime:** Python 3.12+
- **Framework:** FastAPI / Django / Litestar / Pydantic v2
- **Package Manager / Environment:** `uv` / `poetry`
- **Typing:** Strict typing (mypy / pyright)

## 2. Ключові команди
- `uv run uvicorn src.main:app --reload` — запуск бекенду
- `uv run ruff check .` — лінтинг коду
- `uv run ruff format --check .` — перевірка форматування
- `uv run mypy --strict .` — сувора статична типізація
- `uv run pytest -v` — запуск тестів
- `uv run verify` (або `uv run ruff check . && uv run mypy --strict . && uv run pytest`) — детермінований Quality Gate

## 3. Правила та Guardrails
- **Type Annotations:** Обов'язкова типізація всіх функцій, аргументів та повернених значень.
- **Pydantic Validation:** Використання Pydantic models для валідації DTO / API схем.
- **Async/Await:** Не блокувати event loop синхронними викликами (I/O, DB, HTTP).
- **Handoff Rule:** Паралельні сервіси/роутери пишуться в ізольованих гілках.
```

---

## 4. Шаблон AGENTS.md для Rust (Axum / Actix / CLI)

```markdown
# AGENTS.md — [Project Name]

## 1. Стек та Архітектура
- **Runtime:** Rust (2024 / 2021 Edition)
- **Framework:** Axum / Tokio / Serde / SQLx
- **Build System:** `cargo`

## 2. Ключові команди
- `cargo run` — локальний запуск
- `cargo check` — швидка перевірка синтаксису
- `cargo clippy -- -D warnings` — суворий лінтинг (усі warnings як errors)
- `cargo test` — запуск юніт та інтеграційних тестів
- `cargo verify` (або `cargo check && cargo clippy -- -D warnings && cargo test`) — Quality Gate

## 3. Правила та Guardrails
- **Safe Rust:** Заборонено `unsafe` блоки без попереднього погодження.
- **Error Handling:** Використання `Result<T, E>` / `thiserror` замість `unwrap()` у продакшн коді.
```

---

## 5. Шаблон AGENTS.md для Go (Golang)

```markdown
# AGENTS.md — [Project Name]

## 1. Стек та Архітектура
- **Runtime:** Go 1.23+
- **Framework:** Gin / Fiber / Chi / standard library `net/http`
- **Module:** go.mod

## 2. Ключові команди
- `go run ./cmd/server` — запуск сервера
- `golangci-lint run` — повний статичний аналіз
- `go test -v -race ./...` — тести з детектором гонитви (race detector)
- `go verify` (або `golangci-lint run && go test -v -race ./...`) — Quality Gate
```
