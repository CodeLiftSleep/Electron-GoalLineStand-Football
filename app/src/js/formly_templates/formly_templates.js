(function() {
    'use strict';
    angular
        .module('formly_templates', ['ui.mask'])

        .run(function(formlyConfig) { //UI MASK code
            formlyConfig.setType({
                name: 'maskedInput',
                extends: 'input',
                template: '<input class="form-control" ng-model="model[options.key]" />',
                defaultOptions: {
                    ngModelAttrs: {
                        mask: {
                            attribute: 'ui-mask'
                        },
                        maskPlaceholder: {
                            attribute: 'ui-mask-placeholder'
                        }
                    },
                    templateOptions: {
                        maskPlaceholder: ''
                    }
                }
            });
        })

        .config(function(formlyConfigProvider) {
            formlyConfigProvider.setWrapper([{
                    name: 'panel', //creates a primary panel header
                    template: `
                        <!--<div class="big-title">
                          {{options.templateOptions.label}}
                        </div>-->

                        <div class="home-screen">
                          <formly-transclude></formly-transclude>
                        </div>

                    `
                },
                {
                    name: 'well',
                    template: `<div class="well">
                        <formly-transclude></formly-transclude>
                   </div>`
                }
            ]);

            formlyConfigProvider.setType([{
                    name: 'toggleSwitch',
                    template: `<label class="switch-light" onclick="">
                            <input type="checkbox" style="{{to.margin}}" class="check {{to.pull}}" id="toggle{{to.toggle}}"
                                name="toggle{{to.toggle}}" ng-model="checked" ng-click="model[options.key || index] = checked"
                                ng-init="checked = to.checked" ng-class="{'col-md-6': !selected, 'pull-right': selected}" checked/>
                                <strong style="{{to.align}}; margin-bottom: 10px;" >{{to.label}}</strong>
                                <span class="well">
                                <span>No</span>
                                <span>Yes</span>
                                    <a class="btn btn-primary"></a>
                                </span>
                       </label>`,
                    controller: function($scope) {
                        $scope.model[$scope.options.key] = $scope.to.checked; //sets the initial value of the model
                    }
                },
                {
                    name: 'basicLabel',
                    template: '<strong style="font-size:{{to.size}};text-align:{{to.align}}; margin-left:{{to.leftMargin}}">{{to.label}}</strong>'
                },
                {
                    name: 'nya-bootstrapSelect',
                    template: ` <div>{{to.label}}</div>
                        <ol class="nya-bs-select btn-primary" style="{{to.margin}};"
   						ng-model="model[options.key || index]">
                            <li nya-bs-option="option in to.options" value="option.value">
                                <a> <span>{{option.value}}</span> <span class="glyphicon glyphicon-ok check-mark"></span></a>
                            </li>
                        </ol>`
                },
                {
                    name: 'vertSlider',
                    template: [`<rzslider class="custom-slider" rz-slider-model="to.sliderOptions.value"
                         rz-slider-options="to.sliderOptions"></rzslider>`].join(''),
                    wrapper: ['bootstrapLabel', 'bootstrapHasError']
                },
                {
                    name: '3DCarousel',
                    template: `<carousel ng-model="vm.carousel" sides="to.options"</carousel>`
                },
                {
                    name: 'leagueType',
                    templateUrl: `../html/partials/league_type.html`
                }

            ]);

        });
})();
