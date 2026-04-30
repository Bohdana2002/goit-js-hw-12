import{S as f,a as m,i as p}from"./assets/vendor-JQ4mps58.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const n=document.querySelector(".gallery"),l=document.querySelector(".js-loader"),y=new f(".gallery a",{captionsData:"alt",captionPosition:"bottom"});function g(a){const s=a.map(({largeImageURL:r,webformatURL:o,tags:e,likes:t,views:i,comments:u,downloads:d})=>` <li class="gallery-item">
	<a class="gallery-link" href="${r}">
		<img 
		  class="gallery-image" 
		  src="${o}"
		  alt="${e}"
		/>
	</a>
  <div class="field">
  <div class="statistics">
    <span class='titles'>Likes</span>
    <span class='numbers'>${t}</span>
  </div>
  <div class="statistics">
    <span class='titles'>Views</span>
    <span class='numbers'>${i}</span>
  </div>
  <div class="statistics">
    <span class='titles'>Comments</span>
    <span class='numbers'>${u}</span>
  </div>
  <div class="statistics">
    <span class='titles'>Downloads</span>
    <span class='numbers'>${d}</span>
  </div>
</div>
</li>`).join("");n.insertAdjacentHTML("beforeend",s),y.refresh()}function h(){n.innerHTML=""}function v(){l.classList.add("is-active")}function c(){l.classList.remove("is-active")}function b(a){return m.get(`https://pixabay.com/api/?key=55620354-ac6ed1e79a2ffd89ad6e48679&q=${a}&image_type=photo&orientation=horizontal&safesearch=true`).then(s=>s.data)}const L={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),preloader:document.querySelector(".js-loader")};function S(a){a.preventDefault();const s=a.target.elements["search-text"].value.trim();s&&(h(),v(),b(s).then(r=>{if(r.hits.length===0){p.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});return}g(r.hits)}).catch(r=>console.log(r)).finally(()=>{c()}))}c();L.form.addEventListener("submit",S);
//# sourceMappingURL=index.js.map
