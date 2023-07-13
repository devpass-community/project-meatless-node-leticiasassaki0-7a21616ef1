const { insertQuery, selectQuery } = require('../config/configDB');

const getRestaurants = async() => {
    await selectQuery('SELECT * FROM Restaurants')
};

const addRestaurant = async(restaurant) => {
    await insertQuery(`INSERT INTO Restaurants (name, category, address, active) VALUES ('${restaurant.name}','${restaurant.category}','${restaurant.address}',${restaurant.active})`);
};

module.exports = {
    getRestaurants,
    addRestaurant
};
