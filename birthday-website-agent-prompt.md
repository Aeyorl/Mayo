# 🎂 Birthday Website — AI Agent Build Prompt
> A romantic, sentimental birthday web gift. Single HTML file. No frameworks. Pure love.

---

## 📋 Project Overview

```
Build a romantic, sentimental birthday website for my girlfriend.
It should feel like a personal keepsake — warm, emotional, beautifully designed.
Combine two concepts into ONE seamless single-page experience:

1. A "Love Letter" Website — relationship timeline, reasons I love her, music player
2. An Interactive Photo Memory Book — cinematic scroll with photos, captions, final letter

Deliver as a single self-contained HTML file (HTML + CSS + JS inline).
Host-ready for Vercel or Netlify with zero dependencies.
```

---

## 🎨 Design Direction

```
Aesthetic: Soft indie / bedroom-pop / editorial romantic
Color palette:
  - Background: #FAF6F1 (warm cream)
  - Accent 1:   #E8C4C4 (dusty rose)
  - Accent 2:   #A8B5A2 (muted sage)
  - Text primary:   #2C2C2C (near black)
  - Text secondary: #7A6A6A (warm grey)

Typography:
  - Headings:      Cormorant Garamond (Google Fonts) — elegant, editorial
  - Body:          DM Sans or Lato — clean, readable
  - Accent/quotes: Playfair Display italic

Mood: Unhurried, warm, cinematic. Like flipping through a handmade scrapbook.
Animations: Subtle fade-ins on scroll, soft parallax, no aggressive transitions.
```

---

## 🗂️ Page Structure & Sections

### Section 1 — Hero / Opening
```
- Full viewport height
- Her name in large Cormorant Garamond: "[Her Name]"
- Subtitle: "Happy Birthday, my love." or custom message
- A soft pulsing heart icon or animated rose (CSS only)
- Background: cream with a very subtle radial gradient
- Scroll-down indicator (animated arrow)
```

### Section 2 — Our Story Timeline
```
- Vertical timeline layout
- Each entry has: a DATE, a SHORT TITLE, and a 1–2 sentence memory
- Alternates left/right on desktop, stacks on mobile
- Timeline connector line in dusty rose
- Each card fades in on scroll (Intersection Observer)
- Placeholder entries (swap in real memories):
    • "The Beginning"          — [date]
    • "First time I knew"      — [date]
    • "A day I'll never forget" — [date]
    • "When everything changed" — [date]
    • "Today"                  — May 1, 2025
```

### Section 3 — Photo Memory Book
```
- Cinematic scroll gallery
- Each "page" = one photo + a caption below it
- Photo slots use placeholder images (https://picsum.photos) — swap with real ones
- Captions are short, personal, lowercase — like handwritten notes
- Soft paper/card texture feel for each photo card
- Light drop shadow, slight rotation on cards (±2deg) for scrapbook feel
```

### Section 4 — Reasons I Love You
```
- A list of reasons, each fades in on scroll
- Placeholder reasons (replace with your own):
    "the way you laugh at your own jokes"
    "how you make every room feel warmer"
    "your strength, even when you don't see it"
    "the way you say my name"
    "everything you don't even know about yourself"
- Tone: soft, personal, not cheesy
```

### Section 5 — Music Player
```
- Minimal Spotify iframe embed (supply your playlist URL)
- OR a custom-styled HTML audio player if no Spotify
- Section title: "songs I think of when I think of you"
- Style: vinyl / cassette aesthetic
```

### Section 6 — The Letter
```
- Full-width section, centered, max-width 600px
- Styled like a handwritten letter (Playfair Display italic)
- Placeholder letter template included — replace with your real words
- Ends with: "Happy Birthday, [Her Name]. — [Your Name]"
- Optional: wax seal SVG icon at the bottom
```

### Section 7 — Footer / Closing
```
- Minimal. Just: "Made with love, for you. 🤍"
- Her name + "May 1st" in small elegant type
```

---

## ⚙️ Technical Requirements

```
- Single HTML file. ALL CSS and JS must be inline (no external files).
- Google Fonts loaded via <link> in <head> — allowed.
- Spotify iframe embed allowed.
- No npm, no build tools, no frameworks. Pure HTML/CSS/JS only.
- Fully mobile responsive (375px width minimum).
- Scroll animations via Intersection Observer API (no GSAP, no libraries).
- Placeholder images: https://picsum.photos/600/400?random=N
- All placeholder text clearly marked with: <!-- REPLACE: description -->
- Works via file:// AND when hosted on Vercel/Netlify.
- Output filename: birthday.html
```

---

## ✅ Delivery Checklist

```
[ ] Opens in browser with no errors
[ ] Looks beautiful on mobile AND desktop
[ ] All 7 sections present
[ ] Scroll animations working
[ ] Spotify player section present (placeholder URL ok)
[ ] All placeholder text/images clearly marked for easy swap
[ ] Zero external JS dependencies
[ ] Named: birthday.html
```

---

## 🔁 Follow-Up / Iteration Prompts

Use these after the first draft to refine:

```
"Make the hero section more cinematic — add a soft background
texture and make her name animate in letter by letter on load."

"The timeline feels too plain — add small emoji or icon markers
to each entry and make the cards look more like journal entries."

"Replace all picsum placeholder images with these actual photos:
[paste image URLs or base64]"

"Update the letter section with this actual text: [paste your letter]"

"Add a surprise: when she clicks the heart in the hero section,
confetti rains down using a pure CSS/JS animation."

"Make the memory book feel more like flipping physical pages —
add a page-turn animation between photos."
```

---

## 🗓️ Timeline

| Task | Time Estimate |
|------|--------------|
| Agent builds first draft | ~5 min |
| You personalize names, dates, memories | ~10 min |
| Swap in real photos | ~10 min |
| Add Spotify playlist link | ~2 min |
| Write & paste your letter | ~15 min |
| Deploy to Vercel/Netlify | ~5 min |
| **Total** | **~45 min** |

---

## 🚀 Deployment (Vercel — Free)

```bash
# Option A: Drag & drop
1. Go to vercel.com → New Project
2. Drag birthday.html into the deploy box
3. Get your live URL in 30 seconds

# Option B: CLI
npm i -g vercel
vercel deploy birthday.html
```

---

*Made with intention. For her. 🤍*
