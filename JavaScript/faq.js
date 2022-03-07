const allCross = document.querySelectorAll('.visible img');


console.log(allCross);

allCross.forEach(element =>{

    element.addEventListener('click' , function(){

        
        const height = this.parentNode.parentNode.childNodes[3].scrollHeight;

        const currentChoice = this.parentNode.parentNode.childNodes[3];

        // console.log(this.src);

        if(this.src.includes('DropUp')){
            this.src = 'Dropdown.svg';
            gsap.to(currentChoice , {duration: 0.3, height: height, opacity: 1 });
        }
        else if(this.src.includes('Dropdown')){
            this.src = 'DropUp.svg';
            gsap.to(currentChoice , {duration: 0.3, height: 0, opacity: 0 })
        }
    });
});


