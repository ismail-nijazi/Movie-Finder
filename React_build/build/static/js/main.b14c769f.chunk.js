(this.webpackJsonptemp=this.webpackJsonptemp||[]).push([[0],{24:function(e,t,s){},26:function(e,t,s){"use strict";s.r(t),t.default=s.p+"static/media/logo.9023cd53.png"},27:function(e,t,s){"use strict";s.r(t),t.default=s.p+"static/media/no_result.0787332d.png"},47:function(e,t,s){"use strict";s.r(t);var c=s(1),n=s.n(c),a=s(18),r=s.n(a),i=(s(24),s(2)),o=s(0),l=n.a.createContext(),j=l,u=function(e){var t=Object(c.useState)(!1),n=Object(i.a)(t,2),a=n[0],r=n[1],j=Object(c.useState)(!1),u=Object(i.a)(j,2),d=u[0],b=u[1],h=Object(c.useState)([]),m=Object(i.a)(h,2),O=m[0],f=m[1],x=Object(c.useState)(null),v=Object(i.a)(x,2),g=v[0],p=v[1],S=Object(c.useState)(null),N=Object(i.a)(S,2),R=N[0],k=N[1],w=Object(c.useState)(null),I=Object(i.a)(w,2),_=I[0],L=I[1],C=Object(c.useState)(null),y=Object(i.a)(C,2),M=y[0],T=y[1],P=Object(c.useState)({}),E=Object(i.a)(P,2),F=E[0],J=E[1],B=Object(c.useState)([]),q=Object(i.a)(B,2),D=q[0],G=q[1],Q=Object(c.useState)("http://127.0.0.1:8000"),V=Object(i.a)(Q,2),W=V[0],A=V[1],z={isLogedIn:[a,r],watchListRef:g,updateWatchListRef:p,userSection:[R,k],loginRef:[_,L],registerRef:[M,T],watchListMovies:[D,function(){var e="".concat(W,"/user/watchList"),t=JSON.parse(localStorage.getItem("findMovieToken"));fetch(e,{method:"GET",headers:{Authorization:"Token ".concat(t)}}).then((function(e){e.json().then((function(e){G(e)}))}))}],resetWatchList:function(){G([])},recommendedMovie:O,updateRecommended:function(){var e="".concat(W,"/recommend/");fetch(e).then((function(e){e.json().then((function(e){f(e)}))}))},movieInfo:F,changeCurrentMovie:function(e){var t="".concat(W,"/movie/").concat(e);fetch(t,{}).then((function(e){e.json().then((function(e){J(e.result)}))}))},isLoading:d,setIsLoading:b,images:{logo:s(26),no_result:s(27)},url:[W,A]};return Object(o.jsx)(l.Provider,{value:z,children:e.children})},d=n.a.createContext(),b=d,h=function(e){var t=Object(c.useState)({searchQuery:"",current_page:1,total_pages:0,movies:[]}),s=Object(i.a)(t,2),n=s[0],a=s[1],r=Object(c.useState)(!1),l=Object(i.a)(r,2),j=l[0],u=l[1],b=Object(c.useState)(null),h=Object(i.a)(b,2),m=h[0],O=h[1],f=Object(c.useState)(null),x=Object(i.a)(f,2),v={loading:[j,u],searchResult:n,updateSearchResult:a,movieInfoSectionRef:m,setMovieInfoRef:O,searchResultSectionRef:x[0],setSearchResultRef:x[1],showMovieInfoSection:function(e,t){e.classList.remove("hide"),t.classList.add("hide")},showSeachResultSection:function(e,t){e.classList.add("hide"),t.classList.remove("hide")}};return Object(o.jsx)(d.Provider,{value:v,children:e.children})},m=function(e){var t=Object(c.useContext)(j),s=Object(c.useContext)(b);return Object(o.jsxs)("li",{className:"item",children:[Object(o.jsx)("a",{href:"".concat(t.movieInfo.imdb_id),onClick:function(c){c.preventDefault(),t.changeCurrentMovie(e.movie.imdb_id),s.showMovieInfoSection(s.movieInfoSectionRef.current,s.searchResultSectionRef.current),s.movieInfoSectionRef.current.scrollIntoView()},children:null!=e.movie.image_url&&e.movie.image_url.length>1?Object(o.jsx)("img",{src:e.movie.image_url,alt:e.movie.name}):Object(o.jsx)("img",{src:e.movie.image,alt:e.movie.name})}),Object(o.jsx)("details",{children:Object(o.jsxs)("summary",{children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h5",{children:e.movie.name}),Object(o.jsx)("p",{className:"Genre",children:e.movie.genre})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("i",{className:"fas fa-star"}),Object(o.jsx)("span",{className:"rating",children:e.movie.imdb_rating})]})]})})]})},O=function(){var e=Object(c.useContext)(j);return Object(o.jsx)("header",{children:Object(o.jsxs)("section",{id:"recommendedMovies",children:[Object(o.jsx)("h3",{className:"title",children:"Recommended Movies"}),Object(o.jsx)("ul",{className:"MS-content",id:"recommendedMoviesContainer",children:e.recommendedMovie.map((function(e){return Object(o.jsx)(m,{movie:e},e.imdb_id)}))}),Object(o.jsxs)("div",{className:"MS-controls",children:[Object(o.jsx)("button",{className:"MS-left",children:Object(o.jsx)("i",{className:"fas fa-chevron-left fa-3x","aria-hidden":"true"})}),Object(o.jsx)("button",{className:"MS-right",children:Object(o.jsx)("i",{className:"fas fa-chevron-right fa-3x","aria-hidden":"true"})})]})]})})},f=s(5),x=s.n(f),v=s(3),g=s(8),p=function(){var e=Object(c.useContext)(j),t=Object(c.useState)({error:!1,message:""}),s=Object(i.a)(t,2),n=s[0],a=s[1];return Object(o.jsxs)("nav",{children:[Object(o.jsx)("figure",{className:"logo",children:Object(o.jsx)("a",{href:"/",children:Object(o.jsx)("img",{src:e.images.logo,alt:"Movie Finder"})})}),Object(o.jsxs)("div",{children:[n.error&&Object(o.jsx)("div",{class:"error",children:Object(o.jsxs)("p",{class:"error_message",children:["* ",n.message]})}),e.isLogedIn[0]&&Object(o.jsx)("button",{id:"showBookmarksButton",onClick:function(){e.watchListRef.current.classList.toggle("bookmarksHidden")},children:Object(o.jsx)("i",{className:"fas fa-bookmark fa-2x"})}),!e.isLogedIn[0]&&Object(o.jsx)("button",{className:"btn",onClick:function(){e.userSection[0].current.classList.remove("hide")},children:"Login"}),e.isLogedIn[0]&&Object(o.jsx)("button",{className:"btn",onClick:function(){var t="".concat(e.url[0],"/user/logout"),s=function(){var t=Object(g.a)(x.a.mark((function t(s){var c,n;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=JSON.parse(localStorage.getItem("findMovieToken")),t.next=3,fetch(s,{method:"GET",headers:{Authorization:"Token ".concat(c)}});case 3:return n=t.sent,t.next=6,n.json();case 6:200===t.sent.status?(localStorage.removeItem("findMovieToken"),e.isLogedIn[1](!1),e.userSection[0].current.classList.add("hide"),e.resetWatchList()):a((function(e){return Object(v.a)(Object(v.a)({},e),{},{error:!0,message:"The logut was not successful!"})}));case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();s(t)},children:"Logout"})]})]})},S=function(e){var t=Object(c.useContext)(j),s=Object(c.useContext)(b);return Object(o.jsx)("li",{className:"bookmark",onClick:function(){t.changeCurrentMovie(e.movie.imdb_id),s.showMovieInfoSection(s.movieInfoSectionRef.current,s.searchResultSectionRef.current),s.movieInfoSectionRef.current.scrollIntoView()},children:Object(o.jsxs)("a",{href:"/#".concat(t.movieInfo.imdb_id),children:[null!=e.movie.image_url&&e.movie.image_url.length>1?Object(o.jsx)("img",{src:e.movie.image_url,alt:e.movie.name}):Object(o.jsx)("img",{src:e.movie.image,alt:e.movie.name}),Object(o.jsxs)("div",{children:[Object(o.jsx)("h5",{children:e.movie.name}),Object(o.jsx)("i",{className:"fas fa-star"}),Object(o.jsx)("span",{className:"rating",children:e.movie.imdb_rating})]})]})})},N=function(){var e=Object(c.useContext)(j),t=Object(c.useRef)();Object(c.useEffect)((function(){e.updateWatchListRef(t)}),[]);return Object(o.jsx)("section",{className:"bookmarksContainer",children:Object(o.jsxs)("div",{ref:t,className:"bookmarks bookmarksHidden",children:[Object(o.jsx)("h4",{className:"bookmarkTitle",children:"Watch List"}),Object(o.jsx)("ul",{id:"bookmarksList",children:e.watchListMovies[0].map((function(e){return Object(o.jsx)(S,{movie:e},e.imdb_id)}))}),0===e.watchListMovies[0].length?Object(o.jsx)("h3",{className:"emptyBookmark",children:"You have no bookmark"}):"",Object(o.jsx)("div",{className:"Line"})]})})},R=function(){var e=Object(c.useContext)(b),t=Object(c.useContext)(j),s=Object(c.useRef)(),n=function(){e.showSeachResultSection(e.movieInfoSectionRef.current,e.searchResultSectionRef.current)};Object(c.useEffect)((function(){e.setMovieInfoRef(s)}),[]);return Object(o.jsxs)("section",{className:"MovieInfo hide",id:"moreInfo",ref:s,children:[Object(o.jsx)("div",{children:e.searchResult.movies.length>0?Object(o.jsxs)("button",{className:"backButton",onClick:n,children:[Object(o.jsx)("i",{className:"fas fa-arrow-left"}),"Search results"]}):""}),Object(o.jsx)("figure",{children:Object(o.jsx)("img",{src:null!=t.movieInfo.image_url?t.movieInfo.image_url:t.movieInfo.image,alt:t.movieInfo.name})}),Object(o.jsxs)("div",{className:"inforamtion",children:[Object(o.jsxs)("div",{className:"movieTitle",children:[Object(o.jsx)("h3",{children:t.movieInfo.name}),t.isLogedIn[0]&&Object(o.jsx)("button",{className:"bookmarkButton",onClick:function(){var e="".concat(t.url[0],"/user/watchList/add/").concat(t.movieInfo.imdb_id),s=JSON.parse(localStorage.getItem("findMovieToken"));fetch(e,{method:"POST",headers:{Authorization:"Token ".concat(s)}}).then((function(e){e.ok&&t.watchListMovies[1]()}))},children:function(){var e=!1;return t.watchListMovies[0].forEach((function(s){s.imdb_id===t.movieInfo.imdb_id&&(e=!0)})),e?Object(o.jsx)("i",{className:"fas fa-bookmark fa-2x"}):Object(o.jsx)("i",{className:"far fa-bookmark fa-2x"})}()})]}),Object(o.jsxs)("div",{className:"runTime",children:[Object(o.jsx)("i",{className:"far fa-clock"}),Object(o.jsx)("span",{children:t.movieInfo.run_time?t.movieInfo.run_time+" min":"Not available"})]}),Object(o.jsxs)("ul",{children:[Object(o.jsxs)("li",{children:["Type:",Object(o.jsx)("span",{className:"movieRelease infoText",children:t.movieInfo.type})]}),Object(o.jsxs)("li",{children:["Release:",Object(o.jsx)("span",{className:"movieRelease infoText",children:t.movieInfo.released_date})]}),Object(o.jsxs)("li",{children:["Genre:",Object(o.jsx)("span",{className:"movieGenre infoText",children:t.movieInfo.genre})]}),Object(o.jsxs)("li",{children:["Rating:",Object(o.jsx)("span",{className:"imdbVotes infoText",children:t.movieInfo.imdb_rating}),Object(o.jsx)("i",{className:"fab fa-imdb"})]}),Object(o.jsxs)("li",{children:["Language:",Object(o.jsx)("span",{className:"language infoText",children:t.movieInfo.language})]}),Object(o.jsx)("li",{children:Object(o.jsx)("p",{className:"summary",children:t.movieInfo.summary})}),Object(o.jsxs)("li",{children:["imdbID:",Object(o.jsx)("span",{className:"imdbID infoText",children:t.movieInfo.imdb_id})]}),Object(o.jsxs)("li",{className:"actorsList",children:[Object(o.jsx)("h3",{children:"Actors"}),Object(o.jsx)("p",{className:"actors",children:t.movieInfo.actors})]}),Object(o.jsxs)("a",{href:"https://www.imdb.com/title/".concat(t.movieInfo.imdb_id,"/"),className:"redirecButton",target:"_blank",rel:"noopener noreferrer",children:["See on IMDB website",Object(o.jsx)("i",{className:"fas fa-share-square fa"})]})]})]})]})},k=function(){var e=Object(c.useContext)(b),t=Object(c.useContext)(j),s=Object(c.useState)(!1),n=Object(i.a)(s,2),a=n[0],r=n[1];return Object(o.jsx)("section",{className:"searchContainer",children:Object(o.jsxs)("form",{method:"POST",className:"searchForm",onSubmit:function(s){if(s.preventDefault(),s.target.search.value.length>2){var c="".concat(t.url[0],"/search/").concat(s.target.search.value);e.loading[1](!0),fetch(c).then((function(t){t.json().then((function(t){e.updateSearchResult({searchQuery:s.target.search.value,current_page:t.currentPage,total_pages:t.totalPages,movies:t.result}),e.loading[1](!1)}))})),e.showSeachResultSection(e.movieInfoSectionRef.current,e.searchResultSectionRef.current),r(!1),e.searchResultSectionRef.current.scrollIntoView()}else r(!0)},children:[a&&Object(o.jsxs)("label",{htmlFor:"search",className:"searchError",children:[" ","The search query should at least be 3 charecter!"]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("input",{type:"text",name:"search",id:"search",className:"search",placeholder:"Search movie ..."}),Object(o.jsxs)("button",{type:"submit",children:[Object(o.jsx)("i",{className:"fas fa-search"}),Object(o.jsx)("span",{children:"Search"})]})]})]})})},w=function(){var e=Object(c.useContext)(j),t=Object(c.useContext)(b),s=function(s){var c=s.target.dataset.pageNum,n="".concat(e.url[0],"/search/").concat(t.searchResult.searchQuery,"/").concat(c);fetch(n).then((function(e){e.json().then((function(e){t.updateSearchResult((function(t){return Object(v.a)(Object(v.a)({},t),{},{current_page:e.currentPage,movies:e.result})}))}))})),t.searchResultSectionRef.current.scrollIntoView()};return Object(o.jsx)("section",{className:"pagination",children:Object(o.jsxs)("ul",{children:[function(){if(t.searchResult.current_page>1)return Object(o.jsx)("li",{className:"previous",children:Object(o.jsx)("i",{className:"fas fa-caret-left fa-2x",onClick:s,"data-page-num":t.searchResult.current_page-1})})}(),function(){for(var e=[],c=1;c<=t.searchResult.total_pages;c++){var n=-3<=c-t.searchResult.current_page&&c-t.searchResult.current_page<0&&c>=1,a=3>=c-t.searchResult.current_page&&c-t.searchResult.current_page>0&&c<=t.searchResult.total_pages;t.searchResult.current_page===c?e.push(Object(o.jsx)("li",{className:"activePage",onClick:s,"data-page-num":c,children:c},c)):n?(c-t.searchResult.current_page===-3&&e.push(Object(o.jsx)("li",{onClick:s,"data-page-num":1,children:"..."},"lessPages")),e.push(Object(o.jsx)("li",{onClick:s,"data-page-num":c,children:c},c))):a&&(e.push(Object(o.jsx)("li",{onClick:s,"data-page-num":c,children:c},c)),c-t.searchResult.current_page===3&&e.push(Object(o.jsx)("li",{onClick:s,"data-page-num":t.searchResult.total_pages,children:"..."},"morePages")))}return e}(),function(){if(t.searchResult.current_page<t.searchResult.total_pages)return Object(o.jsx)("li",{className:"next",children:Object(o.jsx)("i",{className:"fas fa-caret-right fa-2x",onClick:s,"data-page-num":t.searchResult.current_page+1})})}()]})})},I=function(){return Object(o.jsx)("section",{className:"spinner",children:Object(o.jsxs)("div",{className:"lds-default",children:[Object(o.jsx)("div",{}),Object(o.jsx)("div",{}),Object(o.jsx)("div",{}),Object(o.jsx)("div",{}),Object(o.jsx)("div",{}),Object(o.jsx)("div",{}),Object(o.jsx)("div",{}),Object(o.jsx)("div",{}),Object(o.jsx)("div",{}),Object(o.jsx)("div",{}),Object(o.jsx)("div",{}),Object(o.jsx)("div",{})]})})},_=function(){var e=Object(c.useContext)(b),t=Object(c.useContext)(j),s=Object(c.useRef)();Object(c.useEffect)((function(){e.setSearchResultRef(s)}),[]);return Object(o.jsx)("section",{className:"searchResultsSection hide",ref:s,children:e.loading[0]?Object(o.jsx)(I,{}):Object(o.jsxs)(n.a.Fragment,{children:[Object(o.jsxs)("h5",{children:["Results of:"," ",Object(o.jsxs)("span",{className:"searchQuery",children:['"',e.searchResult.searchQuery,'"']})]}),Object(o.jsx)("ul",{className:"searchResults hidden",children:e.searchResult.movies.length>0?e.searchResult.movies.map((function(e){return Object(o.jsx)(m,{movie:e},e.imdb_id)})):Object(o.jsxs)("figure",{children:[Object(o.jsx)("img",{src:t.images.no_result,alt:"no movies were found"}),Object(o.jsx)("h4",{children:"No movie matched the search query"})]})}),e.searchResult.total_pages>1?Object(o.jsx)(w,{}):""]})})},L=function(){var e=Object(c.useContext)(j);return Object(c.useEffect)((function(){e.updateRecommended(),JSON.parse(localStorage.getItem("findMovieToken"))&&(e.isLogedIn[1](!0),e.watchListMovies[1]())}),[]),Object(o.jsxs)("main",{children:[Object(o.jsx)(k,{}),Object(o.jsx)(R,{}),Object(o.jsx)(_,{})]})},C=function(){var e=Object(c.useContext)(j),t=Object(c.useState)({error:!1,messages:[]}),s=Object(i.a)(t,2),n=s[0],a=s[1],r=Object(c.useRef)(),l=Object(c.useState)(""),u=Object(i.a)(l,2),d=u[0],b=u[1],h=Object(c.useState)(""),m=Object(i.a)(h,2),O=m[0],f=m[1],p=Object(c.useState)(""),S=Object(i.a)(p,2),N=S[0],R=S[1],k=Object(c.useState)(""),w=Object(i.a)(k,2),I=w[0],_=w[1],L=Object(c.useState)(""),C=Object(i.a)(L,2),y=C[0],M=C[1],T=Object(c.useState)(""),P=Object(i.a)(T,2),E=P[0],F=P[1];Object(c.useEffect)((function(){e.registerRef[1](r)}),[]);var J=function(){e.loginRef[0].current.classList.remove("hide"),e.registerRef[0].current.classList.add("hide")},B=function(){b(""),M(""),F(""),R(""),_(""),f("")};return Object(o.jsxs)("div",{className:"LoginForm RegisterForm hide",ref:r,children:[Object(o.jsx)("button",{id:"closeLogin",onClick:function(t){e.userSection[0].current.classList.toggle("hide")},children:Object(o.jsx)("i",{className:"fas fa-times"})}),Object(o.jsx)("figure",{className:"logo",children:Object(o.jsx)("a",{href:"index.html",children:Object(o.jsx)("img",{src:e.images.logo,alt:"Movie Finder"})})}),Object(o.jsx)("h3",{children:"Register"}),Object(o.jsxs)("form",{onSubmit:function(t){t.preventDefault();var s="".concat(e.url[0],"/user/register"),c=function(){var e=Object(g.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch(t,{method:"POST",body:JSON.stringify({username:d,email:O,password:y,password2:E,first_name:N,last_name:I}),headers:{"Content-Type":"application/json"}}).then((function(e){return e.ok?e:(e.json().then((function(e){a((function(t){return Object(v.a)(Object(v.a)({},t),{},{error:!0,messages:Object.values(e)})}))})),null)})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();c(s).then((function(t){t&&t.json().then((function(t){localStorage.setItem("findMovieToken",JSON.stringify(t.token)),e.isLogedIn[1](!0),e.userSection[0].current.classList.add("hide"),e.watchListMovies[1](),J(),B()}))}))},children:[n.error?n.messages.map((function(e){return Object(o.jsxs)("p",{className:"error_message",children:["* ",e]})})):"",Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("input",{name:"first_name",type:"text",placeholder:"First name",value:N,onChange:function(e){R(e.target.value)}}),Object(o.jsx)("input",{name:"last_name",type:"text",placeholder:"Last name",value:I,onChange:function(e){_(e.target.value)}})]}),Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("input",{name:"username",type:"text",placeholder:"Username",value:d,onChange:function(e){b(e.target.value)},required:!0})}),Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("input",{name:"email",type:"email",placeholder:"Email",value:O,onChange:function(e){f(e.target.value)},required:!0})}),Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("input",{name:"password",type:"password",placeholder:"Password",value:y,onChange:function(e){M(e.target.value)},required:!0}),Object(o.jsx)("input",{name:"password2",type:"password",placeholder:"Repeat password",value:E,onChange:function(e){F(e.target.value)},required:!0})]}),Object(o.jsx)("button",{type:"submit",className:"btn",children:"Create account"}),Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("button",{className:"link",onClick:J,type:"button",children:"Have already an account?"})})]})]})},y=s(19),M=s.n(y),T=function(){var e=Object(c.useContext)(j),t=Object(c.useRef)(),s=Object(c.useRef)(),n=Object(c.useState)({error:!1,message:""}),a=Object(i.a)(n,2),r=a[0],l=a[1],u=Object(c.useState)(""),d=Object(i.a)(u,2),b=d[0],h=d[1],m=Object(c.useState)(""),O=Object(i.a)(m,2),f=O[0],x=O[1];Object(c.useEffect)((function(){e.loginRef[1](t),e.userSection[1](s)}),[]);var g=function(){h(""),x("")};return Object(o.jsxs)("section",{className:"LoginPage hide",ref:s,children:[Object(o.jsxs)("div",{className:"LoginForm",ref:t,children:[Object(o.jsx)("button",{id:"closeLogin",onClick:function(t){e.userSection[0].current.classList.toggle("hide")},children:Object(o.jsx)("i",{className:"fas fa-times"})}),Object(o.jsx)("figure",{className:"logo",children:Object(o.jsx)("a",{href:"index.html",children:Object(o.jsx)("img",{src:e.images.logo,alt:"Movie Finder"})})}),Object(o.jsx)("h3",{children:"Login"}),Object(o.jsxs)("form",{method:"POST",onSubmit:function(t){t.preventDefault();!function(t){M()({method:"POST",url:t,data:{username:b,password:f}}).catch((function(e){400===e.toJSON().status?l((function(e){return Object(v.a)(Object(v.a)({},e),{},{error:!0,message:"Username or password incorrect"})})):l((function(e){return Object(v.a)(Object(v.a)({},e),{},{error:!0,message:"Something went wrong!"})}))})).then((function(t){t&&(localStorage.setItem("findMovieToken",JSON.stringify(t.data.token)),e.isLogedIn[1](!0),e.userSection[0].current.classList.add("hide"),e.watchListMovies[1](),g())}))}("".concat(e.url[0],"/user/login"))},children:[r.error&&Object(o.jsx)("p",{className:"error_message",children:r.message}),Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("input",{name:"username",type:"text",placeholder:"Username",onChange:function(e){h(e.target.value)},value:b})}),Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("input",{name:"password",type:"password",placeholder:"Password",onChange:function(e){x(e.target.value)},value:f})}),Object(o.jsxs)("button",{type:"submit",className:"btn",children:[" ","Login"," "]}),Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("button",{className:"link",type:"button",onClick:function(t){e.loginRef[0].current.classList.add("hide"),e.registerRef[0].current.classList.remove("hide")},children:"Register"}),Object(o.jsxs)("a",{href:"".concat(e.url[0],"/user/resetPassword"),children:[" ","Forgot your password?"]})]})]})]}),Object(o.jsx)(C,{})]})};var P=function(){return Object(o.jsxs)(h,{children:[Object(o.jsx)(p,{}),Object(o.jsx)(O,{}),Object(o.jsx)(N,{}),Object(o.jsx)(L,{}),Object(o.jsx)(T,{})]})};r.a.render(Object(o.jsx)(u,{children:Object(o.jsx)(P,{})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.b14c769f.chunk.js.map