(function() {
    'use strict';
    angular
        .module('routerApp')
        .controller('career3Ctrl', function career3Ctrl($scope, $stateParams) {

            var vm = this;
            vm.model = $stateParams.model;

            vm.careerOwner = [{
                    className: 'row settings owner',
                    fieldGroup: [{
                            key: 'AvgTicketPrice',
                            className: 'col-md-6',
                            defaultValue: '85.00',
                            type: 'input',
                            templateOptions: {
                                label: 'Average Ticket Price',
                                type: 'text',
                            }
                        },
                        {
                            key: 'AvgLuxuryBoxPrice',
                            className: 'col-md-6',
                            defaultValue: '35,000',
                            type: 'input',
                            templateOptions: {
                                label: 'Ave Luxury Box Price',
                                type: 'text'
                            }
                        }
                    ]
                },
                {
                    className: 'row settings owner',
                    fieldGroup: [{
                        key: 'HomeTeamGateRev',
                        className: 'col-md-12',
                        type: 'vertSlider',
                        templateOptions: {
                            label: 'Home Team Gate Revenue %',
                            sliderOptions: {
                                value: 60,
                                floor: 0,
                                ceil: 100
                            }
                        }
                    }]
                },
                {
                    className: 'row settings owner',
                    fieldGroup: [{
                            key: 'ShareLuxBoxRev',
                            className: 'col-md-6',
                            type: 'toggleSwitch',
                            templateOptions: {
                                label: 'Share Luxury Box Rev?',
                                toggle: 'LuxBox',
                                checked: false
                            }
                        },
                        {
                            key: 'ShareMerchRev',
                            className: 'col-md-6',
                            type: 'toggleSwitch',
                            templateOptions: {
                                label: 'Share Merchandise Revenue?',
                                toggle: 'MerchRev',
                                checked: true
                            }
                        }
                    ]
                }
            ];

            vm.careerPlayerCon = [{
                    className: 'row playerContract',
                    fieldGroup: [{
                            key: 'YearsInLeague',
                            defaultValue: 'Rookie',
                            className: 'col-md-4',
                            type: 'nya-bootstrapSelect',
                            templateOptions: {
                                label: 'Years Experience',
                                labelProp: 'value',
                                valueProp: 'value',
                                options: [{
                                        value: 'Rookie',
                                        id: 'RookieYIL'
                                    },
                                    {
                                        value: '1st Year',
                                        id: '1YIL'
                                    },
                                    {
                                        value: '2nd Year',
                                        id: '2YIL'
                                    },
                                    {
                                        value: '3rd Year',
                                        id: '3YIL'
                                    },
                                    {
                                        value: '4th Year',
                                        id: '4YIL'
                                    },
                                    {
                                        value: '5th Year',
                                        id: '5YIL'
                                    },
                                    {
                                        value: '6th Year',
                                        id: '6YIL'
                                    },
                                    {
                                        value: '7th Year',
                                        id: '7YIL'
                                    },
                                    {
                                        value: '8th Year',
                                        id: '8YIL'
                                    },
                                    {
                                        value: '9th Year',
                                        id: '9YIL'
                                    },
                                    {
                                        value: '10th Year',
                                        id: '10YIL'
                                    },
                                    {
                                        value: '11th Year+',
                                        id: '11YIL'
                                    }
                                ]
                            }

                        },
                        {
                            key: 'RookMinSalary',
                            defaultValue: 450000,
                            className: 'col-sm-3',
                            hideExpression: 'model.YearsInLeague != "Rookie"',
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Rookie Min Salary'
                            }
                        },
                        {
                            key: '1stYearSalary',
                            className: 'col-sm-3',
                            defaultValue: 565000,
                            hideExpression: 'model.YearsInLeague != "1st Year"',
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: '1st Year Min Salary'
                            }
                        },
                        {
                            key: '2ndYearSalary',
                            className: 'col-sm-3',
                            defaultValue: 600000,
                            hideExpression: 'model.YearsInLeague != "2nd Year"',
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: '2nd Year Min Salary'
                            }
                        }
                    ]
                },
                {
                    className: 'row playerContract',
                    fieldGroup: [{
                            key: '3rdYearSalary',
                            className: 'col-sm-3',
                            defaultValue: 675000,
                            hideExpression: 'model.YearsInLeague != "3rd Year"',
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: '3rd Year Min Salary'
                            }
                        },
                        {
                            key: '4thYearSalary',
                            className: 'col-sm-3',
                            defaultValue: 760000,
                            hideExpression: 'model.YearsInLeague != "4th Year"',
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: '4th Year Min Salary'
                            }
                        },
                        {
                            key: '5thYearSalary',
                            className: 'col-sm-3',
                            defaultValue: 760000,
                            hideExpression: 'model.YearsInLeague != "5th Year"',
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: '5th Year Min Salary'
                            }
                        },
                        {
                            key: '6thYearSalary',
                            className: 'col-sm-3',
                            defaultValue: 760000,
                            hideExpression: 'model.YearsInLeague != "6th Year"',
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: '6th Year Min Salary'
                            }
                        }
                    ]
                },
                {
                    className: 'row playerContract',
                    fieldGroup: [{
                            key: '7thYearSalary',
                            className: 'col-sm-3',
                            defaultValue: 885000,
                            hideExpression: 'model.YearsInLeague != "7th Year"',
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: '7th Year Min Salary'
                            }
                        },
                        {
                            key: '8thYearSalary',
                            className: 'col-sm-3',
                            defaultValue: 885000,
                            hideExpression: 'model.YearsInLeague != "8th Year"',
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: '8th Year Min Salary'
                            }
                        },
                        {
                            key: '9thYearSalary',
                            className: 'col-sm-3',
                            defaultValue: 885000,
                            hideExpression: 'model.YearsInLeague != "9th Year"',
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: '9th Year Min Salary'
                            }
                        },
                        {
                            key: '10thYearSalary',
                            className: 'col-sm-3',
                            defaultValue: 985000,
                            hideExpression: 'model.YearsInLeague != "10th Year"',
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: '10th Year Min Salary'
                            }
                        }
                    ]
                },
                {
                    className: 'row playerContract',
                    fieldGroup: [{
                            key: '11thYearSalary',
                            className: 'col-sm-3',
                            defaultValue: 985000,
                            hideExpression: 'model.YearsInLeague != "11th Year+"',
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: '11th Year+ Min Salary'
                            }
                        },
                        {
                            key: 'VetMinAtLowerSal',
                            className: 'col-sm-3',
                            type: 'toggleSwitch',
                            templateOptions: {
                                label: 'Veteran has lower cap #?',
                                toggle: 'VetMin',
                                checked: true
                            }
                        },
                        {
                            key: 'VetYearsToBeEligible',
                            className: 'col-sm-3',
                            hideExpression: '!model.VetMinAtLowerSal',
                            type: 'nya-bootstrapSelect',
                            defaultValue: 6,
                            templateOptions: {
                                label: '# of years to be elgible for vet min',
                                labelProp: 'value',
                                valueProp: 'value',
                                options: [{
                                        value: 6,
                                        id: '6VY'
                                    },
                                    {
                                        value: 1,
                                        id: '1VY'
                                    },
                                    {
                                        value: 2,
                                        id: '2VY'
                                    },
                                    {
                                        value: 3,
                                        id: '3VY'
                                    },
                                    {
                                        value: 4,
                                        id: '4VY'
                                    },
                                    {
                                        value: 5,
                                        id: '5VY'
                                    },
                                    {
                                        value: 7,
                                        id: '7VY'
                                    },
                                    {
                                        value: 8,
                                        id: '8VY'
                                    },
                                    {
                                        value: 9,
                                        id: '9VY'
                                    },
                                    {
                                        value: 10,
                                        id: '10VY'
                                    },
                                    {
                                        value: 11,
                                        id: '11VY'
                                    }
                                ]
                            }
                        },
                        {
                            key: 'VetMinBecomes',
                            className: 'col-sm-3',
                            hideExpression: '!model.VetMinAtLowerSal',
                            defaultValue: 600000,
                            type: 'input',
                            templateOptions: {
                                label: 'How Much Vet Min Counts vs. Cap',
                                type: 'number'
                            }
                        }
                    ]
                },
                {
                    className: 'row',
                    fieldGroup: [{
                            key: 'PositionContract',
                            className: 'col-sm-3',
                            defaultValue: 'QB',
                            type: 'nya-bootstrapSelect',
                            templateOptions: {
                                label: 'Contract for:',
                                labelProp: 'value',
                                valueProp: 'value',
                                options: [{
                                        value: 'QB',
                                        id: 'QBPC'
                                    },
                                    {
                                        value: 'RB',
                                        id: 'RBPC'
                                    },
                                    {
                                        value: 'FB',
                                        id: 'FBPC'
                                    },
                                    {
                                        value: 'WR',
                                        id: 'WRPC'
                                    },
                                    {
                                        value: 'TE',
                                        id: 'TEPC'
                                    },
                                    {
                                        value: 'LT',
                                        id: 'LTPC'
                                    },
                                    {
                                        value: 'G',
                                        id: 'GPC'
                                    },
                                    {
                                        value: 'C',
                                        id: 'CPC'
                                    },
                                    {
                                        value: 'RT',
                                        id: 'RTPC'
                                    },
                                    {
                                        value: 'DE',
                                        id: 'DEPC'
                                    },
                                    {
                                        value: 'DT',
                                        id: 'DTPC'
                                    },
                                    {
                                        value: 'OLB',
                                        id: 'OLBPC'
                                    },
                                    {
                                        value: 'ILB',
                                        id: 'ILBPC'
                                    },
                                    {
                                        value: 'CB',
                                        id: 'CBPB'
                                    },
                                    {
                                        value: 'FS',
                                        id: 'FSPC'
                                    },
                                    {
                                        value: 'SS',
                                        id: 'SSPC'
                                    },
                                    {
                                        value: 'K',
                                        id: 'KPC'
                                    },
                                    {
                                        value: 'P',
                                        id: 'PPC'
                                    },
                                    {
                                        value: 'LS',
                                        id: 'LSPC'
                                    }
                                ]
                            }
                        },
                        {
                            key: 'QBFranSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "QB"',
                            defaultValue: 22000000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Franchise QB Salary'
                            }
                        },
                        {
                            key: 'QBVeryGoodSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "QB"',
                            defaultValue: 18000000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Very Good QB Salary'
                            }
                        },
                        {
                            key: 'QBGoodSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "QB"',
                            defaultValue: 14000000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Good QB Salary'
                            }
                        }
                    ]
                },
                {
                    className: 'row',
                    fieldGroup: [{
                            key: 'QBAverageSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "QB"',
                            defaultValue: 10000000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Average QB Salary'
                            }
                        },
                        {
                            key: 'QBBackupSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "QB"',
                            defaultValue: 6500000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Backup QB Salary'
                            }
                        },
                        {
                            key: 'QB3rdSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "QB"',
                            defaultValue: 1000000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: '3rd QB Salary'
                            }
                        },
                        {
                            key: 'RBFranSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "RB"',
                            defaultValue: 10000000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Franchise RB Salary'
                            }
                        }
                    ]
                },
                {
                    className: 'row',
                    fieldGroup: [{
                            key: 'RBVeryGoodSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "RB"',
                            defaultValue: 7000000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Very Good RB Salary'
                            }
                        },
                        {
                            key: 'RBGoodSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "RB"',
                            defaultValue: 4500000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Good RB Salary'
                            }
                        },
                        {
                            key: 'RBAverageSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "RB"',
                            defaultValue: 3000000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Average RB Salary'
                            }
                        },
                        {
                            key: 'RBBackupSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "RB"',
                            defaultValue: 1500000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Backup RB Salary'
                            }
                        }
                    ]
                },
                {
                    className: 'row',
                    fieldGroup: [{
                            key: 'RBDepthSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "RB"',
                            defaultValue: 850000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Depth RB Salary'
                            }
                        },
                        {
                            key: 'FBFranSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "FB"',
                            defaultValue: 2500000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Franchise FB Salary'
                            }
                        },
                        {
                            key: 'FBVeryGoodSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "FB"',
                            defaultValue: 1650000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Very Good FB Salary'
                            }
                        },
                        {
                            key: 'FBGoodSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "FB"',
                            defaultValue: 750000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Good FB Salary'
                            }
                        }
                    ]
                },
                {
                    className: 'row',
                    fieldGroup: [{
                            key: 'FBAverageSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "FB"',
                            defaultValue: 600000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Average FB Salary'
                            }
                        },
                        {
                            key: 'FBBackupSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "FB"',
                            defaultValue: 500000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Backup FB Salary'
                            }
                        },
                        {
                            key: 'FBDepthSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "FB"',
                            defaultValue: 450000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Depth FB Salary'
                            }
                        },
                        {
                            key: 'WRFranSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "WR"',
                            defaultValue: 15000000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Franchise WR Salary'
                            }
                        }
                    ]
                },
                {
                    className: 'row',
                    fieldGroup: [{
                            key: 'WRVeryGoodSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "WR"',
                            defaultValue: 11000000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Very Good WR Salary'
                            }
                        },
                        {
                            key: 'WRGoodSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "WR"',
                            defaultValue: 8500000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Good WR Salary'
                            }
                        },
                        {
                            key: 'WRAverageSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "WR"',
                            defaultValue: 5000000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Average WR Salary'
                            }
                        },
                        {
                            key: 'WRBackupSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "WR"',
                            defaultValue: 2500000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Backup WR Salary'
                            }
                        }
                    ]
                },
                {
                    className: 'row',
                    fieldGroup: [{
                            key: 'WRDepthSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "WR"',
                            defaultValue: 1250000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: '3rd WR Salary'
                            }
                        },
                        {
                            key: 'TEFranSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "TE"',
                            defaultValue: 10000000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Franchise TE Salary'
                            }
                        },
                        {
                            key: 'TEVeryGoodSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "TE"',
                            defaultValue: 7500000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Very Good TE Salary'
                            }
                        },
                        {
                            key: 'TEGoodSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "TE"',
                            defaultValue: 5500000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Good TE Salary'
                            }
                        }
                    ]
                },
                {
                    className: 'row',
                    fieldGroup: [{
                            key: 'TEAverageSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "TE"',
                            defaultValue: 3500000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Average TE Salary'
                            }
                        },
                        {
                            key: 'TEBackupSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "TE"',
                            defaultValue: 2000000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Backup TE Salary'
                            }
                        },
                        {
                            key: 'TEDepthSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "TE"',
                            defaultValue: 840000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Depth TE Salary'
                            }
                        },
                        {
                            key: 'LTFranSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "LT"',
                            defaultValue: 13000000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Franchise LT Salary'
                            }
                        }
                    ]
                },
                {
                    className: 'row',
                    fieldGroup: [

                        {
                            key: 'LTVeryGoodSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "LT"',
                            defaultValue: 10000000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Very Good LT Salary'
                            }
                        },
                        {
                            key: 'LTGoodSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "LT"',
                            defaultValue: 7500000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Good LT Salary'
                            }
                        },
                        {
                            key: 'LTAverageSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "LT"',
                            defaultValue: 3500000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Average LT Salary'
                            }
                        },
                        {
                            key: 'LTBackupSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "LT"',
                            defaultValue: 1500000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Backup LT Salary'
                            }
                        }
                    ]
                },
                {
                    className: 'row',
                    fieldGroup: [{
                            key: 'LTDepthSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "LT"',
                            defaultValue: 550000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Depth LT Salary'
                            }
                        },
                        {
                            key: 'CFranSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "C"',
                            defaultValue: 9400000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Franchise C Salary'
                            }
                        },
                        {
                            key: 'CVeryGoodSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "C"',
                            defaultValue: 6500000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Very Good C Salary'
                            }
                        },
                        {
                            key: 'CGoodSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "C"',
                            defaultValue: 2800000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Good C Salary'
                            }
                        }
                    ]
                },
                {
                    className: 'row',
                    fieldGroup: [{
                            key: 'CAverageSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "C"',
                            defaultValue: 1500000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Average C Salary'
                            }
                        },
                        {
                            key: 'CBackupSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "C"',
                            defaultValue: 700000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Backup C Salary'
                            }
                        },
                        {
                            key: 'CDepthSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "C"',
                            defaultValue: 550000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Depth C Salary'
                            }
                        },
                        {
                            key: 'GFranSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "G"',
                            defaultValue: 11700000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Franchise G Salary'
                            }
                        }
                    ]
                },
                {
                    className: 'row',
                    fieldGroup: [{
                            key: 'GVeryGoodSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "G"',
                            defaultValue: 7500000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Very Good G Salary'
                            }
                        },
                        {
                            key: 'GGoodSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "G"',
                            defaultValue: 4850000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Good G Salary'
                            }
                        },
                        {
                            key: 'GAverageSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "G"',
                            defaultValue: 2750000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Average G Salary'
                            }
                        },
                        {
                            key: 'GBackupSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "G"',
                            defaultValue: 1650000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Backup G Salary'
                            }
                        }
                    ]
                },
                {
                    className: 'row',
                    fieldGroup: [{
                            key: 'GDepthSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "G"',
                            defaultValue: 1500000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Depth G Salary'
                            }
                        },
                        {
                            key: 'RTFranSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "RT"',
                            defaultValue: 7000000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Franchise RT Salary'
                            }
                        },
                        {
                            key: 'RTVeryGoodSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "RT"',
                            defaultValue: 5500000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Very Good RT Salary'
                            }
                        },
                        {
                            key: 'RTGoodSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "RT"',
                            defaultValue: 3500000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Good RT Salary'
                            }
                        }
                    ]
                },
                {
                    className: 'row',
                    fieldGroup: [{
                            key: 'RTAverageSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "RT"',
                            defaultValue: 2100000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Average RT Salary'
                            }
                        },
                        {
                            key: 'RTBackupSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "RT"',
                            defaultValue: 700000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Backup RT Salary'
                            }
                        },
                        {
                            key: 'RTDepthSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "RT"',
                            defaultValue: 1500000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Depth RT Salary'
                            }
                        },
                        {
                            key: 'DEFranSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "DE"',
                            defaultValue: 17000000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Franchise DE Salary'
                            }
                        }
                    ]
                },
                {
                    className: 'row',
                    fieldGroup: [{
                            key: 'DEVeryGoodSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "DE"',
                            defaultValue: 10000000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Very Good DE Salary'
                            }
                        },
                        {
                            key: 'DEGoodSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "DE"',
                            defaultValue: 7500000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Good DE Salary'
                            }
                        },
                        {
                            key: 'DEAverageSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "DE"',
                            defaultValue: 5000000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Average DE Salary'
                            }
                        },
                        {
                            key: 'DEBackupSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "DE"',
                            defaultValue: 2000000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Backup DE Salary'
                            }
                        }
                    ]
                }, {
                    className: 'row',
                    fieldGroup: [{
                            key: 'DEDepthSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "DE"',
                            defaultValue: 600000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Depth DE Salary'
                            }
                        },
                        {
                            key: 'DTFranSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "DT"',
                            defaultValue: 19000000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Franchise DT Salary'
                            }
                        },
                        {
                            key: 'DTVeryGoodSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "DT"',
                            defaultValue: 10000000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Very Good DT Salary'
                            }
                        },
                        {
                            key: 'DTGoodSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "DT"',
                            defaultValue: 4500000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Good DT Salary'
                            }
                        }
                    ]
                }, {
                    className: 'row',
                    fieldGroup: [{
                            key: 'DTAverageSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "DT"',
                            defaultValue: 3000000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Average DT Salary'
                            }
                        },
                        {
                            key: 'DTBackupSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "DT"',
                            defaultValue: 1675000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Backup DT Salary'
                            }
                        },
                        {
                            key: 'DTDepthSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "DT"',
                            defaultValue: 600000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Depth DT Salary'
                            }
                        },
                        {
                            key: 'OLBFranSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "OLB"',
                            defaultValue: 19000000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Franchise OLB Salary'
                            }
                        }
                    ]
                }, {
                    className: 'row',
                    fieldGroup: [{
                            key: 'OLBVeryGoodSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "OLB"',
                            defaultValue: 9000000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Very Good OLB Salary'
                            }
                        },
                        {
                            key: 'OLBGoodSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "OLB"',
                            defaultValue: 6500000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Good OLB Salary'
                            }
                        },
                        {
                            key: 'OLBAverageSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "OLB"',
                            defaultValue: 4750000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Average OLB Salary'
                            }
                        },
                        {
                            key: 'OLBBackupSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "OLB"',
                            defaultValue: 2000000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Backup OLB Salary'
                            }
                        }
                    ]
                }, {
                    className: 'row',
                    fieldGroup: [{
                            key: 'OLBDepthSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "OLB"',
                            defaultValue: 600000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Depth OLB Salary'
                            }
                        },
                        {
                            key: 'ILBFranSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "ILB"',
                            defaultValue: 13000000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Franchise ILB Salary'
                            }
                        },
                        {
                            key: 'ILBVeryGoodSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "ILB"',
                            defaultValue: 7250000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Very Good ILB Salary'
                            }
                        },
                        {
                            key: 'ILBGoodSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "ILB"',
                            defaultValue: 4000000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Good ILB Salary'
                            }
                        }
                    ]
                }, {
                    className: 'row',
                    fieldGroup: [{
                            key: 'ILBAverageSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "ILB"',
                            defaultValue: 2250000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Average ILB Salary'
                            }
                        },
                        {
                            key: 'ILBBackupSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "ILB"',
                            defaultValue: 1250000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Backup ILB Salary'
                            }
                        },
                        {
                            key: 'ILBDepthSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "ILB"',
                            defaultValue: 600000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Depth ILB Salary'
                            }
                        },
                        {
                            key: 'CBFranSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "CB"',
                            defaultValue: 15000000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Franchise CB Salary'
                            }
                        }
                    ]
                }, {
                    className: 'row',
                    fieldGroup: [{
                            key: 'CBVeryGoodSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "CB"',
                            defaultValue: 10275000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Very Good CB Salary'
                            }
                        },
                        {
                            key: 'CBGoodSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "CB"',
                            defaultValue: 5750000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Good CB Salary'
                            }
                        },
                        {
                            key: 'CBAverageSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "CB"',
                            defaultValue: 2500000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Average CB Salary'
                            }
                        },
                        {
                            key: 'CBBackupSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "CB"',
                            defaultValue: 1500000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Backup CB Salary'
                            }
                        }
                    ]
                }, {
                    className: 'row',
                    fieldGroup: [{
                            key: 'CBDepthSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "CB"',
                            defaultValue: 600000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Depth CB Salary'
                            }
                        },
                        {
                            key: 'FSFranSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "FS"',
                            defaultValue: 12500000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Franchise FS Salary'
                            }
                        },
                        {
                            key: 'FSVeryGoodSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "FS"',
                            defaultValue: 7000000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Very Good FS Salary'
                            }
                        },
                        {
                            key: 'FSGoodSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "FS"',
                            defaultValue: 3000000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Good FS Salary'
                            }
                        }
                    ]
                }, {
                    className: 'row',
                    fieldGroup: [{
                            key: 'FSAverageSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "FS"',
                            defaultValue: 2000000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Average FS Salary'
                            }
                        },
                        {
                            key: 'FSBackupSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "FS"',
                            defaultValue: 1000000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Backup FS Salary'
                            }
                        },
                        {
                            key: 'FSDepthSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "FS"',
                            defaultValue: 600000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Depth FS Salary'
                            }
                        },
                        {
                            key: 'SSFranSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "SS"',
                            defaultValue: 7000000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Franchise SS Salary'
                            }
                        }
                    ]
                }, {
                    className: 'row',
                    fieldGroup: [{
                            key: 'SSVeryGoodSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "SS"',
                            defaultValue: 5000000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Very Good SS Salary'
                            }
                        },
                        {
                            key: 'SSGoodSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "SS"',
                            defaultValue: 1750000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Good SS Salary'
                            }
                        },
                        {
                            key: 'SSAverageSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "SS"',
                            defaultValue: 900000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Average SS Salary'
                            }
                        },
                        {
                            key: 'SSBackupSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "SS"',
                            defaultValue: 675000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Backup SS Salary'
                            }
                        }
                    ]
                }, {
                    className: 'row',
                    fieldGroup: [{
                            key: 'SSDepthSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "SS"',
                            defaultValue: 550000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Depth SS Salary'
                            }
                        },
                        {
                            key: 'KFranSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "K"',
                            defaultValue: 4300000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Franchise K Salary'
                            }
                        },
                        {
                            key: 'KVeryGoodSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "K"',
                            defaultValue: 3000000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Very Good K Salary'
                            }
                        },
                        {
                            key: 'KGoodSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "K"',
                            defaultValue: 900000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Good K Salary'
                            }
                        }
                    ]
                }, {
                    className: 'row',
                    fieldGroup: [{
                            key: 'KAverageSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "K"',
                            defaultValue: 540000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Average K Salary'
                            }
                        },
                        {
                            key: 'KBackupSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "K"',
                            defaultValue: 500000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Backup K Salary'
                            }
                        },
                        {
                            key: 'KDepthSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "K"',
                            defaultValue: 450000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Depth K Salary'
                            }
                        },
                        {
                            key: 'PFranSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "P"',
                            defaultValue: 3750000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Franchise P Salary'
                            }
                        }
                    ]
                }, {
                    className: 'row',
                    fieldGroup: [{
                            key: 'PVeryGoodSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "P"',
                            defaultValue: 2900000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Very Good P Salary'
                            }
                        },
                        {
                            key: 'PGoodSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "P"',
                            defaultValue: 1700000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Good P Salary'
                            }
                        },
                        {
                            key: 'PAverageSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "P"',
                            defaultValue: 600000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Average P Salary'
                            }
                        },
                        {
                            key: 'PBackupSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "P"',
                            defaultValue: 525000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Backup P Salary'
                            }
                        }
                    ]
                }, {
                    className: 'row',
                    fieldGroup: [{
                            key: 'PDepthSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "P"',
                            defaultValue: 450000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Depth P Salary'
                            }
                        },
                        {
                            key: 'LSFranSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "LS"',
                            defaultValue: 1150000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Franchise LS Salary'
                            }
                        },
                        {
                            key: 'LSVeryGoodSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "LS"',
                            defaultValue: 1065000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Very Good LS Salary'
                            }
                        },
                        {
                            key: 'LSGoodSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "LS"',
                            defaultValue: 885000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Good LS Salary'
                            }
                        }
                    ]
                }, {
                    className: 'row',
                    fieldGroup: [{
                            key: 'LSAverageSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "LS"',
                            defaultValue: 620000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Average LS Salary'
                            }
                        },
                        {
                            key: 'LSBackupSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "LS"',
                            defaultValue: 480000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Backup LS Salary'
                            }
                        },
                        {
                            key: 'LSDepthSal',
                            className: 'col-sm-3',
                            hideExpression: 'model.PositionContract != "Ls"',
                            defaultValue: 450000,
                            type: 'input',
                            templateOptions: {
                                type: 'number',
                                label: 'Depth LS Salary'
                            }
                        }
                    ]
                }
            ]

        });
})();
