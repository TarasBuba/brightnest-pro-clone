# 📐 Матриця Enterprise-Аудиту (Frontend & Backend)

## 1. Backend Verification Matrix

| Категорія | Симптоми боргу | Enterprise-патерн / Рішення |
| :--- | :--- | :--- |
| **Data Layer** | N+1 запити, `SELECT *` без `LIMIT`, відсутність FK-індексів | Data Loader патерн, Cursor Pagination, міграції з B-Tree/GIN індексами |
| **Transactions** | I/O (HTTP-запити) всередині DB транзакцій | Outbox Pattern, коротка транзакція лише на зміну стану |
| **Concurrency** | `count = count + 1` у пам'яті сервера | Атомарний `UPDATE ... SET count = count + 1`, Redis distributed lock |
| **Resilience** | Нескінченні очікування зовнішніх сервісів | Специфіковані Timeouts (3-5s), Circuit Breaker (opossum / pybreaker) |
| **Auth & Security** | Відсутність перевірки власника ID (IDOR) | Policy-based Authorization (CASL, Casbin, PBAC), Row-Level Security |

---

## 2. Frontend Verification Matrix

| Категорія | Симптоми боргу | Enterprise-патерн / Рішення |
| :--- | :--- | :--- |
| **CWV / Bundle** | Монолітні імпорти, відсутність code-splitting | Dynamic imports, tree-shakeable утиліти, Image/Media aspect-ratio |
| **State** | Монолітний Context API на 50 полів | Atomic State (Zustand / Jotai), Server State (TanStack Query / SWR) |
| **Resilience** | Білий екран при помилці в одному компоненті | Ізольовані React Error Boundaries з fallback UI та retry кнопкою |
| **Security** | Збереження токенів авторизації в localStorage | `httpOnly`, `SameSite=Lax/Strict` Secure Cookies + CSRF токени |
| **Accessibility** | Кастомні кнопки `<div>` без клавіатури | Semantic HTML (`<button>`), `@radix-ui` / `headlessui` примітиви |
