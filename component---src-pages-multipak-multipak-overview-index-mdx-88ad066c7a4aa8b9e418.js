(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),i=a("NmYn"),r=a.n(i),l=a("Wbzz"),c=a("Xrax"),s=a("k4MR"),b=a("TSYQ"),u=a.n(b),d=a("QH2O"),p=a("qKvR"),m=function(e){var t,a=e.title,n=e.tabs,o=void 0===n?[]:n;return Object(p.b)("div",{className:u()(d.pageHeader,(t={},t[d.withTabs]=o.length,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:d.text},a)))))},h=a("BAC9"),f=function(e){var t=e.relativePagePath,a=e.repository,n=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,o=a||n,i=o.baseUrl,r=o.subDirectory,c=i+"/edit/"+o.branch+r+"/src/pages"+t;return i?Object(p.b)("div",{className:"bx--row "+h.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:h.link,href:c},"Edit this page on GitHub"))):null},g=a("FCXl"),j=a("dI71"),O=a("I8xM"),x=function(e){function t(){return e.apply(this,arguments)||this}return Object(j.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],o=t.map((function(e){var t,o=r()(e,{lower:!0,strict:!0}),i=o===n,c=new RegExp(n+"/?(#.*)?$"),s=a.replace(c,o);return Object(p.b)("li",{key:e,className:u()((t={},t[O.selectedItem]=i,t),O.listItem)},Object(p.b)(l.Link,{className:O.link,to:""+s},e))}));return Object(p.b)("div",{className:O.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",null,Object(p.b)("ul",{className:O.list},o))))))},t}(o.a.Component),k=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,o=e.Title,i=t.frontmatter,b=void 0===i?{}:i,u=t.relativePagePath,d=t.titleType,h=b.tabs,j=b.title,O=b.theme,w=b.description,P=b.keywords,v=Object(l.useStaticQuery)("2456312558").site.pathPrefix,T=v?n.pathname.replace(v,""):n.pathname,C=h?T.split("/").filter(Boolean).slice(-1)[0]||r()(h[0],{lower:!0}):"";return Object(p.b)(s.a,{tabs:h,homepage:!1,theme:O,pageTitle:j,pageDescription:w,pageKeywords:P,titleType:d},Object(p.b)(m,{title:o?Object(p.b)(o,null):j,label:"label",tabs:h}),h&&Object(p.b)(x,{slug:T,tabs:h,currentTab:C}),Object(p.b)(k.a,{padded:!0},a,Object(p.b)(f,{relativePagePath:u})),Object(p.b)(g.a,{pageContext:t,location:n,slug:T,tabs:h,currentTab:C}),Object(p.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},X5xc:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return b}));var n=a("wx14"),o=a("zLVn"),i=(a("q1tI"),a("7ljp")),r=a("013z"),l=(a("qKvR"),{}),c={_frontmatter:l},s=r.a;function b(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)(s,Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",null,"Multiple Cloud Pak Installation"),Object(i.b)("p",null,"This section describes the findings of a group, participating in a residency\nproject in January 2020, to install more than one IBM Cloud Pak in the same\ncluster. During the limited time duration of the residency, the group\nwas able to test two combinations, as follows:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"../cp4i-cp4a/"}),"Installing Cloud Pak for Integration first Cloud Pak for\nApplications second")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"../cp4a-cp4i/"}),"Installing Cloud Pak for Applications first Cloud Pak for\nIntegration second"))),Object(i.b)("p",null,"Each chapter in this section links to the steps to install each of the\nrespective Cloud Paks in the test. Generally, there is no change to the\nstandard Cloud Pak installation instructions for these multiple Cloud Pak\nscenarios."),Object(i.b)("p",null,"However, there are some configuration steps recommended to avoid potential\nconflicts where both Cloud Paks include the same component.\nEach chapter describes those special steps to take, based on the group’s\nexperience, to avoid problems. It is important to note that these\ndescriptions reflect the state of the Cloud Paks in January 2020. In all\ncases, it is recommended to follow the official product Documentation\nin the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.ibm.com/support/knowledgecenter"}),"Knowledge Center")," as\nyour authoritive source of knowledge."),Object(i.b)("p",null,"The links below direct you to the other sections of this Playbook\ndescribing the\ninstallation and configuration of the IBM Cloud Paks tested in\nthis project."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"../../apps/cp4a_overview"}),"IBM Cloud Pak™ for Applications")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"../../integration/introduction"}),"IBM Cloud Pak™ for Integration"))),Object(i.b)("h2",null,"Official IBM Cloud Paks Documentation"),Object(i.b)("p",null,"Always consult the IBM product documentation as your first source of knowledge\nfor installing IBM Cloud Paks. In the Knowledge Center, you can select\nthe most current version of the Cloud Pak you are working on."),Object(i.b)("a",{href:"https://www.ibm.com/support/knowledgecenter"},"IBM Knowledge Center"))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-multipak-multipak-overview-index-mdx-88ad066c7a4aa8b9e418.js.map