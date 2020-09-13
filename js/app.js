// slider variables

const slider = document.querySelector('#slider');
const sliderLeftFill = document.querySelector('.fill');
const options = [...document.querySelectorAll('.setting')];
const img = document.querySelector('.img-window img');

let action = 'brightness';

let settings = [1, 1, 1, 0, 0];
// [0] = brightness
// [1] = saturation
// [2] = contrast
// [3] = blur
// [4] = hue

slider.addEventListener('input', () => {
    sliderLeftFill.style.width = `${slider.value * 10}%`;

    if(action === 'brightness'){
        settings[0] = slider.value;
    } else if(action === 'saturation'){
        settings[1] = slider.value;
    } else if(action === 'contrast'){
        settings[2] = slider.value;
    } else if(action === 'blur'){
        settings[3] = slider.value;
    } else if(action === 'hue'){
        settings[4] = slider.value*20;
    }
    
    img.style.filter = `brightness(${settings[0]}) saturate(${settings[1]}) hue-rotate(${settings[4]}deg) contrast(${settings[2]}) blur(${settings[3]}px)`;
})

options.map((item, index) =>
    item.addEventListener('click', () => {
        action = item.innerHTML;
        // console.log(action);
        options.map(obj => obj.classList.remove('active'));
        item.classList.add('active');
        slider.value = settings[index];
        sliderLeftFill.style.width = `${slider.value * 10}%`;
    })
)