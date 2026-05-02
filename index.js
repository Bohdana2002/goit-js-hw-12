import{S as v,a as L,i as u}from"./assets/vendor-bEqFC_vW.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();const o={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),preloader:document.querySelector(".js-loader"),loadMoreBtn:document.querySelector(".js-load-more")},b=new v(".gallery a",{captionsData:"alt",captionPosition:"bottom"});function p(a){const t=a.map(({largeImageURL:i,webformatURL:r,tags:e,likes:s,views:n,comments:g,downloads:h})=>` <li class="gallery-item">
	<a class="gallery-link" href="${i}">
		<img 
		  class="gallery-image" 
		  src="${r}"
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
    <span class='numbers'>${g}</span>
  </div>
  <div class="statistics">
    <span class='titles'>Downloads</span>
    <span class='numbers'>${h}</span>
  </div>
</div>
</li>`).join("");o.gallery.insertAdjacentHTML("beforeend",t),b.refresh()}function M(){o.gallery.innerHTML=""}function f(){o.preloader.classList.add("is-active")}function d(){o.preloader.classList.remove("is-active")}function w(){o.loadMoreBtn.classList.remove("is-hidden")}function m(){o.loadMoreBtn.classList.add("is-hidden")}const B="55620354-ac6ed1e79a2ffd89ad6e48679",P="https://pixabay.com/api/",y=async(a,t)=>{const i={key:B,q:a,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15,page:t},{data:r}=await L.get(P,{params:i});return r};let l=1,c="";const S=async a=>{try{l++,f();const t=await y(c,l);p(t.hits);const r=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"});const e=Math.ceil(t.totalHits/15);if(l>=e){m(),u.error({position:"topRight",message:"We're sorry, but you've reached the end of search results."});return}}catch(t){console.log(t)}finally{d()}};o.loadMoreBtn.addEventListener("click",S);const q=async a=>{try{if(a.preventDefault(),c=a.target.elements["search-text"].value.trim(),!c)return;l=1,M(),m(),f();const t=await y(c,l);if(t.hits.length===0){u.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});return}p(t.hits),Math.ceil(t.totalHits/15)>1&&w()}catch(t){console.log(t)}finally{d()}};d();o.form.addEventListener("submit",q);
//# sourceMappingURL=index.js.map
