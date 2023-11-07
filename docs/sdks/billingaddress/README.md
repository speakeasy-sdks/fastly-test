# BillingAddress
(*.billingAddress*)

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
import {
  BillingAddressAttributesInput,
  BillingAddressRequest,
  BillingAddressRequestData,
  TypeBillingAddress,
} from "Fastly/dist/sdk/models/components";
import { AddBillingAddrRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const customerId: string = "x4xCwxxJxGCx123Rx5xTx";
const billingAddressRequest: BillingAddressRequest = {
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
};

  const res = await sdk.billingAddress.addBillingAddr(customerId, billingAddressRequest);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `customerId`                                                                     | *string*                                                                         | :heavy_check_mark:                                                               | Alphanumeric string identifying the customer.                                    | x4xCwxxJxGCx123Rx5xTx                                                            |
| `billingAddressRequest`                                                          | [components.BillingAddressRequest](../../models/shared/billingaddressrequest.md) | :heavy_minus_sign:                                                               | Billing address                                                                  |                                                                                  |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |                                                                                  |


### Response

**Promise<[operations.AddBillingAddrResponse](../../models/operations/addbillingaddrresponse.md)>**


## deleteBillingAddr

Delete a customer's billing address.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { DeleteBillingAddrRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const customerId: string = "x4xCwxxJxGCx123Rx5xTx";

  const res = await sdk.billingAddress.deleteBillingAddr(customerId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `customerId`                                                 | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the customer.                | x4xCwxxJxGCx123Rx5xTx                                        |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.DeleteBillingAddrResponse](../../models/operations/deletebillingaddrresponse.md)>**


## getBillingAddr

Get a customer's billing address.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { GetBillingAddrRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const customerId: string = "x4xCwxxJxGCx123Rx5xTx";

  const res = await sdk.billingAddress.getBillingAddr(customerId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `customerId`                                                 | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the customer.                | x4xCwxxJxGCx123Rx5xTx                                        |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.GetBillingAddrResponse](../../models/operations/getbillingaddrresponse.md)>**


## updateBillingAddr

Update a customer's billing address. You may update only part of the customer's billing address.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import {
  BillingAddressAttributesInput,
  TypeBillingAddress,
  UpdateBillingAddressRequest,
  UpdateBillingAddressRequestData,
} from "Fastly/dist/sdk/models/components";
import { UpdateBillingAddrRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const customerId: string = "x4xCwxxJxGCx123Rx5xTx";
const updateBillingAddressRequest: UpdateBillingAddressRequest = {
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
};

  const res = await sdk.billingAddress.updateBillingAddr(customerId, updateBillingAddressRequest);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `customerId`                                                                                 | *string*                                                                                     | :heavy_check_mark:                                                                           | Alphanumeric string identifying the customer.                                                | x4xCwxxJxGCx123Rx5xTx                                                                        |
| `updateBillingAddressRequest`                                                                | [components.UpdateBillingAddressRequest](../../models/shared/updatebillingaddressrequest.md) | :heavy_minus_sign:                                                                           | One or more billing address attributes                                                       |                                                                                              |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |                                                                                              |


### Response

**Promise<[operations.UpdateBillingAddrResponse](../../models/operations/updatebillingaddrresponse.md)>**

