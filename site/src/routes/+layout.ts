// Render every route to static HTML at build time. Without this the adapter
// emits only an SPA shell, which would leave the page invisible to search
// engines and to link-preview crawlers.
export const prerender = true;

// No server, so there is nothing to render on demand.
export const ssr = true;
export const csr = true;
