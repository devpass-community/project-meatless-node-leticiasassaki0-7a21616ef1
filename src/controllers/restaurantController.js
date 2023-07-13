const { addRestaurant, getRestaurants } = require('../services/restaurantService');

const getRestaurantsEndpoint = async(req, res) => {
    var response = await getRestaurants()
    return res.json(response);
};

const addRestaurantEndpoint = async(req, res) => {
    var restaurant = req.body;

    await addRestaurant(restaurant);
    
    return res.json(restaurant);
};

module.exports = { 
    getRestaurantsEndpoint, 
    addRestaurantEndpoint 
};
