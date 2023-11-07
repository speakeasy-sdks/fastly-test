# Content
(*.content*)

## Overview

Fastly makes it possible to see which version of a particular URL is cached on each edge server.

<https://developer.fastly.com/reference/api/utils/content>
### Available Operations

* [contentCheck](#contentcheck) - Check status of content in each POP's cache

## contentCheck

Retrieve headers and MD5 hash of the content for a particular URL from each Fastly edge server. This API is limited to 200 requests per hour.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { ContentCheckRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const url: string = "https://www.example.com/foo/bar";

  const res = await sdk.content.contentCheck(url);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                     | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `url`                                                                                         | *string*                                                                                      | :heavy_minus_sign:                                                                            | Full URL (host and path) to check on all nodes. if protocol is omitted, http will be assumed. | https://www.example.com/foo/bar                                                               |
| `config`                                                                                      | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                  | :heavy_minus_sign:                                                                            | Available config options for making requests.                                                 |                                                                                               |


### Response

**Promise<[operations.ContentCheckResponse](../../models/operations/contentcheckresponse.md)>**

