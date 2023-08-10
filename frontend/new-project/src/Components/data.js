const policy = {
  "id": "20351588*054",
  "status": "Active",
  "client": {
    "id": "20351588"
  },
  "product": "MFG01",
  "physicalAddress": {
    "line1": "101 Piet Retief Street",
    "line2": "Ficksburg",
    "line3": "",
    "line4": "",
    "postalCodeId": "9730:Ficksburg:0002_MNFG"
  },
  "payment": {
    "option": "Primary",
    "strikeDay": 1,
    "primary": {
      "method": "DebitOrder",
      "accountNumber": "123456789",
      "accountHolder": {
        "initials": "V",
        "surname": "Brolink"
      },
      "debitOrder": {
        "branchCode": "470010",
        "branchName": "Capitec Bank Cpc"
      },
      "creditCard": null
    },
    "alternative": null
  },
  "firstInceptionDate": "2022-09-09T00:00:00",
  "effectiveDate": "2023-08-02T00:00:00",
  "renewalDate": "2023-09-01T00:00:00",
  "period": "Monthly",
  "renewalPeriod": "Automatic",
  "comments": "Inflation Increase / Rate Version Update / Adjustment Vehicle Sum Insured / Anniversary Process Rerate 2023-09-01 at Month End",
  "policyFeeConsentGiven": true,
  "brokerFeeOverride": null,
  "policyFeeOverride": null,
  "premiumCollection": {
    "product": "MFG01 Old Mutual Insure Limited",
    "paymentMethod": "Debit Order",
    "usualStrikeDay": "01",
    "futureMonthlyPremium": 6857,
    "currentPolicyLedgerBalance": 13714,
    "addNarrative": "1. Premium collections that still have to be processed do not include the current policy endorsement premium adjustments.\n2. Any transactions not yet raised could be affected by pro-rata premiums. Unprocessed amounts reflected are for full periods.",
    "info": [
      {
        "narrative": "Premium collection already processed.",
        "collectionProcessingDate": "Saturday 2023-06-24",
        "strikeDate": "Wednesday 2023-06-28",
        "amount": 6857
      },
      {
        "narrative": "Recurring business transactions already raised to be collected.",
        "collectionProcessingDate": "Saturday 2023-07-22",
        "strikeDate": "Tuesday 2023-08-01",
        "amount": 13714
      },
      {
        "narrative": "Future monthly premium not yet raised but including endorsements effective 2023-09-01.",
        "collectionProcessingDate": "",
        "strikeDate": "",
        "amount": 6857
      }
    ]
  },
  "policyFee": 0,
  "brokerFee": 5000,
  "commission": 113362,
  "sections": {
    "allRiskSection": {
      "risks": [
        {
          "riskId": "0001",
          "items": [
            {
              "rateCode": {
                "code": "PB0041",
                "description": "Cellular Phones / pager / Car Phones"
              },
              "premiumAmount": 5312,
              "message": null,
              "coverType": "01",
              "premium": null,
              "inceptionDate": "2022-09-09T00:00:00",
              "itemId": "0001-001",
              "sumInsuredAmount": 400000,
              "description": "Xiaomi T9",
              "isValuationAvailable": false,
              "serialNumber": "TBA"
            }
          ],
          "totalSumInsuredAmount": 400000,
          "totalPremiumAmount": 5312,
          "premium": {
            "original": 0,
            "discounted": 0,
            "loaded": 0,
            "discountPerc": 0,
            "loadingPerc": 0,
            "nettPremium": 5312,
            "grossPremium": 0,
            "sasriaCategory": "F1",
            "sasriaPremium": 1,
            "sumInsuredAmount": 400000
          },
          "riskExcess": {
            "title": null,
            "details": null,
            "message": null,
            "items": [
              {
                "id": "001",
                "code": "1057",
                "description": "Cell phones",
                "type": "",
                "percentage": 0,
                "minimumAmount": 75000,
                "maximumAmount": 0
              }
            ]
          },
          "riskInfoQuestions": null,
          "postalCode": "9730:Ficksburg:0002_MNFG"
        },
        {
          "riskId": "0002",
          "items": [
            {
              "rateCode": {
                "code": "PB0037",
                "description": "Specified Clothing / Personal Effects"
              },
              "premiumAmount": 2397,
              "message": null,
              "coverType": "01",
              "premium": null,
              "inceptionDate": "2022-09-09T00:00:00",
              "itemId": "0002-001",
              "sumInsuredAmount": 500000,
              "description": "Clothing And Personal Effects",
              "isValuationAvailable": false,
              "serialNumber": null
            }
          ],
          "totalSumInsuredAmount": 500000,
          "totalPremiumAmount": 2397,
          "premium": {
            "original": 0,
            "discounted": 0,
            "loaded": 0,
            "discountPerc": 0,
            "loadingPerc": 0,
            "nettPremium": 2397,
            "grossPremium": 0,
            "sasriaCategory": "F1",
            "sasriaPremium": 2,
            "sumInsuredAmount": 500000
          },
          "riskExcess": {
            "title": null,
            "details": null,
            "message": null,
            "items": [
              {
                "id": "001",
                "code": "1058",
                "description": "Specified Clothing / Personal Effects",
                "type": "",
                "percentage": 0,
                "minimumAmount": 50000,
                "maximumAmount": 0
              }
            ]
          },
          "riskInfoQuestions": null,
          "postalCode": "9730:Ficksburg:0002_MNFG"
        }
      ]
    },
    "buildingSection": {
      "risks": [
        {
          "riskId": "0001",
          "politicalRiotPremiumAmount": 635,
          "riskPremiumAmount": 81689,
          "riskFactors": [
            {
              "code": "PB0001",
              "message": "Detached House / Cottage",
              "premium": 81689
            },
            {
              "code": "PD0075",
              "message": "Tile roof",
              "premium": 0
            },
            {
              "code": "DD0069",
              "message": "Standard/Selectable Excess : R1 000",
              "premium": 0
            },
            {
              "code": "DD0105",
              "message": "Service Provider : ADT Security",
              "premium": 0
            },
            {
              "code": "DD0082",
              "message": "Connected to a 24 hour control room with armed response : Yes",
              "premium": 0
            },
            {
              "code": "PD0027",
              "message": "Dwelling is situated in a flood risk area : No",
              "premium": 0
            },
            {
              "code": "PD0037",
              "message": "Does the Private Home have a solar geyser : No",
              "premium": 0
            },
            {
              "code": "PL0304",
              "message": "Are you 55 years or older: No",
              "premium": 0
            },
            {
              "code": "PD0038",
              "message": "Unoccupied for more than 60 days a year : No",
              "premium": 0
            },
            {
              "code": "PL0048",
              "message": "Unoccupied during working hours : Yes",
              "premium": 0
            },
            {
              "code": "PD0530",
              "message": "Residence unoccupied for 7 days within the first month and have no previous insurance : No",
              "premium": 0
            },
            {
              "code": "PD0515",
              "message": "Full time security guards on the property : Yes",
              "premium": 0
            },
            {
              "code": "PD0579",
              "message": "24 hour access control to property : Yes",
              "premium": 0
            },
            {
              "code": "PL0088",
              "message": "Interleading door between outbuilding/garage adjoining the main residence : No",
              "premium": 0
            },
            {
              "code": "PD0581",
              "message": "Perimeter Wall is 1.8 high : Yes",
              "premium": 0
            },
            {
              "code": "PD0583",
              "message": "All access doors are fitted with security gates : Yes",
              "premium": 0
            },
            {
              "code": "PD0582",
              "message": "All opening windows fitted with burglar bars : Yes",
              "premium": 0
            },
            {
              "code": "PD0580",
              "message": "Is there an alarm in the house : Yes",
              "premium": 0
            },
            {
              "code": "PD0017",
              "message": "Situation of the Home : Security Village / Complex",
              "premium": 0
            },
            {
              "code": "PD0192",
              "message": "Hired or Let Out : No",
              "premium": 0
            },
            {
              "code": "PD0035",
              "message": "Main Residence : Yes",
              "premium": 0
            },
            {
              "code": "PD0529",
              "message": "Insurance Type : Full Cover Including Subsidence",
              "premium": 0
            },
            {
              "code": "PD0060",
              "message": "CFG 9",
              "premium": 0
            },
            {
              "code": "PD0544",
              "message": "Brick Stone or Concrete Wall",
              "premium": 0
            },
            {
              "code": "PC005",
              "message": "Sub Total",
              "premium": 81689
            },
            {
              "code": "SAS001",
              "message": "Sasria Premium",
              "premium": 635
            },
            {
              "code": "FIN001",
              "message": "Final Premium",
              "premium": 82324
            }
          ],
          "extensions": [
            {
              "id": "001",
              "code": "PE0002",
              "sumInsuredAmount": 1000000,
              "premiumAmount": 0,
              "message": "Accidental damage to fixed machinery in the Home R10 000"
            },
            {
              "id": "002",
              "code": "PE0006",
              "sumInsuredAmount": 1000000,
              "premiumAmount": 0,
              "message": "Power Surge R10 000"
            }
          ],
          "riskExcess": {
            "title": null,
            "details": null,
            "message": null,
            "items": [
              {
                "id": "001",
                "code": "1079",
                "description": "Subsidence and Landslip",
                "type": "",
                "percentage": 0,
                "minimumAmount": 500000,
                "maximumAmount": 0
              }
            ]
          },
          "message": null,
          "riskInfoQuestions": [
            {
              "code": "130",
              "question": "Credit Provider",
              "answer": {
                "code": [],
                "description": []
              }
            },
            {
              "code": "21",
              "question": "Number of claims in the last 12 months:",
              "answer": "0"
            },
            {
              "code": "22",
              "question": "Number of claims in the last 13 to 24 months:",
              "answer": "0"
            },
            {
              "code": "23",
              "question": "Number of claims in the last 25 to 36 months:",
              "answer": "0"
            },
            {
              "code": "168",
              "question": "Number of claims in the last 37 to 48 months:",
              "answer": "0"
            },
            {
              "code": "169",
              "question": "Number of claims in the last 49 to 60 months:",
              "answer": "0"
            }
          ],
          "premium": {
            "original": 0,
            "discounted": 0,
            "loaded": 0,
            "discountPerc": 0,
            "loadingPerc": 0,
            "nettPremium": 81689,
            "grossPremium": 81689,
            "sasriaCategory": "F1",
            "sasriaPremium": 635,
            "sumInsuredAmount": 140000000
          },
          "inceptionDate": "2022-09-09T00:00:00",
          "registeredOwner": null,
          "residentialAddress": {
            "line1": "101 Piet Retief Street",
            "line2": "Ficksburg",
            "line3": "9730",
            "line4": "",
            "postalCodeId": "9730:Ficksburg:0002_MNFG"
          },
          "occupationDate": "2022-09-05T00:00:00",
          "numberOfConsecutiveUnoccupiedDays": 5,
          "dwellingType": "018",
          "wallConstruction": "001",
          "roofType": "001",
          "claimFreeGroup": 9,
          "voluntaryExcess": 0,
          "sumInsuredAmount": 140000000,
          "memos": null
        }
      ]
    },
    "contentSection": {
      "risks": [
        {
          "riskId": "0001",
          "politicalRiotPremiumAmount": 318,
          "riskPremiumAmount": 30669,
          "riskFactors": [
            {
              "code": "PB0020",
              "message": "Detached House / Cottage",
              "premium": 30669
            },
            {
              "code": "PD0185",
              "message": "Tile Roof",
              "premium": 0
            },
            {
              "code": "DD0275",
              "message": "Standard/Selectable Excess : R750",
              "premium": 0
            },
            {
              "code": "DD0031",
              "message": "Service Provider : ADT Security",
              "premium": 0
            },
            {
              "code": "DD0026",
              "message": "Connected to a 24 hour control room with armed response : Yes",
              "premium": 0
            },
            {
              "code": "PD0127",
              "message": "Dwelling situated in a flood risk area : No",
              "premium": 0
            },
            {
              "code": "PD0305",
              "message": "Storage Facility : No",
              "premium": 0
            },
            {
              "code": "PL0355",
              "message": "Are you 55 years or older: No",
              "premium": 0
            },
            {
              "code": "PD0431",
              "message": "Security Requirements Met : Yes",
              "premium": 0
            },
            {
              "code": "PD0146",
              "message": "Full time security guards on the property : Yes",
              "premium": 0
            },
            {
              "code": "PD0525",
              "message": "Is there an alarm in the house : Yes",
              "premium": 0
            },
            {
              "code": "PD0176",
              "message": "24 Hour access control to property : Yes",
              "premium": 0
            },
            {
              "code": "PD0149",
              "message": "Perimeter wall is 1.8m high : Yes",
              "premium": 0
            },
            {
              "code": "PL0240",
              "message": "Interleading door between outbuilding or garage adjoining the main residence : No",
              "premium": 0
            },
            {
              "code": "PD0140",
              "message": "All access doors are fitted with security gates : Yes",
              "premium": 0
            },
            {
              "code": "PD0136",
              "message": "All opening windows fitted with burglar bars : Yes",
              "premium": 0
            },
            {
              "code": "PD0522",
              "message": "Is the residence likely to be unoccupied for 7 days in the first month : No",
              "premium": 0
            },
            {
              "code": "PD0523",
              "message": "Unoccupied for more than 60 days in a year : No",
              "premium": 0
            },
            {
              "code": "PD0159",
              "message": "Unoccupied during working hours : No",
              "premium": 0
            },
            {
              "code": "PD0022",
              "message": "Use of Dwelling : Standard",
              "premium": 0
            },
            {
              "code": "PD0118",
              "message": "Situation of the Home : Security Village / Complex",
              "premium": 0
            },
            {
              "code": "PD0178",
              "message": "Hired or Let Out : No",
              "premium": 0
            },
            {
              "code": "PD0116",
              "message": "Main Residence : Yes",
              "premium": 0
            },
            {
              "code": "PD0099",
              "message": "CFG 9",
              "premium": 0
            },
            {
              "code": "PD0187",
              "message": "Brick Stone or Concrete Wall",
              "premium": 0
            },
            {
              "code": "PC005",
              "message": "Sub Total",
              "premium": 30669
            },
            {
              "code": "SAS001",
              "message": "Sasria Premium",
              "premium": 318
            },
            {
              "code": "FIN001",
              "message": "Final Premium",
              "premium": 30987
            }
          ],
          "extensions": [
            {
              "id": "001",
              "code": "PE0048",
              "sumInsuredAmount": 2500000,
              "premiumAmount": 0,
              "message": "Accidental Damage including Powersurge : R25 000"
            }
          ],
          "riskExcess": {
            "title": null,
            "details": null,
            "message": null,
            "items": [
              {
                "id": "001",
                "code": "1078",
                "description": "Subsidence and Landslip",
                "type": "",
                "percentage": 0,
                "minimumAmount": 500000,
                "maximumAmount": 0
              },
              {
                "id": "002",
                "code": "1050",
                "description": "Accidental Damage Including Powersurge",
                "type": "",
                "percentage": 0,
                "minimumAmount": 100000,
                "maximumAmount": 0
              }
            ]
          },
          "message": null,
          "riskInfoQuestions": [
            {
              "code": "21",
              "question": "Number of claims in the last 12 months:",
              "answer": "0"
            },
            {
              "code": "22",
              "question": "Number of claims in the last 13 to 24 months:",
              "answer": "0"
            },
            {
              "code": "23",
              "question": "Number of claims in the last 25 to 36 months:",
              "answer": "0"
            },
            {
              "code": "168",
              "question": "Number of claims in the last 37 to 48 months:",
              "answer": "0"
            },
            {
              "code": "169",
              "question": "Number of claims in the last 49 to 60 months:",
              "answer": "0"
            }
          ],
          "premium": {
            "original": 0,
            "discounted": 0,
            "loaded": 0,
            "discountPerc": 0,
            "loadingPerc": 0,
            "nettPremium": 30669,
            "grossPremium": 30669,
            "sasriaCategory": "F1",
            "sasriaPremium": 318,
            "sumInsuredAmount": 70000000
          },
          "inceptionDate": "2022-09-09T00:00:00",
          "dwelling": {
            "registeredOwner": null,
            "residentialAddress": {
              "line1": "101 Piet Retief Street",
              "line2": "Ficksburg",
              "line3": "9730",
              "line4": "",
              "postalCodeId": "9730:Ficksburg:0002_MNFG"
            },
            "occupationDate": "2022-09-05T00:00:00",
            "numberOfConsecutiveUnoccupiedDays": 5,
            "dwellingType": "018",
            "wallConstruction": "001",
            "roofType": "001"
          },
          "claimFreeGroup": 9,
          "voluntaryExcess": 0,
          "coverType": "004",
          "hasProofOfClaimFreeGroup": true,
          "sumInsuredAmount": 70000000,
          "memos": null
        }
      ]
    },
    "vehicleSection": {
      "risks": [
        {
          "usualDriver": {
            "gender": "Male",
            "nationality": "SouthAfrican",
            "name": "Brolink",
            "idOrPassportNumber": "8910265098089",
            "dateOfBirth": "1989-10-26T00:00:00",
            "driversLicenseIssueDate": "2009-08-02T00:00:00",
            "driversLicenseType": "A"
          },
          "riskId": "0001",
          "yearsDrivenInsuredCar": 0,
          "vehicleType": "MB",
          "riskPremiumAmount": 212629,
          "premium": {
            "original": 0,
            "discounted": 0,
            "loaded": 0,
            "discountPerc": 0,
            "loadingPerc": 0,
            "nettPremium": 212629,
            "grossPremium": 212629,
            "sasriaCategory": "M1",
            "sasriaPremium": 202,
            "sumInsuredAmount": 19630000
          },
          "inceptionDate": "2022-09-09T00:00:00",
          "vehicleDetails": {
            "makeCode": "050-71-931",
            "makeDescription": "BMW",
            "modelDescription": "S 1000 XR",
            "yearManufactured": 2019,
            "registrationNumber": "TBA",
            "engineNumber": "TBA",
            "vinNumber": "TBA"
          },
          "registeredOwner": {
            "name": "Brolink",
            "idNumber": "8910265098089",
            "dateOfBirth": "1989-10-26T00:00:00"
          },
          "useType": "001",
          "residentialAddress": {
            "line1": "101 Piet Retief Street",
            "line2": "Ficksburg",
            "line3": "",
            "line4": "",
            "postalCodeId": "9730:Ficksburg:0002_MNFG"
          },
          "claimFreeGroup": 9,
          "hasProofOfClaimFreeGroup": true,
          "voluntaryExcess": 0,
          "sumInsuredType": "Retail",
          "sumInsuredAmount": 19630000,
          "coverType": "001"
        },
        {
          "usualDriver": {
            "gender": "Male",
            "nationality": "SouthAfrican",
            "name": "Brolink",
            "idOrPassportNumber": "8910265098089",
            "dateOfBirth": "1989-10-26T00:00:00",
            "driversLicenseIssueDate": "2009-08-02T00:00:00",
            "driversLicenseType": "B"
          },
          "riskId": "0002",
          "yearsDrivenInsuredCar": 12,
          "vehicleType": "MO",
          "riskPremiumAmount": 76613,
          "premium": {
            "original": 0,
            "discounted": 0,
            "loaded": 0,
            "discountPerc": 0,
            "loadingPerc": 0,
            "nettPremium": 76613,
            "grossPremium": 76613,
            "sasriaCategory": "M1",
            "sasriaPremium": 202,
            "sumInsuredAmount": 12060000
          },
          "inceptionDate": "2022-09-09T00:00:00",
          "vehicleDetails": {
            "makeCode": "640-27-700",
            "makeDescription": "VOLKSWAGEN",
            "modelDescription": "POLO 1.4 TRENDLINE 5DR",
            "yearManufactured": 2014,
            "registrationNumber": "7078",
            "engineNumber": "TBC",
            "vinNumber": "TBC"
          },
          "registeredOwner": {
            "name": "Brolink",
            "idNumber": "8910265098089",
            "dateOfBirth": "1989-10-26T00:00:00"
          },
          "useType": "001",
          "residentialAddress": {
            "line1": "34 Sabat Street",
            "line2": "Somerset West Air-Force Base",
            "line3": "",
            "line4": "",
            "postalCodeId": "7280:Bredasdorp:0001_MNFG"
          },
          "claimFreeGroup": 9,
          "hasProofOfClaimFreeGroup": true,
          "voluntaryExcess": 0,
          "sumInsuredType": "Retail",
          "sumInsuredAmount": 12060000,
          "coverType": "001"
        },
        {
          "usualDriver": {
            "gender": "Male",
            "nationality": "SouthAfrican",
            "name": "Brolink",
            "idOrPassportNumber": "8910265098089",
            "dateOfBirth": "1989-10-26T00:00:00",
            "driversLicenseIssueDate": "2009-08-02T00:00:00",
            "driversLicenseType": "B"
          },
          "riskId": "0003",
          "yearsDrivenInsuredCar": 12,
          "vehicleType": "MO",
          "riskPremiumAmount": 258804,
          "premium": {
            "original": 0,
            "discounted": 0,
            "loaded": 0,
            "discountPerc": 0,
            "loadingPerc": 0,
            "nettPremium": 258804,
            "grossPremium": 258804,
            "sasriaCategory": "M1",
            "sasriaPremium": 202,
            "sumInsuredAmount": 55050000
          },
          "inceptionDate": "2022-09-09T00:00:00",
          "vehicleDetails": {
            "makeCode": "050-38-085",
            "makeDescription": "BMW",
            "modelDescription": "320D A/T (G20)",
            "yearManufactured": 2019,
            "registrationNumber": "TBA",
            "engineNumber": "TBC",
            "vinNumber": "TBC"
          },
          "registeredOwner": {
            "name": "Brolink",
            "idNumber": "8910265098089",
            "dateOfBirth": "1989-10-26T00:00:00"
          },
          "useType": "001",
          "residentialAddress": {
            "line1": "101 Piet Retief Street",
            "line2": "Ficksburg",
            "line3": "",
            "line4": "",
            "postalCodeId": "9730:Ficksburg:0002_MNFG"
          },
          "claimFreeGroup": 9,
          "hasProofOfClaimFreeGroup": true,
          "voluntaryExcess": 0,
          "sumInsuredType": "Retail",
          "sumInsuredAmount": 55050000,
          "coverType": "001"
        }
      ]
    },
    "personalAccidentSection": {
      "risks": [
        {
          "risks": null
        }
      ]},
    "personalLiabilitySection": {
      "risks": [
        {
          "risks": null
        }
      ]
    },
    "specialCoverSection": {
      "risks": [
        {
          "riskId": "0001",
          "postalCode": "9730:Ficksburg:0002_MNFG",
          "items": [
            {
              "itemId": "0001-001",
              "rateCode": {
                "code": "PB0736",
                "description": "Brolink Assist"
              },
              "sumInsuredAmount": 100,
              "premiumAmount": 4229,
              "inceptionDate": "2022-09-09T00:00:00",
              "message": "Brolink Assist",
              "premium": {
                "original": 0,
                "discounted": 0,
                "loaded": 0,
                "discountPerc": 0,
                "loadingPerc": 0,
                "nettPremium": 4229,
                "grossPremium": 4229,
                "sasriaCategory": null,
                "sasriaPremium": 0,
                "sumInsuredAmount": 100
              },
              "description": "Assistance Benefits",
              "isCrossSale": true
            }
          ],
          "riskExcess": null,
          "riskInfoQuestions": [
            {
              "code": "125",
              "question": "Any civil or criminal litigation in the past 3 years?",
              "answer": {
                "code": [],
                "description": []
              }
            },
            {
              "code": "6",
              "question": "Has any circumstance given rise to the payment of legal fees by yourself?",
              "answer": {
                "code": [],
                "description": []
              }
            }
          ],
          "premium": {
            "original": 0,
            "discounted": 0,
            "loaded": 0,
            "discountPerc": 0,
            "loadingPerc": 0,
            "nettPremium": 4229,
            "grossPremium": 0,
            "sasriaCategory": null,
            "sasriaPremium": 0,
            "sumInsuredAmount": 100
          }
        }
      ]
    },
    "personalComputerSection": {
      "risks": [
        {
          "riskId": "0001",
          "items": [
            {
              "itemId": "0001-001",
              "component": {
                "site": null,
                "container": null
              },
              "rateCode": "PB0221",
              "premiumAmount": 5801,
              "message": "Palm tops / Portable hand held equipment",
              "premium": {
                "original": 0,
                "discounted": 0,
                "loaded": 0,
                "discountPerc": 0,
                "loadingPerc": 0,
                "nettPremium": 5801,
                "grossPremium": 5801,
                "sasriaCategory": null,
                "sasriaPremium": 0,
                "sumInsuredAmount": 500000
              },
              "inceptionDate": "2022-09-09T00:00:00",
              "sumInsuredAmount": 500000,
              "description": "Kindle",
              "isCrossSale": false,
              "isHirePurchase": false,
              "manufacturer": "",
              "modelAndSerial": "",
              "year": 0
            }
          ],
          "sumInsuredAmount": 500000,
          "totalPremiumAmount": 5801,
          "riskExcess": {
            "title": null,
            "details": null,
            "message": null,
            "items": [
              {
                "id": "001",
                "code": "1091",
                "description": "Palm Tops / Portable Hand Held Equipment",
                "type": "",
                "percentage": 0,
                "minimumAmount": 50000,
                "maximumAmount": 0
              }
            ]
          },
          "riskInfoQuestions": null,
          "premium": {
            "original": 0,
            "discounted": 0,
            "loaded": 0,
            "discountPerc": 0,
            "loadingPerc": 0,
            "nettPremium": 5801,
            "grossPremium": 0,
            "sasriaCategory": "F1",
            "sasriaPremium": 2,
            "sumInsuredAmount": 500000
          },
          "physicalAddress": {
            "line1": "101 Piet Retief Street",
            "line2": "Ficksburg",
            "line3": "",
            "line4": "",
            "postalCodeId": "9730:Ficksburg:MNFG"
          },
          "memos": null
        }
      ]
    },
    "generalConditionsSection": {
      "conditions": [
        {
          "items": [
            {
              "memoCode": {
                "code": "1986",
                "description": "Sasria Notice"
              },
              "partialConditionWording": "Endorsement No. 1986 - Sasria ",
              "inceptionDate": "2022-09-09T00:00:00",
              "message": null,
              "printOnSchedule": true
            },
            {
              "memoCode": {
                "code": "6025",
                "description": "Sharing Of Insurance Information"
              },
              "partialConditionWording": "Sharing Of Insurance Informati",
              "inceptionDate": "2022-09-09T00:00:00",
              "message": null,
              "printOnSchedule": true
            }
          ],
          "conditionId": "0001"
        }
      ]
    }
  },
  "digitalBrokerDetails": null
}
  
const client = {
  "id": "910201568081",
  "firstName": "Anthony",
  "surnameOnId": "Smith",
  "initials": "A",
  "gender": "Male",
  "title": "Mr",
  "nationality": "South African",     
  "dateOfBirth": "01 February 1991",
  "maritalStatus": "single",
  "occupation": "Programmer",
  "postalAddress": {
    "line1": "string",
    "line2": "string",
    "line3": "string",
    "line4": "string",
    "postalCode": "string"
  },
  "homeTelephoneNumber": {
    "code": "+27",
    "number": "0791234567"
  },
  "workTelephoneNumber": {
    "code": "+27",
    "number": "0112345678"
  },
  "cellTelephoneNumber": {
    "code": "+27",
    "number": "0791234567"
  },
  "faxTelephoneNumber": {
    "code": "string",
    "number": "string"
  },
  "emailAddress": "A.Smith@gmail.com",
  "preferredContactMethod": "email",
  "isMarketingAllowed": true,
  "claimSummary": {},
  "sourceOfBusiness": "string",
  "casaDetails": {
    "casaCountryOfResidence": {
      "casaCountryCode": "string",
      "casaCountryDesc": "string"
    }
  }
}

const policyList = {
"policyNum": 
{
  policies: [
    {
      id: "POL-123",
      status: "active"
    },
    {
      id: "POL-456",
      status: "inactive"
    },
    {
      id: "POL-789",
      status: "pending"
    },
    {
      id: "POL-234",
      status: "expired"
    },
    {
      id: "POL-567",
      status: "canceled"
    }
  ]
}
}

export default policy;
export { client }
export {policyList}