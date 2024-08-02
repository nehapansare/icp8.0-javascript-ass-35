const imageArr = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg",
    "image5.jpg",
];
let index = 0;

function prev(){
    if(index==0)
    {
        index = imageArr.length-1;
    }
    else{
        index--;
    }
    const img =document.getElementById('img')
    img.src = imageArr[index];
}

function next(){
    if(index == imageArr.length-1)
    {
        index =0;
    }
    else{
        index++;
    }
    const img =document.getElementById('img')
    img.src = imageArr[index];
}