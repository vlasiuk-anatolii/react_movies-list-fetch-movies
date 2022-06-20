(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],{15:function(e,t,c){},16:function(e,t,c){},17:function(e,t,c){},19:function(e,t,c){},21:function(e,t,c){"use strict";c.r(t);var i=c(7),s=c.n(i),a=(c(14),c(9)),n=c(2),r=c(1),l=(c(15),c(16),c(17),c(0)),d=function(e){var t=e.movie;return Object(l.jsxs)("div",{className:"card",children:[Object(l.jsx)("div",{className:"card-image","data-cy":"card-image",children:Object(l.jsx)("figure",{className:"image is-4by3",children:Object(l.jsx)("img",{src:t.Poster,alt:"Film logo"})})}),Object(l.jsxs)("div",{className:"card-content",children:[Object(l.jsxs)("div",{className:"media",children:[Object(l.jsx)("div",{className:"media-left",children:Object(l.jsx)("figure",{className:"image is-48x48",children:Object(l.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(l.jsx)("div",{className:"media-content",children:Object(l.jsx)("p",{className:"title is-8","data-cy":"movie-title",children:t.Title})})]}),Object(l.jsxs)("div",{className:"content","data-cy":"content",children:[t.Plot,Object(l.jsx)("br",{})]})]})]})},o=function(e){var t=e.movies;return Object(l.jsx)("div",{className:"movies",children:t.map((function(e){return Object(l.jsx)(d,{movie:e},e.imdbID)}))})},j=(c(19),c(8)),b=c(6),m=c.n(b),u=function(){var e=Object(j.a)(m.a.mark((function e(t){var c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://www.omdbapi.com/?apikey=257b4347","&t=").concat(t));case 2:return c=e.sent,e.abrupt("return",c.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(e){var t=e.addMovies,c=Object(r.useState)(null),i=Object(n.a)(c,2),s=i[0],a=i[1],o=Object(r.useState)(""),j=Object(n.a)(o,2),b=j[0],m=j[1],v=Object(r.useState)(!1),h=Object(n.a)(v,2),O=h[0],x=h[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("form",{className:"find-movie",onSubmit:function(e){e.preventDefault(),s&&(t(s),m(""),a(null)),x(!1)},children:[Object(l.jsxs)("div",{className:"field",children:[Object(l.jsx)("label",{className:"label",htmlFor:"movie-title",children:"Movie title"}),Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("input",{type:"text",id:"movie-title",placeholder:"Enter a title to search",className:O?"is-danger input":"input",value:b,onChange:function(e){var t=e.target.value;m(t),x(!1)}})}),O&&Object(l.jsx)("p",{className:"help is-danger",children:"Can't find a movie with such a title"})]}),Object(l.jsxs)("div",{className:"field is-grouped",children:[Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{type:"button",className:"button is-light",disabled:!b,onClick:function(){u(b).then((function(e){"Movie not found!"===e.Error?(x(!0),a(null)):a(e)}))},"data-cy":"find",children:"Find a movie"})}),Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{type:"submit",className:"button is-primary","data-cy":"add",disabled:O,onClick:function(){b||x(!0)},children:"Add to the list"})})]})]}),Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h2",{className:"title",children:"Preview"}),s&&Object(l.jsx)(d,{movie:s})]})]})},h=function(){var e=Object(r.useState)([]),t=Object(n.a)(e,2),c=t[0],i=t[1],s=Object(r.useCallback)((function(e){c.find((function(t){return t.imdbID===e.imdbID}))||i((function(t){return[].concat(Object(a.a)(t),[e])}))}),[c]);return Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)("div",{className:"page-content",children:Object(l.jsx)(o,{movies:c})}),Object(l.jsx)("div",{className:"sidebar",children:Object(l.jsx)(v,{addMovies:s})})]})};s.a.render(Object(l.jsx)(h,{}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.92d0b291.chunk.js.map