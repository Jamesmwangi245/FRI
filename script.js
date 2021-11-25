$('.textDesign').hide();
if($('.imgDesign').on('click', function(){
    $('.textDesign').show();
    $('.imgDesign').hide();
}));
if($('.textDesign').on('click', function(){
    $('.textDesign').hide();
    $('.imgDesign').show();
}))
$('.textDevelopment').hide();
if($('.imgDevelopment').on('click', function(){
    $('.textDevelopment').show();
    $('.imgDevelopment').hide();
}));
if($('.textDevelopment').on('click', function(){
    $('.textDevelopment').hide();
    $('.imgDevelopment').show();
}))














$(document).ready(function(){
    $("#img").click(function(){
    $(".ddesign").slideToggle();
    $("#img").slideToggle();
    });
    $(".ddesign").click(function(){
    $("#img").slideToggle();
    $(".ddesign").slideToggle();
    });
     $("#development").click(function(){
      $(".development").slideToggle();
      $("#development").toggle();
     });
     $(".development").click(function(){
      $("#development").slideToggle();
      $(".development").toggle();
     });
     $("#productdevelopment").click(function(){
      $(".productmanagement").slideToggle();
      $("#productdevelopment").toggle();
     });
     $(".productmanagement").click(function(){
      $("#productdevelopment").slideToggle();
      $(".productmanagement").slideToggle();
     });
     //hover function for the portfolio images
     $("#work1").hover(function(){
      $(".blackstudio").toggle();
     });
     $("#work2").hover(function(){
      $(".brown").toggle();
     });
     $("#work3").hover(function(){
      $(".ontario").toggle();
     });
     $("#work4").hover(function(){
      $(".Black").toggle();
     });
     $("#work5").hover(function(){
      $(".elena").toggle();
     });
     $("#work6").hover(function(){
      $(".button").toggle();
     });
     $("#work7").hover(function(){
      $(".burned").toggle();
     });
     $("#work8").hover(function(){
      $(".giraffe").toggle();
     });
   function validateForm() {
   var a=document.forms["contactUs"]["NAME"].value;
   if (a==null || a=="")
     {
     alert("Name must be filled out");
     return false;
     }
   var b=document.forms["contactUs"]["EMAIL"].value;
   if (b==null || b=="") {
     alert("Email must be filled out");
     return false;
     }
     }
   })

   
   
   
   
   