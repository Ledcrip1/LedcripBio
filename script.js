// Основные переменные
const bioText = "Я профессиональный full-stack разработчик с более чем 3-летним опытом работы. Специализируюсь на создании современных веб-приложений с использованием Python, JavaScript и связанных технологий. Моя страсть - создавать чистый, эффективный и масштабируемый код, который решает реальные проблемы.";
const aboutMeText = "Я начал свой путь в программировании в 2020 году и с тех пор непрерывно развиваю свои навыки. За это время я успел поработать над десятками проектов различной сложности - от простых лендингов до сложных веб-приложений с использованием современных фреймворков. Я постоянно учусь новым технологиям и слежу за трендами в разработке. В свободное время люблю участвовать в open-source проектах и решать задачи на CodeWars.";
const projectsData = {
    web: [
        "Разработка интернет-магазина на Django (полный цикл от проектирования до deployment)",
        "Создание корпоративного сайта с CMS на WordPress (настройка сервера, разработка темы)",
        "Веб-приложение для управления задачами с React и Node.js (JWT аутентификация, REST API)",
        "Портал для онлайн-курсов с системой оплаты и видео-хостингом"
    ],
    mobile: [
        "Мобильное приложение для трекинга привычек (React Native, Firebase)",
        "Кроссплатформенное приложение для доставки еды",
        "Приложение для изучения иностранных языков с игровыми элементами"
    ],
    games: [
        "2D платформер на Python с PyGame",
        "Текстовая RPG игра с инвентарём и системой квестов",
        "Мультиплеерная игра на Socket.io и Node.js"
    ],
    ai: [
        "Чат-бот с NLP для техподдержки (Python, NLTK)",
        "Система рекомендаций на основе машинного обучения",
        "Анализ тональности отзывов с использованием нейросетей"
    ]
};

// Инициализация
document.addEventListener('DOMContentLoaded', function() {
    // Анимация печати текста
    typeBio();
    
    // Инициализация частиц
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: "#6366f1" },
                shape: { type: "circle" },
                opacity: { value: 0.5, random: true },
                size: { value: 3, random: true },
                line_linked: { enable: true, distance: 150, color: "#6366f1", opacity: 0.4, width: 1 },
                move: { enable: true, speed: 2, direction: "none", random: true, straight: false, out_mode: "out" }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: { enable: true, mode: "repulse" },
                    onclick: { enable: true, mode: "push" }
                }
            }
        });
    }
    
    // Анимация прогресс-баров
    setTimeout(animateProgressBars, 2000);
    
    // Инициализация темы
    initTheme();
    
    // Кнопка "Наверх"
    initBackToTop();
    
    // Обработчики событий
    setupEventListeners();
});

// Функция печати текста
function typeBio() {
    const bioElement = document.getElementById('bio');
    let index = 0;
    
    function type() {
        if (index < bioText.length) {
            bioElement.innerHTML += bioText.charAt(index);
            index++;
            setTimeout(type, Math.random() * 10 + 20);
        }
    }
    
    setTimeout(type, 1000);
}

// Анимация прогресс-баров
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress');
    progressBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 100);
    });
}

// Инициализация темы
function initTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Проверяем сохранённую тему или системные настройки
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    } else if (prefersDark) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    
    // Обработчик переключателя темы
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
}

// Кнопка "Наверх"
function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Обработчики событий
function setupEventListeners() {
    // Кнопка "Обо мне"
    document.getElementById('aboutMeButton').addEventListener('click', () => {
        const aboutMeElement = document.getElementById('aboutMeText');
        aboutMeElement.innerHTML = '';
        let charIndex = 0;
        
        document.getElementById('overlay').style.display = 'flex';
        
        function typeAboutMe() {
            if (charIndex < aboutMeText.length) {
                aboutMeElement.innerHTML += aboutMeText.charAt(charIndex);
                charIndex++;
                setTimeout(typeAboutMe, Math.random() * 10 + 20);
            }
        }
        
        typeAboutMe();
    });
    
    // Закрытие попапа
    document.getElementById('closePopup').addEventListener('click', () => {
        document.getElementById('overlay').style.display = 'none';
    });
    
    // Кнопка "Проекты"
    document.getElementById('projectsButton').addEventListener('click', () => {
        const projectElements = [
            document.querySelector('#project1 .project-description'),
            document.querySelector('#project2 .project-description'),
            document.querySelector('#project3 .project-description'),
            document.querySelector('#project4 .project-description')
        ];
        
        projectElements.forEach(el => el.innerHTML = '');
        
        // Анимация печати для каждого проекта
        projectsData.web[0].split('').forEach((char, i) => {
            setTimeout(() => {
                projectElements[0].innerHTML += char;
            }, i * 30);
        });
        
        projectsData.mobile[0].split('').forEach((char, i) => {
            setTimeout(() => {
                projectElements[1].innerHTML += char;
            }, i * 30 + 500);
        });
        
        projectsData.games[0].split('').forEach((char, i) => {
            setTimeout(() => {
                projectElements[2].innerHTML += char;
            }, i * 30 + 1000);
        });
        
        projectsData.ai[0].split('').forEach((char, i) => {
            setTimeout(() => {
                projectElements[3].innerHTML += char;
            }, i * 30 + 1500);
        });
        
        // Плавная прокрутка к проектам
        document.querySelector('.projects-container').scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    });
    
    // Кнопка "Контакты"
    document.getElementById('contactButton').addEventListener('click', () => {
        const contactPopup = document.createElement('div');
        contactPopup.className = 'overlay';
        contactPopup.innerHTML = `
            <div class="popup">
                <h2>Контакты</h2>
                <div class="contact-methods">
                    <div class="contact-method">
                        <i class="fas fa-envelope"></i>
                        <span>example@email.com</span>
                    </div>
                    <div class="contact-method">
                        <i class="fas fa-phone"></i>
                        <span>+7 (XXX) XXX-XX-XX</span>
                    </div>
                    <div class="contact-method">
                        <i class="fab fa-telegram"></i>
                        <span>@loderps</span>
                    </div>
                </div>
                <button class="button button--primary" id="closeContactPopup">Закрыть</button>
            </div>
        `;
        document.body.appendChild(contactPopup);
        
        contactPopup.querySelector('#closeContactPopup').addEventListener('click', () => {
            document.body.removeChild(contactPopup);
        });
        
        contactPopup.style.display = 'flex';
    });
    
    // Кнопка "Сертификаты"
    document.getElementById('certificatesButton').addEventListener('click', () => {
        document.getElementById('certificatesOverlay').style.display = 'flex';
    });
    
    // Закрытие попапа сертификатов
    document.getElementById('closeCertificatesPopup').addEventListener('click', () => {
        document.getElementById('certificatesOverlay').style.display = 'none';
    });
    
    // Языки программирования
    const languageButtons = document.querySelectorAll('.language-button');
    languageButtons.forEach(button => {
        button.addEventListener('click', () => {
            const lang = button.getAttribute('data-lang');
            let langInfo = '';
            let langExamples = '';
            
            switch(lang) {
                case 'Python':
                    langInfo = 'Python - это высокоуровневый язык программирования общего назначения, который подчеркивает читаемость кода. Широко используется в веб-разработке, data science, машинном обучении и автоматизации.';
                    langExamples = 'Примеры использования: Django, Flask, Pandas, NumPy, TensorFlow, скрипты автоматизации.';
                    break;
                case 'C++':
                    langInfo = 'C++ - это мощный язык программирования, используемый в системном программировании, разработке игр и высокопроизводительных приложениях. Обеспечивает низкоуровневый контроль над системными ресурсами.';
                    langExamples = 'Примеры использования: игровые движки, операционные системы, высоконагруженные сервисы.';
                    break;
                case 'HTML':
                    langInfo = 'HTML (HyperText Markup Language) - это стандартный язык разметки для создания веб-страниц. Определяет структуру и содержание веб-контента.';
                    langExamples = 'Примеры использования: структура веб-страниц, семантическая разметка, веб-формы.';
                    break;
                case 'CSS':
                    langInfo = 'CSS (Cascading Style Sheets) - это язык стилей, используемый для описания внешнего вида документов, написанных на HTML. Позволяет создавать адаптивные и визуально привлекательные интерфейсы.';
                    langExamples = 'Примеры использования: адаптивный дизайн, анимации, препроцессоры (Sass, Less).';
                    break;
                case 'JavaScript':
                    langInfo = 'JavaScript - это язык программирования, который позволяет создавать интерактивные веб-страницы. Является основой фронтенд-разработки и с появлением Node.js широко используется и на бэкенде.';
                    langExamples = 'Примеры использования: интерактивные элементы, SPA (React, Angular, Vue), серверная разработка (Node.js).';
                    break;
                case 'React':
                    langInfo = 'React - это JavaScript-библиотека для создания пользовательских интерфейсов. Разработана Facebook и использует компонентный подход и виртуальный DOM для эффективного обновления интерфейса.';
                    langExamples = 'Примеры использования: одностраничные приложения, сложные интерфейсы, мобильные приложения (React Native).';
                    break;
                case 'Node.js':
                    langInfo = 'Node.js - это среда выполнения JavaScript на стороне сервера, построенная на движке V8. Позволяет использовать JavaScript для серверной разработки, обеспечивая высокую производительность.';
                    langExamples = 'Примеры использования: REST API, реальный времени (WebSockets), микросервисы.';
                    break;
                case 'Django':
                    langInfo = 'Django - это высокоуровневый Python веб-фреймворк, который поощряет быструю разработку и чистый, прагматичный дизайн. Следует принципу "батарейки включены".';
                    langExamples = 'Примеры использования: сложные веб-приложения, CMS, API серверы.';
                    break;
                case 'Git':
                    langInfo = 'Git - это распределённая система контроля версий, позволяющая отслеживать изменения в исходном коде и координировать работу нескольких разработчиков.';
                    langExamples = 'Примеры использования: контроль версий, ветвление, совместная разработка (GitHub, GitLab, Bitbucket).';
                    break;
            }
            
            const langPopup = document.createElement('div');
            langPopup.className = 'overlay';
            langPopup.innerHTML = `
                <div class="popup">
                    <h2>${lang}</h2>
                    <p>${langInfo}</p>
                    <p><strong>${langExamples}</strong></p>
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
    
    // Форма обратной связи
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // Здесь должна быть логика отправки формы
            console.log('Форма отправлена:', { name, email, message });
            
            // Показываем уведомление
            const notification = document.createElement('div');
            notification.className = 'notification';
            notification.innerHTML = `
                <div class="notification-content">
                    <i class="fas fa-check-circle"></i>
                    <span>Сообщение отправлено! Я свяжусь с вами в ближайшее время.</span>
                </div>
            `;
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.classList.add('show');
            }, 100);
            
            setTimeout(() => {
                notification.classList.remove('show');
                setTimeout(() => {
                    document.body.removeChild(notification);
                }, 300);
            }, 3000);
            
            // Очищаем форму
            this.reset();
        });
    }
}

// Дополнительные функции
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function debounce(func, wait = 100) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func.apply(this, args);
        }, wait);
    };
}