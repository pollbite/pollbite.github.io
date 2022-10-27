
// create a json for each employee 
// created a new template literal object and then parse it into JSON
var sam = {
    name : "Sam",
    department : "Tech",
    designation : "Manager", 
    salary : 40000, 
    raiseEligible : true
};

console.log(sam.salary);

var mary = {
    name : "Mary",
    department : "Finance",
    designation : "Trainee", 
    salary : 18500, 
    raiseEligible : true
};

var bill = {
    name : "Bill",
    department : "HR",
    designation : "Executive", 
    salary : 21200, 
    raiseEligible : false
};

// creating a new obj. for anna 
var anna = {
    name: "Anna",
    department: "Tech",
    designation: "Executive",
    salary: 25600,
    raiseEligible: false
}


// 2. created a new JSON obj. for the company 
var company = {
    companyName : "Tech Stars",
    website : "www.techstars.site",
    employees : [sam, mary, bill]
};

console.log(company.employees);

// adding anna to the array
company.employees.push(anna);

console.log(company.employees);

// calculating the total salary for all company employees
var salaryTotal = 0;
for (var i =0; i < company.employees.length; i++){
    var employeeAccess = company.employees[i];
    var salary = employeeAccess.salary;
    salaryTotal += salary;
}

console.log(salaryTotal);

// giving all eligible employees a raise 
for (var i=0; i < company.employees.length; i++){
    var employeeAccess = company.employees[i];
    if (employeeAccess.raiseEligible === true){
        employeeAccess.salary *= 1.1;
    }
}

console.log(sam.salary);
console.log (anna.salary);

// updating the company JSON to include wfh
