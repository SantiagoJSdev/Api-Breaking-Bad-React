(this.webpackJsonpportafolio=this.webpackJsonpportafolio||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(4),a=n.n(r),i=n(2),o=n(0),s=function(){var e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t=Object(c.useState)(e),n=Object(i.a)(t,2),r=n[0],a=n[1];return{counter:r,increment:function(){a(r+1)},decrement:function(){a(r-1)},reset:function(){a(e)}}}(1),t=e.counter,n=e.increment,r=function(e){var t=Object(c.useRef)(!0),n=Object(c.useState)({data:null,loading:!0,error:null}),r=Object(i.a)(n,2),a=r[0],o=r[1];return Object(c.useEffect)((function(){return function(){t.current=!1}}),[]),Object(c.useEffect)((function(){o({data:null,loading:!0,error:null}),fetch(e).then((function(e){return e.json()})).then((function(e){t.current&&o({loading:!1,error:null,data:e})}))}),[e]),a}("https://www.breakingbadapi.com/api/quotes/".concat(t)),a=r.loading,s=r.data,l=!!s&&s[0],u=l.author,j=l.quote;return Object(o.jsx)("div",{className:"div-right",children:a?Object(o.jsx)("div",{className:"alert alert-info text-center",children:"Loading..."}):Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:"Frases"}),Object(o.jsx)("hr",{}),Object(o.jsxs)("blockquote",{className:"blockquote text-right quote1",children:[Object(o.jsxs)("p",{className:"mb-0",children:[" ",j," "]}),Object(o.jsxs)("footer",{className:"blockquote-footer",children:[" ",u," "]})]}),Object(o.jsx)("button",{className:"btn btn-primary boton2",onClick:n,children:"Siguiente quote"})]})})},l=(n(10),function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("h1",{children:"Ejemplo Practico haciendo llamado a la api"}),Object(o.jsx)("hr",{}),Object(o.jsx)("button",{className:"btn btn-primary boton",onClick:function(){r(!n)},children:"Show/Hide"}),Object(o.jsxs)("div",{className:"container-left",children:[Object(o.jsx)("h1",{className:"text-left",children:"The Breaking Bad API... "}),Object(o.jsx)("p",{className:"text-left1",children:"Tread Lightly"})]}),Object(o.jsx)("div",{className:"container-right",children:n&&Object(o.jsx)(s,{})})]})});a.a.render(Object(o.jsx)(l,{}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.91166bad.chunk.js.map