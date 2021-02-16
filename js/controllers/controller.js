function displayMore(){


    let option = document.getElementById("more-option")
    console.log(option.style.visibility)
    if(option.style.visibility === "visible"){
        option.style.visibility = "hidden"
    }else{
        option.style.visibility = "visible"
    }

}