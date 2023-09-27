# ResponseObject
(*responseObject*)

## Overview

Allows you to create synthetic responses that exist entirely on the varnish machine. Useful for creating error or maintenance pages that exists outside the scope of your backend architecture. Best when used with [Condition](#condition) objects.

<https://developer.fastly.com/reference/api/vcl-services/response-object>
### Available Operations

* [deleteResponseObject](#deleteresponseobject) - Delete a Response Object
* [getResponseObject](#getresponseobject) - Get a Response object
* [listResponseObjects](#listresponseobjects) - List Response objects

## deleteResponseObject

Deletes the specified Response Object.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { DeleteResponseObjectResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.responseObject.deleteResponseObject({
  responseObjectName: "test-response",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}).then((res: DeleteResponseObjectResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.DeleteResponseObjectRequest](../../models/operations/deleteresponseobjectrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.DeleteResponseObjectResponse](../../models/operations/deleteresponseobjectresponse.md)>**


## getResponseObject

Gets the specified Response Object.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { GetResponseObjectResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.responseObject.getResponseObject({
  responseObjectName: "test-response",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}).then((res: GetResponseObjectResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.GetResponseObjectRequest](../../models/operations/getresponseobjectrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.GetResponseObjectResponse](../../models/operations/getresponseobjectresponse.md)>**


## listResponseObjects

Returns all Response Objects for the specified service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { ListResponseObjectsResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.responseObject.listResponseObjects({
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}).then((res: ListResponseObjectsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.ListResponseObjectsRequest](../../models/operations/listresponseobjectsrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.ListResponseObjectsResponse](../../models/operations/listresponseobjectsresponse.md)>**

