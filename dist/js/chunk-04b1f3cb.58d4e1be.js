(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-04b1f3cb"],{"7db9":function(e,t,c){"use strict";c.r(t);c("effa");var n=c("4cf6"),a=c("03ae"),s=(c("b0c0"),c("a4d3"),c("e01a"),c("7a23")),l=function(e){return Object(s["pushScopeId"])("data-v-af56f8e2"),e=e(),Object(s["popScopeId"])(),e},i={class:"detail-container"},r={class:"detail-main"},o={class:"album-cover"},u={class:"album-img"},b={class:"album-info"},d={class:"album-title"},m={class:"album-singer"},j=Object(s["createTextVNode"])(" 歌手："),O={class:"album-time"},p={class:"album-company"},f={key:0,class:"album-desc"},y=Object(s["createTextVNode"])(" 歌单简介"),h=l((function(){return Object(s["createElementVNode"])("i",{class:"iconfont icon-closed"},null,-1)})),g=[h],N={key:0,class:"album-desc-all"},V={class:"song-main"},v={class:"song-header"},S=Object(s["createTextVNode"])(" 歌曲列表 "),k=l((function(){return Object(s["createElementVNode"])("i",{class:"iconfont icon-bofangquanbu"},null,-1)})),w=Object(s["createTextVNode"])(" 播放全部"),E=[k,w],D={class:"album-comments",ref:"comment"},x={class:"aside-box"},C={class:"album-aside album-other"},A={class:"aside-title"},B=Object(s["createTextVNode"])("全部>>"),I={class:"aside-main aside-album-main"},L={class:"aside-album-info"},T={class:"aside-album-name"},R={class:"aside-album-time"};function M(e,t,c,l,h,k){var w=a["a"],M=Object(s["resolveComponent"])("router-link"),_=Object(s["resolveComponent"])("SongList"),q=n["a"];return e.details?(Object(s["openBlock"])(),Object(s["createElementBlock"])("div",{key:0,class:"album",onClick:t[4]||(t[4]=Object(s["withModifiers"])((function(t){return e.isShowDesc=!1}),["stop"]))},[Object(s["createElementVNode"])("div",i,[Object(s["createElementVNode"])("div",r,[Object(s["createElementVNode"])("div",o,[Object(s["createElementVNode"])("div",u,[Object(s["createVNode"])(w,{src:e.details.picUrl,lazy:""},null,8,["src"])]),Object(s["createElementVNode"])("div",b,[Object(s["createElementVNode"])("div",d,[Object(s["createTextVNode"])(Object(s["toDisplayString"])(e.details.name)+" ",1),Object(s["createElementVNode"])("span",null,Object(s["toDisplayString"])("#"+e.details.type),1)]),Object(s["createElementVNode"])("div",m,[j,(Object(s["openBlock"])(!0),Object(s["createElementBlock"])(s["Fragment"],null,Object(s["renderList"])(e.details.artists,(function(e,t){return Object(s["openBlock"])(),Object(s["createBlock"])(M,{to:{path:"/artist/detail",query:{id:e.id}},class:"song_name",key:e.name},{default:Object(s["withCtx"])((function(){return[Object(s["createTextVNode"])(Object(s["toDisplayString"])(0!==t?" / "+e.name:e.name),1)]})),_:2},1032,["to"])})),128))]),Object(s["createElementVNode"])("div",O,"发行时间："+Object(s["toDisplayString"])(e.$utils.formartDate(e.details.publishTime,"yyyy-MM-dd")),1),Object(s["createElementVNode"])("div",p,"发行公司："+Object(s["toDisplayString"])(e.details.company),1),e.details.description?(Object(s["openBlock"])(),Object(s["createElementBlock"])("div",f,[Object(s["createElementVNode"])("h5",null,[y,e.isShowDesc?(Object(s["openBlock"])(),Object(s["createElementBlock"])("em",{key:0,class:"desc-close",onClick:t[0]||(t[0]=function(t){return e.isShowDesc=!1})},g)):Object(s["createCommentVNode"])("",!0)]),Object(s["createElementVNode"])("p",{onClick:t[1]||(t[1]=Object(s["withModifiers"])((function(){return l.showAllDesc&&l.showAllDesc.apply(l,arguments)}),["stop"]))},Object(s["toDisplayString"])(e.details.description),1),e.isShowDesc?(Object(s["openBlock"])(),Object(s["createElementBlock"])("pre",N,"                                "+Object(s["toDisplayString"])(e.details.description)+"\n                            ",1)):Object(s["createCommentVNode"])("",!0)])):Object(s["createCommentVNode"])("",!0)])]),Object(s["createElementVNode"])("div",V,[Object(s["createElementVNode"])("div",v,[Object(s["createElementVNode"])("h4",null,[S,Object(s["createElementVNode"])("em",null,Object(s["toDisplayString"])(e.details.size+"首歌"),1)]),Object(s["createElementVNode"])("span",{class:"play-all",onClick:t[2]||(t[2]=function(){return l.playAllSongs&&l.playAllSongs.apply(l,arguments)})},E),Object(s["createElementVNode"])("span",{class:Object(s["normalizeClass"])(["collect",e.dynamic.isSub?"active":""]),onClick:t[3]||(t[3]=function(){return l.subAlbum&&l.subAlbum.apply(l,arguments)})},[Object(s["createElementVNode"])("i",{class:Object(s["normalizeClass"])(["iconfont","icon-shoucang1"+(e.dynamic.isSub?"-active":"")])},null,2),Object(s["createTextVNode"])(" "+Object(s["toDisplayString"])(e.dynamic.isSub?"已收藏":"收藏"),1)],2)]),Object(s["createVNode"])(_,{songList:e.songList,total:e.songList.length,isScroll:!(e.songList.length>30)},null,8,["songList","total","isScroll"])]),Object(s["createElementVNode"])("div",D,[Object(s["createVNode"])(q,{type:e.type,sId:e.albumId},null,8,["type","sId"])],512)]),Object(s["createElementVNode"])("div",x,[Object(s["createElementVNode"])("div",C,[Object(s["createElementVNode"])("h3",A,[Object(s["createTextVNode"])(Object(s["toDisplayString"])(e.details.artists[0].name)+"的其他专辑",1),Object(s["createVNode"])(M,{to:{path:"/artist/detail/als",query:{id:e.details.artists[0].id}},class:"album-more"},{default:Object(s["withCtx"])((function(){return[B]})),_:1},8,["to"])]),Object(s["createElementVNode"])("div",I,[(Object(s["openBlock"])(!0),Object(s["createElementBlock"])(s["Fragment"],null,Object(s["renderList"])(e.hotAlbums,(function(t){return Object(s["openBlock"])(),Object(s["createBlock"])(M,{class:"aside-album-item",to:{path:"/album",query:{id:t.id}},key:t.id},{default:Object(s["withCtx"])((function(){return[Object(s["createVNode"])(w,{src:t.picUrl,lazy:""},null,8,["src"]),Object(s["createElementVNode"])("div",L,[Object(s["createElementVNode"])("div",T,Object(s["toDisplayString"])(t.name),1),Object(s["createElementVNode"])("div",R,Object(s["toDisplayString"])(e.$utils.formartDate(e.details.publishTime,"yyyy-MM-dd")),1)])]})),_:2},1032,["to"])})),128))])])])])])):Object(s["createCommentVNode"])("",!0)}var _=c("5530"),q=c("1da1"),z=(c("a9e3"),c("96cf"),c("9b9d")),F=c("6c02"),J=c("5502"),P=c("365c"),U={name:"AlbumDetail",components:{SongList:z["default"],Comment:n["a"]},setup:function(){var e=Object(J["b"])(),t=Object(F["d"])(),c=Object(s["reactive"])({albumId:"",details:null,songList:[],dynamic:{},hotAlbums:[],comments:[],type:3,isShowDesc:!1,collects:[]}),n=function(){var e=Object(q["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(P["a"])(t);case 2:n=e.sent,c.details=n.album,c.songList=n.songs,l();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a=function(){var e=Object(q["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(P["c"])(t);case 2:n=e.sent,c.dynamic=n;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(q["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(P["g"])(c.details.artists[0].id,6);case 2:t=e.sent,console.log(t),c.hotAlbums=t.hotAlbums;case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){c.details.description.length>120&&(c.isShowDesc=!c.isShowDesc)},r=function(){e.dispatch("playAll",{list:c.songList}),e.commit("SET_PLAYLISTTIPS",!0)},o=function(){var e=Object(q["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(P["e"])({id:c.albumId,t:Number(!c.dynamic.isSub)});case 2:e.sent,c.dynamic.isSub=Number(!c.dynamic.isSub);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=Object(q["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(P["Q"])(t);case 2:n=e.sent,c.collects=n.subscribers;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){n(c.albumId),a(c.albumId),u(c.albumId)};return Object(s["onMounted"])((function(){c.albumId=t.query.id,b()})),Object(F["c"])((function(e){c.albumId=e.query.id,b()})),Object(_["a"])(Object(_["a"])({},Object(s["toRefs"])(c)),{},{showAllDesc:i,playAllSongs:r,subAlbum:o})}},$=(c("f5f2"),c("6b0d")),Q=c.n($);const Y=Q()(U,[["render",M],["__scopeId","data-v-af56f8e2"]]);t["default"]=Y},b23d:function(e,t,c){},f5f2:function(e,t,c){"use strict";c("b23d")}}]);
//# sourceMappingURL=chunk-04b1f3cb.58d4e1be.js.map