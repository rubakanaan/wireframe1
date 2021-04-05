


function welcomeUser(){

var userName = prompt("PLEASE ENTER YOUR NAME.","");
       
if (userName >= 'a' || userName >='A' )
{
  alert("WELCOME,"+userName+"!");
} 
else
{ alert("WELCOME!");}
confirm("PLEASE RATE OUR WEBSITE.");

}







function food(){

var foodType =prompt("Do you prefer Healthy Food or Fast Food ?");
while(foodType !=='fast food' && foodType!=="healthy food")
{
foodType=prompt("Please choose between Healthy food and Fast Food");

}

var userInput=prompt("Please inter a number :");

for (var i=1;i<=userInput;i++)
{

if(foodType == 'fast food'){
  document.write("\n"+i+"-" );
  document.write('<img src="https://images.dailyhive.com/20200517111740/92523796_1212872059104277_7917508117790157605_n.jpeg"> ');

}
else
{
  document.write(i+"-" );
  document.write('<img src="https://res.cloudinary.com/sanitarium/image/fetch/q_auto/https://www.sanitarium.com.au/getmedia%2Fae51f174-984f-4a70-ad3d-3f6b517b6da1%2Ffruits-vegetables-healthy-fats.jpg%3Fwidth%3D1180%26height%3D524%26ext%3D.jpg" > ');
}
}
}

welcomeUser();
food();