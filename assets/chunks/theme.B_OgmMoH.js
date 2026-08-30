const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/VPLocalSearchBox.BpWEHGzI.js","assets/chunks/framework.Cs11k9ph.js"])))=>i.map(i=>d[i]);
import{d as g,c as d,r as h,n as _,o,a as q,t as C,b as k,w as u,T as st,e as p,_ as L,u as At,i as Qt,f as Xt,g as bt,h as P,j as n,k as a,l as et,m as gt,p as $,q as K,s as nt,v as O,x as _t,y as $t,z as te,A as ee,F as I,B as E,C as it,D as ct,E as b,G as Ht,H as Z,I as Bt,J as ot,K as Q,L as xt,M as ie,N as F,O as mt,P as Et,Q as Ft,R as ht,S as le,U as se,V as ne,W as Dt,X as Ot,Y as oe,Z as ae,$ as at,a0 as re,a1 as fe,a2 as Y,a3 as X,a4 as tt}from"./framework.Cs11k9ph.js";const de=g({__name:"VPBadge",props:{text:{},type:{default:"tip"}},setup(t){return(e,i)=>(o(),d("span",{class:_(["VPBadge",t.type])},[h(e.$slots,"default",{},()=>[q(C(t.text),1)])],2))}}),ce={key:0,class:"VPBackdrop"},xe=g({__name:"VPBackdrop",props:{show:{type:Boolean}},setup(t){return(e,i)=>(o(),k(st,{name:"fade"},{default:u(()=>[t.show?(o(),d("div",ce)):p("",!0)]),_:1}))}}),he=L(xe,[["__scopeId","data-v-c18d3459"]]),V=At;function ue(t,e){let i,l=!1;return()=>{i&&clearTimeout(i),l?i=setTimeout(t,e):(t(),(l=!0)&&setTimeout(()=>l=!1,e))}}function pt(t){return t.startsWith("/")?t:`/${t}`}function Lt(t){const{pathname:e,search:i,hash:l,protocol:s}=new URL(t,"http://a.com");if(Qt(t)||t.startsWith("#")||!s.startsWith("http")||!Xt(e))return t;const{site:r}=V(),f=e.endsWith("/")||e.endsWith(".html")?t:t.replace(/(?:(^\.+)\/)?.*$/,`$1${e.replace(/(\.md)?$/,r.value.cleanUrls?"":".html")}${i}${l}`);return bt(f)}function rt({correspondingLink:t=!1}={}){const{site:e,localeIndex:i,page:l,theme:s,hash:r}=V(),f=P(()=>{var x,w;return{label:(x=e.value.locales[i.value])==null?void 0:x.label,link:((w=e.value.locales[i.value])==null?void 0:w.link)||(i.value==="root"?"/":`/${i.value}/`)}});return{localeLinks:P(()=>Object.entries(e.value.locales).flatMap(([x,w])=>f.value.label===w.label?[]:{text:w.label,link:ve(w.link||(x==="root"?"/":`/${x}/`),s.value.i18nRouting!==!1&&t,l.value.relativePath.slice(f.value.link.length-1),!e.value.cleanUrls)+r.value})),currentLang:f}}function ve(t,e,i,l){return e?t.replace(/\/$/,"")+pt(i.replace(/(^|\/)index\.md$/,"$1").replace(/\.md$/,l?".html":"")):t}const ye={class:"NotFound"},ge={class:"code"},me={class:"title"},pe={class:"quote"},ke={class:"action"},we=["href","aria-label"],be=g({__name:"NotFound",setup(t){const{theme:e}=V(),{currentLang:i}=rt();return(l,s)=>{var r,f,c,x,w;return o(),d("div",ye,[n("p",ge,C(((r=a(e).notFound)==null?void 0:r.code)??"404"),1),n("h1",me,C(((f=a(e).notFound)==null?void 0:f.title)??"PAGE NOT FOUND"),1),s[0]||(s[0]=n("div",{class:"divider"},null,-1)),n("blockquote",pe,C(((c=a(e).notFound)==null?void 0:c.quote)??"But if you don't change your direction, and if you keep looking, you may end up where you are heading."),1),n("div",ke,[n("a",{class:"link",href:a(bt)(a(i).link),"aria-label":((x=a(e).notFound)==null?void 0:x.linkLabel)??"go to home"},C(((w=a(e).notFound)==null?void 0:w.linkText)??"Take me home"),9,we)])])}}}),_e=L(be,[["__scopeId","data-v-5bb079d4"]]);function Gt(t,e){if(Array.isArray(t))return ft(t);if(t==null)return[];e=pt(e);const i=Object.keys(t).sort((s,r)=>r.split("/").length-s.split("/").length).find(s=>e.startsWith(pt(s))),l=i?t[i]:[];return Array.isArray(l)?ft(l):ft(l.items,l.base)}function $e(t){const e=[];let i=0;for(const l in t){const s=t[l];if(s.items){i=e.push(s);continue}e[i]||e.push({items:[]}),e[i].items.push(s)}return e}function Le(t){const e=[];function i(l){for(const s of l)s.text&&s.link&&e.push({text:s.text,link:s.link,docFooterText:s.docFooterText}),s.items&&i(s.items)}return i(t),e}function kt(t,e){return Array.isArray(e)?e.some(i=>kt(t,i)):et(t,e.link)?!0:e.items?kt(t,e.items):!1}function ft(t,e){return[...t].map(i=>{const l={...i},s=l.base||e;return s&&l.link&&(l.link=s+l.link),l.items&&(l.items=ft(l.items,s)),l})}function R(){const{frontmatter:t,page:e,theme:i}=V(),l=gt("(min-width: 960px)"),s=$(!1),r=P(()=>{const T=i.value.sidebar,N=e.value.relativePath;return T?Gt(T,N):[]}),f=$(r.value);K(r,(T,N)=>{JSON.stringify(T)!==JSON.stringify(N)&&(f.value=r.value)});const c=P(()=>t.value.sidebar!==!1&&f.value.length>0&&t.value.layout!=="home"),x=P(()=>w?t.value.aside==null?i.value.aside==="left":t.value.aside==="left":!1),w=P(()=>t.value.layout==="home"?!1:t.value.aside!=null?!!t.value.aside:i.value.aside!==!1),z=P(()=>c.value&&l.value),y=P(()=>c.value?$e(f.value):[]);function m(){s.value=!0}function S(){s.value=!1}function M(){s.value?S():m()}return{isOpen:s,sidebar:f,sidebarGroups:y,hasSidebar:c,hasAside:w,leftAside:x,isSidebarEnabled:z,open:m,close:S,toggle:M}}function ze(t,e){let i;nt(()=>{i=t.value?document.activeElement:void 0}),O(()=>{window.addEventListener("keyup",l)}),_t(()=>{window.removeEventListener("keyup",l)});function l(s){s.key==="Escape"&&t.value&&(e(),i==null||i.focus())}}function Pe(t){const{page:e,hash:i}=V(),l=$(!1),s=P(()=>t.value.collapsed!=null),r=P(()=>!!t.value.link),f=$(!1),c=()=>{f.value=et(e.value.relativePath,t.value.link)};K([e,t,i],c),O(c);const x=P(()=>f.value?!0:t.value.items?kt(e.value.relativePath,t.value.items):!1),w=P(()=>!!(t.value.items&&t.value.items.length));nt(()=>{l.value=!!(s.value&&t.value.collapsed)}),$t(()=>{(f.value||x.value)&&(l.value=!1)});function z(){s.value&&(l.value=!l.value)}return{collapsed:l,collapsible:s,isLink:r,isActiveLink:f,hasActiveLink:x,hasChildren:w,toggle:z}}function Me(){const{hasSidebar:t}=R(),e=gt("(min-width: 960px)"),i=gt("(min-width: 1280px)");return{isAsideEnabled:P(()=>!i.value&&!e.value?!1:t.value?i.value:e.value)}}const Se=/\b(?:VPBadge|header-anchor|footnote-ref|ignore-header)\b/,wt=[];function Ut(t){return typeof t.outline=="object"&&!Array.isArray(t.outline)&&t.outline.label||t.outlineTitle||"On this page"}function zt(t){const e=[...document.querySelectorAll(".VPDoc :where(h1,h2,h3,h4,h5,h6)")].filter(i=>i.id&&i.hasChildNodes()).map(i=>{const l=Number(i.tagName[1]);return{element:i,title:Ve(i),link:"#"+i.id,level:l}});return Ce(e,t)}function Ve(t){let e="";for(const i of t.childNodes)if(i.nodeType===1){if(Se.test(i.className))continue;e+=i.textContent}else i.nodeType===3&&(e+=i.textContent);return e.trim()}function Ce(t,e){if(e===!1)return[];const i=(typeof e=="object"&&!Array.isArray(e)?e.level:e)||2,[l,s]=typeof i=="number"?[i,i]:i==="deep"?[2,6]:i;return Ie(t,l,s)}function Te(t,e){const{isAsideEnabled:i}=Me(),l=ue(r,100);let s=null;O(()=>{requestAnimationFrame(r),window.addEventListener("scroll",l)}),te(()=>{f(location.hash)}),_t(()=>{window.removeEventListener("scroll",l)});function r(){if(!i.value)return;const c=window.scrollY,x=window.innerHeight,w=document.body.offsetHeight,z=Math.abs(c+x-w)<1,y=wt.map(({element:S,link:M})=>({link:M,top:je(S)})).filter(({top:S})=>!Number.isNaN(S)).sort((S,M)=>S.top-M.top);if(!y.length){f(null);return}if(c<1){f(null);return}if(z){f(y[y.length-1].link);return}let m=null;for(const{link:S,top:M}of y){if(M>c+ee()+4)break;m=S}f(m)}function f(c){s&&s.classList.remove("active"),c==null?s=null:s=t.value.querySelector(`a[href="${decodeURIComponent(c)}"]`);const x=s;x?(x.classList.add("active"),e.value.style.top=x.offsetTop+39+"px",e.value.style.opacity="1"):(e.value.style.top="33px",e.value.style.opacity="0")}}function je(t){let e=0;for(;t!==document.body;){if(t===null)return NaN;e+=t.offsetTop,t=t.offsetParent}return e}function Ie(t,e,i){wt.length=0;const l=[],s=[];return t.forEach(r=>{const f={...r,children:[]};let c=s[s.length-1];for(;c&&c.level>=f.level;)s.pop(),c=s[s.length-1];if(f.element.classList.contains("ignore-header")||c&&"shouldIgnore"in c){s.push({level:f.level,shouldIgnore:!0});return}f.level>i||f.level<e||(wt.push({element:f.element,link:f.link}),c?c.children.push(f):l.push(f),s.push(f))}),l}const Ne=["href","title"],Ae=g({__name:"VPDocOutlineItem",props:{headers:{},root:{type:Boolean}},setup(t){function e({target:i}){const l=i.href.split("#")[1],s=document.getElementById(decodeURIComponent(l));s==null||s.focus({preventScroll:!0})}return(i,l)=>{const s=it("VPDocOutlineItem",!0);return o(),d("ul",{class:_(["VPDocOutlineItem",t.root?"root":"nested"])},[(o(!0),d(I,null,E(t.headers,({children:r,link:f,title:c})=>(o(),d("li",null,[n("a",{class:"outline-link",href:f,onClick:e,title:c},C(c),9,Ne),r!=null&&r.length?(o(),k(s,{key:0,headers:r},null,8,["headers"])):p("",!0)]))),256))],2)}}}),Zt=L(Ae,[["__scopeId","data-v-544a780c"]]),He={class:"content"},Be={"aria-level":"2",class:"outline-title",id:"doc-outline-aria-label",role:"heading"},Ee=g({__name:"VPDocAsideOutline",setup(t){const{frontmatter:e,theme:i}=V(),l=Ht([]);ct(()=>{l.value=zt(e.value.outline??i.value.outline)});const s=$(),r=$();return Te(s,r),(f,c)=>(o(),d("nav",{"aria-labelledby":"doc-outline-aria-label",class:_(["VPDocAsideOutline",{"has-outline":l.value.length>0}]),ref_key:"container",ref:s},[n("div",He,[n("div",{class:"outline-marker",ref_key:"marker",ref:r},null,512),n("div",Be,C(a(Ut)(a(i))),1),b(Zt,{headers:l.value,root:!0},null,8,["headers"])])],2))}}),Fe=L(Ee,[["__scopeId","data-v-fbb33dd0"]]),De={class:"VPDocAsideCarbonAds"},Oe=g({__name:"VPDocAsideCarbonAds",props:{carbonAds:{}},setup(t){const e=()=>null;return(i,l)=>(o(),d("div",De,[b(a(e),{"carbon-ads":t.carbonAds},null,8,["carbon-ads"])]))}}),Ge={class:"VPDocAside"},Ue=g({__name:"VPDocAside",setup(t){const{theme:e}=V();return(i,l)=>(o(),d("div",Ge,[h(i.$slots,"aside-top",{},void 0,!0),h(i.$slots,"aside-outline-before",{},void 0,!0),b(Fe),h(i.$slots,"aside-outline-after",{},void 0,!0),l[0]||(l[0]=n("div",{class:"spacer"},null,-1)),h(i.$slots,"aside-ads-before",{},void 0,!0),a(e).carbonAds?(o(),k(Oe,{key:0,"carbon-ads":a(e).carbonAds},null,8,["carbon-ads"])):p("",!0),h(i.$slots,"aside-ads-after",{},void 0,!0),h(i.$slots,"aside-bottom",{},void 0,!0)]))}}),Ze=L(Ue,[["__scopeId","data-v-5722d266"]]);function We(){const{theme:t,page:e}=V();return P(()=>{const{text:i="Edit this page",pattern:l=""}=t.value.editLink||{};let s;return typeof l=="function"?s=l(e.value):s=l.replace(/:path/g,e.value.filePath),{url:s,text:i}})}function qe(){const{page:t,theme:e,frontmatter:i}=V();return P(()=>{var w,z,y,m,S,M,T,N;const l=Gt(e.value.sidebar,t.value.relativePath),s=Le(l),r=Ke(s,B=>B.link.replace(/[?#].*$/,"")),f=r.findIndex(B=>et(t.value.relativePath,B.link)),c=((w=e.value.docFooter)==null?void 0:w.prev)===!1&&!i.value.prev||i.value.prev===!1,x=((z=e.value.docFooter)==null?void 0:z.next)===!1&&!i.value.next||i.value.next===!1;return{prev:c?void 0:{text:(typeof i.value.prev=="string"?i.value.prev:typeof i.value.prev=="object"?i.value.prev.text:void 0)??((y=r[f-1])==null?void 0:y.docFooterText)??((m=r[f-1])==null?void 0:m.text),link:(typeof i.value.prev=="object"?i.value.prev.link:void 0)??((S=r[f-1])==null?void 0:S.link)},next:x?void 0:{text:(typeof i.value.next=="string"?i.value.next:typeof i.value.next=="object"?i.value.next.text:void 0)??((M=r[f+1])==null?void 0:M.docFooterText)??((T=r[f+1])==null?void 0:T.text),link:(typeof i.value.next=="object"?i.value.next.link:void 0)??((N=r[f+1])==null?void 0:N.link)}}})}function Ke(t,e){const i=new Set;return t.filter(l=>{const s=e(l);return i.has(s)?!1:i.add(s)})}const W=g({__name:"VPLink",props:{tag:{},href:{},noIcon:{type:Boolean},target:{},rel:{}},setup(t){const e=t,i=P(()=>e.tag??(e.href?"a":"span")),l=P(()=>e.href&&Bt.test(e.href)||e.target==="_blank");return(s,r)=>(o(),k(Z(i.value),{class:_(["VPLink",{link:t.href,"vp-external-link-icon":l.value,"no-icon":t.noIcon}]),href:t.href?a(Lt)(t.href):void 0,target:t.target??(l.value?"_blank":void 0),rel:t.rel??(l.value?"noreferrer":void 0)},{default:u(()=>[h(s.$slots,"default")]),_:3},8,["class","href","target","rel"]))}}),Re={class:"VPLastUpdated"},Je=["datetime"],Ye=g({__name:"VPDocFooterLastUpdated",setup(t){const{theme:e,page:i,lang:l}=V(),s=P(()=>new Date(i.value.lastUpdated)),r=P(()=>s.value.toISOString()),f=$("");return O(()=>{nt(()=>{var c,x,w;f.value=new Intl.DateTimeFormat((x=(c=e.value.lastUpdated)==null?void 0:c.formatOptions)!=null&&x.forceLocale?l.value:void 0,((w=e.value.lastUpdated)==null?void 0:w.formatOptions)??{dateStyle:"short",timeStyle:"short"}).format(s.value)})}),(c,x)=>{var w;return o(),d("p",Re,[q(C(((w=a(e).lastUpdated)==null?void 0:w.text)||a(e).lastUpdatedText||"Last updated")+": ",1),n("time",{datetime:r.value},C(f.value),9,Je)])}}}),Qe=L(Ye,[["__scopeId","data-v-deb1cbd9"]]),Xe={key:0,class:"VPDocFooter"},ti={key:0,class:"edit-info"},ei={key:0,class:"edit-link"},ii={key:1,class:"last-updated"},li={key:1,class:"prev-next","aria-labelledby":"doc-footer-aria-label"},si={class:"pager"},ni=["innerHTML"],oi=["innerHTML"],ai={class:"pager"},ri=["innerHTML"],fi=["innerHTML"],di=g({__name:"VPDocFooter",setup(t){const{theme:e,page:i,frontmatter:l}=V(),s=We(),r=qe(),f=P(()=>e.value.editLink&&l.value.editLink!==!1),c=P(()=>i.value.lastUpdated),x=P(()=>f.value||c.value||r.value.prev||r.value.next);return(w,z)=>{var y,m,S,M;return x.value?(o(),d("footer",Xe,[h(w.$slots,"doc-footer-before",{},void 0,!0),f.value||c.value?(o(),d("div",ti,[f.value?(o(),d("div",ei,[b(W,{class:"edit-link-button",href:a(s).url,"no-icon":!0},{default:u(()=>[z[0]||(z[0]=n("span",{class:"vpi-square-pen edit-link-icon"},null,-1)),q(" "+C(a(s).text),1)]),_:1},8,["href"])])):p("",!0),c.value?(o(),d("div",ii,[b(Qe)])):p("",!0)])):p("",!0),(y=a(r).prev)!=null&&y.link||(m=a(r).next)!=null&&m.link?(o(),d("nav",li,[z[1]||(z[1]=n("span",{class:"visually-hidden",id:"doc-footer-aria-label"},"Pager",-1)),n("div",si,[(S=a(r).prev)!=null&&S.link?(o(),k(W,{key:0,class:"pager-link prev",href:a(r).prev.link},{default:u(()=>{var T;return[n("span",{class:"desc",innerHTML:((T=a(e).docFooter)==null?void 0:T.prev)||"Previous page"},null,8,ni),n("span",{class:"title",innerHTML:a(r).prev.text},null,8,oi)]}),_:1},8,["href"])):p("",!0)]),n("div",ai,[(M=a(r).next)!=null&&M.link?(o(),k(W,{key:0,class:"pager-link next",href:a(r).next.link},{default:u(()=>{var T;return[n("span",{class:"desc",innerHTML:((T=a(e).docFooter)==null?void 0:T.next)||"Next page"},null,8,ri),n("span",{class:"title",innerHTML:a(r).next.text},null,8,fi)]}),_:1},8,["href"])):p("",!0)])])):p("",!0)])):p("",!0)}}}),ci=L(di,[["__scopeId","data-v-2467df76"]]),xi={class:"container"},hi={class:"aside-container"},ui={class:"aside-content"},vi={class:"content"},yi={class:"content-container"},gi={class:"main"},mi=g({__name:"VPDoc",setup(t){const{theme:e}=V(),i=ot(),{hasSidebar:l,hasAside:s,leftAside:r}=R(),f=P(()=>i.path.replace(/[./]+/g,"_").replace(/_html$/,""));return(c,x)=>{const w=it("Content");return o(),d("div",{class:_(["VPDoc",{"has-sidebar":a(l),"has-aside":a(s)}])},[h(c.$slots,"doc-top",{},void 0,!0),n("div",xi,[a(s)?(o(),d("div",{key:0,class:_(["aside",{"left-aside":a(r)}])},[x[0]||(x[0]=n("div",{class:"aside-curtain"},null,-1)),n("div",hi,[n("div",ui,[b(Ze,null,{"aside-top":u(()=>[h(c.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":u(()=>[h(c.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":u(()=>[h(c.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":u(()=>[h(c.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":u(()=>[h(c.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":u(()=>[h(c.$slots,"aside-ads-after",{},void 0,!0)]),_:3})])])],2)):p("",!0),n("div",vi,[n("div",yi,[h(c.$slots,"doc-before",{},void 0,!0),n("main",gi,[b(w,{class:_(["vp-doc",[f.value,a(e).externalLinkIcon&&"external-link-icon-enabled"]])},null,8,["class"])]),b(ci,null,{"doc-footer-before":u(()=>[h(c.$slots,"doc-footer-before",{},void 0,!0)]),_:3}),h(c.$slots,"doc-after",{},void 0,!0)])])]),h(c.$slots,"doc-bottom",{},void 0,!0)],2)}}}),pi=L(mi,[["__scopeId","data-v-93adcff7"]]),ki=g({__name:"VPButton",props:{tag:{},size:{default:"medium"},theme:{default:"brand"},text:{},href:{},target:{},rel:{}},setup(t){const e=t,i=P(()=>e.href&&Bt.test(e.href)),l=P(()=>e.tag||(e.href?"a":"button"));return(s,r)=>(o(),k(Z(l.value),{class:_(["VPButton",[t.size,t.theme]]),href:t.href?a(Lt)(t.href):void 0,target:e.target??(i.value?"_blank":void 0),rel:e.rel??(i.value?"noreferrer":void 0)},{default:u(()=>[q(C(t.text),1)]),_:1},8,["class","href","target","rel"]))}}),wi=L(ki,[["__scopeId","data-v-cdffcac5"]]),bi=["src","alt"],_i=g({inheritAttrs:!1,__name:"VPImage",props:{image:{},alt:{}},setup(t){return(e,i)=>{const l=it("VPImage",!0);return t.image?(o(),d(I,{key:0},[typeof t.image=="string"||"src"in t.image?(o(),d("img",Q({key:0,class:"VPImage"},typeof t.image=="string"?e.$attrs:{...t.image,...e.$attrs},{src:a(bt)(typeof t.image=="string"?t.image:t.image.src),alt:t.alt??(typeof t.image=="string"?"":t.image.alt||"")}),null,16,bi)):(o(),d(I,{key:1},[b(l,Q({class:"dark",image:t.image.dark,alt:t.image.alt},e.$attrs),null,16,["image","alt"]),b(l,Q({class:"light",image:t.image.light,alt:t.image.alt},e.$attrs),null,16,["image","alt"])],64))],64)):p("",!0)}}}),dt=L(_i,[["__scopeId","data-v-8b025449"]]),$i={class:"container"},Li={class:"main"},zi={class:"heading"},Pi=["innerHTML"],Mi=["innerHTML"],Si=["innerHTML"],Vi={key:0,class:"actions"},Ci={key:0,class:"image"},Ti={class:"image-container"},ji=g({__name:"VPHero",props:{name:{},text:{},tagline:{},image:{},actions:{}},setup(t){const e=xt("hero-image-slot-exists");return(i,l)=>(o(),d("div",{class:_(["VPHero",{"has-image":t.image||a(e)}])},[n("div",$i,[n("div",Li,[h(i.$slots,"home-hero-info-before",{},void 0,!0),h(i.$slots,"home-hero-info",{},()=>[n("h1",zi,[t.name?(o(),d("span",{key:0,innerHTML:t.name,class:"name clip"},null,8,Pi)):p("",!0),t.text?(o(),d("span",{key:1,innerHTML:t.text,class:"text"},null,8,Mi)):p("",!0)]),t.tagline?(o(),d("p",{key:0,innerHTML:t.tagline,class:"tagline"},null,8,Si)):p("",!0)],!0),h(i.$slots,"home-hero-info-after",{},void 0,!0),t.actions?(o(),d("div",Vi,[(o(!0),d(I,null,E(t.actions,s=>(o(),d("div",{key:s.link,class:"action"},[b(wi,{tag:"a",size:"medium",theme:s.theme,text:s.text,href:s.link,target:s.target,rel:s.rel},null,8,["theme","text","href","target","rel"])]))),128))])):p("",!0),h(i.$slots,"home-hero-actions-after",{},void 0,!0)]),t.image||a(e)?(o(),d("div",Ci,[n("div",Ti,[l[0]||(l[0]=n("div",{class:"image-bg"},null,-1)),h(i.$slots,"home-hero-image",{},()=>[t.image?(o(),k(dt,{key:0,class:"image-src",image:t.image},null,8,["image"])):p("",!0)],!0)])])):p("",!0)])],2))}}),Ii=L(ji,[["__scopeId","data-v-8a5c0eaf"]]),Ni=g({__name:"VPHomeHero",setup(t){const{frontmatter:e}=V();return(i,l)=>a(e).hero?(o(),k(Ii,{key:0,class:"VPHomeHero",name:a(e).hero.name,text:a(e).hero.text,tagline:a(e).hero.tagline,image:a(e).hero.image,actions:a(e).hero.actions},{"home-hero-info-before":u(()=>[h(i.$slots,"home-hero-info-before")]),"home-hero-info":u(()=>[h(i.$slots,"home-hero-info")]),"home-hero-info-after":u(()=>[h(i.$slots,"home-hero-info-after")]),"home-hero-actions-after":u(()=>[h(i.$slots,"home-hero-actions-after")]),"home-hero-image":u(()=>[h(i.$slots,"home-hero-image")]),_:3},8,["name","text","tagline","image","actions"])):p("",!0)}}),Ai={class:"box"},Hi={key:0,class:"icon"},Bi=["innerHTML"],Ei=["innerHTML"],Fi=["innerHTML"],Di={key:4,class:"link-text"},Oi={class:"link-text-value"},Gi=g({__name:"VPFeature",props:{icon:{},title:{},details:{},link:{},linkText:{},rel:{},target:{}},setup(t){return(e,i)=>(o(),k(W,{class:"VPFeature",href:t.link,rel:t.rel,target:t.target,"no-icon":!0,tag:t.link?"a":"div"},{default:u(()=>[n("article",Ai,[typeof t.icon=="object"&&t.icon.wrap?(o(),d("div",Hi,[b(dt,{image:t.icon,alt:t.icon.alt,height:t.icon.height||48,width:t.icon.width||48},null,8,["image","alt","height","width"])])):typeof t.icon=="object"?(o(),k(dt,{key:1,image:t.icon,alt:t.icon.alt,height:t.icon.height||48,width:t.icon.width||48},null,8,["image","alt","height","width"])):t.icon?(o(),d("div",{key:2,class:"icon",innerHTML:t.icon},null,8,Bi)):p("",!0),n("h2",{class:"title",innerHTML:t.title},null,8,Ei),t.details?(o(),d("p",{key:3,class:"details",innerHTML:t.details},null,8,Fi)):p("",!0),t.linkText?(o(),d("div",Di,[n("p",Oi,[q(C(t.linkText)+" ",1),i[0]||(i[0]=n("span",{class:"vpi-arrow-right link-text-icon"},null,-1))])])):p("",!0)])]),_:1},8,["href","rel","target","tag"]))}}),Ui=L(Gi,[["__scopeId","data-v-6d21a5f0"]]),Zi={key:0,class:"VPFeatures"},Wi={class:"container"},qi={class:"items"},Ki=g({__name:"VPFeatures",props:{features:{}},setup(t){const e=t,i=P(()=>{const l=e.features.length;if(l){if(l===2)return"grid-2";if(l===3)return"grid-3";if(l%3===0)return"grid-6";if(l>3)return"grid-4"}else return});return(l,s)=>t.features?(o(),d("div",Zi,[n("div",Wi,[n("div",qi,[(o(!0),d(I,null,E(t.features,r=>(o(),d("div",{key:r.title,class:_(["item",[i.value]])},[b(Ui,{icon:r.icon,title:r.title,details:r.details,link:r.link,"link-text":r.linkText,rel:r.rel,target:r.target},null,8,["icon","title","details","link","link-text","rel","target"])],2))),128))])])])):p("",!0)}}),Ri=L(Ki,[["__scopeId","data-v-c6430773"]]),Ji=g({__name:"VPHomeFeatures",setup(t){const{frontmatter:e}=V();return(i,l)=>a(e).features?(o(),k(Ri,{key:0,class:"VPHomeFeatures",features:a(e).features},null,8,["features"])):p("",!0)}}),Yi=g({__name:"VPHomeContent",setup(t){const{width:e}=ie({initialWidth:0,includeScrollbar:!1});return(i,l)=>(o(),d("div",{class:"vp-doc container",style:F(a(e)?{"--vp-offset":`calc(50% - ${a(e)/2}px)`}:{})},[h(i.$slots,"default",{},void 0,!0)],4))}}),Qi=L(Yi,[["__scopeId","data-v-dd15dcde"]]),Xi=g({__name:"VPHome",setup(t){const{frontmatter:e,theme:i}=V();return(l,s)=>{const r=it("Content");return o(),d("div",{class:_(["VPHome",{"external-link-icon-enabled":a(i).externalLinkIcon}])},[h(l.$slots,"home-hero-before",{},void 0,!0),b(Ni,null,{"home-hero-info-before":u(()=>[h(l.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":u(()=>[h(l.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":u(()=>[h(l.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":u(()=>[h(l.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":u(()=>[h(l.$slots,"home-hero-image",{},void 0,!0)]),_:3}),h(l.$slots,"home-hero-after",{},void 0,!0),h(l.$slots,"home-features-before",{},void 0,!0),b(Ji),h(l.$slots,"home-features-after",{},void 0,!0),a(e).markdownStyles!==!1?(o(),k(Qi,{key:0},{default:u(()=>[b(r)]),_:1})):(o(),k(r,{key:1}))],2)}}}),tl=L(Xi,[["__scopeId","data-v-c3dd487c"]]),el={},il={class:"VPPage"};function ll(t,e){const i=it("Content");return o(),d("div",il,[h(t.$slots,"page-top"),b(i),h(t.$slots,"page-bottom")])}const sl=L(el,[["render",ll]]),nl=g({__name:"VPContent",setup(t){const{page:e,frontmatter:i}=V(),{hasSidebar:l}=R();return(s,r)=>(o(),d("div",{class:_(["VPContent",{"has-sidebar":a(l),"is-home":a(i).layout==="home"}]),id:"VPContent"},[a(e).isNotFound?h(s.$slots,"not-found",{key:0},()=>[b(_e)],!0):a(i).layout==="page"?(o(),k(sl,{key:1},{"page-top":u(()=>[h(s.$slots,"page-top",{},void 0,!0)]),"page-bottom":u(()=>[h(s.$slots,"page-bottom",{},void 0,!0)]),_:3})):a(i).layout==="home"?(o(),k(tl,{key:2},{"home-hero-before":u(()=>[h(s.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":u(()=>[h(s.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":u(()=>[h(s.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":u(()=>[h(s.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":u(()=>[h(s.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":u(()=>[h(s.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":u(()=>[h(s.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":u(()=>[h(s.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":u(()=>[h(s.$slots,"home-features-after",{},void 0,!0)]),_:3})):a(i).layout&&a(i).layout!=="doc"?(o(),k(Z(a(i).layout),{key:3})):(o(),k(pi,{key:4},{"doc-top":u(()=>[h(s.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":u(()=>[h(s.$slots,"doc-bottom",{},void 0,!0)]),"doc-footer-before":u(()=>[h(s.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":u(()=>[h(s.$slots,"doc-before",{},void 0,!0)]),"doc-after":u(()=>[h(s.$slots,"doc-after",{},void 0,!0)]),"aside-top":u(()=>[h(s.$slots,"aside-top",{},void 0,!0)]),"aside-outline-before":u(()=>[h(s.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":u(()=>[h(s.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":u(()=>[h(s.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":u(()=>[h(s.$slots,"aside-ads-after",{},void 0,!0)]),"aside-bottom":u(()=>[h(s.$slots,"aside-bottom",{},void 0,!0)]),_:3}))],2))}}),ol=L(nl,[["__scopeId","data-v-ec524422"]]),al={class:"container"},rl=["innerHTML"],fl=["innerHTML"],dl=g({__name:"VPFooter",setup(t){const{theme:e,frontmatter:i}=V(),{hasSidebar:l}=R();return(s,r)=>a(e).footer&&a(i).footer!==!1?(o(),d("footer",{key:0,class:_(["VPFooter",{"has-sidebar":a(l)}])},[n("div",al,[a(e).footer.message?(o(),d("p",{key:0,class:"message",innerHTML:a(e).footer.message},null,8,rl)):p("",!0),a(e).footer.copyright?(o(),d("p",{key:1,class:"copyright",innerHTML:a(e).footer.copyright},null,8,fl)):p("",!0)])],2)):p("",!0)}}),cl=L(dl,[["__scopeId","data-v-427289ba"]]);function xl(){const{theme:t,frontmatter:e}=V(),i=Ht([]),l=P(()=>i.value.length>0);return ct(()=>{i.value=zt(e.value.outline??t.value.outline)}),{headers:i,hasLocalNav:l}}const hl={class:"menu-text"},ul={class:"header"},vl={class:"outline"},yl=g({__name:"VPLocalNavOutlineDropdown",props:{headers:{},navHeight:{}},setup(t){const e=t,{theme:i}=V(),l=$(!1),s=$(0),r=$(),f=$();function c(y){var m;(m=r.value)!=null&&m.contains(y.target)||(l.value=!1)}K(l,y=>{if(y){document.addEventListener("click",c);return}document.removeEventListener("click",c)}),mt("Escape",()=>{l.value=!1}),ct(()=>{l.value=!1});function x(){l.value=!l.value,s.value=window.innerHeight+Math.min(window.scrollY-e.navHeight,0)}function w(y){y.target.classList.contains("outline-link")&&(f.value&&(f.value.style.transition="none"),Et(()=>{l.value=!1}))}function z(){l.value=!1,window.scrollTo({top:0,left:0,behavior:"smooth"})}return(y,m)=>(o(),d("div",{class:"VPLocalNavOutlineDropdown",style:F({"--vp-vh":s.value+"px"}),ref_key:"main",ref:r},[t.headers.length>0?(o(),d("button",{key:0,onClick:x,class:_({open:l.value})},[n("span",hl,C(a(Ut)(a(i))),1),m[0]||(m[0]=n("span",{class:"vpi-chevron-right icon"},null,-1))],2)):(o(),d("button",{key:1,onClick:z},C(a(i).returnToTopLabel||"Return to top"),1)),b(st,{name:"flyout"},{default:u(()=>[l.value?(o(),d("div",{key:0,ref_key:"items",ref:f,class:"items",onClick:w},[n("div",ul,[n("a",{class:"top-link",href:"#",onClick:z},C(a(i).returnToTopLabel||"Return to top"),1)]),n("div",vl,[b(Zt,{headers:t.headers},null,8,["headers"])])],512)):p("",!0)]),_:1})],4))}}),gl=L(yl,[["__scopeId","data-v-aa428bca"]]),ml={class:"container"},pl=["aria-expanded"],kl={class:"menu-text"},wl=g({__name:"VPLocalNav",props:{open:{type:Boolean}},emits:["open-menu"],setup(t){const{theme:e,frontmatter:i}=V(),{hasSidebar:l}=R(),{headers:s}=xl(),{y:r}=Ft(),f=$(0);O(()=>{f.value=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--vp-nav-height"))}),ct(()=>{s.value=zt(i.value.outline??e.value.outline)});const c=P(()=>s.value.length===0),x=P(()=>c.value&&!l.value),w=P(()=>({VPLocalNav:!0,"has-sidebar":l.value,empty:c.value,fixed:x.value}));return(z,y)=>a(i).layout!=="home"&&(!x.value||a(r)>=f.value)?(o(),d("div",{key:0,class:_(w.value)},[n("div",ml,[a(l)?(o(),d("button",{key:0,class:"menu","aria-expanded":t.open,"aria-controls":"VPSidebarNav",onClick:y[0]||(y[0]=m=>z.$emit("open-menu"))},[y[1]||(y[1]=n("span",{class:"vpi-align-left menu-icon"},null,-1)),n("span",kl,C(a(e).sidebarMenuLabel||"Menu"),1)],8,pl)):p("",!0),b(gl,{headers:a(s),navHeight:f.value},null,8,["headers","navHeight"])])],2)):p("",!0)}}),bl=L(wl,[["__scopeId","data-v-6bede3f9"]]);function _l(){const t=$(!1);function e(){t.value=!0,window.addEventListener("resize",s)}function i(){t.value=!1,window.removeEventListener("resize",s)}function l(){t.value?i():e()}function s(){window.outerWidth>=768&&i()}const r=ot();return K(()=>r.path,i),{isScreenOpen:t,openScreen:e,closeScreen:i,toggleScreen:l}}const $l={},Ll={class:"VPSwitch",type:"button",role:"switch"},zl={class:"check"},Pl={key:0,class:"icon"};function Ml(t,e){return o(),d("button",Ll,[n("span",zl,[t.$slots.default?(o(),d("span",Pl,[h(t.$slots,"default",{},void 0,!0)])):p("",!0)])])}const Sl=L($l,[["render",Ml],["__scopeId","data-v-7f9c1f6b"]]),Vl=g({__name:"VPSwitchAppearance",setup(t){const{isDark:e,theme:i}=V(),l=xt("toggle-appearance",()=>{e.value=!e.value}),s=$("");return $t(()=>{s.value=e.value?i.value.lightModeSwitchTitle||"Switch to light theme":i.value.darkModeSwitchTitle||"Switch to dark theme"}),(r,f)=>(o(),k(Sl,{title:s.value,class:"VPSwitchAppearance","aria-checked":a(e),onClick:a(l)},{default:u(()=>[...f[0]||(f[0]=[n("span",{class:"vpi-sun sun"},null,-1),n("span",{class:"vpi-moon moon"},null,-1)])]),_:1},8,["title","aria-checked","onClick"]))}}),Pt=L(Vl,[["__scopeId","data-v-5ce0d3ed"]]),Cl={key:0,class:"VPNavBarAppearance"},Tl=g({__name:"VPNavBarAppearance",setup(t){const{site:e}=V();return(i,l)=>a(e).appearance&&a(e).appearance!=="force-dark"&&a(e).appearance!=="force-auto"?(o(),d("div",Cl,[b(Pt)])):p("",!0)}}),jl=L(Tl,[["__scopeId","data-v-f293bcbe"]]),Mt=$();let Wt=!1,vt=0;function Il(t){const e=$(!1);if(ht){!Wt&&Nl(),vt++;const i=K(Mt,l=>{var s,r,f;l===t.el.value||(s=t.el.value)!=null&&s.contains(l)?(e.value=!0,(r=t.onFocus)==null||r.call(t)):(e.value=!1,(f=t.onBlur)==null||f.call(t))});_t(()=>{i(),vt--,vt||Al()})}return le(e)}function Nl(){document.addEventListener("focusin",qt),Wt=!0,Mt.value=document.activeElement}function Al(){document.removeEventListener("focusin",qt)}function qt(){Mt.value=document.activeElement}const Hl={class:"VPMenuLink"},Bl=["innerHTML"],El=g({__name:"VPMenuLink",props:{item:{}},setup(t){const{page:e}=V();return(i,l)=>(o(),d("div",Hl,[b(W,{class:_({active:a(et)(a(e).relativePath,t.item.activeMatch||t.item.link,!!t.item.activeMatch)}),href:t.item.link,target:t.item.target,rel:t.item.rel,"no-icon":t.item.noIcon},{default:u(()=>[n("span",{innerHTML:t.item.text},null,8,Bl)]),_:1},8,["class","href","target","rel","no-icon"])]))}}),ut=L(El,[["__scopeId","data-v-f40f9647"]]),Fl={class:"VPMenuGroup"},Dl={key:0,class:"title"},Ol=g({__name:"VPMenuGroup",props:{text:{},items:{}},setup(t){return(e,i)=>(o(),d("div",Fl,[t.text?(o(),d("p",Dl,C(t.text),1)):p("",!0),(o(!0),d(I,null,E(t.items,l=>(o(),d(I,null,["link"in l?(o(),k(ut,{key:0,item:l},null,8,["item"])):p("",!0)],64))),256))]))}}),Gl=L(Ol,[["__scopeId","data-v-88b4e9e3"]]),Ul={class:"VPMenu"},Zl={key:0,class:"items"},Wl=g({__name:"VPMenu",props:{items:{}},setup(t){return(e,i)=>(o(),d("div",Ul,[t.items?(o(),d("div",Zl,[(o(!0),d(I,null,E(t.items,l=>(o(),d(I,{key:JSON.stringify(l)},["link"in l?(o(),k(ut,{key:0,item:l},null,8,["item"])):"component"in l?(o(),k(Z(l.component),Q({key:1,ref_for:!0},l.props),null,16)):(o(),k(Gl,{key:2,text:l.text,items:l.items},null,8,["text","items"]))],64))),128))])):p("",!0),h(e.$slots,"default",{},void 0,!0)]))}}),ql=L(Wl,[["__scopeId","data-v-60337296"]]),Kl=["aria-expanded","aria-label"],Rl={key:0,class:"text"},Jl=["innerHTML"],Yl={key:1,class:"vpi-more-horizontal icon"},Ql={class:"menu"},Xl=g({__name:"VPFlyout",props:{icon:{},button:{},label:{},items:{}},setup(t){const e=$(!1),i=$();Il({el:i,onBlur:l});function l(){e.value=!1}return(s,r)=>(o(),d("div",{class:"VPFlyout",ref_key:"el",ref:i,onMouseenter:r[1]||(r[1]=f=>e.value=!0),onMouseleave:r[2]||(r[2]=f=>e.value=!1)},[n("button",{type:"button",class:"button","aria-haspopup":"true","aria-expanded":e.value,"aria-label":t.label,onClick:r[0]||(r[0]=f=>e.value=!e.value)},[t.button||t.icon?(o(),d("span",Rl,[t.icon?(o(),d("span",{key:0,class:_([t.icon,"option-icon"])},null,2)):p("",!0),t.button?(o(),d("span",{key:1,innerHTML:t.button},null,8,Jl)):p("",!0),r[3]||(r[3]=n("span",{class:"vpi-chevron-down text-icon"},null,-1))])):(o(),d("span",Yl))],8,Kl),n("div",Ql,[b(ql,{items:t.items},{default:u(()=>[h(s.$slots,"default",{},void 0,!0)]),_:3},8,["items"])])],544))}}),St=L(Xl,[["__scopeId","data-v-c8313f06"]]),ts=["href","aria-label","innerHTML"],es=g({__name:"VPSocialLink",props:{icon:{},link:{},ariaLabel:{}},setup(t){const e=t,i=$();O(async()=>{var r;await Et();const s=(r=i.value)==null?void 0:r.children[0];s instanceof HTMLElement&&s.className.startsWith("vpi-social-")&&(getComputedStyle(s).maskImage||getComputedStyle(s).webkitMaskImage)==="none"&&s.style.setProperty("--icon",`url('https://api.iconify.design/simple-icons/${e.icon}.svg')`)});const l=P(()=>typeof e.icon=="object"?e.icon.svg:`<span class="vpi-social-${e.icon}"></span>`);return(s,r)=>(o(),d("a",{ref_key:"el",ref:i,class:"VPSocialLink no-icon",href:t.link,"aria-label":t.ariaLabel??(typeof t.icon=="string"?t.icon:""),target:"_blank",rel:"noopener",innerHTML:l.value},null,8,ts))}}),is=L(es,[["__scopeId","data-v-e2093e14"]]),ls={class:"VPSocialLinks"},ss=g({__name:"VPSocialLinks",props:{links:{}},setup(t){return(e,i)=>(o(),d("div",ls,[(o(!0),d(I,null,E(t.links,({link:l,icon:s,ariaLabel:r})=>(o(),k(is,{key:l,icon:s,link:l,ariaLabel:r},null,8,["icon","link","ariaLabel"]))),128))]))}}),Vt=L(ss,[["__scopeId","data-v-54bae52f"]]),ns={key:0,class:"group translations"},os={class:"trans-title"},as={key:1,class:"group"},rs={class:"item appearance"},fs={class:"label"},ds={class:"appearance-action"},cs={key:2,class:"group"},xs={class:"item social-links"},hs=g({__name:"VPNavBarExtra",setup(t){const{site:e,theme:i}=V(),{localeLinks:l,currentLang:s}=rt({correspondingLink:!0}),r=P(()=>l.value.length&&s.value.label||e.value.appearance||i.value.socialLinks);return(f,c)=>r.value?(o(),k(St,{key:0,class:"VPNavBarExtra",label:"extra navigation"},{default:u(()=>[a(l).length&&a(s).label?(o(),d("div",ns,[n("p",os,C(a(s).label),1),(o(!0),d(I,null,E(a(l),x=>(o(),k(ut,{key:x.link,item:x},null,8,["item"]))),128))])):p("",!0),a(e).appearance&&a(e).appearance!=="force-dark"&&a(e).appearance!=="force-auto"?(o(),d("div",as,[n("div",rs,[n("p",fs,C(a(i).darkModeSwitchLabel||"Appearance"),1),n("div",ds,[b(Pt)])])])):p("",!0),a(i).socialLinks?(o(),d("div",cs,[n("div",xs,[b(Vt,{class:"social-links-list",links:a(i).socialLinks},null,8,["links"])])])):p("",!0)]),_:1})):p("",!0)}}),us=L(hs,[["__scopeId","data-v-0f997e22"]]),vs=["aria-expanded"],ys=g({__name:"VPNavBarHamburger",props:{active:{type:Boolean}},emits:["click"],setup(t){return(e,i)=>(o(),d("button",{type:"button",class:_(["VPNavBarHamburger",{active:t.active}]),"aria-label":"mobile navigation","aria-expanded":t.active,"aria-controls":"VPNavScreen",onClick:i[0]||(i[0]=l=>e.$emit("click"))},[...i[1]||(i[1]=[n("span",{class:"container"},[n("span",{class:"top"}),n("span",{class:"middle"}),n("span",{class:"bottom"})],-1)])],10,vs))}}),gs=L(ys,[["__scopeId","data-v-d3422334"]]),ms=["innerHTML"],ps=g({__name:"VPNavBarMenuLink",props:{item:{}},setup(t){const{page:e}=V();return(i,l)=>(o(),k(W,{class:_({VPNavBarMenuLink:!0,active:a(et)(a(e).relativePath,t.item.activeMatch||t.item.link,!!t.item.activeMatch)}),href:t.item.link,target:t.item.target,rel:t.item.rel,"no-icon":t.item.noIcon,tabindex:"0"},{default:u(()=>[n("span",{innerHTML:t.item.text},null,8,ms)]),_:1},8,["class","href","target","rel","no-icon"]))}}),ks=L(ps,[["__scopeId","data-v-1049a78b"]]),ws=g({__name:"VPNavBarMenuGroup",props:{item:{}},setup(t){const e=t,{page:i}=V(),l=r=>"component"in r?!1:"link"in r?et(i.value.relativePath,r.link,!!e.item.activeMatch):r.items.some(l),s=P(()=>l(e.item));return(r,f)=>(o(),k(St,{class:_({VPNavBarMenuGroup:!0,active:a(et)(a(i).relativePath,t.item.activeMatch,!!t.item.activeMatch)||s.value}),button:t.item.text,items:t.item.items},null,8,["class","button","items"]))}}),bs={key:0,"aria-labelledby":"main-nav-aria-label",class:"VPNavBarMenu"},_s=g({__name:"VPNavBarMenu",setup(t){const{theme:e}=V();return(i,l)=>a(e).nav?(o(),d("nav",bs,[l[0]||(l[0]=n("span",{id:"main-nav-aria-label",class:"visually-hidden"}," Main Navigation ",-1)),(o(!0),d(I,null,E(a(e).nav,s=>(o(),d(I,{key:JSON.stringify(s)},["link"in s?(o(),k(ks,{key:0,item:s},null,8,["item"])):"component"in s?(o(),k(Z(s.component),Q({key:1,ref_for:!0},s.props),null,16)):(o(),k(ws,{key:2,item:s},null,8,["item"]))],64))),128))])):p("",!0)}}),$s=L(_s,[["__scopeId","data-v-f6c21575"]]);function Ls(t){const{localeIndex:e,theme:i}=V();function l(s){var M,T,N;const r=s.split("."),f=(M=i.value.search)==null?void 0:M.options,c=f&&typeof f=="object",x=c&&((N=(T=f.locales)==null?void 0:T[e.value])==null?void 0:N.translations)||null,w=c&&f.translations||null;let z=x,y=w,m=t;const S=r.pop();for(const B of r){let U=null;const J=m==null?void 0:m[B];J&&(U=m=J);const A=y==null?void 0:y[B];A&&(U=y=A);const G=z==null?void 0:z[B];G&&(U=z=G),J||(m=U),A||(y=U),G||(z=U)}return(z==null?void 0:z[S])??(y==null?void 0:y[S])??(m==null?void 0:m[S])??""}return l}const zs=["aria-label"],Ps={class:"DocSearch-Button-Container"},Ms={class:"DocSearch-Button-Placeholder"},Tt=g({__name:"VPNavBarSearchButton",setup(t){const i=Ls({button:{buttonText:"Search",buttonAriaLabel:"Search"}});return(l,s)=>(o(),d("button",{type:"button",class:"DocSearch DocSearch-Button","aria-label":a(i)("button.buttonAriaLabel")},[n("span",Ps,[s[0]||(s[0]=n("span",{class:"vp-icon DocSearch-Search-Icon"},null,-1)),n("span",Ms,C(a(i)("button.buttonText")),1)]),s[1]||(s[1]=n("span",{class:"DocSearch-Button-Keys"},[n("kbd",{class:"DocSearch-Button-Key"}),n("kbd",{class:"DocSearch-Button-Key"},"K")],-1))],8,zs))}}),Ss={class:"VPNavBarSearch"},Vs={id:"local-search"},Cs={key:1,id:"docsearch"},Ts=g({__name:"VPNavBarSearch",setup(t){const e=se(()=>ne(()=>import("./VPLocalSearchBox.BpWEHGzI.js"),__vite__mapDeps([0,1]))),i=()=>null,{theme:l}=V(),s=$(!1),r=$(!1);O(()=>{});function f(){s.value||(s.value=!0,setTimeout(c,16))}function c(){const y=new Event("keydown");y.key="k",y.metaKey=!0,window.dispatchEvent(y),setTimeout(()=>{document.querySelector(".DocSearch-Modal")||c()},16)}function x(y){const m=y.target,S=m.tagName;return m.isContentEditable||S==="INPUT"||S==="SELECT"||S==="TEXTAREA"}const w=$(!1);mt("k",y=>{(y.ctrlKey||y.metaKey)&&(y.preventDefault(),w.value=!0)}),mt("/",y=>{x(y)||(y.preventDefault(),w.value=!0)});const z="local";return(y,m)=>{var S;return o(),d("div",Ss,[a(z)==="local"?(o(),d(I,{key:0},[w.value?(o(),k(a(e),{key:0,onClose:m[0]||(m[0]=M=>w.value=!1)})):p("",!0),n("div",Vs,[b(Tt,{onClick:m[1]||(m[1]=M=>w.value=!0)})])],64)):a(z)==="algolia"?(o(),d(I,{key:1},[s.value?(o(),k(a(i),{key:0,algolia:((S=a(l).search)==null?void 0:S.options)??a(l).algolia,onVnodeBeforeMount:m[2]||(m[2]=M=>r.value=!0)},null,8,["algolia"])):p("",!0),r.value?p("",!0):(o(),d("div",Cs,[b(Tt,{onClick:f})]))],64)):p("",!0)])}}}),js=g({__name:"VPNavBarSocialLinks",setup(t){const{theme:e}=V();return(i,l)=>a(e).socialLinks?(o(),k(Vt,{key:0,class:"VPNavBarSocialLinks",links:a(e).socialLinks},null,8,["links"])):p("",!0)}}),Is=L(js,[["__scopeId","data-v-346d844a"]]),Ns=["href","rel","target"],As=["innerHTML"],Hs={key:2},Bs=g({__name:"VPNavBarTitle",setup(t){const{site:e,theme:i}=V(),{hasSidebar:l}=R(),{currentLang:s}=rt(),r=P(()=>{var x;return typeof i.value.logoLink=="string"?i.value.logoLink:(x=i.value.logoLink)==null?void 0:x.link}),f=P(()=>{var x;return typeof i.value.logoLink=="string"||(x=i.value.logoLink)==null?void 0:x.rel}),c=P(()=>{var x;return typeof i.value.logoLink=="string"||(x=i.value.logoLink)==null?void 0:x.target});return(x,w)=>(o(),d("div",{class:_(["VPNavBarTitle",{"has-sidebar":a(l)}])},[n("a",{class:"title",href:r.value??a(Lt)(a(s).link),rel:f.value,target:c.value},[h(x.$slots,"nav-bar-title-before",{},void 0,!0),a(i).logo?(o(),k(dt,{key:0,class:"logo",image:a(i).logo},null,8,["image"])):p("",!0),a(i).siteTitle?(o(),d("span",{key:1,innerHTML:a(i).siteTitle},null,8,As)):a(i).siteTitle===void 0?(o(),d("span",Hs,C(a(e).title),1)):p("",!0),h(x.$slots,"nav-bar-title-after",{},void 0,!0)],8,Ns)],2))}}),Es=L(Bs,[["__scopeId","data-v-4e930c0f"]]),Fs={class:"items"},Ds={class:"title"},Os=g({__name:"VPNavBarTranslations",setup(t){const{theme:e}=V(),{localeLinks:i,currentLang:l}=rt({correspondingLink:!0});return(s,r)=>a(i).length&&a(l).label?(o(),k(St,{key:0,class:"VPNavBarTranslations",icon:"vpi-languages",label:a(e).langMenuLabel||"Change language"},{default:u(()=>[n("div",Fs,[n("p",Ds,C(a(l).label),1),(o(!0),d(I,null,E(a(i),f=>(o(),k(ut,{key:f.link,item:f},null,8,["item"]))),128))])]),_:1},8,["label"])):p("",!0)}}),Gs=L(Os,[["__scopeId","data-v-c320e5d9"]]),Us={class:"wrapper"},Zs={class:"container"},Ws={class:"title"},qs={class:"content"},Ks={class:"content-body"},Rs=g({__name:"VPNavBar",props:{isScreenOpen:{type:Boolean}},emits:["toggle-screen"],setup(t){const e=t,{y:i}=Ft(),{hasSidebar:l}=R(),{frontmatter:s}=V(),r=$({});return $t(()=>{r.value={"has-sidebar":l.value,home:s.value.layout==="home",top:i.value===0,"screen-open":e.isScreenOpen}}),(f,c)=>(o(),d("div",{class:_(["VPNavBar",r.value])},[n("div",Us,[n("div",Zs,[n("div",Ws,[b(Es,null,{"nav-bar-title-before":u(()=>[h(f.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":u(()=>[h(f.$slots,"nav-bar-title-after",{},void 0,!0)]),_:3})]),n("div",qs,[n("div",Ks,[h(f.$slots,"nav-bar-content-before",{},void 0,!0),b(Ts,{class:"search"}),b($s,{class:"menu"}),b(Gs,{class:"translations"}),b(jl,{class:"appearance"}),b(Is,{class:"social-links"}),b(us,{class:"extra"}),h(f.$slots,"nav-bar-content-after",{},void 0,!0),b(gs,{class:"hamburger",active:t.isScreenOpen,onClick:c[0]||(c[0]=x=>f.$emit("toggle-screen"))},null,8,["active"])])])])]),c[1]||(c[1]=n("div",{class:"divider"},[n("div",{class:"divider-line"})],-1))],2))}}),Js=L(Rs,[["__scopeId","data-v-e484c5ca"]]),Ys={key:0,class:"VPNavScreenAppearance"},Qs={class:"text"},Xs=g({__name:"VPNavScreenAppearance",setup(t){const{site:e,theme:i}=V();return(l,s)=>a(e).appearance&&a(e).appearance!=="force-dark"&&a(e).appearance!=="force-auto"?(o(),d("div",Ys,[n("p",Qs,C(a(i).darkModeSwitchLabel||"Appearance"),1),b(Pt)])):p("",!0)}}),tn=L(Xs,[["__scopeId","data-v-6b694d0f"]]),en=["innerHTML"],ln=g({__name:"VPNavScreenMenuLink",props:{item:{}},setup(t){const e=xt("close-screen");return(i,l)=>(o(),k(W,{class:"VPNavScreenMenuLink",href:t.item.link,target:t.item.target,rel:t.item.rel,"no-icon":t.item.noIcon,onClick:a(e)},{default:u(()=>[n("span",{innerHTML:t.item.text},null,8,en)]),_:1},8,["href","target","rel","no-icon","onClick"]))}}),sn=L(ln,[["__scopeId","data-v-7e513513"]]),nn=["innerHTML"],on=g({__name:"VPNavScreenMenuGroupLink",props:{item:{}},setup(t){const e=xt("close-screen");return(i,l)=>(o(),k(W,{class:"VPNavScreenMenuGroupLink",href:t.item.link,target:t.item.target,rel:t.item.rel,"no-icon":t.item.noIcon,onClick:a(e)},{default:u(()=>[n("span",{innerHTML:t.item.text},null,8,nn)]),_:1},8,["href","target","rel","no-icon","onClick"]))}}),Kt=L(on,[["__scopeId","data-v-d4e57239"]]),an={class:"VPNavScreenMenuGroupSection"},rn={key:0,class:"title"},fn=g({__name:"VPNavScreenMenuGroupSection",props:{text:{},items:{}},setup(t){return(e,i)=>(o(),d("div",an,[t.text?(o(),d("p",rn,C(t.text),1)):p("",!0),(o(!0),d(I,null,E(t.items,l=>(o(),k(Kt,{key:l.text,item:l},null,8,["item"]))),128))]))}}),dn=L(fn,[["__scopeId","data-v-48faf837"]]),cn=["aria-controls","aria-expanded"],xn=["innerHTML"],hn=["id"],un={key:0,class:"item"},vn={key:1,class:"item"},yn={key:2,class:"group"},gn=g({__name:"VPNavScreenMenuGroup",props:{text:{},items:{}},setup(t){const e=t,i=$(!1),l=P(()=>`NavScreenGroup-${e.text.replace(" ","-").toLowerCase()}`);function s(){i.value=!i.value}return(r,f)=>(o(),d("div",{class:_(["VPNavScreenMenuGroup",{open:i.value}])},[n("button",{class:"button","aria-controls":l.value,"aria-expanded":i.value,onClick:s},[n("span",{class:"button-text",innerHTML:t.text},null,8,xn),f[0]||(f[0]=n("span",{class:"vpi-plus button-icon"},null,-1))],8,cn),n("div",{id:l.value,class:"items"},[(o(!0),d(I,null,E(t.items,c=>(o(),d(I,{key:JSON.stringify(c)},["link"in c?(o(),d("div",un,[b(Kt,{item:c},null,8,["item"])])):"component"in c?(o(),d("div",vn,[(o(),k(Z(c.component),Q({ref_for:!0},c.props,{"screen-menu":""}),null,16))])):(o(),d("div",yn,[b(dn,{text:c.text,items:c.items},null,8,["text","items"])]))],64))),128))],8,hn)],2))}}),mn=L(gn,[["__scopeId","data-v-4dc46d8f"]]),pn={key:0,class:"VPNavScreenMenu"},kn=g({__name:"VPNavScreenMenu",setup(t){const{theme:e}=V();return(i,l)=>a(e).nav?(o(),d("nav",pn,[(o(!0),d(I,null,E(a(e).nav,s=>(o(),d(I,{key:JSON.stringify(s)},["link"in s?(o(),k(sn,{key:0,item:s},null,8,["item"])):"component"in s?(o(),k(Z(s.component),Q({key:1,ref_for:!0},s.props,{"screen-menu":""}),null,16)):(o(),k(mn,{key:2,text:s.text||"",items:s.items},null,8,["text","items"]))],64))),128))])):p("",!0)}}),wn=g({__name:"VPNavScreenSocialLinks",setup(t){const{theme:e}=V();return(i,l)=>a(e).socialLinks?(o(),k(Vt,{key:0,class:"VPNavScreenSocialLinks",links:a(e).socialLinks},null,8,["links"])):p("",!0)}}),bn={class:"list"},_n=g({__name:"VPNavScreenTranslations",setup(t){const{localeLinks:e,currentLang:i}=rt({correspondingLink:!0}),l=$(!1);function s(){l.value=!l.value}return(r,f)=>a(e).length&&a(i).label?(o(),d("div",{key:0,class:_(["VPNavScreenTranslations",{open:l.value}])},[n("button",{class:"title",onClick:s},[f[0]||(f[0]=n("span",{class:"vpi-languages icon lang"},null,-1)),q(" "+C(a(i).label)+" ",1),f[1]||(f[1]=n("span",{class:"vpi-chevron-down icon chevron"},null,-1))]),n("ul",bn,[(o(!0),d(I,null,E(a(e),c=>(o(),d("li",{key:c.link,class:"item"},[b(W,{class:"link",href:c.link},{default:u(()=>[q(C(c.text),1)]),_:2},1032,["href"])]))),128))])],2)):p("",!0)}}),$n=L(_n,[["__scopeId","data-v-990fae88"]]),Ln={class:"container"},zn=g({__name:"VPNavScreen",props:{open:{type:Boolean}},setup(t){const e=$(null),i=Dt(ht?document.body:null);return(l,s)=>(o(),k(st,{name:"fade",onEnter:s[0]||(s[0]=r=>i.value=!0),onAfterLeave:s[1]||(s[1]=r=>i.value=!1)},{default:u(()=>[t.open?(o(),d("div",{key:0,class:"VPNavScreen",ref_key:"screen",ref:e,id:"VPNavScreen"},[n("div",Ln,[h(l.$slots,"nav-screen-content-before",{},void 0,!0),b(kn,{class:"menu"}),b($n,{class:"translations"}),b(tn,{class:"appearance"}),b(wn,{class:"social-links"}),h(l.$slots,"nav-screen-content-after",{},void 0,!0)])],512)):p("",!0)]),_:3}))}}),Pn=L(zn,[["__scopeId","data-v-95402029"]]),Mn={key:0,class:"VPNav"},Sn=g({__name:"VPNav",setup(t){const{isScreenOpen:e,closeScreen:i,toggleScreen:l}=_l(),{frontmatter:s}=V(),r=P(()=>s.value.navbar!==!1);return Ot("close-screen",i),nt(()=>{ht&&document.documentElement.classList.toggle("hide-nav",!r.value)}),(f,c)=>r.value?(o(),d("header",Mn,[b(Js,{"is-screen-open":a(e),onToggleScreen:a(l)},{"nav-bar-title-before":u(()=>[h(f.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":u(()=>[h(f.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":u(()=>[h(f.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":u(()=>[h(f.$slots,"nav-bar-content-after",{},void 0,!0)]),_:3},8,["is-screen-open","onToggleScreen"]),b(Pn,{open:a(e)},{"nav-screen-content-before":u(()=>[h(f.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":u(()=>[h(f.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3},8,["open"])])):p("",!0)}}),Vn=L(Sn,[["__scopeId","data-v-e5ba47df"]]),Cn=["role","tabindex"],Tn={key:1,class:"items"},jn=g({__name:"VPSidebarItem",props:{item:{},depth:{}},setup(t){const e=t,{collapsed:i,collapsible:l,isLink:s,isActiveLink:r,hasActiveLink:f,hasChildren:c,toggle:x}=Pe(P(()=>e.item)),w=P(()=>c.value?"section":"div"),z=P(()=>s.value?"a":"div"),y=P(()=>c.value?e.depth+2===7?"p":`h${e.depth+2}`:"p"),m=P(()=>s.value?void 0:"button"),S=P(()=>[[`level-${e.depth}`],{collapsible:l.value},{collapsed:i.value},{"is-link":s.value},{"is-active":r.value},{"has-active":f.value}]);function M(N){"key"in N&&N.key!=="Enter"||!e.item.link&&x()}function T(){e.item.link&&x()}return(N,B)=>{const U=it("VPSidebarItem",!0);return o(),k(Z(w.value),{class:_(["VPSidebarItem",S.value])},{default:u(()=>[t.item.text?(o(),d("div",Q({key:0,class:"item",role:m.value},oe(t.item.items?{click:M,keydown:M}:{},!0),{tabindex:t.item.items&&0}),[B[1]||(B[1]=n("div",{class:"indicator"},null,-1)),t.item.link?(o(),k(W,{key:0,tag:z.value,class:"link",href:t.item.link,rel:t.item.rel,target:t.item.target},{default:u(()=>[(o(),k(Z(y.value),{class:"text",innerHTML:t.item.text},null,8,["innerHTML"]))]),_:1},8,["tag","href","rel","target"])):(o(),k(Z(y.value),{key:1,class:"text",innerHTML:t.item.text},null,8,["innerHTML"])),t.item.collapsed!=null&&t.item.items&&t.item.items.length?(o(),d("div",{key:2,class:"caret",role:"button","aria-label":"toggle section",onClick:T,onKeydown:ae(T,["enter"]),tabindex:"0"},[...B[0]||(B[0]=[n("span",{class:"vpi-chevron-right caret-icon"},null,-1)])],32)):p("",!0)],16,Cn)):p("",!0),t.item.items&&t.item.items.length?(o(),d("div",Tn,[t.depth<5?(o(!0),d(I,{key:0},E(t.item.items,J=>(o(),k(U,{key:J.text,item:J,depth:t.depth+1},null,8,["item","depth"]))),128)):p("",!0)])):p("",!0)]),_:1},8,["class"])}}}),In=L(jn,[["__scopeId","data-v-252b2cc7"]]),Nn=g({__name:"VPSidebarGroup",props:{items:{}},setup(t){const e=$(!0);let i=null;return O(()=>{i=setTimeout(()=>{i=null,e.value=!1},300)}),at(()=>{i!=null&&(clearTimeout(i),i=null)}),(l,s)=>(o(!0),d(I,null,E(t.items,r=>(o(),d("div",{key:r.text,class:_(["group",{"no-transition":e.value}])},[b(In,{item:r,depth:0},null,8,["item"])],2))),128))}}),An=L(Nn,[["__scopeId","data-v-06da47f7"]]),Hn={class:"nav",id:"VPSidebarNav","aria-labelledby":"sidebar-aria-label",tabindex:"-1"},Bn=g({__name:"VPSidebar",props:{open:{type:Boolean}},setup(t){const{sidebarGroups:e,hasSidebar:i}=R(),l=t,s=$(null),r=Dt(ht?document.body:null);K([l,s],()=>{var c;l.open?(r.value=!0,(c=s.value)==null||c.focus()):r.value=!1},{immediate:!0,flush:"post"});const f=$(0);return K(e,()=>{f.value+=1},{deep:!0}),(c,x)=>a(i)?(o(),d("aside",{key:0,class:_(["VPSidebar",{open:t.open}]),ref_key:"navEl",ref:s,onClick:x[0]||(x[0]=re(()=>{},["stop"]))},[x[2]||(x[2]=n("div",{class:"curtain"},null,-1)),n("nav",Hn,[x[1]||(x[1]=n("span",{class:"visually-hidden",id:"sidebar-aria-label"}," Sidebar Navigation ",-1)),h(c.$slots,"sidebar-nav-before",{},void 0,!0),(o(),k(An,{items:a(e),key:f.value},null,8,["items"])),h(c.$slots,"sidebar-nav-after",{},void 0,!0)])],2)):p("",!0)}}),En=L(Bn,[["__scopeId","data-v-5dc9f844"]]),Fn=g({__name:"VPSkipLink",setup(t){const{theme:e}=V(),i=ot(),l=$();K(()=>i.path,()=>l.value.focus());function s({target:r}){const f=document.getElementById(decodeURIComponent(r.hash).slice(1));if(f){const c=()=>{f.removeAttribute("tabindex"),f.removeEventListener("blur",c)};f.setAttribute("tabindex","-1"),f.addEventListener("blur",c),f.focus(),window.scrollTo(0,0)}}return(r,f)=>(o(),d(I,null,[n("span",{ref_key:"backToTop",ref:l,tabindex:"-1"},null,512),n("a",{href:"#VPContent",class:"VPSkipLink visually-hidden",onClick:s},C(a(e).skipToContentLabel||"Skip to content"),1)],64))}}),Dn=L(Fn,[["__scopeId","data-v-9813267a"]]),On=g({__name:"Layout",setup(t){const{isOpen:e,open:i,close:l}=R(),s=ot();K(()=>s.path,l),ze(e,l);const{frontmatter:r}=V(),f=fe(),c=P(()=>!!f["home-hero-image"]);return Ot("hero-image-slot-exists",c),(x,w)=>{const z=it("Content");return a(r).layout!==!1?(o(),d("div",{key:0,class:_(["Layout",a(r).pageClass])},[h(x.$slots,"layout-top",{},void 0,!0),b(Dn),b(he,{class:"backdrop",show:a(e),onClick:a(l)},null,8,["show","onClick"]),b(Vn,null,{"nav-bar-title-before":u(()=>[h(x.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":u(()=>[h(x.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":u(()=>[h(x.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":u(()=>[h(x.$slots,"nav-bar-content-after",{},void 0,!0)]),"nav-screen-content-before":u(()=>[h(x.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":u(()=>[h(x.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3}),b(bl,{open:a(e),onOpenMenu:a(i)},null,8,["open","onOpenMenu"]),b(En,{open:a(e)},{"sidebar-nav-before":u(()=>[h(x.$slots,"sidebar-nav-before",{},void 0,!0)]),"sidebar-nav-after":u(()=>[h(x.$slots,"sidebar-nav-after",{},void 0,!0)]),_:3},8,["open"]),b(ol,null,{"page-top":u(()=>[h(x.$slots,"page-top",{},void 0,!0)]),"page-bottom":u(()=>[h(x.$slots,"page-bottom",{},void 0,!0)]),"not-found":u(()=>[h(x.$slots,"not-found",{},void 0,!0)]),"home-hero-before":u(()=>[h(x.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":u(()=>[h(x.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":u(()=>[h(x.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":u(()=>[h(x.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":u(()=>[h(x.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":u(()=>[h(x.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":u(()=>[h(x.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":u(()=>[h(x.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":u(()=>[h(x.$slots,"home-features-after",{},void 0,!0)]),"doc-footer-before":u(()=>[h(x.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":u(()=>[h(x.$slots,"doc-before",{},void 0,!0)]),"doc-after":u(()=>[h(x.$slots,"doc-after",{},void 0,!0)]),"doc-top":u(()=>[h(x.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":u(()=>[h(x.$slots,"doc-bottom",{},void 0,!0)]),"aside-top":u(()=>[h(x.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":u(()=>[h(x.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":u(()=>[h(x.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":u(()=>[h(x.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":u(()=>[h(x.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":u(()=>[h(x.$slots,"aside-ads-after",{},void 0,!0)]),_:3}),b(cl),h(x.$slots,"layout-bottom",{},void 0,!0)],2)):(o(),k(z,{key:1}))}}}),Gn=L(On,[["__scopeId","data-v-d52dd4c4"]]),Rt={Layout:Gn,enhanceApp:({app:t})=>{t.component("Badge",de)}},Un={class:"hs-showcase"},Zn={key:"loading",class:"hs-loading"},Wn={class:"hs-loading-card"},qn={class:"hs-loading-bar"},Kn={class:"hs-loading-pct"},Rn={key:"update",class:"hs-update"},Jn={class:"hs-update-card"},Yn={class:"hs-update-bar"},Qn={class:"hs-update-pct"},Xn={class:"hs-update-steps"},to={key:"screen",class:"hs-stage"},eo={key:"control",class:"hs-stage"},io={key:"final",class:"hs-final"},jt=`
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
</svg>`,lo=`
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
</svg>`,It=`
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
</svg>`,Nt=`
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
</svg>`,so=g({__name:"HomeShowcase",setup(t){const e=$("loading"),i=$(0),l=$(0),s=["下载更新包","校验完整性","安装核心组件","配置本地服务","界面初始化"],r=[];let f,c;const x=()=>{r.forEach(y=>window.clearTimeout(y)),r.length=0,f&&window.clearInterval(f),c&&window.clearInterval(c)},w=()=>{c&&window.clearInterval(c),e.value="update",l.value=0,c=window.setInterval(()=>{l.value=Math.min(100,l.value+2)},45),r.push(window.setTimeout(()=>{c&&window.clearInterval(c),e.value="screen"},3200)),r.push(window.setTimeout(()=>{e.value="control"},9600)),r.push(window.setTimeout(()=>{e.value="final"},16e3))},z=()=>{window.removeEventListener("load",z),f&&window.clearInterval(f);const y=window.setInterval(()=>{i.value=Math.min(i.value+7,100),i.value>=100&&(window.clearInterval(y),r.push(window.setTimeout(w,420)))},28)};return O(()=>{f=window.setInterval(()=>{i.value=Math.min(i.value+Math.random()*9+3,88)},160),document.readyState==="complete"?z():window.addEventListener("load",z)}),at(x),(y,m)=>(o(),d("div",Un,[n("button",{class:"hs-replay",type:"button",onClick:w},"↻ 重播动画"),b(st,{name:"hs-fade",mode:"out-in"},{default:u(()=>[e.value==="loading"?(o(),d("div",Zn,[n("div",Wn,[n("div",{class:"hs-loading-logo",innerHTML:jt}),m[0]||(m[0]=n("p",{class:"hs-loading-text"},"正在加载页面…",-1)),n("div",qn,[n("div",{class:"hs-loading-fill",style:F({width:i.value+"%"})},null,4)]),n("div",Kn,C(Math.round(i.value))+"%",1)])])):e.value==="update"?(o(),d("div",Rn,[n("div",Jn,[n("div",{class:"hs-update-logo",innerHTML:jt}),m[1]||(m[1]=n("h3",{class:"hs-update-title"},"正在更新 AgoraIn",-1)),m[2]||(m[2]=n("p",{class:"hs-update-sub"},"v2.7 → v2.8 · 课堂签到打卡系统",-1)),n("div",Yn,[n("div",{class:"hs-update-fill",style:F({width:l.value+"%"})},null,4)]),n("div",Qn,C(l.value)+"%",1),n("div",Xn,[(o(),d(I,null,E(s,(S,M)=>n("span",{key:S,class:_({done:l.value>=(M+1)*20})},C(l.value>=(M+1)*20?"✓":"·")+" "+C(S),3)),64))])])])):e.value==="screen"?(o(),d("div",to,[m[3]||(m[3]=n("div",{class:"hs-stage-tag"},[n("span",{class:"hs-dot"}),q("大屏模式 · 课堂签到打卡")],-1)),n("div",{innerHTML:It})])):e.value==="control"?(o(),d("div",eo,[m[4]||(m[4]=n("div",{class:"hs-stage-tag"},[n("span",{class:"hs-dot"}),q("控制模式 · 课时划消与排课 + 集控平台")],-1)),n("div",{innerHTML:Nt})])):(o(),d("div",io,[n("div",{class:"hs-final-top"},[n("div",{class:"hs-final-icon",innerHTML:lo}),m[5]||(m[5]=n("div",{class:"hs-final-title"},"全新界面已就绪",-1))]),n("div",{class:"hs-final-row"},[n("div",{class:"hs-final-card",style:{"--d":"0s"}},[n("div",{innerHTML:It}),m[6]||(m[6]=n("div",{class:"hs-final-name"},"大屏模式",-1))]),n("div",{class:"hs-final-card",style:{"--d":".25s"}},[n("div",{innerHTML:Nt}),m[7]||(m[7]=n("div",{class:"hs-final-name"},"控制模式",-1))])])]))]),_:1})]))}}),no=g({__name:"Layout",setup(t){const e=ot(),{site:i,theme:l}=At(),s=P(()=>e.path==="/"),r={text:"项目",items:[{text:"AgoraIn 桌面端",link:"/"},{text:"移动多端应用",link:"/miniprogram/"}]},f=[{...r,activeMatch:"^/(?!miniprogram/)"},{text:"下载",link:"/download"},{text:"使用指南",items:[{text:"快速开始",link:"/guide"},{text:"功能特性",link:"/features"},{text:"API 文档",link:"/api"},{text:"部署指南",link:"/deploy"},{text:"常见问题",link:"/faq"}]},{text:"旧版文档（v2.7）",link:"/v2.7/"},{text:"v2.8",items:[{text:"更新日志",link:"https://github.com/liuyuchen012/AgoraIn/releases"},{text:"GitHub 仓库",link:"https://github.com/liuyuchen012/AgoraIn"}]}],c=[{...r,activeMatch:"^/miniprogram/"},{text:"下载",link:"/download"},{text:"功能特性",link:"/miniprogram/features"},{text:"快速开始",link:"/miniprogram/quickstart"},{text:"目录结构",link:"/miniprogram/structure"}];return nt(()=>{const x=e.path.startsWith("/miniprogram/");l.value.nav=x?c:f,i.value.title=x?"移动多端应用 | 课堂管理与演示":"AgoraIn | 课堂签到打卡系统"}),(x,w)=>(o(),k(a(Rt).Layout,null,{"home-hero-image":u(()=>[s.value?(o(),k(so,{key:0})):p("",!0)]),_:1}))}}),oo=`
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
</svg>`,ao=`
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
</svg>`,Ct=`
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
</svg>`,ro=`
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
</svg>`,fo=1920,co=1080;function yt(t,e,i){const l=fo*(.5-t/100*i),s=co*(.5-e/100*i);return`translate(${l.toFixed(1)}px, ${s.toFixed(1)}px) scale(${i.toFixed(3)})`}function xo(t,e){if(t<=e[0][0])return yt(e[0][1],e[0][2],e[0][3]);for(let l=0;l<e.length-1;l++){const[s,r,f,c]=e[l],[x,w,z,y]=e[l+1];if(t<=x){const m=Math.min(1,Math.max(0,(t-s)/(x-s))),S=m*m*(3-2*m);return yt(r+(w-r)*S,f+(z-f)*S,c+(y-c)*S)}}const i=e[e.length-1];return yt(i[1],i[2],i[3])}function lt(t){const e=$(0);let i;return O(()=>{i=window.setInterval(()=>{e.value+=.1},100)}),at(()=>{i!==void 0&&window.clearInterval(i)}),{lens:P(()=>xo(e.value,t))}}const ho=["innerHTML"],uo=g({__name:"IntroStage",setup(t){const{lens:e}=lt([[0,50,50,1],[12,50,50,1.18]]);return(i,l)=>(o(),d("section",{class:"vstage vs-intro",style:F({transform:a(e)})},[n("div",{class:"vs-intro-logo",innerHTML:a(Ct)},null,8,ho)],4))}}),vo={class:"vs-upd-card"},yo=["innerHTML"],go=g({__name:"UpdateStage",setup(t){const{lens:e}=lt([[0,50,50,1],[3,50,45,1.9],[10,50,45,1.9],[14,50,50,1],[18,50,50,1]]);return(i,l)=>(o(),d("section",{class:"vstage",style:F({transform:a(e)})},[n("div",vo,[n("div",{class:"vs-upd-logo",innerHTML:a(Ct)},null,8,yo),l[0]||(l[0]=n("div",{class:"vs-upd-bar"},[n("div",{class:"vs-upd-fill"})],-1))])],4))}}),mo={class:"vs-scr-wrap"},po=["innerHTML"],ko=g({__name:"ScreenStage",setup(t){const{lens:e}=lt([[0,50,50,1],[5,50,50,1],[7,61.2,40.9,2],[12,61.2,40.9,2],[13.5,34,35.6,2.6],[17,34,35.6,2.6],[18.5,61.1,29.1,2.9],[21,61.1,29.1,2.9],[23,50,50,1],[25,50,50,1]]);return(i,l)=>(o(),d("section",{class:"vstage vs-scr",style:F({transform:a(e)})},[n("div",mo,[n("div",{innerHTML:a(oo)},null,8,po)])],4))}}),wo={class:"vs-ctl-wrap"},bo=["innerHTML"],_o=g({__name:"ControlStage",setup(t){const{lens:e}=lt([[0,50,50,1],[4.5,50,50,1],[6.5,60.2,30.6,2.2],[10.5,60.2,30.6,2.2],[12,33.2,41.9,2.4],[15.5,33.2,41.9,2.4],[17,52.6,56.1,1.9],[20.5,52.6,56.1,1.9],[22,73.4,58.4,2.2],[23.5,73.4,58.4,2.2],[24.5,50,50,1],[25,50,50,1]]);return(i,l)=>(o(),d("section",{class:"vstage vs-ctl",style:F({transform:a(e)})},[n("div",wo,[n("div",{innerHTML:a(ao)},null,8,bo)])],4))}}),$o=g({__name:"ServerStage",setup(t){const{lens:e}=lt([[0,50,50,1],[3.5,50,50,1],[5.5,20,28,2.8],[9,20,28,2.8],[10.5,58,45,2.2],[14,58,45,2.2],[15.5,45,50,1.9],[18,45,50,1.9],[20,50,50,1]]);return(i,l)=>(o(),d("section",{class:"vstage vs-srv",style:F({transform:a(e)})},[...l[0]||(l[0]=[Y('<div class="vs-srv-stage"><svg class="vs-srv-lines" viewBox="0 0 1000 562.5" preserveAspectRatio="none"><line class="vs-srv-line" x1="150" y1="90" x2="640" y2="280"></line><line class="vs-srv-line" x1="150" y1="281" x2="640" y2="281"></line><line class="vs-srv-line" x1="150" y1="472" x2="640" y2="281"></line></svg><div class="vs-srv-node nd-a"><svg viewBox="0 0 24 24" width="52" height="52" fill="none" stroke="#60a5fa" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2.5" y="3.5" width="19" height="14" rx="2.5"></rect><path d="M9.5 21h5M12 17.5V21"></path></svg></div><div class="vs-srv-node nd-b"><svg viewBox="0 0 24 24" width="52" height="52" fill="none" stroke="#60a5fa" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2.5" y="3.5" width="19" height="14" rx="2.5"></rect><path d="M9.5 21h5M12 17.5V21"></path></svg></div><div class="vs-srv-node nd-c"><svg viewBox="0 0 24 24" width="52" height="52" fill="none" stroke="#60a5fa" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="7" y="2.5" width="10" height="19" rx="2.5"></rect><path d="M10.5 18.5h3"></path></svg></div><div class="vs-srv-core"><svg viewBox="0 0 48 48" width="96" height="96" aria-hidden="true"><rect x="6" y="6" width="36" height="14" rx="4" fill="#38bdf8"></rect><rect x="6" y="26" width="36" height="14" rx="4" fill="#38bdf8"></rect><circle cx="14" cy="13" r="2.4" fill="#0b1220"></circle><circle cx="22" cy="13" r="2.4" fill="#0b1220"></circle><circle cx="14" cy="33" r="2.4" fill="#0b1220"></circle><circle cx="22" cy="33" r="2.4" fill="#0b1220"></circle><rect x="30" y="11" width="8" height="4" rx="2" fill="#fff"></rect><rect x="30" y="31" width="8" height="4" rx="2" fill="#fff"></rect></svg></div></div>',1)])],4))}}),Lo=g({__name:"MobileStage",setup(t){const{lens:e}=lt([[0,50,45,1],[3,50,45,1],[5,38,45,2.2],[8,38,45,2.2],[10,62,45,2.2],[13,62,45,2.2],[14.5,50,66,2.5],[16,50,45,1]]);return(i,l)=>(o(),d("section",{class:"vstage",style:F({transform:a(e)})},[...l[0]||(l[0]=[Y('<div class="vs-mobile" data-v-8397cf82><div class="vs-mobile-icons" data-v-8397cf82><div class="vs-mobile-icon android-icon" data-v-8397cf82><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-v-8397cf82><path d="M17.523 15.341c-.5 0-.906-.405-.906-.905s.406-.906.906-.906c.5 0 .906.406.906.906s-.406.905-.906.905Zm-11.046 0c-.5 0-.906-.405-.906-.905s.406-.906.906-.906c.5 0 .906.406.906.906s-.406.905-.906.905Zm11.41-6.168 1.73-2.995a.408.408 0 0 0-.706-.408l-1.752 3.033c-1.316-.602-2.797-.946-4.37-.946-1.573 0-3.055.344-4.37.946L6.09 5.77a.408.408 0 0 0-.706.408l1.73 2.995C4.577 10.871 2.75 13.78 2.75 17.104h18.5c0-3.324-1.827-6.233-4.363-7.931ZM6.167 18.917c0 .506.41.916.916.916h.917v2.75c0 .76.615 1.375 1.375 1.375s1.375-.615 1.375-1.375v-2.75h2.25v2.75c0 .76.615 1.375 1.375 1.375s1.375-.615 1.375-1.375v-2.75h.917a.917.917 0 0 0 .916-.916V8.583H6.167v10.334Z" data-v-8397cf82></path></svg></div><div class="vs-mobile-icon web-icon" data-v-8397cf82><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-v-8397cf82><circle cx="12" cy="12" r="10" data-v-8397cf82></circle><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" data-v-8397cf82></path></svg></div></div><div class="vs-mobile-sync" data-v-8397cf82><span class="vs-sync-dot" data-v-8397cf82></span></div></div>',1)])],4))}}),zo=L(Lo,[["__scopeId","data-v-8397cf82"]]),Po=["innerHTML"],Mo=g({__name:"OutroStage",setup(t){const{lens:e}=lt([[0,50,50,1],[14,50,50,1.18]]);return(i,l)=>(o(),d("section",{class:"vstage vs-out",style:F({transform:a(e)})},[n("div",{class:"vs-out-logo",innerHTML:a(ro)},null,8,Po)],4))}}),So={class:"vshow"},Vo={class:"vshow-particles","aria-hidden":"true"},Co={class:"vshow-stage"},To={key:0,class:"vshow-tool"},jo={class:"vshow-clock"},Io=1920,No=1080,Ao=g({__name:"VideoShowcase",setup(t){const e=[{id:"intro",dur:12},{id:"update",dur:18},{id:"screen",dur:25},{id:"control",dur:25},{id:"server",dur:20},{id:"mobile",dur:16},{id:"outro",dur:14}],i=e.reduce((M,T)=>M+T.dur,0),l=[];let s=0;e.forEach(M=>{l.push(s),s+=M.dur});const r=$(0),f=$(0),c=$(!0),x=[];let w;const z=$(1);function y(){const M=window.innerWidth,T=window.innerHeight;z.value=Math.min(M/Io,T/No)}const m=M=>`${String(Math.floor(M/60)).padStart(2,"0")}:${String(Math.floor(M%60)).padStart(2,"0")}`,S=()=>{x.forEach(M=>window.clearTimeout(M)),x.length=0,w&&window.clearInterval(w),r.value=0,f.value=0,w=window.setInterval(()=>{f.value=Math.min(f.value+1,i)},1e3),e.forEach((M,T)=>{T!==0&&x.push(window.setTimeout(()=>{r.value=T},l[T]*1e3))})};return O(()=>{S(),y(),window.addEventListener("resize",y)}),at(()=>{x.forEach(M=>window.clearTimeout(M)),w&&window.clearInterval(w),window.removeEventListener("resize",y)}),(M,T)=>(o(),d("div",So,[T[1]||(T[1]=n("div",{class:"vshow-bg"},null,-1)),n("div",Vo,[(o(),d(I,null,E(14,N=>n("i",{key:N,style:F({"--p-delay":N*.9+"s","--p-x":N*7.3%100+"%","--p-size":3+N%5*2+"px"})},null,4)),64))]),n("div",{class:"vshow-scale",style:F({transform:"scale("+z.value+")"})},[n("div",Co,[b(st,{name:"v-fade",mode:"out-in"},{default:u(()=>[r.value===0?(o(),k(uo,{key:"intro"})):r.value===1?(o(),k(go,{key:"update"})):r.value===2?(o(),k(ko,{key:"screen"})):r.value===3?(o(),k(_o,{key:"control"})):r.value===4?(o(),k($o,{key:"server"})):r.value===5?(o(),k(zo,{key:"mobile"})):(o(),k(Mo,{key:"outro"}))]),_:1})])],4),c.value?(o(),d("div",To,[n("span",jo,C(m(f.value))+" / "+C(m(a(i))),1),n("button",{class:"vshow-btn",type:"button",onClick:S},"↻ 重播"),n("button",{class:"vshow-btn",type:"button",onClick:T[0]||(T[0]=N=>c.value=!1)},"隐藏")])):p("",!0)]))}}),Ho={class:"jk-root"},Bo={class:"jk-stage3d"},Eo={class:"jk-scene3d"},Fo={key:0,class:"jk-win"},Do={class:"jk-title"},Oo={class:"jk-body"},Go={class:"jk-grid"},Uo={key:1,class:"jk-win"},Zo={class:"jk-body"},Wo={class:"jk-nav"},qo={class:"jk-content"},Ko={key:0,class:"jk-platform"},Ro={key:0,class:"jk-plist"},Jo={key:1,class:"jk-placeholder"},Yo={key:2,class:"jk-console"},Qo={key:0,class:"jk-login"},Xo={key:1,class:"jk-tabs"},ta={class:"jk-tabbar"},ea={key:0,class:"jk-pane"},ia={class:"jk-cards"},la={key:1,class:"jk-pane"},sa={key:2,class:"jk-pane"},na={key:3,class:"jk-pane"},oa={class:"jk-att"},aa={class:"jk-att-chips"},ra={key:4,class:"jk-pane"},fa=["innerHTML"],da={class:"jk-subtitle"},ca=g({__name:"JikongShowcase",setup(t){const e=$({x:0,y:0,visible:!1,pressed:!1}),i=$(""),l=$(0),s=$(""),r=$("screen"),f=$("hours"),c=$({name:"",url:"",user:"",pass:"",lurl:"",luser:"",lpass:""}),x=$(!1),w=$(!1),z=$(!1),y=$("dash"),m=$(!1),S=$(!1);let M=[],T=[];const N=H=>{i.value=H,l.value++},B=(H,v)=>{M.push(window.setTimeout(v,H*1e3))};function U(H){const v=document.querySelector(H);if(!v)return;const j=v.getBoundingClientRect();e.value.visible=!0,e.value.pressed=!1,e.value.x=j.left+j.width/2,e.value.y=j.top+j.height/2}function J(H){s.value=H,B(.42,()=>{s.value=""})}function A(H,v,j,D=0){B(D,()=>{U(H),N(v),B(.7,()=>{e.value.pressed=!0,J(H),j==null||j(),B(.32,()=>{e.value.pressed=!1})})})}function G(H,v){let j=0;const D=window.setInterval(()=>{j++,c.value[H]=v.slice(0,j),j>=v.length&&window.clearInterval(D)},42);T.push(D)}function Jt(){M.forEach(H=>window.clearTimeout(H)),T.forEach(H=>window.clearInterval(H)),M=[],T=[],r.value="screen",f.value="hours",x.value=!1,w.value=!1,z.value=!1,y.value="dash",c.value={name:"",url:"",user:"",pass:"",lurl:"",luser:"",lpass:""},s.value="",m.value=!1,S.value=!1,e.value={x:0,y:0,visible:!1,pressed:!1}}function Yt(){Jt(),N("集控平台 · 全局掌控"),A("#mode-combo","一键切换 控制模式",()=>{r.value="control"},0),A("#nav-platforms","进入 集控平台列表",()=>{f.value="platforms"},1.6),A("#f-name","填写平台名称",()=>G("name","集控平台"),3),A("#f-url","指定服务器地址",()=>G("url","http://192.168.1.100:5250"),4.4),A("#f-user","管理员账号",()=>G("user","admin"),5.8),A("#f-pass","输入连接密码",()=>G("pass","••••••••"),7.2),A("#btn-connect","连接并加入！",()=>{x.value=!0},8.6),A("#platform-item","连接成功 ✓",()=>{},10),A("#btn-open","打开远程控制台",()=>{w.value=!0},11.4),A("#login-url","服务器地址",()=>G("lurl","http://192.168.1.100:5250"),12.8),A("#login-user","管理员账号",()=>G("luser","admin"),14.2),A("#login-pass","输入密码",()=>G("lpass","••••••••"),15.6),A("#btn-login","登 录",()=>{z.value=!0},17),A("#card-devices","仪表盘 · 数据一览",()=>{},18.4),A("#tab-devices","设备管理 · 一目了然",()=>{y.value="devices"},19.8),A("#tab-tasks","任务中心 · 短码签到",()=>{y.value="tasks"},21.2),A("#tab-attendance","考勤记录 · 实时同步",()=>{y.value="attendance"},22.6),A("#tab-users","用户管理 · 权限可控",()=>{y.value="users"},24),B(30,()=>{m.value=!0,N("让课堂管理更简单")}),B(34,()=>{S.value=!0,N("")})}return O(()=>{Yt()}),at(()=>{M.forEach(H=>window.clearTimeout(H)),T.forEach(H=>window.clearInterval(H))}),(H,v)=>(o(),d("div",Ho,[n("div",Bo,[n("div",Eo,[r.value==="screen"?(o(),d("div",Fo,[n("div",Do,[v[16]||(v[16]=n("span",{class:"jk-dot"},null,-1)),v[17]||(v[17]=n("b",{class:"jk-title-t"},"AgoraIn · 大屏模式",-1)),n("span",{id:"mode-combo",class:_(["jk-combo tgt",{zoom:s.value==="#mode-combo"}])},"控制模式 ▾",2),v[18]||(v[18]=n("span",{class:"jk-winbtn"},"— □ ✕",-1))]),n("div",Oo,[v[19]||(v[19]=n("div",{class:"jk-tree"},[n("div",{class:"jk-tree-item on"},"三（1）班"),n("div",{class:"jk-tree-item"},"三（2）班"),n("div",{class:"jk-tree-item"},"五（1）班")],-1)),n("div",Go,[(o(),d(I,null,E(30,(j,D)=>n("span",{key:D,class:_(["jk-cell",{blue:D<13}])},"学"+C(D+1),3)),64))]),v[20]||(v[20]=n("div",{class:"jk-rank"},[n("div",{class:"jk-rank-item gold"},"1 张同学 · 08:00"),n("div",{class:"jk-rank-item silver"},"2 李同学 · 08:01"),n("div",{class:"jk-rank-item bronze"},"3 王同学 · 08:02")],-1))])])):(o(),d("div",Uo,[v[26]||(v[26]=Y('<div class="jk-title"><span class="jk-dot"></span><b class="jk-title-t">AgoraIn · 控制中心</b><span class="jk-combo on">控制模式 ▾</span><span class="jk-winbtn">— □ ✕</span></div><div class="jk-stats"><div class="jk-stat"><i>总设备数量</i><b>12</b></div><div class="jk-stat"><i>总任务数量</i><b>3</b></div><div class="jk-stat"><i>在线设备数量</i><b>10</b></div></div>',2)),n("div",Zo,[n("div",Wo,[n("div",{class:_(["jk-nav-item",{on:f.value==="hours"}]),onClick:v[0]||(v[0]=j=>f.value="hours")},"划课",2),n("div",{class:_(["jk-nav-item",{on:f.value==="devices"}]),onClick:v[1]||(v[1]=j=>f.value="devices")},"设备列表",2),n("div",{class:_(["jk-nav-item",{on:f.value==="tasks"}]),onClick:v[2]||(v[2]=j=>f.value="tasks")},"任务中心",2),n("div",{id:"nav-platforms",class:_(["jk-nav-item tgt",{on:f.value==="platforms",zoom:s.value==="#nav-platforms"}]),onClick:v[3]||(v[3]=j=>f.value="platforms")},"集控平台列表",2)]),n("div",qo,[f.value==="platforms"?(o(),d("div",Ko,[v[21]||(v[21]=n("h3",{class:"jk-h3"},"连接集控平台",-1)),v[22]||(v[22]=n("label",{class:"jk-label"},"平台名称",-1)),X(n("input",{id:"f-name",class:_(["jk-input tgt",{zoom:s.value==="#f-name"}]),"onUpdate:modelValue":v[4]||(v[4]=j=>c.value.name=j),placeholder:"集控平台",readonly:""},null,2),[[tt,c.value.name]]),v[23]||(v[23]=n("label",{class:"jk-label"},"平台地址",-1)),X(n("input",{id:"f-url",class:_(["jk-input tgt",{zoom:s.value==="#f-url"}]),"onUpdate:modelValue":v[5]||(v[5]=j=>c.value.url=j),placeholder:"http://192.168.1.100:5250",readonly:""},null,2),[[tt,c.value.url]]),v[24]||(v[24]=n("label",{class:"jk-label"},"用户名",-1)),X(n("input",{id:"f-user",class:_(["jk-input tgt",{zoom:s.value==="#f-user"}]),"onUpdate:modelValue":v[6]||(v[6]=j=>c.value.user=j),placeholder:"admin",readonly:""},null,2),[[tt,c.value.user]]),v[25]||(v[25]=n("label",{class:"jk-label"},"密码",-1)),X(n("input",{id:"f-pass",class:_(["jk-input tgt",{zoom:s.value==="#f-pass"}]),"onUpdate:modelValue":v[7]||(v[7]=j=>c.value.pass=j),type:"password",readonly:""},null,2),[[tt,c.value.pass]]),n("button",{id:"btn-connect",class:_(["jk-btn tgt",{done:x.value,zoom:s.value==="#btn-connect"}])},"连接并加入列表",2),x.value?(o(),d("div",Ro,[n("div",{id:"platform-item",class:_(["jk-plist-item tgt",{zoom:s.value==="#platform-item"}])},"集控平台 · 在线",2),n("button",{id:"btn-open",class:_(["jk-btn tgt",{zoom:s.value==="#btn-open"}])},"打开远程控制台",2)])):p("",!0)])):(o(),d("div",Jo,C(f.value==="hours"?"课时划消与排课面板":f.value==="devices"?"设备列表（集控聚合）":"任务中心"),1))])])])),w.value?(o(),d("div",Yo,[v[40]||(v[40]=n("div",{class:"jk-title"},[n("span",{class:"jk-dot"}),n("b",{class:"jk-title-t"},"AgoraIn · 远程控制"),n("span",{class:"jk-winbtn"},"— ✕")],-1)),z.value?(o(),d("div",Xo,[n("div",ta,[n("span",{id:"tab-dash",class:_(["jk-tab tgt",{on:y.value==="dash"}]),onClick:v[11]||(v[11]=j=>y.value="dash")},"仪表盘",2),n("span",{id:"tab-devices",class:_(["jk-tab tgt",{on:y.value==="devices",zoom:s.value==="#tab-devices"}]),onClick:v[12]||(v[12]=j=>y.value="devices")},"设备管理",2),n("span",{id:"tab-tasks",class:_(["jk-tab tgt",{on:y.value==="tasks",zoom:s.value==="#tab-tasks"}]),onClick:v[13]||(v[13]=j=>y.value="tasks")},"任务管理",2),n("span",{id:"tab-attendance",class:_(["jk-tab tgt",{on:y.value==="attendance",zoom:s.value==="#tab-attendance"}]),onClick:v[14]||(v[14]=j=>y.value="attendance")},"考勤",2),n("span",{id:"tab-users",class:_(["jk-tab tgt",{on:y.value==="users",zoom:s.value==="#tab-users"}]),onClick:v[15]||(v[15]=j=>y.value="users")},"用户管理",2)]),y.value==="dash"?(o(),d("div",ea,[n("div",ia,[n("div",{id:"card-devices",class:_(["jk-card tgt c1",{zoom:s.value==="#card-devices"}])},[...v[32]||(v[32]=[n("i",null,"设备总数",-1),n("b",null,"12",-1)])],2),v[33]||(v[33]=Y('<div class="jk-card c2"><i>在线设备</i><b>10</b></div><div class="jk-card c3"><i>今日签到</i><b>86</b></div><div class="jk-card c4"><i>活跃任务</i><b>3</b></div><div class="jk-card c5"><i>用户总数</i><b>5</b></div>',4))]),v[34]||(v[34]=Y('<div class="jk-cols"><div class="jk-col"><b class="jk-col-h">设备列表</b><div class="jk-row2"><span>三（1）班 大屏</span><em>在线</em></div><div class="jk-row2"><span>三（2）班 大屏</span><em>在线</em></div><div class="jk-row2 off"><span>办公室 主机</span><em>离线</em></div></div><div class="jk-col"><b class="jk-col-h">活跃签到任务</b><div class="jk-row2"><span>数学 · 三（1）班</span><em>45/38</em></div><div class="jk-row2"><span>语文 · 三（2）班</span><em>42/40</em></div><div class="jk-row2"><span>英语 · 五（1）班</span><em>48/30</em></div></div></div>',1))])):y.value==="devices"?(o(),d("div",la,[...v[35]||(v[35]=[Y('<table class="jk-table"><tr><th>设备名称</th><th>状态</th><th>最近在线</th><th>UUID</th></tr><tr><td>三（1）班 大屏</td><td class="on">在线</td><td>刚刚</td><td>a1b2-c3d4-e5f6</td></tr><tr><td>三（2）班 大屏</td><td class="on">在线</td><td>刚刚</td><td>11aa-22bb-33cc</td></tr><tr><td>办公室 主机</td><td class="off">离线</td><td>昨天 17:20</td><td>9988-7766-5544</td></tr></table>',1)])])):y.value==="tasks"?(o(),d("div",sa,[...v[36]||(v[36]=[Y('<table class="jk-table"><tr><th>科目</th><th>教室</th><th>短码</th><th>状态</th><th>学生/已签</th></tr><tr><td>数学</td><td>三（1）班</td><td class="blue">a8x2</td><td class="on">进行中</td><td>45 / 38</td></tr><tr><td>语文</td><td>三（2）班</td><td class="blue">k9q7</td><td class="on">进行中</td><td>42 / 40</td></tr><tr><td>英语</td><td>五（1）班</td><td class="blue">m3n1</td><td>已关闭</td><td>48 / 48</td></tr></table>',1)])])):y.value==="attendance"?(o(),d("div",na,[n("div",oa,[v[37]||(v[37]=n("div",{class:"jk-att-h"},[n("b",null,"三（1）班 大屏 · 数学"),n("span",{class:"jk-rate"},"84%")],-1)),v[38]||(v[38]=n("div",{class:"jk-att-sub"},"应到 45 人 · 已到 38 人 · 未到 7 人",-1)),n("div",aa,[(o(),d(I,null,E(20,(j,D)=>n("span",{key:D,class:_({miss:D>=17})},C(D+1)+"号 "+C(D>=17?"✗":"✓"),3)),64))])])])):(o(),d("div",ra,[...v[39]||(v[39]=[Y('<table class="jk-table"><tr><th>用户名</th><th>显示名</th><th>角色</th><th>状态</th></tr><tr><td>admin</td><td>系统管理员</td><td>超级管理员</td><td class="on">启用</td></tr><tr><td>teacher01</td><td>张老师</td><td>教师</td><td class="on">启用</td></tr><tr><td>parent08</td><td>王妈妈</td><td>家长</td><td class="on">启用</td></tr></table>',1)])]))])):(o(),d("div",Qo,[v[27]||(v[27]=n("h3",{class:"jk-h3"},"远程打卡服务器控制",-1)),v[28]||(v[28]=n("p",{class:"jk-login-sub"},"登录后即可查看设备、任务与考勤",-1)),v[29]||(v[29]=n("label",{class:"jk-label"},"服务器地址",-1)),X(n("input",{id:"login-url",class:_(["jk-input tgt",{zoom:s.value==="#login-url"}]),"onUpdate:modelValue":v[8]||(v[8]=j=>c.value.lurl=j),placeholder:"http://192.168.1.100:5250",readonly:""},null,2),[[tt,c.value.lurl]]),v[30]||(v[30]=n("label",{class:"jk-label"},"用户名",-1)),X(n("input",{id:"login-user",class:_(["jk-input tgt",{zoom:s.value==="#login-user"}]),"onUpdate:modelValue":v[9]||(v[9]=j=>c.value.luser=j),placeholder:"admin",readonly:""},null,2),[[tt,c.value.luser]]),v[31]||(v[31]=n("label",{class:"jk-label"},"密码",-1)),X(n("input",{id:"login-pass",class:_(["jk-input tgt",{zoom:s.value==="#login-pass"}]),"onUpdate:modelValue":v[10]||(v[10]=j=>c.value.lpass=j),type:"password",readonly:""},null,2),[[tt,c.value.lpass]]),n("button",{id:"btn-login",class:_(["jk-btn tgt jk-btn-login",{zoom:s.value==="#btn-login"}])},"登 录",2)])),v[41]||(v[41]=n("div",{class:"jk-statusbar"},"远程打卡服务器控制 · 已连接 1 个集控平台",-1))])):p("",!0)])]),m.value?(o(),d("div",{key:0,class:_(["jk-logo",{freeze:S.value}])},[n("div",{class:"jk-logo-svg",innerHTML:a(Ct)},null,8,fa)],2)):p("",!0),v[43]||(v[43]=n("div",{class:"jk-statusbar jk-statusbar-b"},[n("span",{class:"jk-green-dot"}),q(" AgoraIn · 集控平台演示　已连接 1 个平台 · 12 台设备 · 10 台在线 ")],-1)),n("div",da,[(o(),d("span",{key:l.value,class:"jk-sub-text"},C(i.value),1))]),n("div",{class:_(["jk-cursor",{hidden:!e.value.visible,pressed:e.value.pressed}]),style:F({left:e.value.x+"px",top:e.value.y+"px"})},[...v[42]||(v[42]=[n("svg",{viewBox:"0 0 24 24",width:"26",height:"26"},[n("path",{d:"M4 1 L4 20 L9.5 16.5 L12 23 L15 21.5 L12.5 15 L20 13 Z",fill:"#fff",stroke:"#1e293b","stroke-width":"1.4"})],-1)])],6)]))}}),ha={extends:Rt,Layout:no,enhanceApp({app:t}){t.component("VideoShowcase",Ao),t.component("JikongShowcase",ca)}};export{ha as R,Ls as c,V as u};
