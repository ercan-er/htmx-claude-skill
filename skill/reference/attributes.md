# HTMX Attributes

## Core Request Attributes

- hx-get
- hx-post
- hx-put
- hx-patch
- hx-delete

Best Practice:
Server must return HTML fragments.

## Targeting

### hx-target

Always be explicit when replacing content.

Good:
hx-target="#todo-list"

Bad:
Replacing entire layout container.

## History

- hx-push-url
- hx-replace-url
- hx-history-elt

Always preserve navigation consistency.

## Other Important Attributes

- hx-boost
- hx-confirm
- hx-include
- hx-vals
- hx-indicator
- hx-disabled-elt
- hx-select
- hx-select-oob
- hx-headers

Use attributes before writing JS.
