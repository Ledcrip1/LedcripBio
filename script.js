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

setTimeout(typeBio, 3500);

// ===== Анимация для "Обо мне" =====
document.getElementById('aboutMeButton').addEventListener('click', () => {
    const aboutMeText = "У меня 3 года опыта на HTML, CSS и Python. У меня много проектов";
    const aboutMeElement = document.getElementById('aboutMeText');
    const overlay = document.getElementById('overlay');
    const popup = overlay.querySelector('.popup');

    aboutMeElement.innerHTML = '';
    overlay.style.display = 'flex';
    
    // Анимация появления
    setTimeout(() => {
        overlay.style.opacity = '1';
        popup.style.transform = 'scale(1)';
    }, 10);

    let charIndex = 0;
    function typeAboutMe() {
        if (charIndex < aboutMeText.length) {
            aboutMeElement.innerHTML += aboutMeText.charAt(charIndex);
            charIndex++;
            setTimeout(typeAboutMe, 50);
        }
    }
    typeAboutMe();
});

document.getElementById('closePopup').addEventListener('click', () => {
    const overlay = document.getElementById('overlay');
    const popup = overlay.querySelector('.popup');

    // Анимация исчезновения
    overlay.style.opacity = '0';
    popup.style.transform = 'scale(0.9)';
    
    setTimeout(() => {
        overlay.style.display = 'none';
    }, 300);
});

// ===== Анимация для "Проекты" =====
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

// ===== Анимация для "Контакты" =====
document.getElementById('contactButton').addEventListener('click', () => {
    const contactPopup = document.createElement('div');
    contactPopup.className = 'overlay';
    contactPopup.style.opacity = '0';
    contactPopup.style.transition = 'opacity 0.3s ease';
    
    contactPopup.innerHTML = `
        <div class="popup" style="transform: scale(0.9); transition: transform 0.3s ease;">
            <h2>Связи</h2>
            <p>Вы можете связаться со мной через Telegram или GitHub</p>
            <button class="button button--primary" id="closeContactPopup">Закрыть</button>
        </div>
    `;
    document.body.appendChild(contactPopup);

    // Анимация появления
    setTimeout(() => {
        contactPopup.style.opacity = '1';
        contactPopup.querySelector('.popup').style.transform = 'scale(1)';
    }, 10);

    contactPopup.querySelector('#closeContactPopup').addEventListener('click', () => {
        // Анимация исчезновения
        contactPopup.style.opacity = '0';
        contactPopup.querySelector('.popup').style.transform = 'scale(0.9)';
        
        setTimeout(() => {
            document.body.removeChild(contactPopup);
        }, 300);
    });

    contactPopup.style.display = 'flex';
});

// ===== Анимация для языков программирования =====
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
        langPopup.style.opacity = '0';
        langPopup.style.transition = 'opacity 0.3s ease';
        
        langPopup.innerHTML = `
            <div class="popup" style="transform: scale(0.9); transition: transform 0.3s ease;">
                <h2>${lang}</h2>
                <p>${langInfo}</p>
                <button class="button button--primary" id="closeLangPopup">Закрыть</button>
            </div>
        `;
        document.body.appendChild(langPopup);

        // Анимация появления
        setTimeout(() => {
            langPopup.style.opacity = '1';
            langPopup.querySelector('.popup').style.transform = 'scale(1)';
        }, 10);

        langPopup.querySelector('#closeLangPopup').addEventListener('click', () => {
            // Анимация исчезновения
            langPopup.style.opacity = '0';
            langPopup.querySelector('.popup').style.transform = 'scale(0.9)';
            
            setTimeout(() => {
                document.body.removeChild(langPopup);
            }, 300);
        });

        langPopup.style.display = 'flex';
    });
});