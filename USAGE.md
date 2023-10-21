<!-- Start SDK Example Usage -->


```typescript
import { Fastly } from "FastlyTestJS";

(async () => {
    const sdk = new Fastly({
        security: {
            token: "",
        },
    });

    const res = await sdk.acl.createAcl({
        acl: {
            name: "test-acl",
        },
        serviceId: "SU1Z0isxPaozGVKXdv0eY",
        versionId: 1,
    });

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End SDK Example Usage -->