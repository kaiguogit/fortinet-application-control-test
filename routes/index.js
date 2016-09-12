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
  res.render('index');
});

router.get("/api/data",  (req, res) => {
  res.json({data: markATagOnName(data)});
})

router.get("/:id", (req, res) => {
  res.render('show', {signature: mapFieldName(dataField, data[req.params.id])});
});


function markATagOnName(array){
  return array.slice(0).map(function(item, index){
    var newItem = item.slice(0)
    newItem[0] = `<a href=\"/${index}\">${newItem[0]}</a>`
    return newItem;
  })
}

function mapFieldName(fields, values){
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
 return result;
}


module.exports = router;