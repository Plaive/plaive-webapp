(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{503:function(t,e,r){"use strict";r.r(e);r(34);var n=r(11),o={layout:"auth",head:function(){return{title:"Confirm Signup - Plaive"}},transition:{name:"page",mode:"out-in"},data:function(){return{loading:!1,email:this.$route.query.email,code:this.$route.query.code,success:!1,error:!1}},methods:{confirm:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,t.success=!1,t.error=!1,e.prev=3,e.next=6,t.$axios.$post("/auth/confirm-signup",{email:t.email,code:t.code});case 6:t.success=!0,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(3),t.error=!0;case 12:t.loading=!1;case 13:case"end":return e.stop()}}),e,null,[[3,9]])})))()}}},l=r(19),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._m(0),t._v(" "),r("form",{on:{submit:function(e){return e.preventDefault(),t.confirm(e)}}},[0==t.success?r("div",{staticClass:"form-group"},[r("label",[t._v("E-mail address")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]):t._e(),t._v(" "),0==t.success?r("div",{staticClass:"form-group"},[r("label",[t._v("Code")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.code,expression:"code"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.code},on:{input:function(e){e.target.composing||(t.code=e.target.value)}}})]):t._e(),t._v(" "),1==t.error?r("div",{staticClass:"alert alert-danger mt-4",attrs:{role:"alert"}},[t._v("\n      An error has occurred\n    ")]):t._e(),t._v(" "),1==t.success?r("div",{staticClass:"alert mt-4",attrs:{role:"alert"}},[t._v("\n      Your account has been verified. You can "),r("nuxt-link",{attrs:{to:"/signin"}},[t._v("Sign In")]),t._v(" now.\n    ")],1):t._e(),t._v(" "),0==t.success?r("div",{staticClass:"mt-4"},[r("button",{staticClass:"btn btn-outline-primary btn-block btn-lg",attrs:{type:"submit",disabled:!0===t.loading}},[!0===this.loading?r("b-spinner",{attrs:{type:"grow",label:"Loading...",small:""}}):r("span",[t._v(t._s(t.$t("confirm")))])],1)]):t._e()])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text-center mb-5 login-main-left-header pt-4"},[e("img",{staticClass:"img-fluid",staticStyle:{"max-width":"125px"},attrs:{src:"//via.placeholder.com/500x500?text=PLAIVE_LOGO_SQUARE",alt:"LOGO"}}),this._v(" "),e("h5",{staticClass:"mt-3 mb-3"},[this._v("Verify Email")]),this._v(" "),e("p",[this._v("It is a long established fact that a reader "),e("br"),this._v(" will be distracted by the readable.")])])}],!1,null,null,null);e.default=component.exports}}]);