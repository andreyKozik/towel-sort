module.exports = function towelSort(matrix) {
    if (matrix === undefined) return [];
    matrix.map((a, b) => {
        if (b % 2 !== 0) a.sort(c => -1);
    });
    return [].concat(...matrix);
};
