# customer

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

const sdk = new Fastly();

sdk.customer.deleteCustomer({
  customerId: "x4xCwxxJxGCx123Rx5xTx",
}, {
  token: "",
}).then((res: DeleteCustomerResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.DeleteCustomerRequest](../../models/operations/deletecustomerrequest.md)   | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `security`                                                                             | [operations.DeleteCustomerSecurity](../../models/operations/deletecustomersecurity.md) | :heavy_check_mark:                                                                     | The security requirements to use for the request.                                      |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.DeleteCustomerResponse](../../models/operations/deletecustomerresponse.md)>**


## getCustomer

Get a specific customer.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { GetCustomerResponse } from "FastlyTestJS/dist/sdk/models/operations";
import { CustomerResponseBillingNetworkType } from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();

sdk.customer.getCustomer({
  customerId: "x4xCwxxJxGCx123Rx5xTx",
}, {
  token: "",
}).then((res: GetCustomerResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.GetCustomerRequest](../../models/operations/getcustomerrequest.md)   | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `security`                                                                       | [operations.GetCustomerSecurity](../../models/operations/getcustomersecurity.md) | :heavy_check_mark:                                                               | The security requirements to use for the request.                                |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.GetCustomerResponse](../../models/operations/getcustomerresponse.md)>**


## getLoggedInCustomer

Get the logged in customer.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { GetLoggedInCustomerResponse } from "FastlyTestJS/dist/sdk/models/operations";
import { CustomerResponseBillingNetworkType } from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();

sdk.customer.getLoggedInCustomer({
  token: "",
}).then((res: GetLoggedInCustomerResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `security`                                                                                       | [operations.GetLoggedInCustomerSecurity](../../models/operations/getloggedincustomersecurity.md) | :heavy_check_mark:                                                                               | The security requirements to use for the request.                                                |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.GetLoggedInCustomerResponse](../../models/operations/getloggedincustomerresponse.md)>**


## listUsers

List all users from a specified customer id.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { ListUsersResponse } from "FastlyTestJS/dist/sdk/models/operations";
import { RoleUser } from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();

sdk.customer.listUsers({
  customerId: "x4xCwxxJxGCx123Rx5xTx",
}, {
  token: "",
}).then((res: ListUsersResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.ListUsersRequest](../../models/operations/listusersrequest.md)   | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `security`                                                                   | [operations.ListUsersSecurity](../../models/operations/listuserssecurity.md) | :heavy_check_mark:                                                           | The security requirements to use for the request.                            |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.ListUsersResponse](../../models/operations/listusersresponse.md)>**


## updateCustomer

Update a customer.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { UpdateCustomerResponse } from "FastlyTestJS/dist/sdk/models/operations";
import { CustomerBillingNetworkType, CustomerResponseBillingNetworkType } from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();

sdk.customer.updateCustomer({
  customerInput: {
    billingContactId: "enim",
    billingNetworkType: CustomerBillingNetworkType.Public,
    billingRef: "est",
    force2fa: false,
    forceSso: false,
    hasAccountPanel: false,
    hasImprovedEvents: false,
    hasOpenstackLogging: false,
    hasPci: false,
    ipWhitelist: "quibusdam",
    legalContactId: "explicabo",
    name: "Rudy Spencer",
    ownerId: "qui",
    phoneNumber: "aliquid",
    postalAddress: "cupiditate",
    pricingPlan: "quos",
    pricingPlanId: "perferendis",
    securityContactId: "magni",
    technicalContactId: "assumenda",
  },
  customerId: "x4xCwxxJxGCx123Rx5xTx",
}, {
  token: "",
}).then((res: UpdateCustomerResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.UpdateCustomerRequest](../../models/operations/updatecustomerrequest.md)   | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `security`                                                                             | [operations.UpdateCustomerSecurity](../../models/operations/updatecustomersecurity.md) | :heavy_check_mark:                                                                     | The security requirements to use for the request.                                      |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.UpdateCustomerResponse](../../models/operations/updatecustomerresponse.md)>**
