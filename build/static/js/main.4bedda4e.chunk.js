(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{17:function(e,t,n){e.exports=n(41)},40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(16),i=n.n(l),c=n(6),o=n(2),u=function(e){var t=e.message;return null===t?null:r.a.createElement("div",{className:"error",style:{color:"red",background:"lightgray",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginTop:10,marginBottom:10}},t)},s=function(e){var t=e.message;return null===t?null:r.a.createElement("div",{className:"message",style:{color:"green",background:"lightgray",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginTop:10,marginBottom:10}},t)},m=n(3),f=n.n(m),d=n(4),p=n(5),b=n.n(p),g={getAll:function(){var e=Object(d.a)(f.a.mark((function e(){var t,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=b.a.get("/api/blogs"),e.next=3,t;case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),create:function(){var e=Object(d.a)(f.a.mark((function e(t){var n,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=b.a.post("/api/blogs",t),e.next=3,n;case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),update:function(){var e=Object(d.a)(f.a.mark((function e(t,n){var a,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=b.a.put("".concat("/api/blogs","/").concat(t),n),e.next=3,a;case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),remove:function(){var e=Object(d.a)(f.a.mark((function e(t){var n,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=b.a.delete("".concat("/api/blogs","/").concat(t)),e.next=3,n;case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},h=function(e){var t=e.values,n=e.likeBlog,a=e.replaceTitle,l=e.deleteBlog;return r.a.createElement("div",{className:"list-group"},r.a.createElement("li",{className:"list-group-item list-group-item-action"},t.title,r.a.createElement("span",{style:{margin:"5px"}}),t.author,r.a.createElement("span",{style:{margin:"5px"}}),t.url,r.a.createElement("span",{style:{margin:"5px"}})),r.a.createElement("div",{className:"form-inline"},r.a.createElement("div",null,r.a.createElement("span",{style:{margin:"5px"}}),"Likes: ",t.likes,r.a.createElement("button",{type:"button",className:"btn btn-success",id:"listbtnlike",style:{marginLeft:"5px"},onClick:n},"+1"),r.a.createElement("span",{style:{marginRight:"15px"}})),r.a.createElement("button",{type:"button",className:"btn btn-primary",id:"listbtn",style:{marginLeft:"5px"},onClick:a},"change title"),r.a.createElement("button",{type:"button",className:"btn btn-warning",id:"listbtn",style:{marginLeft:"5px"},onClick:l},"delete")))},v=function(e){var t=e.rows;return r.a.createElement("div",{style:{lineHeight:0}},t)},E=function(e){var t=e.setTitleToFind,n=e.titleToFind,a=e.handleFindTitleChange;return r.a.createElement("form",{onChange:t},r.a.createElement("div",{align:"left"},r.a.createElement("label",{htmlFor:"filter"},"filter shown with:"),r.a.createElement("input",{id:"filter",type:"text",className:"form-control",value:n,onChange:a})))},y=function(e){var t=e.addBlog,n=e.newTitle,a=e.handleTitleChange,l=e.newAuthor,i=e.handleAuthorChange,c=e.newUrl,o=e.handleUrlChange,u=(e.newLikes,e.handleLikesChange,e.replaceTitle);return r.a.createElement("div",{className:"col-auto"},r.a.createElement("form",{onSubmit:t},r.a.createElement("div",{align:"left",className:"form-group"},r.a.createElement("label",{id:"formlabel",htmlFor:"title"},"title:"),r.a.createElement("input",{id:"title",type:"text",className:"form-control",value:n,onChange:a})),r.a.createElement("div",{align:"left",className:"form-group"},r.a.createElement("label",{id:"formlabel",htmlFor:"author"},"author:"),r.a.createElement("input",{id:"author",type:"text",className:"form-control",value:l,onChange:i})),r.a.createElement("div",{align:"left",className:"form-group"},r.a.createElement("label",{id:"formlabel",htmlFor:"url"},"url:"),r.a.createElement("input",{id:"url",type:"text",className:"form-control",value:c,onChange:o})),r.a.createElement("div",{align:"left",className:"form-group"},r.a.createElement("button",{className:"btn btn-primary",type:"submit",onClick:u},"add"))))},w=function(){return r.a.createElement("div",{style:{color:"gray",fontStyle:"italic",fontSize:16}},r.a.createElement("br",null),r.a.createElement("hr",null),r.a.createElement("center",null,r.a.createElement("em",null,"Bloglist app, Full Stack Web Development"),r.a.createElement("br",null),r.a.createElement("em",null,"University of Helsinki 2020")))},k=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],l=t[1],i=Object(a.useState)(""),m=Object(o.a)(i,2),f=m[0],d=m[1],p=Object(a.useState)(""),b=Object(o.a)(p,2),k=b[0],j=b[1],O=Object(a.useState)(""),C=Object(o.a)(O,2),N=C[0],T=C[1],x=Object(a.useState)(0),S=Object(o.a)(x,2),B=S[0],F=S[1],L=Object(a.useState)(!0),A=Object(o.a)(L,2),D=A[0],I=A[1],U=Object(a.useState)(""),z=Object(o.a)(U,2),R=z[0],H=z[1],J=Object(a.useState)(null),W=Object(o.a)(J,2),q=W[0],G=W[1],K=Object(a.useState)(null),M=Object(o.a)(K,2),P=M[0],Q=M[1];Object(a.useEffect)((function(){g.getAll().then((function(e){l(e)}))}),[]);var V=D?Array.from(n):n.filter((function(e){return e.title.toLowerCase().includes(R.toLowerCase())})),X=function(e){var t=n.find((function(t){return t.id===e})),a=Object(c.a)(Object(c.a)({},t),{},{title:t.title}),r="".concat(t.title," is already added to\n      bloglist, replace the old title with a new one?");window.confirm(r)&&g.update(e.id,a).then((function(e){l(n.map((function(n){return n.title!==t.title?n:e}))),Q("Changed blog title of ".concat(t.title)),setTimeout((function(){Q(null)}),4e3)})).catch((function(e){G("Information of ".concat(t.title," has already been removed from server")),setTimeout((function(){G(null)}),4e3),l(n.filter((function(e){return e.id!==t.id})))}))},Y=function(e){var t=n.find((function(t){return t.id===e}));window.confirm("Delete ".concat(t.title,"?"))&&g.remove(e,t).then((function(){l(n.filter((function(t){return t.id!==e}))),Q("Deleted ".concat(t.title)),setTimeout((function(){Q(null)}),4e3)})).catch((function(e){G("Information of ".concat(t.title," has already been removed from server")),setTimeout((function(){G(null)}),4e3)}))},Z=function(e){var t=n.find((function(t){return t.id===e})),a=Object(c.a)(Object(c.a)({},t),{},{likes:t.likes+1});g.update(t.id,a).then((function(e){l(n.map((function(n){return n.likes!==t.likes?n:e})))})).catch((function(e){G("Information of ".concat(t.title," has already been removed from server")),setTimeout((function(){G(null)}),4e3),l(n.filter((function(e){return e.id!==t.id})))}))};return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{id:"nav",className:"navbar navbar-light bg-light"},r.a.createElement("strong",null,"Bloglist"),r.a.createElement("a",{role:"button",className:"btn btn-outline-primary",href:"/info"},"Info")),r.a.createElement("div",{className:"container"},r.a.createElement("br",null),r.a.createElement("div",{className:"col-auto"},r.a.createElement(E,{setTitleToFind:function(e){e.preventDefault(),""!==R&&I(!1)},titleToFind:R,handleFindTitleChange:function(e){H(e.target.value)}})),r.a.createElement(s,{message:P}),r.a.createElement(u,{message:q}),r.a.createElement("br",null),r.a.createElement("div",{className:"col-auto"},r.a.createElement("b",null,"Add new blog"),r.a.createElement(y,{addBlog:function(e){e.preventDefault();var t={title:f,author:k,url:N,likes:B};n.map((function(e){return e.title.toLowerCase()})).includes(t.title.toLowerCase())?X(t):g.create(t).then((function(e){l(n.concat(e)),d(""),j(""),T(""),F(0),Q("Added ".concat(t.title)),setTimeout((function(){Q(null)}),4e3)})).catch((function(e){G(console.log(e.response.data)),setTimeout((function(){G(null)}),4e3)}))},newTitle:f,handleTitleChange:function(e){d(e.target.value)},newAuthor:k,handleAuthorChange:function(e){j(e.target.value)},newUrl:N,handleUrlChange:function(e){T(e.target.value)},newLikes:B,handleLikesChange:function(e){F(e.target.value)}})),r.a.createElement("br",null),r.a.createElement("div",{className:"col-auto"},r.a.createElement("b",null,"Blogs"),r.a.createElement(v,{rows:V.map((function(e){return r.a.createElement(h,{key:e.title,values:e,likeBlog:function(){return Z(e.id)},replaceTitle:function(){return X(e.id)},deleteBlog:function(){return Y(e.id)}})}))})),r.a.createElement(w,null)))};n(40);i.a.render(r.a.createElement(k,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.4bedda4e.chunk.js.map