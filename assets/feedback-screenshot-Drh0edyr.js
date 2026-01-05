(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function fe(e,t){if(e.match(/^[a-z]+:\/\//i))return e;if(e.match(/^\/\//))return window.location.protocol+e;if(e.match(/^[a-z]+:/i))return e;const n=document.implementation.createHTMLDocument(),r=n.createElement("base"),i=n.createElement("a");return n.head.appendChild(r),n.body.appendChild(i),t&&(r.href=t),i.href=e,i.href}const ue=(()=>{let e=0;const t=()=>`0000${(Math.random()*36**4<<0).toString(36)}`.slice(-4);return()=>(e+=1,`u${t()}${e}`)})();function y(e){const t=[];for(let n=0,r=e.length;n<r;n++)t.push(e[n]);return t}let w=null;function V(e={}){return w||(e.includeStyleProperties?(w=e.includeStyleProperties,w):(w=y(window.getComputedStyle(document.documentElement)),w))}function S(e,t){const r=(e.ownerDocument.defaultView||window).getComputedStyle(e).getPropertyValue(t);return r?parseFloat(r.replace("px","")):0}function me(e){const t=S(e,"border-left-width"),n=S(e,"border-right-width");return e.clientWidth+t+n}function pe(e){const t=S(e,"border-top-width"),n=S(e,"border-bottom-width");return e.clientHeight+t+n}function j(e,t={}){const n=t.width||me(e),r=t.height||pe(e);return{width:n,height:r}}function he(){let e,t;try{t=process}catch{}const n=t&&t.env?t.env.devicePixelRatio:null;return n&&(e=parseInt(n,10),Number.isNaN(e)&&(e=1)),e||window.devicePixelRatio||1}const p=16384;function ge(e){(e.width>p||e.height>p)&&(e.width>p&&e.height>p?e.width>e.height?(e.height*=p/e.width,e.width=p):(e.width*=p/e.height,e.height=p):e.width>p?(e.height*=p/e.width,e.width=p):(e.width*=p/e.height,e.height=p))}function C(e){return new Promise((t,n)=>{const r=new Image;r.onload=()=>{r.decode().then(()=>{requestAnimationFrame(()=>t(r))})},r.onerror=n,r.crossOrigin="anonymous",r.decoding="async",r.src=e})}async function be(e){return Promise.resolve().then(()=>new XMLSerializer().serializeToString(e)).then(encodeURIComponent).then(t=>`data:image/svg+xml;charset=utf-8,${t}`)}async function ye(e,t,n){const r="http://www.w3.org/2000/svg",i=document.createElementNS(r,"svg"),o=document.createElementNS(r,"foreignObject");return i.setAttribute("width",`${t}`),i.setAttribute("height",`${n}`),i.setAttribute("viewBox",`0 0 ${t} ${n}`),o.setAttribute("width","100%"),o.setAttribute("height","100%"),o.setAttribute("x","0"),o.setAttribute("y","0"),o.setAttribute("externalResourcesRequired","true"),i.appendChild(o),o.appendChild(e),be(i)}const m=(e,t)=>{if(e instanceof t)return!0;const n=Object.getPrototypeOf(e);return n===null?!1:n.constructor.name===t.name||m(n,t)};function xe(e){const t=e.getPropertyValue("content");return`${e.cssText} content: '${t.replace(/'|"/g,"")}';`}function we(e,t){return V(t).map(n=>{const r=e.getPropertyValue(n),i=e.getPropertyPriority(n);return`${n}: ${r}${i?" !important":""};`}).join(" ")}function ve(e,t,n,r){const i=`.${e}:${t}`,o=n.cssText?xe(n):we(n,r);return document.createTextNode(`${i}{${o}}`)}function B(e,t,n,r){const i=window.getComputedStyle(e,n),o=i.getPropertyValue("content");if(o===""||o==="none")return;const s=ue();try{t.className=`${t.className} ${s}`}catch{return}const c=document.createElement("style");c.appendChild(ve(s,n,i,r)),t.appendChild(c)}function ke(e,t,n){B(e,t,":before",n),B(e,t,":after",n)}const H="application/font-woff",A="image/jpeg",Pe={woff:H,woff2:H,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:A,jpeg:A,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml",webp:"image/webp"};function Se(e){const t=/\.([^./]*?)$/g.exec(e);return t?t[1]:""}function R(e){const t=Se(e).toLowerCase();return Pe[t]||""}function Ce(e){return e.split(/,/)[1]}function I(e){return e.search(/^(data:)/)!==-1}function Ee(e,t){return`data:${t};base64,${e}`}async function W(e,t,n){const r=await fetch(e,t);if(r.status===404)throw new Error(`Resource "${r.url}" not found`);const i=await r.blob();return new Promise((o,s)=>{const c=new FileReader;c.onerror=s,c.onloadend=()=>{try{o(n({res:r,result:c.result}))}catch(l){s(l)}},c.readAsDataURL(i)})}const O={};function Le(e,t,n){let r=e.replace(/\?.*/,"");return n&&(r=e),/ttf|otf|eot|woff2?/i.test(r)&&(r=r.replace(/.*\//,"")),t?`[${t}]${r}`:r}async function $(e,t,n){const r=Le(e,t,n.includeQueryParams);if(O[r]!=null)return O[r];n.cacheBust&&(e+=(/\?/.test(e)?"&":"?")+new Date().getTime());let i;try{const o=await W(e,n.fetchRequestInit,({res:s,result:c})=>(t||(t=s.headers.get("Content-Type")||""),Ce(c)));i=Ee(o,t)}catch(o){i=n.imagePlaceholder||"";let s=`Failed to fetch resource: ${e}`;o&&(s=typeof o=="string"?o:o.message),s&&console.warn(s)}return O[r]=i,i}async function Te(e){const t=e.toDataURL();return t==="data:,"?e.cloneNode(!1):C(t)}async function Oe(e,t){if(e.currentSrc){const o=document.createElement("canvas"),s=o.getContext("2d");o.width=e.clientWidth,o.height=e.clientHeight,s?.drawImage(e,0,0,o.width,o.height);const c=o.toDataURL();return C(c)}const n=e.poster,r=R(n),i=await $(n,r,t);return C(i)}async function Ie(e,t){var n;try{if(!((n=e?.contentDocument)===null||n===void 0)&&n.body)return await L(e.contentDocument.body,t,!0)}catch{}return e.cloneNode(!1)}async function Re(e,t){return m(e,HTMLCanvasElement)?Te(e):m(e,HTMLVideoElement)?Oe(e,t):m(e,HTMLIFrameElement)?Ie(e,t):e.cloneNode(q(e))}const $e=e=>e.tagName!=null&&e.tagName.toUpperCase()==="SLOT",q=e=>e.tagName!=null&&e.tagName.toUpperCase()==="SVG";async function Fe(e,t,n){var r,i;if(q(t))return t;let o=[];return $e(e)&&e.assignedNodes?o=y(e.assignedNodes()):m(e,HTMLIFrameElement)&&(!((r=e.contentDocument)===null||r===void 0)&&r.body)?o=y(e.contentDocument.body.childNodes):o=y(((i=e.shadowRoot)!==null&&i!==void 0?i:e).childNodes),o.length===0||m(e,HTMLVideoElement)||await o.reduce((s,c)=>s.then(()=>L(c,n)).then(l=>{l&&t.appendChild(l)}),Promise.resolve()),t}function Me(e,t,n){const r=t.style;if(!r)return;const i=window.getComputedStyle(e);i.cssText?(r.cssText=i.cssText,r.transformOrigin=i.transformOrigin):V(n).forEach(o=>{let s=i.getPropertyValue(o);o==="font-size"&&s.endsWith("px")&&(s=`${Math.floor(parseFloat(s.substring(0,s.length-2)))-.1}px`),m(e,HTMLIFrameElement)&&o==="display"&&s==="inline"&&(s="block"),o==="d"&&t.getAttribute("d")&&(s=`path(${t.getAttribute("d")})`),r.setProperty(o,s,i.getPropertyPriority(o))})}function Be(e,t){m(e,HTMLTextAreaElement)&&(t.innerHTML=e.value),m(e,HTMLInputElement)&&t.setAttribute("value",e.value)}function He(e,t){if(m(e,HTMLSelectElement)){const r=Array.from(t.children).find(i=>e.value===i.getAttribute("value"));r&&r.setAttribute("selected","")}}function Ae(e,t,n){return m(t,Element)&&(Me(e,t,n),ke(e,t,n),Be(e,t),He(e,t)),t}async function Ne(e,t){const n=e.querySelectorAll?e.querySelectorAll("use"):[];if(n.length===0)return e;const r={};for(let o=0;o<n.length;o++){const c=n[o].getAttribute("xlink:href");if(c){const l=e.querySelector(c),u=document.querySelector(c);!l&&u&&!r[c]&&(r[c]=await L(u,t,!0))}}const i=Object.values(r);if(i.length){const o="http://www.w3.org/1999/xhtml",s=document.createElementNS(o,"svg");s.setAttribute("xmlns",o),s.style.position="absolute",s.style.width="0",s.style.height="0",s.style.overflow="hidden",s.style.display="none";const c=document.createElementNS(o,"defs");s.appendChild(c);for(let l=0;l<i.length;l++)c.appendChild(i[l]);e.appendChild(s)}return e}async function L(e,t,n){return!n&&t.filter&&!t.filter(e)?null:Promise.resolve(e).then(r=>Re(r,t)).then(r=>Fe(e,r,t)).then(r=>Ae(e,r,t)).then(r=>Ne(r,t))}const X=/url\((['"]?)([^'"]+?)\1\)/g,Ue=/url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,_e=/src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;function De(e){const t=e.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1");return new RegExp(`(url\\(['"]?)(${t})(['"]?\\))`,"g")}function ze(e){const t=[];return e.replace(X,(n,r,i)=>(t.push(i),n)),t.filter(n=>!I(n))}async function Ve(e,t,n,r,i){try{const o=n?fe(t,n):t,s=R(t);let c;return i||(c=await $(o,s,r)),e.replace(De(t),`$1${c}$3`)}catch{}return e}function je(e,{preferredFontFormat:t}){return t?e.replace(_e,n=>{for(;;){const[r,,i]=Ue.exec(n)||[];if(!i)return"";if(i===t)return`src: ${r};`}}):e}function G(e){return e.search(X)!==-1}async function Y(e,t,n){if(!G(e))return e;const r=je(e,n);return ze(r).reduce((o,s)=>o.then(c=>Ve(c,s,t,n)),Promise.resolve(r))}async function v(e,t,n){var r;const i=(r=t.style)===null||r===void 0?void 0:r.getPropertyValue(e);if(i){const o=await Y(i,null,n);return t.style.setProperty(e,o,t.style.getPropertyPriority(e)),!0}return!1}async function We(e,t){await v("background",e,t)||await v("background-image",e,t),await v("mask",e,t)||await v("-webkit-mask",e,t)||await v("mask-image",e,t)||await v("-webkit-mask-image",e,t)}async function qe(e,t){const n=m(e,HTMLImageElement);if(!(n&&!I(e.src))&&!(m(e,SVGImageElement)&&!I(e.href.baseVal)))return;const r=n?e.src:e.href.baseVal,i=await $(r,R(r),t);await new Promise((o,s)=>{e.onload=o,e.onerror=t.onImageErrorHandler?(...l)=>{try{o(t.onImageErrorHandler(...l))}catch(u){s(u)}}:s;const c=e;c.decode&&(c.decode=o),c.loading==="lazy"&&(c.loading="eager"),n?(e.srcset="",e.src=i):e.href.baseVal=i})}async function Xe(e,t){const r=y(e.childNodes).map(i=>Z(i,t));await Promise.all(r).then(()=>e)}async function Z(e,t){m(e,Element)&&(await We(e,t),await qe(e,t),await Xe(e,t))}function Ge(e,t){const{style:n}=e;t.backgroundColor&&(n.backgroundColor=t.backgroundColor),t.width&&(n.width=`${t.width}px`),t.height&&(n.height=`${t.height}px`);const r=t.style;return r!=null&&Object.keys(r).forEach(i=>{n[i]=r[i]}),e}const N={};async function U(e){let t=N[e];if(t!=null)return t;const r=await(await fetch(e)).text();return t={url:e,cssText:r},N[e]=t,t}async function _(e,t){let n=e.cssText;const r=/url\(["']?([^"')]+)["']?\)/g,o=(n.match(/url\([^)]+\)/g)||[]).map(async s=>{let c=s.replace(r,"$1");return c.startsWith("https://")||(c=new URL(c,e.url).href),W(c,t.fetchRequestInit,({result:l})=>(n=n.replace(s,`url(${l})`),[s,l]))});return Promise.all(o).then(()=>n)}function D(e){if(e==null)return[];const t=[],n=/(\/\*[\s\S]*?\*\/)/gi;let r=e.replace(n,"");const i=new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})","gi");for(;;){const l=i.exec(r);if(l===null)break;t.push(l[0])}r=r.replace(i,"");const o=/@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,s="((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})",c=new RegExp(s,"gi");for(;;){let l=o.exec(r);if(l===null){if(l=c.exec(r),l===null)break;o.lastIndex=c.lastIndex}else c.lastIndex=o.lastIndex;t.push(l[0])}return t}async function Ye(e,t){const n=[],r=[];return e.forEach(i=>{if("cssRules"in i)try{y(i.cssRules||[]).forEach((o,s)=>{if(o.type===CSSRule.IMPORT_RULE){let c=s+1;const l=o.href,u=U(l).then(g=>_(g,t)).then(g=>D(g).forEach(b=>{try{i.insertRule(b,b.startsWith("@import")?c+=1:i.cssRules.length)}catch(x){console.error("Error inserting rule from remote css",{rule:b,error:x})}})).catch(g=>{console.error("Error loading remote css",g.toString())});r.push(u)}})}catch(o){const s=e.find(c=>c.href==null)||document.styleSheets[0];i.href!=null&&r.push(U(i.href).then(c=>_(c,t)).then(c=>D(c).forEach(l=>{s.insertRule(l,s.cssRules.length)})).catch(c=>{console.error("Error loading remote stylesheet",c)})),console.error("Error inlining remote css file",o)}}),Promise.all(r).then(()=>(e.forEach(i=>{if("cssRules"in i)try{y(i.cssRules||[]).forEach(o=>{n.push(o)})}catch(o){console.error(`Error while reading CSS rules from ${i.href}`,o)}}),n))}function Ze(e){return e.filter(t=>t.type===CSSRule.FONT_FACE_RULE).filter(t=>G(t.style.getPropertyValue("src")))}async function Ke(e,t){if(e.ownerDocument==null)throw new Error("Provided element is not within a Document");const n=y(e.ownerDocument.styleSheets),r=await Ye(n,t);return Ze(r)}function K(e){return e.trim().replace(/["']/g,"")}function Je(e){const t=new Set;function n(r){(r.style.fontFamily||getComputedStyle(r).fontFamily).split(",").forEach(o=>{t.add(K(o))}),Array.from(r.children).forEach(o=>{o instanceof HTMLElement&&n(o)})}return n(e),t}async function Qe(e,t){const n=await Ke(e,t),r=Je(e);return(await Promise.all(n.filter(o=>r.has(K(o.style.fontFamily))).map(o=>{const s=o.parentStyleSheet?o.parentStyleSheet.href:null;return Y(o.cssText,s,t)}))).join(`
`)}async function et(e,t){const n=t.fontEmbedCSS!=null?t.fontEmbedCSS:t.skipFonts?null:await Qe(e,t);if(n){const r=document.createElement("style"),i=document.createTextNode(n);r.appendChild(i),e.firstChild?e.insertBefore(r,e.firstChild):e.appendChild(r)}}async function tt(e,t={}){const{width:n,height:r}=j(e,t),i=await L(e,t,!0);return await et(i,t),await Z(i,t),Ge(i,t),await ye(i,n,r)}async function nt(e,t={}){const{width:n,height:r}=j(e,t),i=await tt(e,t),o=await C(i),s=document.createElement("canvas"),c=s.getContext("2d"),l=t.pixelRatio||he(),u=t.canvasWidth||n,g=t.canvasHeight||r;return s.width=u*l,s.height=g*l,t.skipAutoScale||ge(s),s.style.width=`${u}`,s.style.height=`${g}`,t.backgroundColor&&(c.fillStyle=t.backgroundColor,c.fillRect(0,0,s.width,s.height)),c.drawImage(o,0,0,s.width,s.height),s}async function rt(e,t={}){return(await nt(e,t)).toDataURL()}const h={BUTTON_SIZE:56,BUTTON_POSITION:{bottom:24,left:24},PIN_SIZE:40,PIN_DEFAULT_COLOR:"#7cb545",SCREENSHOT_AREA_SIZE:800,API_ENDPOINT:"http://farmeto.back.bz/api/services/app/PublicDashboard/SubmitFeedback"},d={isFeedbackMode:!1,selectedColor:h.PIN_DEFAULT_COLOR,selectedIcon:"flag",pins:[],currentPin:null,screenshot:null,isCapturing:!1,isSubmitting:!1,viewingExistingPin:!1},it=[{name:"سبز اصلی",value:"#7cb545"},{name:"سبز تیره",value:"#275c35"},{name:"سبز روشن",value:"#639e34"},{name:"سبز نعنایی",value:"#65a30d"},{name:"قرمز",value:"#ef4444"},{name:"نارنجی",value:"#f97316"},{name:"آبی",value:"#3b82f6"},{name:"بنفش",value:"#8b5cf6"},{name:"صورتی",value:"#ec4899"},{name:"زرد",value:"#facc15"}],ot=[{name:"پرچم",icon:"flag"},{name:"ستاره",icon:"star"},{name:"قلب",icon:"favorite"},{name:"علامت",icon:"campaign"},{name:"سوال",icon:"help"},{name:"اطلاع",icon:"info"},{name:"هشدار",icon:"warning"},{name:"نشان",icon:"place"},{name:"چک‌مارک",icon:"check_circle"},{name:"اشاره",icon:"arrow_forward"}];let a={triggerButton:null,overlay:null,pinsContainer:null,modal:null,modalOverlay:null,form:null,titleInput:null,submitBtn:null,cancelBtn:null,closeModalBtn:null,screenshotPreview:null,colorPicker:null,iconPicker:null,settingsPanel:null};function f(e,t={},n=[]){const r=document.createElement(e);return Object.entries(t).forEach(([i,o])=>{i==="className"?r.className=o:i==="textContent"?r.textContent=o:i==="innerHTML"?r.innerHTML=o:i==="style"&&typeof o=="object"?Object.assign(r.style,o):i==="style"&&typeof o=="string"?r.style.cssText=o:i.startsWith("data-")?r.setAttribute(i,o):r[i]=o}),n.forEach(i=>{typeof i=="string"?r.appendChild(document.createTextNode(i)):r.appendChild(i)}),r}function J(){document.body.style.overflow="hidden"}function Q(){document.body.style.overflow=""}function at(){const e="feedback-screenshot-styles";if(document.getElementById(e))return;const t=`
    /* Trigger Button */
    .feedback-trigger-btn {
      z-index: 99998 !important;
      position: fixed;
      bottom: ${h.BUTTON_POSITION.bottom}px;
      left: ${h.BUTTON_POSITION.left}px;
      width: ${h.BUTTON_SIZE}px;
      height: ${h.BUTTON_SIZE}px;
      background: linear-gradient(135deg, #7cb545 0%, #639e34 100%);
      border: none;
      border-radius: 50%;
      cursor: pointer;
      box-shadow: 0 4px 20px rgba(124, 181, 69, 0.4);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      color: white;
      font-family: "Material Symbols Outlined";
      font-size: 28px;
      line-height: 1;
      font-weight: normal;
      font-style: normal;
    }

    .feedback-trigger-btn:hover {
      transform: scale(1.1);
      box-shadow: 0 6px 30px rgba(124, 181, 69, 0.6);
    }

    .feedback-trigger-btn:active {
      transform: scale(0.95);
    }

    .feedback-trigger-btn.active {
      background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
      box-shadow: 0 4px 20px rgba(239, 68, 68, 0.4);
    }

    /* Settings Panel */
    .feedback-settings-panel {
      position: fixed;
      bottom: ${h.BUTTON_POSITION.bottom+h.BUTTON_SIZE+16}px;
      left: ${h.BUTTON_POSITION.left}px;
      background: white;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
      padding: 20px;
      display: none;
      flex-direction: column;
      gap: 20px;
      z-index: 99997;
      min-width: 280px;
      animation: slideUp 0.2s ease-out;
      direction: rtl;
    }

    .feedback-settings-panel.active {
      display: flex;
    }

    @keyframes slideUp {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .feedback-settings-section {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .feedback-settings-label {
      font-size: 14px;
      font-weight: bold;
      color: #052e16;
      margin: 0;
    }

    .feedback-color-picker {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }

    .feedback-color-option {
      width: 36px;
      height: 36px;
      border-radius: 8px;
      border: 3px solid transparent;
      cursor: pointer;
      transition: all 0.2s;
      position: relative;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .feedback-color-option:hover {
      transform: scale(1.1);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    }

    .feedback-color-option.selected {
      border-color: #052e16;
      box-shadow: 0 0 0 2px white, 0 0 0 4px #052e16;
    }

    .feedback-color-option.selected::after {
      content: "✓";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: white;
      font-weight: bold;
      font-size: 16px;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    }

    .feedback-icon-picker {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 8px;
    }

    .feedback-icon-option {
      width: 44px;
      height: 44px;
      border-radius: 8px;
      border: 2px solid #e5e7eb;
      background: white;
      cursor: pointer;
      transition: all 0.2s;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: "Material Symbols Outlined";
      font-size: 24px;
      color: #374151;
    }

    .feedback-icon-option:hover {
      border-color: #7cb545;
      background: #f0fdf4;
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(124, 181, 69, 0.2);
    }

    .feedback-icon-option.selected {
      border-color: #7cb545;
      background: #7cb545;
      color: white;
      box-shadow: 0 0 0 2px white, 0 0 0 4px #7cb545;
    }

    .feedback-start-btn {
      width: 100%;
      padding: 12px;
      background: linear-gradient(135deg, #7cb545 0%, #639e34 100%);
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 14px;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.2s;
      font-family: "Kalameh", inherit;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
    }

    .feedback-start-btn:hover {
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(124, 181, 69, 0.4);
    }

    .feedback-start-btn:active {
      transform: translateY(0);
    }

    /* Feedback Overlay */
    .feedback-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: transparent;
      z-index: 9999;
      cursor: crosshair;
      display: none;
    }

    .feedback-overlay.active {
      display: block;
    }

    /* Pins Container */
    .feedback-pins-container {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      min-height: 100%;
      pointer-events: none;
      z-index: 10000;
    }

    /* Pin/Pointer */
    .feedback-pin {
      position: absolute;
      width: ${h.PIN_SIZE}px;
      height: ${h.PIN_SIZE}px;
      transform: translate(-50%, -100%);
      pointer-events: auto;
      cursor: pointer;
      z-index: 10001;
    }

    .feedback-pin-marker {
      width: 100%;
      height: 100%;
      border: 3px solid white;
      border-radius: 50%;
      box-shadow: 0 2px 12px rgba(0, 0, 0, 0.25);
      transition: transform 0.2s;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: "Material Symbols Outlined";
      font-size: 20px;
      color: white;
      font-weight: normal;
      font-style: normal;
    }

    .feedback-pin:hover .feedback-pin-marker {
      transform: scale(1.15);
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.35);
    }

    /* Modal Overlay */
    .feedback-modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.6);
      backdrop-filter: blur(4px);
      z-index: 10004;
      display: none;
      align-items: center;
      justify-content: center;
      padding: 20px;
      opacity: 0;
      animation: fadeIn 0.2s ease-out forwards;
    }

    .feedback-modal-overlay.active {
      display: flex;
    }

    @keyframes fadeIn {
      to {
        opacity: 1;
      }
    }

    /* Modal */
    .feedback-modal {
      background: white;
      border-radius: 16px;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
      max-width: 600px;
      max-height: 90vh;
      width: 100%;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      transform: scale(0.9);
      animation: modalSlideIn 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
      direction: rtl;
    }

    @keyframes modalSlideIn {
      to {
        transform: scale(1);
      }
    }

    .feedback-modal-header {
      padding: 20px 24px;
      border-bottom: 1px solid #e5e7eb;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: #f0fdf4;
    }

    .feedback-modal-title {
      font-size: 20px;
      font-weight: bold;
      color: #052e16;
      margin: 0;
    }

    .feedback-modal-close-btn {
      background: none;
      border: none;
      font-size: 28px;
      color: #6b7280;
      cursor: pointer;
      padding: 4px;
      line-height: 1;
      border-radius: 8px;
      transition: all 0.2s;
      width: 36px;
      height: 36px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: "Material Symbols Outlined";
    }

    .feedback-modal-close-btn:hover {
      background: #e5e7eb;
      color: #052e16;
    }

    .feedback-modal-body {
      padding: 24px;
      overflow-y: auto;
      flex: 1;
    }

    /* Form */
    .feedback-form {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .feedback-form-group {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .feedback-form-label {
      font-size: 14px;
      font-weight: bold;
      color: #052e16;
    }

    .feedback-form-input,
    .feedback-form-textarea {
      width: 100%;
      padding: 12px;
      border: 2px solid #e5e7eb;
      border-radius: 8px;
      font-size: 14px;
      font-family: "Kalameh", inherit;
      transition: border-color 0.2s;
      box-sizing: border-box;
      direction: rtl;
    }

    .feedback-form-textarea {
      min-height: 120px;
      resize: vertical;
    }

    .feedback-form-input:focus,
    .feedback-form-textarea:focus {
      outline: none;
      border-color: #7cb545;
      box-shadow: 0 0 0 3px rgba(124, 181, 69, 0.1);
    }

    .feedback-modal-footer {
      padding: 20px 24px;
      border-top: 1px solid #e5e7eb;
      display: flex;
      gap: 12px;
      justify-content: flex-end;
      background: #f9fafb;
    }

    .feedback-form-btn {
      padding: 12px 24px;
      border-radius: 8px;
      font-size: 14px;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.2s;
      border: none;
      font-family: "Kalameh", inherit;
    }

    .feedback-form-btn-primary {
      background: linear-gradient(135deg, #7cb545 0%, #639e34 100%);
      color: white;
    }

    .feedback-form-btn-primary:hover:not(:disabled) {
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(124, 181, 69, 0.4);
    }

    .feedback-form-btn-secondary {
      background: white;
      color: #374151;
      border: 2px solid #d1d5db;
    }

    .feedback-form-btn-secondary:hover {
      background: #f9fafb;
      border-color: #9ca3af;
    }

    .feedback-form-btn:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    /* Screenshot Preview */
    .feedback-screenshot-preview {
      margin-top: 8px;
      border-radius: 8px;
      overflow: hidden;
      border: 2px solid #e5e7eb;
      display: none;
    }

    .feedback-screenshot-preview.has-screenshot {
      display: block;
    }

    .feedback-screenshot-preview img {
      width: 100%;
      height: auto;
      display: block;
    }

    /* Responsive */
    @media (max-width: 640px) {
      .feedback-modal {
        max-height: 95vh;
        border-radius: 16px 16px 0 0;
        margin-top: auto;
      }

      .feedback-modal-overlay {
        padding: 0;
        align-items: flex-end;
      }

      .feedback-trigger-btn {
        bottom: 16px;
        left: 16px;
        width: 48px;
        height: 48px;
        font-size: 24px;
      }

      .feedback-settings-panel {
        left: 16px;
        bottom: ${h.BUTTON_POSITION.bottom+48+16}px;
        min-width: calc(100vw - 32px);
        max-width: calc(100vw - 32px);
      }

      .feedback-icon-picker {
        grid-template-columns: repeat(4, 1fr);
      }
    }
  `,n=f("style",{id:e,innerHTML:t});document.head.appendChild(n)}function st(){a.triggerButton=f("button",{className:"feedback-trigger-btn","aria-label":"شروع بازخورد",title:"شروع بازخورد",innerHTML:"feedback"}),a.triggerButton.addEventListener("click",pt),document.body.appendChild(a.triggerButton)}function ct(){a.settingsPanel=f("div",{className:"feedback-settings-panel"});const e=f("div",{className:"feedback-settings-section"}),t=f("h3",{className:"feedback-settings-label",textContent:"انتخاب رنگ"});a.colorPicker=f("div",{className:"feedback-color-picker"}),it.forEach((o,s)=>{const c=f("div",{className:`feedback-color-option ${s===0?"selected":""}`,style:{backgroundColor:o.value},title:o.name});c.addEventListener("click",()=>{d.selectedColor=o.value,a.colorPicker.querySelectorAll(".feedback-color-option").forEach(l=>l.classList.remove("selected")),c.classList.add("selected")}),a.colorPicker.appendChild(c)}),e.appendChild(t),e.appendChild(a.colorPicker);const n=f("div",{className:"feedback-settings-section"}),r=f("h3",{className:"feedback-settings-label",textContent:"انتخاب آیکون"});a.iconPicker=f("div",{className:"feedback-icon-picker"}),ot.forEach((o,s)=>{const c=f("div",{className:`feedback-icon-option ${s===0?"selected":""}`,textContent:o.icon,title:o.name});c.addEventListener("click",()=>{d.selectedIcon=o.icon,a.iconPicker.querySelectorAll(".feedback-icon-option").forEach(l=>l.classList.remove("selected")),c.classList.add("selected")}),a.iconPicker.appendChild(c)}),n.appendChild(r),n.appendChild(a.iconPicker);const i=f("button",{className:"feedback-start-btn",type:"button",innerHTML:'<span class="material-symbols-outlined" style="font-size: 20px;">play_arrow</span> شروع بازخورد'});i.addEventListener("click",()=>{gt()}),a.settingsPanel.appendChild(e),a.settingsPanel.appendChild(n),a.settingsPanel.appendChild(i),document.body.appendChild(a.settingsPanel)}function lt(){a.overlay=f("div",{className:"feedback-overlay"}),a.overlay.addEventListener("click",bt),a.pinsContainer=f("div",{className:"feedback-pins-container"}),document.body.appendChild(a.overlay),document.body.appendChild(a.pinsContainer)}function dt(){a.modalOverlay=f("div",{className:"feedback-modal-overlay"}),a.modalOverlay.addEventListener("click",l=>{l.target===a.modalOverlay&&k()}),a.modal=f("div",{className:"feedback-modal"});const e=f("div",{className:"feedback-modal-header"}),t=f("h2",{className:"feedback-modal-title",textContent:"بازخورد جدید"});a.closeModalBtn=f("button",{className:"feedback-modal-close-btn","aria-label":"بستن",textContent:"close"}),a.closeModalBtn.addEventListener("click",k),e.appendChild(t),e.appendChild(a.closeModalBtn);const n=f("div",{className:"feedback-modal-body"});a.form=f("form",{className:"feedback-form"});const r=f("div",{className:"feedback-form-group"}),i=f("label",{className:"feedback-form-label",htmlFor:"feedback-title",textContent:"عنوان"});a.titleInput=f("textarea",{className:"feedback-form-textarea",id:"feedback-title",placeholder:"عنوان بازخورد را وارد کنید",required:!0}),r.appendChild(i),r.appendChild(a.titleInput);const o=f("div",{className:"feedback-form-group"}),s=f("label",{className:"feedback-screenshot-label",textContent:"پیش‌نمایش اسکرین‌شات"});a.screenshotPreview=f("div",{className:"feedback-screenshot-preview"}),o.appendChild(s),o.appendChild(a.screenshotPreview),a.form.appendChild(r),a.form.appendChild(o),a.form.addEventListener("submit",z),n.appendChild(a.form);const c=f("div",{className:"feedback-modal-footer"});a.cancelBtn=f("button",{className:"feedback-form-btn feedback-form-btn-secondary",type:"button",textContent:"انصراف"}),a.cancelBtn.addEventListener("click",k),a.submitBtn=f("button",{className:"feedback-form-btn feedback-form-btn-primary",type:"button",textContent:"ارسال بازخورد"}),a.submitBtn.addEventListener("click",l=>{l.preventDefault(),z(l)}),c.appendChild(a.cancelBtn),c.appendChild(a.submitBtn),a.modal.appendChild(e),a.modal.appendChild(n),a.modal.appendChild(c),a.modalOverlay.appendChild(a.modal),document.body.appendChild(a.modalOverlay)}function ft(e,t){const r={id:Date.now().toString(),x:e,y:t,color:d.selectedColor,icon:d.selectedIcon,title:"",screenshot:null,timestamp:new Date().toISOString()};d.pins.push(r),d.currentPin=r,ee(),te(!1)}function ee(){if(!a.pinsContainer)return;a.pinsContainer.innerHTML="";const e=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight);a.pinsContainer.style.height=`${e}px`,d.pins.forEach(t=>{const n=f("div",{className:"feedback-pin",style:{left:`${t.x}px`,top:`${t.y}px`},"data-pin-id":t.id}),r=f("div",{className:"feedback-pin-marker",style:{backgroundColor:t.color},textContent:t.icon});n.addEventListener("click",i=>{i.stopPropagation(),ut(t)}),n.appendChild(r),a.pinsContainer.appendChild(n)})}function ut(e){d.currentPin=e,d.viewingExistingPin=!0,a.titleInput&&(a.titleInput.value=e.title||""),e.screenshot&&a.screenshotPreview?(a.screenshotPreview.innerHTML=`<img src="${e.screenshot}" alt="اسکرین‌شات" />`,a.screenshotPreview.classList.add("has-screenshot")):a.screenshotPreview&&(a.screenshotPreview.innerHTML="",a.screenshotPreview.classList.remove("has-screenshot")),te(!0)}async function mt(){if(d.isCapturing)return null;d.isCapturing=!0;const e=a.overlay.classList.contains("active"),t=a.modalOverlay.classList.contains("active");try{e&&a.overlay.classList.remove("active"),t&&a.modalOverlay.classList.remove("active");const n=a.triggerButton.style.display;if(a.triggerButton.style.display="none",a.settingsPanel&&a.settingsPanel.classList.remove("active"),await new Promise(T=>setTimeout(T,200)),!d.currentPin)throw new Error("هیچ پینی انتخاب نشده است");const r=d.currentPin.x,i=d.currentPin.y,o=h.SCREENSHOT_AREA_SIZE,s=Math.max(0,r-o/2),c=Math.max(0,i-o/2),l=Math.min(o,document.body.scrollWidth-s),u=Math.min(o,document.body.scrollHeight-c),g=await rt(document.body,{quality:1,pixelRatio:window.devicePixelRatio||1,backgroundColor:"#ffffff",cacheBust:!0,useCORS:!0,allowTaint:!1,logging:!1}),b=new Image;await new Promise((T,de)=>{b.onload=T,b.onerror=de,b.src=g});const x=document.createElement("canvas");x.width=l,x.height=u;const ie=x.getContext("2d"),oe=b.width,ae=b.height,se=document.body.scrollWidth,ce=document.body.scrollHeight,F=oe/se,M=ae/ce;ie.drawImage(b,s*F,c*M,l*F,u*M,0,0,l,u);const le=x.toDataURL("image/png",.92);return e&&a.overlay.classList.add("active"),t&&a.modalOverlay.classList.add("active"),a.triggerButton.style.display=n,le}catch(n){throw console.error("خطا در گرفتن اسکرین‌شات:",n),e&&a.overlay.classList.add("active"),t&&a.modalOverlay.classList.add("active"),a.triggerButton&&(a.triggerButton.style.display=""),n}finally{d.isCapturing=!1}}function te(e=!1){a.modalOverlay.classList.add("active"),J(),e||(d.viewingExistingPin=!1,a.screenshotPreview&&(a.screenshotPreview.innerHTML="",a.screenshotPreview.classList.remove("has-screenshot"))),setTimeout(()=>{a.titleInput&&!e&&a.titleInput.focus()},100)}function ne(){a.titleInput&&(a.titleInput.value=""),a.screenshotPreview&&(a.screenshotPreview.innerHTML="",a.screenshotPreview.classList.remove("has-screenshot"))}function k(){a.modalOverlay.classList.remove("active"),Q(),ne(),d.viewingExistingPin=!1,d.currentPin=null}function pt(e){e.stopPropagation(),d.isFeedbackMode?E():a.settingsPanel&&a.settingsPanel.classList.contains("active")?P():ht()}function ht(){a.settingsPanel&&(a.settingsPanel.classList.add("active"),setTimeout(()=>{const e=t=>{!a.settingsPanel.contains(t.target)&&!a.triggerButton.contains(t.target)&&(P(),document.removeEventListener("click",e))};document.addEventListener("click",e)},0))}function P(){a.settingsPanel&&a.settingsPanel.classList.remove("active")}function gt(){d.isFeedbackMode=!0,d.currentPin=null,a.overlay.classList.add("active"),a.triggerButton.classList.add("active"),P(),ee(),J()}function E(){d.isFeedbackMode=!1,a.overlay.classList.remove("active"),a.triggerButton.classList.remove("active"),P(),k(),Q()}function bt(e){if(e.target.closest(".feedback-pin"))return;const t=e.pageX,n=e.pageY;ft(t,n)}async function z(e){if(e.preventDefault(),e.stopPropagation(),d.isSubmitting)return;const t=a.titleInput.value.trim();if(!t){alert("لطفا عنوان را وارد کنید");return}if(!d.currentPin){alert("هیچ پینی قرار داده نشده است");return}d.isSubmitting=!0,a.submitBtn.disabled=!0,a.submitBtn.textContent="در حال گرفتن اسکرین‌شات...";try{const n=await mt();if(!n){alert("گرفتن اسکرین‌شات لغو شد"),d.isSubmitting=!1,a.submitBtn.disabled=!1,a.submitBtn.textContent="ارسال بازخورد";return}a.submitBtn.textContent="در حال ارسال...";const r=await wt(n,t),i=d.pins.findIndex(s=>s.id===d.currentPin.id);i!==-1&&(d.pins[i].title=t,d.pins[i].screenshot=n,d.pins[i].timestamp=new Date().toISOString()),a.screenshotPreview&&(a.screenshotPreview.innerHTML=`<img src="${n}" alt="اسکرین‌شات" />`,a.screenshotPreview.classList.add("has-screenshot")),ne();const o=d.viewingExistingPin;k(),o||E()}catch(n){console.error("خطا در ارسال فرم:",n),alert(`خطا در گرفتن اسکرین‌شات: ${n.message}`)}finally{d.isSubmitting=!1,a.submitBtn.disabled=!1,a.submitBtn.textContent="ارسال بازخورد"}}function yt(e){const t=e.split(","),n=t[0].match(/:(.*?);/)[1],r=atob(t[1]);let i=r.length;const o=new Uint8Array(i);for(;i--;)o[i]=r.charCodeAt(i);return new Blob([o],{type:n})}function xt(){const e=document.cookie.split(";");for(let t of e){const[n,r]=t.trim().split("=");if(n==="XSRF-TOKEN"||n==="xsrf-token")return decodeURIComponent(r)}return null}async function wt(e,t){try{const n=yt(e),r=new File([n],"screenshot.png",{type:"image/png"}),i=new FormData;i.append("title",t),i.append("file",r);const o=xt(),s={accept:"text/plain"};o&&(s["X-XSRF-TOKEN"]=o);const c=await fetch(h.API_ENDPOINT,{method:"POST",headers:s,body:i});if(!c.ok){const u=await c.text();throw new Error(`خطای سرور: ${c.status} ${c.statusText} - ${u}`)}return{success:!0,message:await c.text()}}catch(n){if(n.name==="TypeError"||n.message.includes("fetch"))return console.log("⚠️ backend در دسترس نیست، داده‌ها در کنسول ثبت می‌شوند:"),console.log("=== داده‌های بازخورد ==="),console.log("عنوان:",t),console.log("اسکرین‌شات (طول data URL):",e.length),console.log("===================="),{success:!0,message:"داده‌ها در کنسول ثبت شدند (backend در دسترس نیست)"};throw n}}document.addEventListener("keydown",e=>{e.key==="Escape"&&(a.modalOverlay.classList.contains("active")?(k(),d.isFeedbackMode&&E()):d.isFeedbackMode?E():a.settingsPanel?.classList.contains("active")&&P())});function re(){if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",re);return}at(),st(),ct(),lt(),dt();function e(){if(a.pinsContainer){const n=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight);a.pinsContainer.style.height=`${n}px`}}window.addEventListener("resize",e),new MutationObserver(e).observe(document.body,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["style","class"]})}re();
