(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{49:function(e,t,n){e.exports=n(86)},85:function(e,t,n){},86:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(17),c=n.n(l),o=n(14),u=n(15),s=n(46),i=n(47),m=n(33),f=n(11),b=n(1),p=n.n(b),d=n(4),g=n(16),E=n.n(g),v=null,h={getAll:function(){var e=Object(d.a)(p.a.mark((function e(){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=E.a.get("/api/blogs"),e.next=3,t;case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),create:function(){var e=Object(d.a)(p.a.mark((function e(t){var n,a,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:v}},a=E.a.post("/api/blogs",t,n),e.next=4,a;case 4:return r=e.sent,e.abrupt("return",r.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),update:function(){var e=Object(d.a)(p.a.mark((function e(t,n){var a,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("update: ",n),a=E.a.put("".concat("/api/blogs","/").concat(t),n),e.next=4,a;case 4:return r=e.sent,e.abrupt("return",r.data);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),remove:function(){var e=Object(d.a)(p.a.mark((function e(t){var n,a,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("remove: ",t),n={headers:{Authorization:v}},a=E.a.delete("".concat("/api/blogs","/").concat(t),n),e.next=5,a;case 5:return r=e.sent,e.abrupt("return",r.data);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),setToken:function(e){v="bearer ".concat(e)}},y=function(){return function(){var e=Object(d.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.getAll();case 2:n=e.sent,t({type:"INIT_BLOGS",data:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(d.a)(p.a.mark((function t(n){var a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.create(e);case 2:a=t.sent,n({type:"NEW_BLOG",data:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},j=function(e){return function(){var t=Object(d.a)(p.a.mark((function t(n){var a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.remove(e);case 2:a=t.sent,n({type:"DELETE_BLOG",data:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},k=function(e){return function(){var t=Object(d.a)(p.a.mark((function t(n){var a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.update(e.id,Object(f.a)(Object(f.a)({},e),{},{likes:e.likes+1}));case 2:a=t.sent,console.log("blogReducer returnedContent: ",a),n({type:"LIKE_BLOG",data:a});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},w=function(e,t,n){return Object(f.a)(Object(f.a)({},function(e,t){return e.find((function(e){return e.id===t}))}(e,t)),{},{likes:n})},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT_BLOGS":return t.data;case"NEW_BLOG":return[].concat(Object(m.a)(e),[t.data]);case"DELETE_BLOG":return console.log("deleteBlog: ",e,t.data),[].concat(Object(m.a)(e),[t.data]);case"LIKE_BLOG":return console.log("likeBlog: ",e,t.data),e.map((function(n){return n.id!==t.data.id?n:w(e,t.data.id,t.data.likes)}));default:return e}},x=[],B=function(e,t){return x.forEach((function(e){return"number"===typeof e?clearTimeout(e):e})),function(){var n=Object(d.a)(p.a.mark((function n(a){return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a(S(e));case 2:x.push(setTimeout((function(){a(S(null)),x=[]}),1e3*t));case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},S=function(e){return{type:"SET_MESSAGE",text:e}},L=function(e,t){return x.forEach((function(e){return"number"===typeof e?clearTimeout(e):e})),function(){var n=Object(d.a)(p.a.mark((function n(a){return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a(S(e));case 2:x.push(setTimeout((function(){a(S(null)),x=[]}),1e3*t));case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"ALL",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_FILTER":return{type:t.type,content:t.content};default:return e}},C=Object(u.combineReducers)({blogs:N,setMessage:B,setErrorMessage:L,filter:T,createBlog:O,deleteBlog:j,likeBlog:k}),F=Object(u.createStore)(C,Object(i.composeWithDevTools)(Object(u.applyMiddleware)(s.a)));h.getAll().then((function(e){return F.dispatch(y())}));var I=F,_=n(13),A=n(5),D=n(3),G={login:function(){var e=Object(d.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},M=function(e){var t=e.loginUser,n=Object(a.useState)(""),l=Object(A.a)(n,2),c=l[0],o=l[1],u=Object(a.useState)(""),s=Object(A.a)(u,2),i=s[0],m=s[1];return r.a.createElement("div",{className:"form-group-inline"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t({username:c,password:i}),o(""),m("")}},r.a.createElement("div",{align:"left",className:"form-group-inline"},r.a.createElement("label",{id:"formlabel",htmlFor:"username"},"username:"),r.a.createElement("input",{id:"username",type:"text",className:"form-control",name:"Username",value:c,onChange:function(e){o(e.target.value)}}),r.a.createElement("label",{id:"formlabel",htmlFor:"password"},"password:"),r.a.createElement("input",{id:"password",type:"text",className:"form-control",name:"Password",value:i,onChange:function(e){m(e.target.value)}})),r.a.createElement("button",{className:"btn btn-primary",id:"login-button",type:"submit",style:{float:"left"}},"login")))},R=function(){var e=Object(_.c)();return r.a.createElement("div",{className:"col-auto"},r.a.createElement("form",{onChange:function(t){t.preventDefault();var n=t.target.value;e(function(e,t){return{type:"SET_FILTER",content:t}}(0,n))}},r.a.createElement("label",{htmlFor:"filter"},"filter shown with:"),r.a.createElement("input",{name:"filter",type:"text",className:"form-control"})))},U=function(e){var t=e.props,n=Object(D.g)().id,a=t.blogs.find((function(e){return e.id===n}));return r.a.createElement("div",{style:{display:t.visible?"none":""}},r.a.createElement("br",null),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("b",{id:"b-left"},a.title),"by",r.a.createElement("b",{id:"b-right"},a.author)),r.a.createElement("br",null),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("a",{href:a.url},a.url)),r.a.createElement("li",{className:"list-group-item"},a.likes," likes",r.a.createElement("button",{type:"button",className:"btn btn-success",id:"like-button",onClick:function(){console.log("Like Clicked: ",n),t.likeBlog(Object(f.a)(Object(f.a)({},a),{},{user:a.user.id})),t.setMessage("you liked '".concat(a.content,"'"),5)}},"like")),r.a.createElement("li",{className:"list-group-item"},"added by ",a.user.name,t.user.name===a.user.name&&r.a.createElement("button",{type:"button",id:"delete-button",className:"btn btn-warning",onClick:function(){console.log("Delete Clicked: ",n),t.deleteBlog(n),t.setMessage("you deleted '".concat(a.content,"'"),5)}},"delete"),r.a.createElement("button",{type:"button",id:"back-button",className:"btn btn-primary",onClick:function(){t.setVisible(!0),t.history.goBack()}},"back")))},J=function(e){var t=Object(a.useState)(""),n=Object(A.a)(t,2),r=n[0],l=n[1];return{value:r,onChange:function(t){l(e?t.target.value:"")}}},W={createBlog:O,setMessage:B,setErrorMessage:L},z=Object(_.b)(null,W)((function(e){var t=Object(a.useState)(!0),n=Object(A.a)(t,2),l=n[0],c=n[1],o=J(l),u=J(l),s=J(l);return r.a.createElement("div",{className:"col-auto",id:"boxed"},r.a.createElement("br",null),r.a.createElement("b",null,"Add a new blog"),r.a.createElement("form",null,r.a.createElement("div",{align:"left",className:"form-group"},r.a.createElement("label",{id:"formlabel"},"title:"),r.a.createElement("input",Object.assign({className:"form-control"},o))),r.a.createElement("div",{align:"left",className:"form-group"},r.a.createElement("label",{id:"formlabel"},"author:"),r.a.createElement("input",Object.assign({className:"form-control"},u))),r.a.createElement("div",{align:"left",className:"form-group"},r.a.createElement("label",{id:"formlabel"},"url:"),r.a.createElement("input",Object.assign({className:"form-control"},s))),r.a.createElement("div",{align:"left",className:"form-group"},r.a.createElement("button",{className:"btn btn-primary",id:"add-button",type:"submit",style:{float:"left",marginTop:"12px"},onClick:function(t){console.log("createBlog: ",e),t.preventDefault();var n={title:o.value,author:u.value,url:s.value,user:e.user.name};try{e.createBlog(n)}catch(a){L("error: `".concat(a,"`"),5)}c(!0),e.setFromCreate(!1),B("added `".concat(o,"`"),5)}},"add"),r.a.createElement("button",{className:"btn btn-primary",id:"reset-button",type:"submit",style:{float:"left",marginTop:"12px"},onClick:function(){c(!1),e.setFromCreate(!0)}},"reset"))))})),V=r.a.forwardRef((function(e,t){var l=n(77).animateScroll,c=Object(a.useState)(!1),o=Object(A.a)(c,2),u=o[0],s=o[1],i={display:u?"none":""},m={display:u?"":"none"},f=function(){s(!u),u&&l.scrollToTop()};return Object(a.useImperativeHandle)(t,(function(){return{toggleVisibility:f}})),r.a.createElement("div",{className:"btn-group",role:"group"},r.a.createElement("div",{style:i},r.a.createElement("button",{className:"btn btn-primary",type:"submit",onClick:f},e.buttonLabel)),r.a.createElement("div",{style:m,className:"togglableContent"},e.children,r.a.createElement("button",{className:"btn btn-primary",type:"submit",style:{float:"right"},onClick:f},"cancel")))}));V.displayName="Togglable";var H=V;function K(e,t){return t.likes-e.likes}var P={likeBlog:k,deleteBlog:j,setMessage:B},q=Object(_.b)((function(e){return"ALL"===e.filter?{blogs:e.blogs.sort(K)}:"SET_FILTER"===e.filter?{blogs:e.blogs.filter((function(t){return t.title.toLowerCase().includes(e.filter.content.toLowerCase())})).sort(K)}:(console.log("Blogs mapStateToProps: ",e),{blogs:e.blog})}),P)((function(e){var t=Object(D.f)(),n=Object(a.useState)(!0),l=Object(A.a)(n,2),c=l[0],u=l[1],s=Object(a.useState)(!0),i=Object(A.a)(s,2),m=i[0],b=i[1],p=Object(a.useRef)();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{display:m?"":"none"}},r.a.createElement(R,null),r.a.createElement("h2",null,"Blogs"),r.a.createElement("div",null,null!==e.user&&!0===c?r.a.createElement(H,{buttonLabel:"create new",ref:p},r.a.createElement(z,{createBlog:O,user:e.user,setFromCreate:u,onClick:function(){b(!1),u(!1),console.log("visible: ",!0===m),t.push("/")}})):null),r.a.createElement("div",null,r.a.createElement("ul",null,e.blogs.map((function(e){return r.a.createElement("li",{id:"boxed",className:"list-group-item",key:e.id},r.a.createElement(o.b,{to:"/blogs/".concat(e.id),onClick:function(){b(!1),u(!1),t.push("/blogs")}},e.title))}))))),r.a.createElement(D.c,null,r.a.createElement(D.a,{path:"/blogs/:id"},r.a.createElement(U,{props:Object(f.a)(Object(f.a)({},e),{},{setVisible:b,visible:m,history:t})}))))})),Q=function(){return r.a.createElement("div",{style:{color:"gray",fontStyle:"italic",fontSize:16}},r.a.createElement("br",null),r.a.createElement("hr",null),r.a.createElement("center",null,r.a.createElement("em",null,"Bloglist app, Full Stack Web Development"),r.a.createElement("br",null),r.a.createElement("em",null,"University of Helsinki 2020")))},X=function(){var e=Object(_.c)();Object(a.useEffect)((function(){e(y())}),[e]);var t=Object(a.useState)(null),n=Object(A.a)(t,2),l=n[0],c=n[1],u=Object(a.useRef)();Object(a.useEffect)((function(){var e=window.localStorage.getItem("loggedBloglistappUser");if(e){var t=JSON.parse(e);c(t),h.setToken(t.token)}}),[]);var s=function(){var e=Object(d.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==t.username&&""!==t.password){e.next=4;break}L("both fields are required",5),e.next=16;break;case 4:return e.prev=4,e.next=7,G.login(t);case 7:n=e.sent,window.localStorage.setItem("loggedBloglistappUser",JSON.stringify(n)),h.setToken(n.token),c(n),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(4),L("wrong username or password",5);case 16:case"end":return e.stop()}}),e,null,[[4,13]])})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=Object(d.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault();try{c(null),window.localStorage.clear()}catch(n){L("".concat(n),5)}window.location.reload(),console.log("logged out successfully");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{id:"nav",className:"navbar navbar-light bg-light"},r.a.createElement("a",{className:"navbar-brand",href:"/"},r.a.createElement("strong",null,"Bloglist")),null!==l?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement(o.b,{to:"/blogs"},"blogs")),r.a.createElement("div",null,r.a.createElement(o.b,{to:"/users"},"users")),r.a.createElement("div",null,l.name," logged in",r.a.createElement("button",{className:"btn btn-primary ml-2",id:"logout-button",type:"submit",onClick:i},"Logout"))):r.a.createElement(H,{buttonLabel:"sign in",ref:u},r.a.createElement(M,{loginUser:s}))),r.a.createElement("div",{className:"container"},r.a.createElement(D.c,null,r.a.createElement(D.a,{path:"/blogs"},null!==l?r.a.createElement(q,{user:l}):null),r.a.createElement(D.a,{path:"/users"})),r.a.createElement(Q,null)))};n(85);c.a.render(r.a.createElement(_.a,{store:I},r.a.createElement(o.a,null,r.a.createElement(X,null))),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.e2e61b40.chunk.js.map