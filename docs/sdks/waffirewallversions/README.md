# wafFirewallVersions

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

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { CloneWafFirewallVersionResponse } from "FastlyTestJS/dist/sdk/models/operations";
import {
  TypeWafFirewallVersion,
  WafFirewallVersionResponseDataAttributesLastDeploymentStatus,
} from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();

sdk.wafFirewallVersions.cloneWafFirewallVersion({
  firewallId: "fW7g2uUGZzb2W9Euo4Mo0r",
  firewallVersionNumber: 1,
}, {
  token: "",
}).then((res: CloneWafFirewallVersionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.CloneWafFirewallVersionRequest](../../models/operations/clonewaffirewallversionrequest.md)   | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `security`                                                                                               | [operations.CloneWafFirewallVersionSecurity](../../models/operations/clonewaffirewallversionsecurity.md) | :heavy_check_mark:                                                                                       | The security requirements to use for the request.                                                        |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.CloneWafFirewallVersionResponse](../../models/operations/clonewaffirewallversionresponse.md)>**


## ~~createWafFirewallVersion~~

Create a new, draft firewall version.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { CreateWafFirewallVersionResponse } from "FastlyTestJS/dist/sdk/models/operations";
import {
  TypeWafFirewallVersion,
  WafFirewallVersionResponseDataAttributesLastDeploymentStatus,
} from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();

sdk.wafFirewallVersions.createWafFirewallVersion({
  firewallId: "fW7g2uUGZzb2W9Euo4Mo0r",
  wafFirewallVersionInput: {
    data: {
      attributes: {
        allowedHttpVersions: "est",
        allowedMethods: "culpa",
        allowedRequestContentType: "voluptatem",
        allowedRequestContentTypeCharset: "sapiente",
        argLength: 889288,
        argNameLength: 103298,
        combinedFileSizes: 682119,
        comment: "pariatur",
        criticalAnomalyScore: 891315,
        crsValidateUtf8Encoding: false,
        errorAnomalyScore: 29190,
        highRiskCountryCodes: "alias",
        httpViolationScoreThreshold: 534917,
        inboundAnomalyScoreThreshold: 937219,
        lfiScoreThreshold: 404244,
        locked: false,
        maxFileSize: 958308,
        maxNumArgs: 524184,
        noticeAnomalyScore: 796320,
        paranoiaLevel: 365100,
        phpInjectionScoreThreshold: 992074,
        rceScoreThreshold: 190567,
        restrictedExtensions: "ullam",
        restrictedHeaders: "perferendis",
        rfiScoreThreshold: 848341,
        sessionFixationScoreThreshold: 518150,
        sqlInjectionScoreThreshold: 770675,
        totalArgLength: 842777,
        warningAnomalyScore: 720528,
        xssScoreThreshold: 373216,
      },
      type: TypeWafFirewallVersion.WafFirewallVersion,
    },
  },
}, {
  token: "",
}).then((res: CreateWafFirewallVersionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.CreateWafFirewallVersionRequest](../../models/operations/createwaffirewallversionrequest.md)   | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `security`                                                                                                 | [operations.CreateWafFirewallVersionSecurity](../../models/operations/createwaffirewallversionsecurity.md) | :heavy_check_mark:                                                                                         | The security requirements to use for the request.                                                          |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.CreateWafFirewallVersionResponse](../../models/operations/createwaffirewallversionresponse.md)>**


## ~~deployActivateWafFirewallVersion~~

Deploy or activate a specific firewall version. If a firewall has been disabled, deploying a firewall version will automatically enable the firewall again.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { DeployActivateWafFirewallVersionResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();

sdk.wafFirewallVersions.deployActivateWafFirewallVersion({
  firewallId: "fW7g2uUGZzb2W9Euo4Mo0r",
  firewallVersionNumber: 1,
}, {
  token: "",
}).then((res: DeployActivateWafFirewallVersionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                  | [operations.DeployActivateWafFirewallVersionRequest](../../models/operations/deployactivatewaffirewallversionrequest.md)   | :heavy_check_mark:                                                                                                         | The request object to use for the request.                                                                                 |
| `security`                                                                                                                 | [operations.DeployActivateWafFirewallVersionSecurity](../../models/operations/deployactivatewaffirewallversionsecurity.md) | :heavy_check_mark:                                                                                                         | The security requirements to use for the request.                                                                          |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.DeployActivateWafFirewallVersionResponse](../../models/operations/deployactivatewaffirewallversionresponse.md)>**


## ~~getWafFirewallVersion~~

Get details about a specific firewall version.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { GetWafFirewallVersionResponse } from "FastlyTestJS/dist/sdk/models/operations";
import {
  TypeWafFirewallVersion,
  WafFirewallVersionResponseDataAttributesLastDeploymentStatus,
} from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();

sdk.wafFirewallVersions.getWafFirewallVersion({
  firewallId: "fW7g2uUGZzb2W9Euo4Mo0r",
  firewallVersionNumber: 1,
  include: "waf_firewall,waf_active_rules",
}, {
  token: "",
}).then((res: GetWafFirewallVersionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.GetWafFirewallVersionRequest](../../models/operations/getwaffirewallversionrequest.md)   | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `security`                                                                                           | [operations.GetWafFirewallVersionSecurity](../../models/operations/getwaffirewallversionsecurity.md) | :heavy_check_mark:                                                                                   | The security requirements to use for the request.                                                    |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.GetWafFirewallVersionResponse](../../models/operations/getwaffirewallversionresponse.md)>**


## ~~listWafFirewallVersions~~

Get a list of firewall versions associated with a specific firewall.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { ListWafFirewallVersionsResponse } from "FastlyTestJS/dist/sdk/models/operations";
import {
  TypeWafFirewallVersion,
  WafFirewallVersionResponseDataAttributesLastDeploymentStatus,
} from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();

sdk.wafFirewallVersions.listWafFirewallVersions({
  firewallId: "fW7g2uUGZzb2W9Euo4Mo0r",
  include: "waf_firewall",
  pageNumber: 1,
  pageSize: 20,
}, {
  token: "",
}).then((res: ListWafFirewallVersionsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.ListWafFirewallVersionsRequest](../../models/operations/listwaffirewallversionsrequest.md)   | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `security`                                                                                               | [operations.ListWafFirewallVersionsSecurity](../../models/operations/listwaffirewallversionssecurity.md) | :heavy_check_mark:                                                                                       | The security requirements to use for the request.                                                        |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.ListWafFirewallVersionsResponse](../../models/operations/listwaffirewallversionsresponse.md)>**


## ~~updateWafFirewallVersion~~

Update a specific firewall version.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { UpdateWafFirewallVersionResponse } from "FastlyTestJS/dist/sdk/models/operations";
import {
  TypeWafFirewallVersion,
  WafFirewallVersionResponseDataAttributesLastDeploymentStatus,
} from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();

sdk.wafFirewallVersions.updateWafFirewallVersion({
  firewallId: "fW7g2uUGZzb2W9Euo4Mo0r",
  firewallVersionNumber: 1,
  wafFirewallVersionInput: {
    data: {
      attributes: {
        allowedHttpVersions: "culpa",
        allowedMethods: "dolor",
        allowedRequestContentType: "aliquam",
        allowedRequestContentTypeCharset: "inventore",
        argLength: 537279,
        argNameLength: 85311,
        combinedFileSizes: 274575,
        comment: "dolor",
        criticalAnomalyScore: 8689,
        crsValidateUtf8Encoding: false,
        errorAnomalyScore: 100014,
        highRiskCountryCodes: "sit",
        httpViolationScoreThreshold: 265039,
        inboundAnomalyScoreThreshold: 144286,
        lfiScoreThreshold: 66149,
        locked: false,
        maxFileSize: 513760,
        maxNumArgs: 65604,
        noticeAnomalyScore: 222658,
        paranoiaLevel: 856277,
        phpInjectionScoreThreshold: 369490,
        rceScoreThreshold: 162120,
        restrictedExtensions: "ipsa",
        restrictedHeaders: "quas",
        rfiScoreThreshold: 911198,
        sessionFixationScoreThreshold: 773456,
        sqlInjectionScoreThreshold: 884952,
        totalArgLength: 456410,
        warningAnomalyScore: 897277,
        xssScoreThreshold: 153369,
      },
      type: TypeWafFirewallVersion.WafFirewallVersion,
    },
  },
}, {
  token: "",
}).then((res: UpdateWafFirewallVersionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.UpdateWafFirewallVersionRequest](../../models/operations/updatewaffirewallversionrequest.md)   | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `security`                                                                                                 | [operations.UpdateWafFirewallVersionSecurity](../../models/operations/updatewaffirewallversionsecurity.md) | :heavy_check_mark:                                                                                         | The security requirements to use for the request.                                                          |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.UpdateWafFirewallVersionResponse](../../models/operations/updatewaffirewallversionresponse.md)>**
