webpackJsonp([1],{100:function(n,t,e){"use strict";e.d(t,"a",function(){return i});var i=function(){function n(){}return n}()},104:function(n,t,e){"use strict";e.d(t,"a",function(){return u});var i=(e(2),e(31),e(13),e(18),e(51),{normal:4,medium:2,small:1}),l={normal:"20em",medium:"20em",small:"20em"},u=function(){function n(n,t,e,u){this._mediaService=n,this._ngZone=t,this.router=e,this.storyService=u,this.stories=[],this.grid={cols:i.normal,rowHeight:l.normal},this.stories=this.storyService.getStories()}return n.prototype.setGridSettings=function(n){this.grid={cols:i[n],rowHeight:l[n]}},n.prototype.watchScreen=function(){var n=this;this._querySubscriptions=[],this._querySubscriptions.push(this._mediaService.registerQuery("sm").subscribe(function(t){n._ngZone.run(function(){t&&n.setGridSettings("medium")})})),this._querySubscriptions.push(this._mediaService.registerQuery("xs").subscribe(function(t){n._ngZone.run(function(){t&&n.setGridSettings("small")})})),this._querySubscriptions.push(this._mediaService.registerQuery("gt-sm").subscribe(function(t){n._ngZone.run(function(){t&&n.setGridSettings("normal")})}))},n.prototype.ngOnInit=function(){this.watchScreen()},n.prototype.ngOnDestroy=function(){this._querySubscriptions.forEach(function(n){return n.unsubscribe()})},n}()},153:function(n,t){function e(n){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+n+"'.")})}e.keys=function(){return[]},e.resolve=e,n.exports=e,e.id=153},154:function(n,t,e){"use strict";e.d(t,"a",function(){return i});var i=function(){function n(){}return n}()},155:function(n,t){n.exports='[\r\n\t{ \r\n    "id": "thervu",\r\n    "name": "தேர்வு"\r\n  },\r\n\t{\r\n    "id": "dharisanam",\r\n    "name": "தரிசனம்"\r\n  },\r\n  {\r\n    "id": "engineer",\r\n    "name": "எஞ்சினியர்"\r\n  },\r\n\t{\r\n    "id": "yendhiram",\r\n    "name": "யந்திரம்"\r\n  },\r\n\t{\r\n    "id": "thambi",\r\n    "name": "தம்பி"\r\n  }\r\n]'},158:function(n,t,e){"use strict";e.d(t,"a",function(){return i});var i=(e(13),e(31),function(){function n(n,t){this._mediaService=n,this.router=t}return n.prototype.getView=function(){var n="normal";return this._mediaService.query("sm")?n="medium":this._mediaService.query("xs")&&(n="small"),n},n.prototype.gotoStory=function(){this.router.navigate(["/story/"+this.content.id+"/"+this.getView()+"/1"])},n}())},159:function(n,t,e){"use strict";e.d(t,"a",function(){return i});var i=(e(2),e(13),e(6),function(){function n(n,t){this.router=n,this.location=t,this.slideState="visible"}return n.prototype.ngOnInit=function(){var n=this;this.router.events.subscribe(function(t){n.slideState=null==n.location.path().match(/.*\/story\/.*\/.*\/[0-9]+.*/g)?"visible":"hidden"})},n.prototype.ngOnDestroy=function(){},n}())},199:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=e(200),l=(e.n(i),e(2)),u=e(314),r=(e.n(u),e(315)),o=e(316),a=e(23);r.a.production&&Object(l._7)(),a.j().bootstrapModuleFactory(o.a,{}).catch(function(n){return console.log(n)})},200:function(n,t){},315:function(n,t,e){"use strict";e.d(t,"a",function(){return i});var i={production:!1}},316:function(n,t,e){"use strict";e.d(t,"a",function(){return F});var i=e(2),l=e(317),u=e(154),r=e(318),o=e(319),a=e(321),s=e(324),c=e(326),f=e(331),p=e(6),_=e(23),d=e(156),h=e(52),g=e(338),m=e(339),v=e(13),b=e(31),y=e(103),S=e(51),w=e(32),k=e(27),O=e(28),C=e(106),P=e(105),j=e(101),D=e(340),x=e(98),M=e(99),q=e(100),z=e(104),T=e(341),F=i._26(l.a,[u.a],function(n){return i._35([i._36(512,i.m,i._15,[[8,[r.a,o.a,a.a,s.a,c.a,f.a]],[3,i.m],i.G]),i._36(5120,i.C,i._24,[[3,i.C]]),i._36(4608,p.j,p.i,[i.C,[2,p.q]]),i._36(5120,i.c,i._21,[]),i._36(5120,i.A,i._22,[]),i._36(5120,i.B,i._23,[]),i._36(4608,_.c,_.r,[p.c]),i._36(6144,i.S,null,[_.c]),i._36(4608,_.f,_.g,[]),i._36(5120,_.d,function(n,t,e,i,l,u,r){return[new _.k(n,t,e),new _.o(i),new _.n(l,u,r)]},[p.c,i.I,[2,i.L],p.c,p.c,_.f,i._16]),i._36(4608,_.e,_.e,[_.d,i.I]),i._36(135680,_.m,_.m,[p.c]),i._36(4608,_.l,_.l,[_.e,_.m]),i._36(5120,d.a,h.e,[]),i._36(5120,d.c,h.f,[]),i._36(4608,d.b,h.d,[p.c,d.a,d.c]),i._36(5120,i.Q,h.g,[_.l,d.b,i.I]),i._36(6144,_.p,null,[_.m]),i._36(4608,i.Z,i.Z,[i.I]),i._36(4608,_.h,_.h,[p.c]),i._36(4608,_.i,_.i,[p.c]),i._36(4608,g.h,g.n,[p.c,i.L,g.l]),i._36(4608,g.o,g.o,[g.h,g.m]),i._36(5120,g.a,function(n){return[n]},[g.o]),i._36(4608,g.k,g.k,[]),i._36(6144,g.i,null,[g.k]),i._36(4608,g.g,g.g,[g.i]),i._36(6144,g.b,null,[g.g]),i._36(4608,g.f,g.j,[g.b,i.y]),i._36(4608,g.c,g.c,[g.f]),i._36(4608,m.c,m.c,[]),i._36(5120,v.a,v.x,[v.k]),i._36(4608,v.d,v.d,[]),i._36(6144,v.f,null,[v.d]),i._36(135680,v.o,v.o,[v.k,i.F,i.k,i.y,v.f]),i._36(4608,v.e,v.e,[]),i._36(5120,v.h,v.A,[v.y]),i._36(5120,i.b,function(n){return[n]},[v.h]),i._36(5120,b.c,b.b,[[3,b.c],i.I]),i._36(4608,y.b,h.c,[i.Q,_.b]),i._36(135680,S.a,S.a,[_.c]),i._36(1073742336,p.b,p.b,[]),i._36(1024,i.q,_.q,[]),i._36(1024,i.H,function(){return[v.t()]},[]),i._36(512,v.y,v.y,[i.y]),i._36(1024,i.d,function(n,t){return[_.s(n),v.z(t)]},[[2,i.H],v.y]),i._36(512,i.e,i.e,[[2,i.d]]),i._36(131584,i.g,i.g,[i.I,i._16,i.y,i.q,i.m,i.e]),i._36(1073742336,i.f,i.f,[i.g]),i._36(1073742336,_.a,_.a,[[3,_.a]]),i._36(1073742336,g.e,g.e,[]),i._36(1073742336,g.d,g.d,[]),i._36(1073742336,m.b,m.b,[]),i._36(1073742336,m.a,m.a,[]),i._36(1073742336,w.a,w.a,[]),i._36(1073742336,k.c,k.c,[[2,k.a]]),i._36(1073742336,O.b,O.b,[]),i._36(1073742336,k.h,k.h,[]),i._36(1073742336,C.c,C.c,[]),i._36(1073742336,P.b,P.b,[]),i._36(1073742336,k.e,k.e,[]),i._36(1073742336,j.b,j.b,[]),i._36(1073742336,D.a,D.a,[]),i._36(1024,v.s,v.v,[[3,v.k]]),i._36(512,v.q,v.c,[]),i._36(512,v.b,v.b,[]),i._36(256,v.g,{},[]),i._36(1024,p.g,v.u,[p.m,[2,p.a],v.g]),i._36(512,p.f,p.f,[p.g]),i._36(512,i.k,i.k,[]),i._36(512,i.F,i.W,[i.k,[2,i.X]]),i._36(1024,v.i,function(){return[[{path:"story/:name",component:x.a,children:[{path:":view/:page",component:M.a},{path:"",redirectTo:"normal/1",pathMatch:"full"}]},{path:"home",component:q.a},{path:"short-stories",component:z.a},{path:"",redirectTo:"/home",pathMatch:"full"}]]},[]),i._36(1024,v.k,v.w,[i.g,v.q,v.b,p.f,i.y,i.F,i.k,v.i,v.g,[2,v.p],[2,v.j]]),i._36(1073742336,v.m,v.m,[[2,v.s],[2,v.k]]),i._36(1073742336,T.a,T.a,[]),i._36(1073742336,b.a,b.a,[]),i._36(1073742336,h.b,h.b,[]),i._36(1073742336,l.a,l.a,[]),i._36(256,i._14,!0,[]),i._36(256,g.l,"XSRF-TOKEN",[]),i._36(256,g.m,"X-XSRF-TOKEN",[]),i._36(256,h.a,"BrowserAnimations",[])])})},317:function(n,t,e){"use strict";e.d(t,"a",function(){return i});var i=function(){function n(){}return n}()},319:function(n,t,e){"use strict";function i(n){return r._43(0,[(n()(),r._29(0,0,null,null,2,"div",[],null,null,null,null,null)),(n()(),r._29(1,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),r._28(2,212992,null,0,o.n,[o.b,r._2,r.m,[8,null],r.j],null,null)],function(n,t){n(t,2,0)},null)}function l(n){return r._43(0,[(n()(),r._29(0,0,null,null,1,"bv-reader",[],null,null,null,i,c)),r._28(1,49152,null,0,a.a,[],null,null)],null,null)}e.d(t,"a",function(){return f});var u=e(320),r=e(2),o=e(13),a=e(98),s=[u.a],c=r._27({encapsulation:0,styles:s,data:{}}),f=r._25("bv-reader",a.a,l,{},{},[])},320:function(n,t,e){"use strict";e.d(t,"a",function(){return i});var i=["div[_ngcontent-%COMP%] {\n  padding: 1.5vh 1.5vw 1.5vh 1.5vw;\n  background-color: #efeeee;\n  height: -webkit-fill-available; }"]},321:function(n,t,e){"use strict";function i(n){return r._43(0,[(n()(),r._29(0,0,null,null,1,"div",[["class","content-div"]],[[8,"innerHTML",1]],null,null,null,null)),r._28(1,278528,null,0,o.k,[r.B,r.p,r.P],{ngStyle:[0,"ngStyle"]},null)],function(n,t){n(t,1,0,t.component.pageStyle)},function(n,t){n(t,0,0,t.component.pageContent)})}function l(n){return r._43(0,[(n()(),r._29(0,0,null,null,1,"bv-reader-content",[],null,null,null,i,d)),r._28(1,245760,null,0,a.a,[s.c,c.a,c.k,r.I,f.a,p.c],null,null)],function(n,t){n(t,1,0)},null)}e.d(t,"a",function(){return h});var u=e(322),r=e(2),o=e(6),a=e(99),s=e(31),c=e(13),f=e(51),p=e(23),_=[u.a],d=r._27({encapsulation:0,styles:_,data:{}}),h=r._25("bv-reader-content",a.a,l,{},{},[])},322:function(n,t,e){"use strict";e.d(t,"a",function(){return i});var i=[".content-div[_ngcontent-%COMP%] {\n  text-align: justify; }"]},323:function(n,t,e){function i(n){var t=l[n];return t?Promise.all(t.slice(1).map(e.e)).then(function(){return e(t[0])}):Promise.reject(new Error("Cannot find module '"+n+"'."))}var l={"./storiesList.json":[155],"./thervu.json":[342,0]};i.keys=function(){return Object.keys(l)},i.id=323,n.exports=i},324:function(n,t,e){"use strict";function i(n){return r._43(0,[(n()(),r._29(0,0,null,null,5,"header",[["class","mat-elevation-z0"]],null,null,null,null,null)),(n()(),r._29(1,0,null,null,4,"div",[["class","center-div"]],null,null,null,null,null)),(n()(),r._29(2,0,null,null,1,"h1",[["class","mat-display-2"]],null,null,null,null,null)),(n()(),r._42(-1,null,["சகாவின் கதைகள் "])),(n()(),r._29(4,0,null,null,1,"span",[["class","mat-headline"]],null,null,null,null,null)),(n()(),r._42(-1,null,["கதை கவிதை கட்டுரை"]))],null,null)}function l(n){return r._43(0,[(n()(),r._29(0,0,null,null,1,"bv-landing-page",[],null,null,null,i,s)),r._28(1,49152,null,0,o.a,[],null,null)],null,null)}e.d(t,"a",function(){return c});var u=e(325),r=e(2),o=e(100),a=[u.a],s=r._27({encapsulation:0,styles:a,data:{}}),c=r._25("bv-landing-page",o.a,l,{},{},[])},325:function(n,t,e){"use strict";e.d(t,"a",function(){return i});var i=["header[_ngcontent-%COMP%] {\n  background: #3f51b5;\n  color: #fff;\n  height: 45vh;\n  position: relative;\n  padding-top: 18vh; }\n\n.center-div[_ngcontent-%COMP%] {\n  text-align: -webkit-center;\n  position: relative;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n  -ms-transform: translateY(-50%);\n  transform: translateY(-50%); }\n\n.center-div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: relative;\n  top: -5vh; }"]},326:function(n,t,e){"use strict";function i(n){return o._43(0,[(n()(),o._29(0,0,null,null,3,"mat-grid-tile",[["class","mat-grid-tile"]],null,null,null,a.d,a.b)),o._28(1,49152,[[1,4]],0,s.c,[o.p],null,null),(n()(),o._29(2,0,null,0,1,"bv-grid-content",[],null,null,null,c.b,c.a)),o._28(3,49152,null,0,f.a,[p.c,_.k],{content:[0,"content"]},null)],function(n,t){n(t,3,0,t.context.$implicit)},null)}function l(n){return o._43(0,[(n()(),o._29(0,0,null,null,5,"div",[],null,null,null,null,null)),(n()(),o._29(1,0,null,null,4,"mat-grid-list",[["class","mat-grid-list"]],null,null,null,a.c,a.a)),o._28(2,2211840,null,1,s.a,[o.p,[2,d.b]],{cols:[0,"cols"],rowHeight:[1,"rowHeight"]},null),o._40(603979776,1,{_tiles:1}),(n()(),o._20(16777216,null,0,1,null,i)),o._28(5,802816,null,0,h.h,[o._2,o.Y,o.A],{ngForOf:[0,"ngForOf"]},null)],function(n,t){var e=t.component;n(t,2,0,e.grid.cols,e.grid.rowHeight),n(t,5,0,e.stories)},null)}function u(n){return o._43(0,[(n()(),o._29(0,0,null,null,1,"bv-grid-view",[],null,null,null,l,b)),o._28(1,245760,null,0,g.a,[p.c,o.I,_.k,m.a],null,null)],function(n,t){n(t,1,0)},null)}e.d(t,"a",function(){return y});var r=e(327),o=e(2),a=e(328),s=e(101),c=e(329),f=e(158),p=e(31),_=e(13),d=e(32),h=e(6),g=e(104),m=e(51),v=[r.a],b=o._27({encapsulation:0,styles:v,data:{}}),y=o._25("bv-grid-view",g.a,u,{},{},[])},327:function(n,t,e){"use strict";e.d(t,"a",function(){return i});var i=["div[_ngcontent-%COMP%] {\n  padding: 4.5em 4vw 4vh 4vw;\n  background-color: #efefef; }\n\nbv-grid-content[_ngcontent-%COMP%] {\n  height: 98%;\n  width: 98%;\n  display: table;\n  text-align: center;\n  background-color: #ffffff; }"]},329:function(n,t,e){"use strict";function i(n){return r._43(0,[(n()(),r._29(0,0,null,null,2,"div",[["class","mat-elevation-z2 content-div"]],null,[[null,"click"]],function(n,t,e){var i=!0,l=n.component;if("click"===t){i=!1!==l.gotoStory()&&i}return i},null,null)),(n()(),r._29(1,0,null,null,1,"span",[["class","mat-display-1"]],null,null,null,null,null)),(n()(),r._42(2,null,["",""]))],null,function(n,t){n(t,2,0,t.component.content.name)})}function l(n){return r._43(0,[(n()(),r._29(0,0,null,null,1,"bv-grid-content",[],null,null,null,i,f)),r._28(1,49152,null,0,o.a,[a.c,s.k],null,null)],null,null)}e.d(t,"a",function(){return f}),t.b=i;var u=e(330),r=e(2),o=e(158),a=e(31),s=e(13),c=[u.a],f=r._27({encapsulation:0,styles:c,data:{}});r._25("bv-grid-content",o.a,l,{content:"content"},{},[])},330:function(n,t,e){"use strict";e.d(t,"a",function(){return i});var i=[".content-div[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  display: table-cell;\n  vertical-align: middle; }"]},331:function(n,t,e){"use strict";function i(n){return r._43(0,[(n()(),r._29(0,0,null,null,3,"bv-nav-bar",[["class","mat-elevation-z8"]],[[40,"@slideUpAndDown",0]],null,null,o.b,o.a)),r._39(512,null,a.g,a.l,[a.m,[2,a.a]]),r._39(512,null,a.f,a.f,[a.g]),r._28(3,245760,null,0,s.a,[c.k,a.f],null,null),(n()(),r._29(4,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),r._28(5,212992,null,0,c.n,[c.b,r._2,r.m,[8,null],r.j],null,null)],function(n,t){n(t,3,0),n(t,5,0)},function(n,t){n(t,0,0,r._38(t,3).slideState)})}function l(n){return r._43(0,[(n()(),r._29(0,0,null,null,1,"bv-app-root",[],null,null,null,i,_)),r._28(1,49152,null,0,f.a,[],null,null)],null,null)}e.d(t,"a",function(){return d});var u=e(332),r=e(2),o=e(333),a=e(6),s=e(159),c=e(13),f=e(154),p=[u.a],_=r._27({encapsulation:0,styles:p,data:{}}),d=r._25("bv-app-root",f.a,l,{},{},[])},332:function(n,t,e){"use strict";e.d(t,"a",function(){return i});var i=["bv-nav-bar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 2; }\n\nbv-landing-page[_ngcontent-%COMP%] {\n  padding-top: 8vh;\n  display: block; }"]},333:function(n,t,e){"use strict";function i(n){return r._43(0,[(n()(),r._29(0,0,null,null,9,"mat-toolbar",[["class","mat-primary mat-toolbar"]],[[2,"mat-toolbar-multiple-rows",null],[2,"mat-toolbar-single-row",null]],null,null,o.b,o.a)),r._28(1,4243456,null,1,a.a,[r.p,s.a,c.c],null,null),r._40(603979776,1,{_toolbarRows:1}),(n()(),r._29(3,0,null,0,6,"a",[["mat-button",""],["routerLink","/short-stories"]],[[1,"tabindex",0],[1,"disabled",0],[1,"aria-disabled",0],[2,"_mat-animation-noopable",null],[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,t,e){var i=!0;if("click"===t){i=!1!==r._38(n,4)._haltDisabledEvents(e)&&i}if("click"===t){i=!1!==r._38(n,5).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&i}return i},f.b,f.a)),r._28(4,180224,null,0,p.a,[s.a,_.a,r.p,[2,d.a]],null,null),r._28(5,671744,null,0,h.l,[h.k,h.a,c.g],{routerLink:[0,"routerLink"]},null),(n()(),r._29(6,0,null,0,1,"i",[["class","material-icons mat-20"]],null,null,null,null,null)),(n()(),r._42(-1,null,["book"])),(n()(),r._29(8,0,null,0,1,"span",[["class","icon-span"]],null,null,null,null,null)),(n()(),r._42(-1,null,["சிறுகதைகள்"]))],function(n,t){n(t,5,0,"/short-stories")},function(n,t){n(t,0,0,r._38(t,1)._toolbarRows.length,!r._38(t,1)._toolbarRows.length),n(t,3,0,r._38(t,4).disabled?-1:0,r._38(t,4).disabled||null,r._38(t,4).disabled.toString(),"NoopAnimations"===r._38(t,4)._animationMode,r._38(t,5).target,r._38(t,5).href)})}function l(n){return r._43(0,[(n()(),r._29(0,0,null,null,3,"bv-nav-bar",[],[[40,"@slideUpAndDown",0]],null,null,i,v)),r._39(512,null,c.g,c.l,[c.m,[2,c.a]]),r._39(512,null,c.f,c.f,[c.g]),r._28(3,245760,null,0,g.a,[h.k,c.f],null,null)],function(n,t){n(t,3,0)},function(n,t){n(t,0,0,r._38(t,3).slideState)})}e.d(t,"a",function(){return v}),t.b=i;var u=e(334),r=e(2),o=e(335),a=e(105),s=e(28),c=e(6),f=e(336),p=e(106),_=e(107),d=e(52),h=e(13),g=e(159),m=[u.a],v=r._27({encapsulation:0,styles:m,data:{animation:[{type:7,name:"slideUpAndDown",definitions:[{type:0,name:"hidden",styles:{type:6,styles:{opacity:1,transform:"translateY(-100%)"},offset:null},options:void 0},{type:0,name:"visible",styles:{type:6,styles:{opacity:1,transform:"translateY(0)"},offset:null},options:void 0},{type:1,expr:"hidden => visible",animation:{type:4,styles:null,timings:"1s ease-in-out"},options:null},{type:1,expr:"visible => hidden",animation:{type:4,styles:null,timings:"1.5s linear"},options:null}],options:{}}]}});r._25("bv-nav-bar",g.a,l,{},{},[])},334:function(n,t,e){"use strict";e.d(t,"a",function(){return i});var i=[".icon-span[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 1px;\n  top: 1px;\n  font-size: 1.3em; }"]},341:function(n,t,e){"use strict";e.d(t,"a",function(){return o});var i=(e(13),e(100)),l=e(104),u=e(98),r=e(99),o=(u.a,r.a,i.a,l.a,function(){function n(){}return n}())},51:function(n,t,e){"use strict";e.d(t,"a",function(){return s});var i=(e(2),e(23),e(18)),l=e(26),u=e(155),r=e.n(u),o={normal:"1.9vw",medium:"3vw",small:"4.9vw"},a={normal:{"font-size":o.normal},medium:{"font-size":o.medium},small:{"font-size":o.small}},s=(function(){function n(n,t,e){this.title=n,this.content=t,this.paginated=e}}(),function(){function n(n){this.sanitizer=n,this.stories={}}return n.prototype.getStories=function(){return JSON.parse(r.a)},n.prototype.getStory=function(n){return this.stories[n]||(this.stories[n]=Object(i.h)(e(323)("./"+n+".json")).pipe(Object(l.i)(function(n){return JSON.parse(n.toString())}))),this.stories[n].pipe(Object(l.i)(function(){return n}))},n.prototype.paginateTo=function(n,t,e){var u=this;return t<1?i.b:this.stories[n].pipe(Object(l.i)(function(n){return u.preProcess(n,e)}),Object(l.i)(function(n){var i;return i=n&&0!==n.paginated[e].length?n.paginated[e].length<t?n.paginated[e][n.paginated[e].length-1]:n.paginated[e][t-1]:"",u.sanitizer.bypassSecurityTrustHtml(i)}))},n.prototype.addPageContents=function(n,t){for(var e=[],i=0;i<n.length;i++){for(var l="";i<n.length;i++){var u=l+" "+n[i];if(null===n[i].match(/(<center>)|(<\/center>)|(<br>)/g)&&this.checkOverFlow(u,a[t]))break;l=u}i--,e.push(l)}return e},n.prototype.preProcess=function(n,t){if(0===n.paginated[t].length){var e=n.content.replace(/\t/g,"&emsp;").replace(/<c>/gi,"<center>").replace(/<\/c>/gi,"</center>").replace(/(\n)|(\n\r)/g," <br> "),i=e.split(" ");n.paginated[t]=this.addPageContents(i,t),console.log(n.paginated)}return n},n.prototype.getFontStyle=function(n){return a[n]},n.prototype.setupDummyDiv=function(){this.dummyDiv=document.createElement("div"),document.body.appendChild(this.dummyDiv),Object.assign(this.dummyDiv.style,{position:"fixed",top:"100vh",width:"97vw",height:"97vh",color:"red"})},n.prototype.destroyDummyDiv=function(){document.body.removeChild(this.dummyDiv),this.dummyDiv=null},n.prototype.checkOverFlow=function(n,t){return Object.assign(this.dummyDiv.style,t),this.dummyDiv.innerHTML=this.sanitizer.bypassSecurityTrustHtml(n).changingThisBreaksApplicationSecurity,this.dummyDiv.offsetHeight<this.dummyDiv.scrollHeight},n.prototype.ngOnInit=function(){this.setupDummyDiv()},n.prototype.ngOnDestroy=function(){this.destroyDummyDiv()},n}())},98:function(n,t,e){"use strict";e.d(t,"a",function(){return i});var i=function(){function n(){this.title="Landing page"}return n}()},99:function(n,t,e){"use strict";e.d(t,"a",function(){return r});var i=(e(2),e(23),e(13),e(18),e(26)),l=(e(31),e(51),this&&this.__awaiter||function(n,t,e,i){return new(e||(e=Promise))(function(l,u){function r(n){try{a(i.next(n))}catch(n){u(n)}}function o(n){try{a(i.throw(n))}catch(n){u(n)}}function a(n){n.done?l(n.value):new e(function(t){t(n.value)}).then(r,o)}a((i=i.apply(n,t||[])).next())})}),u=this&&this.__generator||function(n,t){function e(n){return function(t){return i([n,t])}}function i(e){if(l)throw new TypeError("Generator is already executing.");for(;a;)try{if(l=1,u&&(r=u[2&e[0]?"return":e[0]?"throw":"next"])&&!(r=r.call(u,e[1])).done)return r;switch(u=0,r&&(e=[0,r.value]),e[0]){case 0:case 1:r=e;break;case 4:return a.label++,{value:e[1],done:!1};case 5:a.label++,u=e[1],e=[0];continue;case 7:e=a.ops.pop(),a.trys.pop();continue;default:if(r=a.trys,!(r=r.length>0&&r[r.length-1])&&(6===e[0]||2===e[0])){a=0;continue}if(3===e[0]&&(!r||e[1]>r[0]&&e[1]<r[3])){a.label=e[1];break}if(6===e[0]&&a.label<r[1]){a.label=r[1],r=e;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(e);break}r[2]&&a.ops.pop(),a.trys.pop();continue}e=t.call(n,a)}catch(n){e=[6,n],u=0}finally{l=r=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,done:!0}}var l,u,r,o,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:e(0),throw:e(1),return:e(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o},r=function(){function n(n,t,e,i,l,u){this._mediaService=n,this.route=t,this.router=e,this._ngZone=i,this.storyService=l,this.sanitizer=u,this.pageStyle={"font-size":"3em"},this.pageNumber="1"}return n.prototype.watchScreen=function(){var n=this;this._querySubscriptions=[],this._querySubscriptions.push(this._mediaService.registerQuery("sm").subscribe(function(t){n._ngZone.runOutsideAngular(function(){t&&n.router.navigate(["../../medium/"+n.pageNumber],{relativeTo:n.route})})})),this._querySubscriptions.push(this._mediaService.registerQuery("xs").subscribe(function(t){n._ngZone.runOutsideAngular(function(){t&&n.router.navigate(["../../small/"+n.pageNumber],{relativeTo:n.route})})})),this._querySubscriptions.push(this._mediaService.registerQuery("gt-sm").subscribe(function(t){n._ngZone.runOutsideAngular(function(){t&&n.router.navigate(["../../normal/"+n.pageNumber],{relativeTo:n.route})})}))},n.prototype.refreshPage=function(n,t){this.setFontSize(n),this.setPageContent(t)},n.prototype.setFontSize=function(n){Object.assign(this.pageStyle,n)},n.prototype.setPageContent=function(n){this.pageContent=n},n.prototype.ngOnInit=function(){var n=this;console.log("init"),this.storyName=this.route.parent.paramMap.pipe(Object(i.n)(function(t){return console.log("story change!"),n.storyService.getStory(t.get("name"))})),this.route.paramMap.pipe(Object(i.n)(function(t){return l(n,void 0,void 0,function(){var n,e,l,r;return u(this,function(u){switch(u.label){case 0:return this.pageNumber=t.get("page"),n={pageStyle:this.storyService.getFontStyle(t.get("view"))},e="pageContent",r=(l=this.storyService).paginateTo,[4,this.storyName.pipe(Object(i.g)()).toPromise()];case 1:return[4,r.apply(l,[u.sent(),+t.get("page"),t.get("view")]).pipe(Object(i.g)()).toPromise()];case 2:return[2,(n[e]=u.sent(),n)]}})})})).subscribe(function(t){console.log("page change!"),n._ngZone.run(function(){return n.refreshPage(t.pageStyle,t.pageContent)})}),this.watchScreen(),this.storyService.ngOnInit()},n.prototype.ngOnDestroy=function(){this._querySubscriptions.forEach(function(n){return n.unsubscribe()}),this.storyService.ngOnDestroy()},n}()}},[199]);