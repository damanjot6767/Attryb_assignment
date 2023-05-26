const {oemSpecsModel }  = require("../models")
const mongoose = require("mongoose")
const dotenv = require("dotenv");
dotenv.config();


module.exports ={

    fetchSpecies : async (req, res) => {
        try{
           const result = await oemSpecsModel.find();
           res.json({status:"success", data: result});
        }
        catch(err){
            console.log(err.message)
            res.status(400).json({error: err.message})
        }
    },

    filterSpecies : async(req, res)=>{
        const { name, year } = req.query;
      const query = {};

    if (name) {
    query.name = { $regex: name, $options: 'i' };
    }

    if (year) {
    query['models.year'] = parseInt(year);
    }

  try {
    const carManufacturers = await oemSpecsModel.find(query);
    res.json({status:"success", data: carManufacturers});
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
    },
}