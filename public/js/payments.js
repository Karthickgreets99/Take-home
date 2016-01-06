//gettting the values from the dropdown and pass as a parameter to REST api to get currency symbol.
$(".dropdown-menu li a").click(function(){
    //getting dropdown selected value and calling the rest API
    $(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');
    $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
    var cur_code = $(this).parents(".dropdown").find('.btn').val($(this).data('value')).context.innerHTML;
    $.ajax({
        url: "/getCurrencySymbol?currencySyml="+cur_code+""
    }).done(function(data) {
            $('#currency_value').attr("placeholder",data+'00.00');
        });
});
//After validation wait for 3 sec display the ajax loader gif and then redirect to sucess
$("#transdetails").submit(function(e) {
    e.preventDefault();
    document.getElementById("overlay").style.display="block";
    setTimeout(function(){
        window.location.href  = '/views/sendsuccess.html';
    }, 3000);
});
