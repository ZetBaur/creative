$(document).ready((function(){function e(e){this.type=e}$(".grid").isotope({itemSelector:".grid-item",layoutMode:"fitRows"}),$(".grid-wrapper__button").on("click",(function(){$(".grid-wrapper__button").removeClass("active"),$(this).addClass("active");var e=$(this).attr("data-filter");return $(".grid").isotope({filter:e}),!1})),$(".popup-link, .popup-link-2").magnificPopup({}),$(".testimonials__slider-2").slick({asNavFor:".testimonials__slider-1",prevArrow:'<button type="button" class="slick-arrow slick-prev">Previous</button>',nextArrow:'<button type="button" class="slick-arrow slick-next">Next</button>'}),$(".testimonials__slider-1").slick({speed:1e3,fade:!0,asNavFor:".testimonials__slider-2"}),$(window).scroll((function(){$(this).scrollTop()>900?$(".pageup").fadeIn():$(".pageup").fadeOut()})),$("a[href^='#']").click((function(){var e=$(this).attr("href");return $("html, body").animate({scrollTop:$(e).offset().top+"px"}),!1})),$(".burger").on("click",(function(){$(".menu").toggleClass("open")})),$(".menu-item").on("click",(function(){$(".menu").hasClass("open")&&$(".menu").removeClass("open")})),$("html, body").on("click",(function(e){$(".menu").hasClass("open")&&!$(e.target).is(".menu, .menu-item, .burger")&&$(".menu").removeClass("open")})),$(".popup-link").on("click",(function(){$(".popup__overlay, .popup__window").fadeIn()})),$(".popup__close").on("click",(function(){$(".popup__overlay, .popup__window").fadeOut()})),$("input[name=phone]").mask("+7 (999) 999-99-99"),$("#commentForm").validate({rules:{name:{required:!0,minlength:2},phone:"required",email:{required:!0,email:!0}},messages:{name:{required:"We need your email address to contact you",minlength:jQuery.validator.format("At least {0} characters required!")},email:{required:"We need your email address to contact you",email:"Your email address must be in the format of name@domain.com"},phone:{required:"Пожалуйста, укажите номер телефона"}}}),$("body").on("click",".tab-link",(function(e){var t=$(this).index();if($(this).hasClass("parent"))t=$(this).parent().index();$(this).hasClass("active")||($(this).closest(".tabs").find(".tab-link").removeClass("active"),$(this).addClass("active"),$(this).closest(".tabs").find(".tab-item").removeClass("active").eq(t).addClass("active"),$(this).closest(".tabs").find(".slick-slider").length>0&&$(this).closest(".tabs").find(".slick-slider").slick("setPosition"))})),$.each($(".ibg"),(function(e,t){$(this).find("img").length>0&&$(this).css("background-image",'url("'+$(this).find("img").attr("src")+'")')})),e.prototype.init=function(){const e=this;this.оbjects=[],this.daClassname="_dynamic_adapt_",this.nodes=document.querySelectorAll("[data-da]");for(let e=0;e<this.nodes.length;e++){const t=this.nodes[e],i=t.dataset.da.trim().split(","),n={};n.element=t,n.parent=t.parentNode,n.destination=document.querySelector(i[0].trim()),n.breakpoint=i[1]?i[1].trim():"767",n.place=i[2]?i[2].trim():"last",n.index=this.indexInParent(n.parent,n.element),this.оbjects.push(n)}this.arraySort(this.оbjects),this.mediaQueries=Array.prototype.map.call(this.оbjects,(function(e){return"("+this.type+"-width: "+e.breakpoint+"px),"+e.breakpoint}),this),this.mediaQueries=Array.prototype.filter.call(this.mediaQueries,(function(e,t,i){return Array.prototype.indexOf.call(i,e)===t}));for(let t=0;t<this.mediaQueries.length;t++){const i=this.mediaQueries[t],n=String.prototype.split.call(i,","),a=window.matchMedia(n[0]),s=n[1],o=Array.prototype.filter.call(this.оbjects,(function(e){return e.breakpoint===s}));a.addListener((function(){e.mediaHandler(a,o)})),this.mediaHandler(a,o)}},e.prototype.mediaHandler=function(e,t){if(e.matches)for(let e=0;e<t.length;e++){const i=t[e];i.index=this.indexInParent(i.parent,i.element),this.moveTo(i.place,i.element,i.destination)}else for(let e=0;e<t.length;e++){const i=t[e];i.element.classList.contains(this.daClassname)&&this.moveBack(i.parent,i.element,i.index)}},e.prototype.moveTo=function(e,t,i){t.classList.add(this.daClassname),"last"===e||e>=i.children.length?i.insertAdjacentElement("beforeend",t):"first"!==e?i.children[e].insertAdjacentElement("beforebegin",t):i.insertAdjacentElement("afterbegin",t)},e.prototype.moveBack=function(e,t,i){t.classList.remove(this.daClassname),void 0!==e.children[i]?e.children[i].insertAdjacentElement("beforebegin",t):e.insertAdjacentElement("beforeend",t)},e.prototype.indexInParent=function(e,t){const i=Array.prototype.slice.call(e.children);return Array.prototype.indexOf.call(i,t)},e.prototype.arraySort=function(e){"min"===this.type?Array.prototype.sort.call(e,(function(e,t){return e.breakpoint===t.breakpoint?e.place===t.place?0:"first"===e.place||"last"===t.place?-1:"last"===e.place||"first"===t.place?1:e.place-t.place:e.breakpoint-t.breakpoint})):Array.prototype.sort.call(e,(function(e,t){return e.breakpoint===t.breakpoint?e.place===t.place?0:"first"===e.place||"last"===t.place?1:"last"===e.place||"first"===t.place?-1:t.place-e.place:t.breakpoint-e.breakpoint}))};new e("max").init(),$.each($(".checkbox"),(function(e,t){1==$(this).find("input").prop("checked")&&$(this).addClass("active")})),$(document).on("click",".checkbox",(function(e){return $(this).hasClass("active")?$(this).find("input").prop("checked",!1):$(this).find("input").prop("checked",!0),$(this).toggleClass("active"),!1})),$.each($(".radiobuttons__item"),(function(e,t){1==$(this).find("input").prop("checked")&&$(this).addClass("active")})),$(document).on("click",".radiobuttons__item",(function(e){return $(this).parents(".radiobuttons").find(".radiobuttons__item").removeClass("active"),$(this).parents(".radiobuttons").find(".radiobuttons__item input").prop("checked",!1),$(this).toggleClass("active"),$(this).find("input").prop("checked",!0),!1}))}));