(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1c8f09e3"],{"1b3c":function(e,t,c){},"6cf2":function(e,t,c){"use strict";c("1b3c")},d530:function(e,t,c){"use strict";var s=c("7a23");Object(s["C"])("data-v-f0503c60");var i={id:"LogsList"},a={key:0},n={class:"shipBox tableBlock"},r=["src"],l={class:"tableBlock grpA"},o={class:"title"},b={class:"dirWrapper"},O=["src"],g=["src"],j={class:"adjacent"},u={class:"tableBlock"},d=Object(s["i"])("br",null,null,-1),m={key:0,class:"label"},p={key:1,class:"label"},h={class:"value"},f={key:0,class:"label"},L={key:1,class:"label"},v={class:"value"},k={class:"tableBlock holder"},w=Object(s["l"])("History");function S(e,t,c,S,$,y){var D=this,z=Object(s["H"])("router-link");return Object(s["z"])(),Object(s["h"])("main",i,[Object(s["i"])("button",{class:Object(s["t"])({active:e.scrolled}),id:"topbtn",onClick:t[0]||(t[0]=function(){return y.topOfPage&&y.topOfPage.apply(y,arguments)})},"Top",2),Object(s["i"])("section",null,[Object(s["i"])("h1",null,[Object(s["l"])(Object(s["L"])(this.$store.getters[c.getterName].length)+" Vessel Passage",1),1!=this.$store.getters[c.getterName].length?(Object(s["z"])(),Object(s["h"])("span",a,"s")):Object(s["g"])("",!0),Object(s["l"])(" "+Object(s["L"])(c.pageTitle),1)]),Object(s["i"])("h4",null,Object(s["L"])(this.formattedRange),1),(Object(s["z"])(!0),Object(s["h"])(s["a"],null,Object(s["F"])(this.$store.getters[c.getterName],(function(e){return Object(s["z"])(),Object(s["h"])("ul",{class:"vessels-list",key:e.vesselID},[Object(s["i"])("li",null,[Object(s["i"])("div",n,[Object(s["i"])("img",{class:"shipBox",src:e.vesselImageUrl,width:"200"},null,8,r)]),Object(s["i"])("div",l,[Object(s["i"])("h4",o,Object(s["L"])(e.vesselName),1),Object(s["i"])("p",b,["upriver"==e.passageDirection?(Object(s["z"])(),Object(s["h"])("img",{key:0,class:"dir-img",src:D.upArrUrl,title:"Upriver indicator"},null,8,O)):Object(s["g"])("",!0),"downriver"==e.passageDirection?(Object(s["z"])(),Object(s["h"])("img",{key:1,class:"dir-img",src:D.dnArrUrl,title:"Downriver indicator"},null,8,g)):Object(s["g"])("",!0),Object(s["i"])("span",j,Object(s["L"])(e.passageDirection),1)])]),Object(s["i"])("div",u,[Object(s["i"])("h4",null,Object(s["L"])(e.marker2DO.toLocaleDateString()),1),d,Object(s["i"])("p",null,["clinton"==D.$store.state.a.region?(Object(s["z"])(),Object(s["h"])("span",m,"LOCK 13:")):Object(s["g"])("",!0),"qc"==D.$store.state.a.region?(Object(s["z"])(),Object(s["h"])("span",p,"LOCK 14:")):Object(s["g"])("",!0),Object(s["i"])("span",h,Object(s["L"])(e.marker1DO.toLocaleTimeString()),1)]),Object(s["i"])("p",null,["clinton"==D.$store.state.a.region?(Object(s["z"])(),Object(s["h"])("span",f,"BRIDGE :")):Object(s["g"])("",!0),"qc"==D.$store.state.a.region?(Object(s["z"])(),Object(s["h"])("span",L,"LOCK 15:")):Object(s["g"])("",!0),Object(s["i"])("span",v,Object(s["L"])(e.marker2DO.toLocaleTimeString()),1)])]),Object(s["i"])("div",k,[Object(s["m"])(z,{class:"pill btn",to:{name:"Detail",params:{id:e.passageVesselID}}},{default:Object(s["V"])((function(){return[w]})),_:2},1032,["to"])])])])})),128))])])}Object(s["A"])();var $=c("b166"),y={name:"LogsList",props:{getterName:String,rangeName:String,pageSelected:String,pageTitle:String},created:function(){this.$store.dispatch("fetchCurrentMonth","clinton"),window.addEventListener("scroll",this.handleScroll),this.$store.commit("setRegion","clinton")},mounted:function(){this.$store.commit("setSlate","LOGS"),this.$store.commit("setLogsLinkActive",!0),this.$store.commit("setPageSelected",this.pageSelected)},unmounted:function(){this.$store.commit("setLogsLinkActive",!1)},data:function(){return{upArrUrl:"https://storage.googleapis.com/www.clintonrivertraffic.com/images/uparr.png",dnArrUrl:"https://storage.googleapis.com/www.clintonrivertraffic.com/images/dwnarr.png",scrolled:!1}},computed:{formattedRange:function(){return"Range is "+Object($["a"])(1e3*this.$store.state.a.ranges[this.rangeName].lo,"h:mmaaa eeee, LLL do uu")+" to "+Object($["a"])(1e3*this.$store.state.a.ranges[this.rangeName].hi,"h:mmaaa eeee, LLL do uu")}},methods:{topOfPage:function(){document.body.scrollTop=0,document.documentElement.scrollTop=0},handleScroll:function(e){document.documentElement.scrollTop>20?this.scrolled=!0:this.scrolled=!1}},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)}};c("6cf2");y.render=S,y.__scopeId="data-v-f0503c60";t["a"]=y}}]);
//# sourceMappingURL=chunk-1c8f09e3.c07d3bae.js.map