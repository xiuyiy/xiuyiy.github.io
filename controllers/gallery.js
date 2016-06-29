/**
 * Created by xiye on 6/28/16.
 */
angular.module("galleryApp")
    .controller("visCtrl", function($scope)
{


    $scope.data = {
        visuals: [
            {name: "Visualizaiton #1", description: "DESC of Vis #1", category: "D3", createDate: "June 28, 2016"},
            {name: "Visualizaiton #2", description: "DESC of Vis #2", category: "D3", createDate: "June 28, 2016"},
            {name: "Visualizaiton #3", description: "DESC of Vis #3", category: "D3", createDate: "June 28, 2016"},
            {name: "Visualizaiton #4", description: "DESC of Vis #4", category: "D3", createDate: "June 28, 2016"},
            {name: "Visualizaiton #5", description: "DESC of Vis #5", category: "D3", createDate: "June 28, 2016"}
        ]
    };
}
);
