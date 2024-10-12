
let basicSalary;
let bonus;
let totalSalary;


basicSalary = 13000;

//Total Salary........

if(basicSalary == 13000){
    bonus = 2000;
    totalSalary = basicSalary + bonus;
}

else if(basicSalary == 18000){
    bonus = 3000;
    totalSalary = basicSalary + bonus;
}

else if(basicSalary == 25000){
    bonus = 5000;
    totalSalary = basicSalary + bonus;
}

else if(basicSalary == 30000){
    bonus = 6000;
    totalSalary = basicSalary + bonus;
}

else if(basicSalary == 40000){
    bonus = 7000;
    totalSalary = basicSalary + bonus;
}

else if(basicSalary == 50000){
    bonus = 8000;
    totalSalary = basicSalary + bonus;
}

else if(basicSalary == 60000){
    bonus = 10000;
    totalSalary = basicSalary + bonus;
}

//Picnic Fees.....


if(totalSalary > 60000){
    console.log("This fee is: " +totalSalary+ " and the fee is: 1500");
}

else if(totalSalary > 50000){
    console.log("This fee is: " +totalSalary+ " and the fee is: 1200");
}

else if(totalSalary > 40000){
    console.log("This fee is: " +totalSalary+ " and the fee is: 1000");
}

else if(totalSalary > 30000){
    console.log("This fee is: " +totalSalary+ " and the fee is: 800");
}

else if(totalSalary > 25000){
    console.log("This fee is: " +totalSalary+ " and the fee is: 700");
}

else if(totalSalary > 20000){
    console.log("This fee is: " +totalSalary+ " and the fee is: 600");
}

else if(totalSalary > 15000){
    console.log("This fee is: " +totalSalary+ " and the fee is: 500");
}

else if(totalSalary <= 15000){
    console.log("This fee is: " +totalSalary+ " and the fee is: 100");
}