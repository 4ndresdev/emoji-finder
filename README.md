# 🔍 Emoji Finder

A modern application to easily search and explore emojis, built with the latest web technologies.

![Emoji Finder Banner](https://via.placeholder.com/1200x630/f3f4f6/334155?text=Emoji+Finder)

## 🚀 Tech Stack

- **Frontend Framework:** React `19.0.0`
- **Language:** TypeScript
- **Bundler/Dev Server:** Vite `6.2.0`
- **Styling:** TailwindCSS `4.0.9`
- **Compiler:** SWC (via `@vitejs/plugin-react-swc`)
- **Linting:** ESLint `9.21.0`

## ✨ Features

✅ **Instant search:** Find emojis as you type  
📂 **Category browsing:** Discover emojis organized by categories  
📱 **Responsive UI:** Optimized design for mobile and desktop  
📋 **One-click copy:** Easily copy emojis to your clipboard  
ℹ️ **Emoji details:** View the name and category of each emoji  
🎨 **Minimalist and clean UI:** Modern and intuitive user experience

## 🛠️ Project Structure

```plaintext
emoji-finder/
├── src/
│   ├── assets/
│   │   └── styles/
│   │       └── style.global.css
│   ├── components/
│   │   └── features/
│   │       └── home/
│   │           ├── Header.tsx
│   │           ├── Search.tsx
│   │           ├── EmojiGrid.tsx
│   │           ├── EmojiCard.tsx
│   │           └── data/
│   │               └── emojis.ts
│   ├── pages/
│   │   └── home/
│   │       └── Home.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
```

## 🚀 Installation

Follow these steps to install and run the application using npm:

1. **Clone the repository:**
   ```bash
   git https://github.com/4ndresdev/emoji-finder
   cd emoji-finder
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the development server:**
   ```bash
   npm run dev
   ```
