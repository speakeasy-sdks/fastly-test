# WafFirewallVersions
(*wafFirewallVersions*)

## Overview

Firewall version objects contain all of the rules and settings for your WAF and remain empty until properly configured. To understand the behavior of thresholds and scores, see [Managing rules](https://docs.fastly.com/en/guides/managing-rules-on-the-fastly-waf#understanding-scoring-active-rule-behavior). Newly created firewall versions are initiated without any associated rules. See [Active Rules](/reference/api/waf/rules/active/) for details. Changes to your WAF's rules and settings can be made by [cloning](/reference/api/waf/firewall-version/#clone-waf-firewall-version) an existing firewall version, making the changes, and then [activating](/reference/api/waf/firewall-version/#deploy-activate-waf-firewall-version) the new firewall version.

<https://developer.fastly.com/reference/api/waf/firewall/version>
### Available Operations

* [~~cloneWafFirewallVersion~~](#clonewaffirewallversion) - Clone a firewall version :warning: **Deprecated**
* [~~createWafFirewallVersion~~](#createwaffirewallversion) - Create a firewall version :warning: **Deprecated**
* [~~deployActivateWafFirewallVersion~~](#deployactivatewaffirewallversion) - Deploy or activate a firewall version :warning: **Deprecated**
* [~~getWafFirewallVersion~~](#getwaffirewallversion) - Get a firewall version :warning: **Deprecated**
* [~~listWafFirewallVersions~~](#listwaffirewallversions) - List firewall versions :warning: **Deprecated**
* [~~updateWafFirewallVersion~~](#updatewaffirewallversion) - Update a firewall version :warning: **Deprecated**

## ~~cloneWafFirewallVersion~~

Clone a specific, existing firewall version into a new, draft firewall version.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Fastly } from "Fastly";

async function run() {
  const sdk = new Fastly({
    token: "<YOUR_API_KEY_HERE>",
  });

  const res = await sdk.wafFirewallVersions.cloneWafFirewallVersion({
    firewallId: "fW7g2uUGZzb2W9Euo4Mo0r",
    firewallVersionNumber: 1,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.CloneWafFirewallVersionRequest](../../sdk/models/operations/clonewaffirewallversionrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.CloneWafFirewallVersionResponse](../../sdk/models/operations/clonewaffirewallversionresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## ~~createWafFirewallVersion~~

Create a new, draft firewall version.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { TypeWafFirewallVersion } from "Fastly/dist/sdk/models/components";

async function run() {
  const sdk = new Fastly({
    token: "<YOUR_API_KEY_HERE>",
  });

  const res = await sdk.wafFirewallVersions.createWafFirewallVersion({
    firewallId: "fW7g2uUGZzb2W9Euo4Mo0r",
    wafFirewallVersion: {
      data: {
        attributes: {
          comment: "",
        },
      },
    },
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.CreateWafFirewallVersionRequest](../../sdk/models/operations/createwaffirewallversionrequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.CreateWafFirewallVersionResponse](../../sdk/models/operations/createwaffirewallversionresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## ~~deployActivateWafFirewallVersion~~

Deploy or activate a specific firewall version. If a firewall has been disabled, deploying a firewall version will automatically enable the firewall again.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Fastly } from "Fastly";

async function run() {
  const sdk = new Fastly({
    token: "<YOUR_API_KEY_HERE>",
  });

  const res = await sdk.wafFirewallVersions.deployActivateWafFirewallVersion({
    firewallId: "fW7g2uUGZzb2W9Euo4Mo0r",
    firewallVersionNumber: 1,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                    | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                    | [operations.DeployActivateWafFirewallVersionRequest](../../sdk/models/operations/deployactivatewaffirewallversionrequest.md) | :heavy_check_mark:                                                                                                           | The request object to use for the request.                                                                                   |
| `config`                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                 | :heavy_minus_sign:                                                                                                           | Available config options for making requests.                                                                                |


### Response

**Promise<[operations.DeployActivateWafFirewallVersionResponse](../../sdk/models/operations/deployactivatewaffirewallversionresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## ~~getWafFirewallVersion~~

Get details about a specific firewall version.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Fastly } from "Fastly";

async function run() {
  const sdk = new Fastly({
    token: "<YOUR_API_KEY_HERE>",
  });

  const res = await sdk.wafFirewallVersions.getWafFirewallVersion({
    firewallId: "fW7g2uUGZzb2W9Euo4Mo0r",
    firewallVersionNumber: 1,
    include: "waf_firewall,waf_active_rules",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.GetWafFirewallVersionRequest](../../sdk/models/operations/getwaffirewallversionrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.GetWafFirewallVersionResponse](../../sdk/models/operations/getwaffirewallversionresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## ~~listWafFirewallVersions~~

Get a list of firewall versions associated with a specific firewall.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Fastly } from "Fastly";

async function run() {
  const sdk = new Fastly({
    token: "<YOUR_API_KEY_HERE>",
  });

  const res = await sdk.wafFirewallVersions.listWafFirewallVersions({
    firewallId: "fW7g2uUGZzb2W9Euo4Mo0r",
    include: "waf_firewall",
    pageNumber: 1,
    pageSize: 20,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.ListWafFirewallVersionsRequest](../../sdk/models/operations/listwaffirewallversionsrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.ListWafFirewallVersionsResponse](../../sdk/models/operations/listwaffirewallversionsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## ~~updateWafFirewallVersion~~

Update a specific firewall version.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { TypeWafFirewallVersion } from "Fastly/dist/sdk/models/components";

async function run() {
  const sdk = new Fastly({
    token: "<YOUR_API_KEY_HERE>",
  });

  const res = await sdk.wafFirewallVersions.updateWafFirewallVersion({
    firewallId: "fW7g2uUGZzb2W9Euo4Mo0r",
    firewallVersionNumber: 1,
    wafFirewallVersion: {
      data: {
        attributes: {
          comment: "",
        },
      },
    },
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.UpdateWafFirewallVersionRequest](../../sdk/models/operations/updatewaffirewallversionrequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.UpdateWafFirewallVersionResponse](../../sdk/models/operations/updatewaffirewallversionresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
