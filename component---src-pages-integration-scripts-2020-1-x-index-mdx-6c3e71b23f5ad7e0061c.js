(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),o=a("NmYn"),r=a.n(o),l=a("Wbzz"),s=a("Xrax"),b=a("k4MR"),c=a("TSYQ"),u=a.n(c),d=a("QH2O"),p=a("qKvR"),m=function(e){var t,a=e.title,n=e.tabs,i=void 0===n?[]:n;return Object(p.b)("div",{className:u()(d.pageHeader,(t={},t[d.withTabs]=i.length,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:d.text},a)))))},g=a("BAC9"),h=function(e){var t=e.relativePagePath,a=e.repository,n=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||n,o=i.baseUrl,r=i.subDirectory,s=o+"/edit/"+i.branch+r+"/src/pages"+t;return o?Object(p.b)("div",{className:"bx--row "+g.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:g.link,href:s},"Edit this page on GitHub"))):null},x=a("FCXl"),j=a("dI71"),O=a("I8xM"),f=function(e){function t(){return e.apply(this,arguments)||this}return Object(j.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],i=t.map((function(e){var t,i=r()(e,{lower:!0,strict:!0}),o=i===n,s=new RegExp(n+"/?(#.*)?$"),b=a.replace(s,i);return Object(p.b)("li",{key:e,className:u()((t={},t[O.selectedItem]=o,t),O.listItem)},Object(p.b)(l.Link,{className:O.link,to:""+b},e))}));return Object(p.b)("div",{className:O.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",null,Object(p.b)("ul",{className:O.list},i))))))},t}(i.a.Component),v=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,i=e.Title,o=t.frontmatter,c=void 0===o?{}:o,u=t.relativePagePath,d=t.titleType,g=c.tabs,j=c.title,O=c.theme,T=c.description,w=c.keywords,k=Object(l.useStaticQuery)("2456312558").site.pathPrefix,P=k?n.pathname.replace(k,""):n.pathname,N=g?P.split("/").filter(Boolean).slice(-1)[0]||r()(g[0],{lower:!0}):"";return Object(p.b)(b.a,{tabs:g,homepage:!1,theme:O,pageTitle:j,pageDescription:T,pageKeywords:w,titleType:d},Object(p.b)(m,{title:i?Object(p.b)(i,null):j,label:"label",tabs:g}),g&&Object(p.b)(f,{slug:P,tabs:g,currentTab:N}),Object(p.b)(v.a,{padded:!0},a,Object(p.b)(h,{relativePagePath:u})),Object(p.b)(x.a,{pageContext:t,location:n,slug:P,tabs:g,currentTab:N}),Object(p.b)(s.a,null))}},"5HLIX":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return d}));var n,i=a("wx14"),o=a("zLVn"),r=(a("q1tI"),a("7ljp")),l=a("013z"),s=(a("qKvR"),{}),b=(n="InlineNotification",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",e)}),c={_frontmatter:s},u=l.a;function d(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)(u,Object(i.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)(b,{mdxType:"InlineNotification"},Object(r.b)("p",null,"Version 2020.2 is out for Cloud Pak for Ingegration.  This version is the first to feature Operators and has significant changes to the deployment and operations.  Please refer to the ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.ibm.com/support/knowledgecenter/en/SSGT7J_20.2/overview.html"}),"Knowledge Center")," while we update this playbook.  Thanks!")),Object(r.b)("p",null,"The capabilities provided with the Cloud Pak for Integration\ncan be installed using the instructions in\nthe sections above in the\nCloud Pak Playbook."),Object(r.b)("p",null,"In addition, there is the option of installing and uninstalling\nthese capabilities using scripts developed by the IBM Garage\nSolution Engineering team. Also available are Tekton pipelines\nfor installing and uninstalling the capabilities."),Object(r.b)("p",null,"The scripts and pipeline artifacts, along with instructions\nhow to use them, are provided at the link below:"),Object(r.b)("p",null,Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/cp4i-setup/blob/master/README.md"}),"Cloud Pak for Integration Installation Scripts & Pipelines")))}d.isMDXComponent=!0},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-integration-scripts-2020-1-x-index-mdx-6c3e71b23f5ad7e0061c.js.map