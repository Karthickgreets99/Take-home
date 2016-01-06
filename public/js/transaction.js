$(document).ready(function(){
    $.ajax({
        url: "/transactionHistory"
    }).done(function(data) {
            var len = data.data.length;
            for (var i = 0; i < len; i++) {
                tr = $('<tr/>');
                tr.append("<td>" + data.data[i].date + "</td>");
                tr.append("<td>" + data.data[i].name + "</td>");
                tr.append("<td>" + data.data[i].currency + "</td>");
                $('tbody').append(tr);
            }
        });
});