(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{"013z":function(e,t,a){"use strict";var i=a("q1tI"),n=a.n(i),c=a("NmYn"),s=a.n(c),r=a("Wbzz"),b=a("Xrax"),o=a("k4MR"),l=a("TSYQ"),p=a.n(l),m=a("QH2O"),d=a("qKvR"),g=function(e){var t,a=e.title,i=e.tabs,n=void 0===i?[]:i;return Object(d.b)("div",{className:p()(m.pageHeader,(t={},t[m.withTabs]=n.length,t))},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12"},Object(d.b)("h1",{id:"page-title",className:m.text},a)))))},A=a("BAC9"),u=function(e){var t=e.relativePagePath,a=e.repository,i=Object(r.useStaticQuery)("1364590287").site.siteMetadata.repository,n=a||i,c=n.baseUrl,s=n.subDirectory,b=c+"/edit/"+n.branch+s+"/src/pages"+t;return c?Object(d.b)("div",{className:"bx--row "+A.row},Object(d.b)("div",{className:"bx--col"},Object(d.b)("a",{className:A.link,href:b},"Edit this page on GitHub"))):null},f=a("FCXl"),h=a("dI71"),j=a("I8xM"),O=function(e){function t(){return e.apply(this,arguments)||this}return Object(h.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,i=a.split("/").filter(Boolean).slice(-1)[0],n=t.map((function(e){var t,n=s()(e,{lower:!0,strict:!0}),c=n===i,b=new RegExp(i+"/?(#.*)?$"),o=a.replace(b,n);return Object(d.b)("li",{key:e,className:p()((t={},t[j.selectedItem]=c,t),j.listItem)},Object(d.b)(r.Link,{className:j.link,to:""+o},e))}));return Object(d.b)("div",{className:j.tabsContainer},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(d.b)("nav",null,Object(d.b)("ul",{className:j.list},n))))))},t}(n.a.Component),y=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,i=e.location,n=e.Title,c=t.frontmatter,l=void 0===c?{}:c,p=t.relativePagePath,m=t.titleType,A=l.tabs,h=l.title,j=l.theme,w=l.description,N=l.keywords,x=Object(r.useStaticQuery)("2456312558").site.pathPrefix,C=x?i.pathname.replace(x,""):i.pathname,v=A?C.split("/").filter(Boolean).slice(-1)[0]||s()(A[0],{lower:!0}):"";return Object(d.b)(o.a,{tabs:A,homepage:!1,theme:j,pageTitle:h,pageDescription:w,pageKeywords:N,titleType:m},Object(d.b)(g,{title:n?Object(d.b)(n,null):h,label:"label",tabs:A}),A&&Object(d.b)(O,{slug:C,tabs:A,currentTab:v}),Object(d.b)(y.a,{padded:!0},a,Object(d.b)(u,{relativePagePath:p})),Object(d.b)(f.a,{pageContext:t,location:i,slug:C,tabs:A,currentTab:v}),Object(d.b)(b.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},tfjA:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return l}));var i=a("wx14"),n=a("zLVn"),c=(a("q1tI"),a("7ljp")),s=a("013z"),r=(a("qKvR"),{}),b={_frontmatter:r},o=s.a;function l(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.b)(o,Object(i.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",null,"Importing an OpenShift or other Kubernetes Cluster"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"To add a new cluster, go to the ",Object(c.b)("strong",{parentName:"p"},"Cloud Pak Console"),".")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Using the menu in the top-left corner, navigate to ",Object(c.b)("strong",{parentName:"p"},"Automate Infrastructure")," > ",Object(c.b)("strong",{parentName:"p"},"Clusters"),"."),Object(c.b)("span",Object(i.a)({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"504px"}}),"\n      ",Object(c.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"36.45833333333333%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsSAAALEgHS3X78AAABIElEQVQoz32RzauCUBDF7z9guJE0IvtQ+hRCygJBV7lxoy6jFpVp5f+/Po8zYLwejxY/5g733jNnZlS324VlWViv19jv9wjDUOJ2u32ffd+XfLfbCf1+H5qmQdf1DzqdDhQFTdPEeDyG67qYTqcSJ5MJHMdBFEU4HA5CmqZIkkQKsUAQBG9YiIXVbDaTB0zokvA8GAxgGAbyPMfr9cL9fheqqsLj8cDz+fygaRpcLhco2qe71WolcTgcYjQaodfriWBRFPKhFWuF/8K78/kMRSe2bSOOYyyXSywWC3ieJ21TlA7rusbtdvsKRU+nE9R8PhehzWYjc+A82kVwhhQsy1La+QZFj8cjFBdCJ1wCW+bGmRPeZVkm1fnper3+y2/BH5mS9r6KSD75AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Graphic",title:"Graphic",src:"/static/cb30195ea0a7d50eedec6ce6ff00e670/27db6/01-Infra-Cluster.png",srcSet:["/static/cb30195ea0a7d50eedec6ce6ff00e670/7fc1e/01-Infra-Cluster.png 288w","/static/cb30195ea0a7d50eedec6ce6ff00e670/27db6/01-Infra-Cluster.png 504w"],sizes:"(max-width: 504px) 100vw, 504px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Select ",Object(c.b)("strong",{parentName:"p"},"Add cluster  +"),"."),Object(c.b)("span",Object(i.a)({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"401px"}}),"\n      ",Object(c.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"68.75%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAAsSAAALEgHS3X78AAAB+ElEQVQ4y5VTzY7SUBitD2Dc+iS+iTHDhI1xAULiE7hRWULIbCaGBJWdDyDqzmRWLJzp30ApbYChIaIjoaWF0oLHno4XZzTMaJOTe3Pu+b6c76fSYDBAp9OBYRhbdLtGwhloydYV/jqYpolsNgtpvV5juVwiDMO/0OlPsVqttu+7dEQURSgUCpAocl0XnudtsVgs0O/38eb1K0wmkzTRfD5PeZ6XtQK+7yOXy0FidhIUkuSdHEsol8totVqwbRuqqiat6KYaaoVe3IMgQD6f/52Qj0JAjr2tVCqwLAv1eh2lUgmNRiN9+6+EvLMfdMMSHMdBs9lErVZLhyfKvjHh5ZIZxETVajXtpejhn1qRbKdD0XhOlid5CsWkCfH2Tw4ZQEcsjQ57vV46HHIcDEFuNBqlCa51KNyNx2NomgazZ+PzsYzjEwXaabL4pgVF1ZNpaxgOhzcnFPbpcjqdYnbuIPK/IpiNEc6TXfS+wDs/w/dv3Mtwd8l0dXWxXcxcD2+PAhy8C3D44QIvPy5w+D6A7bgIfDeJ2bHYSD6uSRzHiBJs1jGCZYx7T4E7j4C7j4HbDwFpD7i1DxwZP5KIGKsoTmMENpsNisUiJF3XIcsyFEVJTiU92bcnB6e4/6yN/VIbey/aePD8As1PKtq6jJNfWsYS/JMymQx+Agys7ehaDG1iAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Graphic",title:"Graphic",src:"/static/52bd7561d7663f5c15a482678456810c/bcc02/02-AddCluster.png",srcSet:["/static/52bd7561d7663f5c15a482678456810c/7fc1e/02-AddCluster.png 288w","/static/52bd7561d7663f5c15a482678456810c/bcc02/02-AddCluster.png 401w"],sizes:"(max-width: 401px) 100vw, 401px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Select ",Object(c.b)("strong",{parentName:"p"},"Import an existing cluster by running a command"),", then click ",Object(c.b)("strong",{parentName:"p"},"Import"),"."),Object(c.b)("span",Object(i.a)({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"602px"}}),"\n      ",Object(c.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"60.76388888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsSAAALEgHS3X78AAABo0lEQVQoz42SW27iQBBFvSHgA7Et4AOJPWQb2QASOwBBxFeCsJTkI7wMxBYPYxs/MLZvfJsUcjKTzLR0VO1y9a3qqtZGoxHG4zGensaYTqcwDAPL5fIL4ivaIuuVgdc3A/rLHBodrmvDPpiI4xiXy+WfMI6cz2cEQYAwDOB6AWzHh7bbWti7wONrDK4wDFUgkUMiIN9JkqjYNE3heZ7iRE4eNMc28aADd/cRLkkGyzKx3+9xPB5xOBxg2zYcx1FWfEzKlWVZLnL6FL1azTTfkaSA58d5QIr/XayOlYogLdFWq9WnUJZnjvJ+ujdYmVjZs1IK8OqstCimBLfbbR7s4vn5RWVkArJYLDCfz9We05/NZspnmiZ8379V+UeF7Bcn3e121QQ3m831KazXSsyyLDAphXa73a1i6aEMRdAowMXqCA8TCnEIMlmZdhRFCunhXwWlH0SeB6ulXwT43nhVUtwX+6euXK/X0W630Wg00Gw2lRX4zf+tVguDwQC6rmMymfyKVqlUUK1WUS6Xwf13SqUSarUaOp0OhsMher0e+v3+j3wAfKRmPpQpUvMAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Graphic",title:"Graphic",src:"/static/0263b7dbad291cce8f387092fbf221b9/31129/03-ExistingCluster.png",srcSet:["/static/0263b7dbad291cce8f387092fbf221b9/7fc1e/03-ExistingCluster.png 288w","/static/0263b7dbad291cce8f387092fbf221b9/a5df1/03-ExistingCluster.png 576w","/static/0263b7dbad291cce8f387092fbf221b9/31129/03-ExistingCluster.png 602w"],sizes:"(max-width: 602px) 100vw, 602px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Enter the cluster name for ",Object(c.b)("inlineCode",{parentName:"p"},"Cluster name"),". The ",Object(c.b)("inlineCode",{parentName:"p"},"Namespace")," field auto-populates with the same name."),Object(c.b)("span",Object(i.a)({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(c.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"42.01388888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsSAAALEgHS3X78AAABDklEQVQoz6WRwWqEMBiEfWI9qCgICr5GTz11D32AQq99CG9l2+qq68bEJK7daqdJdpVSdvHQwMf8kDD/DLHCMEQURUiSBHEcI01TBEEA27bhOM4qvu/DdV2jnufBklJiHEd8nk44HgdM0zf+c6yiyNE0NRhtIaWAFByCdwbOuaHrupvMb2as122Ot+KAPZHYt73irA3tQUgLSin6voduopnnv0aL4fZ9h4+SYFczNBcjrQellDGTYjabEUIsBnr+jVVXJTpG0bbEKF/qrldmaqFuwBhXywVYpxJWVaXMWlWPGK5tvYZ+NwzD+SemXsGBL5WwLEtzyS71tK6hU+nqWZbhYbPB/VOOu+cBjy8cP48eR1bMbTbkAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Graphic",title:"Graphic",src:"/static/e2f4857325c94fd713a8e94796bca366/3cbba/04-GenerateCommand.png",srcSet:["/static/e2f4857325c94fd713a8e94796bca366/7fc1e/04-GenerateCommand.png 288w","/static/e2f4857325c94fd713a8e94796bca366/a5df1/04-GenerateCommand.png 576w","/static/e2f4857325c94fd713a8e94796bca366/3cbba/04-GenerateCommand.png 1152w","/static/e2f4857325c94fd713a8e94796bca366/b313a/04-GenerateCommand.png 1242w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Click ",Object(c.b)("strong",{parentName:"p"},"Generate Command")," button to get the configuration command. A ",Object(c.b)("inlineCode",{parentName:"p"},"curl")," command is\ngenerated for you to run from your managed cluster. Click the “Copy” icon to copy the command\ninto your buffer."),Object(c.b)("p",{parentName:"li"},"   ",Object(c.b)("span",Object(i.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"817px"}}),"\n      ",Object(c.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"33.33333333333333%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsSAAALEgHS3X78AAAAt0lEQVQoz5WQ2wqDMBBE8/+fqYk2idVobuLL1AmNlVLBCoeBuDuzu6KXFtpoWLur/ug0TZjn+Tbee0gpIWjgnCvQaBxHGGOwbRv+/WgqYoxYlqUQYkDMqZjlnJFSus26rmUg0XUdmqZB27ZQjw7WPRF8KGm/qOHfcDClFARvNQzDgdGmrEyYSOVZqtKUzSGEg/rG4QRX4yMPW9L2n7WIepzjXUNl85la3/c9BPevzVf4U8gV9OGEL3UHGMT7z3aZAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Graphic",title:"Graphic",src:"/static/2492dbbb1e5b0fb5126d3acc0d9fd284/6a490/05-GeneratedCommand.png",srcSet:["/static/2492dbbb1e5b0fb5126d3acc0d9fd284/7fc1e/05-GeneratedCommand.png 288w","/static/2492dbbb1e5b0fb5126d3acc0d9fd284/a5df1/05-GeneratedCommand.png 576w","/static/2492dbbb1e5b0fb5126d3acc0d9fd284/6a490/05-GeneratedCommand.png 817w"],sizes:"(max-width: 817px) 100vw, 817px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Go to a command line where you are logged into the cluster you want to manage.\nRun the command copied from the above. Your output should look something like this:"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),"  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current\n                                 Dload  Upload   Total   Spent    Left  Speed\n100  5643    0  5643    0     0   4941      0 --:--:--  0:00:01 --:--:--  4945\ncustomresourcedefinition.apiextensions.k8s.io/endpoints.multicloud.ibm.com created\nnamespace/multicluster-endpoint created\nsecret/klusterlet-bootstrap created\nserviceaccount/ibm-multicluster-endpoint-operator created\nclusterrolebinding.rbac.authorization.k8s.io/ibm-multicluster-endpoint-operator created\ndeployment.apps/ibm-multicluster-endpoint-operator created\n\n"))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Run the same command again if the error below occurs:"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),'error: unable to recognize "STDIN": no matches for kind "Endpoint" in version "multicloud.ibm.com/v1beta1"\n'))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"The cluster import will show as “Pending” for a few minutes but should then show up in your Clusters\nview."))),Object(c.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(c.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"26.73611111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAYAAABFA8wzAAAACXBIWXMAAAsSAAALEgHS3X78AAAAyElEQVQY06WPMW6EMBBFfeAICgKbggLELdLt2bISJoCxsQEr2uSFIWKlVCli6Wnm688f2ypNU8qypK5rqqqiaRqKoiBJEsT7izzPybKMl0u+84xa15X7/ZP/no8viPsa1WlNCIFpmrDW4qzDTvbQJ+M4MgzD0RtjHrNSg3fctOVynXh6tai3W8vsF/q+x4wGHzzvQ4/3HufcgXii5WK9P6DrOuRnsrxtJe+xLhwovZvz/DMsIRkUtm17EGP8pU9f6plblkDcVr4BSpJiK2Rmyt4AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Graphic",title:"Graphic",src:"/static/7fff860865cebcf35e85b3180b8a3f46/3cbba/06-Clusters.png",srcSet:["/static/7fff860865cebcf35e85b3180b8a3f46/7fc1e/06-Clusters.png 288w","/static/7fff860865cebcf35e85b3180b8a3f46/a5df1/06-Clusters.png 576w","/static/7fff860865cebcf35e85b3180b8a3f46/3cbba/06-Clusters.png 1152w","/static/7fff860865cebcf35e85b3180b8a3f46/75547/06-Clusters.png 1247w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-mcm-cluster-onboarding-index-mdx-90cdfb8c93f13cd0bab4.js.map