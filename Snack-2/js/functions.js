/**
 * Get random interger between range
 * @param {number} min
 * @param {number} msx
 * @return {number} 
 */

function getRndInteger(min, max) {
    return Math.floor(Math.random()* (max - min + 1) ) + min;
}