(this["webpackJsonpinertia-dragging"]=this["webpackJsonpinertia-dragging"]||[]).push([[0],{74:function(e,t,a){e.exports=a(85)},79:function(e,t,a){},85:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(17),i=a.n(r),o=(a(79),a(44)),u=a(128),b=a(127),l=a(112),s=a(136),O=a(134),j=a(125),g=a(68),m=a(45),d=a(114),f=a(115),h=a(133),p=a(118),v=a(120),w=a(121),E=a(122),y=a(124),x=a(113),k=a(137),I=a(116),W=a(130),J=a(117),S=a(119),X=a(123),Y={x:0,y:0},B={dX:0,dY:0},M=Object(l.a)(document,"mousemove"),N=Object(l.a)(document,"mousedown"),R=Object(l.a)(document,"mouseup"),z=N.pipe(Object(g.a)((function(){return M.pipe(Object(m.a)(Object(x.a)(["x","y"])),Object(d.a)(),Object(f.a)(R))}))),C=Object(s.a)(0,O.a),D=z.pipe(Object(m.a)((function(e){var t=Object(o.a)(e,2),a=t[0],n=t[1],c=window,r=c.innerHeight,i=c.innerWidth;return{dX:(n.x-a.x)/i,dY:(n.y-a.y)/r}}))),F=N.pipe(Object(g.a)((function(){return D.pipe(Object(h.a)(B))}))),H=Object(u.a)(Object(k.a)(Object(I.a)(1e-6)),Object(W.a)(Math.abs),J.a),K=R.pipe(Object(p.a)(F),Object(m.a)(Object(S.a)(1)),Object(v.a)(H),Object(w.a)((function(e){return console.log("Kick off inertia with: ",e)})),Object(g.a)((function(e){return C.pipe(Object(E.a)(Object(W.a)(Object(X.a)(.95)),e),Object(y.a)(H),Object(f.a)(N))}))),P=Object(j.a)(D,K),T=a(129),$=a(135),q=a(131),A=a(138),G=function(e){var t=e.withInertia,a=e.toggleWithInertia,n=c.a.createElement($.a,{title:"Toggle inertia"},c.a.createElement(T.a,{checked:t,onChange:a,value:"withInertia"})),r=c.a.createElement(c.a.Fragment,null,c.a.createElement(A.a,{control:n,label:"Drag seamless texture infinitely using pleasant inertia",labelPlacement:"start"}),c.a.createElement("div",null,"Made with React and RxJS"));return c.a.createElement(q.a,{open:!0,anchorOrigin:{vertical:"bottom",horizontal:"left"},message:r})},L=function(e){var t=e.dX,a=e.dY;return function(e){var n=e.x,c=e.y;return{x:(n+t)%1,y:(c+a)%1}}},Q=function(){var e=Object(n.useState)(Y),t=Object(o.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(!0),l=Object(o.a)(i,2),s=l[0],O=l[1];Object(n.useEffect)((function(){var e=(s?P:D).subscribe(Object(u.a)(r,L));return function(){e.unsubscribe()}}),[s]);var j=a.x,g=a.y,m="translate(".concat(j*(1/3*100),"%, ").concat(g*(1/3*100),"%)");return c.a.createElement("div",{className:"dragging-container"},c.a.createElement("div",{className:"dragging-background grabbable",style:{transform:m}}),c.a.createElement(G,{withInertia:s,toggleWithInertia:function(){O(b.a)}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[74,1,2]]]);
//# sourceMappingURL=main.3700a746.chunk.js.map