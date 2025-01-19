interface user {
    name:string,
    age:number
}

type newUser ={
    name:string,
    age:number  
}


const getUser=(user:newUser):user=>{
    return user
}



getUser({name:'',age:2})

export {}