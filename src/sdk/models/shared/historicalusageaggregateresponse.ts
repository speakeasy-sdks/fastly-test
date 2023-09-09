/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { HistoricalUsageResults } from "./historicalusageresults";
import { Expose, Type } from "class-transformer";

/**
 * Meta information about the scope of the query in a human readable format.
 */
export class HistoricalUsageAggregateResponseMeta extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "by" })
    by?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "from" })
    from?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "region" })
    region?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "to" })
    to?: string;
}

export class HistoricalUsageAggregateResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "data" })
    @Type(() => HistoricalUsageResults)
    data?: HistoricalUsageResults;

    /**
     * Meta information about the scope of the query in a human readable format.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "meta" })
    @Type(() => HistoricalUsageAggregateResponseMeta)
    meta?: HistoricalUsageAggregateResponseMeta;

    /**
     * If the query was not successful, this will provide a string that explains why.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "msg" })
    msg?: string;

    /**
     * Whether or not we were able to successfully execute the query.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: string;
}
