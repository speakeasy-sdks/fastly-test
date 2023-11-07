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
import { Fastly } from "Fastly";
import { TypeMutualAuthentication } from "Fastly/dist/sdk/models/components";

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

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [components.MutualAuthentication](../../models/shared/mutualauthentication.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.CreateMutualTlsAuthenticationResponse](../../models/operations/createmutualtlsauthenticationresponse.md)>**


## deleteMutualTls

Remove a Mutual TLS authentication

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { DeleteMutualTlsRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const mutualAuthenticationId: string = "SEAwSOsP7dEpTgGZdP7ZFw";

  const res = await sdk.mutualAuthentication.deleteMutualTls(mutualAuthenticationId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `mutualAuthenticationId`                                     | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying a mutual authentication.     | SEAwSOsP7dEpTgGZdP7ZFw                                       |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.DeleteMutualTlsResponse](../../models/operations/deletemutualtlsresponse.md)>**


## getMutualAuthentication

Show a Mutual Authentication.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { GetMutualAuthenticationRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const mutualAuthenticationId: string = "SEAwSOsP7dEpTgGZdP7ZFw";
const include: string = "string";

  const res = await sdk.mutualAuthentication.getMutualAuthentication(mutualAuthenticationId, include);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                                                                                     | Type                                                                                                                                                                                                                          | Required                                                                                                                                                                                                                      | Description                                                                                                                                                                                                                   | Example                                                                                                                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `mutualAuthenticationId`                                                                                                                                                                                                      | *string*                                                                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                                            | Alphanumeric string identifying a mutual authentication.                                                                                                                                                                      | SEAwSOsP7dEpTgGZdP7ZFw                                                                                                                                                                                                        |
| `include`                                                                                                                                                                                                                     | *string*                                                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                            | Comma-separated list of related objects to include (optional). Permitted values: `tls_activations`. Including TLS activations will provide you with the TLS domain names that are related to your Mutual TLS authentication.<br/> |                                                                                                                                                                                                                               |
| `config`                                                                                                                                                                                                                      | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                                            | Available config options for making requests.                                                                                                                                                                                 |                                                                                                                                                                                                                               |


### Response

**Promise<[operations.GetMutualAuthenticationResponse](../../models/operations/getmutualauthenticationresponse.md)>**


## listMutualAuthentications

List all mutual authentications.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { ListMutualAuthenticationsRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const include: string = "string";
const pageNumber: number = 1;
const pageSize: number = 20;

  const res = await sdk.mutualAuthentication.listMutualAuthentications(include, pageNumber, pageSize);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                                                                                     | Type                                                                                                                                                                                                                          | Required                                                                                                                                                                                                                      | Description                                                                                                                                                                                                                   | Example                                                                                                                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `include`                                                                                                                                                                                                                     | *string*                                                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                            | Comma-separated list of related objects to include (optional). Permitted values: `tls_activations`. Including TLS activations will provide you with the TLS domain names that are related to your Mutual TLS authentication.<br/> |                                                                                                                                                                                                                               |
| `pageNumber`                                                                                                                                                                                                                  | *number*                                                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                            | Current page.                                                                                                                                                                                                                 | 1                                                                                                                                                                                                                             |
| `pageSize`                                                                                                                                                                                                                    | *number*                                                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                            | Number of records per page.                                                                                                                                                                                                   | 20                                                                                                                                                                                                                            |
| `config`                                                                                                                                                                                                                      | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                                            | Available config options for making requests.                                                                                                                                                                                 |                                                                                                                                                                                                                               |


### Response

**Promise<[operations.ListMutualAuthenticationsResponse](../../models/operations/listmutualauthenticationsresponse.md)>**


## patchMutualAuthentication

Update a Mutual Authentication.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import {
  MutualAuthentication,
  MutualAuthenticationData,
  MutualAuthenticationDataAttributes,
  TypeMutualAuthentication,
} from "Fastly/dist/sdk/models/components";
import { PatchMutualAuthenticationRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const mutualAuthenticationId: string = "SEAwSOsP7dEpTgGZdP7ZFw";
const mutualAuthentication: MutualAuthentication = {
  data: {
    attributes: {},
    relationships: "string",
  },
};

  const res = await sdk.mutualAuthentication.patchMutualAuthentication(mutualAuthenticationId, mutualAuthentication);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `mutualAuthenticationId`                                                       | *string*                                                                       | :heavy_check_mark:                                                             | Alphanumeric string identifying a mutual authentication.                       | SEAwSOsP7dEpTgGZdP7ZFw                                                         |
| `mutualAuthentication`                                                         | [components.MutualAuthentication](../../models/shared/mutualauthentication.md) | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |                                                                                |


### Response

**Promise<[operations.PatchMutualAuthenticationResponse](../../models/operations/patchmutualauthenticationresponse.md)>**

