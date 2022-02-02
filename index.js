// $(".certificate-data3").hover
// {
//  ( ".websitecertificatebtn").opacity= 1;
// }

// $(".certificate-data3").hover(function(){
//     $("websitecertificatebtn").css("opacity","1");
//   });


//   $(document).ready(function () {
//     $(".certificate-data3").on('mouseenter', "websitecertificatebtn", function () {
//         $(this).find(":button").show();
//     }).on('mouseleave', "websitecertificatebtn", function () {
//         $(this).find(":button").hide();
//     });
// });

$(document).ready(function () 
{
    $(".btn-webcertificate").on("click",function()
    {
        $("#certificateModal").attr("src","certificates/websitedeveloper.PNG");
        $('#certificateDisplay').modal('show');
    })

    $(".close").on("click",function()
    {
        $('#certificateDisplay').modal('hide');
    })

    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });
});




//// /////////////////////////////////////////
// Display the image of  the project and on hover display some text with opacity 
//  and on click link to the project site


 //Lets have 2 buttton one to project site another to the git hub

//  function webcertificate(certificate)
//  {
//      switch(certificate)
//      {
 
//          case website:
//              $("#certificateModal").css("src","certificates/websitedeveloper");
//              $("#certificateModal").css("opacity","1")
//              break; 
//      }
//  }