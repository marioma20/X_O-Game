
let grid_items = document.getElementsByClassName("square");
 let currentturn = "x";
let bordarrey = [ '0' , '1', '2', '3', '4', '5', '6', '7', '8'];
let index;
let gameisfinished = false;

for(let item of grid_items){
     item.addEventListener("click", function(){

        if(gameisfinished){
            return;
        }


        let value = item.getAttribute('value');
        index = value;
        
        if(bordarrey[index] == "x" || bordarrey[index] == "o"){
            return;
        }
        // console.log(value);

        // filling the value visiling
        let squareContent = document.querySelector(`.square[value='${value}'] h3`);
            // console.log(squareContent)
            squareContent.innerHTML = currentturn;

                        // filling the value nonvisiling
                          bordarrey[index] = currentturn;
                        //   console.log(bordarrey);
                          evualewatebord();


            if(currentturn === 'x'){

                currentturn = 'o';
            }else{
                currentturn = 'x';
            }
            document.getElementById("instruction").textContent = `${currentturn} Turn`


            function evualewatebord(){
                 
                if(
                    // check from row
                    ((bordarrey[0] == bordarrey[1]) && (bordarrey[1] == bordarrey[2])) ||
                    ((bordarrey[3] == bordarrey[4]) && (bordarrey[4] == bordarrey[5])) ||
                    ((bordarrey[6] == bordarrey[7]) && (bordarrey[7] == bordarrey[8])) ||


                    // colunms

                    ((bordarrey[0] == bordarrey[3]) && (bordarrey[3] == bordarrey[6])) ||
                    ((bordarrey[1] == bordarrey[4]) && (bordarrey[4] == bordarrey[7])) ||
                    ((bordarrey[2] == bordarrey[5]) && (bordarrey[5] == bordarrey[8])) ||

                    // cutting
                    ((bordarrey[0] == bordarrey[4]) && (bordarrey[4] == bordarrey[8])) ||
                    ((bordarrey[2] == bordarrey[4]) && (bordarrey[4] == bordarrey[6])) 
                 ){

                    let winner = currentturn = "o" ? "o" : "x" ;
                    gameisfinished = true;
                    //  alert(winner);
                    alertify.alert(`${winner} !own`);
                }
                 // second function
                    var isdrow = true;
                 for(square of bordarrey){

                    if(square != "x" && square!="o"){
                         isdrow = false;
                    }
                 }
                 if(isdrow){
                    gameisfinished=true;
                    // alert("drow")
                 }
   
            }


     });

}

document.getElementById("reset-btn").addEventListener("click", function(){
     reset();
});
function reset(){
    // reseting the visule par


    for(item of grid_items){
        let value = item.getAttribute("value");
        // console.log(value);
        let squareContent = document.querySelector(`.square[value='${value}'] h3`);
        // console.log(squareContent);
        squareContent.innerHTML ="";
        // console.log(squareContent);
   
         bordarrey = [ '0' , '1', '2', '3', '4', '5', '6', '7', '8'];
         


    }

    gameisfinished=false;
    currentturn = "x";
    document.getElementById("instruction").innerHTML = `${currentturn} Turn`;

}











