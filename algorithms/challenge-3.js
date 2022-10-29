function sumMix(arr){
    let count = 0;
    for(a of arr){
        count += Number(a)
    }
    return count
}
  module.exports = sumMix
