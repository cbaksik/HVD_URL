/**
 * Created by samsan on 8/9/17.
 * It remove old logo and replace it with new logo
 */

angular.module('viewCustom')
    .controller('prmLogoAfterCtrl',['$element',function ($element) {
        var vm=this;
        vm.$onInit=function () {

        };

    }]);

angular.module('viewCustom')
    .component('prmLogoAfter',{
        bindings:{parentCtrl:'<'},
        controller: 'prmLogoAfterCtrl',
        controllerAs:'vm',
        templateUrl:'/primo-explore/custom/HVD_URL/html/prm-logo-after.html'
    });
