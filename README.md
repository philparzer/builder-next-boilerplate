# Next + Builder + Tailwind

CMS boilerplate repos suck. This one doesn't.

## Features

🦺 Typescript

⚡ Next13 (no app dir yet)

👷‍♀️ &hairsp;Builder&hairsp;.io

💅 TailwindCSS

🌐 Localization

---

## Getting Started

### Prerequisites

1. Create a [Builder.io account](https://builder.io/) and get your API key (in your space under Account)
2. You most likely want to disable Builder's built-in components (this step ensures editors only use the components you've built)
3. Get a primer on how Builder works over in their [Docs](https://docs.builder.io/c/docs)

### Repo Structure

Get familiar with the repo structure before you start building your site. I've added some comments to help you understand what's going on.

📦your-project
 ┣ 📂node_modules
 ┣ 📂public
 ┣ 📂components
 ┃ ┣ 📂**builder** `I recommend separating builder components from other components`
 ┃ ┃ ┗ 📜**Card.tsx** `example builder component`
 ┃ ┗ 📜**LanguageSwitch.tsx** `example language switch component`
 ┣ 📂styles
 ┃ ┗ 📜globals.css
 ┣ 📂pages
 ┃ ┣ **📜_app.tsx** `used to import styles, you probably won't need to edit this`
 ┃ ┗ **📜&#91;&#91;...page&#93;&#93;.tsx** `optional catch-all route for all pages, including index`
 ┣ 📜**builder.config.ts** `register your components here`
 ┣ 📜.eslintrc.json
 ┣ 📜postcss.config.js
 ┣ 📜tailwind.config.js
 ┣ 📜tsconfig.json
 ┣ 📜.gitignore
 ┣ **📜.env.local.example** `reference for your .env.local file, don't fill out this file`
 ┣ 📜README&hairsp;.md
 ┣ 📜**next.config.js** `update locales here`
 ┣ 📜package-lock.json
 ┗ 📜package.json

### Local Dev Setup

1. Create a `.env.local` in the root of the project and add your API key as specified in `.env.example`

> **Warning**
> Don't fill out `env.local.example`

2. Specify the locals you want to use in `next.config.js` (see [Next.js docs](https://nextjs.org/docs/advanced-features/i18n-routing#configuration) for more info)
3. Run the following commands

```terminal
npm i 
```

```terminal
npm run dev
```

### Builder Intro

1. In builder, create a new page and drag and drop the 'Card' component onto the page
2. Localize some of the card's content to test the i18n setup

---

## Development Wokflow

1. Create a new react component in `/components`
2. Update `builder.config.ts` to include the new component (see [Builder docs](https://docs.builder.io/c/docs/developer-resources#add-a-new-component) for more info)
3. If everything is working correctly, you should be able to see the component in the Builder UI and add it to a page

---

## Deployment

1. I recommend using [Vercel](https://vercel.com/) for deployment
2. Add the environment variable to your project before deploying
3. Deploy!
4. When you're done, update the preview URL in Builder (in your space settings) to point to your deployment URL

---

## TODOs, Issues, and Contributing

Please feel free to contribute to this repo!

- [ ] Add fetch example for CMS Data models
- [ ] Add example on how to use Section models (prob commented out code block on how to use section for home)
- [ ] Remove `any` in page
- [ ] Look into loc pricing plan changes
