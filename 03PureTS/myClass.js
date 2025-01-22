"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Student = /** @class */ (function () {
    function Student(name, roll) {
        this.name = name;
        this.roll = roll;
    }
    Student.prototype.getStudentInfo = function () {
        return "Name is ".concat(this.name, " and roll no is ").concat(this.roll);
    };
    return Student;
}());
var shubham = new Student('shubham', 23);
console.log(shubham.getStudentInfo());
