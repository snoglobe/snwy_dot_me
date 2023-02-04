let darkMode = false;

if("dark_mode" in localStorage)
    darkMode = (localStorage.dark_mode === "true");
else
    localStorage.setItem("dark_mode", "false");

const r = document.querySelector(':root');

function toggleMode() {
    darkMode = !darkMode;
    localStorage.setItem("dark_mode", darkMode.toString());
    update();
}

function update() {
    if(darkMode) {
        r.style.setProperty("--background_color", "#2b292b");
        r.style.setProperty("--foreground_color", "#ffe3f0");
        r.style.setProperty("--svg_filter", "invert(88%) sepia(35%) saturate(329%) hue-rotate(291deg) brightness(103%) contrast(103%)");
    } else {
        r.style.setProperty("--background_color", "#f0e6ed");
        r.style.setProperty("--foreground_color", "#523248");
        r.style.setProperty("--svg_filter", "invert(23%) sepia(8%) saturate(2301%) hue-rotate(266deg) brightness(90%) contrast(93%)");
    }
}

function go(url) {
    window.location = url;
}