(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{125:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var l=t(0),r=t.n(l),n=t(119),s=t(121),m=t(56),i=t.n(m);function c(e){var a=e.sidebar;return 0===a.items.length?null:r.a.createElement("div",{className:Object(n.a)(i.a.sidebar,"thin-scrollbar")},r.a.createElement("h3",{className:i.a.sidebarItemTitle},a.title),r.a.createElement("ul",{className:i.a.sidebarItemList},a.items.map((function(e){return r.a.createElement("li",{key:e.permalink,className:i.a.sidebarItem},r.a.createElement(s.a,{isNavLink:!0,to:e.permalink,className:i.a.sidebarItemLink,activeClassName:i.a.sidebarItemLinkActive},e.title))}))))}},130:function(e,a,t){"use strict";var l=t(0),r=t.n(l),n=t(119),s=t(118),m=t(120),i=t(121),c=t(134),o=t(129),g=t(57),u=t.n(g),d=t(117);a.a=function(e){var a,t,l=(a=Object(d.usePluralForm)().selectMessage,function(e){var t=Math.ceil(e);return a(t,Object(m.b)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),g=e.children,p=e.frontMatter,h=e.metadata,E=e.truncated,b=e.isBlogPostPage,v=void 0!==b&&b,N=h.date,f=h.formattedDate,k=h.permalink,w=h.tags,T=h.readingTime,_=p.author,P=p.title,y=p.image,L=p.keywords,M=p.author_url||p.authorURL,O=p.author_title||p.authorTitle,j=p.author_image_url||p.authorImageURL;return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{keywords:L,image:y}),r.a.createElement("article",{className:v?void 0:"margin-bottom--xl"},(t=v?"h1":"h2",r.a.createElement("header",null,r.a.createElement(t,{className:Object(n.a)("margin-bottom--sm",u.a.blogPostTitle)},v?P:r.a.createElement(i.a,{to:k},P)),r.a.createElement("div",{className:"margin-vert--md"},r.a.createElement("time",{dateTime:N,className:u.a.blogPostDate},f,T&&r.a.createElement(r.a.Fragment,null," \xb7 ",l(T)))),r.a.createElement("div",{className:"avatar margin-vert--md"},j&&r.a.createElement(i.a,{className:"avatar__photo-link avatar__photo",href:M},r.a.createElement("img",{src:j,alt:_})),r.a.createElement("div",{className:"avatar__intro"},_&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"avatar__name"},r.a.createElement(i.a,{href:M},_)),r.a.createElement("small",{className:"avatar__subtitle"},O)))))),r.a.createElement("div",{className:"markdown"},r.a.createElement(s.a,{components:c.a},g)),(w.length>0||E)&&r.a.createElement("footer",{className:"row margin-vert--lg"},w.length>0&&r.a.createElement("div",{className:"col"},r.a.createElement("strong",null,r.a.createElement(m.a,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),w.map((function(e){var a=e.label,t=e.permalink;return r.a.createElement(i.a,{key:t,className:"margin-horiz--sm",to:t},a)}))),E&&r.a.createElement("div",{className:"col text--right"},r.a.createElement(i.a,{to:h.permalink,"aria-label":"Read more about "+P},r.a.createElement("strong",null,r.a.createElement(m.a,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}},90:function(e,a,t){"use strict";t.r(a);var l=t(0),r=t.n(l),n=t(124),s=t(130),m=t(121),i=t(125),c=t(120),o=t(117);function g(e){var a,t=e.tagName,l=e.count,n=(a=Object(o.usePluralForm)().selectMessage,function(e){return a(e,Object(c.b)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))});return r.a.createElement(c.a,{id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",values:{nPosts:n(l),tagName:t}},'{nPosts} tagged with "{tagName}"')}a.default=function(e){var a=e.metadata,t=e.items,l=e.sidebar,u=a.allTagsPath,d=a.name,p=a.count;return r.a.createElement(n.a,{title:'Posts tagged "'+d+'"',description:'Blog | Tagged "'+d+'"',wrapperClassName:o.ThemeClassNames.wrapper.blogPages,pageClassName:o.ThemeClassNames.page.blogTagsPostPage,searchMetadatas:{tag:"blog_tags_posts"}},r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--3"},r.a.createElement(i.a,{sidebar:l})),r.a.createElement("main",{className:"col col--7"},r.a.createElement("h1",null,r.a.createElement(g,{count:p,tagName:d})),r.a.createElement(m.a,{href:u},r.a.createElement(c.a,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags")),r.a.createElement("div",{className:"margin-vert--xl"},t.map((function(e){var a=e.content;return r.a.createElement(s.a,{key:a.metadata.permalink,frontMatter:a.frontMatter,metadata:a.metadata,truncated:!0},r.a.createElement(a,null))})))))))}}}]);