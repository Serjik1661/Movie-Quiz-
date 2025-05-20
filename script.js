document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Правильные ответы
    const correctAnswers = {
        question1: "1972",
        question2: "Том Хэнкс",
        question3: "39",
        question4: "Сеть",
        question5: "Темный рыцарь"
    };

    // Сбор ответов пользователя
    const userAnswers = {
        question1: document.querySelector('input[name="question1"]:checked')?.value,
        question2: document.querySelector('input[name="question2"]:checked')?.value,
        question3: document.querySelector('input[name="question3"]:checked')?.value,
        question4: document.querySelector('input[name="question4"]:checked')?.value,
        question5: document.querySelector('input[name="question5"]:checked')?.value
    };

    // Сбросим все стили перед проверкой
    document.querySelectorAll('.radio-option').forEach(option => {
        option.style.border = 'none';
        option.style.backgroundColor = 'transparent';
    });

    // Проверка ответов
    let score = 0;
    const totalQuestions = Object.keys(correctAnswers).length;

    for (const question in correctAnswers) {
        const selectedOption = document.querySelector(`input[name="${question}"]:checked`)?.closest('.radio-option');

        if (selectedOption) {
            if (userAnswers[question] === correctAnswers[question]) {
                score++;
                selectedOption.style.border = '2px solid green';
                selectedOption.style.backgroundColor = 'rgba(0, 255, 0, 0.1)';
            } else {
                selectedOption.style.border = '2px solid red';
                selectedOption.style.backgroundColor = 'rgba(255, 0, 0, 0.1)';

                // Найдем и отметим правильный ответ
                const correctOption = document.querySelector(`input[name="${question}"][value="${correctAnswers[question]}"]`).closest('.radio-option');
                correctOption.style.border = '2px solid green';
                correctOption.style.backgroundColor = 'rgba(0, 255, 0, 0.1)';
            }
        } else {
            // Если ответ не выбран, просто покажем правильный
            const correctOption = document.querySelector(`input[name="${question}"][value="${correctAnswers[question]}"]`).closest('.radio-option');
            correctOption.style.border = '2px solid green';
            correctOption.style.backgroundColor = 'rgba(0, 255, 0, 0.1)';
        }
    }

    // Вывод результатов
    const resultContainer = document.getElementById('results');
    resultContainer.innerHTML = `
        <h2>Результаты теста</h2>
        <p>Вы правильно ответили на ${score} из ${totalQuestions} вопросов.</p>
        <p>${score === totalQuestions ? 'Отличный результат!' : score >= totalQuestions/2 ? 'Неплохо, но можно лучше!' : 'Попробуйте еще раз!'}</p>
    `;
});
