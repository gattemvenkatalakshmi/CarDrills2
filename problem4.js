

function olderyyears(inventory) {
    let years = [];
    if (Array.isArray(inventory)) {
        years = inventory.map(value => value.car_year);
    }
    return years;
}
module.exports = olderyyears;