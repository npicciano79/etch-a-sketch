document.onload=gridCreate();

function gridCreate(){
    for (let i=0;i<16;i++){
        const container=document.querySelector("main_grid");
        const content= document.createElement('p');
        content.classList.add('content');
        content.textContent='test';
        container.appendChild(content);
        



    }
    console.log('hit');


}