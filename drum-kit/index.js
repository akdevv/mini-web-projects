const btns = document.querySelectorAll('.drum');
const keys = ['w', 'a', 's', 'd', 'j', 'k', 'l'];

for (let btn of btns) {
    btn.addEventListener('click', () => {
        const key = btn.innerText;
        makeSound(key);
        btnAnimation(key);
    });
};

document.addEventListener('keydown', (evt) => {
    const key = evt.key;
    if (keys.includes(key.toLowerCase())) {
        makeSound(key);
        btnAnimation(key);
    }
});

const makeSound = key => {
    switch (key) {
        case 'w':
            const tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case 'a':
            const tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case 's':
            const tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case 'd':
            const tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case 'j':
            const snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case 'k':
            const crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case 'l':
            const kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        default:
            console.log(key);
            break;
    }
};

const btnAnimation = currKey => {
    const activeBtn = document.querySelector(`.${currKey}`);
    activeBtn.classList.toggle('pressed');
    setTimeout(() => {
        activeBtn.classList.toggle('pressed');
    }, 200);
};
