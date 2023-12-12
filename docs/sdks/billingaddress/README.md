# BillingAddress
(*billingAddress*)

## Overview

A billing address is used to calculate your bill correctly.

<https://developer.fastly.com/reference/api/account/billing-address>
### Available Operations

* [addBillingAddr](#addbillingaddr) - Add a billing address to a customer
* [deleteBillingAddr](#deletebillingaddr) - Delete a billing address
* [getBillingAddr](#getbillingaddr) - Get a billing address
* [updateBillingAddr](#updatebillingaddr) - Update a billing address

## addBillingAddr

Add a billing address to a customer.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { TypeBillingAddress } from "Fastly/dist/sdk/models/components";

async function run() {
  const sdk = new Fastly({
    token: "<YOUR_API_KEY_HERE>",
  });

  const res = await sdk.billingAddress.addBillingAddr({
    billingAddressRequest: {
      data: {
        attributes: {
          address1: "80719 Dorothea Mountain",
          address2: "Apt. 652",
          city: "New Rasheedville",
          country: "US",
          locality: "New Castle",
          postalCode: "53538-5902",
          state: "DE",
        },
      },
    },
    customerId: "x4xCwxxJxGCx123Rx5xTx",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.AddBillingAddrRequest](../../sdk/models/operations/addbillingaddrrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.AddBillingAddrResponse](../../sdk/models/operations/addbillingaddrresponse.md)>**
### Errors

| Error Object                                   | Status Code                                    | Content Type                                   |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| errors.BillingAddressVerificationErrorResponse | 400                                            | application/vnd.api+json                       |
| errors.SDKError                                | 400-600                                        | */*                                            |

## deleteBillingAddr

Delete a customer's billing address.

### Example Usage

```typescript
import { Fastly } from "Fastly";

async function run() {
  const sdk = new Fastly({
    token: "<YOUR_API_KEY_HERE>",
  });

  const res = await sdk.billingAddress.deleteBillingAddr({
    customerId: "x4xCwxxJxGCx123Rx5xTx",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.DeleteBillingAddrRequest](../../sdk/models/operations/deletebillingaddrrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.DeleteBillingAddrResponse](../../sdk/models/operations/deletebillingaddrresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getBillingAddr

Get a customer's billing address.

### Example Usage

```typescript
import { Fastly } from "Fastly";

async function run() {
  const sdk = new Fastly({
    token: "<YOUR_API_KEY_HERE>",
  });

  const res = await sdk.billingAddress.getBillingAddr({
    customerId: "x4xCwxxJxGCx123Rx5xTx",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.GetBillingAddrRequest](../../sdk/models/operations/getbillingaddrrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.GetBillingAddrResponse](../../sdk/models/operations/getbillingaddrresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## updateBillingAddr

Update a customer's billing address. You may update only part of the customer's billing address.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { TypeBillingAddress } from "Fastly/dist/sdk/models/components";

async function run() {
  const sdk = new Fastly({
    token: "<YOUR_API_KEY_HERE>",
  });

  const res = await sdk.billingAddress.updateBillingAddr({
    customerId: "x4xCwxxJxGCx123Rx5xTx",
    updateBillingAddressRequest: {
      data: {
        attributes: {
          address1: "80719 Dorothea Mountain",
          address2: "Apt. 652",
          city: "New Rasheedville",
          country: "US",
          locality: "New Castle",
          postalCode: "53538-5902",
          state: "DE",
        },
      },
    },
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.UpdateBillingAddrRequest](../../sdk/models/operations/updatebillingaddrrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.UpdateBillingAddrResponse](../../sdk/models/operations/updatebillingaddrresponse.md)>**
### Errors

| Error Object                                   | Status Code                                    | Content Type                                   |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| errors.BillingAddressVerificationErrorResponse | 400                                            | application/vnd.api+json                       |
| errors.SDKError                                | 400-600                                        | */*                                            |
