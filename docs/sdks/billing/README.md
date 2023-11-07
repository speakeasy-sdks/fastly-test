# Billing
(*.billing*)

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
import { Fastly } from "Fastly";
import { GetInvoiceRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const month: string = "05";
const year: string = "2020";

  const res = await sdk.billing.getInvoice(month, year);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `month`                                                      | *string*                                                     | :heavy_check_mark:                                           | 2-digit month.                                               | 05                                                           |
| `year`                                                       | *string*                                                     | :heavy_check_mark:                                           | 4-digit year.                                                | 2020                                                         |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.GetInvoiceResponse](../../models/operations/getinvoiceresponse.md)>**


## getInvoiceById

Get the invoice for the given invoice_id.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { GetInvoiceByIdRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const customerId: string = "x4xCwxxJxGCx123Rx5xTx";
const invoiceId: string = "7SlAESxcJ2zxHOV4gQ9y9X";

  const res = await sdk.billing.getInvoiceById(customerId, invoiceId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `customerId`                                                 | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the customer.                | x4xCwxxJxGCx123Rx5xTx                                        |
| `invoiceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the invoice.                 | 7SlAESxcJ2zxHOV4gQ9y9X                                       |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.GetInvoiceByIdResponse](../../models/operations/getinvoicebyidresponse.md)>**


## getInvoiceMtd

Get the current month-to-date estimate. This endpoint has two different responses. Under normal circumstances, it generally takes less than 5 seconds to generate but in certain cases can take up to 60 seconds. Once generated the month-to-date estimate is cached for 4 hours, and is available the next request will return the JSON representation of the month-to-date estimate. While a report is being generated in the background, this endpoint will return a `202 Accepted` response. The full format of which can be found in detail in our [billing calculation guide](https://docs.fastly.com/en/guides/how-we-calculate-your-bill). There are certain accounts for which we are unable to generate a month-to-date estimate. For example, accounts who have parent-pay are unable to generate an MTD estimate. The parent accounts are able to generate a month-to-date estimate but that estimate will not include the child accounts amounts at this time.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { GetInvoiceMtdRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const customerId: string = "x4xCwxxJxGCx123Rx5xTx";
const month: string = "05";
const year: string = "2020";

  const res = await sdk.billing.getInvoiceMtd(customerId, month, year);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `customerId`                                                 | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the customer.                | x4xCwxxJxGCx123Rx5xTx                                        |
| `month`                                                      | *string*                                                     | :heavy_minus_sign:                                           | 2-digit month.                                               | 05                                                           |
| `year`                                                       | *string*                                                     | :heavy_minus_sign:                                           | 4-digit year.                                                | 2020                                                         |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.GetInvoiceMtdResponse](../../models/operations/getinvoicemtdresponse.md)>**

