/* ============================================================
   TEKNIC EUCHNER — JAVASCRIPT
   Purpose:
   - Mobile navigation
   - Active navigation
   - Scroll reveal
   - Header scroll behavior
   - Hero video handling
   - Smooth navigation
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  /* ============================================================
     ELEMENTS
     ============================================================ */

  const header = document.querySelector(".header");
  const burger = document.querySelector(".header__burger");
  const nav = document.querySelector(".header_nav");
  const navLinks = document.querySelectorAll(".nav_link");

  const revealElements = document.querySelectorAll(".reveal");

  const heroVideo = document.querySelector(".hero__media");

  /* ============================================================
     MOBILE MENU
     ============================================================ */

  if (burger && nav) {
    burger.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");

      burger.classList.toggle("is-open", isOpen);

      burger.setAttribute("aria-expanded", isOpen);
    });
  }

  /* ============================================================
     CLOSE MOBILE MENU WHEN NAV LINK IS CLICKED
     ============================================================ */

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (nav) {
        nav.classList.remove("is-open");
      }

      if (burger) {
        burger.classList.remove("is-open");
        burger.setAttribute("aria-expanded", "false");
      }
    });
  });

  /* ============================================================
     ACTIVE NAVIGATION LINK
     ============================================================ */

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
        currentSection = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("is-active");

      const href = link.getAttribute("href");

      if (href === `#${currentSection}`) {
        link.classList.add("is-active");
      }
    });
  };

  window.addEventListener("scroll", updateActiveNavigation);

  updateActiveNavigation();

  /* ============================================================
     HEADER SCROLL EFFECT
     ============================================================ */

  const handleHeaderScroll = () => {
    if (!header) return;

    if (window.scrollY > 50) {
      header.classList.add("is-scrolled");
    } else {
      header.classList.remove("is-scrolled");
    }
  };

  window.addEventListener("scroll", handleHeaderScroll);

  handleHeaderScroll();

  /* ============================================================
     SCROLL REVEAL ANIMATION
     ============================================================ */

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
        rootMargin: "0px 0px -50px 0px",
      }
    );

    revealElements.forEach((element) => {
      revealObserver.observe(element);
    });
  } else {
    /* Fallback for older browsers */

    revealElements.forEach((element) => {
      element.classList.add("is-visible");
    });
  }

  /* ============================================================
     HERO VIDEO
     ============================================================ */

  if (heroVideo) {
    heroVideo.addEventListener("loadeddata", () => {
      heroVideo.classList.add("is-loaded");
    });

    heroVideo.addEventListener("error", () => {
      console.warn("Hero video could not be loaded.");
    });

    /*
      Try to play the video.

      Browsers generally allow autoplay because
      the video is muted in the HTML.
    */

    const playVideo = () => {
      const promise = heroVideo.play();

      if (promise !== undefined) {
        promise.catch(() => {
          console.warn("Hero video autoplay was blocked.");
        });
      }
    };

    playVideo();
  }

  /* ============================================================
     SMOOTH SCROLL
     ============================================================ */

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href");

      if (!href || !href.startsWith("#")) {
        return;
      }

      const target = document.querySelector(href);

      if (!target) {
        return;
      }

      event.preventDefault();

      const headerHeight = header
        ? header.offsetHeight
        : 0;

      const targetPosition =
        target.getBoundingClientRect().top +
        window.scrollY -
        headerHeight -
        20;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    });
  });

  /* ============================================================
     CLOSE MENU WHEN CLICKING OUTSIDE
     ============================================================ */

  document.addEventListener("click", (event) => {
    if (!nav || !burger) return;

    const clickedInsideNav = nav.contains(event.target);
    const clickedBurger = burger.contains(event.target);

    if (
      !clickedInsideNav &&
      !clickedBurger &&
      nav.classList.contains("is-open")
    ) {
      nav.classList.remove("is-open");

      burger.classList.remove("is-open");

      burger.setAttribute("aria-expanded", "false");
    }
  });

  /* ============================================================
     ESCAPE KEY — CLOSE MOBILE MENU
     ============================================================ */

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      if (nav) {
        nav.classList.remove("is-open");
      }

      if (burger) {
        burger.classList.remove("is-open");
        burger.setAttribute("aria-expanded", "false");
      }
    }
  });

  /* ============================================================
     RESIZE HANDLING
     ============================================================ */

  window.addEventListener("resize", () => {
    /*
      If the screen becomes desktop size,
      close the mobile menu.
    */

    if (window.innerWidth > 900) {
      if (nav) {
        nav.classList.remove("is-open");
      }

      if (burger) {
        burger.classList.remove("is-open");
        burger.setAttribute("aria-expanded", "false");
      }
    }

    updateActiveNavigation();
  });

  /* ============================================================
     PRODUCT IMAGE HOVER
     ============================================================ */

  const productImages = document.querySelectorAll(
    ".product-card__image"
  );

  productImages.forEach((image) => {
    image.addEventListener("mouseenter", () => {
      image.classList.add("is-hovered");
    });

    image.addEventListener("mouseleave", () => {
      image.classList.remove("is-hovered");
    });
  });

  /* ============================================================
     WHY CARDS
     ============================================================ */

  const whyCards = document.querySelectorAll(".why__card");

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
        threshold: 0.15,
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

  /* ============================================================
     CONSOLE MESSAGE
     ============================================================ */

  console.log(
    "Teknic Euchner website initialized successfully."
  );
});