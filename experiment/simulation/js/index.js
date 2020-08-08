$(document).ready(function () {
    $("#type").change(function () {
        var val = $(this).val();
        if (val == "item0") {
            $("#quantity0").html("<option value='ak0'>2</option>");
            $("#measure0").html("<option value='AKM0'>grams</option>");
        } else if (val == "item1") {
            $("#quantity0").html("<option value='ak2'>5</option>");
            $("#measure0").html("<option value='AKM1'>ml</option>");
        } else if (val == "item2") {
            $("#quantity0").html("<option value='ak3'>250</option>");
            $("#measure0").html("<option value='AKM1'>ml</option>");
        } else if (val == "item3") {
            $("#quantity0").html("<option value='ak1'>2.5</option>");
            $("#measure0").html("<option value='AKM1'>ml</option>");
        }
        else if (val == "item4") {
            $("#quantity0").html("<option value='ak0'>2</option>");
            $("#measure0").html("<option value='AKM1'>ml</option>");
        }
    });
}); 
 function animation() { 
            var img = document.createElement('img'); 
            img.src = 'Images/boiled_glass.png'; 
            document.getElementById('value0').appendChild(img);   
        } 