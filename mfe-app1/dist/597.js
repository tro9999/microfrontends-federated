"use strict";(self.webpackChunk_dynamic_system_host_mfe_app1=self.webpackChunk_dynamic_system_host_mfe_app1||[]).push([[597],{790:(e,r,o)=>{o.r(r);var i=o(369),t=o.n(i),p=o(785),n=o(573),a=o(623);const l=({collapsed:e,rtl:r,toggled:o,handleToggleSidebar:i,handleApp2:p,handleApp3:l})=>{const d=(0,n.Z)();return t().createElement(a.M7,{rtl:r,collapsed:e,toggled:o,breakPoint:"md",onToggle:i},t().createElement(a.$l,null,t().createElement("div",{style:{padding:"24px",fontWeight:"bold",fontSize:14,letterSpacing:"1px",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},d.formatMessage({id:"sidebarTitle"}))),t().createElement(a.TZ,null,t().createElement(a.v2,{iconShape:"circle"},t().createElement(a.sN,{onClick:p},d.formatMessage({id:"mfeApp2"})),t().createElement(a.sN,{onClick:l}," ",d.formatMessage({id:"mfeApp3"})))))};var d=o(197),s=o.n(d);const m=e=>{const[r,p]=(0,i.useState)(!1),[n,a]=(0,i.useState)(!1);if(!e.system)return t().createElement("h2",null,"Not micro-frontend loaded");let l=null;var d,m;return(d=e.system.remote,"default",m=e.system.url,new Promise(((e,r)=>{if(window[d])e();else{const p=document.querySelector(`[data-webpack="${d}"]`),n=async()=>{window[d].__initialized||(await window[d].init(o.S.default),window[d].__initialized=!0),e()};if(p)p.onload=n,p.onerror=r;else if(m){var i=document,t=i.createElement("script");t.type="text/javascript",t.setAttribute("data-webpack",`${d}`),t.async=!0,t.onerror=r,t.onload=n,t.src=m,i.getElementsByTagName("head")[0].appendChild(t)}else r(`Cannot Find Remote ${d} to inject`)}}))).then((()=>{l=t().lazy(t().createElement("div",null,"Ready")),p(!0)}),(e=>{console.log("ERROR ",e),a(!0)})),t().createElement(i.Suspense,{fallback:t().createElement(s(),{color:"#353535",loading:!r,size:50})},!r&&t().createElement("div",null,"Still loading..."),r&&t().createElement(l,null))},u=({system:e})=>t().createElement("main",null,t().createElement("div",{style:{marginTop:"2em"}},t().createElement(m,{system:e}))),b="https://cdn.jsdelivr.net/gh/tro9999/microfrontends-federated",g=function({setApp2:e,setApp3:r}){const[o,p]=(0,i.useState)(!1),[n,a]=(0,i.useState)(!0),[d,s]=(0,i.useState)(!1),[m,g]=t().useState(void 0),c=`${b}/mfe-app2/dist/remoteEntry.js`,x=`${b}/mfe-app3/dist/remoteEntry.js`;return t().createElement("div",{className:`app ${o?"rtl":""} ${d?"toggled":""}`},t().createElement(l,{image:n,handleApp2:function(){g({url:c,remote:"mfeApp2",module:"./App"})},handleApp3:function(){g({url:x,remote:"mfeApp3",module:"./App"})}}),t().createElement(u,{image:n,system:m}))},c={en:{title:"React Pro Sidebar",sidebarTitle:"MFE_Derated",description:"React sidebar library with dropdown menus and unlimited number of nested submenus",mfeApp2:"First remote MFE",mfeApp3:"Second remote MFE",dropdown:"Dropdown",submenu:"Submenu",multiLevel:"Multi Level",collapsed:"Collapsed",rtl:"RTL",image:"Background image",new:"NEW",withPrefix:"With Prefix",withSuffix:"With Suffix",viewSource:"View Source"}};var x=o(892),f=o.n(x),h=o(760),w=o.n(h),y=o(311),v=o.n(y),k=o(192),E=o.n(k),S=o(60),z=o.n(S),A=o(865),_=o.n(A),j=o(909),R={};R.styleTagTransform=_(),R.setAttributes=E(),R.insert=v().bind(null,"head"),R.domAPI=w(),R.insertStyleElement=z(),f()(j.Z,R),j.Z&&j.Z.locals&&j.Z.locals;const T=function(){const[e,r]=(0,i.useState)("en");return t().createElement(t().Fragment,null,t().createElement(p.Z,{locale:e,messages:c[e]},t().createElement(g,null)))};var M=o(679);o.n(M)().render(t().createElement(T,null),document.getElementById("root"))},909:(e,r,o)=>{o.d(r,{Z:()=>a});var i=o(933),t=o.n(i),p=o(476),n=o.n(p)()(t());n.push([e.id,"@import url(https://fonts.googleapis.com/css?family=Roboto&display=swap);"]),n.push([e.id,'@keyframes swing{0%,30%,50%,70%,100%{transform:rotate(0deg)}10%{transform:rotate(10deg)}40%{transform:rotate(-10deg)}60%{transform:rotate(5deg)}80%{transform:rotate(-5deg)}}.pro-sidebar{color:#b3b8d4;height:100%;width:270px;min-width:270px;text-align:left;transition:width,left,right,.3s;position:relative;z-index:1009}.pro-sidebar>.pro-sidebar-inner{background:#0c1e35;height:100%;position:relative;z-index:101}.pro-sidebar>.pro-sidebar-inner>img.sidebar-bg{width:100%;height:100%;object-fit:cover;object-position:center;position:absolute;opacity:.3;left:0;top:0;z-index:100}.pro-sidebar>.pro-sidebar-inner>.pro-sidebar-layout{height:100%;overflow-y:auto;overflow-x:hidden;position:relative;display:flex;flex-direction:column;z-index:101}.pro-sidebar>.pro-sidebar-inner>.pro-sidebar-layout .pro-sidebar-header{border-bottom:1px solid rgba(179,184,212,.2)}.pro-sidebar>.pro-sidebar-inner>.pro-sidebar-layout .pro-sidebar-content{flex-grow:1}.pro-sidebar>.pro-sidebar-inner>.pro-sidebar-layout .pro-sidebar-footer{border-top:1px solid rgba(179,184,212,.2)}.pro-sidebar>.pro-sidebar-inner>.pro-sidebar-layout ul{list-style-type:none;padding:0;margin:0}.pro-sidebar .overlay{position:fixed;top:0;right:0;bottom:0;left:0;background-color:rgba(0,0,0,.3);z-index:100;display:none}.pro-sidebar.collapsed{width:80px;min-width:80px}.pro-sidebar.rtl{text-align:right;direction:rtl}@media(max-width: 480px){.pro-sidebar.xs{position:fixed;left:-270px}.pro-sidebar.xs.collapsed{left:-80px}.pro-sidebar.xs.toggled{left:0}.pro-sidebar.xs.toggled .overlay{display:block}.pro-sidebar.xs.rtl{left:auto;right:-270px}.pro-sidebar.xs.rtl.collapsed{left:auto;right:-80px}.pro-sidebar.xs.rtl.toggled{left:auto;right:0}}@media(max-width: 576px){.pro-sidebar.sm{position:fixed;left:-270px}.pro-sidebar.sm.collapsed{left:-80px}.pro-sidebar.sm.toggled{left:0}.pro-sidebar.sm.toggled .overlay{display:block}.pro-sidebar.sm.rtl{left:auto;right:-270px}.pro-sidebar.sm.rtl.collapsed{left:auto;right:-80px}.pro-sidebar.sm.rtl.toggled{left:auto;right:0}}@media(max-width: 768px){.pro-sidebar.md{position:fixed;left:-270px}.pro-sidebar.md.collapsed{left:-80px}.pro-sidebar.md.toggled{left:0}.pro-sidebar.md.toggled .overlay{display:block}.pro-sidebar.md.rtl{left:auto;right:-270px}.pro-sidebar.md.rtl.collapsed{left:auto;right:-80px}.pro-sidebar.md.rtl.toggled{left:auto;right:0}}@media(max-width: 992px){.pro-sidebar.lg{position:fixed;left:-270px}.pro-sidebar.lg.collapsed{left:-80px}.pro-sidebar.lg.toggled{left:0}.pro-sidebar.lg.toggled .overlay{display:block}.pro-sidebar.lg.rtl{left:auto;right:-270px}.pro-sidebar.lg.rtl.collapsed{left:auto;right:-80px}.pro-sidebar.lg.rtl.toggled{left:auto;right:0}}@media(max-width: 1200px){.pro-sidebar.xl{position:fixed;left:-270px}.pro-sidebar.xl.collapsed{left:-80px}.pro-sidebar.xl.toggled{left:0}.pro-sidebar.xl.toggled .overlay{display:block}.pro-sidebar.xl.rtl{left:auto;right:-270px}.pro-sidebar.xl.rtl.collapsed{left:auto;right:-80px}.pro-sidebar.xl.rtl.toggled{left:auto;right:0}}@media(max-width: 1600px){.pro-sidebar.xxl{position:fixed;left:-270px}.pro-sidebar.xxl.collapsed{left:-80px}.pro-sidebar.xxl.toggled{left:0}.pro-sidebar.xxl.toggled .overlay{display:block}.pro-sidebar.xxl.rtl{left:auto;right:-270px}.pro-sidebar.xxl.rtl.collapsed{left:auto;right:-80px}.pro-sidebar.xxl.rtl.toggled{left:auto;right:0}}.pro-sidebar .pro-menu.submenu-bullets .pro-menu-item.pro-sub-menu .pro-inner-list-item .pro-inner-item:before{content:"";display:inline-block;width:4px;min-width:4px;height:4px;border:1px solid rgba(255,255,255,.05);border-radius:50%;margin-right:15px;position:relative;box-shadow:1px 0px 0px #b3b8d4,0px -1px 0px #b3b8d4,0px 1px 0px #b3b8d4,-1px 0px 0px #b3b8d4}.pro-sidebar .pro-menu .pro-menu-item>.pro-inner-item>.pro-item-content{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.pro-sidebar .pro-menu{padding-top:10px;padding-bottom:10px}.pro-sidebar .pro-menu>ul>.pro-sub-menu>.pro-inner-list-item{position:relative;background-color:rgba(255,255,255,.05)}.pro-sidebar .pro-menu>ul>.pro-sub-menu>.pro-inner-list-item>div>ul{padding-top:15px;padding-bottom:15px}.pro-sidebar .pro-menu a{text-decoration:none;color:#b3b8d4}.pro-sidebar .pro-menu a:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;background-color:transparent}.pro-sidebar .pro-menu a:hover{color:#dee2ec}.pro-sidebar .pro-menu .pro-menu-item{font-size:15px}.pro-sidebar .pro-menu .pro-menu-item.active{color:#dee2ec}.pro-sidebar .pro-menu .pro-menu-item .suffix-wrapper{opacity:1;transition:opacity .2s}.pro-sidebar .pro-menu .pro-menu-item .prefix-wrapper{display:flex;margin-right:5px;opacity:1;transition:opacity .2s}.pro-sidebar .pro-menu .pro-menu-item>.pro-inner-item{position:relative;display:flex;align-items:center;padding:8px 35px 8px 20px;cursor:pointer}.pro-sidebar .pro-menu .pro-menu-item>.pro-inner-item:focus{outline:none;color:#dee2ec}.pro-sidebar .pro-menu .pro-menu-item>.pro-inner-item>.pro-icon-wrapper{margin-right:10px;font-size:14px;width:35px;min-width:35px;height:35px;line-height:35px;text-align:center;display:inline-block}.pro-sidebar .pro-menu .pro-menu-item>.pro-inner-item>.pro-icon-wrapper .pro-icon{display:flex;height:100%;align-items:center;justify-content:center}.pro-sidebar .pro-menu .pro-menu-item>.pro-inner-item>.pro-item-content{flex-grow:1;flex-shrink:1}.pro-sidebar .pro-menu .pro-menu-item>.pro-inner-item:hover{color:#dee2ec}.pro-sidebar .pro-menu .pro-menu-item>.pro-inner-item:hover .pro-icon-wrapper .pro-icon{animation:swing ease-in-out .5s 1 alternate}.pro-sidebar .pro-menu .pro-menu-item.pro-sub-menu>.pro-inner-item:before{background:#b3b8d4}.pro-sidebar .pro-menu .pro-menu-item.pro-sub-menu>.pro-inner-item>.pro-arrow-wrapper{position:absolute;right:20px;top:50%;transform:translateY(-50%)}.pro-sidebar .pro-menu .pro-menu-item.pro-sub-menu>.pro-inner-item>.pro-arrow-wrapper .pro-arrow{display:inline-block;border-style:solid;border-color:#b3b8d4;border-width:0 2px 2px 0;padding:2.5px;vertical-align:middle;transition:transform .3s;transform:rotate(-45deg)}.pro-sidebar .pro-menu .pro-menu-item.pro-sub-menu.open>.pro-inner-item:before{background:transparent !important}.pro-sidebar .pro-menu .pro-menu-item.pro-sub-menu.open>.pro-inner-item>.pro-arrow-wrapper .pro-arrow{transform:rotate(45deg)}.pro-sidebar .pro-menu .pro-menu-item.pro-sub-menu .pro-inner-list-item{padding-left:24px}.pro-sidebar .pro-menu .pro-menu-item.pro-sub-menu .pro-inner-list-item .pro-inner-item{padding:8px 30px 8px 15px}.pro-sidebar .pro-menu .pro-menu-item.pro-sub-menu .pro-inner-list-item .pro-inner-item>.pro-icon-wrapper{background:none;width:auto;min-width:auto;height:auto;line-height:auto}.pro-sidebar .pro-menu:not(.inner-submenu-arrows) .pro-inner-list-item .pro-menu-item.pro-sub-menu .pro-inner-item .pro-arrow-wrapper{display:none}.pro-sidebar .pro-menu.shaped .pro-menu-item>.pro-inner-item>.pro-icon-wrapper{background-color:rgba(255,255,255,.05)}.pro-sidebar .pro-menu.square .pro-menu-item>.pro-inner-item>.pro-icon-wrapper{border-radius:0}.pro-sidebar .pro-menu.round .pro-menu-item>.pro-inner-item>.pro-icon-wrapper{border-radius:4px}.pro-sidebar .pro-menu.circle .pro-menu-item>.pro-inner-item>.pro-icon-wrapper{border-radius:50%}.pro-sidebar.collapsed .pro-menu>ul>.pro-menu-item{position:relative}.pro-sidebar.collapsed .pro-menu>ul>.pro-menu-item>.pro-inner-item>.suffix-wrapper,.pro-sidebar.collapsed .pro-menu>ul>.pro-menu-item>.pro-inner-item>.prefix-wrapper{opacity:0}.pro-sidebar.collapsed .pro-menu>ul>.pro-menu-item>.pro-inner-list-item{background-color:rgba(12,30,53,.95);z-index:111}.pro-sidebar.collapsed .pro-menu>ul>.pro-menu-item::before{content:"";display:inline-block;position:absolute;top:0;bottom:0;left:0;right:0;cursor:pointer}.pro-sidebar.collapsed .pro-menu>ul>.pro-menu-item.pro-sub-menu{position:relative}.pro-sidebar.collapsed .pro-menu>ul>.pro-menu-item.pro-sub-menu>.pro-inner-item{pointer-events:none}.pro-sidebar.collapsed .pro-menu>ul>.pro-menu-item.pro-sub-menu>.pro-inner-item>.pro-arrow-wrapper{display:none}.pro-sidebar.collapsed .pro-menu>ul>.pro-menu-item.pro-sub-menu>.pro-inner-list-item{height:auto !important;position:fixed;visibility:hidden;min-width:220px;max-width:270px;background-color:transparent;max-height:100%;padding-left:3px}.pro-sidebar.collapsed .pro-menu>ul>.pro-menu-item.pro-sub-menu>.pro-inner-list-item.has-arrow{padding-left:10px}.pro-sidebar.collapsed .pro-menu>ul>.pro-menu-item.pro-sub-menu>.pro-inner-list-item>.popper-inner{max-height:100vh;overflow-y:auto;background-color:rgba(12,30,53,.95);padding-left:20px;border-radius:4px}.pro-sidebar.collapsed .pro-menu>ul>.pro-menu-item.pro-sub-menu:hover>.pro-inner-list-item{transition:visibility,transform .3s;visibility:visible}.pro-sidebar.collapsed .pro-menu>ul>.pro-menu-item.pro-sub-menu:hover .pro-icon-wrapper .pro-icon{animation:swing ease-in-out .5s 1 alternate}.pro-sidebar.collapsed .pro-menu>ul>.pro-menu-item.pro-sub-menu .pro-inner-list-item .pro-sub-menu-item,.pro-sidebar.collapsed .pro-menu>ul>.pro-menu-item.pro-sub-menu .pro-inner-list-item .pro-inner-item{padding:8px 30px 8px 5px}.pro-sidebar.rtl .pro-menu .pro-menu-item .prefix-wrapper{margin-right:0;margin-left:5px}.pro-sidebar.rtl .pro-menu .pro-menu-item>.pro-inner-item{padding:8px 20px 8px 35px}.pro-sidebar.rtl .pro-menu .pro-menu-item>.pro-inner-item>.pro-icon-wrapper{margin-right:0;margin-left:10px}.pro-sidebar.rtl .pro-menu .pro-menu-item.pro-sub-menu>.pro-inner-item>.pro-arrow-wrapper{right:auto;left:20px}.pro-sidebar.rtl .pro-menu .pro-menu-item.pro-sub-menu>.pro-inner-item>.pro-arrow-wrapper .pro-arrow{transform:rotate(135deg)}.pro-sidebar.rtl .pro-menu .pro-menu-item.pro-sub-menu.open>.pro-inner-item>.pro-arrow-wrapper .pro-arrow{transform:rotate(45deg)}.pro-sidebar.rtl .pro-menu .pro-menu-item.pro-sub-menu .pro-inner-list-item{padding-left:0;padding-right:24px}.pro-sidebar.rtl .pro-menu .pro-menu-item.pro-sub-menu .pro-inner-list-item .pro-inner-item{padding:8px 15px 8px 30px}.pro-sidebar.rtl .pro-menu .pro-menu-item.pro-sub-menu .pro-inner-list-item .pro-inner-item:before{margin-right:0;margin-left:15px}.pro-sidebar.rtl.collapsed .pro-menu>ul>.pro-menu-item.pro-sub-menu>.pro-inner-list-item{padding-left:0;padding-right:3px}.pro-sidebar.rtl.collapsed .pro-menu>ul>.pro-menu-item.pro-sub-menu>.pro-inner-list-item.has-arrow{padding-right:10px}.pro-sidebar.rtl.collapsed .pro-menu>ul>.pro-menu-item.pro-sub-menu>.pro-inner-list-item>.popper-inner{padding-left:0;padding-right:20px}.pro-sidebar.rtl.collapsed .pro-menu>ul>.pro-menu-item.pro-sub-menu .pro-inner-list-item .pro-sub-menu-item,.pro-sidebar.rtl.collapsed .pro-menu>ul>.pro-menu-item.pro-sub-menu .pro-inner-list-item .pro-inner-item{padding:8px 5px 8px 30px}.popper-arrow{position:absolute;z-index:-1;width:0;height:0;border-top:7px solid transparent;border-bottom:7px solid transparent}.popper-element[data-popper-placement^=left]>.popper-arrow{right:0;border-right:7px solid rgba(12,30,53,.95)}.popper-element[data-popper-placement^=right]>.popper-arrow{left:0;border-left:7px solid rgba(12,30,53,.95)}.react-slidedown{height:0;transition-property:none;transition-duration:.2s;transition-timing-function:ease-in-out}.react-slidedown.transitioning{overflow-y:hidden}.react-slidedown.closed{display:none}body{margin:0;height:100vh;color:#353535;font-family:"Roboto",sans-serif}#root{height:100%}.app{height:100%;display:flex;position:relative}.app .btn-toggle{cursor:pointer;width:35px;height:35px;background:#353535;color:#fff;text-align:center;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:15px;display:none}.app .sidebar-btn-wrapper{display:flex;align-items:center;justify-content:center}.app .sidebar-btn-wrapper .sidebar-btn{transition:width .3s;width:150px;padding:1px 15px;border-radius:40px;background:rgba(255,255,255,.05);color:#adadad;text-decoration:none;margin:0 auto;height:35px;display:flex;align-items:center;justify-content:center;text-overflow:ellipsis;overflow:hidden}.app .sidebar-btn-wrapper .sidebar-btn span{margin-left:5px;font-size:13px}.app .sidebar-btn-wrapper .sidebar-btn:hover{color:#dee2ec}.app .collapsed .sidebar-btn{display:inline-block;line-height:40px;padding:0}.app main{padding:24px;flex-grow:1;display:flex;flex-direction:column;overflow-y:auto}.app main header{margin-bottom:40px;border-bottom:1px solid #efefef}.app main header h1{display:flex;align-items:center;transform:translateX(-20px)}.app main footer{margin-top:auto;color:#888;text-align:center}.app main footer a{text-decoration:none;color:#888}.app main footer a:hover{text-decoration:underline}.app .social-bagdes{margin-top:10px}.app .social-bagdes img{margin:5px}.app .block{display:flex;margin-bottom:24px;font-size:14px;color:#545454}.app .block>span{margin-left:10px}.app.rtl{direction:rtl;text-align:right}.app.rtl header h1{transform:translateX(20px)}.app.rtl .block{direction:rtl}.app.rtl .block>span{margin-left:0;margin-right:10px}.app.rtl .sidebar-btn-wrapper .sidebar-btn span{margin-left:0;margin-right:5px}@media(max-width: 767.98px){.app{overflow-x:hidden}.app header h1{font-size:24px}}@media(max-width: 768px){.app .btn-toggle{display:flex}.app.rtl .btn-toggle{margin-left:auto}}.badge{padding:3px 6px;font-size:9px;letter-spacing:1px;border-radius:15px}.badge.red{color:#fff;background:#d63030}.badge.gray{color:#fff;background:#777}.badge.yellow{color:#000;background:#ffd331}',""]);const a=n}}]);