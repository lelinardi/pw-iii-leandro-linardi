// pages/_app.js

import 'antd/dist/reset.css'; // ✅ Ant Design styles (required for toast messages)
import React from 'react';

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />;
}
// This is the main entry point for the Next.js application.
// It imports the Ant Design styles for toast messages and renders the main component with its props.
// The `App` component is used to initialize pages and can be customized to include global styles or providers.
// The `Component` prop represents the active page, and `pageProps` contains the initial props preloaded for the page.
// This setup allows for a consistent layout and styling across the application, making it easier to manage global styles and functionality.
// The `antd/dist/reset.css` import is essential for ensuring that Ant Design components render correctly with their default styles.
// This file is automatically used by Next.js to initialize the app, and it can be extended with additional global styles or providers as needed.
// The `App` component is a functional component that receives `Component` and `pageProps` as props.
// It returns the `Component` with its props, allowing Next.js to render the appropriate page.
// This setup is crucial for Next.js applications to function correctly, as it provides a consistent entry point for all pages.