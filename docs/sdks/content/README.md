# Content
(*content*)

## Overview

Fastly makes it possible to see which version of a particular URL is cached on each edge server.

<https://developer.fastly.com/reference/api/utils/content>
### Available Operations

* [contentCheck](#contentcheck) - Check status of content in each POP's cache

## contentCheck

Retrieve headers and MD5 hash of the content for a particular URL from each Fastly edge server. This API is limited to 200 requests per hour.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.content.contentCheck({
    url: "https://www.example.com/foo/bar",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.ContentCheckRequest](../../models/operations/contentcheckrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.ContentCheckResponse](../../models/operations/contentcheckresponse.md)>**

