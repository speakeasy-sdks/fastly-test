# Customer
(*.customer*)

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
import { Fastly } from "Fastly";
import { DeleteCustomerRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const customerId: string = "x4xCwxxJxGCx123Rx5xTx";

  const res = await sdk.customer.deleteCustomer(customerId);


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

**Promise<[operations.DeleteCustomerResponse](../../models/operations/deletecustomerresponse.md)>**


## getCustomer

Get a specific customer.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { GetCustomerRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const customerId: string = "x4xCwxxJxGCx123Rx5xTx";

  const res = await sdk.customer.getCustomer(customerId);


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

**Promise<[operations.GetCustomerResponse](../../models/operations/getcustomerresponse.md)>**


## getLoggedInCustomer

Get the logged in customer.

### Example Usage

```typescript
import { Fastly } from "Fastly";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.customer.getLoggedInCustomer();


  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { Fastly } from "Fastly";
import { ListUsersRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const customerId: string = "x4xCwxxJxGCx123Rx5xTx";

  const res = await sdk.customer.listUsers(customerId);


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

**Promise<[operations.ListUsersResponse](../../models/operations/listusersresponse.md)>**


## updateCustomer

Update a customer.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { BillingNetworkType, Customer } from "Fastly/dist/sdk/models/components";
import { UpdateCustomerRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const customerId: string = "x4xCwxxJxGCx123Rx5xTx";
const customer: Customer = {};

  const res = await sdk.customer.updateCustomer(customerId, customer);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `customerId`                                                 | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the customer.                | x4xCwxxJxGCx123Rx5xTx                                        |
| `customer`                                                   | [components.Customer](../../models/shared/customer.md)       | :heavy_minus_sign:                                           | N/A                                                          |                                                              |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.UpdateCustomerResponse](../../models/operations/updatecustomerresponse.md)>**

