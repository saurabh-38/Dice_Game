

// var  randomNumber1=Math.floor((Math.random() * 10) + 1);
// randomNumber1= randomNumber1%6;
// randomNumber1=randomNumber1+1;
// var  randomNumber2=Math.floor((Math.random() * 10) + 1);
// randomNumber2= randomNumber2%6;
// randomNumber2=randomNumber2+1;
// console.log( randomNumber2+" "+ randomNumber2);
// if(randomNumber1==1){

//        var image=document.getElementById('img1');
//        image.src="./images/dice1.png"

// }

// if(randomNumber1==2){

//         var image=document.getElementById('img1');
//         image.src="./images/dice2.png"
 
//  }
 
// if(randomNumber1==3){

//         var image=document.getElementById('img1');
//         image.src="./images/dice3.png"
 
//  }
 
// if(randomNumber1==4){

//         var image=document.getElementById('img1');
//         image.src="./images/dice4.png"
 
//  }
 
// if(randomNumber1==5){

//         var image=document.getElementById('img1');
//         image.src="./images/dice5.png"
 
//  }

 
// if(randomNumber1==6){

//         var image=document.getElementById('img1');
//         image.src="./images/dice6.png"
 
//  }


//  if(randomNumber2==1){

//         var image=document.getElementById('img2');
//         image.src="./images/dice1.png"
 
//  }
 
//  if(randomNumber2==2){
 
//          var image=document.getElementById('img2');
//          image.src="./images/dice2.png"
  
//   }
  
//  if(randomNumber2==3){
 
//          var image=document.getElementById('img2');
//          image.src="./images/dice3.png"
  
//   }
  
//  if(randomNumber2==4){
 
//          var image=document.getElementById('img2');
//          image.src="./images/dice4.png"
  
//   }
  
//  if(randomNumber2==5){
 
//          var image=document.getElementById('img2');
//          image.src="./images/dice5.png"
  
//   }
 
  
//  if(randomNumber2==6){
 
//          var image=document.getElementById('img2');
//          image.src="./images/dice6.png"
  
//   }

var randomNumber1 =Math.floor(Math.random()*6)+1;

var randomNumber2 =Math.floor(Math.random()*6)+1;

var randomImageSource1="images/dice"+randomNumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomImageSource1);

var randomImageSource2="images/dice"+randomNumber2+".png";

document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

  if(randomNumber1==randomNumber2){
        document.querySelector("h1").innerHTML = "Draw";

  }else if(randomNumber1>randomNumber2){

        document.querySelector("h1").innerHTML = "Player1  Win";
      

  }else{

        document.querySelector("h1").innerHTML = "Player2 Win";        
     

  }



  document.querySelector(".re").innerHTML = "Created By Saurabh Gupta";        
