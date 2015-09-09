$(function () {
    $("#DisableBtn").click(function () {
        DisableAllInput(document);
        DisableAllInput(document.frames("myIframe").document);
    });
    $("#EnableBtn").click(function () {
        EnableAllInput(document);
        EnableAllInput(document.frames("myIframe").document);
    });

})

//
//DisableAllControls
//
function DisableAllInput(doc) {
    $("input:text", doc).attr("disabled", true);
    $("input:radio", doc).attr("disabled", true);
    $("input:checkbox", doc).attr("disabled", true);
    $("textarea", doc).attr("disabled", true);
    $("select", doc).attr("disabled", true);
    $("img", doc).attr("disabled", true);
    $("a", doc).attr("disabled", true);
    $("span", doc).attr("disabled", true);
}

//
//EnableAllControls
//
function EnableAllInput(doc) {
    $("input:text", doc).attr("disabled", false);
    $("input:radio", doc).attr("disabled", false);
    $("input:checkbox", doc).attr("disabled", false);
    $("textarea", doc).attr("disabled", false);
    $("select", doc).attr("disabled", false);
    $("img", doc).attr("disabled", false);
    $("a", doc).attr("disabled", false);
    $("span", doc).attr("disabled", false);
}