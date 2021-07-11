const filterBtns = document.querySelectorAll('#filter button');
const animals = document.querySelectorAll('.animal');

//Loop through buttons
filterBtns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        //Target the id of each btns
        const item = e.target.id;

        if(item === 'all') {
            //Loop through all images
            animals.forEach(function(img) {
                img.style.display = 'block'
            })
        } else if(item === 'cats') {
            //Loop through all images 
            animals.forEach(function(img) {
                //If img doesn't contain the class name 'cat'
                if(!img.classList.contains('cat')) {
                    //Display none
                    img.style.display = 'none'
                } else {
                    img.style.display = 'block'
                }
            })
        } else if(item === 'dogs') {
            //Loop through all images
            animals.forEach(function(img) {
                //If img doesn't contain the class name 'dog'
                if(!img.classList.contains('dog')) {
                    //Display none
                    img.style.display = 'none'
                } else {
                    img.style.display = 'block'
                }
            })
        } else {
            //Loop through all images
            animals.forEach(function(img) {
                //If img doesn't contain the class name 'parrot'
                if(!img.classList.contains('parrot')) {
                    //Display none
                    img.style.display = 'none'
                } else {
                    img.style.display = 'block'
                }
            })
        }
    })
})