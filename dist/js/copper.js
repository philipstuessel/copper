// copper.js
function toggleMode() {
  const currentTheme = document.documentElement.getAttribute('data-cu-theme');
  let newTheme;
  if (currentTheme === 'light') {
      newTheme = 'dark';
  } else {
      newTheme = 'light';
  }
  setThemePreference(newTheme);
}

function setThemePreference(theme) {
  document.documentElement.setAttribute('data-cu-theme', theme);
  localStorage.setItem('theme', theme);
}

function setIconBasedOnTheme() {
  const currentTheme = document.documentElement.getAttribute('data-cu-theme');
  if (currentTheme === 'dark') {} else {}
}

const currentTheme = localStorage.getItem('theme');
if (!currentTheme) {
  setThemePreference('dark');
}
setThemePreference(currentTheme || 'light');
setIconBasedOnTheme();

function p(value) {
  console.log(value);
}

function display(value) {
  var display = `<div class="display" role="alert"><div>${value}</div></div>`;
  document.body.insertAdjacentHTML("beforeend", display);
}

function clipboard(text) {
  var dummy = document.createElement("textarea");
  dummy.value = text;
  document.body.appendChild(dummy);
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);
}

function cu_import(scriptPath, attribute = "") {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = scriptPath;
    if (attribute) {
      script.setAttribute(attribute, "");
    }
    script.onload = resolve;
    script.onerror = reject; 
    document.head.appendChild(script);
  });
}

function docAppend(value) {
  return document.querySelector(value);
}

function setTitle(new_title) {
  document.title = new_title
}

function setIcon(new_icon) {
  var linkElement = document.querySelector('link[rel="shortcut icon"]');
  linkElement.href = new_icon;
}
