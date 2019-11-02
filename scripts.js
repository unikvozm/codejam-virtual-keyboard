const layout = {
  'rus': {
		'default': [['ё', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '-', '=', 'Backspace'], 
								['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\'],
								['Caps', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'],
								['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '∧', 'Shift'],
								['Ctrl', 'Win', 'Alt', 'Space', 'Alt', '<', '∨', '>', 'Ctrl']
							],
		'shift': [['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace'], 
							['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/'],
							['Caps', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter'],
							['Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '∧', 'Shift'],
							['Ctrl', 'Win', 'Alt', 'Space', 'Alt', '<', '∨', '>', 'Ctrl']
						],

	},
	'eng': {
		'default': [['`', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '-', '=', 'Backspace'], 
								['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'],
								['Caps', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter'],
								['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '∧', 'Shift'],
								['Ctrl', 'Win', 'Alt', 'Space', 'Alt', '<', '∨', '>', 'Ctrl']
							],
		'shift': [['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace'], 
							['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|'],
							['Caps', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter'],
							['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '∧', 'Shift'],
							['Ctrl', 'Win', 'Alt', 'Space', 'Alt', '<', '∨', '>', 'Ctrl']
						],

	}
};

class Keyboard {
	constructor (language, isShifted) {
		this.option = isShifted ? 'shift' : 'default';
		this.layout = [...layout[language][this.option]];
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
}

window.onload = function() {
	let language = 'rus';
	let isShifted = false;
	let keyboard = new Keyboard(language, isShifted);
	keyboard.createLayout();

}