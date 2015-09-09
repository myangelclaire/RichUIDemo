//
//Register Control Event
// CollapsibleTab Events
//折り畳み
//
//
//
$(function () {

    $("img[title='Collapse this tab']").click(function () {

        var childId = $(this).attr("id").replace("_Expander", "");

        var selector = "table[id='" + childId + "']"

        var c = $(selector);
        var d_h = $(selector).parent();

        if (!d_h.attr("hh") || d_h.attr("hh") == 0) {
            d_h.hide();
            d_h.attr("hh", 1);

            $(this).removeClass();
            $(this).addClass("ms-crm-InlineTabExpander ms-crm-ImageStrip-tab_right");

        } else {
            d_h.attr("hh", 0);
            d_h.show();

            $(this).removeClass();
            $(this).addClass("ms-crm-InlineTabExpander ms-crm-ImageStrip-tab_down");
        }

    });

})