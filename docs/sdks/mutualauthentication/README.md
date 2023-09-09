# mutualAuthentication

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
import { CreateMutualTlsAuthenticationResponse, CreateMutualTlsAuthenticationSecurity } from "FastlyTestJS/dist/sdk/models/operations";
import { TypeMutualAuthentication, TypeTlsActivation } from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();
const operationSecurity: CreateMutualTlsAuthenticationSecurity = {
  token: "",
};

sdk.mutualAuthentication.createMutualTlsAuthentication({
  data: {
    attributes: {
      certBundle: "eveniet",
      enforced: false,
      name: "Carroll Bogan V",
    },
    relationships: {
      tlsActivations: {
        data: [
          {
            type: TypeTlsActivation.TlsActivation,
          },
        ],
      },
    },
    type: TypeMutualAuthentication.MutualAuthentication,
  },
}, operationSecurity).then((res: CreateMutualTlsAuthenticationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [shared.MutualAuthenticationInput](../../models/shared/mutualauthenticationinput.md)                                 | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `security`                                                                                                           | [operations.CreateMutualTlsAuthenticationSecurity](../../models/operations/createmutualtlsauthenticationsecurity.md) | :heavy_check_mark:                                                                                                   | The security requirements to use for the request.                                                                    |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.CreateMutualTlsAuthenticationResponse](../../models/operations/createmutualtlsauthenticationresponse.md)>**


## deleteMutualTls

Remove a Mutual TLS authentication

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { DeleteMutualTlsResponse, DeleteMutualTlsSecurity } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();
const operationSecurity: DeleteMutualTlsSecurity = {
  token: "",
};

sdk.mutualAuthentication.deleteMutualTls({
  mutualAuthenticationId: "SEAwSOsP7dEpTgGZdP7ZFw",
}, operationSecurity).then((res: DeleteMutualTlsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.DeleteMutualTlsRequest](../../models/operations/deletemutualtlsrequest.md)   | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `security`                                                                               | [operations.DeleteMutualTlsSecurity](../../models/operations/deletemutualtlssecurity.md) | :heavy_check_mark:                                                                       | The security requirements to use for the request.                                        |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.DeleteMutualTlsResponse](../../models/operations/deletemutualtlsresponse.md)>**


## getMutualAuthentication

Show a Mutual Authentication.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { GetMutualAuthenticationResponse, GetMutualAuthenticationSecurity } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();
const operationSecurity: GetMutualAuthenticationSecurity = {
  token: "",
};

sdk.mutualAuthentication.getMutualAuthentication({
  include: "culpa",
  mutualAuthenticationId: "SEAwSOsP7dEpTgGZdP7ZFw",
}, operationSecurity).then((res: GetMutualAuthenticationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.GetMutualAuthenticationRequest](../../models/operations/getmutualauthenticationrequest.md)   | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `security`                                                                                               | [operations.GetMutualAuthenticationSecurity](../../models/operations/getmutualauthenticationsecurity.md) | :heavy_check_mark:                                                                                       | The security requirements to use for the request.                                                        |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.GetMutualAuthenticationResponse](../../models/operations/getmutualauthenticationresponse.md)>**


## listMutualAuthentications

List all mutual authentications.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { ListMutualAuthenticationsResponse, ListMutualAuthenticationsSecurity } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();
const operationSecurity: ListMutualAuthenticationsSecurity = {
  token: "",
};

sdk.mutualAuthentication.listMutualAuthentications({
  include: "aliquid",
  pageNumber: 1,
  pageSize: 20,
}, operationSecurity).then((res: ListMutualAuthenticationsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.ListMutualAuthenticationsRequest](../../models/operations/listmutualauthenticationsrequest.md)   | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `security`                                                                                                   | [operations.ListMutualAuthenticationsSecurity](../../models/operations/listmutualauthenticationssecurity.md) | :heavy_check_mark:                                                                                           | The security requirements to use for the request.                                                            |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.ListMutualAuthenticationsResponse](../../models/operations/listmutualauthenticationsresponse.md)>**


## patchMutualAuthentication

Update a Mutual Authentication.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { PatchMutualAuthenticationResponse, PatchMutualAuthenticationSecurity } from "FastlyTestJS/dist/sdk/models/operations";
import { TypeMutualAuthentication, TypeTlsActivation } from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();
const operationSecurity: PatchMutualAuthenticationSecurity = {
  token: "",
};

sdk.mutualAuthentication.patchMutualAuthentication({
  mutualAuthenticationInput: {
    data: {
      attributes: {
        certBundle: "tenetur",
        enforced: false,
        name: "Lila Kassulke",
      },
      relationships: {
        tlsActivations: {
          data: [
            {
              type: TypeTlsActivation.TlsActivation,
            },
          ],
        },
      },
      type: TypeMutualAuthentication.MutualAuthentication,
    },
  },
  mutualAuthenticationId: "SEAwSOsP7dEpTgGZdP7ZFw",
}, operationSecurity).then((res: PatchMutualAuthenticationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.PatchMutualAuthenticationRequest](../../models/operations/patchmutualauthenticationrequest.md)   | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `security`                                                                                                   | [operations.PatchMutualAuthenticationSecurity](../../models/operations/patchmutualauthenticationsecurity.md) | :heavy_check_mark:                                                                                           | The security requirements to use for the request.                                                            |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.PatchMutualAuthenticationResponse](../../models/operations/patchmutualauthenticationresponse.md)>**

