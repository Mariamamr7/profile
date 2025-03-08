const input_box=document.getElementById('input_box');
const  listcotainer=document.getElementById('listcotainer');


function add_task()
{
  task=document.getElementById('input_box').value;

  if(task=="")
  {
    alert('please enter the task');
  }
  else{
     var li=document.createElement('li');
  
     li.innerHTML=input_box.value;
    // <li>task4</li>
    listcotainer.appendChild(li);
    //<span> X</span>

    var span=document.createElement('span');
      span.innerHTML="\u00d7";
      li.appendChild(span);
  }
 
  document.getElementById('input_box').value="";
}

listcotainer.addEventListener('click',function(e){


  if(e.target.tagName==="LI")
  {

    e.target.classList.toggle('checked');
  }
   else if(e.target.tagName==="SPAN")
   {

    e.target.parentElement.remove();
   }
  
});
 

