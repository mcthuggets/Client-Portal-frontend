const policy={
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
        "totalPremiumAmount": 1500.00,
        "risks": [
          "Building",
          "Contents"
        ]
      },
      "vehicleSection": {
        "totalPremiumAmount": 1000.00,
        "risks": [
          "Car",
          "Contents"
        ]
      }
      // Add more sections if needed
    },
    "broker": {
      "name": "Jane Smith",
      "email": "jane@example.com",
      "cellNumber": "123-456-7890",
      "profileImg": "https://example.com/broker_profile.jpg"
    }
  }
  


  const policies = [
    {
      "id": "POL-123",
      "status": "active"
    },
    {
      "id": "POL-456",
      "status": "inactive"
    },
    {
      "id": "POL-789",
      "status": "pending"
    },
    {
      "id": "POL-234",
      "status": "expired"
    },
    {
      "id": "POL-567",
      "status": "canceled"
    }
  ];
  

  export default policies;
  export { policy };