const themeToggle = document.getElementById('themeToggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

const currentTheme = localStorage.getItem('theme') || 
                   (prefersDarkScheme.matches ? 'dark' : 'light');

function updateTheme(isDark) {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    themeToggle.checked = isDark;
}

updateTheme(currentTheme === 'dark');

themeToggle.addEventListener('change', () => {
    updateTheme(themeToggle.checked);
    localStorage.setItem('theme', themeToggle.checked ? 'dark' : 'light');
});

prefersDarkScheme.addEventListener('change', (e) => {
    const shouldBeDark = e.matches;

    if (!localStorage.getItem('theme')) {
        updateTheme(shouldBeDark);
    }
});
