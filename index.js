// Your code here
dodger = document.getElementById('dodger');

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    }
    else if (e.key === "ArrowRight") {
        moveDodgerRight();
    } 
  });

function moveDodgerLeft(){
    let position = dodger.style.left.replace("px","");
    position = parseInt(position, 10);
    if (position > 0){
        dodger.style.left = `${position-1}px`;
    }
    console.log(dodger.style.left);
}

function moveDodgerRight(){
    let width = dodger.offsetWidth;
    let position = dodger.style.left.replace("px","");
    position = parseInt(position, 10);
    if (position + width < 400){
        dodger.style.left = `${position+1}px`;
    }
}
