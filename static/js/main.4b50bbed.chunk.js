(this["webpackJsonpreact-image-data-capture-example"]=this["webpackJsonpreact-image-data-capture-example"]||[]).push([[0],{11:function(e,t,n){"use strict";n.r(t);n(4);var r=n(0),a=n.n(r),c=n(2),i=n.n(c),u=n(1),o={position:"relative",display:"inline-block"},l={display:"none"},s={border:"1px solid white",borderRadius:"50%",width:"50px",height:"50px",background:"#f7473587",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",cursor:"pointer"};var f=function(e){var t=e.onCapture,n=e.onError,c=e.width,i=e.userMediaConfig,f=Object(r.useState)(!1),d=Object(u.a)(f,2),m=d[0],b=d[1],p=Object(r.createRef)(),g=Object(r.createRef)(),v=Object(r.useRef)();Object(r.useEffect)((function(){var e;return navigator.mediaDevices.getUserMedia(i).then((function(t){p.current.srcObject=t,v.current=t.getTracks(),e=setTimeout((function(){return b(!0)}),2e3)})).catch((function(e){n&&n(e)})),function(){e&&clearTimeout(e)}}),[n,i]),Object(r.useEffect)((function(){return function(){v.current&&v.current[0].stop()}}),[]);var h=Object(r.useCallback)((function(){var e=p.current.offsetWidth,n=p.current.offsetHeight,r=[e,n];if(g.current.width=r[0],g.current.height=r[1],g.current.getContext("2d").drawImage(p.current,0,0,e,n),t){var a=g.current.toDataURL("image/webp");g.current.toBlob((function(e){t({blob:e,webP:a,file:new File([a],"".concat((new Date).getTime,".png"))})}))}}),[t,g,p]);return a.a.createElement("div",{style:o},a.a.createElement("video",{ref:p,autoPlay:!0,width:c}),m&&a.a.createElement(r.Fragment,null,a.a.createElement("div",{style:s,onClick:h}),a.a.createElement("canvas",{style:l,ref:g})))},d=function(){var e=Object(r.useState)(null),t=Object(u.a)(e,2),n=t[0],c=t[1],i=Object(r.useCallback)((function(e){console.log(e)}),[]),o=Object(r.useMemo)((function(){return{video:!0}}),[]);return a.a.createElement(a.a.Fragment,null,a.a.createElement(f,{onCapture:function(e){c(e.webP)},onError:i,width:300,userMediaConfig:o}),n&&a.a.createElement("div",null,a.a.createElement("div",null,"Captured Image:"),a.a.createElement("img",{src:n,alt:"captured-img"})))};i.a.render(a.a.createElement(d,null),document.getElementById("root"))},3:function(e,t,n){e.exports=n(11)},4:function(e,t,n){}},[[3,1,2]]]);
//# sourceMappingURL=main.4b50bbed.chunk.js.map