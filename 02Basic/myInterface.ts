interface User{
    readonly id:string,
    name:string,
    getSalary():number,
    getPosition(name:string,salary:number):string
}

interface User{
    age?:number
}
interface Student extends User {
    student_name:string
}
const shubham :User={
    id:'sdsdsd',
    name:'hs',
    getSalary() {
        return 10
    },
    getPosition(username='shubham', income=2000){
        return `${username} earn ${income}`        
    },
}

console.log(shubham)