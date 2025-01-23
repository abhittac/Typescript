const callBool =<Type>(val:Type):Type=>{
    return val
}
callBool('s')

interface studentData {

    name:string,
    age:number

}

const callStudent =<studentData>(stud:studentData):studentData=>{
    return stud
}
callStudent({name:'shubha',age:3})
export {}