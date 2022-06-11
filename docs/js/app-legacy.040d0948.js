(function(){"use strict";var t={2565:function(t,e,n){n(6992),n(8674),n(9601),n(7727);var r=n(144),a=n(9132);r.Z.use(a.Z);var o=new a.Z({}),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{attrs:{color:"deep-purple",dark:"",app:""}},[n("v-app-bar-nav-icon",{on:{click:t.toggleNavBar}}),n("v-toolbar-title",[t._v("CSC3007 Assignment")])],1),n("NavBar",{ref:"navbar"}),n("v-main",[n("router-view")],1),n("v-footer",{attrs:{color:"deep-purple",dark:"",app:""}},[t._v("Author: Ng Cheuk Fung")])],1)},u=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-navigation-drawer",{attrs:{absolute:"",temporary:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",{attrs:{nav:"",dense:""}},[n("v-list-item-group",{attrs:{"active-class":"deep-purple--text text--accent-4"},model:{value:t.group,callback:function(e){t.group=e},expression:"group"}},[n("v-list-item",{attrs:{to:"/"}},[n("v-list-item-icon",[n("v-icon",[t._v("mdi-home")])],1),n("v-list-item-title",[t._v("Home")])],1),n("v-list-item",{attrs:{to:"/a1"}},[n("v-list-item-icon",[n("v-icon",[t._v("mdi-weather-hazy")])],1),n("v-list-item-title",[t._v("Assignment 1 - PSI Table")])],1),n("v-list-item",{attrs:{to:"/a2"}},[n("v-list-item-icon",[n("v-icon",[t._v("mdi-account-tie-hat")])],1),n("v-list-item-title",[t._v("Assignment 2 - Crime Rate")])],1)],1)],1)],1)},c=[],l={name:"NavBar",methods:{toggleDrawer:function(){this.drawer=!this.drawer}},data:function(){return{drawer:!1,group:null,items:{}}}},_=l,h=n(1001),f=n(3453),d=n.n(f),v=n(6428),m=n(6816),p=n(7620),y=n(3249),x=n(459),g=n(2710),b=n(9194),w=(0,h.Z)(_,s,c,!1,null,null,null),Z=w.exports;d()(w,{VIcon:v.Z,VList:m.Z,VListItem:p.Z,VListItemGroup:y.Z,VListItemIcon:x.Z,VListItemTitle:g.V9,VNavigationDrawer:b.Z});var C={data:function(){return{}},methods:{toggleNavBar:function(){this.$refs.navbar.toggleDrawer()}},components:{NavBar:Z}},k=C,S=n(7524),I=n(8320),O=n(5206),V=n(899),j=n(7877),D=n(7921),T=(0,h.Z)(k,i,u,!1,null,null,null),H=T.exports;d()(T,{VApp:S.Z,VAppBar:I.Z,VAppBarNavIcon:O.Z,VFooter:V.Z,VMain:j.Z,VToolbarTitle:D.qW});var L=n(8345),M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{"fill-height":"",fluid:""}},[n("v-row",{attrs:{align:"center",justify:"center"}},[n("div",{staticClass:"text-center"},[n("h1",[t._v("Homepage of Cheuk Fung's CSC3007 Assignments")])])])],1)},P=[],N=n(247),A=n(2877),B={},E=(0,h.Z)(B,M,P,!1,null,null,null),z=E.exports;d()(E,{VContainer:N.Z,VRow:A.Z});var R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:""}},[n("v-row",{staticClass:"py-6",attrs:{justify:"center"}},[n("h1",[t._v("Singapore Air Quality Table")])]),n("v-row",{staticClass:"py-6",attrs:{justify:"center"}},[n("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.locations,"hide-default-footer":!0}})],1),n("v-row",{attrs:{justify:"center"}},[n("h3",[t._v("Updated as of: "+t._s(this.updateTime))])])],1)},U=[],$=n(7906),F=n(5200),Y=n(6198),q=(n(1539),n(4747),n(9720),n(7327),n(8309),n(9669)),G=n.n(q),W=G(),K={install:function(t){t.prototype.$axios=G()}},Q={methods:{fetchUpdateData:function(){var t=(0,Y.Z)((0,$.Z)().mark((function t(){var e=this;return(0,$.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,W.get("https://api.data.gov.sg/v1/environment/psi").then((function(t){var n=t.data.items[0].readings;Object.entries(n).forEach((function(t){var n=(0,F.Z)(t,2),r=n[0],a=n[1];Object.entries(a).forEach((function(t){var n=(0,F.Z)(t,2),a=n[0],o=n[1];switch(a){case"west":e.locations.filter((function(t){return"West"==t.name}))[0][r]=o;break;case"central":e.locations.filter((function(t){return"Central"==t.name}))[0][r]=o;break;case"north":e.locations.filter((function(t){return"North"==t.name}))[0][r]=o;break;case"south":e.locations.filter((function(t){return"South"==t.name}))[0][r]=o;break;case"east":e.locations.filter((function(t){return"East"==t.name}))[0][r]=o;break;case"national":e.locations.filter((function(t){return"National"==t.name}))[0][r]=o;break;default:break}}))})),e.updateTime=new Date(t.data.items[0].update_timestamp)}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}()},created:function(){var t=this;this.interval=setInterval((function(){return t.fetchUpdateData()}),3e3)},destroyed:function(){clearInterval(this.interval)},data:function(){return{updateTime:null,headers:[{text:"Location",align:"start",sortable:!1,value:"name"},{text:"O3 Sub Index",value:"o3_sub_index"},{text:"O3 8H Max",value:"o3_eight_hour_max"},{text:"PM10 Sub Index",value:"pm10_sub_index"},{text:"PM10 24H Hourly",value:"pm10_twenty_four_hourly"},{text:"PM2.5 Sub Index",value:"pm25_sub_index"},{text:"PM2.5 24H Hourly ",value:"pm25_twenty_four_hourly"},{text:"SO2 Sub Index",value:"so2_sub_index"},{text:"SO2 24H Hourly",value:"so2_twenty_four_hourly"},{text:"CO Sub Index",value:"co_sub_index"},{text:"CO 8H Max",value:"co_eight_hour_max"},{text:"NO2 1H Max",value:"no2_one_hour_max"},{text:"PSI 24H Max",value:"psi_twenty_four_hourly"}],locations:[{name:"National",o3_sub_index:0,o3_eight_hour_max:0,pm10_sub_index:0,pm10_twenty_four_hourly:0,pm25_sub_index:0,pm25_twenty_four_hourly:0,so2_sub_index:0,so2_twenty_four_hourly:0,co_sub_index:0,co_eight_hour_max:0,no2_one_hour_max:0,psi_twenty_four_hourly:0},{name:"North",o3_sub_index:0,o3_eight_hour_max:0,pm10_sub_index:0,pm10_twenty_four_hourly:0,pm25_sub_index:0,pm25_twenty_four_hourly:0,so2_sub_index:0,so2_twenty_four_hourly:0,co_sub_index:0,co_eight_hour_max:0,no2_one_hour_max:0,psi_twenty_four_hourly:0},{name:"South",o3_sub_index:0,o3_eight_hour_max:0,pm10_sub_index:0,pm10_twenty_four_hourly:0,pm25_sub_index:0,pm25_twenty_four_hourly:0,so2_sub_index:0,so2_twenty_four_hourly:0,co_sub_index:0,co_eight_hour_max:0,no2_one_hour_max:0,psi_twenty_four_hourly:0},{name:"East",o3_sub_index:0,o3_eight_hour_max:0,pm10_sub_index:0,pm10_twenty_four_hourly:0,pm25_sub_index:0,pm25_twenty_four_hourly:0,so2_sub_index:0,so2_twenty_four_hourly:0,co_sub_index:0,co_eight_hour_max:0,no2_one_hour_max:0,psi_twenty_four_hourly:0},{name:"West",o3_sub_index:0,o3_eight_hour_max:0,pm10_sub_index:0,pm10_twenty_four_hourly:0,pm25_sub_index:0,pm25_twenty_four_hourly:0,so2_sub_index:0,so2_twenty_four_hourly:0,co_sub_index:0,co_eight_hour_max:0,no2_one_hour_max:0,psi_twenty_four_hourly:0},{name:"Central",o3_sub_index:0,o3_eight_hour_max:0,pm10_sub_index:0,pm10_twenty_four_hourly:0,pm25_sub_index:0,pm25_twenty_four_hourly:0,so2_sub_index:0,so2_twenty_four_hourly:0,co_sub_index:0,co_eight_hour_max:0,no2_one_hour_max:0,psi_twenty_four_hourly:0}]}}},J=Q,X=n(2090),tt=(0,h.Z)(J,R,U,!1,null,null,null),et=tt.exports;d()(tt,{VContainer:N.Z,VDataTable:X.Z,VRow:A.Z});var nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:""}},[n("v-row",{staticClass:"py-6",attrs:{justify:"center"}},[n("h1",[t._v("Crime Rate")])]),n("v-row",{staticClass:"py-3",attrs:{justify:"center"},domProps:{innerHTML:t._s(t.chart)}}),n("v-row",{staticClass:"py-3",attrs:{justify:"center"}},[t._v(" Some bars might not be visible due to small values. You may use the dropdown menu below to inspect individual crime categories. ")]),n("v-row",{staticClass:"py-3",attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"3"}},[n("v-select",{attrs:{label:"Choose a category",dense:"",outlined:"",items:t.crimes},on:{change:t.onSelectChange}})],1)],1),n("v-row",{staticClass:"py-3",attrs:{justify:"center"},domProps:{innerHTML:t._s(t.selectChart)}})],1)},rt=[],at=(n(6699),n(2023),n(2222),n(9600),n(8331)),ot={data:function(){return{crimeyear:[],years:[],crimes:[],chart:null,selectChart:null,data:null}},methods:{fetchCrimeData:function(){var t=(0,Y.Z)((0,$.Z)().mark((function t(){var e=this;return(0,$.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,W.get("https://data.gov.sg/api/action/datastore_search?resource_id=83c21090-bd19-4b54-ab6b-d999c251edcf").then((function(t){var n=t.data.result.records;e.data=n,n.forEach((function(t){e.crimeyear.push({crime:t["level_2"],year:t["year"],value:parseInt(t["value"])}),e.years.includes(t["year"])||e.years.push(t["year"]),e.crimes.includes(t["level_2"])||e.crimes.push(t["level_2"])}))}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}(),onSelectChange:function(t){var e=[],n=[];this.data.forEach((function(r){r["level_2"]==t&&(e.push({crime:r["level_2"],year:r["year"],value:parseInt(r["value"])}),n.push(r["year"]))})),this.selectChart=this.groupedBarChart(e,{x:function(t){return t.crime},y:function(t){return t.value},z:function(t){return t.year},xDomain:at.IRY(e,(function(t){return at.Smz(t,(function(t){return-t.value}))}),(function(t){return t.crime})),yLabel:"Cases",zDomain:n,colors:at.lqd[n.length],width:1400,height:550}).outerHTML},groupedBarChart:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.x,r=void 0===n?function(t,e){return e}:n,a=e.y,o=void 0===a?function(t){return t}:a,i=e.z,u=void 0===i?function(){return 1}:i,s=e.title,c=e.marginTop,l=void 0===c?30:c,_=e.marginRight,h=void 0===_?0:_,f=e.marginBottom,d=void 0===f?30:f,v=e.marginLeft,m=void 0===v?40:v,p=e.width,y=void 0===p?640:p,x=e.height,g=void 0===x?400:x,b=e.xDomain,w=e.xRange,Z=void 0===w?[m,y-h]:w,C=e.xPadding,k=void 0===C?.1:C,S=e.yType,I=void 0===S?at.BYU:S,O=e.yDomain,V=e.yRange,j=void 0===V?[g-d,l]:V,D=e.zDomain,T=e.zPadding,H=void 0===T?.05:T,L=e.yFormat,M=e.yLabel,P=e.colors,N=void 0===P?at.K2I:P,A=at.UID(t,r),B=at.UID(t,o),E=at.UID(t,u);void 0===b&&(b=A),void 0===O&&(O=[0,at.Fp7(B)]),void 0===D&&(D=E),b=new at.H0G(b),D=new at.H0G(D);var z=at.w6H(A.length).filter((function(t){return b.has(A[t])&&D.has(E[t])})),R=at.tiA(b,Z).paddingInner(k),U=at.tiA(D,[0,R.bandwidth()]).padding(H),$=I(O,j),F=at.PKp(D,N),Y=at.LLu(R).tickSizeOuter(0),q=at.y4O($).ticks(g/60,L);if(void 0===s){var G=$.tickFormat(100,L);s=function(t){return"".concat(A[t],"\n").concat(E[t],"\n").concat(G(B[t]))}}else{var W=at.UID(t,(function(t){return t})),K=s;s=function(e){return K(W[e],e,t)}}var Q=at.Ue8("svg").attr("width",y).attr("height",g).attr("viewBox",[0,0,y,g]).attr("style","max-width: 100%; height: auto; height: intrinsic;");Q.append("g").attr("transform","translate(".concat(m,",0)")).call(q).call((function(t){return t.select(".domain").remove()})).call((function(t){return t.selectAll(".tick line").clone().attr("x2",y-m-h).attr("stroke-opacity",.1)})).call((function(t){return t.append("text").attr("x",-m).attr("y",10).attr("fill","currentColor").attr("text-anchor","start").text(M)}));var J=Q.append("g").selectAll("rect").data(z).join("rect").attr("x",(function(t){return R(A[t])+U(E[t])})).attr("y",(function(t){return $(B[t])})).attr("width",U.bandwidth()).attr("height",(function(t){return $(0)-$(B[t])})).attr("fill",(function(t){return F(E[t])}));return s&&J.append("title").text(s),Q.append("g").attr("transform","translate(0,".concat(g-d,")")).call(Y),Object.assign(Q.node(),{scales:{color:F}})}},mounted:function(){var t=this;return(0,Y.Z)((0,$.Z)().mark((function e(){return(0,$.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.fetchCrimeData();case 2:t.chart=t.groupedBarChart(t.crimeyear,{x:function(t){return t.crime},y:function(t){return t.value},z:function(t){return t.year},xDomain:at.IRY(t.crimeyear,(function(t){return at.Smz(t,(function(t){return-t.value}))}),(function(t){return t.crime})),yLabel:"Cases",zDomain:t.years,colors:at.lqd[t.years.length],width:1400,height:550}).outerHTML;case 3:case"end":return e.stop()}}),e)})))()}},it=ot,ut=n(2102),st=n(6784),ct=(0,h.Z)(it,nt,rt,!1,null,null,null),lt=ct.exports;d()(ct,{VCol:ut.Z,VContainer:N.Z,VRow:A.Z,VSelect:st.Z});var _t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{"fill-height":"",fluid:""}},[n("v-row",{attrs:{align:"center",justify:"center"}},[n("div",{staticClass:"text-center"},[n("h1",[t._v("404 Page Not Found")])])])],1)},ht=[],ft={},dt=(0,h.Z)(ft,_t,ht,!1,null,null,null),vt=dt.exports;d()(dt,{VContainer:N.Z,VRow:A.Z}),r.Z.use(L.Z);var mt=new L.Z({mode:"hash",base:"/CSC3007-assignment2/",routes:[{path:"/",name:"home",components:{default:z}},{path:"/a1",name:"a1",components:{default:et}},{path:"/a2",name:"a2",components:{default:lt}},{path:"*",components:{default:vt}}]});r.Z.config.productionTip=!1,r.Z.use(K),new r.Z({router:mt,vuetify:o,render:function(t){return t(H)}}).$mount("#app")}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={exports:{}};return t[r](o,o.exports,n),o.exports}n.m=t,function(){var t=[];n.O=function(e,r,a,o){if(!r){var i=1/0;for(l=0;l<t.length;l++){r=t[l][0],a=t[l][1],o=t[l][2];for(var u=!0,s=0;s<r.length;s++)(!1&o||i>=o)&&Object.keys(n.O).every((function(t){return n.O[t](r[s])}))?r.splice(s--,1):(u=!1,o<i&&(i=o));if(u){t.splice(l--,1);var c=a();void 0!==c&&(e=c)}}return e}o=o||0;for(var l=t.length;l>0&&t[l-1][2]>o;l--)t[l]=t[l-1];t[l]=[r,a,o]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,r){var a,o,i=r[0],u=r[1],s=r[2],c=0;if(i.some((function(e){return 0!==t[e]}))){for(a in u)n.o(u,a)&&(n.m[a]=u[a]);if(s)var l=s(n)}for(e&&e(r);c<i.length;c++)o=i[c],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(l)},r=self["webpackChunkcsc3007_assignment2_crime_rate"]=self["webpackChunkcsc3007_assignment2_crime_rate"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(2565)}));r=n.O(r)})();
//# sourceMappingURL=app-legacy.040d0948.js.map