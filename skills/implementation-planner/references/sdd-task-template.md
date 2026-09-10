# SDD Task Specification Template

## 1. Objective & Scope
- **Feature Name:** <Назва фічі>
- **Core Objective:** <Вимірна мета: наприклад, Strict TypeScript збірка без `any`, час TTI < 1с, 100% покриття критичного flow>
- **Out of Scope (Non-Goals):** <Чітко перелічити, що НЕ входить у завдання>

## 2. Measurable Acceptance Criteria (Done When)
- [ ] Критерій 1: <Детермінований показник>
- [ ] Критерій 2: <Детермінований показник>
- [ ] Критерій 3: <Команда валідації: `pnpm verify` завершується з exit code 0>

## 3. Deterministic Quality Gates
```bash
# Команди, які зобов'язані пройти успішно:
pnpm typecheck
pnpm lint
pnpm test
```

## 4. Boundaries & Guardrails
- **Дозволені файли для модифікації:** `src/features/<feature-name>/**`
- **Заборонені для зміни конфіги:** `package.json`, `.env*`, `tsconfig.json` (без прямого дозволу)
- **Token & Iteration Budget:** Максимум 50_000 токенів / 3 спроби виправлення тестів.

---

## 5. Meta & Head Checklist (Site Metadata, SEO, Social, PWA & Security)
*(Обов'язково заповнюється для Frontend / Web-сайтів)*

### 🔍 Базові SEO та Social (Open Graph & X/Twitter)
- [ ] **Title & Description:** Унікальний `<title>` та `<meta name="description">` для сторінок.
- [ ] **Canonical URL:** `<link rel="canonical" href="...">`.
- [ ] **Open Graph (OG):** `og:title`, `og:description`, `og:url`, `og:type`, `og:image` (1200x630px), `og:image:alt`.
- [ ] **Twitter Card:** `<meta name="twitter:card" content="summary_large_image">`, `twitter:title`, `twitter:description`, `twitter:image`.
- [ ] **Default Image Generation Policy:** За відсутності наданих або кастомних медіа — обов'язково автоматично згенерувати дефолтне OG-зображення 1200x630px (SVG або PNG із фоном проєкту, контрастною назвою та описом).

### 📱 Favicons & PWA (залежно від типу проєкту: Static Site vs Web App / PWA)
- [ ] **Тип проєкту:** `[ ] Static Site  [ ] Web App / SPA  [ ] PWA (Offline / Standalone)`
- [ ] **Favicon Matrix:** SVG favicon (`/favicon.svg`), Fallback (`/favicon.ico`), Apple Touch Icon (`/apple-touch-icon.png` 180x180).
- [ ] **PWA Manifest:** `<link rel="manifest" href="/site.webmanifest">` (якщо обрано PWA/Web App) з іконками 192x192 та 512x512, `theme_color`, `background_color`.

### 🌐 & 🛡️ Planning Interview Questions (Виноситься на узгодження з користувачем під час планування):
> 💡 *На етапі створення плану (Planning / `/grill-me`) уточнити у користувача:*
> 1. **i18n & Мультимовність:** Чи планується локалізація кількома мовами? Якщо так:
>    - Чи потрібні `<link rel="alternate" hreflang="..." href="...">` для SEO?
>    - Яка мова є за замовчуванням (`<html lang="...">` / `x-default`)?
> 2. **Security Headers (CSP & Referrer):**
>    - Яка політика Referrer потрібна? (Рекомендовано за замовчуванням: `strict-origin-when-cross-origin`).
>    - Чи потрібен Content-Security-Policy (CSP) мета-тег, чи він контролюється на рівні веб-сервера / CDN (Cloudflare, Nginx, Vercel)?
>    - Чи є сторонні віджети/скрипти (Google Analytics, Stripe, YouTube), які потребують дозволу в CSP?

---

| Хвиля (Wave) | Виконавець / Роль | Model | File Ownership Matrix | Бюджет токенів & ітерацій |
| :--- | :--- | :--- | :--- | :--- |
| **Wave 0** | **Root Orchestrator** | `pro` | `AGENTS.md`, `package.json`, `src/types/` | ~40k токенів / 2 ітерації |
| **Wave 1** | **Subagent 1: Module A** | `flash` | `src/features/module-a/**` | ~30k токенів / макс 3 ітерації |
| **Wave 1** | **Subagent 2: Module B** | `flash` | `src/features/module-b/**` | ~30k токенів / макс 3 ітерації |
| **Wave 2** | **Root Integration** | `pro` / `inherit` | `src/main.ts`, `tests/` | ~30k токенів / 2 ітерації |
| **Wave 3** | **Red-Team Verifier** | `pro` | Read-only аудит | ~40k токенів / 1 прохід |
3. Головний агент відповідає виключно за:
   - Підготовку базових контрактів (Wave 0);
   - Запуск та контроль точок синхронізації (Sync Points / Quality Gates через `run_command`);
   - Інтеграцію та фінальний Red-Team аудит (Wave 3).
