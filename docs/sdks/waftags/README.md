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

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.wafTags.listWafTags({
    include: WafTagInclude.WafRules,
    pageNumber: 1,
    pageSize: 20,
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.ListWafTagsRequest](../../models/operations/listwaftagsrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.ListWafTagsResponse](../../models/operations/listwaftagsresponse.md)>**

