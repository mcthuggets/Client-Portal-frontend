const policy = {
  "policyNumber": "POL-12345",
  "policyHolder": "John Doe",
  "totalPremium": 2500.00,
  "policyStart": "2023-07-01",
  "intermediaryFee": 150.00,
  "sections": {
    "allRiskSection": {
      "totalPremiumAmount": 500.00,
      "risks": [
        "Mobile phone",
        "Laptop",
        "Camera"
      ]
    },
    "buildingSection": {
      "totalPremiumAmount": 1400.00,
      "risks": [
        {
        "riskId": "RISK1234",
        "Address": "123 Lichus Street",
        "buildingType": "3 Bedroom House",
        "typeOfCover":  "Comprehensive",
        "structures": "Main House, Outbuilding",
        "premium": 1400.00,
        "sumInsured": 2500000,
        "Excess": 100000,
        "SASRIAPremium": 3,
        "BrokerFee":120
      } 
      
      ]
    },
    "generalConditionsSection": {
      "totalPremiumAmount": 120.00,
      "risks": [
        {
          "riskId": "GC_RISK001",
          "description": "General Condition A",
          "premium": {
            "totalSumInsuredAmount": 0,
            "totalPremiumAmount": 60.00
          }
        },
        {
          "riskId": "GC_RISK002",
          "description": "General Condition B",
          "premium": {
            "totalSumInsuredAmount": 0,
            "totalPremiumAmount": 60.00
          }
        }
      ]
    },      
    "personalComputerSection": {
      "totalPremiumAmount": 847.00,
      "risks": [
          {
          "riskId": "RISK1234",
          "Address": "123 Lichus Street",
          "ComputerName": "DELL",
          "typeOfCover":  "Comprehensive",
          "premium": 1400.00,
          "sumInsured": 2500000,
          "Excess": 100000,
          "SASRIAPremium": 3,
          "BrokerFee":120
        } 
        
        ]
    },
    "personalAccidentSection": {
      "totalPremiumAmount": 890.50,
      "risks": [
        "Car","Contents"
      ]
    },
    "personalLiabilitySection": {
      "totalPremiumAmount": 890.50,
      "risks": [
        {
          "riskId": "PL_RISK001",
          "description": "Third Party Liability",
          "premium": {
            "totalSumInsuredAmount": 500000,
            "totalPremiumAmount": 450.50
          },
          "items": [
            {
              "itemId": "item001",
              "rateCode": {
                "code": "TP001",
                "description": "Third Party Liability - Basic"
              },
              "sumInsuredAmount": 500000,
              "premiumAmount": 450.50
            }
          ]
        },
        {
          "riskId": "PL_RISK002",
          "description": "Public Liability",
          "premium": {
            "totalSumInsuredAmount": 300000,
            "totalPremiumAmount": 440.00
          },
          "items": [
            {
              "itemId": "item002",
              "rateCode": {
                "code": "PL001",
                "description": "Public Liability - Standard"
              },
              "sumInsuredAmount": 300000,
              "premiumAmount": 440.00
            }
          ]
        }
      ]
    },
    "specialCoverSection": {
      "totalPremiumAmount": 425.00,
      "risks": [
        {
          "riskId": "SC_RISK001",
          "description": "Special Coverage A",
          "premium": {
            "totalSumInsuredAmount": 10000,
            "totalPremiumAmount": 200.00
          }
        },
        {
          "riskId": "SC_RISK002",
          "description": "Special Coverage B",
          "premium": {
            "totalSumInsuredAmount": 15000,
            "totalPremiumAmount": 225.00
          }
        }
      ]
    },            
    "vehicleSection": {
        "risks": [
          {
            "riskId": "RISK1234",
            "vehicleType": "Car",
            "riskPremiumAmount": 500,
            "riskExcess": {
              "title": "Risk Excess",
              "details": "Details about the risk excess",
              "message": "Risk excess information",
              "items": [
                {
                  "id": "EXC001",
                  "code": "EXC_CODE_001",
                  "description": "Accident Excess",
                  "type": "Fixed",
                  "percentage": 0,
                  "minimumAmount": 100,
                  "maximumAmount": 1000
                },
                {
                  "id": "EXC002",
                  "code": "EXC_CODE_002",
                  "description": "Theft Excess",
                  "type": "Percentage",
                  "percentage": 5,
                  "minimumAmount": 0,
                  "maximumAmount": 500
                }
              ]
            },
            "inceptionDate": "2023-07-25T11:22:48.427Z",
            "vehicleDetails": {
              "makeCode": "MAK001",
              "makeDescription": "Toyota",
              "modelDescription": "Corolla",
              "yearManufactured": 2020,
              "registrationNumber": "ABC123",
              "engineNumber": "ENG456",
              "vinNumber": "VIN789"
            },
            "registeredOwner": {
              "name": "John Doe",
              "idNumber": "ID123456789",
              "dateOfBirth": "1990-01-15T00:00:00.000Z"
            },
            "useType": "Personal",
            "residentialAddress": {
              "line1": "123 Main Street",
              "line2": "Apartment 4B",
              "line3": "Suburbia",
              "line4": "Cityville",
              "postalCodeId": "PST123"
            },
            "claimFreeGroup": 3,
            "hasProofOfClaimFreeGroup": true,
            "voluntaryExcess": 250,
            "sumInsuredType": "Comprehensive",
            "sumInsuredAmount": 30000,
            "coverType": "Third Party",
            "premium": {
              "original": 600,
              "discounted": 550,
              "loaded": 0,
              "discountPerc": 10,
              "loadingPerc": 0,
              "nettPremium": 550,
              "grossPremium": 600,
              "sasriaCategory": "Category A",
              "sasriaPremium": 50,
              "sumInsuredAmount": 30000
            }
          },{
            "riskId": "RISK1234",
            "vehicleType": "Car",
            "riskPremiumAmount": 500,
            "riskExcess": {
              "title": "Risk Excess",
              "details": "Details about the risk excess",
              "message": "Risk excess information",
              "items": [
                {
                  "id": "EXC001",
                  "code": "EXC_CODE_001",
                  "description": "Accident Excess",
                  "type": "Fixed",
                  "percentage": 0,
                  "minimumAmount": 100,
                  "maximumAmount": 1000
                },
                {
                  "id": "EXC002",
                  "code": "EXC_CODE_002",
                  "description": "Theft Excess",
                  "type": "Percentage",
                  "percentage": 5,
                  "minimumAmount": 0,
                  "maximumAmount": 500
                }
              ]
            },
            "inceptionDate": "2023-07-25T11:22:48.427Z",
            "vehicleDetails": {
              "makeCode": "MAK001",
              "makeDescription": "Toyota",
              "modelDescription": "Corolla",
              "yearManufactured": 2020,
              "registrationNumber": "ABC123",
              "engineNumber": "ENG456",
              "vinNumber": "VIN789"
            },
            "registeredOwner": {
              "name": "John Doe",
              "idNumber": "ID123456789",
              "dateOfBirth": "1990-01-15T00:00:00.000Z"
            },
            "useType": "Personal",
            "residentialAddress": {
              "line1": "123 Main Street",
              "line2": "Apartment 4B",
              "line3": "Suburbia",
              "line4": "Cityville",
              "postalCodeId": "PST123"
            },
            "claimFreeGroup": 3,
            "hasProofOfClaimFreeGroup": true,
            "voluntaryExcess": 250,
            "sumInsuredType": "Comprehensive",
            "sumInsuredAmount": 30000,
            "coverType": "Third Party",
            "premium": {
              "original": 600,
              "discounted": 550,
              "loaded": 0,
              "discountPerc": 10,
              "loadingPerc": 0,
              "nettPremium": 550,
              "grossPremium": 600,
              "sasriaCategory": "Category A",
              "sasriaPremium": 50,
              "sumInsuredAmount": 30000
            }
          }
        ]
      }

   
  },
  "client" : {
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
},
  "broker": {
    "name": "Jane Smith",
    "email": "jane@example.com",
    "cellNumber": "123-456-7890",
    "profileImg": "https://example.com/broker_profile.jpg"
  }
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