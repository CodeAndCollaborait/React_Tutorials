

//REVIEW
//1. export  variable, function, class, and default
//2. Import variable , function, class and alias

const firstName = "Ron";
const lastName = "Smith";

export const address = "100 Main St";

let deptName = "Math";

export { firstName, lastName, deptName };

const printName = (names) => {
  return "Printed Names " + names;
};

export { printName };
  

