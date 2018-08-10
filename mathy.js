exports.add = (a, b) => a+b
exports.sub = (a, b) => a-b
exports.mul = (a, b) => a*b
exports.div = (a, b) => {
    if (b === 0) {
        throw new Error('Can not divide by zero') 
    }
    
    return a/b
}
exports.square = a => exports.mul(a, a)