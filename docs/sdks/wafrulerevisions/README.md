# wafRuleRevisions

## Overview

Rule revisions track new variations of [rules](/reference/api/waf/rules/) as they change over time with enhancements, fixes, and improvements. This object allows you to find a specific variation of a rule for use in your application. An [active rule](/reference/api/waf/rules/active/) on a firewall uses a specific rule revision.

<https://developer.fastly.com/reference/api/waf/rules/revisions>
### Available Operations

* [~~getWafRuleRevision~~](#getwafrulerevision) - Get a revision of a rule :warning: **Deprecated**
* [~~listWafRuleRevisions~~](#listwafrulerevisions) - List revisions for a rule :warning: **Deprecated**

## ~~getWafRuleRevision~~

Get a specific rule revision.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { GetWafRuleRevisionResponse } from "FastlyTestJS/dist/sdk/models/operations";
import {
  TypeWafRule,
  TypeWafRuleRevision,
  WafRuleAttributesPublisher,
  WafRuleAttributesType,
  WafRuleRevisionResponseDataAttributesState,
} from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();

sdk.wafRuleRevisions.getWafRuleRevision({
  include: "source,vcl,waf_rule",
  wafRuleId: "3krg2uUGZzb2W9Euo4moOR",
  wafRuleRevisionNumber: 2,
}, {
  token: "",
}).then((res: GetWafRuleRevisionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.GetWafRuleRevisionRequest](../../models/operations/getwafrulerevisionrequest.md)   | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `security`                                                                                     | [operations.GetWafRuleRevisionSecurity](../../models/operations/getwafrulerevisionsecurity.md) | :heavy_check_mark:                                                                             | The security requirements to use for the request.                                              |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.GetWafRuleRevisionResponse](../../models/operations/getwafrulerevisionresponse.md)>**


## ~~listWafRuleRevisions~~

List all revisions for a specific rule. The `rule_id` provided can be the ModSecurity Rule ID or the Fastly generated rule ID.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { ListWafRuleRevisionsResponse } from "FastlyTestJS/dist/sdk/models/operations";
import {
  TypeWafRule,
  TypeWafRuleRevision,
  WafRuleAttributesPublisher,
  WafRuleAttributesType,
  WafRuleRevisionInclude,
  WafRuleRevisionResponseDataAttributesState,
} from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();

sdk.wafRuleRevisions.listWafRuleRevisions({
  include: WafRuleRevisionInclude.WafRule,
  pageNumber: 1,
  pageSize: 20,
  wafRuleId: "3krg2uUGZzb2W9Euo4moOR",
}, {
  token: "",
}).then((res: ListWafRuleRevisionsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.ListWafRuleRevisionsRequest](../../models/operations/listwafrulerevisionsrequest.md)   | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `security`                                                                                         | [operations.ListWafRuleRevisionsSecurity](../../models/operations/listwafrulerevisionssecurity.md) | :heavy_check_mark:                                                                                 | The security requirements to use for the request.                                                  |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.ListWafRuleRevisionsResponse](../../models/operations/listwafrulerevisionsresponse.md)>**

