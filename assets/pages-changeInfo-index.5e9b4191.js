import{o as e,c as a,w as t,n as o,i as l,a as n,f as s,I as r,p as u}from"./index-4a7ae2f2.js";import{u as m}from"./info.17231e29.js";import{_ as d}from"./_plugin-vue_export-helper.1b428a4d.js";const p=d({setup(){const e=m();return{person:e,handleSubmit:function(){e.setName(e.name),e.setSex(e.sex),e.setNumber(e.number),e.setDepart(e.depart),o({url:"/"})}}}},[["render",function(o,m,d,p,f,i){const c=r,x=u,_=l;return e(),a(_,{class:"container"},{default:t((()=>[n(_,{class:"form-info"},{default:t((()=>[n(x,{for:"name"},{default:t((()=>[s(" 姓名："),n(c,{type:"text",name:"name",modelValue:p.person.name,"onUpdate:modelValue":m[0]||(m[0]=e=>p.person.name=e)},null,8,["modelValue"])])),_:1}),n(x,{for:"sex"},{default:t((()=>[s(" 性别："),n(c,{type:"text",name:"sex",modelValue:p.person.sex,"onUpdate:modelValue":m[1]||(m[1]=e=>p.person.sex=e)},null,8,["modelValue"])])),_:1}),n(x,{for:"number"},{default:t((()=>[s(" 工号："),n(c,{type:"text",name:"number",modelValue:p.person.number,"onUpdate:modelValue":m[2]||(m[2]=e=>p.person.number=e)},null,8,["modelValue"])])),_:1}),n(x,{for:"depart"},{default:t((()=>[s(" 院系："),n(c,{type:"text",name:"depart",modelValue:p.person.depart,"onUpdate:modelValue":m[3]||(m[3]=e=>p.person.depart=e)},null,8,["modelValue"])])),_:1})])),_:1}),n(_,{class:"form-submit",onClick:p.handleSubmit},{default:t((()=>[s(" 提交 ")])),_:1},8,["onClick"]),n(_,{class:"footer"},{default:t((()=>[s("尊重规则 善意使用☕︎")])),_:1})])),_:1})}],["__scopeId","data-v-f8f04f78"]]);export{p as default};
