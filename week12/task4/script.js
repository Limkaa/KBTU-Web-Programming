const nav = document.getElementById('nav');
const nav__toggle = document.getElementById('toggle_nav');
const nav__items = document.getElementById('nav_items');

let nav_opened = true;
nav__toggle.addEventListener('click', () => {
	nav_opened = !nav_opened;
	if (!nav_opened) {
		nav.classList = 'nav hidden';
		nav__items.style.display = 'none';
		nav__toggle.innerText = 'Раскрыть';
	} else {
		nav.classList = 'nav';
		nav__items.style.display = 'block';
		nav__toggle.innerText = 'Скрыть навигацию';
	}
});
