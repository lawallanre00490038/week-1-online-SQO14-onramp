function calculateGrade(marks) {
    let total = 0;
    for(let num of marks){
        total += num;
    }
    let avg = total / marks.length;
    if (avg >= 1 && avg <= 49){
        return 'F';
    }else if (avg >= 50 && avg <= 59){
        return 'E';
    }else if (avg >= 60 && avg <= 69){
        return 'D';
    }else if (avg >= 70 && avg <= 79){
        return 'C';
    }else if (avg >= 80 && avg <= 89){
        return 'B';
    }else if (avg >= 90 && avg <= 100){
        return 'A';
    }
};
  module.exports =calculateGrade
