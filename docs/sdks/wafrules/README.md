# WafRules
(*wafRules*)

## Overview

Rules are universally available for every firewall. Rules can have one or multiple [rule revisions](/reference/api/waf/rules/revisions/). You can add rules to your firewall by creating [active rules](/reference/api/waf/rules/active/).

<https://developer.fastly.com/reference/api/waf/rules>
### Available Operations

* [~~getWafRule~~](#getwafrule) - Get a rule :warning: **Deprecated**
* [~~listWafRules~~](#listwafrules) - List available WAF rules :warning: **Deprecated**

## ~~getWafRule~~

Get a specific rule. The `id` provided can be the ModSecurity Rule ID or the Fastly generated rule ID.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { GetWafRuleResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.wafRules.getWafRule({
  include: "waf_tags,waf_rule_revisions",
  wafRuleId: "3krg2uUGZzb2W9Euo4moOR",
}).then((res: GetWafRuleResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.GetWafRuleRequest](../../models/operations/getwafrulerequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.GetWafRuleResponse](../../models/operations/getwafruleresponse.md)>**


## ~~listWafRules~~

List all available WAF rules.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { ListWafRulesResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.wafRules.listWafRules({
  filterModsecRuleId: "South pricing",
  filterWafFirewallIdNotMatch: "Hatchback Avon",
  filterWafRuleRevisionsSource: "Latin candela Home",
  filterWafTagsName: "Electric Tajikistan",
  include: "waf_tags,waf_rule_revisions",
  pageNumber: 1,
  pageSize: 20,
}).then((res: ListWafRulesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.ListWafRulesRequest](../../models/operations/listwafrulesrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.ListWafRulesResponse](../../models/operations/listwafrulesresponse.md)>**

