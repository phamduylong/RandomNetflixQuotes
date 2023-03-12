import { c as create_ssr_component, v as validate_component, h as add_attribute, e as escape } from "../../../chunks/index2.js";
import { C as Clipboard, c as clipboard_svg, r as refresh_svg } from "../../../chunks/clipboard.js";
import "../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "#main.svelte-yv0dm3{position:relative;height:100vh;width:100%;display:flex;align-items:center;justify-content:center}#main.svelte-yv0dm3:before{content:'';background-image:url('$lib/assets/bb_bg.jpg');background-size:cover;position:absolute;top:0px;right:0px;bottom:0px;left:0px}#quote_container.svelte-yv0dm3{position:absolute;top:40%;left:50%;transform:translate(-50%, -50%);max-height:40%;width:60%;font-size:2vw;text-align:center;color:black;font-weight:700;background:rgba(255, 255, 255, 0.7);padding:5%;border-radius:20px;overflow-y:auto}#refresh_btn.svelte-yv0dm3{position:absolute;top:60%;left:50%;transform:translate(-50%, -50%);margin-top:10%;height:4vh;width:4vh;background:rgba(255, 255, 255, 1);border:transparent}#refresh_btn.svelte-yv0dm3:hover{height:6vh;width:6vh}#copy_btn.svelte-yv0dm3{position:absolute;top:9%;right:0%;transform:translate(-50%, -50%);height:3vh;width:3vh;background:transparent;border:transparent}img.svelte-yv0dm3{height:100%;width:100%}@media only screen and (orientation: portrait) and (max-width: 600px){#main.svelte-yv0dm3{position:relative;height:100vh;width:100%;display:flex;align-items:center;justify-content:center}#main.svelte-yv0dm3:before{content:'';background-image:url('$lib/assets/bb_bg_portrait.jpg');background-size:cover;position:absolute;top:0px;right:0px;bottom:0px;left:0px}#quote_container.svelte-yv0dm3{position:absolute;top:40%;left:50%;transform:translate(-50%, -50%);max-height:40%;width:60%;font-size:4vw;text-align:center;color:black;font-weight:700}#refresh_btn.svelte-yv0dm3{position:absolute;top:60%;left:50%;transform:translate(-50%, -50%);margin-top:10%;height:6vh;width:6vh;background:rgba(255, 255, 255, 1);border:transparent}#copy_btn.svelte-yv0dm3{position:absolute;top:9%;right:0%;transform:translate(-50%, -50%);height:2vh;width:2vh;background:transparent;border:transparent}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div id="${"main"}" class="${"svelte-yv0dm3"}"></div>
<div id="${"quote_container"}" class="${"svelte-yv0dm3"}">${validate_component(Clipboard, "Clipboard").$$render(
    $$result,
    {
      text: data.content[0].quote + " - " + data.content[0].author
    },
    {},
    {
      default: ({ copy }) => {
        return `<button id="${"copy_btn"}" class="${"svelte-yv0dm3"}"><img${add_attribute("src", clipboard_svg, 0)} alt="${"copy svg"}" class="${"svelte-yv0dm3"}"></button>`;
      }
    }
  )}
	<div class="${"inline"}"><strong>${escape(data.content[0].quote)}</strong><br><br>
		— ${escape(data.content[0].author)} —
	</div></div>
<button id="${"refresh_btn"}" class="${"svelte-yv0dm3"}"><img${add_attribute("src", refresh_svg, 0)} alt="${"refresh"}" class="${"svelte-yv0dm3"}"></button>`;
});
export {
  Page as default
};
