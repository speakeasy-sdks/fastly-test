# TlsPrivateKeys
(*tlsPrivateKeys*)

## Overview

A private key is used to sign a Certificate. A key can be used to sign multiple certificates.

<https://developer.fastly.com/reference/api/tls/custom-certs/private-keys>
### Available Operations

* [createTlsKey](#createtlskey) - Create a TLS private key
* [deleteTlsKey](#deletetlskey) - Delete a TLS private key
* [getTlsKey](#gettlskey) - Get a TLS private key
* [listTlsKeys](#listtlskeys) - List TLS private keys

## createTlsKey

Create a TLS private key.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { TypeTlsPrivateKey } from "FastlyTestJS/dist/sdk/models/shared";

(async() => {
  const sdk = new Fastly({
    security: {
      token: "",
    },
  });

  const res = await sdk.tlsPrivateKeys.createTlsKey({
    data: {
      attributes: {},
      relationships: "anti",
    },
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [shared.TlsPrivateKey](../../models/shared/tlsprivatekey.md) | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.CreateTlsKeyResponse](../../models/operations/createtlskeyresponse.md)>**


## deleteTlsKey

Destroy a TLS private key. Only private keys not already matched to any certificates can be deleted.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";

(async() => {
  const sdk = new Fastly({
    security: {
      token: "",
    },
  });

  const res = await sdk.tlsPrivateKeys.deleteTlsKey({
    tlsPrivateKeyId: "KeYguUGZzb2W9Euo4moOR",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.DeleteTlsKeyRequest](../../models/operations/deletetlskeyrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.DeleteTlsKeyResponse](../../models/operations/deletetlskeyresponse.md)>**


## getTlsKey

Show a TLS private key.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";

(async() => {
  const sdk = new Fastly({
    security: {
      token: "",
    },
  });

  const res = await sdk.tlsPrivateKeys.getTlsKey({
    tlsPrivateKeyId: "KeYguUGZzb2W9Euo4moOR",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [operations.GetTlsKeyRequest](../../models/operations/gettlskeyrequest.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.GetTlsKeyResponse](../../models/operations/gettlskeyresponse.md)>**


## listTlsKeys

List all TLS private keys.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";

(async() => {
  const sdk = new Fastly({
    security: {
      token: "",
    },
  });

  const res = await sdk.tlsPrivateKeys.listTlsKeys({
    pageNumber: 1,
    pageSize: 20,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.ListTlsKeysRequest](../../models/operations/listtlskeysrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.ListTlsKeysResponse](../../models/operations/listtlskeysresponse.md)>**

