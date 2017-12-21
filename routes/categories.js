
const  Category = require('../models/category');
const  jwt = require('jsonwebtoken');
const  config =  require('../config/database');



module.exports = (router) => {

    router.post('/addCategory' , (req , res)=>{
        if(!req.body.name){
            res.status(400).json({success:false , message:'Please provide the category name'});
        }else {
            const categoryObj = new Category({
                name:req.body.name,
                price:req.body.price,
                code:req.body.code,
                categ:req.body.categ,
                mart:req.body.mart,
                description:req.body.description
                // productID:req.body.products
            });


            categoryObj.save((err)=>{
                if(err){
                    res.status(400).json({success:false , message:'error hai'+err});
                }else {
                    res.status(200).json({success:true, message:'Category saved!'});
                }
            })
        }

    });

    router.get('/allCategory' ,(req, res)=>{

        Category.find({} ,(err , category)=>{
            if(err){
                console.log('Error '+err);
            }else {
                if(!category){
                    res.status(400).json({success:false , message:'Not Found'});
                }else {
                    res.status(200).json({success:true , category:category});
                }
            }
        }).sort({_id:-1})
    });

    router.get('/electronics' ,(req, res)=>{
        
                Category.find({categ:'electronics'} ,(err , category)=>{
                    if(err){
                        console.log('Error '+err);
                    }else {
                        if(!category){
                            res.status(400).json({success:false , message:'Not Found'});
                        }else {
                            res.status(200).json({success:true , category:category});
                        }
                    }
                }).sort({_id:-1})
            });


    router.get('/grocery' ,(req, res)=>{
                
                 Category.find({categ:'grocery'} ,(err , category)=>{
                            if(err){
                                console.log('Error '+err);
                            }else {
                                if(!category){
                                    res.status(400).json({success:false , message:'Not Found'});
                                }else {
                                    res.status(200).json({success:true , category:category});
                                }
                            }
                        }).sort({_id:-1})
                    });

     router.get('/clothing' ,(req, res)=>{
                        
                         Category.find({categ:'clothing'} ,(err , category)=>{
                                    if(err){
                                        console.log('Error '+err);
                                    }else {
                                        if(!category){
                                            res.status(400).json({success:false , message:'Not Found'});
                                        }else {
                                            res.status(200).json({success:true , category:category});
                                        }
                                    }
                                }).sort({_id:-1})
                            });
        

    router.post('/list' ,(req, res)=>{
                                
                                 Category.find({code:req.body.code ,mart:req.body.mart}, {_id:0, name: 1, price: 1 } ,(err , category)=>{
                                            if(err){
                                                console.log('Error '+err);
                                            }else {
                                                if(!category){
                                                    res.status(400).json({success:false , message:'Not Found'});
                                                }else {
                                                    console.log(category);
                                                    res.status(200).json({success:true , category:category});
                                                }
                                            }
                                        }).sort({_id:-1})
                                    });
     
    
                                            
                                            


    return router;
}
