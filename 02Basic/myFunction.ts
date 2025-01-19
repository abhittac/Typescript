function addTwo (num:number):{
    return num+2

}
addTwo(2)

// optional passing 

function checkUser(name:string,age:number,isUser:boolean=false){
    return name+ 'age of '+age
}

checkUser('shubha',2)



const hero =['hero1','hero2']

hero.map((hero : string) :string=>{
    return hero
})


const returnVoid=(value:string) : void=>{
    console.log('>',value)

}


const handleException=(value:any):never=>{
    console.log('>',value)
    throw value
}