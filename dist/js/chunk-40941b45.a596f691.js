(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-40941b45"],{3629:function(e,t,i){},bbb0:function(e,t,i){"use strict";i.r(t);i("b0c0");var c=i("7a23");Object(c["C"])("data-v-3ff165df");var a={id:"page-container"},n={id:"idiv"},s=["src"],o={id:"content-wrap"},l=Object(c["l"])("   "),d=Object(c["l"])("Announcements "),r={class:"data column"},u={class:"dataColumn"},b={key:0,class:"cardWrapper"},p={class:"slideData"},v={class:"list-wrap"},O={class:"map-label"},j={class:"tile-title"},m={class:"dir-container"},g=["src"],h={class:"speed"},f={class:"data-cont grid2-container"},y={id:"data-table"},L={id:"selected-vessel"},S={class:"dataPoint"},w=Object(c["i"])("span",{class:"th"},"TYPE:",-1),A=Object(c["l"])(),k={class:"td"},V={class:"dataPoint"},E=Object(c["i"])("span",{class:"th"},"MMSI #:",-1),C=Object(c["l"])(),D={class:"td"},P={class:"dataPoint"},I=Object(c["i"])("span",{class:"th"},"COURSE:",-1),z=Object(c["l"])(),M={class:"td"},U={class:"dataPoint"},N=Object(c["i"])("span",{class:"th"},"SPEED:",-1),R=Object(c["l"])(),T={class:"td"},W={class:"dataPoint"},x=Object(c["i"])("span",{class:"th"},"DIRECTION:",-1),J=Object(c["l"])(),_={class:"td dir"},F=Object(c["i"])("li",{class:"dataPoint"},[Object(c["i"])("span",{class:"th"},"COORDINATES:")],-1),H={class:"dataPoint"},K=Object(c["i"])("span",{class:"th"},null,-1),Y=Object(c["l"])(),$={class:"td dir"},q={id:"img-frame"},B=["onClick"],G=["src"],Q={class:"btnWrapper"},X=["onClick"],Z=Object(c["i"])("div",{class:"spader"},null,-1),ee={key:1,class:"noslide"};function te(e,t,i,te,ie,ce){return Object(c["z"])(),Object(c["h"])("div",a,[Object(c["i"])("div",n,[Object(c["i"])("iframe",{id:"imap",class:"widemap column",src:ie.iframemapUrl,scrolling:"no",frameborder:"0",seamless:""},null,8,s)]),Object(c["i"])("div",o,[l,Object(c["i"])("button",{class:"ann",onClick:t[0]||(t[0]=function(){return te.toggleLiveVoice&&te.toggleLiveVoice.apply(te,arguments)})},[d,Object(c["i"])("span",{class:Object(c["t"])(["led",{on:te.store.state.a.liveVoiceOn}])},null,2)]),Object(c["i"])("section",r,[Object(c["i"])("div",u,[te.store.state.a.liveScans.length?(Object(c["z"])(),Object(c["h"])("ul",b,[(Object(c["z"])(!0),Object(c["h"])(c["a"],null,Object(c["F"])(te.store.state.a.liveScans,(function(e,t){return Object(c["z"])(),Object(c["h"])("li",{class:"listMode",key:e.id},[Object(c["i"])("div",p,[Object(c["i"])("div",v,[Object(c["i"])("h4",O,Object(c["L"])(e.mapLabel),1),Object(c["i"])("h4",j,Object(c["L"])(e.name),1),Object(c["i"])("div",m,[Object(c["i"])("img",{class:"dir-img",src:e.dirImg},null,8,g),Object(c["i"])("span",h,Object(c["L"])(e.spd),1)])]),Object(c["i"])("div",f,[Object(c["i"])("div",y,[Object(c["i"])("ul",L,[Object(c["i"])("li",S,[w,A,Object(c["i"])("span",k,Object(c["L"])(e.type),1)]),Object(c["i"])("li",V,[E,C,Object(c["i"])("span",D,Object(c["L"])(e.id),1)]),Object(c["i"])("li",P,[I,z,Object(c["i"])("span",M,Object(c["L"])(e.course)+"°",1)]),Object(c["i"])("li",U,[N,R,Object(c["i"])("span",T,Object(c["L"])(e.speed)+" Knots",1)]),Object(c["i"])("li",W,[x,J,Object(c["i"])("span",_,Object(c["L"])(e.dir),1)]),F,Object(c["i"])("li",H,[K,Y,Object(c["i"])("span",$,Object(c["L"])(e.rndLat)+", "+Object(c["L"])(e.rndLng),1)])])]),Object(c["i"])("div",q,[Object(c["i"])("a",{href:"javascript:void(0)",onClick:function(e){return ce.setSelectedA(t)}},[Object(c["i"])("img",{class:Object(c["t"])(["data-image",{bigger:ie.selectedA==t}]),src:e.imageUrl},null,10,G)],8,B),Object(c["i"])("div",Q,[Object(c["i"])("button",{class:"pill",onClick:function(t){return te.route("/logs/history/"+e.id)}},"History",8,X)]),Z])]),Object(c["i"])("h5",null,Object(c["L"])(e.liveLocation),1)])])})),128))])):(Object(c["z"])(),Object(c["h"])("h1",ee,"No vessel transponders are in range currently."))])])])])}Object(c["A"])();var ie=i("1da1"),ce=(i("96cf"),i("5502")),ae=(i("4001"),i("0b81"),i("6c02")),ne={data:function(){return{iframemapUrl:"https://dashboard.clintonrivertraffic.com/map.html",currentSlide:0,delayDisplay:7,selectedA:void 0}},methods:{updateDelay:function(e){this.delayDisplay=e.target.value,this.$store.commit("toggleLiveAuto",{on:!0,delay:this.delayDisplay})},setSelectedA:function(e){e==this.selectedA?this.selectedA=void 0:(this.selectedA=e,setTimeout(this.restoreSelectedA,1e4))},restoreSelectedA:function(){this.selectedA=void 0}},setup:function(){var e=Object(ce["b"])(),t=Object(c["E"])(null),i=Object(ae["c"])(),a=Object(c["U"])((function(){e.state.a.liveVoiceOn&&e.state.a.playApub&&b(),e.state.a.liveVoiceOn&&e.state.a.playVpub&&u()}));function n(e){i.push(e)}function s(){var e=window.innerWidth;e<=750&&i.push("/live/mobile")}function o(t){e.dispatch("focusMap",t)}function l(){e.state.a.infoOn?e.commit("setInfoOn",!1):e.commit("setInfoOn",!0)}function d(){1==e.state.a.liveVoiceOn?e.dispatch("toggleLiveVoice",!1):0==e.state.a.liveVoiceOn&&(e.dispatch("toggleLiveVoice",!0),p())}function r(){!0===e.state.a.liveAutoOn?e.commit("toggleLiveAuto",{on:!1,delay:500,last:e.state.a.liveAutoDelay}):!1===e.state.a.liveAutoOn&&e.commit("toggleLiveAuto",{on:!0,delay:e.state.a.liveAutoLast})}function u(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],i=new Audio(e.state.a.liveScanModel.announcement.vpubVoiceUrl);i.loop=!1,i.play(),t||e.dispatch("togglePlayVpub",!1)}function b(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],i=new Audio(e.state.a.liveScanModel.waypoint.apubVoiceUrl);i.loop=!1,i.play(),t||e.dispatch("togglePlayApub",!1)}function p(){var t=new Audio(e.state.a.liveScanModel.voiceActivatedUrl);t.loop=!1,t.play().then((function(){return alert("Enable browser's audio play permission if you don't hear an activation announcement.")}))}Object(c["y"])((function(){e.commit("setLogsLinkActive",!1),window.removeEventListener("resize",s),a()}));var v={};return Object(c["x"])(Object(ie["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:window.addEventListener("resize",s),document.addEventListener("keydown",(function(e){v[e.key]=!0,v["Control"]&&v["Shift"]&&"Digit1"==e.code&&(console.log("keypress playWaypoint",e.code),b(!0)),v["Control"]&&v["Shift"]&&"Digit2"==e.code&&(console.log("keypress playAnnouncement",e.code),u(!0))})),document.addEventListener("keyup",(function(e){v[e.key]=!1})),s(),e.commit("initLiveScan",e),e.commit("setPageSelected","Live"),e.commit("toggleLiveList",{on:!1,vh:90,vw:30,zoom:12,center:e.state.a.liveScanModel.mapCenter}),console.log("liveScans.length",e.state.a.liveScans.length),void 0!=e.state.a.liveScans&&e.state.a.liveScans.length?(Object(c["x"])(Object(ie["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:window.addEventListener("resize",s),document.addEventListener("keydown",(function(e){v[e.key]=!0,v["Control"]&&v["Shift"]&&"Digit1"==e.code&&(console.log("keypress playWaypoint",e.code),b(!0)),v["Control"]&&v["Shift"]&&"Digit2"==e.code&&(console.log("keypress playAnnouncement",e.code),u(!0))})),document.addEventListener("keyup",(function(e){v[e.key]=!1})),s(),e.commit("initLiveScan",e),e.commit("setPageSelected","Live"),e.commit("toggleLiveList",{on:!1,vh:90,vw:30,zoom:12,center:e.state.a.liveScanModel.mapCenter}),console.log("liveScans.length",e.state.a.liveScans.length),void 0!=e.state.a.liveScans&&e.state.a.liveScans.length?(e.commit("setSlate",e.state.a.liveScans.length+" LIVE"),e.dispatch("fetchVoiceNotices")):setTimeout((function(){void 0!=e.state.a.liveScans&&e.state.a.liveScans.length&&(e.commit("setSlate",e.state.a.liveScans.length+" LIVE"),e.dispatch("fetchVoiceNotices"))}),1500);case 9:case"end":return t.stop()}}),t)})))),e.dispatch("fetchVoiceNotices")):setTimeout((function(){void 0!=e.state.a.liveScans&&e.state.a.liveScans.length&&(e.commit("setSlate",e.state.a.liveScans.length+" LIVE"),e.dispatch("fetchVoiceNotices"))}),1500);case 9:case"end":return t.stop()}}),t)})))),{store:e,focusMap:o,keysPressed:v,inputDelay:t,checkScreen:s,toggleAuto:r,route:n,toggleLabels:l,toggleLiveVoice:d,playAnnouncement:u,playWaypoint:b,playActivated:p}}};i("de10");ne.render=te,ne.__scopeId="data-v-3ff165df";t["default"]=ne},de10:function(e,t,i){"use strict";i("3629")}}]);
//# sourceMappingURL=chunk-40941b45.a596f691.js.map