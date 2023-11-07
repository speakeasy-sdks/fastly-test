# Settings
(*.settings*)

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
import { Fastly } from "Fastly";
import { GetServiceSettingsRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;

  const res = await sdk.settings.getServiceSettings(serviceId, versionId);


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

**Promise<[operations.GetServiceSettingsResponse](../../models/operations/getservicesettingsresponse.md)>**


## updateServiceSettings

Update the settings for a particular service and version. NOTE: If you override TTLs with custom VCL, any general.default_ttl value will not be honored and the expected behavior may change.


### Example Usage

```typescript
import { Fastly } from "Fastly";
import { Settings } from "Fastly/dist/sdk/models/components";
import { UpdateServiceSettingsRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const versionId: number = 1;
const settings: Settings = {};

  const res = await sdk.settings.updateServiceSettings(serviceId, versionId, settings);


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
| `settings`                                                   | [components.Settings](../../models/shared/settings.md)       | :heavy_minus_sign:                                           | N/A                                                          |                                                              |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.UpdateServiceSettingsResponse](../../models/operations/updateservicesettingsresponse.md)>**

