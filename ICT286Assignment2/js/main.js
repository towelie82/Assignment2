
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