class Student {
    private count = 1;

    constructor(public name: string, private roll: number) {} // Used to initialize data

    getStudentInfo(): string {
        return `Name is ${this.name} and roll no is ${this.roll}`;
    }

    set updateCount(countNumber: number) {
        this.count = countNumber;
    }

    get currentCount(): number {
        return this.count;
    }
}

const shubham = new Student('shubham', 23);
shubham.updateCount = 3; // Use the setter like a property
console.log(shubham.currentCount); // Access the count using the getter

export {};
