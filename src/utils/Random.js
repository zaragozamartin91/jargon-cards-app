export default class Random {
    /**
     * Generates a random integer
     * @param {number} max Max value
     * @returns Random integer
     */
    integer(max) {
        return Math.floor(Math.random() * max);
    }
}