const img_array=['a.img.jpg','b.img.jpg','c.img.jpg','d.img.jpg']
const arrayLength= img_array.length
let i=0

let set=setInterval(sliderFunc, 5000) //5000 mili second =  5 sec smthg

function sliderFunc(){
    i++
    i=i%arrayLength
    //0%5=0  1%5=1, 
    document.querySelector('img').src=`images/${img_array[i]}`
    
}
const next=()=>{
     i++
     i=i%arrayLength
     document.querySelector('img').src=`images/${img_array[i]}`
}
const prev=()=>{
    i--
    if(i<0){
        i=arrayLength-1

    }
    document.querySelector('img').src='images/${img_array[i]}'
}
const stops=()=>{
    clearTimeout(set)
}
const starts=()=>{
    set=setInterval(sliderFunc, 5000)
}