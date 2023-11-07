# WafRuleRevisions
(*.wafRuleRevisions*)

## Overview

Rule revisions track new variations of [rules](/reference/api/waf/rules/) as they change over time with enhancements, fixes, and improvements. This object allows you to find a specific variation of a rule for use in your application. An [active rule](/reference/api/waf/rules/active/) on a firewall uses a specific rule revision.

<https://developer.fastly.com/reference/api/waf/rules/revisions>
### Available Operations

* [~~getWafRuleRevision~~](#getwafrulerevision) - Get a revision of a rule :warning: **Deprecated**
* [~~listWafRuleRevisions~~](#listwafrulerevisions) - List revisions for a rule :warning: **Deprecated**

## ~~getWafRuleRevision~~

Get a specific rule revision.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { GetWafRuleRevisionRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const wafRuleId: string = "3krg2uUGZzb2W9Euo4moOR";
const wafRuleRevisionNumber: number = 2;
const include: string = "source,vcl,waf_rule";

  const res = await sdk.wafRuleRevisions.getWafRuleRevision(wafRuleId, wafRuleRevisionNumber, include);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                                                                                                                            | Type                                                                                                                                                                                                                                                                 | Required                                                                                                                                                                                                                                                             | Description                                                                                                                                                                                                                                                          | Example                                                                                                                                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `wafRuleId`                                                                                                                                                                                                                                                          | *string*                                                                                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                                                                                   | Alphanumeric string identifying a WAF rule.                                                                                                                                                                                                                          | 3krg2uUGZzb2W9Euo4moOR                                                                                                                                                                                                                                               |
| `wafRuleRevisionNumber`                                                                                                                                                                                                                                              | *number*                                                                                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                                                                                   | Revision number.                                                                                                                                                                                                                                                     | 2                                                                                                                                                                                                                                                                    |
| `include`                                                                                                                                                                                                                                                            | *string*                                                                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                                                                   | Include relationships. Optional, comma-separated values. Permitted values: `waf_rule`, `vcl`, and `source`. The `vcl` and `source` relationships show the WAF VCL and corresponding ModSecurity source. These fields are blank unless the relationship is included.<br/> | source,vcl,waf_rule                                                                                                                                                                                                                                                  |
| `config`                                                                                                                                                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                                                   | Available config options for making requests.                                                                                                                                                                                                                        |                                                                                                                                                                                                                                                                      |


### Response

**Promise<[operations.GetWafRuleRevisionResponse](../../models/operations/getwafrulerevisionresponse.md)>**


## ~~listWafRuleRevisions~~

List all revisions for a specific rule. The `rule_id` provided can be the ModSecurity Rule ID or the Fastly generated rule ID.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { WafRuleRevisionInclude } from "Fastly/dist/sdk/models/components";
import { ListWafRuleRevisionsRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const wafRuleId: string = "3krg2uUGZzb2W9Euo4moOR";
const include: WafRuleRevisionInclude = WafRuleRevisionInclude.WafRule;
const pageNumber: number = 1;
const pageSize: number = 20;

  const res = await sdk.wafRuleRevisions.listWafRuleRevisions(wafRuleId, include, pageNumber, pageSize);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `wafRuleId`                                                                        | *string*                                                                           | :heavy_check_mark:                                                                 | Alphanumeric string identifying a WAF rule.                                        | 3krg2uUGZzb2W9Euo4moOR                                                             |
| `include`                                                                          | [components.WafRuleRevisionInclude](../../models/shared/wafrulerevisioninclude.md) | :heavy_minus_sign:                                                                 | Include relationships. Optional.                                                   | waf_rule                                                                           |
| `pageNumber`                                                                       | *number*                                                                           | :heavy_minus_sign:                                                                 | Current page.                                                                      | 1                                                                                  |
| `pageSize`                                                                         | *number*                                                                           | :heavy_minus_sign:                                                                 | Number of records per page.                                                        | 20                                                                                 |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |                                                                                    |


### Response

**Promise<[operations.ListWafRuleRevisionsResponse](../../models/operations/listwafrulerevisionsresponse.md)>**

