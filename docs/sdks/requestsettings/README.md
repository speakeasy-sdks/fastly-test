# RequestSettings
(*.requestSettings*)

## Overview

Settings used to customize Fastly's request handling. When used with [Conditions](#condition) the Request Settings object allows you to fine tune how specific types of requests are handled.

<https://developer.fastly.com/reference/api/vcl-services/request-settings>
### Available Operations

* [deleteRequestSettings](#deleterequestsettings) - Delete a Request Settings object
* [getRequestSettings](#getrequestsettings) - Get a Request Settings object
* [listRequestSettings](#listrequestsettings) - List Request Settings objects
* [updateRequestSettings](#updaterequestsettings) - Update a Request Settings object

## deleteRequestSettings

Removes the specified Request Settings object.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { DeleteRequestSettingsRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const requestSettingsName: string = "test-request-setting";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.requestSettings.deleteRequestSettings(requestSettingsName, serviceId, versionId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `requestSettingsName`                                        | *string*                                                     | :heavy_check_mark:                                           | Name for the request settings.                               | test-request-setting                                         |
| `serviceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the service.                 | SU1Z0isxPaozGVKXdv0eY                                        |
| `versionId`                                                  | *number*                                                     | :heavy_check_mark:                                           | Integer identifying a service version.                       | 1                                                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.DeleteRequestSettingsResponse](../../models/operations/deleterequestsettingsresponse.md)>**


## getRequestSettings

Gets the specified Request Settings object.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { GetRequestSettingsRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const requestSettingsName: string = "test-request-setting";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.requestSettings.getRequestSettings(requestSettingsName, serviceId, versionId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `requestSettingsName`                                        | *string*                                                     | :heavy_check_mark:                                           | Name for the request settings.                               | test-request-setting                                         |
| `serviceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the service.                 | SU1Z0isxPaozGVKXdv0eY                                        |
| `versionId`                                                  | *number*                                                     | :heavy_check_mark:                                           | Integer identifying a service version.                       | 1                                                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.GetRequestSettingsResponse](../../models/operations/getrequestsettingsresponse.md)>**


## listRequestSettings

Returns a list of all Request Settings objects for the given service and version.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { ListRequestSettingsRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.requestSettings.listRequestSettings(serviceId, versionId);


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

**Promise<[operations.ListRequestSettingsResponse](../../models/operations/listrequestsettingsresponse.md)>**


## updateRequestSettings

Updates the specified Request Settings object.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { RequestSettings, RequestSettingsAction, Xff } from "Fastly/dist/sdk/models/components";
import { UpdateRequestSettingsRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const requestSettingsName: string = "test-request-setting";
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;
const requestSettings: RequestSettings = {
  name: "test-request-setting",
  requestCondition: "null",
};

  const res = await sdk.requestSettings.updateRequestSettings(requestSettingsName, serviceId, versionId, requestSettings);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                            | Type                                                                 | Required                                                             | Description                                                          | Example                                                              |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `requestSettingsName`                                                | *string*                                                             | :heavy_check_mark:                                                   | Name for the request settings.                                       | test-request-setting                                                 |
| `serviceId`                                                          | *string*                                                             | :heavy_check_mark:                                                   | Alphanumeric string identifying the service.                         | SU1Z0isxPaozGVKXdv0eY                                                |
| `versionId`                                                          | *number*                                                             | :heavy_check_mark:                                                   | Integer identifying a service version.                               | 1                                                                    |
| `requestSettings`                                                    | [components.RequestSettings](../../models/shared/requestsettings.md) | :heavy_minus_sign:                                                   | N/A                                                                  |                                                                      |
| `config`                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)         | :heavy_minus_sign:                                                   | Available config options for making requests.                        |                                                                      |


### Response

**Promise<[operations.UpdateRequestSettingsResponse](../../models/operations/updaterequestsettingsresponse.md)>**

