/***************************************************
==================== JS INDEX ======================
****************************************************
Preloader js
Data js
Sticky Nav Js
Mobile Menu Js
Search Bar Js
Rating Js
Client-slider Js
Marquee slider Js
Project Slider Js
Project Slider 2 Js
Testimonial Slider Js
Testimonial Slider 2 Js
Testimonial Slider 3 Js
Hero slider Js
Service Slider Js
Blog Slider Js
Accordion Js
Project Hover active
Backtotop Js
Odometer js
VenoBox Js
Progressbar js

****************************************************/
(function ($) {
     ////////////////////////////////////////////////////
	// Preloader js
	// $(window).on("load", function () {
	// 	const ihPreloader = $(".ih-preloader");
	// 	if (ihPreloader?.length) {
	// 		setTimeout(function () {
	// 			ihPreloader.removeClass("is-loading").addClass("is-loaded");
	// 			setTimeout(function () {
	// 				ihPreloader.fadeOut(400);
	// 				wowController();
	// 				gsapController();
	// 			}, 700);
	// 		}, 2000);
	// 	} else {
	// 		wowController();
	// 		gsapController();
	// 	}
	// });

	////////////////////////////////////////////////////
	// Data js
	$("[data-bg-image]").each(function () {
		var $this = $(this),
			$image = $this.data("bg-image");
		$this.css("background-image", "url(" + $image + ")");
	});

	////////////////////////////////////////////////////
	// Odometer js
	if (jQuery(".odometer").length > 0) {
		var om = jQuery(".odometer");
		om.each(function () {
			jQuery(this).appear(function () {
				var numCount = jQuery(this).attr("data-count");
				jQuery(this).html(numCount);
			});
		});
	}

	////////////////////////////////////////////////////
	// wow js
	function wowController() {
		if ($(".wow").length > 0) {
			new WOW().init();
		}
	}

	////////////////////////////////////////////////////
	// VenoBox Js
	if ($(".gallery").length > 0) {
		new VenoBox({
			selector: ".gallery",
			numeration: true,
			// infinigall: true,
			spinner: "pulse",
		});
	}

	if ($(".video-popup").length > 0) {
		new VenoBox({
			selector: ".video-popup",
			numeration: true,
			// infinigall: true,
			spinner: "pulse",
		});
	}

	////////////////////////////////////////////////////
	// Backtotop Js
	function back_to_top() {
		var btn = $("#back_to_top");
		var btn_wrapper = $(".back-to-top-wrapper");

		$(window).on("scroll", function () {
			if ($(window).scrollTop() > 300) {
				btn_wrapper.addClass("back-to-top-btn-show");
			} else {
				btn_wrapper.removeClass("back-to-top-btn-show");
			}
		});

		btn.on("click", function (e) {
			e.preventDefault();
			$("html, body").animate({ scrollTop: 0 }, "300");
		});
	}
	back_to_top();

	////////////////////////////////////////////////////
	// Project Hover active change
	if ($(".team-wrapper").length) {
		$(".team-item").on("mouseover", function () {
			// Remove active class from all siblings
			$(this).siblings(".team-item").removeClass("active");

			// Add active class to hovered item
			$(this).addClass("active");

			// Update image dynamically
			const newSrc = $(this).data("src");
			const $image = $("#team-img img");

			// Animate zoom out, change image, then zoom back in
			$image
				.fadeOut(300)
				.css("transform", "scale(1.1)")
				.promise()
				.done(function () {
					$image.attr("src", newSrc).fadeIn(300).css("transform", "scale(1)");
				});
		});
	}

	////////////////////////////////////////////////////
	// Hero slider Js
	if ($(".hero-thumb").length > 0) {
		var swiper = new Swiper(".hero-thumb", {
			loop: false,
			spaceBetween: 15,
			slidesPerView: 3,
			freeMode: true,
			watchSlidesProgress: true,
		});
	}
	if ($(".hero-slider").length > 0) {
		var hero = new Swiper(".hero-slider", {
			slidesPerView: 1,
			spaceBetween: 0,
			effect: "fade",
			loop: true,
			speed: 1400,
			autoplay: {
				delay: 5000,
			},
			navigation: {
				nextEl: ".slider-next",
				prevEl: ".slider-prev",
			},
			thumbs: {
				swiper: swiper,
			},
		});
	}
	if ($(".h6-hero-card-slider").length > 0) {
		var heroCard = new Swiper(".h6-hero-card-slider", {
			slidesPerView: 1,
			spaceBetween: 15,

			loop: true,
			speed: 1400,
			autoplay: {
				delay: 5000,
			},
			pagination: {
				el: ".swiper-pagination-area",
				clickable: true,
			},
		});
	}

    ////////////////////////////////////////////////////
	// Text Gsap Heading-1 Animation Highlight
	if ($(".title-highlight").length) {
		const highlightText = new SplitText(".title-highlight", {
			type: "lines",
			linesClass: "line",
		});

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: ".title-highlight",
				scrub: 1,
				start: "top 80%",
				end: "bottom center",
			},
		});
		tl.to(".line", {
			"--highlight-offset": "100%",
			stagger: 0.4,
		});
	}
	
	////////////////////////////////////////////////////
	/* Text Gsap Heading-2 Animation Highlight */
	if ($(".text-anim").length) {
		let staggerAmount = 0.02,
			translateXValue = 20,
			delayValue = 0.1,
			easeType = "power2.out",
			animatedTextElements = document.querySelectorAll(".text-anim");

		animatedTextElements.forEach(element => {
			let animationSplitText = new SplitText(element, {
				type: "chars, words",
			});
			gsap.from(animationSplitText.chars, {
				duration: 1,
				delay: delayValue,
				x: translateXValue,
				autoAlpha: 0,
				stagger: staggerAmount,
				ease: easeType,
				scrollTrigger: { trigger: element, start: "top 85%" },
			});
		});
	}

	////////////////////////////////////////////////////
	/* Text Gsap Heading-3 Animation Highlight */
	if ($(".title-anim").length) {
		let staggerAmount = 0.01,
			delayValue = 0.1,
			easeType = "power1.inout",
			animatedTitleElements = document.querySelectorAll(".title-anim");

		animatedTitleElements.forEach(element => {
			let animatedTitleElements = new SplitText(element, {
				types: "lines, words",
			});
			gsap.from(animatedTitleElements.chars, {
				y: "100%",
				duration: 0.5,
				delay: delayValue,
				autoAlpha: 0,
				stagger: staggerAmount,
				ease: easeType,
				scrollTrigger: { trigger: element, start: "top 85%" },
			});
		});
	}

	////////////////////////////////////////////////////
	/* Image Reveal Animation */
	if ($('.reveal').length) {
        gsap.registerPlugin(ScrollTrigger);
        let revealContainers = document.querySelectorAll(".reveal");
        revealContainers.forEach((container) => {
            let image = container.querySelector("img");
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container,
                    toggleActions: "play none none none"
                }
            });
            tl.set(container, {
                autoAlpha: 1
            });
            tl.from(container, 1, {
                xPercent: -100,
                ease: Power2.out
            });
            tl.from(image, 1, {
                xPercent: 100,
                scale: 1,
                delay: -1,
                ease: Power2.out
            });
        });
    }

	////////////////////////////////////////////////////
	/* ------------- Positon Sticky Js -------------*/
	let mediaMatch = gsap.matchMedia();
	/* Service js */
	const serviceStack = gsap.utils.toArray(".service-stack");
	if (serviceStack.length > 0) {
		mediaMatch.add("(min-width: 768px)", () => {
			serviceStack.forEach(item => {
				gsap.to(item, {
					opacity: 0,
					scale: 0.9,
					y: 50,
					scrollTrigger: {
						trigger: item,
						scrub: true,
						start: "top top",
						pin: true,
						pinSpacing: false,
						markers: false,
					},
				});
			});
		});
	}

    ////////////////////////////////////////////////////
	// Project Scroll Slider Animation
	if ($(".project-scroll-slider-item").length > 0) {
		mediaMatch.add("(min-width: 768px)", () => {
			const slider = document.querySelector(".project-section");
			if (slider?.children?.length) {
				let panels = gsap.utils.toArray(".project-scroll-slider-item");
				gsap.to(panels, {
					xPercent: -100 * (panels.length - 1),
					ease: "none",
					scrollTrigger: {
						trigger: slider,
						start: "top+=50 top",
						pin: true,
						scrub: 1,
						markers: false,
						end: () => "+=" + slider.offsetWidth,
					},
				});

				// Optional: refresh after setup
				setTimeout(() => ScrollTrigger.refresh(), 500);
			}
		});
	}

    ////////////////////////////////////////////////////
	// Sticky Pannel Animation
	if ($(".ih-sticky-panel").length > 0) {
		mediaMatch.add("(min-width: 1200px)", () => {
			let tl = gsap.timeline();
			let panels = document.querySelectorAll(".ih-sticky-panel"); // likely the selector being obfuscated
			panels.forEach((panel, i) => {
				tl.to(panel, {
					scrollTrigger: {
						trigger: panel,
						pin: panel,
						scrub: 1,
						start: "top-=50 top",
						end: "bottom top",
						endTrigger: ".ih-sticky-panel-container",
						pinSpacing: false,
						markers: false,
					},
				});
			});
		});
	}

	////////////////////////////////////////////////////
	// Skew on Scroll Animation
	if ($(".skew-on-scroll").length > 0) {
		mediaMatch.add("(min-width: 992px)", () => {
			let zoomElements = document.querySelectorAll(".skew-on-scroll");
			// Set initial scale
			gsap.set(zoomElements, {
				scale: 0.80,
				rotateX: "5deg",
				transformOrigin: "top center",
			});
			// Animate to scale 1 on scroll
			gsap.to(zoomElements, {
				rotateX: "0deg",
				scale: 1,
				ease: "none",
				scrollTrigger: {
					trigger: ".img-banner-section",
					start: "top top",
					end: "+=30%",
					scrub: true,
				},
			});
		});
	}

	////////////////////////////////////////////////////
	// Client-slider Js
	if ($(".client-slider").length > 0) {
		var client = new Swiper(".client-slider", {
			slidesPerView: "auto",
			spaceBetween: 0,
			freemode: true,
			centeredSlides: true,
			loop: true,
			speed: 5000,
			allowTouchMove: false,
			autoplay: {
				delay: 1,
				disableOnInteraction: true,
			},
		});
	}

	////////////////////////////////////////////////////
	// Marquee slider Js
	if ($(".marquee-container").length > 0) {
		var marquee = new Swiper(".marquee-container", {
			slidesPerView: "auto",
			spaceBetween: 0,
			freemode: true,
			centeredSlides: true,
			loop: true,
			speed: 5000,
			allowTouchMove: false,
			autoplay: {
				delay: 1,
				disableOnInteraction: true,
			},
		});
	}


	////////////////////////////////////////////////////
	// Marquee-2 slider Js
	if ($(".marquee2-container").length > 0) {
		var marquee2 = new Swiper(".marquee2-container", {
			slidesPerView: "auto",
			spaceBetween: 0,
			freemode: true,
			centeredSlides: true,
			loop: true,
			speed: 5000,
			allowTouchMove: false,
			autoplay: {
				delay: 1,
				disableOnInteraction: true,
				reverseDirection: true, // Right Side Slide Code
			},
		});
	}

	////////////////////////////////////////////////////
	// Marquee-2 slider Js
	if ($(".marquee2-container1").length > 0) {
		var marquee2 = new Swiper(".marquee2-container1", {
			slidesPerView: "auto",
			spaceBetween: 0,
			freemode: true,
			centeredSlides: true,
			loop: true,
			speed: 5000,
			allowTouchMove: false,
			autoplay: {
				delay: 1,
				disableOnInteraction: true,
			},
		});
	}


})(jQuery);