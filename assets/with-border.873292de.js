var y=Object.defineProperty,B=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var z=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable,me=Reflect.get,be=Reflect.set;var U=(e,l,t)=>l in e?y(e,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[l]=t,C=(e,l)=>{for(var t in l||(l={}))T.call(l,t)&&U(e,t,l[t]);if(z)for(var t of z(l))w.call(l,t)&&U(e,t,l[t]);return e},G=(e,l)=>B(e,A(l));import{g as f,K as m,_ as g,r as c,o as u,c as b,b as p,a,F as h,h as O,t as S,w as s,i as $,f as V,d as k,j as v}from"./app.b1a052a1.js";const M=f({setup(){const e=m(!0),l=m(!1),t=m(!1),r=m(!1),i=m(!1),_=m(!1),n=m(!1),d=m(!1);return{checked1:e,checked2:l,checked3:t,checked4:r,checked5:i,checked6:_,checked7:n,checked8:d}}});function I(e,l,t,r,i,_){const n=c("el-checkbox");return u(),b(h,null,[p("div",null,[a(n,{modelValue:e.checked1,"onUpdate:modelValue":l[0]||(l[0]=d=>e.checked1=d),label:"Option 1"},null,8,["modelValue"]),a(n,{modelValue:e.checked2,"onUpdate:modelValue":l[1]||(l[1]=d=>e.checked2=d),label:"Option 2"},null,8,["modelValue"])]),p("div",null,[a(n,{modelValue:e.checked3,"onUpdate:modelValue":l[2]||(l[2]=d=>e.checked3=d),label:"Option 1",size:"medium"},null,8,["modelValue"]),a(n,{modelValue:e.checked4,"onUpdate:modelValue":l[3]||(l[3]=d=>e.checked4=d),label:"Option 2",size:"medium"},null,8,["modelValue"])]),p("div",null,[a(n,{modelValue:e.checked5,"onUpdate:modelValue":l[4]||(l[4]=d=>e.checked5=d),label:"Option 1",size:"small"},null,8,["modelValue"]),a(n,{modelValue:e.checked6,"onUpdate:modelValue":l[5]||(l[5]=d=>e.checked6=d),label:"Option 2",size:"small"},null,8,["modelValue"])]),p("div",null,[a(n,{modelValue:e.checked7,"onUpdate:modelValue":l[6]||(l[6]=d=>e.checked7=d),label:"Option 1",size:"mini"},null,8,["modelValue"]),a(n,{modelValue:e.checked8,"onUpdate:modelValue":l[7]||(l[7]=d=>e.checked8=d),label:"Option 2",size:"mini"},null,8,["modelValue"])])],64)}var L=g(M,[["render",I]]),_e=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:L});const N=["Shanghai","Beijing","Guangzhou","Shenzhen"],D=f({setup(){const e=O({checkboxGroup1:["Shanghai"],checkboxGroup2:["Shanghai"],checkboxGroup3:["Shanghai"],checkboxGroup4:["Shanghai"],cities:N});return C({},S(e))}}),F={class:"demo-button-style"},E={class:"demo-button-style"},K={class:"demo-button-style"};function R(e,l,t,r,i,_){const n=c("el-checkbox-button"),d=c("el-checkbox-group");return u(),b(h,null,[p("div",null,[a(d,{modelValue:e.checkboxGroup1,"onUpdate:modelValue":l[0]||(l[0]=o=>e.checkboxGroup1=o)},{default:s(()=>[(u(!0),b(h,null,$(e.cities,o=>(u(),V(n,{key:o,label:o},{default:s(()=>[k(v(o),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])]),p("div",F,[a(d,{modelValue:e.checkboxGroup2,"onUpdate:modelValue":l[1]||(l[1]=o=>e.checkboxGroup2=o),size:"medium"},{default:s(()=>[(u(!0),b(h,null,$(e.cities,o=>(u(),V(n,{key:o,label:o},{default:s(()=>[k(v(o),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])]),p("div",E,[a(d,{modelValue:e.checkboxGroup3,"onUpdate:modelValue":l[2]||(l[2]=o=>e.checkboxGroup3=o),size:"small"},{default:s(()=>[(u(!0),b(h,null,$(e.cities,o=>(u(),V(n,{key:o,label:o,disabled:o==="Beijing"},{default:s(()=>[k(v(o),1)]),_:2},1032,["label","disabled"]))),128))]),_:1},8,["modelValue"])]),p("div",K,[a(d,{modelValue:e.checkboxGroup4,"onUpdate:modelValue":l[3]||(l[3]=o=>e.checkboxGroup4=o),size:"mini",disabled:""},{default:s(()=>[(u(!0),b(h,null,$(e.cities,o=>(u(),V(n,{key:o,label:o},{default:s(()=>[k(v(o),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])])],64)}var q=g(D,[["render",R],["__scopeId","data-v-69996c0f"]]),Ve=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:q});const H=f({setup(){const e=m(!1),l=m(!0);return{checked1:e,checked2:l}}}),J=k("Disabled"),P=k("Not disabled");function Q(e,l,t,r,i,_){const n=c("el-checkbox");return u(),b(h,null,[a(n,{modelValue:e.checked1,"onUpdate:modelValue":l[0]||(l[0]=d=>e.checked1=d),disabled:""},{default:s(()=>[J]),_:1},8,["modelValue"]),a(n,{modelValue:e.checked2,"onUpdate:modelValue":l[1]||(l[1]=d=>e.checked2=d)},{default:s(()=>[P]),_:1},8,["modelValue"])],64)}var W=g(H,[["render",Q]]),fe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:W});const X=f({setup(){return{checkList:m(["selected and disabled","Option A"])}}});function Y(e,l,t,r,i,_){const n=c("el-checkbox"),d=c("el-checkbox-group");return u(),V(d,{modelValue:e.checkList,"onUpdate:modelValue":l[0]||(l[0]=o=>e.checkList=o)},{default:s(()=>[a(n,{label:"Option A"}),a(n,{label:"Option B"}),a(n,{label:"Option C"}),a(n,{label:"disabled",disabled:""}),a(n,{label:"selected and disabled",disabled:""})]),_:1},8,["modelValue"])}var Z=g(X,[["render",Y]]),ge=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Z});const j=["Shanghai","Beijing","Guangzhou","Shenzhen"],x=f({setup(){const e=O({checkAll:!1,checkedCities:["Shanghai","Beijing"],cities:j,isIndeterminate:!0}),l=r=>{e.checkedCities=r?j:[],e.isIndeterminate=!1},t=r=>{const i=r.length;e.checkAll=i===e.cities.length,e.isIndeterminate=i>0&&i<e.cities.length};return G(C({},S(e)),{handleCheckAllChange:l,handleCheckedCitiesChange:t})}}),ee=k("Check all");function le(e,l,t,r,i,_){const n=c("el-checkbox"),d=c("el-checkbox-group");return u(),b(h,null,[a(n,{modelValue:e.checkAll,"onUpdate:modelValue":l[0]||(l[0]=o=>e.checkAll=o),indeterminate:e.isIndeterminate,onChange:e.handleCheckAllChange},{default:s(()=>[ee]),_:1},8,["modelValue","indeterminate","onChange"]),a(d,{modelValue:e.checkedCities,"onUpdate:modelValue":l[1]||(l[1]=o=>e.checkedCities=o),onChange:e.handleCheckedCitiesChange},{default:s(()=>[(u(!0),b(h,null,$(e.cities,o=>(u(),V(n,{key:o,label:o},{default:s(()=>[k(v(o),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue","onChange"])],64)}var oe=g(x,[["render",le]]),$e=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:oe});const ne=["Shanghai","Beijing","Guangzhou","Shenzhen"],de=f({setup(){const e=O({checkedCities:["Shanghai","Beijing"],cities:ne});return S(e)}});function ae(e,l,t,r,i,_){const n=c("el-checkbox"),d=c("el-checkbox-group");return u(),V(d,{modelValue:e.checkedCities,"onUpdate:modelValue":l[0]||(l[0]=o=>e.checkedCities=o),min:1,max:2},{default:s(()=>[(u(!0),b(h,null,$(e.cities,o=>(u(),V(n,{key:o,label:o},{default:s(()=>[k(v(o),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])}var te=g(de,[["render",ae]]),ve=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:te});const ue=f({setup(){const e=O({checked1:!0,checked2:!1,checked3:!1,checked4:!0,checkboxGroup1:[],checkboxGroup2:[]});return S(e)}}),se={class:"demo-with-border"},re={class:"demo-with-border"},ie={class:"demo-with-border"};function ce(e,l,t,r,i,_){const n=c("el-checkbox"),d=c("el-checkbox-group");return u(),b(h,null,[p("div",null,[a(n,{modelValue:e.checked1,"onUpdate:modelValue":l[0]||(l[0]=o=>e.checked1=o),label:"Option1",border:""},null,8,["modelValue"]),a(n,{modelValue:e.checked2,"onUpdate:modelValue":l[1]||(l[1]=o=>e.checked2=o),label:"Option2",border:""},null,8,["modelValue"])]),p("div",se,[a(n,{modelValue:e.checked3,"onUpdate:modelValue":l[2]||(l[2]=o=>e.checked3=o),label:"Option1",border:"",size:"medium"},null,8,["modelValue"]),a(n,{modelValue:e.checked4,"onUpdate:modelValue":l[3]||(l[3]=o=>e.checked4=o),label:"Option2",border:"",size:"medium"},null,8,["modelValue"])]),p("div",re,[a(d,{modelValue:e.checkboxGroup1,"onUpdate:modelValue":l[4]||(l[4]=o=>e.checkboxGroup1=o),size:"small"},{default:s(()=>[a(n,{label:"Option1",border:""}),a(n,{label:"Option2",border:"",disabled:""})]),_:1},8,["modelValue"])]),p("div",ie,[a(d,{modelValue:e.checkboxGroup2,"onUpdate:modelValue":l[5]||(l[5]=o=>e.checkboxGroup2=o),size:"mini",disabled:""},{default:s(()=>[a(n,{label:"Option1",border:""}),a(n,{label:"Option2",border:""})]),_:1},8,["modelValue"])])],64)}var pe=g(ue,[["render",ce],["__scopeId","data-v-71aeb71d"]]),Oe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:pe});export{_e as _,Ve as a,fe as b,ge as c,$e as d,ve as e,Oe as f};