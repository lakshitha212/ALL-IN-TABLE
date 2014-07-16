/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 * chameera.lakshitha212@gmail.com
 */
function checkPaginate(tblId) {
    jQuery('#' + tblId + '_paginate').hide();
    jQuery('#' + tblId + '_info').hide();
    jQuery('#comboId').change(function() {
        if (jQuery('#comboId').val() == 0) {
            jQuery('#' + tblId + '_paginate').hide();
            jQuery('#' + tblId + '_info').hide();
        } else {
            jQuery('#' + tblId + '_paginate').show();
            jQuery('#' + tblId + '_info').show();
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
var setExcell = function(table_id) {
    var uri = '';
    if (navigator.appVersion.indexOf("Win") != -1) {
        uri = 'data:application/vnd.ms-excel;base64,';
    }
    if (navigator.appVersion.indexOf("Linux") != -1) {
        uri = 'data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64,';
    }
    var ele = document.getElementById(table_id);
    if (ele.nodeName == "TABLE") {
        var template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>Worksheet</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>' + document.getElementById(table_id).innerHTML + '</table></body></html>',
                a = document.createElement('a');
        a.href = uri + window.btoa(unescape(encodeURIComponent(template)));
        a.setAttribute('download', 'a.xlsx');
        a.click();
    } else {
        alert('Not a table');
    }
}

