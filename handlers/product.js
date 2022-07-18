const Product = require("../Database/products");

async function getAllProducts(req, res) {
  const product = await Product.find();

  res.send({
    data: product,
  });
}

async function createProduct(req, res) {
    const { product } = req.body;
    
    await Product.create(product);
    
  res.send({
    message: "product created",
    data: product,
  });
}

async function deleteProduct(req, res) {
    const {id} = req.params;
    
    await Product.findOneAndDelete(id);
    
    res.send({
        message : "product deleted"
    })
}
    const updateProduct = async (req, res) => {
        const { id } = req.params;
        const { data } = req.body;
      
        let productData = await Product.findById(id);
      
        
        for (const [key, value] of Object.entries(data)) {
            productData[key] = value;
        }
      

        await productData.save();
      
        return res.send({
          data: productData,
        });
      };



module.exports = {
  getAllProducts,
  createProduct,
  deleteProduct,
  updateProduct
};
