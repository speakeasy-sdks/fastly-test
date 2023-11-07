# TlsActivations
(*.tlsActivations*)

## Overview

TLS activations.

<https://developer.fastly.com/reference/api/tls/custom-certs/activations>
### Available Operations

* [createTlsActivation](#createtlsactivation) - Enable TLS for a domain using a custom certificate
* [deleteTlsActivation](#deletetlsactivation) - Disable TLS on a domain
* [getTlsActivation](#gettlsactivation) - Get a TLS activation
* [listTlsActivations](#listtlsactivations) - List TLS activations
* [updateTlsActivation](#updatetlsactivation) - Update a certificate

## createTlsActivation

Enable TLS for a particular TLS domain and certificate combination. These relationships must be specified to create the TLS activation.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { TypeTlsActivation, TypeTlsCertificate, TypeTlsDomain } from "FastlyTestJS/dist/sdk/models/shared";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.tlsActivations.createTlsActivation({
    data: {
      relationships: {
        tlsCertificate: {
          data: {},
        },
        tlsDomain: {
          data: {},
        },
      },
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
| `request`                                                    | [shared.TlsActivation](../../models/shared/tlsactivation.md) | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.CreateTlsActivationResponse](../../models/operations/createtlsactivationresponse.md)>**


## deleteTlsActivation

Disable TLS on the domain associated with this TLS activation.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.tlsActivations.deleteTlsActivation({
    tlsActivationId: "aCtguUGZzb2W9Euo4moOR",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.DeleteTlsActivationRequest](../../models/operations/deletetlsactivationrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.DeleteTlsActivationResponse](../../models/operations/deletetlsactivationresponse.md)>**


## getTlsActivation

Show a TLS activation.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.tlsActivations.getTlsActivation({
    include: "tls_certificate,tls_configuration,tls_domain",
    tlsActivationId: "aCtguUGZzb2W9Euo4moOR",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.GetTlsActivationRequest](../../models/operations/gettlsactivationrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.GetTlsActivationResponse](../../models/operations/gettlsactivationresponse.md)>**


## listTlsActivations

List all TLS activations.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.tlsActivations.listTlsActivations({
    include: "tls_certificate,tls_configuration,tls_domain",
    pageNumber: 1,
    pageSize: 20,
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.ListTlsActivationsRequest](../../models/operations/listtlsactivationsrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.ListTlsActivationsResponse](../../models/operations/listtlsactivationsresponse.md)>**


## updateTlsActivation

Update the certificate used to terminate TLS traffic for the domain associated with this TLS activation.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { TypeTlsActivation, TypeTlsCertificate, TypeTlsDomain } from "FastlyTestJS/dist/sdk/models/shared";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.tlsActivations.updateTlsActivation({
    tlsActivation: {
      data: {
        relationships: {
          tlsCertificate: {
            data: {},
          },
          tlsDomain: {
            data: {},
          },
        },
      },
    },
    tlsActivationId: "aCtguUGZzb2W9Euo4moOR",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.UpdateTlsActivationRequest](../../models/operations/updatetlsactivationrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.UpdateTlsActivationResponse](../../models/operations/updatetlsactivationresponse.md)>**

