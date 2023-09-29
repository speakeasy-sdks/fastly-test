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
import { Fastly } from "FastlyTestJS";
import { CloneWafFirewallVersionResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.wafFirewallVersions.cloneWafFirewallVersion({
  firewallId: "fW7g2uUGZzb2W9Euo4Mo0r",
  firewallVersionNumber: 1,
}).then((res: CloneWafFirewallVersionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.CloneWafFirewallVersionRequest](../../models/operations/clonewaffirewallversionrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.CloneWafFirewallVersionResponse](../../models/operations/clonewaffirewallversionresponse.md)>**


## ~~createWafFirewallVersion~~

Create a new, draft firewall version.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { CreateWafFirewallVersionResponse } from "FastlyTestJS/dist/sdk/models/operations";
import { TypeWafFirewallVersion } from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.wafFirewallVersions.createWafFirewallVersion({
  firewallId: "fW7g2uUGZzb2W9Euo4Mo0r",
  wafFirewallVersionInput: {
    data: {
      attributes: {
        allowedHttpVersions: "enormously",
        allowedMethods: "East",
        allowedRequestContentType: "Hat",
        allowedRequestContentTypeCharset: "Recycled purple Chevrolet",
        argLength: 985257,
        argNameLength: 847307,
        combinedFileSizes: 306754,
        comment: "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
        criticalAnomalyScore: 856555,
        crsValidateUtf8Encoding: false,
        errorAnomalyScore: 9460,
        highRiskCountryCodes: "bypass Tungsten DRAM",
        httpViolationScoreThreshold: 29946,
        inboundAnomalyScoreThreshold: 72074,
        lfiScoreThreshold: 827941,
        locked: false,
        maxFileSize: 389880,
        maxNumArgs: 854051,
        noticeAnomalyScore: 114786,
        paranoiaLevel: 351968,
        phpInjectionScoreThreshold: 673502,
        rceScoreThreshold: 706153,
        restrictedExtensions: "Royce",
        restrictedHeaders: "District lime",
        rfiScoreThreshold: 311744,
        sessionFixationScoreThreshold: 576231,
        sqlInjectionScoreThreshold: 790680,
        totalArgLength: 4268,
        warningAnomalyScore: 801994,
        xssScoreThreshold: 931823,
      },
      type: TypeWafFirewallVersion.WafFirewallVersion,
    },
  },
}).then((res: CreateWafFirewallVersionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.CreateWafFirewallVersionRequest](../../models/operations/createwaffirewallversionrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.CreateWafFirewallVersionResponse](../../models/operations/createwaffirewallversionresponse.md)>**


## ~~deployActivateWafFirewallVersion~~

Deploy or activate a specific firewall version. If a firewall has been disabled, deploying a firewall version will automatically enable the firewall again.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { DeployActivateWafFirewallVersionResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.wafFirewallVersions.deployActivateWafFirewallVersion({
  firewallId: "fW7g2uUGZzb2W9Euo4Mo0r",
  firewallVersionNumber: 1,
}).then((res: DeployActivateWafFirewallVersionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                | [operations.DeployActivateWafFirewallVersionRequest](../../models/operations/deployactivatewaffirewallversionrequest.md) | :heavy_check_mark:                                                                                                       | The request object to use for the request.                                                                               |
| `config`                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                             | :heavy_minus_sign:                                                                                                       | Available config options for making requests.                                                                            |


### Response

**Promise<[operations.DeployActivateWafFirewallVersionResponse](../../models/operations/deployactivatewaffirewallversionresponse.md)>**


## ~~getWafFirewallVersion~~

Get details about a specific firewall version.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { GetWafFirewallVersionResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.wafFirewallVersions.getWafFirewallVersion({
  firewallId: "fW7g2uUGZzb2W9Euo4Mo0r",
  firewallVersionNumber: 1,
  include: "waf_firewall,waf_active_rules",
}).then((res: GetWafFirewallVersionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.GetWafFirewallVersionRequest](../../models/operations/getwaffirewallversionrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.GetWafFirewallVersionResponse](../../models/operations/getwaffirewallversionresponse.md)>**


## ~~listWafFirewallVersions~~

Get a list of firewall versions associated with a specific firewall.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { ListWafFirewallVersionsResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.wafFirewallVersions.listWafFirewallVersions({
  firewallId: "fW7g2uUGZzb2W9Euo4Mo0r",
  include: "waf_firewall",
  pageNumber: 1,
  pageSize: 20,
}).then((res: ListWafFirewallVersionsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.ListWafFirewallVersionsRequest](../../models/operations/listwaffirewallversionsrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.ListWafFirewallVersionsResponse](../../models/operations/listwaffirewallversionsresponse.md)>**


## ~~updateWafFirewallVersion~~

Update a specific firewall version.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { UpdateWafFirewallVersionResponse } from "FastlyTestJS/dist/sdk/models/operations";
import { TypeWafFirewallVersion } from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.wafFirewallVersions.updateWafFirewallVersion({
  firewallId: "fW7g2uUGZzb2W9Euo4Mo0r",
  firewallVersionNumber: 1,
  wafFirewallVersionInput: {
    data: {
      attributes: {
        allowedHttpVersions: "schemas",
        allowedMethods: "Bugatti Somalia",
        allowedRequestContentType: "Diesel celebrated",
        allowedRequestContentTypeCharset: "Gasoline",
        argLength: 817491,
        argNameLength: 225176,
        combinedFileSizes: 245616,
        comment: "The Football Is Good For Training And Recreational Purposes",
        criticalAnomalyScore: 751053,
        crsValidateUtf8Encoding: false,
        errorAnomalyScore: 893340,
        highRiskCountryCodes: "Bespoke Planner",
        httpViolationScoreThreshold: 975928,
        inboundAnomalyScoreThreshold: 739597,
        lfiScoreThreshold: 974090,
        locked: false,
        maxFileSize: 274045,
        maxNumArgs: 487683,
        noticeAnomalyScore: 660999,
        paranoiaLevel: 601607,
        phpInjectionScoreThreshold: 676720,
        rceScoreThreshold: 650022,
        restrictedExtensions: "indexing Credit becquerel",
        restrictedHeaders: "Tesla",
        rfiScoreThreshold: 134918,
        sessionFixationScoreThreshold: 611213,
        sqlInjectionScoreThreshold: 583043,
        totalArgLength: 627256,
        warningAnomalyScore: 333088,
        xssScoreThreshold: 545207,
      },
      type: TypeWafFirewallVersion.WafFirewallVersion,
    },
  },
}).then((res: UpdateWafFirewallVersionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.UpdateWafFirewallVersionRequest](../../models/operations/updatewaffirewallversionrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.UpdateWafFirewallVersionResponse](../../models/operations/updatewaffirewallversionresponse.md)>**

