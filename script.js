
let current_question=0;

let point=0;

function askquestion()
{
    document.getElementById('answer').innerHTML=""; 
    var question=[];

    question[0]="which color is green?";

    question[1]="which color is blue?";

    question[2]="which color is yellow?";

    question[3]="which color is purple?";

    question[4]="which color is black?";

    question[5]="which color is brown?";

    question[6]="which color is pink?";

    question[7]="which color is orange?";


    document.getElementById('question').value=question[current_question];


}

function answer(choice)
{

   switch(choice)
   {

    case "green":
        if(current_question==0)
        {

            document.getElementById('answer').innerHTML="you are correct ";
            current_question+=1;
            point+=1;


        }
        else
        {

            document.getElementById('answer').innerHTML="you are false try again"; 
            
        }

    break;

    case  "blue":

    if(current_question==1)
        {

            document.getElementById('answer').innerHTML="you are correct  ";
            current_question+=1;
            point+=1;
        }
        else
        {

            document.getElementById('answer').innerHTML="you are false try again"; 
            
        }



    break;

    case  "yellow":

    if(current_question==2)
        {

            document.getElementById('answer').innerHTML="you are correct ";
            current_question+=1;

        }
        else
        {

            document.getElementById('answer').innerHTML="you are false try again"; 
            
        }



    break;

    case "purple":
        if(current_question==3)
        {

            document.getElementById('answer').innerHTML="you are correct ";
            current_question+=1;
            point+=1;


        }
        else
        {

            document.getElementById('answer').innerHTML="you are false try again"; 
            
        }

    break;

    case "black":
        if(current_question==4)
        {

            document.getElementById('answer').innerHTML="you are correct ";
            current_question+=1;
            point+=1;


        }
        else
        {

            document.getElementById('answer').innerHTML="you are false try again"; 
            
        }

    break;

    case "browen":
        if(current_question==5)
        {

            document.getElementById('answer').innerHTML="you are correct ";
            current_question+=1;
            point+=1;


        }
        else
        {

            document.getElementById('answer').innerHTML="you are false try again"; 
            
        }

    break;

    case "pink":
        if(current_question==6)
        {

            document.getElementById('answer').innerHTML="you are correct ";
            current_question+=1;
            point+=1;


        }
        else
        {

            document.getElementById('answer').innerHTML="you are false try again"; 
            
        }

    break;

    case "orange":
        if(current_question==7)
        {

            document.getElementById('answer').innerHTML="you are correct ";
            current_question+=1;
            point+=1;


        }
        else
        {

            document.getElementById('answer').innerHTML="you are false try again"; 
            
        }

    break;


   }

}