let modalBackground = document.getElementById("modal")


//video
let video = document.querySelectorAll(".hero__video__controls");
let theVideo = document.getElementById("modal__video");
Array.from(video).forEach((el) => {
    el.addEventListener("click",()=> {
        backgroundBlurOn();
        theVideo.classList.add("modal__content--active");
        modalBackground.addEventListener("click",(d)=>{
            if(d.target==theVideo.firstElementChild){
                theVideo.classList.remove("modal__content--active")
                backgroundBlurOff();
            }
        })
    })

})


//Nav btns
let ico = document.getElementById("ICO");
let team = document.getElementById("Team");
let contact = document.getElementById("Contact");

ico.addEventListener("click", ()=>{
    Array.from(document.querySelectorAll(".nav__btn")).forEach((el)=> el.classList.remove("nav__btn--active"))
    ico.parentElement.classList.add("nav__btn--active");
})

team.addEventListener("click", ()=>{
    Array.from(document.querySelectorAll(".nav__btn")).forEach((el)=> el.classList.remove("nav__btn--active"))
    team.parentElement.classList.add("nav__btn--active");
})

contact.addEventListener("click", ()=>{
    Array.from(document.querySelectorAll(".nav__btn")).forEach((el)=> el.classList.remove("nav__btn--active"))
    contact.parentElement.classList.add("nav__btn--active");
})


//checkbox
let checkbox = document.getElementById("checkbox");
checkbox.addEventListener("click",()=>{
    if(checkbox.classList.contains("form__checkbox--active")){
        checkbox.classList.remove("form__checkbox--active")
    }
    else{
        checkbox.classList.add("form__checkbox--active")
    }
})


//Team
let edgar = document.getElementById("Edgar")
let Mae = document.getElementById("Mae")
let David = document.getElementById("David")
let Frederick = document.getElementById("Frederick")
let modalExit = document



edgar.addEventListener('click', () => {
    backgroundBlurOn();
    modalEdgar = document.getElementById("modal__Edgar");
    modalEdgar.classList.add("modal__content--active");

    //background Click to exit
    modalBackground.addEventListener('click', (e)=>{
        if (e.target== modalEdgar.firstElementChild){

            modalEdgar.classList.remove("modal__content--active");
            backgroundBlurOff()
        }
    })
    
    //exitBtn to exit
    exitBtn = document.getElementById("modal__Edgar").firstElementChild.firstElementChild.firstElementChild.addEventListener('click', () =>{
        modalEdgar.classList.remove("modal__content--active");
        backgroundBlurOff()
    });

});

Mae.addEventListener('click', () => {
    backgroundBlurOn();
    modalMae = document.getElementById("modal__Mae");
    modalMae.classList.add("modal__content--active");

    //background Click to exit
    modalBackground.addEventListener('click', (e)=>{
        if(e.target == modalMae.firstElementChild){
            modalMae.classList.remove("modal__content--active");
            backgroundBlurOff()
        }
    })
    //exitBtn to exit
    exitBtn = document.getElementById("modal__Mae").firstElementChild.firstElementChild.firstElementChild.addEventListener('click', () =>{
        document.getElementById("modal__Mae").classList.remove("modal__content--active");
        backgroundBlurOff()
    });
});

David.addEventListener('click', () => {
    backgroundBlurOn();
     modalDavid = document.getElementById("modal__David");
     modalDavid.classList.add("modal__content--active");

    //background Click to exit
    modalBackground.addEventListener('click', (e)=>{
        if(e.target == modalDavid.firstElementChild){
            modalDavid.classList.remove("modal__content--active");
            backgroundBlurOff()
        }
    })

     //exitBtn
     exitBtn = document.getElementById("modal__David").firstElementChild.firstElementChild.firstElementChild.addEventListener('click', () =>{
        document.getElementById("modal__David").classList.remove("modal__content--active");
        backgroundBlurOff()
    });
});

Frederick.addEventListener('click', () => {
    backgroundBlurOn();
     modalFrederick = document.getElementById("modal__Frederick");
     modalFrederick.classList.add("modal__content--active");

    //background Click to exit
    modalBackground.addEventListener('click', (e)=>{
        if(e.target == modalFrederick.firstElementChild){
            modalFrederick.classList.remove("modal__content--active");
            backgroundBlurOff()
        }
    })

     //clicked on exitbtn
     exitBtn = document.getElementById("modal__Frederick").firstElementChild.firstElementChild.firstElementChild.addEventListener('click', () =>{

        document.getElementById("modal__Frederick").classList.remove("modal__content--active");
        backgroundBlurOff()
    });
});


function backgroundBlurOn(){
    modalBackground.classList.add("modal__background--active")
}
function backgroundBlurOff(){
    modalBackground.classList.remove("modal__background--active")
}

