$(document).ready(function()
{
   /* $('#hnew').click( function()
    {

    alert(1);
    $('bnews').slideDown('slow');
    });
    */
});


function slide_up()
{


    $('#slid_up').slideUp('slow');
}

function slide_down()
{
    alert(1);

    $("#slide_down").slideDown(5000);

    


}

function slide_toggle()
{


    $('#slid_toggle').slideToggle(5000);
}


function stop_effect()
{
    
    $('#slid_toggle').stop();}