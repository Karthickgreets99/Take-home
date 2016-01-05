
var _ = require('underscore');


function renderJSON(req, res) {
    if(req.model.error){
        responseJSON(req,res);

    }else{
        res.json(req.model);
    }
}


function responseJSON(req,res){
    var err = req.model.error;
    //var render = req.model.render;

    req.model.statusCode = err.statusCode;
    //req.model.error = err;
    req.model.status = err.status;
    req.model.field = err.field;

    if(err.statusCode == 500){
        req.model.viewName = 500;
        req.model.message = 'Internal Server Error';
        res.status(req.model.viewName).json(req.model);


    }
    if(err.statusCode == 403){
        req.model.viewName = 403;
        req.model.message = 'Forbidden Error!';
        res.status(req.model.viewName).json(req.model);
    }
    if(err.statusCode == 404){
        req.model.viewName = 404;
        req.model.message = 'Access Denied!';
        res.status(req.model.viewName).json(req.model);

        //req.model.data = './errors/404';
        //res.redirect('/errors/404');
        //res.render(req.model.viewName, req.model);
        //res.render('errors/404');
        //res.json(req.model.viewName, req.model);
    }
    if(err.statusCode == 503){
        req.model.viewName = 503;
        req.model.message = 'Service Unavailable!';
        res.status(req.model.viewName).json(req.model);
    }
}