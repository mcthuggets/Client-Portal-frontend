import React from 'react'

export default function paymentDisplay({paymentData}) {

    console.log(paymentData);
  return (
    <>


    <div className='card'>
      <h2>Payment Details</h2>
      <p>Option: {paymentData.option}</p>
      <p>Strike Day: {paymentData.strikeDay}</p>
      {paymentData.option === 'Primary' && (
        <div>
          <h3>Primary paymentData Method</h3>
          <p>Method: {paymentData.primary.method}</p>
          <p>Account Number: {paymentData.primary.accountNumber}</p>
          <p>Account Holder: {paymentData.primary.accountHolder.initials} {paymentData.primary.accountHolder.surname}</p>
          {paymentData.primary.method === 'DebitOrder' && (
            <div>
              <h4>Debit Order Details</h4>
              <p>Branch Code: {paymentData.primary.debitOrder.branchCode}</p>
              <p>Branch Name: {paymentData.primary.debitOrder.branchName}</p>
            </div>
          )}
        </div>
      )}
    </div>

    </>
  )
}
