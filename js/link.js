function background() {

    const image = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg', 'img/5.jpg', 'img/6.jpg', 'img/7.jpg', 'img/8.jpg', 'img/9.jpg', 'img/10.jpg'];
    const imageRandom = image[Math.floor(Math.random() * image.length)];
    document.body.style.backgroundImage = `url('${imageRandom}')`
    
}
    
    background()
    setInterval(background, 15000)

const title = document.getElementById('title');
const link = document.getElementById('link');
const keep = document.getElementById('keep');
const list = document.getElementById('list');

function listOfLink(){
    keep.addEventListener('click', () => {
        let newTitle = title.value;
        let newLink = link.value;

        if (!newTitle || !newLink) {
            console.error('El título o el enlace están vacíos');
            return
        }

        localStorage.setItem('newTitle', JSON.stringify(newTitle));
        localStorage.setItem('newLink', JSON.stringify(newLink));

        const localTitle = JSON.parse(localStorage.getItem('newTitle'))
        const localLink = JSON.parse(localStorage.getItem('newLink'))
            console.log(localLink, localTitle)

        const li = document.createElement('li');

        let formattedLink = localLink;
        if (localLink && !localLink.startsWith('http://') && !localLink.startsWith('https://')) {
            formattedLink = 'https://' + localLink;
        }
        const a = document.createElement('a');
        a.setAttribute('href', formattedLink);
        a.textContent = localTitle;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'X'
        removeBtn.classList.add('remove-btn')
        removeBtn.style.marginleft = '10px'
        removeBtn.addEventListener('click', () => {
            list.removeChild(li);
            localStorage.removeItem('newTitle');
            localStorage.removeItem('newLink');
        })

        li.appendChild(a);
        li.appendChild(removeBtn)
        list.appendChild(li);
    
    })

    
}



listOfLink()
