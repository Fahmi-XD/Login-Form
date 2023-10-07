$("document").ready(function () {
    $("#reg").click(() => {
        $(".box-blur").addClass("reg-page");
    });

    $("#log").click(() => {
        $(".box-blur").removeClass("reg-page");
    });
});
