# wafExclusions

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

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { CreateWafRuleExclusionResponse } from "FastlyTestJS/dist/sdk/models/operations";
import {
  TypeWafExclusion,
  TypeWafRule,
  TypeWafRuleRevision,
  WafExclusionDataAttributesExclusionType,
  WafExclusionDataAttributesVariable,
} from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();

sdk.wafExclusions.createWafRuleExclusion({
  firewallId: "fW7g2uUGZzb2W9Euo4Mo0r",
  firewallVersionNumber: 1,
  wafExclusionInput: {
    data: {
      attributes: {
        condition: "voluptates",
        exclusionType: WafExclusionDataAttributesExclusionType.Variable,
        logging: false,
        name: "Wm Hane",
        number: 1,
        variable: WafExclusionDataAttributesVariable.ReqCookies,
      },
      relationships: {
        wafRuleRevisions: {
          data: [
            {
              type: TypeWafRuleRevision.WafRuleRevision,
            },
            {
              type: TypeWafRuleRevision.WafRuleRevision,
            },
          ],
        },
      },
      type: TypeWafExclusion.WafExclusion,
    },
  },
}, {
  token: "",
}).then((res: CreateWafRuleExclusionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.CreateWafRuleExclusionRequest](../../models/operations/createwafruleexclusionrequest.md)   | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `security`                                                                                             | [operations.CreateWafRuleExclusionSecurity](../../models/operations/createwafruleexclusionsecurity.md) | :heavy_check_mark:                                                                                     | The security requirements to use for the request.                                                      |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.CreateWafRuleExclusionResponse](../../models/operations/createwafruleexclusionresponse.md)>**


## ~~deleteWafRuleExclusion~~

Delete a WAF exclusion for a particular firewall version.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { DeleteWafRuleExclusionResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();

sdk.wafExclusions.deleteWafRuleExclusion({
  exclusionNumber: 1,
  firewallId: "fW7g2uUGZzb2W9Euo4Mo0r",
  firewallVersionNumber: 1,
}, {
  token: "",
}).then((res: DeleteWafRuleExclusionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.DeleteWafRuleExclusionRequest](../../models/operations/deletewafruleexclusionrequest.md)   | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `security`                                                                                             | [operations.DeleteWafRuleExclusionSecurity](../../models/operations/deletewafruleexclusionsecurity.md) | :heavy_check_mark:                                                                                     | The security requirements to use for the request.                                                      |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.DeleteWafRuleExclusionResponse](../../models/operations/deletewafruleexclusionresponse.md)>**


## ~~getWafRuleExclusion~~

Get a specific WAF exclusion object.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { GetWafRuleExclusionResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();

sdk.wafExclusions.getWafRuleExclusion({
  exclusionNumber: 1,
  firewallId: "fW7g2uUGZzb2W9Euo4Mo0r",
  firewallVersionNumber: 1,
}, {
  token: "",
}).then((res: GetWafRuleExclusionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.GetWafRuleExclusionRequest](../../models/operations/getwafruleexclusionrequest.md)   | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `security`                                                                                       | [operations.GetWafRuleExclusionSecurity](../../models/operations/getwafruleexclusionsecurity.md) | :heavy_check_mark:                                                                               | The security requirements to use for the request.                                                |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.GetWafRuleExclusionResponse](../../models/operations/getwafruleexclusionresponse.md)>**


## ~~listWafRuleExclusions~~

List all exclusions for a particular firewall version.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { ListWafRuleExclusionsFilterExclusionType, ListWafRuleExclusionsResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();

sdk.wafExclusions.listWafRuleExclusions({
  filterExclusionType: ListWafRuleExclusionsFilterExclusionType.Waf,
  filterName: "ex",
  filterWafRulesModsecRuleId: 281153,
  firewallId: "fW7g2uUGZzb2W9Euo4Mo0r",
  firewallVersionNumber: 1,
  include: "waf_rules",
  pageNumber: 1,
  pageSize: 20,
}, {
  token: "",
}).then((res: ListWafRuleExclusionsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.ListWafRuleExclusionsRequest](../../models/operations/listwafruleexclusionsrequest.md)   | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `security`                                                                                           | [operations.ListWafRuleExclusionsSecurity](../../models/operations/listwafruleexclusionssecurity.md) | :heavy_check_mark:                                                                                   | The security requirements to use for the request.                                                    |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.ListWafRuleExclusionsResponse](../../models/operations/listwafruleexclusionsresponse.md)>**


## ~~updateWafRuleExclusion~~

Update a WAF exclusion for a particular firewall version.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { UpdateWafRuleExclusionResponse } from "FastlyTestJS/dist/sdk/models/operations";
import {
  TypeWafExclusion,
  TypeWafRule,
  TypeWafRuleRevision,
  WafExclusionDataAttributesExclusionType,
  WafExclusionDataAttributesVariable,
} from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();

sdk.wafExclusions.updateWafRuleExclusion({
  exclusionNumber: 1,
  firewallId: "fW7g2uUGZzb2W9Euo4Mo0r",
  firewallVersionNumber: 1,
  wafExclusionInput: {
    data: {
      attributes: {
        condition: "ad",
        exclusionType: WafExclusionDataAttributesExclusionType.Waf,
        logging: false,
        name: "Leona Rippin IV",
        number: 1,
        variable: WafExclusionDataAttributesVariable.ReqPostFilename,
      },
      relationships: {
        wafRules: {
          data: [
            {
              type: TypeWafRule.WafRule,
            },
            {
              type: TypeWafRule.WafRule,
            },
            {
              type: TypeWafRule.WafRule,
            },
          ],
        },
      },
      type: TypeWafExclusion.WafExclusion,
    },
  },
}, {
  token: "",
}).then((res: UpdateWafRuleExclusionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.UpdateWafRuleExclusionRequest](../../models/operations/updatewafruleexclusionrequest.md)   | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `security`                                                                                             | [operations.UpdateWafRuleExclusionSecurity](../../models/operations/updatewafruleexclusionsecurity.md) | :heavy_check_mark:                                                                                     | The security requirements to use for the request.                                                      |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.UpdateWafRuleExclusionResponse](../../models/operations/updatewafruleexclusionresponse.md)>**

