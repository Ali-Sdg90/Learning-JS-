const body = document.querySelector("body");
const aloha = document.querySelector("h1");

const createRandomValue = () => {
    return [Math.trunc(Math.random() * 256), !!Math.trunc(Math.random() * 2)];
};

let r = createRandomValue();
let g = createRandomValue();
let b = createRandomValue();

const changeColorValue = (value) => {
    if (value[1]) {
        value[0] = value[0] + 1;
    } else {
        value[0] = value[0] - 1;
    }

    if (value[0] === 0 || value[0] === 255) {
        value[1] = !value[1];
    }

    return value;
};

const updateColors = () => {
    r = changeColorValue(r);
    g = changeColorValue(g);
    b = changeColorValue(b);

    body.style.background = `rgb(${r[0]}, ${g[0]}, ${b[0]})`;
    aloha.style.color = `rgb(${r[0] / 2}, ${g[0] / 2}, ${b[0] / 2})`;
};

setInterval(updateColors, 20);
