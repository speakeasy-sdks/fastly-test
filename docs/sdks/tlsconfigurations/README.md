# tlsConfigurations

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
import { Fastly } from "FastlyTest";
import { GetTlsConfigResponse } from "FastlyTest/dist/sdk/models/operations";
import { TypeTlsConfiguration } from "FastlyTest/dist/sdk/models/shared";

const sdk = new Fastly();

sdk.tlsConfigurations.getTlsConfig({
  include: "dns_records",
  tlsConfigurationId: "t7CguUGZzb2W9Euo5FoKa",
}, {
  token: "",
}).then((res: GetTlsConfigResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.GetTlsConfigRequest](../../models/operations/gettlsconfigrequest.md)   | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `security`                                                                         | [operations.GetTlsConfigSecurity](../../models/operations/gettlsconfigsecurity.md) | :heavy_check_mark:                                                                 | The security requirements to use for the request.                                  |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.GetTlsConfigResponse](../../models/operations/gettlsconfigresponse.md)>**


## listTlsConfigs

List all TLS configurations.

### Example Usage

```typescript
import { Fastly } from "FastlyTest";
import { ListTlsConfigsResponse } from "FastlyTest/dist/sdk/models/operations";
import { TypeTlsConfiguration } from "FastlyTest/dist/sdk/models/shared";

const sdk = new Fastly();

sdk.tlsConfigurations.listTlsConfigs({
  filterBulk: "eum",
  include: "dns_records",
  pageNumber: 1,
  pageSize: 20,
}, {
  token: "",
}).then((res: ListTlsConfigsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.ListTlsConfigsRequest](../../models/operations/listtlsconfigsrequest.md)   | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `security`                                                                             | [operations.ListTlsConfigsSecurity](../../models/operations/listtlsconfigssecurity.md) | :heavy_check_mark:                                                                     | The security requirements to use for the request.                                      |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.ListTlsConfigsResponse](../../models/operations/listtlsconfigsresponse.md)>**


## updateTlsConfig

Update a TLS configuration.

### Example Usage

```typescript
import { Fastly } from "FastlyTest";
import { UpdateTlsConfigResponse } from "FastlyTest/dist/sdk/models/operations";
import { TypeService, TypeTlsConfiguration, TypeTlsDnsRecord } from "FastlyTest/dist/sdk/models/shared";

const sdk = new Fastly();

sdk.tlsConfigurations.updateTlsConfig({
  tlsConfigurationInput: {
    data: {
      attributes: {
        name: "Deanna Swaniawski",
      },
      relationships: {
        dnsRecords: {
          data: [
            {
              type: TypeTlsDnsRecord.DnsRecord,
            },
            {
              type: TypeTlsDnsRecord.DnsRecord,
            },
          ],
        },
      },
      type: TypeTlsConfiguration.TlsConfiguration,
    },
  },
  tlsConfigurationId: "t7CguUGZzb2W9Euo5FoKa",
}, {
  token: "",
}).then((res: UpdateTlsConfigResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.UpdateTlsConfigRequest](../../models/operations/updatetlsconfigrequest.md)   | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `security`                                                                               | [operations.UpdateTlsConfigSecurity](../../models/operations/updatetlsconfigsecurity.md) | :heavy_check_mark:                                                                       | The security requirements to use for the request.                                        |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.UpdateTlsConfigResponse](../../models/operations/updatetlsconfigresponse.md)>**

