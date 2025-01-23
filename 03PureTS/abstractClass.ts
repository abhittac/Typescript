class student {
    constructor(studentName:string,className:string){}
}

class school extends student {
    constructor(studentName:string,className:string,schoolName:string){
        super(studentName,className)
    }
}
export {}