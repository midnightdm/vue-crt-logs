(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5091b67e"],{2317:function(e,t,s){"use strict";s("9d1b")},"76bb":function(e,t,s){"use strict";s.r(t);var n=s("7a23"),l={class:"AdminDetail"},c=Object(n["l"])("Edit data for "),a=Object(n["l"])(" below."),i={class:"container"},u={class:"dmodel"},o={class:"col-12"},r={class:"table table-image"},b=Object(n["i"])("th",{scope:"row"},"MMSI#",-1),O=Object(n["i"])("th",{scope:"row"},"Type",-1),d=Object(n["i"])("th",{scope:"row"},"Name",-1),j=Object(n["i"])("th",{scope:"row"},"Call Sign",-1),v=Object(n["i"])("th",{scope:"row"},"Length",-1),h=Object(n["i"])("th",{scope:"row"},"Width",-1),p=Object(n["i"])("th",{scope:"row"},"Draft",-1),m=Object(n["i"])("th",{scope:"row"},"Owner",-1),f=Object(n["i"])("th",{scope:"row"},"Built",-1),g=Object(n["i"])("th",{scope:"row"},"Has Image?",-1),D=Object(n["l"])("  "),y={key:1},w=Object(n["i"])("th",{scope:"row"},"Is On Watch List?",-1),U=Object(n["l"])("  "),I={key:1},C=Object(n["i"])("th",{scope:"row"},"Image URL",-1),W={colspan:"2",class:"w-25"},k=["src"];function V(e,t,s,V,x,S){return Object(n["z"])(),Object(n["h"])("div",l,[Object(n["i"])("h3",null,[c,Object(n["i"])("span",null,Object(n["L"])(e.vessel.vesselName),1),a]),Object(n["i"])("div",i,[Object(n["i"])("div",u,[Object(n["i"])("div",o,[Object(n["i"])("table",r,[Object(n["i"])("tr",null,[b,Object(n["i"])("td",null,[Object(n["i"])("span",null,Object(n["L"])(e.vessel.vesselID),1)])]),Object(n["i"])("tr",null,[O,Object(n["i"])("td",null,[Object(n["W"])(Object(n["i"])("input",{class:"wfc",name:"vesselType",type:"text","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.vessel.vesselType=t}),onChange:t[1]||(t[1]=function(){return S.changeDetected&&S.changeDetected.apply(S,arguments)})},null,544),[[n["R"],e.vessel.vesselType]])])]),Object(n["i"])("tr",null,[d,Object(n["i"])("td",null,[Object(n["W"])(Object(n["i"])("input",{class:"wfc",name:"vesselName",type:"text","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.vessel.vesselName=t}),onChange:t[3]||(t[3]=function(){return S.changeDetected&&S.changeDetected.apply(S,arguments)})},null,544),[[n["R"],e.vessel.vesselName]])])]),Object(n["i"])("tr",null,[j,Object(n["i"])("td",null,[Object(n["W"])(Object(n["i"])("input",{class:"wfc",name:"vesselCallSign",type:"text","onUpdate:modelValue":t[4]||(t[4]=function(t){return e.vessel.vesselCallSign=t}),onChange:t[5]||(t[5]=function(){return S.changeDetected&&S.changeDetected.apply(S,arguments)})},null,544),[[n["R"],e.vessel.vesselCallSign]])])]),Object(n["i"])("tr",null,[v,Object(n["i"])("td",null,[Object(n["W"])(Object(n["i"])("input",{class:"wfc",name:"vesselLength",type:"text","onUpdate:modelValue":t[6]||(t[6]=function(t){return e.vessel.vesselLength=t}),onChange:t[7]||(t[7]=function(){return S.changeDetected&&S.changeDetected.apply(S,arguments)})},null,544),[[n["R"],e.vessel.vesselLength]])])]),Object(n["i"])("tr",null,[h,Object(n["i"])("td",null,[Object(n["W"])(Object(n["i"])("input",{class:"wfc",name:"vesselWidth",type:"text","onUpdate:modelValue":t[8]||(t[8]=function(t){return e.vessel.vesselWidth=t}),onChange:t[9]||(t[9]=function(){return S.changeDetected&&S.changeDetected.apply(S,arguments)})},null,544),[[n["R"],e.vessel.vesselWidth]])])]),Object(n["i"])("tr",null,[p,Object(n["i"])("td",null,[Object(n["W"])(Object(n["i"])("input",{class:"wfc",name:"vesselDraft",type:"text","onUpdate:modelValue":t[10]||(t[10]=function(t){return e.vessel.vesselDraft=t}),onChange:t[11]||(t[11]=function(){return S.changeDetected&&S.changeDetected.apply(S,arguments)})},null,544),[[n["R"],e.vessel.vesselDraft]])])]),Object(n["i"])("tr",null,[m,Object(n["i"])("td",null,[Object(n["W"])(Object(n["i"])("input",{class:"wfc",name:"vesselOwner",type:"text","onUpdate:modelValue":t[12]||(t[12]=function(t){return e.vessel.vesselOwner=t}),onChange:t[13]||(t[13]=function(){return S.changeDetected&&S.changeDetected.apply(S,arguments)})},null,544),[[n["R"],e.vessel.vesselOwner]])])]),Object(n["i"])("tr",null,[f,Object(n["i"])("td",null,[Object(n["W"])(Object(n["i"])("input",{class:"wfc",name:"vesselBuilt",type:"text","onUpdate:modelValue":t[14]||(t[14]=function(t){return e.vessel.vesselBuilt=t}),onChange:t[15]||(t[15]=function(){return S.changeDetected&&S.changeDetected.apply(S,arguments)})},null,544),[[n["R"],e.vessel.vesselBuilt]])])]),Object(n["i"])("tr",null,[g,Object(n["i"])("td",null,[Object(n["W"])(Object(n["i"])("input",{class:"wfc",type:"checkbox","onUpdate:modelValue":t[16]||(t[16]=function(t){return e.vessel.vesselHasImage=t}),onChange:t[17]||(t[17]=function(){return S.changeDetected&&S.changeDetected.apply(S,arguments)})},null,544),[[n["O"],e.vessel.vesselHasImage]]),D,e.vessel.vesselHasImage?(Object(n["z"])(),Object(n["h"])("span",{key:0,class:Object(n["t"])({watchOn:e.vessel.vesselHasImage})},"Yes",2)):(Object(n["z"])(),Object(n["h"])("span",y,"No"))])]),Object(n["i"])("tr",null,[w,Object(n["i"])("td",null,[Object(n["W"])(Object(n["i"])("input",{class:"wfc",type:"checkbox","onUpdate:modelValue":t[18]||(t[18]=function(t){return e.vessel.vesselWatchOn=t}),onChange:t[19]||(t[19]=function(){return S.changeDetected&&S.changeDetected.apply(S,arguments)})},null,544),[[n["O"],e.vessel.vesselWatchOn]]),U,e.vessel.vesselWatchOn?(Object(n["z"])(),Object(n["h"])("span",{key:0,class:Object(n["t"])({watchOn:e.vessel.vesselWatchOn})},"Yes",2)):(Object(n["z"])(),Object(n["h"])("span",I,"No"))])]),Object(n["i"])("tr",null,[C,Object(n["i"])("td",null,[Object(n["W"])(Object(n["i"])("input",{class:"wfc",name:"vesselImageUrl",type:"text","onUpdate:modelValue":t[20]||(t[20]=function(t){return e.vessel.vesselImageUrl=t}),onChange:t[21]||(t[21]=function(){return S.changeDetected&&S.changeDetected.apply(S,arguments)}),size:"100"},null,544),[[n["R"],e.vessel.vesselImageUrl]])])]),Object(n["i"])("tr",null,[Object(n["i"])("td",W,[Object(n["i"])("img",{"data-bind":"attr: { src: vesselImageUrl, alt:'Image of '+ vesselName}",class:"img-fluid img-thumbnail",src:e.vessel.vesselImageUrl,height:"240"},null,8,k),e.changed?(Object(n["z"])(),Object(n["h"])("button",{key:0,onClick:t[22]||(t[22]=function(e){return S.saveData()}),class:"example_a"},"Save Changes")):Object(n["g"])("",!0),Object(n["i"])("button",{onClick:t[23]||(t[23]=function(e){return S.useDefaultUrl()}),class:"example_b"},"Default URL"),Object(n["i"])("button",{onClick:t[24]||(t[24]=function(e){return S.useOldUrl()}),class:"example_b"},"Old URL"),Object(n["i"])("button",{onClick:t[25]||(t[25]=function(e){return S.useNoImageUrl()}),class:"example_b"},"No Image URL")])])])])])])])}s("a4d3"),s("e01a"),s("d3b7"),s("d28b"),s("3ca3"),s("ddb0");function x(e){return x="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},x(e)}s("cbaa");var S=s("c62b"),R=s("e71f"),N=S["a"],L={props:["vesselID"],mounted:function(){this.refreshData(),this.$store.commit("setSlate","ADMIN"),this.$store.commit("setPageSelected","AdminDetail")},data:function(){return{changed:!1,vessel:"",oldUrl:""}},methods:{refreshData:function(){this.vessel=this.$store.getters.getVesselDetail(this.vesselID)[0],"object"==x(this.vessel)&&(this.oldUrl=this.vessel.vesselImageUrl)},useOldUrl:function(){this.vessel.vesselImageUrl=this.oldUrl,this.changed=!0},useDefaultUrl:function(){this.vessel.vesselImageUrl="https://storage.googleapis.com/www.clintonrivertraffic.comimages/vessels/mmsi"+this.vessel.vesselID+".jpg",this.changed=!0},useNoImageUrl:function(){this.vessel.vesselImageUrl="https://storage.googleapis.com/www.clintonrivertraffic.com/images/vessels/no-image-placard.jpg"},changeDetected:function(){this.changed=!0},saveData:function(){var e=Object.assign({},this.vessel);delete e.index,delete e.vesselRecordAddedDate;var t=Object(R["d"])(N,"Vessels","mmsi"+this.vessel.vesselID);Object(R["l"])(t,e,{merge:!0}),this.changed=!1}}};s("2317");L.render=V;t["default"]=L},"8cfc":function(e,t,s){"use strict";s("cd35")},"9d1b":function(e,t,s){},cbaa:function(e,t,s){"use strict";var n=s("7a23"),l={id:"asub",class:"navigation"},c={class:"nav-link sub"},a=Object(n["l"])("Add"),i={class:"nav-link sub"},u=Object(n["l"])("Vessels"),o={class:"nav-link sub"},r=Object(n["l"])("Subscriptions"),b={class:"nav-link sub"},O=Object(n["l"])(" Dashboard");function d(e,t,s,d,j,v){var h=Object(n["H"])("router-link");return Object(n["z"])(),Object(n["h"])("ul",l,[Object(n["i"])("li",c,[Object(n["m"])(h,{to:{name:"Add"}},{default:Object(n["V"])((function(){return[a]})),_:1})]),Object(n["i"])("li",i,[Object(n["m"])(h,{to:{name:"AdminVessels"}},{default:Object(n["V"])((function(){return[u]})),_:1})]),Object(n["i"])("li",o,[Object(n["m"])(h,{to:{name:"Subscriptions"}},{default:Object(n["V"])((function(){return[r]})),_:1})]),Object(n["i"])("li",b,[Object(n["m"])(h,{to:{name:"AdminAnnouncements"}},{default:Object(n["V"])((function(){return[O]})),_:1})])])}var j={name:"AdminSubMenu"};s("8cfc");j.render=d;t["a"]=j},cd35:function(e,t,s){},d28b:function(e,t,s){var n=s("746f");n("iterator")}}]);
//# sourceMappingURL=chunk-5091b67e.c41e6580.js.map