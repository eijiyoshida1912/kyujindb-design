// トップの地域アコーディオン
$(function() {
    $(".top .pref__box--sp .pref__area").on("click", function() {
        $(this).next().slideToggle();
    });
});

// SP検索結果ページの条件選択タブ
$(function() {
    $(".search_result #search_tabs > li").on("click", function() {
        var id = $(this).attr('id');
        var targetId = "#result--" + id;
        $(".search_result #search_tabs > li").removeClass("active");
        $(this).addClass("active");
        $(".search_result .search_buttons__condition_list").removeClass("open");
        $(".search_result " + targetId).addClass("open");
    });
});
