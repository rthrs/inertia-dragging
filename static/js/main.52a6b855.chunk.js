(this["webpackJsonpinertia-dragging"]=this["webpackJsonpinertia-dragging"]||[]).push([[0],{68:function(e,t,a){e.exports=a(79)},73:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(15),i=a.n(r),o=(a(73),a(41)),u=a(116),b=a(114),s=a(99),l=a(121),j=a(120),O=a(112),g=a(64),d=a(42),m=a(101),p=a(102),f=a(119),h=a(105),v=a(107),w=a(108),y=a(109),x=a(111),E=a(100),k=a(122),I=a(103),W=a(118),N=a(104),X=a(106),Y=a(110),B={x:0,y:0},J={dX:0,dY:0},S=Object(s.a)(document,"mousemove"),C=Object(s.a)(document,"mousedown"),D=Object(s.a)(document,"mouseup"),H=C.pipe(Object(g.a)((function(){return S.pipe(Object(d.a)(Object(E.a)(["x","y"])),Object(m.a)(),Object(p.a)(D))}))),K=Object(l.a)(0,j.a),M=H.pipe(Object(d.a)((function(e){var t=Object(o.a)(e,2),a=t[0],n=t[1],c=window,r=c.innerHeight,i=c.innerWidth;return{dX:(n.x-a.x)/i,dY:(n.y-a.y)/r}}))),T=C.pipe(Object(g.a)((function(){return M.pipe(Object(f.a)(J))}))),$=Object(u.a)(Object(k.a)(Object(I.a)(1e-6)),Object(W.a)(Math.abs),N.a),q=D.pipe(Object(h.a)(T),Object(d.a)(Object(X.a)(1)),Object(v.a)($),Object(w.a)((function(e){return console.log("Kick off inertia with: ",e)})),Object(g.a)((function(e){return K.pipe(Object(y.a)(Object(W.a)(Object(Y.a)(.95)),e),Object(x.a)($),Object(p.a)(C))}))),z=Object(O.a)(M,q),A=a(115),F=a(117),G=function(e){var t=e.withInertia,a=e.toggleWithInertia;return c.a.createElement("div",{className:"controls"},c.a.createElement("span",{className:"controls-text"},"Drag seamless texture infinitely using pleasant inertia"),c.a.createElement(F.a,{title:"Toggle inertia"},c.a.createElement(A.a,{checked:t,onChange:a,value:"withInertia",color:"primary"})))},L=function(e){var t=e.dX,a=e.dY;return function(e){var n=e.x,c=e.y;return{x:(n+t)%1,y:(c+a)%1}}},P=function(){var e=Object(n.useState)(B),t=Object(o.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(!0),s=Object(o.a)(i,2),l=s[0],j=s[1];Object(n.useEffect)((function(){var e=(l?z:M).subscribe(Object(u.a)(r,L));return function(){e.unsubscribe()}}),[l]);var O=a.x,g=a.y,d="translate(".concat(O*(1/3*100),"%, ").concat(g*(1/3*100),"%)");return c.a.createElement("div",{className:"dragging-container"},c.a.createElement("div",{className:"dragging-background grabbable",style:{transform:d}}),c.a.createElement(G,{withInertia:l,toggleWithInertia:function(){j(b.a)}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[68,1,2]]]);
//# sourceMappingURL=main.52a6b855.chunk.js.map