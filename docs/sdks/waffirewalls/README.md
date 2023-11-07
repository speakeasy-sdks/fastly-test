# WafFirewalls
(*.wafFirewalls*)

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


> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { TypeWafFirewall } from "Fastly/dist/sdk/models/components";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.wafFirewalls.createWafFirewall({
    data: {
      attributes: {},
    },
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [components.WafFirewall](../../models/shared/waffirewall.md) | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.CreateWafFirewallResponse](../../models/operations/createwaffirewallresponse.md)>**


## ~~deleteWafFirewall~~

Delete the firewall object for a particular service and service version.


> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { TypeWafFirewall, WafFirewall, WafFirewallData, WafFirewallDataAttributes } from "Fastly/dist/sdk/models/components";
import { DeleteWafFirewallRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const firewallId: string = "fW7g2uUGZzb2W9Euo4Mo0r";
const wafFirewall: WafFirewall = {
  data: {
    attributes: {},
  },
};

  const res = await sdk.wafFirewalls.deleteWafFirewall(firewallId, wafFirewall);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `firewallId`                                                 | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying a WAF Firewall.              | fW7g2uUGZzb2W9Euo4Mo0r                                       |
| `wafFirewall`                                                | [components.WafFirewall](../../models/shared/waffirewall.md) | :heavy_minus_sign:                                           | N/A                                                          |                                                              |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.DeleteWafFirewallResponse](../../models/operations/deletewaffirewallresponse.md)>**


## ~~getWafFirewall~~

Get a specific firewall object.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { FirewallInclude } from "Fastly/dist/sdk/models/components";
import { GetWafFirewallRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const firewallId: string = "fW7g2uUGZzb2W9Euo4Mo0r";
const filterServiceVersionNumber: string = "string";
const include: FirewallInclude = FirewallInclude.WafFirewallVersions;

  const res = await sdk.wafFirewalls.getWafFirewall(firewallId, filterServiceVersionNumber, include);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                            | Type                                                                 | Required                                                             | Description                                                          | Example                                                              |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `firewallId`                                                         | *string*                                                             | :heavy_check_mark:                                                   | Alphanumeric string identifying a WAF Firewall.                      | fW7g2uUGZzb2W9Euo4Mo0r                                               |
| `filterServiceVersionNumber`                                         | *string*                                                             | :heavy_minus_sign:                                                   | Limit the results returned to a specific service version.            |                                                                      |
| `include`                                                            | [components.FirewallInclude](../../models/shared/firewallinclude.md) | :heavy_minus_sign:                                                   | Include related objects. Optional.                                   |                                                                      |
| `config`                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)         | :heavy_minus_sign:                                                   | Available config options for making requests.                        |                                                                      |


### Response

**Promise<[operations.GetWafFirewallResponse](../../models/operations/getwaffirewallresponse.md)>**


## ~~listWafFirewalls~~

List all firewall objects.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { FirewallInclude } from "Fastly/dist/sdk/models/components";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.wafFirewalls.listWafFirewalls({
    pageNumber: 1,
    pageSize: 20,
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.ListWafFirewallsRequest](../../models/operations/listwaffirewallsrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.ListWafFirewallsResponse](../../models/operations/listwaffirewallsresponse.md)>**


## ~~updateWafFirewall~~

Update a firewall object for a particular service and service version. Specifying a `service_version_number` is required.


> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { TypeWafFirewall, WafFirewall, WafFirewallData, WafFirewallDataAttributes } from "Fastly/dist/sdk/models/components";
import { UpdateWafFirewallRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const firewallId: string = "fW7g2uUGZzb2W9Euo4Mo0r";
const wafFirewall: WafFirewall = {
  data: {
    attributes: {},
  },
};

  const res = await sdk.wafFirewalls.updateWafFirewall(firewallId, wafFirewall);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `firewallId`                                                 | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying a WAF Firewall.              | fW7g2uUGZzb2W9Euo4Mo0r                                       |
| `wafFirewall`                                                | [components.WafFirewall](../../models/shared/waffirewall.md) | :heavy_minus_sign:                                           | N/A                                                          |                                                              |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.UpdateWafFirewallResponse](../../models/operations/updatewaffirewallresponse.md)>**

