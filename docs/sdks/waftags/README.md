# WafTags
(*.wafTags*)

## Overview

Tags for categorizing WAF [rules](/reference/api/waf/rules/).

<https://developer.fastly.com/reference/api/waf/tags>
### Available Operations

* [~~listWafTags~~](#listwaftags) - List tags :warning: **Deprecated**

## ~~listWafTags~~

List all tags.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { WafTagInclude } from "Fastly/dist/sdk/models/components";
import { ListWafTagsRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const filterName: string = "string";
const include: WafTagInclude = WafTagInclude.WafRules;
const pageNumber: number = 1;
const pageSize: number = 20;

  const res = await sdk.wafTags.listWafTags(filterName, include, pageNumber, pageSize);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                        | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `filterName`                                                     | *string*                                                         | :heavy_minus_sign:                                               | Limit the returned tags to a specific name.                      |                                                                  |
| `include`                                                        | [components.WafTagInclude](../../models/shared/waftaginclude.md) | :heavy_minus_sign:                                               | Include relationships. Optional.                                 | waf_rules                                                        |
| `pageNumber`                                                     | *number*                                                         | :heavy_minus_sign:                                               | Current page.                                                    | 1                                                                |
| `pageSize`                                                       | *number*                                                         | :heavy_minus_sign:                                               | Number of records per page.                                      | 20                                                               |
| `config`                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)     | :heavy_minus_sign:                                               | Available config options for making requests.                    |                                                                  |


### Response

**Promise<[operations.ListWafTagsResponse](../../models/operations/listwaftagsresponse.md)>**

