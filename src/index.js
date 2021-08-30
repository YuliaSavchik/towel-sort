
module.exports = function towelSort (matrix) {
  let array = []
  if(matrix == undefined) {
    return array
  }
  else {
  matrix.forEach(function(item, index) {
    if(index % 2 == 0) {
        item.forEach(function(el) {
            array.push(el)
        })
    }
    else if(index % 2 == 1) {
        item.reverse()
        item.forEach(function(elem) {
            array.push(elem)
        })
    }
  })
  }
  return array
}

