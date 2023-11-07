# DirectorBackend
(*.directorBackend*)

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
import { Fastly } from "Fastly";
import { CreateDirectorBackendRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const backendName: string = "test-backend";
const directorName: string = "test-director";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.directorBackend.createDirectorBackend(backendName, directorName, serviceId, versionId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `backendName`                                                | *string*                                                     | :heavy_check_mark:                                           | The name of the backend.                                     | test-backend                                                 |
| `directorName`                                               | *string*                                                     | :heavy_check_mark:                                           | Name for the Director.                                       | test-director                                                |
| `serviceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the service.                 | SU1Z0isxPaozGVKXdv0eY                                        |
| `versionId`                                                  | *number*                                                     | :heavy_check_mark:                                           | Integer identifying a service version.                       | 1                                                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.CreateDirectorBackendResponse](../../models/operations/createdirectorbackendresponse.md)>**


## deleteDirectorBackend

Deletes the relationship between a Backend and a Director. The Backend is no longer considered a member of the Director and thus will not have traffic balanced onto it from this Director.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { DeleteDirectorBackendRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const backendName: string = "test-backend";
const directorName: string = "test-director";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.directorBackend.deleteDirectorBackend(backendName, directorName, serviceId, versionId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `backendName`                                                | *string*                                                     | :heavy_check_mark:                                           | The name of the backend.                                     | test-backend                                                 |
| `directorName`                                               | *string*                                                     | :heavy_check_mark:                                           | Name for the Director.                                       | test-director                                                |
| `serviceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the service.                 | SU1Z0isxPaozGVKXdv0eY                                        |
| `versionId`                                                  | *number*                                                     | :heavy_check_mark:                                           | Integer identifying a service version.                       | 1                                                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.DeleteDirectorBackendResponse](../../models/operations/deletedirectorbackendresponse.md)>**


## getDirectorBackend

Returns the relationship between a Backend and a Director. If the Backend has been associated with the Director, it returns a simple record indicating this. Otherwise, returns a 404.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { GetDirectorBackendRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const backendName: string = "test-backend";
const directorName: string = "test-director";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.directorBackend.getDirectorBackend(backendName, directorName, serviceId, versionId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `backendName`                                                | *string*                                                     | :heavy_check_mark:                                           | The name of the backend.                                     | test-backend                                                 |
| `directorName`                                               | *string*                                                     | :heavy_check_mark:                                           | Name for the Director.                                       | test-director                                                |
| `serviceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the service.                 | SU1Z0isxPaozGVKXdv0eY                                        |
| `versionId`                                                  | *number*                                                     | :heavy_check_mark:                                           | Integer identifying a service version.                       | 1                                                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.GetDirectorBackendResponse](../../models/operations/getdirectorbackendresponse.md)>**

