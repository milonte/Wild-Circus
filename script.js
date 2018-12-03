$(document).ready(function(){ 
  
    
    $("#performances p").prepend("<hr />");
    $("#performances p").append("<hr />");
    $("#performances h3").after("<hr />");
    
   $("#performances p").hide();
    
    $("#performances li").hover(function() {
        $(this).find("p").fadeToggle(500); 
    });
    
    
    
    $('#erasebutton').click(function(){ 
        $('#messagearea').val("") ;
    });
    
    $('#sendbutton').click(function(){
        
        if( $('#messagearea').val() !== "" ) {
            $('#messagesendalert').html("<p>Message sended ! Thank you !</p>");
        }
        else {
            $('#messagesendalert').html("<p>Error : empty message !</p>");
        }
        
     });
    
    var currentDay = new Date();
    var th_style = "rgba(255,150,0,80%)";
        
    var Table_day_color = function(week) {
        if(week === true) { 
            $("#day_prices").text("Normal prices today.");
            $("#prices tbody tr:nth-child(1) th").css("background-color", th_style);
            $("#prices tbody tr:nth-child(1) td").css("background-color", th_style);
        }
        else {
            $("#day_prices").text("Special prices for adults and children !");
            $("#prices tbody tr:nth-child(2) th").css("background-color", th_style);
            $("#prices tbody tr:nth-child(2) td").css("background-color", th_style);
        }
    };
        
    
    
    switch(currentDay.getDay())
    {
        case 0:
            $("#day").text("Sunday");
            
            Table_day_color(false);
            break;
        case 1:
            $("#day").text("Monday");
            Table_day_color(true);
            break;
        case 2:
            $("#day").text("Tuesday");
            Table_day_color(true);
            break;
        case 3:
            $("#day").text("Wednesday");
            Table_day_color(true);
            break;
        case 4:
            $("#day").text("Thursday");
            Table_day_color(true);
            break;
        case 5:
            $("#day").text("Friday");
            Table_day_color(true);
            break;
        case 6:
            $("#day").text("Saturday");
            Table_day_color(false);
            break;
        default:
            console.log("Oskur");
		}
   
});