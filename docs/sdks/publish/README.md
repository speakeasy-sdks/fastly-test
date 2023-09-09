# publish

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
import { Fastly } from "FastlyTestJS";
import { PublishResponse, PublishSecurity } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();
const operationSecurity: PublishSecurity = {
  token: "",
};

sdk.publish.publish({
  publishRequest: {
    items: [
      {
        channel: "non",
        formats: {
          httpResponse: {
            body: "voluptatem",
            bodyBin: "dolor",
            code: 580152,
            headers: {
              "numquam": "impedit",
            },
            reason: "explicabo",
          },
          httpStream: {
            content: "voluptas",
            contentBin: "aut",
          },
          wsMessage: {
            content: "dignissimos",
            contentBin: "dicta",
          },
        },
        id: "f93f5f06-42da-4c7a-b515-cc413aa63aae",
        prevId: "totam",
      },
    ],
  },
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
}, operationSecurity).then((res: PublishResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `request`                                                                | [operations.PublishRequest](../../models/operations/publishrequest.md)   | :heavy_check_mark:                                                       | The request object to use for the request.                               |
| `security`                                                               | [operations.PublishSecurity](../../models/operations/publishsecurity.md) | :heavy_check_mark:                                                       | The security requirements to use for the request.                        |
| `config`                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)             | :heavy_minus_sign:                                                       | Available config options for making requests.                            |


### Response

**Promise<[operations.PublishResponse](../../models/operations/publishresponse.md)>**

