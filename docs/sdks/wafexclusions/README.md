# WafExclusions
(*.wafExclusions*)

## Overview

WAF rule exclusions provide a flexible way to handle false positives, allowing specific variables, rules, and the entire WAF to be excluded on a per request basis. You can configure up to 300 WAF exclusions and each exclusion of type `rule` can have up to 30 rules associated with it.


<https://developer.fastly.com/reference/api/waf/rules/exclusions>
### Available Operations

* [~~createWafRuleExclusion~~](#createwafruleexclusion) - Create a WAF rule exclusion :warning: **Deprecated**
* [~~deleteWafRuleExclusion~~](#deletewafruleexclusion) - Delete a WAF rule exclusion :warning: **Deprecated**
* [~~getWafRuleExclusion~~](#getwafruleexclusion) - Get a WAF rule exclusion :warning: **Deprecated**
* [~~listWafRuleExclusions~~](#listwafruleexclusions) - List WAF rule exclusions :warning: **Deprecated**
* [~~updateWafRuleExclusion~~](#updatewafruleexclusion) - Update a WAF rule exclusion :warning: **Deprecated**

## ~~createWafRuleExclusion~~

Create a WAF exclusion for a particular firewall version.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import {
  TypeWafExclusion,
  WafExclusion,
  WafExclusionData,
  WafExclusionDataAttributes,
  WafExclusionDataExclusionType,
  WafExclusionDataVariable,
} from "Fastly/dist/sdk/models/components";
import { CreateWafRuleExclusionRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const firewallId: string = "fW7g2uUGZzb2W9Euo4Mo0r";
const firewallVersionNumber: number = 1;
const wafExclusion: WafExclusion = {
  data: {
    attributes: {
      number: 1,
    },
    relationships: "string",
  },
};

  const res = await sdk.wafExclusions.createWafRuleExclusion(firewallId, firewallVersionNumber, wafExclusion);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                      | Type                                                           | Required                                                       | Description                                                    | Example                                                        |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `firewallId`                                                   | *string*                                                       | :heavy_check_mark:                                             | Alphanumeric string identifying a WAF Firewall.                | fW7g2uUGZzb2W9Euo4Mo0r                                         |
| `firewallVersionNumber`                                        | *number*                                                       | :heavy_check_mark:                                             | Integer identifying a WAF firewall version.                    | 1                                                              |
| `wafExclusion`                                                 | [components.WafExclusion](../../models/shared/wafexclusion.md) | :heavy_minus_sign:                                             | N/A                                                            |                                                                |
| `config`                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)   | :heavy_minus_sign:                                             | Available config options for making requests.                  |                                                                |


### Response

**Promise<[operations.CreateWafRuleExclusionResponse](../../models/operations/createwafruleexclusionresponse.md)>**


## ~~deleteWafRuleExclusion~~

Delete a WAF exclusion for a particular firewall version.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { DeleteWafRuleExclusionRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const exclusionNumber: number = 1;
const firewallId: string = "fW7g2uUGZzb2W9Euo4Mo0r";
const firewallVersionNumber: number = 1;

  const res = await sdk.wafExclusions.deleteWafRuleExclusion(exclusionNumber, firewallId, firewallVersionNumber);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `exclusionNumber`                                            | *number*                                                     | :heavy_check_mark:                                           | A numeric ID identifying a WAF exclusion.                    | 1                                                            |
| `firewallId`                                                 | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying a WAF Firewall.              | fW7g2uUGZzb2W9Euo4Mo0r                                       |
| `firewallVersionNumber`                                      | *number*                                                     | :heavy_check_mark:                                           | Integer identifying a WAF firewall version.                  | 1                                                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.DeleteWafRuleExclusionResponse](../../models/operations/deletewafruleexclusionresponse.md)>**


## ~~getWafRuleExclusion~~

Get a specific WAF exclusion object.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { GetWafRuleExclusionRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const exclusionNumber: number = 1;
const firewallId: string = "fW7g2uUGZzb2W9Euo4Mo0r";
const firewallVersionNumber: number = 1;

  const res = await sdk.wafExclusions.getWafRuleExclusion(exclusionNumber, firewallId, firewallVersionNumber);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `exclusionNumber`                                            | *number*                                                     | :heavy_check_mark:                                           | A numeric ID identifying a WAF exclusion.                    | 1                                                            |
| `firewallId`                                                 | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying a WAF Firewall.              | fW7g2uUGZzb2W9Euo4Mo0r                                       |
| `firewallVersionNumber`                                      | *number*                                                     | :heavy_check_mark:                                           | Integer identifying a WAF firewall version.                  | 1                                                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.GetWafRuleExclusionResponse](../../models/operations/getwafruleexclusionresponse.md)>**


## ~~listWafRuleExclusions~~

List all exclusions for a particular firewall version.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { FilterExclusionType } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.wafExclusions.listWafRuleExclusions({
    firewallId: "fW7g2uUGZzb2W9Euo4Mo0r",
    firewallVersionNumber: 1,
    include: "waf_rules",
    pageNumber: 1,
    pageSize: 20,
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.ListWafRuleExclusionsRequest](../../models/operations/listwafruleexclusionsrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.ListWafRuleExclusionsResponse](../../models/operations/listwafruleexclusionsresponse.md)>**


## ~~updateWafRuleExclusion~~

Update a WAF exclusion for a particular firewall version.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import {
  TypeWafExclusion,
  WafExclusion,
  WafExclusionData,
  WafExclusionDataAttributes,
  WafExclusionDataExclusionType,
  WafExclusionDataVariable,
} from "Fastly/dist/sdk/models/components";
import { UpdateWafRuleExclusionRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const exclusionNumber: number = 1;
const firewallId: string = "fW7g2uUGZzb2W9Euo4Mo0r";
const firewallVersionNumber: number = 1;
const wafExclusion: WafExclusion = {
  data: {
    attributes: {
      number: 1,
    },
    relationships: "string",
  },
};

  const res = await sdk.wafExclusions.updateWafRuleExclusion(exclusionNumber, firewallId, firewallVersionNumber, wafExclusion);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                      | Type                                                           | Required                                                       | Description                                                    | Example                                                        |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `exclusionNumber`                                              | *number*                                                       | :heavy_check_mark:                                             | A numeric ID identifying a WAF exclusion.                      | 1                                                              |
| `firewallId`                                                   | *string*                                                       | :heavy_check_mark:                                             | Alphanumeric string identifying a WAF Firewall.                | fW7g2uUGZzb2W9Euo4Mo0r                                         |
| `firewallVersionNumber`                                        | *number*                                                       | :heavy_check_mark:                                             | Integer identifying a WAF firewall version.                    | 1                                                              |
| `wafExclusion`                                                 | [components.WafExclusion](../../models/shared/wafexclusion.md) | :heavy_minus_sign:                                             | N/A                                                            |                                                                |
| `config`                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)   | :heavy_minus_sign:                                             | Available config options for making requests.                  |                                                                |


### Response

**Promise<[operations.UpdateWafRuleExclusionResponse](../../models/operations/updatewafruleexclusionresponse.md)>**

