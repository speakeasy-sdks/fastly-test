# tlsActivations

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
import { CreateTlsActivationResponse, CreateTlsActivationSecurity } from "FastlyTestJS/dist/sdk/models/operations";
import { TypeTlsActivation, TypeTlsCertificate, TypeTlsDomain } from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();
const operationSecurity: CreateTlsActivationSecurity = {
  token: "",
};

sdk.tlsActivations.createTlsActivation({
  data: {
    relationships: {
      tlsCertificate: {
        data: {
          type: TypeTlsCertificate.TlsCertificate,
        },
      },
      tlsDomain: {
        data: {
          type: TypeTlsDomain.TlsDomain,
        },
      },
    },
    type: TypeTlsActivation.TlsActivation,
  },
}, operationSecurity).then((res: CreateTlsActivationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [shared.TlsActivationInput](../../models/shared/tlsactivationinput.md)                           | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `security`                                                                                       | [operations.CreateTlsActivationSecurity](../../models/operations/createtlsactivationsecurity.md) | :heavy_check_mark:                                                                               | The security requirements to use for the request.                                                |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.CreateTlsActivationResponse](../../models/operations/createtlsactivationresponse.md)>**


## deleteTlsActivation

Disable TLS on the domain associated with this TLS activation.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { DeleteTlsActivationResponse, DeleteTlsActivationSecurity } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();
const operationSecurity: DeleteTlsActivationSecurity = {
  token: "",
};

sdk.tlsActivations.deleteTlsActivation({
  tlsActivationId: "aCtguUGZzb2W9Euo4moOR",
}, operationSecurity).then((res: DeleteTlsActivationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.DeleteTlsActivationRequest](../../models/operations/deletetlsactivationrequest.md)   | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `security`                                                                                       | [operations.DeleteTlsActivationSecurity](../../models/operations/deletetlsactivationsecurity.md) | :heavy_check_mark:                                                                               | The security requirements to use for the request.                                                |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.DeleteTlsActivationResponse](../../models/operations/deletetlsactivationresponse.md)>**


## getTlsActivation

Show a TLS activation.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { GetTlsActivationResponse, GetTlsActivationSecurity } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();
const operationSecurity: GetTlsActivationSecurity = {
  token: "",
};

sdk.tlsActivations.getTlsActivation({
  include: "tls_certificate,tls_configuration,tls_domain",
  tlsActivationId: "aCtguUGZzb2W9Euo4moOR",
}, operationSecurity).then((res: GetTlsActivationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.GetTlsActivationRequest](../../models/operations/gettlsactivationrequest.md)   | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `security`                                                                                 | [operations.GetTlsActivationSecurity](../../models/operations/gettlsactivationsecurity.md) | :heavy_check_mark:                                                                         | The security requirements to use for the request.                                          |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.GetTlsActivationResponse](../../models/operations/gettlsactivationresponse.md)>**


## listTlsActivations

List all TLS activations.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { ListTlsActivationsResponse, ListTlsActivationsSecurity } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();
const operationSecurity: ListTlsActivationsSecurity = {
  token: "",
};

sdk.tlsActivations.listTlsActivations({
  filterTlsCertificateId: "mollitia",
  filterTlsConfigurationId: "provident",
  filterTlsDomainId: "possimus",
  include: "tls_certificate,tls_configuration,tls_domain",
  pageNumber: 1,
  pageSize: 20,
}, operationSecurity).then((res: ListTlsActivationsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.ListTlsActivationsRequest](../../models/operations/listtlsactivationsrequest.md)   | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `security`                                                                                     | [operations.ListTlsActivationsSecurity](../../models/operations/listtlsactivationssecurity.md) | :heavy_check_mark:                                                                             | The security requirements to use for the request.                                              |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.ListTlsActivationsResponse](../../models/operations/listtlsactivationsresponse.md)>**


## updateTlsActivation

Update the certificate used to terminate TLS traffic for the domain associated with this TLS activation.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { UpdateTlsActivationResponse, UpdateTlsActivationSecurity } from "FastlyTestJS/dist/sdk/models/operations";
import { TypeTlsActivation, TypeTlsCertificate, TypeTlsDomain } from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();
const operationSecurity: UpdateTlsActivationSecurity = {
  token: "",
};

sdk.tlsActivations.updateTlsActivation({
  tlsActivationInput: {
    data: {
      relationships: {
        tlsCertificate: {
          data: {
            type: TypeTlsCertificate.TlsCertificate,
          },
        },
        tlsDomain: {
          data: {
            type: TypeTlsDomain.TlsDomain,
          },
        },
      },
      type: TypeTlsActivation.TlsActivation,
    },
  },
  tlsActivationId: "aCtguUGZzb2W9Euo4moOR",
}, operationSecurity).then((res: UpdateTlsActivationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.UpdateTlsActivationRequest](../../models/operations/updatetlsactivationrequest.md)   | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `security`                                                                                       | [operations.UpdateTlsActivationSecurity](../../models/operations/updatetlsactivationsecurity.md) | :heavy_check_mark:                                                                               | The security requirements to use for the request.                                                |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.UpdateTlsActivationResponse](../../models/operations/updatetlsactivationresponse.md)>**

