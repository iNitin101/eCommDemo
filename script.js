var tv = document.getElementsByClassName('item-name');
var headingMsg = document.getElementById('heading');

var searchButton= document.querySelector('#searchButton');

var searchResult="";


searchButton.addEventListener("click", function(){

    searchResult=document.getElementById('search-bar').value;

    if(searchResult!="")
    {
        headingMsg.classList.add('hide');

        for(i=0;i<tv.length;i++)
        {
            tv.item(i).textContent=searchResult;
        }
    }
    else
    {
        headingMsg.textContent="You Must enter a name first";
    }
});





