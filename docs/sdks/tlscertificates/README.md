# TlsCertificates
(*tlsCertificates*)

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
import { Fastly } from "Fastly";
import { TypeTlsCertificate, TypeTlsDomain } from "Fastly/dist/sdk/models/components";

async function run() {
  const sdk = new Fastly({
    token: "<YOUR_API_KEY_HERE>",
  });

  const res = await sdk.tlsCertificates.createTlsCert({
    data: {
      attributes: {},
      relationships: {
        tlsDomains: {
          data: [
            {},
          ],
        },
      },
    },
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [components.TlsCertificate](../../sdk/models/components/tlscertificate.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.CreateTlsCertResponse](../../sdk/models/operations/createtlscertresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## deleteTlsCert

Destroy a TLS certificate. TLS certificates already enabled for a domain cannot be destroyed.

### Example Usage

```typescript
import { Fastly } from "Fastly";

async function run() {
  const sdk = new Fastly({
    token: "<YOUR_API_KEY_HERE>",
  });

  const res = await sdk.tlsCertificates.deleteTlsCert({
    tlsCertificateId: "cRTguUGZzb2W9Euo4moOr",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.DeleteTlsCertRequest](../../sdk/models/operations/deletetlscertrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.DeleteTlsCertResponse](../../sdk/models/operations/deletetlscertresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getTlsCert

Show a TLS certificate.

### Example Usage

```typescript
import { Fastly } from "Fastly";

async function run() {
  const sdk = new Fastly({
    token: "<YOUR_API_KEY_HERE>",
  });

  const res = await sdk.tlsCertificates.getTlsCert({
    tlsCertificateId: "cRTguUGZzb2W9Euo4moOr",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.GetTlsCertRequest](../../sdk/models/operations/gettlscertrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.GetTlsCertResponse](../../sdk/models/operations/gettlscertresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listTlsCerts

List all TLS certificates.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { Sort } from "Fastly/dist/sdk/models/components";

async function run() {
  const sdk = new Fastly({
    token: "<YOUR_API_KEY_HERE>",
  });

  const res = await sdk.tlsCertificates.listTlsCerts({
    pageNumber: 1,
    pageSize: 20,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.ListTlsCertsRequest](../../sdk/models/operations/listtlscertsrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.ListTlsCertsResponse](../../sdk/models/operations/listtlscertsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## updateTlsCert

Replace a TLS certificate with a newly reissued TLS certificate, or update a TLS certificate's name. If replacing a TLS certificate, the new TLS certificate must contain all SAN entries as the current TLS certificate. It must either have an exact matching list or contain a superset.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { TypeTlsCertificate, TypeTlsDomain } from "Fastly/dist/sdk/models/components";

async function run() {
  const sdk = new Fastly({
    token: "<YOUR_API_KEY_HERE>",
  });

  const res = await sdk.tlsCertificates.updateTlsCert({
    tlsCertificate: {
      data: {
        attributes: {},
        relationships: {
          tlsDomains: {
            data: [
              {},
            ],
          },
        },
      },
    },
    tlsCertificateId: "cRTguUGZzb2W9Euo4moOr",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.UpdateTlsCertRequest](../../sdk/models/operations/updatetlscertrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.UpdateTlsCertResponse](../../sdk/models/operations/updatetlscertresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
