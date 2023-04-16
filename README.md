# Next + Builder + Tailwind

CMS boilerplate repos suck. This one doesn't.

⚡ Next13 (no app dir yet)

👷‍♀️ Builder.io

💅 Tailwind CSS

🌐 Localization support out of the box

## Getting Started

### Prerequisites

1. Create a Builder account and get your API key (in your space under Account)
2. You most likely want to disable Builder built-in components (this allows clients to only use the components you've built)
3. Get a primer on how Builder works over in their [Docs](https://docs.builder.io/c/docs)

### Local Dev Setup

1. Create a `.env.local` in the root of the project and add your API key as specified in `.env.example`
2. Specify the locals you want to use in `next.config.js` (see [Next.js docs](https://nextjs.org/docs/advanced-features/i18n-routing#configuration) for more info)
3. Run the following commands in your terminal

```terminal
npm i 
```

```terminal
npm run dev
```

### Builder Intro

1. In builder, create a new page and drag and drop the 'Card' component onto the page
2. Localize some of the card's content to test the i18n setup

### Workflow

1. Create a new react component in `/components`
2. Update `builder.config.ts` to include the new component (see [Builder docs](https://docs.builder.io/c/docs/developer-resources#add-a-new-component) for more info)
3. If everything is working correctly, you should be able to see the component in the Builder UI and add it to a page

## TODO

- [ ] Add fetch example for CMS Data models
- [ ] Add example on how to use Section models
- [ ] Remove `any` in page
- [ ] Look into possibly unnecessary "duplicate" index page (regarding: [...page].tsx)
- [ ] Add production instructions
- [ ] Look into loc pricing plan changes
