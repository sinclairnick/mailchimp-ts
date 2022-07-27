/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class FacebookAdsApi {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List facebook ads
     * Get list of Facebook ads.
     * @returns any List of Facebook Ad Instances
     * @throws ApiError
     */
    public getAllFacebookAds({
        fields,
        excludeFields,
        count = 10,
        offset,
        sortField,
        sortDir,
    }: {
        /**
         * A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
         */
        fields?: Array<string>,
        /**
         * A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
         */
        excludeFields?: Array<string>,
        /**
         * The number of records to return. Default value is 10. Maximum value is 1000
         */
        count?: number,
        /**
         * Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.
         */
        offset?: number,
        /**
         * Returns files sorted by the specified field.
         */
        sortField?: 'created_at' | 'updated_at' | 'end_time',
        /**
         * Determines the order direction for sorted results.
         */
        sortDir?: 'ASC' | 'DESC',
    }): CancelablePromise<{
        facebook_ads?: Array<({
            /**
             * Unique ID of an Outreach
             */
            id?: string;
            /**
             * Web ID
             */
            web_id?: number;
            /**
             * Title or name of an Outreach
             */
            name?: string;
            /**
             * Supported Campaign, Ad, Page type
             */
            type?: 'regular' | 'plaintext' | 'rss' | 'reconfirm' | 'variate' | 'absplit' | 'automation' | 'facebook' | 'google' | 'autoresponder' | 'transactional' | 'page' | 'website' | 'survey';
            /**
             * Campaign, Ad, or Page status
             */
            status?: 'save' | 'paused' | 'schedule' | 'sending' | 'sent' | 'canceled' | 'canceling' | 'active' | 'disconnected' | 'somepaused' | 'draft' | 'completed' | 'partialRejected' | 'pending' | 'rejected' | 'published' | 'unpublished';
            /**
             * Outreach report availability
             */
            show_report?: boolean;
            create_time?: string;
            start_time?: string;
            updated_at?: string;
            canceled_at?: string;
            published_time?: string;
            has_segment?: boolean;
            report_summary?: {
                opens?: number;
                unique_opens?: number;
                open_rate?: number;
                clicks?: number;
                subscriber_clicks?: number;
                click_rate?: number;
                visits?: number;
                unique_visits?: number;
                conversion_rate?: number;
                subscribes?: number;
                ecommerce?: {
                    total_revenue?: number;
                    currency_code?: string;
                    average_order_revenue?: number;
                };
                impressions?: number;
                reach?: number;
                engagements?: number;
                total_sent?: number;
            };
            /**
             * List settings for the outreach
             */
            recipients?: {
                /**
                 * The unique list id.
                 */
                list_id?: string;
                /**
                 * The status of the list used, namely if it's deleted or disabled.
                 */
                readonly list_is_active?: boolean;
                /**
                 * The name of the list.
                 */
                readonly list_name?: string;
                /**
                 * A description of the [segment](https://mailchimp.com/help/save-and-manage-segments/) used for the campaign. Formatted as a string marked up with HTML.
                 */
                readonly segment_text?: string;
                /**
                 * Count of the recipients on the associated list. Formatted as an integer.
                 */
                readonly recipient_count?: number;
                /**
                 * An object representing all segmentation options. This object should contain a `saved_segment_id` to use an existing segment, or you can create a new segment by including both `match` and `conditions` options.
                 */
                segment_opts?: {
                    /**
                     * The id for an existing saved segment.
                     */
                    saved_segment_id?: number;
                    /**
                     * The prebuilt segment id, if a prebuilt segment has been designated for this campaign.
                     */
                    prebuilt_segment_id?: string;
                    /**
                     * Segment match type.
                     */
                    match?: 'any' | 'all';
                    /**
                     * Segment match conditions. There are multiple possible types, see the [condition types documentation](https://mailchimp.com/developer/marketing/docs/alternative-schemas/#segment-condition-schemas).
                     */
                    conditions?: Array<any>;
                };
            };
            /**
             * The URL of the thumbnail for this outreach
             */
            thumbnail?: string;
        } & {
            email_source_name?: string;
            paused_at?: string;
            end_time?: string;
            needs_attention?: boolean;
            was_canceled_by_facebook?: boolean;
        } & {
            /**
             * Check if this ad is connected to a facebook page
             */
            is_connected?: boolean;
            /**
             * Check if this ad has audience setup
             */
            has_audience?: boolean;
            /**
             * Check if this ad has content
             */
            has_content?: boolean;
            /**
             * Channel settings
             */
            channel?: {
                /**
                 * Is this for facebook feed
                 */
                fb_placement_feed?: boolean;
                /**
                 * Is this for facebook audience
                 */
                fb_placement_audience?: boolean;
                /**
                 * Is this for instagram feed
                 */
                ig_placement_feed?: boolean;
            };
            /**
             * Check if this ad is connected to a facebook page
             */
            feedback?: {
                /**
                 * Feedback regarding the content of this Ad.
                 */
                content?: string;
                /**
                 * Feedback regarding the audience of this Ad.
                 */
                audience?: string;
                /**
                 * Feedback regarding the budget of this Ad.
                 */
                budget?: string;
                /**
                 * Feedback regarding the compliance of this Ad.
                 */
                compliance?: string;
            };
            /**
             * Connected Site
             */
            site?: {
                /**
                 * The ID of this connected site.
                 */
                id?: number;
                /**
                 * The name of the connected site
                 */
                name?: string;
                /**
                 * The URL for this connected site.
                 */
                url?: string;
            };
            /**
             * Audience settings
             */
            audience?: {
                /**
                 * Type of the audience
                 */
                type?: 'Custom Audience' | 'Lookalike Audience' | 'Interest-based Audience';
                /**
                 * List or Facebook based audience
                 */
                source_type?: 'facebook' | 'list';
                email_source?: {
                    /**
                     * Email source name
                     */
                    name?: string;
                    /**
                     * Type of the email source
                     */
                    type?: string;
                    /**
                     * Is the source reference a segment
                     */
                    is_segment?: boolean;
                    /**
                     * Segment type if this source is tied to a segment
                     */
                    segment_type?: string;
                    /**
                     * Associated list name to the source
                     */
                    list_name?: string;
                };
                /**
                 * To include list contacts as part of audience
                 */
                include_source_in_target?: boolean;
                /**
                 * To find similar audience in given country
                 */
                lookalike_country_code?: string;
                targeting_specs?: {
                    gender?: 0 | 1 | 2;
                    min_age?: number;
                    max_age?: number;
                    locations?: {
                        countries?: Array<string>;
                        regions?: Array<string>;
                        cities?: Array<string>;
                        zips?: Array<string>;
                    };
                    interests?: Array<{
                        name?: string;
                    }>;
                };
            };
            budget?: {
                /**
                 * Duration of the ad in seconds
                 */
                duration?: number;
                /**
                 * Total budget of the ad
                 */
                total_amount?: number;
                /**
                 * Currency code
                 */
                currency_code?: string;
            };
            content?: {
                title?: string;
                link_url?: string;
                message?: string;
                description?: string;
                image_url?: string;
                call_to_action?: string;
                attachments?: Array<{
                    name?: string;
                    link_url?: string;
                    description?: string;
                    image_url?: string;
                    call_to_action?: string;
                }>;
            };
        } & {
            /**
             * A list of link types and descriptions for the API schema documents.
             */
            readonly _links?: Array<{
                /**
                 * As with an HTML 'rel' attribute, this describes the type of link.
                 */
                readonly rel?: string;
                /**
                 * This property contains a fully-qualified URL that can be called to retrieve the linked resource or perform the linked action.
                 */
                readonly href?: string;
                /**
                 * The HTTP method that should be used when accessing the URL defined in 'href'.
                 */
                readonly method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS' | 'HEAD';
                /**
                 * For GETs, this is a URL representing the schema that the response should conform to.
                 */
                readonly targetSchema?: string;
                /**
                 * For HTTP methods that can receive bodies (POST and PUT), this is a URL representing the schema that the body should conform to.
                 */
                readonly schema?: string;
            }>;
        })>;
        /**
         * The total number of items matching the query regardless of pagination.
         */
        readonly total_items?: number;
        /**
         * A list of link types and descriptions for the API schema documents.
         */
        readonly _links?: Array<{
            /**
             * As with an HTML 'rel' attribute, this describes the type of link.
             */
            readonly rel?: string;
            /**
             * This property contains a fully-qualified URL that can be called to retrieve the linked resource or perform the linked action.
             */
            readonly href?: string;
            /**
             * The HTTP method that should be used when accessing the URL defined in 'href'.
             */
            readonly method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS' | 'HEAD';
            /**
             * For GETs, this is a URL representing the schema that the response should conform to.
             */
            readonly targetSchema?: string;
            /**
             * For HTTP methods that can receive bodies (POST and PUT), this is a URL representing the schema that the body should conform to.
             */
            readonly schema?: string;
        }>;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/facebook-ads',
            query: {
                'fields': fields,
                'exclude_fields': excludeFields,
                'count': count,
                'offset': offset,
                'sort_field': sortField,
                'sort_dir': sortDir,
            },
        });
    }

    /**
     * Get facebook ad info
     * Get details of a Facebook ad.
     * @returns any Facebook Ad Instance
     * @throws ApiError
     */
    public getFacebookAdsId({
        outreachId,
        fields,
        excludeFields,
    }: {
        /**
         * The outreach id.
         */
        outreachId: string,
        /**
         * A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
         */
        fields?: Array<string>,
        /**
         * A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
         */
        excludeFields?: Array<string>,
    }): CancelablePromise<({
        /**
         * Unique ID of an Outreach
         */
        id?: string;
        /**
         * Web ID
         */
        web_id?: number;
        /**
         * Title or name of an Outreach
         */
        name?: string;
        /**
         * Supported Campaign, Ad, Page type
         */
        type?: 'regular' | 'plaintext' | 'rss' | 'reconfirm' | 'variate' | 'absplit' | 'automation' | 'facebook' | 'google' | 'autoresponder' | 'transactional' | 'page' | 'website' | 'survey';
        /**
         * Campaign, Ad, or Page status
         */
        status?: 'save' | 'paused' | 'schedule' | 'sending' | 'sent' | 'canceled' | 'canceling' | 'active' | 'disconnected' | 'somepaused' | 'draft' | 'completed' | 'partialRejected' | 'pending' | 'rejected' | 'published' | 'unpublished';
        /**
         * Outreach report availability
         */
        show_report?: boolean;
        create_time?: string;
        start_time?: string;
        updated_at?: string;
        canceled_at?: string;
        published_time?: string;
        has_segment?: boolean;
        report_summary?: {
            opens?: number;
            unique_opens?: number;
            open_rate?: number;
            clicks?: number;
            subscriber_clicks?: number;
            click_rate?: number;
            visits?: number;
            unique_visits?: number;
            conversion_rate?: number;
            subscribes?: number;
            ecommerce?: {
                total_revenue?: number;
                currency_code?: string;
                average_order_revenue?: number;
            };
            impressions?: number;
            reach?: number;
            engagements?: number;
            total_sent?: number;
        };
        /**
         * List settings for the outreach
         */
        recipients?: {
            /**
             * The unique list id.
             */
            list_id?: string;
            /**
             * The status of the list used, namely if it's deleted or disabled.
             */
            readonly list_is_active?: boolean;
            /**
             * The name of the list.
             */
            readonly list_name?: string;
            /**
             * A description of the [segment](https://mailchimp.com/help/save-and-manage-segments/) used for the campaign. Formatted as a string marked up with HTML.
             */
            readonly segment_text?: string;
            /**
             * Count of the recipients on the associated list. Formatted as an integer.
             */
            readonly recipient_count?: number;
            /**
             * An object representing all segmentation options. This object should contain a `saved_segment_id` to use an existing segment, or you can create a new segment by including both `match` and `conditions` options.
             */
            segment_opts?: {
                /**
                 * The id for an existing saved segment.
                 */
                saved_segment_id?: number;
                /**
                 * The prebuilt segment id, if a prebuilt segment has been designated for this campaign.
                 */
                prebuilt_segment_id?: string;
                /**
                 * Segment match type.
                 */
                match?: 'any' | 'all';
                /**
                 * Segment match conditions. There are multiple possible types, see the [condition types documentation](https://mailchimp.com/developer/marketing/docs/alternative-schemas/#segment-condition-schemas).
                 */
                conditions?: Array<any>;
            };
        };
        /**
         * The URL of the thumbnail for this outreach
         */
        thumbnail?: string;
    } & {
        email_source_name?: string;
        paused_at?: string;
        end_time?: string;
        needs_attention?: boolean;
        was_canceled_by_facebook?: boolean;
    } & {
        /**
         * Check if this ad is connected to a facebook page
         */
        is_connected?: boolean;
        /**
         * Check if this ad has audience setup
         */
        has_audience?: boolean;
        /**
         * Check if this ad has content
         */
        has_content?: boolean;
        /**
         * Channel settings
         */
        channel?: {
            /**
             * Is this for facebook feed
             */
            fb_placement_feed?: boolean;
            /**
             * Is this for facebook audience
             */
            fb_placement_audience?: boolean;
            /**
             * Is this for instagram feed
             */
            ig_placement_feed?: boolean;
        };
        /**
         * Check if this ad is connected to a facebook page
         */
        feedback?: {
            /**
             * Feedback regarding the content of this Ad.
             */
            content?: string;
            /**
             * Feedback regarding the audience of this Ad.
             */
            audience?: string;
            /**
             * Feedback regarding the budget of this Ad.
             */
            budget?: string;
            /**
             * Feedback regarding the compliance of this Ad.
             */
            compliance?: string;
        };
        /**
         * Connected Site
         */
        site?: {
            /**
             * The ID of this connected site.
             */
            id?: number;
            /**
             * The name of the connected site
             */
            name?: string;
            /**
             * The URL for this connected site.
             */
            url?: string;
        };
        /**
         * Audience settings
         */
        audience?: {
            /**
             * Type of the audience
             */
            type?: 'Custom Audience' | 'Lookalike Audience' | 'Interest-based Audience';
            /**
             * List or Facebook based audience
             */
            source_type?: 'facebook' | 'list';
            email_source?: {
                /**
                 * Email source name
                 */
                name?: string;
                /**
                 * Type of the email source
                 */
                type?: string;
                /**
                 * Is the source reference a segment
                 */
                is_segment?: boolean;
                /**
                 * Segment type if this source is tied to a segment
                 */
                segment_type?: string;
                /**
                 * Associated list name to the source
                 */
                list_name?: string;
            };
            /**
             * To include list contacts as part of audience
             */
            include_source_in_target?: boolean;
            /**
             * To find similar audience in given country
             */
            lookalike_country_code?: string;
            targeting_specs?: {
                gender?: 0 | 1 | 2;
                min_age?: number;
                max_age?: number;
                locations?: {
                    countries?: Array<string>;
                    regions?: Array<string>;
                    cities?: Array<string>;
                    zips?: Array<string>;
                };
                interests?: Array<{
                    name?: string;
                }>;
            };
        };
        budget?: {
            /**
             * Duration of the ad in seconds
             */
            duration?: number;
            /**
             * Total budget of the ad
             */
            total_amount?: number;
            /**
             * Currency code
             */
            currency_code?: string;
        };
        content?: {
            title?: string;
            link_url?: string;
            message?: string;
            description?: string;
            image_url?: string;
            call_to_action?: string;
            attachments?: Array<{
                name?: string;
                link_url?: string;
                description?: string;
                image_url?: string;
                call_to_action?: string;
            }>;
        };
    } & {
        /**
         * A list of link types and descriptions for the API schema documents.
         */
        readonly _links?: Array<{
            /**
             * As with an HTML 'rel' attribute, this describes the type of link.
             */
            readonly rel?: string;
            /**
             * This property contains a fully-qualified URL that can be called to retrieve the linked resource or perform the linked action.
             */
            readonly href?: string;
            /**
             * The HTTP method that should be used when accessing the URL defined in 'href'.
             */
            readonly method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS' | 'HEAD';
            /**
             * For GETs, this is a URL representing the schema that the response should conform to.
             */
            readonly targetSchema?: string;
            /**
             * For HTTP methods that can receive bodies (POST and PUT), this is a URL representing the schema that the body should conform to.
             */
            readonly schema?: string;
        }>;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/facebook-ads/{outreach_id}',
            path: {
                'outreach_id': outreachId,
            },
            query: {
                'fields': fields,
                'exclude_fields': excludeFields,
            },
        });
    }

}
