interface user {
    username?:string,
    age:number
}

type newUser ={
   readonly _id:string,
    name:string,
    age:number  
}


const getUser=(user:newUser & user):user=>{
    return user
}



getUser({_id:'23jsjdhs',name:'shubham',age:2})
export {}