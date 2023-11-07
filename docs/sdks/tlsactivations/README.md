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
import { Fastly } from "Fastly";
import { TypeTlsActivation, TypeTlsCertificate, TypeTlsDomain } from "Fastly/dist/sdk/models/components";

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

| Parameter                                                        | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `request`                                                        | [components.TlsActivation](../../models/shared/tlsactivation.md) | :heavy_check_mark:                                               | The request object to use for the request.                       |
| `config`                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)     | :heavy_minus_sign:                                               | Available config options for making requests.                    |


### Response

**Promise<[operations.CreateTlsActivationResponse](../../models/operations/createtlsactivationresponse.md)>**


## deleteTlsActivation

Disable TLS on the domain associated with this TLS activation.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { DeleteTlsActivationRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const tlsActivationId: string = "aCtguUGZzb2W9Euo4moOR";

  const res = await sdk.tlsActivations.deleteTlsActivation(tlsActivationId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `tlsActivationId`                                            | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying a TLS activation.            | aCtguUGZzb2W9Euo4moOR                                        |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.DeleteTlsActivationResponse](../../models/operations/deletetlsactivationresponse.md)>**


## getTlsActivation

Show a TLS activation.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { GetTlsActivationRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const tlsActivationId: string = "aCtguUGZzb2W9Euo4moOR";
const include: string = "tls_certificate,tls_configuration,tls_domain";

  const res = await sdk.tlsActivations.getTlsActivation(tlsActivationId, include);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                               | Type                                                                                                                                    | Required                                                                                                                                | Description                                                                                                                             | Example                                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `tlsActivationId`                                                                                                                       | *string*                                                                                                                                | :heavy_check_mark:                                                                                                                      | Alphanumeric string identifying a TLS activation.                                                                                       | aCtguUGZzb2W9Euo4moOR                                                                                                                   |
| `include`                                                                                                                               | *string*                                                                                                                                | :heavy_minus_sign:                                                                                                                      | Include related objects. Optional, comma-separated values. Permitted values: `tls_certificate`, `tls_configuration`, and `tls_domain`.<br/> | tls_certificate,tls_configuration,tls_domain                                                                                            |
| `config`                                                                                                                                | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                            | :heavy_minus_sign:                                                                                                                      | Available config options for making requests.                                                                                           |                                                                                                                                         |


### Response

**Promise<[operations.GetTlsActivationResponse](../../models/operations/gettlsactivationresponse.md)>**


## listTlsActivations

List all TLS activations.

### Example Usage

```typescript
import { Fastly } from "Fastly";

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
import { Fastly } from "Fastly";
import {
  RelationshipMemberTlsCertificateInput,
  RelationshipMemberTlsDomainInput,
  RelationshipsForTlsActivationInput,
  RelationshipsForTlsActivationTlsCertificateInput,
  RelationshipsForTlsActivationTlsDomain,
  TlsActivation,
  TlsActivationData,
  TypeTlsActivation,
  TypeTlsCertificate,
  TypeTlsDomain,
} from "Fastly/dist/sdk/models/components";
import { UpdateTlsActivationRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const tlsActivationId: string = "aCtguUGZzb2W9Euo4moOR";
const tlsActivation: TlsActivation = {
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
};

  const res = await sdk.tlsActivations.updateTlsActivation(tlsActivationId, tlsActivation);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                        | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `tlsActivationId`                                                | *string*                                                         | :heavy_check_mark:                                               | Alphanumeric string identifying a TLS activation.                | aCtguUGZzb2W9Euo4moOR                                            |
| `tlsActivation`                                                  | [components.TlsActivation](../../models/shared/tlsactivation.md) | :heavy_minus_sign:                                               | N/A                                                              |                                                                  |
| `config`                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)     | :heavy_minus_sign:                                               | Available config options for making requests.                    |                                                                  |


### Response

**Promise<[operations.UpdateTlsActivationResponse](../../models/operations/updatetlsactivationresponse.md)>**

