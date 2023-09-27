# DirectorBackend
(*directorBackend*)

## Overview

Maps and relates backends as belonging to directors. Backends can belong to any number of directors but directors can only hold one reference to a specific backend.

<https://developer.fastly.com/reference/api/load-balancing/directors/backend>
### Available Operations

* [createDirectorBackend](#createdirectorbackend) - Create a director-backend relationship
* [deleteDirectorBackend](#deletedirectorbackend) - Delete a director-backend relationship
* [getDirectorBackend](#getdirectorbackend) - Get a director-backend relationship

## createDirectorBackend

Establishes a relationship between a Backend and a Director. The Backend is then considered a member of the Director and can be used to balance traffic onto.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { CreateDirectorBackendResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.directorBackend.createDirectorBackend({
  backendName: "test-backend",
  directorName: "test-director",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}).then((res: CreateDirectorBackendResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.CreateDirectorBackendRequest](../../models/operations/createdirectorbackendrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.CreateDirectorBackendResponse](../../models/operations/createdirectorbackendresponse.md)>**


## deleteDirectorBackend

Deletes the relationship between a Backend and a Director. The Backend is no longer considered a member of the Director and thus will not have traffic balanced onto it from this Director.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { DeleteDirectorBackendResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.directorBackend.deleteDirectorBackend({
  backendName: "test-backend",
  directorName: "test-director",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}).then((res: DeleteDirectorBackendResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.DeleteDirectorBackendRequest](../../models/operations/deletedirectorbackendrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.DeleteDirectorBackendResponse](../../models/operations/deletedirectorbackendresponse.md)>**


## getDirectorBackend

Returns the relationship between a Backend and a Director. If the Backend has been associated with the Director, it returns a simple record indicating this. Otherwise, returns a 404.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { GetDirectorBackendResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.directorBackend.getDirectorBackend({
  backendName: "test-backend",
  directorName: "test-director",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}).then((res: GetDirectorBackendResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.GetDirectorBackendRequest](../../models/operations/getdirectorbackendrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.GetDirectorBackendResponse](../../models/operations/getdirectorbackendresponse.md)>**

