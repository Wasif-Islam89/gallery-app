# 📸 API Image Gallery

A modern, responsive React photo gallery application powered by the [Lorem Picsum API](https://picsum.photos/). Styled with a sleek **Dark Charcoal + Soft Blue** color theme, fast client-side pagination, and responsive grid layouts.

---

## 🚀 Features

- **Dynamic REST API Integration**: Fetches real-time photographic data from the Picsum Photos API via Axios.
- **Page-by-Page Pagination**: Seamless navigation using Previous and Next controls, with disabled state handling for the first page.
- **Responsive Multi-Device Grid**: Fluid layout transitioning from single-column on mobile screens to a 5-column display on desktop.
- **Curated Dark Theme**: Modern dark aesthetic with soft blue accents, low-contrast subtle borders, and zero harsh neon distractions.
- **Undistorted Image Presentation**: Fixed 4:3 aspect ratio cards with smooth zoom hover transitions and proper `object-cover` scaling.
- **Photographer Credits**: Cleanly formatted author names with automatic text truncation and full tooltip previews on hover.
- **Direct Source Links**: Cards link safely in new tabs directly to original high-resolution photo sources.
- **Smooth Loading States**: Minimalist spinner indicator that matches the color scheme during data fetching.

---

## 🛠️ Tech Stack & Libraries

| Technology | Version / Tool | Purpose |
| :--- | :--- | :--- |
| **React** | `v19.2.8` | Component-based UI architecture with `useState` & `useEffect` hooks |
| **Vite** | `v8.3.x` | Ultra-fast development server and production bundler |
| **Tailwind CSS** | `v4.3.x` | Modern utility-first CSS styling via `@tailwindcss/vite` |
| **Axios** | `v1.20.x` | Promise-based HTTP client for fetching REST API data |
| **Typography** | `Inter` (Google Fonts) | Clean, readable sans-serif typeface |
| **Icons & Dots** | Native SVG / CSS | Lightweight visual accents and animations |

---

## 🎨 Color Palette Reference

| Swatch | Hex Code | Purpose |
| :--- | :--- | :--- |
| **Main Background** | `#17191C` | App backdrop and main viewport container |
| **Secondary Background** | `#202329` | Header bar, badge containers, and disabled states |
| **Card Background** | `#252A30` | Individual photo cards |
| **Primary Accent Blue** | `#7CA9E8` | Active buttons, spinner track accent, highlights |
| **Hover Blue** | `#A3C4F3` | Interactive button hover and card title hover |
| **Main Text** | `#F5F7FA` | Primary headings, titles, and active labels |
| **Secondary Text** | `#B0B8C4` | Subtitles, loading text, and disabled controls |
| **Subtle Borders** | `#363C45` | Structural dividers, card borders, and containers |

---

## 🌐 API Reference

- **Endpoint**: `https://picsum.photos/v2/list?page={page}&limit=10`
- **Method**: `GET`
- **Response Format**: JSON array of image objects containing `id`, `author`, `width`, `height`, `url`, and `download_url`.
