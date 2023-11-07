# Domain
(*.domain*)

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
import { Fastly } from "Fastly";
import { CheckDomainRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const domainName: string = "www.example.com";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.domain.checkDomain(domainName, serviceId, versionId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                       | Type                                                            | Required                                                        | Description                                                     | Example                                                         |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `domainName`                                                    | *string*                                                        | :heavy_check_mark:                                              | The name of the domain or domains associated with this service. | www.example.com                                                 |
| `serviceId`                                                     | *string*                                                        | :heavy_check_mark:                                              | Alphanumeric string identifying the service.                    | SU1Z0isxPaozGVKXdv0eY                                           |
| `versionId`                                                     | *number*                                                        | :heavy_check_mark:                                              | Integer identifying a service version.                          | 1                                                               |
| `config`                                                        | [AxiosRequestConfig](https://axios-http.com/docs/req_config)    | :heavy_minus_sign:                                              | Available config options for making requests.                   |                                                                 |


### Response

**Promise<[operations.CheckDomainResponse](../../models/operations/checkdomainresponse.md)>**


## checkDomains

Checks the status of all domains' DNS records for a Service Version. Returns an array of 3 items for each domain; the first is the details for the domain, the second is the current CNAME of the domain, and the third is a boolean indicating whether or not it has been properly setup to use Fastly.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { CheckDomainsRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.domain.checkDomains(serviceId, versionId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `serviceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the service.                 | SU1Z0isxPaozGVKXdv0eY                                        |
| `versionId`                                                  | *number*                                                     | :heavy_check_mark:                                           | Integer identifying a service version.                       | 1                                                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.CheckDomainsResponse](../../models/operations/checkdomainsresponse.md)>**


## createDomain

Create a domain for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { Domain } from "Fastly/dist/sdk/models/components";
import { CreateDomainRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;
const domain: Domain = {
  comment: "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
  name: "www.example.com",
};

  const res = await sdk.domain.createDomain(serviceId, versionId, domain);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `serviceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the service.                 | SU1Z0isxPaozGVKXdv0eY                                        |
| `versionId`                                                  | *number*                                                     | :heavy_check_mark:                                           | Integer identifying a service version.                       | 1                                                            |
| `domain`                                                     | [components.Domain](../../models/shared/domain.md)           | :heavy_minus_sign:                                           | N/A                                                          |                                                              |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.CreateDomainResponse](../../models/operations/createdomainresponse.md)>**


## deleteDomain

Delete the domain for a particular service and versions.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { DeleteDomainRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const domainName: string = "www.example.com";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.domain.deleteDomain(domainName, serviceId, versionId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                       | Type                                                            | Required                                                        | Description                                                     | Example                                                         |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `domainName`                                                    | *string*                                                        | :heavy_check_mark:                                              | The name of the domain or domains associated with this service. | www.example.com                                                 |
| `serviceId`                                                     | *string*                                                        | :heavy_check_mark:                                              | Alphanumeric string identifying the service.                    | SU1Z0isxPaozGVKXdv0eY                                           |
| `versionId`                                                     | *number*                                                        | :heavy_check_mark:                                              | Integer identifying a service version.                          | 1                                                               |
| `config`                                                        | [AxiosRequestConfig](https://axios-http.com/docs/req_config)    | :heavy_minus_sign:                                              | Available config options for making requests.                   |                                                                 |


### Response

**Promise<[operations.DeleteDomainResponse](../../models/operations/deletedomainresponse.md)>**


## getDomain

Get the domain for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { GetDomainRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const domainName: string = "www.example.com";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.domain.getDomain(domainName, serviceId, versionId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                       | Type                                                            | Required                                                        | Description                                                     | Example                                                         |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `domainName`                                                    | *string*                                                        | :heavy_check_mark:                                              | The name of the domain or domains associated with this service. | www.example.com                                                 |
| `serviceId`                                                     | *string*                                                        | :heavy_check_mark:                                              | Alphanumeric string identifying the service.                    | SU1Z0isxPaozGVKXdv0eY                                           |
| `versionId`                                                     | *number*                                                        | :heavy_check_mark:                                              | Integer identifying a service version.                          | 1                                                               |
| `config`                                                        | [AxiosRequestConfig](https://axios-http.com/docs/req_config)    | :heavy_minus_sign:                                              | Available config options for making requests.                   |                                                                 |


### Response

**Promise<[operations.GetDomainResponse](../../models/operations/getdomainresponse.md)>**


## listDomains

List all the domains for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { ListDomainsRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.domain.listDomains(serviceId, versionId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `serviceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the service.                 | SU1Z0isxPaozGVKXdv0eY                                        |
| `versionId`                                                  | *number*                                                     | :heavy_check_mark:                                           | Integer identifying a service version.                       | 1                                                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.ListDomainsResponse](../../models/operations/listdomainsresponse.md)>**


## updateDomain

Update the domain for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { Domain } from "Fastly/dist/sdk/models/components";
import { UpdateDomainRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const domainName: string = "www.example.com";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;
const domain: Domain = {
  comment: "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
  name: "www.example.com",
};

  const res = await sdk.domain.updateDomain(domainName, serviceId, versionId, domain);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                       | Type                                                            | Required                                                        | Description                                                     | Example                                                         |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `domainName`                                                    | *string*                                                        | :heavy_check_mark:                                              | The name of the domain or domains associated with this service. | www.example.com                                                 |
| `serviceId`                                                     | *string*                                                        | :heavy_check_mark:                                              | Alphanumeric string identifying the service.                    | SU1Z0isxPaozGVKXdv0eY                                           |
| `versionId`                                                     | *number*                                                        | :heavy_check_mark:                                              | Integer identifying a service version.                          | 1                                                               |
| `domain`                                                        | [components.Domain](../../models/shared/domain.md)              | :heavy_minus_sign:                                              | N/A                                                             |                                                                 |
| `config`                                                        | [AxiosRequestConfig](https://axios-http.com/docs/req_config)    | :heavy_minus_sign:                                              | Available config options for making requests.                   |                                                                 |


### Response

**Promise<[operations.UpdateDomainResponse](../../models/operations/updatedomainresponse.md)>**

