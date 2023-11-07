# tokens

## Overview

An API Token is used to identify who is making the API call. Users can create multiple tokens to suit their needs.

<https://developer.fastly.com/reference/api/auth-tokens/user>
### Available Operations

* [getTokenCurrent](#gettokencurrent) - Get the current token
* [listTokensCustomer](#listtokenscustomer) - List tokens for a customer
* [listTokensUser](#listtokensuser) - List tokens for the authenticated user
* [revokeToken](#revoketoken) - Revoke a token
* [revokeTokenCurrent](#revoketokencurrent) - Revoke the current token

## getTokenCurrent

Get a single token based on the access_token used in the request.

### Example Usage

```typescript
import { Fastly } from "FastlyTest";
import { GetTokenCurrentResponse } from "FastlyTest/dist/sdk/models/operations";
import { TokenResponseScope } from "FastlyTest/dist/sdk/models/shared";

const sdk = new Fastly();

sdk.tokens.getTokenCurrent({
  token: "",
}).then((res: GetTokenCurrentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `security`                                                                               | [operations.GetTokenCurrentSecurity](../../models/operations/gettokencurrentsecurity.md) | :heavy_check_mark:                                                                       | The security requirements to use for the request.                                        |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.GetTokenCurrentResponse](../../models/operations/gettokencurrentresponse.md)>**


## listTokensCustomer

List all tokens belonging to a specific customer.

### Example Usage

```typescript
import { Fastly } from "FastlyTest";
import { ListTokensCustomerResponse } from "FastlyTest/dist/sdk/models/operations";
import { TokenResponseScope } from "FastlyTest/dist/sdk/models/shared";

const sdk = new Fastly();

sdk.tokens.listTokensCustomer({
  customerId: "x4xCwxxJxGCx123Rx5xTx",
}, {
  token: "",
}).then((res: ListTokensCustomerResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.ListTokensCustomerRequest](../../models/operations/listtokenscustomerrequest.md)   | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `security`                                                                                     | [operations.ListTokensCustomerSecurity](../../models/operations/listtokenscustomersecurity.md) | :heavy_check_mark:                                                                             | The security requirements to use for the request.                                              |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.ListTokensCustomerResponse](../../models/operations/listtokenscustomerresponse.md)>**


## listTokensUser

List all tokens belonging to the authenticated user.

### Example Usage

```typescript
import { Fastly } from "FastlyTest";
import { ListTokensUserResponse } from "FastlyTest/dist/sdk/models/operations";
import { TokenResponseScope } from "FastlyTest/dist/sdk/models/shared";

const sdk = new Fastly();

sdk.tokens.listTokensUser({
  token: "",
}).then((res: ListTokensUserResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `security`                                                                             | [operations.ListTokensUserSecurity](../../models/operations/listtokensusersecurity.md) | :heavy_check_mark:                                                                     | The security requirements to use for the request.                                      |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.ListTokensUserResponse](../../models/operations/listtokensuserresponse.md)>**


## revokeToken

Revoke a specific token by its id.

### Example Usage

```typescript
import { Fastly } from "FastlyTest";
import { RevokeTokenResponse } from "FastlyTest/dist/sdk/models/operations";

const sdk = new Fastly();

sdk.tokens.revokeToken({
  tokenId: "5Yo3XXnrQpjc20u0ybrf2g",
}, {
  token: "",
}).then((res: RevokeTokenResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.RevokeTokenRequest](../../models/operations/revoketokenrequest.md)   | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `security`                                                                       | [operations.RevokeTokenSecurity](../../models/operations/revoketokensecurity.md) | :heavy_check_mark:                                                               | The security requirements to use for the request.                                |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.RevokeTokenResponse](../../models/operations/revoketokenresponse.md)>**


## revokeTokenCurrent

Revoke a token that is used to authenticate the request.

### Example Usage

```typescript
import { Fastly } from "FastlyTest";
import { RevokeTokenCurrentResponse } from "FastlyTest/dist/sdk/models/operations";

const sdk = new Fastly();

sdk.tokens.revokeTokenCurrent({
  token: "",
}).then((res: RevokeTokenCurrentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `security`                                                                                     | [operations.RevokeTokenCurrentSecurity](../../models/operations/revoketokencurrentsecurity.md) | :heavy_check_mark:                                                                             | The security requirements to use for the request.                                              |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.RevokeTokenCurrentResponse](../../models/operations/revoketokencurrentresponse.md)>**

