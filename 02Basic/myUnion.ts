let scrore :string | number= 2

type user={
    name:string,
    class:number
}

type school={
    schoolname:string,
    isFeesPaid:boolean
}

const student :user|school={
    schoolname:'shubham',
    isFeesPaid:true
}

const numbers :number[]=[2,3,4,3]
const names :string []=['shubham','sahil']
const alphanumeric : (number|string) []=[2,'shubham']
const alphanumeric1 : any []=[2,'shubham']


let voteMember : 'BJP' | 'AAP' | 'Congress' 