# WafActiveRules
(*wafActiveRules*)

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
import { BulkWafActiveRuleStatus, TypeWafActiveRule } from "Fastly/dist/sdk/models/components";

async function run() {
  const sdk = new Fastly({
    token: "<YOUR_API_KEY_HERE>",
  });

  const res = await sdk.wafActiveRules.bulkUpdateWafActiveRules({
    bulkWafActiveRule: {
      attributes: {
        revision: "<value>",
      },
      relationships: "<value>",
    },
    firewallId: "fW7g2uUGZzb2W9Euo4Mo0r",
    versionId: 1,
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
| `request`                                                                                                    | [operations.BulkUpdateWafActiveRulesRequest](../../sdk/models/operations/bulkupdatewafactiverulesrequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.BulkUpdateWafActiveRulesResponse](../../sdk/models/operations/bulkupdatewafactiverulesresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## ~~createWafActiveRule~~

Create an active rule for a particular firewall version.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { TypeWafActiveRule, WafActiveRuleDataStatus } from "Fastly/dist/sdk/models/components";

async function run() {
  const sdk = new Fastly({
    token: "<YOUR_API_KEY_HERE>",
  });

  const res = await sdk.wafActiveRules.createWafActiveRule({
    bulkWafActiveRules: {
      data: [
        {
          attributes: {
            revision: "<value>",
          },
          relationships: "<value>",
        },
      ],
    },
    firewallId: "fW7g2uUGZzb2W9Euo4Mo0r",
    versionId: 1,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.CreateWafActiveRuleRequest](../../sdk/models/operations/createwafactiverulerequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.CreateWafActiveRuleResponse](../../sdk/models/operations/createwafactiveruleresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## ~~createWafActiveRulesTag~~

Create active rules by tag. This endpoint will create active rules using the latest revision available for each rule.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { TypeWafActiveRule, WafActiveRuleDataStatus } from "Fastly/dist/sdk/models/components";

async function run() {
  const sdk = new Fastly({
    token: "<YOUR_API_KEY_HERE>",
  });

  const res = await sdk.wafActiveRules.createWafActiveRulesTag({
    firewallId: "fW7g2uUGZzb2W9Euo4Mo0r",
    versionId: 1,
    wafActiveRule: {
      data: {
        attributes: {
          revision: "<value>",
        },
        relationships: "<value>",
      },
    },
    wafTagName: "test-waf-tag",
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
| `request`                                                                                                  | [operations.CreateWafActiveRulesTagRequest](../../sdk/models/operations/createwafactiverulestagrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.CreateWafActiveRulesTagResponse](../../sdk/models/operations/createwafactiverulestagresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## ~~deleteWafActiveRule~~

Delete an active rule for a particular firewall version.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Fastly } from "Fastly";

async function run() {
  const sdk = new Fastly({
    token: "<YOUR_API_KEY_HERE>",
  });

  const res = await sdk.wafActiveRules.deleteWafActiveRule({
    firewallId: "fW7g2uUGZzb2W9Euo4Mo0r",
    versionId: 1,
    wafRuleId: "3krg2uUGZzb2W9Euo4moOR",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.DeleteWafActiveRuleRequest](../../sdk/models/operations/deletewafactiverulerequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.DeleteWafActiveRuleResponse](../../sdk/models/operations/deletewafactiveruleresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## ~~getWafActiveRule~~

Get a specific active rule object. Includes details of the rule revision associated with the active rule object by default.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Fastly } from "Fastly";

async function run() {
  const sdk = new Fastly({
    token: "<YOUR_API_KEY_HERE>",
  });

  const res = await sdk.wafActiveRules.getWafActiveRule({
    firewallId: "fW7g2uUGZzb2W9Euo4Mo0r",
    include: "waf_rule_revision,waf_firewall_version",
    versionId: 1,
    wafRuleId: "3krg2uUGZzb2W9Euo4moOR",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.GetWafActiveRuleRequest](../../sdk/models/operations/getwafactiverulerequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.GetWafActiveRuleResponse](../../sdk/models/operations/getwafactiveruleresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## ~~listWafActiveRules~~

List all active rules for a particular firewall version.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Fastly } from "Fastly";

async function run() {
  const sdk = new Fastly({
    token: "<YOUR_API_KEY_HERE>",
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
}

run();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.ListWafActiveRulesRequest](../../sdk/models/operations/listwafactiverulesrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.ListWafActiveRulesResponse](../../sdk/models/operations/listwafactiverulesresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## ~~updateWafActiveRule~~

Update an active rule's status for a particular firewall version.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { TypeWafActiveRule, WafActiveRuleDataStatus } from "Fastly/dist/sdk/models/components";

async function run() {
  const sdk = new Fastly({
    token: "<YOUR_API_KEY_HERE>",
  });

  const res = await sdk.wafActiveRules.updateWafActiveRule({
    firewallId: "fW7g2uUGZzb2W9Euo4Mo0r",
    versionId: 1,
    wafActiveRule: {
      data: {
        attributes: {
          revision: "<value>",
        },
        relationships: "<value>",
      },
    },
    wafRuleId: "3krg2uUGZzb2W9Euo4moOR",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.UpdateWafActiveRuleRequest](../../sdk/models/operations/updatewafactiverulerequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.UpdateWafActiveRuleResponse](../../sdk/models/operations/updatewafactiveruleresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
