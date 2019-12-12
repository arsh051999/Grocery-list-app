

//this creates a new ul element
var ul= document.createElement("ul");

//this stores a reference to my div element within my doucment
var div =document.querySelector("#list");

function addItemToList()
{
  var txtBox= document.querySelector("#val");
  var itemVal= txtBox.value;

 // alert(itemVal);

  txtBox.value="";

  //this creates a new li element
  var li = document.createElement("li");

  //this assigns the text of the li to the value that the user entered in the form
  li.innerHTML=itemVal;


  //this appends the li element to the ul element
  ul.appendChild(li);

  div.appendChild(ul);

  

}


document.querySelector("#addBut").addEventListener("click",addItemToList);
