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
- Ask about HTMX patterns
- Build server-driven UIs
- Work with HTML fragments
- Implement progressive enhancement

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

Check out the pattern examples in `examples/patterns/`:
- `infinite-scroll.html` - Lazy loading with intersection observer
- `inline-edit.html` - Edit-in-place pattern
- `modal.html` - Modal dialogs with HTMX
- `live-search.html` - Debounced search

---

# Project Structure

```
htmx-skill/
├── SKILL.md              # Core HTMX skill
├── ENTERPRISE.SKILL.md   # Enterprise patterns
├── examples/
│   ├── express-demo/     # Full Express.js demo
│   └── patterns/         # Pattern examples
├── tests/                # Validation tests
└── .github/workflows/    # CI/CD
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
