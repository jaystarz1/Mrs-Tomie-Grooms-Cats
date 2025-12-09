# Mrs. Tomei Grooms Cats - Claude Instructions

## MANDATORY FIRST STEPS FOR ANY NEW SESSION

**Before doing ANYTHING with this project, read these files IN ORDER:**

1. **`session_log.yaml`** - PRIMARY HARNESS: Current state, pending tasks, branding guide, user preferences
2. **`WEBSITE-BUILD-PROCESS.yaml`** - Process tracking and replication notes
3. **`index.html`** - Current live site (if making changes)

**After completing work, UPDATE `session_log.yaml`:**
- Update `current_state` section with what changed
- Add entry to `session_history` with summary
- Update `pending_tasks` (remove completed, add new)
- Log any new issues in `known_issues`

This harness system enables continuity across Claude sessions. Don't skip this.

**Reference:** Based on https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents

---

## Project Overview

**Client:** Mrs. Tomei
**Business:** Professional Cat Grooming (CFMG Certified)
**Domain Target:** mrstomeigroomscats.ca
**Staging URL:** https://jaystarz1.github.io/Mrs-Tomie-Grooms-Cats/
**Industry:** Pet Services - Cat Grooming
**Locations:**
- Primary: East York/Toronto, ON
- Secondary: Windsor, ON

---

## Branding Guide

### Colors
```css
--primary: #7B2D8E;        /* Main purple */
--primary-dark: #4A1259;   /* Dark purple (header, footer) */
--primary-light: #9B4DB8;  /* Light purple (hover states) */
--primary-pale: #E8D4ED;   /* Very light purple (backgrounds) */
--accent: #D4A84B;         /* Gold accent (CTAs, highlights) */
--text-dark: #333;         /* Body text */
--text-light: #666;        /* Secondary text */
--white: #ffffff;          /* Backgrounds, text on dark */
```

### Typography
```css
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
```

### Visual Identity
- **Logo:** Text-based "Mrs. Tomei Grooms Cats" with CFMG badge
- **Credential Badge:** CFMG (Certified Feline Master Groomer) - prominently displayed
- **Imagery:** Real cat grooming photos from Facebook page
- **Tone:** Professional, caring, expert, cat-focused

### Button Styles
```css
/* Primary CTA */
background: linear-gradient(135deg, var(--primary), var(--primary-light));
color: white;
border-radius: 30px;

/* Gold Accent (Book Now) */
background: linear-gradient(135deg, #D4A84B, #E8C66B);
color: #333;
```

---

## Folder Structure

```
mrstomei-grooming/
├── CLAUDE.md              # YOU ARE HERE - orchestrator
├── session_log.yaml       # PRIMARY HARNESS - read first, update last
├── WEBSITE-BUILD-PROCESS.yaml  # Process tracking for replication
├── index.html             # Main single-page website
├── css/
│   └── style.css          # All styles
├── images/                # Cat grooming photos (from Facebook)
├── llms.txt              # AI crawler discovery file
├── robots.txt            # Search engine directives
├── sitemap.xml           # XML sitemap
└── [future pages]         # Multi-page expansion planned
```

---

## Quick Reference

### Business Info (NAP)
- **Name:** Mrs. Tomei Grooms Cats
- **Phone:** (416) 270-1884
- **Email:** bellasalsera@hotmail.com
- **Address:** East York, Toronto, ON (exact address private)

### Service Pricing
| Service | Toronto | Windsor |
|---------|---------|---------|
| Standard Groom | $65 | $55 |
| Lion Cut | $85 | $75 |
| Nail Trim | $25 | $25 |
| Bath & Brush | $55 | $45 |
| Dematting | $45+ | $35+ |
| Sanitary Trim | $35 | $30 |

### Key Differentiators
- CFMG (Certified Feline Master Groomer) - highest certification
- Cat-only specialist (no dogs)
- Stress-free grooming environment
- Two locations serving GTA and Windsor areas

---

## Quick Tasks

### "Check site status"
→ Visit https://jaystarz1.github.io/Mrs-Tomie-Grooms-Cats/

### "Update content"
→ Edit `index.html`, commit, push to GitHub

### "Add new page"
1. Use index.html as template base
2. Follow branding guide colors
3. Include schema markup
4. Update sitemap.xml
5. Update session_log.yaml

### "Check SEO/Schema"
→ Use Google Rich Results Test or Schema.org validator

---

## SEO/GEO Implementation Status

### Completed (Dec 9, 2025)
- [x] Title tag with location keywords
- [x] Meta description optimized
- [x] Canonical URL
- [x] Open Graph tags (full set)
- [x] Twitter Card tags
- [x] Geographic meta tags (geo.region, geo.position, ICBM)
- [x] Schema.org JSON-LD:
  - LocalBusiness
  - Service (OfferCatalog)
  - GeoCoordinates
  - WebSite
  - WebPage
  - FAQPage
  - areaServed
- [x] llms.txt for AI crawlers
- [x] robots.txt allowing AI bots
- [x] sitemap.xml
- [x] Google Map embed (proximal location)

### Pending
- [ ] Multi-page expansion
- [ ] CFMG explanation page
- [ ] Local business directory pages

---

## Multi-Page Expansion Plan

### Proposed Pages
1. **`/cfmg.html`** - What is CFMG certification, why it matters
2. **`/toronto.html`** - Toronto/East York location page
3. **`/windsor.html`** - Windsor location page
4. **`/gallery.html`** - Expanded photo gallery
5. **`/services.html`** - Detailed service descriptions
6. **`/local-cat-services-toronto.html`** - Directory of cat businesses
7. **`/local-cat-services-windsor.html`** - Directory of cat businesses

### Directory Pages Content
- Cat groomers in the area
- Cat-specialized veterinarians
- Cat supply stores
- Cat cafes
- Pet sitting services (cat-only)

---

## DO NOT

- Use the exact street address publicly (privacy)
- Remove CFMG credential mentions (key differentiator)
- Break the purple color scheme
- Remove schema markup
- Skip updating session_log.yaml after changes

---

## Deployment

**Platform:** GitHub Pages
**Repo:** https://github.com/jaystarz1/Mrs-Tomie-Grooms-Cats
**Auto-deploy:** Yes (on push to main)

```bash
# Deploy changes
git add .
git commit -m "Description of changes"
git push
```

---

## Contact

**Client:** Mrs. Tomei
**Phone:** (416) 270-1884
**Email:** bellasalsera@hotmail.com

---

**Last Updated:** December 9, 2025
