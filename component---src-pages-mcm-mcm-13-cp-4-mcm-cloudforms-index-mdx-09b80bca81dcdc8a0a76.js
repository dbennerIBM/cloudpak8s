(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{"013z":function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),o=n("NmYn"),i=n.n(o),c=n("Wbzz"),l=n("Xrax"),s=n("k4MR"),b=n("TSYQ"),p=n.n(b),m=n("QH2O"),d=n("qKvR"),u=function(e){var t,n=e.title,a=e.tabs,r=void 0===a?[]:a;return Object(d.b)("div",{className:p()(m.pageHeader,(t={},t[m.withTabs]=r.length,t))},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12"},Object(d.b)("h1",{id:"page-title",className:m.text},n)))))},O=n("BAC9"),j=function(e){var t=e.relativePagePath,n=e.repository,a=Object(c.useStaticQuery)("1364590287").site.siteMetadata.repository,r=n||a,o=r.baseUrl,i=r.subDirectory,l=o+"/edit/"+r.branch+i+"/src/pages"+t;return o?Object(d.b)("div",{className:"bx--row "+O.row},Object(d.b)("div",{className:"bx--col"},Object(d.b)("a",{className:O.link,href:l},"Edit this page on GitHub"))):null},h=n("FCXl"),N=n("dI71"),g=n("I8xM"),C=function(e){function t(){return e.apply(this,arguments)||this}return Object(N.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,n=e.slug,a=n.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=i()(e,{lower:!0,strict:!0}),o=r===a,l=new RegExp(a+"/?(#.*)?$"),s=n.replace(l,r);return Object(d.b)("li",{key:e,className:p()((t={},t[g.selectedItem]=o,t),g.listItem)},Object(d.b)(c.Link,{className:g.link,to:""+s},e))}));return Object(d.b)("div",{className:g.tabsContainer},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(d.b)("nav",null,Object(d.b)("ul",{className:g.list},r))))))},t}(r.a.Component),f=n("MjG9");t.a=function(e){var t=e.pageContext,n=e.children,a=e.location,r=e.Title,o=t.frontmatter,b=void 0===o?{}:o,p=t.relativePagePath,m=t.titleType,O=b.tabs,N=b.title,g=b.theme,I=b.description,T=b.keywords,S=Object(c.useStaticQuery)("2456312558").site.pathPrefix,v=S?a.pathname.replace(S,""):a.pathname,_=O?v.split("/").filter(Boolean).slice(-1)[0]||i()(O[0],{lower:!0}):"";return Object(d.b)(s.a,{tabs:O,homepage:!1,theme:g,pageTitle:N,pageDescription:I,pageKeywords:T,titleType:m},Object(d.b)(u,{title:r?Object(d.b)(r,null):N,label:"label",tabs:O}),O&&Object(d.b)(C,{slug:v,tabs:O,currentTab:_}),Object(d.b)(f.a,{padded:!0},n,Object(d.b)(j,{relativePagePath:p})),Object(d.b)(h.a,{pageContext:t,location:a,slug:v,tabs:O,currentTab:_}),Object(d.b)(l.a,null))}},BAC9:function(e,t,n){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,n){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,n){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},THTu:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return c})),n.d(t,"default",(function(){return O}));var a=n("wx14"),r=n("zLVn"),o=(n("q1tI"),n("7ljp")),i=n("013z"),c=(n("qKvR"),{}),l=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",t)}},s=l("PageDescription"),b=l("AnchorLinks"),p=l("AnchorLink"),m=l("InlineNotification"),d={_frontmatter:c},u=i.a;function O(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)(u,Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)(s,{mdxType:"PageDescription"},Object(o.b)("p",null,"This section covers installing Red Hat CloudForms 5.0 for Cloud Pak\nfor Multicloud Management.")),Object(o.b)(b,{mdxType:"AnchorLinks"},Object(o.b)(p,{mdxType:"AnchorLink"},"Initialize CloudForms server"),Object(o.b)(p,{mdxType:"AnchorLink"},"Configure LDAP Authentication in MCM Console"),Object(o.b)(p,{mdxType:"AnchorLink"},"Integrate CloudForms server with Cloud Pak for MultiCloud Management")),Object(o.b)(m,{mdxType:"InlineNotification"},Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Update:")," This document was recently updated to include Cloud Pak for\nMultiCloud Mangement v1.3.")),Object(o.b)("h2",null,"Required files"),Object(o.b)("p",null,"The files from Passport Advantage site for RedHat CloudForms 5 are:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Red Hat CloudForms 5 for for IBM Cloud App Management 20.0.1 Multiplatform English eAssembly (CJ78FEN)")),Object(o.b)("p",null,"It contains the disk image for the Red Hat CloudForms 5 appliance for various\nplatforms and the integration to IBM Cloud Pak for MultiCloud\nManagement 1.3.\nOther formats such as AWS and Azure disk images are available from\nRed Hat in\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://access.redhat.com/products/red-hat-cloudforms/"}),"https://access.redhat.com/products/red-hat-cloudforms/"),"."),Object(o.b)("ul",null),Object(o.b)("h2",null,"Initialize CloudForms server"),Object(o.b)("p",null,"Follow the instructions for restoring Red Hat CloudForms 5 appliance from:\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://access.redhat.com/documentation/en-US/Red_Hat_CloudForms/5.0/"}),"https://access.redhat.com/documentation/en-US/Red_Hat_CloudForms/5.0/"),"."),Object(o.b)("p",null,"The following summary steps demonstrate configuring Red Hat CloudForms 5\nappliance on Amazon AWS."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Using the image ",Object(o.b)("inlineCode",{parentName:"p"},"cfme-ec2-5.11.4.2-1.x86_64.zip")," extract the vhd file:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"unzip cfme-ec2-5.11.4.2-1.x86_64.zip\n")),Object(o.b)("p",{parentName:"li"},"Store the VHD file into an S3 bucket, (such as ",Object(o.b)("inlineCode",{parentName:"p"},"rh-cloudforms5"),")."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"aws s3 cp cfme-ec2-5.11.4.2-1.x86_64.vhd s3://rh-cloudforms5\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Create the ",Object(o.b)("inlineCode",{parentName:"p"},"vmimport")," role for loading an disk snapshot to AWS.  Create ",Object(o.b)("inlineCode",{parentName:"p"},"trust-policy.json")," and ",Object(o.b)("inlineCode",{parentName:"p"},"role-policy.json")," as outlined below."),Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"trust-policy.json")),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "Version": "2012-10-17",\n  "Statement": [\n      {\n        "Effect": "Allow",\n        "Principal": { "Service": "vmie.amazonaws.com" },\n        "Action": "sts:AssumeRole",\n        "Condition": {\n            "StringEquals":{\n              "sts:Externalid": "vmimport"\n            }\n        }\n      }\n  ]\n}\n')),Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"role-policy.json")," (change the S3 bucket name to the name you used before)."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n"Version": "2012-10-17",\n"Statement": [\n  {\n    "Effect": "Allow",\n    "Action": [\n      "s3:ListAllMyBuckets"\n    ],\n    "Resource": "*"\n  },\n  {\n    "Effect": "Allow",\n    "Action": [\n      "s3:CreateBucket",\n      "s3:DeleteBucket",\n      "s3:DeleteObject",\n      "s3:GetBucketLocation",\n      "s3:GetObject",\n      "s3:ListBucket",\n      "s3:PutObject"\n    ],\n    "Resource": ["arn:aws:s3:::BUCKET_TO_UPLOAD_IMAGE","arn:aws:s3:::BUCKET_TO_UPLOAD_IMAGE/*"]\n  },\n  {\n    "Effect": "Allow",\n    "Action": [\n      "iam:CreateRole",\n      "iam:PutRolePolicy"\n    ],\n    "Resource": "*"\n  },\n  {\n    "Effect": "Allow",\n    "Action": [\n      "ec2:CancelConversionTask",\n      "ec2:CancelExportTask",\n      "ec2:CreateImage",\n      "ec2:CreateInstanceExportTask",\n      "ec2:CreateTags",\n      "ec2:DeleteTags",\n      "ec2:DescribeConversionTasks",\n      "ec2:DescribeExportTasks",\n      "ec2:DescribeExportImageTasks",\n      "ec2:DescribeInstanceAttribute",\n      "ec2:DescribeInstanceStatus",\n      "ec2:DescribeInstances",\n      "ec2:DescribeTags",\n      "ec2:ExportImage",\n      "ec2:ImportInstance",\n      "ec2:ImportVolume",\n      "ec2:StartInstances",\n      "ec2:StopInstances",\n      "ec2:TerminateInstances",\n      "ec2:ImportImage",\n      "ec2:ImportSnapshot",\n      "ec2:DescribeImportImageTasks",\n      "ec2:DescribeImportSnapshotTasks",\n      "ec2:CancelImportTask"\n    ],\n    "Resource": "*"\n  }\n]\n}\n')),Object(o.b)("p",{parentName:"li"},"Create the vmimport role:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"aws iam create-role --role-name vmimport --assume-role-policy-document file://trust-policy.json\naws iam put-role-policy --role-name vmimport --policy-name vmimport --policy-document file://role-policy.json\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Load the snapshot using the file ",Object(o.b)("inlineCode",{parentName:"p"},"container.json"),":"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "Description": "RedHat CloudForms 5",\n  "Format": "vhd",\n  "UserBucket": {\n      "S3Bucket": "BUCKET WITH UPLOADED .VHD IMAGE",\n      "S3Key": "cfme-ec2-5.11.4.2-1.x86_64.vhd"\n  }\n}\n')),Object(o.b)("p",{parentName:"li"},"Run the load:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"aws ec2 import-snapshot --disk-container file://containers.json\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Check that the load has completed. "),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"aws ec2 describe-import-snapshot-tasks --import-task-ids < task id >\n")),Object(o.b)("p",{parentName:"li"},"Use the Web UI to create a new AMI from the Snapshot that you uploaded,\nor run the following command."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"aws ec2 register-image\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Create a Security group that will allow access to port 22 (ssh) and\nport 443 (https). Use the security group for launching an instance of\nRed Hat CloudForms 5. Make sure you allocate an additional disk for the\nPostgreSQL database.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Use a terminal window to SSH into the CloudForms instance.\nInitialize the server. The process below uses an embedded PostgreSQL\ndatabase for a standalone CloudForms server."),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Login to the appliance"),Object(o.b)("li",{parentName:"ul"},"Run the ",Object(o.b)("inlineCode",{parentName:"li"},"appliance_console")," command"),Object(o.b)("li",{parentName:"ul"},"Select the options ",Object(o.b)("strong",{parentName:"li"},"[5]"," Configure Database")," > ",Object(o.b)("strong",{parentName:"li"},"[1]"," Create key")," >\n",Object(o.b)("strong",{parentName:"li"},"[1]"," Create Internal Database")," > ",Object(o.b)("strong",{parentName:"li"},"[1]"," /dev/xvdb")),Object(o.b)("li",{parentName:"ul"},"Answer ",Object(o.b)("strong",{parentName:"li"},"N")," for ",Object(o.b)("inlineCode",{parentName:"li"},"Should this appliance run as a standalone database server?")),Object(o.b)("li",{parentName:"ul"},"Assign a postgreSQL password and verify"),Object(o.b)("li",{parentName:"ul"},"Answer ",Object(o.b)("strong",{parentName:"li"},"0")," for the database region number"),Object(o.b)("li",{parentName:"ul"},"Wait until the database is initialized"),Object(o.b)("li",{parentName:"ul"},"Back in the main menu, select ",Object(o.b)("strong",{parentName:"li"},"[14]"," Start CFME server"),"\nand then ",Object(o.b)("strong",{parentName:"li"},"[19]"," Exit")))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Try logging into the CloudForms server using port 443.\nLogin as ",Object(o.b)("inlineCode",{parentName:"p"},"admin")," and password of ",Object(o.b)("inlineCode",{parentName:"p"},"smartvm"),"."))),Object(o.b)("h2",null,"Configure LDAP Authentication in MCM Console"),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.ibm.com/support/knowledgecenter/en/SSFC4F_1.3.0/iam/3.4.0/configure_ldap.html"}),"Configure LDAP")),Object(o.b)("ul",null),Object(o.b)("h2",null,"Integrate CloudForms server with Cloud Pak for MultiCloud Management"),Object(o.b)("p",null,"For this configuration we will use the following variables.  Replace them with yours."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"CLOUDFORMS_CLIENT_ID"),": a string with your cloudforms client id.  Can be anything randomly generated."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"CLOUDFORMS_CLIENT_SECRET"),": a string with your cloudforms client secret.  Can be anything randomly generated."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"ICP_CONSOLE"),": FQDN for the MCM icp-console."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"CLOUDFORMS_HOST"),": IP Address or FQDN of your CloudForms server"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"CLOUDFORMS_PASSPHRASE"),": a string with a cloudforms passphrase.  Can be anything randomly generated.")),Object(o.b)("ul",null),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Create a file ",Object(o.b)("inlineCode",{parentName:"p"},"registration.json"),":"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'  {\n    "token_endpoint_auth_method":"client_secret_basic",\n    "client_id": "$CLOUDFORMS_CLIENT_ID",\n    "client_secret": "$CLOUDFORMS_CLIENT_SECRET",\n    "scope":"openid profile email",\n    "grant_types":[\n      "authorization_code",\n      "client_credentials",\n      "password",\n      "implicit",\n      "refresh_token",\n      "urn:ietf:params:oauth:grant-type:jwt-bearer"\n    ],\n    "response_types":[\n      "code",\n      "token",\n      "id_token token"\n    ],\n    "application_type":"web",\n    "subject_type":"public",\n    "post_logout_redirect_uris":[\n      "https://$ICP_CONSOLE/"\n    ],\n    "preauthorized_scope":"openid profile email general",\n    "introspect_tokens":true,\n    "trusted_uri_prefixes":[\n      "https://$ICP_CONSOLE",\n      "https://$CLOUDFORMS_HOST"\n    ],\n    "redirect_uris":[\n      "https://$ICP_CONSOLE/auth/liberty/callback",\n      "https://$CLOUDFORMS_HOST/oidc_login/redirect_uri"\n    ]\n  }\n')),Object(o.b)("p",{parentName:"li"},"  Then run this command."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"cloudctl iam oauth-client-register -f registration.json\n")),Object(o.b)("p",{parentName:"li"},"  Collect the client secret that is generated.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Extract the MCM certificate and save it as a TRUSTED certificate."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"kubectl get secret -n kube-public ibmcloud-cluster-ca-cert -o jsonpath='{.data.ca\\.crt}' | base64 --decode | sed 's/CERTIFICATE/TRUSTED CERTIFICATE/' > ibm-mcm-ca.crt\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Copy the ",Object(o.b)("inlineCode",{parentName:"p"},"ibm-mcm-ca.crt")," file to the CloudForms machine in the path\nof ",Object(o.b)("inlineCode",{parentName:"p"},"/etc/pki/ca-trust/source/anchors"),". Run the following command. "),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"update-ca-trust\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Restart the CloudForms engine. "),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"systemctl restart evmserverd\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Run the following commands to copy oidc configurations:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'TEMPLATE_DIR="/opt/rh/cfme-appliance/TEMPLATE"\ncp ${TEMPLATE_DIR}/etc/httpd/conf.d/manageiq-remote-user-openidc.conf /etc/httpd/conf.d/\ncp ${TEMPLATE_DIR}/etc/httpd/conf.d/manageiq-external-auth-openidc.conf.erb /etc/httpd/conf.d/manageiq-external-auth-openidc.conf\n'))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Update the ",Object(o.b)("inlineCode",{parentName:"p"},"/etc/httpd/conf.d/manageiq-external-auth-openidc.conf")," file as follows."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'LoadModule          auth_openidc_module modules/mod_auth_openidc.so\nServerName          https://$CLOUDFORMS_HOST\n\nOIDCCLientID                   $CLOUDFORMS_CLIENT_ID\nOIDCClientSecret               $CLOUDFORMS_CLIENT_SECRET\nOIDCRedirectURI                https://$CLOUDFORMS_HOST/oidc_login/redirect_uri\nOIDCCryptoPassphrase           $CLOUDFORMS_PASSPHRASE\nOIDCOAuthRemoteUserClaim       sub\nOIDCRemoteUserClaim            name\n\nOIDCProviderIssuer                  https://127.0.0.1:443/idauth/oidc/endpoint/OP\nOIDCProviderAuthorizationEndpoint   https://$ICP_CONSOLE/idprovider/v1/auth/authorize\nOIDCProviderTokenEndpoint           https://$ICP_CONSOLE/idprovider/v1/auth/token\nOIDCOAuthIntrospectionEndpoint      https://$ICP_CONSOLE/idprovider/v1/auth/introspect\nOIDCProviderJwksUri                 https://$ICP_CONSOLE/oidc/endpoint/OP/jwk\nOIDCProviderEndSessionEndpoint      https://$ICP_CONSOLE/idprovider/v1/auth/logout\n\nOIDCScope                        "openid email profile"\nOIDCResponseMode                 "query"\nOIDCProviderTokenEndpointAuth     client_secret_post\n\nOIDCPassUserInfoAs json\nOIDCSSLValidateServer off\nOIDCHTTPTimeoutShort 10\n\n<Location /oidc_login>\n  AuthType  openid-connect\n  Require   valid-user\n  LogLevel   warn\n</Location>\n'))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Restart httpd. "),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"systemctl restart httpd\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Open the CloudForms Web UI and log in as ",Object(o.b)("inlineCode",{parentName:"p"},"admin"),", then select the\nConfiguration by clicking the gear icon.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Select ",Object(o.b)("strong",{parentName:"p"},"Settings"),", then select the ",Object(o.b)("strong",{parentName:"p"},"Authentication")," tab.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"In the Authentication section, set the Mode to ",Object(o.b)("strong",{parentName:"p"},"External (httpd)"),".")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"In the External Authentication (httpd) Settings section, set the\nProvider Type to ",Object(o.b)("strong",{parentName:"p"},"Enable OpenID-Connect"),"."),Object(o.b)(m,{mdxType:"InlineNotification"},"This setting enables the OIDC login button on the login screen, that redirects to the OIDC protected page for authentication, and supports the OIDC logout process."),Object(o.b)(m,{mdxType:"InlineNotification"},"As an optional step, in the External Authentication (httpd) Settings section, select Enable Single Sign-On. If you select this option, the initial access to the Appliance Administrative UI will redirect to the OIDC Identity Provider authentication screen.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"In the Role Settings section, select the\n",Object(o.b)("strong",{parentName:"p"},"Get User Groups from External Authentication (httpd)")," setting.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Select ",Object(o.b)("strong",{parentName:"p"},"Access Control"),". Make sure the user’s groups are created\non the Appliance and appropriate roles are assigned to those groups."),Object(o.b)(m,{mdxType:"InlineNotification"},"The name of the group must match the name of the LDAP group used for granting access to the ICP Console")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Click ",Object(o.b)("strong",{parentName:"p"},"Save"),".")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Log out from CloudForms, and refresh your browser.  If you enabled SSO, it will redirect you to the ICP Console logon screen.  If not, click on ",Object(o.b)("inlineCode",{parentName:"p"},"Log in to Corporate System")))))}O.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-mcm-mcm-13-cp-4-mcm-cloudforms-index-mdx-09b80bca81dcdc8a0a76.js.map