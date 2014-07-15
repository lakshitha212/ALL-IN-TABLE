/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 * chameera.lakshitha212@gmail.com
 */
function checkPaginate(tblId) {
    jQuery('#'+tblId+'_paginate').hide();
    jQuery('#'+tblId+'_info').hide();
    jQuery('#comboId').change(function() {
        if (jQuery('#comboId').val() == 0) {
            jQuery('#'+tblId+'_paginate').hide();
            jQuery('#'+tblId+'_info').hide();
        } else {
            jQuery('#'+tblId+'_paginate').show();
            jQuery('#'+tblId+'_info').show();
        }
    });
}
function setupDataTableSettings(searchableText, paginateDiv, maxLength, tblId, printId, excelId) {
    checkPaginate(tblId);
    if (excelId == false) {
        $('.excelClz').hide();
    }
    if (printId == false) {
        $('.printClz').hide();
    }
    if (paginateDiv == false) {
        $('.dataTables_paginate ').remove();
    }
    if (searchableText == false) {
        $('.dataTables_filter ').remove();
    }
    var option = ['<option value="0">Select Count</option>'];
    for (var index = 0; index < maxLength.length; index++) {
        option.push('<option value="' + maxLength[index] + '" >' + maxLength[index] + '</option>');
    }
    $('#comboId').append(option.join());
    $('#comboId').css('width', '120px');
    var btn = document.createElement("BUTTON");
    var t = document.createTextNode("PRINT");
    btn.appendChild(t);
    document.getElementById(tblId).setAttribute("id", "dataTableId");
}
function setPrint(tableId) {
    var page = '<html><table border="1" style="border-spacing:0">' + $('#' + tableId).html() + '</table></html>';
    w = window.open();
    w.document.write(page);
    w.print();
    w.close();

}
function setExcell(table_id) {
    var page = '<html><table border="1" style="border-spacing:0">' + $('#' + table_id).html() + '</table></html>';
    window.open('data:application/vnd.ms-excel,' + encodeURIComponent(page));
    e.preventDefault();
}

