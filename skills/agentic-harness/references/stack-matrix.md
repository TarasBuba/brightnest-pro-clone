# 🌐 Поліглотна матриця стеків (Stack Discovery & Matrix)

Цей документ визначає стандарти команди `verify`, статичного аналізу, суворої типізації та структури `AGENTS.md` для будь-якого стеку (Frontend, Backend, Fullstack, CLI).

---

## 1. Frontend Стеки

| Стек / Фреймворк | Менеджер | Команда Dev | Linter & Formatter | Typecheck | Команда Verify |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **React / Vue / Svelte / Vite** | `pnpm` / `bun` | `pnpm dev` | `eslint` / `oxlint` + `prettier` | `tsc --noEmit` | `pnpm typecheck && pnpm lint && pnpm test && pnpm build` |
| **Astro (SSG / SSR)** | `pnpm` | `pnpm dev` | `eslint` + `prettier` | `astro check` | `pnpm astro check && pnpm lint && pnpm test && pnpm build` |
| **Next.js / Nuxt / Remix** | `pnpm` | `pnpm dev` | `oxlint` / `eslint` | `tsc --noEmit` | `pnpm typecheck && pnpm lint && pnpm test && pnpm build` |

---

## 2. Backend Стеки

| Мова / Рантайм | Фреймворк | Package / Build Tool | Typecheck & Lint | Unit & Integration Test | Команда Verify |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Python 3.12+** | FastAPI / Django / Flask / Litestar | `uv` / `poetry` | `ruff check .` + `mypy --strict .` | `pytest -v --cov` | `uv run ruff check && uv run mypy --strict . && uv run pytest` |
| **Node.js / TS** | Fastify / NestJS / Express / Hono | `pnpm` / `bun` | `oxlint` / `eslint` + `tsc --noEmit` | `vitest run` / `jest` | `pnpm typecheck && pnpm lint && pnpm test` |
| **Rust** | Axum / Actix-web / CLI | `cargo` | `cargo clippy -- -D warnings` | `cargo test` | `cargo check && cargo clippy -- -D warnings && cargo test` |
| **Go (Golang)** | Gin / Fiber / Chi / stdlib | `go` (go.mod) | `golangci-lint run` | `go test -v ./... -race` | `golangci-lint run && go test -v ./... -race` |
| **C# / .NET 9** | ASP.NET Core / Web API | `dotnet` | `dotnet format --verify-no-changes` | `dotnet test` | `dotnet build && dotnet format --verify-no-changes && dotnet test` |
| **Java / Kotlin** | Spring Boot / Micronaut / Ktor | `gradle` / `maven` | Spotless / Checkstyle / ktlint | `gradle test` / `mvn test` | `./gradlew check test` / `mvn verify` |

---

## 3. Fullstack & Monorepo

| Конфігурація | Інструмент оркестрації | Детермінований Quality Gate |
| :--- | :--- | :--- |
| **Next.js / Nuxt Fullstack** | `pnpm` | `pnpm verify` (typecheck + lint + test:unit + test:e2e + build) |
| **Monorepo (TS Front + Python Back)** | `pnpm` + `uv` | Root script: `pnpm verify:all` (запускає JS-гейти та Python `uv run pytest`) |
| **Monorepo (Turborepo / Nx)** | `turbo` / `nx` | `pnpm turbo run verify` |
| **Rust Backend + React Frontend** | `cargo` + `pnpm` | Root script / Makefile: `cargo test && pnpm --prefix web verify` |

---

## 4. Протокол опитування стеку (Stack Discovery Interview)

Якщо в запиті користувача або в поточному каталозі стек не визначено однозначно, агент зобов'язаний запитати:
1. **Тип архітектури:** Frontend-only, Backend API, Fullstack-моноліт, Microservice, CLI/Script.
2. **Основна мова та версія:** (TypeScript, Python, Rust, Go, C#, Java тощо).
3. **Фреймворк:** (FastAPI, React, Axum, Astro, Gin, Next.js, Fastify тощо).
4. **Менеджер пакетів:** (`pnpm`, `uv`, `cargo`, `go`, `poetry`, `bun`, `dotnet`).
5. **База даних / Кеш (якщо є):** PostgreSQL, SQLite, Redis, IndexedDB, MongoDB, Memory.
6. **Тестовий фреймворк:** (Vitest, Pytest, Cargo test, Go test, Playwright).
