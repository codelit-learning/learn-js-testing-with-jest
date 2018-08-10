const a = Symbol();

module.exports = {
    [a]: [],
    push: function(elem) {
        this[a].push(elem);
    },
    pop: function() {
        return this[a].pop()
    },
    size: function () {
        return this[a].length
    },
    clear: function () {
        this[a] = []
    }
}