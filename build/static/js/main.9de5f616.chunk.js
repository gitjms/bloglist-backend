(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{17:function(e,t,n){e.exports=n(41)},40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(16),c=n.n(l),o=n(6),i=n(2),u=function(e){var t=e.message;return null===t?null:r.a.createElement("div",{className:"error",style:{color:"red",background:"lightgray",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginTop:10,marginBottom:10}},t)},s=function(e){var t=e.message;return null===t?null:r.a.createElement("div",{className:"message",style:{color:"green",background:"lightgray",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginTop:10,marginBottom:10}},t)},m=n(3),f=n.n(m),d=n(4),g=n(5),p=n.n(g),b={getAll:function(){var e=Object(d.a)(f.a.mark((function e(){var t,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=p.a.get("/api/blogs"),e.next=3,t;case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),create:function(){var e=Object(d.a)(f.a.mark((function e(t){var n,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=p.a.post("/api/blogs",t),e.next=3,n;case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),update:function(){var e=Object(d.a)(f.a.mark((function e(t,n){var a,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=p.a.put("".concat("/api/blogs","/").concat(t),n),e.next=3,a;case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),remove:function(){var e=Object(d.a)(f.a.mark((function e(t){var n,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=p.a.delete("".concat("/api/blogs","/").concat(t)),e.next=3,n;case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},h=function(e){var t=e.values,n=e.deleteBlog;return r.a.createElement("div",{className:"list-group"},r.a.createElement("li",{className:"list-group-item list-group-item-action"},t.title,r.a.createElement("span",{style:{margin:"5px"}}),t.author,r.a.createElement("span",{style:{margin:"5px"}}),t.url,r.a.createElement("span",{style:{margin:"5px"}}),t.likes,r.a.createElement("span",{style:{margin:"5px"}}),r.a.createElement("button",{type:"button",className:"btn btn-warning",id:"listbtn",style:{marginLeft:"5px"},onClick:n},"delete")))},v=function(e){var t=e.rows;return r.a.createElement("div",{style:{lineHeight:0}},t)},E=function(e){var t=e.setTitleToFind,n=e.titleToFind,a=e.handleFindTitleChange;return r.a.createElement("form",{onChange:t},r.a.createElement("div",{align:"left"},r.a.createElement("label",{htmlFor:"filter"},"filter shown with:"),r.a.createElement("input",{id:"filter",type:"text",className:"form-control",value:n,onChange:a})))},y=function(e){var t=e.addBlog,n=e.newTitle,a=e.handleTitleChange,l=e.newAuthor,c=e.handleAuthorChange,o=e.newUrl,i=e.handleUrlChange,u=e.newLikes,s=e.handleLikesChange,m=e.replaceTitle;return r.a.createElement("div",{className:"col-auto"},r.a.createElement("form",{onSubmit:t},r.a.createElement("div",{align:"left",className:"form-group"},r.a.createElement("label",{htmlFor:"title"},"title:"),r.a.createElement("input",{id:"title",type:"text",className:"form-control",value:n,onChange:a})),r.a.createElement("div",{align:"left",className:"form-group"},r.a.createElement("label",{htmlFor:"author"},"author:"),r.a.createElement("input",{id:"author",type:"text",className:"form-control",value:l,onChange:c})),r.a.createElement("div",{align:"left",className:"form-group"},r.a.createElement("label",{htmlFor:"url"},"url:"),r.a.createElement("input",{id:"url",type:"text",className:"form-control",value:o,onChange:i})),r.a.createElement("div",{align:"left",className:"form-group"},r.a.createElement("label",{htmlFor:"likes"},"likes:"),r.a.createElement("input",{id:"likes",type:"text",className:"form-control",value:u,onChange:s})),r.a.createElement("div",{align:"left",className:"form-group"},r.a.createElement("button",{className:"btn btn-primary",type:"submit",onClick:m},"add"))))},w=function(){return r.a.createElement("div",{style:{color:"gray",fontStyle:"italic",fontSize:16}},r.a.createElement("br",null),r.a.createElement("hr",null),r.a.createElement("center",null,r.a.createElement("em",null,"Bloglist app, Full Stack Web Development"),r.a.createElement("br",null),r.a.createElement("em",null,"University of Helsinki 2020")))},j=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],l=t[1],c=Object(a.useState)(""),m=Object(i.a)(c,2),f=m[0],d=m[1],g=Object(a.useState)(""),p=Object(i.a)(g,2),j=p[0],O=p[1],k=Object(a.useState)(""),C=Object(i.a)(k,2),N=C[0],T=C[1],x=Object(a.useState)(0),S=Object(i.a)(x,2),F=S[0],B=S[1],A=Object(a.useState)(!0),L=Object(i.a)(A,2),D=L[0],U=L[1],I=Object(a.useState)(""),z=Object(i.a)(I,2),H=z[0],J=z[1],R=Object(a.useState)(null),W=Object(i.a)(R,2),q=W[0],G=W[1],K=Object(a.useState)(null),M=Object(i.a)(K,2),P=M[0],Q=M[1];Object(a.useEffect)((function(){b.getAll().then((function(e){console.log(e),l(e)}))}),[]);var V=D?Array.from(n):n.filter((function(e){return e.title.toLowerCase().includes(H.toLowerCase())})),X=function(e){var t=n.find((function(t){return t.title===e.title})),a=Object(o.a)(Object(o.a)({},t),{},{title:e.title}),r="".concat(t.title," is already added to\n      bloglist, replace the old title with a new one?");window.confirm(r)&&b.update(t.id,a).then((function(e){l(n.map((function(n){return n.title!==t.title?n:e}))),Q("Changed blog title of ".concat(t.title)),setTimeout((function(){Q(null)}),4e3)})).catch((function(e){G("Information of ".concat(t.title," has already been removed from server")),setTimeout((function(){G(null)}),4e3),l(n.filter((function(e){return e.id!==t.id})))}))},Y=function(e){var t=n.find((function(t){return t.id===e}));window.confirm("Delete ".concat(t.title,"?"))&&b.remove(e,t).then((function(){l(n.filter((function(t){return t.id!==e}))),Q("Deleted ".concat(t.title)),setTimeout((function(){Q(null)}),4e3)})).catch((function(e){G("Information of ".concat(t.title," has already been removed from server")),setTimeout((function(){G(null)}),4e3)}))};return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{id:"nav",className:"navbar navbar-light bg-light"},r.a.createElement("strong",null,"Bloglist"),r.a.createElement("a",{role:"button",className:"btn btn-outline-primary",href:"/info"},"Info")),r.a.createElement("div",{className:"container"},r.a.createElement("br",null),r.a.createElement("div",{className:"col-auto"},r.a.createElement(E,{setTitleToFind:function(e){e.preventDefault(),""!==H&&U(!1)},titleToFind:H,handleFindTitleChange:function(e){J(e.target.value)}})),r.a.createElement(s,{message:P}),r.a.createElement(u,{message:q}),r.a.createElement("br",null),r.a.createElement("div",{className:"col-auto"},r.a.createElement("b",null,"Add new blog"),r.a.createElement(y,{addBlog:function(e){e.preventDefault();var t={title:f,author:j,url:N,likes:F};n.map((function(e){return e.title.toLowerCase()})).includes(t.title.toLowerCase())?X(t):b.create(t).then((function(e){l(n.concat(e)),d(""),O(""),T(""),B(0),Q("Added ".concat(t.title)),setTimeout((function(){Q(null)}),4e3)})).catch((function(e){G(console.log(e.response.data)),setTimeout((function(){G(null)}),4e3)}))},newTitle:f,handleTitleChange:function(e){d(e.target.value)},newAuthor:j,handleAuthorChange:function(e){O(e.target.value)},newUrl:N,handleUrlChange:function(e){T(e.target.value)},newLikes:F,handleLikesChange:function(e){B(e.target.value)}})),r.a.createElement("br",null),r.a.createElement("div",{className:"col-auto"},r.a.createElement("b",null,"Blogs"),r.a.createElement(v,{rows:V.map((function(e){return r.a.createElement(h,{key:e.title,values:e,deleteBlog:function(){return Y(e.id)},replaceTitle:function(){return X(e.title,e.author,e.url,e.likes)}})}))})),r.a.createElement(w,null)))};n(40);c.a.render(r.a.createElement(j,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.9de5f616.chunk.js.map