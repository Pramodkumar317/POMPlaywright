


const mypromise= new Promise((resolve,reject)=>{
    const sucess=false;
    if(sucess)
    {
        resolve("login is successful");
    }
    else
    {
        reject("login failed");
    }
});

mypromise
.then(result =>{
    console.log("Passed")
})
.catch(error =>{
console.log("Failed")
})
    

