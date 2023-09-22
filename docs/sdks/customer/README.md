# Customer

## Overview

A Customer is the base object that owns your Users and Services. Some information may be limited depending on access level.

<https://developer.fastly.com/reference/api/account/customer>
### Available Operations

* [deleteCustomer](#deletecustomer) - Delete a customer
* [getCustomer](#getcustomer) - Get a customer
* [getLoggedInCustomer](#getloggedincustomer) - Get the logged in customer
* [listUsers](#listusers) - List users
* [updateCustomer](#updatecustomer) - Update a customer

## deleteCustomer

Delete a customer.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { DeleteCustomerResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.customer.deleteCustomer({
  customerId: "x4xCwxxJxGCx123Rx5xTx",
}).then((res: DeleteCustomerResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.DeleteCustomerRequest](../../models/operations/deletecustomerrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.DeleteCustomerResponse](../../models/operations/deletecustomerresponse.md)>**


## getCustomer

Get a specific customer.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { GetCustomerResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.customer.getCustomer({
  customerId: "x4xCwxxJxGCx123Rx5xTx",
}).then((res: GetCustomerResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.GetCustomerRequest](../../models/operations/getcustomerrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.GetCustomerResponse](../../models/operations/getcustomerresponse.md)>**


## getLoggedInCustomer

Get the logged in customer.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { GetLoggedInCustomerResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.customer.getLoggedInCustomer().then((res: GetLoggedInCustomerResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetLoggedInCustomerResponse](../../models/operations/getloggedincustomerresponse.md)>**


## listUsers

List all users from a specified customer id.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { ListUsersResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.customer.listUsers({
  customerId: "x4xCwxxJxGCx123Rx5xTx",
}).then((res: ListUsersResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [operations.ListUsersRequest](../../models/operations/listusersrequest.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.ListUsersResponse](../../models/operations/listusersresponse.md)>**


## updateCustomer

Update a customer.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { UpdateCustomerResponse } from "FastlyTestJS/dist/sdk/models/operations";
import { CustomerBillingNetworkType } from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.customer.updateCustomer({
  customerInput: {
    billingContactId: "quidem",
    billingNetworkType: CustomerBillingNetworkType.Private,
    billingRef: "excepturi",
    force2fa: false,
    forceSso: false,
    hasAccountPanel: false,
    hasImprovedEvents: false,
    hasOpenstackLogging: false,
    hasPci: false,
    ipWhitelist: "pariatur",
    legalContactId: "modi",
    name: "Dr. Jordan Von",
    ownerId: "veritatis",
    phoneNumber: "itaque",
    postalAddress: "incidunt",
    pricingPlan: "enim",
    pricingPlanId: "consequatur",
    securityContactId: "est",
    technicalContactId: "quibusdam",
  },
  customerId: "x4xCwxxJxGCx123Rx5xTx",
}).then((res: UpdateCustomerResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.UpdateCustomerRequest](../../models/operations/updatecustomerrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.UpdateCustomerResponse](../../models/operations/updatecustomerresponse.md)>**

