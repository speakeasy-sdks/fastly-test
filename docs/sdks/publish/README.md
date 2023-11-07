# Publish
(*.publish*)

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
import {
  Formats,
  HttpResponseFormat,
  HttpStreamFormat,
  PublishItem,
  PublishRequest,
  WsMessageFormat,
} from "Fastly/dist/sdk/models/components";
import { PublishRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const serviceId: string = "SU1Z0isxPaozGVKXdv0eY";
const publishRequest: PublishRequest = {
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
};

  const res = await sdk.publish.publish(serviceId, publishRequest);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                          | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `serviceId`                                                        | *string*                                                           | :heavy_check_mark:                                                 | Alphanumeric string identifying the service.                       | SU1Z0isxPaozGVKXdv0eY                                              |
| `publishRequest`                                                   | [components.PublishRequest](../../models/shared/publishrequest.md) | :heavy_minus_sign:                                                 | N/A                                                                |                                                                    |
| `config`                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)       | :heavy_minus_sign:                                                 | Available config options for making requests.                      |                                                                    |


### Response

**Promise<[operations.PublishResponse](../../models/operations/publishresponse.md)>**

