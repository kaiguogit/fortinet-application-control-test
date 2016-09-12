"use strict";

const express = require('express');
const router  = express.Router();
const data = require('../data.js');

const dataField = ["Application Name","Type","Severe Level",
 "Unknown Property","Unknown Property","Time", "Vendor","Vendor website",
 "Network comsuption type","Description",
 "Access Times", "Executable Name", "Available Actions",
 "Unknown Property", "Bytes", "KB", "Brandwidth"]

router.get("/", (req, res) => {
  res.render('index', {signatures: data});
});

router.get("/:id", (req, res) => {
  res.render('show', {signature: mapFieldName(dataField, data[req.params.id])});
});


function mapFieldName(fields, values){
 console.log("values passed in is", values);
 var result;
 if(values){
   result = values.map(function(value, index){
     return {field: fields[index], value: value};
   });
 }else{
   result = fields.map(function(field){
     return {field: field, value: null};
   });
 }
 console.log(result);
 return result;
}
module.exports = router;