(this["webpackJsonpreact-blog"]=this["webpackJsonpreact-blog"]||[]).push([[0],{21:function(e,t,c){},31:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),s=c(15),o=c.n(s),a=(c(21),c(7)),i=c(0),l=function(){return Object(i.jsxs)("nav",{className:"Navbar",children:[Object(i.jsx)("h1",{children:"BLOG"}),Object(i.jsxs)("div",{className:"links",children:[Object(i.jsx)(a.b,{to:"/",children:"Home"}),Object(i.jsx)(a.b,{to:"/create",style:{color:"white",backgroundColor:"#f1356d",borderRadius:"8px"},children:"New blog"})]})]})},j=function(e){var t=e.blogs;return Object(i.jsx)("div",{className:"blog-list",children:t.map((function(e){return Object(i.jsx)("div",{className:"blog-preview",children:Object(i.jsxs)(a.b,{to:"/blogs/".concat(e.id),children:[Object(i.jsx)("h2",{children:e.title}),Object(i.jsxs)("p",{children:["Written by ",e.author]})]})},e.id)}))})},b=c(8),d=function(e){var t=Object(n.useState)(null),c=Object(b.a)(t,2),r=c[0],s=c[1],o=Object(n.useState)(!0),a=Object(b.a)(o,2),i=a[0],l=a[1],j=Object(n.useState)(null),d=Object(b.a)(j,2),h=d[0],u=d[1];return Object(n.useEffect)((function(){var t=new AbortController;return fetch(e,{signal:t.signal}).then((function(e){if(!e.ok)throw Error("could not fetch the data for that resource");return e.json()})).then((function(e){l(!1),s(e),u(null)})).catch((function(e){"AbortError"===e.name?console.log("fetch aborted"):(l(!1),u(e.message))})),function(){return t.abort()}}),[e]),{data:r,isPending:i,error:h}},h=function(){var e=d("http://localhost:8000/blogs"),t=e.error,c=e.isPending,n=e.data;return Object(i.jsxs)("div",{className:"Home",children:[t&&Object(i.jsx)("div",{children:t}),c&&Object(i.jsx)("div",{children:"Loading..."}),n&&Object(i.jsx)(j,{blogs:n})]})},u=c(2),O=function(){var e=Object(n.useState)(""),t=Object(b.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)(""),o=Object(b.a)(s,2),a=o[0],l=o[1],j=Object(n.useState)(""),d=Object(b.a)(j,2),h=d[0],O=d[1],x=Object(n.useState)(!1),g=Object(b.a)(x,2),f=g[0],p=g[1],v=Object(u.f)();return Object(i.jsxs)("div",{className:"create",children:[Object(i.jsx)("h2",{children:"Add a New Blog"}),Object(i.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={title:c,body:a,author:h};p(!0),fetch("http://localhost:8000/blogs/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(){console.log("new blog added"),p(!1),v.push("/")}))},children:[Object(i.jsx)("label",{children:"Blog Title:"}),Object(i.jsx)("input",{type:"text",required:!0,value:c,onChange:function(e){return r(e.target.value)}}),Object(i.jsx)("label",{children:"Blog body:"}),Object(i.jsx)("textarea",{required:!0,value:a,onChange:function(e){return l(e.target.value)}}),Object(i.jsx)("label",{children:"Blog author:"}),Object(i.jsx)("input",{type:"text",required:!0,value:h,onChange:function(e){return O(e.target.value)}}),!f&&Object(i.jsx)("button",{children:"Add Blog"}),f&&Object(i.jsx)("button",{disabled:!0,children:"Adding Blog"})]})]})},x=function(){var e=Object(u.g)().id,t=d("http://localhost:8000/blogs/"+e),c=t.data,n=t.error,r=t.isPending,s=Object(u.f)();return Object(i.jsxs)("div",{className:"blog-details",children:[r&&Object(i.jsx)("div",{children:"Loading..."}),n&&Object(i.jsx)("div",{children:n}),c&&Object(i.jsxs)("article",{children:[Object(i.jsx)("h2",{children:c.title}),Object(i.jsxs)("p",{children:["Written by ",c.author]}),Object(i.jsx)("div",{children:c.body}),Object(i.jsx)("button",{onClick:function(){fetch("http://localhost:8000/blogs/"+c.id,{method:"DELETE"}).then((function(){s.push("/")}))},children:"delete"})]})]})},g=function(){return Object(i.jsxs)("div",{className:"not-found",children:[Object(i.jsx)("h2",{children:"Sorry"}),Object(i.jsx)("p",{children:"That page cannot be found"}),Object(i.jsx)(a.b,{to:"/",children:"Back to the homepage..."})]})};var f=function(){return Object(i.jsx)(a.a,{children:Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(l,{}),Object(i.jsx)("div",{className:"content",children:Object(i.jsxs)(u.c,{children:[Object(i.jsx)(u.a,{exact:!0,path:"/",children:Object(i.jsx)(h,{})}),Object(i.jsx)(u.a,{path:"/create",children:Object(i.jsx)(O,{})}),Object(i.jsx)(u.a,{path:"/blogs/:id",children:Object(i.jsx)(x,{})}),Object(i.jsx)(u.a,{path:"*",children:Object(i.jsx)(g,{})})]})})]})})};o.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(f,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.2379866e.chunk.js.map