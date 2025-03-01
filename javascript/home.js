function search()
{

    search_input=document.getElementById('search_item').value;
    product=document.querySelectorAll('#product');
    product_name=document.getElementsByTagName('h2');


    if(search_input)
    {
for( let i=0;i<product_name.length;i++)
{
match=product[i].getElementsByTagName('h2')[0];
if(match)
{
    let match_name=match.innerHTML;
           if(match_name.indexOf(search_input)>-1){
            product[i].style.display="";
            
           }
           else 
           {
            product[i].style.display="none";
            
           }
}
   

}

    }
    console.log(product_name);

    
}
