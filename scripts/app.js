(() => {
    let count = 1;

    setInterval(() => {
        const img = document.getElementsByClassName('image')[0];
        const hero = "hero-image-" + count;
        
        img.style.setProperty('background-image', `url(./images/${hero}.jpg)`);

        count++;
        if(count === 4) count = 0;
    }, 3000)
})()