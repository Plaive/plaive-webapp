(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{480:function(e,t,r){"use strict";r.r(t);r(50);var n=r(16),o={layout:"auth",head:function(){return{title:"Reset Password - Plaive"}},transition:{name:"page",mode:"out-in"},data:function(){return{loading:!1,email:this.$route.query.email,code:this.$route.query.code,success:!1,error:!1}},methods:{confirm:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,e.success=!1,e.error=!1,t.prev=3,t.next=6,e.$axios.$post("/auth/confirm-signup",{email:e.email,code:e.code});case 6:e.success=!0,t.next=12;break;case 9:t.prev=9,t.t0=t.catch(3),e.error=!0;case 12:e.loading=!1;case 13:case"end":return t.stop()}}),t,null,[[3,9]])})))()}}},l=r(13),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e._m(0),e._v(" "),r("form",{on:{submit:function(t){return t.preventDefault(),e.confirm(t)}}},[0==e.success?r("div",{staticClass:"form-group"},[r("label",[e._v("E-mail address")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]):e._e(),e._v(" "),0==e.success?r("div",{staticClass:"form-group"},[r("label",[e._v("Code")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.code,expression:"code"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.code},on:{input:function(t){t.target.composing||(e.code=t.target.value)}}})]):e._e(),e._v(" "),1==e.error?r("div",{staticClass:"alert alert-danger mt-4",attrs:{role:"alert"}},[e._v("\n      An error has occurred\n    ")]):e._e(),e._v(" "),1==e.success?r("div",{staticClass:"alert mt-4",attrs:{role:"alert"}},[e._v("\n      Your account has been verified. You can "),r("nuxt-link",{attrs:{to:"/signin"}},[e._v("Sign In")]),e._v(" now.\n    ")],1):e._e(),e._v(" "),0==e.success?r("div",{staticClass:"mt-4"},[r("button",{staticClass:"btn btn-outline-primary btn-block btn-lg",attrs:{type:"submit",disabled:!0===e.loading}},[!0===this.loading?r("b-spinner",{attrs:{type:"grow",label:"Loading...",variant:"success",small:""}}):r("span",[e._v("Confirm")])],1)]):e._e()])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"text-center mb-5 login-main-left-header pt-4"},[t("img",{staticClass:"img-fluid",staticStyle:{"max-width":"125px"},attrs:{src:"//via.placeholder.com/500x500?text=PLAIVE_LOGO_SQUARE",alt:"LOGO"}}),this._v(" "),t("h5",{staticClass:"mt-3 mb-3"},[this._v("Verify Email")]),this._v(" "),t("p",[this._v("It is a long established fact that a reader "),t("br"),this._v(" will be distracted by the readable.")])])}],!1,null,null,null);t.default=component.exports}}]);