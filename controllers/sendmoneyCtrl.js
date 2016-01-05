var fs = require ('fs');


exports.sendMoneyDetails = function (req,res){

    //res.sendfile('sendmoney.html', { root: __dirname + "/relative_path_of_file" } );

    console.log(1)
    data = fs.readFile('/Documents/PayPal-payments/Take-home/views/sendmoney.html',   function (err, data) {
        res.setHeader('Content-Type', 'text/html');
        res.send(data);
    });
    console.log(2);

}

