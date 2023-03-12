import { c as create_ssr_component, i as createEventDispatcher, h as add_attribute, e as escape, t as tick } from "./index2.js";
const Clipboard_svelte_svelte_type_style_lang = "";
const css = {
  code: "textarea.svelte-w8w2mp{left:0;bottom:0;margin:0;padding:0;opacity:0;width:1px;height:1px;border:none;display:block;position:absolute}",
  map: null
};
const Clipboard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const dispatch = createEventDispatcher();
  let { text } = $$props;
  let textarea;
  async function copy() {
    textarea.select();
    document.execCommand("Copy");
    await tick();
    textarea.blur();
    dispatch("copy");
  }
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  $$result.css.add(css);
  return `${slots.default ? slots.default({ copy }) : ``}
<textarea class="${"svelte-w8w2mp"}"${add_attribute("this", textarea, 0)}>${escape(text, true)}</textarea>`;
});
const refresh_svg = "/_app/immutable/assets/refresh-bc5cd034.svg";
const clipboard_svg = "/_app/immutable/assets/clipboard-84aee46b.svg";
export {
  Clipboard as C,
  clipboard_svg as c,
  refresh_svg as r
};
