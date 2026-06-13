# Alfaizie Hub (LinkTree-2.0)

Alfaizie Hub adalah platform Linktree personal yang dikustomisasi secara premium dengan tema gelap estetik (*Ethereal Dark Mode*), pendaran ambient bergaya magis (*ambient glows*), latar belakang partikel interaktif, serta performa tinggi.

Dibuat menggunakan **React + TypeScript + Vite + Tailwind CSS + Framer Motion**.

## ✨ Fitur Utama
- **Ethereal Dark Theme**: Tampilan gelap premium dengan perpaduan warna Navy Slate (`#0F172A`), Lavender (`#D4C5F9`), dan Sage Green (`#A8C686`).
- **Interactive Particle Background**: Latar belakang dengan partikel interaktif yang bergerak responsif.
- **Ambient Glows**: Efek pendaran cahaya magis berbasis CSS murni di sudut layar (tanpa gambar statis bertransparansi buggy).
- **WhatsApp Integration**: Tautan langsung ke WhatsApp dengan ikon logo WhatsApp SVG kustom yang elegan.
- **Fitur Absen Kuliah**: Tautan khusus untuk mengakses sistem pencatatan kehadiran kuliah secara digital.
- **Responsive Layout**: Optimal untuk perangkat mobile maupun desktop.
- **Framer Motion Animations**: Efek hover dan animasi transisi kartu link yang sangat halus.

## 🛠️ Stack Teknologi
- **Frontend**: React 19 (TypeScript)
- **Styling**: Tailwind CSS, Lucide Icons
- **Animations**: Framer Motion
- **Build Tool**: Vite

## 🚀 Memulai (Run Locally)

1. **Clone repository**:
   ```bash
   git clone https://github.com/Najebb/LinkTree-2.0.git
   cd LinkTree-2.0
   ```

2. **Instal dependensi**:
   ```bash
   npm install
   ```

3. **Jalankan server pengembangan**:
   ```bash
   npm run dev
   ```

4. **Build untuk produksi**:
   ```bash
   npm run build
   ```

## ⚙️ Kustomisasi Informasi
Untuk mengubah data diri, tautan, dan deskripsi:
1. Buka file `client/src/pages/Home.tsx`.
2. Edit array `links` untuk memperbarui alamat media sosial dan Fitur Absen Anda.
3. Edit judul utama, sub-judul, dan deskripsi teks di bagian komponen JSX.
