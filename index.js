// Write your solution in this file!
var employee = {
  name: "Tani",
  street: "1500 Morgan street"
}

function updateEmployeeWithKeyAndValue(object, key, value) {
var newEmployee = {...object};
newEmployee[key] = value;
return newEmployee;
}

updateEmployeeWithKeyAndValue(employee, "size", "100")

function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value) {
object[key] = value;
return object
}

function deleteFromEmployeeByKey(object, key) {
  var newObj = {...employee};
delete newObj[key];
return newObj;
}

deleteFromEmployeeByKey(employee, 'name')

function destructivelyDeleteFromEmployeeByKey(object, key) {
  delete object[key];
  return object;
}