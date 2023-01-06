const badge = document.getElementById('badge');
const loader_status = document.getElementById('loader_status');
const progress_line = document.getElementById('loader_line');

let interval = (+prompt('Задайте длительность загрузки в секундах') * 1000) / 100;
let loader_progress = 0;
let loader = setInterval(() => {
	if (loader_progress < 100) {
		loader_progress += 1;
		progress_line.style.width = `${loader_progress}%`;
		loader_status.innerText = `Не загружен (осталось ${Math.round(
			(interval * 100 - loader_progress * interval) / 1000
		)} секунд)`;
		console.log(progress_line.style.width);
	} else {
		loader_status.innerText = 'Загружен';
		badge.style.backgroundColor = `lightgreen`;
		clearInterval(loader);
	}
}, interval);
