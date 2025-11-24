# Project Specification: Minimalist Tweet Blog

## 1. Design Philosophy
Inspired by [Thinking Machines](https://thinkingmachines.ai/blog/), the design focuses on:
- **Radical Simplicity**: No unnecessary borders, shadows, or gradients.
- **Typography-First**: The visual hierarchy is established by font size and weight, not colors or boxes.
- **Monochrome Palette**: Black text on white background (or off-white `#fcfcfc`), dark gray for secondary text.
- **Central Layout**: Single-column layout max-width ~650px for optimal reading.

## 2. Tech Stack

### Core
- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
  - Reason: Best-in-class static site generation (SSG) for fast blog performance.
- **Language**: TypeScript
  - Reason: Type safety ensures data structures for tweets/posts are consistent.

### Styling & UI
- **CSS**: [Tailwind CSS](https://tailwindcss.com/)
  - Reason: Utility-first approach allows for precise spacing/typography tuning essential for minimalism.
- **Typography**:
  - Headers: `Crimson Pro` (Google Fonts) - Elegant serif.
  - Body/UI: `Inter` or `Geist Sans` - Clean sans-serif.
- **Icons**: [Lucide React](https://lucide.dev/) (used very sparingly).

### Content & Data
- **Source**: MDX (Markdown + JSX).
  - Each blog post will be an `.mdx` file.
  - Frontmatter handles metadata (date, original tweet URL, author).
- **Tweet Integration**: `react-tweet`
  - Renders static tweets without heavy Twitter iframes, allowing us to style them to match the blog.

## 3. Key Components

1.  **`Header`**: Minimal. Just the site name (serif) and simple nav links.
2.  **`PostList`**: A clean list of entries.
    - Format: `[Date]  [Title]  [Author]`
    - Hover effect: Subtle underline or color shift.
3.  **`TweetPost`**: The article view.
    - Can include the original tweet embedded.
    - Expanded text/commentary surrounding the tweet.

## 4. Directory Structure
```
/app
  /blog
    /[slug]
      page.tsx    # Individual post view
    page.tsx      # Index list of posts
  layout.tsx      # Main site wrapper
/components
  /ui             # Minimal primitives
  Header.tsx
  PostList.tsx
/content          # MDX files
  my-first-thread.mdx
```

