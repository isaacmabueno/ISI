jQuery(function ($) {
    $(document).ready(function() {
        $(".call-now").click(function() {
            $(this).css("background", "#4a4a4a").text('504.347.5600');
        });
        $(".one a").hover(
            function() {
                $('.one img').attr("src", "/wp-content/uploads/2018/05/non-destructive-testing-icon.png");
            },
            function() {
                $('.one img').attr("src", "/wp-content/uploads/2018/05/non-desctuctive-testing-hover.png");
            }
            );

            // $('#team-hover .et_pb_module').hover(function() {
            //         $(this).css("background", "#ee3426").toggle;
            //     }
            // );
    });
});
