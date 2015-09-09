//
//Register Control Event
// DateBox Events
//
//
$(function () {
    var parent = $("td[class='DateTimeUI_RenderDateControl_td ms-crm-Input-Container']");
    var dtCtrl = parent.children("input");

    dtCtrl.datepicker(
    {
        changeYear: false,
        changeMonth: false,
        dateFormat: 'yy/mm/dd',
        constrainInput: true,
        hideIfNoPrevNext: false,
        prevText: "<<",
        nextText: ">>",
        showOtherMonths: true,
        buttonImageOnly: true,
        currentText: "Now"
    });
    dtCtrl.attr("hh", 0);

    $("img[title='Select date']").click(function () {
        var meCon = $(this).parent().parent().children("td[class='DateTimeUI_RenderDateControl_td ms-crm-Input-Container']");
        var me = meCon.children("input");

        if (me.attr("hh") == 0) {
            me.datepicker("show");
            me.attr("hh", 1);
        } else {
            me.datepicker("hide");
            me.attr("hh", 0);
        }
    });

})