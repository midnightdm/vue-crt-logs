(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-16101b6c"],{"7ac3":function(t,e,s){},a1d2:function(t,e,s){"use strict";s.r(e);s("b0c0");var c=s("7a23");Object(c["C"])("data-v-e006ec2a");var o={id:"main",class:"logs"},n=Object(c["i"])("h1",null,"List of Vessels Logged",-1),i=Object(c["i"])("p",null,"The transponder-equipped vessels below passed Clinton most recently on the date shown. Select a vessel to view all its passages.",-1),l={key:0},a={class:"shipBox"},d=["src","alt"],u={class:"shipBoxData"},r={key:1},b=Object(c["i"])("h1",null,"LOADING VESSELS ...",-1),O=[b];function h(t,e,s,b,h,m){var p=Object(c["H"])("router-link");return Object(c["z"])(),Object(c["h"])(c["a"],null,[Object(c["i"])("button",{class:Object(c["t"])({active:t.scrolled}),id:"topbtn",onClick:e[0]||(e[0]=function(){return m.topOfPage&&m.topOfPage.apply(m,arguments)})},"Top",2),Object(c["i"])("div",o,[n,i,"loading"!=this.$store.state.a.passagesList[0].type?(Object(c["z"])(),Object(c["h"])("div",l,[(Object(c["z"])(!0),Object(c["h"])(c["a"],null,Object(c["F"])(this.$store.state.a.passagesList,(function(t){return Object(c["z"])(),Object(c["h"])("ul",{class:"vessels-list",key:t.id},[Object(c["i"])("li",null,[Object(c["m"])(p,{to:{name:"Detail",params:{id:t.id}}},{default:Object(c["V"])((function(){return[Object(c["i"])("h4",null,Object(c["L"])(t.name),1),Object(c["i"])("div",a,[Object(c["i"])("img",{class:"img-fluid img-thumbnail",src:t.image,alt:"Shows an image of vessel "+t.name,width:"200"},null,8,d),Object(c["i"])("div",u,[Object(c["i"])("span",null,Object(c["L"])(t.date),1)])])]})),_:2},1032,["to"])])])})),128))])):(Object(c["z"])(),Object(c["h"])("div",r,O))])],64)}Object(c["A"])();var m=s("c5f9"),p={created:function(){this.$store.dispatch("fetchPassagesList","clinton")},mounted:function(){window.addEventListener("scroll",this.handleScroll),this.$store.commit("setSlate","LOGS"),this.$store.commit("setLogsLinkActive",!0),this.$store.commit("setPageSelected","Logs")},unmounted:function(){this.$store.commit("setLogsLinkActive",!1)},data:function(){return{slate:"LOGS",scrolled:!1}},methods:{topOfPage:function(){document.body.scrollTop=0,document.documentElement.scrollTop=0},handleScroll:function(t){document.documentElement.scrollTop>20?this.scrolled=!0:this.scrolled=!1,console.log("scrolled?",this.scrolled)}},components:{LogsSubMenu:m["a"]}};s("cafc");p.render=h,p.__scopeId="data-v-e006ec2a";e["default"]=p},cafc:function(t,e,s){"use strict";s("7ac3")}}]);
//# sourceMappingURL=chunk-16101b6c.d7e230ba.js.map