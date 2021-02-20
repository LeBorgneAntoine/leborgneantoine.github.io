

testGetCurrentTime = (id) => {

    let result = "test current time class : Task => ";

    try {
        task = new Task(
            "titre",
            "description",
            null,
            null,
            "garden",
            null,
            null,
            "all");
        result += task.getCurrentDate()
    }catch (e) {
        result += "error"
    }


    document.getElementById(id).innerText = result
}


testConstructor = (id) => {

    let result = "test constructor class : Task => ";

    try {
        task = new Task(
            "titre",
            "description",
            null,
            null,
            "garden",
            null,
            null,
            ['running']);


    }catch (e) {
        result += "error"
    }


    try {
        task = new Task(
            "title",
            "description",
            null,
            null,
            "garden",
            null,
            null,
            ['running']);

        result += task.toString()
    }catch (e){
        result += "error"
    }



    document.getElementById(id).innerText = result

}






///////////////| test script |//////////////////

testGetCurrentTime("test-case-1")
testGetCurrentTime("test-case-2")

testConstructor("test-const-1")



