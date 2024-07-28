const mongoose = require('mongoose');

const Connection = async (USERNAME, PASSWORD) => {
  console.log(USERNAME, PASSWORD);
  try {
    await mongoose.connect(
      `mongodb+srv://${USERNAME}:${PASSWORD}@homeservice.mfeasya.mongodb.net/?retryWrites=true&w=majority&appName=HomeService`
      // `mongodb+srv://${USERNAME}:${PASSWORD}@carinventory.uifktpm.mongodb.net/?retryWrites=true&w=majority&appName=carInventory`
      // `mongodb+srv://${USERNAME}:${PASSWORD}@homeservercluster.gfaqvkz.mongodb.net/?retryWrites=true&w=majority&appName=HomeServerCluster`
    );
    console.log('db is connected successfully');
  } catch (error) {
    console.log(`error in connect with db ${error}`);
  }
};
module.exports = Connection;
