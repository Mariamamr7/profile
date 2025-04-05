$(document).ready(function(){

    $('#div1').animate({
        left:'0px',
        opacity:'0.8',
       
        width:'-=150px'
        
        
            },'slow');

$('#div1').animate({
        left:'0px',
        opacity:'0.6',
        
        width:'-=150px'
                
                
         },'slow');
$('#div1').animate({
             left:'0px',
             opacity:'0.3',
           
             width:'-=150px'
                        
                        
                            },'slow');


$('#div1').animate({
    left:'0px',
    opacity:'0.9',
    height:'300px',
    width:'800px',
               
    fontSize:'45px'         
                   },'slow');


$('#div1').hide('slow',show())
});



function show()
{
   
    $('#div1').show() ; 
}

// decrease using relative value
function animate_increase(){
    
    $('#div1').animate({
left:'0px',
opacity:'0.5',
height:'+=20px',
width:'+=20px'


    },'slow');

    alert('1111');
}
function animate_decrease(){
    $('#div1').animate({
left:'0px',
opacity:'0.5',
height:'-=20px',
width:'-=20px'


    },'slow');
}