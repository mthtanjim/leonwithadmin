const productsSchema = require("../models/productsModel");

module.exports = {
  async createProducts(req, res) {
    const { title, description, date, catagory } = req.body;

    const createProducts = new productsSchema({
      catagory,
      title,
      description,
      date,
    });

    console.log(productsSchema);
    try {
      await createProducts.save();
      res.status(201).json({
        status: "success",
        date: {
          productsSchema,
        },
      });
    } catch (err) {
      res.status(501).json({
        message: err,
      });
    }
  },
  async getProducts(req, res) {
    const posts = await productsSchema.find({});
    try {
      res.status(200).json({
        status: "success",
        data: {
          posts,
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
