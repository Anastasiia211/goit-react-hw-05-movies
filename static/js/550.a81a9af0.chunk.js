"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[550],{1687:function(n,e,r){r.d(e,{Bt:function(){return l},Mc:function(){return p},d5:function(){return d},vw:function(){return o},z1:function(){return u}});var t=r(5861),a=r(7757),i=r.n(a),c=r(5294);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var s={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YTY1NDU5YjQyMDIyZWIxNmY1Y2ZhZThmYmEwNTZjNSIsInN1YiI6IjY1NTUzZGE5NjdiNjEzNDVjZjA1MWZlMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._8RTzmcO78xExbWd32QNw6iyXkN3hqQndvomjFUjc2k"}},o=function(){var n=(0,t.Z)(i().mark((function n(){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=new URLSearchParams({language:"en-US",time_window:"week"}),n.next=3,c.Z.get("/trending/movie/week?".concat(e),s);case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,t.Z)(i().mark((function n(e){var r,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=new URLSearchParams({include_adult:!1,language:"en-US",page:1,query:e}),n.next=3,c.Z.get("/search/movie?".concat(r),s);case 3:return t=n.sent,n.abrupt("return",t.data);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(i().mark((function n(e){var r,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=new URLSearchParams({language:"en-US",movie_id:e}),n.next=3,c.Z.get("/movie/".concat(e,"?").concat(r),s);case 3:return t=n.sent,n.abrupt("return",t.data);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,t.Z)(i().mark((function n(e){var r,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=new URLSearchParams({language:"en-US",movie_id:e}),n.next=3,c.Z.get("/movie/".concat(e,"/credits?").concat(r),s);case 3:return t=n.sent,n.abrupt("return",t.data);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,t.Z)(i().mark((function n(e){var r,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=new URLSearchParams({language:"en-US",movie_id:e,page:1}),n.next=3,c.Z.get("/movie/".concat(e,"/reviews?").concat(r),s);case 3:return t=n.sent,n.abrupt("return",t.data);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},550:function(n,e,r){r.r(e),r.d(e,{default:function(){return y}});var t,a,i,c=r(5861),s=r(9439),o=r(7757),u=r.n(o),p=r(2791),d=r(7689),l=r(1087),x=r(168),h=r(1140),f=h.ZP.div(t||(t=(0,x.Z)(["\nbox-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;\n background-color: ",";\n padding:15px;\n\n   ul {\n    display: flex;\n    gap: 20px;\n  }\n"])),(function(n){return n.theme.colors.greens})),m=r(184),v=function(n){var e=n.data;return(0,m.jsxs)(f,{children:[(0,m.jsx)("h3",{children:"Additional information"}),(0,m.jsxs)("ul",{children:[(0,m.jsx)("li",{children:(0,m.jsx)(l.rU,{to:"/movies/".concat(e.id,"/cast"),children:"Cast"})}),(0,m.jsx)("li",{children:(0,m.jsx)(l.rU,{to:"/movies/".concat(e.id,"/reviews"),children:"Reviews"})})]})]})},g=r(4324),j=(0,h.ZP)(l.rU)(a||(a=(0,x.Z)(["\ndisplay:flex;\nalign-items: center;\ngap:10px;\n"]))),w=function(n){var e=n.to,r=void 0===e?"/":e,t=n.children;return(0,m.jsxs)(j,{to:r,children:[(0,m.jsx)(g.VG_,{}),t]})},Z=r(5984),b=h.ZP.div(i||(i=(0,x.Z)(["\nbackground-color: ",";\nbox-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;\nmargin-top:40px;\n display: flex;\ngap: 40px;\n\n  .info-title{\n   margin-bottom:5px;\n  }\n\n  .info-card{\n    padding: 30px 0;\n  }\n  "])),(function(n){return n.theme.colors.white})),k=function(n){var e=n.data,r=e.release_date.split("-");return(0,m.jsxs)(b,{children:[(0,m.jsx)("img",{src:e.poster_path?"https://image.tmdb.org/t/p/w500/".concat(e.poster_path):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",alt:e.title,width:350}),(0,m.jsxs)("div",{className:"info-card",children:[(0,m.jsxs)("h1",{children:[e.title," (",r[0],")"]}),(0,m.jsx)("p",{children:(0,m.jsx)("i",{children:e.tagline})}),(0,m.jsx)("p",{children:e.overview}),(0,m.jsxs)("div",{children:[(0,m.jsx)("p",{className:"info-title",children:(0,m.jsx)("strong",{children:"Genres:"})}),(0,m.jsx)("ul",{children:e.genres.map((function(n){return(0,m.jsx)("li",{children:(0,m.jsx)("p",{children:n.name})},(0,Z.x0)())}))})]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("p",{className:"info-title",children:(0,m.jsx)("strong",{children:"Languages:"})}),(0,m.jsx)("ul",{children:e.spoken_languages.map((function(n){return(0,m.jsx)("li",{children:(0,m.jsx)("p",{children:n.english_name})},(0,Z.x0)())}))})]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("p",{className:"info-title",children:(0,m.jsx)("strong",{children:"Production countries:"})}),(0,m.jsx)("ul",{children:e.production_countries.map((function(n){return(0,m.jsx)("li",{children:(0,m.jsx)("p",{children:n.name})},(0,Z.x0)())}))})]})]})]})},U=r(1687);function y(){var n,e,r=(0,d.TH)(),t=(0,d.UO)(),a=(0,p.useState)(),i=(0,s.Z)(a,2),o=i[0],l=i[1],x=(0,p.useRef)(null!==(n=null===(e=r.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/");return(0,p.useEffect)((function(){function n(){return(n=(0,c.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,U.Mc)(t.movieId);case 3:e=n.sent,l(e),n.next=9;break;case 7:n.prev=7,n.t0=n.catch(0);case 9:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}t.movieId&&function(){n.apply(this,arguments)}()}),[t.movieId]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(w,{to:x.current,children:"Back"}),o&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(k,{data:o}),(0,m.jsx)(v,{data:o})]}),(0,m.jsx)(d.j3,{})]})}}}]);
//# sourceMappingURL=550.a81a9af0.chunk.js.map