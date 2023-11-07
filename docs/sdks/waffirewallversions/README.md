# WafFirewallVersions
(*.wafFirewallVersions*)

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
import { CloneWafFirewallVersionRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const firewallId: string = "fW7g2uUGZzb2W9Euo4Mo0r";
const firewallVersionNumber: number = 1;

  const res = await sdk.wafFirewallVersions.cloneWafFirewallVersion(firewallId, firewallVersionNumber);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `firewallId`                                                 | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying a WAF Firewall.              | fW7g2uUGZzb2W9Euo4Mo0r                                       |
| `firewallVersionNumber`                                      | *number*                                                     | :heavy_check_mark:                                           | Integer identifying a WAF firewall version.                  | 1                                                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.CloneWafFirewallVersionResponse](../../models/operations/clonewaffirewallversionresponse.md)>**


## ~~createWafFirewallVersion~~

Create a new, draft firewall version.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import {
  TypeWafFirewallVersion,
  WafFirewallVersion,
  WafFirewallVersionData,
  WafFirewallVersionDataAttributes,
} from "Fastly/dist/sdk/models/components";
import { CreateWafFirewallVersionRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const firewallId: string = "fW7g2uUGZzb2W9Euo4Mo0r";
const wafFirewallVersion: WafFirewallVersion = {
  data: {
    attributes: {
      comment: "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
    },
  },
};

  const res = await sdk.wafFirewallVersions.createWafFirewallVersion(firewallId, wafFirewallVersion);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `firewallId`                                                               | *string*                                                                   | :heavy_check_mark:                                                         | Alphanumeric string identifying a WAF Firewall.                            | fW7g2uUGZzb2W9Euo4Mo0r                                                     |
| `wafFirewallVersion`                                                       | [components.WafFirewallVersion](../../models/shared/waffirewallversion.md) | :heavy_minus_sign:                                                         | N/A                                                                        |                                                                            |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |                                                                            |


### Response

**Promise<[operations.CreateWafFirewallVersionResponse](../../models/operations/createwaffirewallversionresponse.md)>**


## ~~deployActivateWafFirewallVersion~~

Deploy or activate a specific firewall version. If a firewall has been disabled, deploying a firewall version will automatically enable the firewall again.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { DeployActivateWafFirewallVersionRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const firewallId: string = "fW7g2uUGZzb2W9Euo4Mo0r";
const firewallVersionNumber: number = 1;

  const res = await sdk.wafFirewallVersions.deployActivateWafFirewallVersion(firewallId, firewallVersionNumber);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `firewallId`                                                 | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying a WAF Firewall.              | fW7g2uUGZzb2W9Euo4Mo0r                                       |
| `firewallVersionNumber`                                      | *number*                                                     | :heavy_check_mark:                                           | Integer identifying a WAF firewall version.                  | 1                                                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.DeployActivateWafFirewallVersionResponse](../../models/operations/deployactivatewaffirewallversionresponse.md)>**


## ~~getWafFirewallVersion~~

Get details about a specific firewall version.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { GetWafFirewallVersionRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const firewallId: string = "fW7g2uUGZzb2W9Euo4Mo0r";
const firewallVersionNumber: number = 1;
const include: string = "waf_firewall,waf_active_rules";

  const res = await sdk.wafFirewallVersions.getWafFirewallVersion(firewallId, firewallVersionNumber, include);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        | Example                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `firewallId`                                                                                                       | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | Alphanumeric string identifying a WAF Firewall.                                                                    | fW7g2uUGZzb2W9Euo4Mo0r                                                                                             |
| `firewallVersionNumber`                                                                                            | *number*                                                                                                           | :heavy_check_mark:                                                                                                 | Integer identifying a WAF firewall version.                                                                        | 1                                                                                                                  |
| `include`                                                                                                          | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | Include relationships. Optional, comma-separated values. Permitted values: `waf_firewall` and `waf_active_rules`.<br/> | waf_firewall,waf_active_rules                                                                                      |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |                                                                                                                    |


### Response

**Promise<[operations.GetWafFirewallVersionResponse](../../models/operations/getwaffirewallversionresponse.md)>**


## ~~listWafFirewallVersions~~

Get a list of firewall versions associated with a specific firewall.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { ListWafFirewallVersionsRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const firewallId: string = "fW7g2uUGZzb2W9Euo4Mo0r";
const include: string = "waf_firewall";
const pageNumber: number = 1;
const pageSize: number = 20;

  const res = await sdk.wafFirewallVersions.listWafFirewallVersions(firewallId, include, pageNumber, pageSize);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `firewallId`                                                 | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying a WAF Firewall.              | fW7g2uUGZzb2W9Euo4Mo0r                                       |
| `include`                                                    | *string*                                                     | :heavy_minus_sign:                                           | Include relationships. Optional.                             | waf_firewall                                                 |
| `pageNumber`                                                 | *number*                                                     | :heavy_minus_sign:                                           | Current page.                                                | 1                                                            |
| `pageSize`                                                   | *number*                                                     | :heavy_minus_sign:                                           | Number of records per page.                                  | 20                                                           |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.ListWafFirewallVersionsResponse](../../models/operations/listwaffirewallversionsresponse.md)>**


## ~~updateWafFirewallVersion~~

Update a specific firewall version.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import {
  TypeWafFirewallVersion,
  WafFirewallVersion,
  WafFirewallVersionData,
  WafFirewallVersionDataAttributes,
} from "Fastly/dist/sdk/models/components";
import { UpdateWafFirewallVersionRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const firewallId: string = "fW7g2uUGZzb2W9Euo4Mo0r";
const firewallVersionNumber: number = 1;
const wafFirewallVersion: WafFirewallVersion = {
  data: {
    attributes: {
      comment: "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
    },
  },
};

  const res = await sdk.wafFirewallVersions.updateWafFirewallVersion(firewallId, firewallVersionNumber, wafFirewallVersion);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `firewallId`                                                               | *string*                                                                   | :heavy_check_mark:                                                         | Alphanumeric string identifying a WAF Firewall.                            | fW7g2uUGZzb2W9Euo4Mo0r                                                     |
| `firewallVersionNumber`                                                    | *number*                                                                   | :heavy_check_mark:                                                         | Integer identifying a WAF firewall version.                                | 1                                                                          |
| `wafFirewallVersion`                                                       | [components.WafFirewallVersion](../../models/shared/waffirewallversion.md) | :heavy_minus_sign:                                                         | N/A                                                                        |                                                                            |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |                                                                            |


### Response

**Promise<[operations.UpdateWafFirewallVersionResponse](../../models/operations/updatewaffirewallversionresponse.md)>**

