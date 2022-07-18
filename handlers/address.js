
const express = require("express")
const dns = require('node:dns');


const getmeip =async (req,res) => {
    const {add} = req.body;
    
  let response = await dns.lookup(add, (err, address, family) => {
        console.log( "address",address);
         return address;
      });

      res.send({response})
}



module.exports = {
    getmeip
}