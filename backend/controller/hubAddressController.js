const {hubAddress, createAddress} = require("../models/hubAddModel");

module.exports = {
  async createAddress(req, res) {
    const { title, description, date, catagory } = req.body;

    const createAddress = new hubAddress({
      catagory,
      title,
      description,
      date,
    });

    console.log(hubAddress);
    try {
      await createAddress.save();
      res.status(201).json({
        status: "success",
        date: {
          hubAddress,
        },
      });
    } catch (err) {
      res.status(501).json({
        message: err,
      });
    }
  },
  async hubAddress(req, res) {
    const address = await hubAddress.find({});
    try {
      res.status(200).json({
        status: "success",
        data: {
          address,
        },
      });
    } catch (err) {
      res.status(501).json({
        message: err,
      });
    }
  },
  async getSingleProduct(req, res) {
    const signlProduct = await findById();
    try {
      res.status(201).json({
        status: "success",
        data: {
          signlProduct,
        },
      });
    } catch (err) {
      res.status(501).json({
        status: "faild",
        message: err,
      });
    }
  },
};
