(this.webpackJsonptemp=this.webpackJsonptemp||[]).push([[0],{24:function(e,t,c){},45:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),a=c(19),r=c.n(a),i=(c(24),c(5)),o=c.n(i),l=c(6),j=c(2),u=c(9),d=c.n(u),h=c(0),b=n.a.createContext(),m=b,O=function(e){var t=Object(s.useState)(!1),c=Object(j.a)(t,2),n=c[0],a=c[1],r=Object(s.useState)(!1),i=Object(j.a)(r,2),u=i[0],m=i[1],O=Object(s.useState)([]),f=Object(j.a)(O,2),x=f[0],v=f[1],g=Object(s.useState)(null),p=Object(j.a)(g,2),S=p[0],N=p[1],R=Object(s.useState)(null),k=Object(j.a)(R,2),w=k[0],I=k[1],L=Object(s.useState)(null),_=Object(j.a)(L,2),C=_[0],y=_[1],M=Object(s.useState)(null),T=Object(j.a)(M,2),P=T[0],E=T[1],F=Object(s.useState)({}),J=Object(j.a)(F,2),B=J[0],q=J[1],D=Object(s.useState)([]),G=Object(j.a)(D,2),Q=G[0],V=G[1],W=Object(s.useState)("http://127.0.0.1:8000"),A=Object(j.a)(W,2),z=A[0],H=A[1],U=function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t="".concat(z,"/recommend/"),d()({method:"GET",url:t}).then((function(e){console.log(e),v(e.data)})).catch((function(e){return console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Y={isLogedIn:[n,a],watchListRef:S,updateWatchListRef:N,userSection:[w,I],loginRef:[C,y],registerRef:[P,E],watchListMovies:[Q,function(){var e="".concat(z,"/user/watchList"),t=JSON.parse(localStorage.getItem("findMovieToken"));fetch(e,{method:"GET",headers:{Authorization:"Token ".concat(t)}}).then((function(e){e.json().then((function(e){V(e)}))}))}],resetWatchList:function(){V([])},recommendedMovie:x,updateRecommended:U,movieInfo:B,changeCurrentMovie:function(e){var t="".concat(z,"/movie/").concat(e);fetch(t,{}).then((function(e){e.json().then((function(e){q(e.result)}))}))},isLoading:u,setIsLoading:m,url:[z,H]};return Object(h.jsx)(b.Provider,{value:Y,children:e.children})},f=n.a.createContext(),x=f,v=function(e){var t=Object(s.useState)({searchQuery:"",current_page:1,total_pages:0,movies:[]}),c=Object(j.a)(t,2),n=c[0],a=c[1],r=Object(s.useState)(!1),i=Object(j.a)(r,2),o=i[0],l=i[1],u=Object(s.useState)(null),d=Object(j.a)(u,2),b=d[0],m=d[1],O=Object(s.useState)(null),x=Object(j.a)(O,2),v={loading:[o,l],searchResult:n,updateSearchResult:a,movieInfoSectionRef:b,setMovieInfoRef:m,searchResultSectionRef:x[0],setSearchResultRef:x[1],showMovieInfoSection:function(e,t){e.classList.remove("hide"),t.classList.add("hide")},showSeachResultSection:function(e,t){e.classList.add("hide"),t.classList.remove("hide")}};return Object(h.jsx)(f.Provider,{value:v,children:e.children})},g=function(e){var t=Object(s.useContext)(m),c=Object(s.useContext)(x);return Object(h.jsxs)("li",{className:"item",children:[Object(h.jsx)("a",{href:"".concat(t.movieInfo.imdb_id),onClick:function(s){s.preventDefault(),t.changeCurrentMovie(e.movie.imdb_id),c.showMovieInfoSection(c.movieInfoSectionRef.current,c.searchResultSectionRef.current),c.movieInfoSectionRef.current.scrollIntoView()},children:null!=e.movie.image_url&&e.movie.image_url.length>1?Object(h.jsx)("img",{src:e.movie.image_url,alt:e.movie.name}):Object(h.jsx)("img",{src:e.movie.image,alt:e.movie.name})}),Object(h.jsx)("details",{children:Object(h.jsxs)("summary",{children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("h5",{children:e.movie.name}),Object(h.jsx)("p",{className:"Genre",children:e.movie.genre})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("i",{className:"fas fa-star"}),Object(h.jsx)("span",{className:"rating",children:e.movie.imdb_rating})]})]})})]})},p=function(){var e=Object(s.useContext)(m);return Object(h.jsx)("header",{children:Object(h.jsxs)("section",{id:"recommendedMovies",children:[Object(h.jsx)("h3",{className:"title",children:"Recommended Movies"}),Object(h.jsx)("ul",{className:"MS-content",id:"recommendedMoviesContainer",children:e.recommendedMovie.map((function(e){return Object(h.jsx)(g,{movie:e},e.imdb_id)}))}),Object(h.jsxs)("div",{className:"MS-controls",children:[Object(h.jsx)("button",{className:"MS-left",children:Object(h.jsx)("i",{className:"fas fa-chevron-left fa-3x","aria-hidden":"true"})}),Object(h.jsx)("button",{className:"MS-right",children:Object(h.jsx)("i",{className:"fas fa-chevron-right fa-3x","aria-hidden":"true"})})]})]})})},S=c(3),N=c.p+"static/media/logo.9023cd53.png",R=function(){var e=Object(s.useContext)(m),t=Object(s.useState)({error:!1,message:""}),c=Object(j.a)(t,2),n=c[0],a=c[1];return Object(h.jsxs)("nav",{children:[Object(h.jsx)("figure",{className:"logo",children:Object(h.jsx)("a",{href:"/",children:Object(h.jsx)("img",{src:N,alt:"Movie Finder"})})}),Object(h.jsxs)("div",{children:[n.error&&Object(h.jsx)("div",{class:"error",children:Object(h.jsxs)("p",{class:"error_message",children:["* ",n.message]})}),e.isLogedIn[0]&&Object(h.jsx)("button",{id:"showBookmarksButton",onClick:function(){e.watchListRef.current.classList.toggle("bookmarksHidden")},children:Object(h.jsx)("i",{className:"fas fa-bookmark fa-2x"})}),!e.isLogedIn[0]&&Object(h.jsx)("button",{className:"btn",onClick:function(){e.userSection[0].current.classList.remove("hide")},children:"Login"}),e.isLogedIn[0]&&Object(h.jsx)("button",{className:"btn",onClick:function(){var t="".concat(e.url[0],"/user/logout"),c=function(){var t=Object(l.a)(o.a.mark((function t(c){var s,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=JSON.parse(localStorage.getItem("findMovieToken")),t.next=3,fetch(c,{method:"GET",headers:{Authorization:"Token ".concat(s)}});case 3:return n=t.sent,t.next=6,n.json();case 6:200===t.sent.status?(localStorage.removeItem("findMovieToken"),e.isLogedIn[1](!1),e.userSection[0].current.classList.add("hide"),e.resetWatchList()):a((function(e){return Object(S.a)(Object(S.a)({},e),{},{error:!0,message:"The logut was not successful!"})}));case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();c(t)},children:"Logout"})]})]})},k=function(e){var t=Object(s.useContext)(m),c=Object(s.useContext)(x);return Object(h.jsx)("li",{className:"bookmark",onClick:function(){t.changeCurrentMovie(e.movie.imdb_id),c.showMovieInfoSection(c.movieInfoSectionRef.current,c.searchResultSectionRef.current),c.movieInfoSectionRef.current.scrollIntoView()},children:Object(h.jsxs)("a",{href:"/#".concat(t.movieInfo.imdb_id),children:[null!=e.movie.image_url&&e.movie.image_url.length>1?Object(h.jsx)("img",{src:e.movie.image_url,alt:e.movie.name}):Object(h.jsx)("img",{src:e.movie.image,alt:e.movie.name}),Object(h.jsxs)("div",{children:[Object(h.jsx)("h5",{children:e.movie.name}),Object(h.jsx)("i",{className:"fas fa-star"}),Object(h.jsx)("span",{className:"rating",children:e.movie.imdb_rating})]})]})})},w=function(){var e=Object(s.useContext)(m),t=Object(s.useRef)();Object(s.useEffect)((function(){e.updateWatchListRef(t)}),[]);return Object(h.jsx)("section",{className:"bookmarksContainer",children:Object(h.jsxs)("div",{ref:t,className:"bookmarks bookmarksHidden",children:[Object(h.jsx)("h4",{className:"bookmarkTitle",children:"Watch List"}),Object(h.jsx)("ul",{id:"bookmarksList",children:e.watchListMovies[0].map((function(e){return Object(h.jsx)(k,{movie:e},e.imdb_id)}))}),0===e.watchListMovies[0].length?Object(h.jsx)("h3",{className:"emptyBookmark",children:"You have no bookmark"}):"",Object(h.jsx)("div",{className:"Line"})]})})},I=function(){var e=Object(s.useContext)(x),t=Object(s.useContext)(m),c=Object(s.useRef)(),n=function(){e.showSeachResultSection(e.movieInfoSectionRef.current,e.searchResultSectionRef.current)};Object(s.useEffect)((function(){e.setMovieInfoRef(c)}),[]);return Object(h.jsxs)("section",{className:"MovieInfo hide",id:"moreInfo",ref:c,children:[Object(h.jsx)("div",{children:e.searchResult.movies.length>0?Object(h.jsxs)("button",{className:"backButton",onClick:n,children:[Object(h.jsx)("i",{className:"fas fa-arrow-left"}),"Search results"]}):""}),Object(h.jsx)("figure",{children:Object(h.jsx)("img",{src:null!=t.movieInfo.image_url?t.movieInfo.image_url:t.movieInfo.image,alt:t.movieInfo.name})}),Object(h.jsxs)("div",{className:"inforamtion",children:[Object(h.jsxs)("div",{className:"movieTitle",children:[Object(h.jsx)("h3",{children:t.movieInfo.name}),t.isLogedIn[0]&&Object(h.jsx)("button",{className:"bookmarkButton",onClick:function(){var e="".concat(t.url[0],"/user/watchList/add/").concat(t.movieInfo.imdb_id),c=JSON.parse(localStorage.getItem("findMovieToken"));fetch(e,{method:"POST",headers:{Authorization:"Token ".concat(c)}}).then((function(e){e.ok&&t.watchListMovies[1]()}))},children:function(){var e=!1;return t.watchListMovies[0].forEach((function(c){c.imdb_id===t.movieInfo.imdb_id&&(e=!0)})),e?Object(h.jsx)("i",{className:"fas fa-bookmark fa-2x"}):Object(h.jsx)("i",{className:"far fa-bookmark fa-2x"})}()})]}),Object(h.jsxs)("div",{className:"runTime",children:[Object(h.jsx)("i",{className:"far fa-clock"}),Object(h.jsx)("span",{children:t.movieInfo.run_time?t.movieInfo.run_time+" min":"Not available"})]}),Object(h.jsxs)("ul",{children:[Object(h.jsxs)("li",{children:["Type:",Object(h.jsx)("span",{className:"movieRelease infoText",children:t.movieInfo.type})]}),Object(h.jsxs)("li",{children:["Release:",Object(h.jsx)("span",{className:"movieRelease infoText",children:t.movieInfo.released_date})]}),Object(h.jsxs)("li",{children:["Genre:",Object(h.jsx)("span",{className:"movieGenre infoText",children:t.movieInfo.genre})]}),Object(h.jsxs)("li",{children:["Rating:",Object(h.jsx)("span",{className:"imdbVotes infoText",children:t.movieInfo.imdb_rating}),Object(h.jsx)("i",{className:"fab fa-imdb"})]}),Object(h.jsxs)("li",{children:["Language:",Object(h.jsx)("span",{className:"language infoText",children:t.movieInfo.language})]}),Object(h.jsx)("li",{children:Object(h.jsx)("p",{className:"summary",children:t.movieInfo.summary})}),Object(h.jsxs)("li",{children:["imdbID:",Object(h.jsx)("span",{className:"imdbID infoText",children:t.movieInfo.imdb_id})]}),Object(h.jsxs)("li",{className:"actorsList",children:[Object(h.jsx)("h3",{children:"Actors"}),Object(h.jsx)("p",{className:"actors",children:t.movieInfo.actors})]}),Object(h.jsxs)("a",{href:"https://www.imdb.com/title/".concat(t.movieInfo.imdb_id,"/"),className:"redirecButton",target:"_blank",rel:"noopener noreferrer",children:["See on IMDB website",Object(h.jsx)("i",{className:"fas fa-share-square fa"})]})]})]})]})},L=function(){var e=Object(s.useContext)(x),t=Object(s.useContext)(m),c=Object(s.useState)(!1),n=Object(j.a)(c,2),a=n[0],r=n[1];return Object(h.jsx)("section",{className:"searchContainer",children:Object(h.jsxs)("form",{method:"POST",className:"searchForm",onSubmit:function(c){if(c.preventDefault(),c.target.search.value.length>2){var s="".concat(t.url[0],"/search/").concat(c.target.search.value);e.loading[1](!0),fetch(s).then((function(t){t.json().then((function(t){e.updateSearchResult({searchQuery:c.target.search.value,current_page:t.currentPage,total_pages:t.totalPages,movies:t.result}),e.loading[1](!1)}))})),e.showSeachResultSection(e.movieInfoSectionRef.current,e.searchResultSectionRef.current),r(!1),e.searchResultSectionRef.current.scrollIntoView()}else r(!0)},children:[a&&Object(h.jsxs)("label",{htmlFor:"search",className:"searchError",children:[" ","The search query should at least be 3 charecter!"]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("input",{type:"text",name:"search",id:"search",className:"search",placeholder:"Search movie ..."}),Object(h.jsxs)("button",{type:"submit",children:[Object(h.jsx)("i",{className:"fas fa-search"}),Object(h.jsx)("span",{children:"Search"})]})]})]})})},_=function(){var e=Object(s.useContext)(m),t=Object(s.useContext)(x),c=function(c){var s=c.target.dataset.pageNum,n="".concat(e.url[0],"/search/").concat(t.searchResult.searchQuery,"/").concat(s);fetch(n).then((function(e){e.json().then((function(e){t.updateSearchResult((function(t){return Object(S.a)(Object(S.a)({},t),{},{current_page:e.currentPage,movies:e.result})}))}))})),t.searchResultSectionRef.current.scrollIntoView()};return Object(h.jsx)("section",{className:"pagination",children:Object(h.jsxs)("ul",{children:[function(){if(t.searchResult.current_page>1)return Object(h.jsx)("li",{className:"previous",children:Object(h.jsx)("i",{className:"fas fa-caret-left fa-2x",onClick:c,"data-page-num":t.searchResult.current_page-1})})}(),function(){for(var e=[],s=1;s<=t.searchResult.total_pages;s++){var n=-3<=s-t.searchResult.current_page&&s-t.searchResult.current_page<0&&s>=1,a=3>=s-t.searchResult.current_page&&s-t.searchResult.current_page>0&&s<=t.searchResult.total_pages;t.searchResult.current_page===s?e.push(Object(h.jsx)("li",{className:"activePage",onClick:c,"data-page-num":s,children:s},s)):n?(s-t.searchResult.current_page===-3&&e.push(Object(h.jsx)("li",{onClick:c,"data-page-num":1,children:"..."},"lessPages")),e.push(Object(h.jsx)("li",{onClick:c,"data-page-num":s,children:s},s))):a&&(e.push(Object(h.jsx)("li",{onClick:c,"data-page-num":s,children:s},s)),s-t.searchResult.current_page===3&&e.push(Object(h.jsx)("li",{onClick:c,"data-page-num":t.searchResult.total_pages,children:"..."},"morePages")))}return e}(),function(){if(t.searchResult.current_page<t.searchResult.total_pages)return Object(h.jsx)("li",{className:"next",children:Object(h.jsx)("i",{className:"fas fa-caret-right fa-2x",onClick:c,"data-page-num":t.searchResult.current_page+1})})}()]})})},C=function(){return Object(h.jsx)("section",{className:"spinner",children:Object(h.jsxs)("div",{className:"lds-default",children:[Object(h.jsx)("div",{}),Object(h.jsx)("div",{}),Object(h.jsx)("div",{}),Object(h.jsx)("div",{}),Object(h.jsx)("div",{}),Object(h.jsx)("div",{}),Object(h.jsx)("div",{}),Object(h.jsx)("div",{}),Object(h.jsx)("div",{}),Object(h.jsx)("div",{}),Object(h.jsx)("div",{}),Object(h.jsx)("div",{})]})})},y=c.p+"static/media/no_result.0787332d.png",M=function(){var e=Object(s.useContext)(x),t=Object(s.useRef)();Object(s.useEffect)((function(){e.setSearchResultRef(t)}),[]);return Object(h.jsx)("section",{className:"searchResultsSection hide",ref:t,children:e.loading[0]?Object(h.jsx)(C,{}):Object(h.jsxs)(n.a.Fragment,{children:[Object(h.jsxs)("h5",{children:["Results of:"," ",Object(h.jsxs)("span",{className:"searchQuery",children:['"',e.searchResult.searchQuery,'"']})]}),Object(h.jsx)("ul",{className:"searchResults hidden",children:e.searchResult.movies.length>0?e.searchResult.movies.map((function(e){return Object(h.jsx)(g,{movie:e},e.imdb_id)})):Object(h.jsxs)("figure",{children:[Object(h.jsx)("img",{src:y,alt:"no movies were found"}),Object(h.jsx)("h4",{children:"No movie matched the search query"})]})}),e.searchResult.total_pages>1?Object(h.jsx)(_,{}):""]})})},T=function(){var e=Object(s.useContext)(m);return Object(s.useEffect)((function(){e.updateRecommended(),JSON.parse(localStorage.getItem("findMovieToken"))&&(e.isLogedIn[1](!0),e.watchListMovies[1]())}),[]),Object(h.jsxs)("main",{children:[Object(h.jsx)(L,{}),Object(h.jsx)(I,{}),Object(h.jsx)(M,{})]})},P=function(){var e=Object(s.useContext)(m),t=Object(s.useState)({error:!1,messages:[]}),c=Object(j.a)(t,2),n=c[0],a=c[1],r=Object(s.useRef)(),i=Object(s.useState)(""),u=Object(j.a)(i,2),d=u[0],b=u[1],O=Object(s.useState)(""),f=Object(j.a)(O,2),x=f[0],v=f[1],g=Object(s.useState)(""),p=Object(j.a)(g,2),R=p[0],k=p[1],w=Object(s.useState)(""),I=Object(j.a)(w,2),L=I[0],_=I[1],C=Object(s.useState)(""),y=Object(j.a)(C,2),M=y[0],T=y[1],P=Object(s.useState)(""),E=Object(j.a)(P,2),F=E[0],J=E[1];Object(s.useEffect)((function(){e.registerRef[1](r)}),[]);var B=function(){e.loginRef[0].current.classList.remove("hide"),e.registerRef[0].current.classList.add("hide")},q=function(){b(""),T(""),J(""),k(""),_(""),v("")};return Object(h.jsxs)("div",{className:"LoginForm RegisterForm hide",ref:r,children:[Object(h.jsx)("button",{id:"closeLogin",onClick:function(t){e.userSection[0].current.classList.toggle("hide")},children:Object(h.jsx)("i",{className:"fas fa-times"})}),Object(h.jsx)("figure",{className:"logo",children:Object(h.jsx)("a",{href:"index.html",children:Object(h.jsx)("img",{src:N,alt:"Movie Finder"})})}),Object(h.jsx)("h3",{children:"Register"}),Object(h.jsxs)("form",{onSubmit:function(t){t.preventDefault();var c="".concat(e.url[0],"/user/register"),s=function(){var e=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch(t,{method:"POST",body:JSON.stringify({username:d,email:x,password:M,password2:F,first_name:R,last_name:L}),headers:{"Content-Type":"application/json"}}).then((function(e){return e.ok?e:(e.json().then((function(e){a((function(t){return Object(S.a)(Object(S.a)({},t),{},{error:!0,messages:Object.values(e)})}))})),null)})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();s(c).then((function(t){t&&t.json().then((function(t){localStorage.setItem("findMovieToken",JSON.stringify(t.token)),e.isLogedIn[1](!0),e.userSection[0].current.classList.add("hide"),e.watchListMovies[1](),B(),q()}))}))},children:[n.error?n.messages.map((function(e){return Object(h.jsxs)("p",{className:"error_message",children:["* ",e]})})):"",Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("input",{name:"first_name",type:"text",placeholder:"First name",value:R,onChange:function(e){k(e.target.value)}}),Object(h.jsx)("input",{name:"last_name",type:"text",placeholder:"Last name",value:L,onChange:function(e){_(e.target.value)}})]}),Object(h.jsx)("div",{className:"row",children:Object(h.jsx)("input",{name:"username",type:"text",placeholder:"Username",value:d,onChange:function(e){b(e.target.value)},required:!0})}),Object(h.jsx)("div",{className:"row",children:Object(h.jsx)("input",{name:"email",type:"email",placeholder:"Email",value:x,onChange:function(e){v(e.target.value)},required:!0})}),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("input",{name:"password",type:"password",placeholder:"Password",value:M,onChange:function(e){T(e.target.value)},required:!0}),Object(h.jsx)("input",{name:"password2",type:"password",placeholder:"Repeat password",value:F,onChange:function(e){J(e.target.value)},required:!0})]}),Object(h.jsx)("button",{type:"submit",className:"btn",children:"Create account"}),Object(h.jsx)("div",{className:"row",children:Object(h.jsx)("button",{className:"link",onClick:B,type:"button",children:"Have already an account?"})})]})]})},E=function(){var e=Object(s.useContext)(m),t=Object(s.useRef)(),c=Object(s.useRef)(),n=Object(s.useState)({error:!1,message:""}),a=Object(j.a)(n,2),r=a[0],i=a[1],o=Object(s.useState)(""),l=Object(j.a)(o,2),u=l[0],b=l[1],O=Object(s.useState)(""),f=Object(j.a)(O,2),x=f[0],v=f[1];Object(s.useEffect)((function(){e.loginRef[1](t),e.userSection[1](c)}),[]);var g=function(){b(""),v("")};return Object(h.jsxs)("section",{className:"LoginPage hide",ref:c,children:[Object(h.jsxs)("div",{className:"LoginForm",ref:t,children:[Object(h.jsx)("button",{id:"closeLogin",onClick:function(t){e.userSection[0].current.classList.toggle("hide")},children:Object(h.jsx)("i",{className:"fas fa-times"})}),Object(h.jsx)("figure",{className:"logo",children:Object(h.jsx)("a",{href:"index.html",children:Object(h.jsx)("img",{src:N,alt:"Movie Finder"})})}),Object(h.jsx)("h3",{children:"Login"}),Object(h.jsxs)("form",{method:"POST",onSubmit:function(t){t.preventDefault();!function(t){d()({method:"POST",url:t,data:{username:u,password:x}}).catch((function(e){400===e.toJSON().status?i((function(e){return Object(S.a)(Object(S.a)({},e),{},{error:!0,message:"Username or password incorrect"})})):i((function(e){return Object(S.a)(Object(S.a)({},e),{},{error:!0,message:"Something went wrong!"})}))})).then((function(t){t&&(localStorage.setItem("findMovieToken",JSON.stringify(t.data.token)),e.isLogedIn[1](!0),e.userSection[0].current.classList.add("hide"),e.watchListMovies[1](),g())}))}("".concat(e.url[0],"/user/login"))},children:[r.error&&Object(h.jsx)("p",{className:"error_message",children:r.message}),Object(h.jsx)("div",{className:"row",children:Object(h.jsx)("input",{name:"username",type:"text",placeholder:"Username",onChange:function(e){b(e.target.value)},value:u})}),Object(h.jsx)("div",{className:"row",children:Object(h.jsx)("input",{name:"password",type:"password",placeholder:"Password",onChange:function(e){v(e.target.value)},value:x})}),Object(h.jsxs)("button",{type:"submit",className:"btn",children:[" ","Login"," "]}),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("button",{className:"link",type:"button",onClick:function(t){e.loginRef[0].current.classList.add("hide"),e.registerRef[0].current.classList.remove("hide")},children:"Register"}),Object(h.jsxs)("a",{href:"".concat(e.url[0],"/user/resetPassword"),children:[" ","Forgot your password?"]})]})]})]}),Object(h.jsx)(P,{})]})};var F=function(){return Object(h.jsxs)(v,{children:[Object(h.jsx)(R,{}),Object(h.jsx)(p,{}),Object(h.jsx)(w,{}),Object(h.jsx)(T,{}),Object(h.jsx)(E,{})]})};r.a.render(Object(h.jsx)(O,{children:Object(h.jsx)(F,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.bfedacf6.chunk.js.map