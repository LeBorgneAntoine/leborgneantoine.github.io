
app.controller("searchResultController", function($scope) {

    $scope.tasks = getData();

    $scope.filter = "";

    lostFocusInput = () => {
        document.getElementById("search-result").style.display = "none"
    }

    gainFocusInput = () => {
        if($scope.filter !== ""){
            document.getElementById("search-result").style.display = "block"
        }
    }




    $scope.$watch('filter',function(newVal,oldVal){
        if(newVal !== ""){
            document.getElementById("search-result").style.display = "block"
        }else{
            document.getElementById("search-result").style.display = "none"
        }
    })


})

