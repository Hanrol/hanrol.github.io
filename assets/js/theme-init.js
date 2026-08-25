(function initializeTheme() {
    let savedTheme = null;

    try {
        savedTheme = localStorage.getItem("theme");
    } catch {
        // Se usa la preferencia del sistema si localStorage no está disponible.
    }

    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const useDarkTheme = savedTheme === "dark" || (savedTheme === null && prefersDark);

    document.documentElement.classList.toggle("dark", useDarkTheme);
    document.documentElement.style.colorScheme = useDarkTheme ? "dark" : "light";
})();
