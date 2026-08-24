const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/VPLocalSearchBox.BssUFCrl.js","assets/chunks/framework.BWuWLRhz.js"])))=>i.map(i=>d[i]);
import{d as v,c,r as d,n as V,o as n,a as F,t as S,b as g,w as u,T as K,e as y,_ as b,u as Pt,i as Ot,f as Ut,g as ht,h as _,j as o,k as r,l as Z,m as rt,p as z,q as D,s as J,v as E,x as ut,y as vt,z as Zt,A as jt,F as I,B as A,C as W,D as et,E as k,G as Mt,H,I as St,J as Y,K as U,L as it,M as Wt,N as j,O as ft,P as Vt,Q as Ct,R as lt,S as qt,U as Rt,V as Kt,W as Tt,X as It,Y as Jt,Z as Yt,$ as yt,a0 as Qt,a1 as Xt,a2 as R}from"./framework.BWuWLRhz.js";const te=v({__name:"VPBadge",props:{text:{},type:{default:"tip"}},setup(t){return(e,i)=>(n(),c("span",{class:V(["VPBadge",t.type])},[d(e.$slots,"default",{},()=>[F(S(t.text),1)])],2))}}),ee={key:0,class:"VPBackdrop"},ie=v({__name:"VPBackdrop",props:{show:{type:Boolean}},setup(t){return(e,i)=>(n(),g(K,{name:"fade"},{default:u(()=>[t.show?(n(),c("div",ee)):y("",!0)]),_:1}))}}),le=b(ie,[["__scopeId","data-v-c18d3459"]]),L=Pt;function se(t,e){let i,l=!1;return()=>{i&&clearTimeout(i),l?i=setTimeout(t,e):(t(),(l=!0)&&setTimeout(()=>l=!1,e))}}function ct(t){return t.startsWith("/")?t:`/${t}`}function gt(t){const{pathname:e,search:i,hash:l,protocol:s}=new URL(t,"http://a.com");if(Ot(t)||t.startsWith("#")||!s.startsWith("http")||!Ut(e))return t;const{site:a}=L(),f=e.endsWith("/")||e.endsWith(".html")?t:t.replace(/(?:(^\.+)\/)?.*$/,`$1${e.replace(/(\.md)?$/,a.value.cleanUrls?"":".html")}${i}${l}`);return ht(f)}function Q({correspondingLink:t=!1}={}){const{site:e,localeIndex:i,page:l,theme:s,hash:a}=L(),f=_(()=>{var x,w;return{label:(x=e.value.locales[i.value])==null?void 0:x.label,link:((w=e.value.locales[i.value])==null?void 0:w.link)||(i.value==="root"?"/":`/${i.value}/`)}});return{localeLinks:_(()=>Object.entries(e.value.locales).flatMap(([x,w])=>f.value.label===w.label?[]:{text:w.label,link:ne(w.link||(x==="root"?"/":`/${x}/`),s.value.i18nRouting!==!1&&t,l.value.relativePath.slice(f.value.link.length-1),!e.value.cleanUrls)+a.value})),currentLang:f}}function ne(t,e,i,l){return e?t.replace(/\/$/,"")+ct(i.replace(/(^|\/)index\.md$/,"$1").replace(/\.md$/,l?".html":"")):t}const oe={class:"NotFound"},ae={class:"code"},re={class:"title"},fe={class:"quote"},ce={class:"action"},de=["href","aria-label"],xe=v({__name:"NotFound",setup(t){const{theme:e}=L(),{currentLang:i}=Q();return(l,s)=>{var a,f,h,x,w;return n(),c("div",oe,[o("p",ae,S(((a=r(e).notFound)==null?void 0:a.code)??"404"),1),o("h1",re,S(((f=r(e).notFound)==null?void 0:f.title)??"PAGE NOT FOUND"),1),s[0]||(s[0]=o("div",{class:"divider"},null,-1)),o("blockquote",fe,S(((h=r(e).notFound)==null?void 0:h.quote)??"But if you don't change your direction, and if you keep looking, you may end up where you are heading."),1),o("div",ce,[o("a",{class:"link",href:r(ht)(r(i).link),"aria-label":((x=r(e).notFound)==null?void 0:x.linkLabel)??"go to home"},S(((w=r(e).notFound)==null?void 0:w.linkText)??"Take me home"),9,de)])])}}}),he=b(xe,[["__scopeId","data-v-5bb079d4"]]);function Nt(t,e){if(Array.isArray(t))return X(t);if(t==null)return[];e=ct(e);const i=Object.keys(t).sort((s,a)=>a.split("/").length-s.split("/").length).find(s=>e.startsWith(ct(s))),l=i?t[i]:[];return Array.isArray(l)?X(l):X(l.items,l.base)}function ue(t){const e=[];let i=0;for(const l in t){const s=t[l];if(s.items){i=e.push(s);continue}e[i]||e.push({items:[]}),e[i].items.push(s)}return e}function ve(t){const e=[];function i(l){for(const s of l)s.text&&s.link&&e.push({text:s.text,link:s.link,docFooterText:s.docFooterText}),s.items&&i(s.items)}return i(t),e}function dt(t,e){return Array.isArray(e)?e.some(i=>dt(t,i)):Z(t,e.link)?!0:e.items?dt(t,e.items):!1}function X(t,e){return[...t].map(i=>{const l={...i},s=l.base||e;return s&&l.link&&(l.link=s+l.link),l.items&&(l.items=X(l.items,s)),l})}function G(){const{frontmatter:t,page:e,theme:i}=L(),l=rt("(min-width: 960px)"),s=z(!1),a=_(()=>{const M=i.value.sidebar,T=e.value.relativePath;return M?Nt(M,T):[]}),f=z(a.value);D(a,(M,T)=>{JSON.stringify(M)!==JSON.stringify(T)&&(f.value=a.value)});const h=_(()=>t.value.sidebar!==!1&&f.value.length>0&&t.value.layout!=="home"),x=_(()=>w?t.value.aside==null?i.value.aside==="left":t.value.aside==="left":!1),w=_(()=>t.value.layout==="home"?!1:t.value.aside!=null?!!t.value.aside:i.value.aside!==!1),$=_(()=>h.value&&l.value),p=_(()=>h.value?ue(f.value):[]);function m(){s.value=!0}function P(){s.value=!1}function C(){s.value?P():m()}return{isOpen:s,sidebar:f,sidebarGroups:p,hasSidebar:h,hasAside:w,leftAside:x,isSidebarEnabled:$,open:m,close:P,toggle:C}}function ye(t,e){let i;J(()=>{i=t.value?document.activeElement:void 0}),E(()=>{window.addEventListener("keyup",l)}),ut(()=>{window.removeEventListener("keyup",l)});function l(s){s.key==="Escape"&&t.value&&(e(),i==null||i.focus())}}function ge(t){const{page:e,hash:i}=L(),l=z(!1),s=_(()=>t.value.collapsed!=null),a=_(()=>!!t.value.link),f=z(!1),h=()=>{f.value=Z(e.value.relativePath,t.value.link)};D([e,t,i],h),E(h);const x=_(()=>f.value?!0:t.value.items?dt(e.value.relativePath,t.value.items):!1),w=_(()=>!!(t.value.items&&t.value.items.length));J(()=>{l.value=!!(s.value&&t.value.collapsed)}),vt(()=>{(f.value||x.value)&&(l.value=!1)});function $(){s.value&&(l.value=!l.value)}return{collapsed:l,collapsible:s,isLink:a,isActiveLink:f,hasActiveLink:x,hasChildren:w,toggle:$}}function me(){const{hasSidebar:t}=G(),e=rt("(min-width: 960px)"),i=rt("(min-width: 1280px)");return{isAsideEnabled:_(()=>!i.value&&!e.value?!1:t.value?i.value:e.value)}}const pe=/\b(?:VPBadge|header-anchor|footnote-ref|ignore-header)\b/,xt=[];function At(t){return typeof t.outline=="object"&&!Array.isArray(t.outline)&&t.outline.label||t.outlineTitle||"On this page"}function mt(t){const e=[...document.querySelectorAll(".VPDoc :where(h1,h2,h3,h4,h5,h6)")].filter(i=>i.id&&i.hasChildNodes()).map(i=>{const l=Number(i.tagName[1]);return{element:i,title:ke(i),link:"#"+i.id,level:l}});return we(e,t)}function ke(t){let e="";for(const i of t.childNodes)if(i.nodeType===1){if(pe.test(i.className))continue;e+=i.textContent}else i.nodeType===3&&(e+=i.textContent);return e.trim()}function we(t,e){if(e===!1)return[];const i=(typeof e=="object"&&!Array.isArray(e)?e.level:e)||2,[l,s]=typeof i=="number"?[i,i]:i==="deep"?[2,6]:i;return $e(t,l,s)}function be(t,e){const{isAsideEnabled:i}=me(),l=se(a,100);let s=null;E(()=>{requestAnimationFrame(a),window.addEventListener("scroll",l)}),Zt(()=>{f(location.hash)}),ut(()=>{window.removeEventListener("scroll",l)});function a(){if(!i.value)return;const h=window.scrollY,x=window.innerHeight,w=document.body.offsetHeight,$=Math.abs(h+x-w)<1,p=xt.map(({element:P,link:C})=>({link:C,top:_e(P)})).filter(({top:P})=>!Number.isNaN(P)).sort((P,C)=>P.top-C.top);if(!p.length){f(null);return}if(h<1){f(null);return}if($){f(p[p.length-1].link);return}let m=null;for(const{link:P,top:C}of p){if(C>h+jt()+4)break;m=P}f(m)}function f(h){s&&s.classList.remove("active"),h==null?s=null:s=t.value.querySelector(`a[href="${decodeURIComponent(h)}"]`);const x=s;x?(x.classList.add("active"),e.value.style.top=x.offsetTop+39+"px",e.value.style.opacity="1"):(e.value.style.top="33px",e.value.style.opacity="0")}}function _e(t){let e=0;for(;t!==document.body;){if(t===null)return NaN;e+=t.offsetTop,t=t.offsetParent}return e}function $e(t,e,i){xt.length=0;const l=[],s=[];return t.forEach(a=>{const f={...a,children:[]};let h=s[s.length-1];for(;h&&h.level>=f.level;)s.pop(),h=s[s.length-1];if(f.element.classList.contains("ignore-header")||h&&"shouldIgnore"in h){s.push({level:f.level,shouldIgnore:!0});return}f.level>i||f.level<e||(xt.push({element:f.element,link:f.link}),h?h.children.push(f):l.push(f),s.push(f))}),l}const Le=["href","title"],ze=v({__name:"VPDocOutlineItem",props:{headers:{},root:{type:Boolean}},setup(t){function e({target:i}){const l=i.href.split("#")[1],s=document.getElementById(decodeURIComponent(l));s==null||s.focus({preventScroll:!0})}return(i,l)=>{const s=W("VPDocOutlineItem",!0);return n(),c("ul",{class:V(["VPDocOutlineItem",t.root?"root":"nested"])},[(n(!0),c(I,null,A(t.headers,({children:a,link:f,title:h})=>(n(),c("li",null,[o("a",{class:"outline-link",href:f,onClick:e,title:h},S(h),9,Le),a!=null&&a.length?(n(),g(s,{key:0,headers:a},null,8,["headers"])):y("",!0)]))),256))],2)}}}),Ht=b(ze,[["__scopeId","data-v-544a780c"]]),Pe={class:"content"},Me={"aria-level":"2",class:"outline-title",id:"doc-outline-aria-label",role:"heading"},Se=v({__name:"VPDocAsideOutline",setup(t){const{frontmatter:e,theme:i}=L(),l=Mt([]);et(()=>{l.value=mt(e.value.outline??i.value.outline)});const s=z(),a=z();return be(s,a),(f,h)=>(n(),c("nav",{"aria-labelledby":"doc-outline-aria-label",class:V(["VPDocAsideOutline",{"has-outline":l.value.length>0}]),ref_key:"container",ref:s},[o("div",Pe,[o("div",{class:"outline-marker",ref_key:"marker",ref:a},null,512),o("div",Me,S(r(At)(r(i))),1),k(Ht,{headers:l.value,root:!0},null,8,["headers"])])],2))}}),Ve=b(Se,[["__scopeId","data-v-fbb33dd0"]]),Ce={class:"VPDocAsideCarbonAds"},Te=v({__name:"VPDocAsideCarbonAds",props:{carbonAds:{}},setup(t){const e=()=>null;return(i,l)=>(n(),c("div",Ce,[k(r(e),{"carbon-ads":t.carbonAds},null,8,["carbon-ads"])]))}}),Ie={class:"VPDocAside"},Ne=v({__name:"VPDocAside",setup(t){const{theme:e}=L();return(i,l)=>(n(),c("div",Ie,[d(i.$slots,"aside-top",{},void 0,!0),d(i.$slots,"aside-outline-before",{},void 0,!0),k(Ve),d(i.$slots,"aside-outline-after",{},void 0,!0),l[0]||(l[0]=o("div",{class:"spacer"},null,-1)),d(i.$slots,"aside-ads-before",{},void 0,!0),r(e).carbonAds?(n(),g(Te,{key:0,"carbon-ads":r(e).carbonAds},null,8,["carbon-ads"])):y("",!0),d(i.$slots,"aside-ads-after",{},void 0,!0),d(i.$slots,"aside-bottom",{},void 0,!0)]))}}),Ae=b(Ne,[["__scopeId","data-v-5722d266"]]);function He(){const{theme:t,page:e}=L();return _(()=>{const{text:i="Edit this page",pattern:l=""}=t.value.editLink||{};let s;return typeof l=="function"?s=l(e.value):s=l.replace(/:path/g,e.value.filePath),{url:s,text:i}})}function Be(){const{page:t,theme:e,frontmatter:i}=L();return _(()=>{var w,$,p,m,P,C,M,T;const l=Nt(e.value.sidebar,t.value.relativePath),s=ve(l),a=Ee(s,N=>N.link.replace(/[?#].*$/,"")),f=a.findIndex(N=>Z(t.value.relativePath,N.link)),h=((w=e.value.docFooter)==null?void 0:w.prev)===!1&&!i.value.prev||i.value.prev===!1,x=(($=e.value.docFooter)==null?void 0:$.next)===!1&&!i.value.next||i.value.next===!1;return{prev:h?void 0:{text:(typeof i.value.prev=="string"?i.value.prev:typeof i.value.prev=="object"?i.value.prev.text:void 0)??((p=a[f-1])==null?void 0:p.docFooterText)??((m=a[f-1])==null?void 0:m.text),link:(typeof i.value.prev=="object"?i.value.prev.link:void 0)??((P=a[f-1])==null?void 0:P.link)},next:x?void 0:{text:(typeof i.value.next=="string"?i.value.next:typeof i.value.next=="object"?i.value.next.text:void 0)??((C=a[f+1])==null?void 0:C.docFooterText)??((M=a[f+1])==null?void 0:M.text),link:(typeof i.value.next=="object"?i.value.next.link:void 0)??((T=a[f+1])==null?void 0:T.link)}}})}function Ee(t,e){const i=new Set;return t.filter(l=>{const s=e(l);return i.has(s)?!1:i.add(s)})}const B=v({__name:"VPLink",props:{tag:{},href:{},noIcon:{type:Boolean},target:{},rel:{}},setup(t){const e=t,i=_(()=>e.tag??(e.href?"a":"span")),l=_(()=>e.href&&St.test(e.href)||e.target==="_blank");return(s,a)=>(n(),g(H(i.value),{class:V(["VPLink",{link:t.href,"vp-external-link-icon":l.value,"no-icon":t.noIcon}]),href:t.href?r(gt)(t.href):void 0,target:t.target??(l.value?"_blank":void 0),rel:t.rel??(l.value?"noreferrer":void 0)},{default:u(()=>[d(s.$slots,"default")]),_:3},8,["class","href","target","rel"]))}}),Fe={class:"VPLastUpdated"},De=["datetime"],Ge=v({__name:"VPDocFooterLastUpdated",setup(t){const{theme:e,page:i,lang:l}=L(),s=_(()=>new Date(i.value.lastUpdated)),a=_(()=>s.value.toISOString()),f=z("");return E(()=>{J(()=>{var h,x,w;f.value=new Intl.DateTimeFormat((x=(h=e.value.lastUpdated)==null?void 0:h.formatOptions)!=null&&x.forceLocale?l.value:void 0,((w=e.value.lastUpdated)==null?void 0:w.formatOptions)??{dateStyle:"short",timeStyle:"short"}).format(s.value)})}),(h,x)=>{var w;return n(),c("p",Fe,[F(S(((w=r(e).lastUpdated)==null?void 0:w.text)||r(e).lastUpdatedText||"Last updated")+": ",1),o("time",{datetime:a.value},S(f.value),9,De)])}}}),Oe=b(Ge,[["__scopeId","data-v-deb1cbd9"]]),Ue={key:0,class:"VPDocFooter"},Ze={key:0,class:"edit-info"},je={key:0,class:"edit-link"},We={key:1,class:"last-updated"},qe={key:1,class:"prev-next","aria-labelledby":"doc-footer-aria-label"},Re={class:"pager"},Ke=["innerHTML"],Je=["innerHTML"],Ye={class:"pager"},Qe=["innerHTML"],Xe=["innerHTML"],ti=v({__name:"VPDocFooter",setup(t){const{theme:e,page:i,frontmatter:l}=L(),s=He(),a=Be(),f=_(()=>e.value.editLink&&l.value.editLink!==!1),h=_(()=>i.value.lastUpdated),x=_(()=>f.value||h.value||a.value.prev||a.value.next);return(w,$)=>{var p,m,P,C;return x.value?(n(),c("footer",Ue,[d(w.$slots,"doc-footer-before",{},void 0,!0),f.value||h.value?(n(),c("div",Ze,[f.value?(n(),c("div",je,[k(B,{class:"edit-link-button",href:r(s).url,"no-icon":!0},{default:u(()=>[$[0]||($[0]=o("span",{class:"vpi-square-pen edit-link-icon"},null,-1)),F(" "+S(r(s).text),1)]),_:1},8,["href"])])):y("",!0),h.value?(n(),c("div",We,[k(Oe)])):y("",!0)])):y("",!0),(p=r(a).prev)!=null&&p.link||(m=r(a).next)!=null&&m.link?(n(),c("nav",qe,[$[1]||($[1]=o("span",{class:"visually-hidden",id:"doc-footer-aria-label"},"Pager",-1)),o("div",Re,[(P=r(a).prev)!=null&&P.link?(n(),g(B,{key:0,class:"pager-link prev",href:r(a).prev.link},{default:u(()=>{var M;return[o("span",{class:"desc",innerHTML:((M=r(e).docFooter)==null?void 0:M.prev)||"Previous page"},null,8,Ke),o("span",{class:"title",innerHTML:r(a).prev.text},null,8,Je)]}),_:1},8,["href"])):y("",!0)]),o("div",Ye,[(C=r(a).next)!=null&&C.link?(n(),g(B,{key:0,class:"pager-link next",href:r(a).next.link},{default:u(()=>{var M;return[o("span",{class:"desc",innerHTML:((M=r(e).docFooter)==null?void 0:M.next)||"Next page"},null,8,Qe),o("span",{class:"title",innerHTML:r(a).next.text},null,8,Xe)]}),_:1},8,["href"])):y("",!0)])])):y("",!0)])):y("",!0)}}}),ei=b(ti,[["__scopeId","data-v-2467df76"]]),ii={class:"container"},li={class:"aside-container"},si={class:"aside-content"},ni={class:"content"},oi={class:"content-container"},ai={class:"main"},ri=v({__name:"VPDoc",setup(t){const{theme:e}=L(),i=Y(),{hasSidebar:l,hasAside:s,leftAside:a}=G(),f=_(()=>i.path.replace(/[./]+/g,"_").replace(/_html$/,""));return(h,x)=>{const w=W("Content");return n(),c("div",{class:V(["VPDoc",{"has-sidebar":r(l),"has-aside":r(s)}])},[d(h.$slots,"doc-top",{},void 0,!0),o("div",ii,[r(s)?(n(),c("div",{key:0,class:V(["aside",{"left-aside":r(a)}])},[x[0]||(x[0]=o("div",{class:"aside-curtain"},null,-1)),o("div",li,[o("div",si,[k(Ae,null,{"aside-top":u(()=>[d(h.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":u(()=>[d(h.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":u(()=>[d(h.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":u(()=>[d(h.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":u(()=>[d(h.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":u(()=>[d(h.$slots,"aside-ads-after",{},void 0,!0)]),_:3})])])],2)):y("",!0),o("div",ni,[o("div",oi,[d(h.$slots,"doc-before",{},void 0,!0),o("main",ai,[k(w,{class:V(["vp-doc",[f.value,r(e).externalLinkIcon&&"external-link-icon-enabled"]])},null,8,["class"])]),k(ei,null,{"doc-footer-before":u(()=>[d(h.$slots,"doc-footer-before",{},void 0,!0)]),_:3}),d(h.$slots,"doc-after",{},void 0,!0)])])]),d(h.$slots,"doc-bottom",{},void 0,!0)],2)}}}),fi=b(ri,[["__scopeId","data-v-93adcff7"]]),ci=v({__name:"VPButton",props:{tag:{},size:{default:"medium"},theme:{default:"brand"},text:{},href:{},target:{},rel:{}},setup(t){const e=t,i=_(()=>e.href&&St.test(e.href)),l=_(()=>e.tag||(e.href?"a":"button"));return(s,a)=>(n(),g(H(l.value),{class:V(["VPButton",[t.size,t.theme]]),href:t.href?r(gt)(t.href):void 0,target:e.target??(i.value?"_blank":void 0),rel:e.rel??(i.value?"noreferrer":void 0)},{default:u(()=>[F(S(t.text),1)]),_:1},8,["class","href","target","rel"]))}}),di=b(ci,[["__scopeId","data-v-cdffcac5"]]),xi=["src","alt"],hi=v({inheritAttrs:!1,__name:"VPImage",props:{image:{},alt:{}},setup(t){return(e,i)=>{const l=W("VPImage",!0);return t.image?(n(),c(I,{key:0},[typeof t.image=="string"||"src"in t.image?(n(),c("img",U({key:0,class:"VPImage"},typeof t.image=="string"?e.$attrs:{...t.image,...e.$attrs},{src:r(ht)(typeof t.image=="string"?t.image:t.image.src),alt:t.alt??(typeof t.image=="string"?"":t.image.alt||"")}),null,16,xi)):(n(),c(I,{key:1},[k(l,U({class:"dark",image:t.image.dark,alt:t.image.alt},e.$attrs),null,16,["image","alt"]),k(l,U({class:"light",image:t.image.light,alt:t.image.alt},e.$attrs),null,16,["image","alt"])],64))],64)):y("",!0)}}}),tt=b(hi,[["__scopeId","data-v-8b025449"]]),ui={class:"container"},vi={class:"main"},yi={class:"heading"},gi=["innerHTML"],mi=["innerHTML"],pi=["innerHTML"],ki={key:0,class:"actions"},wi={key:0,class:"image"},bi={class:"image-container"},_i=v({__name:"VPHero",props:{name:{},text:{},tagline:{},image:{},actions:{}},setup(t){const e=it("hero-image-slot-exists");return(i,l)=>(n(),c("div",{class:V(["VPHero",{"has-image":t.image||r(e)}])},[o("div",ui,[o("div",vi,[d(i.$slots,"home-hero-info-before",{},void 0,!0),d(i.$slots,"home-hero-info",{},()=>[o("h1",yi,[t.name?(n(),c("span",{key:0,innerHTML:t.name,class:"name clip"},null,8,gi)):y("",!0),t.text?(n(),c("span",{key:1,innerHTML:t.text,class:"text"},null,8,mi)):y("",!0)]),t.tagline?(n(),c("p",{key:0,innerHTML:t.tagline,class:"tagline"},null,8,pi)):y("",!0)],!0),d(i.$slots,"home-hero-info-after",{},void 0,!0),t.actions?(n(),c("div",ki,[(n(!0),c(I,null,A(t.actions,s=>(n(),c("div",{key:s.link,class:"action"},[k(di,{tag:"a",size:"medium",theme:s.theme,text:s.text,href:s.link,target:s.target,rel:s.rel},null,8,["theme","text","href","target","rel"])]))),128))])):y("",!0),d(i.$slots,"home-hero-actions-after",{},void 0,!0)]),t.image||r(e)?(n(),c("div",wi,[o("div",bi,[l[0]||(l[0]=o("div",{class:"image-bg"},null,-1)),d(i.$slots,"home-hero-image",{},()=>[t.image?(n(),g(tt,{key:0,class:"image-src",image:t.image},null,8,["image"])):y("",!0)],!0)])])):y("",!0)])],2))}}),$i=b(_i,[["__scopeId","data-v-8a5c0eaf"]]),Li=v({__name:"VPHomeHero",setup(t){const{frontmatter:e}=L();return(i,l)=>r(e).hero?(n(),g($i,{key:0,class:"VPHomeHero",name:r(e).hero.name,text:r(e).hero.text,tagline:r(e).hero.tagline,image:r(e).hero.image,actions:r(e).hero.actions},{"home-hero-info-before":u(()=>[d(i.$slots,"home-hero-info-before")]),"home-hero-info":u(()=>[d(i.$slots,"home-hero-info")]),"home-hero-info-after":u(()=>[d(i.$slots,"home-hero-info-after")]),"home-hero-actions-after":u(()=>[d(i.$slots,"home-hero-actions-after")]),"home-hero-image":u(()=>[d(i.$slots,"home-hero-image")]),_:3},8,["name","text","tagline","image","actions"])):y("",!0)}}),zi={class:"box"},Pi={key:0,class:"icon"},Mi=["innerHTML"],Si=["innerHTML"],Vi=["innerHTML"],Ci={key:4,class:"link-text"},Ti={class:"link-text-value"},Ii=v({__name:"VPFeature",props:{icon:{},title:{},details:{},link:{},linkText:{},rel:{},target:{}},setup(t){return(e,i)=>(n(),g(B,{class:"VPFeature",href:t.link,rel:t.rel,target:t.target,"no-icon":!0,tag:t.link?"a":"div"},{default:u(()=>[o("article",zi,[typeof t.icon=="object"&&t.icon.wrap?(n(),c("div",Pi,[k(tt,{image:t.icon,alt:t.icon.alt,height:t.icon.height||48,width:t.icon.width||48},null,8,["image","alt","height","width"])])):typeof t.icon=="object"?(n(),g(tt,{key:1,image:t.icon,alt:t.icon.alt,height:t.icon.height||48,width:t.icon.width||48},null,8,["image","alt","height","width"])):t.icon?(n(),c("div",{key:2,class:"icon",innerHTML:t.icon},null,8,Mi)):y("",!0),o("h2",{class:"title",innerHTML:t.title},null,8,Si),t.details?(n(),c("p",{key:3,class:"details",innerHTML:t.details},null,8,Vi)):y("",!0),t.linkText?(n(),c("div",Ci,[o("p",Ti,[F(S(t.linkText)+" ",1),i[0]||(i[0]=o("span",{class:"vpi-arrow-right link-text-icon"},null,-1))])])):y("",!0)])]),_:1},8,["href","rel","target","tag"]))}}),Ni=b(Ii,[["__scopeId","data-v-6d21a5f0"]]),Ai={key:0,class:"VPFeatures"},Hi={class:"container"},Bi={class:"items"},Ei=v({__name:"VPFeatures",props:{features:{}},setup(t){const e=t,i=_(()=>{const l=e.features.length;if(l){if(l===2)return"grid-2";if(l===3)return"grid-3";if(l%3===0)return"grid-6";if(l>3)return"grid-4"}else return});return(l,s)=>t.features?(n(),c("div",Ai,[o("div",Hi,[o("div",Bi,[(n(!0),c(I,null,A(t.features,a=>(n(),c("div",{key:a.title,class:V(["item",[i.value]])},[k(Ni,{icon:a.icon,title:a.title,details:a.details,link:a.link,"link-text":a.linkText,rel:a.rel,target:a.target},null,8,["icon","title","details","link","link-text","rel","target"])],2))),128))])])])):y("",!0)}}),Fi=b(Ei,[["__scopeId","data-v-c6430773"]]),Di=v({__name:"VPHomeFeatures",setup(t){const{frontmatter:e}=L();return(i,l)=>r(e).features?(n(),g(Fi,{key:0,class:"VPHomeFeatures",features:r(e).features},null,8,["features"])):y("",!0)}}),Gi=v({__name:"VPHomeContent",setup(t){const{width:e}=Wt({initialWidth:0,includeScrollbar:!1});return(i,l)=>(n(),c("div",{class:"vp-doc container",style:j(r(e)?{"--vp-offset":`calc(50% - ${r(e)/2}px)`}:{})},[d(i.$slots,"default",{},void 0,!0)],4))}}),Oi=b(Gi,[["__scopeId","data-v-dd15dcde"]]),Ui=v({__name:"VPHome",setup(t){const{frontmatter:e,theme:i}=L();return(l,s)=>{const a=W("Content");return n(),c("div",{class:V(["VPHome",{"external-link-icon-enabled":r(i).externalLinkIcon}])},[d(l.$slots,"home-hero-before",{},void 0,!0),k(Li,null,{"home-hero-info-before":u(()=>[d(l.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":u(()=>[d(l.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":u(()=>[d(l.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":u(()=>[d(l.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":u(()=>[d(l.$slots,"home-hero-image",{},void 0,!0)]),_:3}),d(l.$slots,"home-hero-after",{},void 0,!0),d(l.$slots,"home-features-before",{},void 0,!0),k(Di),d(l.$slots,"home-features-after",{},void 0,!0),r(e).markdownStyles!==!1?(n(),g(Oi,{key:0},{default:u(()=>[k(a)]),_:1})):(n(),g(a,{key:1}))],2)}}}),Zi=b(Ui,[["__scopeId","data-v-c3dd487c"]]),ji={},Wi={class:"VPPage"};function qi(t,e){const i=W("Content");return n(),c("div",Wi,[d(t.$slots,"page-top"),k(i),d(t.$slots,"page-bottom")])}const Ri=b(ji,[["render",qi]]),Ki=v({__name:"VPContent",setup(t){const{page:e,frontmatter:i}=L(),{hasSidebar:l}=G();return(s,a)=>(n(),c("div",{class:V(["VPContent",{"has-sidebar":r(l),"is-home":r(i).layout==="home"}]),id:"VPContent"},[r(e).isNotFound?d(s.$slots,"not-found",{key:0},()=>[k(he)],!0):r(i).layout==="page"?(n(),g(Ri,{key:1},{"page-top":u(()=>[d(s.$slots,"page-top",{},void 0,!0)]),"page-bottom":u(()=>[d(s.$slots,"page-bottom",{},void 0,!0)]),_:3})):r(i).layout==="home"?(n(),g(Zi,{key:2},{"home-hero-before":u(()=>[d(s.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":u(()=>[d(s.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":u(()=>[d(s.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":u(()=>[d(s.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":u(()=>[d(s.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":u(()=>[d(s.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":u(()=>[d(s.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":u(()=>[d(s.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":u(()=>[d(s.$slots,"home-features-after",{},void 0,!0)]),_:3})):r(i).layout&&r(i).layout!=="doc"?(n(),g(H(r(i).layout),{key:3})):(n(),g(fi,{key:4},{"doc-top":u(()=>[d(s.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":u(()=>[d(s.$slots,"doc-bottom",{},void 0,!0)]),"doc-footer-before":u(()=>[d(s.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":u(()=>[d(s.$slots,"doc-before",{},void 0,!0)]),"doc-after":u(()=>[d(s.$slots,"doc-after",{},void 0,!0)]),"aside-top":u(()=>[d(s.$slots,"aside-top",{},void 0,!0)]),"aside-outline-before":u(()=>[d(s.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":u(()=>[d(s.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":u(()=>[d(s.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":u(()=>[d(s.$slots,"aside-ads-after",{},void 0,!0)]),"aside-bottom":u(()=>[d(s.$slots,"aside-bottom",{},void 0,!0)]),_:3}))],2))}}),Ji=b(Ki,[["__scopeId","data-v-ec524422"]]),Yi={class:"container"},Qi=["innerHTML"],Xi=["innerHTML"],tl=v({__name:"VPFooter",setup(t){const{theme:e,frontmatter:i}=L(),{hasSidebar:l}=G();return(s,a)=>r(e).footer&&r(i).footer!==!1?(n(),c("footer",{key:0,class:V(["VPFooter",{"has-sidebar":r(l)}])},[o("div",Yi,[r(e).footer.message?(n(),c("p",{key:0,class:"message",innerHTML:r(e).footer.message},null,8,Qi)):y("",!0),r(e).footer.copyright?(n(),c("p",{key:1,class:"copyright",innerHTML:r(e).footer.copyright},null,8,Xi)):y("",!0)])],2)):y("",!0)}}),el=b(tl,[["__scopeId","data-v-427289ba"]]);function il(){const{theme:t,frontmatter:e}=L(),i=Mt([]),l=_(()=>i.value.length>0);return et(()=>{i.value=mt(e.value.outline??t.value.outline)}),{headers:i,hasLocalNav:l}}const ll={class:"menu-text"},sl={class:"header"},nl={class:"outline"},ol=v({__name:"VPLocalNavOutlineDropdown",props:{headers:{},navHeight:{}},setup(t){const e=t,{theme:i}=L(),l=z(!1),s=z(0),a=z(),f=z();function h(p){var m;(m=a.value)!=null&&m.contains(p.target)||(l.value=!1)}D(l,p=>{if(p){document.addEventListener("click",h);return}document.removeEventListener("click",h)}),ft("Escape",()=>{l.value=!1}),et(()=>{l.value=!1});function x(){l.value=!l.value,s.value=window.innerHeight+Math.min(window.scrollY-e.navHeight,0)}function w(p){p.target.classList.contains("outline-link")&&(f.value&&(f.value.style.transition="none"),Vt(()=>{l.value=!1}))}function $(){l.value=!1,window.scrollTo({top:0,left:0,behavior:"smooth"})}return(p,m)=>(n(),c("div",{class:"VPLocalNavOutlineDropdown",style:j({"--vp-vh":s.value+"px"}),ref_key:"main",ref:a},[t.headers.length>0?(n(),c("button",{key:0,onClick:x,class:V({open:l.value})},[o("span",ll,S(r(At)(r(i))),1),m[0]||(m[0]=o("span",{class:"vpi-chevron-right icon"},null,-1))],2)):(n(),c("button",{key:1,onClick:$},S(r(i).returnToTopLabel||"Return to top"),1)),k(K,{name:"flyout"},{default:u(()=>[l.value?(n(),c("div",{key:0,ref_key:"items",ref:f,class:"items",onClick:w},[o("div",sl,[o("a",{class:"top-link",href:"#",onClick:$},S(r(i).returnToTopLabel||"Return to top"),1)]),o("div",nl,[k(Ht,{headers:t.headers},null,8,["headers"])])],512)):y("",!0)]),_:1})],4))}}),al=b(ol,[["__scopeId","data-v-aa428bca"]]),rl={class:"container"},fl=["aria-expanded"],cl={class:"menu-text"},dl=v({__name:"VPLocalNav",props:{open:{type:Boolean}},emits:["open-menu"],setup(t){const{theme:e,frontmatter:i}=L(),{hasSidebar:l}=G(),{headers:s}=il(),{y:a}=Ct(),f=z(0);E(()=>{f.value=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--vp-nav-height"))}),et(()=>{s.value=mt(i.value.outline??e.value.outline)});const h=_(()=>s.value.length===0),x=_(()=>h.value&&!l.value),w=_(()=>({VPLocalNav:!0,"has-sidebar":l.value,empty:h.value,fixed:x.value}));return($,p)=>r(i).layout!=="home"&&(!x.value||r(a)>=f.value)?(n(),c("div",{key:0,class:V(w.value)},[o("div",rl,[r(l)?(n(),c("button",{key:0,class:"menu","aria-expanded":t.open,"aria-controls":"VPSidebarNav",onClick:p[0]||(p[0]=m=>$.$emit("open-menu"))},[p[1]||(p[1]=o("span",{class:"vpi-align-left menu-icon"},null,-1)),o("span",cl,S(r(e).sidebarMenuLabel||"Menu"),1)],8,fl)):y("",!0),k(al,{headers:r(s),navHeight:f.value},null,8,["headers","navHeight"])])],2)):y("",!0)}}),xl=b(dl,[["__scopeId","data-v-6bede3f9"]]);function hl(){const t=z(!1);function e(){t.value=!0,window.addEventListener("resize",s)}function i(){t.value=!1,window.removeEventListener("resize",s)}function l(){t.value?i():e()}function s(){window.outerWidth>=768&&i()}const a=Y();return D(()=>a.path,i),{isScreenOpen:t,openScreen:e,closeScreen:i,toggleScreen:l}}const ul={},vl={class:"VPSwitch",type:"button",role:"switch"},yl={class:"check"},gl={key:0,class:"icon"};function ml(t,e){return n(),c("button",vl,[o("span",yl,[t.$slots.default?(n(),c("span",gl,[d(t.$slots,"default",{},void 0,!0)])):y("",!0)])])}const pl=b(ul,[["render",ml],["__scopeId","data-v-7f9c1f6b"]]),kl=v({__name:"VPSwitchAppearance",setup(t){const{isDark:e,theme:i}=L(),l=it("toggle-appearance",()=>{e.value=!e.value}),s=z("");return vt(()=>{s.value=e.value?i.value.lightModeSwitchTitle||"Switch to light theme":i.value.darkModeSwitchTitle||"Switch to dark theme"}),(a,f)=>(n(),g(pl,{title:s.value,class:"VPSwitchAppearance","aria-checked":r(e),onClick:r(l)},{default:u(()=>[...f[0]||(f[0]=[o("span",{class:"vpi-sun sun"},null,-1),o("span",{class:"vpi-moon moon"},null,-1)])]),_:1},8,["title","aria-checked","onClick"]))}}),pt=b(kl,[["__scopeId","data-v-5ce0d3ed"]]),wl={key:0,class:"VPNavBarAppearance"},bl=v({__name:"VPNavBarAppearance",setup(t){const{site:e}=L();return(i,l)=>r(e).appearance&&r(e).appearance!=="force-dark"&&r(e).appearance!=="force-auto"?(n(),c("div",wl,[k(pt)])):y("",!0)}}),_l=b(bl,[["__scopeId","data-v-f293bcbe"]]),kt=z();let Bt=!1,at=0;function $l(t){const e=z(!1);if(lt){!Bt&&Ll(),at++;const i=D(kt,l=>{var s,a,f;l===t.el.value||(s=t.el.value)!=null&&s.contains(l)?(e.value=!0,(a=t.onFocus)==null||a.call(t)):(e.value=!1,(f=t.onBlur)==null||f.call(t))});ut(()=>{i(),at--,at||zl()})}return qt(e)}function Ll(){document.addEventListener("focusin",Et),Bt=!0,kt.value=document.activeElement}function zl(){document.removeEventListener("focusin",Et)}function Et(){kt.value=document.activeElement}const Pl={class:"VPMenuLink"},Ml=["innerHTML"],Sl=v({__name:"VPMenuLink",props:{item:{}},setup(t){const{page:e}=L();return(i,l)=>(n(),c("div",Pl,[k(B,{class:V({active:r(Z)(r(e).relativePath,t.item.activeMatch||t.item.link,!!t.item.activeMatch)}),href:t.item.link,target:t.item.target,rel:t.item.rel,"no-icon":t.item.noIcon},{default:u(()=>[o("span",{innerHTML:t.item.text},null,8,Ml)]),_:1},8,["class","href","target","rel","no-icon"])]))}}),st=b(Sl,[["__scopeId","data-v-f40f9647"]]),Vl={class:"VPMenuGroup"},Cl={key:0,class:"title"},Tl=v({__name:"VPMenuGroup",props:{text:{},items:{}},setup(t){return(e,i)=>(n(),c("div",Vl,[t.text?(n(),c("p",Cl,S(t.text),1)):y("",!0),(n(!0),c(I,null,A(t.items,l=>(n(),c(I,null,["link"in l?(n(),g(st,{key:0,item:l},null,8,["item"])):y("",!0)],64))),256))]))}}),Il=b(Tl,[["__scopeId","data-v-88b4e9e3"]]),Nl={class:"VPMenu"},Al={key:0,class:"items"},Hl=v({__name:"VPMenu",props:{items:{}},setup(t){return(e,i)=>(n(),c("div",Nl,[t.items?(n(),c("div",Al,[(n(!0),c(I,null,A(t.items,l=>(n(),c(I,{key:JSON.stringify(l)},["link"in l?(n(),g(st,{key:0,item:l},null,8,["item"])):"component"in l?(n(),g(H(l.component),U({key:1,ref_for:!0},l.props),null,16)):(n(),g(Il,{key:2,text:l.text,items:l.items},null,8,["text","items"]))],64))),128))])):y("",!0),d(e.$slots,"default",{},void 0,!0)]))}}),Bl=b(Hl,[["__scopeId","data-v-60337296"]]),El=["aria-expanded","aria-label"],Fl={key:0,class:"text"},Dl=["innerHTML"],Gl={key:1,class:"vpi-more-horizontal icon"},Ol={class:"menu"},Ul=v({__name:"VPFlyout",props:{icon:{},button:{},label:{},items:{}},setup(t){const e=z(!1),i=z();$l({el:i,onBlur:l});function l(){e.value=!1}return(s,a)=>(n(),c("div",{class:"VPFlyout",ref_key:"el",ref:i,onMouseenter:a[1]||(a[1]=f=>e.value=!0),onMouseleave:a[2]||(a[2]=f=>e.value=!1)},[o("button",{type:"button",class:"button","aria-haspopup":"true","aria-expanded":e.value,"aria-label":t.label,onClick:a[0]||(a[0]=f=>e.value=!e.value)},[t.button||t.icon?(n(),c("span",Fl,[t.icon?(n(),c("span",{key:0,class:V([t.icon,"option-icon"])},null,2)):y("",!0),t.button?(n(),c("span",{key:1,innerHTML:t.button},null,8,Dl)):y("",!0),a[3]||(a[3]=o("span",{class:"vpi-chevron-down text-icon"},null,-1))])):(n(),c("span",Gl))],8,El),o("div",Ol,[k(Bl,{items:t.items},{default:u(()=>[d(s.$slots,"default",{},void 0,!0)]),_:3},8,["items"])])],544))}}),wt=b(Ul,[["__scopeId","data-v-c8313f06"]]),Zl=["href","aria-label","innerHTML"],jl=v({__name:"VPSocialLink",props:{icon:{},link:{},ariaLabel:{}},setup(t){const e=t,i=z();E(async()=>{var a;await Vt();const s=(a=i.value)==null?void 0:a.children[0];s instanceof HTMLElement&&s.className.startsWith("vpi-social-")&&(getComputedStyle(s).maskImage||getComputedStyle(s).webkitMaskImage)==="none"&&s.style.setProperty("--icon",`url('https://api.iconify.design/simple-icons/${e.icon}.svg')`)});const l=_(()=>typeof e.icon=="object"?e.icon.svg:`<span class="vpi-social-${e.icon}"></span>`);return(s,a)=>(n(),c("a",{ref_key:"el",ref:i,class:"VPSocialLink no-icon",href:t.link,"aria-label":t.ariaLabel??(typeof t.icon=="string"?t.icon:""),target:"_blank",rel:"noopener",innerHTML:l.value},null,8,Zl))}}),Wl=b(jl,[["__scopeId","data-v-e2093e14"]]),ql={class:"VPSocialLinks"},Rl=v({__name:"VPSocialLinks",props:{links:{}},setup(t){return(e,i)=>(n(),c("div",ql,[(n(!0),c(I,null,A(t.links,({link:l,icon:s,ariaLabel:a})=>(n(),g(Wl,{key:l,icon:s,link:l,ariaLabel:a},null,8,["icon","link","ariaLabel"]))),128))]))}}),bt=b(Rl,[["__scopeId","data-v-54bae52f"]]),Kl={key:0,class:"group translations"},Jl={class:"trans-title"},Yl={key:1,class:"group"},Ql={class:"item appearance"},Xl={class:"label"},ts={class:"appearance-action"},es={key:2,class:"group"},is={class:"item social-links"},ls=v({__name:"VPNavBarExtra",setup(t){const{site:e,theme:i}=L(),{localeLinks:l,currentLang:s}=Q({correspondingLink:!0}),a=_(()=>l.value.length&&s.value.label||e.value.appearance||i.value.socialLinks);return(f,h)=>a.value?(n(),g(wt,{key:0,class:"VPNavBarExtra",label:"extra navigation"},{default:u(()=>[r(l).length&&r(s).label?(n(),c("div",Kl,[o("p",Jl,S(r(s).label),1),(n(!0),c(I,null,A(r(l),x=>(n(),g(st,{key:x.link,item:x},null,8,["item"]))),128))])):y("",!0),r(e).appearance&&r(e).appearance!=="force-dark"&&r(e).appearance!=="force-auto"?(n(),c("div",Yl,[o("div",Ql,[o("p",Xl,S(r(i).darkModeSwitchLabel||"Appearance"),1),o("div",ts,[k(pt)])])])):y("",!0),r(i).socialLinks?(n(),c("div",es,[o("div",is,[k(bt,{class:"social-links-list",links:r(i).socialLinks},null,8,["links"])])])):y("",!0)]),_:1})):y("",!0)}}),ss=b(ls,[["__scopeId","data-v-0f997e22"]]),ns=["aria-expanded"],os=v({__name:"VPNavBarHamburger",props:{active:{type:Boolean}},emits:["click"],setup(t){return(e,i)=>(n(),c("button",{type:"button",class:V(["VPNavBarHamburger",{active:t.active}]),"aria-label":"mobile navigation","aria-expanded":t.active,"aria-controls":"VPNavScreen",onClick:i[0]||(i[0]=l=>e.$emit("click"))},[...i[1]||(i[1]=[o("span",{class:"container"},[o("span",{class:"top"}),o("span",{class:"middle"}),o("span",{class:"bottom"})],-1)])],10,ns))}}),as=b(os,[["__scopeId","data-v-d3422334"]]),rs=["innerHTML"],fs=v({__name:"VPNavBarMenuLink",props:{item:{}},setup(t){const{page:e}=L();return(i,l)=>(n(),g(B,{class:V({VPNavBarMenuLink:!0,active:r(Z)(r(e).relativePath,t.item.activeMatch||t.item.link,!!t.item.activeMatch)}),href:t.item.link,target:t.item.target,rel:t.item.rel,"no-icon":t.item.noIcon,tabindex:"0"},{default:u(()=>[o("span",{innerHTML:t.item.text},null,8,rs)]),_:1},8,["class","href","target","rel","no-icon"]))}}),cs=b(fs,[["__scopeId","data-v-1049a78b"]]),ds=v({__name:"VPNavBarMenuGroup",props:{item:{}},setup(t){const e=t,{page:i}=L(),l=a=>"component"in a?!1:"link"in a?Z(i.value.relativePath,a.link,!!e.item.activeMatch):a.items.some(l),s=_(()=>l(e.item));return(a,f)=>(n(),g(wt,{class:V({VPNavBarMenuGroup:!0,active:r(Z)(r(i).relativePath,t.item.activeMatch,!!t.item.activeMatch)||s.value}),button:t.item.text,items:t.item.items},null,8,["class","button","items"]))}}),xs={key:0,"aria-labelledby":"main-nav-aria-label",class:"VPNavBarMenu"},hs=v({__name:"VPNavBarMenu",setup(t){const{theme:e}=L();return(i,l)=>r(e).nav?(n(),c("nav",xs,[l[0]||(l[0]=o("span",{id:"main-nav-aria-label",class:"visually-hidden"}," Main Navigation ",-1)),(n(!0),c(I,null,A(r(e).nav,s=>(n(),c(I,{key:JSON.stringify(s)},["link"in s?(n(),g(cs,{key:0,item:s},null,8,["item"])):"component"in s?(n(),g(H(s.component),U({key:1,ref_for:!0},s.props),null,16)):(n(),g(ds,{key:2,item:s},null,8,["item"]))],64))),128))])):y("",!0)}}),us=b(hs,[["__scopeId","data-v-f6c21575"]]);function vs(t){const{localeIndex:e,theme:i}=L();function l(s){var C,M,T;const a=s.split("."),f=(C=i.value.search)==null?void 0:C.options,h=f&&typeof f=="object",x=h&&((T=(M=f.locales)==null?void 0:M[e.value])==null?void 0:T.translations)||null,w=h&&f.translations||null;let $=x,p=w,m=t;const P=a.pop();for(const N of a){let O=null;const q=m==null?void 0:m[N];q&&(O=m=q);const nt=p==null?void 0:p[N];nt&&(O=p=nt);const ot=$==null?void 0:$[N];ot&&(O=$=ot),q||(m=O),nt||(p=O),ot||($=O)}return($==null?void 0:$[P])??(p==null?void 0:p[P])??(m==null?void 0:m[P])??""}return l}const ys=["aria-label"],gs={class:"DocSearch-Button-Container"},ms={class:"DocSearch-Button-Placeholder"},_t=v({__name:"VPNavBarSearchButton",setup(t){const i=vs({button:{buttonText:"Search",buttonAriaLabel:"Search"}});return(l,s)=>(n(),c("button",{type:"button",class:"DocSearch DocSearch-Button","aria-label":r(i)("button.buttonAriaLabel")},[o("span",gs,[s[0]||(s[0]=o("span",{class:"vp-icon DocSearch-Search-Icon"},null,-1)),o("span",ms,S(r(i)("button.buttonText")),1)]),s[1]||(s[1]=o("span",{class:"DocSearch-Button-Keys"},[o("kbd",{class:"DocSearch-Button-Key"}),o("kbd",{class:"DocSearch-Button-Key"},"K")],-1))],8,ys))}}),ps={class:"VPNavBarSearch"},ks={id:"local-search"},ws={key:1,id:"docsearch"},bs=v({__name:"VPNavBarSearch",setup(t){const e=Rt(()=>Kt(()=>import("./VPLocalSearchBox.BssUFCrl.js"),__vite__mapDeps([0,1]))),i=()=>null,{theme:l}=L(),s=z(!1),a=z(!1);E(()=>{});function f(){s.value||(s.value=!0,setTimeout(h,16))}function h(){const p=new Event("keydown");p.key="k",p.metaKey=!0,window.dispatchEvent(p),setTimeout(()=>{document.querySelector(".DocSearch-Modal")||h()},16)}function x(p){const m=p.target,P=m.tagName;return m.isContentEditable||P==="INPUT"||P==="SELECT"||P==="TEXTAREA"}const w=z(!1);ft("k",p=>{(p.ctrlKey||p.metaKey)&&(p.preventDefault(),w.value=!0)}),ft("/",p=>{x(p)||(p.preventDefault(),w.value=!0)});const $="local";return(p,m)=>{var P;return n(),c("div",ps,[r($)==="local"?(n(),c(I,{key:0},[w.value?(n(),g(r(e),{key:0,onClose:m[0]||(m[0]=C=>w.value=!1)})):y("",!0),o("div",ks,[k(_t,{onClick:m[1]||(m[1]=C=>w.value=!0)})])],64)):r($)==="algolia"?(n(),c(I,{key:1},[s.value?(n(),g(r(i),{key:0,algolia:((P=r(l).search)==null?void 0:P.options)??r(l).algolia,onVnodeBeforeMount:m[2]||(m[2]=C=>a.value=!0)},null,8,["algolia"])):y("",!0),a.value?y("",!0):(n(),c("div",ws,[k(_t,{onClick:f})]))],64)):y("",!0)])}}}),_s=v({__name:"VPNavBarSocialLinks",setup(t){const{theme:e}=L();return(i,l)=>r(e).socialLinks?(n(),g(bt,{key:0,class:"VPNavBarSocialLinks",links:r(e).socialLinks},null,8,["links"])):y("",!0)}}),$s=b(_s,[["__scopeId","data-v-346d844a"]]),Ls=["href","rel","target"],zs=["innerHTML"],Ps={key:2},Ms=v({__name:"VPNavBarTitle",setup(t){const{site:e,theme:i}=L(),{hasSidebar:l}=G(),{currentLang:s}=Q(),a=_(()=>{var x;return typeof i.value.logoLink=="string"?i.value.logoLink:(x=i.value.logoLink)==null?void 0:x.link}),f=_(()=>{var x;return typeof i.value.logoLink=="string"||(x=i.value.logoLink)==null?void 0:x.rel}),h=_(()=>{var x;return typeof i.value.logoLink=="string"||(x=i.value.logoLink)==null?void 0:x.target});return(x,w)=>(n(),c("div",{class:V(["VPNavBarTitle",{"has-sidebar":r(l)}])},[o("a",{class:"title",href:a.value??r(gt)(r(s).link),rel:f.value,target:h.value},[d(x.$slots,"nav-bar-title-before",{},void 0,!0),r(i).logo?(n(),g(tt,{key:0,class:"logo",image:r(i).logo},null,8,["image"])):y("",!0),r(i).siteTitle?(n(),c("span",{key:1,innerHTML:r(i).siteTitle},null,8,zs)):r(i).siteTitle===void 0?(n(),c("span",Ps,S(r(e).title),1)):y("",!0),d(x.$slots,"nav-bar-title-after",{},void 0,!0)],8,Ls)],2))}}),Ss=b(Ms,[["__scopeId","data-v-4e930c0f"]]),Vs={class:"items"},Cs={class:"title"},Ts=v({__name:"VPNavBarTranslations",setup(t){const{theme:e}=L(),{localeLinks:i,currentLang:l}=Q({correspondingLink:!0});return(s,a)=>r(i).length&&r(l).label?(n(),g(wt,{key:0,class:"VPNavBarTranslations",icon:"vpi-languages",label:r(e).langMenuLabel||"Change language"},{default:u(()=>[o("div",Vs,[o("p",Cs,S(r(l).label),1),(n(!0),c(I,null,A(r(i),f=>(n(),g(st,{key:f.link,item:f},null,8,["item"]))),128))])]),_:1},8,["label"])):y("",!0)}}),Is=b(Ts,[["__scopeId","data-v-c320e5d9"]]),Ns={class:"wrapper"},As={class:"container"},Hs={class:"title"},Bs={class:"content"},Es={class:"content-body"},Fs=v({__name:"VPNavBar",props:{isScreenOpen:{type:Boolean}},emits:["toggle-screen"],setup(t){const e=t,{y:i}=Ct(),{hasSidebar:l}=G(),{frontmatter:s}=L(),a=z({});return vt(()=>{a.value={"has-sidebar":l.value,home:s.value.layout==="home",top:i.value===0,"screen-open":e.isScreenOpen}}),(f,h)=>(n(),c("div",{class:V(["VPNavBar",a.value])},[o("div",Ns,[o("div",As,[o("div",Hs,[k(Ss,null,{"nav-bar-title-before":u(()=>[d(f.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":u(()=>[d(f.$slots,"nav-bar-title-after",{},void 0,!0)]),_:3})]),o("div",Bs,[o("div",Es,[d(f.$slots,"nav-bar-content-before",{},void 0,!0),k(bs,{class:"search"}),k(us,{class:"menu"}),k(Is,{class:"translations"}),k(_l,{class:"appearance"}),k($s,{class:"social-links"}),k(ss,{class:"extra"}),d(f.$slots,"nav-bar-content-after",{},void 0,!0),k(as,{class:"hamburger",active:t.isScreenOpen,onClick:h[0]||(h[0]=x=>f.$emit("toggle-screen"))},null,8,["active"])])])])]),h[1]||(h[1]=o("div",{class:"divider"},[o("div",{class:"divider-line"})],-1))],2))}}),Ds=b(Fs,[["__scopeId","data-v-e484c5ca"]]),Gs={key:0,class:"VPNavScreenAppearance"},Os={class:"text"},Us=v({__name:"VPNavScreenAppearance",setup(t){const{site:e,theme:i}=L();return(l,s)=>r(e).appearance&&r(e).appearance!=="force-dark"&&r(e).appearance!=="force-auto"?(n(),c("div",Gs,[o("p",Os,S(r(i).darkModeSwitchLabel||"Appearance"),1),k(pt)])):y("",!0)}}),Zs=b(Us,[["__scopeId","data-v-6b694d0f"]]),js=["innerHTML"],Ws=v({__name:"VPNavScreenMenuLink",props:{item:{}},setup(t){const e=it("close-screen");return(i,l)=>(n(),g(B,{class:"VPNavScreenMenuLink",href:t.item.link,target:t.item.target,rel:t.item.rel,"no-icon":t.item.noIcon,onClick:r(e)},{default:u(()=>[o("span",{innerHTML:t.item.text},null,8,js)]),_:1},8,["href","target","rel","no-icon","onClick"]))}}),qs=b(Ws,[["__scopeId","data-v-7e513513"]]),Rs=["innerHTML"],Ks=v({__name:"VPNavScreenMenuGroupLink",props:{item:{}},setup(t){const e=it("close-screen");return(i,l)=>(n(),g(B,{class:"VPNavScreenMenuGroupLink",href:t.item.link,target:t.item.target,rel:t.item.rel,"no-icon":t.item.noIcon,onClick:r(e)},{default:u(()=>[o("span",{innerHTML:t.item.text},null,8,Rs)]),_:1},8,["href","target","rel","no-icon","onClick"]))}}),Ft=b(Ks,[["__scopeId","data-v-d4e57239"]]),Js={class:"VPNavScreenMenuGroupSection"},Ys={key:0,class:"title"},Qs=v({__name:"VPNavScreenMenuGroupSection",props:{text:{},items:{}},setup(t){return(e,i)=>(n(),c("div",Js,[t.text?(n(),c("p",Ys,S(t.text),1)):y("",!0),(n(!0),c(I,null,A(t.items,l=>(n(),g(Ft,{key:l.text,item:l},null,8,["item"]))),128))]))}}),Xs=b(Qs,[["__scopeId","data-v-48faf837"]]),tn=["aria-controls","aria-expanded"],en=["innerHTML"],ln=["id"],sn={key:0,class:"item"},nn={key:1,class:"item"},on={key:2,class:"group"},an=v({__name:"VPNavScreenMenuGroup",props:{text:{},items:{}},setup(t){const e=t,i=z(!1),l=_(()=>`NavScreenGroup-${e.text.replace(" ","-").toLowerCase()}`);function s(){i.value=!i.value}return(a,f)=>(n(),c("div",{class:V(["VPNavScreenMenuGroup",{open:i.value}])},[o("button",{class:"button","aria-controls":l.value,"aria-expanded":i.value,onClick:s},[o("span",{class:"button-text",innerHTML:t.text},null,8,en),f[0]||(f[0]=o("span",{class:"vpi-plus button-icon"},null,-1))],8,tn),o("div",{id:l.value,class:"items"},[(n(!0),c(I,null,A(t.items,h=>(n(),c(I,{key:JSON.stringify(h)},["link"in h?(n(),c("div",sn,[k(Ft,{item:h},null,8,["item"])])):"component"in h?(n(),c("div",nn,[(n(),g(H(h.component),U({ref_for:!0},h.props,{"screen-menu":""}),null,16))])):(n(),c("div",on,[k(Xs,{text:h.text,items:h.items},null,8,["text","items"])]))],64))),128))],8,ln)],2))}}),rn=b(an,[["__scopeId","data-v-4dc46d8f"]]),fn={key:0,class:"VPNavScreenMenu"},cn=v({__name:"VPNavScreenMenu",setup(t){const{theme:e}=L();return(i,l)=>r(e).nav?(n(),c("nav",fn,[(n(!0),c(I,null,A(r(e).nav,s=>(n(),c(I,{key:JSON.stringify(s)},["link"in s?(n(),g(qs,{key:0,item:s},null,8,["item"])):"component"in s?(n(),g(H(s.component),U({key:1,ref_for:!0},s.props,{"screen-menu":""}),null,16)):(n(),g(rn,{key:2,text:s.text||"",items:s.items},null,8,["text","items"]))],64))),128))])):y("",!0)}}),dn=v({__name:"VPNavScreenSocialLinks",setup(t){const{theme:e}=L();return(i,l)=>r(e).socialLinks?(n(),g(bt,{key:0,class:"VPNavScreenSocialLinks",links:r(e).socialLinks},null,8,["links"])):y("",!0)}}),xn={class:"list"},hn=v({__name:"VPNavScreenTranslations",setup(t){const{localeLinks:e,currentLang:i}=Q({correspondingLink:!0}),l=z(!1);function s(){l.value=!l.value}return(a,f)=>r(e).length&&r(i).label?(n(),c("div",{key:0,class:V(["VPNavScreenTranslations",{open:l.value}])},[o("button",{class:"title",onClick:s},[f[0]||(f[0]=o("span",{class:"vpi-languages icon lang"},null,-1)),F(" "+S(r(i).label)+" ",1),f[1]||(f[1]=o("span",{class:"vpi-chevron-down icon chevron"},null,-1))]),o("ul",xn,[(n(!0),c(I,null,A(r(e),h=>(n(),c("li",{key:h.link,class:"item"},[k(B,{class:"link",href:h.link},{default:u(()=>[F(S(h.text),1)]),_:2},1032,["href"])]))),128))])],2)):y("",!0)}}),un=b(hn,[["__scopeId","data-v-990fae88"]]),vn={class:"container"},yn=v({__name:"VPNavScreen",props:{open:{type:Boolean}},setup(t){const e=z(null),i=Tt(lt?document.body:null);return(l,s)=>(n(),g(K,{name:"fade",onEnter:s[0]||(s[0]=a=>i.value=!0),onAfterLeave:s[1]||(s[1]=a=>i.value=!1)},{default:u(()=>[t.open?(n(),c("div",{key:0,class:"VPNavScreen",ref_key:"screen",ref:e,id:"VPNavScreen"},[o("div",vn,[d(l.$slots,"nav-screen-content-before",{},void 0,!0),k(cn,{class:"menu"}),k(un,{class:"translations"}),k(Zs,{class:"appearance"}),k(dn,{class:"social-links"}),d(l.$slots,"nav-screen-content-after",{},void 0,!0)])],512)):y("",!0)]),_:3}))}}),gn=b(yn,[["__scopeId","data-v-95402029"]]),mn={key:0,class:"VPNav"},pn=v({__name:"VPNav",setup(t){const{isScreenOpen:e,closeScreen:i,toggleScreen:l}=hl(),{frontmatter:s}=L(),a=_(()=>s.value.navbar!==!1);return It("close-screen",i),J(()=>{lt&&document.documentElement.classList.toggle("hide-nav",!a.value)}),(f,h)=>a.value?(n(),c("header",mn,[k(Ds,{"is-screen-open":r(e),onToggleScreen:r(l)},{"nav-bar-title-before":u(()=>[d(f.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":u(()=>[d(f.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":u(()=>[d(f.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":u(()=>[d(f.$slots,"nav-bar-content-after",{},void 0,!0)]),_:3},8,["is-screen-open","onToggleScreen"]),k(gn,{open:r(e)},{"nav-screen-content-before":u(()=>[d(f.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":u(()=>[d(f.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3},8,["open"])])):y("",!0)}}),kn=b(pn,[["__scopeId","data-v-e5ba47df"]]),wn=["role","tabindex"],bn={key:1,class:"items"},_n=v({__name:"VPSidebarItem",props:{item:{},depth:{}},setup(t){const e=t,{collapsed:i,collapsible:l,isLink:s,isActiveLink:a,hasActiveLink:f,hasChildren:h,toggle:x}=ge(_(()=>e.item)),w=_(()=>h.value?"section":"div"),$=_(()=>s.value?"a":"div"),p=_(()=>h.value?e.depth+2===7?"p":`h${e.depth+2}`:"p"),m=_(()=>s.value?void 0:"button"),P=_(()=>[[`level-${e.depth}`],{collapsible:l.value},{collapsed:i.value},{"is-link":s.value},{"is-active":a.value},{"has-active":f.value}]);function C(T){"key"in T&&T.key!=="Enter"||!e.item.link&&x()}function M(){e.item.link&&x()}return(T,N)=>{const O=W("VPSidebarItem",!0);return n(),g(H(w.value),{class:V(["VPSidebarItem",P.value])},{default:u(()=>[t.item.text?(n(),c("div",U({key:0,class:"item",role:m.value},Jt(t.item.items?{click:C,keydown:C}:{},!0),{tabindex:t.item.items&&0}),[N[1]||(N[1]=o("div",{class:"indicator"},null,-1)),t.item.link?(n(),g(B,{key:0,tag:$.value,class:"link",href:t.item.link,rel:t.item.rel,target:t.item.target},{default:u(()=>[(n(),g(H(p.value),{class:"text",innerHTML:t.item.text},null,8,["innerHTML"]))]),_:1},8,["tag","href","rel","target"])):(n(),g(H(p.value),{key:1,class:"text",innerHTML:t.item.text},null,8,["innerHTML"])),t.item.collapsed!=null&&t.item.items&&t.item.items.length?(n(),c("div",{key:2,class:"caret",role:"button","aria-label":"toggle section",onClick:M,onKeydown:Yt(M,["enter"]),tabindex:"0"},[...N[0]||(N[0]=[o("span",{class:"vpi-chevron-right caret-icon"},null,-1)])],32)):y("",!0)],16,wn)):y("",!0),t.item.items&&t.item.items.length?(n(),c("div",bn,[t.depth<5?(n(!0),c(I,{key:0},A(t.item.items,q=>(n(),g(O,{key:q.text,item:q,depth:t.depth+1},null,8,["item","depth"]))),128)):y("",!0)])):y("",!0)]),_:1},8,["class"])}}}),$n=b(_n,[["__scopeId","data-v-252b2cc7"]]),Ln=v({__name:"VPSidebarGroup",props:{items:{}},setup(t){const e=z(!0);let i=null;return E(()=>{i=setTimeout(()=>{i=null,e.value=!1},300)}),yt(()=>{i!=null&&(clearTimeout(i),i=null)}),(l,s)=>(n(!0),c(I,null,A(t.items,a=>(n(),c("div",{key:a.text,class:V(["group",{"no-transition":e.value}])},[k($n,{item:a,depth:0},null,8,["item"])],2))),128))}}),zn=b(Ln,[["__scopeId","data-v-06da47f7"]]),Pn={class:"nav",id:"VPSidebarNav","aria-labelledby":"sidebar-aria-label",tabindex:"-1"},Mn=v({__name:"VPSidebar",props:{open:{type:Boolean}},setup(t){const{sidebarGroups:e,hasSidebar:i}=G(),l=t,s=z(null),a=Tt(lt?document.body:null);D([l,s],()=>{var h;l.open?(a.value=!0,(h=s.value)==null||h.focus()):a.value=!1},{immediate:!0,flush:"post"});const f=z(0);return D(e,()=>{f.value+=1},{deep:!0}),(h,x)=>r(i)?(n(),c("aside",{key:0,class:V(["VPSidebar",{open:t.open}]),ref_key:"navEl",ref:s,onClick:x[0]||(x[0]=Qt(()=>{},["stop"]))},[x[2]||(x[2]=o("div",{class:"curtain"},null,-1)),o("nav",Pn,[x[1]||(x[1]=o("span",{class:"visually-hidden",id:"sidebar-aria-label"}," Sidebar Navigation ",-1)),d(h.$slots,"sidebar-nav-before",{},void 0,!0),(n(),g(zn,{items:r(e),key:f.value},null,8,["items"])),d(h.$slots,"sidebar-nav-after",{},void 0,!0)])],2)):y("",!0)}}),Sn=b(Mn,[["__scopeId","data-v-5dc9f844"]]),Vn=v({__name:"VPSkipLink",setup(t){const{theme:e}=L(),i=Y(),l=z();D(()=>i.path,()=>l.value.focus());function s({target:a}){const f=document.getElementById(decodeURIComponent(a.hash).slice(1));if(f){const h=()=>{f.removeAttribute("tabindex"),f.removeEventListener("blur",h)};f.setAttribute("tabindex","-1"),f.addEventListener("blur",h),f.focus(),window.scrollTo(0,0)}}return(a,f)=>(n(),c(I,null,[o("span",{ref_key:"backToTop",ref:l,tabindex:"-1"},null,512),o("a",{href:"#VPContent",class:"VPSkipLink visually-hidden",onClick:s},S(r(e).skipToContentLabel||"Skip to content"),1)],64))}}),Cn=b(Vn,[["__scopeId","data-v-9813267a"]]),Tn=v({__name:"Layout",setup(t){const{isOpen:e,open:i,close:l}=G(),s=Y();D(()=>s.path,l),ye(e,l);const{frontmatter:a}=L(),f=Xt(),h=_(()=>!!f["home-hero-image"]);return It("hero-image-slot-exists",h),(x,w)=>{const $=W("Content");return r(a).layout!==!1?(n(),c("div",{key:0,class:V(["Layout",r(a).pageClass])},[d(x.$slots,"layout-top",{},void 0,!0),k(Cn),k(le,{class:"backdrop",show:r(e),onClick:r(l)},null,8,["show","onClick"]),k(kn,null,{"nav-bar-title-before":u(()=>[d(x.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":u(()=>[d(x.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":u(()=>[d(x.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":u(()=>[d(x.$slots,"nav-bar-content-after",{},void 0,!0)]),"nav-screen-content-before":u(()=>[d(x.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":u(()=>[d(x.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3}),k(xl,{open:r(e),onOpenMenu:r(i)},null,8,["open","onOpenMenu"]),k(Sn,{open:r(e)},{"sidebar-nav-before":u(()=>[d(x.$slots,"sidebar-nav-before",{},void 0,!0)]),"sidebar-nav-after":u(()=>[d(x.$slots,"sidebar-nav-after",{},void 0,!0)]),_:3},8,["open"]),k(Ji,null,{"page-top":u(()=>[d(x.$slots,"page-top",{},void 0,!0)]),"page-bottom":u(()=>[d(x.$slots,"page-bottom",{},void 0,!0)]),"not-found":u(()=>[d(x.$slots,"not-found",{},void 0,!0)]),"home-hero-before":u(()=>[d(x.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":u(()=>[d(x.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":u(()=>[d(x.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":u(()=>[d(x.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":u(()=>[d(x.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":u(()=>[d(x.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":u(()=>[d(x.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":u(()=>[d(x.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":u(()=>[d(x.$slots,"home-features-after",{},void 0,!0)]),"doc-footer-before":u(()=>[d(x.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":u(()=>[d(x.$slots,"doc-before",{},void 0,!0)]),"doc-after":u(()=>[d(x.$slots,"doc-after",{},void 0,!0)]),"doc-top":u(()=>[d(x.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":u(()=>[d(x.$slots,"doc-bottom",{},void 0,!0)]),"aside-top":u(()=>[d(x.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":u(()=>[d(x.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":u(()=>[d(x.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":u(()=>[d(x.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":u(()=>[d(x.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":u(()=>[d(x.$slots,"aside-ads-after",{},void 0,!0)]),_:3}),k(el),d(x.$slots,"layout-bottom",{},void 0,!0)],2)):(n(),g($,{key:1}))}}}),In=b(Tn,[["__scopeId","data-v-d52dd4c4"]]),Dt={Layout:In,enhanceApp:({app:t})=>{t.component("Badge",te)}},Nn={class:"hs-showcase"},An={key:"loading",class:"hs-loading"},Hn={class:"hs-loading-card"},Bn={class:"hs-loading-bar"},En={class:"hs-loading-pct"},Fn={key:"update",class:"hs-update"},Dn={class:"hs-update-card"},Gn={class:"hs-update-bar"},On={class:"hs-update-pct"},Un={class:"hs-update-steps"},Zn={key:"screen",class:"hs-stage"},jn={key:"control",class:"hs-stage"},Wn={key:"final",class:"hs-final"},$t=`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150" width="100%" height="100%">
  <defs>
    <linearGradient id="hsUpGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2563EB"/>
      <stop offset="100%" stop-color="#7C3AED"/>
    </linearGradient>
  </defs>
  <circle cx="75" cy="75" r="72" fill="url(#hsUpGrad)"/>
  <path d="M20,60 C35,45 50,75 65,60 C80,45 95,75 110,60 C125,45 140,75 155,60" fill="none" stroke="white" stroke-width="3" opacity="0.2" stroke-linecap="round"/>
  <path d="M20,75 C35,60 50,90 65,75 C80,60 95,90 110,75 C125,60 140,90 155,75" fill="none" stroke="white" stroke-width="4" opacity="0.5" stroke-linecap="round"/>
  <path d="M20,90 C35,75 50,105 65,90 C80,75 95,105 110,90 C125,75 140,105 155,90" fill="none" stroke="white" stroke-width="3" opacity="0.2" stroke-linecap="round"/>
  <path d="M48,72 L66,90 L102,52" fill="none" stroke="white" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,qn=`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150" width="100%" height="100%">
  <defs>
    <linearGradient id="hsFinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2563EB"/>
      <stop offset="100%" stop-color="#7C3AED"/>
    </linearGradient>
  </defs>
  <circle cx="75" cy="75" r="72" fill="url(#hsFinGrad)"/>
  <path d="M20,60 C35,45 50,75 65,60 C80,45 95,75 110,60 C125,45 140,75 155,60" fill="none" stroke="white" stroke-width="3" opacity="0.2" stroke-linecap="round"/>
  <path d="M20,75 C35,60 50,90 65,75 C80,60 95,90 110,75 C125,60 140,90 155,75" fill="none" stroke="white" stroke-width="4" opacity="0.5" stroke-linecap="round"/>
  <path d="M20,90 C35,75 50,105 65,90 C80,75 95,105 110,90 C125,75 140,105 155,90" fill="none" stroke="white" stroke-width="3" opacity="0.2" stroke-linecap="round"/>
  <path d="M48,72 L66,90 L102,52" fill="none" stroke="white" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,Lt=`
<svg class="hs-win hs-win-screen" viewBox="0 0 1530 850" width="100%" font-family="Microsoft YaHei, 'Segoe UI', sans-serif">
  <rect class="ui-seg" style="--d:0s" x="0" y="0" width="1530" height="850" rx="12" fill="#ffffff"/>
  <!-- 标题栏（左 + 右） -->
  <g class="ui-seg" style="--d:.15s">
    <path d="M0,12 A12,12 0 0 1 12,0 L200,0 L200,48 L0,48 Z" fill="#4285f4"/>
    <circle cx="26" cy="24" r="5" fill="#ffffff" opacity="0.9"/>
    <text x="38" y="29" font-size="13" font-weight="600" fill="#ffffff">AgoraIn</text>
    <path d="M200,0 L1518,0 A12,12 0 0 1 1530,12 L1530,48 L200,48 Z" fill="#4285f4"/>
    <rect x="212" y="9" width="106" height="30" rx="8" fill="rgba(255,255,255,0.15)"/>
    <text x="224" y="26" font-size="13" fill="#ffffff">大屏模式</text>
    <path d="M300,24 L305,29 L310,24" stroke="#ffffff" stroke-width="1.5" fill="none"/>
    <g font-size="13" fill="#ffffff">
      <text x="330" y="26">文件</text>
      <text x="376" y="26">远程</text>
      <text x="422" y="26">设置</text>
      <text x="468" y="26">帮助</text>
    </g>
    <line x1="1405" y1="24" x2="1425" y2="24" stroke="#ffffff" stroke-width="1.5"/>
    <rect x="1451" y="17" width="14" height="14" rx="1" fill="none" stroke="#ffffff" stroke-width="1.3"/>
    <line x1="1497" y1="17" x2="1517" y2="31" stroke="#ffffff" stroke-width="1.4"/>
    <line x1="1517" y1="17" x2="1497" y2="31" stroke="#ffffff" stroke-width="1.4"/>
  </g>
  <!-- 左侧栏：任务树背景 + 任务树 -->
  <g class="ui-seg" style="--d:.3s">
    <path d="M0,48 L200,48 L200,838 A12,12 0 0 1 188,850 L12,850 A12,12 0 0 1 0,838 Z" fill="#f5f5f5"/>
    <g font-size="13">
      <g class="ui-seg" style="--d:.42s">
        <path d="M20,66 C20,65.3 20.7,64.6 21.4,64.6 L25.2,64.6 L27.2,67 L33.6,67 C34.3,67 35,67.7 35,68.4 L35,73 C35,73.7 34.3,74.3 33.6,74.3 L21.4,74.3 C20.7,74.3 20,73.7 20,73 Z" fill="#666"/>
        <text x="44" y="75" font-weight="600" fill="#333">数学打卡</text>
      </g>
      <g class="ui-seg" style="--d:.5s">
        <rect x="12" y="84" width="176" height="24" rx="4" fill="#d2e3fc"/>
        <path d="M30,89 L38,89 L42,93 L42,104 L30,104 Z" fill="#4285f4"/>
        <path d="M38,89 L38,93 L42,93 Z" fill="#4285f4"/>
        <text x="47" y="101" font-weight="600" fill="#333">2026秋季班</text>
      </g>
      <g class="ui-seg" style="--d:.58s">
        <path d="M20,116 C20,115.3 20.7,114.6 21.4,114.6 L25.2,114.6 L27.2,117 L33.6,117 C34.3,117 35,117.7 35,118.4 L35,123 C35,123.7 34.3,124.3 33.6,124.3 L21.4,124.3 C20.7,124.3 20,123.7 20,123 Z" fill="#666"/>
        <text x="44" y="125" font-weight="600" fill="#333">英语打卡</text>
      </g>
      <g class="ui-seg" style="--d:.66s">
        <path d="M30,139 L38,139 L42,143 L42,154 L30,154 Z" fill="#4285f4"/>
        <path d="M38,139 L38,143 L42,143 Z" fill="#4285f4"/>
        <text x="47" y="151" font-weight="600" fill="#333">周末班</text>
      </g>
      <g class="ui-seg" style="--d:.74s">
        <path d="M20,166 C20,165.3 20.7,164.6 21.4,164.6 L25.2,164.6 L27.2,167 L33.6,167 C34.3,167 35,167.7 35,168.4 L35,173 C35,173.7 34.3,174.3 33.6,174.3 L21.4,174.3 C20.7,174.3 20,173.7 20,173 Z" fill="#666"/>
        <text x="44" y="175" font-weight="600" fill="#333">物理打卡</text>
      </g>
      <g class="ui-seg" style="--d:.82s">
        <path d="M20,194 C20,193.3 20.7,192.6 21.4,192.6 L25.2,192.6 L27.2,195 L33.6,195 C34.3,195 35,195.7 35,196.4 L35,201 C35,201.7 34.3,202.3 33.6,202.3 L21.4,202.3 C20.7,202.3 20,201.7 20,201 Z" fill="#666"/>
        <text x="44" y="203" font-weight="600" fill="#333">化学打卡</text>
      </g>
    </g>
  </g>
  <!-- 标签栏 -->
  <g class="ui-seg" style="--d:.7s">
    <rect x="200" y="48" width="1330" height="36" fill="#f0f0f0"/>
    <rect x="200" y="83" width="1330" height="1" fill="#e0e0e0"/>
    <rect x="200" y="48" width="180" height="36" fill="#ffffff"/>
    <text x="212" y="68" font-size="12" font-weight="600" fill="#333">数学打卡 - 2026秋季</text>
    <line x1="356" y1="61" x2="366" y2="71" stroke="#999" stroke-width="1.2"/>
    <line x1="366" y1="61" x2="356" y2="71" stroke="#999" stroke-width="1.2"/>
    <text x="392" y="68" font-size="12" fill="#555">英语打卡 - 周末班</text>
    <line x1="520" y1="61" x2="530" y2="71" stroke="#999" stroke-width="1.2"/>
    <line x1="530" y1="61" x2="520" y2="71" stroke="#999" stroke-width="1.2"/>
    <text x="1512" y="73" font-size="18" font-weight="300" fill="#666" text-anchor="middle">+</text>
  </g>
  <!-- 左侧：打卡排名 -->
  <g class="ui-seg" style="--d:.9s">
    <rect x="220" y="96" width="320" height="718" rx="8" fill="#f8f9fa"/>
    <text x="232" y="122" font-size="16" font-weight="600" fill="#333">打卡排名</text>
    <text x="232" y="143" font-size="12" fill="#888">最早打卡</text>
    <g font-size="13">
      <text x="232" y="170" font-weight="700" fill="#FFD700">1</text><text x="272" y="170" fill="#333">张三</text><text x="528" y="170" font-size="12" fill="#888" text-anchor="end">07:58:12</text>
      <text x="232" y="196" font-weight="700" fill="#C0C0C0">2</text><text x="272" y="196" fill="#333">李四</text><text x="528" y="196" font-size="12" fill="#888" text-anchor="end">08:01:03</text>
      <text x="232" y="222" font-weight="700" fill="#CD7F32">3</text><text x="272" y="222" fill="#333">王五</text><text x="528" y="222" font-size="12" fill="#888" text-anchor="end">08:05:47</text>
      <text x="232" y="248" font-weight="700" fill="#333">4</text><text x="272" y="248" fill="#333">赵六</text><text x="528" y="248" font-size="12" fill="#888" text-anchor="end">08:12:30</text>
      <text x="232" y="274" font-weight="700" fill="#333">5</text><text x="272" y="274" fill="#333">钱七</text><text x="528" y="274" font-size="12" fill="#888" text-anchor="end">08:15:22</text>
      <text x="232" y="300" font-weight="700" fill="#333">6</text><text x="272" y="300" fill="#333">孙八</text><text x="528" y="300" font-size="12" fill="#888" text-anchor="end">08:17:05</text>
      <text x="232" y="326" font-weight="700" fill="#333">7</text><text x="272" y="326" fill="#333">周九</text><text x="528" y="326" font-size="12" fill="#888" text-anchor="end">08:19:44</text>
      <text x="232" y="352" font-weight="700" fill="#333">8</text><text x="272" y="352" fill="#333">吴十</text><text x="528" y="352" font-size="12" fill="#888" text-anchor="end">08:22:18</text>
    </g>
  </g>
  <!-- 右侧：状态行 + 统计条 -->
  <g class="ui-seg" style="--d:1.05s">
    <text x="556" y="110" font-size="13" fill="#666">就绪</text>
    <circle cx="1442" cy="106" r="4" fill="#34a853"/>
    <text x="1454" y="110" font-size="12" fill="#777">服务器在线</text>
    <rect x="556" y="122" width="954" height="40" rx="8" fill="#e8f0fe"/>
    <text x="570" y="148" font-size="14" font-weight="500" fill="#4285f4">总人数: 40  |  已打卡: 25  (62.5%)</text>
  </g>
  <!-- 学生按钮网格（逐行出现） -->
  <g class="ui-seg" style="--d:1.2s" font-size="15" font-weight="500" text-anchor="middle">
    <rect x="560.5" y="182" width="150" height="52" rx="8" fill="#4285f4"/><text x="635.5" y="214" fill="#fff">学生1</text>
    <rect x="719.5" y="182" width="150" height="52" rx="8" fill="#4285f4"/><text x="794.5" y="214" fill="#fff">学生2</text>
    <rect x="878.5" y="182" width="150" height="52" rx="8" fill="#4285f4"/><text x="953.5" y="214" fill="#fff">学生3</text>
    <rect x="1037.5" y="182" width="150" height="52" rx="8" fill="#4285f4"/><text x="1112.5" y="214" fill="#fff">学生4</text>
    <rect x="1196.5" y="182" width="150" height="52" rx="8" fill="#4285f4"/><text x="1271.5" y="214" fill="#fff">学生5</text>
    <rect x="1355.5" y="182" width="150" height="52" rx="8" fill="#4285f4"/><text x="1430.5" y="214" fill="#fff">学生6</text>
  </g>
  <g class="ui-seg" style="--d:1.35s" font-size="15" font-weight="500" text-anchor="middle">
    <rect x="560.5" y="242" width="150" height="52" rx="8" fill="#4285f4"/><text x="635.5" y="274" fill="#fff">学生7</text>
    <rect x="719.5" y="242" width="150" height="52" rx="8" fill="#4285f4"/><text x="794.5" y="274" fill="#fff">学生8</text>
    <rect x="878.5" y="242" width="150" height="52" rx="8" fill="#4285f4"/><text x="953.5" y="274" fill="#fff">学生9</text>
    <rect x="1037.5" y="242" width="150" height="52" rx="8" fill="#4285f4"/><text x="1112.5" y="274" fill="#fff">学生10</text>
    <rect x="1196.5" y="242" width="150" height="52" rx="8" fill="#4285f4"/><text x="1271.5" y="274" fill="#fff">学生11</text>
    <rect x="1355.5" y="242" width="150" height="52" rx="8" fill="#4285f4"/><text x="1430.5" y="274" fill="#fff">学生12</text>
  </g>
  <g class="ui-seg" style="--d:1.5s" font-size="15" font-weight="500" text-anchor="middle">
    <rect x="560.5" y="302" width="150" height="52" rx="8" fill="#4285f4"/><text x="635.5" y="334" fill="#fff">学生13</text>
    <rect x="719.5" y="302" width="150" height="52" rx="8" fill="#4285f4"/><text x="794.5" y="334" fill="#fff">学生14</text>
    <rect x="878.5" y="302" width="150" height="52" rx="8" fill="#4285f4"/><text x="953.5" y="334" fill="#fff">学生15</text>
    <rect x="1037.5" y="302" width="150" height="52" rx="8" fill="#4285f4"/><text x="1112.5" y="334" fill="#fff">学生16</text>
    <rect x="1196.5" y="302" width="150" height="52" rx="8" fill="#4285f4"/><text x="1271.5" y="334" fill="#fff">学生17</text>
    <rect x="1355.5" y="302" width="150" height="52" rx="8" fill="#4285f4"/><text x="1430.5" y="334" fill="#fff">学生18</text>
  </g>
  <g class="ui-seg" style="--d:1.65s" font-size="15" font-weight="500" text-anchor="middle">
    <rect x="560.5" y="362" width="150" height="52" rx="8" fill="#4285f4"/><text x="635.5" y="394" fill="#fff">学生19</text>
    <rect x="719.5" y="362" width="150" height="52" rx="8" fill="#4285f4"/><text x="794.5" y="394" fill="#fff">学生20</text>
    <rect x="878.5" y="362" width="150" height="52" rx="8" fill="#4285f4"/><text x="953.5" y="394" fill="#fff">学生21</text>
    <rect x="1037.5" y="362" width="150" height="52" rx="8" fill="#4285f4"/><text x="1112.5" y="394" fill="#fff">学生22</text>
    <rect x="1196.5" y="362" width="150" height="52" rx="8" fill="#4285f4"/><text x="1271.5" y="394" fill="#fff">学生23</text>
    <rect x="1355.5" y="362" width="150" height="52" rx="8" fill="#4285f4"/><text x="1430.5" y="394" fill="#fff">学生24</text>
  </g>
  <g class="ui-seg" style="--d:1.8s" font-size="15" font-weight="500" text-anchor="middle">
    <rect x="560.5" y="422" width="150" height="52" rx="8" fill="#4285f4"/><text x="635.5" y="454" fill="#fff">学生25</text>
    <rect x="719.5" y="422" width="150" height="52" rx="8" fill="#e8e8e8" stroke="#d0d0d0"/><text x="794.5" y="454" fill="#333">学生26</text>
    <rect x="878.5" y="422" width="150" height="52" rx="8" fill="#e8e8e8" stroke="#d0d0d0"/><text x="953.5" y="454" fill="#333">学生27</text>
    <rect x="1037.5" y="422" width="150" height="52" rx="8" fill="#e8e8e8" stroke="#d0d0d0"/><text x="1112.5" y="454" fill="#333">学生28</text>
    <rect x="1196.5" y="422" width="150" height="52" rx="8" fill="#e8e8e8" stroke="#d0d0d0"/><text x="1271.5" y="454" fill="#333">学生29</text>
    <rect x="1355.5" y="422" width="150" height="52" rx="8" fill="#e8e8e8" stroke="#d0d0d0"/><text x="1430.5" y="454" fill="#333">学生30</text>
  </g>
  <g class="ui-seg" style="--d:1.95s" font-size="15" font-weight="500" text-anchor="middle">
    <rect x="560.5" y="482" width="150" height="52" rx="8" fill="#e8e8e8" stroke="#d0d0d0"/><text x="635.5" y="514" fill="#333">学生31</text>
    <rect x="719.5" y="482" width="150" height="52" rx="8" fill="#e8e8e8" stroke="#d0d0d0"/><text x="794.5" y="514" fill="#333">学生32</text>
    <rect x="878.5" y="482" width="150" height="52" rx="8" fill="#e8e8e8" stroke="#d0d0d0"/><text x="953.5" y="514" fill="#333">学生33</text>
    <rect x="1037.5" y="482" width="150" height="52" rx="8" fill="#e8e8e8" stroke="#d0d0d0"/><text x="1112.5" y="514" fill="#333">学生34</text>
    <rect x="1196.5" y="482" width="150" height="52" rx="8" fill="#e8e8e8" stroke="#d0d0d0"/><text x="1271.5" y="514" fill="#333">学生35</text>
    <rect x="1355.5" y="482" width="150" height="52" rx="8" fill="#e8e8e8" stroke="#d0d0d0"/><text x="1430.5" y="514" fill="#333">学生36</text>
  </g>
  <g class="ui-seg" style="--d:2.1s" font-size="15" font-weight="500" text-anchor="middle">
    <rect x="560.5" y="542" width="150" height="52" rx="8" fill="#e8e8e8" stroke="#d0d0d0"/><text x="635.5" y="574" fill="#333">学生37</text>
    <rect x="719.5" y="542" width="150" height="52" rx="8" fill="#e8e8e8" stroke="#d0d0d0"/><text x="794.5" y="574" fill="#333">学生38</text>
    <rect x="878.5" y="542" width="150" height="52" rx="8" fill="#e8e8e8" stroke="#d0d0d0"/><text x="953.5" y="574" fill="#333">学生39</text>
    <rect x="1037.5" y="542" width="150" height="52" rx="8" fill="#e8e8e8" stroke="#d0d0d0"/><text x="1112.5" y="574" fill="#333">学生40</text>
  </g>
  <!-- 底部状态栏 -->
  <g class="ui-seg" style="--d:2.6s">
    <path d="M200,822 L1518,822 A12,12 0 0 1 1530,834 L1530,850 L200,850 Z" fill="#f5f5f5"/>
    <text x="214" y="840" font-size="11" fill="#888">就绪</text>
    <text x="1518" y="840" font-size="11" fill="#aaa" text-anchor="end">右键点击已打卡学生可取消打卡</text>
  </g>
</svg>`,zt=`
<svg class="hs-win hs-win-control" viewBox="0 0 1530 850" width="100%" font-family="Microsoft YaHei, 'Segoe UI', sans-serif">
  <rect class="ui-seg" style="--d:0s" x="0" y="0" width="1530" height="850" rx="12" fill="#ffffff"/>
  <!-- 标题栏 -->
  <g class="ui-seg" style="--d:.15s">
    <path d="M0,12 A12,12 0 0 1 12,0 L1518,0 A12,12 0 0 1 1530,12 L1530,48 L0,48 Z" fill="#4285f4"/>
    <text x="20" y="28" font-size="13" font-weight="600" fill="#ffffff">控制中心</text>
    <rect x="104" y="9" width="110" height="30" rx="8" fill="rgba(255,255,255,0.15)"/>
    <text x="116" y="26" font-size="13" fill="#ffffff">控制模式</text>
    <path d="M200,25 L205,30 L210,25" stroke="#ffffff" stroke-width="1.5" fill="none"/>
    <line x1="1405" y1="24" x2="1425" y2="24" stroke="#ffffff" stroke-width="1.5"/>
    <rect x="1451" y="17" width="14" height="14" rx="1" fill="none" stroke="#ffffff" stroke-width="1.3"/>
    <line x1="1497" y1="17" x2="1517" y2="31" stroke="#ffffff" stroke-width="1.4"/>
    <line x1="1517" y1="17" x2="1497" y2="31" stroke="#ffffff" stroke-width="1.4"/>
  </g>
  <!-- 统计条 -->
  <g class="ui-seg" style="--d:.35s">
    <rect x="0" y="48" width="1530" height="36" fill="#f5f7fa"/>
    <text x="20" y="62" font-size="11" fill="#888">总设备数量</text>
    <text x="20" y="81" font-size="18" font-weight="600" fill="#4285f4">0</text>
    <text x="150" y="62" font-size="11" fill="#888">总任务数量</text>
    <text x="150" y="81" font-size="18" font-weight="600" fill="#4285f4">0</text>
    <text x="280" y="62" font-size="11" fill="#888">在线设备数量</text>
    <text x="280" y="81" font-size="18" font-weight="600" fill="#4285f4">0</text>
  </g>
  <!-- 左侧导航 -->
  <g class="ui-seg" style="--d:.5s">
    <rect x="220" y="84" width="1" height="738" fill="#e0e0e0"/>
    <rect x="10" y="86" width="200" height="44" rx="8" fill="#e8f0fe"/>
    <text x="32" y="113" font-size="13" font-weight="600" fill="#4285f4">划课</text>
    <g font-size="13" fill="#888">
      <text x="32" y="159">设备列表</text>
      <text x="32" y="205">任务中心</text>
      <text x="32" y="251">集控平台列表</text>
    </g>
  </g>
  <!-- 学生列表 -->
  <g class="ui-seg" style="--d:.7s">
    <rect x="220" y="84" width="280" height="738" fill="#f8f9fa"/>
    <rect x="500" y="84" width="1" height="738" fill="#e8e8e8"/>
    <text x="232" y="108" font-size="15" font-weight="600" fill="#333">学生列表</text>
    <rect x="232" y="118" width="236" height="30" rx="6" fill="#ffffff" stroke="#d0d6dd"/>
    <text x="238" y="137" font-size="12" fill="#aaa">学生姓名</text>
    <rect x="232" y="156" width="160" height="30" rx="6" fill="#ffffff" stroke="#d0d6dd"/>
    <rect x="404" y="156" width="64" height="30" rx="8" fill="#4285f4"/>
    <text x="436" y="176" font-size="13" font-weight="600" fill="#ffffff" text-anchor="middle">添加</text>
    <g font-size="13">
      <g class="ui-seg" style="--d:.82s">
        <rect x="224" y="200" width="248" height="26" rx="6" fill="#e8f0fe"/>
        <text x="232" y="218" font-weight="600" fill="#333">张三</text>
        <rect x="424" y="206" width="48" height="14" rx="7" fill="#ffffff"/>
        <text x="448" y="217" font-size="11" fill="#4285f4" text-anchor="middle">剩12</text>
      </g>
      <g class="ui-seg" style="--d:.9s">
        <text x="232" y="248" fill="#333">李四</text>
        <rect x="424" y="236" width="48" height="14" rx="7" fill="#e8f0fe"/>
        <text x="448" y="247" font-size="11" fill="#4285f4" text-anchor="middle">剩8</text>
      </g>
      <g class="ui-seg" style="--d:.98s">
        <text x="232" y="278" fill="#333">王五</text>
        <rect x="424" y="266" width="48" height="14" rx="7" fill="#e8f0fe"/>
        <text x="448" y="277" font-size="11" fill="#4285f4" text-anchor="middle">剩20</text>
      </g>
      <g class="ui-seg" style="--d:1.06s">
        <text x="232" y="308" fill="#333">赵六</text>
        <rect x="424" y="296" width="48" height="14" rx="7" fill="#e8f0fe"/>
        <text x="448" y="307" font-size="11" fill="#4285f4" text-anchor="middle">剩6</text>
      </g>
      <g class="ui-seg" style="--d:1.14s">
        <text x="232" y="338" fill="#333">钱七</text>
        <rect x="424" y="326" width="48" height="14" rx="7" fill="#e8f0fe"/>
        <text x="448" y="337" font-size="11" fill="#4285f4" text-anchor="middle">剩15</text>
      </g>
      <g class="ui-seg" style="--d:1.22s">
        <text x="232" y="368" fill="#333">孙八</text>
        <rect x="424" y="356" width="48" height="14" rx="7" fill="#e8f0fe"/>
        <text x="448" y="367" font-size="11" fill="#4285f4" text-anchor="middle">剩10</text>
      </g>
      <g class="ui-seg" style="--d:1.3s">
        <text x="232" y="398" fill="#333">周九</text>
        <rect x="424" y="386" width="48" height="14" rx="7" fill="#e8f0fe"/>
        <text x="448" y="397" font-size="11" fill="#4285f4" text-anchor="middle">剩18</text>
      </g>
      <g class="ui-seg" style="--d:1.38s">
        <text x="232" y="428" fill="#333">吴十</text>
        <rect x="424" y="416" width="48" height="14" rx="7" fill="#e8f0fe"/>
        <text x="448" y="427" font-size="11" fill="#4285f4" text-anchor="middle">剩4</text>
      </g>
    </g>
  </g>
  <!-- Tab + 划课操作区 -->
  <g class="ui-seg" style="--d:.95s">
    <rect x="508" y="90" width="132" height="28" rx="8" fill="#e8f0fe"/>
    <text x="522" y="109" font-size="13" font-weight="600" fill="#4285f4">课时划消与排课</text>
    <text x="652" y="109" font-size="13" fill="#555">设置</text>
    <rect x="516" y="126" width="998" height="110" rx="8" fill="#f8f9fa"/>
    <text x="530" y="148" font-size="14" font-weight="600" fill="#333">张三 · 剩余课时 12</text>
    <text x="530" y="184" font-size="13" fill="#555">课时数：</text>
    <rect x="590" y="168" width="90" height="30" rx="6" fill="#ffffff" stroke="#d0d6dd"/>
    <rect x="690" y="168" width="88" height="30" rx="8" fill="#4285f4"/>
    <text x="734" y="189" font-size="13" font-weight="600" fill="#ffffff" text-anchor="middle">划消课时</text>
    <rect x="786" y="168" width="88" height="30" rx="8" fill="#34a853"/>
    <text x="830" y="189" font-size="13" font-weight="600" fill="#ffffff" text-anchor="middle">增加课时</text>
    <text x="530" y="224" font-size="13" fill="#555">备注：</text>
    <rect x="584" y="208" width="320" height="30" rx="6" fill="#ffffff" stroke="#d0d6dd"/>
  </g>
  <!-- 课时记录 -->
  <g class="ui-seg" style="--d:1.1s">
    <text x="1172" y="148" font-size="13" font-weight="600" fill="#333">课时记录</text>
    <g font-size="11">
      <text x="1172" y="170" fill="#888">2026-08-20</text><text x="1250" y="170" font-size="12" font-weight="600" fill="#d32f2f">-2</text><text x="1302" y="170" fill="#666">补课</text>
      <text x="1172" y="192" fill="#888">2026-08-18</text><text x="1250" y="192" font-size="12" font-weight="600" fill="#34a853">+2</text><text x="1302" y="192" fill="#666">数学课</text>
      <text x="1172" y="214" fill="#888">2026-08-15</text><text x="1250" y="214" font-size="12" font-weight="600" fill="#d32f2f">-1</text><text x="1302" y="214" fill="#666">请假</text>
      <text x="1172" y="236" fill="#888">2026-08-12</text><text x="1250" y="236" font-size="12" font-weight="600" fill="#34a853">+2</text><text x="1302" y="236" fill="#666">数学课</text>
      <text x="1172" y="258" fill="#888">2026-08-10</text><text x="1250" y="258" font-size="12" font-weight="600" fill="#d32f2f">-2</text><text x="1302" y="258" fill="#666">补课</text>
    </g>
  </g>
  <!-- 排课区：月份导航 + 星期表头 -->
  <g class="ui-seg" style="--d:1.25s">
    <rect x="516" y="256" width="32" height="28" rx="8" fill="#f0f0f0"/>
    <text x="532" y="275" font-size="16" fill="#333" text-anchor="middle">‹</text>
    <rect x="554" y="256" width="32" height="28" rx="8" fill="#f0f0f0"/>
    <text x="570" y="275" font-size="16" fill="#333" text-anchor="middle">›</text>
    <rect x="592" y="256" width="52" height="28" rx="8" fill="#e8f0fe"/>
    <text x="618" y="275" font-size="12" font-weight="600" fill="#4285f4" text-anchor="middle">今天</text>
    <text x="660" y="278" font-size="16" font-weight="600" fill="#333">2026年8月</text>
    <text x="1138" y="276" font-size="12" fill="#666" text-anchor="end">2026-08-23</text>
    <g font-size="11" text-anchor="middle">
      <text x="560.4" y="300" fill="#888">一</text><text x="649.3" y="300" fill="#888">二</text><text x="738.1" y="300" fill="#888">三</text><text x="827.0" y="300" fill="#888">四</text><text x="915.9" y="300" fill="#888">五</text><text x="1004.7" y="300" fill="#e57373">六</text><text x="1093.6" y="300" fill="#e57373">日</text>
    </g>
  </g>
  <!-- 日历（逐行出现） -->
  <g class="ui-seg" style="--d:1.4s" font-size="12">
    <text x="560.4" y="332" fill="#ccc" text-anchor="middle">27</text><text x="649.3" y="332" fill="#ccc" text-anchor="middle">28</text><text x="738.1" y="332" fill="#ccc" text-anchor="middle">29</text><text x="827.0" y="332" fill="#ccc" text-anchor="middle">30</text><text x="915.9" y="332" fill="#ccc" text-anchor="middle">31</text>
    <rect x="517.3" y="310" width="84.9" height="81.7" rx="6" fill="#fce4ec"/>
    <text x="559.8" y="334" fill="#e57373" text-anchor="middle">1</text><text x="559.8" y="358" font-size="11" font-weight="600" fill="#e57373" text-anchor="middle">休</text>
    <text x="1093.6" y="332" fill="#666" text-anchor="middle">2</text>
  </g>
  <g class="ui-seg" style="--d:1.55s" font-size="12">
    <text x="560.4" y="417.7" fill="#666" text-anchor="middle">3</text><text x="560.4" y="441.7" font-size="11" fill="#34a853" text-anchor="middle">1节</text>
    <text x="649.3" y="417.7" fill="#666" text-anchor="middle">4</text>
    <text x="738.1" y="417.7" fill="#666" text-anchor="middle">5</text><text x="738.1" y="441.7" font-size="11" fill="#34a853" text-anchor="middle">2节</text>
    <text x="827.0" y="417.7" fill="#666" text-anchor="middle">6</text>
    <text x="915.9" y="417.7" fill="#666" text-anchor="middle">7</text>
    <text x="1004.7" y="417.7" fill="#666" text-anchor="middle">8</text>
    <text x="1093.6" y="417.7" fill="#666" text-anchor="middle">9</text>
  </g>
  <g class="ui-seg" style="--d:1.7s" font-size="12">
    <text x="560.4" y="503.4" fill="#666" text-anchor="middle">10</text><text x="560.4" y="527.4" font-size="11" fill="#34a853" text-anchor="middle">1节</text>
    <text x="649.3" y="503.4" fill="#666" text-anchor="middle">11</text>
    <text x="738.1" y="503.4" fill="#666" text-anchor="middle">12</text><text x="738.1" y="527.4" font-size="11" fill="#34a853" text-anchor="middle">2节</text>
    <text x="827.0" y="503.4" fill="#666" text-anchor="middle">13</text>
    <text x="915.9" y="503.4" fill="#666" text-anchor="middle">14</text>
    <rect x="517.3" y="481.4" width="84.9" height="81.7" rx="6" fill="#fce4ec"/>
    <text x="559.8" y="505.4" fill="#e57373" text-anchor="middle">15</text><text x="559.8" y="529.4" font-size="11" font-weight="600" fill="#e57373" text-anchor="middle">休</text>
    <text x="1093.6" y="503.4" fill="#666" text-anchor="middle">16</text>
  </g>
  <g class="ui-seg" style="--d:1.85s" font-size="12">
    <text x="560.4" y="589.1" fill="#666" text-anchor="middle">17</text><text x="560.4" y="613.1" font-size="11" fill="#34a853" text-anchor="middle">2节</text>
    <text x="649.3" y="589.1" fill="#666" text-anchor="middle">18</text>
    <text x="738.1" y="589.1" fill="#666" text-anchor="middle">19</text><text x="738.1" y="613.1" font-size="11" fill="#34a853" text-anchor="middle">1节</text>
    <text x="827.0" y="589.1" fill="#666" text-anchor="middle">20</text>
    <text x="915.9" y="589.1" fill="#666" text-anchor="middle">21</text>
    <rect x="517.3" y="567.1" width="84.9" height="81.7" rx="6" fill="#fce4ec"/>
    <text x="559.8" y="591.1" fill="#e57373" text-anchor="middle">22</text><text x="559.8" y="615.1" font-size="11" font-weight="600" fill="#e57373" text-anchor="middle">休</text>
    <rect x="1051.2" y="567.1" width="84.9" height="81.7" rx="6" fill="#f8f9fa" stroke="#4285f4" stroke-width="1.5"/>
    <text x="1093.6" y="591.1" font-weight="700" fill="#4285f4" text-anchor="middle">23</text>
    <rect x="1101.6" y="581.1" width="18" height="14" rx="4" fill="#4285f4"/>
    <text x="1110.6" y="592.1" font-size="9" fill="#ffffff" text-anchor="middle">今</text>
    <text x="1093.6" y="615.1" font-size="11" fill="#34a853" text-anchor="middle">2节</text>
  </g>
  <g class="ui-seg" style="--d:2s" font-size="12">
    <text x="560.4" y="674.8" fill="#666" text-anchor="middle">24</text><text x="560.4" y="698.8" font-size="11" fill="#34a853" text-anchor="middle">2节</text>
    <text x="649.3" y="674.8" fill="#666" text-anchor="middle">25</text>
    <text x="738.1" y="674.8" fill="#666" text-anchor="middle">26</text><text x="738.1" y="698.8" font-size="11" fill="#34a853" text-anchor="middle">1节</text>
    <text x="827.0" y="674.8" fill="#666" text-anchor="middle">27</text>
    <text x="915.9" y="674.8" fill="#666" text-anchor="middle">28</text>
    <rect x="517.3" y="652.8" width="84.9" height="81.7" rx="6" fill="#fce4ec"/>
    <text x="559.8" y="676.8" fill="#e57373" text-anchor="middle">29</text><text x="559.8" y="700.8" font-size="11" font-weight="600" fill="#e57373" text-anchor="middle">休</text>
    <text x="1093.6" y="674.8" fill="#666" text-anchor="middle">30</text>
  </g>
  <g class="ui-seg" style="--d:2.15s" font-size="12">
    <text x="560.4" y="760.5" fill="#666" text-anchor="middle">31</text>
    <text x="649.3" y="760.5" fill="#ccc" text-anchor="middle">1</text><text x="738.1" y="760.5" fill="#ccc" text-anchor="middle">2</text><text x="827.0" y="760.5" fill="#ccc" text-anchor="middle">3</text><text x="915.9" y="760.5" fill="#ccc" text-anchor="middle">4</text><text x="1004.7" y="760.5" fill="#ccc" text-anchor="middle">5</text><text x="1093.6" y="760.5" fill="#ccc" text-anchor="middle">6</text>
  </g>
  <!-- 右侧：当日排课面板 -->
  <g class="ui-seg" style="--d:1.5s">
    <rect x="1150" y="256" width="360" height="566" rx="8" fill="#f8f9fa"/>
    <text x="1162" y="278" font-size="13" font-weight="600" fill="#333">2026年8月23日</text>
    <text x="1498" y="278" font-size="11" fill="#888" text-anchor="end">2 节课</text>
    <rect x="1162" y="288" width="132" height="28" rx="8" fill="#fff3e0"/>
    <text x="1228" y="307" font-size="12" font-weight="600" fill="#e65100" text-anchor="middle">设为不排课日/恢复</text>
    <rect x="1300" y="288" width="72" height="28" rx="8" fill="#fdecea"/>
    <text x="1336" y="307" font-size="12" font-weight="600" fill="#d32f2f" text-anchor="middle">清空排课</text>
    <rect x="1378" y="288" width="80" height="28" rx="8" fill="#4285f4"/>
    <text x="1418" y="307" font-size="12" font-weight="600" fill="#ffffff" text-anchor="middle">复制排课…</text>
    <text x="1162" y="340" font-size="12" font-weight="600" fill="#555">选择学生（点击添加，需填写上课/下课时间）</text>
    <g font-size="12">
      <rect x="1162" y="350" width="336" height="22" rx="6" fill="#e8f0fe" stroke="#4285f4"/><text x="1172" y="366" fill="#333">张三</text>
      <rect x="1162" y="376" width="336" height="22" rx="6" fill="#ffffff"/><text x="1172" y="392" fill="#333">李四</text>
      <rect x="1162" y="402" width="336" height="22" rx="6" fill="#ffffff"/><text x="1172" y="418" fill="#333">王五</text>
      <rect x="1162" y="428" width="336" height="22" rx="6" fill="#ffffff"/><text x="1172" y="444" fill="#333">赵六</text>
      <rect x="1162" y="454" width="336" height="22" rx="6" fill="#ffffff"/><text x="1172" y="470" fill="#333">钱七</text>
      <rect x="1162" y="480" width="336" height="22" rx="6" fill="#ffffff"/><text x="1172" y="496" fill="#333">孙八</text>
      <rect x="1162" y="506" width="336" height="22" rx="6" fill="#ffffff"/><text x="1172" y="522" fill="#333">周九</text>
    </g>
    <text x="1162" y="544" font-size="12" font-weight="600" fill="#555">已排课学生（可改时间 / 移除）</text>
    <g font-size="12">
      <text x="1162" y="571" font-weight="600" fill="#333">张三</text>
      <rect x="1200" y="554" width="62" height="26" rx="6" fill="#ffffff" stroke="#d0d6dd"/><text x="1231" y="572" fill="#333" text-anchor="middle">09:00</text>
      <rect x="1266" y="554" width="62" height="26" rx="6" fill="#ffffff" stroke="#d0d6dd"/><text x="1297" y="572" fill="#333" text-anchor="middle">10:00</text>
      <rect x="1332" y="554" width="52" height="26" rx="8" fill="#fdecea"/><text x="1358" y="572" font-size="11" fill="#d32f2f" text-anchor="middle">移除</text>
      <text x="1162" y="607" font-weight="600" fill="#333">李四</text>
      <rect x="1200" y="590" width="62" height="26" rx="6" fill="#ffffff" stroke="#d0d6dd"/><text x="1231" y="608" fill="#333" text-anchor="middle">09:30</text>
      <rect x="1266" y="590" width="62" height="26" rx="6" fill="#ffffff" stroke="#d0d6dd"/><text x="1297" y="608" fill="#333" text-anchor="middle">10:30</text>
      <rect x="1332" y="590" width="52" height="26" rx="8" fill="#fdecea"/><text x="1358" y="608" font-size="11" fill="#d32f2f" text-anchor="middle">移除</text>
      <text x="1162" y="643" font-weight="600" fill="#333">王五</text>
      <rect x="1200" y="626" width="62" height="26" rx="6" fill="#ffffff" stroke="#d0d6dd"/><text x="1231" y="644" fill="#333" text-anchor="middle">14:00</text>
      <rect x="1266" y="626" width="62" height="26" rx="6" fill="#ffffff" stroke="#d0d6dd"/><text x="1297" y="644" fill="#333" text-anchor="middle">15:00</text>
      <rect x="1332" y="626" width="52" height="26" rx="8" fill="#fdecea"/><text x="1358" y="644" font-size="11" fill="#d32f2f" text-anchor="middle">移除</text>
      <text x="1162" y="679" font-weight="600" fill="#333">赵六</text>
      <rect x="1200" y="662" width="62" height="26" rx="6" fill="#ffffff" stroke="#d0d6dd"/><text x="1231" y="680" fill="#333" text-anchor="middle">15:30</text>
      <rect x="1266" y="662" width="62" height="26" rx="6" fill="#ffffff" stroke="#d0d6dd"/><text x="1297" y="680" fill="#333" text-anchor="middle">16:30</text>
      <rect x="1332" y="662" width="52" height="26" rx="8" fill="#fdecea"/><text x="1358" y="680" font-size="11" fill="#d32f2f" text-anchor="middle">移除</text>
    </g>
  </g>
  <!-- 底部状态栏 -->
  <g class="ui-seg" style="--d:2.6s">
    <path d="M0,822 L1518,822 A12,12 0 0 1 1530,834 L1530,850 L12,850 A12,12 0 0 1 0,838 Z" fill="#f5f5f5"/>
    <text x="20" y="840" font-size="11" fill="#888">就绪</text>
  </g>
</svg>`,Rn=v({__name:"HomeShowcase",setup(t){const e=z("loading"),i=z(0),l=z(0),s=["下载更新包","校验完整性","安装核心组件","配置本地服务","界面初始化"],a=[];let f,h;const x=()=>{a.forEach(p=>window.clearTimeout(p)),a.length=0,f&&window.clearInterval(f),h&&window.clearInterval(h)},w=()=>{h&&window.clearInterval(h),e.value="update",l.value=0,h=window.setInterval(()=>{l.value=Math.min(100,l.value+2)},45),a.push(window.setTimeout(()=>{h&&window.clearInterval(h),e.value="screen"},3200)),a.push(window.setTimeout(()=>{e.value="control"},9600)),a.push(window.setTimeout(()=>{e.value="final"},16e3))},$=()=>{window.removeEventListener("load",$),f&&window.clearInterval(f);const p=window.setInterval(()=>{i.value=Math.min(i.value+7,100),i.value>=100&&(window.clearInterval(p),a.push(window.setTimeout(w,420)))},28)};return E(()=>{f=window.setInterval(()=>{i.value=Math.min(i.value+Math.random()*9+3,88)},160),document.readyState==="complete"?$():window.addEventListener("load",$)}),yt(x),(p,m)=>(n(),c("div",Nn,[o("button",{class:"hs-replay",type:"button",onClick:w},"↻ 重播动画"),k(K,{name:"hs-fade",mode:"out-in"},{default:u(()=>[e.value==="loading"?(n(),c("div",An,[o("div",Hn,[o("div",{class:"hs-loading-logo",innerHTML:$t}),m[0]||(m[0]=o("p",{class:"hs-loading-text"},"正在加载页面…",-1)),o("div",Bn,[o("div",{class:"hs-loading-fill",style:j({width:i.value+"%"})},null,4)]),o("div",En,S(Math.round(i.value))+"%",1)])])):e.value==="update"?(n(),c("div",Fn,[o("div",Dn,[o("div",{class:"hs-update-logo",innerHTML:$t}),m[1]||(m[1]=o("h3",{class:"hs-update-title"},"正在更新 AgoraIn",-1)),m[2]||(m[2]=o("p",{class:"hs-update-sub"},"v2.7 → v2.8 · 课堂签到打卡系统",-1)),o("div",Gn,[o("div",{class:"hs-update-fill",style:j({width:l.value+"%"})},null,4)]),o("div",On,S(l.value)+"%",1),o("div",Un,[(n(),c(I,null,A(s,(P,C)=>o("span",{key:P,class:V({done:l.value>=(C+1)*20})},S(l.value>=(C+1)*20?"✓":"·")+" "+S(P),3)),64))])])])):e.value==="screen"?(n(),c("div",Zn,[m[3]||(m[3]=o("div",{class:"hs-stage-tag"},[o("span",{class:"hs-dot"}),F("大屏模式 · 课堂签到打卡")],-1)),o("div",{innerHTML:Lt})])):e.value==="control"?(n(),c("div",jn,[m[4]||(m[4]=o("div",{class:"hs-stage-tag"},[o("span",{class:"hs-dot"}),F("控制模式 · 课时划消与排课 + 集控平台")],-1)),o("div",{innerHTML:zt})])):(n(),c("div",Wn,[o("div",{class:"hs-final-top"},[o("div",{class:"hs-final-icon",innerHTML:qn}),m[5]||(m[5]=o("div",{class:"hs-final-title"},"全新界面已就绪",-1))]),o("div",{class:"hs-final-row"},[o("div",{class:"hs-final-card",style:{"--d":"0s"}},[o("div",{innerHTML:Lt}),m[6]||(m[6]=o("div",{class:"hs-final-name"},"大屏模式",-1))]),o("div",{class:"hs-final-card",style:{"--d":".25s"}},[o("div",{innerHTML:zt}),m[7]||(m[7]=o("div",{class:"hs-final-name"},"控制模式",-1))])])]))]),_:1})]))}}),Kn=v({__name:"Layout",setup(t){const e=Y(),{site:i,theme:l}=Pt(),s=_(()=>e.path==="/"),a={text:"项目",items:[{text:"AgoraIn 桌面端",link:"/"},{text:"移动多端应用",link:"/miniprogram/"}]},f=[{...a,activeMatch:"^/(?!miniprogram/)"},{text:"下载",link:"/download"},{text:"使用指南",items:[{text:"快速开始",link:"/guide"},{text:"功能特性",link:"/features"},{text:"API 文档",link:"/api"},{text:"部署指南",link:"/deploy"},{text:"常见问题",link:"/faq"}]},{text:"旧版文档（v2.7）",link:"/v2.7/"},{text:"v2.8",items:[{text:"更新日志",link:"https://github.com/liuyuchen012/AgoraIn/releases"},{text:"GitHub 仓库",link:"https://github.com/liuyuchen012/AgoraIn"}]}],h=[{...a,activeMatch:"^/miniprogram/"},{text:"下载",link:"/download"},{text:"功能特性",link:"/miniprogram/features"},{text:"快速开始",link:"/miniprogram/quickstart"},{text:"目录结构",link:"/miniprogram/structure"}];return J(()=>{const x=e.path.startsWith("/miniprogram/");l.value.nav=x?h:f,i.value.title=x?"移动多端应用 | 课堂管理与演示":"AgoraIn | 课堂签到打卡系统"}),(x,w)=>(n(),g(r(Dt).Layout,null,{"home-hero-image":u(()=>[s.value?(n(),g(Rn,{key:0})):y("",!0)]),_:1}))}}),Jn=`
<svg class="hs-win hs-win-screen" viewBox="0 0 1530 850" width="100%" font-family="Microsoft YaHei, 'Segoe UI', sans-serif">
  <rect class="ui-seg" style="--d:0s" x="0" y="0" width="1530" height="850" rx="12" fill="#ffffff"/>
  <!-- 标题栏 -->
  <g class="ui-seg" style="--d:0.08s">
    <path d="M0,12 A12,12 0 0 1 12,0 L200,0 L200,48 L0,48 Z" fill="#4285f4"/>
    <circle cx="26" cy="24" r="5" fill="#ffffff" opacity="0.9"/>
    <text x="38" y="29" font-size="13" font-weight="600" fill="#ffffff">AgoraIn</text>
    <path d="M200,0 L1518,0 A12,12 0 0 1 1530,12 L1530,48 L200,48 Z" fill="#4285f4"/>
    <rect x="212" y="9" width="106" height="30" rx="8" fill="rgba(255,255,255,0.15)"/>
    <text x="224" y="26" font-size="13" fill="#ffffff">大屏模式</text>
    <path d="M300,24 L305,29 L310,24" stroke="#ffffff" stroke-width="1.5" fill="none"/>
    <g font-size="13" fill="#ffffff">
      <text x="330" y="26">文件</text>
      <text x="376" y="26">远程</text>
      <text x="422" y="26">设置</text>
      <text x="468" y="26">帮助</text>
    </g>
    <line x1="1405" y1="24" x2="1425" y2="24" stroke="#ffffff" stroke-width="1.5"/>
    <rect x="1451" y="17" width="14" height="14" rx="1" fill="none" stroke="#ffffff" stroke-width="1.3"/>
    <line x1="1497" y1="17" x2="1517" y2="31" stroke="#ffffff" stroke-width="1.4"/>
    <line x1="1517" y1="17" x2="1497" y2="31" stroke="#ffffff" stroke-width="1.4"/>
  </g>
  <!-- 左侧任务树 -->
  <g class="ui-seg" style="--d:0.17s">
    <path d="M0,48 L200,48 L200,838 A12,12 0 0 1 188,850 L12,850 A12,12 0 0 1 0,838 Z" fill="#f5f5f5"/>
    <g font-size="13">
      <g class="ui-seg" style="--d:0.23s">
        <path d="M20,66 C20,65.3 20.7,64.6 21.4,64.6 L25.2,64.6 L27.2,67 L33.6,67 C34.3,67 35,67.7 35,68.4 L35,73 C35,73.7 34.3,74.3 33.6,74.3 L21.4,74.3 C20.7,74.3 20,73.7 20,73 Z" fill="#666"/>
        <text x="44" y="75" font-weight="600" fill="#333">数学打卡</text>
      </g>
      <g class="ui-seg" style="--d:0.28s">
        <rect x="12" y="84" width="176" height="24" rx="4" fill="#d2e3fc"/>
        <path d="M30,89 L38,89 L42,93 L42,104 L30,104 Z" fill="#4285f4"/>
        <path d="M38,89 L38,93 L42,93 Z" fill="#4285f4"/>
        <text x="47" y="101" font-weight="600" fill="#333">2026秋季班</text>
      </g>
      <g class="ui-seg" style="--d:0.32s">
        <path d="M20,116 C20,115.3 20.7,114.6 21.4,114.6 L25.2,114.6 L27.2,117 L33.6,117 C34.3,117 35,117.7 35,118.4 L35,123 C35,123.7 34.3,124.3 33.6,124.3 L21.4,124.3 C20.7,124.3 20,123.7 20,123 Z" fill="#666"/>
        <text x="44" y="125" font-weight="600" fill="#333">英语打卡</text>
      </g>
      <g class="ui-seg" style="--d:0.36s">
        <path d="M30,139 L38,139 L42,143 L42,154 L30,154 Z" fill="#4285f4"/>
        <path d="M38,139 L38,143 L42,143 Z" fill="#4285f4"/>
        <text x="47" y="151" font-weight="600" fill="#333">周末班</text>
      </g>
      <g class="ui-seg" style="--d:0.41s">
        <path d="M20,166 C20,165.3 20.7,164.6 21.4,164.6 L25.2,164.6 L27.2,167 L33.6,167 C34.3,167 35,167.7 35,168.4 L35,173 C35,173.7 34.3,174.3 33.6,174.3 L21.4,174.3 C20.7,174.3 20,173.7 20,173 Z" fill="#666"/>
        <text x="44" y="175" font-weight="600" fill="#333">物理打卡</text>
      </g>
      <g class="ui-seg" style="--d:0.45s">
        <path d="M20,194 C20,193.3 20.7,192.6 21.4,192.6 L25.2,192.6 L27.2,195 L33.6,195 C34.3,195 35,195.7 35,196.4 L35,201 C35,201.7 34.3,202.3 33.6,202.3 L21.4,202.3 C20.7,202.3 20,201.7 20,201 Z" fill="#666"/>
        <text x="44" y="203" font-weight="600" fill="#333">化学打卡</text>
      </g>
    </g>
  </g>
  <!-- 标签栏 -->
  <g class="ui-seg" style="--d:0.39s">
    <rect x="200" y="48" width="1330" height="36" fill="#f0f0f0"/>
    <rect x="200" y="83" width="1330" height="1" fill="#e0e0e0"/>
    <rect x="200" y="48" width="180" height="36" fill="#ffffff"/>
    <text x="212" y="68" font-size="12" font-weight="600" fill="#333">数学打卡 - 2026秋季</text>
    <line x1="356" y1="61" x2="366" y2="71" stroke="#999" stroke-width="1.2"/>
    <line x1="366" y1="61" x2="356" y2="71" stroke="#999" stroke-width="1.2"/>
    <text x="392" y="68" font-size="12" fill="#555">英语打卡 - 周末班</text>
    <line x1="520" y1="61" x2="530" y2="71" stroke="#999" stroke-width="1.2"/>
    <line x1="530" y1="61" x2="520" y2="71" stroke="#999" stroke-width="1.2"/>
    <text x="1512" y="73" font-size="18" font-weight="300" fill="#666" text-anchor="middle">+</text>
  </g>
  <!-- 打卡排名 -->
  <g class="ui-seg" style="--d:0.5s">
    <rect x="220" y="96" width="320" height="718" rx="8" fill="#f8f9fa"/>
    <text x="232" y="122" font-size="16" font-weight="600" fill="#333">打卡排名</text>
    <text x="232" y="143" font-size="12" fill="#888">最早打卡</text>
    <g font-size="13">
      <text x="232" y="170" font-weight="700" fill="#FFD700">1</text><text x="272" y="170" fill="#333">张三</text><text x="528" y="170" font-size="12" fill="#888" text-anchor="end">07:58:12</text>
      <text x="232" y="196" font-weight="700" fill="#C0C0C0">2</text><text x="272" y="196" fill="#333">李四</text><text x="528" y="196" font-size="12" fill="#888" text-anchor="end">08:01:03</text>
      <text x="232" y="222" font-weight="700" fill="#CD7F32">3</text><text x="272" y="222" fill="#333">王五</text><text x="528" y="222" font-size="12" fill="#888" text-anchor="end">08:05:47</text>
      <text x="232" y="248" font-weight="700" fill="#333">4</text><text x="272" y="248" fill="#333">赵六</text><text x="528" y="248" font-size="12" fill="#888" text-anchor="end">08:12:30</text>
      <text x="232" y="274" font-weight="700" fill="#333">5</text><text x="272" y="274" fill="#333">钱七</text><text x="528" y="274" font-size="12" fill="#888" text-anchor="end">08:15:22</text>
      <text x="232" y="300" font-weight="700" fill="#333">6</text><text x="272" y="300" fill="#333">孙八</text><text x="528" y="300" font-size="12" fill="#888" text-anchor="end">08:17:05</text>
      <text x="232" y="326" font-weight="700" fill="#333">7</text><text x="272" y="326" fill="#333">周九</text><text x="528" y="326" font-size="12" fill="#888" text-anchor="end">08:19:44</text>
      <text x="232" y="352" font-weight="700" fill="#333">8</text><text x="272" y="352" fill="#333">吴十</text><text x="528" y="352" font-size="12" fill="#888" text-anchor="end">08:22:18</text>
    </g>
  </g>
  <!-- 状态 + 统计条 -->
  <g class="ui-seg" style="--d:0.58s">
    <text x="556" y="110" font-size="13" fill="#666">就绪</text>
    <circle cx="1442" cy="106" r="4" fill="#34a853"/>
    <text x="1454" y="110" font-size="12" fill="#777">服务器在线</text>
    <rect x="556" y="122" width="954" height="40" rx="8" fill="#e8f0fe"/>
    <text x="570" y="148" font-size="14" font-weight="500" fill="#4285f4">总人数: 40  |  已打卡: 25  (62.5%)</text>
  </g>
  <!-- 学生网格 7 行 -->
  <g class="ui-seg" style="--d:0.66s" font-size="15" font-weight="500" text-anchor="middle">
    <rect x="560.5" y="182" width="150" height="52" rx="8" fill="#4285f4"/><text x="635.5" y="214" fill="#fff">学生1</text>
    <rect x="719.5" y="182" width="150" height="52" rx="8" fill="#4285f4"/><text x="794.5" y="214" fill="#fff">学生2</text>
    <rect x="878.5" y="182" width="150" height="52" rx="8" fill="#4285f4"/><text x="953.5" y="214" fill="#fff">学生3</text>
    <rect x="1037.5" y="182" width="150" height="52" rx="8" fill="#4285f4"/><text x="1112.5" y="214" fill="#fff">学生4</text>
    <rect x="1196.5" y="182" width="150" height="52" rx="8" fill="#4285f4"/><text x="1271.5" y="214" fill="#fff">学生5</text>
    <rect x="1355.5" y="182" width="150" height="52" rx="8" fill="#4285f4"/><text x="1430.5" y="214" fill="#fff">学生6</text>
  </g>
  <g class="ui-seg" style="--d:0.74s" font-size="15" font-weight="500" text-anchor="middle">
    <rect x="560.5" y="242" width="150" height="52" rx="8" fill="#4285f4"/><text x="635.5" y="274" fill="#fff">学生7</text>
    <rect x="719.5" y="242" width="150" height="52" rx="8" fill="#4285f4"/><text x="794.5" y="274" fill="#fff">学生8</text>
    <rect x="878.5" y="242" width="150" height="52" rx="8" fill="#4285f4"/><text x="953.5" y="274" fill="#fff">学生9</text>
    <rect x="1037.5" y="242" width="150" height="52" rx="8" fill="#4285f4"/><text x="1112.5" y="274" fill="#fff">学生10</text>
    <rect x="1196.5" y="242" width="150" height="52" rx="8" fill="#4285f4"/><text x="1271.5" y="274" fill="#fff">学生11</text>
    <rect x="1355.5" y="242" width="150" height="52" rx="8" fill="#4285f4"/><text x="1430.5" y="274" fill="#fff">学生12</text>
  </g>
  <g class="ui-seg" style="--d:0.83s" font-size="15" font-weight="500" text-anchor="middle">
    <rect x="560.5" y="302" width="150" height="52" rx="8" fill="#4285f4"/><text x="635.5" y="334" fill="#fff">学生13</text>
    <rect x="719.5" y="302" width="150" height="52" rx="8" fill="#4285f4"/><text x="794.5" y="334" fill="#fff">学生14</text>
    <rect x="878.5" y="302" width="150" height="52" rx="8" fill="#4285f4"/><text x="953.5" y="334" fill="#fff">学生15</text>
    <rect x="1037.5" y="302" width="150" height="52" rx="8" fill="#4285f4"/><text x="1112.5" y="334" fill="#fff">学生16</text>
    <rect x="1196.5" y="302" width="150" height="52" rx="8" fill="#4285f4"/><text x="1271.5" y="334" fill="#fff">学生17</text>
    <rect x="1355.5" y="302" width="150" height="52" rx="8" fill="#4285f4"/><text x="1430.5" y="334" fill="#fff">学生18</text>
  </g>
  <g class="ui-seg" style="--d:0.91s" font-size="15" font-weight="500" text-anchor="middle">
    <rect x="560.5" y="362" width="150" height="52" rx="8" fill="#4285f4"/><text x="635.5" y="394" fill="#fff">学生19</text>
    <rect x="719.5" y="362" width="150" height="52" rx="8" fill="#4285f4"/><text x="794.5" y="394" fill="#fff">学生20</text>
    <rect x="878.5" y="362" width="150" height="52" rx="8" fill="#4285f4"/><text x="953.5" y="394" fill="#fff">学生21</text>
    <rect x="1037.5" y="362" width="150" height="52" rx="8" fill="#4285f4"/><text x="1112.5" y="394" fill="#fff">学生22</text>
    <rect x="1196.5" y="362" width="150" height="52" rx="8" fill="#4285f4"/><text x="1271.5" y="394" fill="#fff">学生23</text>
    <rect x="1355.5" y="362" width="150" height="52" rx="8" fill="#4285f4"/><text x="1430.5" y="394" fill="#fff">学生24</text>
  </g>
  <g class="ui-seg" style="--d:0.99s" font-size="15" font-weight="500" text-anchor="middle">
    <rect x="560.5" y="422" width="150" height="52" rx="8" fill="#4285f4"/><text x="635.5" y="454" fill="#fff">学生25</text>
    <rect x="719.5" y="422" width="150" height="52" rx="8" fill="#e8e8e8" stroke="#d0d0d0"/><text x="794.5" y="454" fill="#333">学生26</text>
    <rect x="878.5" y="422" width="150" height="52" rx="8" fill="#e8e8e8" stroke="#d0d0d0"/><text x="953.5" y="454" fill="#333">学生27</text>
    <rect x="1037.5" y="422" width="150" height="52" rx="8" fill="#e8e8e8" stroke="#d0d0d0"/><text x="1112.5" y="454" fill="#333">学生28</text>
    <rect x="1196.5" y="422" width="150" height="52" rx="8" fill="#e8e8e8" stroke="#d0d0d0"/><text x="1271.5" y="454" fill="#333">学生29</text>
    <rect x="1355.5" y="422" width="150" height="52" rx="8" fill="#e8e8e8" stroke="#d0d0d0"/><text x="1430.5" y="454" fill="#333">学生30</text>
  </g>
  <g class="ui-seg" style="--d:1.07s" font-size="15" font-weight="500" text-anchor="middle">
    <rect x="560.5" y="482" width="150" height="52" rx="8" fill="#e8e8e8" stroke="#d0d0d0"/><text x="635.5" y="514" fill="#333">学生31</text>
    <rect x="719.5" y="482" width="150" height="52" rx="8" fill="#e8e8e8" stroke="#d0d0d0"/><text x="794.5" y="514" fill="#333">学生32</text>
    <rect x="878.5" y="482" width="150" height="52" rx="8" fill="#e8e8e8" stroke="#d0d0d0"/><text x="953.5" y="514" fill="#333">学生33</text>
    <rect x="1037.5" y="482" width="150" height="52" rx="8" fill="#e8e8e8" stroke="#d0d0d0"/><text x="1112.5" y="514" fill="#333">学生34</text>
    <rect x="1196.5" y="482" width="150" height="52" rx="8" fill="#e8e8e8" stroke="#d0d0d0"/><text x="1271.5" y="514" fill="#333">学生35</text>
    <rect x="1355.5" y="482" width="150" height="52" rx="8" fill="#e8e8e8" stroke="#d0d0d0"/><text x="1430.5" y="514" fill="#333">学生36</text>
  </g>
  <g class="ui-seg" style="--d:1.16s" font-size="15" font-weight="500" text-anchor="middle">
    <rect x="560.5" y="542" width="150" height="52" rx="8" fill="#e8e8e8" stroke="#d0d0d0"/><text x="635.5" y="574" fill="#333">学生37</text>
    <rect x="719.5" y="542" width="150" height="52" rx="8" fill="#e8e8e8" stroke="#d0d0d0"/><text x="794.5" y="574" fill="#333">学生38</text>
    <rect x="878.5" y="542" width="150" height="52" rx="8" fill="#e8e8e8" stroke="#d0d0d0"/><text x="953.5" y="574" fill="#333">学生39</text>
    <rect x="1037.5" y="542" width="150" height="52" rx="8" fill="#e8e8e8" stroke="#d0d0d0"/><text x="1112.5" y="574" fill="#333">学生40</text>
  </g>
  <!-- 底部状态栏 -->
  <g class="ui-seg" style="--d:1.43s">
    <path d="M200,822 L1518,822 A12,12 0 0 1 1530,834 L1530,850 L200,850 Z" fill="#f5f5f5"/>
    <text x="214" y="840" font-size="11" fill="#888">就绪</text>
    <text x="1518" y="840" font-size="11" fill="#aaa" text-anchor="end">右键点击已打卡学生可取消打卡</text>
  </g>
</svg>`,Yn=`
<svg class="hs-win hs-win-control" viewBox="0 0 1530 850" width="100%" font-family="Microsoft YaHei, 'Segoe UI', sans-serif">
  <rect class="ui-seg" style="--d:0s" x="0" y="0" width="1530" height="850" rx="12" fill="#ffffff"/>
  <!-- 标题栏 -->
  <g class="ui-seg" style="--d:0.08s">
    <path d="M0,12 A12,12 0 0 1 12,0 L1518,0 A12,12 0 0 1 1530,12 L1530,48 L0,48 Z" fill="#4285f4"/>
    <text x="20" y="28" font-size="13" font-weight="600" fill="#ffffff">控制中心</text>
    <rect x="104" y="9" width="110" height="30" rx="8" fill="rgba(255,255,255,0.15)"/>
    <text x="116" y="26" font-size="13" fill="#ffffff">控制模式</text>
    <path d="M200,25 L205,30 L210,25" stroke="#ffffff" stroke-width="1.5" fill="none"/>
    <line x1="1405" y1="24" x2="1425" y2="24" stroke="#ffffff" stroke-width="1.5"/>
    <rect x="1451" y="17" width="14" height="14" rx="1" fill="none" stroke="#ffffff" stroke-width="1.3"/>
    <line x1="1497" y1="17" x2="1517" y2="31" stroke="#ffffff" stroke-width="1.4"/>
    <line x1="1517" y1="17" x2="1497" y2="31" stroke="#ffffff" stroke-width="1.4"/>
  </g>
  <!-- 统计条 -->
  <g class="ui-seg" style="--d:0.19s">
    <rect x="0" y="48" width="1530" height="36" fill="#f5f7fa"/>
    <text x="20" y="62" font-size="11" fill="#888">总设备数量</text>
    <text x="20" y="81" font-size="18" font-weight="600" fill="#4285f4">0</text>
    <text x="150" y="62" font-size="11" fill="#888">总任务数量</text>
    <text x="150" y="81" font-size="18" font-weight="600" fill="#4285f4">0</text>
    <text x="280" y="62" font-size="11" fill="#888">在线设备数量</text>
    <text x="280" y="81" font-size="18" font-weight="600" fill="#4285f4">0</text>
  </g>
  <!-- 左侧导航 -->
  <g class="ui-seg" style="--d:0.28s">
    <rect x="220" y="84" width="1" height="738" fill="#e0e0e0"/>
    <rect x="10" y="86" width="200" height="44" rx="8" fill="#e8f0fe"/>
    <text x="32" y="113" font-size="13" font-weight="600" fill="#4285f4">划课</text>
    <g font-size="13" fill="#888">
      <text x="32" y="159">设备列表</text>
      <text x="32" y="205">任务中心</text>
      <text x="32" y="251">集控平台列表</text>
    </g>
  </g>
  <!-- 学生列表 -->
  <g class="ui-seg" style="--d:0.39s">
    <rect x="220" y="84" width="280" height="738" fill="#f8f9fa"/>
    <rect x="500" y="84" width="1" height="738" fill="#e8e8e8"/>
    <text x="232" y="108" font-size="15" font-weight="600" fill="#333">学生列表</text>
    <rect x="232" y="118" width="236" height="30" rx="6" fill="#ffffff" stroke="#d0d6dd"/>
    <text x="238" y="137" font-size="12" fill="#aaa">学生姓名</text>
    <rect x="232" y="156" width="160" height="30" rx="6" fill="#ffffff" stroke="#d0d6dd"/>
    <rect x="404" y="156" width="64" height="30" rx="8" fill="#4285f4"/>
    <text x="436" y="176" font-size="13" font-weight="600" fill="#ffffff" text-anchor="middle">添加</text>
    <g font-size="13">
      <g class="ui-seg" style="--d:0.45s">
        <rect x="224" y="200" width="248" height="26" rx="6" fill="#e8f0fe"/>
        <text x="232" y="218" font-weight="600" fill="#333">张三</text>
        <rect x="424" y="206" width="48" height="14" rx="7" fill="#ffffff"/>
        <text x="448" y="217" font-size="11" fill="#4285f4" text-anchor="middle">剩12</text>
      </g>
      <g class="ui-seg" style="--d:0.5s">
        <text x="232" y="248" fill="#333">李四</text>
        <rect x="424" y="236" width="48" height="14" rx="7" fill="#e8f0fe"/>
        <text x="448" y="247" font-size="11" fill="#4285f4" text-anchor="middle">剩8</text>
      </g>
      <g class="ui-seg" style="--d:0.54s">
        <text x="232" y="278" fill="#333">王五</text>
        <rect x="424" y="266" width="48" height="14" rx="7" fill="#e8f0fe"/>
        <text x="448" y="277" font-size="11" fill="#4285f4" text-anchor="middle">剩20</text>
      </g>
      <g class="ui-seg" style="--d:0.58s">
        <text x="232" y="308" fill="#333">赵六</text>
        <rect x="424" y="296" width="48" height="14" rx="7" fill="#e8f0fe"/>
        <text x="448" y="307" font-size="11" fill="#4285f4" text-anchor="middle">剩6</text>
      </g>
      <g class="ui-seg" style="--d:0.63s">
        <text x="232" y="338" fill="#333">钱七</text>
        <rect x="424" y="326" width="48" height="14" rx="7" fill="#e8f0fe"/>
        <text x="448" y="337" font-size="11" fill="#4285f4" text-anchor="middle">剩15</text>
      </g>
      <g class="ui-seg" style="--d:0.67s">
        <text x="232" y="368" fill="#333">孙八</text>
        <rect x="424" y="356" width="48" height="14" rx="7" fill="#e8f0fe"/>
        <text x="448" y="367" font-size="11" fill="#4285f4" text-anchor="middle">剩10</text>
      </g>
      <g class="ui-seg" style="--d:0.72s">
        <text x="232" y="398" fill="#333">周九</text>
        <rect x="424" y="386" width="48" height="14" rx="7" fill="#e8f0fe"/>
        <text x="448" y="397" font-size="11" fill="#4285f4" text-anchor="middle">剩18</text>
      </g>
      <g class="ui-seg" style="--d:0.76s">
        <text x="232" y="428" fill="#333">吴十</text>
        <rect x="424" y="416" width="48" height="14" rx="7" fill="#e8f0fe"/>
        <text x="448" y="427" font-size="11" fill="#4285f4" text-anchor="middle">剩4</text>
      </g>
    </g>
  </g>
  <!-- 划课操作区 -->
  <g class="ui-seg" style="--d:0.52s">
    <rect x="508" y="90" width="132" height="28" rx="8" fill="#e8f0fe"/>
    <text x="522" y="109" font-size="13" font-weight="600" fill="#4285f4">课时划消与排课</text>
    <text x="652" y="109" font-size="13" fill="#555">设置</text>
    <rect x="516" y="126" width="998" height="110" rx="8" fill="#f8f9fa"/>
    <text x="530" y="148" font-size="14" font-weight="600" fill="#333">张三 · 剩余课时 12</text>
    <text x="530" y="184" font-size="13" fill="#555">课时数：</text>
    <rect x="590" y="168" width="90" height="30" rx="6" fill="#ffffff" stroke="#d0d6dd"/>
    <rect x="690" y="168" width="88" height="30" rx="8" fill="#4285f4"/>
    <text x="734" y="189" font-size="13" font-weight="600" fill="#ffffff" text-anchor="middle">划消课时</text>
    <rect x="786" y="168" width="88" height="30" rx="8" fill="#34a853"/>
    <text x="830" y="189" font-size="13" font-weight="600" fill="#ffffff" text-anchor="middle">增加课时</text>
    <text x="530" y="224" font-size="13" fill="#555">备注：</text>
    <rect x="584" y="208" width="320" height="30" rx="6" fill="#ffffff" stroke="#d0d6dd"/>
  </g>
  <!-- 课时记录 -->
  <g class="ui-seg" style="--d:0.61s">
    <text x="1172" y="148" font-size="13" font-weight="600" fill="#333">课时记录</text>
    <g font-size="11">
      <text x="1172" y="170" fill="#888">2026-08-20</text><text x="1250" y="170" font-size="12" font-weight="600" fill="#d32f2f">-2</text><text x="1302" y="170" fill="#666">补课</text>
      <text x="1172" y="192" fill="#888">2026-08-18</text><text x="1250" y="192" font-size="12" font-weight="600" fill="#34a853">+2</text><text x="1302" y="192" fill="#666">数学课</text>
      <text x="1172" y="214" fill="#888">2026-08-15</text><text x="1250" y="214" font-size="12" font-weight="600" fill="#d32f2f">-1</text><text x="1302" y="214" fill="#666">请假</text>
      <text x="1172" y="236" fill="#888">2026-08-12</text><text x="1250" y="236" font-size="12" font-weight="600" fill="#34a853">+2</text><text x="1302" y="236" fill="#666">数学课</text>
      <text x="1172" y="258" fill="#888">2026-08-10</text><text x="1250" y="258" font-size="12" font-weight="600" fill="#d32f2f">-2</text><text x="1302" y="258" fill="#666">补课</text>
    </g>
  </g>
  <!-- 排课区 -->
  <g class="ui-seg" style="--d:0.69s">
    <rect x="516" y="256" width="32" height="28" rx="8" fill="#f0f0f0"/>
    <text x="532" y="275" font-size="16" fill="#333" text-anchor="middle">‹</text>
    <rect x="554" y="256" width="32" height="28" rx="8" fill="#f0f0f0"/>
    <text x="570" y="275" font-size="16" fill="#333" text-anchor="middle">›</text>
    <rect x="592" y="256" width="52" height="28" rx="8" fill="#e8f0fe"/>
    <text x="618" y="275" font-size="12" font-weight="600" fill="#4285f4" text-anchor="middle">今天</text>
    <text x="660" y="278" font-size="16" font-weight="600" fill="#333">2026年8月</text>
    <text x="1138" y="276" font-size="12" fill="#666" text-anchor="end">2026-08-23</text>
    <g font-size="11" text-anchor="middle">
      <text x="560.4" y="300" fill="#888">一</text><text x="649.3" y="300" fill="#888">二</text><text x="738.1" y="300" fill="#888">三</text><text x="827.0" y="300" fill="#888">四</text><text x="915.9" y="300" fill="#888">五</text><text x="1004.7" y="300" fill="#e57373">六</text><text x="1093.6" y="300" fill="#e57373">日</text>
    </g>
  </g>
  <g class="ui-seg" style="--d:0.77s" font-size="12">
    <text x="560.4" y="332" fill="#ccc" text-anchor="middle">27</text><text x="649.3" y="332" fill="#ccc" text-anchor="middle">28</text><text x="738.1" y="332" fill="#ccc" text-anchor="middle">29</text><text x="827.0" y="332" fill="#ccc" text-anchor="middle">30</text><text x="915.9" y="332" fill="#ccc" text-anchor="middle">31</text>
    <rect x="517.3" y="310" width="84.9" height="81.7" rx="6" fill="#fce4ec"/>
    <text x="559.8" y="334" fill="#e57373" text-anchor="middle">1</text><text x="559.8" y="358" font-size="11" font-weight="600" fill="#e57373" text-anchor="middle">休</text>
    <text x="1093.6" y="332" fill="#666" text-anchor="middle">2</text>
  </g>
  <g class="ui-seg" style="--d:0.85s" font-size="12">
    <text x="560.4" y="417.7" fill="#666" text-anchor="middle">3</text><text x="560.4" y="441.7" font-size="11" fill="#34a853" text-anchor="middle">1节</text>
    <text x="649.3" y="417.7" fill="#666" text-anchor="middle">4</text>
    <text x="738.1" y="417.7" fill="#666" text-anchor="middle">5</text><text x="738.1" y="441.7" font-size="11" fill="#34a853" text-anchor="middle">2节</text>
    <text x="827.0" y="417.7" fill="#666" text-anchor="middle">6</text>
    <text x="915.9" y="417.7" fill="#666" text-anchor="middle">7</text>
    <text x="1004.7" y="417.7" fill="#666" text-anchor="middle">8</text>
    <text x="1093.6" y="417.7" fill="#666" text-anchor="middle">9</text>
  </g>
  <g class="ui-seg" style="--d:0.94s" font-size="12">
    <text x="560.4" y="503.4" fill="#666" text-anchor="middle">10</text><text x="560.4" y="527.4" font-size="11" fill="#34a853" text-anchor="middle">1节</text>
    <text x="649.3" y="503.4" fill="#666" text-anchor="middle">11</text>
    <text x="738.1" y="503.4" fill="#666" text-anchor="middle">12</text><text x="738.1" y="527.4" font-size="11" fill="#34a853" text-anchor="middle">2节</text>
    <text x="827.0" y="503.4" fill="#666" text-anchor="middle">13</text>
    <text x="915.9" y="503.4" fill="#666" text-anchor="middle">14</text>
    <rect x="517.3" y="481.4" width="84.9" height="81.7" rx="6" fill="#fce4ec"/>
    <text x="559.8" y="505.4" fill="#e57373" text-anchor="middle">15</text><text x="559.8" y="529.4" font-size="11" font-weight="600" fill="#e57373" text-anchor="middle">休</text>
    <text x="1093.6" y="503.4" fill="#666" text-anchor="middle">16</text>
  </g>
  <g class="ui-seg" style="--d:1.02s" font-size="12">
    <text x="560.4" y="589.1" fill="#666" text-anchor="middle">17</text><text x="560.4" y="613.1" font-size="11" fill="#34a853" text-anchor="middle">2节</text>
    <text x="649.3" y="589.1" fill="#666" text-anchor="middle">18</text>
    <text x="738.1" y="589.1" fill="#666" text-anchor="middle">19</text><text x="738.1" y="613.1" font-size="11" fill="#34a853" text-anchor="middle">1节</text>
    <text x="827.0" y="589.1" fill="#666" text-anchor="middle">20</text>
    <text x="915.9" y="589.1" fill="#666" text-anchor="middle">21</text>
    <rect x="517.3" y="567.1" width="84.9" height="81.7" rx="6" fill="#fce4ec"/>
    <text x="559.8" y="591.1" fill="#e57373" text-anchor="middle">22</text><text x="559.8" y="615.1" font-size="11" font-weight="600" fill="#e57373" text-anchor="middle">休</text>
    <rect x="1051.2" y="567.1" width="84.9" height="81.7" rx="6" fill="#f8f9fa" stroke="#4285f4" stroke-width="1.5"/>
    <text x="1093.6" y="591.1" font-weight="700" fill="#4285f4" text-anchor="middle">23</text>
    <rect x="1101.6" y="581.1" width="18" height="14" rx="4" fill="#4285f4"/>
    <text x="1110.6" y="592.1" font-size="9" fill="#ffffff" text-anchor="middle">今</text>
    <text x="1093.6" y="615.1" font-size="11" fill="#34a853" text-anchor="middle">2节</text>
  </g>
  <g class="ui-seg" style="--d:1.1s" font-size="12">
    <text x="560.4" y="674.8" fill="#666" text-anchor="middle">24</text><text x="560.4" y="698.8" font-size="11" fill="#34a853" text-anchor="middle">2节</text>
    <text x="649.3" y="674.8" fill="#666" text-anchor="middle">25</text>
    <text x="738.1" y="674.8" fill="#666" text-anchor="middle">26</text><text x="738.1" y="698.8" font-size="11" fill="#34a853" text-anchor="middle">1节</text>
    <text x="827.0" y="674.8" fill="#666" text-anchor="middle">27</text>
    <text x="915.9" y="674.8" fill="#666" text-anchor="middle">28</text>
    <rect x="517.3" y="652.8" width="84.9" height="81.7" rx="6" fill="#fce4ec"/>
    <text x="559.8" y="676.8" fill="#e57373" text-anchor="middle">29</text><text x="559.8" y="700.8" font-size="11" font-weight="600" fill="#e57373" text-anchor="middle">休</text>
    <text x="1093.6" y="674.8" fill="#666" text-anchor="middle">30</text>
  </g>
  <g class="ui-seg" style="--d:1.18s" font-size="12">
    <text x="560.4" y="760.5" fill="#666" text-anchor="middle">31</text>
    <text x="649.3" y="760.5" fill="#ccc" text-anchor="middle">1</text><text x="738.1" y="760.5" fill="#ccc" text-anchor="middle">2</text><text x="827.0" y="760.5" fill="#ccc" text-anchor="middle">3</text><text x="915.9" y="760.5" fill="#ccc" text-anchor="middle">4</text><text x="1004.7" y="760.5" fill="#ccc" text-anchor="middle">5</text><text x="1093.6" y="760.5" fill="#ccc" text-anchor="middle">6</text>
  </g>
  <!-- 右侧排课面板 -->
  <g class="ui-seg" style="--d:0.83s">
    <rect x="1150" y="256" width="360" height="566" rx="8" fill="#f8f9fa"/>
    <text x="1162" y="278" font-size="13" font-weight="600" fill="#333">2026年8月23日</text>
    <text x="1498" y="278" font-size="11" fill="#888" text-anchor="end">2 节课</text>
    <rect x="1162" y="288" width="132" height="28" rx="8" fill="#fff3e0"/>
    <text x="1228" y="307" font-size="12" font-weight="600" fill="#e65100" text-anchor="middle">设为不排课日/恢复</text>
    <rect x="1300" y="288" width="72" height="28" rx="8" fill="#fdecea"/>
    <text x="1336" y="307" font-size="12" font-weight="600" fill="#d32f2f" text-anchor="middle">清空排课</text>
    <rect x="1378" y="288" width="80" height="28" rx="8" fill="#4285f4"/>
    <text x="1418" y="307" font-size="12" font-weight="600" fill="#ffffff" text-anchor="middle">复制排课…</text>
    <text x="1162" y="340" font-size="12" font-weight="600" fill="#555">选择学生（点击添加，需填写上课/下课时间）</text>
    <g font-size="12">
      <rect x="1162" y="350" width="336" height="22" rx="6" fill="#e8f0fe" stroke="#4285f4"/><text x="1172" y="366" fill="#333">张三</text>
      <rect x="1162" y="376" width="336" height="22" rx="6" fill="#ffffff"/><text x="1172" y="392" fill="#333">李四</text>
      <rect x="1162" y="402" width="336" height="22" rx="6" fill="#ffffff"/><text x="1172" y="418" fill="#333">王五</text>
      <rect x="1162" y="428" width="336" height="22" rx="6" fill="#ffffff"/><text x="1172" y="444" fill="#333">赵六</text>
      <rect x="1162" y="454" width="336" height="22" rx="6" fill="#ffffff"/><text x="1172" y="470" fill="#333">钱七</text>
      <rect x="1162" y="480" width="336" height="22" rx="6" fill="#ffffff"/><text x="1172" y="496" fill="#333">孙八</text>
      <rect x="1162" y="506" width="336" height="22" rx="6" fill="#ffffff"/><text x="1172" y="522" fill="#333">周九</text>
    </g>
    <text x="1162" y="544" font-size="12" font-weight="600" fill="#555">已排课学生（可改时间 / 移除）</text>
    <g font-size="12">
      <text x="1162" y="571" font-weight="600" fill="#333">张三</text>
      <rect x="1200" y="554" width="62" height="26" rx="6" fill="#ffffff" stroke="#d0d6dd"/><text x="1231" y="572" fill="#333" text-anchor="middle">09:00</text>
      <rect x="1266" y="554" width="62" height="26" rx="6" fill="#ffffff" stroke="#d0d6dd"/><text x="1297" y="572" fill="#333" text-anchor="middle">10:00</text>
      <rect x="1332" y="554" width="52" height="26" rx="8" fill="#fdecea"/><text x="1358" y="572" font-size="11" fill="#d32f2f" text-anchor="middle">移除</text>
      <text x="1162" y="607" font-weight="600" fill="#333">李四</text>
      <rect x="1200" y="590" width="62" height="26" rx="6" fill="#ffffff" stroke="#d0d6dd"/><text x="1231" y="608" fill="#333" text-anchor="middle">09:30</text>
      <rect x="1266" y="590" width="62" height="26" rx="6" fill="#ffffff" stroke="#d0d6dd"/><text x="1297" y="608" fill="#333" text-anchor="middle">10:30</text>
      <rect x="1332" y="590" width="52" height="26" rx="8" fill="#fdecea"/><text x="1358" y="608" font-size="11" fill="#d32f2f" text-anchor="middle">移除</text>
      <text x="1162" y="643" font-weight="600" fill="#333">王五</text>
      <rect x="1200" y="626" width="62" height="26" rx="6" fill="#ffffff" stroke="#d0d6dd"/><text x="1231" y="644" fill="#333" text-anchor="middle">14:00</text>
      <rect x="1266" y="626" width="62" height="26" rx="6" fill="#ffffff" stroke="#d0d6dd"/><text x="1297" y="644" fill="#333" text-anchor="middle">15:00</text>
      <rect x="1332" y="626" width="52" height="26" rx="8" fill="#fdecea"/><text x="1358" y="644" font-size="11" fill="#d32f2f" text-anchor="middle">移除</text>
      <text x="1162" y="679" font-weight="600" fill="#333">赵六</text>
      <rect x="1200" y="662" width="62" height="26" rx="6" fill="#ffffff" stroke="#d0d6dd"/><text x="1231" y="680" fill="#333" text-anchor="middle">15:30</text>
      <rect x="1266" y="662" width="62" height="26" rx="6" fill="#ffffff" stroke="#d0d6dd"/><text x="1297" y="680" fill="#333" text-anchor="middle">16:30</text>
      <rect x="1332" y="662" width="52" height="26" rx="8" fill="#fdecea"/><text x="1358" y="680" font-size="11" fill="#d32f2f" text-anchor="middle">移除</text>
    </g>
  </g>
  <!-- 底部状态栏 -->
  <g class="ui-seg" style="--d:1.43s">
    <path d="M0,822 L1518,822 A12,12 0 0 1 1530,834 L1530,850 L12,850 A12,12 0 0 1 0,838 Z" fill="#f5f5f5"/>
    <text x="20" y="840" font-size="11" fill="#888">就绪</text>
  </g>
</svg>`,Gt=`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150" width="100%" height="100%">
  <defs>
    <linearGradient id="vfGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2563EB"/>
      <stop offset="100%" stop-color="#7C3AED"/>
    </linearGradient>
  </defs>
  <circle cx="75" cy="75" r="72" fill="url(#vfGrad)"/>
  <path d="M20,60 C35,45 50,75 65,60 C80,45 95,75 110,60 C125,45 140,75 155,60" fill="none" stroke="white" stroke-width="3" opacity="0.2" stroke-linecap="round"/>
  <path d="M20,75 C35,60 50,90 65,75 C80,60 95,90 110,75 C125,60 140,90 155,75" fill="none" stroke="white" stroke-width="4" opacity="0.5" stroke-linecap="round"/>
  <path d="M20,90 C35,75 50,105 65,90 C80,75 95,105 110,90 C125,75 140,105 155,90" fill="none" stroke="white" stroke-width="3" opacity="0.2" stroke-linecap="round"/>
  <path d="M48,72 L66,90 L102,52" fill="none" stroke="white" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,Qn=`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2563EB" />
      <stop offset="100%" stop-color="#7C3AED" />
    </linearGradient>
    <radialGradient id="haloGrad" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#93C5FD" stop-opacity="0.55" />
      <stop offset="100%" stop-color="#93C5FD" stop-opacity="0" />
    </radialGradient>
    <linearGradient id="shineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0" />
      <stop offset="50%" stop-color="#FFFFFF" stop-opacity="0.5" />
      <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0" />
    </linearGradient>
    <clipPath id="clip"><circle cx="75" cy="75" r="72" /></clipPath>
  </defs>

  <circle cx="75" cy="75" r="72" fill="url(#haloGrad)" opacity="0">
    <animate attributeName="opacity" values="0;0.7;1;0.7;0" keyTimes="0;0.15;0.35;0.85;1" dur="3.2s" begin="0.2s" repeatCount="indefinite" />
    <animate attributeName="r" values="70;94;70" dur="3.2s" begin="0.2s" repeatCount="indefinite" />
  </circle>

  <g transform="translate(75,75)">
    <g opacity="0">
      <animate attributeName="opacity" values="0;1" dur="0.15s" begin="0.05s" fill="freeze" />
      <animateTransform attributeName="transform" type="scale"
        values="0.3;1.12;1" keyTimes="0;0.55;1" dur="0.8s" begin="0.05s" fill="freeze"
        calcMode="spline" keySplines="0.22 1.4 0.36 1;0.4 0 0.2 1" />
      <circle cx="0" cy="0" r="72" fill="url(#bgGrad)" />
    </g>
  </g>

  <g stroke="white" stroke-width="3" stroke-linecap="round" fill="none" opacity="0">
    <animate attributeName="opacity" values="0;0.25" dur="0.45s" begin="0.35s" fill="freeze" />
    <g>
      <animateTransform attributeName="transform" type="translate" values="-3,0;3,0;-3,0" dur="2.2s" begin="1.7s" repeatCount="indefinite" />
      <path d="M20,60 C35,45 50,75 65,60 C80,45 95,75 110,60 C125,45 140,75 155,60" />
    </g>
  </g>

  <g stroke="white" stroke-width="4" stroke-linecap="round" fill="none" opacity="0">
    <animate attributeName="opacity" values="0;0.5" dur="0.45s" begin="0.5s" fill="freeze" />
    <g>
      <animateTransform attributeName="transform" type="translate" values="3,0;-3,0;3,0" dur="2.6s" begin="1.85s" repeatCount="indefinite" />
      <path d="M20,75 C35,60 50,90 65,75 C80,60 95,90 110,75 C125,60 140,90 155,75" />
    </g>
  </g>

  <g stroke="white" stroke-width="3" stroke-linecap="round" fill="none" opacity="0">
    <animate attributeName="opacity" values="0;0.25" dur="0.45s" begin="0.65s" fill="freeze" />
    <g>
      <animateTransform attributeName="transform" type="translate" values="-2,0;2,0;-2,0" dur="2s" begin="2s" repeatCount="indefinite" />
      <path d="M20,90 C35,75 50,105 65,90 C80,75 95,105 110,90 C125,75 140,105 155,90" />
    </g>
  </g>

  <g fill="none" stroke="white" stroke-width="8" stroke-linecap="round" stroke-linejoin="round">
    <path d="M48,72 L66,90 L102,52" stroke-dasharray="120" stroke-dashoffset="120" opacity="0">
      <animate attributeName="opacity" values="0;1" dur="0.05s" begin="0.75s" fill="freeze" />
      <animate attributeName="stroke-dashoffset" values="120;0" dur="0.55s" begin="0.75s" fill="freeze" calcMode="spline" keySplines="0.4 0 0.2 1" />
    </path>
    <path d="M48,72 L66,90 L102,52" stroke-width="14" opacity="0">
      <animate attributeName="opacity" values="0;0.45;0" dur="2.4s" begin="1.9s" repeatCount="indefinite" />
    </path>
  </g>

  <g clip-path="url(#clip)" transform="rotate(-25 75 75)">
    <rect x="-120" y="-40" width="46" height="230" fill="url(#shineGrad)" opacity="0">
      <animate attributeName="opacity" values="0;0.9;0" keyTimes="0;0.3;1" dur="1s" begin="1.5s" fill="freeze" />
      <animateTransform attributeName="transform" type="translate" values="0,0;340,0" dur="1s" begin="1.5s" fill="freeze" calcMode="spline" keySplines="0.4 0 0.2 1" />
    </rect>
  </g>
</svg>`,Xn={class:"vstage vs-intro"},to=["innerHTML"],eo=v({__name:"IntroStage",setup(t){return(e,i)=>(n(),c("section",Xn,[o("div",{class:"vs-intro-logo",innerHTML:r(Gt)},null,8,to),i[0]||(i[0]=R('<h1 class="vs-intro-name">AgoraIn</h1><div class="vs-intro-badge">v2.8 全新版本</div><p class="vs-intro-tag t1">大屏签到 · 课时划消 · 集控平台</p><p class="vs-intro-tag t2">多端协同的现代化课堂管理解决方案</p><p class="vs-intro-hint">宣传片即将开始</p>',5))]))}}),io={class:"vstage vs-upd"},lo={class:"vs-upd-card"},so=["innerHTML"],no={class:"vs-upd-steps"},oo=v({__name:"UpdateStage",setup(t){const e=["下载更新包","校验完整性","安装核心组件","配置本地服务","界面初始化"];return(i,l)=>(n(),c("section",io,[o("div",lo,[o("div",{class:"vs-upd-logo",innerHTML:r(Gt)},null,8,so),l[0]||(l[0]=o("h2",{class:"vs-upd-title"},"正在更新 AgoraIn",-1)),l[1]||(l[1]=o("p",{class:"vs-upd-sub"},"v2.7 → v2.8 · 大屏签到 · 课时划消 · 集控平台 · 移动多端",-1)),l[2]||(l[2]=o("div",{class:"vs-upd-bar"},[o("div",{class:"vs-upd-fill"})],-1)),o("div",no,[(n(),c(I,null,A(e,(s,a)=>o("span",{key:s,class:"vs-upd-step",style:j({"--s-delay":2.4+a*1.1+"s"})},S(s),5)),64))]),l[3]||(l[3]=o("div",{class:"vs-upd-done"},[o("span",{class:"vs-upd-check"},"✓"),o("span",null,"核心组件已就绪，全新界面即将呈现")],-1))])]))}}),ao={class:"vs-scr-wrap"},ro=["innerHTML"],fo=v({__name:"ScreenStage",props:{compact:{type:Boolean}},setup(t){return(e,i)=>(n(),c("section",{class:V(["vstage vs-scr",{"is-compact":t.compact}])},[i[1]||(i[1]=o("div",{class:"vs-side-txt"},[o("div",{class:"vstage-title"},"大屏模式 · 课堂签到打卡"),o("div",{class:"vstage-sub"},"学生点击即签到 · 实时排名 · 迟到一目了然"),o("div",{class:"vstage-chips"},[o("span",null,"多任务标签"),o("span",null,"金/银/铜排行榜"),o("span",null,"二维码签到"),o("span",null,"Web 签到"),o("span",null,"实时统计"),o("span",null,"缺勤提醒")])],-1)),o("div",ao,[o("div",{innerHTML:r(Jn)},null,8,ro),i[0]||(i[0]=R('<div class="vs-over s26"><span class="vs-chk">✓</span></div><div class="vs-over s27"><span class="vs-chk">✓</span></div><div class="vs-over s28"><span class="vs-chk">✓</span></div><div class="vs-over s29"><span class="vs-chk">✓</span></div><div class="vs-over s30"><span class="vs-chk">✓</span></div><div class="vs-stat">总人数: 40  |  已打卡: 30  (75%)</div><div class="vs-rank">9   王小明   08:25:01</div><div class="vs-tip">签到实时同步至排名与统计</div>',8))])],2))}}),co={class:"vs-ctl-wrap"},xo=["innerHTML"],ho=v({__name:"ControlStage",props:{compact:{type:Boolean}},setup(t){return(e,i)=>(n(),c("section",{class:V(["vstage vs-ctl",{"is-compact":t.compact}])},[i[1]||(i[1]=o("div",{class:"vs-side-txt"},[o("div",{class:"vstage-title"},"控制模式 · 课时划消与排课"),o("div",{class:"vstage-sub"},"选课划课 · 日历排课 · 课时记录自动留存"),o("div",{class:"vstage-chips"},[o("span",null,"批量划消/增加"),o("span",null,"课时流水记录"),o("span",null,"月历排课"),o("span",null,"不排课日"),o("span",null,"自动扣减"),o("span",null,"复制排课")])],-1)),o("div",co,[o("div",{innerHTML:r(Yn)},null,8,xo),i[0]||(i[0]=R('<div class="vs-c-lesson">剩10</div><div class="vs-c-record"><span class="d">2026-08-24</span><span class="m">-2</span><span class="t">数学课</span></div><div class="vs-c-cal">2节</div><div class="vs-c-sched"><span class="n">王五</span><span class="tm">14:00</span><span class="tm">15:00</span><span class="rm">移除</span></div><div class="vs-tip">课时自动划消，排课一目了然</div>',5))])],2))}}),uo=v({__name:"ServerStage",props:{compact:{type:Boolean}},setup(t){return(e,i)=>(n(),c("section",{class:V(["vstage vs-srv",{"is-compact":t.compact}])},[...i[0]||(i[0]=[R('<div class="vs-side-txt"><div class="vstage-title">集控服务器 · 多设备集中管理</div><div class="vstage-sub">一台服务器集中管理所有教室设备 · 数据实时同步</div><div class="vstage-chips srv"><span>设备注册</span><span>任务下发</span><span>签到数据同步</span><span>Web 管理面板</span><span>REST API</span><span>SQLite 数据存储</span></div></div><div class="vs-srv-stage"><svg class="vs-srv-lines" viewBox="0 0 1000 562.5" preserveAspectRatio="none"><line class="vs-srv-line" x1="140" y1="90" x2="700" y2="280"></line><line class="vs-srv-line" x1="140" y1="280" x2="700" y2="280"></line><line class="vs-srv-line" x1="140" y1="470" x2="700" y2="280"></line><circle class="vs-srv-pkt p1" r="7" fill="#22d3ee"><animateMotion dur="1.6s" repeatCount="indefinite" begin="4s" path="M140,90 L700,280"></animateMotion></circle><circle class="vs-srv-pkt p2" r="7" fill="#34d399"><animateMotion dur="1.9s" repeatCount="indefinite" begin="4.5s" path="M140,280 L700,280"></animateMotion></circle><circle class="vs-srv-pkt p3" r="7" fill="#a78bfa"><animateMotion dur="2.2s" repeatCount="indefinite" begin="5s" path="M140,470 L700,280"></animateMotion></circle></svg><div class="vs-srv-node nd-a"><span class="ic">🖥️</span><span class="nm">教室 A · 大屏</span><span class="st on">在线</span></div><div class="vs-srv-node nd-b"><span class="ic">🖥️</span><span class="nm">教室 B · 大屏</span><span class="st on">在线</span></div><div class="vs-srv-node nd-c"><span class="ic">📱</span><span class="nm">教室 C · 控制台</span><span class="st on">在线</span></div><div class="vs-srv-core"><div class="vs-srv-core-ic"><svg viewBox="0 0 48 48" width="100%" height="100%"><rect x="6" y="6" width="36" height="14" rx="4" fill="#38bdf8"></rect><rect x="6" y="26" width="36" height="14" rx="4" fill="#38bdf8"></rect><circle cx="14" cy="13" r="2.4" fill="#0b1220"></circle><circle cx="22" cy="13" r="2.4" fill="#0b1220"></circle><circle cx="14" cy="33" r="2.4" fill="#0b1220"></circle><circle cx="22" cy="33" r="2.4" fill="#0b1220"></circle><rect x="30" y="11" width="8" height="4" rx="2" fill="#fff"></rect><rect x="30" y="31" width="8" height="4" rx="2" fill="#fff"></rect></svg></div><div class="vs-srv-core-name">AgoraIn 集控服务器</div><div class="vs-srv-core-port">端口 5250 · 数据实时同步</div><div class="vs-srv-core-stats"><div class="st"><span class="v">6</span><span class="l">设备总数</span></div><div class="st"><span class="v on2">6</span><span class="l">在线设备</span></div><div class="st"><span class="v">12</span><span class="l">任务总数</span></div></div></div><div class="vs-srv-tip">设备状态 · 任务下发 · 签到数据，统一汇聚</div></div>',2)])],2))}}),vo=v({__name:"MobileStage",props:{compact:{type:Boolean}},setup(t){return(e,i)=>(n(),c("div",{class:V(["vs-mobile",{"is-compact":t.compact}])},[...i[0]||(i[0]=[R('<div class="vs-side-txt" data-v-088725cb><div class="vs-mobile-title" aria-label="移动多端协同" data-v-088725cb>移动多端协同</div><div class="vs-mobile-sub" data-v-088725cb>教师、学生、家长多角色随时随地接入课堂</div></div><div class="vs-mobile-grid" data-v-088725cb><div class="vs-mobile-card android" data-v-088725cb><div class="vs-card-icon android-icon" data-v-088725cb><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-v-088725cb><path d="M17.523 15.341c-.5 0-.906-.405-.906-.905s.406-.906.906-.906c.5 0 .906.406.906.906s-.406.905-.906.905Zm-11.046 0c-.5 0-.906-.405-.906-.905s.406-.906.906-.906c.5 0 .906.406.906.906s-.406.905-.906.905Zm11.41-6.168 1.73-2.995a.408.408 0 0 0-.706-.408l-1.752 3.033c-1.316-.602-2.797-.946-4.37-.946-1.573 0-3.055.344-4.37.946L6.09 5.77a.408.408 0 0 0-.706.408l1.73 2.995C4.577 10.871 2.75 13.78 2.75 17.104h18.5c0-3.324-1.827-6.233-4.363-7.931ZM6.167 18.917c0 .506.41.916.916.916h.917v2.75c0 .76.615 1.375 1.375 1.375s1.375-.615 1.375-1.375v-2.75h2.25v2.75c0 .76.615 1.375 1.375 1.375s1.375-.615 1.375-1.375v-2.75h.917a.917.917 0 0 0 .916-.916V8.583H6.167v10.334Z" data-v-088725cb></path></svg></div><div class="vs-card-title" data-v-088725cb>Android 管理员端</div><ul class="vs-card-list" data-v-088725cb><li data-v-088725cb>实时签到：学生扫码/人脸核验，结果秒级同步</li><li data-v-088725cb>任务管理：教师随时创建、暂停、结束签到任务</li><li data-v-088725cb>班级统计：应到/实到/缺勤一目了然，支持导出</li><li data-v-088725cb>本地缓存：弱网环境先存后传，数据不丢失</li><li data-v-088725cb>推送通知：缺勤/课时不足自动提醒</li></ul></div><div class="vs-mobile-card web" data-v-088725cb><div class="vs-card-icon web-icon" data-v-088725cb><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" data-v-088725cb><circle cx="12" cy="12" r="10" data-v-088725cb></circle><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" data-v-088725cb></path></svg></div><div class="vs-card-title" data-v-088725cb>Web 多端协同</div><ul class="vs-card-list" data-v-088725cb><li data-v-088725cb>学生扫码签到：微信/浏览器直接打开，无需安装</li><li data-v-088725cb>教师大屏展示：实时榜单、随机点名、课堂氛围</li><li data-v-088725cb>家长课消查询：剩余课时、上课记录透明可见</li><li data-v-088725cb>数据实时同步：手机、PC、大屏三端一致</li></ul></div></div><div class="vs-mobile-sync" data-v-088725cb><span class="vs-sync-dot" data-v-088725cb></span> 与集控服务器实时同步，离线数据自动补发 </div>',3)])],2))}}),yo=b(vo,[["__scopeId","data-v-088725cb"]]),go={class:"vstage vs-out"},mo=["innerHTML"],po=v({__name:"OutroStage",setup(t){return(e,i)=>(n(),c("section",go,[o("div",{class:"vs-out-logo",innerHTML:r(Qn)},null,8,mo),i[0]||(i[0]=R('<h2 class="vs-out-title">让课堂管理更简单</h2><p class="vs-out-sub">AgoraIn v2.8 全新发布</p><div class="vs-out-links"><span class="l">doc.615mc.cn</span><span class="sep">·</span><span class="l">文档中心</span><span class="sep">·</span><span class="l">下载中心</span></div><p class="vs-out-copy">© 2026 AgoraIn · GNU GPL v3</p>',4))]))}}),ko={class:"vshow"},wo={class:"vshow-particles","aria-hidden":"true"},bo={class:"vshow-stage"},_o={key:0,class:"vshow-tool"},$o={class:"vshow-clock"},Lo=1920,zo=1080,Po=v({__name:"VideoShowcase",setup(t){const e=[{id:"intro",dur:12},{id:"update",dur:18},{id:"screen",dur:25},{id:"control",dur:25},{id:"server",dur:20},{id:"mobile",dur:16},{id:"outro",dur:14}],i=e.reduce((M,T)=>M+T.dur,0),l=[];let s=0;e.forEach(M=>{l.push(s),s+=M.dur});const a=z(0),f=z(0),h=z(!0),x=z(!1),w=[];let $;const p=z(1);function m(){const M=window.innerWidth,T=window.innerHeight;p.value=Math.min(M/Lo,T/zo)}const P=M=>`${String(Math.floor(M/60)).padStart(2,"0")}:${String(Math.floor(M%60)).padStart(2,"0")}`,C=()=>{w.forEach(M=>window.clearTimeout(M)),w.length=0,$&&window.clearInterval($),a.value=0,f.value=0,$=window.setInterval(()=>{f.value=Math.min(f.value+1,i)},1e3),e.forEach((M,T)=>{T!==0&&w.push(window.setTimeout(()=>{a.value=T},l[T]*1e3))})};return E(()=>{C(),m(),window.addEventListener("resize",m)}),yt(()=>{w.forEach(M=>window.clearTimeout(M)),$&&window.clearInterval($),window.removeEventListener("resize",m)}),(M,T)=>(n(),c("div",ko,[T[2]||(T[2]=o("div",{class:"vshow-bg"},null,-1)),o("div",wo,[(n(),c(I,null,A(14,N=>o("i",{key:N,style:j({"--p-delay":N*.9+"s","--p-x":N*7.3%100+"%","--p-size":3+N%5*2+"px"})},null,4)),64))]),o("div",{class:"vshow-scale",style:j({transform:"scale("+p.value+")"})},[o("div",bo,[k(K,{name:"v-fade",mode:"out-in"},{default:u(()=>[a.value===0?(n(),g(eo,{key:"intro"})):a.value===1?(n(),g(oo,{key:"update"})):a.value===2?(n(),g(fo,{key:"screen",compact:x.value},null,8,["compact"])):a.value===3?(n(),g(ho,{key:"control",compact:x.value},null,8,["compact"])):a.value===4?(n(),g(uo,{key:"server",compact:x.value},null,8,["compact"])):a.value===5?(n(),g(yo,{key:"mobile",compact:x.value},null,8,["compact"])):(n(),g(po,{key:"outro"}))]),_:1})])],4),h.value?(n(),c("div",_o,[o("span",$o,S(P(f.value))+" / "+S(P(r(i))),1),o("button",{class:"vshow-btn",type:"button",onClick:C},"↻ 重播"),o("button",{class:V(["vshow-btn",{on:x.value}]),type:"button",onClick:T[0]||(T[0]=N=>x.value=!x.value)},"小屏版",2),o("button",{class:"vshow-btn",type:"button",onClick:T[1]||(T[1]=N=>h.value=!1)},"隐藏")])):y("",!0)]))}}),So={extends:Dt,Layout:Kn,enhanceApp({app:t}){t.component("VideoShowcase",Po)}};export{So as R,vs as c,L as u};
