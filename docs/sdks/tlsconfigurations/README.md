# TlsConfigurations
(*.tlsConfigurations*)

## Overview

Customers with access to multiple sets of IP pools are able to apply different configuration options to their TLS enabled domains.

<https://developer.fastly.com/reference/api/tls/configuration>
### Available Operations

* [getTlsConfig](#gettlsconfig) - Get a TLS configuration
* [listTlsConfigs](#listtlsconfigs) - List TLS configurations
* [updateTlsConfig](#updatetlsconfig) - Update a TLS configuration

## getTlsConfig

Show a TLS configuration.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { GetTlsConfigRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const tlsConfigurationId: string = "t7CguUGZzb2W9Euo5FoKa";
const include: string = "dns_records";

  const res = await sdk.tlsConfigurations.getTlsConfig(tlsConfigurationId, include);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `tlsConfigurationId`                                                                         | *string*                                                                                     | :heavy_check_mark:                                                                           | Alphanumeric string identifying a TLS configuration.                                         | t7CguUGZzb2W9Euo5FoKa                                                                        |
| `include`                                                                                    | *string*                                                                                     | :heavy_minus_sign:                                                                           | Include related objects. Optional, comma-separated values. Permitted values: `dns_records`.<br/> | dns_records                                                                                  |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |                                                                                              |


### Response

**Promise<[operations.GetTlsConfigResponse](../../models/operations/gettlsconfigresponse.md)>**


## listTlsConfigs

List all TLS configurations.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { ListTlsConfigsRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const filterBulk: string = "string";
const include: string = "dns_records";
const pageNumber: number = 1;
const pageSize: number = 20;

  const res = await sdk.tlsConfigurations.listTlsConfigs(filterBulk, include, pageNumber, pageSize);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `filterBulk`                                                                                 | *string*                                                                                     | :heavy_minus_sign:                                                                           | Optionally filters by the bulk attribute.                                                    |                                                                                              |
| `include`                                                                                    | *string*                                                                                     | :heavy_minus_sign:                                                                           | Include related objects. Optional, comma-separated values. Permitted values: `dns_records`.<br/> | dns_records                                                                                  |
| `pageNumber`                                                                                 | *number*                                                                                     | :heavy_minus_sign:                                                                           | Current page.                                                                                | 1                                                                                            |
| `pageSize`                                                                                   | *number*                                                                                     | :heavy_minus_sign:                                                                           | Number of records per page.                                                                  | 20                                                                                           |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |                                                                                              |


### Response

**Promise<[operations.ListTlsConfigsResponse](../../models/operations/listtlsconfigsresponse.md)>**


## updateTlsConfig

Update a TLS configuration.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import {
  TlsConfiguration,
  TlsConfigurationData,
  TlsConfigurationDataAttributes,
  TypeTlsConfiguration,
} from "Fastly/dist/sdk/models/components";
import { UpdateTlsConfigRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const tlsConfigurationId: string = "t7CguUGZzb2W9Euo5FoKa";
const tlsConfiguration: TlsConfiguration = {
  data: {
    attributes: {},
    relationships: "string",
  },
};

  const res = await sdk.tlsConfigurations.updateTlsConfig(tlsConfigurationId, tlsConfiguration);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                              | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `tlsConfigurationId`                                                   | *string*                                                               | :heavy_check_mark:                                                     | Alphanumeric string identifying a TLS configuration.                   | t7CguUGZzb2W9Euo5FoKa                                                  |
| `tlsConfiguration`                                                     | [components.TlsConfiguration](../../models/shared/tlsconfiguration.md) | :heavy_minus_sign:                                                     | N/A                                                                    |                                                                        |
| `config`                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)           | :heavy_minus_sign:                                                     | Available config options for making requests.                          |                                                                        |


### Response

**Promise<[operations.UpdateTlsConfigResponse](../../models/operations/updatetlsconfigresponse.md)>**

