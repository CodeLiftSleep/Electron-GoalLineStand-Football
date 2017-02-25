(function() {
    'use strict';
    angular
        .module('routerApp')
        .controller('career2Ctrl', function career2Ctrl($scope, $stateParams) {

            var vm = this;
            vm.model = $stateParams.model;

            vm.careerExpansion = [{
                    className: 'row settings expansion creation-league-inputs',
                    fieldGroup: [{
                            key: 'Expansion Fee',
                            className: 'col-md-5',
                            type: 'input',
                            defaultValue: '200,000,000',
                            templateOptions: {
                                label: 'Expansion Fee',
                                type: 'text',
                            }
                        },
                        {
                            key: 'MinMetroPop',
                            className: 'col-md-5',
                            type: 'input',
                            defaultValue: '1,000,000',
                            templateOptions: {
                                label: 'Minimum Metro Population',
                                type: 'text',
                            }
                        }
                    ]
                },
                {
                    className: 'row settings expansion creation-league-inputs',
                    fieldGroup: [{
                            key: 'MultTeamsLgMkt',
                            className: 'col-md-6',
                            defaultValue: 'No',
                            type: 'toggleSwitch',
                            templateOptions: {
                                label: 'Allow Multiple Teams in Large Markets?',
                                toggle: 'MultTeams',
                                checked: true
                            }
                        },
                        {
                            key: 'AllowIntTeams',
                            className: 'col-md-6',
                            defaultValue: 'Yes',
                            type: 'toggleSwitch',
                            templateOptions: {
                                label: 'Allow International Teams?',
                                toggle: 'AllowInt',
                                checked: false
                            }
                        }
                    ]
                },
                {
                    className: 'row settings expansion creation-league-inputs',
                    fieldGroup: [{
                        key: 'OwnerAppExp',
                        className: 'col-md-12',
                        type: 'vertSlider',
                        defaultValue: 75,
                        templateOptions: {
                            label: 'Owner Approval % Required',
                            sliderOptions: {
                                value: 100,
                                floor: 0,
                                ceil: 100,
                                vertical: false,
                                showTicks: false,
                                translate: function(value) {
                                    return value + '%';
                                }
                            }
                        }
                    }]
                }

            ];

            vm.careerRelocation = [{
                    className: 'row settings relocation',
                    fieldGroup: [{
                            key: 'RelocationFee',
                            className: 'col-md-5 creation-league-inputs',
                            type: 'input',
                            defaultValue: '200,000,000',
                            templateOptions: {
                                label: 'Relocation Fee',
                                type: 'text'
                            }
                        },
                        {
                            key: 'RelMinMetroPop',
                            className: 'col-md-5 creation-league-inputs',
                            type: 'input',
                            defaultValue: '1,000,000',
                            templateOptions: {
                                label: 'Minimum Metro Population',
                                type: 'text'
                            }
                        }
                    ]
                },
                {
                    className: 'row settings relocation',
                    fieldGroup: [{
                            key: 'AllowIntRel',
                            className: 'col-md-5 creation-league-inputs',
                            type: 'toggleSwitch',
                            templateOptions: {
                                label: 'Allow International Relocation?',
                                toggle: 'intRel',
                                checked: false
                            }
                        },
                        {
                            key: 'RequireOwnerApp',
                            className: 'col-md-5 creation-league-inputs',
                            type: 'toggleSwitch',
                            templateOptions: {
                                label: 'Require Owner Approval?',
                                toggle: 'reqOwnApp',
                                checked: true
                            }
                        }
                    ]
                },
                {
                    className: 'row settings relocation',
                    fieldGroup: [{
                        key: 'PercentToRel',
                        className: 'col-md-12 creation-league-inputs',
                        type: 'vertSlider',
                        hideExpression: '!model.RequireOwnerApp',
                        defaultValue: 75,
                        templateOptions: {
                            label: 'Owner Approval % Required',
                            sliderOptions: {
                                floor: 0,
                                value: 75,
                                ceil: 100,
                                vertical: false,
                                showTicks: false,
                                translate: function(value) {
                                    return value + '%';
                                }
                            }
                        }
                    }]
                }
            ];

            vm.careerColDraft = [{
                    className: 'row settings',
                    fieldGroup: [{
                            key: 'DraftRounds',
                            className: 'col-md-4 creation-league-inputs',
                            type: 'nya-bootstrapSelect',
                            defaultValue: '7',
                            templateOptions: {
                                label: 'Draft Rounds',
                                options: [{
                                        value: '7',
                                        id: 'DR7'
                                    },
                                    {
                                        value: '3',
                                        id: 'DR3'
                                    },
                                    {
                                        value: '4',
                                        id: 'DR4'
                                    },
                                    {
                                        value: '5',
                                        id: 'DR5'
                                    },
                                    {
                                        value: '6',
                                        id: 'DR6'
                                    },
                                    {
                                        value: '8',
                                        id: 'DR8'
                                    },
                                    {
                                        value: '9',
                                        id: 'DR9'
                                    },
                                    {
                                        value: '10',
                                        id: 'DR10'
                                    },
                                    {
                                        value: '11',
                                        id: 'DR11'
                                    },
                                    {
                                        value: '12',
                                        id: 'DR12'
                                    },
                                    {
                                        value: '13',
                                        id: 'DR13'
                                    },
                                    {
                                        value: '14',
                                        id: 'DR14'
                                    }
                                ]
                            }
                        },
                        {
                            key: 'DraftLottery',
                            className: 'col-md-4 creation-league-inputs',
                            type: 'toggleSwitch',
                            templateOptions: {
                                label: 'Draft Lottery for 1st pick',
                                toggle: 'DraftLot',
                                checked: false
                            }
                        },
                        {
                            key: 'NumTeamsLottery',
                            className: 'col-md-4 creation-league-inputs',
                            //hideExpression: '!model.DraftLottery',
                            type: 'nya-bootstrapSelect',
                            defaultValue: '16',
                            templateOptions: {
                                label: 'number of Teams in Draft Lottery',
                                options: [{
                                        value: '16',
                                        id: 'DLot16'
                                    },
                                    {
                                        value: '2',
                                        id: 'DLot2'
                                    },
                                    {
                                        value: '3',
                                        id: 'DLot3'
                                    },
                                    {
                                        value: '4',
                                        id: 'DLot4'
                                    },
                                    {
                                        value: '5',
                                        id: 'DLot5'
                                    },
                                    {
                                        value: '6',
                                        id: 'DLot6'
                                    },
                                    {
                                        value: '7',
                                        id: 'DLot7'
                                    },
                                    {
                                        value: '8',
                                        id: 'DLot8'
                                    },
                                    {
                                        value: '9',
                                        id: 'DLot9'
                                    },
                                    {
                                        value: '10',
                                        id: 'DLot10'
                                    },
                                    {
                                        value: '11',
                                        id: 'DLot11'
                                    },
                                    {
                                        value: '12',
                                        id: 'DLot12'
                                    },
                                    {
                                        value: '13',
                                        id: 'DLot13'
                                    },
                                    {
                                        value: '14',
                                        id: 'DLot14'
                                    },
                                    {
                                        value: '15',
                                        id: 'Dlot15'
                                    }
                                ]
                            }
                        }
                    ]
                },
                {
                    className: 'row settings',
                    fieldGroup: [{
                            key: 'ColDraftType',
                            className: 'col-md-3 creation-league-inputs',
                            type: 'nya-bootstrapSelect',
                            defaultValue: 'Normal',
                            templateOptions: {
                                label: 'Draft Type',
                                options: [{
                                        value: 'Normal',
                                        id: 'ColDRN'
                                    },
                                    {
                                        value: 'Snake',
                                        id: 'ColDRS'
                                    },
                                    {
                                        value: 'Random',
                                        id: 'ColDRR'
                                    }
                                ]
                            }
                        },
                        {
                            key: 'SupplementalDraft',
                            className: 'col-md-3 creation-league-inputs',
                            type: 'toggleSwitch',
                            templateOptions: {
                                label: 'Have Supplemental Draft?',
                                toggle: 'SupDraft',
                                checked: true
                            }
                        },
                        {
                            key: 'CompensDraftPicks',
                            className: 'col-md-3 creation-league-inputs',
                            type: 'toggleSwitch',
                            templateOptions: {
                                label: 'Give Compensatory Draft Picks?',
                                toggle: 'CompDraft',
                                checked: true
                            }
                        },
                        {
                            key: 'DraftPickTrades',
                            className: 'col-md-3 creation-league-inputs',
                            type: 'toggleSwitch',
                            templateOptions: {
                                label: 'Allow Draft Picks to be traded',
                                toggle: 'PickTrade',
                                checked: true
                            }
                        }
                    ]
                }
            ];

            vm.careerFinancials = [{
                    className: 'row settings finance',
                    hideExpression: '!model.UseFinancials',
                    fieldGroup: [
                      {
                            key: 'SalaryCapType',
                            className: 'col-md-6 creation-league-inputs',
                            type: 'nya-bootstrapSelect',
                            defaultValue: 'Hard Cap',
                            templateOptions: {
                                label: 'Salary Cap Type',
                                options: [{
                                        value: 'Hard Cap',
                                        id: 'SCTHC'
                                    },
                                    {
                                        value: 'Soft Cap',
                                        id: 'SCTSC'
                                    },
                                    {
                                        value: 'Luxury Tax',
                                        id: 'SCTLT'
                                    },
                                    {
                                        value: 'Soft Cap and Luxury Tax',
                                        id: 'SCTSL'
                                    }
                                ]
                            }
                        },
                        {
                            key: 'VarCap',
                            className: 'col-md-6 creation-league-inputs',
                            type: 'toggleSwitch',
                            templateOptions: {
                                label: 'Cap based on revenues?',
                                toggle: 'capRev',
                                checked: true
                            }
                        }
                    ]
                },
                {
                    className: 'row settings finance',
                    hideExpression: '!model.UseFinancials',
                    fieldGroup: [{
                            key: 'FixedCap',
                            className: 'col-md-6 creation-league-inputs',
                            type: 'input',
                            defaultValue: '155,000,000',
                            hideExpression: '!model.VapCap',
                            templateOptions: {
                                label: 'Salary Cap Amount',
                                type: 'text'
                            }
                        },
                        {
                            key: 'CapCarryOver',
                            className: 'col-md-6 creation-league-inputs',
                            type: 'toggleSwitch',
                            templateOptions: {
                                label: 'Cap CarryOver?',
                                toggle: 'CapCO',
                                checked: true
                            }
                        }
                    ]
                },
                {
                    className: 'row settings finance',
                    hideExpression: '!model.UseFinancials',
                    fieldGroup: [{
                            key: 'UseRookiePool',
                            className: 'col-md-6 creation-league-inputs',
                            type: 'toggleSwitch',
                            templateOptions: {
                                label: 'Rookie Cap Pool?',
                                toggle: 'RookieCP',
                                checked: true
                            }
                        },
                        { //float values are not working for soem reason even though they do in examples
                            key: 'RookiePoolAmount',
                            className: 'col-md-6 creation-league-inputs',
                            type: 'vertSlider',
                            defaultValue: 6.00,
                            hideExpression: '!model.UseRookiePool',
                            templateOptions: {
                                label: 'Rookie Pool % of Cap',
                                sliderOptions: {
                                    value: 6.00,
                                    floor: 0.00,
                                    ceil: 10.00,
                                    step: 0.25,
                                    precision: 2,
                                    vertical: false,
                                    showTicks: false,
                                    translate: function(value) {
                                        return value + '%';
                                    }
                                }


                            }
                        }
                    ]
                },
                {
                    className: 'row settings finance',
                    hideExpression: '!model.UseFinancials',
                    fieldGroup: [{
                            key: 'SalaryFloor',
                            className: 'col-md-6 creation-league-inputs',
                            type: 'toggleSwitch',
                            templateOptions: {
                                label: 'Use Salary Floor?',
                                toggle: 'salFloor',
                                checked: true
                            }
                        },
                        {
                            key: 'SalFloorPer',
                            className: 'col-md-6 creation-league-inputs',
                            defaultValue: 89,
                            hideExpression: '!model.SalaryFloor',
                            type: 'vertSlider',
                            templateOptions: {
                                label: 'Floor as Percent of Cap',
                                sliderOptions: {
                                    value: 89,
                                    floor: 50,
                                    ceil: 98,
                                    vertical: false,
                                    showTicks: false
                                }
                            }
                        }
                    ]
                },
                {
                    className: 'row settings finance',
                    hideExpression: '!model.UseFinancials',
                    fieldGroup: [{
                            key: 'LuxuryTaxPer',
                            hideExpression: function($viewValue, $modelValue, $scope) {
                                if ($scope.model.SalaryCapType === 'Luxury Tax' || $scope.model.SalaryCapType === 'Soft Cap and Luxury Tax') {
                                    return false;
                                } else {
                                    return true;
                                }
                            },
                            className: 'col-md-6 creation-league-inputs',
                            type: 'vertSlider',
                            defaultValue: 100,
                            templateOptions: {
                                label: '% of cap when tax starts',
                                sliderOptions: {
                                    value: 100,
                                    floor: 101,
                                    ceil: 200,
                                    vertical: false,
                                    showTicks: false
                                }
                            }
                        },
                        {
                            key: 'LuxuryTaxAmt',
                            className: 'col-md-6 creation-league-inputs',
                            hideExpression: '!model.LuxuryTaxPer',
                            type: 'input',
                            templateOptions: {
                                type: 'numeric',
                                label: 'Amount per dollar over',
                                placeholder: '1.50',

                            }
                        }
                    ]
                },
                {
                    className: 'row settings',
                    fieldGroup: [{
                            key: 'FranchiseTag',
                            type: 'toggleSwitch',
                            className: 'col-md-6 creation-league-inputs',
                            templateOptions: {
                                label: 'Use Franchise Tag?',
                                toggle: 'FranTag',
                                checked: true
                            }
                        },
                        {
                            key: 'NonExclFranTag',
                            type: 'toggleSwitch',
                            hideExpression: '!model.FranchiseTag',
                            className: 'col-md-6 creation-league-inputs',
                            templateOptions: {
                                label: 'Have Non-Excl. Franchise Tag?',
                                toggle: 'NonExcFranTag',
                                checked: true
                            }
                        }
                    ]
                },
                {
                    className: 'row settings',
                    fieldGroup: [{
                            key: 'FranTagBasedWhatPer',
                            className: 'col-md-6 creation-league-inputs',
                            defaultValue: 5,
                            hideExpression: '!model.FranchiseTag',
                            type: 'vertSlider',
                            templateOptions: {
                                label: 'Based on Top % at position',
                                sliderOptions: {
                                    value: 5,
                                    floor: 1,
                                    ceil: 15,
                                    step: 0.25,
                                    precision: 2
                                }
                            }
                        },
                        {
                            key: 'FranMinRaise',
                            className: 'col-md-6 creation-league-inputs',
                            defaultValue: 120,
                            hideExpression: '!model.FranchiseTag',
                            type: 'vertSlider',
                            templateOptions: {
                                label: 'Min. Over Last Year Salary',
                                sliderOptions: {
                                    value: 120,
                                    floor: 100,
                                    ceil: 150,
                                    translate: function(value) {
                                        return value + '%';
                                    }
                                }
                            }
                        }
                    ]

                },
                {
                    className: 'row settings',
                    fieldGroup: [{
                            key: 'FranYearsPlayer',
                            hideExpression: '!model.FranchiseTag',
                            className: 'col-md-6 creation-league-inputs',
                            defaultValue: 2,
                            type: 'vertSlider',
                            templateOptions: {
                                label: '# Years Can Tag Same Player',
                                sliderOptions: {
                                    value: 2,
                                    floor: 1,
                                    ceil: 6
                                }
                            }
                        },
                        {
                            key: 'TransitionTag',
                            className: 'col-md-6 creation-league-inputs',
                            type: 'toggleSwitch',
                            templateOptions: {
                                label: 'Use Transition Tag?',
                                toggle: 'TransTag',
                                checked: true
                            }
                        }
                    ]
                },
                {
                    className: 'row settings',
                    fieldGroup: [{
                            key: 'TransTagPerc',
                            className: 'col-md-6 creation-league-inputs',
                            defaultValue: 10,
                            hideExpression: '!model.TransitionTag',
                            type: 'vertSlider',
                            templateOptions: {
                                label: 'Based on Top % at position',
                                sliderOptions: {
                                    value: 10,
                                    floor: 1,
                                    ceil: 20,
                                    step: 0.25,
                                    precision: 2
                                }
                            }
                        },
                        {
                            key: 'TeamFirstRef',
                            className: 'col-md-6 creation-league-inputs',
                            hideExpression: '!model.TransitionTag',
                            type: 'toggleSwitch',
                            templateOptions: {
                                label: 'Team has right of 1st refusal?',
                                toggle: 'TransFR',
                                checked: true
                            }
                        }
                    ]
                }
            ];

        });
})();
