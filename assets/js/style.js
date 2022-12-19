
var imgArray=[
    'assets/img/slide/slide-1.jpg',
    'assets/img/slide/slide-2.png',
    'assets/img/slide/slide-3.png',
    'assets/img/slide/slide-4.jpg',
    'assets/img/slide/slide-5.jpg',
    'assets/img/slide/slide-6.jpg'
]

var curIndex=0;
var imgDuration=2000;

function slideShow(){
    document.getElementById('headimg').src=imgArray[curIndex];
    curIndex++;
    if (curIndex == imgArray.length){curIndex = 0;}
    setTimeout("slideShow()",imgDuration);
}

slideShow();