"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[843],{1687:function(n,e,t){t.d(e,{Bt:function(){return p},Mc:function(){return l},d5:function(){return h},vw:function(){return s},z1:function(){return u}});var r=t(5861),a=t(7757),i=t.n(a),o=t(5294);o.Z.defaults.baseURL="https://api.themoviedb.org/3";var c={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YTY1NDU5YjQyMDIyZWIxNmY1Y2ZhZThmYmEwNTZjNSIsInN1YiI6IjY1NTUzZGE5NjdiNjEzNDVjZjA1MWZlMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._8RTzmcO78xExbWd32QNw6iyXkN3hqQndvomjFUjc2k"}},s=function(){var n=(0,r.Z)(i().mark((function n(){var e,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=new URLSearchParams({language:"en-US",time_window:"week"}),n.next=3,o.Z.get("/trending/movie/week?".concat(e),c);case 3:return t=n.sent,n.abrupt("return",t.data);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=new URLSearchParams({include_adult:!1,language:"en-US",page:1,query:e}),n.next=3,o.Z.get("/search/movie?".concat(t),c);case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=new URLSearchParams({language:"en-US",movie_id:e}),n.next=3,o.Z.get("/movie/".concat(e,"?").concat(t),c);case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=new URLSearchParams({language:"en-US",movie_id:e}),n.next=3,o.Z.get("/movie/".concat(e,"/credits?").concat(t),c);case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=new URLSearchParams({language:"en-US",movie_id:e,page:1}),n.next=3,o.Z.get("/movie/".concat(e,"/reviews?").concat(t),c);case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},6950:function(n,e,t){t.d(e,{e:function(){return d}});var r,a,i=t(7689),o=t(1087),c=t(184),s=function(n){var e=n.movie,t=(0,i.TH)(),r=e.release_date.split("-");return(0,c.jsxs)(o.rU,{to:"/movies/".concat(e.id),state:{from:t},children:[(0,c.jsx)("img",{width:320,src:e.poster_path?"https://image.tmdb.org/t/p/w500/".concat(e.poster_path):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",alt:e.title}),(0,c.jsx)("div",{className:"text-box",children:(0,c.jsxs)("h3",{children:[e.title," (",r[0],")"]})})]})},u=t(168),l=t(1140),h=l.ZP.ul(r||(r=(0,u.Z)(["\npadding:15px;\ndisplay:grid;\ngrid-template-columns: repeat(4, 1fr);\ngap: 15px;\n margin-top: 0;\n  margin-bottom: 0;\n"]))),p=l.ZP.li(a||(a=(0,u.Z)(["\nbackground-color: ",";\n  max-width: 320px;\n\n    .text-box {\n    padding: 30px 20px;\n h3 {\n      color: ",";\n      margin-bottom: 0;\n      "])),(function(n){return n.theme.colors.greens}),(function(n){return n.theme.colors.white})),d=function(n){var e=n.items;return(0,c.jsx)(h,{children:e.map((function(n){return(0,c.jsx)(p,{children:(0,c.jsx)(s,{movie:n})},n.id)}))})}},9843:function(n,e,t){t.r(e),t.d(e,{default:function(){return k}});var r,a,i=t(5861),o=t(9439),c=t(7757),s=t.n(c),u=t(2791),l=t(1087),h=t(6950),p=t(5705),d=t(6727),m=t(168),f=t(1140),x=(0,f.ZP)(p.Bc)(r||(r=(0,m.Z)(["\n  bottom: -1.5em;\n  color: red;\n  font-size: 14px;\n  "]))),g=f.ZP.div(a||(a=(0,m.Z)(["\ndisplay:flex;\n  align-items: center;\n  width: 100%;\n  padding-bottom:20px;\n   overflow: hidden;\n   border-radius: 5px;\n\n\n   .search-item {\n    text-align: center;\n    width: 100%;\n    display: flex;\n    gap: 10px;\n  }\ninput {\n    width: 100%;\n    max-width: 400px;\n\n    &:focus {\n      border: 1px solid ",";\n      outline: none;\n    }\n  }\n\n   button {\n    font-size: 16px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border: 1px solid ",";\n    color: ",";\n    background-color: ",";\n    padding: 5px 10px;\n    border-radius: 5px;\n    transition: color ",",\n      background-color ",";\n\n    &:hover {\n      color: ",";\n      background-color: ",";\n    }\n  }\n\n"])),(function(n){return n.theme.colors.greens}),(function(n){return n.theme.colors.greens}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.grays}),(function(n){return n.theme.cubicTransition}),(function(n){return n.theme.cubicTransition}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.greens})),v=t(184),w=d.Ry().shape({search:d.Z_().required("This field is empty. Write something")}),b=function(n){var e=n.onSubmit,t=n.handleChange;return(0,v.jsx)(g,{children:(0,v.jsx)(p.J9,{initialValues:{search:""},validationSchema:w,onSubmit:function(n){e(n)},onChange:function(n){t(n)},children:(0,v.jsx)(p.l0,{children:(0,v.jsxs)("div",{className:"search-item",children:[(0,v.jsx)("label",{htmlFor:"search",className:"visually-hidden"}),(0,v.jsx)(p.gN,{id:"search",name:"search",autoComplete:"off",className:"input",type:"text",placeholder:"Search movie"}),(0,v.jsx)(x,{name:"search",component:"div"}),(0,v.jsx)("button",{type:"submit",className:"button",children:"Search"})]})})})})},Z=t(1687),j=t(5218),y=t(946);function k(){var n=(0,u.useState)([]),e=(0,o.Z)(n,2),t=e[0],r=e[1],a=(0,u.useState)(!1),c=(0,o.Z)(a,2),p=c[0],d=c[1],m=(0,u.useState)(!1),f=(0,o.Z)(m,2),x=f[0],g=f[1],w=(0,u.useState)(""),k=(0,o.Z)(w,2)[1],S=(0,l.lr)(),N=(0,o.Z)(S,2),U=N[0],_=N[1],I=U.get("title");(0,u.useEffect)((function(){function n(){return(n=(0,i.Z)(s().mark((function n(){var e;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,d(!0),g(!1),n.next=5,(0,Z.z1)(I);case 5:e=n.sent,r(e.results),e.results<1&&j.ZP.error("There are no entries. Try again"),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),g(!0);case 13:return n.prev=13,d(!1),n.finish(13);case 16:case"end":return n.stop()}}),n,null,[[0,10,13,16]])})))).apply(this,arguments)}I&&""!==I&&function(){n.apply(this,arguments)}()}),[I]);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("h1",{children:"All movies"}),(0,v.jsx)(b,{onSubmit:function(n){I!==n.search.trim()&&r([]),k(n.search.trim()),_({title:n.search.trim()})},handleChange:function(n){_({title:n.target.value.trim()})}}),p&&(0,v.jsx)(y.FF,{height:"100",width:"100",color:"#4fa94d",ariaLabel:"rotating-square-loading",strokeWidth:"4",wrapperStyle:{},wrapperClass:"",visible:!0}),x&&(0,v.jsx)("p",{children:"Error! Please reload this page!"}),t.length>0&&(0,v.jsx)(h.e,{items:t}),(0,v.jsx)(j.x7,{position:"top-right"})]})}}}]);
//# sourceMappingURL=843.5d09739c.chunk.js.map