---
name: designer
description: 'Design workflow for Future Leader pages. Use when creating or updating UI, layout, typography, colors, and components. Reads project identity assets in docs/identity and applies those design guidelines consistently, including Czech copy with diacritics for public content.'
argument-hint: 'Describe the page/section and design goal'
user-invocable: true
---

# Designer Skill

Designs and refines UI in this repository using the project identity direction.

## When To Use
- Creating a new page or section design
- Restyling existing components or layouts
- Choosing colors, spacing, typography, and visual hierarchy
- Aligning UI with brand assets in `docs/identity`

## Required Inputs
- Target file(s) or route(s)
- User intent (what should feel different)
- Any provided content or constraints

## Procedure
1. Review identity assets and references listed in [identity guidelines](./references/identity-guidelines.md).
2. Inspect the target page/component and nearby CSS Modules.
3. Preserve existing architecture (atoms/molecules/organisms/templates) unless change is requested.
4. Apply identity-driven decisions for:
- Palette and contrast
- Spacing rhythm and composition
- Section hierarchy and card styling
- Decorative motifs inspired by identity assets
5. Keep public-facing copy in Czech with diacritics.
6. Verify responsive behavior on desktop and mobile breakpoints.
7. Run error checks on modified files.

## Output Rules
- Prefer minimal, focused edits over broad refactors.
- Reuse existing components where possible.
- Keep styles page-scoped (`*.module.css`) unless shared style is clearly needed.
- Avoid introducing a visual style that conflicts with `docs/identity` assets.

## References
- [Identity guidelines](./references/identity-guidelines.md)
