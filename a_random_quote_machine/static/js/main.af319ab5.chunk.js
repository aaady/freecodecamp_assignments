(this.webpackJsonprandom_quote_machine=this.webpackJsonprandom_quote_machine||[]).push([[0],{12:function(t,e,a){},13:function(t,e,a){},14:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),r=a(6),i=a.n(r),s=(a(12),a(1)),u=a(2),c=a(4),h=a(3);a(13);function l(t){return o.a.createElement("div",{id:"text"},o.a.createElement("i",{class:"fa fa-quote-left"}),t.text)}function d(t){return o.a.createElement("div",{id:"author"},"- ",t.author)}function m(){return o.a.createElement("div",null,o.a.createElement("a",{href:"http://twitter.com/intent/tweet",id:"tweet-quote"},o.a.createElement("i",{className:"fab fa-twitter"})," Tweet"))}var f=function(t){Object(c.a)(a,t);var e=Object(h.a)(a);function a(){return Object(s.a)(this,a),e.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{id:"new-quote",onClick:this.props.onClick},"New Quote")}}]),a}(o.a.Component),y=function(t){Object(c.a)(a,t);var e=Object(h.a)(a);function a(t){var n;Object(s.a)(this,a),(n=e.call(this,t)).quotes=n.props.quotes;var o=n.randomQuote();return n.state={text:o.text,author:o.author},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.handleClick(),this.handleClick=this.handleClick.bind(this)}},{key:"randomQuote",value:function(){return this.quotes[Math.floor(Math.random()*this.quotes.length)]}},{key:"handleClick",value:function(){var t=this.randomQuote();this.setState({text:t.text,author:t.author})}},{key:"render",value:function(){return o.a.createElement("div",{id:"quote-box",style:{textAlign:"center"}},o.a.createElement(l,{text:this.state.text}),o.a.createElement(d,{author:this.state.author}),o.a.createElement(m,null),o.a.createElement(f,{onClick:this.handleClick}))}}]),a}(o.a.Component);var p=[{text:"It does not matter how slowly you go as long as you do not stop.",author:"Confucius"},{text:"It always seems impossible until it's done.",author:"Nelson Mandela"},{text:"Start where you are. Use what you have. Do what you can.",author:"Arthur Ashe"},{text:"Failure is the condiment that gives success its flavor.",author:"Truman Capote"},{text:"The secret of getting ahead is getting started.",author:"Mark Twain"},{text:"A good traveler has no fixed plans and is not intent on arriving.",author:"Lao Tzu"},{text:"The only person you are destined to become is the person you decide to be.",author:"Ralph Waldo Emerson"},{text:"Whether you want to uncover the secrets of the universe, or you want to pursue a career in the 21st century, basic computer programming is an essential skill to learn.",author:"Stephen Hawking"},{text:"The way to get started is to quit talking and begin doing.",author:"Walt Disney"},{text:"We first make our habits, then our habits make us.",author:"John Dryden"},{text:"Today's accomplishments were yesterday's impossibilities.",author:"Robert H. Schuller"},{text:"If you're not making mistakes, then you're not making decisions.",author:"Catherine Cook"}],v=function(){return o.a.createElement(y,{quotes:p})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},7:function(t,e,a){t.exports=a(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.af319ab5.chunk.js.map