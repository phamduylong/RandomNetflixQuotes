function y(){}const ut=t=>t;function at(t,e){for(const n in e)t[n]=e[n];return t}function W(t){return t()}function J(){return Object.create(null)}function E(t){t.forEach(W)}function F(t){return typeof t=="function"}function ft(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let C;function Tt(t,e){return C||(C=document.createElement("a")),C.href=e,t===C.href}function _t(t){return Object.keys(t).length===0}function V(t,...e){if(t==null)return y;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Bt(t){let e;return V(t,n=>e=n)(),e}function Lt(t,e,n){t.$$.on_destroy.push(V(e,n))}function Ft(t,e,n,i){if(t){const r=X(t,e,n,i);return t[0](r)}}function X(t,e,n,i){return t[1]&&i?at(n.ctx.slice(),t[1](i(e))):n.ctx}function Ht(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const u=[],c=Math.max(e.dirty.length,r.length);for(let s=0;s<c;s+=1)u[s]=e.dirty[s]|r[s];return u}return e.dirty|r}return e.dirty}function It(t,e,n,i,r,u){if(r){const c=X(e,n,i,u);t.p(c,r)}}function Gt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Jt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}const Y=typeof window<"u";let dt=Y?()=>window.performance.now():()=>Date.now(),H=Y?t=>requestAnimationFrame(t):y;const v=new Set;function Z(t){v.forEach(e=>{e.c(t)||(v.delete(e),e.f())}),v.size!==0&&H(Z)}function ht(t){let e;return v.size===0&&H(Z),{promise:new Promise(n=>{v.add(e={c:t,f:n})}),abort(){v.delete(e)}}}let D=!1;function mt(){D=!0}function pt(){D=!1}function yt(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function gt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let o=0;o<e.length;o++){const _=e[o];_.claim_order!==void 0&&l.push(_)}e=l}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let l=0;l<e.length;l++){const o=e[l].claim_order,_=(r>0&&e[n[r]].claim_order<=o?r+1:yt(1,r,h=>e[n[h]].claim_order,o))-1;i[l]=n[_]+1;const a=_+1;n[a]=l,r=Math.max(a,r)}const u=[],c=[];let s=e.length-1;for(let l=n[r]+1;l!=0;l=i[l-1]){for(u.push(e[l-1]);s>=l;s--)c.push(e[s]);s--}for(;s>=0;s--)c.push(e[s]);u.reverse(),c.sort((l,o)=>l.claim_order-o.claim_order);for(let l=0,o=0;l<c.length;l++){for(;o<u.length&&c[l].claim_order>=u[o].claim_order;)o++;const _=o<u.length?u[o]:null;t.insertBefore(c[l],_)}}function bt(t,e){t.appendChild(e)}function tt(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function xt(t){const e=nt("style");return $t(tt(t),e),e.sheet}function $t(t,e){return bt(t.head||t,e),e.sheet}function wt(t,e){if(D){for(gt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Kt(t,e,n){D&&!n?wt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function et(t){t.parentNode&&t.parentNode.removeChild(t)}function Qt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function nt(t){return document.createElement(t)}function I(t){return document.createTextNode(t)}function Ut(){return I(" ")}function Wt(){return I("")}function Vt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Xt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function vt(t){return Array.from(t.childNodes)}function Et(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function it(t,e,n,i,r=!1){Et(t);const u=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const s=t[c];if(e(s)){const l=n(s);return l===void 0?t.splice(c,1):t[c]=l,r||(t.claim_info.last_index=c),s}}for(let c=t.claim_info.last_index-1;c>=0;c--){const s=t[c];if(e(s)){const l=n(s);return l===void 0?t.splice(c,1):t[c]=l,r?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,s}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function Nt(t,e,n,i){return it(t,r=>r.nodeName===e,r=>{const u=[];for(let c=0;c<r.attributes.length;c++){const s=r.attributes[c];n[s.name]||u.push(s.name)}u.forEach(c=>r.removeAttribute(c))},()=>i(e))}function Yt(t,e,n){return Nt(t,e,n,nt)}function kt(t,e){return it(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>I(e),!0)}function Zt(t){return kt(t," ")}function te(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function ee(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function rt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function ne(t,e){return new t(e)}const q=new Map;let P=0;function At(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function St(t,e){const n={stylesheet:xt(e),rules:{}};return q.set(t,n),n}function K(t,e,n,i,r,u,c,s=0){const l=16.666/i;let o=`{
`;for(let g=0;g<=1;g+=l){const b=e+(n-e)*u(g);o+=g*100+`%{${c(b,1-b)}}
`}const _=o+`100% {${c(n,1-n)}}
}`,a=`__svelte_${At(_)}_${s}`,h=tt(t),{stylesheet:f,rules:d}=q.get(h)||St(h,t);d[a]||(d[a]=!0,f.insertRule(`@keyframes ${a} ${_}`,f.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${a} ${i}ms linear ${r}ms 1 both`,P+=1,a}function Ct(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?u=>u.indexOf(e)<0:u=>u.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),P-=r,P||jt())}function jt(){H(()=>{P||(q.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&et(e)}),q.clear())})}let A;function k(t){A=t}function G(){if(!A)throw new Error("Function called outside component initialization");return A}function ie(t){G().$$.on_mount.push(t)}function re(t){G().$$.after_update.push(t)}function se(){const t=G();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const u=rt(e,n,{cancelable:i});return r.slice().forEach(c=>{c.call(t,u)}),!u.defaultPrevented}return!0}}const w=[],Q=[],j=[],U=[],st=Promise.resolve();let L=!1;function ct(){L||(L=!0,st.then(ot))}function ce(){return ct(),st}function z(t){j.push(t)}const T=new Set;let x=0;function ot(){if(x!==0)return;const t=A;do{try{for(;x<w.length;){const e=w[x];x++,k(e),Mt(e.$$)}}catch(e){throw w.length=0,x=0,e}for(k(null),w.length=0,x=0;Q.length;)Q.pop()();for(let e=0;e<j.length;e+=1){const n=j[e];T.has(n)||(T.add(n),n())}j.length=0}while(w.length);for(;U.length;)U.pop()();L=!1,T.clear(),k(t)}function Mt(t){if(t.fragment!==null){t.update(),E(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(z)}}let N;function qt(){return N||(N=Promise.resolve(),N.then(()=>{N=null})),N}function B(t,e,n){t.dispatchEvent(rt(`${e?"intro":"outro"}${n}`))}const M=new Set;let p;function oe(){p={r:0,c:[],p}}function le(){p.r||E(p.c),p=p.p}function Pt(t,e){t&&t.i&&(M.delete(t),t.i(e))}function ue(t,e,n,i){if(t&&t.o){if(M.has(t))return;M.add(t),p.c.push(()=>{M.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const zt={duration:0};function ae(t,e,n,i){const r={direction:"both"};let u=e(t,n,r),c=i?0:1,s=null,l=null,o=null;function _(){o&&Ct(t,o)}function a(f,d){const m=f.b-c;return d*=Math.abs(m),{a:c,b:f.b,d:m,duration:d,start:f.start,end:f.start+d,group:f.group}}function h(f){const{delay:d=0,duration:m=300,easing:g=ut,tick:b=y,css:O}=u||zt,R={start:dt()+d,b:f};f||(R.group=p,p.r+=1),s||l?l=R:(O&&(_(),o=K(t,c,f,m,d,g,O)),f&&b(0,1),s=a(R,m),z(()=>B(t,f,"start")),ht(S=>{if(l&&S>l.start&&(s=a(l,m),l=null,B(t,s.b,"start"),O&&(_(),o=K(t,c,s.b,s.duration,0,g,u.css))),s){if(S>=s.end)b(c=s.b,1-c),B(t,s.b,"end"),l||(s.b?_():--s.group.r||E(s.group.c)),s=null;else if(S>=s.start){const lt=S-s.start;c=s.a+s.d*g(lt/s.duration),b(c,1-c)}}return!!(s||l)}))}return{run(f){F(u)?qt().then(()=>{u=u(r),h(f)}):h(f)},end(){_(),s=l=null}}}function fe(t){t&&t.c()}function _e(t,e){t&&t.l(e)}function Dt(t,e,n,i){const{fragment:r,after_update:u}=t.$$;r&&r.m(e,n),i||z(()=>{const c=t.$$.on_mount.map(W).filter(F);t.$$.on_destroy?t.$$.on_destroy.push(...c):E(c),t.$$.on_mount=[]}),u.forEach(z)}function Ot(t,e){const n=t.$$;n.fragment!==null&&(E(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Rt(t,e){t.$$.dirty[0]===-1&&(w.push(t),ct(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function de(t,e,n,i,r,u,c,s=[-1]){const l=A;k(t);const o=t.$$={fragment:null,ctx:[],props:u,update:y,not_equal:r,bound:J(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:J(),dirty:s,skip_bound:!1,root:e.target||l.$$.root};c&&c(o.root);let _=!1;if(o.ctx=n?n(t,e.props||{},(a,h,...f)=>{const d=f.length?f[0]:h;return o.ctx&&r(o.ctx[a],o.ctx[a]=d)&&(!o.skip_bound&&o.bound[a]&&o.bound[a](d),_&&Rt(t,a)),h}):[],o.update(),_=!0,E(o.before_update),o.fragment=i?i(o.ctx):!1,e.target){if(e.hydrate){mt();const a=vt(e.target);o.fragment&&o.fragment.l(a),a.forEach(et)}else o.fragment&&o.fragment.c();e.intro&&Pt(t.$$.fragment),Dt(t,e.target,e.anchor,e.customElement),pt(),ot()}k(l)}class he{$destroy(){Ot(this,1),this.$destroy=y}$on(e,n){if(!F(n))return y;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!_t(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const $=[];function me(t,e=y){let n;const i=new Set;function r(s){if(ft(t,s)&&(t=s,n)){const l=!$.length;for(const o of i)o[1](),$.push(o,t);if(l){for(let o=0;o<$.length;o+=2)$[o][0]($[o+1]);$.length=0}}}function u(s){r(s(t))}function c(s,l=y){const o=[s,l];return i.add(o),i.size===1&&(n=e(r)||y),s(t),()=>{i.delete(o),i.size===0&&(n(),n=null)}}return{set:r,update:u,subscribe:c}}export{Ot as A,ce as B,me as C,Lt as D,at as E,Jt as F,wt as G,z as H,ae as I,Qt as J,Vt as K,Ft as L,It as M,Gt as N,Ht as O,Bt as P,y as Q,Tt as R,he as S,F as T,se as U,Ut as a,Kt as b,Zt as c,le as d,Wt as e,Pt as f,oe as g,et as h,de as i,re as j,nt as k,Yt as l,vt as m,Xt as n,ie as o,ee as p,I as q,kt as r,ft as s,ue as t,te as u,Q as v,ne as w,fe as x,_e as y,Dt as z};
