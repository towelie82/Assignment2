
var pages =["#mainpage", "#mousekeyboard", "#headphones", "#desktopsandlaptops", "#consoles", "#mobilephones", "#cameras"];
var currentPage = pages[0];
$(document).ready(function() {
   alert('ready');
var newPage = getPage(window.location.hash);
    render(newPage);    
   $('ul.mainnavigation li a').click(function(e){
       e.preventDefault();
       var newPage = $(this).attr('href');
       window.location.hash=newPage;
   });
   $(window).on('hashchange', function(){
       var newPage = getPage(window.location.hash);
       render(newPage);
   });
	$("#consoles").click(function(){
        category("Game Console");
    });
	$("#phones").click(function(){
        category("Phone");
    });
	$("#cameras").click(function(){
        category("Camera");
    });
	$("#desktoplaptop").click(function(){
        category("Desktop - Laptop");
    });
	$("#keyboardmice").click(function(){
        category("Keyboard - Mouse");
    });
	$("#headphones").click(function(){
        category("Headphones");
    });

});
 function render(newPage){
    if (newPage == currentPage) return;
    $(currentPage).hide();
    $(newPage).show();
    currentPage = newPage; 
}
function getPage(hash){
   var i = pages.indexOf(window.location.hash);
   return i < 1 ? pages[0] : pages[i];
}

function search(str) 
{
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function()
	{
		if (this.readyState == 4 && this.status == 200)
		{
			document.getElementById("results").innerHTML = this.responseText;
		}
	};
	xmlhttp.open("GET", "search.php?query=" + str, true);
	xmlhttp.send();
}
function category(str) 
{
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function()
	{
		if (this.readyState == 4 && this.status == 200)
		{
			document.getElementById("results").innerHTML = this.responseText;
		}
	};
	xmlhttp.open("GET", "category.php?query=" + str, true);
	xmlhttp.send();
}

	