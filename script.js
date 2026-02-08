const projectData = {
    robotics: {
        title: "Роботизация производства",
        pre: ["Тренд на импортозамещение", "Дефицит кадров", "Оптимизация затрат", "Субсидии до 50%"],
        effects: [
            {val: "+40%", lab: "Производительность"},
            {val: "-20%", lab: "Затраты"},
            {val: "14 мес", lab: "Окупаемость"}
        ],
        partners: ["НПП Радиосвязь", "УВЗ", "ОмскТрансМаш"],
        images: ["https://i.ibb.co/1GtNrqPj/image.png", "https://i.ibb.co/B2MPgVWY/image.png", "https://i.ibb.co/CpxHGsYY/image.png", "https://i.ibb.co/sJNFG9sK/image.png", "https://i.ibb.co/WNLtW5Bw/image.png", "https://i.ibb.co/k6HPbKs8/image.png"],
        captions: ["Сварка кузовов", "Линия сборки", "Упаковка", "Робот AGV", "Окраска", "Конвейер"]
    },
    quality: {
        title: "Контроль качества",
        pre: ["Развитие алгоритмов ИИ", "Оцифровка процессов дефектоскопии", "Снижение человеческого фактора"],
        effects: [
            {val: "-35%", lab: "Уровень брака"},
            {val: "x2", lab: "Скорость контроля"},
            {val: "< 12 мес", lab: "Окупаемость"}
        ],
        partners: ["ГАЗ ГРУППА", "ШЕРЕМЕТЬЕВО", "УВЗ"],
        images: ["https://i.ibb.co/6dL0hc9/image.png", "https://i.ibb.co/TB3Mc4Vq/image.png", "https://i.ibb.co/3mDt1wkS/image.png", "https://i.ibb.co/N6QXGXmP/image.png", "https://i.ibb.co/0yrPsvGH/image.png", "https://i.ibb.co/ynQKsVBk/image.png"],
        captions: ["Микродефекты", "Контроль ленты", "Геометрия", "Тепловизор", "Сканер", "Видеоаналитика"]
    },
    security: {
        title: "Средства охраны (ИТСО)",
        pre: ["ФЗ-187 КИИ", "Антитеррористическая защищенность", "Автоматизация КПП и периметра"],
        effects: [
            {val: "99.9%", lab: "Надежность"},
            {val: "< 5 сек", lab: "Реакция"},
            {val: "-30%", lab: "Затраты на охрану"}
        ],
        partners: ["РОСНЕФТЬ", "МВД РОССИИ", "ФОРВАРД ЭНЕРГО"],
        images: ["https://i.ibb.co/XZ65YFQb/image.png", "https://i.ibb.co/C5fhRSjq/image.png", "https://i.ibb.co/Cpq6jKVX/image.png", "https://i.ibb.co/Xkkk5wb2/image.png", "https://i.ibb.co/7NTrr57q/image.png", "https://i.ibb.co/7tyWcmvg/image.png"],
        captions: ["Периметр", "Антидрон", "Доступ", "Ситцентр", "Камера", "Досмотр"]
    },
    eco: {
        title: "Экомониторинг",
        pre: ["Программа «Безопасный труд»", "Автоматический контроль выбросов", "ESG-стандарты и экология"],
        effects: [
            {val: "-50%", lab: "Аварийность"},
            {val: "-100%", lab: "Штрафы"},
            {val: "24/7", lab: "Сбор данных"}
        ],
        partners: ["НОРНИКЕЛЬ", "СУЭК", "ЕВРАЗ", "СЕЛИГДАР"],
        images: ["https://i.ibb.co/KpVNHXKx/image.png", "https://i.ibb.co/JwSJ3vfK/image.png", "https://i.ibb.co/pv40LC1H/image.png", "https://i.ibb.co/fdZGCyYj/image.png", "https://i.ibb.co/fY50zwwW/image.png", "https://i.ibb.co/yFmPpXhx/image.png"],
        captions: ["Труба", "Воздух", "Вода", "Данные", "Датчики", "Контроль"]
    },
    equipment: {
        title: "Технологическое оборудование",
        pre: ["Импортозамещение агрегатов", "Модернизация котельных", "Локализация сервиса"],
        effects: [
            {val: "+25%", lab: "КПД агрегатов"},
            {val: "+20%", lab: "Выпуск продукции"},
            {val: "+15 лет", lab: "Срок службы"}
        ],
        partners: ["ЯЗДА", "ЯМЗ", "ХИАГДА"],
        images: ["https://i.ibb.co/hR5NBkZq/image.png", "https://i.ibb.co/4RwQwpqb/image.png", "https://i.ibb.co/vCsDZh6Q/image.png", "https://i.ibb.co/1fCPdsNB/image.png", "https://i.ibb.co/fVX0HMtx/image.png", "https://i.ibb.co/tp125yc0/image.png", "https://i.ibb.co/3YLP8644/image.png", "https://i.ibb.co/Z6V4LW6X/image.png"],
        captions: ["Насос", "Котельная", "Вентиляция", "Теплообменник", "Учет", "Турбина", "Очистка", "Щит"]
    }
};

function openSlide(id) {
    const item = projectData[id];
    const content = document.getElementById('modal-content');
    
    content.innerHTML = `
        <div class="slide-grid animate__animated animate__fadeIn">
            <div class="info-col">
                <h2>${item.title}</h2>
                <div class="data-box">
                    <h5>Предпосылки задачи</h5>
                    <ul class="data-list">
                        ${item.pre.map(p => `<li>${p}</li>`).join('')}
                    </ul>
                </div>
                <div class="effects-grid">
                    ${item.effects.map(e => `
                        <div class="effect-item">
                            <strong>${e.val}</strong>
                            <span>${e.lab}</span>
                        </div>
                    `).join('')}
                </div>
                <div class="partners-row">
                    ${item.partners.map(p => `<span class="p-label">${p}</span>`).join('')}
                </div>
            </div>
            <div class="visual-col">
                <div class="mosaic">
                    ${item.images.map((img, i) => `
                        <div class="m-item">
                            <div class="m-img"><img src="${img}"></div>
                            <div class="m-caption">${item.captions[i] || ""}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;

    document.getElementById('modal').classList.add('visible');
    document.body.style.overflow = 'hidden';
}

function closeSlide() {
    document.getElementById('modal').classList.remove('visible');
    document.body.style.overflow = 'auto';
}
