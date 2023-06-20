# billing

## Overview

Get information on current and past bills.

<https://developer.fastly.com/reference/api/account/billing>
### Available Operations

* [getInvoice](#getinvoice) - Get an invoice
* [getInvoiceById](#getinvoicebyid) - Get an invoice
* [getInvoiceMtd](#getinvoicemtd) - Get month-to-date billing estimate

## getInvoice

Get the invoice for a given year and month. Can be any month from when the Customer was created to the current month.

### Example Usage

```typescript
import { Fastly } from "FastlyTest";
import { GetInvoiceResponse } from "FastlyTest/dist/sdk/models/operations";
import { BillingResponseStatusStatus } from "FastlyTest/dist/sdk/models/shared";

const sdk = new Fastly();

sdk.billing.getInvoice({
  month: "05",
  year: "2020",
}, {
  token: "",
}).then((res: GetInvoiceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.GetInvoiceRequest](../../models/operations/getinvoicerequest.md)   | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `security`                                                                     | [operations.GetInvoiceSecurity](../../models/operations/getinvoicesecurity.md) | :heavy_check_mark:                                                             | The security requirements to use for the request.                              |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.GetInvoiceResponse](../../models/operations/getinvoiceresponse.md)>**


## getInvoiceById

Get the invoice for the given invoice_id.

### Example Usage

```typescript
import { Fastly } from "FastlyTest";
import { GetInvoiceByIdResponse } from "FastlyTest/dist/sdk/models/operations";
import { BillingResponseStatusStatus } from "FastlyTest/dist/sdk/models/shared";

const sdk = new Fastly();

sdk.billing.getInvoiceById({
  customerId: "x4xCwxxJxGCx123Rx5xTx",
  invoiceId: "7SlAESxcJ2zxHOV4gQ9y9X",
}, {
  token: "",
}).then((res: GetInvoiceByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.GetInvoiceByIdRequest](../../models/operations/getinvoicebyidrequest.md)   | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `security`                                                                             | [operations.GetInvoiceByIdSecurity](../../models/operations/getinvoicebyidsecurity.md) | :heavy_check_mark:                                                                     | The security requirements to use for the request.                                      |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.GetInvoiceByIdResponse](../../models/operations/getinvoicebyidresponse.md)>**


## getInvoiceMtd

Get the current month-to-date estimate. This endpoint has two different responses. Under normal circumstances, it generally takes less than 5 seconds to generate but in certain cases can take up to 60 seconds. Once generated the month-to-date estimate is cached for 4 hours, and is available the next request will return the JSON representation of the month-to-date estimate. While a report is being generated in the background, this endpoint will return a `202 Accepted` response. The full format of which can be found in detail in our [billing calculation guide](https://docs.fastly.com/en/guides/how-we-calculate-your-bill). There are certain accounts for which we are unable to generate a month-to-date estimate. For example, accounts who have parent-pay are unable to generate an MTD estimate. The parent accounts are able to generate a month-to-date estimate but that estimate will not include the child accounts amounts at this time.

### Example Usage

```typescript
import { Fastly } from "FastlyTest";
import { GetInvoiceMtdResponse } from "FastlyTest/dist/sdk/models/operations";
import { BillingEstimateResponseStatusStatus } from "FastlyTest/dist/sdk/models/shared";

const sdk = new Fastly();

sdk.billing.getInvoiceMtd({
  customerId: "x4xCwxxJxGCx123Rx5xTx",
  month: "05",
  year: "2020",
}, {
  token: "",
}).then((res: GetInvoiceMtdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.GetInvoiceMtdRequest](../../models/operations/getinvoicemtdrequest.md)   | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `security`                                                                           | [operations.GetInvoiceMtdSecurity](../../models/operations/getinvoicemtdsecurity.md) | :heavy_check_mark:                                                                   | The security requirements to use for the request.                                    |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.GetInvoiceMtdResponse](../../models/operations/getinvoicemtdresponse.md)>**

