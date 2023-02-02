## Overview
A Netflix series quote generator. Currently supporting quotes from *Better Call Saul, Lucifer and Stranger Things*. Quotes are fetched from [shadowoff09](https://github.com/shadowoff09)'s APIs.

[Demo](https://random-netflix-quotes.vercel.app/)

## Structure 
```bash
.
├── README.md
├── package-lock.json
├── package.json
├── playwright.config.js
├── src
│   ├── app.html
│   ├── lib
│   │   └── assets
│   └── routes
│       ├── Better Call Saul
│       ├── Lucifer
│       └── Stranger Things
├── static
├── svelte.config.js
├── tests
└── vite.config.js
```
## Cloning
```bash
git clone https://github.com/phamduylong/RandomNetflixQuotes.git
npm install
npm run dev -- --open
```
