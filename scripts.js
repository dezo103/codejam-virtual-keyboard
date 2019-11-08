
const allKeyValue = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "\\", "Backspace",
                    "Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "Del",
                    "CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter",
                    "Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "Shift", "↑", "/",
                    "Ctrl", "Win", "Alt", "Space", "Alt", "Ctrl", "←", "↓", "→"];

let divWrapper = document.createElement('div');
divWrapper.className = 'wrapper';
document.body.append(divWrapper);

let textarea = document.createElement('textarea');
textarea.className = 'textarea';
divWrapper.append(textarea);

let divKeyboard = document.createElement('div');
divKeyboard.className = 'keyboard';
divWrapper.append(divKeyboard);

let divKeyboardKeys = document.createElement('div');
divKeyboardKeys.className = 'keyboard__keys';
divKeyboard.append(divKeyboardKeys);


for (let i=0; i<63; i++) {
    let divKeyboardKey = document.createElement('div');
    divKeyboardKey.innerText = allKeyValue[i];
    divKeyboardKey.className = 'keyboard__key';
    if (i==13 || 
        i==14 ||
        i==28 ||
        i==40 ||
        i==41 ||
        i==51 ||
        i==54 ||
        i==59) {
        divKeyboardKey.className = 'keyboard__key keyboard__key_double';
    }
    else if (i==58) {
        divKeyboardKey.className = 'keyboard__key keyboard__key_space';
    }
    else {

    }
    divKeyboardKeys.append(divKeyboardKey);
}





