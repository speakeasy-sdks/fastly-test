<!-- Start SDK Example Usage -->


```typescript
import { Fastly } from "FastlyTestJS";
import { CreateAclResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();

sdk.acl.createAcl({
  acl: {
    name: "test-acl",
  },
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, {
  token: "",
}).then((res: CreateAclResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->