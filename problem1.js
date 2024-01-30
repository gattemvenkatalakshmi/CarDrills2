function carwithId(inventory) {
    let result =[];
    if (Array.isArray(inventory)) {
        result = inventory.filter(value => value.id == 33);
    }
    return result;
}

module.exports = carwithId;