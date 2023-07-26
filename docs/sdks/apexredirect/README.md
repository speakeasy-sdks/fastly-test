# apexRedirect

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
import { Fastly } from "FastlyTestJS";
import { DeleteApexRedirectResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();

sdk.apexRedirect.deleteApexRedirect({
  apexRedirectId: "debitis",
}, {
  token: "",
}).then((res: DeleteApexRedirectResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.DeleteApexRedirectRequest](../../models/operations/deleteapexredirectrequest.md)   | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `security`                                                                                     | [operations.DeleteApexRedirectSecurity](../../models/operations/deleteapexredirectsecurity.md) | :heavy_check_mark:                                                                             | The security requirements to use for the request.                                              |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.DeleteApexRedirectResponse](../../models/operations/deleteapexredirectresponse.md)>**


## getApexRedirect

Get an apex redirect by its ID.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { GetApexRedirectResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();

sdk.apexRedirect.getApexRedirect({
  apexRedirectId: "ipsa",
}, {
  token: "",
}).then((res: GetApexRedirectResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.GetApexRedirectRequest](../../models/operations/getapexredirectrequest.md)   | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `security`                                                                               | [operations.GetApexRedirectSecurity](../../models/operations/getapexredirectsecurity.md) | :heavy_check_mark:                                                                       | The security requirements to use for the request.                                        |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.GetApexRedirectResponse](../../models/operations/getapexredirectresponse.md)>**


## listApexRedirects

List all apex redirects for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { ListApexRedirectsResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();

sdk.apexRedirect.listApexRedirects({
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, {
  token: "",
}).then((res: ListApexRedirectsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.ListApexRedirectsRequest](../../models/operations/listapexredirectsrequest.md)   | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `security`                                                                                   | [operations.ListApexRedirectsSecurity](../../models/operations/listapexredirectssecurity.md) | :heavy_check_mark:                                                                           | The security requirements to use for the request.                                            |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.ListApexRedirectsResponse](../../models/operations/listapexredirectsresponse.md)>**


## updateApexRedirect

Update an apex redirect by its ID.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { UpdateApexRedirectResponse } from "FastlyTestJS/dist/sdk/models/operations";
import { ApexRedirectStatusCode } from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();

sdk.apexRedirect.updateApexRedirect({
  apexRedirectInput: {
    domains: [
      "tempora",
      "suscipit",
      "molestiae",
      "minus",
    ],
    featureRevision: 812169,
    statusCode: ApexRedirectStatusCode.ThreeHundredAndSeven,
  },
  apexRedirectId: "iusto",
}, {
  token: "",
}).then((res: UpdateApexRedirectResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.UpdateApexRedirectRequest](../../models/operations/updateapexredirectrequest.md)   | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `security`                                                                                     | [operations.UpdateApexRedirectSecurity](../../models/operations/updateapexredirectsecurity.md) | :heavy_check_mark:                                                                             | The security requirements to use for the request.                                              |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.UpdateApexRedirectResponse](../../models/operations/updateapexredirectresponse.md)>**

