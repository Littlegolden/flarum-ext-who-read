module.exports=function(t){var e={};function r(o){if(e[o])return e[o].exports;var n=e[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=t,r.c=e,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(o,n,function(e){return t[e]}.bind(null,n));return o},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=24)}([function(t,e){t.exports=flarum.core.compat.app},function(t,e){t.exports=flarum.core.compat.extend},function(t,e,r){"use strict";function o(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}r.d(e,"a",(function(){return o}))},function(t,e){t.exports=flarum.core.compat.Model},,function(t,e){t.exports=flarum.core.compat["models/Discussion"]},function(t,e){t.exports=flarum.core.compat["components/Badge"]},function(t,e){t.exports=flarum.core.compat["utils/extractText"]},,function(t,e){t.exports=flarum.core.compat["components/DiscussionPage"]},function(t,e){t.exports=flarum.core.compat["utils/mixin"]},function(t,e){t.exports=flarum.core.compat["components/DiscussionHero"]},function(t,e){t.exports=flarum.core.compat.Component},function(t,e){t.exports=flarum.core.compat["helpers/username"]},function(t,e){t.exports=flarum.core.compat["helpers/avatar"]},function(t,e){t.exports=flarum.core.compat["helpers/userOnline"]},function(t,e){t.exports=flarum.core.compat["helpers/listItems"]},function(t,e){t.exports=flarum.core.compat["helpers/icon"]},function(t,e){t.exports=flarum.core.compat["utils/humanTime"]},function(t,e){t.exports=flarum.core.compat["components/DiscussionList"]},function(t,e){t.exports=flarum.core.compat["components/DiscussionListItem"]},function(t,e){t.exports=flarum.core.compat["components/PostStream"]},,,function(t,e,r){"use strict";r.r(e);var o=r(1),n=r(0),a=r.n(n),s=r(9),i=r.n(s),u=r(5),c=r.n(u),l=r(2),p=r(3),d=r.n(p),f=r(10),h=function(t){function e(){return t.apply(this,arguments)||this}return Object(l.a)(e,t),e}(r.n(f)()(d.a,{last_read_at:d.a.attribute("last_read_at"),last_read_post_number:d.a.attribute("last_read_post_number"),subscription:d.a.attribute("subscription"),user:d.a.hasOne("user")})),b=r(11),_=r.n(b),w=r(12),x=r.n(w),g=r(13),v=r.n(g),k=r(14),y=r.n(k),W=r(6),O=r.n(W),R=r(15),j=r.n(R),P=r(16),D=r.n(P),I=r(17),S=r.n(I),M=r(7),N=r.n(M),A=r(18),B=r.n(A),L=function(t){function e(){return t.apply(this,arguments)||this}return Object(l.a)(e,t),e.prototype.view=function(){var t=this,e=a.a.forum.attribute("who-read.maxVisible"),r=[],o=this.props.readers.filter((function(e){if(!t.props.discussion)return!0;var r=a.a.forum.attribute("who-read.hideWhenBehind");return!r||e.last_read_post_number()>t.props.discussion.lastPostNumber()-r}));return o.forEach((function(n,s){if(!t.showAll){if(s===e){var i=o.length-e;r.push(m("span.Avatar.WhoRead-more",{title:N()(a.a.translator.trans("clarkwinkelmann-who-read.forum.show-more",{count:i})),onclick:function(e){e.preventDefault(),t.showAll=!0}},"+"+i))}if(s>=e)return}var u=n.user();if(u){var c=u.badges();if(flarum.extensions["flarum-subscriptions"])switch(n.subscription()){case"follow":c.add("subscriptions-follow",O.a.component({label:a.a.translator.trans("flarum-subscriptions.forum.badge.following_tooltip"),icon:"fas fa-star",type:"following"}));break;case"ignore":c.add("subscriptions-ignoring",O.a.component({label:a.a.translator.trans("flarum-subscriptions.forum.badge.ignoring_tooltip"),icon:"far fa-eye-slash",type:"ignoring"}))}var l=t.props.discussion&&n.last_read_post_number()<t.props.discussion.lastPostNumber(),p="last_read_at";t.props.discussion&&(p=l?"last_read_at_behind":"last_read_at_up_to_date"),r.push(m("a",{href:a.a.route.user(u),title:N()(a.a.translator.trans("clarkwinkelmann-who-read.forum.tooltip."+p,{user:u,ago:B()(n.last_read_at())})),config:function(t){$(t).tooltip({placement:"top"}),m.route.apply(this,arguments)}},[m(".WhoRead-avatar",{className:l?"WhoRead-avatar--outdated":""},[y()(u),t.props.extended?m("ul.badges",D()(c.toArray())):null]),t.props.extended?m(".WhoRead-user",[j()(u),v()(u)]):null]))}})),m(".WhoRead",{className:this.props.extended?"WhoRead--extended":""},[this.props.toggleable?m(".WhoRead-toggle",{onclick:function(){t.visible=!t.visible}},S()("fas fa-chevron-"+(this.visible?"up":"down"))):null,this.props.title?m("h3",{onclick:function(){t.visible=!t.visible}},this.props.title):null,!this.props.toggleable||this.visible?m("ul.WhoRead-list",r.map((function(t){return m("li.WhoRead-item",t)}))):null])},e}(x.a),T=r(19),E=r.n(T),H=r(20),q=r.n(H),z=r(21),C=r.n(z);a.a.initializers.add("clarkwinkelmann-who-read",(function(){a.a.store.models["clarkwinkelmann-who-readers"]=h,c.a.prototype.clarkwinkelmannWhoReaders=c.a.hasMany("clarkwinkelmannWhoReaders"),Object(o.extend)(i.a.prototype,"params",(function(t){a.a.forum.attribute("who-read.canSee")&&t.include.push("clarkwinkelmannWhoReaders.user.groups")})),Object(o.extend)(_.a.prototype,"items",(function(t){if(a.a.forum.attribute("who-read.showInHero")){var e=this.props.discussion.clarkwinkelmannWhoReaders();e&&e.length&&t.add("who-read",L.component({readers:e,discussion:this.props.discussion,extended:!0}),-10)}})),Object(o.extend)(E.a.prototype,"requestParams",(function(t){a.a.forum.attribute("who-read.showInDiscussionList")&&t.include.push("clarkwinkelmannWhoReaders.user.groups")})),Object(o.extend)(q.a.prototype,"infoItems",(function(t){if(a.a.forum.attribute("who-read.showInDiscussionList")){var e=this.props.discussion.clarkwinkelmannWhoReaders();e&&e.length&&t.add("who-read",L.component({readers:e,discussion:this.props.discussion}),-10)}})),Object(o.extend)(C.a.prototype,"view",(function(t){var e=this,r=this.discussion.clarkwinkelmannWhoReaders();r&&t.children.forEach((function(t){if(a.a.forum.attribute("who-read.showBetweenPosts")&&t.attrs&&t.attrs["data-id"]){var o=a.a.store.getById("posts",t.attrs["data-id"]),n=[];if(r=r.filter((function(t){var e=t.last_read_post_number()>=o.number();return e||n.push(t),e})),e.discussion.postIds()[e.visibleStart]===t.attrs["data-id"])return;n.length&&t.children.unshift(L.component({readers:n,extended:!0,title:a.a.translator.trans("clarkwinkelmann-who-read.forum.stats.to_at_least_here",{count:n.length+r.length}),toggleable:!0}))}if(t.attrs&&"reply"===t.attrs.key){var s=e.discussion.clarkwinkelmannWhoReaders().filter((function(t){return t.last_read_post_number()>=e.discussion.lastPostNumber()}));t.children.unshift(L.component({readers:s,extended:!0,title:a.a.translator.trans("clarkwinkelmann-who-read.forum.stats.to_end",{count:s.length})}))}}))}))}))}]);
//# sourceMappingURL=forum.js.map