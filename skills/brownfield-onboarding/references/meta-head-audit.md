# Meta & Head Audit Module (Site Metadata, SEO, Social, PWA & Security)

Спеціалізований модуль аудиту мета-тегів для дослідження та перевірки веб-сайтів (особливо актуально для **Brownfield**-проєктів перед рефакторингом або релізом).

---

## 1. Категорії аудиту мета-тегів

### 📋 1. Core & Responsive Meta
- [ ] **Charset & Viewport**: `<meta charset="utf-8">` та `<meta name="viewport" content="width=device-width, initial-scale=1">`.
- [ ] **Color Scheme & Theme Color**: `<meta name="color-scheme" content="light dark">` та `<meta name="theme-color" content="...">` (із підтримкою `media="(prefers-color-scheme: ...)"`).
- [ ] **Format Detection**: `<meta name="format-detection" content="telephone=no">` (запобігання небажаному автоформатуванню номерів/адрес).

---

### 🔍 2. SEO & Crawling
- [ ] **Title & Description**: Унікальний `<title>` (до 60 символів) та `<meta name="description">` (120–160 символів).
- [ ] **Canonical URL**: `<link rel="canonical" href="...">` для уникнення дублікатів сторінок.
- [ ] **Robots Control**: `<meta name="robots" content="index, follow">` (або `noindex, nofollow` для preview/staging середовищ).
- [ ] **Sitemap & RSS/Feed**: Наявність посилань на `sitemap.xml` та автодискавері стрічок, якщо застосовно.

---

### 🖼️ 3. Open Graph (OG) & Social Cards
- [ ] **Essential OG Tags**: `og:title`, `og:description`, `og:url`, `og:type` (`website` / `article`), `og:site_name`.
- [ ] **OG Image Default Policy**:
  - [ ] Обов'язкова наявність `og:image` (1200x630px, співвідношення 1.91:1), `og:image:width`, `og:image:height`, `og:image:alt`.
  - [ ] **Правило генерації за замовчуванням:** Якщо кастомного промо-зображення немає, обов'язково генерувати базовий брендовий блок 1200x630px (SVG або згенерований PNG) з фоновим кольором і контрастною назвою проєкту та описом.
- [ ] **Twitter / X Cards**:
  - [ ] `<meta name="twitter:card" content="summary_large_image">` (або `summary`).
  - [ ] `twitter:title`, `twitter:description`, `twitter:image`.

---

### 📱 4. Favicon Matrix & PWA (App-Ready)
- [ ] **SVG Favicon**: `<link rel="icon" href="/favicon.svg" type="image/svg+xml">` (сучасний векторний стандарт із підтримкою темної теми).
- [ ] **Fallback Favicon**: `<link rel="icon" href="/favicon.ico" sizes="32x32">` (для сумісності зі старими клієнтами).
- [ ] **Apple Touch Icon**: `<link rel="apple-touch-icon" href="/apple-touch-icon.png">` (180x180px).
- [ ] **Web App Manifest (для PWA / Web Apps)**:
  - [ ] `<link rel="manifest" href="/site.webmanifest">`.
  - [ ] Наявність іконок 192x192 та 512x512, `name`, `short_name`, `start_url`, `display: standalone`, `theme_color`, `background_color`.

---

### 🌐 5. i18n & Мультимовність (За потреби сайту)
- [ ] **HTML Lang Attribute**: `<html lang="uk">` (або відповідна мовна локаль).
- [ ] **Hreflang Links**: `<link rel="alternate" hreflang="x-default" href="...">`, `<link rel="alternate" hreflang="en" href="...">` для мультиязичних сайтів.

---

### 🛡️ 6. Security Headers & Meta Policy
- [ ] **Referrer-Policy**: `<meta name="referrer" content="strict-origin-when-cross-origin">`.
- [ ] **Content Security Policy (CSP)**:
  - Рекомендовано передавати через HTTP-заголовки сервера. Якщо сервер статичний/безсерверний — базовий `<meta http-equiv="Content-Security-Policy" content="...">`.
- [ ] **Permissions-Policy**: Заборона доступу до невикористовуваних API (`camera=()`, `microphone=()`, `geolocation=()`).

---

## 🛠️ Протокол виконання аудиту для Brownfield-проєктів

1. **Сканування існуючого `<head>` / Metadata:**
   - Знайди кореневий HTML-шаблон або файл конфігурації:
     - Vite / Static: `index.html`
     - Next.js (App Router): `app/layout.tsx` (експорт `metadata`)
     - Next.js (Pages Router): `pages/_document.tsx` або `pages/_app.tsx`
     - Astro: `src/layouts/*.astro`
     - Remix: `root.tsx`
2. **Звірка з чеклістом:** Зафіксуй відсутні або застарілі теги (наприклад, відсутній `og:image`, відсутній SVG favicon, відсутній `viewport`).
3. **Генерація дефолтних асетів:** За відсутності `og:image` або іконок — автоматично згенерувати дефолтні SVG/PNG заглушки потрібних розмірів із назвою проєкту.
4. **Звіт аудиту:** Додати розділ у вихідний звіт або `implementation_plan.md`.
