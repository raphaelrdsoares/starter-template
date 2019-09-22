// angular.module("app").controller("MainController", MainController);
function MainController() {
	var ctrl = this;
}
angular.module("app").component("mainComponent", {
	templateUrl: "/src/app/components/main/main.html",
	controller: MainController
});
