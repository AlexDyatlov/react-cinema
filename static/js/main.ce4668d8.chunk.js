(this["webpackJsonpreact-cinema"]=this["webpackJsonpreact-cinema"]||[]).push([[0],{35:function(e,t,s){},61:function(e,t,s){"use strict";s.r(t);var a=s(0),c=s.n(a),n=s(27),i=s.n(n),r=(s(35),s(6)),o=s(2),l=s(1),m={span:{fontWeight:"bold"}};var j=function(e){return Object(l.jsx)("div",{className:"container",children:Object(l.jsx)("div",{className:"about__item",children:Object(l.jsxs)("p",{className:"about__item-text",children:["SPA \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u043d\u0430 ",Object(l.jsx)("span",{style:m.span,children:"ReactJs"})]})})})},d=s(14),u=s.n(d),b=s(28),h=s(8),v=s(9),O=s(11),p=s(10),x=s(29),_=s.n(x);var y=function(e){var t=e.id,s=e.year,a=e.title,c=e.summary,n=e.poster,i=e.genres;return Object(l.jsx)("div",{className:"movie",children:Object(l.jsxs)(r.b,{to:{pathname:"/movie/".concat(t),state:{year:s,title:a,summary:c,poster:n,genres:i}},children:[Object(l.jsx)("img",{src:n,alt:a,title:a}),Object(l.jsxs)("div",{className:"movie__column",children:[Object(l.jsx)("h3",{className:"movie__title",children:a}),Object(l.jsx)("h5",{className:"movie__year",children:s}),Object(l.jsx)("ul",{className:"movie__genres",children:i.map((function(e,t){return Object(l.jsx)("li",{className:"genres__genre",children:e},t)}))}),Object(l.jsxs)("p",{className:"movie__summary",children:[c.slice(0,140),"..."]})]})]})})},g=function(e){Object(O.a)(s,e);var t=Object(p.a)(s);function s(){var e;Object(h.a)(this,s);for(var a=arguments.length,c=new Array(a),n=0;n<a;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={isLoading:!0,movies:[]},e.getMovies=Object(b.a)(u.a.mark((function t(){var s,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_.a.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");case 2:s=t.sent,a=s.data.data.movies,e.setState({movies:a,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(v.a)(s,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,s=e.movies;return Object(l.jsx)("section",{className:"container",children:t?Object(l.jsx)("div",{className:"loader",children:Object(l.jsx)("span",{className:"loader__text",children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."})}):Object(l.jsx)("div",{className:"movies",children:s.map((function(e){return Object(l.jsx)(y,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),s}(c.a.Component);var N=function(){return Object(l.jsxs)("div",{className:"menu",children:[Object(l.jsx)(r.b,{to:"/",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),Object(l.jsx)(r.b,{to:{pathname:"/about",state:{fromLocation:!0}},children:"\u041e \u043f\u0440\u043e\u0435\u043a\u0442\u0435"})]})},f=function(e){Object(O.a)(s,e);var t=Object(p.a)(s);function s(){return Object(h.a)(this,s),t.apply(this,arguments)}return Object(v.a)(s,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,s=e.history;void 0===t.state&&s.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?Object(l.jsx)("div",{className:"container",children:Object(l.jsx)("div",{className:"card__inner",children:Object(l.jsxs)("div",{className:"card__movie",children:[Object(l.jsx)("img",{src:e.state.poster,alt:e.state.title,title:e.state.title}),Object(l.jsxs)("div",{className:"movie__column",children:[Object(l.jsx)("h3",{className:"movie__title",children:e.state.title}),Object(l.jsx)("h5",{className:"movie__year",children:e.state.year}),Object(l.jsx)("ul",{className:"movie__genres",children:e.state.genres.map((function(e,t){return Object(l.jsx)("li",{className:"genres__genre",children:e},t)}))}),Object(l.jsx)("p",{className:"movie__summary",children:e.state.summary})]})]})})}):null}}]),s}(c.a.Component);var k=function(){return Object(l.jsxs)(r.a,{children:[Object(l.jsx)(N,{}),Object(l.jsx)(o.a,{path:"/",exact:!0,component:g}),Object(l.jsx)(o.a,{path:"/about",component:j}),Object(l.jsx)(o.a,{path:"/movie/:id",component:f})]})};i.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(k,{})}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.ce4668d8.chunk.js.map