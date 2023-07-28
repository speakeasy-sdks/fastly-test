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
        channel: "tempora",
        formats: {
          httpResponse: {
            body: "tempora",
            bodyBin: "voluptate",
            code: 970076,
            headers: {
              "sit": "non",
              "officiis": "praesentium",
            },
            reason: "facilis",
          },
          httpStream: {
            content: "quaerat",
            contentBin: "incidunt",
          },
          wsMessage: {
            content: "ipsam",
            contentBin: "debitis",
          },
        },
        id: "80ca55ef-d20e-4457-a185-8b6a89fbe3a5",
        prevId: "officia",
      },
      {
        channel: "dolorum",
        formats: {
          httpResponse: {
            body: "corrupti",
            bodyBin: "accusamus",
            code: 272683,
            headers: {
              "fugit": "ut",
              "fugiat": "voluptatem",
              "culpa": "expedita",
            },
            reason: "magnam",
          },
          httpStream: {
            content: "consequatur",
            contentBin: "esse",
          },
          wsMessage: {
            content: "ipsam",
            contentBin: "sit",
          },
        },
        id: "88e51862-065e-4904-b3b1-194b8abf603a",
        prevId: "voluptate",
      },
      {
        channel: "unde",
        formats: {
          httpResponse: {
            body: "reiciendis",
            bodyBin: "provident",
            code: 833819,
            headers: {
              "voluptates": "perferendis",
              "est": "quidem",
              "reprehenderit": "facere",
              "fuga": "praesentium",
            },
            reason: "mollitia",
          },
          httpStream: {
            content: "veniam",
            contentBin: "voluptatem",
          },
          wsMessage: {
            content: "quisquam",
            contentBin: "repudiandae",
          },
        },
        id: "187f86bc-173d-4689-aee9-526f8d986e88",
        prevId: "sunt",
      },
      {
        channel: "recusandae",
        formats: {
          httpResponse: {
            body: "dolorum",
            bodyBin: "repellendus",
            code: 287119,
            headers: {
              "doloremque": "repudiandae",
              "dicta": "accusantium",
              "beatae": "dolores",
              "enim": "laboriosam",
            },
            reason: "velit",
          },
          httpStream: {
            content: "a",
            contentBin: "molestias",
          },
          wsMessage: {
            content: "magnam",
            contentBin: "saepe",
          },
        },
        id: "29e973e9-22a5-47a1-9be3-e060807e2b6e",
        prevId: "ratione",
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

