(this["webpackJsonpreact-musicapp"]=this["webpackJsonpreact-musicapp"]||[]).push([[0],{15:function(e,t,c){},16:function(e,t,c){},18:function(e,t,c){},24:function(e,t,c){},25:function(e,t,c){"use strict";c.r(t);var a=c(2),n=c.n(a),i=c(10),s=c.n(i),r=c(7),u=(c(15),c(16),c.p+"static/media/cover.ca670118.jpg"),l=c(0),o=function(e){var t=e.music;return Object(l.jsxs)("div",{className:"song-container",children:[Object(l.jsx)("img",{src:u,alt:"album art"}),Object(l.jsx)("h3",{className:"song-name",children:t[0].name}),Object(l.jsx)("h4",{className:"artist",children:t[0].artist})]})},j=c(5),d=(c(18),c(6)),m=c(3),b=function(e){var t=e.music,c=e.isPlaying,n=e.setIsPlaying,i=Object(a.useRef)(null),s=function(e){var t=e.target.currentTime,c=e.target.duration;O(Object(j.a)(Object(j.a)({},b),{},{currentTime:t,duration:c}))},u=Object(a.useState)({currentTime:0,duration:0}),o=Object(r.a)(u,2),b=o[0],O=o[1],h=function(e){return Math.floor(e/60)+":"+("0"+Math.floor(e%60)).slice(-2)};return Object(l.jsxs)("div",{className:"player-container",children:[Object(l.jsx)("audio",{ref:i,onTimeUpdate:s,onLoadedMetadata:s,src:t[0].audio}),Object(l.jsxs)("div",{className:"timeslide-container",children:[Object(l.jsx)("p",{className:"time",children:h(b.currentTime)}),Object(l.jsx)("input",{className:"slider",min:0,max:b.duration,value:b.currentTime,onChange:function(e){i.current.currentTime=e.target.value,O(Object(j.a)(Object(j.a)({},b),{},{currentTime:e.target.value}))},type:"range"}),Object(l.jsx)("p",{className:"time",children:h(b.duration)})]}),Object(l.jsx)("div",{className:"play-container",children:Object(l.jsx)(d.a,{onClick:function(){c?(i.current.pause(),n(!c)):(i.current.play(),n(!c))},className:"icon",icon:c?m.b:m.c})})]})},O=(c(24),function(){return Object(l.jsxs)("div",{className:"navigation-container",children:[Object(l.jsx)("h2",{className:"logo",children:"Muzaic"}),Object(l.jsxs)("div",{className:"library-container",children:[Object(l.jsx)(d.a,{className:"music-icon",icon:m.a}),Object(l.jsx)("h2",{className:"library",children:"Library"})]})]})}),h=[{name:"cardigan",artist:"taylor swift",audio:c.p+"static/media/cardigan.832cfdd8.mp3"}];var g=function(){var e=Object(a.useState)(!1),t=Object(r.a)(e,2),c=t[0],n=t[1];return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(O,{}),Object(l.jsx)(o,{music:h}),Object(l.jsx)(b,{music:h,isPlaying:c,setIsPlaying:n})]})},p=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,26)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,i=t.getLCP,s=t.getTTFB;c(e),a(e),n(e),i(e),s(e)}))};s.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(g,{})}),document.getElementById("root")),p()}},[[25,1,2]]]);
//# sourceMappingURL=main.bf2d2f89.chunk.js.map