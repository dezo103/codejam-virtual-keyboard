
const allKeyValue = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "\\", "Backspace",
                    "Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "Del",
                    "CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter",
                    "Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "Shift", "↑", "/",
                    "Ctrl", "Win", "Alt", "Space", "Alt", "Ctrl", "←", "↓", "→"];

const allEventCode = ["Digit1",  "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0",  "Minus", "Equal", "Backslash", "Backspace",
                    "Tab", "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "BracketLeft", "BracketRight", "Delete",
                    "CapsLock", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "Semicolon", "Quote", "Enter",
                    "ShiftLeft", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Comma", "Period", "ShiftRight", "ArrowUp", "Slash",
                    "ControlLeft", "MetaLeft", "AltLeft", "Space", "AltRight", "ControlRight", "ArrowLeft", "ArrowDown", "ArrowRight"];

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
    divKeyboardKey.setAttribute("data-event-code", allEventCode[i]);
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
    else if (i==57) {
        divKeyboardKey.className = 'keyboard__key keyboard__key_space';
    }
    else {

    }
    divKeyboardKeys.append(divKeyboardKey);
}

let currentKeys = '';
document.addEventListener('keydown', (event)=>{ 
    
    switch(event.key) {
        case 'Control':  
            break;

        case 'CapsLock':
            let eachKey = document.querySelectorAll('.keyboard__key');
            eachKey.forEach((elem)=>{
                elem.classList.toggle('to-uppercase');
            });
            break;
            
        case 'Alt':
            break;

        case 'Tab':
            break;

        case 'Shift':
            
            break;
      
        case 'Enter':
            currentKeys =  currentKeys + '\n';
            break;

        case 'Backspace':
            break;
        
        case 'ArrowLeft':
            break;

        case 'ArrowUp':
            break;

        case 'ArrowRight':
            break;

        case 'ArrowDown':
            break;
        
        default:
            currentKeys =  currentKeys + event.key; 
            document.querySelector('.textarea').value = currentKeys;
          break;
      }

    

    let elementForAnimate = document.querySelector(`div[data-event-code=${event.code}]`);
    
    elementForAnimate.classList.add('active-key');
    
});

document.addEventListener('keyup', (event)=>{
    let elementForAnimate = document.querySelector(`div[data-event-code=${event.code}]`);
    
    elementForAnimate.classList.remove('active-key');
});



document.addEventListener('mousedown', (event)=>{
    let target = event.target;
    target.classList.add('active-key');
});

document.addEventListener('mouseup', (event)=>{
    let target = event.target;
    target.classList.remove('active-key');
});

// document.addEventListener('click', (event)=>{
//     let target = event.target;
//     let targetAttribute = (target.getAttribute('data-event-code'));
//     console.log(targetAttribute);//keyT
//     targetAttribute.initKeyboardEvent("keydown", true, true, document.defaultView, false, false, false, false, false);
// });



// Хочу симулировать нажатие клавиши, но не получается








