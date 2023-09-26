# FastlyTest

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://github.com/speakeasy-sdks/fastly-test
```

### Yarn

```bash
yarn add https://github.com/speakeasy-sdks/fastly-test
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import { Fastly } from "FastlyTestJS";
import { CreateAclResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.acl.createAcl({
  acl: {
    name: "test-acl",
  },
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}).then((res: CreateAclResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Acl](docs/sdks/acl/README.md)

* [createAcl](docs/sdks/acl/README.md#createacl) - Create a new ACL
* [deleteAcl](docs/sdks/acl/README.md#deleteacl) - Delete an ACL
* [getAcl](docs/sdks/acl/README.md#getacl) - Describe an ACL
* [listAcls](docs/sdks/acl/README.md#listacls) - List ACLs
* [updateAcl](docs/sdks/acl/README.md#updateacl) - Update an ACL

### [AclEntry](docs/sdks/aclentry/README.md)

* [bulkUpdateAclEntries](docs/sdks/aclentry/README.md#bulkupdateaclentries) - Update multiple ACL entries
* [createAclEntry](docs/sdks/aclentry/README.md#createaclentry) - Create an ACL entry
* [deleteAclEntry](docs/sdks/aclentry/README.md#deleteaclentry) - Delete an ACL entry
* [getAclEntry](docs/sdks/aclentry/README.md#getaclentry) - Describe an ACL entry
* [listAclEntries](docs/sdks/aclentry/README.md#listaclentries) - List ACL entries
* [updateAclEntry](docs/sdks/aclentry/README.md#updateaclentry) - Update an ACL entry

### [ApexRedirect](docs/sdks/apexredirect/README.md)

* [deleteApexRedirect](docs/sdks/apexredirect/README.md#deleteapexredirect) - Delete an apex redirect
* [getApexRedirect](docs/sdks/apexredirect/README.md#getapexredirect) - Get an apex redirect
* [listApexRedirects](docs/sdks/apexredirect/README.md#listapexredirects) - List apex redirects
* [updateApexRedirect](docs/sdks/apexredirect/README.md#updateapexredirect) - Update an apex redirect

### [Backend](docs/sdks/backend/README.md)

* [createBackend](docs/sdks/backend/README.md#createbackend) - Create a backend
* [deleteBackend](docs/sdks/backend/README.md#deletebackend) - Delete a backend
* [getBackend](docs/sdks/backend/README.md#getbackend) - Describe a backend
* [listBackends](docs/sdks/backend/README.md#listbackends) - List backends
* [updateBackend](docs/sdks/backend/README.md#updatebackend) - Update a backend

### [Billing](docs/sdks/billing/README.md)

* [getInvoice](docs/sdks/billing/README.md#getinvoice) - Get an invoice
* [getInvoiceById](docs/sdks/billing/README.md#getinvoicebyid) - Get an invoice
* [getInvoiceMtd](docs/sdks/billing/README.md#getinvoicemtd) - Get month-to-date billing estimate

### [BillingAddress](docs/sdks/billingaddress/README.md)

* [addBillingAddr](docs/sdks/billingaddress/README.md#addbillingaddr) - Add a billing address to a customer
* [deleteBillingAddr](docs/sdks/billingaddress/README.md#deletebillingaddr) - Delete a billing address
* [getBillingAddr](docs/sdks/billingaddress/README.md#getbillingaddr) - Get a billing address
* [updateBillingAddr](docs/sdks/billingaddress/README.md#updatebillingaddr) - Update a billing address

### [CacheSettings](docs/sdks/cachesettings/README.md)

* [createCacheSettings](docs/sdks/cachesettings/README.md#createcachesettings) - Create a cache settings object
* [deleteCacheSettings](docs/sdks/cachesettings/README.md#deletecachesettings) - Delete a cache settings object
* [getCacheSettings](docs/sdks/cachesettings/README.md#getcachesettings) - Get a cache settings object
* [listCacheSettings](docs/sdks/cachesettings/README.md#listcachesettings) - List cache settings objects
* [updateCacheSettings](docs/sdks/cachesettings/README.md#updatecachesettings) - Update a cache settings object

### [Condition](docs/sdks/condition/README.md)

* [createCondition](docs/sdks/condition/README.md#createcondition) - Create a condition
* [deleteCondition](docs/sdks/condition/README.md#deletecondition) - Delete a condition
* [getCondition](docs/sdks/condition/README.md#getcondition) - Describe a condition
* [listConditions](docs/sdks/condition/README.md#listconditions) - List conditions
* [updateCondition](docs/sdks/condition/README.md#updatecondition) - Update a condition

### [ConfigStore](docs/sdks/configstore/README.md)

* [createConfigStore](docs/sdks/configstore/README.md#createconfigstore) - Create a config store
* [deleteConfigStore](docs/sdks/configstore/README.md#deleteconfigstore) - Delete a config store
* [getConfigStore](docs/sdks/configstore/README.md#getconfigstore) - Describe a config store
* [getConfigStoreInfo](docs/sdks/configstore/README.md#getconfigstoreinfo) - Get config store metadata
* [listConfigStoreServices](docs/sdks/configstore/README.md#listconfigstoreservices) - List linked services
* [listConfigStores](docs/sdks/configstore/README.md#listconfigstores) - List config stores
* [updateConfigStore](docs/sdks/configstore/README.md#updateconfigstore) - Update a config store

### [ConfigStoreItem](docs/sdks/configstoreitem/README.md)

* [bulkUpdateConfigStoreItem](docs/sdks/configstoreitem/README.md#bulkupdateconfigstoreitem) - Update multiple entries in a config store
* [createConfigStoreItem](docs/sdks/configstoreitem/README.md#createconfigstoreitem) - Create an entry in a config store
* [deleteConfigStoreItem](docs/sdks/configstoreitem/README.md#deleteconfigstoreitem) - Delete an item from a config store
* [getConfigStoreItem](docs/sdks/configstoreitem/README.md#getconfigstoreitem) - Get an item from a config store
* [listConfigStoreItems](docs/sdks/configstoreitem/README.md#listconfigstoreitems) - List items in a config store
* [updateConfigStoreItem](docs/sdks/configstoreitem/README.md#updateconfigstoreitem) - Update an entry in a config store
* [upsertConfigStoreItem](docs/sdks/configstoreitem/README.md#upsertconfigstoreitem) - Insert or update an entry in a config store

### [Contact](docs/sdks/contact/README.md)

* [deleteContact](docs/sdks/contact/README.md#deletecontact) - Delete a contact
* [listContacts](docs/sdks/contact/README.md#listcontacts) - List contacts

### [Content](docs/sdks/content/README.md)

* [contentCheck](docs/sdks/content/README.md#contentcheck) - Check status of content in each POP's cache

### [Customer](docs/sdks/customer/README.md)

* [deleteCustomer](docs/sdks/customer/README.md#deletecustomer) - Delete a customer
* [getCustomer](docs/sdks/customer/README.md#getcustomer) - Get a customer
* [getLoggedInCustomer](docs/sdks/customer/README.md#getloggedincustomer) - Get the logged in customer
* [listUsers](docs/sdks/customer/README.md#listusers) - List users
* [updateCustomer](docs/sdks/customer/README.md#updatecustomer) - Update a customer

### [Dictionary](docs/sdks/dictionary/README.md)

* [createDictionary](docs/sdks/dictionary/README.md#createdictionary) - Create an edge dictionary
* [deleteDictionary](docs/sdks/dictionary/README.md#deletedictionary) - Delete an edge dictionary
* [getDictionary](docs/sdks/dictionary/README.md#getdictionary) - Get an edge dictionary
* [listDictionaries](docs/sdks/dictionary/README.md#listdictionaries) - List edge dictionaries
* [updateDictionary](docs/sdks/dictionary/README.md#updatedictionary) - Update an edge dictionary

### [DictionaryInfo](docs/sdks/dictionaryinfo/README.md)

* [getDictionaryInfo](docs/sdks/dictionaryinfo/README.md#getdictionaryinfo) - Get edge dictionary metadata

### [DictionaryItem](docs/sdks/dictionaryitem/README.md)

* [bulkUpdateDictionaryItem](docs/sdks/dictionaryitem/README.md#bulkupdatedictionaryitem) - Update multiple entries in an edge dictionary
* [createDictionaryItem](docs/sdks/dictionaryitem/README.md#createdictionaryitem) - Create an entry in an edge dictionary
* [deleteDictionaryItem](docs/sdks/dictionaryitem/README.md#deletedictionaryitem) - Delete an item from an edge dictionary
* [getDictionaryItem](docs/sdks/dictionaryitem/README.md#getdictionaryitem) - Get an item from an edge dictionary
* [listDictionaryItems](docs/sdks/dictionaryitem/README.md#listdictionaryitems) - List items in an edge dictionary
* [updateDictionaryItem](docs/sdks/dictionaryitem/README.md#updatedictionaryitem) - Update an entry in an edge dictionary
* [upsertDictionaryItem](docs/sdks/dictionaryitem/README.md#upsertdictionaryitem) - Insert or update an entry in an edge dictionary

### [Diff](docs/sdks/diff/README.md)

* [diffServiceVersions](docs/sdks/diff/README.md#diffserviceversions) - Diff two service versions

### [Director](docs/sdks/director/README.md)

* [createDirector](docs/sdks/director/README.md#createdirector) - Create a director
* [deleteDirector](docs/sdks/director/README.md#deletedirector) - Delete a director
* [getDirector](docs/sdks/director/README.md#getdirector) - Get a director
* [listDirectors](docs/sdks/director/README.md#listdirectors) - List directors

### [DirectorBackend](docs/sdks/directorbackend/README.md)

* [createDirectorBackend](docs/sdks/directorbackend/README.md#createdirectorbackend) - Create a director-backend relationship
* [deleteDirectorBackend](docs/sdks/directorbackend/README.md#deletedirectorbackend) - Delete a director-backend relationship
* [getDirectorBackend](docs/sdks/directorbackend/README.md#getdirectorbackend) - Get a director-backend relationship

### [Domain](docs/sdks/domain/README.md)

* [checkDomain](docs/sdks/domain/README.md#checkdomain) - Validate DNS configuration for a single domain on a service
* [checkDomains](docs/sdks/domain/README.md#checkdomains) - Validate DNS configuration for all domains on a service
* [createDomain](docs/sdks/domain/README.md#createdomain) - Add a domain name to a service
* [deleteDomain](docs/sdks/domain/README.md#deletedomain) - Remove a domain from a service
* [getDomain](docs/sdks/domain/README.md#getdomain) - Describe a domain
* [listDomains](docs/sdks/domain/README.md#listdomains) - List domains
* [updateDomain](docs/sdks/domain/README.md#updatedomain) - Update a domain

### [DomainOwnerships](docs/sdks/domainownerships/README.md)

* [listDomainOwnerships](docs/sdks/domainownerships/README.md#listdomainownerships) - List domain-ownerships

### [EnabledProducts](docs/sdks/enabledproducts/README.md)

* [disableProduct](docs/sdks/enabledproducts/README.md#disableproduct) - Disable a product
* [enableProduct](docs/sdks/enabledproducts/README.md#enableproduct) - Enable a product
* [getEnabledProduct](docs/sdks/enabledproducts/README.md#getenabledproduct) - Get enabled product

### [Events](docs/sdks/events/README.md)

* [getEvent](docs/sdks/events/README.md#getevent) - Get an event
* [listEvents](docs/sdks/events/README.md#listevents) - List events

### [Gzip](docs/sdks/gzip/README.md)

* [createGzipConfig](docs/sdks/gzip/README.md#creategzipconfig) - Create a gzip configuration
* [deleteGzipConfig](docs/sdks/gzip/README.md#deletegzipconfig) - Delete a gzip configuration
* [getGzipConfigs](docs/sdks/gzip/README.md#getgzipconfigs) - Get a gzip configuration
* [listGzipConfigs](docs/sdks/gzip/README.md#listgzipconfigs) - List gzip configurations
* [updateGzipConfig](docs/sdks/gzip/README.md#updategzipconfig) - Update a gzip configuration

### [Header](docs/sdks/header/README.md)

* [createHeaderObject](docs/sdks/header/README.md#createheaderobject) - Create a Header object
* [deleteHeaderObject](docs/sdks/header/README.md#deleteheaderobject) - Delete a Header object
* [getHeaderObject](docs/sdks/header/README.md#getheaderobject) - Get a Header object
* [listHeaderObjects](docs/sdks/header/README.md#listheaderobjects) - List Header objects
* [updateHeaderObject](docs/sdks/header/README.md#updateheaderobject) - Update a Header object

### [Healthcheck](docs/sdks/healthcheck/README.md)

* [createHealthcheck](docs/sdks/healthcheck/README.md#createhealthcheck) - Create a health check
* [deleteHealthcheck](docs/sdks/healthcheck/README.md#deletehealthcheck) - Delete a health check
* [getHealthcheck](docs/sdks/healthcheck/README.md#gethealthcheck) - Get a health check
* [listHealthchecks](docs/sdks/healthcheck/README.md#listhealthchecks) - List health checks
* [updateHealthcheck](docs/sdks/healthcheck/README.md#updatehealthcheck) - Update a health check

### [Historical](docs/sdks/historical/README.md)

* [getHistStats](docs/sdks/historical/README.md#gethiststats) - Get historical stats
* [getHistStatsAggregated](docs/sdks/historical/README.md#gethiststatsaggregated) - Get aggregated historical stats
* [getHistStatsField](docs/sdks/historical/README.md#gethiststatsfield) - Get historical stats for a single field
* [getHistStatsService](docs/sdks/historical/README.md#gethiststatsservice) - Get historical stats for a single service
* [getHistStatsServiceField](docs/sdks/historical/README.md#gethiststatsservicefield) - Get historical stats for a single service/field combination
* [getRegions](docs/sdks/historical/README.md#getregions) - Get region codes
* [getUsage](docs/sdks/historical/README.md#getusage) - Get usage statistics
* [getUsageMonth](docs/sdks/historical/README.md#getusagemonth) - Get month-to-date usage statistics
* [getUsageService](docs/sdks/historical/README.md#getusageservice) - Get usage statistics per service

### [Http3](docs/sdks/http3/README.md)

* [createHttp3](docs/sdks/http3/README.md#createhttp3) - Enable support for HTTP/3
* [deleteHttp3](docs/sdks/http3/README.md#deletehttp3) - Disable support for HTTP/3
* [getHttp3](docs/sdks/http3/README.md#gethttp3) - Get HTTP/3 status

### [IamPermissions](docs/sdks/iampermissions/README.md)

* [listPermissions](docs/sdks/iampermissions/README.md#listpermissions) - List permissions

### [IamRoles](docs/sdks/iamroles/README.md)

* [deleteARole](docs/sdks/iamroles/README.md#deletearole) - Delete a role
* [getARole](docs/sdks/iamroles/README.md#getarole) - Get a role
* [listRolePermissions](docs/sdks/iamroles/README.md#listrolepermissions) - List permissions in a role
* [listRoles](docs/sdks/iamroles/README.md#listroles) - List roles

### [IamServiceGroups](docs/sdks/iamservicegroups/README.md)

* [deleteAServiceGroup](docs/sdks/iamservicegroups/README.md#deleteaservicegroup) - Delete a service group
* [getAServiceGroup](docs/sdks/iamservicegroups/README.md#getaservicegroup) - Get a service group
* [listServiceGroupServices](docs/sdks/iamservicegroups/README.md#listservicegroupservices) - List services to a service group
* [listServiceGroups](docs/sdks/iamservicegroups/README.md#listservicegroups) - List service groups

### [IamUserGroups](docs/sdks/iamusergroups/README.md)

* [deleteAUserGroup](docs/sdks/iamusergroups/README.md#deleteausergroup) - Delete a user group
* [getAUserGroup](docs/sdks/iamusergroups/README.md#getausergroup) - Get a user group
* [listUserGroupMembers](docs/sdks/iamusergroups/README.md#listusergroupmembers) - List members of a user group
* [listUserGroupRoles](docs/sdks/iamusergroups/README.md#listusergrouproles) - List roles in a user group
* [listUserGroupServiceGroups](docs/sdks/iamusergroups/README.md#listusergroupservicegroups) - List service groups in a user group
* [listUserGroups](docs/sdks/iamusergroups/README.md#listusergroups) - List user groups

### [Invitations](docs/sdks/invitations/README.md)

* [createInvitation](docs/sdks/invitations/README.md#createinvitation) - Create an invitation
* [deleteInvitation](docs/sdks/invitations/README.md#deleteinvitation) - Delete an invitation
* [listInvitations](docs/sdks/invitations/README.md#listinvitations) - List invitations

### [KvStore](docs/sdks/kvstore/README.md)

* [createStore](docs/sdks/kvstore/README.md#createstore) - Create an kv store.
* [deleteStore](docs/sdks/kvstore/README.md#deletestore) - Delete an kv store.
* [getStore](docs/sdks/kvstore/README.md#getstore) - Describe an kv store.
* [getStores](docs/sdks/kvstore/README.md#getstores) - List kv stores.

### [KvStoreItem](docs/sdks/kvstoreitem/README.md)

* [deleteKeyFromStore](docs/sdks/kvstoreitem/README.md#deletekeyfromstore) - Delete kv store item.
* [getKeys](docs/sdks/kvstoreitem/README.md#getkeys) - List kv store keys.
* [getValueForKey](docs/sdks/kvstoreitem/README.md#getvalueforkey) - Get the value of an kv store item
* [setValueForKey](docs/sdks/kvstoreitem/README.md#setvalueforkey) - Insert an item into an kv store

### [LoggingAzureblob](docs/sdks/loggingazureblob/README.md)

* [createLogAzure](docs/sdks/loggingazureblob/README.md#createlogazure) - Create an Azure Blob Storage log endpoint
* [deleteLogAzure](docs/sdks/loggingazureblob/README.md#deletelogazure) - Delete the Azure Blob Storage log endpoint
* [getLogAzure](docs/sdks/loggingazureblob/README.md#getlogazure) - Get an Azure Blob Storage log endpoint
* [listLogAzure](docs/sdks/loggingazureblob/README.md#listlogazure) - List Azure Blob Storage log endpoints
* [updateLogAzure](docs/sdks/loggingazureblob/README.md#updatelogazure) - Update an Azure Blob Storage log endpoint

### [LoggingBigquery](docs/sdks/loggingbigquery/README.md)

* [createLogBigquery](docs/sdks/loggingbigquery/README.md#createlogbigquery) - Create a BigQuery log endpoint
* [deleteLogBigquery](docs/sdks/loggingbigquery/README.md#deletelogbigquery) - Delete a BigQuery log endpoint
* [getLogBigquery](docs/sdks/loggingbigquery/README.md#getlogbigquery) - Get a BigQuery log endpoint
* [listLogBigquery](docs/sdks/loggingbigquery/README.md#listlogbigquery) - List BigQuery log endpoints
* [updateLogBigquery](docs/sdks/loggingbigquery/README.md#updatelogbigquery) - Update a BigQuery log endpoint

### [LoggingCloudfiles](docs/sdks/loggingcloudfiles/README.md)

* [createLogCloudfiles](docs/sdks/loggingcloudfiles/README.md#createlogcloudfiles) - Create a Cloud Files log endpoint
* [deleteLogCloudfiles](docs/sdks/loggingcloudfiles/README.md#deletelogcloudfiles) - Delete the Cloud Files log endpoint
* [getLogCloudfiles](docs/sdks/loggingcloudfiles/README.md#getlogcloudfiles) - Get a Cloud Files log endpoint
* [listLogCloudfiles](docs/sdks/loggingcloudfiles/README.md#listlogcloudfiles) - List Cloud Files log endpoints
* [updateLogCloudfiles](docs/sdks/loggingcloudfiles/README.md#updatelogcloudfiles) - Update the Cloud Files log endpoint

### [LoggingDatadog](docs/sdks/loggingdatadog/README.md)

* [createLogDatadog](docs/sdks/loggingdatadog/README.md#createlogdatadog) - Create a Datadog log endpoint
* [deleteLogDatadog](docs/sdks/loggingdatadog/README.md#deletelogdatadog) - Delete a Datadog log endpoint
* [getLogDatadog](docs/sdks/loggingdatadog/README.md#getlogdatadog) - Get a Datadog log endpoint
* [listLogDatadog](docs/sdks/loggingdatadog/README.md#listlogdatadog) - List Datadog log endpoints
* [updateLogDatadog](docs/sdks/loggingdatadog/README.md#updatelogdatadog) - Update a Datadog log endpoint

### [LoggingDigitalocean](docs/sdks/loggingdigitalocean/README.md)

* [createLogDigocean](docs/sdks/loggingdigitalocean/README.md#createlogdigocean) - Create a DigitalOcean Spaces log endpoint
* [deleteLogDigocean](docs/sdks/loggingdigitalocean/README.md#deletelogdigocean) - Delete a DigitalOcean Spaces log endpoint
* [getLogDigocean](docs/sdks/loggingdigitalocean/README.md#getlogdigocean) - Get a DigitalOcean Spaces log endpoint
* [listLogDigocean](docs/sdks/loggingdigitalocean/README.md#listlogdigocean) - List DigitalOcean Spaces log endpoints
* [updateLogDigocean](docs/sdks/loggingdigitalocean/README.md#updatelogdigocean) - Update a DigitalOcean Spaces log endpoint

### [LoggingElasticsearch](docs/sdks/loggingelasticsearch/README.md)

* [createLogElasticsearch](docs/sdks/loggingelasticsearch/README.md#createlogelasticsearch) - Create an Elasticsearch log endpoint
* [deleteLogElasticsearch](docs/sdks/loggingelasticsearch/README.md#deletelogelasticsearch) - Delete an Elasticsearch log endpoint
* [getLogElasticsearch](docs/sdks/loggingelasticsearch/README.md#getlogelasticsearch) - Get an Elasticsearch log endpoint
* [listLogElasticsearch](docs/sdks/loggingelasticsearch/README.md#listlogelasticsearch) - List Elasticsearch log endpoints
* [updateLogElasticsearch](docs/sdks/loggingelasticsearch/README.md#updatelogelasticsearch) - Update an Elasticsearch log endpoint

### [LoggingFtp](docs/sdks/loggingftp/README.md)

* [createLogFtp](docs/sdks/loggingftp/README.md#createlogftp) - Create an FTP log endpoint
* [deleteLogFtp](docs/sdks/loggingftp/README.md#deletelogftp) - Delete an FTP log endpoint
* [getLogFtp](docs/sdks/loggingftp/README.md#getlogftp) - Get an FTP log endpoint
* [listLogFtp](docs/sdks/loggingftp/README.md#listlogftp) - List FTP log endpoints
* [updateLogFtp](docs/sdks/loggingftp/README.md#updatelogftp) - Update an FTP log endpoint

### [LoggingGcs](docs/sdks/logginggcs/README.md)

* [createLogGcs](docs/sdks/logginggcs/README.md#createloggcs) - Create a GCS log endpoint
* [deleteLogGcs](docs/sdks/logginggcs/README.md#deleteloggcs) - Delete a GCS log endpoint
* [getLogGcs](docs/sdks/logginggcs/README.md#getloggcs) - Get a GCS log endpoint
* [listLogGcs](docs/sdks/logginggcs/README.md#listloggcs) - List GCS log endpoints
* [updateLogGcs](docs/sdks/logginggcs/README.md#updateloggcs) - Update a GCS log endpoint

### [LoggingHeroku](docs/sdks/loggingheroku/README.md)

* [createLogHeroku](docs/sdks/loggingheroku/README.md#createlogheroku) - Create a Heroku log endpoint
* [deleteLogHeroku](docs/sdks/loggingheroku/README.md#deletelogheroku) - Delete the Heroku log endpoint
* [getLogHeroku](docs/sdks/loggingheroku/README.md#getlogheroku) - Get a Heroku log endpoint
* [listLogHeroku](docs/sdks/loggingheroku/README.md#listlogheroku) - List Heroku log endpoints
* [updateLogHeroku](docs/sdks/loggingheroku/README.md#updatelogheroku) - Update the Heroku log endpoint

### [LoggingHoneycomb](docs/sdks/logginghoneycomb/README.md)

* [createLogHoneycomb](docs/sdks/logginghoneycomb/README.md#createloghoneycomb) - Create a Honeycomb log endpoint
* [deleteLogHoneycomb](docs/sdks/logginghoneycomb/README.md#deleteloghoneycomb) - Delete the Honeycomb log endpoint
* [getLogHoneycomb](docs/sdks/logginghoneycomb/README.md#getloghoneycomb) - Get a Honeycomb log endpoint
* [listLogHoneycomb](docs/sdks/logginghoneycomb/README.md#listloghoneycomb) - List Honeycomb log endpoints
* [updateLogHoneycomb](docs/sdks/logginghoneycomb/README.md#updateloghoneycomb) - Update a Honeycomb log endpoint

### [LoggingHttps](docs/sdks/logginghttps/README.md)

* [createLogHttps](docs/sdks/logginghttps/README.md#createloghttps) - Create an HTTPS log endpoint
* [deleteLogHttps](docs/sdks/logginghttps/README.md#deleteloghttps) - Delete an HTTPS log endpoint
* [getLogHttps](docs/sdks/logginghttps/README.md#getloghttps) - Get an HTTPS log endpoint
* [listLogHttps](docs/sdks/logginghttps/README.md#listloghttps) - List HTTPS log endpoints
* [updateLogHttps](docs/sdks/logginghttps/README.md#updateloghttps) - Update an HTTPS log endpoint

### [LoggingKafka](docs/sdks/loggingkafka/README.md)

* [createLogKafka](docs/sdks/loggingkafka/README.md#createlogkafka) - Create a Kafka log endpoint
* [deleteLogKafka](docs/sdks/loggingkafka/README.md#deletelogkafka) - Delete the Kafka log endpoint
* [getLogKafka](docs/sdks/loggingkafka/README.md#getlogkafka) - Get a Kafka log endpoint
* [listLogKafka](docs/sdks/loggingkafka/README.md#listlogkafka) - List Kafka log endpoints

### [LoggingKinesis](docs/sdks/loggingkinesis/README.md)

* [createLogKinesis](docs/sdks/loggingkinesis/README.md#createlogkinesis) - Create  an Amazon Kinesis log endpoint
* [deleteLogKinesis](docs/sdks/loggingkinesis/README.md#deletelogkinesis) - Delete the Amazon Kinesis log endpoint
* [getLogKinesis](docs/sdks/loggingkinesis/README.md#getlogkinesis) - Get an Amazon Kinesis log endpoint
* [listLogKinesis](docs/sdks/loggingkinesis/README.md#listlogkinesis) - List Amazon Kinesis log endpoints

### [LoggingLogentries](docs/sdks/logginglogentries/README.md)

* [~~createLogLogentries~~](docs/sdks/logginglogentries/README.md#createloglogentries) - Create a Logentries log endpoint :warning: **Deprecated**
* [~~deleteLogLogentries~~](docs/sdks/logginglogentries/README.md#deleteloglogentries) - Delete a Logentries log endpoint :warning: **Deprecated**
* [~~getLogLogentries~~](docs/sdks/logginglogentries/README.md#getloglogentries) - Get a Logentries log endpoint :warning: **Deprecated**
* [~~listLogLogentries~~](docs/sdks/logginglogentries/README.md#listloglogentries) - List Logentries log endpoints :warning: **Deprecated**
* [~~updateLogLogentries~~](docs/sdks/logginglogentries/README.md#updateloglogentries) - Update a Logentries log endpoint :warning: **Deprecated**

### [LoggingLoggly](docs/sdks/loggingloggly/README.md)

* [createLogLoggly](docs/sdks/loggingloggly/README.md#createlogloggly) - Create a Loggly log endpoint
* [deleteLogLoggly](docs/sdks/loggingloggly/README.md#deletelogloggly) - Delete a Loggly log endpoint
* [getLogLoggly](docs/sdks/loggingloggly/README.md#getlogloggly) - Get a Loggly log endpoint
* [listLogLoggly](docs/sdks/loggingloggly/README.md#listlogloggly) - List Loggly log endpoints
* [updateLogLoggly](docs/sdks/loggingloggly/README.md#updatelogloggly) - Update a Loggly log endpoint

### [LoggingLogshuttle](docs/sdks/logginglogshuttle/README.md)

* [createLogLogshuttle](docs/sdks/logginglogshuttle/README.md#createloglogshuttle) - Create a Log Shuttle log endpoint
* [deleteLogLogshuttle](docs/sdks/logginglogshuttle/README.md#deleteloglogshuttle) - Delete a Log Shuttle log endpoint
* [getLogLogshuttle](docs/sdks/logginglogshuttle/README.md#getloglogshuttle) - Get a Log Shuttle log endpoint
* [listLogLogshuttle](docs/sdks/logginglogshuttle/README.md#listloglogshuttle) - List Log Shuttle log endpoints
* [updateLogLogshuttle](docs/sdks/logginglogshuttle/README.md#updateloglogshuttle) - Update a Log Shuttle log endpoint

### [LoggingNewrelic](docs/sdks/loggingnewrelic/README.md)

* [createLogNewrelic](docs/sdks/loggingnewrelic/README.md#createlognewrelic) - Create a New Relic log endpoint
* [deleteLogNewrelic](docs/sdks/loggingnewrelic/README.md#deletelognewrelic) - Delete a New Relic log endpoint
* [getLogNewrelic](docs/sdks/loggingnewrelic/README.md#getlognewrelic) - Get a New Relic log endpoint
* [listLogNewrelic](docs/sdks/loggingnewrelic/README.md#listlognewrelic) - List New Relic log endpoints
* [updateLogNewrelic](docs/sdks/loggingnewrelic/README.md#updatelognewrelic) - Update a New Relic log endpoint

### [LoggingOpenstack](docs/sdks/loggingopenstack/README.md)

* [createLogOpenstack](docs/sdks/loggingopenstack/README.md#createlogopenstack) - Create an OpenStack log endpoint
* [deleteLogOpenstack](docs/sdks/loggingopenstack/README.md#deletelogopenstack) - Delete an OpenStack log endpoint
* [getLogOpenstack](docs/sdks/loggingopenstack/README.md#getlogopenstack) - Get an OpenStack log endpoint
* [listLogOpenstack](docs/sdks/loggingopenstack/README.md#listlogopenstack) - List OpenStack log endpoints
* [updateLogOpenstack](docs/sdks/loggingopenstack/README.md#updatelogopenstack) - Update an OpenStack log endpoint

### [LoggingPapertrail](docs/sdks/loggingpapertrail/README.md)

* [createLogPapertrail](docs/sdks/loggingpapertrail/README.md#createlogpapertrail) - Create a Papertrail log endpoint
* [deleteLogPapertrail](docs/sdks/loggingpapertrail/README.md#deletelogpapertrail) - Delete a Papertrail log endpoint
* [getLogPapertrail](docs/sdks/loggingpapertrail/README.md#getlogpapertrail) - Get a Papertrail log endpoint
* [listLogPapertrail](docs/sdks/loggingpapertrail/README.md#listlogpapertrail) - List Papertrail log endpoints
* [updateLogPapertrail](docs/sdks/loggingpapertrail/README.md#updatelogpapertrail) - Update a Papertrail log endpoint

### [LoggingPubsub](docs/sdks/loggingpubsub/README.md)

* [createLogGcpPubsub](docs/sdks/loggingpubsub/README.md#createloggcppubsub) - Create a GCP Cloud Pub/Sub log endpoint
* [deleteLogGcpPubsub](docs/sdks/loggingpubsub/README.md#deleteloggcppubsub) - Delete a GCP Cloud Pub/Sub log endpoint
* [getLogGcpPubsub](docs/sdks/loggingpubsub/README.md#getloggcppubsub) - Get a GCP Cloud Pub/Sub log endpoint
* [listLogGcpPubsub](docs/sdks/loggingpubsub/README.md#listloggcppubsub) - List GCP Cloud Pub/Sub log endpoints
* [updateLogGcpPubsub](docs/sdks/loggingpubsub/README.md#updateloggcppubsub) - Update a GCP Cloud Pub/Sub log endpoint

### [LoggingS3](docs/sdks/loggings3/README.md)

* [createLogAwsS3](docs/sdks/loggings3/README.md#createlogawss3) - Create an AWS S3 log endpoint
* [deleteLogAwsS3](docs/sdks/loggings3/README.md#deletelogawss3) - Delete an AWS S3 log endpoint
* [getLogAwsS3](docs/sdks/loggings3/README.md#getlogawss3) - Get an AWS S3 log endpoint
* [listLogAwsS3](docs/sdks/loggings3/README.md#listlogawss3) - List AWS S3 log endpoints
* [updateLogAwsS3](docs/sdks/loggings3/README.md#updatelogawss3) - Update an AWS S3 log endpoint

### [LoggingScalyr](docs/sdks/loggingscalyr/README.md)

* [createLogScalyr](docs/sdks/loggingscalyr/README.md#createlogscalyr) - Create a Scalyr log endpoint
* [deleteLogScalyr](docs/sdks/loggingscalyr/README.md#deletelogscalyr) - Delete the Scalyr log endpoint
* [getLogScalyr](docs/sdks/loggingscalyr/README.md#getlogscalyr) - Get a Scalyr log endpoint
* [listLogScalyr](docs/sdks/loggingscalyr/README.md#listlogscalyr) - List Scalyr log endpoints
* [updateLogScalyr](docs/sdks/loggingscalyr/README.md#updatelogscalyr) - Update the Scalyr log endpoint

### [LoggingSftp](docs/sdks/loggingsftp/README.md)

* [createLogSftp](docs/sdks/loggingsftp/README.md#createlogsftp) - Create an SFTP log endpoint
* [deleteLogSftp](docs/sdks/loggingsftp/README.md#deletelogsftp) - Delete an SFTP log endpoint
* [getLogSftp](docs/sdks/loggingsftp/README.md#getlogsftp) - Get an SFTP log endpoint
* [listLogSftp](docs/sdks/loggingsftp/README.md#listlogsftp) - List SFTP log endpoints
* [updateLogSftp](docs/sdks/loggingsftp/README.md#updatelogsftp) - Update an SFTP log endpoint

### [LoggingSplunk](docs/sdks/loggingsplunk/README.md)

* [createLogSplunk](docs/sdks/loggingsplunk/README.md#createlogsplunk) - Create a Splunk log endpoint
* [deleteLogSplunk](docs/sdks/loggingsplunk/README.md#deletelogsplunk) - Delete a Splunk log endpoint
* [getLogSplunk](docs/sdks/loggingsplunk/README.md#getlogsplunk) - Get a Splunk log endpoint
* [listLogSplunk](docs/sdks/loggingsplunk/README.md#listlogsplunk) - List Splunk log endpoints
* [updateLogSplunk](docs/sdks/loggingsplunk/README.md#updatelogsplunk) - Update a Splunk log endpoint

### [LoggingSumologic](docs/sdks/loggingsumologic/README.md)

* [createLogSumologic](docs/sdks/loggingsumologic/README.md#createlogsumologic) - Create a Sumologic log endpoint
* [deleteLogSumologic](docs/sdks/loggingsumologic/README.md#deletelogsumologic) - Delete a Sumologic log endpoint
* [getLogSumologic](docs/sdks/loggingsumologic/README.md#getlogsumologic) - Get a Sumologic log endpoint
* [listLogSumologic](docs/sdks/loggingsumologic/README.md#listlogsumologic) - List Sumologic log endpoints
* [updateLogSumologic](docs/sdks/loggingsumologic/README.md#updatelogsumologic) - Update a Sumologic log endpoint

### [LoggingSyslog](docs/sdks/loggingsyslog/README.md)

* [createLogSyslog](docs/sdks/loggingsyslog/README.md#createlogsyslog) - Create a syslog log endpoint
* [deleteLogSyslog](docs/sdks/loggingsyslog/README.md#deletelogsyslog) - Delete a syslog log endpoint
* [getLogSyslog](docs/sdks/loggingsyslog/README.md#getlogsyslog) - Get a syslog log endpoint
* [listLogSyslog](docs/sdks/loggingsyslog/README.md#listlogsyslog) - List Syslog log endpoints
* [updateLogSyslog](docs/sdks/loggingsyslog/README.md#updatelogsyslog) - Update a syslog log endpoint

### [MutualAuthentication](docs/sdks/mutualauthentication/README.md)

* [createMutualTlsAuthentication](docs/sdks/mutualauthentication/README.md#createmutualtlsauthentication) - Create a Mutual Authentication
* [deleteMutualTls](docs/sdks/mutualauthentication/README.md#deletemutualtls) - Delete a Mutual TLS
* [getMutualAuthentication](docs/sdks/mutualauthentication/README.md#getmutualauthentication) - Get a Mutual Authentication
* [listMutualAuthentications](docs/sdks/mutualauthentication/README.md#listmutualauthentications) - List Mutual Authentications
* [patchMutualAuthentication](docs/sdks/mutualauthentication/README.md#patchmutualauthentication) - Update a Mutual Authentication

### [Package](docs/sdks/package/README.md)

* [getPackage](docs/sdks/package/README.md#getpackage) - Get details of the service's Compute@Edge package.
* [putPackage](docs/sdks/package/README.md#putpackage) - Upload a Compute@Edge package.

### [Pool](docs/sdks/pool/README.md)

* [createServerPool](docs/sdks/pool/README.md#createserverpool) - Create a server pool
* [deleteServerPool](docs/sdks/pool/README.md#deleteserverpool) - Delete a server pool
* [getServerPool](docs/sdks/pool/README.md#getserverpool) - Get a server pool
* [listServerPools](docs/sdks/pool/README.md#listserverpools) - List server pools
* [updateServerPool](docs/sdks/pool/README.md#updateserverpool) - Update a server pool

### [Pop](docs/sdks/pop/README.md)

* [listPops](docs/sdks/pop/README.md#listpops) - List Fastly POPs

### [PublicIpList](docs/sdks/publiciplist/README.md)

* [listFastlyIps](docs/sdks/publiciplist/README.md#listfastlyips) - List Fastly's public IPs

### [Publish](docs/sdks/publish/README.md)

* [publish](docs/sdks/publish/README.md#publish) - Send messages to Fanout subscribers

### [Purge](docs/sdks/purge/README.md)

* [purgeAll](docs/sdks/purge/README.md#purgeall) - Purge everything from a service
* [purgeSingleUrl](docs/sdks/purge/README.md#purgesingleurl) - Purge a URL
* [purgeTag](docs/sdks/purge/README.md#purgetag) - Purge by surrogate key tag

### [RateLimiter](docs/sdks/ratelimiter/README.md)

* [deleteRateLimiter](docs/sdks/ratelimiter/README.md#deleteratelimiter) - Delete a rate limiter
* [getRateLimiter](docs/sdks/ratelimiter/README.md#getratelimiter) - Get a rate limiter
* [listRateLimiters](docs/sdks/ratelimiter/README.md#listratelimiters) - List rate limiters

### [Realtime](docs/sdks/realtime/README.md)

* [getStatsLast120Seconds](docs/sdks/realtime/README.md#getstatslast120seconds) - Get real-time data for the last 120 seconds
* [getStatsLast120SecondsLimitEntries](docs/sdks/realtime/README.md#getstatslast120secondslimitentries) - Get a limited number of real-time data entries
* [getStatsLastSecond](docs/sdks/realtime/README.md#getstatslastsecond) - Get real-time data from specified time

### [RequestSettings](docs/sdks/requestsettings/README.md)

* [deleteRequestSettings](docs/sdks/requestsettings/README.md#deleterequestsettings) - Delete a Request Settings object
* [getRequestSettings](docs/sdks/requestsettings/README.md#getrequestsettings) - Get a Request Settings object
* [listRequestSettings](docs/sdks/requestsettings/README.md#listrequestsettings) - List Request Settings objects
* [updateRequestSettings](docs/sdks/requestsettings/README.md#updaterequestsettings) - Update a Request Settings object

### [Resource](docs/sdks/resource/README.md)

* [createResource](docs/sdks/resource/README.md#createresource) - Create a resource link
* [deleteResource](docs/sdks/resource/README.md#deleteresource) - Delete a resource link
* [getResource](docs/sdks/resource/README.md#getresource) - Display a resource link
* [listResources](docs/sdks/resource/README.md#listresources) - List resource links
* [updateResource](docs/sdks/resource/README.md#updateresource) - Update a resource link

### [ResponseObject](docs/sdks/responseobject/README.md)

* [deleteResponseObject](docs/sdks/responseobject/README.md#deleteresponseobject) - Delete a Response Object
* [getResponseObject](docs/sdks/responseobject/README.md#getresponseobject) - Get a Response object
* [listResponseObjects](docs/sdks/responseobject/README.md#listresponseobjects) - List Response objects

### [Server](docs/sdks/server/README.md)

* [createPoolServer](docs/sdks/server/README.md#createpoolserver) - Add a server to a pool
* [deletePoolServer](docs/sdks/server/README.md#deletepoolserver) - Delete a server from a pool
* [getPoolServer](docs/sdks/server/README.md#getpoolserver) - Get a pool server
* [listPoolServers](docs/sdks/server/README.md#listpoolservers) - List servers in a pool
* [updatePoolServer](docs/sdks/server/README.md#updatepoolserver) - Update a server

### [Service](docs/sdks/service/README.md)

* [createService](docs/sdks/service/README.md#createservice) - Create a service
* [deleteService](docs/sdks/service/README.md#deleteservice) - Delete a service
* [getService](docs/sdks/service/README.md#getservice) - Get a service
* [getServiceDetail](docs/sdks/service/README.md#getservicedetail) - Get service details
* [listServiceDomains](docs/sdks/service/README.md#listservicedomains) - List the domains within a service
* [listServices](docs/sdks/service/README.md#listservices) - List services
* [searchService](docs/sdks/service/README.md#searchservice) - Search for a service by name
* [updateService](docs/sdks/service/README.md#updateservice) - Update a service

### [ServiceAuthorizations](docs/sdks/serviceauthorizations/README.md)

* [createServiceAuthorization](docs/sdks/serviceauthorizations/README.md#createserviceauthorization) - Create service authorization
* [deleteServiceAuthorization](docs/sdks/serviceauthorizations/README.md#deleteserviceauthorization) - Delete service authorization
* [listServiceAuthorization](docs/sdks/serviceauthorizations/README.md#listserviceauthorization) - List service authorizations
* [showServiceAuthorization](docs/sdks/serviceauthorizations/README.md#showserviceauthorization) - Show service authorization
* [updateServiceAuthorization](docs/sdks/serviceauthorizations/README.md#updateserviceauthorization) - Update service authorization

### [Settings](docs/sdks/settings/README.md)

* [getServiceSettings](docs/sdks/settings/README.md#getservicesettings) - Get service settings
* [updateServiceSettings](docs/sdks/settings/README.md#updateservicesettings) - Update service settings

### [Snippet](docs/sdks/snippet/README.md)

* [createSnippet](docs/sdks/snippet/README.md#createsnippet) - Create a snippet
* [deleteSnippet](docs/sdks/snippet/README.md#deletesnippet) - Delete a snippet
* [getSnippet](docs/sdks/snippet/README.md#getsnippet) - Get a versioned snippet
* [getSnippetDynamic](docs/sdks/snippet/README.md#getsnippetdynamic) - Get a dynamic snippet
* [listSnippets](docs/sdks/snippet/README.md#listsnippets) - List snippets
* [updateSnippetDynamic](docs/sdks/snippet/README.md#updatesnippetdynamic) - Update a dynamic snippet

### [Star](docs/sdks/star/README.md)

* [createServiceStar](docs/sdks/star/README.md#createservicestar) - Create a star
* [deleteServiceStar](docs/sdks/star/README.md#deleteservicestar) - Delete a star
* [getServiceStar](docs/sdks/star/README.md#getservicestar) - Get a star
* [listServiceStars](docs/sdks/star/README.md#listservicestars) - List stars

### [Stats](docs/sdks/stats/README.md)

* [getServiceStats](docs/sdks/stats/README.md#getservicestats) - Get stats for a service

### [TlsActivations](docs/sdks/tlsactivations/README.md)

* [createTlsActivation](docs/sdks/tlsactivations/README.md#createtlsactivation) - Enable TLS for a domain using a custom certificate
* [deleteTlsActivation](docs/sdks/tlsactivations/README.md#deletetlsactivation) - Disable TLS on a domain
* [getTlsActivation](docs/sdks/tlsactivations/README.md#gettlsactivation) - Get a TLS activation
* [listTlsActivations](docs/sdks/tlsactivations/README.md#listtlsactivations) - List TLS activations
* [updateTlsActivation](docs/sdks/tlsactivations/README.md#updatetlsactivation) - Update a certificate

### [TlsBulkCertificates](docs/sdks/tlsbulkcertificates/README.md)

* [deleteBulkTlsCert](docs/sdks/tlsbulkcertificates/README.md#deletebulktlscert) - Delete a certificate
* [getTlsBulkCert](docs/sdks/tlsbulkcertificates/README.md#gettlsbulkcert) - Get a certificate
* [listTlsBulkCerts](docs/sdks/tlsbulkcertificates/README.md#listtlsbulkcerts) - List certificates
* [updateBulkTlsCert](docs/sdks/tlsbulkcertificates/README.md#updatebulktlscert) - Update a certificate
* [uploadTlsBulkCert](docs/sdks/tlsbulkcertificates/README.md#uploadtlsbulkcert) - Upload a certificate

### [TlsCertificates](docs/sdks/tlscertificates/README.md)

* [createTlsCert](docs/sdks/tlscertificates/README.md#createtlscert) - Create a TLS certificate
* [deleteTlsCert](docs/sdks/tlscertificates/README.md#deletetlscert) - Delete a TLS certificate
* [getTlsCert](docs/sdks/tlscertificates/README.md#gettlscert) - Get a TLS certificate
* [listTlsCerts](docs/sdks/tlscertificates/README.md#listtlscerts) - List TLS certificates
* [updateTlsCert](docs/sdks/tlscertificates/README.md#updatetlscert) - Update a TLS certificate

### [TlsConfigurations](docs/sdks/tlsconfigurations/README.md)

* [getTlsConfig](docs/sdks/tlsconfigurations/README.md#gettlsconfig) - Get a TLS configuration
* [listTlsConfigs](docs/sdks/tlsconfigurations/README.md#listtlsconfigs) - List TLS configurations
* [updateTlsConfig](docs/sdks/tlsconfigurations/README.md#updatetlsconfig) - Update a TLS configuration

### [TlsDomains](docs/sdks/tlsdomains/README.md)

* [listTlsDomains](docs/sdks/tlsdomains/README.md#listtlsdomains) - List TLS domains

### [TlsPrivateKeys](docs/sdks/tlsprivatekeys/README.md)

* [createTlsKey](docs/sdks/tlsprivatekeys/README.md#createtlskey) - Create a TLS private key
* [deleteTlsKey](docs/sdks/tlsprivatekeys/README.md#deletetlskey) - Delete a TLS private key
* [getTlsKey](docs/sdks/tlsprivatekeys/README.md#gettlskey) - Get a TLS private key
* [listTlsKeys](docs/sdks/tlsprivatekeys/README.md#listtlskeys) - List TLS private keys

### [TlsSubscriptions](docs/sdks/tlssubscriptions/README.md)

* [createGlobalsignEmailChallenge](docs/sdks/tlssubscriptions/README.md#createglobalsignemailchallenge) - Creates a GlobalSign email challenge.
* [createTlsSub](docs/sdks/tlssubscriptions/README.md#createtlssub) - Create a TLS subscription
* [deleteGlobalsignEmailChallenge](docs/sdks/tlssubscriptions/README.md#deleteglobalsignemailchallenge) - Delete a GlobalSign email challenge
* [deleteTlsSub](docs/sdks/tlssubscriptions/README.md#deletetlssub) - Delete a TLS subscription
* [getTlsSub](docs/sdks/tlssubscriptions/README.md#gettlssub) - Get a TLS subscription
* [listTlsSubs](docs/sdks/tlssubscriptions/README.md#listtlssubs) - List TLS subscriptions
* [patchTlsSub](docs/sdks/tlssubscriptions/README.md#patchtlssub) - Update a TLS subscription

### [Tokens](docs/sdks/tokens/README.md)

* [getTokenCurrent](docs/sdks/tokens/README.md#gettokencurrent) - Get the current token
* [listTokensCustomer](docs/sdks/tokens/README.md#listtokenscustomer) - List tokens for a customer
* [listTokensUser](docs/sdks/tokens/README.md#listtokensuser) - List tokens for the authenticated user
* [revokeToken](docs/sdks/tokens/README.md#revoketoken) - Revoke a token
* [revokeTokenCurrent](docs/sdks/tokens/README.md#revoketokencurrent) - Revoke the current token

### [User](docs/sdks/user/README.md)

* [createUser](docs/sdks/user/README.md#createuser) - Create a user
* [deleteUser](docs/sdks/user/README.md#deleteuser) - Delete a user
* [getCurrentUser](docs/sdks/user/README.md#getcurrentuser) - Get the current user
* [getUser](docs/sdks/user/README.md#getuser) - Get a user
* [requestPasswordReset](docs/sdks/user/README.md#requestpasswordreset) - Request a password reset
* [updateUser](docs/sdks/user/README.md#updateuser) - Update a user
* [updateUserPassword](docs/sdks/user/README.md#updateuserpassword) - Update the user's password

### [Vcl](docs/sdks/vcl/README.md)

* [createCustomVcl](docs/sdks/vcl/README.md#createcustomvcl) - Create a custom VCL file
* [deleteCustomVcl](docs/sdks/vcl/README.md#deletecustomvcl) - Delete a custom VCL file
* [getCustomVcl](docs/sdks/vcl/README.md#getcustomvcl) - Get a custom VCL file
* [getCustomVclBoilerplate](docs/sdks/vcl/README.md#getcustomvclboilerplate) - Get boilerplate VCL
* [getCustomVclGenerated](docs/sdks/vcl/README.md#getcustomvclgenerated) - Get the generated VCL for a service
* [getCustomVclRaw](docs/sdks/vcl/README.md#getcustomvclraw) - Download a custom VCL file
* [listCustomVcl](docs/sdks/vcl/README.md#listcustomvcl) - List custom VCL files
* [setCustomVclMain](docs/sdks/vcl/README.md#setcustomvclmain) - Set a custom VCL file as main
* [updateCustomVcl](docs/sdks/vcl/README.md#updatecustomvcl) - Update a custom VCL file

### [VclDiff](docs/sdks/vcldiff/README.md)

* [vclDiffServiceVersions](docs/sdks/vcldiff/README.md#vcldiffserviceversions) - Get a comparison of the VCL changes between two service versions

### [Version](docs/sdks/version/README.md)

* [activateServiceVersion](docs/sdks/version/README.md#activateserviceversion) - Activate a service version
* [cloneServiceVersion](docs/sdks/version/README.md#cloneserviceversion) - Clone a service version
* [createServiceVersion](docs/sdks/version/README.md#createserviceversion) - Create a service version
* [deactivateServiceVersion](docs/sdks/version/README.md#deactivateserviceversion) - Deactivate a service version
* [getServiceVersion](docs/sdks/version/README.md#getserviceversion) - Get a version of a service
* [listServiceVersions](docs/sdks/version/README.md#listserviceversions) - List versions of a service
* [lockServiceVersion](docs/sdks/version/README.md#lockserviceversion) - Lock a service version
* [updateServiceVersion](docs/sdks/version/README.md#updateserviceversion) - Update a service version
* [validateServiceVersion](docs/sdks/version/README.md#validateserviceversion) - Validate a service version

### [WafActiveRules](docs/sdks/wafactiverules/README.md)

* [~~bulkUpdateWafActiveRules~~](docs/sdks/wafactiverules/README.md#bulkupdatewafactiverules) - Update multiple active rules :warning: **Deprecated**
* [~~createWafActiveRule~~](docs/sdks/wafactiverules/README.md#createwafactiverule) - Add a rule to a WAF as an active rule :warning: **Deprecated**
* [~~createWafActiveRulesTag~~](docs/sdks/wafactiverules/README.md#createwafactiverulestag) - Create active rules by tag :warning: **Deprecated**
* [~~deleteWafActiveRule~~](docs/sdks/wafactiverules/README.md#deletewafactiverule) - Delete an active rule :warning: **Deprecated**
* [~~getWafActiveRule~~](docs/sdks/wafactiverules/README.md#getwafactiverule) - Get an active WAF rule object :warning: **Deprecated**
* [~~listWafActiveRules~~](docs/sdks/wafactiverules/README.md#listwafactiverules) - List active rules on a WAF :warning: **Deprecated**
* [~~updateWafActiveRule~~](docs/sdks/wafactiverules/README.md#updatewafactiverule) - Update an active rule :warning: **Deprecated**

### [WafExclusions](docs/sdks/wafexclusions/README.md)

* [~~createWafRuleExclusion~~](docs/sdks/wafexclusions/README.md#createwafruleexclusion) - Create a WAF rule exclusion :warning: **Deprecated**
* [~~deleteWafRuleExclusion~~](docs/sdks/wafexclusions/README.md#deletewafruleexclusion) - Delete a WAF rule exclusion :warning: **Deprecated**
* [~~getWafRuleExclusion~~](docs/sdks/wafexclusions/README.md#getwafruleexclusion) - Get a WAF rule exclusion :warning: **Deprecated**
* [~~listWafRuleExclusions~~](docs/sdks/wafexclusions/README.md#listwafruleexclusions) - List WAF rule exclusions :warning: **Deprecated**
* [~~updateWafRuleExclusion~~](docs/sdks/wafexclusions/README.md#updatewafruleexclusion) - Update a WAF rule exclusion :warning: **Deprecated**

### [WafFirewallVersions](docs/sdks/waffirewallversions/README.md)

* [~~cloneWafFirewallVersion~~](docs/sdks/waffirewallversions/README.md#clonewaffirewallversion) - Clone a firewall version :warning: **Deprecated**
* [~~createWafFirewallVersion~~](docs/sdks/waffirewallversions/README.md#createwaffirewallversion) - Create a firewall version :warning: **Deprecated**
* [~~deployActivateWafFirewallVersion~~](docs/sdks/waffirewallversions/README.md#deployactivatewaffirewallversion) - Deploy or activate a firewall version :warning: **Deprecated**
* [~~getWafFirewallVersion~~](docs/sdks/waffirewallversions/README.md#getwaffirewallversion) - Get a firewall version :warning: **Deprecated**
* [~~listWafFirewallVersions~~](docs/sdks/waffirewallversions/README.md#listwaffirewallversions) - List firewall versions :warning: **Deprecated**
* [~~updateWafFirewallVersion~~](docs/sdks/waffirewallversions/README.md#updatewaffirewallversion) - Update a firewall version :warning: **Deprecated**

### [WafFirewalls](docs/sdks/waffirewalls/README.md)

* [~~createWafFirewall~~](docs/sdks/waffirewalls/README.md#createwaffirewall) - Create a firewall :warning: **Deprecated**
* [~~deleteWafFirewall~~](docs/sdks/waffirewalls/README.md#deletewaffirewall) - Delete a firewall :warning: **Deprecated**
* [~~getWafFirewall~~](docs/sdks/waffirewalls/README.md#getwaffirewall) - Get a firewall :warning: **Deprecated**
* [~~listWafFirewalls~~](docs/sdks/waffirewalls/README.md#listwaffirewalls) - List firewalls :warning: **Deprecated**
* [~~updateWafFirewall~~](docs/sdks/waffirewalls/README.md#updatewaffirewall) - Update a firewall :warning: **Deprecated**

### [WafRuleRevisions](docs/sdks/wafrulerevisions/README.md)

* [~~getWafRuleRevision~~](docs/sdks/wafrulerevisions/README.md#getwafrulerevision) - Get a revision of a rule :warning: **Deprecated**
* [~~listWafRuleRevisions~~](docs/sdks/wafrulerevisions/README.md#listwafrulerevisions) - List revisions for a rule :warning: **Deprecated**

### [WafRules](docs/sdks/wafrules/README.md)

* [~~getWafRule~~](docs/sdks/wafrules/README.md#getwafrule) - Get a rule :warning: **Deprecated**
* [~~listWafRules~~](docs/sdks/wafrules/README.md#listwafrules) - List available WAF rules :warning: **Deprecated**

### [WafTags](docs/sdks/waftags/README.md)

* [~~listWafTags~~](docs/sdks/waftags/README.md#listwaftags) - List tags :warning: **Deprecated**
<!-- End SDK Available Operations -->



<!-- Start Dev Containers -->

<!-- End Dev Containers -->



<!-- Start Pagination -->
# Pagination

Some of the endpoints in this SDK support pagination. To use pagination, you make your SDK calls as usual, but the
returned response object will have a `next` method that can be called to pull down the next group of results. If the
return value of `next` is `null`, then there are no more pages to be fetched.

Here's an example of one such pagination call:
<!-- End Pagination -->

<!-- Placeholder for Future Speakeasy SDK Sections -->



### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
