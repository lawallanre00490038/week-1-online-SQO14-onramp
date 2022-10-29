function countTruthy(arr) {
    let count = 0;
    const b = [];
    for(let a of arr){
      if(a){
      count ++;
      }
  }
  return(count)
}
module.exports = countTruthy
