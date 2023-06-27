# tlsCertificates

## Overview

A TLS certificate is used to terminate TLS traffic for one or more of your [TLS domains](#tls_domains).

<https://developer.fastly.com/reference/api/tls/custom-certs/certificates>
### Available Operations

* [createTlsCert](#createtlscert) - Create a TLS certificate
* [deleteTlsCert](#deletetlscert) - Delete a TLS certificate
* [getTlsCert](#gettlscert) - Get a TLS certificate
* [listTlsCerts](#listtlscerts) - List TLS certificates
* [updateTlsCert](#updatetlscert) - Update a TLS certificate

## createTlsCert

Create a TLS certificate.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { CreateTlsCertResponse } from "FastlyTestJS/dist/sdk/models/operations";
import { TypeTlsCertificate, TypeTlsDomain } from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();

sdk.tlsCertificates.createTlsCert({
  data: {
    attributes: {
      certBlob: "officia",
      name: "Irving Gleichner",
    },
    relationships: {
      tlsDomains: {
        data: [
          {
            type: TypeTlsDomain.TlsDomain,
          },
          {
            type: TypeTlsDomain.TlsDomain,
          },
          {
            type: TypeTlsDomain.TlsDomain,
          },
          {
            type: TypeTlsDomain.TlsDomain,
          },
        ],
      },
    },
    type: TypeTlsCertificate.TlsCertificate,
  },
}, {
  token: "",
}).then((res: CreateTlsCertResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [shared.TlsCertificateInput](../../models/shared/tlscertificateinput.md)             | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `security`                                                                           | [operations.CreateTlsCertSecurity](../../models/operations/createtlscertsecurity.md) | :heavy_check_mark:                                                                   | The security requirements to use for the request.                                    |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.CreateTlsCertResponse](../../models/operations/createtlscertresponse.md)>**


## deleteTlsCert

Destroy a TLS certificate. TLS certificates already enabled for a domain cannot be destroyed.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { DeleteTlsCertResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();

sdk.tlsCertificates.deleteTlsCert({
  tlsCertificateId: "cRTguUGZzb2W9Euo4moOr",
}, {
  token: "",
}).then((res: DeleteTlsCertResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.DeleteTlsCertRequest](../../models/operations/deletetlscertrequest.md)   | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `security`                                                                           | [operations.DeleteTlsCertSecurity](../../models/operations/deletetlscertsecurity.md) | :heavy_check_mark:                                                                   | The security requirements to use for the request.                                    |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.DeleteTlsCertResponse](../../models/operations/deletetlscertresponse.md)>**


## getTlsCert

Show a TLS certificate.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { GetTlsCertResponse } from "FastlyTestJS/dist/sdk/models/operations";
import { TypeTlsCertificate, TypeTlsDomain } from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();

sdk.tlsCertificates.getTlsCert({
  tlsCertificateId: "cRTguUGZzb2W9Euo4moOr",
}, {
  token: "",
}).then((res: GetTlsCertResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.GetTlsCertRequest](../../models/operations/gettlscertrequest.md)   | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `security`                                                                     | [operations.GetTlsCertSecurity](../../models/operations/gettlscertsecurity.md) | :heavy_check_mark:                                                             | The security requirements to use for the request.                              |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.GetTlsCertResponse](../../models/operations/gettlscertresponse.md)>**


## listTlsCerts

List all TLS certificates.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { ListTlsCertsResponse } from "FastlyTestJS/dist/sdk/models/operations";
import { Sort, TypeTlsCertificate, TypeTlsDomain } from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();

sdk.tlsCertificates.listTlsCerts({
  filterInUse: "sapiente",
  filterNotAfter: "cumque",
  filterTlsDomainsId: "vitae",
  include: "rerum",
  pageNumber: 1,
  pageSize: 20,
  sort: Sort.CreatedAt,
}, {
  token: "",
}).then((res: ListTlsCertsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.ListTlsCertsRequest](../../models/operations/listtlscertsrequest.md)   | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `security`                                                                         | [operations.ListTlsCertsSecurity](../../models/operations/listtlscertssecurity.md) | :heavy_check_mark:                                                                 | The security requirements to use for the request.                                  |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.ListTlsCertsResponse](../../models/operations/listtlscertsresponse.md)>**


## updateTlsCert

Replace a TLS certificate with a newly reissued TLS certificate, or update a TLS certificate's name. If replacing a TLS certificate, the new TLS certificate must contain all SAN entries as the current TLS certificate. It must either have an exact matching list or contain a superset.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { UpdateTlsCertResponse } from "FastlyTestJS/dist/sdk/models/operations";
import { TypeTlsCertificate, TypeTlsDomain } from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();

sdk.tlsCertificates.updateTlsCert({
  tlsCertificateInput: {
    data: {
      attributes: {
        certBlob: "quis",
        name: "Mr. Denise Runolfsdottir",
      },
      relationships: {
        tlsDomains: {
          data: [
            {
              type: TypeTlsDomain.TlsDomain,
            },
          ],
        },
      },
      type: TypeTlsCertificate.TlsCertificate,
    },
  },
  tlsCertificateId: "cRTguUGZzb2W9Euo4moOr",
}, {
  token: "",
}).then((res: UpdateTlsCertResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.UpdateTlsCertRequest](../../models/operations/updatetlscertrequest.md)   | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `security`                                                                           | [operations.UpdateTlsCertSecurity](../../models/operations/updatetlscertsecurity.md) | :heavy_check_mark:                                                                   | The security requirements to use for the request.                                    |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.UpdateTlsCertResponse](../../models/operations/updatetlscertresponse.md)>**
