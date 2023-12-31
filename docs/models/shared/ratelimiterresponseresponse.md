# RateLimiterResponseResponse

Custom response to be sent when the rate limit is exceeded. Required if `action` is `response`.


## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `content`                                               | *string*                                                | :heavy_minus_sign:                                      | Response body for custom limit enforcement response.    |
| `contentType`                                           | *string*                                                | :heavy_minus_sign:                                      | MIME type for custom limit enforcement response.        |
| `status`                                                | *number*                                                | :heavy_minus_sign:                                      | HTTP status code for custom limit enforcement response. |