//JSON format requires the use of double quotes around property names and strings. For example,
//in this scenario, the name and IT Manager should be "name" and "IT Manager" (with double quotes) in
//the JSON string.

//Single quotes should not be used around property names and strings in a properly formatted JSON string,
//which means that 'Jon Smith' and 'jsmith@cosmicinnovation.com' are not valid.

//A numeric value can be an integer or floating point number, and it does not require double quotes.

//Also, it is important to note that the JSON format supports these data types: string, number,
//object, array, boolean, and null.


//Improper Format. Properties have to be surrounded by double quotes
const data =
  "{ 'name': 'Jon Smith', 'title': 'IT Manager', 'salary': 100000, 'email': 'jsmith@cosmicinnovation.com' }";


//Improper Format. String values must also be encased in double quotes
const data1 = "{ \"name\": Jon Smith, \"title\": IT Manager, salary: 100000, \"email\": jsmith@cosmicinnovation.com }"; 


//Proper Format. Notice how the number value is not in double quotes. 
const data2 ='{ "name": "Jon Smith", "title": "IT Manager", "salary": 100000, "email": "jsmith@cosmicinnovation.com" }';                                            
