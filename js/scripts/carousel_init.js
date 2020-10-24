$(function(){
    /* <div class="carousel-item active">
        <img class="d-block w-100" src="images/trips/venice.heic" alt="venice.heic">
    </div> */
    var firstActive = true;

    $.ajax({
        url: "./images/trips",
        success: function (data) {
            $(data).find("a:contains(.jpg)").each(function () {
                var divItem = $("<div></div>").addClass("carousel-item");  
                if(firstActive){
                    divItem.addClass("active");
                    firstActive = false;
                }
                // will loop through 
                var images = $(this).attr("href");
                images = images.substring(1);

                var imgItem = $("<img />").addClass("d-block w-100");
                imgItem.attr("src",images);
                imgItem.attr("alt",images);

                divItem.append(imgItem);
                divItem.appendTo('#carousel-inner-photos');

            });
        }
    });

});
