import"./vue.6a527b08.js";import{r as A,s as F,t as P}from"./element-plus.5ff99370.js";import{e as D,p as M,A as T}from"./element-plus-generator.d6acc345.js";import{C as I,r as b,o as r,c as i,Q as y,ai as R,a1 as x,u as p,O as d,M as C,a as _,a2 as v,S as g,J as f,K as E,an as q,ao as z,ap as K}from"./@vue.f2db5288.js";import"./dayjs.46f97078.js";import"./lodash-es.e768653c.js";import"./@vueuse.d4a6d123.js";import"./@element-plus.fb30b6a4.js";import"./@ctrl.fd318bfa.js";import"./async-validator.6fbb5f2f.js";import"./@popperjs.36402333.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&u(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function u(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const U=(s,l)=>{const n=s.__vccOpts||s;for(const[u,e]of l)n[u]=e;return n},h=s=>(q("data-v-12f74786"),s=s(),z(),s),J={class:"container"},Q={class:"examples"},j={key:0,class:"tag-container no-wrap"},G=h(()=>_("div",null,"key",-1)),H={key:1,class:"tag-container no-wrap"},W=h(()=>_("div",null,"\u6B63\u5219",-1)),X={key:2,class:"tag-container"},Y=h(()=>_("div",null,"\u4F8B\u5B50",-1)),Z={key:3,class:"tag-container"},ee=h(()=>_("div",null,"\u53CD\u4F8B",-1)),oe=I({name:"\u6B63\u5219\u5217\u8868"}),te=I({...oe,setup(s){let l=b({}),n=b([]);D.forEach((o,c)=>{n.value.push({type:"slot",formItem:{prop:o.key,label:o.title,rules:{require:!0,trigger:"change",validator:o.rule}},control:{...o}})});const u=M.getRules(n.value);function e(o,c){c?l.value[c]=o:(navigator.clipboard.writeText(o),P.success(`\u5DF2\u590D\u5236:${o}`))}return(o,c)=>{const $=A,m=F;return r(),i("div",J,[y(p(T),{"label-position":"top",ref:"formRef",model:p(l),formOption:p(n),rules:p(u)},R({_:2},[x(p(n),(t,se)=>({name:t.formItem.prop,fn:d(B=>{var O,L,N,V;return[(r(),C($,{modelValue:B.form[t.formItem.prop],"onUpdate:modelValue":a=>B.form[t.formItem.prop]=a,key:t.formItem.prop},null,8,["modelValue","onUpdate:modelValue"])),_("div",Q,[(O=t.control)!=null&&O.key?(r(),i("div",j,[G,y(m,{onClick:a=>e(t.control.key)},{default:d(()=>[v(g(t.control.key),1)]),_:2},1032,["onClick"])])):f("v-if",!0),(L=t.control)!=null&&L.rule?(r(),i("div",H,[W,y(m,{onClick:a=>e(t.control.rule)},{default:d(()=>[v(g(t.control.rule),1)]),_:2},1032,["onClick"])])):f("v-if",!0),(N=t.control)!=null&&N.examples?(r(),i("div",X,[Y,(r(!0),i(E,null,x(t.control.examples,(a,k)=>(r(),C(m,{type:"success",onClick:w=>e(a,t.formItem.prop),key:k},{default:d(()=>[v(g(a),1)]),_:2},1032,["onClick"]))),128))])):f("v-if",!0),(V=t.control)!=null&&V.counterExamples?(r(),i("div",Z,[ee,(r(!0),i(E,null,x(t.control.counterExamples,(a,k)=>(r(),C(m,{type:"danger",onClick:w=>e(a,t.formItem.prop),key:k},{default:d(()=>[v(g(a),1)]),_:2},1032,["onClick"]))),128))])):f("v-if",!0)])]})}))]),1032,["model","formOption","rules"])])}}}),re=U(te,[["__scopeId","data-v-12f74786"]]),ne=I({__name:"App",setup(s){return(l,n)=>(r(),i(E,null,[f(` <ElConfigProvider :locale="zhCn">\r
    <Layout />\r
  </ElConfigProvider> `),y(re)],2112))}}),S=K(ne);S.config.globalProperties.$ELEMENT={size:"mini"};S.mount("#app");