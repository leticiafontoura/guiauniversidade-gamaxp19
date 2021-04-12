
 
var maxHeight = 0;

$(".card-title").each(function(){
   if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
});

