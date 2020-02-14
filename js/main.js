// トップの地域アコーディオン
$(function() {
    $(".top .pref__box--sp .pref__area").on("click", function() {
        $(this).next().slideToggle();
    });
});
