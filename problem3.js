function sortedCarModel(inventory) {
    let sorted_car_model = [];
    if (Array.isArray(inventory)) {
        sorted_car_model = inventory.map(value => value.car_model).sort();
    }
    return sorted_car_model;
}
module.exports = sortedCarModel;




