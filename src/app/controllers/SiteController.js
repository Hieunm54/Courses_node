
// import express from 'express';

class SiteController{
    //[GET] /
    index(req,res){
        res.render('home');
    }

    //[GET] /sponsors
    sponsors(req,res){
        res.render('sponsors');
    }

    //[GET] /search
    search(req,res){
        res.render('search');
    }

}

export default SiteController;
