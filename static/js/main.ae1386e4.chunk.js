(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{10:function(e,t,a){e.exports=a(16)},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),r=a(7),l=a.n(r),s=a(1),c=a(2),o=a(4),m=a(3),u=(a(15),a(18)),p=a(5),g=a(8),f=a.n(g),d=a(9),h=a.n(d),v=f.a.bind(h.a),b=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={scrollLeft:0,images:e.props.images,jump:!0},e.clickHandlerNext=function(){var t=e.state,a=t.scrollLeft,i=t.images,n=e.props,r=n.step,l=n.frameSize,s=n.itemWidth,c=s*r,o=s*i.length-s*l,m=c;a-c<=-o&&(m=o+a),e.setState((function(e){return{scrollLeft:e.scrollLeft-m}}))},e.clickHandlerNextCarousel=function(){var t=e.state.images,a=e.props,i=a.step,n=a.itemWidth,r=a.animationDuration,l=n*i;e.setState({jump:!0,scrollLeft:0-l});var s=Object(p.a)(t);s.splice(0,i).forEach((function(e){return s.push(e)})),setTimeout((function(){e.setState({jump:!1,scrollLeft:0,images:s})}),r)},e.clickHandlerPrev=function(){var t=e.state.scrollLeft,a=e.props,i=a.step,n=a.itemWidth*i,r=n;t+n>=0&&(r=0-t),e.setState((function(e){return{scrollLeft:e.scrollLeft+r}}))},e.clickHandlerPrevCarousel=function(){var t=e.state.images,a=e.props,i=a.step,n=a.itemWidth*i;e.setState({jump:!0,scrollLeft:0+n});var r=Object(p.a)(t);r.splice(t.length-i,i).reverse().forEach((function(e){return r.unshift(e)})),e.setState({jump:!1,images:r,scrollLeft:0-n}),setTimeout((function(){e.setState({jump:!0,scrollLeft:0})}))},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state,t=e.scrollLeft,a=e.images,i=e.jump,r=this.props,l=r.frameSize,s=void 0===l?3:l,c=r.itemWidth,o=void 0===c?130:c,m=r.animationDuration,u=void 0===m?1e3:m,p=r.infinite,g=void 0!==p&&p,f=v("button",{hiden:!g&&0===t}),d=v("button",{hiden:t===-(o*a.length-o*s)});return n.a.createElement("div",{className:"container-carousel"},n.a.createElement("button",{type:"button",className:f,onClick:g?this.clickHandlerPrevCarousel:this.clickHandlerPrev},"<"),n.a.createElement("div",{className:"wrapper-carousel",style:{width:o*s}},n.a.createElement("div",{className:"Carousel",style:{width:o*a.length,left:t,transition:i?"left ".concat(u/1e3,"s ease-in-out"):"none"}},n.a.createElement("ul",{className:"Carousel__list"},a.map((function(e){return n.a.createElement("li",{key:e.id,className:"Carousel__image"},n.a.createElement("img",{width:o,src:e.img,alt:e.alt}))}))))),n.a.createElement("button",{type:"button",className:d,onClick:g?this.clickHandlerNextCarousel:this.clickHandlerNext},">"))}}]),a}(n.a.Component),j=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={images:[{img:"./img/1.png",id:Object(u.a)(),alt:"Shy smile"},{img:"./img/2.png",id:Object(u.a)(),alt:"Clever smile"},{img:"./img/3.png",id:Object(u.a)(),alt:"Funny smile"},{img:"./img/4.png",id:Object(u.a)(),alt:"Smile"},{img:"./img/5.png",id:Object(u.a)(),alt:"Smile in love"},{img:"./img/6.png",id:Object(u.a)(),alt:"Explosive smile"},{img:"./img/7.png",id:Object(u.a)(),alt:"Ninja smile"},{img:"./img/8.png",id:Object(u.a)(),alt:"Brutal smile"},{img:"./img/9.png",id:Object(u.a)(),alt:"Surprised smile"},{img:"./img/10.png",id:Object(u.a)(),alt:"Offended smile"}],step:3,frameSize:3,itemWidth:130,animationDuration:1e3,infinite:!0},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state,t=e.images,a=e.step,i=e.frameSize,r=e.itemWidth,l=e.animationDuration,s=e.infinite;return n.a.createElement("div",{className:"App"},n.a.createElement("h1",null,"Carousel with ",t.length," images"),n.a.createElement(b,{images:t,step:a,frameSize:i,itemWidth:r,animationDuration:l,infinite:s}))}}]),a}(n.a.Component);l.a.render(n.a.createElement(j,null),document.getElementById("root"))},9:function(e,t,a){}},[[10,1,2]]]);
//# sourceMappingURL=main.ae1386e4.chunk.js.map