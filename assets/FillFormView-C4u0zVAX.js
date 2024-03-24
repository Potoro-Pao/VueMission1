import{_ as C,H as f,I as M,J as x,K as E,M as O,N as w,O as L,L as T,m as F,e as N,T as k,P as S,r as p,o as h,c as b,b as l,a as e,s as U,F as _,A,B as n,E as m,v as q,x as I,Q as P,R}from"./index-UaBsPtZV.js";import{a as D}from"./axios-L6U4YIEh.js";import{c as y}from"./cartStore-Kvj5j6H9.js";var Y={VITE_URL:"https://ec-course-api.hexschool.io/v2",VITE_API:"potoro",BASE_URL:"/VueMission1/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:B,VITE_API:z}=Y;f("required",P);f("email",R);M({generateMessage:x({en:E.messages}),validateOnInput:!0});const J={components:{VForm:O,VField:w,ErrorMessage:L,Loading:T},data(){return{isLoading:!1,orderModal:null,user:{email:"",name:"",tel:"",country:"",city:"",address:"",message:""}}},computed:{...F(y,["cart","final_total","total","discount"])},methods:{...N(y,["getCart","deleteCartPinia"]),sendOrder(){const a={data:{user:{name:this.user.name,email:this.user.email,tel:this.user.tel,address:JSON.stringify({address:this.user.address,country:this.user.country,city:this.user.city})},message:this.user.message}};this.isLoading=!0,this.showToast("Order submitted successfully","success");const s=`${B}/api/${z}/order`;D.post(s,a).then(r=>{this.isLoading=!1,this.getCart(),this.$router.push({path:"/checkorder",query:{data:JSON.stringify(r.data)}})})},onSubmit(){this.sendOrder()},isPhone(a){const r=/^(09)[0-9]{8}$/.test(a)?!0:"Telephone is required.";return r&&a&&a.length<8?"The length must be at least 8 digits.":r},isCity(a){return/^[A-Z][a-z]*$/.test(a)?!0:"City is required and start with Uppercase."},isCountry(a){return/^[A-Z][a-z]*$/.test(a)?!0:"Country is required and start with Uppercase."},showToast(a,s){const r=document.createElement("div");r.classList.add("toast","align-items-center","text-white",s==="success"?"bg-success":"bg-danger","border-0","position-fixed","top-50","start-50","translate-middle"),r.role="alert",r.innerHTML=`
        <div class="d-flex">
          <div class="toast-body">
            <i class="bi bi-check-circle"></i> ${a}
          </div>
          <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
      `,document.body.appendChild(r),new k(r,{autohide:!0,delay:2e3}).show()}},mounted(){this.orderModal=new S(this.$refs.orderModal)}},H={class:"container py-5"},Z={class:"row justify-content-center"},j={class:"col-md-6"},K=e("h1",null,"Complete Your Information",-1),Q={class:"mb-3"},W=e("label",{for:"email"},"Email",-1),G={class:"mb-3"},X=e("label",{for:"name"},"Name",-1),$={class:"mb-3"},ee=e("label",{for:"phone"},"Telephone",-1),se={class:"mb-3"},te=e("label",{for:"country"},"Country",-1),oe={class:"mb-3"},ae=e("label",{for:"city"},"City",-1),le={class:"mb-3"},ie=e("label",{for:"address"},"Address",-1),re={class:"mb-3"},ne=e("label",{for:"message"},"Message",-1),de=e("div",{class:"text-end"},[e("div",{class:"text-end"},[e("button",{type:"submit",class:"btn btn-danger text-white"}," Review Order ")])],-1),ue={class:"modal right fade",ref:"orderModal",tabindex:"-1",role:"dialog","aria-labelledby":"orderModalLabel","aria-hidden":"true"},ce={class:"modal-dialog",role:"document"},me={class:"modal-content"},pe=e("div",{class:"modal-header"},[e("h5",{class:"modal-title",id:"orderModalLabel"},"Order Summary"),e("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[e("span",{"aria-hidden":"true"},"×")])],-1),he={class:"modal-body"},be=e("hr",null,null,-1),_e={class:"text-success"},ye={class:"text-danger"},fe={class:"modal-footer"};function ve(a,s,r,v,t,d){const g=p("loading"),u=p("VField"),c=p("ErrorMessage"),V=p("VForm");return h(),b(_,null,[l(g,{active:t.isLoading,"onUpdate:active":s[0]||(s[0]=o=>t.isLoading=o)},null,8,["active"]),e("div",H,[e("div",Z,[e("div",j,[K,l(V,{ref:"orderForm",onSubmit:d.onSubmit},{default:U(({errors:o})=>[e("div",Q,[W,l(u,{id:"email",name:"email",type:"email",class:m(["form-control",{"is-invalid":o.email}]),placeholder:"Your Email",rules:"email|required",modelValue:t.user.email,"onUpdate:modelValue":s[1]||(s[1]=i=>t.user.email=i)},null,8,["class","modelValue"]),l(c,{name:"email",class:"invalid-feedback"})]),e("div",G,[X,l(u,{id:"name",name:"name",type:"text",class:m(["form-control",{"is-invalid":o.name}]),placeholder:"Your Name",rules:"required",modelValue:t.user.name,"onUpdate:modelValue":s[2]||(s[2]=i=>t.user.name=i)},null,8,["class","modelValue"]),l(c,{name:"name",class:"invalid-feedback"})]),e("div",$,[ee,l(u,{id:"phone",name:"phone",type:"tel",class:m(["form-control",{"is-invalid":o.phone}]),placeholder:"Telephone",rules:d.isPhone,modelValue:t.user.tel,"onUpdate:modelValue":s[3]||(s[3]=i=>t.user.tel=i)},null,8,["class","rules","modelValue"]),l(c,{name:"phone",class:"invalid-feedback"})]),e("div",se,[te,l(u,{id:"country",name:"country",class:m(["form-control",{"is-invalid":o.country}]),placeholder:"Your Country",rules:d.isCountry,modelValue:t.user.country,"onUpdate:modelValue":s[4]||(s[4]=i=>t.user.country=i)},null,8,["class","rules","modelValue"]),l(c,{name:"country",class:"invalid-feedback"})]),e("div",oe,[ae,l(u,{id:"city",name:"city",class:m(["form-control",{"is-invalid":o.city}]),placeholder:"Your City",rules:d.isCity,modelValue:t.user.city,"onUpdate:modelValue":s[5]||(s[5]=i=>t.user.city=i)},null,8,["class","rules","modelValue"]),l(c,{name:"city",class:"invalid-feedback"})]),e("div",le,[ie,l(u,{id:"address",name:"address",type:"text",class:m(["form-control",{"is-invalid":o.address}]),placeholder:"Address",rules:"required",modelValue:t.user.address,"onUpdate:modelValue":s[6]||(s[6]=i=>t.user.address=i)},null,8,["class","modelValue"]),l(c,{name:"address",class:"invalid-feedback"})]),e("div",re,[ne,q(e("textarea",{id:"message",class:"form-control",rows:"10",placeholder:"Write something","onUpdate:modelValue":s[7]||(s[7]=i=>t.user.message=i)},null,512),[[I,t.user.message]])]),de]),_:1},8,["onSubmit"])])])]),e("div",ue,[e("div",ce,[e("div",me,[pe,e("div",he,[(h(!0),b(_,null,A(this.cart,o=>(h(),b("div",{key:o.id},[e("div",null,[e("strong",null,n(o.product.title),1)]),e("div",null,"$"+n(o.product.price),1)]))),128)),be,e("p",null,"Origin Price: "+n(this.total),1),e("p",_e,"Discount: "+n(this.discount),1),e("p",null,"Email: "+n(t.user.email),1),e("p",null,"Your Name: "+n(t.user.name),1),e("p",ye,"Total Amount: $"+n(this.final_total),1)]),e("div",fe,[e("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal",onClick:s[8]||(s[8]=(...o)=>a.closeOrderModal&&a.closeOrderModal(...o))}," Close "),e("button",{type:"button",onClick:s[9]||(s[9]=(...o)=>d.sendOrder&&d.sendOrder(...o)),class:"btn btn-primary"}," Confirm Order ")])])])],512)],64)}const Me=C(J,[["render",ve]]);export{Me as default};
