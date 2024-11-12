const Gameboard = () => {
    const ships = [];
    const missedShots = [];

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

     function receiveAttack(coordinates) {
        let hitShip = null;

        ships.forEach(({ ship, coordinates: shipCoords }) => {
            shipCoords.forEach((coord) => {
                if (coord[0] === coordinates[0] && coord[1] === coordinates[1]) {
                    ship.hit();
                    hitShip = ship;
                }
            })
        })

        if (!hitShip) {
            missedShots.push(coordinates);
        }
     }

     function getMissedShots() {
        return missedShots;
     }

     return { placeShip, receiveAttack, getMissedShots, getShips };
}

module.exports = Gameboard;