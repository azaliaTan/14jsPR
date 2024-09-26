'use strict';


let tab_one=document.querySelectorAll('.btn_one');
let text_one=document.querySelectorAll('.text_one');
let img=document.querySelectorAll('.img');


tab_one.forEach((item,index)=>{
    item.addEventListener('click',function(){
        document.querySelector('.btn_one.active').classList.remove('active');
        item.classList.add('active');
       
        document.querySelector('.text_one.active').classList.remove('active');
        text_one[index].classList.add('active')

        document.querySelector('.img.active').classList.remove('active');
        img[index].classList.add('active')




    })
}
)

