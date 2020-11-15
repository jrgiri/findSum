let findSum = (arr) => {
    var sum = arr.reduce((sum, elem) => sum + elem)
    return sum
}
console.log(findSum([2, 10, 3, 5, 7, 12]))