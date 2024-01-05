const mongoose = require("mongoose");

const Schema = mongoose.Schema;


 
const sensordataSchema = new Schema(
    {
      current: {
        type: Schema.Types.Number,
        required: true,
      },
      power: {
        type: Schema.Types.Number,
        required: true,
      },
  
      energy: {
        type: Schema.Types.Number,
        required: true,
      },
    },
    {
      timestamps: true,
    }
  );
  

module.exports = mongoose.model("sensordata", sensordataSchema);
