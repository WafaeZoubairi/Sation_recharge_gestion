
const express= require('express');
const mysql = require("mysql");
const db = require("../database/connection"); 
const app= express();

app.use(express.json());
/** 
 * ?  connectivity loss
 * ?  active charging sessions
 * ?  charging sessions
 * ?  total energy  
 * ?  total revenu
 * ?  locations by city
 * ? reserved charge points
 */
let queryExecuterwithreturn = async (query)=>{
    let result= await db.query(query).catch((err) => {
        throw err;
      });
      return result
     }
/** 
 ** connectivity loss get number and duration of break down 
 * */ 
let connectivityL
oss= async(req,res)=>{
    let query="select sum(Nombre_pannes) as pannes,sum(Duree_pannes) as duration from `borne`";
    let panne_info =await queryExecuterwithreturn(query);
    return panne_info
}
/** 
 ** active charging sessions
 * */ 
 let activeChargingSession= async(req,res)=>{
    let query="select count(encours) as in_use  from `borne` where `encours`=1";
    let session_active =await queryExecuterwithreturn(query);
    return session_active
}
/** 
 **charging sessions
 * */ 
 let chargingSession= async(req,res)=>{
    let query="select sum(nombre_sessions) as sessions  from `borne`";
    let allSessions =await queryExecuterwithreturn(query);
    return allSessions
}
/** 
 ** total energy  
 * */ 
 let totalEnergy  = async(req,res)=>{
    let query="select sum(Puissance) as total  from `borne`";
    let total =await queryExecuterwithreturn(query);
    return total
}
/** 
 ** total revenu  
 * */ 
 let totalRevenu  = async(req,res)=>{
    let query="select sum(revenu_borne) as revenues  from `borne`";
    let revenus =await queryExecuterwithreturn(query);
    return revenus
}
/** 
 **   locations by city  
 * */ 
 let locations  = async(req,res)=>{
    let query="select localisation,count(localisation) as number from `borne` group by localisation ";
    let cities =await queryExecuterwithreturn(query);
    return cities
}
/** 
 ** reserved charge points
 * */ 
 let reservedBornes= async(req,res)=>{
    let query="select  count(Reservee) as reserved from `borne` where Reservee=1";
    let reserved =await queryExecuterwithreturn(query);
    return reserved}
    /*** get all statics in one fct** */
    let statics =async (req,res)=>{
   let panne_info= await connectivityLoss()
   let  session_active= await activeChargingSession()
   let allSessions= await chargingSession()
   let totalE= await totalEnergy()
   let revenus= await totalRevenu()
   let cities= await locations()
   let reserved = await reservedBornes()
   res.json({panne_info,session_active,allSessions,totalE,revenus,cities,reserved})
    }
module.exports = {statics};


    
    
