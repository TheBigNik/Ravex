# Ravex
A smart clipboard extension that remembers, organizes, and downloads everything you copy.

# Ravex — The Smart Clipboard

Ravex is a modern browser extension that turns everything you copy into an organized, searchable history. It detects links and media, shows quick previews, and lets you download files directly — all inside a minimal, fast popup with dark/light themes.

**MVP Scope:** Local clipboard history, media classification, previews for direct image/video URLs, and one-click downloads via Chrome Downloads API.

---

## ✨ Features

- Clipboard history (local, private)
- Auto detection: text • links • images • videos • audio
- Quick preview (images, direct MP4/WebM) + “Open in tab”
- One-click download via `chrome.downloads`
- Dark/Light theme toggle with persistent setting
- Toast notifications for feedback
- Clean UI based on a reusable design system (420×600 popup)

---

## 🧱 Tech Stack

- Vite • React • TypeScript • TailwindCSS  
- Chrome Manifest V3 • `@crxjs/vite-plugin`  
- Chrome APIs: `storage`, `downloads`

---

## 🎨 Brand & Design Tokens

**Palette (Dark/Light):**
- `#0A090C` (Deep Charcoal)  
- `#F5F3F5` (Soft White)  
- `#4BB3FD` (Sky Blue / Accent)  
- `#CAFE48` (Lime / Highlight)  
- `#0E34A0` (Royal Blue / Primary)

**Typography**
- Logo: **Bolina Script**  
- UI: **Inter**

**Style**
- Modern, flat, minimal, rounded corners (12–16px), no shadows, 8px spacing grid.

---

## 📂 Project Structure

```
ravex/
  public/
    icon16.png
    icon48.png
    icon128.png
  src/
    manifest.json
    background.ts
    content.ts
    lib/
      storage.ts
      detect.ts
      metadata.ts
      bus.ts
    popup/
      index.html
      main.tsx
      App.tsx
      styles.css
      components/
        Header.tsx
        ActionsBar.tsx
        HistoryList.tsx
        HistoryItem.tsx
        PreviewModal.tsx
        Toast.tsx
        ThemeToggle.tsx
  package.json
  tsconfig.json
  vite.config.ts
  tailwind.config.js
  postcss.config.js
```

---

## 🚀 Quick Start

1. **Install**
   ```bash
   npm install
   ```

2. **Dev (with CRX plugin)**
   ```bash
   npm run dev
   ```
   - Chrome → `chrome://extensions` → enable **Developer mode** → **Load unpacked** → select the dev output folder shown by the CRX plugin (or `dist/` depending on setup).

3. **Build**
   ```bash
   npm run build
   ```
   - Load the generated `dist/` as **Unpacked** in Chrome.

---

## 🔧 Configuration Snippets

### `vite.config.ts`
```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { crx } from '@crxjs/vite-plugin'
import manifest from './src/manifest.json'

export default defineConfig({
  plugins: [
    react(),
    crx({ manifest })
  ],
  build: {
    sourcemap: process.env.SOURCE_MAP === 'true',
    rollupOptions: {
      output: { manualChunks: undefined }
    }
  }
})
```

### `src/manifest.json`
```json
{
  "manifest_version": 3,
  "name": "Ravex — The Smart Clipboard",
  "version": "1.0.0",
  "action": { "default_popup": "src/popup/index.html" },
  "permissions": ["storage", "downloads", "activeTab", "scripting"],
  "host_permissions": ["<all_urls>"],
  "background": { "service_worker": "src/background.js", "type": "module" },
  "icons": {
    "16": "public/icon16.png",
    "48": "public/icon48.png",
    "128": "public/icon128.png"
  }
}
```

### `tailwind.config.js`
```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html','./src/**/*.{ts,tsx,html}'],
  theme: {
    extend: {
      colors: {
        ravex: {
          bg: 'var(--bg)',
          text: 'var(--text)',
          primary: 'var(--primary)',
          accent: 'var(--accent)',
          highlight: 'var(--highlight)',
          card: 'var(--card)'
        }
      },
      borderRadius: { ravex: '12px' }
    }
  },
  plugins: []
}
```

### `src/popup/styles.css`
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --bg: #0A090C;
  --text: #F5F3F5;
  --primary: #0E34A0;
  --accent: #4BB3FD;
  --highlight: #CAFE48;
  --card: #111014;
}

:root.light {
  --bg: #F5F3F5;
  --text: #0A090C;
  --card: #E9E8EA;
}

html, body, #root {
  height: 100%;
  background: var(--bg);
  color: var(--text);
}
```

### `src/popup/index.html`
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta
      http-equiv="Content-Security-Policy"
      content="script-src 'self'; object-src 'none';"
    />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Ravex</title>
  </head>
  <body>
    <div id="root" style="width:420px;height:600px;"></div>
    <script type="module" src="/src/popup/main.tsx"></script>
  </body>
</html>
```

### `src/popup/main.tsx`
```ts
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
```

### `src/popup/App.tsx` (MVP shell)
```tsx
import { useEffect, useState } from 'react'
import Header from './components/Header'
import ActionsBar from './components/ActionsBar'
import HistoryList from './components/HistoryList'
import PreviewModal from './components/PreviewModal'
import Toast from './components/Toast'

export default function App() {
  const [openPreview, setOpenPreview] = useState<string | null>(null)

  useEffect(() => {
    chrome.storage.local.get(['ravex_settings'], ({ ravex_settings }) => {
      const s = ravex_settings || {}
      if (s.theme === 'light') document.documentElement.classList.add('light')
      else document.documentElement.classList.remove('light')
    })
  }, [])

  return (
    <div className="w-[420px] h-[600px] flex flex-col">
      <Header />
      <ActionsBar />
      <div className="flex-1 overflow-y-auto">
        <HistoryList onPreview={setOpenPreview} />
      </div>
      <Toast />
      {openPreview && (
        <PreviewModal clipId={openPreview} onClose={() => setOpenPreview(null)} />
      )}
    </div>
  )
}
```

### `src/lib/detect.ts` (classify helper)
```ts
export type ClipType = 'link' | 'image' | 'video' | 'audio' | 'text'

const VIDEO_EXT = /\.(mp4|webm|mov|m4v)$/i
const IMAGE_EXT = /\.(png|jpg|jpeg|gif|webp|svg)$/i
const AUDIO_EXT = /\.(mp3|wav|ogg|m4a)$/i

export function classify(content: string): ClipType {
  try {
    const u = new URL(content)
    const p = u.pathname
    if (IMAGE_EXT.test(p)) return 'image'
    if (VIDEO_EXT.test(p)) return 'video'
    if (AUDIO_EXT.test(p)) return 'audio'
    return 'link'
  } catch {
    return 'text'
  }
}
```

### `src/lib/storage.ts` (minimal storage API)
```ts
import type { ClipType } from './detect'

export type Clip = {
  id: string
  type: ClipType
  content: string
  title?: string
  domain?: string
  favicon?: string
  thumb?: string
  createdAt: number
}

const CLIPS_KEY = 'ravex_clips'
const SETTINGS_KEY = 'ravex_settings'

export async function getClips(): Promise<Clip[]> {
  const data = await chrome.storage.local.get([CLIPS_KEY])
  return data[CLIPS_KEY] || []
}

export async function setClips(clips: Clip[]) {
  await chrome.storage.local.set({ [CLIPS_KEY]: clips })
}

export async function addClip(clip: Clip, max = 100) {
  const clips = await getClips()
  const next = [clip, ...clips].slice(0, max)
  await setClips(next)
  return next
}

export async function clearClips() {
  await setClips([])
}

export async function getSettings<T=any>(): Promise<T> {
  const data = await chrome.storage.local.get([SETTINGS_KEY])
  return (data[SETTINGS_KEY] || {}) as T
}

export async function setSettings(obj: any) {
  await chrome.storage.local.set({ [SETTINGS_KEY]: obj })
}
```

---

## 🔒 Manifest & Permissions (MV3) — Notes

Baseline `src/manifest.json`:
- `manifest_version: 3`  
- `action.default_popup: src/popup/index.html`  
- `background.service_worker: background.js` (ESM)  
- `permissions: ["storage","downloads","activeTab","scripting"]`  
- `host_permissions: ["<all_urls>"]` (narrow later)

---

## 🧠 Core Concepts (MVP)

**Classification**
- Direct file extensions → image/video/audio
- Otherwise → link or text

**Metadata**
- Title (fallback: hostname)
- Favicon via Google S2 service (MVP-friendly)
- Thumbnail = favicon (MVP)

**Preview**
- Images: `<img>`
- Video: `<video controls>` for `.mp4/.webm`
- Unsupported: “Open in tab”

**Download**
- `chrome.downloads.download({ url })`
- If blocked/streaming site → show toast (“Needs Ravex Downloader”)

---

## 🧩 Components Map

- **Header**: logo, settings (stub), theme toggle  
- **ActionsBar**: Paste Latest • Filter • Clear All  
- **HistoryList / HistoryItem**: favicon/thumb, title, snippet, actions  
- **PreviewModal**: media preview + metadata + Download  
- **Toast**: success, info, warning, error  
- **ThemeToggle**: dark/light variable switch (persisted)

---

## 🧪 Manual Test Plan

- Add plain text → saved as “text”  
- Add image URL → preview + download  
- Add direct `.mp4` → preview + download  
- Add streaming page (e.g., YouTube) → detect “link”; download shows “Needs Ravex Downloader”  
- Toggle theme → persists after reopen  
- Clear all → list empty, no errors

---

## 🗺️ Roadmap

**v1.0 (MVP)**
- Local history, detection, preview (direct), downloads
- Theme + toasts + filters

**v1.5**
- Django backend “resolver” (yt-dlp adapter)
- Preview + download for streaming sources
- Optional: context menu + quick panel

**v2.0**
- Auth & Sync
- AI tagging / smart categories
- Web Hub (dashboard)

---

## 🤝 Contributing

1. Fork & clone  
2. Create a feature branch: `feat/some-feature`  
3. Install & run dev: `npm i && npm run dev`  
4. Ensure `npm run build` passes and no TS errors  
5. Open a PR with a clear summary and screenshots/gifs

**Code style**
- TypeScript strict where reasonable
- Small, focused components
- No inline styles; use Tailwind + CSS variables
- Keep brand tokens consistent

---

## 🛠️ Scripts

Add to `package.json`:
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "typecheck": "tsc --noEmit"
  }
}
```

---

## 🧯 Troubleshooting

- CSP/Service Worker issues: Ensure background is ESM and built by Vite/CRX plugin.  
- Clipboard read blocked: Use a user gesture (click “Paste Latest”) from the popup.  
- Downloads fail for streaming sites: Expected in MVP; needs server resolver (planned in v1.5).  
- Blank popup: Check `chrome://extensions` → Errors tab for MV3 logs.

---

## 📸 Screenshots

Add these once available:
- `docs/screenshots/popup-dark.png`  
- `docs/screenshots/popup-light.png`  
- `docs/screenshots/preview-modal.png`

---

## 📖 License

MIT (recommended). Add a `LICENSE` file if you choose MIT or another license.

---

## 📚 References

- Chrome Extensions MV3: https://developer.chrome.com/docs/extensions/  
- CRXJS Vite Plugin: https://crxjs.dev/  
- TailwindCSS: https://tailwindcss.com/docs  
- React + TS Cheatsheets: https://react-typescript-cheatsheet.netlify.app/