# ApexRedirect
(*.apexRedirect*)

## Overview

Supports redirecting traffic for apex domains, subdomains, or wildcard domains to a WWW subdomain.

<https://developer.fastly.com/reference/api/vcl-services/apex-redirect>
### Available Operations

* [deleteApexRedirect](#deleteapexredirect) - Delete an apex redirect
* [getApexRedirect](#getapexredirect) - Get an apex redirect
* [listApexRedirects](#listapexredirects) - List apex redirects
* [updateApexRedirect](#updateapexredirect) - Update an apex redirect

## deleteApexRedirect

Delete an apex redirect by its ID.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { DeleteApexRedirectRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const apexRedirectId: string = "string";

  const res = await sdk.apexRedirect.deleteApexRedirect(apexRedirectId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `apexRedirectId`                                             | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.DeleteApexRedirectResponse](../../models/operations/deleteapexredirectresponse.md)>**


## getApexRedirect

Get an apex redirect by its ID.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { GetApexRedirectRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const apexRedirectId: string = "string";

  const res = await sdk.apexRedirect.getApexRedirect(apexRedirectId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `apexRedirectId`                                             | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetApexRedirectResponse](../../models/operations/getapexredirectresponse.md)>**


## listApexRedirects

List all apex redirects for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { ListApexRedirectsRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.apexRedirect.listApexRedirects(serviceId, versionId);


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

**Promise<[operations.ListApexRedirectsResponse](../../models/operations/listapexredirectsresponse.md)>**


## updateApexRedirect

Update an apex redirect by its ID.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { ApexRedirectInput, StatusCode } from "Fastly/dist/sdk/models/components";
import { UpdateApexRedirectRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const apexRedirectId: string = "string";
const apexRedirect: ApexRedirectInput = {
  domains: [
    "string",
  ],
};

  const res = await sdk.apexRedirect.updateApexRedirect(apexRedirectId, apexRedirect);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `apexRedirectId`                                                         | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `apexRedirect`                                                           | [components.ApexRedirectInput](../../models/shared/apexredirectinput.md) | :heavy_minus_sign:                                                       | N/A                                                                      |
| `config`                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)             | :heavy_minus_sign:                                                       | Available config options for making requests.                            |


### Response

**Promise<[operations.UpdateApexRedirectResponse](../../models/operations/updateapexredirectresponse.md)>**

