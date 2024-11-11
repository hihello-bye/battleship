function Ship(length) {
    let hits = 0;

    function hit() {
        if (hits < length) {
            hits += 1;
        }
    }

    function sunk() {
        return hits >= length;
    }

    return {
        length,
        hit,
        sunk,
    }
}

module.exports = Ship;