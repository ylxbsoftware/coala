!function(t){function e(n){if(i[n])return i[n].exports;var r=i[n]={exports:{},id:n,loaded:!1};return t[n].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var i={};return e.m=t,e.c=i,e.p="/assets/js/",e(0)}([function(t,e,i){i(2),t.exports=i(13)},function(t,e){!function(t){function e(n){if(i[n])return i[n].exports;var r=i[n]={exports:{},id:n,loaded:!1};return t[n].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var i={};return e.m=t,e.c=i,e.p="",e(0)}([function(t,e,i){var n=i(1),r=i(3),o={observable:r,mount:function(t,e){return new n(t).mount(e)},unmount:function(t){}};r(o),t.exports=o},function(t,e,i){function n(t){this.opts=t,this.tpl=t.tpl||{},this.el=t.el?$(t.el):void 0,this.data=t.data||{},this.on=t.on||{},this.events=t.events||{},this.handle=t.handle||{},this.refs={},this.id=r.uniqueId("component"),o(this),this._listen(),this.trigger("init")}var r=i(2),o=i(3);n.prototype.mount=function(t){return this.el=t?$(t):this.el,this.update(),this.trigger("mount"),this},n.prototype.update=function(t){if(this.trigger("update"),this.data=t||this.data,this.rid){var e=this.el,i=this._html(),n=$(i).attr("rid",this.rid);e.append(n[0].outerHTML),this.el=e.find("[rid="+this.rid+"]"),delete this.rid}else this.el.empty().html(this._html());this._mountRefs(this),this._bindEvents(),this.trigger("updated")},n.prototype._html=function(){return this.tpl(this.data)},n.prototype._mountRefs=function(t){if(this.opts.refs)for(var e in this.opts.refs){var i,r=this.opts.refs[e];if(r.component){var i=new n(r.component);r.data&&(i.data=r.data),r.rid&&(i.rid=r.rid),i.el=$(r.el)}else i=new n(r),i.el=$(e);i.parent=t,i.mount(),this.refs[e]=i}},n.prototype._bindEvents=function(){for(var t in this.events){var e=this.events[t],i=this.el.find(t.split(" ")[1]);i.on(t.split(" ")[0],$.proxy(this.handle[e],this))}},n.prototype._listen=function(){for(var t in this.on){var e=this.on[t];this.on(t,e)}},t.exports=n},function(t,e){t.exports={counter:0,uniqueId:function(t){return(t||"")+ ++this.counter},isUndefined:function(t){return"undefined"==typeof t},isFunction:function(t){return"function"==typeof t}}},function(t,e,i){var n=i(2);t.exports=function(t){t=t||{};var e={},i=0;return t.on=function(r,o){return n.isFunction(o)&&(n.isUndefined(o.id)&&(o._id=i++),r.replace(/\S+/g,function(t,i){(e[t]=e[t]||[]).push(o),o.typed=i>0})),t},t.off=function(i,n){return"*"==i?e={}:i.replace(/\S+/g,function(t){if(n)for(var i,r=e[t],o=0;i=r&&r[o];++o)i._id==n._id&&r.splice(o--,1);else e[t]=[]}),t},t.one=function(e,i){function n(){t.off(e,n),i.apply(t,arguments)}return t.on(e,n)},t.trigger=function(i){for(var n,r=[].slice.call(arguments,1),o=e[i]||[],s=0;n=o[s];++s)n.busy||(n.busy=1,n.apply(t,n.typed?[i].concat(r):r),o[s]!==n&&s--,n.busy=0);return e.all&&"all"!=i&&t.trigger.apply(t,["all",i].concat(r)),t},t}}])},function(t,e,i){throw new Error("[HMR] Hot Module Replacement is disabled.")},,,,,,,,function(t,e,i){var n=i(19);t.exports={tpl:n,on:{updated:function(){}},events:{"click [id^=img-]":"test"},handle:{test:function(){this.data.name="Chefttttttttttttttt!",this.data.owner.avatar_url="https://avatars0.githubusercontent.com/u/1567209?v=3&amp;s=460",this.update()}}}},function(t,e,i){var n=i(10),r=i(20);t.exports={tpl:r,listen:{mount:function(){this.trigger("fetch","react")},updated:function(){this.el.find("#search").focus()},fetch:function(t){var e=this;e.opts.views={},$.ajax({url:"http://localhost:3000/github",type:"get"}).done(function(t){for(var i=0;i<t.items.length;i++){var r={view:n,data:t.items[i],el:"#repositories",vid:"item_"+t.items[i].id};e.opts.views[r.vid]=r}e.update()})}},dispatcher:{"keypress #search":"search"},actions:{search:function(t){13===t.keyCode&&this.trigger("fetch",t.target.value)}}}},function(t,e,i){var n=i(21);t.exports={tpl:n,on:{mount:function(){this.trigger("fetch","react")},updated:function(){this.el.find("#search").focus()},fetch:function(t){var e=this;$.ajax({url:"http://localhost:3000/github",type:"get"}).done(function(t){e.data=t,e.update()})}},events:{"keypress #search":"search"},handle:{search:function(t){13===t.keyCode&&this.trigger("fetch",t.target.value)}}}},function(t,e,i){var n=i(1),r=i(12),o=i(11),s=i(22),a={tpl:s,refs:{"#todo1":r,"#todo2":o}};window.todo=n.mount(a,"#app")},,,,,,function(t,e){t.exports=function(t){var e="<div> <h3>"+t.name+"</h3><h5>"+t.owner.login+'</h5> <img class="avatar" id="img-'+t.id+'" src="'+t.owner.avatar_url+'"></div>';return e}},function(t,e){t.exports=function(t){var e='<style> .avatar { width: 100px; height: 100px;   }</style><div> <h3>这里每一项都是一个 view</h3> <input id="search" placeholder="enter search"/> <div id="repositories"></div></div>';return e}},function(t,e){t.exports=function(t){var e='<style> .active { border: 1px solid red; } .avatar { width: 100px; height: 100px; }</style><div> <h3>这里所有的项是一个 view</h3> <input id="search" placeholder="enter search"/></div>',i=t.items;if(i)for(var n,r=-1,o=i.length-1;o>r;)n=i[r+=1],e+="<div> <h3>"+n.name+"</h3><h5>"+n.owner.login+'</h5> <img class="avatar" src="'+n.owner.avatar_url+'"></div>';return e}},function(t,e){t.exports=function(t){var e='<style> .width50 { float: left; width: 48%; margin-left: 1%; }</style><div> <div class="width50" id="todo1"></div> <div class="width50" id="todo2"></div> <!-- <div class="width50" id="todo3"></div> --> <!-- <div class="width50" id="todo4"></div> --></div>';return e}}]);