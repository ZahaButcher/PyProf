// == Типы личности ==
let types = {
    "R": "Реалистичный",
    "I": "Интеллектуальный",
    "A": "Артистичный",
    "S": "Социальный",
    "E": "Предпринимательский",
    "C": "Конвенциональный"
};

// == Рекомендации по экзаменам ==
let recommendations = {
    "R": ["Математика", "Физика"],
    "I": ["Математика", "Информатика", "Физика"],
    "A": ["Литература", "История", "Обществознание"],
    "S": ["Обществознание", "Биология"],
    "E": ["Обществознание", "Математика"],
    "C": ["Математика", "Информатика"]
};

// == 35 пар профессий ==
let questions = [
    [["Инженер", "R"], ["Учёный", "I"]],
    [["Механик", "R"], ["Программист", "I"]],
    [["Строитель", "R"], ["Архитектор", "A"]],
    [["Электрик", "R"], ["Системный администратор", "I"]],
    [["Техник", "R"], ["Аналитик данных", "I"]],

    [["Художник", "A"], ["Бухгалтер", "C"]],
    [["Дизайнер", "A"], ["Экономист", "C"]],
    [["Актёр", "A"], ["Юрист", "E"]],
    [["Музыкант", "A"], ["Менеджер", "E"]],
    [["Фотограф", "A"], ["Маркетолог", "E"]],

    [["Учитель", "S"], ["Предприниматель", "E"]],
    [["Психолог", "S"], ["Бизнес-консультант", "E"]],
    [["Врач", "S"], ["Фармацевт", "I"]],
    [["Социальный работник", "S"], ["Администратор", "C"]],
    [["Тренер", "S"], ["Менеджер по продажам", "E"]],

    [["Эколог", "I"], ["Агроном", "R"]],
    [["Химик", "I"], ["Технолог", "R"]],
    [["Физик", "I"], ["Инженер-конструктор", "R"]],
    [["Математик", "I"], ["Экономист", "C"]],
    [["Программист", "I"], ["Системный аналитик", "C"]],

    [["Секретарь", "C"], ["HR-менеджер", "S"]],
    [["Делопроизводитель", "C"], ["Юрист", "E"]],
    [["Бухгалтер", "C"], ["Финансовый аналитик", "I"]],
    [["Архивариус", "C"], ["Историк", "A"]],
    [["Офис-менеджер", "C"], ["Администратор проекта", "E"]],

    [["Логист", "E"], ["Инженер", "R"]],
    [["Руководитель", "E"], ["Учёный", "I"]],
    [["Продюсер", "E"], ["Режиссёр", "A"]],
    [["Коммерческий директор", "E"], ["Экономист", "C"]],
    [["Политолог", "E"], ["Социолог", "S"]],

    [["Ветеринар", "S"], ["Биолог", "I"]],
    [["Медсестра", "S"], ["Лаборант", "C"]],
    [["Журналист", "A"], ["Редактор", "C"]],
    [["Коуч", "S"], ["Бизнес-тренер", "E"]],
    [["Иллюстратор", "A"], ["Веб-разработчик", "I"]]
];

let scores = {};
for (let key in types) {
    scores[key] = 0;
}

let count = 0;

document.addEventListener('DOMContentLoaded', () => {
    let first_btn = document.getElementById('first_btn');
    let second_btn = document.getElementById('second_btn');
    let text = document.getElementById('text');
    first_btn.value = questions[count][0][0];
    second_btn.value = questions[count][1][0];
    start_btn.style.display = "block";
    first_btn.addEventListener('click', btn_ligic);
    second_btn.addEventListener('click', btn_ligic);
    start_btn.addEventListener('click', () => {
        start_btn.style.display = "none";
        first_btn.style.display = "block";
        second_btn.style.display = "block";
        count = 0;
        for (let key in types) {
                scores[key] = 0;
            }
        first_btn.value = questions[count][0][0];
        second_btn.value = questions[count][1][0];
        text.innerHTML = `ПРОФОРИЕНТАЦИОННЫЙ ТЕСТ <br>
            <span style="font-size: 24px;">
                Наш тест поможет вам определится
                с предметами для сдачи ОГЭ/ЕГЭ
            </span> `;
    });


    function btn_ligic() {

        if (count + 1 != questions.length) {
            if (this === first_btn) {
                scores[questions[count][0][1]] += 1
                // console.log(questions[count][0][1]);
            }

            else if (this === second_btn) {
                scores[questions[count][1][1]] += 1
                // console.log(questions[count][1][1]);
            }
            count++;
            first_btn.value = questions[count][0][0];
            second_btn.value = questions[count][1][0];
        }
        else {
            let result = null;
            let max_score = -1;
            for (let i in scores) {
                if (scores[i] > max_score) {
                    max_score = scores[i];
                    result = i;
                }
            }
            let type = "тип личности: " + types[result] + "\n";
            type += "рекомендуемые предметы для ОГЭ и ЕГЭ:\n";
            for (let i of recommendations[result]) {
                type += i + "\n";
                console.log("i: " + i);
            }
            console.log(type);
            console.log("result: " + result);
            text.textContent = type;
            start_btn.value = 'Пройти ещё раз!';

            start_btn.style.display = "block";
            first_btn.style.display = "none";
            second_btn.style.display = "none";
        }

        console.log(scores);
        console.log(count);


    }

});

