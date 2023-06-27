# wafFirewalls

## Overview

A firewall represents a configuration of a Web Application Firewall (WAF) on a service. A firewall has many firewall versions through which you can manage rules.

<https://developer.fastly.com/reference/api/waf/firewall>
### Available Operations

* [~~createWafFirewall~~](#createwaffirewall) - Create a firewall :warning: **Deprecated**
* [~~deleteWafFirewall~~](#deletewaffirewall) - Delete a firewall :warning: **Deprecated**
* [~~getWafFirewall~~](#getwaffirewall) - Get a firewall :warning: **Deprecated**
* [~~listWafFirewalls~~](#listwaffirewalls) - List firewalls :warning: **Deprecated**
* [~~updateWafFirewall~~](#updatewaffirewall) - Update a firewall :warning: **Deprecated**

## ~~createWafFirewall~~

Create a firewall object for a particular service and service version using a defined `prefetch_condition` and `response`. If the `prefetch_condition` or the `response` is missing from the request body, Fastly will generate a default object on your service.


> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { CreateWafFirewallResponse } from "FastlyTestJS/dist/sdk/models/operations";
import { TypeWafFirewall, TypeWafFirewallVersion } from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();

sdk.wafFirewalls.createWafFirewall({
  data: {
    attributes: {
      disabled: false,
      prefetchCondition: "veniam",
      response: "nesciunt",
    },
    type: TypeWafFirewall.WafFirewall,
  },
}, {
  token: "",
}).then((res: CreateWafFirewallResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [shared.WafFirewallInput](../../models/shared/waffirewallinput.md)                           | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `security`                                                                                   | [operations.CreateWafFirewallSecurity](../../models/operations/createwaffirewallsecurity.md) | :heavy_check_mark:                                                                           | The security requirements to use for the request.                                            |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.CreateWafFirewallResponse](../../models/operations/createwaffirewallresponse.md)>**


## ~~deleteWafFirewall~~

Delete the firewall object for a particular service and service version.


> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { DeleteWafFirewallResponse } from "FastlyTestJS/dist/sdk/models/operations";
import { TypeWafFirewall } from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();

sdk.wafFirewalls.deleteWafFirewall({
  firewallId: "fW7g2uUGZzb2W9Euo4Mo0r",
  wafFirewallInput: {
    data: {
      attributes: {
        disabled: false,
        prefetchCondition: "expedita",
        response: "eum",
      },
      type: TypeWafFirewall.WafFirewall,
    },
  },
}, {
  token: "",
}).then((res: DeleteWafFirewallResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.DeleteWafFirewallRequest](../../models/operations/deletewaffirewallrequest.md)   | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `security`                                                                                   | [operations.DeleteWafFirewallSecurity](../../models/operations/deletewaffirewallsecurity.md) | :heavy_check_mark:                                                                           | The security requirements to use for the request.                                            |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.DeleteWafFirewallResponse](../../models/operations/deletewaffirewallresponse.md)>**


## ~~getWafFirewall~~

Get a specific firewall object.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { GetWafFirewallResponse } from "FastlyTestJS/dist/sdk/models/operations";
import { FirewallInclude, TypeWafFirewall, TypeWafFirewallVersion } from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();

sdk.wafFirewalls.getWafFirewall({
  filterServiceVersionNumber: "vel",
  firewallId: "fW7g2uUGZzb2W9Euo4Mo0r",
  include: FirewallInclude.WafFirewallVersions,
}, {
  token: "",
}).then((res: GetWafFirewallResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.GetWafFirewallRequest](../../models/operations/getwaffirewallrequest.md)   | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `security`                                                                             | [operations.GetWafFirewallSecurity](../../models/operations/getwaffirewallsecurity.md) | :heavy_check_mark:                                                                     | The security requirements to use for the request.                                      |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.GetWafFirewallResponse](../../models/operations/getwaffirewallresponse.md)>**


## ~~listWafFirewalls~~

List all firewall objects.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { ListWafFirewallsResponse } from "FastlyTestJS/dist/sdk/models/operations";
import { FirewallInclude, TypeWafFirewall, TypeWafFirewallVersion } from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();

sdk.wafFirewalls.listWafFirewalls({
  filterServiceId: "voluptatum",
  filterServiceVersionNumber: "magnam",
  include: FirewallInclude.WafFirewallVersions,
  pageNumber: 1,
  pageSize: 20,
}, {
  token: "",
}).then((res: ListWafFirewallsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.ListWafFirewallsRequest](../../models/operations/listwaffirewallsrequest.md)   | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `security`                                                                                 | [operations.ListWafFirewallsSecurity](../../models/operations/listwaffirewallssecurity.md) | :heavy_check_mark:                                                                         | The security requirements to use for the request.                                          |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.ListWafFirewallsResponse](../../models/operations/listwaffirewallsresponse.md)>**


## ~~updateWafFirewall~~

Update a firewall object for a particular service and service version. Specifying a `service_version_number` is required.


> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { UpdateWafFirewallResponse } from "FastlyTestJS/dist/sdk/models/operations";
import { TypeWafFirewall, TypeWafFirewallVersion } from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();

sdk.wafFirewalls.updateWafFirewall({
  firewallId: "fW7g2uUGZzb2W9Euo4Mo0r",
  wafFirewallInput: {
    data: {
      attributes: {
        disabled: false,
        prefetchCondition: "exercitationem",
        response: "ab",
      },
      type: TypeWafFirewall.WafFirewall,
    },
  },
}, {
  token: "",
}).then((res: UpdateWafFirewallResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.UpdateWafFirewallRequest](../../models/operations/updatewaffirewallrequest.md)   | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `security`                                                                                   | [operations.UpdateWafFirewallSecurity](../../models/operations/updatewaffirewallsecurity.md) | :heavy_check_mark:                                                                           | The security requirements to use for the request.                                            |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.UpdateWafFirewallResponse](../../models/operations/updatewaffirewallresponse.md)>**
