# WafRules
(*.wafRules*)

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
import { Fastly } from "Fastly";
import { GetWafRuleRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const wafRuleId: string = "3krg2uUGZzb2W9Euo4moOR";
const include: string = "waf_tags,waf_rule_revisions";

  const res = await sdk.wafRules.getWafRule(wafRuleId, include);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      | Example                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `wafRuleId`                                                                                                      | *string*                                                                                                         | :heavy_check_mark:                                                                                               | Alphanumeric string identifying a WAF rule.                                                                      | 3krg2uUGZzb2W9Euo4moOR                                                                                           |
| `include`                                                                                                        | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | Include relationships. Optional, comma-separated values. Permitted values: `waf_tags` and `waf_rule_revisions`.<br/> | waf_tags,waf_rule_revisions                                                                                      |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |                                                                                                                  |


### Response

**Promise<[operations.GetWafRuleResponse](../../models/operations/getwafruleresponse.md)>**


## ~~listWafRules~~

List all available WAF rules.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Fastly } from "Fastly";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.wafRules.listWafRules({
    include: "waf_tags,waf_rule_revisions",
    pageNumber: 1,
    pageSize: 20,
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.ListWafRulesRequest](../../models/operations/listwafrulesrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.ListWafRulesResponse](../../models/operations/listwafrulesresponse.md)>**

