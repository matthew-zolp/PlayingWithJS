class Student {
    constructor(ageLimit, name, age) {
        this.ageLimit = ageLimit;
        this.name = name;
        this.age = age;
    }

    get adultStatus() {
        return (this.age > this.ageLimit ? "Adult" : "NOT Adult")
    }

    static isStudentAdult(age) {
        let state = false;
        if (age > this.ageLimit)
            state = true;

        let statusStatement = `The adult status of the student with age ${age} is ${state}`;
        console.log(statusStatement);
        return statusStatement;
    }
}
let student = new Student(18, "John", 32);
//Static methods are called outside the context of the object. When this.ageLimit is referenced, it is undefined.
Student.isStudentAdult(21);
