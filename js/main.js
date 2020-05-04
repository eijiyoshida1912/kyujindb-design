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
        $(".search_buttons__submit_wrap").show();
        $(".search_result .search_buttons__condition_list").removeClass("open");
        $(".search_result " + targetId).addClass("open");
    });
});

// 企業詳細ページのページ選択タブ
$(function() {
    $(".detail .tabs__list > li").on("click", function() {
        var id = $(this).attr('id');
        var targetId = "#" + id + "_tab_page";
        console.log(targetId);
        $(".detail .tabs__list > li").removeClass("tabs__this");
        $(this).addClass("tabs__this");
        $(".detail .tab_pages").removeClass("open");
        $(".detail " + targetId).addClass("open");
    });
});

// 企業詳細ページ内「カテゴリから・回答者から」切り替えタブ
$(function() {
    $(".detail .kuchikomi_top__tabs > li").on("click", function() {
        var id = $(this).attr('id');
        var targetId = "#" + id + "_page";
        console.log(targetId);
        $(".detail .kuchikomi_top__tabs > li").removeClass("active");
        $(this).addClass("active");
        $(".detail .kuchikomi_top_pages").removeClass("open");
        $(".detail " + targetId).addClass("open");
    });
});

// 企業詳細ページの報告するモーダル
$(function() {
    $(".detail .report > a").on("click", function() {
        $(".report_modal").fadeIn();
        $("body").addClass("modal_open");
        return false;
    });
    $(".report_modal__cancel").on("click", function() {
        $(".report_modal").fadeOut();
        $("body").removeClass("modal_open");
        return false;
    });
});

// 口コミ投稿ページのSPモーダル
$(function() {
    $(".post_kuchikomi .post_form__modal_link > a").on("click", function() {
        $(".post_kuchikomi .check_modal").fadeIn();
        $("body").addClass("modal_open");
        return false;
    });
    $(".post_kuchikomi .check_modal__close").on("click", function() {
        $(".post_kuchikomi .check_modal").fadeOut();
        $("body").removeClass("modal_open");
        return false;
    });
});
