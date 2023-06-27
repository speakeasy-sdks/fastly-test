# wafActiveRules

## Overview

An active rule represents a [rule revision](/reference/api/waf/rules/revisions/) added to a particular [firewall version](/reference/api/waf/firewall-version/).

<https://developer.fastly.com/reference/api/waf/rules/active>
### Available Operations

* [~~bulkUpdateWafActiveRules~~](#bulkupdatewafactiverules) - Update multiple active rules :warning: **Deprecated**
* [~~createWafActiveRule~~](#createwafactiverule) - Add a rule to a WAF as an active rule :warning: **Deprecated**
* [~~createWafActiveRulesTag~~](#createwafactiverulestag) - Create active rules by tag :warning: **Deprecated**
* [~~deleteWafActiveRule~~](#deletewafactiverule) - Delete an active rule :warning: **Deprecated**
* [~~getWafActiveRule~~](#getwafactiverule) - Get an active WAF rule object :warning: **Deprecated**
* [~~listWafActiveRules~~](#listwafactiverules) - List active rules on a WAF :warning: **Deprecated**
* [~~updateWafActiveRule~~](#updatewafactiverule) - Update an active rule :warning: **Deprecated**

## ~~bulkUpdateWafActiveRules~~

Bulk update all active rules on a [firewall version](https://developer.fastly.com/reference/api/waf/firewall-version/). This endpoint will not add new active rules, only update existing active rules.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { BulkUpdateWafActiveRulesResponse } from "FastlyTestJS/dist/sdk/models/operations";
import {
  BulkWafActiveRuleAttributesStatus,
  TypeWafActiveRule,
  TypeWafFirewallVersion,
  TypeWafRuleRevision,
} from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();

sdk.wafActiveRules.bulkUpdateWafActiveRules({
  bulkWafActiveRuleInput: {
    attributes: {
      modsecRuleId: 117315,
      revision: 2,
      status: BulkWafActiveRuleAttributesStatus.Log,
    },
    relationships: {
      wafFirewallVersion: {
        data: [
          {
            type: TypeWafFirewallVersion.WafFirewallVersion,
          },
          {
            type: TypeWafFirewallVersion.WafFirewallVersion,
          },
        ],
      },
    },
    type: TypeWafActiveRule.WafActiveRule,
  },
  firewallId: "fW7g2uUGZzb2W9Euo4Mo0r",
  versionId: 1,
}, {
  token: "",
}).then((res: BulkUpdateWafActiveRulesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.BulkUpdateWafActiveRulesRequest](../../models/operations/bulkupdatewafactiverulesrequest.md)   | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `security`                                                                                                 | [operations.BulkUpdateWafActiveRulesSecurity](../../models/operations/bulkupdatewafactiverulessecurity.md) | :heavy_check_mark:                                                                                         | The security requirements to use for the request.                                                          |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.BulkUpdateWafActiveRulesResponse](../../models/operations/bulkupdatewafactiverulesresponse.md)>**


## ~~createWafActiveRule~~

Create an active rule for a particular firewall version.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { CreateWafActiveRuleResponse } from "FastlyTestJS/dist/sdk/models/operations";
import {
  TypeWafActiveRule,
  TypeWafFirewallVersion,
  TypeWafRuleRevision,
  WafActiveRuleDataAttributesStatus,
} from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();

sdk.wafActiveRules.createWafActiveRule({
  bulkWafActiveRulesInput: {
    data: [
      {
        attributes: {
          modsecRuleId: 399812,
          revision: 2,
          status: WafActiveRuleDataAttributesStatus.Score,
        },
        relationships: {
          wafFirewallVersion: {
            data: [
              {
                type: TypeWafFirewallVersion.WafFirewallVersion,
              },
              {
                type: TypeWafFirewallVersion.WafFirewallVersion,
              },
            ],
          },
        },
        type: TypeWafActiveRule.WafActiveRule,
      },
    ],
  },
  firewallId: "fW7g2uUGZzb2W9Euo4Mo0r",
  versionId: 1,
}, {
  token: "",
}).then((res: CreateWafActiveRuleResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.CreateWafActiveRuleRequest](../../models/operations/createwafactiverulerequest.md)   | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `security`                                                                                       | [operations.CreateWafActiveRuleSecurity](../../models/operations/createwafactiverulesecurity.md) | :heavy_check_mark:                                                                               | The security requirements to use for the request.                                                |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.CreateWafActiveRuleResponse](../../models/operations/createwafactiveruleresponse.md)>**


## ~~createWafActiveRulesTag~~

Create active rules by tag. This endpoint will create active rules using the latest revision available for each rule.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { CreateWafActiveRulesTagResponse } from "FastlyTestJS/dist/sdk/models/operations";
import {
  TypeWafActiveRule,
  TypeWafFirewallVersion,
  TypeWafRuleRevision,
  WafActiveRuleDataAttributesStatus,
} from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();

sdk.wafActiveRules.createWafActiveRulesTag({
  firewallId: "fW7g2uUGZzb2W9Euo4Mo0r",
  versionId: 1,
  wafActiveRuleInput: {
    data: {
      attributes: {
        modsecRuleId: 856756,
        revision: "latest",
        status: WafActiveRuleDataAttributesStatus.Block,
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
      type: TypeWafActiveRule.WafActiveRule,
    },
  },
  wafTagName: "test-waf-tag",
}, {
  token: "",
}).then((res: CreateWafActiveRulesTagResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.CreateWafActiveRulesTagRequest](../../models/operations/createwafactiverulestagrequest.md)   | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `security`                                                                                               | [operations.CreateWafActiveRulesTagSecurity](../../models/operations/createwafactiverulestagsecurity.md) | :heavy_check_mark:                                                                                       | The security requirements to use for the request.                                                        |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.CreateWafActiveRulesTagResponse](../../models/operations/createwafactiverulestagresponse.md)>**


## ~~deleteWafActiveRule~~

Delete an active rule for a particular firewall version.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { DeleteWafActiveRuleResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();

sdk.wafActiveRules.deleteWafActiveRule({
  firewallId: "fW7g2uUGZzb2W9Euo4Mo0r",
  versionId: 1,
  wafRuleId: "3krg2uUGZzb2W9Euo4moOR",
}, {
  token: "",
}).then((res: DeleteWafActiveRuleResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.DeleteWafActiveRuleRequest](../../models/operations/deletewafactiverulerequest.md)   | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `security`                                                                                       | [operations.DeleteWafActiveRuleSecurity](../../models/operations/deletewafactiverulesecurity.md) | :heavy_check_mark:                                                                               | The security requirements to use for the request.                                                |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.DeleteWafActiveRuleResponse](../../models/operations/deletewafactiveruleresponse.md)>**


## ~~getWafActiveRule~~

Get a specific active rule object. Includes details of the rule revision associated with the active rule object by default.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { GetWafActiveRuleResponse } from "FastlyTestJS/dist/sdk/models/operations";
import { TypeWafActiveRule } from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();

sdk.wafActiveRules.getWafActiveRule({
  firewallId: "fW7g2uUGZzb2W9Euo4Mo0r",
  include: "waf_rule_revision,waf_firewall_version",
  versionId: 1,
  wafRuleId: "3krg2uUGZzb2W9Euo4moOR",
}, {
  token: "",
}).then((res: GetWafActiveRuleResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.GetWafActiveRuleRequest](../../models/operations/getwafactiverulerequest.md)   | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `security`                                                                                 | [operations.GetWafActiveRuleSecurity](../../models/operations/getwafactiverulesecurity.md) | :heavy_check_mark:                                                                         | The security requirements to use for the request.                                          |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.GetWafActiveRuleResponse](../../models/operations/getwafactiveruleresponse.md)>**


## ~~listWafActiveRules~~

List all active rules for a particular firewall version.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { ListWafActiveRulesResponse } from "FastlyTestJS/dist/sdk/models/operations";
import { TypeWafActiveRule } from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();

sdk.wafActiveRules.listWafActiveRules({
  filterOutdated: "aliquid",
  filterStatus: "perferendis",
  filterWafRuleRevisionMessage: "eum",
  filterWafRuleRevisionModsecRuleId: "voluptas",
  firewallId: "fW7g2uUGZzb2W9Euo4Mo0r",
  include: "waf_rule_revision,waf_firewall_version",
  pageNumber: 1,
  pageSize: 20,
  versionId: 1,
}, {
  token: "",
}).then((res: ListWafActiveRulesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.ListWafActiveRulesRequest](../../models/operations/listwafactiverulesrequest.md)   | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `security`                                                                                     | [operations.ListWafActiveRulesSecurity](../../models/operations/listwafactiverulessecurity.md) | :heavy_check_mark:                                                                             | The security requirements to use for the request.                                              |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.ListWafActiveRulesResponse](../../models/operations/listwafactiverulesresponse.md)>**


## ~~updateWafActiveRule~~

Update an active rule's status for a particular firewall version.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { UpdateWafActiveRuleResponse } from "FastlyTestJS/dist/sdk/models/operations";
import {
  TypeWafActiveRule,
  TypeWafFirewallVersion,
  TypeWafRuleRevision,
  WafActiveRuleDataAttributesStatus,
} from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();

sdk.wafActiveRules.updateWafActiveRule({
  firewallId: "fW7g2uUGZzb2W9Euo4Mo0r",
  versionId: 1,
  wafActiveRuleInput: {
    data: {
      attributes: {
        modsecRuleId: 614528,
        revision: "latest",
        status: WafActiveRuleDataAttributesStatus.Log,
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
            {
              type: TypeWafRuleRevision.WafRuleRevision,
            },
            {
              type: TypeWafRuleRevision.WafRuleRevision,
            },
          ],
        },
      },
      type: TypeWafActiveRule.WafActiveRule,
    },
  },
  wafRuleId: "3krg2uUGZzb2W9Euo4moOR",
}, {
  token: "",
}).then((res: UpdateWafActiveRuleResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.UpdateWafActiveRuleRequest](../../models/operations/updatewafactiverulerequest.md)   | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `security`                                                                                       | [operations.UpdateWafActiveRuleSecurity](../../models/operations/updatewafactiverulesecurity.md) | :heavy_check_mark:                                                                               | The security requirements to use for the request.                                                |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.UpdateWafActiveRuleResponse](../../models/operations/updatewafactiveruleresponse.md)>**
