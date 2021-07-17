(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{15:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(4),i=n.n(c),s=n(3),o=n(5),u=n(6),l=n(7),b=n(9),d=n(8),m=n(17),j=n(0),h=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:"",name:"",number:""},e.getValue=function(t){var n=t.currentTarget.name;e.setState(Object(o.a)({},n,t.currentTarget.value))},e.getContact=function(t){t.preventDefault();var n=e.state.contacts.find((function(e){return e.name===t.target[0].value}));if(n)return alert("".concat(n.name," is already in contacts")),void e.resetState();e.setState((function(e){var t=e.contacts,n=e.name,a=e.number;return{contacts:[].concat(Object(s.a)(t),[{id:Object(m.a)(),name:n,number:a}])}})),e.resetState()},e.deleteContact=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e.resetState=function(){return e.setState((function(e){return{contacts:Object(s.a)(e.contacts),filter:"",name:"",number:""}}))},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.name,a=t.contacts,r=t.number,c=t.filter,i=c.toLowerCase(),s=a.filter((function(e){return e.name.toLowerCase().includes(i)}));return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{children:"Phonebook"}),Object(j.jsxs)("form",{onSubmit:this.getContact,children:[Object(j.jsxs)("label",{children:["Name",Object(j.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:this.getValue,value:n})]}),Object(j.jsxs)("label",{children:["Number",Object(j.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:r,onChange:this.getValue})]}),Object(j.jsx)("button",{type:"submit",children:"Add contact"})]}),Object(j.jsx)("h2",{children:"Contacts"}),Object(j.jsxs)("label",{children:["Find contacts by Name",Object(j.jsx)("input",{type:"text",name:"filter",value:c,onChange:this.getValue})]}),a&&Object(j.jsx)("ul",{children:s.map((function(t){var n=t.id,a=t.name,r=t.number;return Object(j.jsxs)("li",{children:[Object(j.jsxs)("span",{children:[a,": ",r]}),Object(j.jsx)("button",{onClick:function(){return e.deleteContact(n)},children:"Delete"})]},n)}))})]})}}]),n}(a.Component);i.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(h,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.7a248de0.chunk.js.map