# RequestSettings
(*requestSettings*)

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
import { Fastly } from "FastlyTestJS";
import { DeleteRequestSettingsResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.requestSettings.deleteRequestSettings({
  requestSettingsName: "test-request-setting",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}).then((res: DeleteRequestSettingsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.DeleteRequestSettingsRequest](../../models/operations/deleterequestsettingsrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.DeleteRequestSettingsResponse](../../models/operations/deleterequestsettingsresponse.md)>**


## getRequestSettings

Gets the specified Request Settings object.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { GetRequestSettingsResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.requestSettings.getRequestSettings({
  requestSettingsName: "test-request-setting",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}).then((res: GetRequestSettingsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.GetRequestSettingsRequest](../../models/operations/getrequestsettingsrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.GetRequestSettingsResponse](../../models/operations/getrequestsettingsresponse.md)>**


## listRequestSettings

Returns a list of all Request Settings objects for the given service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { ListRequestSettingsResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.requestSettings.listRequestSettings({
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}).then((res: ListRequestSettingsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.ListRequestSettingsRequest](../../models/operations/listrequestsettingsrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.ListRequestSettingsResponse](../../models/operations/listrequestsettingsresponse.md)>**


## updateRequestSettings

Updates the specified Request Settings object.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { UpdateRequestSettingsResponse } from "FastlyTestJS/dist/sdk/models/operations";
import { RequestSettingsAction, RequestSettingsXff } from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.requestSettings.updateRequestSettings({
  requestSettings: {
    action: RequestSettingsAction.Pass,
    bypassBusyWait: 713589,
    defaultHost: "Northeast Producer",
    forceMiss: 216239,
    forceSsl: 459715,
    geoHeaders: 703251,
    hashKeys: "demanding niches",
    maxStaleAge: 618939,
    name: "test-request-setting",
    requestCondition: "null",
    timerSupport: 698909,
    xff: RequestSettingsXff.AppendAll,
  },
  requestSettingsName: "test-request-setting",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}).then((res: UpdateRequestSettingsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.UpdateRequestSettingsRequest](../../models/operations/updaterequestsettingsrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.UpdateRequestSettingsResponse](../../models/operations/updaterequestsettingsresponse.md)>**

