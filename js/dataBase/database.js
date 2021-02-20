getData = () =>{

    let numberOfData = 30

    let retArray = []

    for(let i = 0 ; i< numberOfData ;i++){
        retArray.push(new Task("task "+(i+1), "description"))
    }
    return retArray
}