"use strict";(self.webpackChunkhpc_tutorial_website=self.webpackChunkhpc_tutorial_website||[]).push([[1439],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=l(r),f=o,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||s;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,i=new Array(s);i[0]=f;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[d]="string"==typeof e?e:o,i[1]=a;for(var l=2;l<s;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6429:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const s={sidebar_position:5},i="How to request access on GLiCID Cluster?",a={unversionedId:"tutorial-basics/request-access",id:"tutorial-basics/request-access",title:"How to request access on GLiCID Cluster?",description:"1. Create an account on https://clam.glicid.fr (school account, or CRU account for external users).",source:"@site/docs/tutorial-basics/request-access.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/request-access",permalink:"/docs/docs/tutorial-basics/request-access",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-basics/request-access.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Secure Shell (SSH)",permalink:"/docs/docs/tutorial-basics/ssh"},next:{title:"Introduction to SLURM",permalink:"/docs/docs/tutorial-basics/slurm"}},c={},l=[{value:"To access the cluster from outside ECN Network.",id:"to-access-the-cluster-from-outside-ecn-network",level:2}],u={toc:l},d="wrapper";function p(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-request-access-on-glicid-cluster"},"How to request access on GLiCID Cluster?"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"1. Create an account on https://clam.glicid.fr (school account, or CRU account for external users).\n2. Account validation by an administrator\n3. User sends SSH key to CLAM portal (in profile's SSH Access tab).\n4. SSH key processed by administrator\n5. SSH connection configuration (found in the profile's SSH Access tab):\n    - For Linux and MacOS, edit the .ssh/config file and add the following:\n\n    Host Bastion\n        Hostname banzai.glicid.fr\n        User doe-j\n        IdentityFile ~/.ssh/SSH_KEY_GLICID\n        ForwardAgent yes\n\n    Host GLiCID\n        Hostname login-001.glicid.fr\n        User jdoe@mondomaine.org\n        ProxyJump Bastion\n        IdentityFile ~/.ssh/SSH_KEY_GLICID \n\n    Attention: The Host Bastion User is the family name separated from the first letter of the first name by a hyphen. This is provisional and will soon be defined in CLAM. The GLiCID Host User is the login you use on CLAM. It is your identifier for the entire GLiCID platform.\n\n    - For Windows, use MobaXTerm. With this tool, you can easily configure the GLiCID host, as well as the Jump proxy to Bastion.\n\n6. Now that everything's set up, you can log in using the session created in MobaXTerm (Windows), or with the GLiCID ssh command from a terminal (Linux and MacOS).\n\nNote: Avoid using passwords on the GLiCID platform\n")),(0,o.kt)("h2",{id:"to-access-the-cluster-from-outside-ecn-network"},"To access the cluster from outside ECN Network."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    - Install ECN VPV\n")))}p.isMDXComponent=!0}}]);