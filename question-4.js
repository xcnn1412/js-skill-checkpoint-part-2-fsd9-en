const alphaTech = [
    { name: 'Alice', age: 23, department: 'Engineering' },
    { name: 'Bob', age: 19, department: 'Design' }
  ];

  // console.log(`alphaTech` , alphaTech);

  const betaSoft = [
    { name: 'Charlie', age: 28, department: 'Engineering' },
    { name: 'David', age: 17, department: 'Support' }
  ];
  
  // console.log(`betaSoft` , betaSoft);

  const gammaDev = [
    { name: 'Eve', age: 25, department: 'Marketing' },
    { name: 'Faythe', age: 18, department: 'Engineering' },
    { name: 'Grace', age: 20, department: 'Engineering' }
  ];

  // console.log(`gammaDev` , gammaDev);
  

//เติม company ลงไปใน allEmployees
const allEmployees = [ 
  ...alphaTech.map( addCom => ({ ...addCom, company: `alphaTech`})),
  ...betaSoft.map( addCom => ({ ...addCom, company: `betaSoft`})),
  ...gammaDev.map( addCom => ({ ...addCom, company: `gammaDev`}))
];

console.log(`เติมCom` , allEmployees);

//filter with Condition + map 
const result = allEmployees
  .filter( employee => employee.department === `Engineering` && employee.age >= 20)
  .map ( employee => ({name: employee.name, company: employee.company}));

console.log(result);



//Try Someting New
// const result = [
//     ...alphaTech.map( addCom => ({ ...addCom, company: `alphaTech`})),
//     ...betaSoft.map( addCom => ({ ...addCom, company: `betaSoft`})),
//     ...gammaDev.map( addCom => ({ ...addCom, company: `gammaDev`}))
// ] 
//     .filter ( employee => employee.department === `Engineering` && employee.age >= 20)
//     .map( employee => ({name: employee.name , company: employee.company}));

// console.log(result)

