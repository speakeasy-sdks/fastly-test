# domain

## Overview

A domain represents the domain name through which visitors will retrieve content. There can be multiple domains for a service.

<https://developer.fastly.com/reference/api/services/domain>
### Available Operations

* [checkDomain](#checkdomain) - Validate DNS configuration for a single domain on a service
* [checkDomains](#checkdomains) - Validate DNS configuration for all domains on a service
* [createDomain](#createdomain) - Add a domain name to a service
* [deleteDomain](#deletedomain) - Remove a domain from a service
* [getDomain](#getdomain) - Describe a domain
* [listDomains](#listdomains) - List domains
* [updateDomain](#updatedomain) - Update a domain

## checkDomain

Checks the status of a specific domain's DNS record for a Service Version. Returns an array in the same format as domain/check_all.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { CheckDomainResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();

sdk.domain.checkDomain({
  domainName: "www.example.com",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, {
  token: "",
}).then((res: CheckDomainResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.CheckDomainRequest](../../models/operations/checkdomainrequest.md)   | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `security`                                                                       | [operations.CheckDomainSecurity](../../models/operations/checkdomainsecurity.md) | :heavy_check_mark:                                                               | The security requirements to use for the request.                                |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.CheckDomainResponse](../../models/operations/checkdomainresponse.md)>**


## checkDomains

Checks the status of all domains' DNS records for a Service Version. Returns an array of 3 items for each domain; the first is the details for the domain, the second is the current CNAME of the domain, and the third is a boolean indicating whether or not it has been properly setup to use Fastly.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { CheckDomainsResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();

sdk.domain.checkDomains({
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, {
  token: "",
}).then((res: CheckDomainsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.CheckDomainsRequest](../../models/operations/checkdomainsrequest.md)   | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `security`                                                                         | [operations.CheckDomainsSecurity](../../models/operations/checkdomainssecurity.md) | :heavy_check_mark:                                                                 | The security requirements to use for the request.                                  |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.CheckDomainsResponse](../../models/operations/checkdomainsresponse.md)>**


## createDomain

Create a domain for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { CreateDomainResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();

sdk.domain.createDomain({
  domain: {
    comment: "deleniti",
    name: "www.example.com",
  },
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, {
  token: "",
}).then((res: CreateDomainResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.CreateDomainRequest](../../models/operations/createdomainrequest.md)   | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `security`                                                                         | [operations.CreateDomainSecurity](../../models/operations/createdomainsecurity.md) | :heavy_check_mark:                                                                 | The security requirements to use for the request.                                  |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.CreateDomainResponse](../../models/operations/createdomainresponse.md)>**


## deleteDomain

Delete the domain for a particular service and versions.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { DeleteDomainResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();

sdk.domain.deleteDomain({
  domainName: "www.example.com",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, {
  token: "",
}).then((res: DeleteDomainResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.DeleteDomainRequest](../../models/operations/deletedomainrequest.md)   | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `security`                                                                         | [operations.DeleteDomainSecurity](../../models/operations/deletedomainsecurity.md) | :heavy_check_mark:                                                                 | The security requirements to use for the request.                                  |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.DeleteDomainResponse](../../models/operations/deletedomainresponse.md)>**


## getDomain

Get the domain for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { GetDomainResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();

sdk.domain.getDomain({
  domainName: "www.example.com",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, {
  token: "",
}).then((res: GetDomainResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.GetDomainRequest](../../models/operations/getdomainrequest.md)   | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `security`                                                                   | [operations.GetDomainSecurity](../../models/operations/getdomainsecurity.md) | :heavy_check_mark:                                                           | The security requirements to use for the request.                            |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.GetDomainResponse](../../models/operations/getdomainresponse.md)>**


## listDomains

List all the domains for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { ListDomainsResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();

sdk.domain.listDomains({
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, {
  token: "",
}).then((res: ListDomainsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.ListDomainsRequest](../../models/operations/listdomainsrequest.md)   | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `security`                                                                       | [operations.ListDomainsSecurity](../../models/operations/listdomainssecurity.md) | :heavy_check_mark:                                                               | The security requirements to use for the request.                                |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.ListDomainsResponse](../../models/operations/listdomainsresponse.md)>**


## updateDomain

Update the domain for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { UpdateDomainResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();

sdk.domain.updateDomain({
  domain: {
    comment: "omnis",
    name: "www.example.com",
  },
  domainName: "www.example.com",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, {
  token: "",
}).then((res: UpdateDomainResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.UpdateDomainRequest](../../models/operations/updatedomainrequest.md)   | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `security`                                                                         | [operations.UpdateDomainSecurity](../../models/operations/updatedomainsecurity.md) | :heavy_check_mark:                                                                 | The security requirements to use for the request.                                  |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.UpdateDomainResponse](../../models/operations/updatedomainresponse.md)>**

