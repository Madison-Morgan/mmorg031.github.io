$(function(){
    var firstActive = true;

    $.ajax({
        url: "../images/trips",
        success: function (data) {
            $(data).find("a:contains(.jpg)").each(function () {
                var divItem = $("<div></div>").addClass("carousel-item");  
                var divHeader = $("<div></div>").addClass("carousel-caption d-none d-md-block");

                if(firstActive){
                    divItem.addClass("active");
                    firstActive = false;
                }
                var images = $(this).attr("href");
                images = images.substring(1);

                var imgItem = $("<img />").addClass("d-block w-100");
                imgItem.attr("src",images);
                imgItem.attr("alt",images);
                
                var headerTag = $("<h5></h5>").text(images.replace(/_/g," ").replace("images/trips/","").replace(".jpg",""));
                headerTag.addClass("photo-carousel-header");
                divHeader.append(headerTag);

                divItem.append(imgItem);
                divItem.append(divHeader);
                divItem.appendTo('#carousel-inner-photos');

            });
        }
    });

});
