const { addProduct, getProducts } = require('../services/productService');

const getProductsEndpoint = async(req, res) => {
    var response = await getProducts()
    return res.json(response);
};

const addProductEndpoint = async(req, res) => {
    var product = req.body;

    await addProduct(product);
    
    return res.status(201).json(product);
};

module.exports = { 
    getProductsEndpoint, 
    addProductEndpoint 
};
