let images = ['flapkart.jpg','little krishna.jpg','mt-15 1.webp','mt-15.jpg','mt-15.webp','ninja 300.jpg','revolt 1.jpg'];

let img = document.getElementById('img');

let imgindex = 2;

let leftarrow = document.querySelector('.left');

let rightarrow = document.querySelector('.right');


leftarrow.onclick = function() {

    imgindex -= 1;

    if(imgindex == 0) {
        leftarrow.style.display="none";
    }
    else{
        leftarrow.style.display="block";
    }

    if(imgindex < images.length-1){
        rightarrow.style.display="block";
    }

    img.setAttribute('src',"Image/"+images[imgindex]);

}

rightarrow.onclick = function() {

    imgindex += 1;

    if(imgindex == images.length-1) {
        rightarrow.style.display="none";
    }
    else{
        rightarrow.style.display="block";
    }

    if(imgindex > 1){
        leftarrow.style.display="block";
    }

    img.setAttribute('src',"Image/"+images[imgindex]);

}

