const { insertQuery, selectQuery } = require('../config/configDB');

const getProducts = async() => {
    await selectQuery('SELECT * FROM Products')
};

const addProduct = async(product) => {
    await insertQuery(`INSERT INTO Products (description, full_description, category, price, restaurant_id, active)
     VALUES ('${product.description}','${product.full_description}','${product.category}',${product.price},${product.restaurant_id},${product.active})`);
};

module.exports = {
    getProducts,
    addProduct
};
