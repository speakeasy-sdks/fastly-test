# WafTags
(*wafTags*)

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
import { Fastly } from "FastlyTestJS";
import { ListWafTagsResponse } from "FastlyTestJS/dist/sdk/models/operations";
import { WafTagInclude } from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.wafTags.listWafTags({
  filterName: "male",
  include: WafTagInclude.WafRules,
  pageNumber: 1,
  pageSize: 20,
}).then((res: ListWafTagsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.ListWafTagsRequest](../../models/operations/listwaftagsrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.ListWafTagsResponse](../../models/operations/listwaftagsresponse.md)>**

