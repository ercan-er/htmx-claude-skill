# HTMX Expert Skill v2

> Stop building CRUD apps like it's 2018.

A modular, AI-optimized, production-grade HTMX skill for Claude, Cursor and Codex.

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

- **Modular skill layout:** core rules (`skill/skills.md`), activation (`skill/activation.md`), reference docs (`skill/reference/`)
- Reference: attributes, triggers, swap, events, server-patterns, validation, security, performance, headers, anti-patterns
- Enterprise Strict Version (`ENTERPRISE.SKILL.md`)
- Express + HTMX Production Demo
- Real-world patterns
- Anti-pattern enforcement
- Test suite
- Semantic versioning
- Release workflow

---

# Installation

## For Cursor

1. Copy the skill files to your Cursor skills directory:
   ```bash
   cp -r . ~/.cursor/skills/htmx-expert/
   ```

2. Or install via npm (when published):
   ```bash
   npm install -g htmx-skill
   ```

## For Codex

1. Copy the skill files to your Codex skills directory:
   ```bash
   cp -r . $CODEX_HOME/skills/htmx-expert/
   ```

---

# Usage

The skill automatically activates when you:
- Use or ask about `hx-` attributes and HTMX patterns
- Build server-driven UIs and CRUD with minimal JS
- Work with HTML fragments, HX-Request, or partial templates
- Migrate from React/Vue to HTMX or implement progressive enhancement

See [skill/activation.md](skill/activation.md) for full activation rules.

---

# Example: Correct HTMX CRUD

Instead of:

```js
fetch("/todos")
  .then(res => res.json())
  .then(data => buildDOM(data))
```

Do this:

```html
<div id="todo-list" 
     hx-get="/todos"
     hx-trigger="load">
  <!-- Server returns HTML fragments -->
</div>
```

```javascript
// Server returns HTML, not JSON
app.get('/todos', (req, res) => {
  res.render('_todo_list', { todos });
});
```

---

# Quick Start

## Run the Express Demo

```bash
cd examples/express-demo
npm install
npm start
```

Visit `http://localhost:3000` to see HTMX in action.

## Explore Patterns

Check out the pattern examples in `examples/` (e.g. `examples/express-demo/`). For detailed attribute, swap, and server guidance see `skill/reference/`.

---

# Project Structure

```
htmx-skill/
├── SKILL.md                 # Entry point → skill/skills.md
├── ENTERPRISE.SKILL.md      # Enterprise patterns
├── skill/
│   ├── skills.md            # Core HTMX expert (rules, activation context)
│   ├── activation.md        # When to activate this skill
│   └── reference/           # Detailed reference docs
│       ├── attributes.md
│       ├── triggers.md
│       ├── swap.md
│       ├── events.md
│       ├── server-patterns.md
│       ├── validation.md
│       ├── security.md
│       ├── performance.md
│       ├── headers.md
│       └── anti-patterns.md
├── examples/                # Express demo, pattern examples
├── tests/                   # Validation tests
└── .github/workflows/       # CI/CD
```

---

# Testing

Run the test suite:

```bash
npm test
```

This validates:
- Skill file format compliance
- Example file structure
- HTMX pattern correctness

---

# Contributing

Contributions welcome! Please ensure:
- Skills follow the format guidelines
- Examples demonstrate correct HTMX patterns
- Tests pass before submitting PRs

---

# License

MIT License - see [LICENSE](LICENSE) file

---

# Related Resources

- [HTMX Documentation](https://htmx.org/docs/)
- [HTMX Examples](https://htmx.org/examples/)
- [HTMX GitHub](https://github.com/bigskysoftware/htmx)
