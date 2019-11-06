const layout = {
  'rus': {
		'default': {
			'regular': [['ё', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '-', '=', 'Backspace'], 
								['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del'],
								['Caps', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'],
								['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '∧', 'Shift'],
								['Ctrl', 'Win', 'Alt', 'Space', 'Alt', '<', '∨', '>', 'Ctrl']
							],
			'caps': [['Ё', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '-', '=', 'Backspace'], 
							['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\', 'Del'],
							['Caps', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter'],
							['Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', '∧', 'Shift'],
							['Ctrl', 'Win', 'Alt', 'Space', 'Alt', '<', '∨', '>', 'Ctrl']
						],
			},
		'shift': {
			'regular': [['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace'], 
							['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'Del'],
							['Caps', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter'],
							['Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '∧', 'Shift'],
							['Ctrl', 'Win', 'Alt', 'Space', 'Alt', '<', '∨', '>', 'Ctrl']
						],
			'caps': [['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace'], 
							['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'Del'],
							['Caps', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter'],
							['Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '∧', 'Shift'],
							['Ctrl', 'Win', 'Alt', 'Space', 'Alt', '<', '∨', '>', 'Ctrl']
						],
		}
	},
	'eng': {
		'default': {
			'regular': [['`', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '-', '=', 'Backspace'], 
								['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del'],
								['Caps', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter'],
								['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '∧', 'Shift'],
								['Ctrl', 'Win', 'Alt', 'Space', 'Alt', '<', '∨', '>', 'Ctrl']
							],
			'caps': [['`', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '-', '=', 'Backspace'], 
							['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'Del'],
							['Caps', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', 'Enter'],
							['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '∧', 'Shift'],
							['Ctrl', 'Win', 'Alt', 'Space', 'Alt', '<', '∨', '>', 'Ctrl']
							],
		},
		'shift': {
			'regular': [['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace'], 
							['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Del'],
							['Caps', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter'],
							['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '∧', 'Shift'],
							['Ctrl', 'Win', 'Alt', 'Space', 'Alt', '<', '∨', '>', 'Ctrl']
							],
			'caps': [['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace'], 
							['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Del'],
							['Caps', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter'],
							['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '∧', 'Shift'],
							['Ctrl', 'Win', 'Alt', 'Space', 'Alt', '<', '∨', '>', 'Ctrl']
							],
		}
	}
};

const keysCode = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace',
									'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete',
									'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter',
									'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight',
									'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'
								];

const keysNum = [
									layout.rus.default.regular[0].length, 
									layout.rus.default.regular[1].length, 
									layout.rus.default.regular[2].length, 
									layout.rus.default.regular[3].length, 
									layout.rus.default.regular[4].length
								];

class Keyboard {
	constructor () {
		if (localStorage.getItem('language') === null) {
			this.language = navigator.language.includes('ru') ? 'rus' : 'eng';
			localStorage.setItem('language', language);
		}
		else this.language = localStorage.getItem('language');
		this.isShifted = false;
		this.isCapsed = false;
		this.option1 = this.isShifted ? 'shift' : 'default';
		this.option2 = this.isCapsed ? 'caps' : 'regular';
		this.layout = [...layout[this.language][this.option1][this.option2]];
		this.keyboard = document.createElement('div');
		this.keyboard.className = 'keyboard';
		this.keys = [];
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
				this.keys.push(key);
			});
			this.keyboard.append(row);
		})
		document.body.append(this.keyboard);
		return;
	}

	shift() {
		this.isShifted = !this.isShifted;
		this.changeLayout(this.language, this.isShifted, this.isCapsed);
		return;
	}

	changeLanguage() {
		this.language = this.language === 'rus' ? 'eng' : 'rus';
		this.changeLayout(this.language, this.isShifted, this.isCapsed);
		localStorage.setItem('language', this.language);
	}

	changeLayout(language, isShifted, isCapsed) {
		this.isShifted = isShifted;
		this.option1 = this.isShifted ? 'shift' : 'default';
		this.isCapsed = isCapsed;
		this.option2 = this.isCapsed ? 'caps' : 'regular';
		this.language = language;
		this.layout = [...layout[this.language][this.option1][this.option2]];
		this.keys.forEach((key, i) => {
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

	shiftHandler() {
		if (this.isShifted) {
			this.keys[keysCode.indexOf('ShiftLeft')].classList.remove('active');
			this.keys[keysCode.indexOf('ShiftRight')].classList.remove('active');
			this.shift();
		}
	}

	ctrlHandler() {
		if (this.isShifted) {
			this.shiftHandler();
			this.changeLanguage();
		}
	}

	capsHandler() {
		this.isCapsed = !this.isCapsed;
		this.keys[keysCode.indexOf('CapsLock')].classList.toggle('active');
		this.changeLayout(this.language, this.isShifted, this.isCapsed);
		return;
	}
}

let keyboard = new Keyboard();

window.onload = function() {
	let textarea = document.createElement('TEXTAREA');
	textarea.value = '';
	textarea.classList = 'textarea';
	document.body.append(textarea);
	keyboard.createLayout();
}

function addAnimation(element) {
	element.style.animation = '';
	void element.offsetWidth;
	element.style.animation = 'active 0.3s linear';
}

document.body.addEventListener('click', function(event) {
	if (event.target.classList.contains('key')) {
		const textarea = document.getElementsByTagName('textarea')[0];
		textarea.focus();
		let cursorStart;

		switch (event.target.innerHTML) {
			case 'Shift':
				if (keyboard.isShifted) keyboard.shiftHandler();
				else {
					event.target.classList.add('active');
					keyboard.shift();
				}
				break;
			
			case 'Ctrl':
			case 'Alt':
				keyboard.ctrlHandler();
				addAnimation(event.target);
				break;

			case 'Win':
				if (keyboard.isShifted) keyboard.shiftHandler();
				addAnimation(event.target);
				break;
			
			case 'Space':
				if (keyboard.isShifted) keyboard.shiftHandler();
				addAnimation(event.target);
				textarea.value += ' ';
				break;

			case 'Tab':
				if (keyboard.isShifted) keyboard.shiftHandler();
				addAnimation(event.target);
				textarea.value += '\t';
				break;
			
			case 'Caps':
				if (keyboard.isShifted) keyboard.shiftHandler();
				addAnimation(event.target);
				keyboard.capsHandler();
				break;
			
			case 'Backspace':
				if (keyboard.isShifted) keyboard.shiftHandler();
				addAnimation(event.target);
				cursorStart = textarea.selectionStart;
				if (textarea.selectionStart === textarea.selectionEnd) {
					textarea.value = textarea.value.slice(0, textarea.selectionStart - 1) + textarea.value.slice(textarea.selectionEnd);
					textarea.selectionStart = cursorStart--;
					textarea.selectionEnd = cursorStart--;
				} else {
					textarea.value = textarea.value.slice(0, textarea.selectionStart) + textarea.value.slice(textarea.selectionEnd);
					textarea.selectionStart = cursorStart;
					textarea.selectionEnd = cursorStart;
				}
				break;
			
			case 'Enter':
				if (keyboard.isShifted) keyboard.shiftHandler();
				addAnimation(event.target);
				textarea.value += '\n';
				break;
			
			case 'Del':
				if (keyboard.isShifted) keyboard.shiftHandler();
				addAnimation(event.target);
				cursorStart = textarea.selectionStart;
				if (textarea.selectionStart === textarea.selectionEnd) {
					textarea.value = textarea.value.slice(0, textarea.selectionStart) + textarea.value.slice(textarea.selectionEnd + 1);
				} else {
					textarea.value = textarea.value.slice(0, textarea.selectionStart) + textarea.value.slice(textarea.selectionEnd);
				}
				textarea.selectionStart = cursorStart;
				textarea.selectionEnd = cursorStart;
				break;
			
			case '∧':
				if (keyboard.isShifted) keyboard.shiftHandler();
				addAnimation(event.target);
				//textarea.setSelectionRange(textarea.selectionStart - 97, textarea.selectionStart - 97);
				//textarea.focus();
				//TODO:
				break;
			
			case '∨':
				if (keyboard.isShifted) keyboard.shiftHandler();
				addAnimation(event.target);
				//TODO:
				break;
			
			case '&lt;':
				if (keyboard.isShifted) keyboard.shiftHandler();
				addAnimation(event.target);
				textarea.selectionStart--;
				textarea.selectionEnd--;
				textarea.focus();
				break;

			case '&gt;':
				if (keyboard.isShifted) keyboard.shiftHandler();
				addAnimation(event.target);
				textarea.selectionStart++;
				textarea.focus();
				break;

			default:
				textarea.value += event.target.innerHTML;
				if (keyboard.isShifted) keyboard.shiftHandler();
				addAnimation(event.target);
				break;
		}
	}
});


document.body.addEventListener('keydown', function(event) {
	const textarea = document.getElementsByTagName('textarea')[0];
	textarea.focus();
	event.preventDefault();
	console.log(event.code);
	switch (event.code) {
		case 'ShiftLeft':
		case 'ShiftRight':
			if (keyboard.isShifted) keyboard.shiftHandler();
			else {
				keyboard.keys[keysCode.indexOf(event.code)].classList.add('active');
				keyboard.shift();
			}
			break;
		
		case 'ControlLeft':
		case 'ControlRight':
		case 'AltLeft':
		case 'AltRight':
			keyboard.ctrlHandler();
			addAnimation(keyboard.keys[keysCode.indexOf(event.code)]);
			break;

		case 'MetaLeft':
			if (keyboard.isShifted) keyboard.shiftHandler();
			addAnimation(keyboard.keys[keysCode.indexOf(event.code)]);
			break;
		
		case 'Space':
			if (keyboard.isShifted) keyboard.shiftHandler();
			addAnimation(keyboard.keys[keysCode.indexOf(event.code)]);
			textarea.value += ' ';
			break;

		case 'Tab':
			if (keyboard.isShifted) keyboard.shiftHandler();
			addAnimation(keyboard.keys[keysCode.indexOf(event.code)]);
			textarea.value += '\t';
			break;
		
		case 'CapsLock':
			if (keyboard.isShifted) keyboard.shiftHandler();
			addAnimation(keyboard.keys[keysCode.indexOf(event.code)]);
			keyboard.capsHandler();
			break;
		
		case 'Backspace':
			if (keyboard.isShifted) keyboard.shiftHandler();
			addAnimation(keyboard.keys[keysCode.indexOf(event.code)]);
			cursorStart = textarea.selectionStart;
			if (textarea.selectionStart === textarea.selectionEnd) {
				textarea.value = textarea.value.slice(0, textarea.selectionStart - 1) + textarea.value.slice(textarea.selectionEnd);
				textarea.selectionStart = cursorStart--;
				textarea.selectionEnd = cursorStart--;
			} else {
				textarea.value = textarea.value.slice(0, textarea.selectionStart) + textarea.value.slice(textarea.selectionEnd);
				textarea.selectionStart = cursorStart;
				textarea.selectionEnd = cursorStart;
			}
			break;
		
		case 'Enter':
			if (keyboard.isShifted) keyboard.shiftHandler();
			addAnimation(keyboard.keys[keysCode.indexOf(event.code)]);
			textarea.value += '\n';
			break;
		
		case 'Delete':
			if (keyboard.isShifted) keyboard.shiftHandler();
			addAnimation(keyboard.keys[keysCode.indexOf(event.code)]);
			cursorStart = textarea.selectionStart;
			if (textarea.selectionStart === textarea.selectionEnd) {
				textarea.value = textarea.value.slice(0, textarea.selectionStart) + textarea.value.slice(textarea.selectionEnd + 1);
			} else {
				textarea.value = textarea.value.slice(0, textarea.selectionStart) + textarea.value.slice(textarea.selectionEnd);
			}
			textarea.selectionStart = cursorStart;
			textarea.selectionEnd = cursorStart;
			break;
		
		case 'ArrowUp':
			if (keyboard.isShifted) keyboard.shiftHandler();
			addAnimation(keyboard.keys[keysCode.indexOf(event.code)]);
			//TODO:
			break;
		
		case 'ArrowDown':
			if (keyboard.isShifted) keyboard.shiftHandler();
			addAnimation(keyboard.keys[keysCode.indexOf(event.code)]);
			//TODO:
			break;
		
		case 'ArrowLeft': 
			if (keyboard.isShifted) keyboard.shiftHandler();
			addAnimation(keyboard.keys[keysCode.indexOf(event.code)]);
			textarea.selectionStart--;
			textarea.selectionEnd--;
			textarea.focus();
			break;

		case 'ArrowRight':
			if (keyboard.isShifted) keyboard.shiftHandler();
			addAnimation(keyboard.keys[keysCode.indexOf(event.code)]);
			textarea.selectionStart++;
			textarea.focus();
			break;

		default:
			textarea.value += keyboard.keys[keysCode.indexOf(event.code)].innerHTML;
			if (keyboard.isShifted) keyboard.shiftHandler();
			addAnimation(keyboard.keys[keysCode.indexOf(event.code)]);
			break;
	}
});
