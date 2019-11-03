const layout = {
  'rus': {
		'default': [['ё', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '-', '=', 'Backspace'], 
								['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del'],
								['Caps', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'],
								['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '∧', 'Shift'],
								['Ctrl', 'Win', 'Alt', 'Space', 'Alt', '<', '∨', '>', 'Ctrl']
							],
		'shift': [['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace'], 
							['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'Del'],
							['Caps', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter'],
							['Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '∧', 'Shift'],
							['Ctrl', 'Win', 'Alt', 'Space', 'Alt', '<', '∨', '>', 'Ctrl']
						],

	},
	'eng': {
		'default': [['`', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '-', '=', 'Backspace'], 
								['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del'],
								['Caps', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter'],
								['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '∧', 'Shift'],
								['Ctrl', 'Win', 'Alt', 'Space', 'Alt', '<', '∨', '>', 'Ctrl']
							],
		'shift': [['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace'], 
							['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Del'],
							['Caps', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter'],
							['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '∧', 'Shift'],
							['Ctrl', 'Win', 'Alt', 'Space', 'Alt', '<', '∨', '>', 'Ctrl']
						],
	}
};

const keysCode = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace',
									'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete',
									'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter',
									'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight',
									'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'
								];

const keysNum = [
									layout.rus.default[0].length, 
									layout.rus.default[1].length, 
									layout.rus.default[2].length, 
									layout.rus.default[3].length, 
									layout.rus.default[4].length
								];

class Keyboard {
	constructor (language, isShifted) {
		this.language = language;
		this.isShifted = isShifted;
		this.option = this.isShifted ? 'shift' : 'default';
		this.layout = [...layout[this.language][this.option]];
		this.keyboard = document.createElement('div');
		this.keyboard.className = 'keyboard';
	}

	createLayout() {
		this.layout.forEach((subArr, rowIdx) => {
			let row = document.createElement('div');
			row.className = 'row';
			subArr.forEach((el, elIdx) => {
				let key = document.createElement('div');
				key.innerHTML = this.layout[rowIdx][elIdx];
				key.className = 'key';
				row.append(key);
			});
			this.keyboard.append(row);
		})
		document.body.append(this.keyboard);
		return;
	}

	shift() {
		this.isShifted = !this.isShifted;
		this.changeLayout(this.language, this.isShifted);
		return;
	}

	changeLanguage() {
		this.language = this.language === 'rus' ? 'eng' : 'rus';
		this.changeLayout(this.language, this.isShifted);
		localStorage.setItem('language', this.language);
	}

	changeLayout(language, isShifted) {
		this.isShifted = isShifted;
		this.option = this.isShifted ? 'shift' : 'default';
		this.language = language;
		this.layout = [...layout[this.language][this.option]];
		let keys = document.querySelectorAll('.key');
		keys.forEach((key, i) => {
			if (i < keysNum[0])	key.innerHTML = this.layout[0][i];
			else if (i < keysNum[0] + keysNum[1]) {
				key.innerHTML = this.layout[1][i - keysNum[0]];
			} else if (i < keysNum[0] + keysNum[1] + keysNum[2]) {
				key.innerHTML = this.layout[2][i - keysNum[0] - keysNum[1]];
			}	else if (i < keysNum[0] + keysNum[1] + keysNum[2] + keysNum[3]) {
				key.innerHTML = this.layout[3][i - keysNum[0] - keysNum[1] - keysNum[2]];
			} else {
				key.innerHTML = this.layout[4][i - keysNum[0] - keysNum[1] - keysNum[2] - keysNum[3]];
			}
		});
		return;
	}
}

let language;
if (localStorage.getItem('language') === null) {
	language = navigator.language.includes('ru') ? 'rus' : 'eng';
	localStorage.setItem('language', language);
}
else language = localStorage.getItem('language');
let isShifted = false;
let keyboard = new Keyboard(language, isShifted);

let textarea = document.createElement('TEXTAREA');
textarea.value = '';

window.onload = function() {
	document.body.append(textarea);
	
	let language;
	if (window.localStorage.getItem('language') === null) {
		language = navigator.language.includes('ru') ? 'rus' : 'eng';
		window.localStorage.setItem('language', language);
	}
	else language = localStorage.getItem('language');
	keyboard.createLayout();
}

document.body.addEventListener('click', function(event) {
	if (event.target.classList.contains('key')) {
		const allKeys = document.querySelectorAll('.key');

		switch (event.target.innerHTML) {
			case 'Shift':
				if (allKeys[keysCode.indexOf('ShiftLeft')].classList.contains('active') || allKeys[keysCode.indexOf('ShiftRight')].classList.contains('active')) {
						allKeys[keysCode.indexOf('ShiftLeft')].classList.remove('active');
						allKeys[keysCode.indexOf('ShiftRight')].classList.remove('active');
						keyboard.shift();
				} else {
					event.target.classList.add('active');
					keyboard.shift();
				}
				break;
			
			case 'Ctrl':
				if (allKeys[keysCode.indexOf('ShiftLeft')].classList.contains('active') || allKeys[keysCode.indexOf('ShiftRight')].classList.contains('active')) {
					allKeys[keysCode.indexOf('ShiftLeft')].classList.remove('active');
					allKeys[keysCode.indexOf('ShiftRight')].classList.remove('active');
					keyboard.shift();
					keyboard.changeLanguage();
				}
				event.target.style.animation = '';
				void event.target.offsetWidth;
				event.target.style.animation = 'active 0.3s linear';
				break;

			case 'Alt':
				if (allKeys[keysCode.indexOf('ShiftLeft')].classList.contains('active') || allKeys[keysCode.indexOf('ShiftRight')].classList.contains('active')) {
					allKeys[keysCode.indexOf('ShiftLeft')].classList.remove('active');
					allKeys[keysCode.indexOf('ShiftRight')].classList.remove('active');
					keyboard.shift();
					keyboard.changeLanguage();
				}
				event.target.style.animation = '';
				void event.target.offsetWidth;
				event.target.style.animation = 'active 0.3s linear';
				break;

			default:
				document.getElementsByTagName('textarea')[0].value += event.target.innerHTML;
				if (allKeys[keysCode.indexOf('ShiftLeft')].classList.contains('active') || allKeys[keysCode.indexOf('ShiftRight')].classList.contains('active')) {
					allKeys[keysCode.indexOf('ShiftLeft')].classList.remove('active');
					allKeys[keysCode.indexOf('ShiftRight')].classList.remove('active');
					keyboard.shift();
				}
				event.target.style.animation = '';
				void event.target.offsetWidth;
				event.target.style.animation = 'active 0.3s linear';
				break;
		}
		
	}
});


