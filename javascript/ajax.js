$(document).ready(function(){


   
    /* chaining method  on the same element*/
    $('#studentlist').css("color","red")
    .slideUp(2000)
    .slideDown(2000);
    
    
    
    }
    
     
    );
    function showstudent(){
        $("#studentlist").load('https://mariamamr7.github.io/profile/studentlist.html')
    }
    
    
   