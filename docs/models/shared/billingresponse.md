# BillingResponse

OK


## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             | Example                                                                                                 |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `customerId`                                                                                            | *string*                                                                                                | :heavy_minus_sign:                                                                                      | N/A                                                                                                     | x4xCwxxJxGCx123Rx5xTx                                                                                   |
| `endTime`                                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)           | :heavy_minus_sign:                                                                                      | Date and time in ISO 8601 format.                                                                       | 2020-04-09T18:14:30Z                                                                                    |
| `invoiceId`                                                                                             | *string*                                                                                                | :heavy_minus_sign:                                                                                      | N/A                                                                                                     | 7SlAESxcJ2zxHOV4gQ9y9X                                                                                  |
| `lineItems`                                                                                             | [BillingResponseLineItem](../../models/shared/billingresponselineitem.md)[]                             | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |                                                                                                         |
| `regions`                                                                                               | Record<string, Record<string, [BillingResponseRegions](../../models/shared/billingresponseregions.md)>> | :heavy_minus_sign:                                                                                      | Breakdown of regional data for products that are region based.                                          |                                                                                                         |
| `startTime`                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)           | :heavy_minus_sign:                                                                                      | Date and time in ISO 8601 format.                                                                       | 2020-04-09T18:14:30Z                                                                                    |
| `status`                                                                                                | [BillingResponseStatus](../../models/shared/billingresponsestatus.md)                                   | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |                                                                                                         |
| `total`                                                                                                 | [BillingResponseTotal](../../models/shared/billingresponsetotal.md)                                     | :heavy_minus_sign:                                                                                      | Complete summary of the billing information.                                                            |                                                                                                         |
| `vendorState`                                                                                           | *string*                                                                                                | :heavy_minus_sign:                                                                                      | The current state of our third-party billing vendor. One of `up` or `down`.                             |                                                                                                         |