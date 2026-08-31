(function initializeTheme() {
    let savedTheme = null;

    try {
        savedTheme = localStorage.getItem("theme");
    } catch {
        // Se usa la preferencia del sistema si localStorage no está disponible.
    }

    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const useDarkTheme = savedTheme === "dark" || (savedTheme === null && prefersDark);
    const themeColor = document.querySelector('meta[name="theme-color"]');

    document.documentElement.classList.toggle("dark", useDarkTheme);
    document.documentElement.style.colorScheme = useDarkTheme ? "dark" : "light";

    if (themeColor) {
        themeColor.setAttribute("content", useDarkTheme ? "#020617" : "#f1f5f9");
    }
})();
