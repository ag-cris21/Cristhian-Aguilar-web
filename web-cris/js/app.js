let translations = {};
let currentLanguage = "es";


// Cargar JSON
async function loadTranslations() {

    const response = await fetch("./data/translations.json");

    translations = await response.json();

    changeLanguage(currentLanguage);
}


// Buscar un texto dentro del JSON
function getText(data, path) {

    const parts = path.split(".");

    let value = data;

    for (let part of parts) {
        value = value[part];
    }

    return value;
}


// Cambiar idioma
function changeLanguage(language) {

    currentLanguage = language;

    const data = translations[language];


    // Textos normales
    const texts = document.querySelectorAll("[data-i18n]");

    for (let element of texts) {

        const key = element.dataset.i18n;

        element.textContent = getText(data, key);
    }


    // Párrafos
    const paragraphs = document.querySelectorAll("[data-i18n-array]");

    for (let element of paragraphs) {

        const key = element.dataset.i18nArray;

        const items = getText(data, key);

        element.innerHTML = "";

        for (let item of items) {

            const p = document.createElement("p");

            p.textContent = item;

            element.appendChild(p);
        }
    }


    // Listas
    const lists = document.querySelectorAll("[data-i18n-list]");

    for (let element of lists) {

        const key = element.dataset.i18nList;

        const items = getText(data, key);

        element.innerHTML = "";

        for (let item of items) {

            const li = document.createElement("li");

            li.textContent = item;

            element.appendChild(li);
        }
    }


    // Proyectos
    showProjects(data.projects);


    // Cambiar idioma del HTML
    document.documentElement.lang = language;
}


// Mostrar proyectos
function showProjects(projects) {

    const container = document.getElementById("projects-container");

    container.innerHTML = "";


    for (let name in projects) {

        const project = projects[name];


        const article = document.createElement("article");


        // Título
        const title = document.createElement("h3");

        title.textContent = project.title;

        article.appendChild(title);


        // Descripción
        if (project.description) {

            const p = document.createElement("p");

            p.textContent = project.description;

            article.appendChild(p);
        }


        // Varios párrafos
        if (project.paragraphs) {

            for (let text of project.paragraphs) {

                const p = document.createElement("p");

                p.textContent = text;

                article.appendChild(p);
            }
        }


        container.appendChild(article);
    }
}


// Selector de idioma
const languageSelector = document.getElementById("language");

languageSelector.addEventListener("change", function () {

    changeLanguage(this.value);

});


// Iniciar
loadTranslations();