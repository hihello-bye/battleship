const Gameboard = () => {
    const ships = [];

    function placeShip(ship, startCoordinates, direction) {
        const coordinates= [];
    

    for (let i = 0; i < ship.length; i++) {
        if (direction === 'horizontal') {
            coordinates.push([startCoordinates[0], startCoordinates[1] + i]);
        } else if (direction === 'vertical') {
            coordinates.push([startCoordinates[0] + i, startCoordinates[1]]);
        }
    }
     ships.push({ ship, coordinates });
    }

     function getShips() {
        return ships;
     }

     return { placeShip, getShips };
}

module.exports = Gameboard;