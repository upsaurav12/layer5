"use strict";(self.webpackChunkLayer5=self.webpackChunkLayer5||[]).push([[2697],{22514:function(e,t,n){n.d(t,{A:function(){return r}});var i=n(96540);const l=[{id:0,link:"/projects/sistent/about",text:"About Sistent"},{id:1,link:"/projects/sistent/identity/color",text:"Colors"},{id:2,link:"/projects/sistent/identity/color/guidance",text:"Colors"},{id:3,link:"/projects/sistent/identity/color/code",text:"Colors"},{id:4,link:"/projects/sistent/identity/spacing",text:"Spacing"},{id:5,link:"/projects/sistent/identity/spacing/guidance",text:"Spacing"},{id:6,link:"/projects/sistent/identity/spacing/code",text:"Spacing"},{id:7,link:"/projects/sistent/identity/typography",text:"Typography"},{id:8,link:"/projects/sistent/identity/typography/guidance",text:"Typography"},{id:9,link:"/projects/sistent/identity/typography/code",text:"Typography"},{id:10,link:"/projects/sistent/components/button",text:"Button"},{id:10,link:"/projects/sistent/components/button/guidance",text:"Button"},{id:11,link:"/projects/sistent/components/button/code",text:"Button"},{id:12,link:"/projects/sistent/components/text-input",text:"Text Input"},{id:13,link:"/projects/sistent/components/text-input/guidance",text:"Text Input"},{id:14,link:"/projects/sistent/components/text-input/code",text:"Text Input"},{id:15,link:"/projects/sistent/components/paper",text:"Paper"},{id:16,link:"/projects/sistent/components/paper/guidance",text:"Paper"},{id:17,link:"/projects/sistent/components/paper/code",text:"Paper"},{id:18,link:"/projects/sistent/components/popper",text:"Popper"},{id:19,link:"/projects/sistent/components/popper/guidance",text:"Popper"},{id:20,link:"/projects/sistent/components/popper/code",text:"Popper"},{id:21,link:"/projects/sistent/components/text-field",text:"Text Field"},{id:22,link:"/projects/sistent/components/text-field/guidance",text:"Text Field"},{id:23,link:"/projects/sistent/components/text-field/code",text:"Text Field"}];var a=n(96044);var o=n(21250).default.div.withConfig({displayName:"paginationstyle__TocPaginationWrapper",componentId:"sc-isbsjw-0"})(["\n  display: flex;\n  gap: 1rem;\n  justify-content: center;\n  margin: 3rem 2rem 4rem 2rem;\n\n  @media screen and (max-width: 540px) {\n    margin: 0 0 2rem 0;\n    flex-flow: row wrap;\n    gap: 0.3rem;\n  }\n"]);var r=()=>{var e,t;const{0:n,1:r}=(0,i.useState)(0);return(0,i.useEffect)((()=>{const e=window.location.pathname,t=l.findIndex((t=>t.link===e));r(t)}),[]),i.createElement(o,null,n>0?i.createElement(a.default,{$secondary:!0,$url:null===(e=l[n-1])||void 0===e?void 0:e.link},"← Previous"):null,n<l.length-1?i.createElement(a.default,{$primary:!0,$url:null===(t=l[n+1])||void 0===t?void 0:t.link},"Next →"):null)}},95328:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var i=n(96540),l=n(64810),a=n(86462),o=n(58501),r=n(9184),d=n(96044),s=n(92121);const c=()=>{const e=(0,a.useLocation)(),{isDark:t}=(0,s.G)();return i.createElement(r.p,{title:"TextField"},i.createElement("div",{className:"content"},i.createElement("a",{id:"Identity"},i.createElement("h2",null,"Text Field")),i.createElement("p",null,"The TextField component is a versatile input field used to capture user input in forms and user interfaces. It can handle a variety of input types, such as text, numbers, emails, and passwords, and offers built-in styling and validation features."),i.createElement("div",{className:"filterBtns"},i.createElement(d.default,{className:"/projects/sistent/components/text-field"===e.pathname?"active":"",onClick:()=>(0,l.navigate)("/projects/sistent/components/text-field"),title:"Overview"}),i.createElement(d.default,{className:"/projects/sistent/components/text-field/guidance"===e.pathname?"active":"",onClick:()=>(0,l.navigate)("/projects/sistent/components/text-field/guidance"),title:"Guidance"}),i.createElement(d.default,{className:"/projects/sistent/components/text-field/code"===e.pathname?"active":"",onClick:()=>(0,l.navigate)("/projects/sistent/components/text-field/code"),title:"Code"})),i.createElement("div",{className:"main-content"},i.createElement("p",null,"For proper application, these TextField can be used for different purposes. It can be effectively used in any project to increase User Interaction. Lets see how can we use TextField effectively in our project."),i.createElement("a",{id:"Basic TextField"},i.createElement("h2",null,"Basic TextField")),i.createElement("p",null,"The TextField wrapper component is a complete form control including a label, variant, helper text etc. TextField comes with three variants: outlined (default), filled, and standard."),i.createElement("h3",null,"Outlined (default)"),i.createElement("p",null,"Outlined TextField are TextField that do not have a fill, but have a border or stroke to define its bounding box as well as a text label to convey a thought for users to take action upon. Colors can also be used to style these buttons in order to fit into the theme align with brand guidelines."),i.createElement(o.SistentThemeProvider,{initialMode:t?"dark":"light"},i.createElement(o.Box,{component:"form",sx:{"& .MuiTextField-root":{m:1,width:"25ch"}},noValidate:!0,autoComplete:"off"},i.createElement(o.TextField,{id:"outlined-basic",label:"Outlined",variant:"outlined"}))),i.createElement("h3",null,"Filled"),i.createElement("p",null,"Filled TextField are TextField that consist a background color fill and a text in it. Depending on the theme or intended action, the color fill can range from a primary brand color to any other applicable color in a brand’s color palette."),i.createElement(o.SistentThemeProvider,{initialMode:t?"dark":"light"},i.createElement(o.Box,{component:"form",sx:{"& .MuiTextField-root":{m:1,width:"25ch"}},noValidate:!0,autoComplete:"off"},i.createElement(o.TextField,{variant:"filled",label:"Filled",id:"filled-basic"}))),i.createElement("h3",null,"Standard"),i.createElement("p",null,"Standard TextField are TextField that do not have background color fill and a text in it. Colors can also be used to style these buttons in order to fit into the theme align with brand guidelines."),i.createElement(o.SistentThemeProvider,{initialMode:t?"dark":"light"},i.createElement(o.Box,{component:"form",sx:{"& .MuiTextField-root":{m:1,width:"25ch"}},noValidate:!0,autoComplete:"off"},i.createElement(o.TextField,{id:"standard-basic",label:"Standard",variant:"standard"}))),i.createElement("a",{id:"When to use different properties?"},i.createElement("h2",null,"When to use different properties?")),i.createElement("p",null,"You might come across in a situation you needed some helper text, field with number, disabled field etc. Let's see different properties availble for TextField."),i.createElement("h3",null,"Type prop"),i.createElement("p",null,"Type prop can have a value such as password, number or text."),i.createElement(o.SistentThemeProvider,{initialMode:t?"dark":"light"},i.createElement(o.Box,{component:"form",sx:{"& .MuiTextField-root":{m:1,width:"25ch"}},noValidate:!0,autoComplete:"off"},i.createElement("div",null,i.createElement(o.TextField,{id:"outlined-password-input",label:"Password",type:"password",autoComplete:"current-password"}),i.createElement(o.TextField,{id:"outlined-number",label:"Number",type:"number"}),i.createElement(o.TextField,{id:"outlined-text",label:"Text",type:"text"})))),i.createElement("h3",null,"Helper Text"),i.createElement("p",null,"Helper text also very effective for your form or for better understanding."),i.createElement(o.SistentThemeProvider,{initialMode:t?"dark":"light"},i.createElement(o.Box,{component:"form",sx:{"& .MuiTextField-root":{m:1,width:"25ch"}},noValidate:!0,autoComplete:"off"},i.createElement("div",null,i.createElement(o.TextField,{id:"outlined-text",label:"Text",type:"text",helperText:"This is helper text"})))),i.createElement("h3",null,"Error"),i.createElement("p",null,"Error handling is very important for UI. User might come in sitatution where they enter invalid value or forget to enter any data in TextField. Here come error prop helps to indicate partucular field are required or user have entered invalid value."),i.createElement(o.SistentThemeProvider,{initialMode:t?"dark":"light"},i.createElement(o.Box,{component:"form",sx:{"& .MuiTextField-root":{m:1,width:"25ch"}},noValidate:!0,autoComplete:"off"},i.createElement("div",null,i.createElement(o.TextField,{error:!0,id:"outlined-error",label:"Error",defaultValue:"Hello World"})))))))};var p=()=>i.createElement(c,null)},9184:function(e,t,n){n.d(t,{p:function(){return p}});var i=n(96540),l=n(91580),a=n(66198),o=n(66054),r=n(22514),d=n(64810);const s=n(21250).default.div.withConfig({displayName:"intra-page__JoinCommunityWrapper",componentId:"sc-q3x19t-0"})(["\n  width: 18rem;\n\n  @media screen and (max-width: 750px) {\n    display: none;\n  }\n\n  @media screen and (min-width: 751px) and (max-width: 1279px) {\n    display: none;\n  }\n  .intra-page {\n    position: sticky;\n    top: 10rem;\n    right: 0rem;\n    margin-right: 1rem;\n    padding-bottom: 5rem;\n    padding-right: 2rem;\n    align-items: left;\n    justify-content: space-around;\n    display: flex;\n    flex-direction: column;\n    overflow: hidden;\n\n    .list {\n      color: #000000;\n    }\n    .active {\n      font-weight: 5000;\n      color: #000000;\n    }\n\n    ul {\n      list-style: none;\n      top: 3rem;\n      li {\n        padding-bottom: 0.5rem;\n        padding-top: 0.5rem;\n      }\n    }\n    @media only screen and (min-width: 1280px) and (max-width: 1350px) {\n      padding-right: 0rem;\n      margin-right: 0rem;\n    }\n    @media only screen and (max-width: 950px) {\n      width: 0;\n      opacity: 0;\n      height: 0;\n      transition: none;\n      visibility: hidden;\n    }\n  }\n\n  .learn {\n    width: 10rem;\n  }\n"]);var c=function(){const{0:e,1:t}=(0,i.useState)([]);(0,i.useEffect)((()=>{const e=document.querySelectorAll(".main-content > a");console.log(e),e&&t(Array.from(e).map((e=>({id:e.id,link:`#${e.id}`,text:e.id}))))}),[]);const{0:n,1:l}=(0,i.useState)(null);return(0,i.useEffect)((()=>{const e=window.location.pathname;l(e)}),[]),i.createElement(s,null,i.createElement("div",{className:"intra-page"},i.createElement("ul",null,e.map((e=>i.createElement("li",{key:e.id,className:"list"},i.createElement(d.Link,{to:`${n}${e.link}`,key:e.id,activeClassName:"active"},e.text)))))))};const p=e=>{let{title:t,children:n}=e;return i.createElement(l.A,null,i.createElement("div",{className:"page-header-section"},i.createElement("h1",null,t)),i.createElement(a.A,null),i.createElement("div",{className:"page-section"},i.createElement(o.mc,null,n," ",i.createElement(r.A,null)),i.createElement(c,null)))}}}]);
//# sourceMappingURL=component---src-pages-projects-sistent-components-text-field-guidance-js-335b8ca9a8aba31df742.js.map