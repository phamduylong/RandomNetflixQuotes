import { c as create_ssr_component, b as subscribe, e as escape, d as each, v as validate_component } from "../../chunks/index2.js";
import { p as page } from "../../chunks/stores.js";
import "../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { w as writable } from "../../chunks/index.js";
const toastDefaults = { message: "Missing Toast Message", autohide: true, timeout: 5e3 };
function randomUUID() {
  const random = Math.random();
  return Number(random).toString(32);
}
function handleAutoHide(toast) {
  if (toast.autohide === true) {
    setTimeout(() => {
      toastStore.close(toast.id);
    }, toast.timeout);
  }
}
function toastService() {
  const { subscribe: subscribe2, set, update } = writable([]);
  return {
    subscribe: subscribe2,
    /** Add a new toast to the queue. */
    trigger: (toast) => update((tStore) => {
      const id = randomUUID();
      let classes = toast.classes ?? "";
      switch (toast.preset) {
        case "primary":
          classes += "!bg-primary-500 text-on-primary-token";
          break;
        case "secondary":
          classes += "!bg-secondary-500 text-on-secondary-token";
          break;
        case "tertiary":
          classes += "!bg-tertiary-500 text-on-tertiary-token";
          break;
        case "success":
          classes += "!bg-success-500 text-on-success-token";
          break;
        case "warning":
          classes += "!bg-warning-500 text-on-warning-token";
          break;
        case "error":
          classes += "!bg-error-500 text-on-error-token";
          break;
      }
      const tMerged = { ...toastDefaults, ...toast, id, classes };
      tStore.push(tMerged);
      handleAutoHide(tMerged);
      return tStore;
    }),
    /** Remove first toast in queue */
    close: (id) => update((tStore) => {
      if (tStore.length > 0) {
        const index = tStore.findIndex((t) => t.id === id);
        tStore.splice(index, 1);
      }
      return tStore;
    }),
    /** Remove all toasts from queue */
    clear: () => set([])
  };
}
const toastStore = toastService();
const cWrapper = "flex fixed top-0 left-0 right-0 bottom-0 z-[888] pointer-events-none";
const cSnackbar = "flex flex-col space-y-2";
const cToast = "flex justify-between items-center pointer-events-auto";
const Toast = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesWrapper;
  let classesSnackbar;
  let classesBase;
  let $toastStore, $$unsubscribe_toastStore;
  $$unsubscribe_toastStore = subscribe(toastStore, (value) => $toastStore = value);
  let { position = "b" } = $$props;
  let { max = 3 } = $$props;
  let { duration = 150 } = $$props;
  let { background = "bg-secondary-500" } = $$props;
  let { width = "max-w-[640px]" } = $$props;
  let { color = "text-on-secondary-token" } = $$props;
  let { padding = "p-4" } = $$props;
  let { spacing = "space-x-4" } = $$props;
  let { rounded = "rounded-container-token" } = $$props;
  let { shadow = "shadow-lg" } = $$props;
  let { buttonAction = "variant-filled" } = $$props;
  let { buttonDismiss = "variant-filled" } = $$props;
  let cPosition;
  let cAlign;
  switch (position) {
    case "t":
      cPosition = "justify-center items-start";
      cAlign = "items-center";
      break;
    case "b":
      cPosition = "justify-center items-end";
      cAlign = "items-center";
      break;
    case "l":
      cPosition = "justify-start items-center";
      cAlign = "items-start";
      break;
    case "r":
      cPosition = "justify-end items-center";
      cAlign = "items-end";
      break;
    case "tl":
      cPosition = "justify-start items-start";
      cAlign = "items-start";
      break;
    case "tr":
      cPosition = "justify-end items-start";
      cAlign = "items-end";
      break;
    case "bl":
      cPosition = "justify-start items-end";
      cAlign = "items-start";
      break;
    case "br":
      cPosition = "justify-end items-end";
      cAlign = "items-end";
      break;
  }
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  if ($$props.max === void 0 && $$bindings.max && max !== void 0)
    $$bindings.max(max);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  if ($$props.background === void 0 && $$bindings.background && background !== void 0)
    $$bindings.background(background);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.spacing === void 0 && $$bindings.spacing && spacing !== void 0)
    $$bindings.spacing(spacing);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0)
    $$bindings.shadow(shadow);
  if ($$props.buttonAction === void 0 && $$bindings.buttonAction && buttonAction !== void 0)
    $$bindings.buttonAction(buttonAction);
  if ($$props.buttonDismiss === void 0 && $$bindings.buttonDismiss && buttonDismiss !== void 0)
    $$bindings.buttonDismiss(buttonDismiss);
  classesWrapper = `${cWrapper} ${cPosition} ${$$props.class || ""}`;
  classesSnackbar = `${cSnackbar} ${cAlign} ${padding}`;
  classesBase = `${cToast} ${background} ${width} ${color} ${padding} ${spacing} ${rounded} ${shadow}`;
  $$unsubscribe_toastStore();
  return `${$toastStore.length ? `
	<div class="${"snackbar-wrapper " + escape(classesWrapper, true)}" data-testid="${"snackbar-wrapper"}">
		<div class="${"snackbar " + escape(classesSnackbar, true)}">${each($toastStore, (t, i) => {
    return `${i < max + 1 ? `
					<div class="${"toast " + escape(classesBase, true) + " " + escape(t.classes, true)}" role="${"alert"}" aria-live="${"polite"}" data-testid="${"toast"}"><div class="${"text-base"}"><!-- HTML_TAG_START -->${t.message}<!-- HTML_TAG_END --></div>
						
						<div class="${"flex items-center space-x-2"}">${t.action ? `<button class="${"btn " + escape(buttonAction, true)}"><!-- HTML_TAG_START -->${t.action.label}<!-- HTML_TAG_END --></button>` : ``}
							<button class="${"btn-icon " + escape(buttonDismiss, true)}">✕</button></div>
					</div>` : ``}`;
  })}</div></div>` : ``}`;
});
const app = "";
const themeVintage = "";
const all = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "#navbar.svelte-1i5k432{display:flex;justify-content:center;align-items:center;margin:0 auto;position:absolute;top:5%;left:50%;transform:translate(-50%, -50%);text-decoration:none;font-size:1.5vw;font-weight:bolder;text-shadow:2px 2px #ffffff;z-index:1}a.svelte-1i5k432{text-decoration:none;color:black;margin:2px}@media screen and (orientation: portrait){#navbar.svelte-1i5k432{list-style-type:none;margin:0;padding:0;position:absolute;top:5%;left:20%;transform:translate(-10%, -50%);text-decoration:none;font-size:3vw;font-weight:bolder;text-shadow:0.05vw 0.05vw #ffffff;z-index:1}a.svelte-1i5k432{text-decoration:none;color:black}}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<div id="${"navbar"}" class="${"svelte-1i5k432"}"><a href="${"/Better Call Saul"}" target="${"_self"}" class="${"svelte-1i5k432"}">Better Call Saul</a> |
	<a href="${"/Lucifer"}" target="${"_self"}" class="${"svelte-1i5k432"}">Lucifer</a> |
	<a href="${"/Stranger Things"}" target="${"_self"}" class="${"svelte-1i5k432"}">Stranger Things</a> |
	<a href="${"/Breaking Bad"}" target="${"_self"}" class="${"svelte-1i5k432"}">Breaking Bad</a> |
	<a href="${"/"}" target="${"_self"}" class="${"svelte-1i5k432"}">Random</a></div>

<title>${escape($page.route.id ? $page.route.id.substr(1) + " Quotes" : "Quotes")}</title>

${validate_component(Toast, "Toast").$$render($$result, {}, {}, {})}

${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
