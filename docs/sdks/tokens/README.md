# Tokens
(*tokens*)

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
import { Fastly } from "FastlyTestJS";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.tokens.getTokenCurrent();


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

**Promise<[operations.GetTokenCurrentResponse](../../models/operations/gettokencurrentresponse.md)>**


## listTokensCustomer

List all tokens belonging to a specific customer.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.tokens.listTokensCustomer({
    customerId: "x4xCwxxJxGCx123Rx5xTx",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.ListTokensCustomerRequest](../../models/operations/listtokenscustomerrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.ListTokensCustomerResponse](../../models/operations/listtokenscustomerresponse.md)>**


## listTokensUser

List all tokens belonging to the authenticated user.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.tokens.listTokensUser();


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

**Promise<[operations.ListTokensUserResponse](../../models/operations/listtokensuserresponse.md)>**


## revokeToken

Revoke a specific token by its id.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.tokens.revokeToken({
    tokenId: "5Yo3XXnrQpjc20u0ybrf2g",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.RevokeTokenRequest](../../models/operations/revoketokenrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.RevokeTokenResponse](../../models/operations/revoketokenresponse.md)>**


## revokeTokenCurrent

Revoke a token that is used to authenticate the request.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.tokens.revokeTokenCurrent();


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

**Promise<[operations.RevokeTokenCurrentResponse](../../models/operations/revoketokencurrentresponse.md)>**

