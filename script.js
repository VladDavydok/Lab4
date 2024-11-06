const element5 = document.getElementById('element5');
const element6 = document.getElementById('element6');

let isBlue5 = true;

function updateColors() {
    if (isBlue5) {
        element5.style.backgroundColor = 'blue';
        element5.style.color = 'white';
        element6.style.backgroundColor = 'green';
        element6.style.color = 'black';
    } else {
        element5.style.backgroundColor = 'green';
        element5.style.color = 'black';
        element6.style.backgroundColor = 'blue';
        element6.style.color = 'white';
    }
}

element5.addEventListener('click', () => {
    isBlue5 = !isBlue5; 
    updateColors(); 
});

element6.addEventListener('click', () => {
    isBlue5 = !isBlue5; 
    updateColors(); 
});

function addImage() {
    const img = document.getElementById('city-image');
    if (!img) {
        const newImg = document.createElement('img');
        newImg.id = 'city-image';
        newImg.src = 'https://bukinfo.com.ua/news-gallery/669e137cafe7c.jpg';
        newImg.alt = 'Чернівці';
        newImg.width = 300;
        document.body.appendChild(newImg);
    }
}

function increaseImage() {
    const img = document.getElementById('city-image');
    if (img) img.width += 50;
}

function decreaseImage() {
    const img = document.getElementById('city-image');
    if (img && img.width > 50) img.width -= 50;
}

function removeImage() {
    const img = document.getElementById('city-image');
    if (img) img.remove();
}