function Ship(length) {
    let hits = 0;

    function isSunk() {
        return hits >= length;
    }

    return {
        length,
        isSunk,
    }
}

module.exports = Ship;