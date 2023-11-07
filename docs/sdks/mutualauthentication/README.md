# MutualAuthentication
(*.mutualAuthentication*)

## Overview

The Mutual TLS API allows for client-to-server authentication using client-side X.509 authentication. The main Mutual Authentication object represents the certificate bundle and other configurations which support Mutual TLS for your domains.

<https://developer.fastly.com/reference/api/tls/mutual-tls/authentication>
### Available Operations

* [createMutualTlsAuthentication](#createmutualtlsauthentication) - Create a Mutual Authentication
* [deleteMutualTls](#deletemutualtls) - Delete a Mutual TLS
* [getMutualAuthentication](#getmutualauthentication) - Get a Mutual Authentication
* [listMutualAuthentications](#listmutualauthentications) - List Mutual Authentications
* [patchMutualAuthentication](#patchmutualauthentication) - Update a Mutual Authentication

## createMutualTlsAuthentication

Create a mutual authentication using a bundle of certificates to enable client-to-server mutual TLS.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { TypeMutualAuthentication } from "FastlyTestJS/dist/sdk/models/shared";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.mutualAuthentication.createMutualTlsAuthentication({
    data: {
      attributes: {},
      relationships: "string",
    },
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [shared.MutualAuthentication](../../models/shared/mutualauthentication.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.CreateMutualTlsAuthenticationResponse](../../models/operations/createmutualtlsauthenticationresponse.md)>**


## deleteMutualTls

Remove a Mutual TLS authentication

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.mutualAuthentication.deleteMutualTls({
    mutualAuthenticationId: "SEAwSOsP7dEpTgGZdP7ZFw",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.DeleteMutualTlsRequest](../../models/operations/deletemutualtlsrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.DeleteMutualTlsResponse](../../models/operations/deletemutualtlsresponse.md)>**


## getMutualAuthentication

Show a Mutual Authentication.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.mutualAuthentication.getMutualAuthentication({
    mutualAuthenticationId: "SEAwSOsP7dEpTgGZdP7ZFw",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.GetMutualAuthenticationRequest](../../models/operations/getmutualauthenticationrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.GetMutualAuthenticationResponse](../../models/operations/getmutualauthenticationresponse.md)>**


## listMutualAuthentications

List all mutual authentications.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.mutualAuthentication.listMutualAuthentications({
    pageNumber: 1,
    pageSize: 20,
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.ListMutualAuthenticationsRequest](../../models/operations/listmutualauthenticationsrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.ListMutualAuthenticationsResponse](../../models/operations/listmutualauthenticationsresponse.md)>**


## patchMutualAuthentication

Update a Mutual Authentication.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { TypeMutualAuthentication } from "FastlyTestJS/dist/sdk/models/shared";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.mutualAuthentication.patchMutualAuthentication({
    mutualAuthentication: {
      data: {
        attributes: {},
        relationships: "string",
      },
    },
    mutualAuthenticationId: "SEAwSOsP7dEpTgGZdP7ZFw",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.PatchMutualAuthenticationRequest](../../models/operations/patchmutualauthenticationrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.PatchMutualAuthenticationResponse](../../models/operations/patchmutualauthenticationresponse.md)>**

