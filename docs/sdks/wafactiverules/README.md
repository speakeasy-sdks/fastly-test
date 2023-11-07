# WafActiveRules
(*.wafActiveRules*)

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

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { Attributes, BulkWafActiveRule, BulkWafActiveRuleStatus, TypeWafActiveRule } from "Fastly/dist/sdk/models/components";
import { BulkUpdateWafActiveRulesRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const firewallId: string = "fW7g2uUGZzb2W9Euo4Mo0r";
const versionId: number = 1;
const bulkWafActiveRule: BulkWafActiveRule = {
  attributes: {
    revision: "string",
  },
  relationships: "string",
};

  const res = await sdk.wafActiveRules.bulkUpdateWafActiveRules(firewallId, versionId, bulkWafActiveRule);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `firewallId`                                                             | *string*                                                                 | :heavy_check_mark:                                                       | Alphanumeric string identifying a WAF Firewall.                          | fW7g2uUGZzb2W9Euo4Mo0r                                                   |
| `versionId`                                                              | *number*                                                                 | :heavy_check_mark:                                                       | Integer identifying a service version.                                   | 1                                                                        |
| `bulkWafActiveRule`                                                      | [components.BulkWafActiveRule](../../models/shared/bulkwafactiverule.md) | :heavy_minus_sign:                                                       | N/A                                                                      |                                                                          |
| `config`                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)             | :heavy_minus_sign:                                                       | Available config options for making requests.                            |                                                                          |


### Response

**Promise<[operations.BulkUpdateWafActiveRulesResponse](../../models/operations/bulkupdatewafactiverulesresponse.md)>**


## ~~createWafActiveRule~~

Create an active rule for a particular firewall version.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import {
  BulkWafActiveRules,
  TypeWafActiveRule,
  WafActiveRuleData,
  WafActiveRuleDataAttributes,
  WafActiveRuleDataStatus,
} from "Fastly/dist/sdk/models/components";
import { CreateWafActiveRuleRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const firewallId: string = "fW7g2uUGZzb2W9Euo4Mo0r";
const versionId: number = 1;
const bulkWafActiveRules: BulkWafActiveRules = {
  data: [
    {
      attributes: {
        revision: "string",
      },
      relationships: "string",
    },
  ],
};

  const res = await sdk.wafActiveRules.createWafActiveRule(firewallId, versionId, bulkWafActiveRules);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `firewallId`                                                               | *string*                                                                   | :heavy_check_mark:                                                         | Alphanumeric string identifying a WAF Firewall.                            | fW7g2uUGZzb2W9Euo4Mo0r                                                     |
| `versionId`                                                                | *number*                                                                   | :heavy_check_mark:                                                         | Integer identifying a service version.                                     | 1                                                                          |
| `bulkWafActiveRules`                                                       | [components.BulkWafActiveRules](../../models/shared/bulkwafactiverules.md) | :heavy_minus_sign:                                                         | N/A                                                                        |                                                                            |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |                                                                            |


### Response

**Promise<[operations.CreateWafActiveRuleResponse](../../models/operations/createwafactiveruleresponse.md)>**


## ~~createWafActiveRulesTag~~

Create active rules by tag. This endpoint will create active rules using the latest revision available for each rule.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import {
  TypeWafActiveRule,
  WafActiveRule,
  WafActiveRuleData,
  WafActiveRuleDataAttributes,
  WafActiveRuleDataStatus,
} from "Fastly/dist/sdk/models/components";
import { CreateWafActiveRulesTagRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const firewallId: string = "fW7g2uUGZzb2W9Euo4Mo0r";
const versionId: number = 1;
const wafTagName: string = "test-waf-tag";
const wafActiveRule: WafActiveRule = {
  data: {
    attributes: {
      revision: "string",
    },
    relationships: "string",
  },
};

  const res = await sdk.wafActiveRules.createWafActiveRulesTag(firewallId, versionId, wafTagName, wafActiveRule);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                        | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `firewallId`                                                     | *string*                                                         | :heavy_check_mark:                                               | Alphanumeric string identifying a WAF Firewall.                  | fW7g2uUGZzb2W9Euo4Mo0r                                           |
| `versionId`                                                      | *number*                                                         | :heavy_check_mark:                                               | Integer identifying a service version.                           | 1                                                                |
| `wafTagName`                                                     | *string*                                                         | :heavy_check_mark:                                               | Name of the tag.                                                 | test-waf-tag                                                     |
| `wafActiveRule`                                                  | [components.WafActiveRule](../../models/shared/wafactiverule.md) | :heavy_minus_sign:                                               | N/A                                                              |                                                                  |
| `config`                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)     | :heavy_minus_sign:                                               | Available config options for making requests.                    |                                                                  |


### Response

**Promise<[operations.CreateWafActiveRulesTagResponse](../../models/operations/createwafactiverulestagresponse.md)>**


## ~~deleteWafActiveRule~~

Delete an active rule for a particular firewall version.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { DeleteWafActiveRuleRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const firewallId: string = "fW7g2uUGZzb2W9Euo4Mo0r";
const versionId: number = 1;
const wafRuleId: string = "3krg2uUGZzb2W9Euo4moOR";

  const res = await sdk.wafActiveRules.deleteWafActiveRule(firewallId, versionId, wafRuleId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `firewallId`                                                 | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying a WAF Firewall.              | fW7g2uUGZzb2W9Euo4Mo0r                                       |
| `versionId`                                                  | *number*                                                     | :heavy_check_mark:                                           | Integer identifying a service version.                       | 1                                                            |
| `wafRuleId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying a WAF rule.                  | 3krg2uUGZzb2W9Euo4moOR                                       |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.DeleteWafActiveRuleResponse](../../models/operations/deletewafactiveruleresponse.md)>**


## ~~getWafActiveRule~~

Get a specific active rule object. Includes details of the rule revision associated with the active rule object by default.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { GetWafActiveRuleRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const firewallId: string = "fW7g2uUGZzb2W9Euo4Mo0r";
const versionId: number = 1;
const wafRuleId: string = "3krg2uUGZzb2W9Euo4moOR";
const include: string = "waf_rule_revision,waf_firewall_version";

  const res = await sdk.wafActiveRules.getWafActiveRule(firewallId, versionId, wafRuleId, include);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                   | Type                                                                                                                        | Required                                                                                                                    | Description                                                                                                                 | Example                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `firewallId`                                                                                                                | *string*                                                                                                                    | :heavy_check_mark:                                                                                                          | Alphanumeric string identifying a WAF Firewall.                                                                             | fW7g2uUGZzb2W9Euo4Mo0r                                                                                                      |
| `versionId`                                                                                                                 | *number*                                                                                                                    | :heavy_check_mark:                                                                                                          | Integer identifying a service version.                                                                                      | 1                                                                                                                           |
| `wafRuleId`                                                                                                                 | *string*                                                                                                                    | :heavy_check_mark:                                                                                                          | Alphanumeric string identifying a WAF rule.                                                                                 | 3krg2uUGZzb2W9Euo4moOR                                                                                                      |
| `include`                                                                                                                   | *string*                                                                                                                    | :heavy_minus_sign:                                                                                                          | Include relationships. Optional, comma-separated values. Permitted values: `waf_rule_revision` and `waf_firewall_version`.<br/> | waf_rule_revision,waf_firewall_version                                                                                      |
| `config`                                                                                                                    | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                | :heavy_minus_sign:                                                                                                          | Available config options for making requests.                                                                               |                                                                                                                             |


### Response

**Promise<[operations.GetWafActiveRuleResponse](../../models/operations/getwafactiveruleresponse.md)>**


## ~~listWafActiveRules~~

List all active rules for a particular firewall version.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Fastly } from "Fastly";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.wafActiveRules.listWafActiveRules({
    firewallId: "fW7g2uUGZzb2W9Euo4Mo0r",
    include: "waf_rule_revision,waf_firewall_version",
    pageNumber: 1,
    pageSize: 20,
    versionId: 1,
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.ListWafActiveRulesRequest](../../models/operations/listwafactiverulesrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.ListWafActiveRulesResponse](../../models/operations/listwafactiverulesresponse.md)>**


## ~~updateWafActiveRule~~

Update an active rule's status for a particular firewall version.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import {
  TypeWafActiveRule,
  WafActiveRule,
  WafActiveRuleData,
  WafActiveRuleDataAttributes,
  WafActiveRuleDataStatus,
} from "Fastly/dist/sdk/models/components";
import { UpdateWafActiveRuleRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const firewallId: string = "fW7g2uUGZzb2W9Euo4Mo0r";
const versionId: number = 1;
const wafRuleId: string = "3krg2uUGZzb2W9Euo4moOR";
const wafActiveRule: WafActiveRule = {
  data: {
    attributes: {
      revision: "string",
    },
    relationships: "string",
  },
};

  const res = await sdk.wafActiveRules.updateWafActiveRule(firewallId, versionId, wafRuleId, wafActiveRule);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                        | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `firewallId`                                                     | *string*                                                         | :heavy_check_mark:                                               | Alphanumeric string identifying a WAF Firewall.                  | fW7g2uUGZzb2W9Euo4Mo0r                                           |
| `versionId`                                                      | *number*                                                         | :heavy_check_mark:                                               | Integer identifying a service version.                           | 1                                                                |
| `wafRuleId`                                                      | *string*                                                         | :heavy_check_mark:                                               | Alphanumeric string identifying a WAF rule.                      | 3krg2uUGZzb2W9Euo4moOR                                           |
| `wafActiveRule`                                                  | [components.WafActiveRule](../../models/shared/wafactiverule.md) | :heavy_minus_sign:                                               | N/A                                                              |                                                                  |
| `config`                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)     | :heavy_minus_sign:                                               | Available config options for making requests.                    |                                                                  |


### Response

**Promise<[operations.UpdateWafActiveRuleResponse](../../models/operations/updatewafactiveruleresponse.md)>**

