
const express= require('express');
const mysql = require("mysql");
const db = require("../database/connection"); 
const app= express();

app.use(express.json());
/** 
 * ?  create cpo
 * ? delete cpo
 * ? update cpo
 * ? get cpo by id
 * ? get all cpos
 * ? get borns of specified cpo
 */
/**
 **function that executes any query
  */
 let queryExecuterNOreturn = async (query)=>{
 await db.query(query).catch((err) => {
    throw err;
  });
  
 }
 let queryExecuterwithreturn = async (query)=>{
   let result= await db.query(query).catch((err) => {
       throw err;
     });
     return result
    }
/***/
let addCPO=async(req,res)=>{
    console.log("called ",req.body)
    let nom=req.body.nom;
    let prenom=req.body.prenom;
    let email=req.body.email;
    let password=req.body.password;
    let ville=req.body.ville;
    let role =req.body.role;
    let query="INSERT INTO `user` (`nom`,`prenom`,`email`, `password`,`ville`, `role`) VALUES ('"+nom+"','"+prenom+"','"+email+"','"+password+"','"+ ville+"','"+ role+"')";
     await queryExecuterNOreturn(query);
    res.json({message :"success add"});

}
let updateCPO=async(req,res)=>{
    console.log(req.body);
    let nom=req.body.nom;
    let prenom=req.body.prenom;
    let email=req.body.email;
    let password=req.body.password;
    let ville=req.body.ville;
    let id =req.params.id;  
    let query="update `user` set `email` ='"+email+"', `password`='"+password+"' , `nom`='"+nom+"' , `prenom`='"+prenom+"' , `ville`='"+ville+"' where `id` ='"+id+"'";
     await queryExecuterNOreturn(query);
    res.json({message :"success update"});

}

let deleteCPO=async(req,res)=>{
    let id =req.params.id;
    console.log('id is ', id)
    let query="delete from  `user` where `id` ="+id;
     await queryExecuterNOreturn(query);
    res.json({message :"success delete"});

}
let getCPOById= async (req,res)=>{
    let id =req.params.id;
    console.log('id',id);
    let query="select * from `user` where `id` ='"+id+"'";
    let user =await queryExecuterwithreturn(query);
    console.log('user',user);
    res.json({user});
    

}
let getCPOBornes= async (req,res)=>{
    let id =req.params.id;
    let query="select * from `borne` where `id_CPO` ='"+id+"'";
    let user =await queryExecuterwithreturn(query);
    res.json({user});
    

}
let getAllCPO= async (req,res)=>{
    let query="select * from `user`";
     let users=await queryExecuterwithreturn(query);
     console.log(users)
    res.json({users});
}
let addBorne= async (req,res)=>{
   



}





module.exports = {getCPOBornes,addCPO,updateCPO,deleteCPO,getCPOById,getAllCPO};