(self.webpackChunkLayer5=self.webpackChunkLayer5||[]).push([[7652],{13524:function(n,e,t){var i=t(75972).k5;n.exports.Y=function(n){return i({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M15 19l-7-7 7-7"}}]})(n)}},22033:function(n,e,t){var i=t(75972).k5;n.exports.I=function(n){return i({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M48 256c0 114.9 93.1 208 208 208s208-93.1 208-208S370.9 48 256 48 48 141.1 48 256zm289.1-43.4c7.5-7.5 19.8-7.5 27.3 0 3.8 3.8 5.6 8.7 5.6 13.6s-1.9 9.9-5.7 13.7l-94.3 94c-7.6 6.9-19.3 6.7-26.6-.6l-95.7-95.4c-7.5-7.5-7.6-19.7 0-27.3 7.5-7.5 19.7-7.6 27.3 0l81.1 81.9 81-79.9z"}}]})(n)}},66198:function(n,e,t){"use strict";t.d(e,{A:function(){return p}});var i=t(96540),o=t(13524),r=t(64810),a=t(48003),l=t(22033);var c=t(21250).default.div.withConfig({displayName:"tocstyle__TOCWrapper",componentId:"sc-688mic-0"})(["\n  position: absolute;\n  top: 10rem;\n  left: 0rem;\n  margin-left: 3rem;\n  margin-top: 3rem;\n  width: 15rem;\n  padding-bottom: 2rem;\n  @media screen and (min-width: 1280px) and (max-width: 1350px) {\n    margin-left: 0.2rem;\n  }\n\n  .go-back {\n    margin-left: 1rem;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    a {\n      display: inline-flex;\n      svg {\n        align-self: center;\n        font-size: 1.5rem;\n        color: rgb(177, 182, 184);\n        width: 100%;\n        max-width: 1.5rem;\n      }\n      h4 {\n        font-weight: 500;\n        text-transform: capitalize;\n        font-size: 1.25rem;\n        white-space: nowrap;\n      }\n      &:hover {\n        svg,\n        h4 {\n          color: #3c494f;\n        }\n      }\n    }\n    margin-bottom: 1rem;\n  }\n\n  .toc-sub-heading {\n    color: ",";\n    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);\n    margin-top: 1rem;\n    font-weight: 300;\n    font-size: 1.15rem;\n  }\n\n  .toc-sub-inline {\n    display: inline-block;\n  }\n\n  .active {\n    font-weight: 500;\n    color: ",";\n  }\n\n  ul {\n    display: flex;\n    flex-direction: column;\n    white-space: nowrap;\n  }\n\n  .toc-ul {\n    display: flex;\n    flex-direction: column;\n    margin-top: 0rem;\n    list-style: none;\n  }\n\n  .toc-toggle-btn {\n    display: none;\n  }\n\n  .toc-ul-open {\n    display: flex;\n    flex-direction: column;\n    margin-top: 0rem;\n    list-style: none;\n    height: auto !important;\n    opacity: 1 !important;\n    margin-bottom: 2rem;\n    transition: all 0.4s !important;\n  }\n\n  .toc-menu-icon {\n    width: 1.5rem;\n    height: 1.5rem;\n    cursor: pointer;\n    fill: ",";\n  }\n\n  .toc-sub-heading:hover {\n    color: ",";\n  }\n\n  @media only screen and (max-width: 750px) {\n    position: initial;\n    margin-right: 3rem;\n    width: auto;\n    .toc-toggle-btn {\n      display: inline-block;\n    }\n    .go-back {\n      margin-left: 0;\n    }\n\n    .toc-ul {\n      opacity: 0;\n      height: 0;\n      transition: none;\n      visibility: hidden;\n    }\n\n    .toc-ul-open {\n      visibility: visible;\n    }\n  }\n\n  .toc-acc-item {\n    background-color: transparent;\n  }\n\n  .identity {\n    display: flex;\n    width: 100%;\n    justify-content: space-between;\n    align-items: center;\n    padding-right: 1rem;\n    cursor: pointer;\n\n    &:hover {\n      color: ",";\n    }\n  }\n\n  .identity-sublinks {\n    padding-left: 0.56rem;\n\n    .identity-item {\n      font-size: 1.05rem;\n      margin-top: 0.45rem;\n    }\n  }\n"],(n=>n.theme.text),(n=>n.theme.secondaryColor),(n=>n.theme.menuColor),(n=>n.theme.secondaryColor),(n=>n.theme.text)),s=t(63760),d=t(3349),m=t(86462);var p=()=>{const{0:n,1:e}=(0,i.useState)(!1),t=(0,m.useLocation)(),{0:p,1:h}=(0,i.useState)(t.pathname.includes("/identity"));return i.createElement(c,null,i.createElement("div",{className:"go-back"},i.createElement(r.Link,{to:"/projects/sistent"},i.createElement(o.Y,null),i.createElement("h4",null,"Table of Contents")),i.createElement("div",{className:"toc-toggle-btn"},n?i.createElement(a.W,{className:"toc-menu-icon",onClick:function(){e(!n)}}):i.createElement(l.I,{className:"toc-menu-icon",onClick:function(){e(!n)}}))),i.createElement("div",{className:"toc-list"},i.createElement("ul",{className:"toc-ul "+(n?"toc-ul-open":"")},i.createElement("li",null,i.createElement(r.Link,{to:"/projects/sistent/about",className:"toc-sub-heading toc-sub-inline",activeClassName:"active"},"About")),i.createElement("li",null,i.createElement("div",null,i.createElement("li",{className:"toc-sub-heading identity",onClick:()=>h((n=>!n))},"Identity",p?i.createElement(d.I,null):i.createElement(s.p,null)),p&&i.createElement("div",{className:"identity-sublinks"},i.createElement("li",null,i.createElement(r.Link,{to:"/projects/sistent/identity/color",className:"toc-sub-heading toc-sub-inline identity-item "+(t.pathname.includes("/projects/sistent/identity/color")?"active":""),activeClassName:"active"},"Color")),i.createElement("li",null,i.createElement(r.Link,{to:"/projects/sistent/identity/spacing",className:"toc-sub-heading toc-sub-inline identity-item "+(t.pathname.includes("/projects/sistent/identity/spacing")?"active":""),activeClassName:"active"},"Spacing")),i.createElement("li",null,i.createElement(r.Link,{to:"/projects/sistent/identity/typography",className:"toc-sub-heading toc-sub-inline identity-item "+(t.pathname.includes("/projects/sistent/identity/typography")?"active":""),activeClassName:"active"},"Typography"))))),i.createElement("li",null,i.createElement(r.Link,{to:"/projects/sistent/components",activeClassName:"active",className:"toc-sub-heading toc-sub-inline"},"Components")))))}},91580:function(n,e,t){"use strict";t.d(e,{W:function(){return r}});var i=t(58501),o=t(21250);const r=(0,o.default)(i.Box).withConfig({displayName:"sistentstyle__ActionBox",componentId:"sc-1cl892n-0"})((()=>({display:"flex",justifyContent:"end",width:"100%",gap:"1rem"}))),a=o.default.div.withConfig({displayName:"sistentstyle__SistentWrapper",componentId:"sc-1cl892n-1"})(["\n  position: relative;\n  .content > a:first-of-type > h2:first-of-type {\n    padding-top: 1rem;\n  }\n\n  .highlight {\n    font-weight: 600;\n  }\n\n  .content {\n    width: 100%;\n    padding-bottom: 2rem;\n    ul > li {\n      color: ",";\n      transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);\n    }\n    ol > li {\n      color: ",";\n      transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);\n    }\n    ul > li > span {\n      color: ",";\n      transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);\n    }\n    ol > li > span {\n      color: ",";\n      transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);\n    }\n  }\n\n  h2 h3 {\n    margin: 0.5rem 0;\n    color: ",";\n    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);\n  }\n\n  .page-section {\n    h2 {\n      padding-top: 7rem;\n      margin-top: -7rem;\n    }\n    h3 {\n      padding-top: 7rem;\n      margin-top: -7rem;\n    }\n    padding-left: 20rem;\n    margin-top: 15rem;\n    display: flex;\n  }\n  .conduct-section {\n    @media screen and (min-width: 751px) {\n      margin-top: -43rem;\n    }\n  }\n  .page-section .heading-top {\n    @media screen and (min-width: 751px) {\n      padding-top: 1rem;\n    }\n  }\n  .sidebar {\n    margin: 0;\n    padding: 0;\n    width: 250px;\n    background-color: ",";\n    position: absolute;\n    height: 150rem;\n    overflow: auto;\n    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);\n  }\n\n  .sidebar a {\n    display: block;\n    color: black;\n    padding: 16px;\n    text-decoration: none;\n  }\n\n  .sidebar a.active {\n    background-color: ",";\n    color: white;\n    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);\n  }\n\n  .sidebar a:hover:not(.active) {\n    background-color: ",";\n    color: white;\n    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);\n  }\n\n  .page-header-section {\n    height: 10rem;\n    text-align: center;\n    background: rgb(71, 126, 150);\n    background: linear-gradient(\n      250deg,\n      rgba(71, 126, 150, 1) 0%,\n      rgba(0, 179, 159, 1) 35%,\n      rgba(60, 73, 79, 1) 100%\n    );\n    h1 {\n      line-height: 10rem;\n      color: white;\n    }\n  }\n\n  .community-home-subtitle {\n    text-align: center;\n    padding-top: 3rem;\n    padding-bottom: 1.5rem;\n  }\n\n  #sign-off {\n    padding-bottom: 4rem;\n  }\n\n  table {\n    border-collapse: collapse;\n    width: 98%;\n    margin: 1rem 0 2rem 0;\n    .github-icon {\n      height: 1.7rem;\n      width: auto;\n      display: block;\n      margin-left: auto;\n      margin-right: auto;\n      filter: invert(",");\n    }\n    .site-icon {\n      height: 1.6rem;\n      width: auto;\n      display: block;\n      margin-left: auto;\n      margin-right: auto;\n    }\n    .inline {\n      display: inline;\n      vertical-align: bottom;\n    }\n    .smp-action {\n      filter: invert(",");\n    }\n  }\n\n  td,\n  th {\n    border: 0.05rem solid ",";\n    text-align: left;\n    padding: 0.5rem;\n    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);\n  }\n\n  .linkscol {\n    text-align: center;\n    width: 8%;\n  }\n\n  tbody:nth-child(even) {\n    background-color: ",';\n    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);\n  }\n\n  .codes {\n    width: 75%;\n    margin-top: -2rem;\n  }\n\n  .community-home-container {\n    padding: 1rem 0;\n    padding-bottom: 4rem;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: center;\n  }\n\n  p {\n    margin-top: 15px;\n  }\n\n  input[type="checkbox"] + label {\n    display: block;\n    margin: 0.2em;\n    cursor: pointer;\n    padding: 0.2em;\n  }\n\n  input[type="checkbox"] {\n    display: none;\n  }\n\n  input[type="checkbox"] + label:before {\n    content: url(\'data:image/svg+xml; utf8, <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="white" viewBox="0 4 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>\');\n    border: 0.1em solid #000;\n    border-radius: 0.2em;\n    display: inline-block;\n    width: 1.3em;\n    height: 1.3em;\n    padding-left: 0.2em;\n    padding-bottom: 0.3em;\n    margin-right: 0.5em;\n\n    margin-bottom: 0.15em;\n    vertical-align: bottom;\n    color: transparent;\n    background-color: white;\n  }\n\n  input[type="checkbox"] + label:active:before {\n    transform: scale(0);\n  }\n  rect {\n    fill: ',";\n    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);\n  }\n  path {\n    stroke: ",';\n    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);\n  }\n  svg {\n    color: "red";\n  }\n  input[type="checkbox"]:checked + label:before {\n    content: url(\'data:image/svg+xml; utf8, <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="black" viewBox="0 4 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>\');\n\n    background-color: ',";\n    border-color: ",';\n    color: #fff;\n    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);\n  }\n\n  input[type="checkbox"]:disabled + label:before {\n    transform: scale(1);\n    border-color: #aaa;\n  }\n\n  input[type="checkbox"]:checked:disabled + label:before {\n    transform: scale(1);\n    background-color: ',";\n    border-color: ",';\n    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);\n  }\n\n  .project-org-list {\n    a {\n      margin-right: 0.3rem;\n    }\n    img {\n      height: auto;\n      width: 1.6rem;\n      vertical-align: middle;\n    }\n  }\n\n  .project-description-icon {\n    width: 3%;\n    transform: translate(0, 25%);\n    margin: 0 0.3%;\n  }\n\n  .project-title-icon {\n    margin-left: "10%";\n    width: 4%;\n    transform: translate(0, 28%);\n  }\n\n  @media only screen and (max-width: 750px) {\n    .content > a:first-of-type > h2:first-of-type {\n      padding-top: 7rem;\n    }\n    .page-section {\n      margin-top: -2rem;\n      margin-left: 0;\n      padding: 1rem 2.5rem;\n\n      .table-container {\n        table {\n          width: 100%;\n          margin-left: 0;\n        }\n        overflow-x: scroll;\n      }\n\n      .table-container::-webkit-scrollbar {\n        display: none;\n      }\n    }\n\n    .codes {\n      width: 100%;\n      margin-top: -2rem;\n    }\n  }\n\n  @media only screen and (max-width: 475px) {\n    .page-header-section h1 {\n      padding: 0 1rem;\n      line-height: 3rem;\n      padding-top: 4rem;\n    }\n    .page-section {\n      margin-top: -2rem;\n      margin-left: 0rem;\n      padding: 1rem 1rem;\n    }\n    table {\n      margin-left: -1.5rem;\n    }\n    .frontendTable {\n      margin-left: -2.8rem;\n    }\n  }\n\n  @media only screen and (max-width: 1024px) {\n    .project-title-icon {\n      width: 5.5%;\n      transform: translate(0, 23%);\n    }\n    .project-description-icon {\n      width: 4%;\n    }\n  }\n\n  @media only screen and (max-width: 768px) {\n    .project-title-icon {\n      width: 8.5%;\n    }\n    .project-description-icon {\n      width: 7%;\n    }\n  }\n\n  @media only screen and (max-width: 425px) {\n    .project-title-icon {\n      width: 11%;\n      transform: translate(0, 25%);\n    }\n    .project-description-icon {\n      width: 8%;\n    }\n  }\n\n  @media only screen and (max-width: 375px) {\n    .project-title-icon {\n      width: 13%;\n      transform: translate(0, 20%);\n    }\n    .project-description-icon {\n      width: 10%;\n    }\n  }\n\n  .channels-list {\n    padding-left: 40px;\n  }\n\n  .channels-img {\n    // width: 40px;\n    height: 30px;\n  }\n\n  .channels-para {\n    display: flex;\n    align-items: center;\n  }\n\n  .newcomers-journey {\n    text-align: center;\n    display: flex;\n    align-items: center;\n    margin: 2.5rem 5rem 3rem 0rem;\n    @media only screen and (max-width: 992px) {\n      width: 100%;\n    }\n    h2 {\n      margin-bottom: 2rem;\n    }\n  }\n\n  .heading {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .heading-start {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    align-self: flex-end;\n    margin-right: 2rem;\n    margin-top: -2rem;\n    h5 {\n      font-size: 1.125rem;\n      font-weight: 400;\n      margin-right: 1rem;\n    }\n    img {\n      height: 3rem;\n      width: 4rem;\n      transition: 0.5s;\n    }\n    img:hover {\n      padding-left: 1rem;\n      transition: 0.5s;\n    }\n  }\n\n  .intra-page {\n    position: sticky;\n    top: 10rem;\n    right: 0rem;\n    margin-right: 1rem;\n    margin-top: 10rem;\n    padding-bottom: 5rem;\n    align-items: left;\n    justify-content: space-around;\n    display: flex;\n    flex-direction: column;\n    overflow: hidden;\n    .active {\n      font-weight: 5000;\n      color: ',";\n    }\n    ul {\n      list-style: none;\n      top: 3rem;\n    }\n    li {\n      padding-bottom: 0.5rem;\n      padding-top: 0.5rem;\n    }\n    @media only screen and (max-width: 900px) {\n      width: 0;\n      opacity: 0;\n      height: 0;\n      transition: none;\n      visibility: hidden;\n    }\n  }\n\n  .learn-more {\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n\n    .icon {\n      font-size: 0.8rem;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      color: ",";\n    }\n  }\n\n  .writing_program {\n    width: 90%;\n    @media only screen and (max-width: 900px) {\n      width: 100%;\n    }\n    .list {\n      padding: 1.875rem 0px;\n      table,\n      tr,\n      td {\n        border: none;\n      }\n      .text {\n        p {\n          color: ",";\n          transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);\n        }\n      }\n      .listed {\n        text-align: left;\n        .table {\n          .icon {\n            height: 2.5rem;\n            width: 2.5rem;\n            vertical-align: top;\n          }\n          .skill {\n            color: ",";\n            font-size: 16px;\n            padding: 0 0 1.25rem 1.8rem;\n            transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);\n            h4 {\n              font-weight: 600;\n            }\n          }\n        }\n      }\n    }\n    .content_list {\n      position: relative;\n      width: 100%;\n      margin-top: 1rem;\n      display: flex;\n      flex-wrap: wrap;\n    }\n    .content_type {\n      display: flex;\n      flex-direction: column;\n      background: ",";\n      /* box-shadow: 0px 0px ","\n        ","; */\n      transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);\n      &:hover {\n        box-shadow: 0px 0px 5px ",";\n      }\n      padding: 12% 6% 12% 6%;\n      height: 220px;\n      border-radius: 4%;\n      margin-bottom: 30px;\n      text-align: center;\n      h5 {\n        margin-bottom: auto;\n        margin-top: 0.5rem;\n        font-weight: 700;\n        color: ",";\n      }\n      p {\n        font-weight: 300;\n        color: ",";\n        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);\n      }\n      img {\n        height: 60px;\n        width: auto;\n      }\n    }\n    .process {\n      margin: 10px auto;\n      border-left: solid 2px ",';\n      padding: 0px 20px 0px 20px;\n      transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);\n    }\n    .process .item {\n      padding: 10px;\n      font-size: 16px;\n      line-height: 1.7;\n      position: relative;\n    }\n    .item::before {\n      content: "";\n      position: absolute;\n      width: 20px;\n      height: 20px;\n      display: block;\n      border: 3px solid ',";\n      border-radius: 50%;\n      background-color: ",";\n      top: 25px;\n      left: -32px;\n      transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);\n    }\n  }\n  /* repository overview  */\n  div.accessRequired {\n    font-size: small;\n    line-height: 0.9rem;\n    font-style: italic;\n  }\n\n  .filterBtns {\n    display: flex;\n    margin-bottom: 1.25rem;\n    border-bottom: 1px solid #bec2c5;\n    margin-top: 5rem;\n\n    button {\n      font-size: 1.25rem;\n      color: ",";\n      min-width: auto;\n      border: none;\n      border-bottom: 2px solid transparent;\n      border-radius: 0;\n      cursor: pointer;\n      padding: 0.5rem 2rem;\n      background: ",";\n      transition: all 0.2s ease-in;\n    }\n    .active {\n      color: ",";\n      border-bottom: 2px solid ",";\n    }\n  }\n\n  @media (max-width: 560px) {\n    .filterBtns {\n      overflow: hidden;\n      button {\n        padding: 0.5rem 1.5rem;\n        font-size: 18px;\n      }\n    }\n  }\n\n  @media (max-width: 420px) {\n    .filterBtns {\n      button {\n        margin-right: 0px;\n        font-size: 18px;\n        padding: 10px;\n      }\n    }\n  }\n\n  .main-content {\n    padding-top: 1rem;\n  }\n\n  .image-container {\n    margin-top: 0.5rem;\n    margin-bottom: 0.5rem;\n  }\n\n  .search-container {\n    display: flex;\n    justify-content: center;\n  }\n\n  .product_cards {\n    min-height: 100%;\n    margin: 2rem 0;\n  }\n\n  .product_cards h2 {\n    text-align: center;\n    font-size: 56px;\n    font-style: normal;\n    font-weight: 700;\n  }\n\n  .product_cards .card {\n    width: 400px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    border-radius: 20px;\n    background-color: ",";\n    padding: 2rem;\n  }\n  .logo {\n    max-height: 3rem;\n  }\n  .cards {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 1.5rem;\n    justify-content: space-evenly;\n  }\n\n  .card_head {\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 20px;\n    position: relative;\n  }\n\n  .card_head .title {\n    font-size: 32px;\n    font-weight: 700;\n    color: ",";\n  }\n\n  .card .text {\n    padding-top: 1rem;\n    padding-bottom: 2rem;\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 400;\n    color: ",";\n  }\n\n  .card {\n    box-shadow: 0px 2px 6px 0px ",";\n    transition: all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) 0s;\n\n      &:hover {\n        box-shadow: 0px 2px 15px 4px ",";\n        transform: scale(1.045);\n      }\n  }\n\n  \n  .card_bottom {\n    border-top: 2px solid #2c2c2c;\n    display: flex;\n    align-items: flex-end;\n    justify-content: space-between;\n    margin: 0;\n  }\n\n  .learn {\n    font-size: 1rem;\n    margin: 10px 0;\n    cursor: pointer;\n    color: ",";\n    &:hover {\n      border-bottom: 1px solid ",";\n    }\n  }\n  .btns Button {\n    margin: 20px 0px;\n    font-size: 16px;\n    margin-bottom: 0;\n  }\n  .iconss {\n    display: flex;\n    gap: 16px;\n    position: absolute;\n    right: 0;\n  }\n\n  @media (max-width: 968px) {\n    /* .cards {\n      flex-direction: column;\n      justify-content: center;\n      margin: auto;\n      align-items: center;\n    } */\n    .btn {\n      justify-content: center;\n    }\n\n    .card_head {\n      align-items: flex-start;\n    }\n    .product_cards {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n    }\n    .btns {\n      font-size: 16px;\n      flex-direction: row;\n    }\n  }\n  @media (max-width: 807px) {\n    .product_hero_text h1 {\n      font-size: 34px;\n    }\n    .product_hero_text p {\n      font-size: 17px;\n    }\n    .product_cards h2 {\n      font-size: 40px;\n    }\n  }\n  @media (max-width: 600px) {\n    .product_cards .card {\n      width: 440px;\n    }\n  }\n  @media (max-width: 509px) {\n    .product_cards .card {\n      width: 420px;\n    }\n  }\n  @media (max-width: 494px) {\n    .card_head .title {\n      padding: 10px;\n      font-size: 24px;\n    }\n    .product_hero_img img {\n      width: 100%;\n    }\n    /* .btn{\n      font-size: 12px;\n    } */\n  }\n  @media (max-width: 418px) {\n    .product_cards .card {\n      width: 100%;\n      padding: 1rem;\n      /* margin: 14px; */\n    }\n  }\n  @media (max-width: 354px) {\n    .product_hero_img img {\n      width: 100%;\n    }\n    .product_cards .card {\n      width: 280px;\n      padding: 16px;\n    }\n    .card_head {\n      margin: 0;\n      padding: 0;\n    }\n    /* .card_head .title {\n      padding: 0;\n      margin: 4px;\n      font-size: 16px;\n    } */\n    .btns {\n      scale: 0.8;\n    }\n    .card .text {\n      font-size: 14px;\n    }\n    .iconss img {\n      width: 20px;\n    }\n  }\n\n  .showcase {\n    border: 1px solid ",";\n    margin: 0.8rem 0 2.5rem 0;\n    border-radius: 10px;\n    .items {\n      width: 100%;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      padding: 5rem;\n      gap: 1rem;\n    }\n\n    .show-code {\n      border-top: 1px solid ",";\n      padding: 0.7rem 1rem;\n    }\n\n    .code {\n      font-size: 0.9rem;\n      overflow: auto;\n    }\n  }\n"],(n=>n.theme.text),(n=>n.theme.menuColor),(n=>n.theme.text),(n=>n.theme.text),(n=>n.theme.tertiaryColor),(n=>n.theme.secondaryLightColor),(n=>n.theme.primaryLightColorTwo),(n=>n.theme.secondaryLightColor),(n=>n.theme.meshInterfaceLogoFilter),(n=>n.theme.meshInterfaceLogoFilter),(n=>n.theme.primaryLightColor),(n=>n.theme.secondaryLightColorTwo),(n=>n.theme.grey313131ToGreenC9FCF6),(n=>n.theme.green00D3A9ToGreen00B39F),(n=>n.theme.keppelColor),(n=>n.theme.primaryLightColorTwo),(n=>n.theme.secondaryLightColor),(n=>n.theme.secondaryLightColor),(n=>n.theme.secondaryColor),(n=>n.theme.whiteToBlack),(n=>n.theme.tertiaryColor),(n=>n.theme.tertiaryColor),(n=>n.theme.grey212121ToWhite),(n=>n.theme.projectShadowsize),(n=>n.theme.green00D3A9ToGreyE6E6E6),(n=>n.theme.primaryColor),(n=>n.theme.secondaryColor),(n=>n.theme.text),(n=>n.theme.tertiaryColor),(n=>n.theme.tertiaryColor),(n=>n.theme.secondaryColor),(n=>n.theme.secondaryColor),(n=>n.theme.body),(n=>n.theme.text),(n=>n.theme.text),(n=>n.theme.grey212121ToGreyF0F0F0),(n=>n.theme.text),(n=>n.theme.whiteToBlack),(n=>n.theme.green00D3A9ToBlackTwo),(n=>n.theme.whiteNineToBlackOne),(n=>n.theme.whiteToBlack),(n=>n.theme.secondaryColor),(n=>n.theme.grey212121ToGreyF0F0F0),(n=>n.theme.grey212121ToGreyF0F0F0));e.A=a}}]);
//# sourceMappingURL=f2d3fa1f41da25814afb1df9729912a2ed872a21-4c69e2df2404ed40c68a.js.map