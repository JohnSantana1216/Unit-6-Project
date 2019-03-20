$(".games").click(function() {
    var name=$(".name").val();
    var video=$(".video").val();
    var day=parseInt($(".day").val());
    console.log(day);
    var results=365*31*day;
    console.log(results);
    
    $(".results").text("Hey " +  name + " you'll be playing " +  video + " for " +  results + " hours, in 2050 ");
});