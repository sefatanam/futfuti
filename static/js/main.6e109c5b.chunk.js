(this.webpackJsonpreactappt=this.webpackJsonpreactappt||[]).push([[0],[,,,,,,function(e,t,a){e.exports={recipes:"recipes_recipes___6psC"}},function(e,t,a){e.exports=a(15)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(4),i=a.n(r),o=(a(12),a(2)),s=a.n(o),l=a(5),u=a(1),p=a(6),m=a.n(p),f=function(e){var t=e.title,a=e.calories,n=e.image,r=e.ingredients;return c.a.createElement("div",{className:m.a.recipes},c.a.createElement("h1",null,t," "),c.a.createElement("img",{src:n,alt:""}),c.a.createElement("ol",null,r.map((function(e){return c.a.createElement("li",null,e.text)}))),c.a.createElement("p",null,"Calories : ",a," "))},h=(a(14),function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(""),o=Object(u.a)(i,2),p=o[0],m=o[1],h=Object(n.useState)("chicken"),d=Object(u.a)(h,2),b=d[0],v=d[1];Object(n.useEffect)((function(){E()}),[b]);var E=function(){var e=Object(l.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.edamam.com/search?q=".concat(b,"&app_id=").concat("cce9de51","&app_key=").concat("d41c8415697335459974b582339612f6"));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,r(a.hits),console.log(a.hits);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"App"},c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),v(p)},className:"search-form"},c.a.createElement("input",{className:"search-bar",type:"text",value:p,onChange:function(e){m(e.target.value)},placeholder:"Search Food"}),c.a.createElement("button",{className:"search-button",type:"submit"},"Search Button")),c.a.createElement("div",{className:"recipes"},a.map((function(e){return c.a.createElement(f,{key:e.recipe.calories,title:e.recipe.label,calories:e.recipe.calories,image:e.recipe.image,ingredients:e.recipe.ingredients})}))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.6e109c5b.chunk.js.map