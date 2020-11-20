let share = document.querySelector('#share-button');
let shareImg = document.querySelector('#share-button img');
let shareMedia = document.querySelector('.share-links');

share.addEventListener('click', () => {
    shareMedia.classList.add('active');
})

document.querySelector('body').addEventListener('click', e => {
    if(e.target !== shareImg) {
        shareMedia.classList.remove('active');
    }
})