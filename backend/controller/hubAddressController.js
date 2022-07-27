const hubAddress = require("../models/hubAddressModel");

module.exports = {
  //Create Address
  async createAddress(req, res) {
    const { district, phone, address } = req.body;

    const createAddress = new hubAddress({
      district,
      phone,
      address,
    });
    try {
      await createAddress.save();
      res.status(201).json({
        status: "success",
        date: {
          createAddress,
        },
      });
    } catch (err) {
      res.status(501).json({
        message: err,
      });
    }
  },

  //get all address
  async getHubAddress(req, res) {
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

  //update Address
async updateHubAddress(req, res) {
  if (!req.body) {
    return res.status(400).send({
      message: "hub Address update can not be empty!"
    })
  }
    await hubAddress.updateOne({_id: req.params.id},
      {$set: {
        district: req.body.district,
        phone: req.body.phone, 
        address: req.body.address
      }}
      )
    .then(data => {
      if (!data){
        res.status(404).send({
          message: `Cannot update with id ${id}`
        })
      } else res.send({message: "Hub Address update Successfully"})
    })
    .catch(err => {
      console.log(err)
      res.status(500).send({
        message: "Error updating Hub Address",
        
      })
    })
},

  //Delete Address
  async deleteHubAddress(req, res) {
    const id = req.params.id
    hubAddress.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete with id=${id}, Mybe Not found`
          })
        } else {
          res.send({message: "Hub Address Deleted Sucessfully "})
        }
      })
      .catch(err => {
        res.status(500).send({
            message: `Could not delete with Id = ${id}`
          })
        })
      },

}
