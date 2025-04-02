This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Project Aim:

- Experiment the view transition between pages with Next.js.

## Setup:

- In the next js config file, set the `viewTransition` to `true` in the `experimental` object.

```tsx
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    viewTransition: true,
  },
};

export default nextConfig;
```

- In source and destination pages, add `import React, { unstable_ViewTransition as ViewTransition } from "react";` to import the `ViewTransition` component. **Note:** The `unstable_ViewTransition` is an experimental feature and may change in the future.
- Wrap the content of the content with the `ViewTransition` component. Following line of code in in the "/" route

```tsx
<ViewTransition name="vercelImage">
  <Image
    className="dark:invert"
    src="/vercel.svg"
    alt="Vercel logomark"
    width={20}
    height={20}
  />
</ViewTransition>
```

- Also in the destination page do the same

```tsx
<ViewTransition name="vercelImage">
  <Image src={vercelImage} alt="Vercel logomark" width={100} height={100} />
</ViewTransition>
```

- Done

## What is tested:

- Navigation from server page to server page works.
- Navigation from server page to client page works.
- Navigation from client page to server page didn't work.
