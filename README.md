# HTMX Expert Skill

> Stop building CRUD apps like it's 2018.

A strict, production-grade HTMX skill for Claude, Cursor and Codex.

This skill enforces:

- HTML-over-the-wire architecture
- Server-driven UI
- Fragment-based rendering
- Correct swap strategies
- Progressive enhancement
- Security-first mindset
- Anti-SPA discipline

If you are serious about HTMX, this is not optional.

---

# Why This Exists

Most AI-generated HTMX code:

- Returns JSON ❌
- Rebuilds DOM manually ❌
- Mimics React patterns ❌
- Ignores swap strategies ❌
- Breaks browser history ❌

This skill fixes that.

It forces AI to think like a server-driven architect.

---

# What Makes This Different?

Unlike generic HTMX snippets, this skill:

✔ Enforces HTML-over-the-wire  
✔ Prevents SPA anti-patterns  
✔ Designs fragment architecture  
✔ Uses OOB swaps correctly  
✔ Handles validation properly  
✔ Maintains browser history  
✔ Mentions CSRF and security  
✔ Includes production performance advice  

This is opinionated on purpose.

---

# Who Is This For?

- SaaS founders
- Backend-heavy teams
- Internal tool builders
- Admin panel developers
- Teams migrating away from SPA
- Engineers tired of unnecessary frontend complexity

---

# Who Should NOT Use This?

- Canvas-heavy apps
- WebGL apps
- Offline-first SPA
- Complex client-side state apps

This skill is server-first.

---

# Included

- Core HTMX Expert Skill
- Enterprise Strict Version
- Express + HTMX Production Demo
- Real-world patterns
- Anti-pattern enforcement
- Test suite
- Semantic versioning
- Release workflow

---

# Example: Correct HTMX CRUD

Instead of:

```js
fetch("/todos")
  .then(res => res.json())
  .then(data => buildDOM(data))
