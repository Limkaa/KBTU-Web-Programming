const questions = [
	{ question: 'Сколько будет 2 + 2?', options: ['4', '6', '3', '1'], correct_index: 0 },
	{ question: 'Сколько будет 2 + 8?', options: ['4', '6', '10', '1'], correct_index: 2 },
	{ question: 'Сколько будет 4 * 5?', options: ['4', '100', '3', '20'], correct_index: 3 },
	{ question: 'Сколько будет 100 : 20?', options: ['5', '2', '3', '10'], correct_index: 0 },
];

const question = document.getElementById('question');
const options_block = document.getElementById('options');
const button = document.getElementById('button');
const form = document.getElementById('quiz__form');
const message = document.getElementById('quiz__message');
const next_question = document.getElementById('next_question');

let current_question_index = 0;
let score = 0;

form.addEventListener('submit', checkAnswer);
next_question.addEventListener('click', () => {
	if (current_question_index + 1 == questions.length) {
		alert(`Вы закончили quiz. Правильных ответов: ${score}/${questions.length}`);
		return;
	}
	current_question_index += 1;
	setQuestion(current_question_index);
});

function setQuestion(index) {
	message.innerText = '';
	button.disabled = false;
	button.classList = 'quiz__button';
	next_question.disabled = true;
	next_question.classList = 'disabled quiz__button';
	let fragment = document.createDocumentFragment();
	let nextQuestion = questions[index];
	question.innerText = nextQuestion.question;
	nextQuestion.options.forEach((option, index) => {
		let block = document.createElement('div');
		block.classList = 'quiz__answer_option';

		let optionNode = document.createElement('input');
		optionNode.setAttribute('type', 'radio');
		optionNode.setAttribute('name', 'choice');
		optionNode.setAttribute('value', index);
		optionNode.setAttribute('id', `choice-${index}`);

		let label = document.createElement('label');
		label.setAttribute('for', `choice-${index}`);
		label.innerText = option;

		block.appendChild(optionNode);
		block.appendChild(label);
		fragment.appendChild(block);
	});
	button.value = 'Проверить';

	options_block.innerHTML = '';
	options_block.append(fragment);
}

function checkAnswer(event) {
	event.preventDefault();
	let formData = new FormData(event.target);
	let data = [...formData];
	if (data.length == 0) {
		message.innerText = 'Выберите свой ответ';
		return;
	}
	let current_question = questions[current_question_index];
	if (+data[0][1] != current_question.correct_index) {
		message.innerText =
			'Неправильный ответ! Правильный ответ: ' + current_question.options[current_question.correct_index];
	} else {
		score += 1;
		message.innerText = 'Вы ответили верно';
	}

	next_question.disabled = false;
	next_question.classList = 'quiz__button';

	button.disabled = true;
	button.classList = 'disabled quiz__button';
}

setQuestion(current_question_index);
