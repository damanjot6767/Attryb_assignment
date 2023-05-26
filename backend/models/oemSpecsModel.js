const mongoose = require("mongoose")

const oemSpecsSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    foundedYear: {
      type: Number,
      required: true
    },
    country: {
      type: String,
      required: true
    },
    headquarters: {
      type: String,
      required: true
    },
    website: {
      type: String,
      required: true
    },
    logo: {
      type: String,
      required: true
    },
    models: [
      {
        name: {
          type: String,
          required: true
        },
        year: {
          type: Number,
          required: true
        },
        segment: {
          type: String,
          required: true
        },
        price: {
          type: Number,
          required: true
        }
      }
    ]
  },{timestamps:true})

module.exports = mongoose.model('oem_Specs', oemSpecsSchema);