function initializeMobileMenu() {
    const menuButton = document.querySelector("#menu-button");
    const navMenu = document.querySelector("#nav-menu");
    const menuIcon = document.querySelector("#menu-icon");
    const menuLabel = document.querySelector("#menu-label");

    function setMenuState(isOpen) {
        navMenu.classList.toggle("hidden", !isOpen);
        navMenu.classList.toggle("flex", isOpen);
        menuButton.setAttribute("aria-expanded", String(isOpen));
        menuIcon.textContent = isOpen ? "×" : "☰";
        menuLabel.textContent = isOpen ? "Cerrar menú" : "Abrir menú";
    }

    menuButton.addEventListener("click", () => {
        const isOpen = menuButton.getAttribute("aria-expanded") === "true";
        setMenuState(!isOpen);
    });

    navMenu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => setMenuState(false));
    });

    document.addEventListener("keydown", (event) => {
        const isOpen = menuButton.getAttribute("aria-expanded") === "true";

        if (event.key === "Escape" && isOpen) {
            setMenuState(false);
            menuButton.focus();
        }
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth >= 768) {
            setMenuState(false);
        }
    });
}

function initializeActiveNavigation() {
    const navigationLinks = [...document.querySelectorAll('#nav-menu a[href^="#"]')];
    const sections = navigationLinks
        .map((link) => document.querySelector(link.getAttribute("href")))
        .filter(Boolean);

    function setActiveLink(sectionId) {
        navigationLinks.forEach((link) => {
            const isActive = link.getAttribute("href") === `#${sectionId}`;
            link.classList.toggle("bg-violet-600", isActive);
            link.classList.toggle("text-white", isActive);

            if (isActive) {
                link.setAttribute("aria-current", "location");
            } else {
                link.removeAttribute("aria-current");
            }
        });
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setActiveLink(entry.target.id);
            }
        });
    }, {
        rootMargin: "-25% 0px -65% 0px",
        threshold: 0,
    });

    sections.forEach((section) => observer.observe(section));
}

function initializeBackToTop() {
    const backToTopButton = document.querySelector("#back-to-top");

    function updateButtonVisibility() {
        const shouldShow = window.scrollY > 500;
        backToTopButton.classList.toggle("hidden", !shouldShow);
        backToTopButton.classList.toggle("flex", shouldShow);
    }

    window.addEventListener("scroll", updateButtonVisibility, { passive: true });

    backToTopButton.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    updateButtonVisibility();
}

initializeMobileMenu();
initializeActiveNavigation();
initializeBackToTop();
