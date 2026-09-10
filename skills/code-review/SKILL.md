---
name: code-review
description: Перевіряє working tree, diff або commit на correctness, regressions, security, data loss, compatibility і test gaps; виконує Red-Team Adversarial перевірку; ранжує actionable findings за severity з точними locations. Використовувати для «зроби code review», «перевір diff/commit», «review PR», «знайди ризики у змінах», «red-team review» або review проти spec/base branch.
---

# Code Review & Red-Team Adversarial Verifier

Проведи read-only review. Не виправляй findings без окремого запиту.

1. Встанови target і baseline; прочитай relevant instructions та intended behavior.
2. Переглянь повний diff і достатній surrounding code, tests та callers.
3. **Red-Team Adversarial Mode:** Якщо проводиться фінальний гейт перед релізом чи злиттям, застосуй протокол [red-team-adversarial-gate.md](references/red-team-adversarial-gate.md) — навмисно шукай, що зламано, граничні випадки, витоки пам'яті, security та false assumptions.
4. Шукай відтворювані defects: correctness, security, data loss, concurrency, compatibility, error handling, regression ризики та missing tests.
5. Оціни **Blast Radius** (межі впливу змін на решту системи).
6. **2026 Tech Debt & Regulatory Gate:** Перевір відсутність нового технічного боргу за таксономією `tech-debt-auditor` (GIST/AI slop коментарі, RSC props security leaks, порушення a11y за EAA, відсутність таймаутів/ідемпотентності, відсутність ADR при зміні архітектури).
7. Не повідомляй style-only зауваження, якщо вони не створюють реального ризику.
8. Перевір кожен finding: precise location, triggering scenario, impact і actionable remedy.
9. **Circuit Breaker:** Якщо знайдено Critical/High дефекти після повторної спроби автовиправлення іншим агентом — вимагай ескалації до людини з детальним описом збою.

## Severity

- **Critical:** compromise, незворотна data loss або системна недоступність.
- **High:** імовірний серйозний production defect без простого обходу.
- **Medium:** реальний defect в обмеженому сценарії або істотна regression risk.
- **Low:** невеликий correctness/maintainability ризик із конкретним наслідком.

## Output contract

Спочатку фінальний вердикт: **VERDICT: PASS / FAIL**.
Потім findings у severity order: `[Severity] Title — file:line`, потім scenario, impact, blast radius і recommendation. Після них дай короткий summary і testing gaps. Якщо findings немає, скажи це прямо та назви residual risks.

