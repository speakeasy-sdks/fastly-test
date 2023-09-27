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
import { Fastly } from "FastlyTestJS";
import { AddBillingAddrResponse } from "FastlyTestJS/dist/sdk/models/operations";
import { TypeBillingAddress } from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.billingAddress.addBillingAddr({
  billingAddressRequestInput: {
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
      type: TypeBillingAddress.BillingAddress,
    },
    skipVerification: false,
  },
  customerId: "x4xCwxxJxGCx123Rx5xTx",
}).then((res: AddBillingAddrResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.AddBillingAddrRequest](../../models/operations/addbillingaddrrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.AddBillingAddrResponse](../../models/operations/addbillingaddrresponse.md)>**


## deleteBillingAddr

Delete a customer's billing address.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { DeleteBillingAddrResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.billingAddress.deleteBillingAddr({
  customerId: "x4xCwxxJxGCx123Rx5xTx",
}).then((res: DeleteBillingAddrResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.DeleteBillingAddrRequest](../../models/operations/deletebillingaddrrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.DeleteBillingAddrResponse](../../models/operations/deletebillingaddrresponse.md)>**


## getBillingAddr

Get a customer's billing address.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { GetBillingAddrResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.billingAddress.getBillingAddr({
  customerId: "x4xCwxxJxGCx123Rx5xTx",
}).then((res: GetBillingAddrResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.GetBillingAddrRequest](../../models/operations/getbillingaddrrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.GetBillingAddrResponse](../../models/operations/getbillingaddrresponse.md)>**


## updateBillingAddr

Update a customer's billing address. You may update only part of the customer's billing address.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { UpdateBillingAddrResponse } from "FastlyTestJS/dist/sdk/models/operations";
import { TypeBillingAddress } from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.billingAddress.updateBillingAddr({
  customerId: "x4xCwxxJxGCx123Rx5xTx",
  updateBillingAddressRequestInput: {
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
      type: TypeBillingAddress.BillingAddress,
    },
    skipVerification: false,
  },
}).then((res: UpdateBillingAddrResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.UpdateBillingAddrRequest](../../models/operations/updatebillingaddrrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.UpdateBillingAddrResponse](../../models/operations/updatebillingaddrresponse.md)>**

