/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AutomationsApi {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List automations
     * Get a summary of an account's classic automations.
     * @returns any
     * @throws ApiError
     */
    public getAutomations({
        count = 10,
        offset,
        fields,
        excludeFields,
        beforeCreateTime,
        sinceCreateTime,
        beforeStartTime,
        sinceStartTime,
        status,
    }: {
        /**
         * The number of records to return. Default value is 10. Maximum value is 1000
         */
        count?: number,
        /**
         * Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.
         */
        offset?: number,
        /**
         * A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
         */
        fields?: Array<string>,
        /**
         * A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
         */
        excludeFields?: Array<string>,
        /**
         * Restrict the response to automations created before this time. Uses the ISO 8601 time format: 2015-10-21T15:41:36+00:00.
         */
        beforeCreateTime?: string,
        /**
         * Restrict the response to automations created after this time. Uses the ISO 8601 time format: 2015-10-21T15:41:36+00:00.
         */
        sinceCreateTime?: string,
        /**
         * Restrict the response to automations started before this time. Uses the ISO 8601 time format: 2015-10-21T15:41:36+00:00.
         */
        beforeStartTime?: string,
        /**
         * Restrict the response to automations started after this time. Uses the ISO 8601 time format: 2015-10-21T15:41:36+00:00.
         */
        sinceStartTime?: string,
        /**
         * Restrict the results to automations with the specified status.
         */
        status?: 'save' | 'paused' | 'sending',
    }): CancelablePromise<{
        /**
         * An array of objects, each representing an Automation workflow.
         */
        automations?: Array<{
            /**
             * A string that identifies the Automation.
             */
            readonly id?: string;
            /**
             * The date and time the Automation was created in ISO 8601 format.
             */
            readonly create_time?: string;
            /**
             * The date and time the Automation was started in ISO 8601 format.
             */
            readonly start_time?: string;
            /**
             * The current status of the Automation.
             */
            readonly status?: 'save' | 'paused' | 'sending';
            /**
             * The total number of emails sent for the Automation.
             */
            readonly emails_sent?: number;
            /**
             * List settings for the Automation.
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
                 * List Name.
                 */
                list_name?: string;
                /**
                 * An object representing all segmentation options.
                 */
                segment_opts?: {
                    /**
                     * The id for an existing saved segment.
                     */
                    saved_segment_id?: number;
                    /**
                     * Segment match type.
                     */
                    match?: 'any' | 'all';
                    /**
                     * Segment match conditions. There are multiple possible types, see the [condition types documentation](https://mailchimp.com/developer/marketing/docs/alternative-schemas/#segment-condition-schemas).
                     */
                    conditions?: Array<any>;
                };
                /**
                 * The id of the store.
                 */
                store_id?: string;
            };
            /**
             * The settings for the Automation workflow.
             */
            settings?: {
                /**
                 * The title of the Automation.
                 */
                title?: string;
                /**
                 * The 'from' name for the Automation (not an email address).
                 */
                from_name?: string;
                /**
                 * The reply-to email address for the Automation.
                 */
                reply_to?: string;
                /**
                 * Whether to use Mailchimp Conversation feature to manage replies
                 */
                use_conversation?: boolean;
                /**
                 * The Automation's custom 'To' name, typically the first name [audience field](https://mailchimp.com/help/getting-started-with-merge-tags/).
                 */
                to_name?: string;
                /**
                 * Whether Mailchimp [authenticated](https://mailchimp.com/help/about-email-authentication/) the Automation. Defaults to `true`.
                 */
                authenticate?: boolean;
                /**
                 * Whether to automatically append Mailchimp's [default footer](https://mailchimp.com/help/about-campaign-footers/) to the Automation.
                 */
                auto_footer?: boolean;
                /**
                 * Whether to automatically inline the CSS included with the Automation content.
                 */
                inline_css?: boolean;
            };
            /**
             * The tracking options for the Automation.
             */
            tracking?: {
                /**
                 * Whether to [track opens](https://mailchimp.com/help/about-open-tracking/). Defaults to `true`.
                 */
                opens?: boolean;
                /**
                 * Whether to [track clicks](https://mailchimp.com/help/enable-and-view-click-tracking/) in the HTML version of the Automation. Defaults to `true`.
                 */
                html_clicks?: boolean;
                /**
                 * Whether to [track clicks](https://mailchimp.com/help/enable-and-view-click-tracking/) in the plain-text version of the Automation. Defaults to `true`.
                 */
                text_clicks?: boolean;
                /**
                 * Deprecated
                 */
                goal_tracking?: boolean;
                /**
                 * Whether to enable e-commerce tracking.
                 */
                ecomm360?: boolean;
                /**
                 * The custom slug for [Google Analytics](https://mailchimp.com/help/integrate-google-analytics-with-mailchimp/) tracking (max of 50 bytes).
                 */
                google_analytics?: string;
                /**
                 * The custom slug for [ClickTale](https://mailchimp.com/help/additional-tracking-options-for-campaigns/) tracking (max of 50 bytes).
                 */
                clicktale?: string;
                /**
                 * Deprecated
                 */
                salesforce?: {
                    /**
                     * Create a campaign in a connected Salesforce account.
                     */
                    campaign?: boolean;
                    /**
                     * Update contact notes for a campaign based on a subscriber's email address.
                     */
                    notes?: boolean;
                };
                /**
                 * Deprecated
                 */
                capsule?: {
                    /**
                     * Update contact notes for a campaign based on a subscriber's email addresses.
                     */
                    notes?: boolean;
                };
            };
            /**
             * Available triggers for Automation workflows.
             */
            trigger_settings?: {
                /**
                 * The type of Automation workflow.
                 */
                workflow_type: 'abandonedBrowse' | 'abandonedCart' | 'api' | 'bestCustomers' | 'categoryFollowup' | 'dateAdded' | 'emailFollowup' | 'emailSeries' | 'groupAdd' | 'groupRemove' | 'mandrill' | 'productFollowup' | 'purchaseFollowup' | 'recurringEvent' | 'specialEvent' | 'visitUrl' | 'welcomeSeries';
                /**
                 * The title of the workflow type.
                 */
                readonly workflow_title?: string;
                /**
                 * A workflow's runtime settings for an Automation.
                 */
                runtime?: {
                    /**
                     * The days an Automation workflow can send.
                     */
                    days?: Array<'sunday' | 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday'>;
                    /**
                     * The hours an Automation workflow can send.
                     */
                    hours?: {
                        /**
                         * When to send the Automation email.
                         */
                        type: 'send_asap' | 'send_between' | 'send_at';
                    };
                };
                /**
                 * The number of emails in the Automation workflow.
                 */
                readonly workflow_emails_count?: number;
            };
            /**
             * A summary of opens and clicks for sent campaigns.
             */
            report_summary?: {
                /**
                 * The total number of opens for a campaign.
                 */
                readonly opens?: number;
                /**
                 * The number of unique opens.
                 */
                readonly unique_opens?: number;
                /**
                 * The number of unique opens divided by the total number of successful deliveries.
                 */
                readonly open_rate?: number;
                /**
                 * The total number of clicks for an campaign.
                 */
                readonly clicks?: number;
                /**
                 * The number of unique clicks.
                 */
                readonly subscriber_clicks?: number;
                /**
                 * The number of unique clicks, divided by the total number of successful deliveries.
                 */
                readonly click_rate?: number;
            };
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
        }>;
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
            url: '/automations',
            query: {
                'count': count,
                'offset': offset,
                'fields': fields,
                'exclude_fields': excludeFields,
                'before_create_time': beforeCreateTime,
                'since_create_time': sinceCreateTime,
                'before_start_time': beforeStartTime,
                'since_start_time': sinceStartTime,
                'status': status,
            },
        });
    }

    /**
     * Add automation
     * Create a new classic automation in your Mailchimp account.
     * @returns any
     * @throws ApiError
     */
    public postAutomations({
        body,
    }: {
        body: {
            /**
             * List settings for the Automation.
             */
            recipients: {
                /**
                 * The id of the List.
                 */
                list_id?: string;
                /**
                 * The id of the store.
                 */
                store_id?: string;
            };
            /**
             * The settings for the Automation workflow.
             */
            settings?: {
                /**
                 * The 'from' name for the Automation (not an email address).
                 */
                from_name?: string;
                /**
                 * The reply-to email address for the Automation.
                 */
                reply_to?: string;
            };
            /**
             * Trigger settings for the Automation.
             */
            trigger_settings: {
                /**
                 * The type of Automation workflow. Currently only supports 'abandonedCart'.
                 */
                workflow_type: string;
            };
        },
    }): CancelablePromise<{
        /**
         * A string that identifies the Automation.
         */
        readonly id?: string;
        /**
         * The date and time the Automation was created in ISO 8601 format.
         */
        readonly create_time?: string;
        /**
         * The date and time the Automation was started in ISO 8601 format.
         */
        readonly start_time?: string;
        /**
         * The current status of the Automation.
         */
        readonly status?: 'save' | 'paused' | 'sending';
        /**
         * The total number of emails sent for the Automation.
         */
        readonly emails_sent?: number;
        /**
         * List settings for the Automation.
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
             * List Name.
             */
            list_name?: string;
            /**
             * An object representing all segmentation options.
             */
            segment_opts?: {
                /**
                 * The id for an existing saved segment.
                 */
                saved_segment_id?: number;
                /**
                 * Segment match type.
                 */
                match?: 'any' | 'all';
                /**
                 * Segment match conditions. There are multiple possible types, see the [condition types documentation](https://mailchimp.com/developer/marketing/docs/alternative-schemas/#segment-condition-schemas).
                 */
                conditions?: Array<any>;
            };
            /**
             * The id of the store.
             */
            store_id?: string;
        };
        /**
         * The settings for the Automation workflow.
         */
        settings?: {
            /**
             * The title of the Automation.
             */
            title?: string;
            /**
             * The 'from' name for the Automation (not an email address).
             */
            from_name?: string;
            /**
             * The reply-to email address for the Automation.
             */
            reply_to?: string;
            /**
             * Whether to use Mailchimp Conversation feature to manage replies
             */
            use_conversation?: boolean;
            /**
             * The Automation's custom 'To' name, typically the first name [audience field](https://mailchimp.com/help/getting-started-with-merge-tags/).
             */
            to_name?: string;
            /**
             * Whether Mailchimp [authenticated](https://mailchimp.com/help/about-email-authentication/) the Automation. Defaults to `true`.
             */
            authenticate?: boolean;
            /**
             * Whether to automatically append Mailchimp's [default footer](https://mailchimp.com/help/about-campaign-footers/) to the Automation.
             */
            auto_footer?: boolean;
            /**
             * Whether to automatically inline the CSS included with the Automation content.
             */
            inline_css?: boolean;
        };
        /**
         * The tracking options for the Automation.
         */
        tracking?: {
            /**
             * Whether to [track opens](https://mailchimp.com/help/about-open-tracking/). Defaults to `true`.
             */
            opens?: boolean;
            /**
             * Whether to [track clicks](https://mailchimp.com/help/enable-and-view-click-tracking/) in the HTML version of the Automation. Defaults to `true`.
             */
            html_clicks?: boolean;
            /**
             * Whether to [track clicks](https://mailchimp.com/help/enable-and-view-click-tracking/) in the plain-text version of the Automation. Defaults to `true`.
             */
            text_clicks?: boolean;
            /**
             * Deprecated
             */
            goal_tracking?: boolean;
            /**
             * Whether to enable e-commerce tracking.
             */
            ecomm360?: boolean;
            /**
             * The custom slug for [Google Analytics](https://mailchimp.com/help/integrate-google-analytics-with-mailchimp/) tracking (max of 50 bytes).
             */
            google_analytics?: string;
            /**
             * The custom slug for [ClickTale](https://mailchimp.com/help/additional-tracking-options-for-campaigns/) tracking (max of 50 bytes).
             */
            clicktale?: string;
            /**
             * Deprecated
             */
            salesforce?: {
                /**
                 * Create a campaign in a connected Salesforce account.
                 */
                campaign?: boolean;
                /**
                 * Update contact notes for a campaign based on a subscriber's email address.
                 */
                notes?: boolean;
            };
            /**
             * Deprecated
             */
            capsule?: {
                /**
                 * Update contact notes for a campaign based on a subscriber's email addresses.
                 */
                notes?: boolean;
            };
        };
        /**
         * Available triggers for Automation workflows.
         */
        trigger_settings?: {
            /**
             * The type of Automation workflow.
             */
            workflow_type: 'abandonedBrowse' | 'abandonedCart' | 'api' | 'bestCustomers' | 'categoryFollowup' | 'dateAdded' | 'emailFollowup' | 'emailSeries' | 'groupAdd' | 'groupRemove' | 'mandrill' | 'productFollowup' | 'purchaseFollowup' | 'recurringEvent' | 'specialEvent' | 'visitUrl' | 'welcomeSeries';
            /**
             * The title of the workflow type.
             */
            readonly workflow_title?: string;
            /**
             * A workflow's runtime settings for an Automation.
             */
            runtime?: {
                /**
                 * The days an Automation workflow can send.
                 */
                days?: Array<'sunday' | 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday'>;
                /**
                 * The hours an Automation workflow can send.
                 */
                hours?: {
                    /**
                     * When to send the Automation email.
                     */
                    type: 'send_asap' | 'send_between' | 'send_at';
                };
            };
            /**
             * The number of emails in the Automation workflow.
             */
            readonly workflow_emails_count?: number;
        };
        /**
         * A summary of opens and clicks for sent campaigns.
         */
        report_summary?: {
            /**
             * The total number of opens for a campaign.
             */
            readonly opens?: number;
            /**
             * The number of unique opens.
             */
            readonly unique_opens?: number;
            /**
             * The number of unique opens divided by the total number of successful deliveries.
             */
            readonly open_rate?: number;
            /**
             * The total number of clicks for an campaign.
             */
            readonly clicks?: number;
            /**
             * The number of unique clicks.
             */
            readonly subscriber_clicks?: number;
            /**
             * The number of unique clicks, divided by the total number of successful deliveries.
             */
            readonly click_rate?: number;
        };
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
            method: 'POST',
            url: '/automations',
            body: body,
        });
    }

    /**
     * Get automation info
     * Get a summary of an individual classic automation workflow's settings and content. The `trigger_settings` object returns information for the first email in the workflow.
     * @returns any
     * @throws ApiError
     */
    public getAutomationsId({
        workflowId,
        fields,
        excludeFields,
    }: {
        /**
         * The unique id for the Automation workflow.
         */
        workflowId: string,
        /**
         * A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
         */
        fields?: Array<string>,
        /**
         * A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
         */
        excludeFields?: Array<string>,
    }): CancelablePromise<{
        /**
         * A string that identifies the Automation.
         */
        readonly id?: string;
        /**
         * The date and time the Automation was created in ISO 8601 format.
         */
        readonly create_time?: string;
        /**
         * The date and time the Automation was started in ISO 8601 format.
         */
        readonly start_time?: string;
        /**
         * The current status of the Automation.
         */
        readonly status?: 'save' | 'paused' | 'sending';
        /**
         * The total number of emails sent for the Automation.
         */
        readonly emails_sent?: number;
        /**
         * List settings for the Automation.
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
             * List Name.
             */
            list_name?: string;
            /**
             * An object representing all segmentation options.
             */
            segment_opts?: {
                /**
                 * The id for an existing saved segment.
                 */
                saved_segment_id?: number;
                /**
                 * Segment match type.
                 */
                match?: 'any' | 'all';
                /**
                 * Segment match conditions. There are multiple possible types, see the [condition types documentation](https://mailchimp.com/developer/marketing/docs/alternative-schemas/#segment-condition-schemas).
                 */
                conditions?: Array<any>;
            };
            /**
             * The id of the store.
             */
            store_id?: string;
        };
        /**
         * The settings for the Automation workflow.
         */
        settings?: {
            /**
             * The title of the Automation.
             */
            title?: string;
            /**
             * The 'from' name for the Automation (not an email address).
             */
            from_name?: string;
            /**
             * The reply-to email address for the Automation.
             */
            reply_to?: string;
            /**
             * Whether to use Mailchimp Conversation feature to manage replies
             */
            use_conversation?: boolean;
            /**
             * The Automation's custom 'To' name, typically the first name [audience field](https://mailchimp.com/help/getting-started-with-merge-tags/).
             */
            to_name?: string;
            /**
             * Whether Mailchimp [authenticated](https://mailchimp.com/help/about-email-authentication/) the Automation. Defaults to `true`.
             */
            authenticate?: boolean;
            /**
             * Whether to automatically append Mailchimp's [default footer](https://mailchimp.com/help/about-campaign-footers/) to the Automation.
             */
            auto_footer?: boolean;
            /**
             * Whether to automatically inline the CSS included with the Automation content.
             */
            inline_css?: boolean;
        };
        /**
         * The tracking options for the Automation.
         */
        tracking?: {
            /**
             * Whether to [track opens](https://mailchimp.com/help/about-open-tracking/). Defaults to `true`.
             */
            opens?: boolean;
            /**
             * Whether to [track clicks](https://mailchimp.com/help/enable-and-view-click-tracking/) in the HTML version of the Automation. Defaults to `true`.
             */
            html_clicks?: boolean;
            /**
             * Whether to [track clicks](https://mailchimp.com/help/enable-and-view-click-tracking/) in the plain-text version of the Automation. Defaults to `true`.
             */
            text_clicks?: boolean;
            /**
             * Deprecated
             */
            goal_tracking?: boolean;
            /**
             * Whether to enable e-commerce tracking.
             */
            ecomm360?: boolean;
            /**
             * The custom slug for [Google Analytics](https://mailchimp.com/help/integrate-google-analytics-with-mailchimp/) tracking (max of 50 bytes).
             */
            google_analytics?: string;
            /**
             * The custom slug for [ClickTale](https://mailchimp.com/help/additional-tracking-options-for-campaigns/) tracking (max of 50 bytes).
             */
            clicktale?: string;
            /**
             * Deprecated
             */
            salesforce?: {
                /**
                 * Create a campaign in a connected Salesforce account.
                 */
                campaign?: boolean;
                /**
                 * Update contact notes for a campaign based on a subscriber's email address.
                 */
                notes?: boolean;
            };
            /**
             * Deprecated
             */
            capsule?: {
                /**
                 * Update contact notes for a campaign based on a subscriber's email addresses.
                 */
                notes?: boolean;
            };
        };
        /**
         * Available triggers for Automation workflows.
         */
        trigger_settings?: {
            /**
             * The type of Automation workflow.
             */
            workflow_type: 'abandonedBrowse' | 'abandonedCart' | 'api' | 'bestCustomers' | 'categoryFollowup' | 'dateAdded' | 'emailFollowup' | 'emailSeries' | 'groupAdd' | 'groupRemove' | 'mandrill' | 'productFollowup' | 'purchaseFollowup' | 'recurringEvent' | 'specialEvent' | 'visitUrl' | 'welcomeSeries';
            /**
             * The title of the workflow type.
             */
            readonly workflow_title?: string;
            /**
             * A workflow's runtime settings for an Automation.
             */
            runtime?: {
                /**
                 * The days an Automation workflow can send.
                 */
                days?: Array<'sunday' | 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday'>;
                /**
                 * The hours an Automation workflow can send.
                 */
                hours?: {
                    /**
                     * When to send the Automation email.
                     */
                    type: 'send_asap' | 'send_between' | 'send_at';
                };
            };
            /**
             * The number of emails in the Automation workflow.
             */
            readonly workflow_emails_count?: number;
        };
        /**
         * A summary of opens and clicks for sent campaigns.
         */
        report_summary?: {
            /**
             * The total number of opens for a campaign.
             */
            readonly opens?: number;
            /**
             * The number of unique opens.
             */
            readonly unique_opens?: number;
            /**
             * The number of unique opens divided by the total number of successful deliveries.
             */
            readonly open_rate?: number;
            /**
             * The total number of clicks for an campaign.
             */
            readonly clicks?: number;
            /**
             * The number of unique clicks.
             */
            readonly subscriber_clicks?: number;
            /**
             * The number of unique clicks, divided by the total number of successful deliveries.
             */
            readonly click_rate?: number;
        };
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
            url: '/automations/{workflow_id}',
            path: {
                'workflow_id': workflowId,
            },
            query: {
                'fields': fields,
                'exclude_fields': excludeFields,
            },
        });
    }

    /**
     * Pause automation emails
     * Pause all emails in a specific classic automation workflow.
     * @returns any An error generated by the Mailchimp API.
     * @throws ApiError
     */
    public postAutomationsIdActionsPauseAllEmails({
        workflowId,
    }: {
        /**
         * The unique id for the Automation workflow.
         */
        workflowId: string,
    }): CancelablePromise<{
        /**
         * An absolute URI that identifies the problem type. When dereferenced, it should provide human-readable documentation for the problem type.
         */
        type: string;
        /**
         * A short, human-readable summary of the problem type. It shouldn't change based on the occurrence of the problem, except for purposes of localization.
         */
        title: string;
        /**
         * The HTTP status code (RFC2616, Section 6) generated by the origin server for this occurrence of the problem.
         */
        status: number;
        /**
         * A human-readable explanation specific to this occurrence of the problem. [Learn more about errors](/developer/guides/get-started-with-mailchimp-api-3/#Errors).
         */
        detail: string;
        /**
         * A string that identifies this specific occurrence of the problem. Please provide this ID when contacting support.
         */
        instance: string;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/automations/{workflow_id}/actions/pause-all-emails',
            path: {
                'workflow_id': workflowId,
            },
        });
    }

    /**
     * Start automation emails
     * Start all emails in a classic automation workflow.
     * @returns any An error generated by the Mailchimp API.
     * @throws ApiError
     */
    public postAutomationsIdActionsStartAllEmails({
        workflowId,
    }: {
        /**
         * The unique id for the Automation workflow.
         */
        workflowId: string,
    }): CancelablePromise<{
        /**
         * An absolute URI that identifies the problem type. When dereferenced, it should provide human-readable documentation for the problem type.
         */
        type: string;
        /**
         * A short, human-readable summary of the problem type. It shouldn't change based on the occurrence of the problem, except for purposes of localization.
         */
        title: string;
        /**
         * The HTTP status code (RFC2616, Section 6) generated by the origin server for this occurrence of the problem.
         */
        status: number;
        /**
         * A human-readable explanation specific to this occurrence of the problem. [Learn more about errors](/developer/guides/get-started-with-mailchimp-api-3/#Errors).
         */
        detail: string;
        /**
         * A string that identifies this specific occurrence of the problem. Please provide this ID when contacting support.
         */
        instance: string;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/automations/{workflow_id}/actions/start-all-emails',
            path: {
                'workflow_id': workflowId,
            },
        });
    }

    /**
     * Archive automation
     * Archiving will permanently end your automation and keep the report data. You’ll be able to replicate your archived automation, but you can’t restart it.
     * @returns any An error generated by the Mailchimp API.
     * @throws ApiError
     */
    public archiveAutomations({
        workflowId,
    }: {
        /**
         * The unique id for the Automation workflow.
         */
        workflowId: string,
    }): CancelablePromise<{
        /**
         * An absolute URI that identifies the problem type. When dereferenced, it should provide human-readable documentation for the problem type.
         */
        type: string;
        /**
         * A short, human-readable summary of the problem type. It shouldn't change based on the occurrence of the problem, except for purposes of localization.
         */
        title: string;
        /**
         * The HTTP status code (RFC2616, Section 6) generated by the origin server for this occurrence of the problem.
         */
        status: number;
        /**
         * A human-readable explanation specific to this occurrence of the problem. [Learn more about errors](/developer/guides/get-started-with-mailchimp-api-3/#Errors).
         */
        detail: string;
        /**
         * A string that identifies this specific occurrence of the problem. Please provide this ID when contacting support.
         */
        instance: string;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/automations/{workflow_id}/actions/archive',
            path: {
                'workflow_id': workflowId,
            },
        });
    }

    /**
     * List automated emails
     * Get a summary of the emails in a classic automation workflow.
     * @returns any
     * @throws ApiError
     */
    public getAutomationsIdEmails({
        workflowId,
    }: {
        /**
         * The unique id for the Automation workflow.
         */
        workflowId: string,
    }): CancelablePromise<{
        /**
         * An array of objects, each representing an email in an Automation workflow.
         */
        emails?: Array<{
            /**
             * A string that uniquely identifies the Automation email.
             */
            readonly id?: string;
            /**
             * The ID used in the Mailchimp web application. View this automation in your Mailchimp account at `https://{dc}.admin.mailchimp.com/campaigns/show/?id={web_id}`.
             */
            readonly web_id?: number;
            /**
             * A string that uniquely identifies an Automation workflow.
             */
            readonly workflow_id?: string;
            /**
             * The position of an Automation email in a workflow.
             */
            readonly position?: number;
            /**
             * The delay settings for an Automation email.
             */
            delay?: {
                /**
                 * The delay amount for an Automation email.
                 */
                readonly amount?: number;
                /**
                 * The type of delay for an Automation email.
                 */
                type?: 'now' | 'day' | 'hour' | 'week';
                /**
                 * Whether the delay settings describe before or after the delay action of an Automation email.
                 */
                direction?: 'before' | 'after';
                /**
                 * The action that triggers the delay of an Automation email.
                 */
                action?: 'previous_campaign_sent' | 'previous_campaign_opened' | 'previous_campaign_not_opened' | 'previous_campaign_clicked_any' | 'previous_campaign_not_clicked_any' | 'previous_campaign_specific_clicked' | 'ecomm_bought_any' | 'ecomm_bought_product' | 'ecomm_bought_category' | 'ecomm_not_bought_any' | 'ecomm_abandoned_cart' | 'campaign_sent' | 'opened_email' | 'not_opened_email' | 'clicked_email' | 'not_clicked_email' | 'campaign_specific_clicked' | 'manual' | 'signup' | 'merge_changed' | 'group_add' | 'group_remove' | 'mandrill_sent' | 'mandrill_opened' | 'mandrill_clicked' | 'mandrill_any' | 'api' | 'goal' | 'annual' | 'birthday' | 'date' | 'date_added' | 'tag_add';
                /**
                 * The user-friendly description of the action that triggers an Automation email.
                 */
                readonly action_description?: string;
                /**
                 * The user-friendly description of the delay and trigger action settings for an Automation email.
                 */
                readonly full_description?: string;
            };
            /**
             * The date and time the campaign was created in ISO 8601 format.
             */
            readonly create_time?: string;
            /**
             * The date and time the campaign was started in ISO 8601 format.
             */
            readonly start_time?: string;
            /**
             * The link to the campaign's archive version in ISO 8601 format.
             */
            readonly archive_url?: string;
            /**
             * The current status of the campaign.
             */
            readonly status?: 'save' | 'paused' | 'sending';
            /**
             * The total number of emails sent for this campaign.
             */
            readonly emails_sent?: number;
            /**
             *  The date and time a campaign was sent in ISO 8601 format
             */
            readonly send_time?: string;
            /**
             * How the campaign's content is put together ('template', 'drag_and_drop', 'html', 'url').
             */
            readonly content_type?: string;
            /**
             * Determines if the automation email needs its blocks refreshed by opening the web-based campaign editor.
             */
            readonly needs_block_refresh?: boolean;
            /**
             * Determines if the campaign contains the *|BRAND:LOGO|* merge tag.
             */
            readonly has_logo_merge_tag?: boolean;
            /**
             * List settings for the campaign.
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
                 * A description of the [segment](https://mailchimp.com/help/getting-started-with-groups/) used for the campaign. Formatted as a string marked up with HTML.
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
             * Settings for the campaign including the email subject, from name, and from email address.
             */
            settings?: {
                /**
                 * The subject line for the campaign.
                 */
                subject_line?: string;
                /**
                 * The preview text for the campaign.
                 */
                preview_text?: string;
                /**
                 * The title of the campaign.
                 */
                title?: string;
                /**
                 * The 'from' name on the campaign (not an email address).
                 */
                from_name?: string;
                /**
                 * The reply-to email address for the campaign.
                 */
                reply_to?: string;
                /**
                 * Whether Mailchimp [authenticated](https://mailchimp.com/help/about-email-authentication/) the campaign. Defaults to `true`.
                 */
                authenticate?: boolean;
                /**
                 * Automatically append Mailchimp's [default footer](https://mailchimp.com/help/about-campaign-footers/) to the campaign.
                 */
                auto_footer?: boolean;
                /**
                 * Automatically inline the CSS included with the campaign content.
                 */
                inline_css?: boolean;
                /**
                 * Automatically tweet a link to the [campaign archive](https://mailchimp.com/help/about-email-campaign-archives-and-pages/) page when the campaign is sent.
                 */
                auto_tweet?: boolean;
                /**
                 * An array of [Facebook](https://mailchimp.com/help/connect-or-disconnect-the-facebook-integration/) page ids to auto-post to.
                 */
                auto_fb_post?: Array<string>;
                /**
                 * Allows Facebook comments on the campaign (also force-enables the Campaign Archive toolbar). Defaults to `true`.
                 */
                fb_comments?: boolean;
                /**
                 * The id for the template used in this campaign.
                 */
                template_id?: number;
                /**
                 * Whether the campaign uses the drag-and-drop editor.
                 */
                readonly drag_and_drop?: boolean;
            };
            /**
             * The tracking options for a campaign.
             */
            tracking?: {
                /**
                 * Whether to [track opens](https://mailchimp.com/help/about-open-tracking/). Defaults to `true`.
                 */
                opens?: boolean;
                /**
                 * Whether to [track clicks](https://mailchimp.com/help/enable-and-view-click-tracking/) in the HTML version of the campaign. Defaults to `true`.
                 */
                html_clicks?: boolean;
                /**
                 * Whether to [track clicks](https://mailchimp.com/help/enable-and-view-click-tracking/) in the plain-text version of the campaign. Defaults to `true`.
                 */
                text_clicks?: boolean;
                /**
                 * Deprecated
                 */
                goal_tracking?: boolean;
                /**
                 * Whether to enable e-commerce tracking.
                 */
                ecomm360?: boolean;
                /**
                 * The custom slug for [Google Analytics](https://mailchimp.com/help/integrate-google-analytics-with-mailchimp/) tracking (max of 50 bytes).
                 */
                google_analytics?: string;
                /**
                 * The custom slug for [Click Tale](https://mailchimp.com/help/additional-tracking-options-for-campaigns/) tracking (max of 50 bytes).
                 */
                clicktale?: string;
                /**
                 * Deprecated
                 */
                salesforce?: {
                    /**
                     * Create a campaign in a connected Salesforce account.
                     */
                    campaign?: boolean;
                    /**
                     * Update contact notes for a campaign based on a subscriber's email address.
                     */
                    notes?: boolean;
                };
                /**
                 * Deprecated
                 */
                capsule?: {
                    /**
                     * Update contact notes for a campaign based on a subscriber's email address.
                     */
                    notes?: boolean;
                };
            };
            /**
             * The preview for the campaign, rendered by social networks like Facebook and Twitter. [Learn more](https://mailchimp.com/help/enable-and-customize-social-cards/).
             */
            social_card?: {
                /**
                 * The url for the header image for the card.
                 */
                image_url?: string;
                /**
                 * A short summary of the campaign to display.
                 */
                description?: string;
                /**
                 * The title for the card. Typically the subject line of the campaign.
                 */
                title?: string;
            };
            /**
             * Available triggers for Automation workflows.
             */
            trigger_settings?: {
                /**
                 * The type of Automation workflow.
                 */
                workflow_type: 'abandonedBrowse' | 'abandonedCart' | 'api' | 'bestCustomers' | 'categoryFollowup' | 'dateAdded' | 'emailFollowup' | 'emailSeries' | 'groupAdd' | 'groupRemove' | 'mandrill' | 'productFollowup' | 'purchaseFollowup' | 'recurringEvent' | 'specialEvent' | 'visitUrl' | 'welcomeSeries';
                /**
                 * The title of the workflow type.
                 */
                readonly workflow_title?: string;
                /**
                 * A workflow's runtime settings for an Automation.
                 */
                runtime?: {
                    /**
                     * The days an Automation workflow can send.
                     */
                    days?: Array<'sunday' | 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday'>;
                    /**
                     * The hours an Automation workflow can send.
                     */
                    hours?: {
                        /**
                         * When to send the Automation email.
                         */
                        type: 'send_asap' | 'send_between' | 'send_at';
                    };
                };
                /**
                 * The number of emails in the Automation workflow.
                 */
                readonly workflow_emails_count?: number;
            };
            /**
             * For sent campaigns, a summary of opens and clicks.
             */
            report_summary?: {
                /**
                 * The total number of opens for a campaign.
                 */
                readonly opens?: number;
                /**
                 * The number of unique opens.
                 */
                readonly unique_opens?: number;
                /**
                 * The number of unique opens divided by the total number of successful deliveries.
                 */
                readonly open_rate?: number;
                /**
                 * The total number of clicks for an campaign.
                 */
                readonly clicks?: number;
                /**
                 * The number of unique clicks.
                 */
                readonly subscriber_clicks?: number;
                /**
                 * The number of unique clicks divided by the total number of successful deliveries.
                 */
                readonly click_rate?: number;
            };
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
        }>;
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
            url: '/automations/{workflow_id}/emails',
            path: {
                'workflow_id': workflowId,
            },
        });
    }

    /**
     * Get workflow email info
     * Get information about an individual classic automation workflow email.
     * @returns any
     * @throws ApiError
     */
    public getAutomationsIdEmailsId({
        workflowId,
        workflowEmailId,
    }: {
        /**
         * The unique id for the Automation workflow.
         */
        workflowId: string,
        /**
         * The unique id for the Automation workflow email.
         */
        workflowEmailId: string,
    }): CancelablePromise<{
        /**
         * A string that uniquely identifies the Automation email.
         */
        readonly id?: string;
        /**
         * The ID used in the Mailchimp web application. View this automation in your Mailchimp account at `https://{dc}.admin.mailchimp.com/campaigns/show/?id={web_id}`.
         */
        readonly web_id?: number;
        /**
         * A string that uniquely identifies an Automation workflow.
         */
        readonly workflow_id?: string;
        /**
         * The position of an Automation email in a workflow.
         */
        readonly position?: number;
        /**
         * The delay settings for an Automation email.
         */
        delay?: {
            /**
             * The delay amount for an Automation email.
             */
            readonly amount?: number;
            /**
             * The type of delay for an Automation email.
             */
            type?: 'now' | 'day' | 'hour' | 'week';
            /**
             * Whether the delay settings describe before or after the delay action of an Automation email.
             */
            direction?: 'before' | 'after';
            /**
             * The action that triggers the delay of an Automation email.
             */
            action?: 'previous_campaign_sent' | 'previous_campaign_opened' | 'previous_campaign_not_opened' | 'previous_campaign_clicked_any' | 'previous_campaign_not_clicked_any' | 'previous_campaign_specific_clicked' | 'ecomm_bought_any' | 'ecomm_bought_product' | 'ecomm_bought_category' | 'ecomm_not_bought_any' | 'ecomm_abandoned_cart' | 'campaign_sent' | 'opened_email' | 'not_opened_email' | 'clicked_email' | 'not_clicked_email' | 'campaign_specific_clicked' | 'manual' | 'signup' | 'merge_changed' | 'group_add' | 'group_remove' | 'mandrill_sent' | 'mandrill_opened' | 'mandrill_clicked' | 'mandrill_any' | 'api' | 'goal' | 'annual' | 'birthday' | 'date' | 'date_added' | 'tag_add';
            /**
             * The user-friendly description of the action that triggers an Automation email.
             */
            readonly action_description?: string;
            /**
             * The user-friendly description of the delay and trigger action settings for an Automation email.
             */
            readonly full_description?: string;
        };
        /**
         * The date and time the campaign was created in ISO 8601 format.
         */
        readonly create_time?: string;
        /**
         * The date and time the campaign was started in ISO 8601 format.
         */
        readonly start_time?: string;
        /**
         * The link to the campaign's archive version in ISO 8601 format.
         */
        readonly archive_url?: string;
        /**
         * The current status of the campaign.
         */
        readonly status?: 'save' | 'paused' | 'sending';
        /**
         * The total number of emails sent for this campaign.
         */
        readonly emails_sent?: number;
        /**
         *  The date and time a campaign was sent in ISO 8601 format
         */
        readonly send_time?: string;
        /**
         * How the campaign's content is put together ('template', 'drag_and_drop', 'html', 'url').
         */
        readonly content_type?: string;
        /**
         * Determines if the automation email needs its blocks refreshed by opening the web-based campaign editor.
         */
        readonly needs_block_refresh?: boolean;
        /**
         * Determines if the campaign contains the *|BRAND:LOGO|* merge tag.
         */
        readonly has_logo_merge_tag?: boolean;
        /**
         * List settings for the campaign.
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
             * A description of the [segment](https://mailchimp.com/help/getting-started-with-groups/) used for the campaign. Formatted as a string marked up with HTML.
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
         * Settings for the campaign including the email subject, from name, and from email address.
         */
        settings?: {
            /**
             * The subject line for the campaign.
             */
            subject_line?: string;
            /**
             * The preview text for the campaign.
             */
            preview_text?: string;
            /**
             * The title of the campaign.
             */
            title?: string;
            /**
             * The 'from' name on the campaign (not an email address).
             */
            from_name?: string;
            /**
             * The reply-to email address for the campaign.
             */
            reply_to?: string;
            /**
             * Whether Mailchimp [authenticated](https://mailchimp.com/help/about-email-authentication/) the campaign. Defaults to `true`.
             */
            authenticate?: boolean;
            /**
             * Automatically append Mailchimp's [default footer](https://mailchimp.com/help/about-campaign-footers/) to the campaign.
             */
            auto_footer?: boolean;
            /**
             * Automatically inline the CSS included with the campaign content.
             */
            inline_css?: boolean;
            /**
             * Automatically tweet a link to the [campaign archive](https://mailchimp.com/help/about-email-campaign-archives-and-pages/) page when the campaign is sent.
             */
            auto_tweet?: boolean;
            /**
             * An array of [Facebook](https://mailchimp.com/help/connect-or-disconnect-the-facebook-integration/) page ids to auto-post to.
             */
            auto_fb_post?: Array<string>;
            /**
             * Allows Facebook comments on the campaign (also force-enables the Campaign Archive toolbar). Defaults to `true`.
             */
            fb_comments?: boolean;
            /**
             * The id for the template used in this campaign.
             */
            template_id?: number;
            /**
             * Whether the campaign uses the drag-and-drop editor.
             */
            readonly drag_and_drop?: boolean;
        };
        /**
         * The tracking options for a campaign.
         */
        tracking?: {
            /**
             * Whether to [track opens](https://mailchimp.com/help/about-open-tracking/). Defaults to `true`.
             */
            opens?: boolean;
            /**
             * Whether to [track clicks](https://mailchimp.com/help/enable-and-view-click-tracking/) in the HTML version of the campaign. Defaults to `true`.
             */
            html_clicks?: boolean;
            /**
             * Whether to [track clicks](https://mailchimp.com/help/enable-and-view-click-tracking/) in the plain-text version of the campaign. Defaults to `true`.
             */
            text_clicks?: boolean;
            /**
             * Deprecated
             */
            goal_tracking?: boolean;
            /**
             * Whether to enable e-commerce tracking.
             */
            ecomm360?: boolean;
            /**
             * The custom slug for [Google Analytics](https://mailchimp.com/help/integrate-google-analytics-with-mailchimp/) tracking (max of 50 bytes).
             */
            google_analytics?: string;
            /**
             * The custom slug for [Click Tale](https://mailchimp.com/help/additional-tracking-options-for-campaigns/) tracking (max of 50 bytes).
             */
            clicktale?: string;
            /**
             * Deprecated
             */
            salesforce?: {
                /**
                 * Create a campaign in a connected Salesforce account.
                 */
                campaign?: boolean;
                /**
                 * Update contact notes for a campaign based on a subscriber's email address.
                 */
                notes?: boolean;
            };
            /**
             * Deprecated
             */
            capsule?: {
                /**
                 * Update contact notes for a campaign based on a subscriber's email address.
                 */
                notes?: boolean;
            };
        };
        /**
         * The preview for the campaign, rendered by social networks like Facebook and Twitter. [Learn more](https://mailchimp.com/help/enable-and-customize-social-cards/).
         */
        social_card?: {
            /**
             * The url for the header image for the card.
             */
            image_url?: string;
            /**
             * A short summary of the campaign to display.
             */
            description?: string;
            /**
             * The title for the card. Typically the subject line of the campaign.
             */
            title?: string;
        };
        /**
         * Available triggers for Automation workflows.
         */
        trigger_settings?: {
            /**
             * The type of Automation workflow.
             */
            workflow_type: 'abandonedBrowse' | 'abandonedCart' | 'api' | 'bestCustomers' | 'categoryFollowup' | 'dateAdded' | 'emailFollowup' | 'emailSeries' | 'groupAdd' | 'groupRemove' | 'mandrill' | 'productFollowup' | 'purchaseFollowup' | 'recurringEvent' | 'specialEvent' | 'visitUrl' | 'welcomeSeries';
            /**
             * The title of the workflow type.
             */
            readonly workflow_title?: string;
            /**
             * A workflow's runtime settings for an Automation.
             */
            runtime?: {
                /**
                 * The days an Automation workflow can send.
                 */
                days?: Array<'sunday' | 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday'>;
                /**
                 * The hours an Automation workflow can send.
                 */
                hours?: {
                    /**
                     * When to send the Automation email.
                     */
                    type: 'send_asap' | 'send_between' | 'send_at';
                };
            };
            /**
             * The number of emails in the Automation workflow.
             */
            readonly workflow_emails_count?: number;
        };
        /**
         * For sent campaigns, a summary of opens and clicks.
         */
        report_summary?: {
            /**
             * The total number of opens for a campaign.
             */
            readonly opens?: number;
            /**
             * The number of unique opens.
             */
            readonly unique_opens?: number;
            /**
             * The number of unique opens divided by the total number of successful deliveries.
             */
            readonly open_rate?: number;
            /**
             * The total number of clicks for an campaign.
             */
            readonly clicks?: number;
            /**
             * The number of unique clicks.
             */
            readonly subscriber_clicks?: number;
            /**
             * The number of unique clicks divided by the total number of successful deliveries.
             */
            readonly click_rate?: number;
        };
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
            url: '/automations/{workflow_id}/emails/{workflow_email_id}',
            path: {
                'workflow_id': workflowId,
                'workflow_email_id': workflowEmailId,
            },
        });
    }

    /**
     * Delete workflow email
     * Removes an individual classic automation workflow email. Emails from certain workflow types, including the Abandoned Cart Email (abandonedCart) and Product Retargeting Email (abandonedBrowse) Workflows, cannot be deleted.
     * @returns any An error generated by the Mailchimp API.
     * @throws ApiError
     */
    public deleteAutomationsIdEmailsId({
        workflowId,
        workflowEmailId,
    }: {
        /**
         * The unique id for the Automation workflow.
         */
        workflowId: string,
        /**
         * The unique id for the Automation workflow email.
         */
        workflowEmailId: string,
    }): CancelablePromise<{
        /**
         * An absolute URI that identifies the problem type. When dereferenced, it should provide human-readable documentation for the problem type.
         */
        type: string;
        /**
         * A short, human-readable summary of the problem type. It shouldn't change based on the occurrence of the problem, except for purposes of localization.
         */
        title: string;
        /**
         * The HTTP status code (RFC2616, Section 6) generated by the origin server for this occurrence of the problem.
         */
        status: number;
        /**
         * A human-readable explanation specific to this occurrence of the problem. [Learn more about errors](/developer/guides/get-started-with-mailchimp-api-3/#Errors).
         */
        detail: string;
        /**
         * A string that identifies this specific occurrence of the problem. Please provide this ID when contacting support.
         */
        instance: string;
    }> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/automations/{workflow_id}/emails/{workflow_email_id}',
            path: {
                'workflow_id': workflowId,
                'workflow_email_id': workflowEmailId,
            },
        });
    }

    /**
     * Update workflow email
     * Update settings for a classic automation workflow email.  Only works with workflows of type: abandonedBrowse, abandonedCart, emailFollowup, or singleWelcome.
     * @returns any
     * @throws ApiError
     */
    public patchAutomationEmailWorkflowId({
        workflowId,
        workflowEmailId,
        body,
    }: {
        /**
         * The unique id for the Automation workflow.
         */
        workflowId: string,
        /**
         * The unique id for the Automation workflow email.
         */
        workflowEmailId: string,
        body: {
            /**
             * Settings for the campaign including the email subject, from name, and from email address.
             */
            settings?: {
                /**
                 * The subject line for the campaign.
                 */
                subject_line?: string;
                /**
                 * The preview text for the campaign.
                 */
                preview_text?: string;
                /**
                 * The title of the Automation.
                 */
                title?: string;
                /**
                 * The 'from' name for the Automation (not an email address).
                 */
                from_name?: string;
                /**
                 * The reply-to email address for the Automation.
                 */
                reply_to?: string;
            };
            /**
             * The delay settings for an automation email.
             */
            delay?: {
                /**
                 * The delay amount for an automation email.
                 */
                amount?: number;
                /**
                 * The type of delay for an automation email.
                 */
                type?: 'now' | 'day' | 'hour' | 'week';
                /**
                 * Whether the delay settings describe before or after the delay action of an automation email.
                 */
                direction?: 'after';
                /**
                 * The action that triggers the delay of an automation emails.
                 */
                action: 'signup' | 'ecomm_abandoned_browse' | 'ecomm_abandoned_cart';
            };
        },
    }): CancelablePromise<{
        /**
         * A string that uniquely identifies the Automation email.
         */
        readonly id?: string;
        /**
         * The ID used in the Mailchimp web application. View this automation in your Mailchimp account at `https://{dc}.admin.mailchimp.com/campaigns/show/?id={web_id}`.
         */
        readonly web_id?: number;
        /**
         * A string that uniquely identifies an Automation workflow.
         */
        readonly workflow_id?: string;
        /**
         * The position of an Automation email in a workflow.
         */
        readonly position?: number;
        /**
         * The delay settings for an Automation email.
         */
        delay?: {
            /**
             * The delay amount for an Automation email.
             */
            readonly amount?: number;
            /**
             * The type of delay for an Automation email.
             */
            type?: 'now' | 'day' | 'hour' | 'week';
            /**
             * Whether the delay settings describe before or after the delay action of an Automation email.
             */
            direction?: 'before' | 'after';
            /**
             * The action that triggers the delay of an Automation email.
             */
            action?: 'previous_campaign_sent' | 'previous_campaign_opened' | 'previous_campaign_not_opened' | 'previous_campaign_clicked_any' | 'previous_campaign_not_clicked_any' | 'previous_campaign_specific_clicked' | 'ecomm_bought_any' | 'ecomm_bought_product' | 'ecomm_bought_category' | 'ecomm_not_bought_any' | 'ecomm_abandoned_cart' | 'campaign_sent' | 'opened_email' | 'not_opened_email' | 'clicked_email' | 'not_clicked_email' | 'campaign_specific_clicked' | 'manual' | 'signup' | 'merge_changed' | 'group_add' | 'group_remove' | 'mandrill_sent' | 'mandrill_opened' | 'mandrill_clicked' | 'mandrill_any' | 'api' | 'goal' | 'annual' | 'birthday' | 'date' | 'date_added' | 'tag_add';
            /**
             * The user-friendly description of the action that triggers an Automation email.
             */
            readonly action_description?: string;
            /**
             * The user-friendly description of the delay and trigger action settings for an Automation email.
             */
            readonly full_description?: string;
        };
        /**
         * The date and time the campaign was created in ISO 8601 format.
         */
        readonly create_time?: string;
        /**
         * The date and time the campaign was started in ISO 8601 format.
         */
        readonly start_time?: string;
        /**
         * The link to the campaign's archive version in ISO 8601 format.
         */
        readonly archive_url?: string;
        /**
         * The current status of the campaign.
         */
        readonly status?: 'save' | 'paused' | 'sending';
        /**
         * The total number of emails sent for this campaign.
         */
        readonly emails_sent?: number;
        /**
         *  The date and time a campaign was sent in ISO 8601 format
         */
        readonly send_time?: string;
        /**
         * How the campaign's content is put together ('template', 'drag_and_drop', 'html', 'url').
         */
        readonly content_type?: string;
        /**
         * Determines if the automation email needs its blocks refreshed by opening the web-based campaign editor.
         */
        readonly needs_block_refresh?: boolean;
        /**
         * Determines if the campaign contains the *|BRAND:LOGO|* merge tag.
         */
        readonly has_logo_merge_tag?: boolean;
        /**
         * List settings for the campaign.
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
             * A description of the [segment](https://mailchimp.com/help/getting-started-with-groups/) used for the campaign. Formatted as a string marked up with HTML.
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
         * Settings for the campaign including the email subject, from name, and from email address.
         */
        settings?: {
            /**
             * The subject line for the campaign.
             */
            subject_line?: string;
            /**
             * The preview text for the campaign.
             */
            preview_text?: string;
            /**
             * The title of the campaign.
             */
            title?: string;
            /**
             * The 'from' name on the campaign (not an email address).
             */
            from_name?: string;
            /**
             * The reply-to email address for the campaign.
             */
            reply_to?: string;
            /**
             * Whether Mailchimp [authenticated](https://mailchimp.com/help/about-email-authentication/) the campaign. Defaults to `true`.
             */
            authenticate?: boolean;
            /**
             * Automatically append Mailchimp's [default footer](https://mailchimp.com/help/about-campaign-footers/) to the campaign.
             */
            auto_footer?: boolean;
            /**
             * Automatically inline the CSS included with the campaign content.
             */
            inline_css?: boolean;
            /**
             * Automatically tweet a link to the [campaign archive](https://mailchimp.com/help/about-email-campaign-archives-and-pages/) page when the campaign is sent.
             */
            auto_tweet?: boolean;
            /**
             * An array of [Facebook](https://mailchimp.com/help/connect-or-disconnect-the-facebook-integration/) page ids to auto-post to.
             */
            auto_fb_post?: Array<string>;
            /**
             * Allows Facebook comments on the campaign (also force-enables the Campaign Archive toolbar). Defaults to `true`.
             */
            fb_comments?: boolean;
            /**
             * The id for the template used in this campaign.
             */
            template_id?: number;
            /**
             * Whether the campaign uses the drag-and-drop editor.
             */
            readonly drag_and_drop?: boolean;
        };
        /**
         * The tracking options for a campaign.
         */
        tracking?: {
            /**
             * Whether to [track opens](https://mailchimp.com/help/about-open-tracking/). Defaults to `true`.
             */
            opens?: boolean;
            /**
             * Whether to [track clicks](https://mailchimp.com/help/enable-and-view-click-tracking/) in the HTML version of the campaign. Defaults to `true`.
             */
            html_clicks?: boolean;
            /**
             * Whether to [track clicks](https://mailchimp.com/help/enable-and-view-click-tracking/) in the plain-text version of the campaign. Defaults to `true`.
             */
            text_clicks?: boolean;
            /**
             * Deprecated
             */
            goal_tracking?: boolean;
            /**
             * Whether to enable e-commerce tracking.
             */
            ecomm360?: boolean;
            /**
             * The custom slug for [Google Analytics](https://mailchimp.com/help/integrate-google-analytics-with-mailchimp/) tracking (max of 50 bytes).
             */
            google_analytics?: string;
            /**
             * The custom slug for [Click Tale](https://mailchimp.com/help/additional-tracking-options-for-campaigns/) tracking (max of 50 bytes).
             */
            clicktale?: string;
            /**
             * Deprecated
             */
            salesforce?: {
                /**
                 * Create a campaign in a connected Salesforce account.
                 */
                campaign?: boolean;
                /**
                 * Update contact notes for a campaign based on a subscriber's email address.
                 */
                notes?: boolean;
            };
            /**
             * Deprecated
             */
            capsule?: {
                /**
                 * Update contact notes for a campaign based on a subscriber's email address.
                 */
                notes?: boolean;
            };
        };
        /**
         * The preview for the campaign, rendered by social networks like Facebook and Twitter. [Learn more](https://mailchimp.com/help/enable-and-customize-social-cards/).
         */
        social_card?: {
            /**
             * The url for the header image for the card.
             */
            image_url?: string;
            /**
             * A short summary of the campaign to display.
             */
            description?: string;
            /**
             * The title for the card. Typically the subject line of the campaign.
             */
            title?: string;
        };
        /**
         * Available triggers for Automation workflows.
         */
        trigger_settings?: {
            /**
             * The type of Automation workflow.
             */
            workflow_type: 'abandonedBrowse' | 'abandonedCart' | 'api' | 'bestCustomers' | 'categoryFollowup' | 'dateAdded' | 'emailFollowup' | 'emailSeries' | 'groupAdd' | 'groupRemove' | 'mandrill' | 'productFollowup' | 'purchaseFollowup' | 'recurringEvent' | 'specialEvent' | 'visitUrl' | 'welcomeSeries';
            /**
             * The title of the workflow type.
             */
            readonly workflow_title?: string;
            /**
             * A workflow's runtime settings for an Automation.
             */
            runtime?: {
                /**
                 * The days an Automation workflow can send.
                 */
                days?: Array<'sunday' | 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday'>;
                /**
                 * The hours an Automation workflow can send.
                 */
                hours?: {
                    /**
                     * When to send the Automation email.
                     */
                    type: 'send_asap' | 'send_between' | 'send_at';
                };
            };
            /**
             * The number of emails in the Automation workflow.
             */
            readonly workflow_emails_count?: number;
        };
        /**
         * For sent campaigns, a summary of opens and clicks.
         */
        report_summary?: {
            /**
             * The total number of opens for a campaign.
             */
            readonly opens?: number;
            /**
             * The number of unique opens.
             */
            readonly unique_opens?: number;
            /**
             * The number of unique opens divided by the total number of successful deliveries.
             */
            readonly open_rate?: number;
            /**
             * The total number of clicks for an campaign.
             */
            readonly clicks?: number;
            /**
             * The number of unique clicks.
             */
            readonly subscriber_clicks?: number;
            /**
             * The number of unique clicks divided by the total number of successful deliveries.
             */
            readonly click_rate?: number;
        };
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
            method: 'PATCH',
            url: '/automations/{workflow_id}/emails/{workflow_email_id}',
            path: {
                'workflow_id': workflowId,
                'workflow_email_id': workflowEmailId,
            },
            body: body,
        });
    }

    /**
     * List automated email subscribers
     * Get information about a classic automation email queue.
     * @returns any
     * @throws ApiError
     */
    public getAutomationsIdEmailsIdQueue({
        workflowId,
        workflowEmailId,
    }: {
        /**
         * The unique id for the Automation workflow.
         */
        workflowId: string,
        /**
         * The unique id for the Automation workflow email.
         */
        workflowEmailId: string,
    }): CancelablePromise<{
        /**
         * A string that uniquely identifies an Automation workflow.
         */
        readonly workflow_id?: string;
        /**
         * A string that uniquely identifies an email in an Automation workflow.
         */
        readonly email_id?: string;
        /**
         * An array of objects, each representing a subscriber queue for an email in an Automation workflow.
         */
        readonly queue?: Array<{
            /**
             * The MD5 hash of the lowercase version of the list member's email address.
             */
            readonly id?: string;
            /**
             * A string that uniquely identifies an Automation workflow.
             */
            readonly workflow_id?: string;
            /**
             * A string that uniquely identifies an email in an Automation workflow.
             */
            readonly email_id?: string;
            /**
             * A string that uniquely identifies a list.
             */
            readonly list_id?: string;
            /**
             * The list member's email address.
             */
            email_address: string;
            /**
             * The date and time of the next send for the workflow email in ISO 8601 format.
             */
            readonly next_send?: string;
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
        }>;
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
            url: '/automations/{workflow_id}/emails/{workflow_email_id}/queue',
            path: {
                'workflow_id': workflowId,
                'workflow_email_id': workflowEmailId,
            },
        });
    }

    /**
     * Add subscriber to workflow email
     * Manually add a subscriber to a workflow, bypassing the default trigger settings. You can also use this endpoint to trigger a series of automated emails in an API 3.0 workflow type.
     * @returns any
     * @throws ApiError
     */
    public postAutomationsIdEmailsIdQueue({
        workflowId,
        workflowEmailId,
        body,
    }: {
        /**
         * The unique id for the Automation workflow.
         */
        workflowId: string,
        /**
         * The unique id for the Automation workflow email.
         */
        workflowEmailId: string,
        body: {
            /**
             * The list member's email address.
             */
            email_address: string;
        },
    }): CancelablePromise<{
        /**
         * The MD5 hash of the lowercase version of the list member's email address.
         */
        readonly id?: string;
        /**
         * A string that uniquely identifies an Automation workflow.
         */
        readonly workflow_id?: string;
        /**
         * A string that uniquely identifies an email in an Automation workflow.
         */
        readonly email_id?: string;
        /**
         * A string that uniquely identifies a list.
         */
        readonly list_id?: string;
        /**
         * The status of the list used, namely if it's deleted or disabled.
         */
        readonly list_is_active?: boolean;
        /**
         * The list member's email address.
         */
        email_address?: string;
        /**
         * The date and time of the next send for the workflow email in ISO 8601 format.
         */
        readonly next_send?: string;
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
            method: 'POST',
            url: '/automations/{workflow_id}/emails/{workflow_email_id}/queue',
            path: {
                'workflow_id': workflowId,
                'workflow_email_id': workflowEmailId,
            },
            body: body,
        });
    }

    /**
     * Get automated email subscriber
     * Get information about a specific subscriber in a classic automation email queue.
     * @returns any
     * @throws ApiError
     */
    public getAutomationsIdEmailsIdQueueId({
        workflowId,
        workflowEmailId,
        subscriberHash,
    }: {
        /**
         * The unique id for the Automation workflow.
         */
        workflowId: string,
        /**
         * The unique id for the Automation workflow email.
         */
        workflowEmailId: string,
        /**
         * The MD5 hash of the lowercase version of the list member's email address.
         */
        subscriberHash: string,
    }): CancelablePromise<{
        /**
         * The MD5 hash of the lowercase version of the list member's email address.
         */
        readonly id?: string;
        /**
         * A string that uniquely identifies an Automation workflow.
         */
        readonly workflow_id?: string;
        /**
         * A string that uniquely identifies an email in an Automation workflow.
         */
        readonly email_id?: string;
        /**
         * A string that uniquely identifies a list.
         */
        readonly list_id?: string;
        /**
         * The status of the list used, namely if it's deleted or disabled.
         */
        readonly list_is_active?: boolean;
        /**
         * The list member's email address.
         */
        email_address?: string;
        /**
         * The date and time of the next send for the workflow email in ISO 8601 format.
         */
        readonly next_send?: string;
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
            url: '/automations/{workflow_id}/emails/{workflow_email_id}/queue/{subscriber_hash}',
            path: {
                'workflow_id': workflowId,
                'workflow_email_id': workflowEmailId,
                'subscriber_hash': subscriberHash,
            },
        });
    }

    /**
     * Pause automated email
     * Pause an automated email.
     * @returns any An error generated by the Mailchimp API.
     * @throws ApiError
     */
    public postAutomationsIdEmailsIdActionsPause({
        workflowId,
        workflowEmailId,
    }: {
        /**
         * The unique id for the Automation workflow.
         */
        workflowId: string,
        /**
         * The unique id for the Automation workflow email.
         */
        workflowEmailId: string,
    }): CancelablePromise<{
        /**
         * An absolute URI that identifies the problem type. When dereferenced, it should provide human-readable documentation for the problem type.
         */
        type: string;
        /**
         * A short, human-readable summary of the problem type. It shouldn't change based on the occurrence of the problem, except for purposes of localization.
         */
        title: string;
        /**
         * The HTTP status code (RFC2616, Section 6) generated by the origin server for this occurrence of the problem.
         */
        status: number;
        /**
         * A human-readable explanation specific to this occurrence of the problem. [Learn more about errors](/developer/guides/get-started-with-mailchimp-api-3/#Errors).
         */
        detail: string;
        /**
         * A string that identifies this specific occurrence of the problem. Please provide this ID when contacting support.
         */
        instance: string;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/automations/{workflow_id}/emails/{workflow_email_id}/actions/pause',
            path: {
                'workflow_id': workflowId,
                'workflow_email_id': workflowEmailId,
            },
        });
    }

    /**
     * Start automated email
     * Start an automated email.
     * @returns any An error generated by the Mailchimp API.
     * @throws ApiError
     */
    public postAutomationsIdEmailsIdActionsStart({
        workflowId,
        workflowEmailId,
    }: {
        /**
         * The unique id for the Automation workflow.
         */
        workflowId: string,
        /**
         * The unique id for the Automation workflow email.
         */
        workflowEmailId: string,
    }): CancelablePromise<{
        /**
         * An absolute URI that identifies the problem type. When dereferenced, it should provide human-readable documentation for the problem type.
         */
        type: string;
        /**
         * A short, human-readable summary of the problem type. It shouldn't change based on the occurrence of the problem, except for purposes of localization.
         */
        title: string;
        /**
         * The HTTP status code (RFC2616, Section 6) generated by the origin server for this occurrence of the problem.
         */
        status: number;
        /**
         * A human-readable explanation specific to this occurrence of the problem. [Learn more about errors](/developer/guides/get-started-with-mailchimp-api-3/#Errors).
         */
        detail: string;
        /**
         * A string that identifies this specific occurrence of the problem. Please provide this ID when contacting support.
         */
        instance: string;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/automations/{workflow_id}/emails/{workflow_email_id}/actions/start',
            path: {
                'workflow_id': workflowId,
                'workflow_email_id': workflowEmailId,
            },
        });
    }

    /**
     * List subscribers removed from workflow
     * Get information about subscribers who were removed from a classic automation workflow.
     * @returns any
     * @throws ApiError
     */
    public getAutomationsIdRemovedSubscribers({
        workflowId,
    }: {
        /**
         * The unique id for the Automation workflow.
         */
        workflowId: string,
    }): CancelablePromise<{
        /**
         * A string that uniquely identifies an Automation workflow.
         */
        readonly workflow_id?: string;
        /**
         * An array of objects, each representing a subscriber who was removed from an Automation workflow.
         */
        readonly subscribers?: Array<{
            /**
             * The MD5 hash of the lowercase version of the list member's email address.
             */
            readonly id?: string;
            /**
             * A string that uniquely identifies an Automation workflow.
             */
            readonly workflow_id?: string;
            /**
             * A string that uniquely identifies a list.
             */
            readonly list_id?: string;
            /**
             * The list member's email address.
             */
            email_address?: string;
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
        }>;
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
            url: '/automations/{workflow_id}/removed-subscribers',
            path: {
                'workflow_id': workflowId,
            },
        });
    }

    /**
     * Remove subscriber from workflow
     * Remove a subscriber from a specific classic automation workflow. You can remove a subscriber at any point in an automation workflow, regardless of how many emails they've been sent from that workflow. Once they're removed, they can never be added back to the same workflow.
     * @returns any
     * @throws ApiError
     */
    public postAutomationsIdRemovedSubscribers({
        workflowId,
        body,
    }: {
        /**
         * The unique id for the Automation workflow.
         */
        workflowId: string,
        body: {
            /**
             * The list member's email address.
             */
            email_address: string;
        },
    }): CancelablePromise<{
        /**
         * The MD5 hash of the lowercase version of the list member's email address.
         */
        readonly id?: string;
        /**
         * A string that uniquely identifies an Automation workflow.
         */
        readonly workflow_id?: string;
        /**
         * A string that uniquely identifies a list.
         */
        readonly list_id?: string;
        /**
         * The list member's email address.
         */
        email_address?: string;
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
            method: 'POST',
            url: '/automations/{workflow_id}/removed-subscribers',
            path: {
                'workflow_id': workflowId,
            },
            body: body,
        });
    }

    /**
     * Get subscriber removed from workflow
     * Get information about a specific subscriber who was removed from a classic automation workflow.
     * @returns any
     * @throws ApiError
     */
    public getAutomationsIdRemovedSubscribersId({
        workflowId,
        subscriberHash,
    }: {
        /**
         * The unique id for the Automation workflow.
         */
        workflowId: string,
        /**
         * The MD5 hash of the lowercase version of the list member's email address.
         */
        subscriberHash: string,
    }): CancelablePromise<{
        /**
         * The MD5 hash of the lowercase version of the list member's email address.
         */
        readonly id?: string;
        /**
         * A string that uniquely identifies an Automation workflow.
         */
        readonly workflow_id?: string;
        /**
         * A string that uniquely identifies a list.
         */
        readonly list_id?: string;
        /**
         * The list member's email address.
         */
        email_address?: string;
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
            url: '/automations/{workflow_id}/removed-subscribers/{subscriber_hash}',
            path: {
                'workflow_id': workflowId,
                'subscriber_hash': subscriberHash,
            },
        });
    }

}
