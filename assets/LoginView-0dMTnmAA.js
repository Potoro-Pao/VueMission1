import{a as m}from"./axios-L6U4YIEh.js";import{B as p}from"./BgComponent-yBx3uZ4J.js";import{_ as g,r as f,o as h,c as w,b as _,a as s,C as k,v as l,x as c,V as d,F as b}from"./index-UaBsPtZV.js";var C={VITE_URL:"https://ec-course-api.hexschool.io/v2",VITE_API:"potoro",BASE_URL:"/VueMission1/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:B}=C,v=`${B}/admin/signin`,x={data(){return{user:{account:null,password:null}}},components:{BgC:p},methods:{logBackHome(){this.$router.push("/")},loginCheck(){const r={username:this.user.account,password:this.user.password};m.post(v,r).then(o=>{const{token:i,expired:a}=o.data;document.cookie=`hexVueToken=${i}; expires=${new Date(a)}`,this.$router.push("/admin/products")}).catch(()=>{window.location="login.html"})}}},V={class:"container"},y={class:"row justify-content-center"},E=s("h1",{class:"h3 mb-3 mt-5 font-weight-normal text-center"},"Admin Log in",-1),L={class:"col-8"},P={class:"form-floating mb-3"},D=s("label",{for:"username"},"Email address",-1),I={class:"form-floating"},R=s("label",{for:"password"},"Password",-1);function T(r,o,i,a,n,t){const u=f("BgC");return h(),w(b,null,[_(u),s("div",V,[s("div",y,[E,s("div",L,[s("form",{id:"form",class:"form-signin",onSubmit:o[6]||(o[6]=k((...e)=>t.loginCheck&&t.loginCheck(...e),["prevent"]))},[s("div",P,[l(s("input",{onKeyup:o[0]||(o[0]=d((...e)=>t.loginCheck&&t.loginCheck(...e),["enter"])),"onUpdate:modelValue":o[1]||(o[1]=e=>n.user.account=e),type:"email",class:"form-control",id:"username",placeholder:"name@example.com",required:"",autofocus:""},null,544),[[c,n.user.account]]),D]),s("div",I,[l(s("input",{onKeyup:o[2]||(o[2]=d((...e)=>t.loginCheck&&t.loginCheck(...e),["enter"])),"onUpdate:modelValue":o[3]||(o[3]=e=>n.user.password=e),type:"password",class:"form-control",id:"password",placeholder:"Password",required:""},null,544),[[c,n.user.password]]),R]),s("button",{onClick:o[4]||(o[4]=(...e)=>t.loginCheck&&t.loginCheck(...e)),id:"loginBtn",class:"btn btn-lg btn-primary w-100 mt-3",type:"button"}," Log in "),s("button",{onClick:o[5]||(o[5]=(...e)=>t.logBackHome&&t.logBackHome(...e)),id:"loginBtn",class:"btn btn-lg btn-primary w-100 mt-3",type:"button"}," Back to Home Page ")],32)])])])],64)}const M=g(x,[["render",T]]);export{M as default};
