(this.webpackJsonprobofriendapp=this.webpackJsonprobofriendapp||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){},23:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),s=n(6),a=n.n(s),o=n(7),i=n(11),h=(n(20),n(2)),b=n(3),j=n(5),u=n(4),l=(n(21),n(1)),d=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){return Object(l.jsxs)("div",{className:"bg-light-green dib br3 ma2 grow bw2 shadow-5",children:[Object(l.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(this.props.id,"?200x200")}),Object(l.jsxs)("div",{className:"tc",children:[Object(l.jsx)("h2",{children:this.props.name}),Object(l.jsx)("p",{children:this.props.email})]})]})}}]),n}(r.Component),p=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){var e=this,t=this.props.robots.map((function(t,n){return Object(l.jsx)(d,{id:e.props.robots[n].id,name:e.props.robots[n].name,email:e.props.robots[n].email},n)}));return Object(l.jsx)("div",{children:t})}}]),n}(c.a.Component),O=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){return Object(l.jsx)("div",{className:"pa2",children:Object(l.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"seach robots",onChange:this.props.searchChange})})}}]),n}(c.a.Component),f=(n(23),function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){return Object(l.jsx)("div",{style:{overflowY:"scroll",border:"1px solid white",height:"600px"},children:this.props.children})}}]),n}(c.a.Component)),v=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(h.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(b.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(l.jsx)("h1",{children:"oops, that is not good"}):this.props.children}}]),n}(r.Component),g="CHANGE_SEARCH_FIELD",x=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(h.a)(this,n),(e=t.call(this)).state={robots:[]},e}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,r=this.state.robots.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return console.log(t),0===this.state.robots.length?Object(l.jsxs)("div",{className:"tc",children:[Object(l.jsx)("h1",{className:"f1",children:"Robots Friends"}),Object(l.jsx)(O,{searchChange:n}),Object(l.jsx)("hr",{}),Object(l.jsx)(f,{children:Object(l.jsx)("h1",{children:"Loading..."})})]}):Object(l.jsxs)("div",{className:"tc",children:[Object(l.jsx)("h1",{className:"f1",children:"Robots Friends"}),Object(l.jsx)(O,{searchChange:n}),Object(l.jsx)("hr",{}),Object(l.jsx)(f,{children:Object(l.jsx)(v,{children:Object(l.jsx)(p,{robots:r})})})]})}}]),n}(c.a.Component),m=Object(o.b)((function(e){return{searchField:e.change.searchField}}),(function(e){return{onSearchChange:function(t){return e((n=t.target.value,{type:g,payload:n}));var n}}}))(x),y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,26)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),s(e),a(e)}))},C=(n(24),{searchField:""}),F=Object(i.a)({change:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case g:return Object.assign({},e,{searchField:t.payload});default:return e}}}),k=Object(i.b)(F);a.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(o.a,{store:k,children:Object(l.jsx)(m,{})})}),document.getElementById("root")),y()}},[[25,1,2]]]);
//# sourceMappingURL=main.fbcdf4d4.chunk.js.map