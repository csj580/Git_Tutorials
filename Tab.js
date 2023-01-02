const NAVIGATOR = document.querySelectorAll('.navi');
const CONTENTS = document.querySelectorAll('.cont');
function change(){
    for(let i = 0; i < NAVIGATOR.length; i++){
        NAVIGATOR[i].addEventListener('click', function(e){
            for(let j = 0; j < NAVIGATOR.length; j++){
                NAVIGATOR[j].classList.remove('active');
                CONTENTS[j].classList.remove('active');
            }
            
            CONTENTS[i].classList.add('active');
            this.classList.add('active');     
        });
    }
}
const BUTTON = document.querySelectorAll('.btn-primary');
const TABLE = document.querySelectorAll('.table');
function change2() {
    for (let i = 0; i < BUTTON.length; i++) {
        BUTTON[i].addEventListener('click', function (e) {
            for (let j = 0; j < BUTTON.length; j++) {
                TABLE[j].classList.remove('active');
            }
            TABLE[i].classList.add('active');
        });
    }
}
change();
change2();