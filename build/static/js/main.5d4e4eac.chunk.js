(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,n,t){e.exports=t(38)},37:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),u=t(11),c=t.n(u),o=t(2),i=t(3),l=t.n(i),m="/api/persons",s=function(){return l.a.get(m).then(function(e){return e.data})},f=function(e){return l.a.post(m,e).then(function(e){return e.data})},d=function(e,n){return l.a.put("".concat(m,"/").concat(e),n).then(function(e){return e.data})},h=function(e){return l.a.delete("".concat(m,"/").concat(e)).then(function(e){return e.data})},p=(t(37),function(e){var n=e.handleFormSubmit,t=e.handleNameChange,a=e.handleNumberChange,u=e.newName,c=e.newNumber;return r.a.createElement("form",{onSubmit:n},r.a.createElement("div",null,"nimi: ",r.a.createElement("input",{value:u,onChange:t})),r.a.createElement("div",null,"numero: ",r.a.createElement("input",{value:c,onChange:a})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"lis\xe4\xe4")))}),v=function(e){var n=e.message,t=e.messageType;return null===n?null:r.a.createElement("div",{className:"notification ".concat(t)},n)},b=function(e){var n=e.person,t=e.deletePerson;return r.a.createElement("li",null,n.name,"  ",n.number,r.a.createElement("button",{value:n.id,onClick:t},"poista"))},E=function(e){var n=e.persons,t=e.deletePerson;return r.a.createElement("ul",null,n.map(function(e){return r.a.createElement(b,{key:e.name,person:e,deletePerson:t})}))},g=function(e){var n=e.searchWord,t=e.handleSearchChange;return r.a.createElement("p",null,"rajaa n\xe4ytett\xe4vi\xe4: ",r.a.createElement("input",{value:n,onChange:t}))},j=function(){var e=Object(a.useState)([]),n=Object(o.a)(e,2),t=n[0],u=n[1],c=Object(a.useState)(""),i=Object(o.a)(c,2),l=i[0],m=i[1],b=Object(a.useState)(""),j=Object(o.a)(b,2),w=j[0],O=j[1],S=Object(a.useState)(""),C=Object(o.a)(S,2),N=C[0],k=C[1],y=Object(a.useState)(""),P=Object(o.a)(y,2),T=P[0],x=P[1],F=Object(a.useState)(""),H=Object(o.a)(F,2),I=H[0],J=H[1];Object(a.useEffect)(function(){s().then(function(e){u(e)})},[]);var L=function(e,n){J(n),x(e),setTimeout(function(){x(null)},5e3)},W=t.filter(function(e){return RegExp(N,"i").test(e.name)});return r.a.createElement("div",null,r.a.createElement("h2",null,"Puhelinluettelo"),T&&r.a.createElement(v,{message:T,messageType:I}),r.a.createElement(g,{searchWord:N,handleSearchChange:function(e){k(e.target.value)}}),r.a.createElement("h3",null,"Lis\xe4\xe4 uusi"),r.a.createElement(p,{handleFormSubmit:function(e){e.preventDefault();var n={name:l,number:w};if(t.some(function(e){return e.name===l})){if(window.confirm("".concat(l," on jo luettelossa, korvataanko vanha numero uudella?"))){var a=t.filter(function(e){return e.name===l})[0].id;d(a,n).then(function(e){return u(t.map(function(n){return n.id!==e.id?n:e})),L("Yhteystieto ".concat(e.name," p\xe4ivitetty"),"update"),!0}).catch(function(e){L("Henkil\xf6 '".concat(n.name,"' on jo poistettu palvelimelta"),"error"),u(t.filter(function(e){return e.id!==a}))}),m(""),O("")}}else f(n).then(function(e){return u(t.concat(e)),L("Lis\xe4ttiin ".concat(e.name),"update"),!0}),m(""),O("")},handleNameChange:function(e){m(e.target.value)},handleNumberChange:function(e){O(e.target.value)},newName:l,newNumber:w}),r.a.createElement("h3",null,"Numerot"),r.a.createElement(E,{persons:W,deletePerson:function(e){var n=parseInt(e.target.value),a=t.find(function(e){return e.id===n});window.confirm("Haluatko poistaa ".concat(a.name))&&h(n).then(function(e){return L("poistettiin ".concat(a.name),"update"),u(t.filter(function(e){return e.id!==n})),!0})}}))};c.a.render(r.a.createElement(j,null),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.5d4e4eac.chunk.js.map