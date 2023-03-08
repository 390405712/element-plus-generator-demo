import"./vue.6a527b08.js";import{E as G,a as b,b as U,c as M,d as H,e as q,f as Y,g as T,h as S,i as O,j as J,k as j,l as L,m as Q,n as W,o as K,p as X,q as ee,r as le}from"./element-plus.5ff99370.js";import{C as te,r as V,Q as a,E as i,K as v,a2 as y,ak as ae,o as w,c as $,a as R}from"./@vue.f2db5288.js";const re=(o,u,d,m)=>{if(!Array.isArray(o))return[];const p=[];let l=[];return m&&(l=Object.keys(m)),o.forEach(n=>{let f={label:typeof n=="string"?n:n[u],value:typeof n=="string"?n:n[d]};m&&l.forEach(x=>{f[x]=n[x]}),p.push(f)}),p},B=(o,u)=>o.filter(d=>d.formItem.prop===u)[0]||{type:"input",formItem:{prop:"",label:""}},oe=(o,u,d)=>{var m;const p={input:"\u8F93\u5165","input-number":"\u8F93\u5165",select:"\u9009\u62E9","tree-select":"\u9009\u62E9",cascader:"\u9009\u62E9",radio:"\u9009\u62E9","radio-button":"\u9009\u62E9",checkbox:"\u9009\u62E9","checkbox-button":"\u9009\u62E9",datetime:"\u9009\u62E9",time:"\u9009\u62E9",switch:"\u9009\u62E9",upload:"\u4E0A\u4F20"},l=B(o.formOption,o.field);if(Array.isArray(u)&&u.length===0)return Promise.reject(`\u8BF7${p[l.type]||"\u5B8C\u5584"}${l.formItem.label}`);if(!u)return Promise.reject(`\u8BF7${p[l.type]||"\u5B8C\u5584"}${l.formItem.label}`);if(!((m=l==null?void 0:l.formItem)!=null&&m.rules))return Promise.resolve();if(typeof l.formItem.rules.validator=="function")l.formItem.rules.validator(o,u).then(()=>d()).catch(n=>{var x;var f;return d(new Error(n!=="err"?n:(x=(f=l==null?void 0:l.formItem.rules)==null?void 0:f.message)!=null?x:""))});else return l.formItem.rules.validator.test(u)?Promise.resolve():Promise.reject(l.formItem.rules.message||"\u683C\u5F0F\u6709\u8BEF")},ue=(o,u=[])=>{let d={};return o.forEach(m=>{var f;var p,l;const n=typeof m=="string"?m:m.formItem.prop;u.includes(n)||(d[n]=[{required:!0,validator:oe,trigger:(f=(l=(p=m.formItem)==null?void 0:p.rules)==null?void 0:l.trigger)!=null?f:"blur",formOption:o}])}),d},me={checkIphoneNum:(o,u)=>u?/(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/.test(u)?Promise.resolve():Promise.reject("\u624B\u673A\u683C\u5F0F\u6709\u8BEF"):Promise.reject("\u8BF7\u8F93\u5165\u624B\u673A\u53F7")},Ce=Object.freeze(Object.defineProperty({__proto__:null,CommonValidator:me,getLabel:B,getOption:re,getRules:ue},Symbol.toStringTag,{value:"Module"}));(function(){try{var o=document.createElement("style");o.appendChild(document.createTextNode(".FormGenerator.FormGeneratorSearch{display:flex;justify-content:flex-start;align-items:flex-start;flex-wrap:wrap;flex-direction:row;gap:15px 10px}.FormGenerator.FormGeneratorSearch.el-form--inline .el-form-item{width:calc(25% - 8px);margin:0}.FormGenerator.FormGeneratorSearch.el-form--inline .el-form-item.btnItem{margin:0}.FormGenerator.FormGeneratorSearch.el-form--inline .el-form-item.btnItem .el-form-item__label-wrap{display:none}.FormGenerator.FormGeneratorSearch.el-form--inline .el-form-item.btnItem .el-form-item__content{flex-wrap:nowrap}.FormGenerator.FormGeneratorDialog.el-form--default:not(.el-form--inline){padding-bottom:45px}.FormGenerator.FormGeneratorDialog.el-form--default:not(.el-form--inline) .btnItem{margin:0;height:64px;position:absolute;bottom:0;right:0;width:100%;box-shadow:1px 2px 10px #9ab7ff80;z-index:1;z-index:11;padding:0 16px;box-sizing:border-box}.FormGenerator.FormGeneratorDialog.el-form--default:not(.el-form--inline) .btnItem .el-form-item__content{display:flex;justify-content:flex-end;align-items:center;flex-wrap:nowrap}.FormGenerator.FormGeneratorDialog.el-form--default:not(.el-form--inline) .el-form-item__content>div{width:100%}.FormGenerator .searchItem{flex-grow:1;flex-shrink:0}.FormGenerator .searchItem .el-form-item__content{justify-content:flex-end}.FormGenerator .expandBtn i{transition:all .3s}.FormGenerator .expandBtn.down i{transform:rotate(180deg)}.FormGenerator .el-select,.FormGenerator .el-input,.FormGenerator .el-cascader,.FormGenerator .el-date-editor.el-input,.FormGenerator .el-date-editor.el-input__wrapper,.TableGenerator .el-scrollbar__view{width:100%}")),document.head.appendChild(o)}catch(u){console.error("vite-plugin-css-injected-by-js",u)}})();/*! Element Plus Icons Vue v2.0.10 */var I=(o,u)=>{let d=o.__vccOpts||o;for(let[m,p]of u)d[m]=p;return d},ie={name:"ArrowUp"},ne={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},de=R("path",{fill:"currentColor",d:"m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0z"},null,-1),pe=[de];function se(o,u,d,m,p,l){return w(),$("svg",ne,pe)}var fe=I(ie,[["render",se],["__file","arrow-up.vue"]]),ce={name:"Refresh"},xe={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},Ae=R("path",{fill:"currentColor",d:"M771.776 794.88A384 384 0 0 1 128 512h64a320 320 0 0 0 555.712 216.448H654.72a32 32 0 1 1 0-64h149.056a32 32 0 0 1 32 32v148.928a32 32 0 1 1-64 0v-50.56zM276.288 295.616h92.992a32 32 0 0 1 0 64H220.16a32 32 0 0 1-32-32V178.56a32 32 0 0 1 64 0v50.56A384 384 0 0 1 896.128 512h-64a320 320 0 0 0-555.776-216.384z"},null,-1),ge=[Ae];function Fe(o,u,d,m,p,l){return w(),$("svg",xe,ge)}var Ee=I(ce,[["render",Fe],["__file","refresh.vue"]]),be={name:"Search"},ve={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},ye=R("path",{fill:"currentColor",d:"m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704z"},null,-1),he=[ye];function ke(o,u,d,m,p,l){return w(),$("svg",ve,he)}var De=I(be,[["render",ke],["__file","search.vue"]]);function we(o){return typeof o=="function"||Object.prototype.toString.call(o)==="[object Object]"&&!ae(o)}const Pe=te({name:"FormGenerator",setup(o,{expose:u,attrs:d,slots:m,emit:p}){const l=d,n=V(),f=V(!1),x=isNaN(l.column)?4:l.column>=4?l.column:4,h={submit:()=>{n.value.validate(F=>{F&&p("submit")})},reset:()=>{n.value.resetFields(),p("submit","init")}};function C(F){f.value=F,l.formOption.forEach((k,D)=>{D>x-2&&(k.show=F)})}return l.formOption.length>=x-2&&(l==null?void 0:l.type)==="search"&&C(!1),u(()=>({...n.value,...h})),()=>{function F(){let e={...l};return delete e.model,delete e.formOption,l.formOption.forEach(s=>{var c,A,g;(c=s==null?void 0:s.formItem)!=null&&c.rules&&!((g=(A=s==null?void 0:s.formItem)==null?void 0:A.rules)!=null&&g.hasOwnProperty("trigger"))&&(s.formItem.rules.trigger="blur")}),a(U,i({class:`FormGenerator ${(l==null?void 0:l.type)==="search"?"FormGeneratorSearch":""} ${(l==null?void 0:l.type)==="dialog"?"FormGeneratorDialog":""}`,inline:(l==null?void 0:l.type)==="search","validate-on-rule-change":!1,"label-width":l.labelWidth||"auto"},e,{ref:n}),{default:()=>[l.formOption.map(s=>{let c;if(!(s.hasOwnProperty("show")&&s.show===!1))return a(G,i(s.formItem,{key:s.formItem.prop}),we(c=k(s))?c:{default:()=>[c]})}),e.disabled===!0||e.noFooter||!e.onSubmit?"":a(G,{class:`btnItem ${f.value?"searchItem":""}`},{default:()=>m!=null&&m.default?a(v,null,[m.default()[0].children]):(l==null?void 0:l.type)==="search"?D():a(v,null,[(l==null?void 0:l.type)==="dialog"?a(b,{onClick:s=>{var c,A;function g(E){return E.parentElement.className!=="el-dialog"?g(E.parentElement):E.parentElement}(A=(c=g(s.target).querySelector(".el-dialog__headerbtn"))==null?void 0:c.click)==null||A.call(c)}},{default:()=>[y("\u53D6\u6D88")]}):"",a(b,{type:"primary",onClick:h.submit},{default:()=>[y("\u786E\u5B9A")]})]),label:()=>""})]})}function k(e){var s,c,A,g,E,P,N,z,Z;switch(e.type){case"input":return a(le,i({clearable:!0,maxlength:30},e==null?void 0:e.control,{modelValue:l.model[e.formItem.prop],"onUpdate:modelValue":t=>l.model[e.formItem.prop]=t}),{...(s=e==null?void 0:e.control)==null?void 0:s.slot});case"input-number":return a(ee,i({min:0,max:100},e==null?void 0:e.control,{modelValue:l.model[e.formItem.prop],"onUpdate:modelValue":t=>l.model[e.formItem.prop]=t}),null);case"select":return a(X,i({clearable:!0},e==null?void 0:e.control,{modelValue:l.model[e.formItem.prop],"onUpdate:modelValue":t=>l.model[e.formItem.prop]=t}),{default:()=>{var t;return[(t=e==null?void 0:e.control)==null?void 0:t.option.map(r=>a(K,i(r,{key:r.value}),{...r==null?void 0:r.slot}))]}});case"tree-select":return a(W,i({clearable:!0},e==null?void 0:e.control,{modelValue:l.model[e.formItem.prop],"onUpdate:modelValue":t=>l.model[e.formItem.prop]=t}),{...(c=e==null?void 0:e.control)==null?void 0:c.slot});case"cascader":return a(Q,i(e==null?void 0:e.control,{modelValue:l.model[e.formItem.prop],"onUpdate:modelValue":t=>l.model[e.formItem.prop]=t}),{...(A=e==null?void 0:e.control)==null?void 0:A.slot});case"radio":return a(j,i(e==null?void 0:e.control,{modelValue:l.model[e.formItem.prop],"onUpdate:modelValue":t=>l.model[e.formItem.prop]=t}),{default:()=>{var t;return[(t=e==null?void 0:e.control)==null?void 0:t.option.map(r=>a(L,i(r,{label:r.value,key:r.label}),{default:()=>[r.label],...r==null?void 0:r.slot}))]}});case"radio-button":return a(j,i(e==null?void 0:e.control,{modelValue:l.model[e.formItem.prop],"onUpdate:modelValue":t=>l.model[e.formItem.prop]=t}),{default:()=>{var t;return[(t=e==null?void 0:e.control)==null?void 0:t.option.map(r=>a(J,i(r,{label:r.value,key:r.label}),{default:()=>[r.label],...r==null?void 0:r.slot}))]}});case"checkbox":return a(S,i(e==null?void 0:e.control,{modelValue:l.model[e.formItem.prop],"onUpdate:modelValue":t=>l.model[e.formItem.prop]=t}),{default:()=>{var t;return[(t=e==null?void 0:e.control)==null?void 0:t.option.map(r=>a(O,i(r,{label:r.value,key:r.label}),{default:()=>[r.label],...r==null?void 0:r.slot}))]}});case"checkbox-button":return a(S,i(e==null?void 0:e.control,{modelValue:l.model[e.formItem.prop],"onUpdate:modelValue":t=>l.model[e.formItem.prop]=t}),{default:()=>{var t;return[(t=e==null?void 0:e.control)==null?void 0:t.option.map(r=>a(T,i(r,{label:r.value,key:r.label}),{default:()=>[r.label],...r==null?void 0:r.slot}))]}});case"datetime":const _={datetimerange:"YYYY-MM-DD hh:mm:ss",daterange:"YYYY-MM-DD",datetime:"YYYY-MM-DD hh:mm:ss",date:"YYYY-MM-DD"}[((g=e==null?void 0:e.control)==null?void 0:g.type)||"date"];return a(Y,i({clearable:!0,format:_,"value-format":_},e==null?void 0:e.control,{modelValue:l.model[e.formItem.prop],"onUpdate:modelValue":t=>l.model[e.formItem.prop]=t}),{...(E=e==null?void 0:e.control)==null?void 0:E.slot});case"time":return a(q,i({clearable:!0},e==null?void 0:e.control,{modelValue:l.model[e.formItem.prop],"onUpdate:modelValue":t=>l.model[e.formItem.prop]=t}),{...(P=e==null?void 0:e.control)==null?void 0:P.slot});case"switch":return a(H,i(e==null?void 0:e.control,{modelValue:l.model[e.formItem.prop],"onUpdate:modelValue":t=>l.model[e.formItem.prop]=t}),{...(N=e==null?void 0:e.control)==null?void 0:N.slot});case"upload":return a(M,i(e==null?void 0:e.control,{"file-list":l.model[e.formItem.prop],"onUpdate:file-list":t=>l.model[e.formItem.prop]=t}),{default:()=>l.disabled?"":a(b,{type:"primary"},{default:()=>[y("\u4E0A\u4F20\u6587\u4EF6")]}),...(z=e==null?void 0:e.control)==null?void 0:z.slot});case"txt":return a(v,null,[l.model[e.formItem.prop]]);case"slot":return a(v,null,[(Z=m[e.formItem.prop])==null?void 0:Z.call(m,{form:l.model,data:l.model[e.formItem.prop]})])}}function D(){return a(v,null,[a(b,{type:"primary",onClick:h.submit,icon:De},{default:()=>[y("\u641C\u7D22")]}),a(b,{onClick:h.reset,icon:Ee},{default:()=>[y("\u91CD\u7F6E")]}),l.type==="search"&&l.formOption.length>x-1?a(v,null,[a(b,{text:!0,type:"primary",class:`expandBtn ${f.value?"up":"down"}`,onClick:()=>{C(!f.value)},icon:fe},{default:()=>[f.value?"\u6536\u8D77":"\u5C55\u5F00"]})]):""])}return F()}}}),Ne=[{key:"RegExpTrain",title:"\u706B\u8F66\u8F66\u6B21",rule:/^[GCDZTSPKXLY1-9]\d{1,4}$/,examples:["G1868","D102","D9","Z5","Z24","Z17"]},{key:"RegExpIMEI",title:"\u624B\u673A\u673A\u8EAB\u7801(IMEI)",rule:/^\d{15,17}$/,examples:["123456789012345","1234567890123456","12345678901234567"]},{key:"RegExpIP",title:"\u5FC5\u987B\u5E26\u7AEF\u53E3\u53F7\u7684\u7F51\u5740(\u6216ip)",rule:/^((ht|f)tps?:\/\/)?[\w-]+(\.[\w-]+)+:\d{1,5}\/?$/,examples:["https://www.qq.com:8080","127.0.0.1:5050","baidu.com:8001","http://192.168.1.1:9090"],counterExamples:["192.168.1.1","https://www.jd.com"]},{key:"RegExpURL",title:"\u7F51\u5740(URL)",rule:/^(((ht|f)tps?):\/\/)?([^!@#$%^&*?.\s-]([^!@#$%^&*?.\s]{0,63}[^!@#$%^&*?.\s])?\.)+[a-z]{2,6}\/?/,examples:["www.qq.com","https://vuejs.org/v2/api/#v-model","www.qq.99","//www.qq.com","www.\u817E\u8BAF.cs","ftp://baidu.qq","http://baidu.com","https://www.amap.com/search?id=BV10060895&city=420111&geoobj=113.207951%7C29.992557%7C115.785782%7C31.204369&query_type=IDQ&query=%E5%85%89%E8%B0%B7%E5%B9%BF%E5%9C%BA(%E5%9C%B0%E9%93%81%E7%AB%99)&zoom=10.15","360.com:8080/vue/#/a=1&b=2"],counterExamples:["...."]},{key:"RegExpSocialCreditCodeStrict",title:"\u7EDF\u4E00\u793E\u4F1A\u4FE1\u7528\u4EE3\u7801",rule:/^[0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}$/,examples:["91230184MA1BUFLT44","92371000MA3MXH0E3W"]},{key:"RegExpSocialCreditCode",title:"\u7EDF\u4E00\u793E\u4F1A\u4FE1\u7528\u4EE3\u7801(\u5BBD\u677E\u5339\u914D)(15\u4F4D/18\u4F4D/20\u4F4D\u6570\u5B57/\u5B57\u6BCD)",rule:/^(([0-9A-Za-z]{15})|([0-9A-Za-z]{18})|([0-9A-Za-z]{20}))$/,examples:["91110108772551611J","911101085923662400"]},{key:"RegExpThunder",title:"\u8FC5\u96F7\u94FE\u63A5",rule:/^thunderx?:\/\/[a-zA-Z\d]+=$/,examples:["thunder://QUEsICdtYWduZXQ6P3h0PXVybjpidGloOjBCQTE0RTUxRkUwNjU1RjE0Qzc4NjE4RjY4NDY0QjZFNTEyNjcyOUMnWlo="]},{key:"RegExpEd2k",title:"ed2k\u94FE\u63A5(\u5BBD\u677E\u5339\u914D)",rule:/^ed2k:\/\/\|file\|.+\|\/$/,examples:["ed2k://|file|%E5%AF%84%E7%94%9F%E8%99%AB.PARASITE.2019.HD-1080p.X264.AAC-UUMp4(ED2000.COM).mp4|2501554832|C0B93E0879C6071CBED732C20CE577A3|h=5HTKZPQFYRKORN52I3M7GQ4QQCIHFIBV|/"]},{key:"RegExpMagnet",title:"\u78C1\u529B\u94FE\u63A5(\u5BBD\u677E\u5339\u914D)",rule:/^magnet:\?xt=urn:btih:[0-9a-fA-F]{40,}.*$/,examples:["magnet:?xt=urn:btih:40A89A6F4FB1498A98087109D012A9A851FBE0FC"]},{key:"RegExpSubNet",title:"\u5B50\u7F51\u63A9\u7801(\u4E0D\u5305\u542B 0.0.0.0)",rule:/^(254|252|248|240|224|192|128)\.0\.0\.0|255\.(254|252|248|240|224|192|128|0)\.0\.0|255\.255\.(254|252|248|240|224|192|128|0)\.0|255\.255\.255\.(255|254|252|248|240|224|192|128|0)$/,examples:["255.255.255.0","255.255.255.255","255.240.0.0"]},{key:"RegExpLinuxHiddenDirPath",title:'linux"\u9690\u85CF\u6587\u4EF6"\u8DEF\u5F84',rule:/^\/(?:[^/]+\/)*\.[^/]*/,examples:["/usr/ad/.dd","/root/.gitignore","/.gitignore"]},{key:"RegExpLinuxDirPath",title:"linux\u6587\u4EF6\u5939\u8DEF\u5F84",rule:/^\/(?:[^/]+\/)*$/,examples:["/usr/ad/dd/","/","/root/","/ a a / a / a a /"]},{key:"RegExpLinuxFilePath",title:"linux\u6587\u4EF6\u8DEF\u5F84",rule:/^\/(?:[^/]+\/)*[^/]+$/,examples:["/root/b.ts","/root/abc"]},{key:"RegExpWindowsDirPath",title:'window"\u6587\u4EF6\u5939"\u8DEF\u5F84',rule:/^[a-zA-Z]:\\(?:\w+\\?)*$/,examples:["C:\\Users\\Administrator\\Desktop","e:\\m\\"]},{key:"RegExpWindowsFilePath",title:'window\u4E0B"\u6587\u4EF6"\u8DEF\u5F84',rule:/^[a-zA-Z]:\\(?:\w+\\)*\w+\.\w+$/,examples:["C:\\Users\\Administrator\\Desktop\\qq.link","e:\\m\\vscode.exe"]},{key:"RegExpStockA",title:"\u80A1\u7968\u4EE3\u7801(A\u80A1)",rule:/^(s[hz]|S[HZ])(000[\d]{3}|002[\d]{3}|300[\d]{3}|600[\d]{3}|60[\d]{4})$/,examples:["sz000858","SZ002136","sz300675","SH600600","sh601155"]},{key:"RegExpGrade",title:"\u5927\u4E8E\u7B49\u4E8E0, \u5C0F\u4E8E\u7B49\u4E8E150, \u652F\u6301\u5C0F\u6570\u4F4D\u51FA\u73B05, \u5982145.5, \u7528\u4E8E\u5224\u65AD\u8003\u5377\u5206\u6570",rule:/^150$|^(?:\d|[1-9]\d|1[0-4]\d)(?:\.5)?$/,examples:[150,100.5]},{key:"RegExpHTMLAnnotation",title:"html\u6CE8\u91CA",rule:/<!--[\s\S]*?-->/g,examples:['<!--<div class="_bubble"></div>--><div>chenguzhen87</div><div class="_bubble"></div>-->']},{key:"RegExpMD5",title:"md5\u683C\u5F0F(32\u4F4D)",rule:/^[a-fA-F0-9]{32}$/,examples:["21fe181c5bfc16306a6828c1f7b762e8"]},{key:"RegExpUuid",title:"GUID/UUID",rule:/^[a-f\d]{4}(?:[a-f\d]{4}-){4}[a-f\d]{12}$/i,examples:["e155518c-ca1b-443c-9be9-fe90fdab7345","41E3DAF5-6E37-4BCC-9F8E-0D9521E2AA8D","00000000-0000-0000-0000-000000000000"]},{key:"RegExpVersion",title:"\u7248\u672C\u53F7(version)\u683C\u5F0F\u5FC5\u987B\u4E3AX.Y.Z",rule:/^\d+(?:\.\d+){2}$/,examples:["16.3.10"]},{key:"RegExpVideoUrlPath",title:"\u89C6\u9891(video)\u94FE\u63A5\u5730\u5740\uFF08\u89C6\u9891\u683C\u5F0F\u53EF\u6309\u9700\u589E\u5220\uFF09",rule:/^https?:\/\/(.+\/)+.+(\.(swf|avi|flv|mpg|rm|mov|wav|asf|3gp|mkv|rmvb|mp4))$/i,examples:["http://www.abc.com/video/wc.avi"]},{key:"RegExpImageUrlPath",title:"\u56FE\u7247(image)\u94FE\u63A5\u5730\u5740\uFF08\u56FE\u7247\u683C\u5F0F\u53EF\u6309\u9700\u589E\u5220\uFF09",rule:/^https?:\/\/(.+\/)+.+(\.(gif|png|jpg|jpeg|webp|svg|psd|bmp|tif))$/i,examples:["https://www.abc.com/logo.png","http://www.abc.com/logo.png"]},{key:"RegExp24Time",title:"24\u5C0F\u65F6\u5236\u65F6\u95F4\uFF08HH:mm:ss\uFF09",rule:/^(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d$/,examples:["23:34:55"]},{key:"RegExp12Time",title:"12\u5C0F\u65F6\u5236\u65F6\u95F4\uFF08hh:mm:ss\uFF09",rule:/^(?:1[0-2]|0?[1-9]):[0-5]\d:[0-5]\d$/,examples:["11:34:55"],counterExamples:["23:34:55"]},{key:"RegExpBase64",title:"base64\u683C\u5F0F",rule:/^\s*data:(?:[a-z]+\/[a-z0-9-+.]+(?:;[a-z-]+=[a-z0-9-]+)?)?(?:;base64)?,([a-z0-9!$&',()*+;=\-._~:@/?%\s]*?)\s*$/i,examples:["data:image/gif;base64,xxxx=="]},{key:"RegExpAmount",title:"\u6570\u5B57/\u8D27\u5E01\u91D1\u989D\uFF08\u652F\u6301\u8D1F\u6570\u3001\u5343\u5206\u4F4D\u5206\u9694\u7B26\uFF09",rule:/^-?\d{1,3}(,\d{3})*(\.\d{1,2})?$/,examples:[100,-.99,3,234.32,-1,900,235.09,"12,345,678.90"]},{key:"RegExpCardNumber",title:"\u94F6\u884C\u5361\u53F7\uFF0810\u523030\u4F4D, \u8986\u76D6\u5BF9\u516C/\u79C1\u8D26\u6237, \u53C2\u8003[\u5FAE\u4FE1\u652F\u4ED8](https://pay.weixin.qq.com/wiki/doc/api/xiaowei.php?chapter=22_1)\uFF09",rule:/^[1-9]\d{9,29}$/,examples:[6234567890,6222026006705354e3]},{key:"RegExpCNName",title:"\u4E2D\u6587\u59D3\u540D",rule:/^(?:[\u4e00-\u9fa5·]{2,16})$/,examples:["\u845B\u4E8C\u86CB","\u51EF\u6587\xB7\u675C\u5170\u7279","\u5FB7\u514B\xB7\u7EF4\u5C14\u7EB3\xB7\u8BFA\u7EF4\u8328\u57FA"]},{key:"RegExpENName",title:"\u82F1\u6587\u59D3\u540D",rule:/(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/,examples:["James","Kevin Wayne Durant","Dirk Nowitzki"]},{key:"RegExpNewEnergyNumberPlate",title:"\u8F66\u724C\u53F7(\u65B0\u80FD\u6E90)",rule:/^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-HJ-NP-Z](?:((\d{5}[A-HJK])|([A-HJK][A-HJ-NP-Z0-9][0-9]{4}))|[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳])$/,examples:["\u4EACAD92035","\u7518G23459F","\u4EACAA92035"]},{key:"RegExpNumberPlate",title:"\u8F66\u724C\u53F7(\u975E\u65B0\u80FD\u6E90)",rule:/^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-HJ-NP-Z][A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]$/,examples:["\u4EACA00599","\u9ED1D23908"]},{key:"RegExpAllNumberPlate",title:"\u8F66\u724C\u53F7(\u65B0\u80FD\u6E90+\u975E\u65B0\u80FD\u6E90)",rule:/^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-HJ-NP-Z][A-HJ-NP-Z0-9]{4,5}[A-HJ-NP-Z0-9挂学警港澳]$/,examples:["\u4EACA12345D","\u4EACA00599","\u4EACAD92035","\u7518G23459F","\u4EACAA92035"],counterExamples:["\u5B81AD1234555555","\u6D59\u82CFH6F681"]},{key:"RegExpMobilePhoneNumberStrict",title:"\u624B\u673A\u53F7(mobile phone)\u4E2D\u56FD(\u4E25\u8C28), \u6839\u636E\u5DE5\u4FE1\u90E82019\u5E74\u6700\u65B0\u516C\u5E03\u7684\u624B\u673A\u53F7\u6BB5",rule:/^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1589]))\d{8}$/,examples:["008618311006933","+8617888829981","19119255642","19519255642"]},{key:"RegExpMobilePhoneNunber",title:"\u624B\u673A\u53F7(mobile phone)\u4E2D\u56FD(\u5BBD\u677E), \u53EA\u8981\u662F13,14,15,16,17,18,19\u5F00\u5934\u5373\u53EF",rule:/^(?:(?:\+|00)86)?1[3-9]\d{9}$/,examples:["008618311006933","+8617888829981","19119255642"]},{key:"RegExpMobilePhoneLoose",title:"\u624B\u673A\u53F7(mobile phone)\u4E2D\u56FD(\u6700\u5BBD\u677E), \u53EA\u8981\u662F1\u5F00\u5934\u5373\u53EF, \u5982\u679C\u4F60\u7684\u624B\u673A\u53F7\u662F\u7528\u6765\u63A5\u6536\u77ED\u4FE1, \u4F18\u5148\u5EFA\u8BAE\u9009\u62E9\u8FD9\u4E00\u6761",rule:/^(?:(?:\+|00)86)?1\d{10}$/,examples:["008618311006933","+8617888829981","19119255642"]},{key:"RegExpRungDate",title:"\u65E5\u671F(\u5BBD\u677E)",rule:/^\d{1,4}(-)(1[0-2]|0?[1-9])\1(0?[1-9]|[1-2]\d|30|31)$/,examples:["1990-12-12","1-1-1","0000-1-1"],counterExamples:["2020-00-01"]},{key:"RegExpRungDateStrict",title:"\u65E5\u671F(\u4E25\u8C28, \u652F\u6301\u95F0\u5E74\u5224\u65AD)",rule:/^(([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})-(((0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)-(0[1-9]|[12][0-9]|30))|(02-(0[1-9]|[1][0-9]|2[0-8]))))|((([0-9]{2})(0[48]|[2468][048]|[13579][26])|((0[48]|[2468][048]|[3579][26])00))-02-29)$/,examples:["1990-12-12","2000-02-29"],counterExamples:["2021-02-29"]},{key:"RegProvince",title:"\u4E2D\u56FD\u7701",rule:/^浙江|上海|北京|天津|重庆|黑龙江|吉林|辽宁|内蒙古|河北|新疆|甘肃|青海|陕西|宁夏|河南|山东|山西|安徽|湖北|湖南|江苏|四川|贵州|云南|广西|西藏|江西|广东|福建|台湾|海南|香港|澳门$/,examples:["\u6D59\u6C5F","\u53F0\u6E7E"],counterExamples:["\u54C8\u5C14\u6EE8"]},{key:"RegExpDate",title:"\u53EF\u4EE5\u88ABmoment\u8F6C\u5316\u6210\u529F\u7684\u65F6\u95F4 YYYYMMDD HH:mm:ss",rule:/^\d{4}([/:-\S])(1[0-2]|0?[1-9])\1(0?[1-9]|[1-2]\d|30|31) (?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d$/,examples:["2020/01/01 23:59:59","2020-01-01 00:00:00","20200101 11:11:11"],counterExamples:["2020/00/01 23:59:59","2020-01/01 23:59:59","2020-01-01 23:59:61","2020-01-0100:00:00"]},{key:"RegExpEmail",title:"email(\u90AE\u7BB1)",rule:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,examples:["90203918@qq.com","nbilly@126.com","\u6C49\u5B57@qq.com"]},{key:"RegExpTelPhone",title:"\u5EA7\u673A(tel phone)\u7535\u8BDD(\u56FD\u5185),\u5982: 0341-86091234",rule:/^(?:(?:\d{3}-)?\d{8}|^(?:\d{4}-)?\d{7,8})(?:-\d+)?$/,examples:["0936-4211235","89076543","010-12345678-1234"]},{key:"RegExp1IdNumber",title:"\u8EAB\u4EFD\u8BC1\u53F7(1\u4EE3,15\u4F4D\u6570\u5B57)",rule:/^[1-9]\d{7}(?:0\d|10|11|12)(?:0[1-9]|[1-2][\d]|30|31)\d{3}$/,examples:["123456991010193"]},{key:"RegExp2IdNumber",title:"\u8EAB\u4EFD\u8BC1\u53F7(2\u4EE3,18\u4F4D\u6570\u5B57),\u6700\u540E\u4E00\u4F4D\u662F\u6821\u9A8C\u4F4D,\u53EF\u80FD\u4E3A\u6570\u5B57\u6216\u5B57\u7B26X",rule:/^[1-9]\d{5}(?:18|19|20)\d{2}(?:0[1-9]|10|11|12)(?:0[1-9]|[1-2]\d|30|31)\d{3}[\dXx]$/,examples:["12345619991205131x"]},{key:"RegExpIdNumber",title:"\u8EAB\u4EFD\u8BC1\u53F7, \u652F\u63011/2\u4EE3(15\u4F4D/18\u4F4D\u6570\u5B57)",rule:/^\d{6}((((((19|20)\d{2})(0[13-9]|1[012])(0[1-9]|[12]\d|30))|(((19|20)\d{2})(0[13578]|1[02])31)|((19|20)\d{2})02(0[1-9]|1\d|2[0-8])|((((19|20)([13579][26]|[2468][048]|0[48]))|(2000))0229))\d{3})|((((\d{2})(0[13-9]|1[012])(0[1-9]|[12]\d|30))|((\d{2})(0[13578]|1[02])31)|((\d{2})02(0[1-9]|1\d|2[0-8]))|(([13579][26]|[2468][048]|0[048])0229))\d{2}))(\d|X|x)$/,examples:["622223199912051311","12345619991205131x","123456991010193"]},{key:"RegExpPassport",title:"\u62A4\u7167\uFF08\u5305\u542B\u9999\u6E2F\u3001\u6FB3\u95E8\uFF09",rule:/(^[EeKkGgDdSsPpHh]\d{8}$)|(^(([Ee][a-fA-F])|([DdSsPp][Ee])|([Kk][Jj])|([Mm][Aa])|(1[45]))\d{7}$)/,examples:["s28233515","141234567","159203084","MA1234567","K25345719"]},{key:"RegExpAccount",title:"\u5E10\u53F7\u662F\u5426\u5408\u6CD5(\u5B57\u6BCD\u5F00\u5934\uFF0C\u5141\u8BB85-16\u5B57\u8282\uFF0C\u5141\u8BB8\u5B57\u6BCD\u6570\u5B57\u4E0B\u5212\u7EBF\u7EC4\u5408",rule:/^[a-zA-Z]\w{4,15}$/,examples:["justin","justin1989","justin_666"]},{key:"RegExpCN",title:"\u4E2D\u6587/\u6C49\u5B57",rule:/^(?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])+$/,examples:["\u6B63\u5219","\u524D\u7AEF"]},{key:"RegExpDecimals",title:"\u5C0F\u6570(\u652F\u6301\u79D1\u5B66\u8BA1\u6570)",rule:/^[+-]?(\d+([.]\d*)?([eE][+-]?\d+)?|[.]\d+([eE][+-]?\d+)?)$/,examples:["0.0","0.09","4E+4"]},{key:"RegExpNumber",title:"\u53EA\u5305\u542B\u6570\u5B57",rule:/^\d+$/,examples:[12345678]},{key:"RegExpHTMLDOM",title:"html\u6807\u7B7E(\u5BBD\u677E\u5339\u914D)",rule:/<(\w+)[^>]*>(.*?<\/\1>)?/,examples:['<div id="app"> 2333 </div>','<input type="text">',"<br>"]},{key:"RegExpCNPunctuation",title:"\u5339\u914D\u4E2D\u6587\u6C49\u5B57\u548C\u4E2D\u6587\u6807\u70B9",rule:/[\u4e00-\u9fa5|\u3002|\uff1f|\uff01|\uff0c|\u3001|\uff1b|\uff1a|\u201c|\u201d|\u2018|\u2019|\uff08|\uff09|\u300a|\u300b|\u3008|\u3009|\u3010|\u3011|\u300e|\u300f|\u300c|\u300d|\ufe43|\ufe44|\u3014|\u3015|\u2026|\u2014|\uff5e|\ufe4f|\uffe5]/,examples:["\u5339\u914D\u4E2D\u6587\u6C49\u5B57\u4EE5\u53CA\u4E2D\u6587\u6807\u70B9\u7B26\u53F7 \u3002 \uFF1F \uFF01 \uFF0C \u3001 \uFF1B \uFF1A \u201C \u201D \u2018 ' \uFF08 \uFF09 \u300A \u300B \u3008 \u3009 \u3010 \u3011 \u300E \u300F \u300C \u300D \uFE43 \uFE44 \u3014 \u3015 \u2026 \u2014 \uFF5E \uFE4F \uFFE5"]},{key:"RegExpQQNumber",title:"qq\u53F7\u683C\u5F0F\u6B63\u786E",rule:/^[1-9][0-9]{4,10}$/,examples:[903013545,9020304]},{key:"RegExpAlphanumeric",title:"\u6570\u5B57\u548C\u5B57\u6BCD\u7EC4\u6210",rule:/^[A-Za-z0-9]+$/,examples:["james666","haha233hi"]},{key:"RegExpEnglishAlphabet",title:"\u82F1\u6587\u5B57\u6BCD",rule:/^[a-zA-Z]+$/,examples:["Russel"]},{key:"RegExpLowercase",title:"\u5C0F\u5199\u82F1\u6587\u5B57\u6BCD\u7EC4\u6210",rule:/^[a-z]+$/,examples:["russel"]},{key:"RegExpCapital",title:"\u5927\u5199\u82F1\u6587\u5B57\u6BCD",rule:/^[A-Z]+$/,examples:["ABC","KD"]},{key:"RegExpPasswordStrength",title:"\u5BC6\u7801\u5F3A\u5EA6\u6821\u9A8C\uFF0C\u6700\u5C116\u4F4D\uFF0C\u5305\u62EC\u81F3\u5C111\u4E2A\u5927\u5199\u5B57\u6BCD\uFF0C1\u4E2A\u5C0F\u5199\u5B57\u6BCD\uFF0C1\u4E2A\u6570\u5B57\uFF0C1\u4E2A\u7279\u6B8A\u5B57\u7B26",rule:/^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/,examples:["Kd@curry666"]},{key:"RegExpUserName",title:"\u7528\u6237\u540D\u6821\u9A8C\uFF0C4\u523016\u4F4D\uFF08\u5B57\u6BCD\uFF0C\u6570\u5B57\uFF0C\u4E0B\u5212\u7EBF\uFF0C\u51CF\u53F7\uFF09",rule:/^[\w-]{4,16}$/,examples:["xiaohua_qq"]},{key:"RegExpIPV4",title:"ip-v4[:\u7AEF\u53E3]",rule:/^((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.){3}(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])(?::(?:[0-9]|[1-9][0-9]{1,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5]))?$/,examples:["172.16.0.0","172.16.0.0:8080","127.0.0.0","127.0.0.0:998"]},{key:"RegExpIPV6",title:"ip-v6[:\u7AEF\u53E3]",rule:/(^(?:(?:(?:[0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))$)|(^\[(?:(?:(?:[0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))\](?::(?:[0-9]|[1-9][0-9]{1,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5]))?$)/i,examples:["2031:0000:130f:0000:0000:09c0:876a:130b","[2031:0000:130f:0000:0000:09c0:876a:130b]:8080"]},{key:"RegExpColor16",title:"16\u8FDB\u5236\u989C\u8272",rule:/^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3}|[a-fA-F0-9]{8}|[a-fA-F0-9]{4})$/,examples:["#f00","#F90","#000","#fe9de8","#f8f8f8ff","#f003"]},{key:"RegExpWXNumber",title:"\u5FAE\u4FE1\u53F7(wx)\uFF0C6\u81F320\u4F4D\uFF0C\u4EE5\u5B57\u6BCD\u5F00\u5934\uFF0C\u5B57\u6BCD\uFF0C\u6570\u5B57\uFF0C\u51CF\u53F7\uFF0C\u4E0B\u5212\u7EBF",rule:/^[a-zA-Z][-_a-zA-Z0-9]{5,19}$/,examples:["github666","kd_-666"]},{key:"RegExpPostalCode",title:"\u90AE\u653F\u7F16\u7801(\u4E2D\u56FD)",rule:/^(0[1-7]|1[0-356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[0-5]|8[013-6])\d{4}$/,examples:["734500","100101"]},{key:"RegExpChineseAndNumbers",title:"\u4E2D\u6587\u548C\u6570\u5B57",rule:/^((?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])|(\d))+$/,examples:["\u54C8\u54C8\u54C8","\u4F60\u597D6\u554A"]},{key:"RegExpNotLetter",title:"\u4E0D\u80FD\u5305\u542B\u5B57\u6BCD",rule:/^[^A-Za-z]*$/,examples:["\u4F60\u597D6\u554A","@\xA5()\uFF01"]},{key:"RegExpJavaPackageName",title:"java\u5305\u540D",rule:/^([a-zA-Z_]\w*)+([.][a-zA-Z_]\w*)+$/,examples:["com.bbb.name"]},{key:"RegExpMac",title:"mac\u5730\u5740",rule:/^(([a-f0-9][0,2,4,6,8,a,c,e]:([a-f0-9]{2}:){4})|([a-f0-9][0,2,4,6,8,a,c,e]-([a-f0-9]{2}-){4}))[a-f0-9]{2}$/i,examples:["38:f9:d3:4b:f5:51","00-0C-29-CA-E4-66"]},{key:"RegExpContinuousCharacters",title:"\u5339\u914D\u8FDE\u7EED\u91CD\u590D\u7684\u5B57\u7B26",rule:/(.)\1+/,examples:["\u6211\u6211\u6211","112233","11234"]},{key:"RegExpCharacter",title:"\u6570\u5B57\u548C\u82F1\u6587\u5B57\u6BCD\u7EC4\u6210\uFF0C\u5E76\u4E14\u540C\u65F6\u542B\u6709\u6570\u5B57\u548C\u82F1\u6587\u5B57\u6BCD",rule:/^(?=.*[a-zA-Z])(?=.*\d).+$/,examples:["\u6211a\u62111\u6211","a\u5BF91"]},{key:"RegExpHKIDCard",title:"\u9999\u6E2F\u8EAB\u4EFD\u8BC1 ",rule:/^[a-zA-Z]\d{6}\([\dA]\)$/,examples:["K034169(1)"]},{key:"RegExpAMIDCard",title:"\u6FB3\u95E8\u8EAB\u4EFD\u8BC1 ",rule:/^[1|5|7]\d{6}\(\d\)$/,examples:["5686611(1)"]},{key:"RegExpTWIDCard",title:"\u53F0\u6E7E\u8EAB\u4EFD\u8BC1 ",rule:/^[a-zA-Z][0-9]{9}$/,examples:["U193683453"]},{key:"RegExpStrongPassword",title:"\u5927\u5199\u5B57\u6BCD\uFF0C\u5C0F\u5199\u5B57\u6BCD\uFF0C\u6570\u5B57\uFF0C\u7279\u6B8A\u7B26\u53F7 `@#$%^&*`~()-+=` \u4E2D\u4EFB\u610F3\u9879\u5BC6\u7801",rule:/^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\W_!@#$%^&*`~()-+=]+$)(?![a-z0-9]+$)(?![a-z\W_!@#$%^&*`~()-+=]+$)(?![0-9\W_!@#$%^&*`~()-+=]+$)[a-zA-Z0-9\W_!@#$%^&*`~()-+=]/,examples:["a1@","A1@","Aa@"]},{key:"RegASCII",title:"ASCII\u7801\u8868\u4E2D\u7684\u5168\u90E8\u7684\u7279\u6B8A\u5B57\u7B26",rule:/[\x21-\x2F\x3A-\x40\x5B-\x60\x7B-\x7E]+/,examples:["[",".","^","&3%"]},{key:"RegExpPositiveInteger",title:"\u6B63\u6574\u6570\uFF0C\u4E0D\u5305\u542B0",rule:/^\+?[1-9]\d*$/,examples:[1231]},{key:"RegExpNegativeInteger",title:"\u8D1F\u6574\u6570\uFF0C\u4E0D\u5305\u542B0",rule:/^-[1-9]\d*$/,examples:[-1231]},{key:"RegExpInteger",title:"\u6574\u6570",rule:/^(?:0|(?:-?[1-9]\d*))$/,examples:[-1231,123,0],counterExamples:["01"]},{key:"RegExpFloatingNumber",title:"\u6D6E\u70B9\u6570",rule:/^(-?[1-9]\d*\.\d+|-?0\.\d*[1-9]\d*|0\.0+)$/,examples:["1.23","-1.01","0.00"]},{key:"RegExpFloatingNumberStrict",title:"\u6D6E\u70B9\u6570(\u4E25\u683C)",rule:/^(-?[1-9]\d*\.\d+|-?0\.\d*[1-9])$/,examples:["1.23","-1.01"]},{key:"RegExpEmailLoose",title:"email(\u652F\u6301\u4E2D\u6587\u90AE\u7BB1)",rule:/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,examples:["90203918@qq.com","nbilly@126.com","\u5566\u5566\u5566@126.com"]},{key:"RegDomainName",title:"\u57DF\u540D(\u975E\u7F51\u5740, \u4E0D\u5305\u542B\u534F\u8BAE)",rule:/^([0-9a-zA-Z-]{1,}\.)+([a-zA-Z]{2,})$/,examples:["www.baidu.com","baidu.com","baidu.com.cn","api.baidu.com","nodejs.org","nodejs.cn"],counterExamples:["http://baidu.com","https://baidu.com","www.\u767E\u5EA6.com"]},{key:"RegMilitaryCertificate",title:"\u519B\u5B98/\u58EB\u5175\u8BC1",rule:/^[\u4E00-\u9FA5](字第)([0-9a-zA-Z]{4,8})(号?)$/,examples:["\u519B\u5B57\u7B2C2001988\u53F7","\u58EB\u5B57\u7B2CP011816X\u53F7"]},{key:"RegAccountBook",title:"\u6237\u53E3\u8584",rule:/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,examples:["441421999707223115"]}];export{Pe as A,Ne as e,Ce as p};
