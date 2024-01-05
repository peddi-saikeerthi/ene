
const SensorData = require("../models/sensordata");


const sensordataHandler = async (req, res, next) => {
  
  const {current,power,energy  } = req.body;


  
  

  let exists = false;
  let sensordata;
  try {
    sensordata = await SensorData.find();
    if (sensordata.length == 1) {
      exists = true;
    }

  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Updating Data Failed",
    });
  }

  if (exists) {
    const result = await SensorData.findOneAndUpdate(
      { _id: sensordata[0]._id },
      {
        current: current,
        power: power,
        energy: energy,
        
      }
    );
  } else {
    try {
      const newSensorData = new SensorData({
        current: current,
        power: current,
        energy: energy,



      });
      await newSensorData.save();
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        message: "Updating Data Failed",
      });
    }
  }

  return res.status(200).json({
    message: "Data updated successfully",
  });
};



const getdataHandler = async (req, res, next) => {
  let sensordata, updatedAtnew;
  try {
    sensordata = await SensorData.find();
    console.log(sensordata);
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Getting Data Failed",
    });
  }
  // if (sensordata.length == 1) {
  //   const updatedAtold = new Date(sensordata[0].updatedAt);
  //   updatedAtnew = addHours(5.511, updatedAtold);
    
  // }

  const data = {
    current: sensordata[0].current,
    power: sensordata[0].power,
    energy: sensordata[0].energy,
   

    
  }
  
  return res.status(200).json(data);
}

exports.sensordataHandler = sensordataHandler;
exports.getdataHandler = getdataHandler;
