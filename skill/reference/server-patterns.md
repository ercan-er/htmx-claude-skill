# Server Response Rules

Detect HX-Request header:

if (req.headers['hx-request']) {
    return partial
}

Else:
    return full layout

Never return full HTML layout for HTMX request unless intentional.

# Fragment Architecture

/templates
  layout.html
  index.html
  _partial.html

Fragments should be reusable and isolated.
