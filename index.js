

//document.querySelector("button").addEventListener("click",handleClick);


////////////////////Mouse click on button////////////////////////
var numberOfDrumButtons=document.querySelectorAll("button").length;

for(var i=0; i<numberOfDrumButtons;i++)
{
    //document.querySelectorAll("button")[i].addEventListener("click",handleClick);
    document.querySelectorAll("button")[i].addEventListener("click", function (){

        var buttonInnerHTML=this.innerHTML;
        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);
 });
}


/*
function handleClick()
{
   

}
*/

//new Audio("sounds/crash.mp3").play();
//this.style.color="white";

/*****Constructor***** */

/*
var houseKeeper1={
    name: "veronica",
    age: 85,
    placesSheWorked:["french","italy"]
    }
    
    OR

    function bellBoy(name,age,hasWorkPermit,languages)
    {
        this.name=name;
        this.age=age;
        this.hasWorkPermit=hasWorkPermit;
        this.languages=languages;
    }

    var bellBoy1=new bellBoy("anna",85,true,["Hebrew","Arabic"]); 
    */



    /////////////////keyboard///////////////////////
    document.addEventListener("keydown",function (e)
    {
        makeSound(e.key);

        buttonAnimation(e.key);
    }
    );



    function makeSound(key)
    {
        switch(key)
        {
            case "w":
                new Audio("sounds/crash.mp3").play();

            case "a":
                new Audio("sounds/kick-bass.mp3").play();

             case "s":
                new Audio("sounds/snare.mp3").play();    

            case "d":
                 new Audio("sounds/tom-1.mp3").play();

            case "j":
            new Audio("sounds/tom-2.mp3").play();

            case "k":
            new Audio("sounds/tom-3.mp3").play();

            case "l":
            new Audio("sounds/tom-4.mp3").play();
            
            break;
        }
    }


    function buttonAnimation(currentKey)
    {
        var activeButton=document.querySelector("."+currentKey);

        activeButton.classList.add("pressed");

        setTimeout(function(){
            activeButton.classList.remove("pressed");
        },150);
    }

    


