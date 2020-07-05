(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{27:function(e,t,n){e.exports=n(61)},60:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(9),o=n.n(l),c=n(2),u=n.n(c),i=n(4),s=n(1),m=function(e){var t=e.message;return null===t?null:r.a.createElement("div",{className:"error",style:{color:"rgb(255, 0, 0)",background:"lightgray",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginTop:10,marginBottom:10}},t)},d=function(e){var t=e.message;return null===t?null:r.a.createElement("div",{className:"message",style:{color:"green",background:"lightgray",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginTop:10,marginBottom:10}},t)},f=n(5),b=n.n(f),p=null,g={getAll:function(){var e=Object(i.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=b.a.get("/api/blogs"),e.next=3,t;case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),create:function(){var e=Object(i.a)(u.a.mark((function e(t){var n,a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:p}},a=b.a.post("/api/blogs",t,n),e.next=4,a;case 4:return r=e.sent,e.abrupt("return",r.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),update:function(){var e=Object(i.a)(u.a.mark((function e(t,n){var a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=b.a.put("".concat("/api/blogs","/").concat(t),n),e.next=3,a;case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),remove:function(){var e=Object(i.a)(u.a.mark((function e(t){var n,a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:p}},a=b.a.delete("".concat("/api/blogs","/").concat(t),n),e.next=4,a;case 4:return r=e.sent,e.abrupt("return",r.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),setToken:function(e){p="bearer ".concat(e)}},E=function(e){var t=e.createBlog,n=Object(a.useState)(""),l=Object(s.a)(n,2),o=l[0],c=l[1],u=Object(a.useState)(""),i=Object(s.a)(u,2),m=i[0],d=i[1],f=Object(a.useState)(""),b=Object(s.a)(f,2),p=b[0],g=b[1];return r.a.createElement("div",{className:"col-auto",id:"boxed"},r.a.createElement("br",null),r.a.createElement("b",null,"Add a new blog"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t({title:o,author:m,url:p}),c(""),d(""),g("")}},r.a.createElement("div",{align:"left",className:"form-group"},r.a.createElement("label",{id:"formlabel",htmlFor:"title"},"title:"),r.a.createElement("input",{id:"title",type:"text",className:"form-control",value:o,onChange:function(e){c(e.target.value)}})),r.a.createElement("div",{align:"left",className:"form-group"},r.a.createElement("label",{id:"formlabel",htmlFor:"author"},"author:"),r.a.createElement("input",{id:"author",type:"text",className:"form-control",value:m,onChange:function(e){d(e.target.value)}})),r.a.createElement("div",{align:"left",className:"form-group"},r.a.createElement("label",{id:"formlabel",htmlFor:"url"},"url:"),r.a.createElement("input",{id:"url",type:"text",className:"form-control",value:p,onChange:function(e){g(e.target.value)}})),r.a.createElement("div",{align:"left",className:"form-group"},r.a.createElement("button",{className:"btn btn-primary",id:"add-button",type:"submit",style:{float:"left",marginTop:"12px"}},"add"))))},v=function(e){var t=e.user,n=e.blog,l=e.likeBlog,o=e.deleteBlog,c=Object(a.useState)(!1),u=Object(s.a)(c,2),i=u[0],m=u[1],d={display:i?"none":""},f={display:i?"":"none"};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:d,id:"boxed",className:"blogClosed"},r.a.createElement("li",{className:"list-group-item"},r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{style:{width:"500px"}},r.a.createElement("em",null,r.a.createElement("a",{href:n.url},n.title)),r.a.createElement("em",null,n.author)),r.a.createElement("td",{style:{width:"50px"}},r.a.createElement("button",{type:"button",id:"show-button",className:"btn btn-primary",onClick:function(){return m(!0)}},"show"))))))),r.a.createElement("div",{style:f,id:"boxed",className:"blogOpened"},r.a.createElement("li",{className:"list-group-item"},r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{style:{width:"500px"}},r.a.createElement("em",null,r.a.createElement("a",{href:n.url},n.title)),r.a.createElement("em",null,n.author)),r.a.createElement("td",{style:{width:"50px"}},r.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:function(){return m(!1)}},"hide")))))),r.a.createElement("li",{className:"list-group-item"},n.url),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("div",null,"Likes: ",n.likes,r.a.createElement("button",{type:"button",className:"btn btn-success",id:"like-button",style:{paddingLeft:"10px",width:"60px",marginLeft:"10px"},onClick:l},"+1"))),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{style:{width:"490px"}},n.user.name),t.name===n.user.name&&r.a.createElement("td",{style:{width:"60px"}},r.a.createElement("button",{type:"button",id:"delete-button",className:"btn btn-warning",onClick:o},"delete"))))))))},h=function(e){var t=e.rows;return r.a.createElement(r.a.Fragment,null,r.a.createElement("b",null,"Blogs"),t)},y=function(e){var t=e.titleToFind,n=e.setTitleToFind,a=e.handleFindTitleChange;return r.a.createElement("form",{onChange:n},r.a.createElement("div",{align:"left"},r.a.createElement("label",{htmlFor:"filter"},"filter shown with:"),r.a.createElement("input",{id:"filter",type:"text",className:"form-control",value:t,onChange:a})))},w=r.a.forwardRef((function(e,t){var l=n(23).animateScroll,o=Object(a.useState)(!1),c=Object(s.a)(o,2),u=c[0],i=c[1],m={display:u?"none":""},d={display:u?"":"none"},f=function(){i(!u),u&&l.scrollToTop()};return Object(a.useImperativeHandle)(t,(function(){return{toggleVisibility:f}})),r.a.createElement("div",{className:"btn-group",role:"group"},r.a.createElement("div",{style:m},r.a.createElement("button",{className:"btn btn-primary",type:"submit",onClick:f},e.buttonLabel)),r.a.createElement("div",{style:d,className:"togglableContent"},e.children,r.a.createElement("button",{className:"btn btn-primary",type:"submit",style:{float:"right"},onClick:f},"cancel")))}));w.displayName="Togglable";var O=w,N={login:function(){var e=Object(i.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},j=function(e){var t=e.loginUser,n=Object(a.useState)(""),l=Object(s.a)(n,2),o=l[0],c=l[1],u=Object(a.useState)(""),i=Object(s.a)(u,2),m=i[0],d=i[1];return r.a.createElement("div",{className:"form-group-inline"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t({username:o,password:m}),c(""),d("")}},r.a.createElement("div",{align:"left",className:"form-group-inline"},r.a.createElement("label",{id:"formlabel",htmlFor:"username"},"username:"),r.a.createElement("input",{id:"username",type:"text",className:"form-control",name:"Username",value:o,onChange:function(e){c(e.target.value)}}),r.a.createElement("label",{id:"formlabel",htmlFor:"password"},"password:"),r.a.createElement("input",{id:"password",type:"text",className:"form-control",name:"Password",value:m,onChange:function(e){d(e.target.value)}})),r.a.createElement("button",{className:"btn btn-primary",id:"login-button",type:"submit",style:{float:"left"}},"login")))},k=function(){return r.a.createElement("div",{style:{color:"gray",fontStyle:"italic",fontSize:16}},r.a.createElement("br",null),r.a.createElement("hr",null),r.a.createElement("center",null,r.a.createElement("em",null,"Bloglist app, Full Stack Web Development"),r.a.createElement("br",null),r.a.createElement("em",null,"University of Helsinki 2020")))},x=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),l=t[0],o=t[1],c=Object(a.useState)(!0),f=Object(s.a)(c,2),b=f[0],p=f[1],w=Object(a.useState)(""),x=Object(s.a)(w,2),T=x[0],S=x[1],C=Object(a.useState)(null),F=Object(s.a)(C,2),B=F[0],L=F[1],A=Object(a.useState)(null),D=Object(s.a)(A,2),U=D[0],z=D[1],R=Object(a.useState)(null),I=Object(s.a)(R,2),J=I[0],q=I[1],H=Object(a.useRef)(),V=Object(a.useRef)(),P=n(23).animateScroll;Object(a.useEffect)((function(){g.getAll().then((function(e){o(e)}))}),[]),Object(a.useEffect)((function(){var e=window.localStorage.getItem("loggedBloglistappUser");if(e){var t=JSON.parse(e);q(t),g.setToken(t.token)}}),[]);var W=function(){var e=Object(i.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==t.username&&""!==t.password){e.next=5;break}L("both fields are required"),setTimeout((function(){L(null)}),4e3),e.next=18;break;case 5:return e.prev=5,e.next=8,N.login(t);case 8:n=e.sent,window.localStorage.setItem("loggedBloglistappUser",JSON.stringify(n)),g.setToken(n.token),q(n),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(5),L("wrong username or password"),setTimeout((function(){L(null)}),4e3);case 18:case"end":return e.stop()}}),e,null,[[5,14]])})));return function(t){return e.apply(this,arguments)}}(),G=function(){var e=Object(i.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault();try{q(null),window.localStorage.clear()}catch(n){L("".concat(n)),setTimeout((function(){L(null)}),4e3)}window.location.reload(),console.log("logged out successfully");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),K=function(e){S(e.target.value)},M=function(e){e.preventDefault(),""!==T&&p(!1)};function Q(e,t){return t.likes-e.likes}var X=b?l.sort(Q):l.filter((function(e){return e.title.toLowerCase().includes(T.toLowerCase())})).sort(Q),Y=function(e){H.current.toggleVisibility(),g.create(e).then((function(e){o(l.concat(e))})).then((function(){g.getAll().then((function(e){o(e)}))})).catch((function(){L("fields title and url are required, url must be unique"),setTimeout((function(){L(null)}),4e3)})),z("added `".concat(e.title,"`")),setTimeout((function(){z(null)}),4e3)},Z=function(e){var t=l.find((function(t){return t.id===e})),n={user:t.user.id,likes:t.likes+1,author:t.author,title:t.title,url:t.url};g.update(t.id,n).then((function(e){o(l.map((function(n){return n.id!==t.id?n:e})))})).catch((function(e){P.scrollToTop(),L("".concat(e)),setTimeout((function(){L(null)}),4e3),o(l.filter((function(e){return e.id!==t.id})))}))},$=function(e){var t=l.find((function(t){return t.id===e}));window.confirm("Delete `".concat(t.title,"`?"))&&g.remove(e,t).then((function(){o(l.filter((function(t){return t.id!==e}))),P.scrollToTop(),z("deleted `".concat(t.title,"`")),setTimeout((function(){z(null)}),4e3)})).catch((function(e){P.scrollToTop(),L("".concat(e)),setTimeout((function(){L(null)}),4e3)}))};return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{id:"nav",className:"navbar navbar-light bg-light"},r.a.createElement("strong",null,"Bloglist"),null!==J?r.a.createElement("div",null,J.name," logged in",r.a.createElement("button",{className:"btn btn-primary ml-2",id:"logout-button",type:"submit",onClick:G},"Logout")):r.a.createElement(O,{buttonLabel:"sign in",ref:V},r.a.createElement(j,{loginUser:W}))),r.a.createElement("div",{className:"container"},r.a.createElement(d,{message:U}),r.a.createElement(m,{message:B}),null!==J&&r.a.createElement(O,{buttonLabel:"new blog",ref:H},r.a.createElement(E,{createBlog:Y})),null!==J&&r.a.createElement("div",{className:"col-auto"},r.a.createElement(y,{setTitleToFind:M,titleToFind:T,handleFindTitleChange:K}),r.a.createElement("br",null),r.a.createElement(h,{rows:X.map((function(e){return r.a.createElement(v,{key:e.id,user:J,blog:e,likeBlog:function(){return Z(e.id)},deleteBlog:function(){return $(e.id)}})}))})),r.a.createElement(k,null)))};n(60);o.a.render(r.a.createElement(x,null),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.8f92241b.chunk.js.map