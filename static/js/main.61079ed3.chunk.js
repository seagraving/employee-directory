(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{23:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(1),s=a.n(r),c=a(16),i=a.n(c),d=(a(23),a(3)),l=a(4),o=a(6),h=a(5);var j=function(e){var t=e.users;function a(e){var t=e.split("-"),a=t[0];return[t[1],t[2].split("T")[0],a].join("-")}return Object(n.jsx)("tbody",{children:void 0!==t[0]&&void 0!==t[0].name?t.map((function(e){var t=e.login,r=e.name,s=e.picture,c=e.phone,i=e.email,d=e.dob;return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{"data-th":"Image",className:"align-middle",children:Object(n.jsx)("img",{src:s.medium,alt:"profile image for "+r.first+" "+r.last,className:"img-responsive"})}),Object(n.jsxs)("td",{"data-th":"Name",className:"name-cell align-middle",children:[r.first," ",r.last]}),Object(n.jsx)("td",{"data-th":"Phone",className:"align-middle",children:c}),Object(n.jsx)("td",{"data-th":"Email",className:"align-middle",children:Object(n.jsx)("a",{href:"mailto:"+i,target:"__blank",children:i})}),Object(n.jsx)("td",{"data-th":"Birthday",className:"align-middle",children:a(d.date)})]},t.uuid)})):Object(n.jsx)(n.Fragment,{})})};a(24);var u=function(e){var t=e.headings,a=e.users,r=e.handleSort;return Object(n.jsx)("div",{className:"datatable mt-5",children:Object(n.jsxs)("table",{id:"table",className:"table table-striped table-hover table-condensed",children:[Object(n.jsx)("thead",{children:Object(n.jsx)("tr",{children:t.map((function(e){var t=e.name,a=e.width;return Object(n.jsxs)("th",{className:"col",style:{width:a},onClick:function(){r(t.toLowerCase())},children:[t,Object(n.jsx)("span",{className:"pointer"})]},t)}))})}),Object(n.jsx)(j,{users:a})]})})};var b=function(e){var t=e.handleSearchChange;return Object(n.jsx)("div",{className:"searchbox",children:Object(n.jsx)("form",{className:"form-inline",children:Object(n.jsx)("input",{className:"form-control",type:"search",placeholder:"Search",onChange:function(e){return t(e)}})})})};a(25);var m=function(e){var t=e.handleSearchChange;return Object(n.jsx)("nav",{className:"navbar navbar-expand navbar-dark bg-dark",children:Object(n.jsx)("div",{className:"navbar-collapse row",id:"navbarNav",children:Object(n.jsx)(b,{handleSearchChange:t})})})},f=a(17),v=a.n(f),O=function(){return v.a.get("https://randomuser.me/api/?results=100")},p=function(e){Object(o.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={users:[{}],order:"descend",filteredUsers:[{}]},e.headings=[{name:"Image",width:"10%"},{name:"Name",width:"10%"},{name:"Phone",width:"20%"},{name:"Email",width:"20%"},{name:"Birthday",width:"10%"}],e.handleSort=function(t){"descend"===e.state.order?e.setState({order:"ascend"}):e.setState({order:"descend"});var a=e.state.filteredUsers.sort((function(a,n){return"ascend"===e.state.order?void 0===a[t]?1:void 0===n[t]?-1:"name"===t?a[t].first.localeCompare(n[t].first):a[t]-n[t]:void 0===a[t]?1:void 0===n[t]?-1:"name"===t?n[t].first.localeCompare(a[t].first):n[t]-a[t]}));e.setState({filteredUsers:a})},e.handleSearchChange=function(t){console.log(t.target.value);var a=t.target.value,n=e.state.users.filter((function(e){return-1!==Object.values(e).join("").toLowerCase().indexOf(a.toLowerCase())}));e.setState({filteredUsers:n})},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;O().then((function(t){e.setState({users:t.data.results,filteredUsers:t.data.results})}))}},{key:"render",value:function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(m,{handleSearchChange:this.handleSearchChange}),Object(n.jsx)("div",{className:"data-area",children:Object(n.jsx)(u,{headings:this.headings,users:this.state.filteredUsers,handleSort:this.handleSort})})]})}}]),a}(r.Component),x=function(e){Object(o.a)(a,e);var t=Object(h.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(p,{})})}}]),a}(r.Component);var g=function(e){var t=e.children;return Object(n.jsx)("div",{className:"wrapper",children:t})},N=(a(43),function(e){Object(o.a)(a,e);var t=Object(h.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"header",children:Object(n.jsx)("h1",{children:"Employee Directory"})})}}]),a}(r.Component));a(44);var y=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)(g,{children:[Object(n.jsx)(N,{}),Object(n.jsx)(x,{})]})})},C=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,47)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),s(e),c(e)}))};a(45);i.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(y,{})}),document.getElementById("root")),C()}},[[46,1,2]]]);
//# sourceMappingURL=main.61079ed3.chunk.js.map