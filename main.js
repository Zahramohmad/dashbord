let input = document.querySelector('.enter');
let addBtn = document.querySelector('.addd');
let tak = document.querySelector('.tak');

input.addEventListener('keyup', () => {
if(input.value.trim() != 0 ){
    addBtn.classList.add('active')
} else{
        addBtn.classList.remove('active')
}


})  
addBtn.addEventListener('click', () => {
        if(input.value.trim() != 0){
            let dfo = document.createElement('div');
            dfo.classList.add('itemm')
            dfo.innerHTML =`
            <p>${input.value} </p>
            <div class="btnn">
            <i class="fa-solid fa-pen-to-square"></i>
            <i class="fa-solid fa-trash-can"></i>
              
                
                
                </div>
            
            `
            tak.appendChild(dfo);
            input.value ='';
        }else{
            alert('please enter atask')
        }
})
tak.addEventListener('click',(e) => {
        if(e.target.classList.contains('fa-trash-can')){
            e.target.parentElement.parentElement.remove();
        }

})

tak.addEventListener('click', (e) =>{
    if(e.target.classList.contains('fa-pen-to-square'))
    {
        e.target.parentElement.parentElement.classList.
        toggle('completed');
        
    }
}

)