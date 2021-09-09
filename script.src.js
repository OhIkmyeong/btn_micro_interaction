const asBtn = document.getElementById('asBtn');
const btn_down = document.getElementById('in_btn-down');
const in_check = document.getElementById('in_check');


btn_down.addEventListener('click',()=>{
    asBtn.classList.add('step-bar');
    setTimeout(when_complete,7000);
});

function when_complete(){
    asBtn.classList.add('step-complete');
}

in_check.addEventListener('click',()=>{
    asBtn.classList = "";
});