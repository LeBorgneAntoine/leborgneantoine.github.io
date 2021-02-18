searchResultModule.controller("searchResultController", ($scope) => {

    $scope.tasks = getData();

    $scope.filter = "";

    let rect = document.getElementById("search-input").getBoundingClientRect();

    console.log( window.scrollX)

    document.getElementById("search-result").style.left = String(rect.left)

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

