(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1d6bf5ed"],{6292:function(e,t,a){"use strict";a.r(t);var s=a("7a23"),r={id:"wrapper"},i={id:"main"},n={key:0,id:"map"},o={key:1,id:"shadow1"},c=["src"],p={id:"shadow2"},b=["src"],u={key:2,id:"shadow3"},g=["src","title"],m={id:"shadow4"},l={id:"overlay1"},d=Object(s["l"])("History"),v={key:0,style:{color:"red",position:"absolute",top:"175px"}};function O(e,t,a,O,h,f){var w=Object(s["H"])("router-link");return Object(s["z"])(),Object(s["h"])(s["a"],null,[Object(s["i"])("div",r,[Object(s["i"])("div",i,[h.mapOn?(Object(s["z"])(),Object(s["h"])("div",n)):(Object(s["z"])(),Object(s["h"])("div",o,[Object(s["i"])("img",{id:"mapImg",src:h.bgMap,title:"A Google Earth map shows a representation of a tow vessel at the noted waypoint location along the river."},null,8,c)])),Object(s["i"])("div",p,[Object(s["i"])("img",{id:"vesselImg",src:h.vesselImg,title:"Image of the vessel {{vesselName}}"},null,8,b)]),h.supImg?(Object(s["z"])(),Object(s["h"])("div",u,[Object(s["i"])("img",{id:"supImg",src:h.supImg,title:h.supalt},null,8,g)])):Object(s["g"])("",!0),Object(s["i"])("div",m,[Object(s["i"])("h1",l,Object(s["L"])(h.text),1)]),""!=h.vesselID?(Object(s["z"])(),Object(s["f"])(w,{key:3,id:"history",to:{name:"Detail",params:{id:h.vesselID}}},{default:Object(s["V"])((function(){return[d]})),_:1},8,["to"])):Object(s["g"])("",!0)])]),this.apubID?Object(s["g"])("",!0):(Object(s["z"])(),Object(s["h"])("h2",v,"ERROR: ID not found."))],64)}var h=a("1da1"),f=(a("96cf"),a("159b"),a("caad"),a("2532"),a("b166")),w=a("c62b"),I=a("e71f"),j=w["a"],k={data:function(){return{text:"",event:"",direction:"",vesselName:"",vesselID:"",pubDate:"",vesselImg:"",bgMap:"",supImg:"",supalt:"",mapOn:!1,base:"https://storage.googleapis.com/www.clintonrivertraffic.com",bgImg:{backgroundImage:"url(https://storage.googleapis.com/www.clintonrivertraffic.com/images/bg-pattern-blue.png)"}}},props:["apubID"],mounted:function(){document.body.style.backgroundImage="https://storage.googleapis.com/www.clintonrivertraffic.com/images/bg-pattern-blue.png",this.getData(),this.$store.commit("setSlate","WAYPOINT"),this.$store.commit("setPageSelected","Waypoint")},unmounted:function(){this.$store.commit("setPageSelected",null)},methods:{getData:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){var a,s,r,i,n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=parseInt(e.apubID),s=Object(I["k"])(Object(I["b"])(j,"Alertpublish"),Object(I["n"])("apubID","==",a)),r=0,t.next=5,Object(I["f"])(s);case 5:i=t.sent,i.forEach((function(t){if(!(r>0)){var a=t.data();e.text=a["apubText"],e.vesselID=a["apubVesselID"],e.direction=a["apubDir"],e.event=a["apubEvent"],e.pubDate=Object(f["a"])(new Date(1e3*parseInt(a["apubTS"])),"iii MMM d, yyyy"),e.vesselImg=a["apubVesselImageUrl"],e.vesselName=a["apubVesselName"],r++}})),0==r?(e.event="Not Found",e.bgMap=e.base+"/images/charlie-up-map.png"):(n=e.direction.includes("wn")?"down":"up",e.event=e.event.substr(0,e.event.length-2),o=e.event+"-"+n+"-map.png",e.bgMap=e.base+"/images/"+o),t.t0=e.event,t.next="alpha"===t.t0?11:"bravo"===t.t0?15:"charlie"===t.t0?19:"delta"===t.t0?23:"detected"===t.t0?27:"Not Found"===t.t0?31:37;break;case 11:return e.supImg=e.base+"/images/lock13.jpg",e.supalt="Image of Lock and Dam 13.",e.mapOn=!1,t.abrupt("break",37);case 15:return e.supImg=e.base+"/images/lock13.jpg",e.supalt="Image of Lock and Dam 13.",e.mapOn=!1,t.abrupt("break",37);case 19:return e.supImg=e.base+"/images/drawbridge.jpg",e.supalt="Image of the railroad drawbridge.",e.mapOn=!1,t.abrupt("break",37);case 23:return e.supImg=e.base+"/images/drawbridge.jpg",e.supalt="Image of the railroad drawbridge.",e.mapOn=!1,t.abrupt("break",37);case 27:return e.supImg=e.base+"/images/compass.png",e.supalt="Decorative drawing of a compass.",e.mapOn=!0,t.abrupt("break",37);case 31:e.supImg=!1,e.supalt="Decorative drawing of a compass.",e.mapOn=!1,e.vesselImg="https://storage.googleapis.com/www.clintonrivertraffic.com/images/vessels/no-image-placard.jpg",e.text="Alert event "+e.apubID+" was not found. The data may have expired.",e.vesselName="Not Found";case 37:case"end":return t.stop()}}),t)})))()}}};a("b7e0");k.render=O;t["default"]=k},b7e0:function(e,t,a){"use strict";a("c16a")},c16a:function(e,t,a){}}]);
//# sourceMappingURL=chunk-1d6bf5ed.e73dbba8.js.map