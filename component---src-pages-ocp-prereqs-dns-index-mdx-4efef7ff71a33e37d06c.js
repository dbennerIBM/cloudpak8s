(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("NmYn"),b=a.n(l),c=a("Wbzz"),i=a("Xrax"),o=a("k4MR"),s=a("TSYQ"),d=a.n(s),p=a("QH2O"),u=a("qKvR"),m=function(e){var t,a=e.title,n=e.tabs,r=void 0===n?[]:n;return Object(u.b)("div",{className:d()(p.pageHeader,(t={},t[p.withTabs]=r.length,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:p.text},a)))))},j=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,n=Object(c.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,l=r.baseUrl,b=r.subDirectory,i=l+"/edit/"+r.branch+b+"/src/pages"+t;return l?Object(u.b)("div",{className:"bx--row "+j.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:j.link,href:i},"Edit this page on GitHub"))):null},g=a("FCXl"),h=a("dI71"),N=a("I8xM"),x=function(e){function t(){return e.apply(this,arguments)||this}return Object(h.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=b()(e,{lower:!0,strict:!0}),l=r===n,i=new RegExp(n+"/?(#.*)?$"),o=a.replace(i,r);return Object(u.b)("li",{key:e,className:d()((t={},t[N.selectedItem]=l,t),N.listItem)},Object(u.b)(c.Link,{className:N.link,to:""+o},e))}));return Object(u.b)("div",{className:N.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",null,Object(u.b)("ul",{className:N.list},r))))))},t}(r.a.Component),f=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,l=t.frontmatter,s=void 0===l?{}:l,d=t.relativePagePath,p=t.titleType,j=s.tabs,h=s.title,N=s.theme,y=s.description,w=s.keywords,k=Object(c.useStaticQuery)("2456312558").site.pathPrefix,v=k?n.pathname.replace(k,""):n.pathname,T=j?v.split("/").filter(Boolean).slice(-1)[0]||b()(j[0],{lower:!0}):"";return Object(u.b)(o.a,{tabs:j,homepage:!1,theme:N,pageTitle:h,pageDescription:y,pageKeywords:w,titleType:p},Object(u.b)(m,{title:r?Object(u.b)(r,null):h,label:"label",tabs:j}),j&&Object(u.b)(x,{slug:v,tabs:j,currentTab:T}),Object(u.b)(f.a,{padded:!0},a,Object(u.b)(O,{relativePagePath:d})),Object(u.b)(g.a,{pageContext:t,location:n,slug:v,tabs:j,currentTab:T}),Object(u.b)(i.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},ULkk:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return s}));var n=a("wx14"),r=a("zLVn"),l=(a("q1tI"),a("7ljp")),b=a("013z"),c=(a("qKvR"),{}),i={_frontmatter:c},o=b.a;function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)(o,Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",null,"DNS requirements"),Object(l.b)("p",null,"Openshift internally expects that all hostnames of cluster nodes are internally resolvable from each other.  "),Object(l.b)("h3",null,Object(l.b)("strong",{parentName:"h3"},"Internal DNS names")),Object(l.b)("p",null,"For example, the following DNS setup may be used, where ",Object(l.b)("inlineCode",{parentName:"p"},"cluster.jkwong.xyz")," is the subdomain:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"node"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"names"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"comment"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"master1"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"master01.cluster.jkwong.xyz")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"master2"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"master02.cluster.jkwong.xyz")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"master3"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"master03.cluster.jkwong.xyz")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"infra1"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"infra01.cluster.jkwong.xyz")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"infra2"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"infra02.cluster.jkwong.xyz")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"infra3"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"infra03.cluster.jkwong.xyz")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"worker1"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"worker01.cluster.jkwong.xyz")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"worker2"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"worker02.cluster.jkwong.xyz")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"worker3"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"worker03.cluster.jkwong.xyz")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"internal API"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"api-int.cluster.jkwong.xyz")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"internal endpoint for API, used by cluster nodes to register")))),Object(l.b)("p",null,"The internal API endpoint should be an A or CNAME record that points at a load balancer that forwards requests to the master nodes running the control plane using a round-robin algorithm.  All cluster nodes will register themselves to the server to this endpoint using the domain name.  During installation, this may be provided as ",Object(l.b)("inlineCode",{parentName:"p"},"openshift_master_cluster_hostname")," in the ansible inventory file."),Object(l.b)("h3",null,Object(l.b)("strong",{parentName:"h3"},"External DNS names")),Object(l.b)("p",null,"It is optional whether the cluster administrator wishes to expose the internal cluster domain to an external DNS server, but in many cases the cluster domain is used here so worker nodes are fully resolvable outside of the cluster as well."),Object(l.b)("p",null,"For external clients, Openshift expects that clients can resolve the hostname of the API server in order to manage Openshift, and application clients can resolve the hostname of the wildcard subdomain."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"node"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"comment"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"external API"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"api.cluster.jkwong.xyz")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"external endpoint for API, used by clients to manage Openshift")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"app"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"*.apps.cluster.jkwong.xyz")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"external wildcard domain for apps, used by clients to connect to workloads running in the platform such as Cloud Paks")))),Object(l.b)("p",null,"The Openshift application console is available on ",Object(l.b)("inlineCode",{parentName:"p"},"api.cluster.jkwong.xyz")," and is specified by ",Object(l.b)("inlineCode",{parentName:"p"},"openshift_master_cluster_public_hostname"),". It is very important to get this right as the web console uses the URL here as a redirect for OAuth clients and the address cannot be changed easily.  The DNS record points at an externally routable address to a load balancer that forwards traffic to the master nodes."),Object(l.b)("p",null,"The wildcard app subdomain is a default domain name for routes that do not have an explicit hostname defined.  In our example, the Openshift cluster console is served at ",Object(l.b)("inlineCode",{parentName:"p"},"console.apps.cluster.jkwong.xyz"),".  The DNS record points at an externally routable address to a load balancer that forwards traffic to where the Openshift router is running, typically the ",Object(l.b)("inlineCode",{parentName:"p"},"infra")," nodes."))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-ocp-prereqs-dns-index-mdx-4efef7ff71a33e37d06c.js.map