# Settings
(*settings*)

## Overview

Handles default settings for a particular version of a service.

<https://developer.fastly.com/reference/api/vcl-services/settings>
### Available Operations

* [getServiceSettings](#getservicesettings) - Get service settings
* [updateServiceSettings](#updateservicesettings) - Update service settings

## getServiceSettings

Get the settings for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { GetServiceSettingsResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.settings.getServiceSettings({
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}).then((res: GetServiceSettingsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.GetServiceSettingsRequest](../../models/operations/getservicesettingsrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.GetServiceSettingsResponse](../../models/operations/getservicesettingsresponse.md)>**


## updateServiceSettings

Update the settings for a particular service and version. NOTE: If you override TTLs with custom VCL, any general.default_ttl value will not be honored and the expected behavior may change.


### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { UpdateServiceSettingsResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.settings.updateServiceSettings({
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  settings: {
    generalDefaultHost: "dignissimos",
    generalDefaultTtl: 950953,
    generalStaleIfError: false,
    generalStaleIfErrorTtl: 891523,
  },
  versionId: 1,
}).then((res: UpdateServiceSettingsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.UpdateServiceSettingsRequest](../../models/operations/updateservicesettingsrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.UpdateServiceSettingsResponse](../../models/operations/updateservicesettingsresponse.md)>**

