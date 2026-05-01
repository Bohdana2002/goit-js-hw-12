import{S as u,a as p,i as m}from"./assets/vendor-bEqFC_vW.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const n={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),preloader:document.querySelector(".js-loader")},f=new u(".gallery a",{captionsData:"alt",captionPosition:"bottom"});function y(a){const t=a.map(({largeImageURL:r,webformatURL:i,tags:e,likes:s,views:o,comments:l,downloads:d})=>` <li class="gallery-item">
	<a class="gallery-link" href="${r}">
		<img 
		  class="gallery-image" 
		  src="${i}"
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
    <span class='numbers'>${o}</span>
  </div>
  <div class="statistics">
    <span class='titles'>Comments</span>
    <span class='numbers'>${l}</span>
  </div>
  <div class="statistics">
    <span class='titles'>Downloads</span>
    <span class='numbers'>${d}</span>
  </div>
</div>
</li>`).join("");n.gallery.insertAdjacentHTML("beforeend",t),f.refresh()}function g(){n.gallery.innerHTML=""}function h(){n.preloader.classList.add("is-active")}function c(){n.preloader.classList.remove("is-active")}const v="55620354-ac6ed1e79a2ffd89ad6e48679",L="https://pixabay.com/api/",b=async(a,t)=>{const r={key:v,q:a,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15,page:t},{data:i}=await p.get(L,{params:r});return i},S=async a=>{try{a.preventDefault();const t=a.target.elements["search-text"].value.trim();if(!t)return;g(),h();const r=await b(t);if(r.hits.length===0){m.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});return}y(r.hits)}catch(t){console.log(t)}finally{c()}};c();n.form.addEventListener("submit",S);
//# sourceMappingURL=index.js.map
