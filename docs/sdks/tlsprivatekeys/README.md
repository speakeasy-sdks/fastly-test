# TlsPrivateKeys
(*.tlsPrivateKeys*)

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
import { Fastly } from "Fastly";
import { TypeTlsPrivateKey } from "Fastly/dist/sdk/models/components";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.tlsPrivateKeys.createTlsKey({
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

| Parameter                                                        | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `request`                                                        | [components.TlsPrivateKey](../../models/shared/tlsprivatekey.md) | :heavy_check_mark:                                               | The request object to use for the request.                       |
| `config`                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)     | :heavy_minus_sign:                                               | Available config options for making requests.                    |


### Response

**Promise<[operations.CreateTlsKeyResponse](../../models/operations/createtlskeyresponse.md)>**


## deleteTlsKey

Destroy a TLS private key. Only private keys not already matched to any certificates can be deleted.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { DeleteTlsKeyRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const tlsPrivateKeyId: string = "KeYguUGZzb2W9Euo4moOR";

  const res = await sdk.tlsPrivateKeys.deleteTlsKey(tlsPrivateKeyId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `tlsPrivateKeyId`                                            | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying a private Key.               | KeYguUGZzb2W9Euo4moOR                                        |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.DeleteTlsKeyResponse](../../models/operations/deletetlskeyresponse.md)>**


## getTlsKey

Show a TLS private key.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { GetTlsKeyRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const tlsPrivateKeyId: string = "KeYguUGZzb2W9Euo4moOR";

  const res = await sdk.tlsPrivateKeys.getTlsKey(tlsPrivateKeyId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `tlsPrivateKeyId`                                            | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying a private Key.               | KeYguUGZzb2W9Euo4moOR                                        |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.GetTlsKeyResponse](../../models/operations/gettlskeyresponse.md)>**


## listTlsKeys

List all TLS private keys.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { ListTlsKeysRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const filterInUse: string = "string";
const pageNumber: number = 1;
const pageSize: number = 20;

  const res = await sdk.tlsPrivateKeys.listTlsKeys(filterInUse, pageNumber, pageSize);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            | Example                                                                                                |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `filterInUse`                                                                                          | *string*                                                                                               | :heavy_minus_sign:                                                                                     | Limit the returned keys to those without any matching TLS certificates. The only valid value is false. |                                                                                                        |
| `pageNumber`                                                                                           | *number*                                                                                               | :heavy_minus_sign:                                                                                     | Current page.                                                                                          | 1                                                                                                      |
| `pageSize`                                                                                             | *number*                                                                                               | :heavy_minus_sign:                                                                                     | Number of records per page.                                                                            | 20                                                                                                     |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |                                                                                                        |


### Response

**Promise<[operations.ListTlsKeysResponse](../../models/operations/listtlskeysresponse.md)>**

