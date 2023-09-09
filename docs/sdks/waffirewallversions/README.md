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

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { CloneWafFirewallVersionResponse, CloneWafFirewallVersionSecurity } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();
const operationSecurity: CloneWafFirewallVersionSecurity = {
  token: "",
};

sdk.wafFirewallVersions.cloneWafFirewallVersion({
  firewallId: "fW7g2uUGZzb2W9Euo4Mo0r",
  firewallVersionNumber: 1,
}, operationSecurity).then((res: CloneWafFirewallVersionResponse) => {
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

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { CreateWafFirewallVersionResponse, CreateWafFirewallVersionSecurity } from "FastlyTestJS/dist/sdk/models/operations";
import { TypeWafFirewallVersion } from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();
const operationSecurity: CreateWafFirewallVersionSecurity = {
  token: "",
};

sdk.wafFirewallVersions.createWafFirewallVersion({
  firewallId: "fW7g2uUGZzb2W9Euo4Mo0r",
  wafFirewallVersionInput: {
    data: {
      attributes: {
        allowedHttpVersions: "dolorum",
        allowedMethods: "corrupti",
        allowedRequestContentType: "accusamus",
        allowedRequestContentTypeCharset: "tempora",
        argLength: 543678,
        argNameLength: 148268,
        combinedFileSizes: 282699,
        comment: "fugiat",
        criticalAnomalyScore: 30235,
        crsValidateUtf8Encoding: false,
        errorAnomalyScore: 635057,
        highRiskCountryCodes: "expedita",
        httpViolationScoreThreshold: 299643,
        inboundAnomalyScoreThreshold: 7884,
        lfiScoreThreshold: 460220,
        locked: false,
        maxFileSize: 372679,
        maxNumArgs: 24527,
        noticeAnomalyScore: 530537,
        paranoiaLevel: 558065,
        phpInjectionScoreThreshold: 922112,
        rceScoreThreshold: 361151,
        restrictedExtensions: "et",
        restrictedHeaders: "blanditiis",
        rfiScoreThreshold: 405942,
        sessionFixationScoreThreshold: 153627,
        sqlInjectionScoreThreshold: 24313,
        totalArgLength: 425508,
        warningAnomalyScore: 342611,
        xssScoreThreshold: 906172,
      },
      type: TypeWafFirewallVersion.WafFirewallVersion,
    },
  },
}, operationSecurity).then((res: CreateWafFirewallVersionResponse) => {
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

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import {
  DeployActivateWafFirewallVersionResponse,
  DeployActivateWafFirewallVersionSecurity,
} from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();
const operationSecurity: DeployActivateWafFirewallVersionSecurity = {
  token: "",
};

sdk.wafFirewallVersions.deployActivateWafFirewallVersion({
  firewallId: "fW7g2uUGZzb2W9Euo4Mo0r",
  firewallVersionNumber: 1,
}, operationSecurity).then((res: DeployActivateWafFirewallVersionResponse) => {
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

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { GetWafFirewallVersionResponse, GetWafFirewallVersionSecurity } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();
const operationSecurity: GetWafFirewallVersionSecurity = {
  token: "",
};

sdk.wafFirewallVersions.getWafFirewallVersion({
  firewallId: "fW7g2uUGZzb2W9Euo4Mo0r",
  firewallVersionNumber: 1,
  include: "waf_firewall,waf_active_rules",
}, operationSecurity).then((res: GetWafFirewallVersionResponse) => {
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

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { ListWafFirewallVersionsResponse, ListWafFirewallVersionsSecurity } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();
const operationSecurity: ListWafFirewallVersionsSecurity = {
  token: "",
};

sdk.wafFirewallVersions.listWafFirewallVersions({
  firewallId: "fW7g2uUGZzb2W9Euo4Mo0r",
  include: "waf_firewall",
  pageNumber: 1,
  pageSize: 20,
}, operationSecurity).then((res: ListWafFirewallVersionsResponse) => {
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

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { UpdateWafFirewallVersionResponse, UpdateWafFirewallVersionSecurity } from "FastlyTestJS/dist/sdk/models/operations";
import { TypeWafFirewallVersion } from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();
const operationSecurity: UpdateWafFirewallVersionSecurity = {
  token: "",
};

sdk.wafFirewallVersions.updateWafFirewallVersion({
  firewallId: "fW7g2uUGZzb2W9Euo4Mo0r",
  firewallVersionNumber: 1,
  wafFirewallVersionInput: {
    data: {
      attributes: {
        allowedHttpVersions: "error",
        allowedMethods: "consequatur",
        allowedRequestContentType: "incidunt",
        allowedRequestContentTypeCharset: "reiciendis",
        argLength: 209750,
        argNameLength: 690894,
        combinedFileSizes: 115703,
        comment: "architecto",
        criticalAnomalyScore: 577140,
        crsValidateUtf8Encoding: false,
        errorAnomalyScore: 289776,
        highRiskCountryCodes: "quidem",
        httpViolationScoreThreshold: 539074,
        inboundAnomalyScoreThreshold: 671957,
        lfiScoreThreshold: 724148,
        locked: false,
        maxFileSize: 948861,
        maxNumArgs: 388867,
        noticeAnomalyScore: 2703,
        paranoiaLevel: 227084,
        phpInjectionScoreThreshold: 647197,
        rceScoreThreshold: 454860,
        restrictedExtensions: "unde",
        restrictedHeaders: "reiciendis",
        rfiScoreThreshold: 588740,
        sessionFixationScoreThreshold: 833819,
        sqlInjectionScoreThreshold: 962771,
        totalArgLength: 914791,
        warningAnomalyScore: 16871,
        xssScoreThreshold: 667285,
      },
      type: TypeWafFirewallVersion.WafFirewallVersion,
    },
  },
}, operationSecurity).then((res: UpdateWafFirewallVersionResponse) => {
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

