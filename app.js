document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");
  const burger = document.querySelector(".header__burger");
  const nav = document.querySelector(".header_nav");
  const navLinks = document.querySelectorAll(".nav_link");
  const revealElements = document.querySelectorAll(".reveal");
  const heroVideo = document.querySelector(".hero__media");
  const productImages = document.querySelectorAll(".product-card__image");
  const whyCards = document.querySelectorAll(".why__card");
  const slides = document.querySelectorAll(".slide-image");

  if (burger && nav) {
    burger.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");

      burger.classList.toggle("is-open", isOpen);
      burger.setAttribute("aria-expanded", isOpen);
    });
  }

  const closeMobileMenu = () => {
    nav?.classList.remove("is-open");
    burger?.classList.remove("is-open");
    burger?.setAttribute("aria-expanded", "false");
  };

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      closeMobileMenu();

      const href = link.getAttribute("href");

      if (!href || !href.startsWith("#")) return;

      const target = document.querySelector(href);

      if (!target) return;

      event.preventDefault();

      const headerHeight = header ? header.offsetHeight : 0;

      const targetPosition =
        target.getBoundingClientRect().top +
        window.scrollY -
        headerHeight -
        20;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });
    });
  });

  const sections = document.querySelectorAll("section[id]");

  const updateActiveNavigation = () => {
    const scrollPosition = window.scrollY + 150;
    let currentSection = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        currentSection = section.id;
      }
    });

    navLinks.forEach((link) => {
      link.classList.toggle(
        "is-active",
        link.getAttribute("href") === `#${currentSection}`
      );
    });
  };

  const handleHeaderScroll = () => {
    if (!header) return;

    header.classList.toggle(
      "is-scrolled",
      window.scrollY > 50
    );
  };

  window.addEventListener("scroll", updateActiveNavigation);
  window.addEventListener("scroll", handleHeaderScroll);

  updateActiveNavigation();
  handleHeaderScroll();

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    revealElements.forEach((element) => {
      revealObserver.observe(element);
    });
  } else {
    revealElements.forEach((element) => {
      element.classList.add("is-visible");
    });
  }

  if (heroVideo) {
    heroVideo.addEventListener("loadeddata", () => {
      heroVideo.classList.add("is-loaded");
    });

    heroVideo.addEventListener("error", () => {
      console.warn("Hero video could not be loaded.");
    });

    heroVideo.play().catch(() => {});
  }

  document.addEventListener("click", (event) => {
    if (!nav || !burger) return;

    if (
      !nav.contains(event.target) &&
      !burger.contains(event.target) &&
      nav.classList.contains("is-open")
    ) {
      closeMobileMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMobileMenu();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) {
      closeMobileMenu();
    }

    updateActiveNavigation();
  });

  productImages.forEach((image) => {
    image.addEventListener("mouseenter", () => {
      image.classList.add("is-hovered");
    });

    image.addEventListener("mouseleave", () => {
      image.classList.remove("is-hovered");
    });
  });

  if ("IntersectionObserver" in window) {
    const cardObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15
      }
    );

    whyCards.forEach((card) => {
      cardObserver.observe(card);
    });
  } else {
    whyCards.forEach((card) => {
      card.classList.add("is-visible");
    });
  }

  if (slides.length > 1) {
    let currentSlide = 0;

    slides[currentSlide].classList.add("active");

    setInterval(() => {
      slides[currentSlide].classList.remove("active");

      currentSlide = (currentSlide + 1) % slides.length;

      slides[currentSlide].classList.add("active");
    }, 4000);
  }

  console.log("Teknic Euchner website initialized successfully.");
});