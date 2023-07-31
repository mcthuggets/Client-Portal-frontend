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
    "broker": {
      "name": "Jane Smith",
      "email": "jane@example.com",
      "cellNumber": "123-456-7890",
      "profileImg": "https://example.com/broker_profile.jpg"
    }
  }

  export default policy;