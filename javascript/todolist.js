const inputbox=document.getElementById('input_box');
const list_conainer=document.getElementById('list_conainer');


function  addtask()
{
    if(inputbox.value==='')
    {
       alert('you should enter task');
    }else{
        let li=document.createElement('li');
        li.innerHTML=inputbox.value;
        list_conainer.appendChild(li);
        let span=document.createElement('span');
        //Multiplication Sign  Unicode Character
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputbox.value="";
}

list_conainer.addEventListener('click',function(e){
    if(e.target.tagName==='LI')
    {
        e.target.classList.toggle('checked');
    }else if(e.target.tagName==='SPAN')
    {
        e.target.parentElement.remove();
    }
})