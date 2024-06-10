let state = 'start'
const helicopter = document.querySelector('.helicopter') 
const inputName = document.querySelector('#Name')
const form = document.querySelector('#SuperForm')
const startMenu = document.querySelector('.startGame')
let output = document.querySelector('#output-name')
const playGame = document.querySelector('.playGame')
console.log('start')
form.addEventListener('submit', (e) => {
    state = 'play'
    const inputValue = inputName.value
    console.log(inputValue)
    localStorage.setItem('Name', inputValue)
    startMenu.classList.add('StartMenuClose')
    output.textContent = inputValue
    playGame.classList.remove('StartMenuClose')
    console.log('play')
})

const pressedKeys = new Set();
        addEventListener("keydown", event => {
            pressedKeys.add(event.code);
        });
        addEventListener("keyup", event => {
            pressedKeys.delete(event.code);
        });
        let dt, lastT = performance.now();
        const image = document.querySelectorAll(".image");
        const userKeys = [
            [
                ["KeyW", .4],
                ["KeyS", -.4],
                ["KeyD", .2],
                ["KeyA", -.2]
            ],
        ]
        const users = userKeys.map((keys, i) => ({
            matrix : new DOMMatrix(),
            user: image[i],
            keys
        }));
        (function loop(t) {
            requestAnimationFrame(loop);
            dt = t - lastT;
            lastT = t;
            users.forEach(({matrix, user, keys}) => {
                keys.forEach(([key, delta], i) => {
                    let method = i < 2 ? "translateSelf" : "rotateSelf";
                    if (pressedKeys.has(key)) matrix[method](delta * dt);
                })
                user.style.transform = matrix;
            })
        })(lastT);


        


// start 
// play
// pause 
// lose 
