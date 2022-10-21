const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const imgList = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

/* Declaring the alternative text for each image file */
const altList = {
    'pic1.jpg' : 'yuuko with red flowers',
    'pic2.jpg' : 'yuuko with blue butterflies',
    'pic3.jpg' : 'yuuko with purple and yellow',
    'pic4.jpg' : 'yuuko red and blue',
    'pic5.jpg' : 'yuuko with brown',
}

/* Looping through images */

for (const image of imgList ) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `./${image}`);
    newImage.setAttribute('alt', altList[image]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', e => {
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alt;
    });
}

/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', () => {
    const buttonClass = btn.getAttribute('class');
    if (buttonClass === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
})
