/// <reference path="jquery_1.11.0.min.js" />
/// <reference path="json2.js" />


function checkSave(context) {

    var grid = $('#JQGridTable', document.frames('WebResource_task1470').document);

    var data = grid.getRowData();

    var list1 = JSON.parse(Xrm.Page.getAttribute("new_data").getValue());

    if (list1 && list1.updateEntities.length > 0) {
        $.each(list1.updateEntities, function (n) {

            //alert(JSON.stringify(list1.updateEntities[n]));

            $.each(data, function (m) {

                //alert(list1.updateEntities[n].new_used_vehicle_no + "||" + data[m].new_custom_filed1);

                if (list1.updateEntities[n].new_used_vehicle_no == data[m].new_custom_filed1) {
                    alert(list1.updateEntities[n].new_used_vehicle_no + " is already exist in another grid.");
                    context.getEventArgs().preventDefault();
                    return false;
                }
            });
        });
    }

    
}
