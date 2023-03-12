import * as server from '../entries/pages/_page.server.js';

export const index = 2;
export const component = async () => (await import('../entries/pages/_page.svelte.js')).default;
export const file = '_app/immutable/components/pages/_page.svelte-8cc11626.js';
export { server };
export const imports = ["_app/immutable/components/pages/_page.svelte-8cc11626.js","_app/immutable/chunks/index-b63c487d.js","_app/immutable/chunks/ProgressBar.svelte_svelte_type_style_lang-eebdba58.js","_app/immutable/chunks/clipboard-37298d13.js"];
export const stylesheets = ["_app/immutable/assets/_page-afbe908e.css","_app/immutable/assets/ProgressBar-5dd670d4.css","_app/immutable/assets/clipboard-859c096d.css"];
export const fonts = [];
