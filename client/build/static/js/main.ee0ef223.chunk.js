(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{40:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){"use strict";a.r(t);var c=a(2),s=a.n(c),n=a(33),r=a.n(n),i=(a(40),a(3)),o=a.n(i),l=a(5),u=a(4),d=a(6),j=a.n(d),p=a(1),b=Object(c.createContext)(),m=function(e){var t=e.children,a=Object(c.useState)({}),s=Object(u.a)(a,2),n=s[0],r=s[1];return Object(c.useEffect)(Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.a.get("/user/refreshtoken");case 3:t=e.sent,r(t.data),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])}))),[]),Object(p.jsx)(b.Provider,{value:{user:n,setUser:r},children:t})},O=a(10),h=a(22),x=(a(61),a(34)),f=a(8),v=a(19);var g=function(){var e=Object(c.useContext)(b),t=e.user,a=e.setUser,s=function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!window.confirm("Do you want to logout?")){e.next=7;break}return e.next=5,j.a.get("/user/logout");case 5:a({}),window.location.href="/";case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),alert(e.t0.response.data.msg);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:"header",children:[Object(p.jsxs)("div",{className:"header-left",children:[Object(p.jsx)(O.b,{to:"/",children:Object(p.jsx)(x.a,{className:"header-logo"})}),Object(p.jsx)(O.b,{to:"/products",children:Object(p.jsx)("p",{className:"header-products",children:"PRODUCTS"})})]}),Object(p.jsxs)("div",{className:"header-right",children:[t.accesstoken&&t.isAdmin?Object(p.jsx)(O.b,{to:"/admin",children:Object(p.jsx)(f.h,{className:"header-admin"})}):null,Object(p.jsx)(O.b,{to:"/cart",children:Object(p.jsx)(v.a,{className:"header-cart"})}),Object(p.jsx)(O.b,{to:"/user",children:Object(p.jsx)(f.i,{className:"header-user"})}),t.accesstoken&&"local"===t.provider?Object(p.jsx)(f.e,{className:"header-logout",onClick:s}):t.accesstoken&&"google"===t.provider?Object(p.jsx)(h.GoogleLogout,{clientId:"273160624303-8mcefg70tabulcgnm6lk8riim6f4ne51.apps.googleusercontent.com",render:function(e){return Object(p.jsx)(f.e,{className:"header-logout",onClick:e.onClick,disabled:e.disabled})},onLogoutSuccess:s}):Object(p.jsx)(O.b,{to:"/login",children:Object(p.jsx)(f.d,{className:"header-login"})})]})]})},N=a(7),w=a(9);a(14),a(62);var k=function(e){var t=e.type,a=e.product,s=e.deleteCart,n=Object(c.useContext)(b).user;console.log(a.images[0]);var r=function(){var e=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s(t,a._id);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=Object(l.a)(o.a.mark((function e(t){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!window.confirm("Do you want to add this to your cart?")){e.next=8;break}return e.next=6,j.a.post("/user/cart",{productid:a._id},{headers:{Authorization:n.accesstoken}});case 6:c=e.sent,alert(c.data.msg);case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),alert(e.t0.response.data.msg);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsx)(O.b,{to:"/product-detail/".concat(a._id),children:Object(p.jsxs)("div",{className:"product",children:[Object(p.jsxs)("div",{className:"product-image-container",children:[Object(p.jsx)("img",{className:"product-image",src:"data:image/png;base64,".concat(a.images[0]),alt:"product"}),n.accesstoken&&"cart"===t?Object(p.jsx)(f.a,{className:"product-icon-cancel",onClick:function(e){r(e)}}):n.accesstoken&&"items"===t||n.accesstoken&&"products"===t?Object(p.jsx)(v.a,{className:"product-icon",onClick:function(e){i(e)}}):null]}),Object(p.jsx)("p",{className:"product-title",children:a.title}),Object(p.jsx)("p",{className:"product-price",children:"$"+a.price})]})})};a(63);var y=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)([]),r=Object(u.a)(n,2),i=r[0],d=r[1],b=Object(c.useState)(0),m=Object(u.a)(b,2),O=m[0],h=m[1];return Object(c.useEffect)(Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.a.get("/product/hot");case 3:t=e.sent,s(t.data.products),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),alert(e.t0.response.data.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[]),Object(c.useEffect)(Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:d(Object(w.a)(a.slice(O,O+4)));case 1:case"end":return e.stop()}}),e)}))),[a,O]),0===a.length?Object(p.jsxs)("div",{className:"hot-items",children:[Object(p.jsx)("h2",{className:"hot-items-title",children:"DESK/SOFA ITEMS"}),Object(p.jsx)("p",{className:"hot-items-nohotitems",children:"NO DESK/SOFA ITEMS"})]}):Object(p.jsxs)("div",{className:"hot-items",children:[Object(p.jsx)("h2",{className:"hot-items-title",children:"DESK/SOFA ITEMS"}),Object(p.jsxs)("div",{className:"hot-items-box",children:[a.length>4&&Object(p.jsx)(f.c,{style:0===O?{color:"lightgray"}:{color:"black"},className:"hot-items-arrow-icon",onClick:function(){0!==O&&h(O-1)}}),Object(p.jsx)("div",{className:"hot-items-product-box",children:i.map((function(e,t){return Object(p.jsx)("div",{children:Object(p.jsx)(k,{type:"items",product:e},t)},t)}))}),a.length>4&&Object(p.jsx)(f.g,{style:O===a.length-4?{color:"lightgray"}:{color:"black"},className:"hot-items-arrow-icon",onClick:function(){O!==a.length-4&&h(O+1)}})]})]})};a(64);var C=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)([]),r=Object(u.a)(n,2),i=r[0],d=r[1],b=Object(c.useState)(0),m=Object(u.a)(b,2),O=m[0],h=m[1];return Object(c.useEffect)(Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.a.get("/product/new");case 3:t=e.sent,s(t.data.products),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),alert(e.t0.response.data.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[]),Object(c.useEffect)(Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:d(Object(w.a)(a.slice(O,O+4)));case 1:case"end":return e.stop()}}),e)}))),[a,O]),0===a.length?Object(p.jsxs)("div",{className:"new-items",children:[Object(p.jsx)("h2",{className:"new-items-title",children:"BED/CHAIR ITEMS"}),Object(p.jsx)("p",{className:"new-items-nonewitems",children:"NO BED/CHAIR ITEMS"})]}):Object(p.jsxs)("div",{className:"new-items",children:[Object(p.jsx)("h2",{className:"new-items-title",children:"BED/CHAIR ITEMS"}),Object(p.jsxs)("div",{className:"new-items-box",children:[a.length>4&&Object(p.jsx)(f.c,{style:0===O?{color:"lightgray"}:{color:"black"},className:"new-items-arrow-icon",onClick:function(){0!==O&&h(O-1)}}),Object(p.jsx)("div",{className:"new-items-product-box",children:i.map((function(e,t){return Object(p.jsx)("div",{children:Object(p.jsx)(k,{type:"items",product:e},t)},t)}))}),a.length>4&&Object(p.jsx)(f.g,{style:O===a.length-4?{color:"lightgray"}:{color:"black"},className:"new-items-arrow-icon",onClick:function(){O!==a.length-4&&h(O+1)}})]})]})};a(65);var E=function(){var e=Object(c.useContext)(b).user;return Object(p.jsxs)("div",{className:"home",children:[Object(p.jsxs)("div",{className:"home-banner",children:[Object(p.jsx)("p",{className:"home-banner-user",children:e.username}),Object(p.jsx)("p",{className:"home-banner-welcome",children:"WELCOME TO THE WORLD OF WOODWORK"}),Object(p.jsx)(O.b,{to:"/products",className:"home-banner-button",type:"button",children:"VIEW PRODUCTS"})]}),Object(p.jsx)(y,{}),Object(p.jsx)(C,{})]})};a(66);var S=function(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)([]),r=Object(u.a)(n,2),i=r[0],d=r[1],b=Object(c.useState)(""),m=Object(u.a)(b,2),O=m[0],h=m[1];Object(c.useEffect)(Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.a.get("/category");case 3:t=e.sent,d(t.data.categories),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),alert(e.t0.response.data.msg);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[]);var x=function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!window.confirm("Do you want to create this category?")){e.next=8;break}return e.next=5,j.a.post("/category",{category:O});case 5:t=e.sent,d(t.data.categories),window.alert("This category is created");case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),alert(e.t0.response.data.msg);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!window.confirm("Do you want to delete this category?")){e.next=8;break}return e.next=5,j.a.delete("/category/".concat(a));case 5:t=e.sent,d(t.data.categories),window.alert("This category is deleted");case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),alert(e.t0.response.data.msg);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:"admin-categories",children:[Object(p.jsxs)("div",{className:"admin-categories-create",children:[Object(p.jsx)("h3",{className:"admin-categories-title",children:"CREATE A CATEGORY"}),Object(p.jsxs)("div",{className:"admin-categories-container",children:[Object(p.jsx)("input",{className:"admin-categories-create-input",type:"text",placeholder:"ENTER A NEW CATEGORY",onChange:function(e){return h(e.target.value)}}),Object(p.jsx)("button",{className:"admin-categories-create-create",type:"button",onClick:x,children:"CREATE"})]})]}),Object(p.jsxs)("div",{className:"admin-categories-delete",children:[Object(p.jsx)("h3",{className:"admin-categories-title",children:"DELETE A CATEGORY"}),Object(p.jsxs)("div",{className:"admin-categories-container",children:[Object(p.jsxs)("select",{className:"admin-categories-delete-input",name:"category",onChange:function(e){return s(e.target.value)},children:[Object(p.jsx)("option",{value:"none",children:"CHOOSE A CATEGORY"}),i.map((function(e,t){return Object(p.jsx)("option",{value:e.title,children:e.title?e.title.toUpperCase():null},t)}))]}),Object(p.jsx)("button",{className:"admin-categories-delete-delete",type:"button",onClick:f,children:"DELETE"})]})]})]})};a(67);var R=function(){var e=[Object(c.useRef)(),Object(c.useRef)(),Object(c.useRef)(),Object(c.useRef)()],t=Object(c.useState)([]),a=Object(u.a)(t,2),s=a[0],n=a[1],r=Object(c.useState)([]),i=Object(u.a)(r,2),d=i[0],b=i[1],m=Object(c.useState)([]),O=Object(u.a)(m,2),h=O[0],x=O[1],v=Object(c.useState)(""),g=Object(u.a)(v,2),N=g[0],k=g[1],y=Object(c.useState)(""),C=Object(u.a)(y,2),E=C[0],S=C[1],R=Object(c.useState)(""),T=Object(u.a)(R,2),D=T[0],A=T[1],I=Object(c.useState)(""),U=Object(u.a)(I,2),L=U[0],G=U[1],P=Object(c.useState)(""),F=Object(u.a)(P,2),M=F[0],H=F[1],Y=function(){var e=Object(l.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,(a=new FormData).append("category",N),a.append("title",E),a.append("price",D),a.append("desc",L),d.forEach((function(e){return a.append("image",e.content)})),e.next=10,j.a.post("/product",a,{headers:{"Content-Type":"multipart/form-data"}});case 10:b([]),x([]),k(""),S(""),A(""),G(""),alert("this product is created"),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(1),alert(e.t0.response.data.msg);case 22:case"end":return e.stop()}}),e,null,[[1,19]])})));return function(t){return e.apply(this,arguments)}}();Object(c.useEffect)(Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.a.get("/category");case 3:t=e.sent,n(t.data.categories),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),alert(e.t0.response.data.msg);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[]);var W=function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!window.confirm("Do you want to delete this product?")){e.next=7;break}return e.next=5,j.a.delete("/product/".concat(M));case 5:H(""),window.alert("This product is deleted");case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),alert(e.t0.response.data.msg);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:"upload",children:[Object(p.jsx)("p",{className:"product-delete-subtitle",children:"DELETE A PRODUCT"}),Object(p.jsxs)("div",{className:"product-delete-container",children:[Object(p.jsx)("input",{className:"product-delete-input",type:"text",placeholder:"ENTER A PRODUCT TITLE",onChange:function(e){return H(e.target.value)}}),Object(p.jsx)("button",{className:"product-delete-delete",type:"button",onClick:W,children:"DELETE"})]}),Object(p.jsx)("p",{className:"product-upload-subtitle",children:"CREATE A PRODUCT"}),Object(p.jsxs)("div",{className:"product-upload-container",children:[d.map((function(t,a){return t.content?Object(p.jsxs)("div",{className:"product-upload-box",children:[Object(p.jsx)("img",{className:"product-upload-image",src:h[a],alt:""}),Object(p.jsx)("p",{className:"product-upload-cancel-icon",onClick:function(e){return function(e,t){e.preventDefault();var a=Object(w.a)(d);a.splice(t,1),b(a);var c=Object(w.a)(h);c.splice(t,1),x(c)}(e,a)},children:Object(p.jsx)(f.a,{className:"delete-icon"})})]},a):Object(p.jsxs)("div",{className:"product-upload-box",children:[Object(p.jsx)("input",{ref:e[a],onChange:function(e){return function(e,t){e.preventDefault();var a=e.target.files[0],c=Object(w.a)(d);c[t]={content:a},b(c);var s=new FileReader;s.onload=function(e){var a=Object(w.a)(h);a[t]=e.target.result,x(a)},s.readAsDataURL(a)}(e,a)},className:"product-upload-image-file",type:"file",name:"image"}),Object(p.jsx)("p",{onClick:function(){return e[a].current.click()},className:"product-upload-file-icon",children:Object(p.jsx)(f.b,{className:"upload-icon"})}),Object(p.jsx)("p",{className:"product-upload-cancel-icon",onClick:function(e){return function(e,t){e.preventDefault();var a=Object(w.a)(d);a.splice(t,1),b(a)}(e,a)},children:Object(p.jsx)(f.a,{className:"delete-icon"})})]},a)})),4!==d.length?Object(p.jsx)("div",{className:"product-upload-plus-box",children:Object(p.jsx)("p",{onClick:function(){b([].concat(Object(w.a)(d),[{}]))},className:"product-upload-plus-icon",children:Object(p.jsx)(f.f,{className:"upload-icon"})})}):null]}),Object(p.jsxs)("div",{className:"detail-upload-container",children:[Object(p.jsxs)("select",{className:"detail-upload-infomation",name:"category",onChange:function(e){return k(e.target.value)},children:[Object(p.jsx)("option",{value:"none",children:"CHOOSE A CATEGORY"}),s.map((function(e,t){return Object(p.jsx)("option",{value:e.title,selected:e.title===N,children:e.title?e.title.toUpperCase():null},t)}))]}),Object(p.jsx)("input",{className:"detail-upload-infomation",type:"text",name:"title",value:E,onChange:function(e){return S(e.target.value)},placeholder:"TITLE"}),Object(p.jsx)("input",{className:"detail-upload-infomation",type:"text",name:"price",value:D,onChange:function(e){return A(e.target.value)},placeholder:"PRICE"}),Object(p.jsx)("textarea",{className:"detail-upload-description",name:"description",value:L,onChange:function(e){return G(e.target.value)},placeholder:"DESCRIPTION"})]}),Object(p.jsx)("div",{className:"product-submit-container",children:Object(p.jsx)("input",{className:"product-submit",type:"submit",onClick:function(e){return Y(e)},value:"UPLOAD"})})]})};a(68);var T=function(){var e=Object(c.useState)("categories"),t=Object(u.a)(e,2),a=t[0],s=t[1];return Object(p.jsxs)("div",{className:"admin",children:[Object(p.jsx)("h2",{className:"admin-title",children:"ADMIN"}),Object(p.jsxs)("div",{className:"admin-mode-container",children:[Object(p.jsx)("div",{className:"categories"===a?"admin-mode-category-focus":"admin-mode-category",onClick:function(){return s("categories")},children:"CATEGORIES"}),Object(p.jsx)("div",{className:"products"===a?"admin-mode-category-focus":"admin-mode-category",onClick:function(){return s("products")},children:"PRODUCTS"})]}),"categories"===a?Object(p.jsx)(S,{}):"products"===a?Object(p.jsx)(R,{}):null]})};a(69);var D=function(){var e=Object(c.useContext)(b).setUser,t=Object(c.useState)(""),a=Object(u.a)(t,2),s=a[0],n=a[1],r=Object(c.useState)(""),i=Object(u.a)(r,2),d=i[0],m=i[1],x=function(){var t=Object(l.a)(o.a.mark((function t(a){var c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.prev=1,t.next=4,j.a.post("/user/login",{email:s,password:d});case 4:c=t.sent,e(c.data),window.location.href="/",t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),alert(t.t0.response.data.msg);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=Object(l.a)(o.a.mark((function t(a){var c,s,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,c=a.profileObj.email,s=c.split("@")[0],t.next=5,j.a.post("/user/google",{username:s,email:c});case 5:n=t.sent,e(n.data),window.location.href="/",t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),alert(t.t0.response.data.msg);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:"login",children:[Object(p.jsx)("h2",{className:"login-title",children:"LOGIN"}),Object(p.jsxs)("form",{className:"login-form",onSubmit:x,children:[Object(p.jsx)("input",{className:"login-email",type:"email",name:"email",placeholder:"Email",onChange:function(e){return n(e.target.value)}}),Object(p.jsx)("input",{className:"login-password",type:"password",name:"password",placeholder:"Password",onChange:function(e){return m(e.target.value)}}),Object(p.jsx)("button",{className:"login-button",type:"submit",children:"LOGIN"}),Object(p.jsx)(h.GoogleLogin,{clientId:"273160624303-8mcefg70tabulcgnm6lk8riim6f4ne51.apps.googleusercontent.com",render:function(e){return Object(p.jsx)("button",{className:"login-outside",type:"button",onClick:e.onClick,disabled:e.disabled,children:"GOOGLE"})},onSuccess:f,onFailure:f,cookiePolicy:"single_host_origin"})]}),Object(p.jsx)(O.b,{to:"/register",children:Object(p.jsx)("span",{className:"login-register",children:"GO TO REGISTER"})})]})};a(70);var A=function(){var e=Object(c.useContext)(b).setUser,t=Object(c.useState)(""),a=Object(u.a)(t,2),s=a[0],n=a[1],r=Object(c.useState)(""),i=Object(u.a)(r,2),d=i[0],m=i[1],h=Object(c.useState)(""),x=Object(u.a)(h,2),f=x[0],v=x[1],g=Object(c.useState)(""),N=Object(u.a)(g,2),w=N[0],k=N[1],y=function(){var t=Object(l.a)(o.a.mark((function t(a){var c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),t.prev=1,f!==w){t.next=10;break}return t.next=5,j.a.post("/user/register",{username:s,email:d,password:f});case 5:c=t.sent,e(c.data),window.location.href="/",t.next=11;break;case 10:alert("\ube44\ubc00\ubc88\ud638 \ubd88\uc77c\uce58");case 11:t.next=16;break;case 13:t.prev=13,t.t0=t.catch(1),alert(t.t0.response.data.msg);case 16:case"end":return t.stop()}}),t,null,[[1,13]])})));return function(e){return t.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:"register",children:[Object(p.jsx)("h2",{className:"register-title",children:"REGISTER"}),Object(p.jsxs)("form",{className:"register-form",onSubmit:y,children:[Object(p.jsx)("input",{className:"register-username",type:"text",name:"username",placeholder:"Username",onChange:function(e){return n(e.target.value)}}),Object(p.jsx)("input",{className:"register-email",type:"email",name:"email",placeholder:"Email",onChange:function(e){return m(e.target.value)}}),Object(p.jsx)("input",{className:"register-password",type:"password",name:"password",placeholder:"Password",onChange:function(e){return v(e.target.value)}}),Object(p.jsx)("input",{className:"register-password",type:"password",name:"password-again",placeholder:"Password Again",onChange:function(e){return k(e.target.value)}}),Object(p.jsx)("button",{className:"register-button",type:"submit",children:"REGISTER"})]}),Object(p.jsx)(O.b,{to:"/login",children:Object(p.jsx)("span",{className:"register-login",children:"GO TO LOGIN"})})]})},I=(a(71),a(16)),U=a.n(I);var L=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)("all"),r=Object(u.a)(n,2),i=r[0],d=r[1],b=Object(c.useState)([]),m=Object(u.a)(b,2),O=m[0],h=m[1],x=Object(c.useState)(0),f=Object(u.a)(x,2),v=f[0],g=f[1],N=Object(c.useState)(0),y=Object(u.a)(N,2),C=y[0],E=y[1],S=Object(c.useState)(!1),R=Object(u.a)(S,2),T=R[0],D=R[1],A=Object(c.useState)(!1),I=Object(u.a)(A,2),L=I[0],G=I[1];Object(c.useEffect)(Object(l.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,G(!0),e.next=4,j.a.get("/category");case 4:return t=e.sent,s(t.data.categories),e.next=8,j.a.get("/product/".concat(i,"/").concat(0,"/").concat(7));case 8:a=e.sent,h(Object(w.a)(a.data.products)),g(8),E(15),D(a.data.done),setTimeout((function(){return G(!1)}),100),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),alert(e.t0.response.data.msg);case 19:case"end":return e.stop()}}),e,null,[[0,16]])}))),[]),Object(c.useEffect)(Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,G(!0),e.next=4,j.a.get("/product/".concat(i,"/").concat(0,"/").concat(7));case 4:t=e.sent,h(Object(w.a)(t.data.products)),g(8),E(15),D(t.data.done),setTimeout((function(){return G(!1)}),100),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),alert(e.t0.response.data.msg);case 15:case"end":return e.stop()}}),e,null,[[0,12]])}))),[i]);var P=function(){var e=Object(l.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,j.a.get("/product/".concat(i,"/").concat(v,"/").concat(C));case 4:a=e.sent,h([].concat(Object(w.a)(O),Object(w.a)(a.data.products))),g(C+1),E(C+(C-v+1)),D(a.data.done),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),alert(e.t0.response.data.msg);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}();return!0===L?Object(p.jsxs)("div",{className:"products",children:[Object(p.jsx)("h2",{className:"products-title",children:i?i.toUpperCase():null}),Object(p.jsxs)("div",{className:"products-category-container",children:[Object(p.jsx)("div",{className:"all"===i?"products-category-focus":"products-category",onClick:function(){return d("all")},children:"ALL"}),a.map((function(e){return Object(p.jsx)("div",{className:i===e.title?"products-category-focus":"products-category",onClick:function(){return d(e.title)},children:e.title?e.title.toUpperCase():null})}))]}),Object(p.jsx)("div",{className:"products-loading",children:Object(p.jsx)(U.a,{loading:L})})]}):0===O.length?Object(p.jsxs)("div",{className:"products",children:[Object(p.jsx)("h2",{className:"products-title",children:i?i.toUpperCase():null}),Object(p.jsxs)("div",{className:"products-category-container",children:[Object(p.jsx)("div",{className:"all"===i?"products-category-focus":"products-category",onClick:function(){return d("all")},children:"ALL"}),a.map((function(e){return Object(p.jsx)("div",{className:i===e.title?"products-category-focus":"products-category",onClick:function(){return d(e.title)},children:e.title?e.title.toUpperCase():null})}))]}),Object(p.jsx)("p",{className:"products-noproducts",children:"NO PRODUCTS"})]}):Object(p.jsxs)("div",{className:"products",children:[Object(p.jsx)("h2",{className:"products-title",children:i?i.toUpperCase():null}),Object(p.jsxs)("div",{className:"products-category-container",children:[Object(p.jsx)("div",{className:"all"===i?"products-category-focus":"products-category",onClick:function(){return d("all")},children:"ALL"}),a.map((function(e){return Object(p.jsx)("div",{className:i===e.title?"products-category-focus":"products-category",onClick:function(){return d(e.title)},children:e.title?e.title.toUpperCase():null})}))]}),Object(p.jsx)("div",{className:"products-container",children:O.map((function(e,t){return Object(p.jsx)(k,{type:"products",product:e},t)}))}),T?Object(p.jsx)("input",{type:"button",value:"MORE",className:"products-more-button-done"}):Object(p.jsx)("input",{type:"button",value:"MORE",className:"products-more-button",onClick:P})]})},G=a(17);a(79);var P=function(){var e=Object(c.useContext)(b).user,t=Object(N.g)().productid,a=Object(c.useState)({images:[],reviews:[]}),s=Object(u.a)(a,2),n=s[0],r=s[1],i=Object(c.useState)(0),d=Object(u.a)(i,2),m=d[0],O=d[1],h=Object(c.useState)(!0),x=Object(u.a)(h,2),f=x[0],v=x[1];Object(c.useEffect)(Object(l.a)(o.a.mark((function e(){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,v(!0),e.next=4,j.a.get("/product/".concat(t));case 4:a=e.sent,r(a.data.product),setTimeout((function(){return v(!1)}),200),window.scrollTo(0,0),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),alert(e.t0.response.data.msg);case 13:case"end":return e.stop()}}),e,null,[[0,10]])}))),[]);var g=function(e){O(e)},w=function(){var a=Object(l.a)(o.a.mark((function a(c){var s;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(c.preventDefault(),a.prev=1,!window.confirm("Do you want to add this to your cart?")){a.next=8;break}return a.next=6,j.a.post("/user/cart",{productid:t},{headers:{Authorization:e.accesstoken}});case 6:s=a.sent,alert(s.data.msg);case 8:a.next=13;break;case 10:a.prev=10,a.t0=a.catch(1),alert(a.t0.response.data.msg);case 13:case"end":return a.stop()}}),a,null,[[1,10]])})));return function(e){return a.apply(this,arguments)}}(),k=function(){var a=Object(l.a)(o.a.mark((function a(c){var s;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(c.preventDefault(),a.prev=1,!window.confirm("Do you want to buy this?")){a.next=8;break}return a.next=6,j.a.post("/user/buy",{productid:t},{headers:{Authorization:e.accesstoken}});case 6:s=a.sent,alert(s.data.msg);case 8:a.next=13;break;case 10:a.prev=10,a.t0=a.catch(1),alert(a.t0.response.data.msg);case 13:case"end":return a.stop()}}),a,null,[[1,10]])})));return function(e){return a.apply(this,arguments)}}();return!0===f?Object(p.jsx)("div",{className:"product-detail",children:Object(p.jsx)("div",{className:"products-detail-loading",children:Object(p.jsx)(U.a,{loading:f})})}):Object(p.jsxs)("div",{className:"product-detail",children:[Object(p.jsx)("h2",{className:"product-detail-main-title",children:"PRODUCT"}),Object(p.jsxs)("div",{className:"product-detail-main",children:[Object(p.jsxs)("div",{className:"product-detail-image-box",children:[Object(p.jsx)("img",{className:"product-detail-image-choice",src:"data:image/png;base64,".concat(n.images[m]),alt:""}),n.images[0]?Object(p.jsx)("img",{className:"product-detail-image-1",onClick:function(){return g(0)},src:"data:image/png;base64,".concat(n.images[0]),alt:""}):Object(p.jsx)(G.a,{className:"product-detail-empty-1"}),n.images[1]?Object(p.jsx)("img",{className:"product-detail-image-2",onClick:function(){return g(1)},src:"data:image/png;base64,".concat(n.images[1]),alt:""}):Object(p.jsx)(G.a,{className:"product-detail-empty-2"}),n.images[2]?Object(p.jsx)("img",{className:"product-detail-image-3",onClick:function(){return g(2)},src:"data:image/png;base64,".concat(n.images[2]),alt:""}):Object(p.jsx)(G.a,{className:"product-detail-empty-3"}),n.images[3]?Object(p.jsx)("img",{className:"product-detail-image-4",onClick:function(){return g(3)},src:"data:image/png;base64,".concat(n.images[3]),alt:""}):Object(p.jsx)(G.a,{className:"product-detail-empty-4"}),n.images[4]?Object(p.jsx)("img",{className:"product-detail-image-5",onClick:function(){return g(4)},src:"data:image/png;base64,".concat(n.images[4]),alt:""}):Object(p.jsx)(G.a,{className:"product-detail-empty-5"})]}),Object(p.jsxs)("div",{className:"product-detail-info-box",children:[Object(p.jsx)("p",{className:"product-detail-info-title",children:n.title}),Object(p.jsxs)("p",{className:"product-detail-info-price",children:["PRICE : $ ",n.price]}),Object(p.jsx)("p",{className:"product-detail-info-shipping",children:"SHIPPING : Standard"}),Object(p.jsx)("p",{className:"product-detail-info-quantity",children:"QUANTITY : 1"}),Object(p.jsxs)("p",{className:"product-detail-info-total",children:["TOTAL : ",Object(p.jsxs)("span",{style:{color:"red",fontSize:"16px"},children:["$ ",n.price]})]}),Object(p.jsxs)("div",{className:"product-detail-button-box",children:[Object(p.jsx)("button",{className:"product-detail-button-cart",type:"button",onClick:w,children:"CART"}),Object(p.jsx)("button",{className:"product-detail-button-buy",type:"button",onClick:k,children:"BUY"})]})]})]}),Object(p.jsx)("p",{className:"product-detail-desc-title",children:"DESCRIPTION INFO"}),Object(p.jsx)("p",{className:"product-detail-desc-content",children:n.desc}),Object(p.jsx)("p",{className:"product-detail-review-title",children:"REVIEW INFO"}),n.reviews.map((function(e,t){return Object(p.jsxs)("div",{className:"product-detail-review-container",children:[Object(p.jsx)("p",{className:"product-detail-review-index",children:t+1}),Object(p.jsx)("p",{className:"product-detail-review-content",children:e.review}),Object(p.jsx)("p",{className:"product-detail-review-date",children:e.date}),Object(p.jsx)("p",{className:"product-detail-review-username",children:e.username})]},t)}))]})};a(80);var F=function(){var e=Object(c.useContext)(b).user,t=Object(c.useState)([]),a=Object(u.a)(t,2),s=a[0],n=a[1],r=Object(c.useState)(0),i=Object(u.a)(r,2),d=i[0],m=i[1],O=Object(c.useState)(0),h=Object(u.a)(O,2),x=h[0],f=h[1],v=Object(c.useState)(!0),g=Object(u.a)(v,2),N=g[0],y=g[1],C=Object(c.useState)(!1),E=Object(u.a)(C,2),S=E[0],R=E[1];Object(c.useEffect)(Object(l.a)(o.a.mark((function t(){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!e.accesstoken){t.next=11;break}return R(!0),t.next=5,j.a.get("/user/cart/".concat(0,"/").concat(7),{headers:{Authorization:e.accesstoken}});case 5:a=t.sent,n(a.data.cart),m(8),f(15),y(a.data.done),setTimeout((function(){return R(!1)}),100);case 11:t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),alert(t.t0.response.data.msg);case 16:case"end":return t.stop()}}),t,null,[[0,13]])}))),[]);var T=function(){var t=Object(l.a)(o.a.mark((function t(a){var c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.prev=1,t.next=4,j.a.get("/user/cart/".concat(d,"/").concat(x),{headers:{Authorization:e.accesstoken}});case 4:c=t.sent,n([].concat(Object(w.a)(s),Object(w.a)(c.data.cart))),m(x+1),f(x+(x-d+1)),y(c.data.done),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),alert(t.t0.response.data.msg);case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e){return t.apply(this,arguments)}}(),D=function(){var t=Object(l.a)(o.a.mark((function t(a,c){var r,i;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),t.prev=1,!window.confirm("Do you want to delete this out of your cart?")){t.next=12;break}return t.next=6,j.a.delete("/user/cart/".concat(c),{headers:{Authorization:e.accesstoken}});case 6:r=Object(w.a)(s),i=r.findIndex((function(e){return e._id===c})),r.splice(i,1),n(r),m(d-1),window.alert("This is deleted out of your cart");case 12:t.next=17;break;case 14:t.prev=14,t.t0=t.catch(1),alert(t.t0.response.data.msg);case 17:case"end":return t.stop()}}),t,null,[[1,14]])})));return function(e,a){return t.apply(this,arguments)}}();return!0===S?Object(p.jsx)("div",{className:"cart-loading",children:Object(p.jsx)(U.a,{loading:S})}):e.accesstoken?0===s.length?Object(p.jsxs)("div",{className:"cart",children:[Object(p.jsx)("h2",{className:"cart-title",children:"CART"}),Object(p.jsx)("h3",{className:"cart-nocart",children:"NO PRODUCTS"})]}):Object(p.jsxs)("div",{className:"cart",children:[Object(p.jsx)("h2",{className:"cart-title",children:"CART"}),Object(p.jsx)("div",{className:"cart-first-dummy"}),Object(p.jsx)("div",{className:"cart-container",children:s.map((function(e,t){return Object(p.jsx)(k,{type:"cart",product:e,deleteCart:D},t)}))}),N?Object(p.jsx)("input",{type:"button",value:"MORE",className:"cart-more-button-done"}):Object(p.jsx)("input",{type:"button",value:"MORE",className:"cart-more-button",onClick:T})]}):Object(p.jsxs)("div",{className:"cart",children:[Object(p.jsx)("h2",{className:"cart-title",children:"CART"}),Object(p.jsx)("h3",{className:"cart-notoken",children:"LOGIN OR REGISTER FIRST"})]})};a(81);var M=function(e){var t=e.index,a=e.item,s=e.handleHistory,n=Object(c.useContext)(b).user,r=Object(c.useState)(!1),i=Object(u.a)(r,2),d=i[0],m=i[1],O=Object(c.useState)(""),h=Object(u.a)(O,2),x=h[0],f=h[1],v=function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.a.post("/user/review/".concat(a.id),{review:x},{headers:{Authorization:n.accesstoken}});case 3:t=e.sent,s(t.data.history),window.alert("Review is created"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),alert(e.t0.response.data.msg);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:"user-history-item",children:[Object(p.jsxs)("div",{className:"user-history-item-info",children:[Object(p.jsx)("p",{className:"user-history-item-index",children:t+1}),Object(p.jsx)("p",{className:"user-history-item-title",children:a.title}),Object(p.jsx)("p",{className:"user-history-item-date",children:a.date}),Object(p.jsx)("button",{className:"user-history-item-button",type:"button",onClick:function(){return m(!d)},children:"REVIEW"})]}),d&&a.isReview?Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{className:"user-history-item-review",children:[Object(p.jsx)("p",{className:"user-history-item-review-content",children:a.review}),Object(p.jsx)("button",{className:"user-history-item-review-button-review",children:"YOU HAVE SENT ALREADY"})]})}):d&&!a.isReview?Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{className:"user-history-item-review",children:[Object(p.jsx)("textarea",{className:"user-history-item-review-content",onChange:function(e){return f(e.target.value)},placeholder:"WRITE YOUR REVIEW HERE"}),Object(p.jsx)("button",{className:"user-history-item-review-button",onClick:v,children:"SEND"})]})}):null]})};a(82);var H=function(){var e=Object(c.useContext)(b).user,t=Object(c.useState)([]),a=Object(u.a)(t,2),s=a[0],n=a[1];Object(c.useEffect)(Object(l.a)(o.a.mark((function t(){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,j.a.get("/user/history",{headers:{Authorization:e.accesstoken}});case 3:a=t.sent,n(a.data.history),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])}))),[]);var r=function(e){return n(e)};return e.accesstoken?Object(p.jsxs)("div",{className:"user",children:[Object(p.jsx)("h2",{className:"user-title",children:"USER"}),Object(p.jsxs)("div",{className:"user-info",children:[Object(p.jsx)("div",{className:"user-info-dummy",children:e.username}),Object(p.jsx)("div",{className:"user-info-item",children:e.email}),Object(p.jsx)("div",{className:"user-info-item",children:e.provider.toUpperCase()}),Object(p.jsx)("div",{className:"user-info-item-last",children:e.isAdmin?"ADMIN":"GUEST"})]}),Object(p.jsx)("p",{className:"user-subtitle",children:"ORDER HISTORY"}),Object(p.jsx)("div",{className:"user-history",children:s.map((function(e,t){return Object(p.jsx)(M,{index:t,item:e,handleHistory:r},t)}))})]}):Object(p.jsxs)("div",{className:"user",children:[Object(p.jsx)("h2",{className:"user-title",children:"USER"}),Object(p.jsx)("h3",{className:"user-notoken",children:"LOGIN OR REGISTER FIRST"})]})};a(83);var Y=function(){return Object(p.jsx)("div",{className:"not-found",children:Object(p.jsx)("h1",{className:"not-found-title",children:"NOT FOUND"})})};a(84);var W=function(){return Object(p.jsx)("div",{className:"main",children:Object(p.jsxs)(N.c,{children:[Object(p.jsx)(N.a,{exact:!0,path:"/",element:Object(p.jsx)(E,{})}),Object(p.jsx)(N.a,{exact:!0,path:"/login",element:Object(p.jsx)(D,{})}),Object(p.jsx)(N.a,{exact:!0,path:"/register",element:Object(p.jsx)(A,{})}),Object(p.jsx)(N.a,{exact:!0,path:"/products",element:Object(p.jsx)(L,{})}),Object(p.jsx)(N.a,{exact:!0,path:"/product-detail/:productid",element:Object(p.jsx)(P,{})}),Object(p.jsx)(N.a,{exact:!0,path:"/admin",element:Object(p.jsx)(T,{})}),Object(p.jsx)(N.a,{exact:!0,path:"/cart",element:Object(p.jsx)(F,{})}),Object(p.jsx)(N.a,{exact:!0,path:"/user",element:Object(p.jsx)(H,{})}),Object(p.jsx)(N.a,{exact:!0,path:"*",element:Object(p.jsx)(Y,{})})]})})};a(85);var z=function(){return Object(p.jsxs)("div",{className:"footer",children:[Object(p.jsx)("p",{className:"footer-info",children:"dackun company"}),Object(p.jsx)("p",{className:"footer-info",children:"dackunice@gamil.com"}),Object(p.jsx)("p",{className:"footer-info",children:"416-564-5321"})]})},_=a(35),B=a.n(_);a(86);var V=function(){return Object(c.useEffect)((function(){B.a.init({duration:1200})}),[]),Object(p.jsx)("div",{className:"App",children:Object(p.jsx)(m,{children:Object(p.jsxs)(O.a,{children:[Object(p.jsx)(g,{}),Object(p.jsx)(W,{}),Object(p.jsx)(z,{})]})})})};r.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(V,{})}),document.getElementById("root"))}},[[87,1,2]]]);
//# sourceMappingURL=main.ee0ef223.chunk.js.map