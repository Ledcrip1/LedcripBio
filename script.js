const bioText = "Я кодер, 3 года опыта, люблю писать различные коды, и делать разные проекты.";
const bioElement = document.getElementById('bio');

let index = 0;

function typeBio() {
    if (index < bioText.length) {
        bioElement.innerHTML += bioText.charAt(index);
        index++;
        setTimeout(typeBio, 50);
    }
}

// Запускаем анимацию печати после завершения основной анимации
setTimeout(typeBio, 3500);

document.getElementById('aboutMeButton').addEventListener('click', () => {
    const aboutMeText = "У меня 3 года опыта на HTML, CSS и Python. У меня много проектов";
    const aboutMeElement = document.getElementById('aboutMeText');
    aboutMeElement.innerHTML = '';
    let charIndex = 0;

    function typeAboutMe() {
        if (charIndex < aboutMeText.length) {
            aboutMeElement.innerHTML += aboutMeText.charAt(charIndex);
            charIndex++;
            setTimeout(typeAboutMe, 50);
        }
    }

    document.getElementById('overlay').style.display = 'flex';
    typeAboutMe();
});

document.getElementById('closePopup').addEventListener('click', () => {
    document.getElementById('overlay').style.display = 'none';
});

document.getElementById('projectsButton').addEventListener('click', () => {
    const projects = [
        "Первые самые базовые проекты - 2022г.",
        "Начало углублённого изучения языка Python - 2023г.",
        "Создание соц сети (базовой) - 2024г.",
        "Полное знание языков, сильные проекты - 2025г."
    ];

    const projectElements = [
        document.getElementById('project1'),
        document.getElementById('project2'),
        document.getElementById('project3'),
        document.getElementById('project4')
    ];

    projectElements.forEach(el => el.innerHTML = '');

    projects.forEach((project, i) => {
        let charIndex = 0;
        function typeProject() {
            if (charIndex < project.length) {
                projectElements[i].innerHTML += project.charAt(charIndex);
                charIndex++;
                setTimeout(typeProject, 50);
            }
        }
        typeProject();
    });

    document.querySelector('.projects-container').scrollIntoView({ 
        behavior: 'smooth' 
    });
});

document.getElementById('contactButton').addEventListener('click', () => {
    const contactPopup = document.createElement('div');
    contactPopup.className = 'overlay';
    contactPopup.innerHTML = `
        <div class="popup">
            <h2>Связи</h2>
            <p>Вы можете связаться со мной через Telegram или GitHub</p>
            <button class="button button--primary" id="closeContactPopup">Закрыть</button>
        </div>
    `;
    document.body.appendChild(contactPopup);

    contactPopup.querySelector('#closeContactPopup').addEventListener('click', () => {
        document.body.removeChild(contactPopup);
    });

    contactPopup.style.display = 'flex';
});

const languageButtons = document.querySelectorAll('.language-button');
languageButtons.forEach(button => {
    button.addEventListener('click', () => {
        const lang = button.getAttribute('data-lang');
        let langInfo = '';

        switch(lang) {
            case 'Python':
                langInfo = 'Python - это высокоуровневый язык программирования, известный своей простотой и читаемостью. Рекомендуется начинать с официальной документации и онлайн-курсов.';
                break;
            case 'C++':
                langInfo = 'C++ - это мощный язык, используемый в системном программировании и разработке игр. Рекомендуется изучать через книги и практические проекты.';
                break;
            case 'HTML':
                langInfo = 'HTML - это язык разметки для создания веб-страниц. Начать можно с изучения основ в онлайн-курсах и туториалах.';
                break;
            case 'CSS':
                langInfo = 'CSS - это язык стилей, который делает веб-страницы красивыми и адаптивными. Важно изучать современные технологии, такие как Flexbox и Grid.';
                break;
            case 'JavaScript':
                langInfo = 'JavaScript - это язык программирования для создания интерактивных веб-страниц. Рекомендуется изучать через практику и проекты.';
                break;
        }

        const langPopup = document.createElement('div');
        langPopup.className = 'overlay';
        langPopup.innerHTML = `
            <div class="popup">
                <h2>${lang}</h2>
                <p>${langInfo}</p>
                <button class="button button--primary" id="closeLangPopup">Закрыть</button>
            </div>
        `;
        document.body.appendChild(langPopup);

        langPopup.querySelector('#closeLangPopup').addEventListener('click', () => {
            document.body.removeChild(langPopup);
        });

        langPopup.style.display = 'flex';
    });
});