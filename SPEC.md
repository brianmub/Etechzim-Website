Build a complete, modern, dark-themed marketing website for eTechZim PVT LTD,
a technology company based in Harare, Zimbabwe.

=======================================================================
TECH STACK
=======================================================================
- React + Vite (or plain HTML/CSS/JS if no framework preferred)
- Tailwind CSS for utility styling
- Framer Motion for animations (or CSS animations if no framework)
- No backend required — static site only
- Google Fonts: Syne (headings) + DM Sans (body)

=======================================================================
BRAND & VISUAL IDENTITY
=======================================================================
Color palette:
  --bg:       #060810   (page background)
  --bg2:      #0c0f1a   (section/card background)
  --bg3:      #111525   (elevated cards)
  --accent:   #00d4ff   (primary cyan — CTAs, highlights, borders)
  --accent2:  #0066ff   (secondary blue — gradients)
  --accent3:  #7c3aed   (purple — accents, tags)
  --text:     #f0f4ff   (primary text)
  --muted:    #7a8bb0   (secondary text)
  --border:   rgba(0,212,255,0.12)

Typography:
  Headings — Syne, weight 700–800, tight letter-spacing (-0.03em to -0.04em)
  Body — DM Sans, weight 300–500, line-height 1.6–1.75

Global background: subtle grid overlay using CSS — 60px grid lines at
rgba(0,212,255,0.03) in both directions, fixed position, pointer-events none.

Aesthetic: sleek dark futuristic tech — similar to Linear, Vercel, Resend.
No gradients on text except hero h1. Minimal but premium. Lots of breathing room.

=======================================================================
LAYOUT & NAVIGATION
=======================================================================
Fixed top navigation bar:
  - Height: 70px
  - Background: rgba(6,8,16,0.85) with backdrop-filter blur(20px)
  - Bottom border: 1px solid var(--border)
  - Logo: "eTechZim" with "Tech" in --accent color, Syne font, 800 weight
  - Nav links: Services | About | Products | PC Builder (smooth scroll anchors)
  - CTA button: "Get in touch" — filled --accent background, black text,
    rounded, links to #contact section
  - Mobile: hide nav links, show hamburger menu that opens a slide-in drawer

=======================================================================
SECTION 1 — HERO
=======================================================================
Full viewport height section.

Content (left-aligned, max-width 780px):
  - Badge pill: pulsing cyan dot + "Zimbabwe's Tech Innovation Partner"
    (uppercase, letter-spaced, cyan border pill)
  - H1 (3 lines):
      "Future-Ready"
      "Technology"   ← this word gets gradient text (cyan→blue)
      "Solutions"
  - Subheading: "eTechZim PVT LTD delivers cutting-edge technology — from
    AI services and holographic displays to custom computing infrastructure
    — built for Zimbabwe and beyond."
  - Two CTA buttons: "Explore Services →" (filled) + "Talk to us" (outline)
  - Stats row (separated by top border, 3 stats):
      6+ / Technology verticals
      100% / Local expertise
      24/7 / Technical support

Right side: floating animated SVG circuit diagram (float up/down animation,
6s ease infinite). Circuit has:
  - 3 concentric circles (dashed outer, solid middle, dashed inner)
  - 6 node dots on the outer ring
  - Lines connecting nodes to inner ring
  - Animated data packet dots travelling along the lines
  - Labels at each node: AI SERVICES, HOLOGRAM, NETWORK, SOFTWARE, HARDWARE, AV/SMART

Hero glow orbs: 3 blurred radial gradient blobs (blue, purple, cyan)
positioned absolutely — purely decorative depth.

=======================================================================
SECTION 2 — TICKER / MARQUEE
=======================================================================
Full-width scrolling ticker bar between hero and services:
  - Subtle cyan tinted background, bordered top and bottom
  - Infinite left-scrolling marquee (30s duration)
  - Items (repeated twice for seamless loop):
    ◆ AI Services  ◆ Hologram Fan Displays  ◆ Smartboards & AV
    ◆ Custom Desktop Computers  ◆ Network Infrastructure
    ◆ Software Development  ◆ Internet Access Provision  ◆ IoT & Asset Tracking

=======================================================================
SECTION 3 — SERVICES  (#services)
=======================================================================
Section label: "WHAT WE DO"
Title: "Technology Services Built for Africa"
Subtitle: short paragraph about world-class tech for Zimbabwe businesses.

3×2 grid of service cards (unified grid with 1.5px gap, rounded container,
overflow hidden — cards share borders like a table):

  1. 🤖 AI Services
     Custom AI solutions, automation pipelines, intelligent chatbots,
     data analytics platforms tailored to your workflows.

  2. 🌀 Hologram Fan Displays
     3D holographic fan displays for retail, exhibitions, events, brand
     activations. Supply, setup, and content creation included.

  3. 📺 Smartboards & AV
     Interactive smartboards, digital signage, full AV solutions for
     classrooms, boardrooms, and public spaces.

  4. 💻 Software Development
     Bespoke web apps, mobile applications, enterprise platforms, API
     integrations. Full-stack from requirements to deployment.

  5. 🌐 Internet & Network Infrastructure
     Internet access provision, LAN/WAN design, structured cabling,
     Wi-Fi deployment, ongoing network management.

  6. 🖥️ Custom Desktop Computers
     Made-to-order all-in-one desktops engineered for African conditions —
     optimised for local power environments and business workloads.

Each card:
  - On hover: background lightens, top accent line fades in (cyan gradient),
    service icon glows, "Learn more →" link slides in from left (opacity 0→1)

=======================================================================
SECTION 4 — WHY ETECHZIM  (#why)
=======================================================================
2-column layout (text left, visual grid right).

Left — 4 checklist items with cyan check boxes:
  ✓ Harare-based, nationally deployed
  ✓ End-to-end ownership
  ✓ Built for our environment
  ✓ Multi-sector experience

Right — 2×3 grid of capability blocks (cards with icon, title, short text):
  ⚡ Fast deployment
  🔒 Secure by design
  📈 Scalable solutions
  🤝 Partnership model
  🌍 African-first innovation  ← spans full width, cyan tinted background

=======================================================================
SECTION 5 — PRODUCTS  (#products)
=======================================================================
Section label: "FEATURED SOLUTIONS"
Title: "Our Flagship Offerings"

Asymmetric 2-column grid (1.2fr / 1fr):

LEFT — large feature card for Hologram Fan Displays:
  - "Featured Product" pill tag
  - Title, paragraph description
  - 5 spec bullet rows with cyan dots
  - "Request a demo →" button
  - Decorative radial glow in corner

RIGHT — stack of 4 smaller product cards:
  🤖 AI-Powered Business Tools
  🖥️ eTechZim Custom All-in-One PCs
  📡 Managed Network Packages
  📺 Interactive Smartboard Solutions

Each small card: icon box + title + 2-line description, hover slides right +
border highlights.

=======================================================================
SECTION 6 — INTERACTIVE PC BUILDER  (#builder)
=======================================================================
Section label: "INTERACTIVE EXPERIENCE"
Title: "Build Your Custom All-in-One PC"
Subtitle: configure your machine, see it take shape, get an instant quote.

2-column layout (options left, preview right):

LEFT — 6 configuration steps, each with a label and pill/chip selectors:

  Step 01 — Use Case (single select):
    🏢 Office & Admin (+$0)  |  🎨 Creative & Design (+$120)
    🎮 Gaming & Media (+$200)  |  🖧 Server / Kiosk (+$80)

  Step 02 — Processor (single select):
    Intel i3 — Entry (+$0)  |  Intel i5 — Mid-range (+$80)
    Intel i7 — Performance (+$180)  |  Intel i9 — Pro (+$320)

  Step 03 — RAM (single select):
    8GB (+$0)  |  16GB (+$60)  |  32GB (+$130)  |  64GB (+$260)

  Step 04 — Storage (single select):
    256GB SSD (+$0)  |  512GB SSD (+$40)  |  1TB SSD (+$90)  |  2TB SSD (+$170)

  Step 05 — Display Size (single select):
    21" (+$0)  |  24" (+$50)  |  27" (+$110)  |  32" 4K (+$200)

  Step 06 — Add-ons (multi-select checkboxes in 2-column grid):
    Built-in UPS (+$35)  |  Wi-Fi 6 Card (+$25)
    Dedicated GPU (+$55)  |  HD Webcam (+$20)
    Wireless KB+Mouse (+$30)  |  Windows 11 Pro (+$45)

RIGHT — live preview panel:
  - SVG illustration of an all-in-one monitor/PC
    - Screen shows: eTechZim logo text, selected spec summary, use case label
    - Pulsing power LED in corner
    - "UPS" badge appears on screen frame when Built-in UPS is selected
    - Size label below updates with selected screen size
  - Configuration summary list (key/value pairs, dividers)
  - Price display box: "Estimated price (USD)" — large Syne font, cyan color
    - Base price $580, updates live as options change
    - "Warranty included" note
  - "Get a formal quote →" button linking to #contact

JS logic: selecting any chip recalculates total price and updates the SVG
labels and summary list in real time. Add-on checkboxes also trigger updates.

=======================================================================
SECTION 7 — TECH CHALLENGE GAME  (#challenge)
=======================================================================
Section label: "IS THIS YOU?"
Title: "What's Your Biggest Tech Challenge?"
Subtitle: play through a scenario, we'll show you how eTechZim solves it.

A branching 3-step interactive quiz contained in a single card with a
progress bar at the top.

STEP 0 — Opening question:
  "You're running a business in Harare. What's your biggest daily pain?"
  Choice A: "Load-shedding kills my computers mid-work"  → go to Step 1
  Choice B: "My team can't collaborate — internet is unreliable"  → go to Step 2
  Choice C: "I'm drowning in manual admin and data entry"  → go to Step 3
  Choice D: "I need to wow customers at events & exhibitions"  → go to Step 4

STEP 1 (load-shedding path):
  "How long does a typical power outage affect your operations?"
  4 choices (duration ranges) → all lead to Result A

STEP 2 (connectivity path):
  "What does the connectivity problem affect most?"
  4 choices (team files / POS / remote work / whole office) → all lead to Result B

STEP 3 (admin path):
  "Which manual process costs you the most time?"
  4 choices (inventory / customer support / finance / scheduling) → all lead to Result C

STEP 4 (events path):
  "What kind of experience do you want to create?"
  4 choices (launch / expo / retail / conference) → all lead to Result D

RESULT SCREENS (replace question UI):
  Result A: 🖥️ "eTechZim Custom All-in-One PCs with Built-in UPS"
  Result B: 🌐 "Managed Network Infrastructure by eTechZim"
  Result C: 🤖 "AI-Powered Business Automation by eTechZim"
  Result D: 🌀 "Hologram Fan Display Solutions by eTechZim"

Each result shows: icon, title, 3-sentence solution description, a CTA
button linking to #contact or #builder, and a "Try another scenario" reset
button that returns to Step 0.

Animations: choices highlight on click (cyan border + bg), then crossfade to
next question. Progress bar fills smoothly. Result screen fades in.

=======================================================================
SECTION 8 — TESTIMONIALS  (#testimonials)
=======================================================================
Section label: "CLIENT VOICES"
Title: "What Our Clients Say"

Two rows of 3 testimonial cards each (3×2 grid, 1.5rem gap):

ROW 1:
  Card 1 — Mrs. Tendai Moyo, Head of IT, Harare Academy
    "eTechZim installed our smartboard system across three campuses.
    The difference in student engagement has been remarkable..."
    ★★★★★

  Card 2 — Farai Chikwanda, Marketing Director, Zim Beverages Ltd
    "The hologram display at our product launch stopped people in their
    tracks. Customers were taking videos and sharing on social media..."
    ★★★★★

  Card 3 — Blessing Mutasa, Operations Manager, FinTech Zimbabwe
    "We needed 20 workstations fast — locally built, budget-conscious,
    able to handle load-shedding. eTechZim delivered custom all-in-ones
    with built-in UPS in two weeks..."
    ★★★★★

ROW 2:
  Card 4 — Rudo Ncube, CEO, Ncube & Associates
    "Their team deployed our entire office network in three days...
    Internet has been rock-solid since."
    ★★★★★

  Card 5 — Tatenda Khumalo, Owner, Khumalo Retail Group
    "eTechZim built our inventory management platform from scratch...
    the AI-powered analytics have changed how we make buying decisions."
    ★★★★☆

  Card 6 — Simba Dube, CX Manager, Horizon Insurance
    "We used their AI chatbot solution for our customer support desk.
    Response times dropped by 70% in the first month..."
    ★★★★★

Each card:
  - Dark card background with subtle top accent line (gradient, 2px)
  - Large decorative opening quote mark (low opacity)
  - Quote text in var(--muted)
  - Avatar: coloured circle with initials (unique colour per card)
  - Name, title/company
  - Star rating (gold ★)
  - Hover: border highlights cyan

=======================================================================
SECTION 9 — CONTACT FORM  (#contact)
=======================================================================
Section label: "GET IN TOUCH"
Title: "Let's Build Something Together"
Subtitle: "Tell us about your project or challenge. Our team will get
back to you within one business day."

2-column layout (form left, contact info right):

LEFT — Contact form card (dark bg3, top gradient accent line):

  Row 1 (2 cols): First name* | Last name*
  Row 2 (full):   Email address*
  Row 3 (2 cols): Phone / WhatsApp | Company / Organisation
  Row 4 (full):   Service of interest* (dropdown select):
    — Select a service —
    AI Services & Automation
    Hologram Fan Displays
    Smartboards & AV
    Software Development
    Internet & Network Infrastructure
    Custom All-in-One Desktop PCs
    PC Builder Quote
    Other / General Enquiry

  Row 5 (full): Budget range — pill button group (single select):
    Under $500 | $500–$2,000 | $2,000–$10,000 | $10,000+ | Prefer to discuss

  Row 6 (full): Message textarea* (min 130px, resizable)
    Character counter: "0 / 1000" bottom right, turns red above 900

  Row 7: Consent checkbox:
    "I agree to be contacted by eTechZim regarding my enquiry."

  Submit button (full width):
    "Send Message →" — filled accent, black text, 1rem font
    On click: validate → show loading spinner → after 1.8s show success state
    Disabled + spinner shown during "sending"

  Success state (replaces form body):
    ✅ large emoji
    "Message Sent!" heading
    Thank you copy + expected response time
    "Send another message" button (resets all fields)

  Validation rules:
    - First name, last name: required, non-empty
    - Email: required + regex format check
    - Service dropdown: required (not default option)
    - Message: required + minimum 20 characters
    - Consent checkbox: must be checked
    - Show red error text below each invalid field
    - Fields clear their error on input (live validation after first submit)

RIGHT — 4 info cards stacked vertically:
  📍 Location: Harare, Zimbabwe / Serving clients nationwide & SADC
  📧 Email: info@etechzim.co.zw
  💬 WhatsApp: Chat on WhatsApp → (wa.me link)
  ⏱️ Response Time: within one business day (highlight "one business day")

=======================================================================
FOOTER
=======================================================================
Single-row footer:
  - Logo left: eTechZim (Tech in accent colour)
  - Nav links centre: Services | About | Products | Contact
  - Copyright right: © 2025 eTechZim PVT LTD. All rights reserved.
  - Top border: 1px solid var(--border)

=======================================================================
ANIMATIONS & INTERACTIONS (global)
=======================================================================
- Scroll reveal: all major sections fade + slide up on enter viewport
  (IntersectionObserver, threshold 0.1, translateY 20px → 0, opacity 0→1)
- Smooth scroll on all anchor links
- Hero h1 and badge: staggered fadeSlideUp animations on load
- Hero visual: float animation (up/down 15px, 6s infinite)
- Ticker: CSS animation, 30s linear infinite
- PC builder chips: instant visual feedback on click
- Game choices: 350ms delay before transitioning to next question
- Form fields: focus glow ring (cyan, 3px offset)
- All interactive elements: cursor pointer, transition 0.2–0.4s

=======================================================================
RESPONSIVE BREAKPOINTS
=======================================================================
Desktop (1280px+): Full layouts as described above
Tablet (768px–1279px):
  - Services grid: 2 columns
  - Products showcase: 1 column (feature card stacks above small cards)
  - Why grid: 1 column
  - PC builder: 1 column (preview below options)
  - Contact: 1 column (info cards below form)
  - Hero circuit SVG: hidden
Mobile (< 768px):
  - All grids: 1 column
  - Nav links: hidden, hamburger menu instead
  - Hero stats: 2-column wrap
  - CTA box padding: 2rem
  - Testimonials: single column
  - PC builder add-ons: single column

=======================================================================
NOTES FOR THE AI / CODER
=======================================================================
- The form does NOT need a real backend. Simulate with setTimeout (1800ms).
  Leave a clear TODO comment where a Formspree or fetch() call would go.
- All phone numbers use placeholder +2637XXXXXXXX — leave as-is.
- Email placeholder: info@etechzim.co.zw — leave as-is.
- No images needed — all visuals are SVG, CSS, or emoji.
- Keep the PC Builder base price at $580 USD.
- The game's branching logic: step 0 has 4 choices (A→1, B→2, C→3, D→4),
  steps 1–4 each have 4 choices that all lead directly to their result screen
  (5, 6, 7, 8 respectively).
- Use CSS custom properties (variables) everywhere — no hardcoded hex values
  outside of :root.
- Prefer semantic HTML: <nav>, <section>, <footer>, <main>, <h1>–<h4>.
- Add id attributes to all major sections for anchor navigation:
  #services, #why, #products, #builder, #challenge, #testimonials, #contact