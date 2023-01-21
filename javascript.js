//dev1 branch 
//add mousedown event listener 
/*grid slider control*/
var isDown=false;
var isOver=false;

var slider=document.getElementById('my-slider');
var squares=document.getElementById("grid-squares");
squares.innerHTML=slider.value;

slider.oninput=function(){
    squares.innerHTML=this.value;
    gridCreate(this.value);
    //console.log(this.value)
}



//localStorage.setItem('color_score',none);


function randomColor(){
    color_score=localStorage.getItem('color_score');
    if (color_score==1){            //black and white
        let color= (Math.random()*(256)|0).toString(16);//bitwise OR. Gives value in the range 0-255 which is then converted to base 16 (hex).
         return "#" + color + color + color;
    }else if(color_score==0){
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;

    }

}


function hoverColor($event){
    const item = $event.target;
    item.style.backgroundColor=`${randomColor()}`;
}





//create grid based on slider values 
function gridCreate(gridval){
    var container=document.getElementById('main-grid');
    container.innerHTML='';
    let squares=gridval*gridval;  //creates square of grid
 

    document.documentElement.style.setProperty("--columns-row",gridval);  
    for (i=0; i<squares; i++){
        let square =document.createElement('div');
        square.classList.add('grid-square');
        container.appendChild(square); 
        square.addEventListener('click',hoverColor)
          
    }
    
}


function buttonSelect(value){
    if (value==2){
        window.location.reload();
    }else if (value==1){
        var color_score=localStorage.getItem('color_score');    //black white images
        localStorage.setItem("color_score",1);
    }else if (value==0){
        var color_score=localStorage.getItem('color_score');      //color images
        localStorage.setItem("color_score",0);
    }
  
    
}

