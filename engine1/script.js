// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 5.0
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
function ws_book(n,l,b){var f=jQuery;var i=f("ul",b);b=b.parent();var e=n.duration;var d=n.perspective||0.4;var g=n.shadow||0.35;var a=n.noCanvas||false;var k=n.no3d||false;var m={domPrefixes:" Webkit Moz ms O Khtml".split(" "),testDom:function(p){var o=this.domPrefixes.length;while(o--){if(typeof document.body.style[this.domPrefixes[o]+p]!=="undefined"){return true}}return false},cssTransitions:function(){return this.testDom("Transition")},cssTransforms3d:function(){var p=(typeof document.body.style.perspectiveProperty!=="undefined")||this.testDom("Perspective");if(p&&/AppleWebKit/.test(navigator.userAgent)){var r=document.createElement("div"),o=document.createElement("style"),q="Test3d"+Math.round(Math.random()*99999);o.textContent="@media (-webkit-transform-3d){#"+q+"{height:3px}}";document.getElementsByTagName("head")[0].appendChild(o);r.id=q;document.body.appendChild(r);p=r.offsetHeight===3;o.parentNode.removeChild(o);r.parentNode.removeChild(r)}return p},canvas:function(){if(typeof document.createElement("canvas").getContext!=="undefined"){return true}}};if(!k){k=m.cssTransitions()&&m.cssTransforms3d()}if(!a){a=m.canvas()}var j;this.go=function(p,o){if(j){return -1}var C=(o==0&&p!=o+1)||(p==o-1),t=l.get(p),E=l.get(o);var q=f("<div>").appendTo(b);if(k){var w={backgroundColor:"#000",position:"absolute",left:0,top:0,width:"100%",height:"100%",transformStyle:"preserve-3d",zIndex:3,outline:"1px solid transparent"};q.css(w);perspect=b.width()*(3-d*2);var x=83.5;var B=f("<div>").css(w).css({background:"url("+(C?t:E).src+")",backgroundSize:"auto 100%",width:"50%",perspective:perspect}).appendTo(q);var A=f("<div>").css(w).css({left:"50%",background:"url("+(C?E:t).src+") right",backgroundSize:"auto 100%",width:"50%",perspective:perspect}).appendTo(q);var G=f("<div>").css(w).css({background:"url("+(C?E:t).src+")",backgroundSize:"auto 100%",transform:"rotateY("+(C?0.1:x)+"deg)",transition:(C?"ease-in ":"ease-out ")+e/2000+"s",transformOrigin:"right",marginRight:"-100%",display:C?"block":"none"}).appendTo(B);var D=f("<div>").css(w).css({background:"url("+(C?t:E).src+") right",backgroundSize:"auto 100%",transform:"rotateY(-"+(C?x:0.1)+"deg)",transition:(C?"ease-out ":"ease-in ")+e/2000+"s",transformOrigin:"left",marginRight:"-100%",display:C?"none":"block"}).appendTo(A);var s=f("<div>").css(w).css({zIndex:1,opacity:1}).appendTo((C?B:A)).clone().appendTo((C?D:G)).css("opacity",g).clone().appendTo((C?A:B)).css("opacity",1).hide().clone().appendTo((C?G:D)).css("opacity",g).hide()}else{if(a){var v=f("<div>").css({position:"absolute",top:0,left:C?0:"50%",width:"50%",height:"100%",overflow:"hidden",zIndex:6}).append(f(l.get(p)).clone().css({position:"absolute",height:"100%",right:C?"auto":0,left:C?0:"auto"})).appendTo(q).hide();var z=f("<div>").css({position:"absolute",width:"100%",height:"100%",left:0,top:0,zIndex:8}).appendTo(q).hide();var F=f("<canvas>").css({position:"absolute",zIndex:2,left:0,top:-z.height()*d/2}).attr({width:z.width(),height:z.height()*(d+1)}).appendTo(z);var y=F.clone().css({top:0,zIndex:1}).attr({width:z.width(),height:z.height()}).appendTo(z);var u=F.get(0).getContext("2d");var r=y.get(0).getContext("2d")}else{i.stop(true).animate({left:(p?-p+"00%":(/Safari/.test(navigator.userAgent)?"0%":0))},e,"easeInOutExpo")}}if(!k&&a){var B=u;var A=r;var G=E;var D=t}j=new h(C,x,B,A,G,D,z,F,y,v,function(){i.css({left:-p+"00%"}).show();q.remove();j=0});return p};function c(E,J,t,s,r,p,H,q,G,I){var F=G.height(),v=G.width()/2;numSlices=r/2,sliceWidth=v/numSlices,widthScale=r/v,heightScale=(1-p)/numSlices;E.clearRect(0,0,I.width(),I.height());for(var D=0;D<numSlices+widthScale;D++){var B=0,C=(H?D*n.width/r+n.width/2:(numSlices-D)*n.width/r);sWidth=sliceWidth*widthScale*1.5,sHeight=n.height;var z=t+(H?1:-1)*sliceWidth*widthScale*D,u=s+F*heightScale*D/2,o=sliceWidth*widthScale*1.5,A=F*(1-(heightScale*D));if(C<0){C=0}if(z<0){z=0}if(u<0){u=0}if(B<0){B=0}E.drawImage(J,C,B,sWidth,sHeight,z,u,o,A)}E.save();E.beginPath();E.moveTo(t,s);E.lineTo(t+(H?1:-1)*sliceWidth*widthScale*(numSlices+widthScale),s+F*heightScale*(numSlices+widthScale)/2);E.lineTo(t+(H?1:-1)*sliceWidth*widthScale*(numSlices+widthScale),F*(1-heightScale*(numSlices+widthScale))+s+F*heightScale*(numSlices+widthScale)/2);E.lineTo(t,s+F);E.closePath();E.clip();E.fillStyle="rgba(0,0,0,"+Math.round(q*100)/100+")";E.fillRect(0,0,I.width(),I.height());E.restore()}function h(y,q,A,z,w,v,t,u,s,x,C){if(k){if(!y){q*=-1;var B=z;z=A;A=B;B=v;v=w;w=B}w.css("transform","rotateY("+q+"deg)").children().fadeIn(e/2);A.children().fadeOut(e/2,function(){v.show().css("transform","rotateY(0deg)").children().fadeOut(e/2);z.children().fadeIn(e/2)})}else{if(a){t.show();var p=new Date;var r=true;var o=setInterval(function(){var G=(new Date-p)/e;if(G>1){G=1}progressX=jQuery.easing.easeInOutQuint(1,G,0,1,1);progressY=jQuery.easing.easeInOutCubic(1,G,0,1,1);var H=!y;if(G<0.5){progressX*=2;progressY*=2;var F=w}else{H=y;progressX=(1-progressX)*2;progressY=(1-progressY)*2;var F=v}var I=t.height()*d/2,E=(1-progressX)*t.width()/2,D=1+progressY*d,J=t.width()/2;c(A,F,J,I,E,D,H,progressY*g,t,u);if(r){x.show();r=false}z.clearRect(0,0,s.width(),s.height());z.fillStyle="rgba(0,0,0,"+(g-progressY*g)+")";z.fillRect(H?J:0,0,s.width()/2,s.height());if(G==1){clearInterval(o)}},15)}}setTimeout(C,e)}jQuery.extend(jQuery.easing,{easeInOutCubic:function(p,q,o,s,r){if((q/=r/2)<1){return s/2*q*q*q+o}return s/2*((q-=2)*q*q+2)+o},easeInOutQuint:function(p,q,o,s,r){if((q/=r/2)<1){return s/2*q*q*q*q*q+o}return s/2*((q-=2)*q*q*q*q+2)+o}})};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 5.0
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
jQuery("#wowslider-container1").wowSlider({effect:"book",prev:"",next:"",duration:20*100,delay:20*100,width:1090,height:399,autoPlay:true,playPause:false,stopOnHover:false,loop:false,bullets:true,caption:false,captionEffect:"slide",controls:true,onBeforeStep:0,images:0});