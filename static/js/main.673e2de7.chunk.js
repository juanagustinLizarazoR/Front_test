(this.webpackJsonpuser_management=this.webpackJsonpuser_management||[]).push([[0],{142:function(e,n,a){"use strict";a.r(n);var t=a(1),s=a(14),r=a.n(s);a(86),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=a(23),c=a(24),i=a(27),l=a(26),d=(a(87),a(8)),h=a(16),b=a(9),j=a(4),m=function(){return Object(j.jsx)("div",{style:{marginTop:"5rem"},children:Object(j.jsxs)(h.a,{textColor:"#fff",backgroundColor:"#000e16",children:[Object(j.jsx)(h.d,{prefix:Object(j.jsx)("i",{className:"fa fa-bars fa-large"}),children:Object(j.jsx)("a",{href:"#a",className:"text-decoration-none",style:{color:"inherit"},children:"Administrador"})}),Object(j.jsx)(h.b,{className:"sidebar-content",children:Object(j.jsxs)(h.e,{children:[Object(j.jsx)(b.c,{exact:!0,to:"/users",activeClassName:"activeClicked",children:Object(j.jsx)(h.f,{icon:"users",children:"Users"})}),Object(j.jsx)(b.c,{exact:!0,to:"/campus",activeClassName:"activeClicked",children:Object(j.jsx)(h.f,{icon:"table",children:"Campus"})}),Object(j.jsx)(b.c,{exact:!0,to:"/contacts",activeClassName:"activeClicked",children:Object(j.jsx)(h.f,{icon:"list",children:"Contacts"})}),Object(j.jsx)(b.c,{exact:!0,to:"/ubications",activeClassName:"activeClicked",children:Object(j.jsx)(h.f,{icon:"map",children:"Ubications"})}),Object(j.jsx)(b.c,{exact:!0,to:"/",target:"_blank",activeClassName:"activeClicked",children:Object(j.jsx)(h.f,{icon:"exclamation-circle",children:"Log out"})})]})}),Object(j.jsx)(h.c,{style:{textAlign:"center"},children:Object(j.jsx)("div",{style:{padding:"20px 5px"},children:"\xa9 Jhusseth"})})]})})},u=function(){return Object(j.jsx)("div",{children:"Hola a todos"})},p=function(){return Object(j.jsx)("div",{children:"Adios a todos"})};function g(){return Object(j.jsxs)("div",{className:"app",children:[Object(j.jsx)(m,{}),Object(j.jsxs)(d.c,{children:[Object(j.jsx)(d.a,{path:"/contacts",children:u}),Object(j.jsx)(d.a,{path:"/ubications",children:p})]})]})}var x,f,O,v=a(34),w=a(25),y=a(151),k=a(149),C=a(2),_=C.c.div(x||(x=Object(w.a)([" \n@import url('https://fonts.googleapis.com/css?family=Fira+Sans:400,500,600,700,800');\n\n* {\n  box-sizing: border-box;\n}\nbody {\n  /* background-image: url('https://www.sarmientoasesores.com/wp-content/uploads/2019/09/section-background.jpg') !important; */\n  background-image: url('https://lh6.googleusercontent.com/proxy/2U11KZNrl3NZdQCk5y_5ikKtuW8SpGuWVmvRsfYOLwWEQXWOgj0BKPab4UwnzRuGouOcLYCaL3-V3-rEUdAMb2BiUXUOUvt_x2P_hp0ohMg7Z2F7ow4ZXrGEJtGB_vxYD55MrJSItTGCdEtqDw8=s0-d') !important;\n  background-size: cover;\n  background-repeat: no-repeat;\n  min-height: 100vh;\n  display: flex;\n  font-weight: 400;\n  font-family: 'Fira Sans', sans-serif;\n  \n}\n\nh1,h2,h3,h4,h5,h6,label,span {\n  font-weight: 500;\n  font-family: 'Fira Sans', sans-serif;\n}\n\nbody, html, .App, #root, .auth-wrapper {\n  width: 100%;\n  height: 100%;\n}\n\n.navbar-light {\n  background-color: #ffffff;\n  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);\n}\n\n.auth-wrapper {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  text-align: left;\n}\n\n.auth-inner {\n  width: 450px;\n  margin: auto;\n  background: #ffffff;\n  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);\n  padding: 40px 55px 45px 55px;\n  border-radius: 15px;\n  transition: all .3s;\n}\n\n.auth-wrapper .form-control:focus {\n  border-color: #3799c0;\n  box-shadow: none;\n}\n\n.auth-wrapper h3 {\n  text-align: center;\n  margin: 0;\n  line-height: 1;\n  padding-bottom: 20px;\n}\n\n.custom-control-label {\n  font-weight: 400;\n}\n\n.forgot-password,\n.forgot-password a {\n  text-align: right;\n  font-size: 13px;\n  padding-top: 10px;\n  color: #7f7d7d;\n  margin: 0;\n}\n\n.forgot-password a {\n  color: #167bff;\n}\n\n.parent {\n    height:auto;\n    /* width: 100vw; */\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n    margin-top: 10%;\n    color:white;\n}\n\n.childForm {\n  background:#000e16;\n  border-radius:20px;\n  border:2px solid white;\n  padding:60px;\n  \n}\n\n.btn-primary{\n    background-color: #339dc5;\n}\n.btn-primary:hover{\n    background-color: #1d586e;\n}\n"]))),N=function(e){Object(i.a)(a,e);var n=Object(l.a)(a);function a(){var e;return Object(o.a)(this,a),(e=n.call(this)).handleChange=function(n){var a=n.target.name,t=n.target.value;e.setState(Object(v.a)({},a,t))},e.handleSubmit=function(n){n.preventDefault(),console.log(),e.props.onAuth(e.state.username,e.state.password),e.props.history.push("/studentPane"),console.log("recived values ",e.state)},e.state={email:"",password:""},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return Object(j.jsx)(_,{children:Object(j.jsx)("div",{className:"parent",children:Object(j.jsx)("div",{className:"childForm",children:Object(j.jsxs)(y.a,{onSubmit:function(n){return e.props.handle_login(n,e.state)},children:[Object(j.jsx)("h3",{children:"Iniciar Sesi\xf3n"}),Object(j.jsxs)(y.a.Group,{controlId:"formBasicEmail",className:"mt-4",children:[Object(j.jsx)(y.a.Label,{children:"Correo"}),Object(j.jsx)(y.a.Control,{type:"text",name:"email",value:this.state.email,placeholder:"correo@icesi.edu.co",onChange:this.handleChange.bind(this)})]}),Object(j.jsxs)(y.a.Group,{controlId:"formBasicPassword",children:[Object(j.jsx)(y.a.Label,{children:"Contrase\xf1a"}),Object(j.jsx)(y.a.Control,{type:"password",name:"password",value:this.state.password,placeholder:"Ingrese contrase\xf1a",onChange:this.handleChange.bind(this)})]}),Object(j.jsx)(k.a,{type:"submit",className:"btn btn-primary mt-5 btn-block",children:"Ingresar"})]})})})})}}]),a}(t.Component),S=C.c.div(f||(f=Object(w.a)(["\n.register-container {\n    /* background-image: url(\"./img/background.jpg\"); */\n    /* background-color: rgba(243, 243, 243, 0.4); */\n    /* background-blend-mode: color;\n    background-size: cover; */\n    /* min-height: 100vh; */\n    height:auto;\n    /* width: 100vw; */\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n    margin-top: 2%;\n    color:white;\n  }\n  /* body {\n      background: #1C8EF9 !important;\n        min-height: 100vh;\n        display: flex;\n        font-weight: 400;\n        font-family: 'Fira Sans', sans-serif;\n  } */\n  \n  .form-center {\n    background:#000e16;\n    border-radius:20px;\n    border:2px solid white;\n    padding:50px\n  }\n  .btn-primary{\n    background-color: #339dc5;\n    }\n    .btn-primary:hover{\n        background-color: #1d586e;\n    }\n"]))),I=function(e){Object(i.a)(a,e);var n=Object(l.a)(a);function a(){var e;return Object(o.a)(this,a),(e=n.call(this)).handleSubmit=function(n){n.preventDefault();var a={name:e.state.name,lastName:e.state.name,email:e.state.email,password:e.state.password};e.props.onSubmit(a),e.props.history.push("/"),console.log("recived values ",e.state)},e.state={name:"",lastName:"",email:"",password:""},e}return Object(c.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(v.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this;return Object(j.jsx)(S,{children:Object(j.jsx)("div",{className:"register-container",children:Object(j.jsx)("div",{className:"form-center",children:Object(j.jsxs)(y.a,{onSubmit:function(n){return e.props.handle_signup(n,e.state)},children:[Object(j.jsx)("h3",{children:"Registro"}),Object(j.jsxs)(y.a.Group,{controlId:"formBasicName",className:"mt-4",children:[Object(j.jsx)(y.a.Label,{children:"Nombre"}),Object(j.jsx)(y.a.Control,{type:"text",name:"name",placeholder:"Ingrese nombres",value:this.state.name,onChange:this.handleChange.bind(this)})]}),Object(j.jsxs)(y.a.Group,{controlId:"formBasicLastName",children:[Object(j.jsx)(y.a.Label,{children:"Apellido"}),Object(j.jsx)(y.a.Control,{type:"text",name:"lastName",placeholder:"Ingrese Apellidos",value:this.state.lastName,onChange:this.handleChange.bind(this)})]}),Object(j.jsxs)(y.a.Group,{controlId:"formBasicEmail",children:[Object(j.jsx)(y.a.Label,{children:"Correo Electronico"}),Object(j.jsx)(y.a.Control,{type:"email",name:"email",placeholder:"Ingrese email",value:this.state.email,onChange:this.handleChange.bind(this)}),Object(j.jsx)(y.a.Text,{className:"text-muted",children:"We'll never share your email with anyone else."})]}),Object(j.jsxs)(y.a.Group,{controlId:"formBasicPassword",children:[Object(j.jsx)(y.a.Label,{children:"Contrase\xf1a"}),Object(j.jsx)(y.a.Control,{type:"password",name:"password",placeholder:"Contrase\xf1a",value:this.state.password,onChange:this.handleChange.bind(this)})]}),Object(j.jsx)(k.a,{className:"btn btn-primary mt-5 btn-block",type:"submit",children:" Registrarse"})]})})})})}}]),a}(t.Component),L=function(e){return Object(j.jsxs)(d.c,{children:[Object(j.jsx)(d.a,{path:["/home","/users","/campus","/ubications","/contacts"],component:g}),Object(j.jsx)(d.a,{path:"/register",component:I}),Object(j.jsx)(d.a,{exact:!0,path:"/login",component:N}),Object(j.jsx)(d.a,{exact:!0,path:"/",component:N})]})},B=(a(141),a(0)),G=a.n(B),U=a(150),A=a(152),R=C.c.div(O||(O=Object(w.a)([" \n  .color-nav{\n    background-color: #000e16;\n  }\n  .fas{\n    color:white;\n  }\n"])));var E=function(e){var n=Object(j.jsx)("div",{className:"mynav",children:Object(j.jsxs)(U.a,{className:"color-nav",variant:"dark",expand:"lg",children:[Object(j.jsx)("span",{children:Object(j.jsx)("i",{className:"fas fa-users-cog mr-3 fa-2x"})}),Object(j.jsx)(U.a.Brand,{href:"#home",children:"User Management"}),Object(j.jsx)(U.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(j.jsx)(U.a.Collapse,{id:"basic-navbar-nav",children:Object(j.jsxs)(A.a,{className:"ml-auto",children:[Object(j.jsxs)(A.a.Link,{href:"/",className:"mr-4",children:[Object(j.jsx)("span",{children:Object(j.jsx)("i",{className:"fas fa-user mr-3  fa-1x"})}),"Login"]}),Object(j.jsxs)(A.a.Link,{href:"/register",children:[Object(j.jsx)("span",{children:Object(j.jsx)("i",{className:"fas fa-user-plus mr-3 fa-1x"})}),"Signup"]})]})})]})}),a=Object(j.jsxs)(U.a,{expand:"lg",children:[Object(j.jsx)(U.a.Brand,{href:"#home",children:e.logged_in}),Object(j.jsx)(U.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(j.jsx)(U.a.Collapse,{id:"basic-navbar-nav",children:Object(j.jsx)(A.a,{className:"ml-auto",children:Object(j.jsx)(A.a.Link,{onClick:e.handle_logout,children:"Log Out"})})})]});return Object(j.jsx)(R,{children:e.logged_in?a:n})};A.a.propTypes={logged_in:G.a.bool.isRequired,display_form:G.a.func.isRequired,handle_logout:G.a.func.isRequired};var D=a(18),F=a(78),W=a(79),P=Object(D.combineReducers)({}),T=[W.a],M=Object(D.createStore)(P,{},Object(F.composeWithDevTools)(D.applyMiddleware.apply(void 0,T))),z=a(48),J=a.n(z),q=function(e){Object(i.a)(a,e);var n=Object(l.a)(a);function a(e){var t;return Object(o.a)(this,a),(t=n.call(this,e)).display_form=function(e){t.setState({displayed_form:e})},t.handle_login=function(e,n){e.preventDefault(),console.log(n),J.a.post(window.env.API_URL+"auth/login",{username:n.email,password:n.password}).then((function(e){console.log(e.data),localStorage.setItem("token",e.data.token),localStorage.setItem("user",e.data.user.first_name+" "+e.data.user.last_name),console.log("--------------- "+localStorage.getItem("token")),t.setState({logged_in:!0,displayed_form:"",username:e.data.user.first_name+" "+e.data.user.last_name})}))},t.handle_signup=function(e,n){e.preventDefault(),console.log(n),J.a.post(window.env.API_URL+"auth/signup",{username:n.email,email:n.email,first_name:n.name,last_name:n.lastName,password:n.password}).then((function(e){console.log(e.data),localStorage.setItem("token",n.token),t.setState({logged_in:!0,displayed_form:"",username:e.data.first_name+" "+e.data.last_name})}))},t.handle_logout=function(){localStorage.removeItem("token"),t.setState({logged_in:!1,username:""})},t.state={displayed_form:"",logged_in:!!localStorage.getItem("token"),username:""},t}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;M.subscribe((function(){return e.setState(M.getState())}))}},{key:"render",value:function(){return Object(j.jsxs)("div",{className:"app",children:[Object(j.jsx)(E,{logged_in:this.state.logged_in,handle_logout:this.handle_logout}),Object(j.jsx)("div",{children:Object(j.jsx)(L,{})})]})}}]),a}(t.Component),Z=(a(140),Object(j.jsx)(b.a,{children:Object(j.jsx)(d.a,{component:q})}));r.a.render(Z,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},86:function(e,n,a){},87:function(e,n,a){}},[[142,1,2]]]);
//# sourceMappingURL=main.673e2de7.chunk.js.map