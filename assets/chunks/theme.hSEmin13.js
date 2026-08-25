const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/VPLocalSearchBox.DNpDtSwp.js","assets/chunks/framework.BWuWLRhz.js"])))=>i.map(i=>d[i]);
import{d as y,c,r as d,n as C,o as n,a as D,t as S,b as m,w as u,T as R,e as g,_,u as Mt,i as Zt,f as jt,g as yt,h as b,j as r,k as o,l as j,m as ct,p as M,q as G,s as J,v as B,x as gt,y as vt,z as Wt,A as qt,F as T,B as I,C as W,D as et,E as k,G as St,H as E,I as Vt,J as Y,K as Z,L as it,M as Kt,N as A,O as dt,P as Ct,Q as Tt,R as lt,S as Rt,U as Jt,V as Yt,W as Nt,X as It,Y as Xt,Z as Qt,$ as st,a0 as te,a1 as ee,a2 as At}from"./framework.BWuWLRhz.js";const ie=y({__name:"VPBadge",props:{text:{},type:{default:"tip"}},setup(t){return(e,i)=>(n(),c("span",{class:C(["VPBadge",t.type])},[d(e.$slots,"default",{},()=>[D(S(t.text),1)])],2))}}),le={key:0,class:"VPBackdrop"},se=y({__name:"VPBackdrop",props:{show:{type:Boolean}},setup(t){return(e,i)=>(n(),m(R,{name:"fade"},{default:u(()=>[t.show?(n(),c("div",le)):g("",!0)]),_:1}))}}),ne=_(se,[["__scopeId","data-v-c18d3459"]]),P=Mt;function oe(t,e){let i,l=!1;return()=>{i&&clearTimeout(i),l?i=setTimeout(t,e):(t(),(l=!0)&&setTimeout(()=>l=!1,e))}}function xt(t){return t.startsWith("/")?t:`/${t}`}function mt(t){const{pathname:e,search:i,hash:l,protocol:s}=new URL(t,"http://a.com");if(Zt(t)||t.startsWith("#")||!s.startsWith("http")||!jt(e))return t;const{site:a}=P(),f=e.endsWith("/")||e.endsWith(".html")?t:t.replace(/(?:(^\.+)\/)?.*$/,`$1${e.replace(/(\.md)?$/,a.value.cleanUrls?"":".html")}${i}${l}`);return yt(f)}function X({correspondingLink:t=!1}={}){const{site:e,localeIndex:i,page:l,theme:s,hash:a}=P(),f=b(()=>{var h,w;return{label:(h=e.value.locales[i.value])==null?void 0:h.label,link:((w=e.value.locales[i.value])==null?void 0:w.link)||(i.value==="root"?"/":`/${i.value}/`)}});return{localeLinks:b(()=>Object.entries(e.value.locales).flatMap(([h,w])=>f.value.label===w.label?[]:{text:w.label,link:ae(w.link||(h==="root"?"/":`/${h}/`),s.value.i18nRouting!==!1&&t,l.value.relativePath.slice(f.value.link.length-1),!e.value.cleanUrls)+a.value})),currentLang:f}}function ae(t,e,i,l){return e?t.replace(/\/$/,"")+xt(i.replace(/(^|\/)index\.md$/,"$1").replace(/\.md$/,l?".html":"")):t}const re={class:"NotFound"},fe={class:"code"},ce={class:"title"},de={class:"quote"},xe={class:"action"},he=["href","aria-label"],ue=y({__name:"NotFound",setup(t){const{theme:e}=P(),{currentLang:i}=X();return(l,s)=>{var a,f,x,h,w;return n(),c("div",re,[r("p",fe,S(((a=o(e).notFound)==null?void 0:a.code)??"404"),1),r("h1",ce,S(((f=o(e).notFound)==null?void 0:f.title)??"PAGE NOT FOUND"),1),s[0]||(s[0]=r("div",{class:"divider"},null,-1)),r("blockquote",de,S(((x=o(e).notFound)==null?void 0:x.quote)??"But if you don't change your direction, and if you keep looking, you may end up where you are heading."),1),r("div",xe,[r("a",{class:"link",href:o(yt)(o(i).link),"aria-label":((h=o(e).notFound)==null?void 0:h.linkLabel)??"go to home"},S(((w=o(e).notFound)==null?void 0:w.linkText)??"Take me home"),9,he)])])}}}),ye=_(ue,[["__scopeId","data-v-5bb079d4"]]);function Ht(t,e){if(Array.isArray(t))return Q(t);if(t==null)return[];e=xt(e);const i=Object.keys(t).sort((s,a)=>a.split("/").length-s.split("/").length).find(s=>e.startsWith(xt(s))),l=i?t[i]:[];return Array.isArray(l)?Q(l):Q(l.items,l.base)}function ge(t){const e=[];let i=0;for(const l in t){const s=t[l];if(s.items){i=e.push(s);continue}e[i]||e.push({items:[]}),e[i].items.push(s)}return e}function ve(t){const e=[];function i(l){for(const s of l)s.text&&s.link&&e.push({text:s.text,link:s.link,docFooterText:s.docFooterText}),s.items&&i(s.items)}return i(t),e}function ht(t,e){return Array.isArray(e)?e.some(i=>ht(t,i)):j(t,e.link)?!0:e.items?ht(t,e.items):!1}function Q(t,e){return[...t].map(i=>{const l={...i},s=l.base||e;return s&&l.link&&(l.link=s+l.link),l.items&&(l.items=Q(l.items,s)),l})}function O(){const{frontmatter:t,page:e,theme:i}=P(),l=ct("(min-width: 960px)"),s=M(!1),a=b(()=>{const V=i.value.sidebar,N=e.value.relativePath;return V?Ht(V,N):[]}),f=M(a.value);G(a,(V,N)=>{JSON.stringify(V)!==JSON.stringify(N)&&(f.value=a.value)});const x=b(()=>t.value.sidebar!==!1&&f.value.length>0&&t.value.layout!=="home"),h=b(()=>w?t.value.aside==null?i.value.aside==="left":t.value.aside==="left":!1),w=b(()=>t.value.layout==="home"?!1:t.value.aside!=null?!!t.value.aside:i.value.aside!==!1),$=b(()=>x.value&&l.value),p=b(()=>x.value?ge(f.value):[]);function v(){s.value=!0}function z(){s.value=!1}function L(){s.value?z():v()}return{isOpen:s,sidebar:f,sidebarGroups:p,hasSidebar:x,hasAside:w,leftAside:h,isSidebarEnabled:$,open:v,close:z,toggle:L}}function me(t,e){let i;J(()=>{i=t.value?document.activeElement:void 0}),B(()=>{window.addEventListener("keyup",l)}),gt(()=>{window.removeEventListener("keyup",l)});function l(s){s.key==="Escape"&&t.value&&(e(),i==null||i.focus())}}function pe(t){const{page:e,hash:i}=P(),l=M(!1),s=b(()=>t.value.collapsed!=null),a=b(()=>!!t.value.link),f=M(!1),x=()=>{f.value=j(e.value.relativePath,t.value.link)};G([e,t,i],x),B(x);const h=b(()=>f.value?!0:t.value.items?ht(e.value.relativePath,t.value.items):!1),w=b(()=>!!(t.value.items&&t.value.items.length));J(()=>{l.value=!!(s.value&&t.value.collapsed)}),vt(()=>{(f.value||h.value)&&(l.value=!1)});function $(){s.value&&(l.value=!l.value)}return{collapsed:l,collapsible:s,isLink:a,isActiveLink:f,hasActiveLink:h,hasChildren:w,toggle:$}}function we(){const{hasSidebar:t}=O(),e=ct("(min-width: 960px)"),i=ct("(min-width: 1280px)");return{isAsideEnabled:b(()=>!i.value&&!e.value?!1:t.value?i.value:e.value)}}const ke=/\b(?:VPBadge|header-anchor|footnote-ref|ignore-header)\b/,ut=[];function Bt(t){return typeof t.outline=="object"&&!Array.isArray(t.outline)&&t.outline.label||t.outlineTitle||"On this page"}function pt(t){const e=[...document.querySelectorAll(".VPDoc :where(h1,h2,h3,h4,h5,h6)")].filter(i=>i.id&&i.hasChildNodes()).map(i=>{const l=Number(i.tagName[1]);return{element:i,title:_e(i),link:"#"+i.id,level:l}});return be(e,t)}function _e(t){let e="";for(const i of t.childNodes)if(i.nodeType===1){if(ke.test(i.className))continue;e+=i.textContent}else i.nodeType===3&&(e+=i.textContent);return e.trim()}function be(t,e){if(e===!1)return[];const i=(typeof e=="object"&&!Array.isArray(e)?e.level:e)||2,[l,s]=typeof i=="number"?[i,i]:i==="deep"?[2,6]:i;return ze(t,l,s)}function $e(t,e){const{isAsideEnabled:i}=we(),l=oe(a,100);let s=null;B(()=>{requestAnimationFrame(a),window.addEventListener("scroll",l)}),Wt(()=>{f(location.hash)}),gt(()=>{window.removeEventListener("scroll",l)});function a(){if(!i.value)return;const x=window.scrollY,h=window.innerHeight,w=document.body.offsetHeight,$=Math.abs(x+h-w)<1,p=ut.map(({element:z,link:L})=>({link:L,top:Le(z)})).filter(({top:z})=>!Number.isNaN(z)).sort((z,L)=>z.top-L.top);if(!p.length){f(null);return}if(x<1){f(null);return}if($){f(p[p.length-1].link);return}let v=null;for(const{link:z,top:L}of p){if(L>x+qt()+4)break;v=z}f(v)}function f(x){s&&s.classList.remove("active"),x==null?s=null:s=t.value.querySelector(`a[href="${decodeURIComponent(x)}"]`);const h=s;h?(h.classList.add("active"),e.value.style.top=h.offsetTop+39+"px",e.value.style.opacity="1"):(e.value.style.top="33px",e.value.style.opacity="0")}}function Le(t){let e=0;for(;t!==document.body;){if(t===null)return NaN;e+=t.offsetTop,t=t.offsetParent}return e}function ze(t,e,i){ut.length=0;const l=[],s=[];return t.forEach(a=>{const f={...a,children:[]};let x=s[s.length-1];for(;x&&x.level>=f.level;)s.pop(),x=s[s.length-1];if(f.element.classList.contains("ignore-header")||x&&"shouldIgnore"in x){s.push({level:f.level,shouldIgnore:!0});return}f.level>i||f.level<e||(ut.push({element:f.element,link:f.link}),x?x.children.push(f):l.push(f),s.push(f))}),l}const Pe=["href","title"],Me=y({__name:"VPDocOutlineItem",props:{headers:{},root:{type:Boolean}},setup(t){function e({target:i}){const l=i.href.split("#")[1],s=document.getElementById(decodeURIComponent(l));s==null||s.focus({preventScroll:!0})}return(i,l)=>{const s=W("VPDocOutlineItem",!0);return n(),c("ul",{class:C(["VPDocOutlineItem",t.root?"root":"nested"])},[(n(!0),c(T,null,I(t.headers,({children:a,link:f,title:x})=>(n(),c("li",null,[r("a",{class:"outline-link",href:f,onClick:e,title:x},S(x),9,Pe),a!=null&&a.length?(n(),m(s,{key:0,headers:a},null,8,["headers"])):g("",!0)]))),256))],2)}}}),Et=_(Me,[["__scopeId","data-v-544a780c"]]),Se={class:"content"},Ve={"aria-level":"2",class:"outline-title",id:"doc-outline-aria-label",role:"heading"},Ce=y({__name:"VPDocAsideOutline",setup(t){const{frontmatter:e,theme:i}=P(),l=St([]);et(()=>{l.value=pt(e.value.outline??i.value.outline)});const s=M(),a=M();return $e(s,a),(f,x)=>(n(),c("nav",{"aria-labelledby":"doc-outline-aria-label",class:C(["VPDocAsideOutline",{"has-outline":l.value.length>0}]),ref_key:"container",ref:s},[r("div",Se,[r("div",{class:"outline-marker",ref_key:"marker",ref:a},null,512),r("div",Ve,S(o(Bt)(o(i))),1),k(Et,{headers:l.value,root:!0},null,8,["headers"])])],2))}}),Te=_(Ce,[["__scopeId","data-v-fbb33dd0"]]),Ne={class:"VPDocAsideCarbonAds"},Ie=y({__name:"VPDocAsideCarbonAds",props:{carbonAds:{}},setup(t){const e=()=>null;return(i,l)=>(n(),c("div",Ne,[k(o(e),{"carbon-ads":t.carbonAds},null,8,["carbon-ads"])]))}}),Ae={class:"VPDocAside"},He=y({__name:"VPDocAside",setup(t){const{theme:e}=P();return(i,l)=>(n(),c("div",Ae,[d(i.$slots,"aside-top",{},void 0,!0),d(i.$slots,"aside-outline-before",{},void 0,!0),k(Te),d(i.$slots,"aside-outline-after",{},void 0,!0),l[0]||(l[0]=r("div",{class:"spacer"},null,-1)),d(i.$slots,"aside-ads-before",{},void 0,!0),o(e).carbonAds?(n(),m(Ie,{key:0,"carbon-ads":o(e).carbonAds},null,8,["carbon-ads"])):g("",!0),d(i.$slots,"aside-ads-after",{},void 0,!0),d(i.$slots,"aside-bottom",{},void 0,!0)]))}}),Be=_(He,[["__scopeId","data-v-5722d266"]]);function Ee(){const{theme:t,page:e}=P();return b(()=>{const{text:i="Edit this page",pattern:l=""}=t.value.editLink||{};let s;return typeof l=="function"?s=l(e.value):s=l.replace(/:path/g,e.value.filePath),{url:s,text:i}})}function Fe(){const{page:t,theme:e,frontmatter:i}=P();return b(()=>{var w,$,p,v,z,L,V,N;const l=Ht(e.value.sidebar,t.value.relativePath),s=ve(l),a=De(s,H=>H.link.replace(/[?#].*$/,"")),f=a.findIndex(H=>j(t.value.relativePath,H.link)),x=((w=e.value.docFooter)==null?void 0:w.prev)===!1&&!i.value.prev||i.value.prev===!1,h=(($=e.value.docFooter)==null?void 0:$.next)===!1&&!i.value.next||i.value.next===!1;return{prev:x?void 0:{text:(typeof i.value.prev=="string"?i.value.prev:typeof i.value.prev=="object"?i.value.prev.text:void 0)??((p=a[f-1])==null?void 0:p.docFooterText)??((v=a[f-1])==null?void 0:v.text),link:(typeof i.value.prev=="object"?i.value.prev.link:void 0)??((z=a[f-1])==null?void 0:z.link)},next:h?void 0:{text:(typeof i.value.next=="string"?i.value.next:typeof i.value.next=="object"?i.value.next.text:void 0)??((L=a[f+1])==null?void 0:L.docFooterText)??((V=a[f+1])==null?void 0:V.text),link:(typeof i.value.next=="object"?i.value.next.link:void 0)??((N=a[f+1])==null?void 0:N.link)}}})}function De(t,e){const i=new Set;return t.filter(l=>{const s=e(l);return i.has(s)?!1:i.add(s)})}const F=y({__name:"VPLink",props:{tag:{},href:{},noIcon:{type:Boolean},target:{},rel:{}},setup(t){const e=t,i=b(()=>e.tag??(e.href?"a":"span")),l=b(()=>e.href&&Vt.test(e.href)||e.target==="_blank");return(s,a)=>(n(),m(E(i.value),{class:C(["VPLink",{link:t.href,"vp-external-link-icon":l.value,"no-icon":t.noIcon}]),href:t.href?o(mt)(t.href):void 0,target:t.target??(l.value?"_blank":void 0),rel:t.rel??(l.value?"noreferrer":void 0)},{default:u(()=>[d(s.$slots,"default")]),_:3},8,["class","href","target","rel"]))}}),Ge={class:"VPLastUpdated"},Oe=["datetime"],Ue=y({__name:"VPDocFooterLastUpdated",setup(t){const{theme:e,page:i,lang:l}=P(),s=b(()=>new Date(i.value.lastUpdated)),a=b(()=>s.value.toISOString()),f=M("");return B(()=>{J(()=>{var x,h,w;f.value=new Intl.DateTimeFormat((h=(x=e.value.lastUpdated)==null?void 0:x.formatOptions)!=null&&h.forceLocale?l.value:void 0,((w=e.value.lastUpdated)==null?void 0:w.formatOptions)??{dateStyle:"short",timeStyle:"short"}).format(s.value)})}),(x,h)=>{var w;return n(),c("p",Ge,[D(S(((w=o(e).lastUpdated)==null?void 0:w.text)||o(e).lastUpdatedText||"Last updated")+": ",1),r("time",{datetime:a.value},S(f.value),9,Oe)])}}}),Ze=_(Ue,[["__scopeId","data-v-deb1cbd9"]]),je={key:0,class:"VPDocFooter"},We={key:0,class:"edit-info"},qe={key:0,class:"edit-link"},Ke={key:1,class:"last-updated"},Re={key:1,class:"prev-next","aria-labelledby":"doc-footer-aria-label"},Je={class:"pager"},Ye=["innerHTML"],Xe=["innerHTML"],Qe={class:"pager"},ti=["innerHTML"],ei=["innerHTML"],ii=y({__name:"VPDocFooter",setup(t){const{theme:e,page:i,frontmatter:l}=P(),s=Ee(),a=Fe(),f=b(()=>e.value.editLink&&l.value.editLink!==!1),x=b(()=>i.value.lastUpdated),h=b(()=>f.value||x.value||a.value.prev||a.value.next);return(w,$)=>{var p,v,z,L;return h.value?(n(),c("footer",je,[d(w.$slots,"doc-footer-before",{},void 0,!0),f.value||x.value?(n(),c("div",We,[f.value?(n(),c("div",qe,[k(F,{class:"edit-link-button",href:o(s).url,"no-icon":!0},{default:u(()=>[$[0]||($[0]=r("span",{class:"vpi-square-pen edit-link-icon"},null,-1)),D(" "+S(o(s).text),1)]),_:1},8,["href"])])):g("",!0),x.value?(n(),c("div",Ke,[k(Ze)])):g("",!0)])):g("",!0),(p=o(a).prev)!=null&&p.link||(v=o(a).next)!=null&&v.link?(n(),c("nav",Re,[$[1]||($[1]=r("span",{class:"visually-hidden",id:"doc-footer-aria-label"},"Pager",-1)),r("div",Je,[(z=o(a).prev)!=null&&z.link?(n(),m(F,{key:0,class:"pager-link prev",href:o(a).prev.link},{default:u(()=>{var V;return[r("span",{class:"desc",innerHTML:((V=o(e).docFooter)==null?void 0:V.prev)||"Previous page"},null,8,Ye),r("span",{class:"title",innerHTML:o(a).prev.text},null,8,Xe)]}),_:1},8,["href"])):g("",!0)]),r("div",Qe,[(L=o(a).next)!=null&&L.link?(n(),m(F,{key:0,class:"pager-link next",href:o(a).next.link},{default:u(()=>{var V;return[r("span",{class:"desc",innerHTML:((V=o(e).docFooter)==null?void 0:V.next)||"Next page"},null,8,ti),r("span",{class:"title",innerHTML:o(a).next.text},null,8,ei)]}),_:1},8,["href"])):g("",!0)])])):g("",!0)])):g("",!0)}}}),li=_(ii,[["__scopeId","data-v-2467df76"]]),si={class:"container"},ni={class:"aside-container"},oi={class:"aside-content"},ai={class:"content"},ri={class:"content-container"},fi={class:"main"},ci=y({__name:"VPDoc",setup(t){const{theme:e}=P(),i=Y(),{hasSidebar:l,hasAside:s,leftAside:a}=O(),f=b(()=>i.path.replace(/[./]+/g,"_").replace(/_html$/,""));return(x,h)=>{const w=W("Content");return n(),c("div",{class:C(["VPDoc",{"has-sidebar":o(l),"has-aside":o(s)}])},[d(x.$slots,"doc-top",{},void 0,!0),r("div",si,[o(s)?(n(),c("div",{key:0,class:C(["aside",{"left-aside":o(a)}])},[h[0]||(h[0]=r("div",{class:"aside-curtain"},null,-1)),r("div",ni,[r("div",oi,[k(Be,null,{"aside-top":u(()=>[d(x.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":u(()=>[d(x.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":u(()=>[d(x.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":u(()=>[d(x.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":u(()=>[d(x.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":u(()=>[d(x.$slots,"aside-ads-after",{},void 0,!0)]),_:3})])])],2)):g("",!0),r("div",ai,[r("div",ri,[d(x.$slots,"doc-before",{},void 0,!0),r("main",fi,[k(w,{class:C(["vp-doc",[f.value,o(e).externalLinkIcon&&"external-link-icon-enabled"]])},null,8,["class"])]),k(li,null,{"doc-footer-before":u(()=>[d(x.$slots,"doc-footer-before",{},void 0,!0)]),_:3}),d(x.$slots,"doc-after",{},void 0,!0)])])]),d(x.$slots,"doc-bottom",{},void 0,!0)],2)}}}),di=_(ci,[["__scopeId","data-v-93adcff7"]]),xi=y({__name:"VPButton",props:{tag:{},size:{default:"medium"},theme:{default:"brand"},text:{},href:{},target:{},rel:{}},setup(t){const e=t,i=b(()=>e.href&&Vt.test(e.href)),l=b(()=>e.tag||(e.href?"a":"button"));return(s,a)=>(n(),m(E(l.value),{class:C(["VPButton",[t.size,t.theme]]),href:t.href?o(mt)(t.href):void 0,target:e.target??(i.value?"_blank":void 0),rel:e.rel??(i.value?"noreferrer":void 0)},{default:u(()=>[D(S(t.text),1)]),_:1},8,["class","href","target","rel"]))}}),hi=_(xi,[["__scopeId","data-v-cdffcac5"]]),ui=["src","alt"],yi=y({inheritAttrs:!1,__name:"VPImage",props:{image:{},alt:{}},setup(t){return(e,i)=>{const l=W("VPImage",!0);return t.image?(n(),c(T,{key:0},[typeof t.image=="string"||"src"in t.image?(n(),c("img",Z({key:0,class:"VPImage"},typeof t.image=="string"?e.$attrs:{...t.image,...e.$attrs},{src:o(yt)(typeof t.image=="string"?t.image:t.image.src),alt:t.alt??(typeof t.image=="string"?"":t.image.alt||"")}),null,16,ui)):(n(),c(T,{key:1},[k(l,Z({class:"dark",image:t.image.dark,alt:t.image.alt},e.$attrs),null,16,["image","alt"]),k(l,Z({class:"light",image:t.image.light,alt:t.image.alt},e.$attrs),null,16,["image","alt"])],64))],64)):g("",!0)}}}),tt=_(yi,[["__scopeId","data-v-8b025449"]]),gi={class:"container"},vi={class:"main"},mi={class:"heading"},pi=["innerHTML"],wi=["innerHTML"],ki=["innerHTML"],_i={key:0,class:"actions"},bi={key:0,class:"image"},$i={class:"image-container"},Li=y({__name:"VPHero",props:{name:{},text:{},tagline:{},image:{},actions:{}},setup(t){const e=it("hero-image-slot-exists");return(i,l)=>(n(),c("div",{class:C(["VPHero",{"has-image":t.image||o(e)}])},[r("div",gi,[r("div",vi,[d(i.$slots,"home-hero-info-before",{},void 0,!0),d(i.$slots,"home-hero-info",{},()=>[r("h1",mi,[t.name?(n(),c("span",{key:0,innerHTML:t.name,class:"name clip"},null,8,pi)):g("",!0),t.text?(n(),c("span",{key:1,innerHTML:t.text,class:"text"},null,8,wi)):g("",!0)]),t.tagline?(n(),c("p",{key:0,innerHTML:t.tagline,class:"tagline"},null,8,ki)):g("",!0)],!0),d(i.$slots,"home-hero-info-after",{},void 0,!0),t.actions?(n(),c("div",_i,[(n(!0),c(T,null,I(t.actions,s=>(n(),c("div",{key:s.link,class:"action"},[k(hi,{tag:"a",size:"medium",theme:s.theme,text:s.text,href:s.link,target:s.target,rel:s.rel},null,8,["theme","text","href","target","rel"])]))),128))])):g("",!0),d(i.$slots,"home-hero-actions-after",{},void 0,!0)]),t.image||o(e)?(n(),c("div",bi,[r("div",$i,[l[0]||(l[0]=r("div",{class:"image-bg"},null,-1)),d(i.$slots,"home-hero-image",{},()=>[t.image?(n(),m(tt,{key:0,class:"image-src",image:t.image},null,8,["image"])):g("",!0)],!0)])])):g("",!0)])],2))}}),zi=_(Li,[["__scopeId","data-v-8a5c0eaf"]]),Pi=y({__name:"VPHomeHero",setup(t){const{frontmatter:e}=P();return(i,l)=>o(e).hero?(n(),m(zi,{key:0,class:"VPHomeHero",name:o(e).hero.name,text:o(e).hero.text,tagline:o(e).hero.tagline,image:o(e).hero.image,actions:o(e).hero.actions},{"home-hero-info-before":u(()=>[d(i.$slots,"home-hero-info-before")]),"home-hero-info":u(()=>[d(i.$slots,"home-hero-info")]),"home-hero-info-after":u(()=>[d(i.$slots,"home-hero-info-after")]),"home-hero-actions-after":u(()=>[d(i.$slots,"home-hero-actions-after")]),"home-hero-image":u(()=>[d(i.$slots,"home-hero-image")]),_:3},8,["name","text","tagline","image","actions"])):g("",!0)}}),Mi={class:"box"},Si={key:0,class:"icon"},Vi=["innerHTML"],Ci=["innerHTML"],Ti=["innerHTML"],Ni={key:4,class:"link-text"},Ii={class:"link-text-value"},Ai=y({__name:"VPFeature",props:{icon:{},title:{},details:{},link:{},linkText:{},rel:{},target:{}},setup(t){return(e,i)=>(n(),m(F,{class:"VPFeature",href:t.link,rel:t.rel,target:t.target,"no-icon":!0,tag:t.link?"a":"div"},{default:u(()=>[r("article",Mi,[typeof t.icon=="object"&&t.icon.wrap?(n(),c("div",Si,[k(tt,{image:t.icon,alt:t.icon.alt,height:t.icon.height||48,width:t.icon.width||48},null,8,["image","alt","height","width"])])):typeof t.icon=="object"?(n(),m(tt,{key:1,image:t.icon,alt:t.icon.alt,height:t.icon.height||48,width:t.icon.width||48},null,8,["image","alt","height","width"])):t.icon?(n(),c("div",{key:2,class:"icon",innerHTML:t.icon},null,8,Vi)):g("",!0),r("h2",{class:"title",innerHTML:t.title},null,8,Ci),t.details?(n(),c("p",{key:3,class:"details",innerHTML:t.details},null,8,Ti)):g("",!0),t.linkText?(n(),c("div",Ni,[r("p",Ii,[D(S(t.linkText)+" ",1),i[0]||(i[0]=r("span",{class:"vpi-arrow-right link-text-icon"},null,-1))])])):g("",!0)])]),_:1},8,["href","rel","target","tag"]))}}),Hi=_(Ai,[["__scopeId","data-v-6d21a5f0"]]),Bi={key:0,class:"VPFeatures"},Ei={class:"container"},Fi={class:"items"},Di=y({__name:"VPFeatures",props:{features:{}},setup(t){const e=t,i=b(()=>{const l=e.features.length;if(l){if(l===2)return"grid-2";if(l===3)return"grid-3";if(l%3===0)return"grid-6";if(l>3)return"grid-4"}else return});return(l,s)=>t.features?(n(),c("div",Bi,[r("div",Ei,[r("div",Fi,[(n(!0),c(T,null,I(t.features,a=>(n(),c("div",{key:a.title,class:C(["item",[i.value]])},[k(Hi,{icon:a.icon,title:a.title,details:a.details,link:a.link,"link-text":a.linkText,rel:a.rel,target:a.target},null,8,["icon","title","details","link","link-text","rel","target"])],2))),128))])])])):g("",!0)}}),Gi=_(Di,[["__scopeId","data-v-c6430773"]]),Oi=y({__name:"VPHomeFeatures",setup(t){const{frontmatter:e}=P();return(i,l)=>o(e).features?(n(),m(Gi,{key:0,class:"VPHomeFeatures",features:o(e).features},null,8,["features"])):g("",!0)}}),Ui=y({__name:"VPHomeContent",setup(t){const{width:e}=Kt({initialWidth:0,includeScrollbar:!1});return(i,l)=>(n(),c("div",{class:"vp-doc container",style:A(o(e)?{"--vp-offset":`calc(50% - ${o(e)/2}px)`}:{})},[d(i.$slots,"default",{},void 0,!0)],4))}}),Zi=_(Ui,[["__scopeId","data-v-dd15dcde"]]),ji=y({__name:"VPHome",setup(t){const{frontmatter:e,theme:i}=P();return(l,s)=>{const a=W("Content");return n(),c("div",{class:C(["VPHome",{"external-link-icon-enabled":o(i).externalLinkIcon}])},[d(l.$slots,"home-hero-before",{},void 0,!0),k(Pi,null,{"home-hero-info-before":u(()=>[d(l.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":u(()=>[d(l.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":u(()=>[d(l.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":u(()=>[d(l.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":u(()=>[d(l.$slots,"home-hero-image",{},void 0,!0)]),_:3}),d(l.$slots,"home-hero-after",{},void 0,!0),d(l.$slots,"home-features-before",{},void 0,!0),k(Oi),d(l.$slots,"home-features-after",{},void 0,!0),o(e).markdownStyles!==!1?(n(),m(Zi,{key:0},{default:u(()=>[k(a)]),_:1})):(n(),m(a,{key:1}))],2)}}}),Wi=_(ji,[["__scopeId","data-v-c3dd487c"]]),qi={},Ki={class:"VPPage"};function Ri(t,e){const i=W("Content");return n(),c("div",Ki,[d(t.$slots,"page-top"),k(i),d(t.$slots,"page-bottom")])}const Ji=_(qi,[["render",Ri]]),Yi=y({__name:"VPContent",setup(t){const{page:e,frontmatter:i}=P(),{hasSidebar:l}=O();return(s,a)=>(n(),c("div",{class:C(["VPContent",{"has-sidebar":o(l),"is-home":o(i).layout==="home"}]),id:"VPContent"},[o(e).isNotFound?d(s.$slots,"not-found",{key:0},()=>[k(ye)],!0):o(i).layout==="page"?(n(),m(Ji,{key:1},{"page-top":u(()=>[d(s.$slots,"page-top",{},void 0,!0)]),"page-bottom":u(()=>[d(s.$slots,"page-bottom",{},void 0,!0)]),_:3})):o(i).layout==="home"?(n(),m(Wi,{key:2},{"home-hero-before":u(()=>[d(s.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":u(()=>[d(s.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":u(()=>[d(s.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":u(()=>[d(s.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":u(()=>[d(s.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":u(()=>[d(s.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":u(()=>[d(s.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":u(()=>[d(s.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":u(()=>[d(s.$slots,"home-features-after",{},void 0,!0)]),_:3})):o(i).layout&&o(i).layout!=="doc"?(n(),m(E(o(i).layout),{key:3})):(n(),m(di,{key:4},{"doc-top":u(()=>[d(s.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":u(()=>[d(s.$slots,"doc-bottom",{},void 0,!0)]),"doc-footer-before":u(()=>[d(s.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":u(()=>[d(s.$slots,"doc-before",{},void 0,!0)]),"doc-after":u(()=>[d(s.$slots,"doc-after",{},void 0,!0)]),"aside-top":u(()=>[d(s.$slots,"aside-top",{},void 0,!0)]),"aside-outline-before":u(()=>[d(s.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":u(()=>[d(s.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":u(()=>[d(s.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":u(()=>[d(s.$slots,"aside-ads-after",{},void 0,!0)]),"aside-bottom":u(()=>[d(s.$slots,"aside-bottom",{},void 0,!0)]),_:3}))],2))}}),Xi=_(Yi,[["__scopeId","data-v-ec524422"]]),Qi={class:"container"},tl=["innerHTML"],el=["innerHTML"],il=y({__name:"VPFooter",setup(t){const{theme:e,frontmatter:i}=P(),{hasSidebar:l}=O();return(s,a)=>o(e).footer&&o(i).footer!==!1?(n(),c("footer",{key:0,class:C(["VPFooter",{"has-sidebar":o(l)}])},[r("div",Qi,[o(e).footer.message?(n(),c("p",{key:0,class:"message",innerHTML:o(e).footer.message},null,8,tl)):g("",!0),o(e).footer.copyright?(n(),c("p",{key:1,class:"copyright",innerHTML:o(e).footer.copyright},null,8,el)):g("",!0)])],2)):g("",!0)}}),ll=_(il,[["__scopeId","data-v-427289ba"]]);function sl(){const{theme:t,frontmatter:e}=P(),i=St([]),l=b(()=>i.value.length>0);return et(()=>{i.value=pt(e.value.outline??t.value.outline)}),{headers:i,hasLocalNav:l}}const nl={class:"menu-text"},ol={class:"header"},al={class:"outline"},rl=y({__name:"VPLocalNavOutlineDropdown",props:{headers:{},navHeight:{}},setup(t){const e=t,{theme:i}=P(),l=M(!1),s=M(0),a=M(),f=M();function x(p){var v;(v=a.value)!=null&&v.contains(p.target)||(l.value=!1)}G(l,p=>{if(p){document.addEventListener("click",x);return}document.removeEventListener("click",x)}),dt("Escape",()=>{l.value=!1}),et(()=>{l.value=!1});function h(){l.value=!l.value,s.value=window.innerHeight+Math.min(window.scrollY-e.navHeight,0)}function w(p){p.target.classList.contains("outline-link")&&(f.value&&(f.value.style.transition="none"),Ct(()=>{l.value=!1}))}function $(){l.value=!1,window.scrollTo({top:0,left:0,behavior:"smooth"})}return(p,v)=>(n(),c("div",{class:"VPLocalNavOutlineDropdown",style:A({"--vp-vh":s.value+"px"}),ref_key:"main",ref:a},[t.headers.length>0?(n(),c("button",{key:0,onClick:h,class:C({open:l.value})},[r("span",nl,S(o(Bt)(o(i))),1),v[0]||(v[0]=r("span",{class:"vpi-chevron-right icon"},null,-1))],2)):(n(),c("button",{key:1,onClick:$},S(o(i).returnToTopLabel||"Return to top"),1)),k(R,{name:"flyout"},{default:u(()=>[l.value?(n(),c("div",{key:0,ref_key:"items",ref:f,class:"items",onClick:w},[r("div",ol,[r("a",{class:"top-link",href:"#",onClick:$},S(o(i).returnToTopLabel||"Return to top"),1)]),r("div",al,[k(Et,{headers:t.headers},null,8,["headers"])])],512)):g("",!0)]),_:1})],4))}}),fl=_(rl,[["__scopeId","data-v-aa428bca"]]),cl={class:"container"},dl=["aria-expanded"],xl={class:"menu-text"},hl=y({__name:"VPLocalNav",props:{open:{type:Boolean}},emits:["open-menu"],setup(t){const{theme:e,frontmatter:i}=P(),{hasSidebar:l}=O(),{headers:s}=sl(),{y:a}=Tt(),f=M(0);B(()=>{f.value=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--vp-nav-height"))}),et(()=>{s.value=pt(i.value.outline??e.value.outline)});const x=b(()=>s.value.length===0),h=b(()=>x.value&&!l.value),w=b(()=>({VPLocalNav:!0,"has-sidebar":l.value,empty:x.value,fixed:h.value}));return($,p)=>o(i).layout!=="home"&&(!h.value||o(a)>=f.value)?(n(),c("div",{key:0,class:C(w.value)},[r("div",cl,[o(l)?(n(),c("button",{key:0,class:"menu","aria-expanded":t.open,"aria-controls":"VPSidebarNav",onClick:p[0]||(p[0]=v=>$.$emit("open-menu"))},[p[1]||(p[1]=r("span",{class:"vpi-align-left menu-icon"},null,-1)),r("span",xl,S(o(e).sidebarMenuLabel||"Menu"),1)],8,dl)):g("",!0),k(fl,{headers:o(s),navHeight:f.value},null,8,["headers","navHeight"])])],2)):g("",!0)}}),ul=_(hl,[["__scopeId","data-v-6bede3f9"]]);function yl(){const t=M(!1);function e(){t.value=!0,window.addEventListener("resize",s)}function i(){t.value=!1,window.removeEventListener("resize",s)}function l(){t.value?i():e()}function s(){window.outerWidth>=768&&i()}const a=Y();return G(()=>a.path,i),{isScreenOpen:t,openScreen:e,closeScreen:i,toggleScreen:l}}const gl={},vl={class:"VPSwitch",type:"button",role:"switch"},ml={class:"check"},pl={key:0,class:"icon"};function wl(t,e){return n(),c("button",vl,[r("span",ml,[t.$slots.default?(n(),c("span",pl,[d(t.$slots,"default",{},void 0,!0)])):g("",!0)])])}const kl=_(gl,[["render",wl],["__scopeId","data-v-7f9c1f6b"]]),_l=y({__name:"VPSwitchAppearance",setup(t){const{isDark:e,theme:i}=P(),l=it("toggle-appearance",()=>{e.value=!e.value}),s=M("");return vt(()=>{s.value=e.value?i.value.lightModeSwitchTitle||"Switch to light theme":i.value.darkModeSwitchTitle||"Switch to dark theme"}),(a,f)=>(n(),m(kl,{title:s.value,class:"VPSwitchAppearance","aria-checked":o(e),onClick:o(l)},{default:u(()=>[...f[0]||(f[0]=[r("span",{class:"vpi-sun sun"},null,-1),r("span",{class:"vpi-moon moon"},null,-1)])]),_:1},8,["title","aria-checked","onClick"]))}}),wt=_(_l,[["__scopeId","data-v-5ce0d3ed"]]),bl={key:0,class:"VPNavBarAppearance"},$l=y({__name:"VPNavBarAppearance",setup(t){const{site:e}=P();return(i,l)=>o(e).appearance&&o(e).appearance!=="force-dark"&&o(e).appearance!=="force-auto"?(n(),c("div",bl,[k(wt)])):g("",!0)}}),Ll=_($l,[["__scopeId","data-v-f293bcbe"]]),kt=M();let Ft=!1,rt=0;function zl(t){const e=M(!1);if(lt){!Ft&&Pl(),rt++;const i=G(kt,l=>{var s,a,f;l===t.el.value||(s=t.el.value)!=null&&s.contains(l)?(e.value=!0,(a=t.onFocus)==null||a.call(t)):(e.value=!1,(f=t.onBlur)==null||f.call(t))});gt(()=>{i(),rt--,rt||Ml()})}return Rt(e)}function Pl(){document.addEventListener("focusin",Dt),Ft=!0,kt.value=document.activeElement}function Ml(){document.removeEventListener("focusin",Dt)}function Dt(){kt.value=document.activeElement}const Sl={class:"VPMenuLink"},Vl=["innerHTML"],Cl=y({__name:"VPMenuLink",props:{item:{}},setup(t){const{page:e}=P();return(i,l)=>(n(),c("div",Sl,[k(F,{class:C({active:o(j)(o(e).relativePath,t.item.activeMatch||t.item.link,!!t.item.activeMatch)}),href:t.item.link,target:t.item.target,rel:t.item.rel,"no-icon":t.item.noIcon},{default:u(()=>[r("span",{innerHTML:t.item.text},null,8,Vl)]),_:1},8,["class","href","target","rel","no-icon"])]))}}),nt=_(Cl,[["__scopeId","data-v-f40f9647"]]),Tl={class:"VPMenuGroup"},Nl={key:0,class:"title"},Il=y({__name:"VPMenuGroup",props:{text:{},items:{}},setup(t){return(e,i)=>(n(),c("div",Tl,[t.text?(n(),c("p",Nl,S(t.text),1)):g("",!0),(n(!0),c(T,null,I(t.items,l=>(n(),c(T,null,["link"in l?(n(),m(nt,{key:0,item:l},null,8,["item"])):g("",!0)],64))),256))]))}}),Al=_(Il,[["__scopeId","data-v-88b4e9e3"]]),Hl={class:"VPMenu"},Bl={key:0,class:"items"},El=y({__name:"VPMenu",props:{items:{}},setup(t){return(e,i)=>(n(),c("div",Hl,[t.items?(n(),c("div",Bl,[(n(!0),c(T,null,I(t.items,l=>(n(),c(T,{key:JSON.stringify(l)},["link"in l?(n(),m(nt,{key:0,item:l},null,8,["item"])):"component"in l?(n(),m(E(l.component),Z({key:1,ref_for:!0},l.props),null,16)):(n(),m(Al,{key:2,text:l.text,items:l.items},null,8,["text","items"]))],64))),128))])):g("",!0),d(e.$slots,"default",{},void 0,!0)]))}}),Fl=_(El,[["__scopeId","data-v-60337296"]]),Dl=["aria-expanded","aria-label"],Gl={key:0,class:"text"},Ol=["innerHTML"],Ul={key:1,class:"vpi-more-horizontal icon"},Zl={class:"menu"},jl=y({__name:"VPFlyout",props:{icon:{},button:{},label:{},items:{}},setup(t){const e=M(!1),i=M();zl({el:i,onBlur:l});function l(){e.value=!1}return(s,a)=>(n(),c("div",{class:"VPFlyout",ref_key:"el",ref:i,onMouseenter:a[1]||(a[1]=f=>e.value=!0),onMouseleave:a[2]||(a[2]=f=>e.value=!1)},[r("button",{type:"button",class:"button","aria-haspopup":"true","aria-expanded":e.value,"aria-label":t.label,onClick:a[0]||(a[0]=f=>e.value=!e.value)},[t.button||t.icon?(n(),c("span",Gl,[t.icon?(n(),c("span",{key:0,class:C([t.icon,"option-icon"])},null,2)):g("",!0),t.button?(n(),c("span",{key:1,innerHTML:t.button},null,8,Ol)):g("",!0),a[3]||(a[3]=r("span",{class:"vpi-chevron-down text-icon"},null,-1))])):(n(),c("span",Ul))],8,Dl),r("div",Zl,[k(Fl,{items:t.items},{default:u(()=>[d(s.$slots,"default",{},void 0,!0)]),_:3},8,["items"])])],544))}}),_t=_(jl,[["__scopeId","data-v-c8313f06"]]),Wl=["href","aria-label","innerHTML"],ql=y({__name:"VPSocialLink",props:{icon:{},link:{},ariaLabel:{}},setup(t){const e=t,i=M();B(async()=>{var a;await Ct();const s=(a=i.value)==null?void 0:a.children[0];s instanceof HTMLElement&&s.className.startsWith("vpi-social-")&&(getComputedStyle(s).maskImage||getComputedStyle(s).webkitMaskImage)==="none"&&s.style.setProperty("--icon",`url('https://api.iconify.design/simple-icons/${e.icon}.svg')`)});const l=b(()=>typeof e.icon=="object"?e.icon.svg:`<span class="vpi-social-${e.icon}"></span>`);return(s,a)=>(n(),c("a",{ref_key:"el",ref:i,class:"VPSocialLink no-icon",href:t.link,"aria-label":t.ariaLabel??(typeof t.icon=="string"?t.icon:""),target:"_blank",rel:"noopener",innerHTML:l.value},null,8,Wl))}}),Kl=_(ql,[["__scopeId","data-v-e2093e14"]]),Rl={class:"VPSocialLinks"},Jl=y({__name:"VPSocialLinks",props:{links:{}},setup(t){return(e,i)=>(n(),c("div",Rl,[(n(!0),c(T,null,I(t.links,({link:l,icon:s,ariaLabel:a})=>(n(),m(Kl,{key:l,icon:s,link:l,ariaLabel:a},null,8,["icon","link","ariaLabel"]))),128))]))}}),bt=_(Jl,[["__scopeId","data-v-54bae52f"]]),Yl={key:0,class:"group translations"},Xl={class:"trans-title"},Ql={key:1,class:"group"},ts={class:"item appearance"},es={class:"label"},is={class:"appearance-action"},ls={key:2,class:"group"},ss={class:"item social-links"},ns=y({__name:"VPNavBarExtra",setup(t){const{site:e,theme:i}=P(),{localeLinks:l,currentLang:s}=X({correspondingLink:!0}),a=b(()=>l.value.length&&s.value.label||e.value.appearance||i.value.socialLinks);return(f,x)=>a.value?(n(),m(_t,{key:0,class:"VPNavBarExtra",label:"extra navigation"},{default:u(()=>[o(l).length&&o(s).label?(n(),c("div",Yl,[r("p",Xl,S(o(s).label),1),(n(!0),c(T,null,I(o(l),h=>(n(),m(nt,{key:h.link,item:h},null,8,["item"]))),128))])):g("",!0),o(e).appearance&&o(e).appearance!=="force-dark"&&o(e).appearance!=="force-auto"?(n(),c("div",Ql,[r("div",ts,[r("p",es,S(o(i).darkModeSwitchLabel||"Appearance"),1),r("div",is,[k(wt)])])])):g("",!0),o(i).socialLinks?(n(),c("div",ls,[r("div",ss,[k(bt,{class:"social-links-list",links:o(i).socialLinks},null,8,["links"])])])):g("",!0)]),_:1})):g("",!0)}}),os=_(ns,[["__scopeId","data-v-0f997e22"]]),as=["aria-expanded"],rs=y({__name:"VPNavBarHamburger",props:{active:{type:Boolean}},emits:["click"],setup(t){return(e,i)=>(n(),c("button",{type:"button",class:C(["VPNavBarHamburger",{active:t.active}]),"aria-label":"mobile navigation","aria-expanded":t.active,"aria-controls":"VPNavScreen",onClick:i[0]||(i[0]=l=>e.$emit("click"))},[...i[1]||(i[1]=[r("span",{class:"container"},[r("span",{class:"top"}),r("span",{class:"middle"}),r("span",{class:"bottom"})],-1)])],10,as))}}),fs=_(rs,[["__scopeId","data-v-d3422334"]]),cs=["innerHTML"],ds=y({__name:"VPNavBarMenuLink",props:{item:{}},setup(t){const{page:e}=P();return(i,l)=>(n(),m(F,{class:C({VPNavBarMenuLink:!0,active:o(j)(o(e).relativePath,t.item.activeMatch||t.item.link,!!t.item.activeMatch)}),href:t.item.link,target:t.item.target,rel:t.item.rel,"no-icon":t.item.noIcon,tabindex:"0"},{default:u(()=>[r("span",{innerHTML:t.item.text},null,8,cs)]),_:1},8,["class","href","target","rel","no-icon"]))}}),xs=_(ds,[["__scopeId","data-v-1049a78b"]]),hs=y({__name:"VPNavBarMenuGroup",props:{item:{}},setup(t){const e=t,{page:i}=P(),l=a=>"component"in a?!1:"link"in a?j(i.value.relativePath,a.link,!!e.item.activeMatch):a.items.some(l),s=b(()=>l(e.item));return(a,f)=>(n(),m(_t,{class:C({VPNavBarMenuGroup:!0,active:o(j)(o(i).relativePath,t.item.activeMatch,!!t.item.activeMatch)||s.value}),button:t.item.text,items:t.item.items},null,8,["class","button","items"]))}}),us={key:0,"aria-labelledby":"main-nav-aria-label",class:"VPNavBarMenu"},ys=y({__name:"VPNavBarMenu",setup(t){const{theme:e}=P();return(i,l)=>o(e).nav?(n(),c("nav",us,[l[0]||(l[0]=r("span",{id:"main-nav-aria-label",class:"visually-hidden"}," Main Navigation ",-1)),(n(!0),c(T,null,I(o(e).nav,s=>(n(),c(T,{key:JSON.stringify(s)},["link"in s?(n(),m(xs,{key:0,item:s},null,8,["item"])):"component"in s?(n(),m(E(s.component),Z({key:1,ref_for:!0},s.props),null,16)):(n(),m(hs,{key:2,item:s},null,8,["item"]))],64))),128))])):g("",!0)}}),gs=_(ys,[["__scopeId","data-v-f6c21575"]]);function vs(t){const{localeIndex:e,theme:i}=P();function l(s){var L,V,N;const a=s.split("."),f=(L=i.value.search)==null?void 0:L.options,x=f&&typeof f=="object",h=x&&((N=(V=f.locales)==null?void 0:V[e.value])==null?void 0:N.translations)||null,w=x&&f.translations||null;let $=h,p=w,v=t;const z=a.pop();for(const H of a){let U=null;const K=v==null?void 0:v[H];K&&(U=v=K);const ot=p==null?void 0:p[H];ot&&(U=p=ot);const at=$==null?void 0:$[H];at&&(U=$=at),K||(v=U),ot||(p=U),at||($=U)}return($==null?void 0:$[z])??(p==null?void 0:p[z])??(v==null?void 0:v[z])??""}return l}const ms=["aria-label"],ps={class:"DocSearch-Button-Container"},ws={class:"DocSearch-Button-Placeholder"},$t=y({__name:"VPNavBarSearchButton",setup(t){const i=vs({button:{buttonText:"Search",buttonAriaLabel:"Search"}});return(l,s)=>(n(),c("button",{type:"button",class:"DocSearch DocSearch-Button","aria-label":o(i)("button.buttonAriaLabel")},[r("span",ps,[s[0]||(s[0]=r("span",{class:"vp-icon DocSearch-Search-Icon"},null,-1)),r("span",ws,S(o(i)("button.buttonText")),1)]),s[1]||(s[1]=r("span",{class:"DocSearch-Button-Keys"},[r("kbd",{class:"DocSearch-Button-Key"}),r("kbd",{class:"DocSearch-Button-Key"},"K")],-1))],8,ms))}}),ks={class:"VPNavBarSearch"},_s={id:"local-search"},bs={key:1,id:"docsearch"},$s=y({__name:"VPNavBarSearch",setup(t){const e=Jt(()=>Yt(()=>import("./VPLocalSearchBox.DNpDtSwp.js"),__vite__mapDeps([0,1]))),i=()=>null,{theme:l}=P(),s=M(!1),a=M(!1);B(()=>{});function f(){s.value||(s.value=!0,setTimeout(x,16))}function x(){const p=new Event("keydown");p.key="k",p.metaKey=!0,window.dispatchEvent(p),setTimeout(()=>{document.querySelector(".DocSearch-Modal")||x()},16)}function h(p){const v=p.target,z=v.tagName;return v.isContentEditable||z==="INPUT"||z==="SELECT"||z==="TEXTAREA"}const w=M(!1);dt("k",p=>{(p.ctrlKey||p.metaKey)&&(p.preventDefault(),w.value=!0)}),dt("/",p=>{h(p)||(p.preventDefault(),w.value=!0)});const $="local";return(p,v)=>{var z;return n(),c("div",ks,[o($)==="local"?(n(),c(T,{key:0},[w.value?(n(),m(o(e),{key:0,onClose:v[0]||(v[0]=L=>w.value=!1)})):g("",!0),r("div",_s,[k($t,{onClick:v[1]||(v[1]=L=>w.value=!0)})])],64)):o($)==="algolia"?(n(),c(T,{key:1},[s.value?(n(),m(o(i),{key:0,algolia:((z=o(l).search)==null?void 0:z.options)??o(l).algolia,onVnodeBeforeMount:v[2]||(v[2]=L=>a.value=!0)},null,8,["algolia"])):g("",!0),a.value?g("",!0):(n(),c("div",bs,[k($t,{onClick:f})]))],64)):g("",!0)])}}}),Ls=y({__name:"VPNavBarSocialLinks",setup(t){const{theme:e}=P();return(i,l)=>o(e).socialLinks?(n(),m(bt,{key:0,class:"VPNavBarSocialLinks",links:o(e).socialLinks},null,8,["links"])):g("",!0)}}),zs=_(Ls,[["__scopeId","data-v-346d844a"]]),Ps=["href","rel","target"],Ms=["innerHTML"],Ss={key:2},Vs=y({__name:"VPNavBarTitle",setup(t){const{site:e,theme:i}=P(),{hasSidebar:l}=O(),{currentLang:s}=X(),a=b(()=>{var h;return typeof i.value.logoLink=="string"?i.value.logoLink:(h=i.value.logoLink)==null?void 0:h.link}),f=b(()=>{var h;return typeof i.value.logoLink=="string"||(h=i.value.logoLink)==null?void 0:h.rel}),x=b(()=>{var h;return typeof i.value.logoLink=="string"||(h=i.value.logoLink)==null?void 0:h.target});return(h,w)=>(n(),c("div",{class:C(["VPNavBarTitle",{"has-sidebar":o(l)}])},[r("a",{class:"title",href:a.value??o(mt)(o(s).link),rel:f.value,target:x.value},[d(h.$slots,"nav-bar-title-before",{},void 0,!0),o(i).logo?(n(),m(tt,{key:0,class:"logo",image:o(i).logo},null,8,["image"])):g("",!0),o(i).siteTitle?(n(),c("span",{key:1,innerHTML:o(i).siteTitle},null,8,Ms)):o(i).siteTitle===void 0?(n(),c("span",Ss,S(o(e).title),1)):g("",!0),d(h.$slots,"nav-bar-title-after",{},void 0,!0)],8,Ps)],2))}}),Cs=_(Vs,[["__scopeId","data-v-4e930c0f"]]),Ts={class:"items"},Ns={class:"title"},Is=y({__name:"VPNavBarTranslations",setup(t){const{theme:e}=P(),{localeLinks:i,currentLang:l}=X({correspondingLink:!0});return(s,a)=>o(i).length&&o(l).label?(n(),m(_t,{key:0,class:"VPNavBarTranslations",icon:"vpi-languages",label:o(e).langMenuLabel||"Change language"},{default:u(()=>[r("div",Ts,[r("p",Ns,S(o(l).label),1),(n(!0),c(T,null,I(o(i),f=>(n(),m(nt,{key:f.link,item:f},null,8,["item"]))),128))])]),_:1},8,["label"])):g("",!0)}}),As=_(Is,[["__scopeId","data-v-c320e5d9"]]),Hs={class:"wrapper"},Bs={class:"container"},Es={class:"title"},Fs={class:"content"},Ds={class:"content-body"},Gs=y({__name:"VPNavBar",props:{isScreenOpen:{type:Boolean}},emits:["toggle-screen"],setup(t){const e=t,{y:i}=Tt(),{hasSidebar:l}=O(),{frontmatter:s}=P(),a=M({});return vt(()=>{a.value={"has-sidebar":l.value,home:s.value.layout==="home",top:i.value===0,"screen-open":e.isScreenOpen}}),(f,x)=>(n(),c("div",{class:C(["VPNavBar",a.value])},[r("div",Hs,[r("div",Bs,[r("div",Es,[k(Cs,null,{"nav-bar-title-before":u(()=>[d(f.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":u(()=>[d(f.$slots,"nav-bar-title-after",{},void 0,!0)]),_:3})]),r("div",Fs,[r("div",Ds,[d(f.$slots,"nav-bar-content-before",{},void 0,!0),k($s,{class:"search"}),k(gs,{class:"menu"}),k(As,{class:"translations"}),k(Ll,{class:"appearance"}),k(zs,{class:"social-links"}),k(os,{class:"extra"}),d(f.$slots,"nav-bar-content-after",{},void 0,!0),k(fs,{class:"hamburger",active:t.isScreenOpen,onClick:x[0]||(x[0]=h=>f.$emit("toggle-screen"))},null,8,["active"])])])])]),x[1]||(x[1]=r("div",{class:"divider"},[r("div",{class:"divider-line"})],-1))],2))}}),Os=_(Gs,[["__scopeId","data-v-e484c5ca"]]),Us={key:0,class:"VPNavScreenAppearance"},Zs={class:"text"},js=y({__name:"VPNavScreenAppearance",setup(t){const{site:e,theme:i}=P();return(l,s)=>o(e).appearance&&o(e).appearance!=="force-dark"&&o(e).appearance!=="force-auto"?(n(),c("div",Us,[r("p",Zs,S(o(i).darkModeSwitchLabel||"Appearance"),1),k(wt)])):g("",!0)}}),Ws=_(js,[["__scopeId","data-v-6b694d0f"]]),qs=["innerHTML"],Ks=y({__name:"VPNavScreenMenuLink",props:{item:{}},setup(t){const e=it("close-screen");return(i,l)=>(n(),m(F,{class:"VPNavScreenMenuLink",href:t.item.link,target:t.item.target,rel:t.item.rel,"no-icon":t.item.noIcon,onClick:o(e)},{default:u(()=>[r("span",{innerHTML:t.item.text},null,8,qs)]),_:1},8,["href","target","rel","no-icon","onClick"]))}}),Rs=_(Ks,[["__scopeId","data-v-7e513513"]]),Js=["innerHTML"],Ys=y({__name:"VPNavScreenMenuGroupLink",props:{item:{}},setup(t){const e=it("close-screen");return(i,l)=>(n(),m(F,{class:"VPNavScreenMenuGroupLink",href:t.item.link,target:t.item.target,rel:t.item.rel,"no-icon":t.item.noIcon,onClick:o(e)},{default:u(()=>[r("span",{innerHTML:t.item.text},null,8,Js)]),_:1},8,["href","target","rel","no-icon","onClick"]))}}),Gt=_(Ys,[["__scopeId","data-v-d4e57239"]]),Xs={class:"VPNavScreenMenuGroupSection"},Qs={key:0,class:"title"},tn=y({__name:"VPNavScreenMenuGroupSection",props:{text:{},items:{}},setup(t){return(e,i)=>(n(),c("div",Xs,[t.text?(n(),c("p",Qs,S(t.text),1)):g("",!0),(n(!0),c(T,null,I(t.items,l=>(n(),m(Gt,{key:l.text,item:l},null,8,["item"]))),128))]))}}),en=_(tn,[["__scopeId","data-v-48faf837"]]),ln=["aria-controls","aria-expanded"],sn=["innerHTML"],nn=["id"],on={key:0,class:"item"},an={key:1,class:"item"},rn={key:2,class:"group"},fn=y({__name:"VPNavScreenMenuGroup",props:{text:{},items:{}},setup(t){const e=t,i=M(!1),l=b(()=>`NavScreenGroup-${e.text.replace(" ","-").toLowerCase()}`);function s(){i.value=!i.value}return(a,f)=>(n(),c("div",{class:C(["VPNavScreenMenuGroup",{open:i.value}])},[r("button",{class:"button","aria-controls":l.value,"aria-expanded":i.value,onClick:s},[r("span",{class:"button-text",innerHTML:t.text},null,8,sn),f[0]||(f[0]=r("span",{class:"vpi-plus button-icon"},null,-1))],8,ln),r("div",{id:l.value,class:"items"},[(n(!0),c(T,null,I(t.items,x=>(n(),c(T,{key:JSON.stringify(x)},["link"in x?(n(),c("div",on,[k(Gt,{item:x},null,8,["item"])])):"component"in x?(n(),c("div",an,[(n(),m(E(x.component),Z({ref_for:!0},x.props,{"screen-menu":""}),null,16))])):(n(),c("div",rn,[k(en,{text:x.text,items:x.items},null,8,["text","items"])]))],64))),128))],8,nn)],2))}}),cn=_(fn,[["__scopeId","data-v-4dc46d8f"]]),dn={key:0,class:"VPNavScreenMenu"},xn=y({__name:"VPNavScreenMenu",setup(t){const{theme:e}=P();return(i,l)=>o(e).nav?(n(),c("nav",dn,[(n(!0),c(T,null,I(o(e).nav,s=>(n(),c(T,{key:JSON.stringify(s)},["link"in s?(n(),m(Rs,{key:0,item:s},null,8,["item"])):"component"in s?(n(),m(E(s.component),Z({key:1,ref_for:!0},s.props,{"screen-menu":""}),null,16)):(n(),m(cn,{key:2,text:s.text||"",items:s.items},null,8,["text","items"]))],64))),128))])):g("",!0)}}),hn=y({__name:"VPNavScreenSocialLinks",setup(t){const{theme:e}=P();return(i,l)=>o(e).socialLinks?(n(),m(bt,{key:0,class:"VPNavScreenSocialLinks",links:o(e).socialLinks},null,8,["links"])):g("",!0)}}),un={class:"list"},yn=y({__name:"VPNavScreenTranslations",setup(t){const{localeLinks:e,currentLang:i}=X({correspondingLink:!0}),l=M(!1);function s(){l.value=!l.value}return(a,f)=>o(e).length&&o(i).label?(n(),c("div",{key:0,class:C(["VPNavScreenTranslations",{open:l.value}])},[r("button",{class:"title",onClick:s},[f[0]||(f[0]=r("span",{class:"vpi-languages icon lang"},null,-1)),D(" "+S(o(i).label)+" ",1),f[1]||(f[1]=r("span",{class:"vpi-chevron-down icon chevron"},null,-1))]),r("ul",un,[(n(!0),c(T,null,I(o(e),x=>(n(),c("li",{key:x.link,class:"item"},[k(F,{class:"link",href:x.link},{default:u(()=>[D(S(x.text),1)]),_:2},1032,["href"])]))),128))])],2)):g("",!0)}}),gn=_(yn,[["__scopeId","data-v-990fae88"]]),vn={class:"container"},mn=y({__name:"VPNavScreen",props:{open:{type:Boolean}},setup(t){const e=M(null),i=Nt(lt?document.body:null);return(l,s)=>(n(),m(R,{name:"fade",onEnter:s[0]||(s[0]=a=>i.value=!0),onAfterLeave:s[1]||(s[1]=a=>i.value=!1)},{default:u(()=>[t.open?(n(),c("div",{key:0,class:"VPNavScreen",ref_key:"screen",ref:e,id:"VPNavScreen"},[r("div",vn,[d(l.$slots,"nav-screen-content-before",{},void 0,!0),k(xn,{class:"menu"}),k(gn,{class:"translations"}),k(Ws,{class:"appearance"}),k(hn,{class:"social-links"}),d(l.$slots,"nav-screen-content-after",{},void 0,!0)])],512)):g("",!0)]),_:3}))}}),pn=_(mn,[["__scopeId","data-v-95402029"]]),wn={key:0,class:"VPNav"},kn=y({__name:"VPNav",setup(t){const{isScreenOpen:e,closeScreen:i,toggleScreen:l}=yl(),{frontmatter:s}=P(),a=b(()=>s.value.navbar!==!1);return It("close-screen",i),J(()=>{lt&&document.documentElement.classList.toggle("hide-nav",!a.value)}),(f,x)=>a.value?(n(),c("header",wn,[k(Os,{"is-screen-open":o(e),onToggleScreen:o(l)},{"nav-bar-title-before":u(()=>[d(f.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":u(()=>[d(f.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":u(()=>[d(f.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":u(()=>[d(f.$slots,"nav-bar-content-after",{},void 0,!0)]),_:3},8,["is-screen-open","onToggleScreen"]),k(pn,{open:o(e)},{"nav-screen-content-before":u(()=>[d(f.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":u(()=>[d(f.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3},8,["open"])])):g("",!0)}}),_n=_(kn,[["__scopeId","data-v-e5ba47df"]]),bn=["role","tabindex"],$n={key:1,class:"items"},Ln=y({__name:"VPSidebarItem",props:{item:{},depth:{}},setup(t){const e=t,{collapsed:i,collapsible:l,isLink:s,isActiveLink:a,hasActiveLink:f,hasChildren:x,toggle:h}=pe(b(()=>e.item)),w=b(()=>x.value?"section":"div"),$=b(()=>s.value?"a":"div"),p=b(()=>x.value?e.depth+2===7?"p":`h${e.depth+2}`:"p"),v=b(()=>s.value?void 0:"button"),z=b(()=>[[`level-${e.depth}`],{collapsible:l.value},{collapsed:i.value},{"is-link":s.value},{"is-active":a.value},{"has-active":f.value}]);function L(N){"key"in N&&N.key!=="Enter"||!e.item.link&&h()}function V(){e.item.link&&h()}return(N,H)=>{const U=W("VPSidebarItem",!0);return n(),m(E(w.value),{class:C(["VPSidebarItem",z.value])},{default:u(()=>[t.item.text?(n(),c("div",Z({key:0,class:"item",role:v.value},Xt(t.item.items?{click:L,keydown:L}:{},!0),{tabindex:t.item.items&&0}),[H[1]||(H[1]=r("div",{class:"indicator"},null,-1)),t.item.link?(n(),m(F,{key:0,tag:$.value,class:"link",href:t.item.link,rel:t.item.rel,target:t.item.target},{default:u(()=>[(n(),m(E(p.value),{class:"text",innerHTML:t.item.text},null,8,["innerHTML"]))]),_:1},8,["tag","href","rel","target"])):(n(),m(E(p.value),{key:1,class:"text",innerHTML:t.item.text},null,8,["innerHTML"])),t.item.collapsed!=null&&t.item.items&&t.item.items.length?(n(),c("div",{key:2,class:"caret",role:"button","aria-label":"toggle section",onClick:V,onKeydown:Qt(V,["enter"]),tabindex:"0"},[...H[0]||(H[0]=[r("span",{class:"vpi-chevron-right caret-icon"},null,-1)])],32)):g("",!0)],16,bn)):g("",!0),t.item.items&&t.item.items.length?(n(),c("div",$n,[t.depth<5?(n(!0),c(T,{key:0},I(t.item.items,K=>(n(),m(U,{key:K.text,item:K,depth:t.depth+1},null,8,["item","depth"]))),128)):g("",!0)])):g("",!0)]),_:1},8,["class"])}}}),zn=_(Ln,[["__scopeId","data-v-252b2cc7"]]),Pn=y({__name:"VPSidebarGroup",props:{items:{}},setup(t){const e=M(!0);let i=null;return B(()=>{i=setTimeout(()=>{i=null,e.value=!1},300)}),st(()=>{i!=null&&(clearTimeout(i),i=null)}),(l,s)=>(n(!0),c(T,null,I(t.items,a=>(n(),c("div",{key:a.text,class:C(["group",{"no-transition":e.value}])},[k(zn,{item:a,depth:0},null,8,["item"])],2))),128))}}),Mn=_(Pn,[["__scopeId","data-v-06da47f7"]]),Sn={class:"nav",id:"VPSidebarNav","aria-labelledby":"sidebar-aria-label",tabindex:"-1"},Vn=y({__name:"VPSidebar",props:{open:{type:Boolean}},setup(t){const{sidebarGroups:e,hasSidebar:i}=O(),l=t,s=M(null),a=Nt(lt?document.body:null);G([l,s],()=>{var x;l.open?(a.value=!0,(x=s.value)==null||x.focus()):a.value=!1},{immediate:!0,flush:"post"});const f=M(0);return G(e,()=>{f.value+=1},{deep:!0}),(x,h)=>o(i)?(n(),c("aside",{key:0,class:C(["VPSidebar",{open:t.open}]),ref_key:"navEl",ref:s,onClick:h[0]||(h[0]=te(()=>{},["stop"]))},[h[2]||(h[2]=r("div",{class:"curtain"},null,-1)),r("nav",Sn,[h[1]||(h[1]=r("span",{class:"visually-hidden",id:"sidebar-aria-label"}," Sidebar Navigation ",-1)),d(x.$slots,"sidebar-nav-before",{},void 0,!0),(n(),m(Mn,{items:o(e),key:f.value},null,8,["items"])),d(x.$slots,"sidebar-nav-after",{},void 0,!0)])],2)):g("",!0)}}),Cn=_(Vn,[["__scopeId","data-v-5dc9f844"]]),Tn=y({__name:"VPSkipLink",setup(t){const{theme:e}=P(),i=Y(),l=M();G(()=>i.path,()=>l.value.focus());function s({target:a}){const f=document.getElementById(decodeURIComponent(a.hash).slice(1));if(f){const x=()=>{f.removeAttribute("tabindex"),f.removeEventListener("blur",x)};f.setAttribute("tabindex","-1"),f.addEventListener("blur",x),f.focus(),window.scrollTo(0,0)}}return(a,f)=>(n(),c(T,null,[r("span",{ref_key:"backToTop",ref:l,tabindex:"-1"},null,512),r("a",{href:"#VPContent",class:"VPSkipLink visually-hidden",onClick:s},S(o(e).skipToContentLabel||"Skip to content"),1)],64))}}),Nn=_(Tn,[["__scopeId","data-v-9813267a"]]),In=y({__name:"Layout",setup(t){const{isOpen:e,open:i,close:l}=O(),s=Y();G(()=>s.path,l),me(e,l);const{frontmatter:a}=P(),f=ee(),x=b(()=>!!f["home-hero-image"]);return It("hero-image-slot-exists",x),(h,w)=>{const $=W("Content");return o(a).layout!==!1?(n(),c("div",{key:0,class:C(["Layout",o(a).pageClass])},[d(h.$slots,"layout-top",{},void 0,!0),k(Nn),k(ne,{class:"backdrop",show:o(e),onClick:o(l)},null,8,["show","onClick"]),k(_n,null,{"nav-bar-title-before":u(()=>[d(h.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":u(()=>[d(h.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":u(()=>[d(h.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":u(()=>[d(h.$slots,"nav-bar-content-after",{},void 0,!0)]),"nav-screen-content-before":u(()=>[d(h.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":u(()=>[d(h.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3}),k(ul,{open:o(e),onOpenMenu:o(i)},null,8,["open","onOpenMenu"]),k(Cn,{open:o(e)},{"sidebar-nav-before":u(()=>[d(h.$slots,"sidebar-nav-before",{},void 0,!0)]),"sidebar-nav-after":u(()=>[d(h.$slots,"sidebar-nav-after",{},void 0,!0)]),_:3},8,["open"]),k(Xi,null,{"page-top":u(()=>[d(h.$slots,"page-top",{},void 0,!0)]),"page-bottom":u(()=>[d(h.$slots,"page-bottom",{},void 0,!0)]),"not-found":u(()=>[d(h.$slots,"not-found",{},void 0,!0)]),"home-hero-before":u(()=>[d(h.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":u(()=>[d(h.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":u(()=>[d(h.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":u(()=>[d(h.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":u(()=>[d(h.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":u(()=>[d(h.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":u(()=>[d(h.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":u(()=>[d(h.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":u(()=>[d(h.$slots,"home-features-after",{},void 0,!0)]),"doc-footer-before":u(()=>[d(h.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":u(()=>[d(h.$slots,"doc-before",{},void 0,!0)]),"doc-after":u(()=>[d(h.$slots,"doc-after",{},void 0,!0)]),"doc-top":u(()=>[d(h.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":u(()=>[d(h.$slots,"doc-bottom",{},void 0,!0)]),"aside-top":u(()=>[d(h.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":u(()=>[d(h.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":u(()=>[d(h.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":u(()=>[d(h.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":u(()=>[d(h.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":u(()=>[d(h.$slots,"aside-ads-after",{},void 0,!0)]),_:3}),k(ll),d(h.$slots,"layout-bottom",{},void 0,!0)],2)):(n(),m($,{key:1}))}}}),An=_(In,[["__scopeId","data-v-d52dd4c4"]]),Ot={Layout:An,enhanceApp:({app:t})=>{t.component("Badge",ie)}},Hn={class:"hs-showcase"},Bn={key:"loading",class:"hs-loading"},En={class:"hs-loading-card"},Fn={class:"hs-loading-bar"},Dn={class:"hs-loading-pct"},Gn={key:"update",class:"hs-update"},On={class:"hs-update-card"},Un={class:"hs-update-bar"},Zn={class:"hs-update-pct"},jn={class:"hs-update-steps"},Wn={key:"screen",class:"hs-stage"},qn={key:"control",class:"hs-stage"},Kn={key:"final",class:"hs-final"},Lt=`
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
</svg>`,Rn=`
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
</svg>`,zt=`
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
</svg>`,Pt=`
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
</svg>`,Jn=y({__name:"HomeShowcase",setup(t){const e=M("loading"),i=M(0),l=M(0),s=["下载更新包","校验完整性","安装核心组件","配置本地服务","界面初始化"],a=[];let f,x;const h=()=>{a.forEach(p=>window.clearTimeout(p)),a.length=0,f&&window.clearInterval(f),x&&window.clearInterval(x)},w=()=>{x&&window.clearInterval(x),e.value="update",l.value=0,x=window.setInterval(()=>{l.value=Math.min(100,l.value+2)},45),a.push(window.setTimeout(()=>{x&&window.clearInterval(x),e.value="screen"},3200)),a.push(window.setTimeout(()=>{e.value="control"},9600)),a.push(window.setTimeout(()=>{e.value="final"},16e3))},$=()=>{window.removeEventListener("load",$),f&&window.clearInterval(f);const p=window.setInterval(()=>{i.value=Math.min(i.value+7,100),i.value>=100&&(window.clearInterval(p),a.push(window.setTimeout(w,420)))},28)};return B(()=>{f=window.setInterval(()=>{i.value=Math.min(i.value+Math.random()*9+3,88)},160),document.readyState==="complete"?$():window.addEventListener("load",$)}),st(h),(p,v)=>(n(),c("div",Hn,[r("button",{class:"hs-replay",type:"button",onClick:w},"↻ 重播动画"),k(R,{name:"hs-fade",mode:"out-in"},{default:u(()=>[e.value==="loading"?(n(),c("div",Bn,[r("div",En,[r("div",{class:"hs-loading-logo",innerHTML:Lt}),v[0]||(v[0]=r("p",{class:"hs-loading-text"},"正在加载页面…",-1)),r("div",Fn,[r("div",{class:"hs-loading-fill",style:A({width:i.value+"%"})},null,4)]),r("div",Dn,S(Math.round(i.value))+"%",1)])])):e.value==="update"?(n(),c("div",Gn,[r("div",On,[r("div",{class:"hs-update-logo",innerHTML:Lt}),v[1]||(v[1]=r("h3",{class:"hs-update-title"},"正在更新 AgoraIn",-1)),v[2]||(v[2]=r("p",{class:"hs-update-sub"},"v2.7 → v2.8 · 课堂签到打卡系统",-1)),r("div",Un,[r("div",{class:"hs-update-fill",style:A({width:l.value+"%"})},null,4)]),r("div",Zn,S(l.value)+"%",1),r("div",jn,[(n(),c(T,null,I(s,(z,L)=>r("span",{key:z,class:C({done:l.value>=(L+1)*20})},S(l.value>=(L+1)*20?"✓":"·")+" "+S(z),3)),64))])])])):e.value==="screen"?(n(),c("div",Wn,[v[3]||(v[3]=r("div",{class:"hs-stage-tag"},[r("span",{class:"hs-dot"}),D("大屏模式 · 课堂签到打卡")],-1)),r("div",{innerHTML:zt})])):e.value==="control"?(n(),c("div",qn,[v[4]||(v[4]=r("div",{class:"hs-stage-tag"},[r("span",{class:"hs-dot"}),D("控制模式 · 课时划消与排课 + 集控平台")],-1)),r("div",{innerHTML:Pt})])):(n(),c("div",Kn,[r("div",{class:"hs-final-top"},[r("div",{class:"hs-final-icon",innerHTML:Rn}),v[5]||(v[5]=r("div",{class:"hs-final-title"},"全新界面已就绪",-1))]),r("div",{class:"hs-final-row"},[r("div",{class:"hs-final-card",style:{"--d":"0s"}},[r("div",{innerHTML:zt}),v[6]||(v[6]=r("div",{class:"hs-final-name"},"大屏模式",-1))]),r("div",{class:"hs-final-card",style:{"--d":".25s"}},[r("div",{innerHTML:Pt}),v[7]||(v[7]=r("div",{class:"hs-final-name"},"控制模式",-1))])])]))]),_:1})]))}}),Yn=y({__name:"Layout",setup(t){const e=Y(),{site:i,theme:l}=Mt(),s=b(()=>e.path==="/"),a={text:"项目",items:[{text:"AgoraIn 桌面端",link:"/"},{text:"移动多端应用",link:"/miniprogram/"}]},f=[{...a,activeMatch:"^/(?!miniprogram/)"},{text:"下载",link:"/download"},{text:"使用指南",items:[{text:"快速开始",link:"/guide"},{text:"功能特性",link:"/features"},{text:"API 文档",link:"/api"},{text:"部署指南",link:"/deploy"},{text:"常见问题",link:"/faq"}]},{text:"旧版文档（v2.7）",link:"/v2.7/"},{text:"v2.8",items:[{text:"更新日志",link:"https://github.com/liuyuchen012/AgoraIn/releases"},{text:"GitHub 仓库",link:"https://github.com/liuyuchen012/AgoraIn"}]}],x=[{...a,activeMatch:"^/miniprogram/"},{text:"下载",link:"/download"},{text:"功能特性",link:"/miniprogram/features"},{text:"快速开始",link:"/miniprogram/quickstart"},{text:"目录结构",link:"/miniprogram/structure"}];return J(()=>{const h=e.path.startsWith("/miniprogram/");l.value.nav=h?x:f,i.value.title=h?"移动多端应用 | 课堂管理与演示":"AgoraIn | 课堂签到打卡系统"}),(h,w)=>(n(),m(o(Ot).Layout,null,{"home-hero-image":u(()=>[s.value?(n(),m(Jn,{key:0})):g("",!0)]),_:1}))}}),Xn=`
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
</svg>`,Qn=`
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
</svg>`,Ut=`
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
</svg>`,to=`
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
</svg>`,eo=1920,io=1080;function ft(t,e,i){const l=eo*(.5-t/100*i),s=io*(.5-e/100*i);return`translate(${l.toFixed(1)}px, ${s.toFixed(1)}px) scale(${i.toFixed(3)})`}function lo(t,e){if(t<=e[0][0])return ft(e[0][1],e[0][2],e[0][3]);for(let l=0;l<e.length-1;l++){const[s,a,f,x]=e[l],[h,w,$,p]=e[l+1];if(t<=h){const v=Math.min(1,Math.max(0,(t-s)/(h-s))),z=v*v*(3-2*v);return ft(a+(w-a)*z,f+($-f)*z,x+(p-x)*z)}}const i=e[e.length-1];return ft(i[1],i[2],i[3])}function q(t){const e=M(0);let i;return B(()=>{i=window.setInterval(()=>{e.value+=.1},100)}),st(()=>{i!==void 0&&window.clearInterval(i)}),{lens:b(()=>lo(e.value,t))}}const so=["innerHTML"],no=y({__name:"IntroStage",setup(t){const{lens:e}=q([[0,50,50,1],[12,50,50,1.18]]);return(i,l)=>(n(),c("section",{class:"vstage vs-intro",style:A({transform:o(e)})},[r("div",{class:"vs-intro-logo",innerHTML:o(Ut)},null,8,so)],4))}}),oo={class:"vs-upd-card"},ao=["innerHTML"],ro=y({__name:"UpdateStage",setup(t){const{lens:e}=q([[0,50,50,1],[3,50,45,1.9],[10,50,45,1.9],[14,50,50,1],[18,50,50,1]]);return(i,l)=>(n(),c("section",{class:"vstage",style:A({transform:o(e)})},[r("div",oo,[r("div",{class:"vs-upd-logo",innerHTML:o(Ut)},null,8,ao),l[0]||(l[0]=r("div",{class:"vs-upd-bar"},[r("div",{class:"vs-upd-fill"})],-1))])],4))}}),fo={class:"vs-scr-wrap"},co=["innerHTML"],xo=y({__name:"ScreenStage",setup(t){const{lens:e}=q([[0,50,50,1],[5,50,50,1],[7,61.2,40.9,2],[12,61.2,40.9,2],[13.5,34,35.6,2.6],[17,34,35.6,2.6],[18.5,61.1,29.1,2.9],[21,61.1,29.1,2.9],[23,50,50,1],[25,50,50,1]]);return(i,l)=>(n(),c("section",{class:"vstage vs-scr",style:A({transform:o(e)})},[r("div",fo,[r("div",{innerHTML:o(Xn)},null,8,co)])],4))}}),ho={class:"vs-ctl-wrap"},uo=["innerHTML"],yo=y({__name:"ControlStage",setup(t){const{lens:e}=q([[0,50,50,1],[4.5,50,50,1],[6.5,60.2,30.6,2.2],[10.5,60.2,30.6,2.2],[12,33.2,41.9,2.4],[15.5,33.2,41.9,2.4],[17,52.6,56.1,1.9],[20.5,52.6,56.1,1.9],[22,73.4,58.4,2.2],[23.5,73.4,58.4,2.2],[24.5,50,50,1],[25,50,50,1]]);return(i,l)=>(n(),c("section",{class:"vstage vs-ctl",style:A({transform:o(e)})},[r("div",ho,[r("div",{innerHTML:o(Qn)},null,8,uo)])],4))}}),go=y({__name:"ServerStage",setup(t){const{lens:e}=q([[0,50,50,1],[3.5,50,50,1],[5.5,20,28,2.8],[9,20,28,2.8],[10.5,58,45,2.2],[14,58,45,2.2],[15.5,45,50,1.9],[18,45,50,1.9],[20,50,50,1]]);return(i,l)=>(n(),c("section",{class:"vstage vs-srv",style:A({transform:o(e)})},[...l[0]||(l[0]=[At('<div class="vs-srv-stage"><svg class="vs-srv-lines" viewBox="0 0 1000 562.5" preserveAspectRatio="none"><line class="vs-srv-line" x1="150" y1="90" x2="640" y2="280"></line><line class="vs-srv-line" x1="150" y1="281" x2="640" y2="281"></line><line class="vs-srv-line" x1="150" y1="472" x2="640" y2="281"></line></svg><div class="vs-srv-node nd-a"><svg viewBox="0 0 24 24" width="52" height="52" fill="none" stroke="#60a5fa" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2.5" y="3.5" width="19" height="14" rx="2.5"></rect><path d="M9.5 21h5M12 17.5V21"></path></svg></div><div class="vs-srv-node nd-b"><svg viewBox="0 0 24 24" width="52" height="52" fill="none" stroke="#60a5fa" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2.5" y="3.5" width="19" height="14" rx="2.5"></rect><path d="M9.5 21h5M12 17.5V21"></path></svg></div><div class="vs-srv-node nd-c"><svg viewBox="0 0 24 24" width="52" height="52" fill="none" stroke="#60a5fa" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="7" y="2.5" width="10" height="19" rx="2.5"></rect><path d="M10.5 18.5h3"></path></svg></div><div class="vs-srv-core"><svg viewBox="0 0 48 48" width="96" height="96" aria-hidden="true"><rect x="6" y="6" width="36" height="14" rx="4" fill="#38bdf8"></rect><rect x="6" y="26" width="36" height="14" rx="4" fill="#38bdf8"></rect><circle cx="14" cy="13" r="2.4" fill="#0b1220"></circle><circle cx="22" cy="13" r="2.4" fill="#0b1220"></circle><circle cx="14" cy="33" r="2.4" fill="#0b1220"></circle><circle cx="22" cy="33" r="2.4" fill="#0b1220"></circle><rect x="30" y="11" width="8" height="4" rx="2" fill="#fff"></rect><rect x="30" y="31" width="8" height="4" rx="2" fill="#fff"></rect></svg></div></div>',1)])],4))}}),vo=y({__name:"MobileStage",setup(t){const{lens:e}=q([[0,50,45,1],[3,50,45,1],[5,38,45,2.2],[8,38,45,2.2],[10,62,45,2.2],[13,62,45,2.2],[14.5,50,66,2.5],[16,50,45,1]]);return(i,l)=>(n(),c("section",{class:"vstage",style:A({transform:o(e)})},[...l[0]||(l[0]=[At('<div class="vs-mobile" data-v-8397cf82><div class="vs-mobile-icons" data-v-8397cf82><div class="vs-mobile-icon android-icon" data-v-8397cf82><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-v-8397cf82><path d="M17.523 15.341c-.5 0-.906-.405-.906-.905s.406-.906.906-.906c.5 0 .906.406.906.906s-.406.905-.906.905Zm-11.046 0c-.5 0-.906-.405-.906-.905s.406-.906.906-.906c.5 0 .906.406.906.906s-.406.905-.906.905Zm11.41-6.168 1.73-2.995a.408.408 0 0 0-.706-.408l-1.752 3.033c-1.316-.602-2.797-.946-4.37-.946-1.573 0-3.055.344-4.37.946L6.09 5.77a.408.408 0 0 0-.706.408l1.73 2.995C4.577 10.871 2.75 13.78 2.75 17.104h18.5c0-3.324-1.827-6.233-4.363-7.931ZM6.167 18.917c0 .506.41.916.916.916h.917v2.75c0 .76.615 1.375 1.375 1.375s1.375-.615 1.375-1.375v-2.75h2.25v2.75c0 .76.615 1.375 1.375 1.375s1.375-.615 1.375-1.375v-2.75h.917a.917.917 0 0 0 .916-.916V8.583H6.167v10.334Z" data-v-8397cf82></path></svg></div><div class="vs-mobile-icon web-icon" data-v-8397cf82><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-v-8397cf82><circle cx="12" cy="12" r="10" data-v-8397cf82></circle><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" data-v-8397cf82></path></svg></div></div><div class="vs-mobile-sync" data-v-8397cf82><span class="vs-sync-dot" data-v-8397cf82></span></div></div>',1)])],4))}}),mo=_(vo,[["__scopeId","data-v-8397cf82"]]),po=["innerHTML"],wo=y({__name:"OutroStage",setup(t){const{lens:e}=q([[0,50,50,1],[14,50,50,1.18]]);return(i,l)=>(n(),c("section",{class:"vstage vs-out",style:A({transform:o(e)})},[r("div",{class:"vs-out-logo",innerHTML:o(to)},null,8,po)],4))}}),ko={class:"vshow"},_o={class:"vshow-particles","aria-hidden":"true"},bo={class:"vshow-stage"},$o={key:0,class:"vshow-tool"},Lo={class:"vshow-clock"},zo=1920,Po=1080,Mo=y({__name:"VideoShowcase",setup(t){const e=[{id:"intro",dur:12},{id:"update",dur:18},{id:"screen",dur:25},{id:"control",dur:25},{id:"server",dur:20},{id:"mobile",dur:16},{id:"outro",dur:14}],i=e.reduce((L,V)=>L+V.dur,0),l=[];let s=0;e.forEach(L=>{l.push(s),s+=L.dur});const a=M(0),f=M(0),x=M(!0),h=[];let w;const $=M(1);function p(){const L=window.innerWidth,V=window.innerHeight;$.value=Math.min(L/zo,V/Po)}const v=L=>`${String(Math.floor(L/60)).padStart(2,"0")}:${String(Math.floor(L%60)).padStart(2,"0")}`,z=()=>{h.forEach(L=>window.clearTimeout(L)),h.length=0,w&&window.clearInterval(w),a.value=0,f.value=0,w=window.setInterval(()=>{f.value=Math.min(f.value+1,i)},1e3),e.forEach((L,V)=>{V!==0&&h.push(window.setTimeout(()=>{a.value=V},l[V]*1e3))})};return B(()=>{z(),p(),window.addEventListener("resize",p)}),st(()=>{h.forEach(L=>window.clearTimeout(L)),w&&window.clearInterval(w),window.removeEventListener("resize",p)}),(L,V)=>(n(),c("div",ko,[V[1]||(V[1]=r("div",{class:"vshow-bg"},null,-1)),r("div",_o,[(n(),c(T,null,I(14,N=>r("i",{key:N,style:A({"--p-delay":N*.9+"s","--p-x":N*7.3%100+"%","--p-size":3+N%5*2+"px"})},null,4)),64))]),r("div",{class:"vshow-scale",style:A({transform:"scale("+$.value+")"})},[r("div",bo,[k(R,{name:"v-fade",mode:"out-in"},{default:u(()=>[a.value===0?(n(),m(no,{key:"intro"})):a.value===1?(n(),m(ro,{key:"update"})):a.value===2?(n(),m(xo,{key:"screen"})):a.value===3?(n(),m(yo,{key:"control"})):a.value===4?(n(),m(go,{key:"server"})):a.value===5?(n(),m(mo,{key:"mobile"})):(n(),m(wo,{key:"outro"}))]),_:1})])],4),x.value?(n(),c("div",$o,[r("span",Lo,S(v(f.value))+" / "+S(v(o(i))),1),r("button",{class:"vshow-btn",type:"button",onClick:z},"↻ 重播"),r("button",{class:"vshow-btn",type:"button",onClick:V[0]||(V[0]=N=>x.value=!1)},"隐藏")])):g("",!0)]))}}),Vo={extends:Ot,Layout:Yn,enhanceApp({app:t}){t.component("VideoShowcase",Mo)}};export{Vo as R,vs as c,P as u};
