import{S as L,a as b,i as l}from"./assets/vendor-bEqFC_vW.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const i={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),preloader:document.querySelector(".js-loader"),loadMoreBtn:document.querySelector(".js-load-more")},w=new L(".gallery a",{captionsData:"alt",captionPosition:"bottom"});function m(o){const t=o.map(({largeImageURL:r,webformatURL:a,tags:e,likes:s,views:n,comments:y,downloads:v})=>` <li class="gallery-item">
	<a class="gallery-link" href="${r}">
		<img 
		  class="gallery-image" 
		  src="${a}"
		  alt="${e}"
		/>
	</a>
  <div class="field">
  <div class="statistics">
    <span class='titles'>Likes</span>
    <span class='numbers'>${s}</span>
  </div>
  <div class="statistics">
    <span class='titles'>Views</span>
    <span class='numbers'>${n}</span>
  </div>
  <div class="statistics">
    <span class='titles'>Comments</span>
    <span class='numbers'>${y}</span>
  </div>
  <div class="statistics">
    <span class='titles'>Downloads</span>
    <span class='numbers'>${v}</span>
  </div>
</div>
</li>`).join("");i.gallery.insertAdjacentHTML("beforeend",t),w.refresh()}function M(){i.gallery.innerHTML=""}function g(){i.preloader.classList.add("is-active")}function p(){i.preloader.classList.remove("is-active")}function f(){i.loadMoreBtn.classList.remove("is-hidden")}function u(){i.loadMoreBtn.classList.add("is-hidden")}const P="55620354-ac6ed1e79a2ffd89ad6e48679",S="https://pixabay.com/api/",h=async(o,t)=>{const r={key:P,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15,page:t},{data:a}=await b.get(S,{params:r});return a};let c=1,d="";const B=async o=>{try{c++,u(),g();const t=await h(d,c);m(t.hits);const r=document.querySelector(".gallery-item");if(r){const e=r.getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}const a=Math.ceil(t.totalHits/15);if(c>=a){u(),l.error({position:"topRight",message:"We're sorry, but you've reached the end of search results."});return}f()}catch(t){console.log(t),l.error({position:"topRight",message:"Something went wrong! Please try again."})}finally{p()}};i.loadMoreBtn.addEventListener("click",B);const q=async o=>{try{if(o.preventDefault(),d=o.target.elements["search-text"].value.trim(),!d)return;c=1,M(),u(),g();const t=await h(d,c);if(t.hits.length===0){l.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});return}m(t.hits),Math.ceil(t.totalHits/15)>1?f():l.error({position:"topRight",message:"We're sorry, but you've reached the end of search results."})}catch(t){console.log(t),l.error({position:"topRight",message:"Something went wrong! Please try again."})}finally{p()}};p();i.form.addEventListener("submit",q);
//# sourceMappingURL=index.js.map
