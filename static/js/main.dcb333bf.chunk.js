(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{11:function(e,t,a){},12:function(e,t,a){e.exports=a(19)},17:function(e,t,a){},18:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(8),r=a.n(s),c=a(1),l=a(2),o=a(4),m=a(3),u=(a(17),a(9)),p=a(5),h=a(6),d=a(10),g=a.n(d),f=a(21),v=a(11),b=a.n(v),E=g.a.bind(b.a),S=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={scrollLeft:0,visualizedImages:[],singleImages:[],doubleImages:[],animation:!0,disabled:!1},e.clickHandler=function(t){var a=e.state,n=a.scrollLeft,i=a.singleImages,s=e.props,r=s.animationDuration,c=s.itemWidth,l=s.frameSize,o=s.step,m=c*i.length-c*l,u=c*o,p=u;!t&&n+u>=0&&(p=0-n),t&&n-u<=-m&&(p=m+n),e.setState((function(e){return{animation:!0,disabled:!0,scrollLeft:t?e.scrollLeft-p:e.scrollLeft+p}})),setTimeout((function(){e.setState({disabled:!1})}),r)},e.clickHandlerInfinite=function(t){var a=e.state.visualizedImages,n=e.props,i=n.step,s=n.itemWidth,r=n.animationDuration,c=s*i;if(t){e.setState({disabled:!0,animation:!0,scrollLeft:0-c});var l=Object(h.a)(a);l.splice(0,i).forEach((function(e){return l.push(e)})),setTimeout((function(){e.setState({disabled:!1,animation:!1,scrollLeft:0,visualizedImages:l})}),r)}if(!t){var o=Object(h.a)(a);o.splice(a.length-i,i).reverse().forEach((function(e){return o.unshift(e)})),e.setState({disabled:!0,animation:!1,visualizedImages:o,scrollLeft:0-c}),setTimeout((function(){e.setState({animation:!0,scrollLeft:0})})),setTimeout((function(){e.setState({disabled:!1})}),r)}},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.images.map((function(e){return{img:e,id:Object(f.a)(),alt:"smile"}})),t=[].concat(Object(h.a)(this.props.images),Object(h.a)(this.props.images)).map((function(e){return{img:e,id:Object(f.a)(),alt:"smile"}}));this.setState({visualizedImages:e,singleImages:e,doubleImages:t})}},{key:"componentDidUpdate",value:function(e){var t=this;e.infinite===this.props.infinite&&e.frameSize===this.props.frameSize&&e.itemWidth===this.props.itemWidth||(this.setState({animation:!1,scrollLeft:0,visualizedImages:this.props.infinite?this.state.doubleImages:this.state.singleImages}),setTimeout((function(){t.setState({animation:!0})})))}},{key:"render",value:function(){var e=this,t=this.state,a=t.scrollLeft,n=t.visualizedImages,s=t.singleImages,r=t.animation,c=t.disabled,l=this.props,o=l.frameSize,m=void 0===o?3:o,u=l.itemWidth,p=void 0===u?130:u,h=l.animationDuration,d=void 0===h?1e3:h,g=l.infinite,f=void 0!==g&&g,v=!f&&0===a,b=!f&&a===-(p*s.length-p*m),S=E("button",{disabled:v}),I=E("button",{disabled:b});return i.a.createElement("div",{className:"container-carousel"},i.a.createElement("button",{type:"button",disabled:c||v,className:S,onClick:f?function(){e.clickHandlerInfinite(0)}:function(){e.clickHandler(0)}},"<"),i.a.createElement("div",{className:"wrapper-carousel",style:{width:p*m}},i.a.createElement("div",{className:"Carousel",style:{width:p*s.length,left:a,transition:r?"left ".concat(d/1e3,"s ease-in-out"):"none"}},i.a.createElement("ul",{className:"Carousel__list"},n.map((function(e){return i.a.createElement("li",{key:e.id,className:"Carousel__image"},i.a.createElement("img",{width:p,src:e.img,alt:e.alt}))}))))),i.a.createElement("button",{type:"button",disabled:c||b,className:I,onClick:f?function(){e.clickHandlerInfinite(1)}:function(){e.clickHandler(1)}},">"))}}]),a}(i.a.Component),I=(a(18),function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).onChangeInput=n.onChangeInput.bind(Object(p.a)(n)),n}return Object(l.a)(a,[{key:"onChangeInput",value:function(e){var t=e.target,a=t.name,n="checkbox"===t.type?t.checked:t.value;this.props.changeState(a,n)}},{key:"render",value:function(){var e=this.props,t=e.step,a=e.frameSize,n=e.itemWidth,s=e.animationDuration,r=e.infinite;return i.a.createElement("div",{className:"controlUnit"},i.a.createElement("h2",{className:"title"},"\u0421arousel settings"),i.a.createElement("div",{className:"inputBox"},i.a.createElement("p",{className:"inputText"},"Step:"),i.a.createElement("input",{className:"input",type:"number",name:"step",value:t,onChange:this.onChangeInput})),i.a.createElement("div",{className:"inputBox"},i.a.createElement("p",{className:"inputText"},"Frame size:"),i.a.createElement("input",{className:"input",type:"number",name:"frameSize",value:a,onChange:this.onChangeInput})),i.a.createElement("div",{className:"inputBox"},i.a.createElement("p",{className:"inputText"},"Image width:"),i.a.createElement("input",{className:"input",type:"number",name:"itemWidth",value:n,onChange:this.onChangeInput})),i.a.createElement("div",{className:"inputBox"},i.a.createElement("p",{className:"inputText"},"Animation duration:"),i.a.createElement("input",{className:"input",type:"number",name:"animationDuration",value:s,onChange:this.onChangeInput})),i.a.createElement("div",{className:"inputBox"},i.a.createElement("p",{className:"inputText"},"Infinite calousel:"),i.a.createElement("input",{className:"input",type:"checkbox",name:"infinite",checked:r,onChange:this.onChangeInput})))}}]),a}(i.a.Component)),j=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).changeState=n.changeState.bind(Object(p.a)(n)),n.state={images:n.props.images,step:3,frameSize:3,itemWidth:130,animationDuration:1e3,infinite:!1},n}return Object(l.a)(a,[{key:"changeState",value:function(e,t){var a=this.state.images,n=t;("step"===e||"frameSize"===e)&&t>a.length&&(n=a.length),("step"===e||"frameSize"===e)&&t<1&&(n=1),"itemWidth"===e&&t<100&&(n=100),"itemWidth"===e&&t>250&&(n=250),"animationDuration"===e&&t<500&&(n=500),"animationDuration"===e&&t>2e3&&(n=2e3),this.setState(Object(u.a)({},e,n))}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.step,n=e.frameSize,s=e.itemWidth,r=e.animationDuration,c=e.infinite;return i.a.createElement(i.a.Fragment,null,i.a.createElement(S,{images:t,step:a,frameSize:n,itemWidth:s,animationDuration:r,infinite:c}),i.a.createElement(I,{step:a,frameSize:n,itemWidth:s,animationDuration:r,infinite:c,changeState:this.changeState}))}}]),a}(i.a.Component),N=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"]},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state.images;return i.a.createElement("div",{className:"App"},i.a.createElement("h1",null,"Carousel with ",e.length," images"),i.a.createElement(j,{images:e}))}}]),a}(i.a.Component);r.a.render(i.a.createElement(N,null),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.dcb333bf.chunk.js.map