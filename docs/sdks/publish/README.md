# Publish
(*publish*)

## Overview

Publishing sends messages to [Fanout](https://developer.fastly.com/learning/concepts/real-time-messaging/fanout) subscribers. Fanout is designed to be [GRIP-compatible](https://pushpin.org/docs/protocols/grip/), such that `https://api.fastly.com/service/{service_id}` can be used as a GRIP URL in application configurations.

<https://developer.fastly.com/reference/api/services/service>
### Available Operations

* [publish](#publish) - Send messages to Fanout subscribers

## publish

Send one or more messages to [Fanout](https://developer.fastly.com/learning/concepts/real-time-messaging/fanout) subscribers. Each message specifies a channel, and Fanout will deliver the message to all subscribers of its channel.
> **IMPORTANT:** For compatibility with GRIP, this endpoint requires a trailing slash, and the API token may be provided in the `Authorization` header (instead of the `Fastly-Key` header) using the `Bearer` scheme.


### Example Usage

```typescript
import { Fastly } from "Fastly";

async function run() {
  const sdk = new Fastly({
    token: "<YOUR_API_KEY_HERE>",
  });

  const res = await sdk.publish.publish({
    publishRequest: {
      items: [
        {
          channel: "string",
          formats: {
            httpResponse: {
              headers: {
                "key": "string",
              },
            },
            httpStream: {},
            wsMessage: {},
          },
        },
      ],
    },
    serviceId: "SU1Z0isxPaozGVKXdv0eY",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [operations.PublishRequest](../../sdk/models/operations/publishrequest.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.PublishResponse](../../sdk/models/operations/publishresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
