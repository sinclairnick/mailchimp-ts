/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ListsApi {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get lists info
     * Get information about all lists in the account.
     * @returns any
     * @throws ApiError
     */
    public getLists({
        fields,
        excludeFields,
        count = 10,
        offset,
        beforeDateCreated,
        sinceDateCreated,
        beforeCampaignLastSent,
        sinceCampaignLastSent,
        email,
        sortField,
        sortDir,
        hasEcommerceStore,
        includeTotalContacts,
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
         * Restrict response to lists created before the set date. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
         */
        beforeDateCreated?: string,
        /**
         * Restrict results to lists created after the set date. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
         */
        sinceDateCreated?: string,
        /**
         * Restrict results to lists created before the last campaign send date. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
         */
        beforeCampaignLastSent?: string,
        /**
         * Restrict results to lists created after the last campaign send date. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
         */
        sinceCampaignLastSent?: string,
        /**
         * Restrict results to lists that include a specific subscriber's email address.
         */
        email?: string,
        /**
         * Returns files sorted by the specified field.
         */
        sortField?: 'date_created',
        /**
         * Determines the order direction for sorted results.
         */
        sortDir?: 'ASC' | 'DESC',
        /**
         * Restrict results to lists that contain an active, connected, undeleted ecommerce store.
         */
        hasEcommerceStore?: boolean,
        /**
         * Return the total_contacts field in the stats response, which contains an approximate count of all contacts in any state.
         */
        includeTotalContacts?: boolean,
    }): CancelablePromise<{
        /**
         * An array of objects, each representing a list.
         */
        lists: Array<{
            /**
             * A string that uniquely identifies this list.
             */
            readonly id?: string;
            /**
             * The ID used in the Mailchimp web application. View this list in your Mailchimp account at `https://{dc}.admin.mailchimp.com/lists/members/?id={web_id}`.
             */
            readonly web_id?: number;
            /**
             * The name of the list.
             */
            name?: string;
            /**
             * [Contact information displayed in campaign footers](https://mailchimp.com/help/about-campaign-footers/) to comply with international spam laws.
             */
            contact?: {
                /**
                 * The company name for the list.
                 */
                company?: string;
                /**
                 * The street address for the list contact.
                 */
                address1?: string;
                /**
                 * The street address for the list contact.
                 */
                address2?: string;
                /**
                 * The city for the list contact.
                 */
                city?: string;
                /**
                 * The state for the list contact.
                 */
                state?: string;
                /**
                 * The postal or zip code for the list contact.
                 */
                zip?: string;
                /**
                 * A two-character ISO3166 country code. Defaults to US if invalid.
                 */
                country?: string;
                /**
                 * The phone number for the list contact.
                 */
                phone?: string;
            };
            /**
             * The [permission reminder](https://mailchimp.com/help/edit-the-permission-reminder/) for the list.
             */
            permission_reminder?: string;
            /**
             * Whether campaigns for this list use the [Archive Bar](https://mailchimp.com/help/about-email-campaign-archives-and-pages/) in archives by default.
             */
            use_archive_bar?: boolean;
            /**
             * [Default values for campaigns](https://mailchimp.com/help/edit-your-emails-subject-preview-text-from-name-or-from-email-address/) created for this list.
             */
            campaign_defaults?: {
                /**
                 * The default from name for campaigns sent to this list.
                 */
                from_name?: string;
                /**
                 * The default from email for campaigns sent to this list.
                 */
                from_email?: string;
                /**
                 * The default subject line for campaigns sent to this list.
                 */
                subject?: string;
                /**
                 * The default language for this lists's forms.
                 */
                language?: string;
            };
            /**
             * The email address to send [subscribe notifications](https://mailchimp.com/help/change-subscribe-and-unsubscribe-notifications/) to.
             */
            notify_on_subscribe?: string;
            /**
             * The email address to send [unsubscribe notifications](https://mailchimp.com/help/change-subscribe-and-unsubscribe-notifications/) to.
             */
            notify_on_unsubscribe?: string;
            /**
             * The date and time that this list was created in ISO 8601 format.
             */
            readonly date_created?: string;
            /**
             * An auto-generated activity score for the list (0-5).
             */
            readonly list_rating?: number;
            /**
             * Whether the list supports [multiple formats for emails](https://mailchimp.com/help/change-audience-name-defaults/). When set to `true`, subscribers can choose whether they want to receive HTML or plain-text emails. When set to `false`, subscribers will receive HTML emails, with a plain-text alternative backup.
             */
            email_type_option?: boolean;
            /**
             * Our [url shortened](https://mailchimp.com/help/share-your-signup-form/) version of this list's subscribe form.
             */
            readonly subscribe_url_short?: string;
            /**
             * The full version of this list's subscribe form (host will vary).
             */
            readonly subscribe_url_long?: string;
            /**
             * The list's [Email Beamer](https://mailchimp.com/help/use-email-beamer-to-create-a-campaign/) address.
             */
            readonly beamer_address?: string;
            /**
             * Legacy - visibility settings are no longer used
             */
            visibility?: 'pub' | 'prv';
            /**
             * Whether or not to require the subscriber to confirm subscription via email.
             */
            double_optin?: boolean;
            /**
             * Whether or not this list has a welcome automation connected. Welcome Automations: welcomeSeries, singleWelcome, emailFollowup.
             */
            has_welcome?: boolean;
            /**
             * Whether or not the list has marketing permissions (eg. GDPR) enabled.
             */
            marketing_permissions?: boolean;
            /**
             * Any list-specific modules installed for this list.
             */
            readonly modules?: Array<string>;
            /**
             * Stats for the list. Many of these are cached for at least five minutes.
             */
            readonly stats?: {
                /**
                 * The number of active members in the list.
                 */
                readonly member_count?: number;
                /**
                 * The number of contacts in the list, including subscribed, unsubscribed, pending, cleaned, deleted, transactional, and those that need to be reconfirmed. Requires include_total_contacts query parameter to be included.
                 */
                readonly total_contacts?: number;
                /**
                 * The number of members who have unsubscribed from the list.
                 */
                readonly unsubscribe_count?: number;
                /**
                 * The number of members cleaned from the list.
                 */
                readonly cleaned_count?: number;
                /**
                 * The number of active members in the list since the last campaign was sent.
                 */
                readonly member_count_since_send?: number;
                /**
                 * The number of members who have unsubscribed since the last campaign was sent.
                 */
                readonly unsubscribe_count_since_send?: number;
                /**
                 * The number of members cleaned from the list since the last campaign was sent.
                 */
                readonly cleaned_count_since_send?: number;
                /**
                 * The number of campaigns in any status that use this list.
                 */
                readonly campaign_count?: number;
                /**
                 * The date and time the last campaign was sent to this list in ISO 8601 format. This is updated when a campaign is sent to 10 or more recipients.
                 */
                readonly campaign_last_sent?: string;
                /**
                 * The number of merge fields ([audience field](https://mailchimp.com/help/getting-started-with-merge-tags/)) for this list (doesn't include EMAIL).
                 */
                readonly merge_field_count?: number;
                /**
                 * The average number of subscriptions per month for the list (not returned if we haven't calculated it yet).
                 */
                readonly avg_sub_rate?: number;
                /**
                 * The average number of unsubscriptions per month for the list (not returned if we haven't calculated it yet).
                 */
                readonly avg_unsub_rate?: number;
                /**
                 * The target number of subscriptions per month for the list to keep it growing (not returned if we haven't calculated it yet).
                 */
                readonly target_sub_rate?: number;
                /**
                 * The average open rate (a percentage represented as a number between 0 and 100) per campaign for the list (not returned if we haven't calculated it yet).
                 */
                readonly open_rate?: number;
                /**
                 * The average click rate (a percentage represented as a number between 0 and 100) per campaign for the list (not returned if we haven't calculated it yet).
                 */
                readonly click_rate?: number;
                /**
                 * The date and time of the last time someone subscribed to this list in ISO 8601 format.
                 */
                readonly last_sub_date?: string;
                /**
                 * The date and time of the last time someone unsubscribed from this list in ISO 8601 format.
                 */
                readonly last_unsub_date?: string;
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
         * Do particular authorization constraints around this collection limit creation of new instances?
         */
        constraints?: {
            /**
             * May the user create additional instances of this resource?
             */
            may_create: boolean;
            /**
             * How many total instances of this resource are allowed? This is independent of any filter conditions applied to the query. As a special case, -1 indicates unlimited.
             */
            max_instances: number;
            /**
             * How many total instances of this resource are already in use? This is independent of any filter conditions applied to the query. Value may be larger than max_instances. As a special case, -1 is returned when access is unlimited.
             */
            current_total_instances?: number;
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
            url: '/lists',
            query: {
                'fields': fields,
                'exclude_fields': excludeFields,
                'count': count,
                'offset': offset,
                'before_date_created': beforeDateCreated,
                'since_date_created': sinceDateCreated,
                'before_campaign_last_sent': beforeCampaignLastSent,
                'since_campaign_last_sent': sinceCampaignLastSent,
                'email': email,
                'sort_field': sortField,
                'sort_dir': sortDir,
                'has_ecommerce_store': hasEcommerceStore,
                'include_total_contacts': includeTotalContacts,
            },
        });
    }

    /**
     * Add list
     * Create a new list in your Mailchimp account.
     * @returns any
     * @throws ApiError
     */
    public postLists({
        body,
    }: {
        body: {
            /**
             * The name of the list.
             */
            name: string;
            /**
             * [Contact information displayed in campaign footers](https://mailchimp.com/help/about-campaign-footers/) to comply with international spam laws.
             */
            contact: {
                /**
                 * The company name for the list.
                 */
                company: string;
                /**
                 * The street address for the list contact.
                 */
                address1: string;
                /**
                 * The street address for the list contact.
                 */
                address2?: string;
                /**
                 * The city for the list contact.
                 */
                city: string;
                /**
                 * The state for the list contact.
                 */
                state?: string;
                /**
                 * The postal or zip code for the list contact.
                 */
                zip?: string;
                /**
                 * A two-character ISO3166 country code. Defaults to US if invalid.
                 */
                country: string;
                /**
                 * The phone number for the list contact.
                 */
                phone?: string;
            };
            /**
             * The [permission reminder](https://mailchimp.com/help/edit-the-permission-reminder/) for the list.
             */
            permission_reminder: string;
            /**
             * Whether campaigns for this list use the [Archive Bar](https://mailchimp.com/help/about-email-campaign-archives-and-pages/) in archives by default.
             */
            use_archive_bar?: boolean;
            /**
             * [Default values for campaigns](https://mailchimp.com/help/edit-your-emails-subject-preview-text-from-name-or-from-email-address/) created for this list.
             */
            campaign_defaults: {
                /**
                 * The default from name for campaigns sent to this list.
                 */
                from_name: string;
                /**
                 * The default from email for campaigns sent to this list.
                 */
                from_email: string;
                /**
                 * The default subject line for campaigns sent to this list.
                 */
                subject: string;
                /**
                 * The default language for this lists's forms.
                 */
                language: string;
            };
            /**
             * The email address to send [subscribe notifications](https://mailchimp.com/help/change-subscribe-and-unsubscribe-notifications/) to.
             */
            notify_on_subscribe?: string;
            /**
             * The email address to send [unsubscribe notifications](https://mailchimp.com/help/change-subscribe-and-unsubscribe-notifications/) to.
             */
            notify_on_unsubscribe?: string;
            /**
             * Whether the list supports [multiple formats for emails](https://mailchimp.com/help/change-audience-name-defaults/). When set to `true`, subscribers can choose whether they want to receive HTML or plain-text emails. When set to `false`, subscribers will receive HTML emails, with a plain-text alternative backup.
             */
            email_type_option: boolean;
            /**
             * Whether or not to require the subscriber to confirm subscription via email.
             */
            double_optin?: boolean;
            /**
             * Whether or not the list has marketing permissions (eg. GDPR) enabled.
             */
            marketing_permissions?: boolean;
        },
    }): CancelablePromise<{
        /**
         * A string that uniquely identifies this list.
         */
        readonly id?: string;
        /**
         * The ID used in the Mailchimp web application. View this list in your Mailchimp account at `https://{dc}.admin.mailchimp.com/lists/members/?id={web_id}`.
         */
        readonly web_id?: number;
        /**
         * The name of the list.
         */
        name?: string;
        /**
         * [Contact information displayed in campaign footers](https://mailchimp.com/help/about-campaign-footers/) to comply with international spam laws.
         */
        contact?: {
            /**
             * The company name for the list.
             */
            company?: string;
            /**
             * The street address for the list contact.
             */
            address1?: string;
            /**
             * The street address for the list contact.
             */
            address2?: string;
            /**
             * The city for the list contact.
             */
            city?: string;
            /**
             * The state for the list contact.
             */
            state?: string;
            /**
             * The postal or zip code for the list contact.
             */
            zip?: string;
            /**
             * A two-character ISO3166 country code. Defaults to US if invalid.
             */
            country?: string;
            /**
             * The phone number for the list contact.
             */
            phone?: string;
        };
        /**
         * The [permission reminder](https://mailchimp.com/help/edit-the-permission-reminder/) for the list.
         */
        permission_reminder?: string;
        /**
         * Whether campaigns for this list use the [Archive Bar](https://mailchimp.com/help/about-email-campaign-archives-and-pages/) in archives by default.
         */
        use_archive_bar?: boolean;
        /**
         * [Default values for campaigns](https://mailchimp.com/help/edit-your-emails-subject-preview-text-from-name-or-from-email-address/) created for this list.
         */
        campaign_defaults?: {
            /**
             * The default from name for campaigns sent to this list.
             */
            from_name?: string;
            /**
             * The default from email for campaigns sent to this list.
             */
            from_email?: string;
            /**
             * The default subject line for campaigns sent to this list.
             */
            subject?: string;
            /**
             * The default language for this lists's forms.
             */
            language?: string;
        };
        /**
         * The email address to send [subscribe notifications](https://mailchimp.com/help/change-subscribe-and-unsubscribe-notifications/) to.
         */
        notify_on_subscribe?: string;
        /**
         * The email address to send [unsubscribe notifications](https://mailchimp.com/help/change-subscribe-and-unsubscribe-notifications/) to.
         */
        notify_on_unsubscribe?: string;
        /**
         * The date and time that this list was created in ISO 8601 format.
         */
        readonly date_created?: string;
        /**
         * An auto-generated activity score for the list (0-5).
         */
        readonly list_rating?: number;
        /**
         * Whether the list supports [multiple formats for emails](https://mailchimp.com/help/change-audience-name-defaults/). When set to `true`, subscribers can choose whether they want to receive HTML or plain-text emails. When set to `false`, subscribers will receive HTML emails, with a plain-text alternative backup.
         */
        email_type_option?: boolean;
        /**
         * Our [url shortened](https://mailchimp.com/help/share-your-signup-form/) version of this list's subscribe form.
         */
        readonly subscribe_url_short?: string;
        /**
         * The full version of this list's subscribe form (host will vary).
         */
        readonly subscribe_url_long?: string;
        /**
         * The list's [Email Beamer](https://mailchimp.com/help/use-email-beamer-to-create-a-campaign/) address.
         */
        readonly beamer_address?: string;
        /**
         * Legacy - visibility settings are no longer used
         */
        visibility?: 'pub' | 'prv';
        /**
         * Whether or not to require the subscriber to confirm subscription via email.
         */
        double_optin?: boolean;
        /**
         * Whether or not this list has a welcome automation connected. Welcome Automations: welcomeSeries, singleWelcome, emailFollowup.
         */
        has_welcome?: boolean;
        /**
         * Whether or not the list has marketing permissions (eg. GDPR) enabled.
         */
        marketing_permissions?: boolean;
        /**
         * Any list-specific modules installed for this list.
         */
        readonly modules?: Array<string>;
        /**
         * Stats for the list. Many of these are cached for at least five minutes.
         */
        readonly stats?: {
            /**
             * The number of active members in the list.
             */
            readonly member_count?: number;
            /**
             * The number of contacts in the list, including subscribed, unsubscribed, pending, cleaned, deleted, transactional, and those that need to be reconfirmed. Requires include_total_contacts query parameter to be included.
             */
            readonly total_contacts?: number;
            /**
             * The number of members who have unsubscribed from the list.
             */
            readonly unsubscribe_count?: number;
            /**
             * The number of members cleaned from the list.
             */
            readonly cleaned_count?: number;
            /**
             * The number of active members in the list since the last campaign was sent.
             */
            readonly member_count_since_send?: number;
            /**
             * The number of members who have unsubscribed since the last campaign was sent.
             */
            readonly unsubscribe_count_since_send?: number;
            /**
             * The number of members cleaned from the list since the last campaign was sent.
             */
            readonly cleaned_count_since_send?: number;
            /**
             * The number of campaigns in any status that use this list.
             */
            readonly campaign_count?: number;
            /**
             * The date and time the last campaign was sent to this list in ISO 8601 format. This is updated when a campaign is sent to 10 or more recipients.
             */
            readonly campaign_last_sent?: string;
            /**
             * The number of merge fields ([audience field](https://mailchimp.com/help/getting-started-with-merge-tags/)) for this list (doesn't include EMAIL).
             */
            readonly merge_field_count?: number;
            /**
             * The average number of subscriptions per month for the list (not returned if we haven't calculated it yet).
             */
            readonly avg_sub_rate?: number;
            /**
             * The average number of unsubscriptions per month for the list (not returned if we haven't calculated it yet).
             */
            readonly avg_unsub_rate?: number;
            /**
             * The target number of subscriptions per month for the list to keep it growing (not returned if we haven't calculated it yet).
             */
            readonly target_sub_rate?: number;
            /**
             * The average open rate (a percentage represented as a number between 0 and 100) per campaign for the list (not returned if we haven't calculated it yet).
             */
            readonly open_rate?: number;
            /**
             * The average click rate (a percentage represented as a number between 0 and 100) per campaign for the list (not returned if we haven't calculated it yet).
             */
            readonly click_rate?: number;
            /**
             * The date and time of the last time someone subscribed to this list in ISO 8601 format.
             */
            readonly last_sub_date?: string;
            /**
             * The date and time of the last time someone unsubscribed from this list in ISO 8601 format.
             */
            readonly last_unsub_date?: string;
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
            url: '/lists',
            body: body,
        });
    }

    /**
     * Get list info
     * Get information about a specific list in your Mailchimp account. Results include list members who have signed up but haven't confirmed their subscription yet and unsubscribed or cleaned.
     * @returns any
     * @throws ApiError
     */
    public getListsId({
        listId,
        fields,
        excludeFields,
        includeTotalContacts,
    }: {
        /**
         * The unique ID for the list.
         */
        listId: string,
        /**
         * A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
         */
        fields?: Array<string>,
        /**
         * A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
         */
        excludeFields?: Array<string>,
        /**
         * Return the total_contacts field in the stats response, which contains an approximate count of all contacts in any state.
         */
        includeTotalContacts?: boolean,
    }): CancelablePromise<{
        /**
         * A string that uniquely identifies this list.
         */
        readonly id?: string;
        /**
         * The ID used in the Mailchimp web application. View this list in your Mailchimp account at `https://{dc}.admin.mailchimp.com/lists/members/?id={web_id}`.
         */
        readonly web_id?: number;
        /**
         * The name of the list.
         */
        name?: string;
        /**
         * [Contact information displayed in campaign footers](https://mailchimp.com/help/about-campaign-footers/) to comply with international spam laws.
         */
        contact?: {
            /**
             * The company name for the list.
             */
            company?: string;
            /**
             * The street address for the list contact.
             */
            address1?: string;
            /**
             * The street address for the list contact.
             */
            address2?: string;
            /**
             * The city for the list contact.
             */
            city?: string;
            /**
             * The state for the list contact.
             */
            state?: string;
            /**
             * The postal or zip code for the list contact.
             */
            zip?: string;
            /**
             * A two-character ISO3166 country code. Defaults to US if invalid.
             */
            country?: string;
            /**
             * The phone number for the list contact.
             */
            phone?: string;
        };
        /**
         * The [permission reminder](https://mailchimp.com/help/edit-the-permission-reminder/) for the list.
         */
        permission_reminder?: string;
        /**
         * Whether campaigns for this list use the [Archive Bar](https://mailchimp.com/help/about-email-campaign-archives-and-pages/) in archives by default.
         */
        use_archive_bar?: boolean;
        /**
         * [Default values for campaigns](https://mailchimp.com/help/edit-your-emails-subject-preview-text-from-name-or-from-email-address/) created for this list.
         */
        campaign_defaults?: {
            /**
             * The default from name for campaigns sent to this list.
             */
            from_name?: string;
            /**
             * The default from email for campaigns sent to this list.
             */
            from_email?: string;
            /**
             * The default subject line for campaigns sent to this list.
             */
            subject?: string;
            /**
             * The default language for this lists's forms.
             */
            language?: string;
        };
        /**
         * The email address to send [subscribe notifications](https://mailchimp.com/help/change-subscribe-and-unsubscribe-notifications/) to.
         */
        notify_on_subscribe?: string;
        /**
         * The email address to send [unsubscribe notifications](https://mailchimp.com/help/change-subscribe-and-unsubscribe-notifications/) to.
         */
        notify_on_unsubscribe?: string;
        /**
         * The date and time that this list was created in ISO 8601 format.
         */
        readonly date_created?: string;
        /**
         * An auto-generated activity score for the list (0-5).
         */
        readonly list_rating?: number;
        /**
         * Whether the list supports [multiple formats for emails](https://mailchimp.com/help/change-audience-name-defaults/). When set to `true`, subscribers can choose whether they want to receive HTML or plain-text emails. When set to `false`, subscribers will receive HTML emails, with a plain-text alternative backup.
         */
        email_type_option?: boolean;
        /**
         * Our [url shortened](https://mailchimp.com/help/share-your-signup-form/) version of this list's subscribe form.
         */
        readonly subscribe_url_short?: string;
        /**
         * The full version of this list's subscribe form (host will vary).
         */
        readonly subscribe_url_long?: string;
        /**
         * The list's [Email Beamer](https://mailchimp.com/help/use-email-beamer-to-create-a-campaign/) address.
         */
        readonly beamer_address?: string;
        /**
         * Legacy - visibility settings are no longer used
         */
        visibility?: 'pub' | 'prv';
        /**
         * Whether or not to require the subscriber to confirm subscription via email.
         */
        double_optin?: boolean;
        /**
         * Whether or not this list has a welcome automation connected. Welcome Automations: welcomeSeries, singleWelcome, emailFollowup.
         */
        has_welcome?: boolean;
        /**
         * Whether or not the list has marketing permissions (eg. GDPR) enabled.
         */
        marketing_permissions?: boolean;
        /**
         * Any list-specific modules installed for this list.
         */
        readonly modules?: Array<string>;
        /**
         * Stats for the list. Many of these are cached for at least five minutes.
         */
        readonly stats?: {
            /**
             * The number of active members in the list.
             */
            readonly member_count?: number;
            /**
             * The number of contacts in the list, including subscribed, unsubscribed, pending, cleaned, deleted, transactional, and those that need to be reconfirmed. Requires include_total_contacts query parameter to be included.
             */
            readonly total_contacts?: number;
            /**
             * The number of members who have unsubscribed from the list.
             */
            readonly unsubscribe_count?: number;
            /**
             * The number of members cleaned from the list.
             */
            readonly cleaned_count?: number;
            /**
             * The number of active members in the list since the last campaign was sent.
             */
            readonly member_count_since_send?: number;
            /**
             * The number of members who have unsubscribed since the last campaign was sent.
             */
            readonly unsubscribe_count_since_send?: number;
            /**
             * The number of members cleaned from the list since the last campaign was sent.
             */
            readonly cleaned_count_since_send?: number;
            /**
             * The number of campaigns in any status that use this list.
             */
            readonly campaign_count?: number;
            /**
             * The date and time the last campaign was sent to this list in ISO 8601 format. This is updated when a campaign is sent to 10 or more recipients.
             */
            readonly campaign_last_sent?: string;
            /**
             * The number of merge fields ([audience field](https://mailchimp.com/help/getting-started-with-merge-tags/)) for this list (doesn't include EMAIL).
             */
            readonly merge_field_count?: number;
            /**
             * The average number of subscriptions per month for the list (not returned if we haven't calculated it yet).
             */
            readonly avg_sub_rate?: number;
            /**
             * The average number of unsubscriptions per month for the list (not returned if we haven't calculated it yet).
             */
            readonly avg_unsub_rate?: number;
            /**
             * The target number of subscriptions per month for the list to keep it growing (not returned if we haven't calculated it yet).
             */
            readonly target_sub_rate?: number;
            /**
             * The average open rate (a percentage represented as a number between 0 and 100) per campaign for the list (not returned if we haven't calculated it yet).
             */
            readonly open_rate?: number;
            /**
             * The average click rate (a percentage represented as a number between 0 and 100) per campaign for the list (not returned if we haven't calculated it yet).
             */
            readonly click_rate?: number;
            /**
             * The date and time of the last time someone subscribed to this list in ISO 8601 format.
             */
            readonly last_sub_date?: string;
            /**
             * The date and time of the last time someone unsubscribed from this list in ISO 8601 format.
             */
            readonly last_unsub_date?: string;
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
            url: '/lists/{list_id}',
            path: {
                'list_id': listId,
            },
            query: {
                'fields': fields,
                'exclude_fields': excludeFields,
                'include_total_contacts': includeTotalContacts,
            },
        });
    }

    /**
     * Update lists
     * Update the settings for a specific list.
     * @returns any
     * @throws ApiError
     */
    public patchListsId({
        listId,
        body,
    }: {
        /**
         * The unique ID for the list.
         */
        listId: string,
        body: {
            /**
             * The name of the list.
             */
            name: string;
            /**
             * [Contact information displayed in campaign footers](https://mailchimp.com/help/about-campaign-footers/) to comply with international spam laws.
             */
            contact: {
                /**
                 * The company name for the list.
                 */
                company: string;
                /**
                 * The street address for the list contact.
                 */
                address1: string;
                /**
                 * The street address for the list contact.
                 */
                address2?: string;
                /**
                 * The city for the list contact.
                 */
                city: string;
                /**
                 * The state for the list contact.
                 */
                state: string;
                /**
                 * The postal or zip code for the list contact.
                 */
                zip: string;
                /**
                 * A two-character ISO3166 country code. Defaults to US if invalid.
                 */
                country: string;
                /**
                 * The phone number for the list contact.
                 */
                phone?: string;
            };
            /**
             * The [permission reminder](https://mailchimp.com/help/edit-the-permission-reminder/) for the list.
             */
            permission_reminder: string;
            /**
             * Whether campaigns for this list use the [Archive Bar](https://mailchimp.com/help/about-email-campaign-archives-and-pages/) in archives by default.
             */
            use_archive_bar?: boolean;
            /**
             * [Default values for campaigns](https://mailchimp.com/help/edit-your-emails-subject-preview-text-from-name-or-from-email-address/) created for this list.
             */
            campaign_defaults: {
                /**
                 * The default from name for campaigns sent to this list.
                 */
                from_name: string;
                /**
                 * The default from email for campaigns sent to this list.
                 */
                from_email: string;
                /**
                 * The default subject line for campaigns sent to this list.
                 */
                subject: string;
                /**
                 * The default language for this lists's forms.
                 */
                language: string;
            };
            /**
             * The email address to send [subscribe notifications](https://mailchimp.com/help/change-subscribe-and-unsubscribe-notifications/) to.
             */
            notify_on_subscribe?: string;
            /**
             * The email address to send [unsubscribe notifications](https://mailchimp.com/help/change-subscribe-and-unsubscribe-notifications/) to.
             */
            notify_on_unsubscribe?: string;
            /**
             * Whether the list supports [multiple formats for emails](https://mailchimp.com/help/change-audience-name-defaults/). When set to `true`, subscribers can choose whether they want to receive HTML or plain-text emails. When set to `false`, subscribers will receive HTML emails, with a plain-text alternative backup.
             */
            email_type_option: boolean;
            /**
             * Whether or not to require the subscriber to confirm subscription via email.
             */
            double_optin?: boolean;
            /**
             * Whether or not the list has marketing permissions (eg. GDPR) enabled.
             */
            marketing_permissions?: boolean;
        },
    }): CancelablePromise<{
        /**
         * A string that uniquely identifies this list.
         */
        readonly id?: string;
        /**
         * The ID used in the Mailchimp web application. View this list in your Mailchimp account at `https://{dc}.admin.mailchimp.com/lists/members/?id={web_id}`.
         */
        readonly web_id?: number;
        /**
         * The name of the list.
         */
        name?: string;
        /**
         * [Contact information displayed in campaign footers](https://mailchimp.com/help/about-campaign-footers/) to comply with international spam laws.
         */
        contact?: {
            /**
             * The company name for the list.
             */
            company?: string;
            /**
             * The street address for the list contact.
             */
            address1?: string;
            /**
             * The street address for the list contact.
             */
            address2?: string;
            /**
             * The city for the list contact.
             */
            city?: string;
            /**
             * The state for the list contact.
             */
            state?: string;
            /**
             * The postal or zip code for the list contact.
             */
            zip?: string;
            /**
             * A two-character ISO3166 country code. Defaults to US if invalid.
             */
            country?: string;
            /**
             * The phone number for the list contact.
             */
            phone?: string;
        };
        /**
         * The [permission reminder](https://mailchimp.com/help/edit-the-permission-reminder/) for the list.
         */
        permission_reminder?: string;
        /**
         * Whether campaigns for this list use the [Archive Bar](https://mailchimp.com/help/about-email-campaign-archives-and-pages/) in archives by default.
         */
        use_archive_bar?: boolean;
        /**
         * [Default values for campaigns](https://mailchimp.com/help/edit-your-emails-subject-preview-text-from-name-or-from-email-address/) created for this list.
         */
        campaign_defaults?: {
            /**
             * The default from name for campaigns sent to this list.
             */
            from_name?: string;
            /**
             * The default from email for campaigns sent to this list.
             */
            from_email?: string;
            /**
             * The default subject line for campaigns sent to this list.
             */
            subject?: string;
            /**
             * The default language for this lists's forms.
             */
            language?: string;
        };
        /**
         * The email address to send [subscribe notifications](https://mailchimp.com/help/change-subscribe-and-unsubscribe-notifications/) to.
         */
        notify_on_subscribe?: string;
        /**
         * The email address to send [unsubscribe notifications](https://mailchimp.com/help/change-subscribe-and-unsubscribe-notifications/) to.
         */
        notify_on_unsubscribe?: string;
        /**
         * The date and time that this list was created in ISO 8601 format.
         */
        readonly date_created?: string;
        /**
         * An auto-generated activity score for the list (0-5).
         */
        readonly list_rating?: number;
        /**
         * Whether the list supports [multiple formats for emails](https://mailchimp.com/help/change-audience-name-defaults/). When set to `true`, subscribers can choose whether they want to receive HTML or plain-text emails. When set to `false`, subscribers will receive HTML emails, with a plain-text alternative backup.
         */
        email_type_option?: boolean;
        /**
         * Our [url shortened](https://mailchimp.com/help/share-your-signup-form/) version of this list's subscribe form.
         */
        readonly subscribe_url_short?: string;
        /**
         * The full version of this list's subscribe form (host will vary).
         */
        readonly subscribe_url_long?: string;
        /**
         * The list's [Email Beamer](https://mailchimp.com/help/use-email-beamer-to-create-a-campaign/) address.
         */
        readonly beamer_address?: string;
        /**
         * Legacy - visibility settings are no longer used
         */
        visibility?: 'pub' | 'prv';
        /**
         * Whether or not to require the subscriber to confirm subscription via email.
         */
        double_optin?: boolean;
        /**
         * Whether or not this list has a welcome automation connected. Welcome Automations: welcomeSeries, singleWelcome, emailFollowup.
         */
        has_welcome?: boolean;
        /**
         * Whether or not the list has marketing permissions (eg. GDPR) enabled.
         */
        marketing_permissions?: boolean;
        /**
         * Any list-specific modules installed for this list.
         */
        readonly modules?: Array<string>;
        /**
         * Stats for the list. Many of these are cached for at least five minutes.
         */
        readonly stats?: {
            /**
             * The number of active members in the list.
             */
            readonly member_count?: number;
            /**
             * The number of contacts in the list, including subscribed, unsubscribed, pending, cleaned, deleted, transactional, and those that need to be reconfirmed. Requires include_total_contacts query parameter to be included.
             */
            readonly total_contacts?: number;
            /**
             * The number of members who have unsubscribed from the list.
             */
            readonly unsubscribe_count?: number;
            /**
             * The number of members cleaned from the list.
             */
            readonly cleaned_count?: number;
            /**
             * The number of active members in the list since the last campaign was sent.
             */
            readonly member_count_since_send?: number;
            /**
             * The number of members who have unsubscribed since the last campaign was sent.
             */
            readonly unsubscribe_count_since_send?: number;
            /**
             * The number of members cleaned from the list since the last campaign was sent.
             */
            readonly cleaned_count_since_send?: number;
            /**
             * The number of campaigns in any status that use this list.
             */
            readonly campaign_count?: number;
            /**
             * The date and time the last campaign was sent to this list in ISO 8601 format. This is updated when a campaign is sent to 10 or more recipients.
             */
            readonly campaign_last_sent?: string;
            /**
             * The number of merge fields ([audience field](https://mailchimp.com/help/getting-started-with-merge-tags/)) for this list (doesn't include EMAIL).
             */
            readonly merge_field_count?: number;
            /**
             * The average number of subscriptions per month for the list (not returned if we haven't calculated it yet).
             */
            readonly avg_sub_rate?: number;
            /**
             * The average number of unsubscriptions per month for the list (not returned if we haven't calculated it yet).
             */
            readonly avg_unsub_rate?: number;
            /**
             * The target number of subscriptions per month for the list to keep it growing (not returned if we haven't calculated it yet).
             */
            readonly target_sub_rate?: number;
            /**
             * The average open rate (a percentage represented as a number between 0 and 100) per campaign for the list (not returned if we haven't calculated it yet).
             */
            readonly open_rate?: number;
            /**
             * The average click rate (a percentage represented as a number between 0 and 100) per campaign for the list (not returned if we haven't calculated it yet).
             */
            readonly click_rate?: number;
            /**
             * The date and time of the last time someone subscribed to this list in ISO 8601 format.
             */
            readonly last_sub_date?: string;
            /**
             * The date and time of the last time someone unsubscribed from this list in ISO 8601 format.
             */
            readonly last_unsub_date?: string;
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
            url: '/lists/{list_id}',
            path: {
                'list_id': listId,
            },
            body: body,
        });
    }

    /**
     * Delete list
     * Delete a list from your Mailchimp account. If you delete a list, you'll lose the list history—including subscriber activity, unsubscribes, complaints, and bounces. You’ll also lose subscribers’ email addresses, unless you exported and backed up your list.
     * @returns any An error generated by the Mailchimp API.
     * @throws ApiError
     */
    public deleteListsId({
        listId,
    }: {
        /**
         * The unique ID for the list.
         */
        listId: string,
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
            url: '/lists/{list_id}',
            path: {
                'list_id': listId,
            },
        });
    }

    /**
     * Batch subscribe or unsubscribe
     * Batch subscribe or unsubscribe list members.
     * @returns any
     * @throws ApiError
     */
    public postListsId({
        listId,
        body,
        skipMergeValidation,
        skipDuplicateCheck,
    }: {
        /**
         * The unique ID for the list.
         */
        listId: string,
        body: {
            /**
             * An array of objects, each representing an email address and the subscription status for a specific list. Up to 500 members may be added or updated with each API call.
             */
            members: Array<{
                /**
                 * Email address for a subscriber.
                 */
                email_address?: string;
                /**
                 * Type of email this member asked to get ('html' or 'text').
                 */
                email_type?: string;
                /**
                 * Subscriber's current status.
                 */
                status?: 'subscribed' | 'unsubscribed' | 'cleaned' | 'pending' | 'transactional';
                /**
                 * A dictionary of merge fields where the keys are the merge tags. See the [Merge Fields documentation](https://mailchimp.com/developer/marketing/docs/merge-fields/#structure) for more about the structure.
                 */
                merge_fields?: Record<string, any>;
                /**
                 * The key of this object's properties is the ID of the interest in question.
                 */
                interests?: Record<string, boolean>;
                /**
                 * If set/detected, the [subscriber's language](https://mailchimp.com/help/view-and-edit-contact-languages/).
                 */
                language?: string;
                /**
                 * [VIP status](https://mailchimp.com/help/designate-and-send-to-vip-contacts/) for subscriber.
                 */
                vip?: boolean;
                /**
                 * Subscriber location information.
                 */
                location?: {
                    /**
                     * The location latitude.
                     */
                    latitude?: number;
                    /**
                     * The location longitude.
                     */
                    longitude?: number;
                };
                /**
                 * IP address the subscriber signed up from.
                 */
                ip_signup?: string;
                /**
                 * The date and time the subscriber signed up for the list in ISO 8601 format.
                 */
                timestamp_signup?: string;
                /**
                 * The IP address the subscriber used to confirm their opt-in status.
                 */
                ip_opt?: string;
                /**
                 * The date and time the subscribe confirmed their opt-in status in ISO 8601 format.
                 */
                timestamp_opt?: string;
            }>;
            /**
             * Whether this batch operation will replace all existing tags with tags in request.
             */
            sync_tags?: boolean;
            /**
             * Whether this batch operation will change existing members' subscription status.
             */
            update_existing?: boolean;
        },
        /**
         * If skip_merge_validation is true, member data will be accepted without merge field values, even if the merge field is usually required. This defaults to false.
         */
        skipMergeValidation?: boolean,
        /**
         * If skip_duplicate_check is true, we will ignore duplicates sent in the request when using the batch sub/unsub on the lists endpoint. The status of the first appearance in the request will be saved. This defaults to false.
         */
        skipDuplicateCheck?: boolean,
    }): CancelablePromise<{
        /**
         * An array of objects, each representing a new member that was added to the list.
         */
        new_members?: Array<{
            /**
             * The MD5 hash of the lowercase version of the list member's email address.
             */
            readonly id?: string;
            /**
             * Email address for a subscriber.
             */
            email_address?: string;
            /**
             * An identifier for the address across all of Mailchimp.
             */
            readonly unique_email_id?: string;
            /**
             * Type of email this member asked to get ('html' or 'text').
             */
            email_type?: string;
            /**
             * Subscriber's current status.
             */
            status?: 'subscribed' | 'unsubscribed' | 'cleaned' | 'pending' | 'transactional';
            /**
             * An individual merge var and value for a member.
             */
            merge_fields?: Record<string, any>;
            /**
             * The key of this object's properties is the ID of the interest in question.
             */
            interests?: Record<string, boolean>;
            /**
             * Open and click rates for this subscriber.
             */
            readonly stats?: {
                /**
                 * A subscriber's average open rate.
                 */
                readonly avg_open_rate?: number;
                /**
                 * A subscriber's average clickthrough rate.
                 */
                readonly avg_click_rate?: number;
            };
            /**
             * IP address the subscriber signed up from.
             */
            readonly ip_signup?: string;
            /**
             * The date and time the subscriber signed up for the list in ISO 8601 format.
             */
            readonly timestamp_signup?: string;
            /**
             * The IP address the subscriber used to confirm their opt-in status.
             */
            readonly ip_opt?: string;
            /**
             * The date and time the subscriber confirmed their opt-in status in ISO 8601 format.
             */
            readonly timestamp_opt?: string;
            /**
             * Star rating for this member, between 1 and 5.
             */
            readonly member_rating?: number;
            /**
             * The date and time the member's info was last changed in ISO 8601 format.
             */
            readonly last_changed?: string;
            /**
             * If set/detected, the [subscriber's language](https://mailchimp.com/help/view-and-edit-contact-languages/).
             */
            language?: string;
            /**
             * [VIP status](https://mailchimp.com/help/designate-and-send-to-vip-contacts/) for subscriber.
             */
            vip?: boolean;
            /**
             * The list member's email client.
             */
            readonly email_client?: string;
            /**
             * Subscriber location information.
             */
            location?: {
                /**
                 * The location latitude.
                 */
                latitude?: number;
                /**
                 * The location longitude.
                 */
                longitude?: number;
                /**
                 * The time difference in hours from GMT.
                 */
                readonly gmtoff?: number;
                /**
                 * The offset for timezones where daylight saving time is observed.
                 */
                readonly dstoff?: number;
                /**
                 * The unique code for the location country.
                 */
                readonly country_code?: string;
                /**
                 * The timezone for the location.
                 */
                readonly timezone?: string;
            };
            /**
             * The most recent Note added about this member.
             */
            readonly last_note?: {
                /**
                 * The note id.
                 */
                readonly note_id?: number;
                /**
                 * The date and time the note was created in ISO 8601 format.
                 */
                readonly created_at?: string;
                /**
                 * The author of the note.
                 */
                readonly created_by?: string;
                /**
                 * The content of the note.
                 */
                readonly note?: string;
            };
            /**
             * The number of tags applied to this member.
             */
            readonly tags_count?: number;
            /**
             * The tags applied to this member.
             */
            tags?: Array<{
                /**
                 * The tag id.
                 */
                readonly id?: number;
                /**
                 * The name of the tag
                 */
                readonly name?: string;
            }>;
            /**
             * The list id.
             */
            readonly list_id?: string;
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
         * An array of objects, each representing an existing list member whose subscription status was updated.
         */
        updated_members?: Array<{
            /**
             * The MD5 hash of the lowercase version of the list member's email address.
             */
            readonly id?: string;
            /**
             * Email address for a subscriber.
             */
            email_address?: string;
            /**
             * An identifier for the address across all of Mailchimp.
             */
            readonly unique_email_id?: string;
            /**
             * Type of email this member asked to get ('html' or 'text').
             */
            email_type?: string;
            /**
             * Subscriber's current status.
             */
            status?: 'subscribed' | 'unsubscribed' | 'cleaned' | 'pending' | 'transactional';
            /**
             * An individual merge var and value for a member.
             */
            merge_fields?: Record<string, any>;
            /**
             * The key of this object's properties is the ID of the interest in question.
             */
            interests?: Record<string, boolean>;
            /**
             * Open and click rates for this subscriber.
             */
            readonly stats?: {
                /**
                 * A subscriber's average open rate.
                 */
                readonly avg_open_rate?: number;
                /**
                 * A subscriber's average clickthrough rate.
                 */
                readonly avg_click_rate?: number;
            };
            /**
             * IP address the subscriber signed up from.
             */
            readonly ip_signup?: string;
            /**
             * The date and time the subscriber signed up for the list in ISO 8601 format.
             */
            readonly timestamp_signup?: string;
            /**
             * The IP address the subscriber used to confirm their opt-in status.
             */
            readonly ip_opt?: string;
            /**
             * The date and time the subscriber confirmed their opt-in status in ISO 8601 format.
             */
            readonly timestamp_opt?: string;
            /**
             * Star rating for this member, between 1 and 5.
             */
            readonly member_rating?: number;
            /**
             * The date and time the member's info was last changed in ISO 8601 format.
             */
            readonly last_changed?: string;
            /**
             * If set/detected, the [subscriber's language](https://mailchimp.com/help/view-and-edit-contact-languages/).
             */
            language?: string;
            /**
             * [VIP status](https://mailchimp.com/help/designate-and-send-to-vip-contacts/) for subscriber.
             */
            vip?: boolean;
            /**
             * The list member's email client.
             */
            readonly email_client?: string;
            /**
             * Subscriber location information.
             */
            location?: {
                /**
                 * The location latitude.
                 */
                latitude?: number;
                /**
                 * The location longitude.
                 */
                longitude?: number;
                /**
                 * The time difference in hours from GMT.
                 */
                readonly gmtoff?: number;
                /**
                 * The offset for timezones where daylight saving time is observed.
                 */
                readonly dstoff?: number;
                /**
                 * The unique code for the location country.
                 */
                readonly country_code?: string;
                /**
                 * The timezone for the location.
                 */
                readonly timezone?: string;
            };
            /**
             * The most recent Note added about this member.
             */
            readonly last_note?: {
                /**
                 * The note id.
                 */
                readonly note_id?: number;
                /**
                 * The date and time the note was created in ISO 8601 format.
                 */
                readonly created_at?: string;
                /**
                 * The author of the note.
                 */
                readonly created_by?: string;
                /**
                 * The content of the note.
                 */
                readonly note?: string;
            };
            /**
             * The number of tags applied to this member.
             */
            readonly tags_count?: number;
            /**
             * The tags applied to this member.
             */
            tags?: Array<{
                /**
                 * The tag id.
                 */
                readonly id?: number;
                /**
                 * The name of the tag
                 */
                readonly name?: string;
            }>;
            /**
             * The list id.
             */
            readonly list_id?: string;
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
         * An array of objects, each representing an email address that could not be added to the list or updated and an error message providing more details.
         */
        errors?: Array<{
            /**
             * The email address that could not be added or updated.
             */
            email_address?: string;
            /**
             * The error message indicating why the email address could not be added or updated.
             */
            error?: string;
            /**
             * A unique code that identifies this specifc error.
             */
            error_code?: 'ERROR_CONTACT_EXISTS' | 'ERROR_GENERIC';
            /**
             * If the error is field-related, information about which field is at issue.
             */
            field?: string;
            /**
             * Message indicating how to resolve a field-related error.
             */
            field_message?: string;
        }>;
        /**
         * The total number of items matching the query, irrespective of pagination.
         */
        total_created?: number;
        /**
         * The total number of items matching the query, irrespective of pagination.
         */
        total_updated?: number;
        /**
         * The total number of items matching the query, irrespective of pagination.
         */
        error_count?: number;
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
            url: '/lists/{list_id}',
            path: {
                'list_id': listId,
            },
            query: {
                'skip_merge_validation': skipMergeValidation,
                'skip_duplicate_check': skipDuplicateCheck,
            },
            body: body,
        });
    }

    /**
     * List abuse reports
     * Get all abuse reports for a specific list.
     * @returns any
     * @throws ApiError
     */
    public getListsIdAbuseReports({
        listId,
        fields,
        excludeFields,
        count = 10,
        offset,
    }: {
        /**
         * The unique ID for the list.
         */
        listId: string,
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
    }): CancelablePromise<{
        /**
         * An array of objects, each representing an abuse report resource.
         */
        abuse_reports?: Array<{
            /**
             * The id for the abuse report
             */
            readonly id?: number;
            /**
             * The campaign id for the abuse report
             */
            readonly campaign_id?: string;
            /**
             * The list id for the abuse report.
             */
            readonly list_id?: string;
            /**
             * The MD5 hash of the lowercase version of the list member's email address.
             */
            readonly email_id?: string;
            /**
             * Email address for a subscriber.
             */
            readonly email_address?: string;
            /**
             * A dictionary of merge fields where the keys are the merge tags. See the [Merge Fields documentation](https://mailchimp.com/developer/marketing/docs/merge-fields/#structure) for more about the structure.
             */
            merge_fields?: Record<string, any>;
            /**
             * [VIP status](https://mailchimp.com/help/designate-and-send-to-vip-contacts/) for subscriber.
             */
            readonly vip?: boolean;
            /**
             * Date for the abuse report
             */
            readonly date?: string;
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
         * The list id for the abuse report.
         */
        list_id?: string;
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
            url: '/lists/{list_id}/abuse-reports',
            path: {
                'list_id': listId,
            },
            query: {
                'fields': fields,
                'exclude_fields': excludeFields,
                'count': count,
                'offset': offset,
            },
        });
    }

    /**
     * Get abuse report
     * Get details about a specific abuse report.
     * @returns any
     * @throws ApiError
     */
    public getListsIdAbuseReportsId({
        listId,
        reportId,
        fields,
        excludeFields,
        count = 10,
        offset,
    }: {
        /**
         * The unique ID for the list.
         */
        listId: string,
        /**
         * The id for the abuse report.
         */
        reportId: string,
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
    }): CancelablePromise<{
        /**
         * The id for the abuse report
         */
        readonly id?: number;
        /**
         * The campaign id for the abuse report
         */
        readonly campaign_id?: string;
        /**
         * The list id for the abuse report.
         */
        readonly list_id?: string;
        /**
         * The MD5 hash of the lowercase version of the list member's email address.
         */
        readonly email_id?: string;
        /**
         * Email address for a subscriber.
         */
        readonly email_address?: string;
        /**
         * A dictionary of merge fields where the keys are the merge tags. See the [Merge Fields documentation](https://mailchimp.com/developer/marketing/docs/merge-fields/#structure) for more about the structure.
         */
        merge_fields?: Record<string, any>;
        /**
         * [VIP status](https://mailchimp.com/help/designate-and-send-to-vip-contacts/) for subscriber.
         */
        readonly vip?: boolean;
        /**
         * Date for the abuse report
         */
        readonly date?: string;
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
            url: '/lists/{list_id}/abuse-reports/{report_id}',
            path: {
                'list_id': listId,
                'report_id': reportId,
            },
            query: {
                'fields': fields,
                'exclude_fields': excludeFields,
                'count': count,
                'offset': offset,
            },
        });
    }

    /**
     * List recent activity
     * Get up to the previous 180 days of daily detailed aggregated activity stats for a list, not including Automation activity.
     * @returns any
     * @throws ApiError
     */
    public getListsIdActivity({
        listId,
        count = 10,
        offset,
        fields,
        excludeFields,
    }: {
        /**
         * The unique ID for the list.
         */
        listId: string,
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
    }): CancelablePromise<{
        /**
         * Recent list activity.
         */
        activity?: Array<{
            /**
             * The date for the activity summary.
             */
            readonly day?: string;
            /**
             * The total number of emails sent on the date for the activity summary.
             */
            readonly emails_sent?: number;
            /**
             * The number of unique opens.
             */
            readonly unique_opens?: number;
            /**
             * The number of clicks.
             */
            readonly recipient_clicks?: number;
            /**
             * The number of hard bounces.
             */
            readonly hard_bounce?: number;
            /**
             * The number of soft bounces
             */
            readonly soft_bounce?: number;
            /**
             * The number of subscribes.
             */
            readonly subs?: number;
            /**
             * The number of unsubscribes.
             */
            readonly unsubs?: number;
            /**
             * The number of subscribers who may have been added outside of the [double opt-in process](https://mailchimp.com/help/about-double-opt-in/), such as imports or API activity.
             */
            readonly other_adds?: number;
            /**
             * The number of subscribers who may have been removed outside of unsubscribing or reporting an email as spam (for example, deleted subscribers).
             */
            readonly other_removes?: number;
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
         * The unique id for the list.
         */
        list_id?: string;
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
            url: '/lists/{list_id}/activity',
            path: {
                'list_id': listId,
            },
            query: {
                'count': count,
                'offset': offset,
                'fields': fields,
                'exclude_fields': excludeFields,
            },
        });
    }

    /**
     * List top email clients
     * Get a list of the top email clients based on user-agent strings.
     * @returns any
     * @throws ApiError
     */
    public getListsIdClients({
        listId,
        fields,
        excludeFields,
    }: {
        /**
         * The unique ID for the list.
         */
        listId: string,
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
         * An array of top email clients.
         */
        clients?: Array<{
            /**
             * The name of the email client.
             */
            readonly client?: string;
            /**
             * The number of subscribed members who used this email client.
             */
            readonly members?: number;
        }>;
        /**
         * The list id.
         */
        readonly list_id?: string;
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
            url: '/lists/{list_id}/clients',
            path: {
                'list_id': listId,
            },
            query: {
                'fields': fields,
                'exclude_fields': excludeFields,
            },
        });
    }

    /**
     * List growth history data
     * Get a month-by-month summary of a specific list's growth activity.
     * @returns any
     * @throws ApiError
     */
    public getListsIdGrowthHistory({
        listId,
        fields,
        excludeFields,
        count = 10,
        offset,
        sortField,
        sortDir,
    }: {
        /**
         * The unique ID for the list.
         */
        listId: string,
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
        sortField?: 'month',
        /**
         * Determines the order direction for sorted results.
         */
        sortDir?: 'ASC' | 'DESC',
    }): CancelablePromise<{
        /**
         * An array of objects, each representing a monthly growth report for a list.
         */
        history?: Array<{
            /**
             * The list id for the growth activity report.
             */
            readonly list_id?: string;
            /**
             * The month that the growth history is describing.
             */
            readonly month?: string;
            /**
             * (deprecated)
             */
            readonly existing?: number;
            /**
             * (deprecated)
             */
            readonly imports?: number;
            /**
             * (deprecated)
             */
            readonly optins?: number;
            /**
             * Total subscribed members on the list at the end of the month.
             */
            readonly subscribed?: number;
            /**
             * Newly unsubscribed members on the list for a specific month.
             */
            readonly unsubscribed?: number;
            /**
             * Newly reconfirmed members on the list for a specific month.
             */
            readonly reconfirm?: number;
            /**
             * Newly cleaned (hard-bounced) members on the list for a specific month.
             */
            readonly cleaned?: number;
            /**
             * Pending members on the list for a specific month.
             */
            readonly pending?: number;
            /**
             * Newly deleted members on the list for a specific month.
             */
            readonly deleted?: number;
            /**
             * Subscribers that have been sent transactional emails via Mandrill.
             */
            readonly transactional?: number;
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
         * The list id.
         */
        readonly list_id?: string;
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
            url: '/lists/{list_id}/growth-history',
            path: {
                'list_id': listId,
            },
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
     * Get growth history by month
     * Get a summary of a specific list's growth activity for a specific month and year.
     * @returns any
     * @throws ApiError
     */
    public getListsIdGrowthHistoryId({
        listId,
        month,
        fields,
        excludeFields,
    }: {
        /**
         * The unique ID for the list.
         */
        listId: string,
        /**
         * A specific month of list growth history.
         */
        month: string,
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
         * The list id for the growth activity report.
         */
        readonly list_id?: string;
        /**
         * The month that the growth history is describing.
         */
        readonly month?: string;
        /**
         * (deprecated)
         */
        readonly existing?: number;
        /**
         * (deprecated)
         */
        readonly imports?: number;
        /**
         * (deprecated)
         */
        readonly optins?: number;
        /**
         * Total subscribed members on the list at the end of the month.
         */
        readonly subscribed?: number;
        /**
         * Newly unsubscribed members on the list for a specific month.
         */
        readonly unsubscribed?: number;
        /**
         * Newly reconfirmed members on the list for a specific month.
         */
        readonly reconfirm?: number;
        /**
         * Newly cleaned (hard-bounced) members on the list for a specific month.
         */
        readonly cleaned?: number;
        /**
         * Pending members on the list for a specific month.
         */
        readonly pending?: number;
        /**
         * Newly deleted members on the list for a specific month.
         */
        readonly deleted?: number;
        /**
         * Subscribers that have been sent transactional emails via Mandrill.
         */
        readonly transactional?: number;
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
            url: '/lists/{list_id}/growth-history/{month}',
            path: {
                'list_id': listId,
                'month': month,
            },
            query: {
                'fields': fields,
                'exclude_fields': excludeFields,
            },
        });
    }

    /**
     * List interest categories
     * Get information about a list's interest categories.
     * @returns any
     * @throws ApiError
     */
    public getListsIdInterestCategories({
        listId,
        fields,
        excludeFields,
        count = 10,
        offset,
        type,
    }: {
        /**
         * The unique ID for the list.
         */
        listId: string,
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
         * Restrict results a type of interest group
         */
        type?: string,
    }): CancelablePromise<{
        /**
         * The ID for the list that this category belongs to.
         */
        readonly list_id?: string;
        /**
         * This array contains individual interest categories.
         */
        categories?: Array<{
            /**
             * The unique list id for the category.
             */
            readonly list_id?: string;
            /**
             * The id for the interest category.
             */
            readonly id?: string;
            /**
             * The text description of this category. This field appears on signup forms and is often phrased as a question.
             */
            title?: string;
            /**
             * The order that the categories are displayed in the list. Lower numbers display first.
             */
            display_order?: number;
            /**
             * Determines how this category’s interests appear on signup forms.
             */
            type?: 'checkboxes' | 'dropdown' | 'radio' | 'hidden';
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
            url: '/lists/{list_id}/interest-categories',
            path: {
                'list_id': listId,
            },
            query: {
                'fields': fields,
                'exclude_fields': excludeFields,
                'count': count,
                'offset': offset,
                'type': type,
            },
        });
    }

    /**
     * Add interest category
     * Create a new interest category.
     * @returns any
     * @throws ApiError
     */
    public postListsIdInterestCategories({
        listId,
        body,
    }: {
        /**
         * The unique ID for the list.
         */
        listId: string,
        body: {
            /**
             * The text description of this category. This field appears on signup forms and is often phrased as a question.
             */
            title: string;
            /**
             * The order that the categories are displayed in the list. Lower numbers display first.
             */
            display_order?: number;
            /**
             * Determines how this category’s interests appear on signup forms.
             */
            type: 'checkboxes' | 'dropdown' | 'radio' | 'hidden';
        },
    }): CancelablePromise<{
        /**
         * The unique list id for the category.
         */
        readonly list_id?: string;
        /**
         * The id for the interest category.
         */
        readonly id?: string;
        /**
         * The text description of this category. This field appears on signup forms and is often phrased as a question.
         */
        title?: string;
        /**
         * The order that the categories are displayed in the list. Lower numbers display first.
         */
        display_order?: number;
        /**
         * Determines how this category’s interests appear on signup forms.
         */
        type?: 'checkboxes' | 'dropdown' | 'radio' | 'hidden';
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
            url: '/lists/{list_id}/interest-categories',
            path: {
                'list_id': listId,
            },
            body: body,
        });
    }

    /**
     * Get interest category info
     * Get information about a specific interest category.
     * @returns any
     * @throws ApiError
     */
    public getListsIdInterestCategoriesId({
        listId,
        interestCategoryId,
        fields,
        excludeFields,
    }: {
        /**
         * The unique ID for the list.
         */
        listId: string,
        /**
         * The unique ID for the interest category.
         */
        interestCategoryId: string,
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
         * The unique list id for the category.
         */
        readonly list_id?: string;
        /**
         * The id for the interest category.
         */
        readonly id?: string;
        /**
         * The text description of this category. This field appears on signup forms and is often phrased as a question.
         */
        title?: string;
        /**
         * The order that the categories are displayed in the list. Lower numbers display first.
         */
        display_order?: number;
        /**
         * Determines how this category’s interests appear on signup forms.
         */
        type?: 'checkboxes' | 'dropdown' | 'radio' | 'hidden';
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
            url: '/lists/{list_id}/interest-categories/{interest_category_id}',
            path: {
                'list_id': listId,
                'interest_category_id': interestCategoryId,
            },
            query: {
                'fields': fields,
                'exclude_fields': excludeFields,
            },
        });
    }

    /**
     * Update interest category
     * Update a specific interest category.
     * @returns any
     * @throws ApiError
     */
    public patchListsIdInterestCategoriesId({
        listId,
        interestCategoryId,
        body,
    }: {
        /**
         * The unique ID for the list.
         */
        listId: string,
        /**
         * The unique ID for the interest category.
         */
        interestCategoryId: string,
        body: {
            /**
             * The text description of this category. This field appears on signup forms and is often phrased as a question.
             */
            title: string;
            /**
             * The order that the categories are displayed in the list. Lower numbers display first.
             */
            display_order?: number;
            /**
             * Determines how this category’s interests appear on signup forms.
             */
            type: 'checkboxes' | 'dropdown' | 'radio' | 'hidden';
        },
    }): CancelablePromise<{
        /**
         * The unique list id for the category.
         */
        readonly list_id?: string;
        /**
         * The id for the interest category.
         */
        readonly id?: string;
        /**
         * The text description of this category. This field appears on signup forms and is often phrased as a question.
         */
        title?: string;
        /**
         * The order that the categories are displayed in the list. Lower numbers display first.
         */
        display_order?: number;
        /**
         * Determines how this category’s interests appear on signup forms.
         */
        type?: 'checkboxes' | 'dropdown' | 'radio' | 'hidden';
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
            url: '/lists/{list_id}/interest-categories/{interest_category_id}',
            path: {
                'list_id': listId,
                'interest_category_id': interestCategoryId,
            },
            body: body,
        });
    }

    /**
     * Delete interest category
     * Delete a specific interest category.
     * @returns any An error generated by the Mailchimp API.
     * @throws ApiError
     */
    public deleteListsIdInterestCategoriesId({
        listId,
        interestCategoryId,
    }: {
        /**
         * The unique ID for the list.
         */
        listId: string,
        /**
         * The unique ID for the interest category.
         */
        interestCategoryId: string,
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
            url: '/lists/{list_id}/interest-categories/{interest_category_id}',
            path: {
                'list_id': listId,
                'interest_category_id': interestCategoryId,
            },
        });
    }

    /**
     * List interests in category
     * Get a list of this category's interests.
     * @returns any
     * @throws ApiError
     */
    public getListsIdInterestCategoriesIdInterests({
        listId,
        interestCategoryId,
        fields,
        excludeFields,
        count = 10,
        offset,
    }: {
        /**
         * The unique ID for the list.
         */
        listId: string,
        /**
         * The unique ID for the interest category.
         */
        interestCategoryId: string,
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
    }): CancelablePromise<{
        /**
         * An array of this category's interests
         */
        interests?: Array<{
            /**
             * The id for the interest category.
             */
            readonly category_id?: string;
            /**
             * The ID for the list that this interest belongs to.
             */
            readonly list_id?: string;
            /**
             * The ID for the interest.
             */
            readonly id?: string;
            /**
             * The name of the interest. This can be shown publicly on a subscription form.
             */
            name?: string;
            /**
             * The number of subscribers associated with this interest.
             */
            readonly subscriber_count?: string;
            /**
             * The display order for interests.
             */
            display_order?: number;
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
         * The unique list id that the interests belong to.
         */
        list_id?: string;
        /**
         * The id for the interest category.
         */
        category_id?: string;
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
            url: '/lists/{list_id}/interest-categories/{interest_category_id}/interests',
            path: {
                'list_id': listId,
                'interest_category_id': interestCategoryId,
            },
            query: {
                'fields': fields,
                'exclude_fields': excludeFields,
                'count': count,
                'offset': offset,
            },
        });
    }

    /**
     * Add interest in category
     * Create a new interest or 'group name' for a specific category.
     * @returns any
     * @throws ApiError
     */
    public postListsIdInterestCategoriesIdInterests({
        listId,
        interestCategoryId,
        body,
    }: {
        /**
         * The unique ID for the list.
         */
        listId: string,
        /**
         * The unique ID for the interest category.
         */
        interestCategoryId: string,
        body: {
            /**
             * The name of the interest. This can be shown publicly on a subscription form.
             */
            name: string;
            /**
             * The display order for interests.
             */
            display_order?: number;
        },
    }): CancelablePromise<{
        /**
         * The id for the interest category.
         */
        readonly category_id?: string;
        /**
         * The ID for the list that this interest belongs to.
         */
        readonly list_id?: string;
        /**
         * The ID for the interest.
         */
        readonly id?: string;
        /**
         * The name of the interest. This can be shown publicly on a subscription form.
         */
        name?: string;
        /**
         * The number of subscribers associated with this interest.
         */
        readonly subscriber_count?: string;
        /**
         * The display order for interests.
         */
        display_order?: number;
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
            url: '/lists/{list_id}/interest-categories/{interest_category_id}/interests',
            path: {
                'list_id': listId,
                'interest_category_id': interestCategoryId,
            },
            body: body,
        });
    }

    /**
     * Get interest in category
     * Get interests or 'group names' for a specific category.
     * @returns any
     * @throws ApiError
     */
    public getListsIdInterestCategoriesIdInterestsId({
        listId,
        interestCategoryId,
        interestId,
        fields,
        excludeFields,
    }: {
        /**
         * The unique ID for the list.
         */
        listId: string,
        /**
         * The unique ID for the interest category.
         */
        interestCategoryId: string,
        /**
         * The specific interest or 'group name'.
         */
        interestId: string,
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
         * The id for the interest category.
         */
        readonly category_id?: string;
        /**
         * The ID for the list that this interest belongs to.
         */
        readonly list_id?: string;
        /**
         * The ID for the interest.
         */
        readonly id?: string;
        /**
         * The name of the interest. This can be shown publicly on a subscription form.
         */
        name?: string;
        /**
         * The number of subscribers associated with this interest.
         */
        readonly subscriber_count?: string;
        /**
         * The display order for interests.
         */
        display_order?: number;
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
            url: '/lists/{list_id}/interest-categories/{interest_category_id}/interests/{interest_id}',
            path: {
                'list_id': listId,
                'interest_category_id': interestCategoryId,
                'interest_id': interestId,
            },
            query: {
                'fields': fields,
                'exclude_fields': excludeFields,
            },
        });
    }

    /**
     * Update interest in category
     * Update interests or 'group names' for a specific category.
     * @returns any
     * @throws ApiError
     */
    public patchListsIdInterestCategoriesIdInterestsId({
        listId,
        interestCategoryId,
        interestId,
        body,
    }: {
        /**
         * The unique ID for the list.
         */
        listId: string,
        /**
         * The unique ID for the interest category.
         */
        interestCategoryId: string,
        /**
         * The specific interest or 'group name'.
         */
        interestId: string,
        body: {
            /**
             * The name of the interest. This can be shown publicly on a subscription form.
             */
            name: string;
            /**
             * The display order for interests.
             */
            display_order?: number;
        },
    }): CancelablePromise<{
        /**
         * The id for the interest category.
         */
        readonly category_id?: string;
        /**
         * The ID for the list that this interest belongs to.
         */
        readonly list_id?: string;
        /**
         * The ID for the interest.
         */
        readonly id?: string;
        /**
         * The name of the interest. This can be shown publicly on a subscription form.
         */
        name?: string;
        /**
         * The number of subscribers associated with this interest.
         */
        readonly subscriber_count?: string;
        /**
         * The display order for interests.
         */
        display_order?: number;
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
            url: '/lists/{list_id}/interest-categories/{interest_category_id}/interests/{interest_id}',
            path: {
                'list_id': listId,
                'interest_category_id': interestCategoryId,
                'interest_id': interestId,
            },
            body: body,
        });
    }

    /**
     * Delete interest in category
     * Delete interests or group names in a specific category.
     * @returns any An error generated by the Mailchimp API.
     * @throws ApiError
     */
    public deleteListsIdInterestCategoriesIdInterestsId({
        listId,
        interestCategoryId,
        interestId,
    }: {
        /**
         * The unique ID for the list.
         */
        listId: string,
        /**
         * The unique ID for the interest category.
         */
        interestCategoryId: string,
        /**
         * The specific interest or 'group name'.
         */
        interestId: string,
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
            url: '/lists/{list_id}/interest-categories/{interest_category_id}/interests/{interest_id}',
            path: {
                'list_id': listId,
                'interest_category_id': interestCategoryId,
                'interest_id': interestId,
            },
        });
    }

    /**
     * List segments
     * Get information about all available segments for a specific list.
     * @returns any
     * @throws ApiError
     */
    public previewASegment({
        listId,
        fields,
        excludeFields,
        count = 10,
        offset,
        type,
        sinceCreatedAt,
        beforeCreatedAt,
        includeCleaned,
        includeTransactional,
        includeUnsubscribed,
        sinceUpdatedAt,
        beforeUpdatedAt,
    }: {
        /**
         * The unique ID for the list.
         */
        listId: string,
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
         * Limit results based on segment type.
         */
        type?: string,
        /**
         * Restrict results to segments created after the set time. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
         */
        sinceCreatedAt?: string,
        /**
         * Restrict results to segments created before the set time. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
         */
        beforeCreatedAt?: string,
        /**
         * Include cleaned members in response
         */
        includeCleaned?: boolean,
        /**
         * Include transactional members in response
         */
        includeTransactional?: boolean,
        /**
         * Include unsubscribed members in response
         */
        includeUnsubscribed?: boolean,
        /**
         * Restrict results to segments update after the set time. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
         */
        sinceUpdatedAt?: string,
        /**
         * Restrict results to segments update before the set time. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
         */
        beforeUpdatedAt?: string,
    }): CancelablePromise<{
        /**
         * An array of objects, each representing a list segment.
         */
        segments?: Array<{
            /**
             * The unique id for the segment.
             */
            readonly id?: number;
            /**
             * The name of the segment.
             */
            name?: string;
            /**
             * The number of active subscribers currently included in the segment.
             */
            readonly member_count?: number;
            /**
             * The type of segment. Static segments are now known as tags. Learn more about [tags](https://mailchimp.com/help/getting-started-tags?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).
             */
            readonly type?: 'saved' | 'static' | 'fuzzy';
            /**
             * The date and time the segment was created in ISO 8601 format.
             */
            readonly created_at?: string;
            /**
             * The date and time the segment was last updated in ISO 8601 format.
             */
            readonly updated_at?: string;
            /**
             * The conditions of the segment. Static segments (tags) and fuzzy segments don't have conditions.
             */
            options?: {
                /**
                 * Match type.
                 */
                match?: 'any' | 'all';
                /**
                 * Segment match conditions. There are multiple possible types, see the [condition types documentation](https://mailchimp.com/developer/marketing/docs/alternative-schemas/#segment-condition-schemas).
                 */
                conditions?: Array<any>;
            };
            /**
             * The list id.
             */
            readonly list_id?: string;
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
         * The list id.
         */
        readonly list_id?: string;
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
            url: '/lists/{list_id}/segments',
            path: {
                'list_id': listId,
            },
            query: {
                'fields': fields,
                'exclude_fields': excludeFields,
                'count': count,
                'offset': offset,
                'type': type,
                'since_created_at': sinceCreatedAt,
                'before_created_at': beforeCreatedAt,
                'include_cleaned': includeCleaned,
                'include_transactional': includeTransactional,
                'include_unsubscribed': includeUnsubscribed,
                'since_updated_at': sinceUpdatedAt,
                'before_updated_at': beforeUpdatedAt,
            },
        });
    }

    /**
     * Add segment
     * Create a new segment in a specific list.
     * @returns any
     * @throws ApiError
     */
    public postListsIdSegments({
        listId,
        body,
    }: {
        /**
         * The unique ID for the list.
         */
        listId: string,
        body: {
            /**
             * The name of the segment.
             */
            name: string;
            /**
             * An array of emails to be used for a static segment. Any emails provided that are not present on the list will be ignored. Passing an empty array will create a static segment without any subscribers. This field cannot be provided with the options field.
             */
            static_segment?: Array<string>;
            /**
             * The [conditions of the segment](https://mailchimp.com/help/save-and-manage-segments/). Static and fuzzy segments don't have conditions.
             */
            options?: {
                /**
                 * Match type.
                 */
                match?: 'any' | 'all';
                /**
                 * Segment match conditions. There are multiple possible types, see the [condition types documentation](https://mailchimp.com/developer/marketing/docs/alternative-schemas/#segment-condition-schemas).
                 */
                conditions?: Array<any>;
            };
        },
    }): CancelablePromise<{
        /**
         * The unique id for the segment.
         */
        readonly id?: number;
        /**
         * The name of the segment.
         */
        name?: string;
        /**
         * The number of active subscribers currently included in the segment.
         */
        readonly member_count?: number;
        /**
         * The type of segment. Static segments are now known as tags. Learn more about [tags](https://mailchimp.com/help/getting-started-tags?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).
         */
        readonly type?: 'saved' | 'static' | 'fuzzy';
        /**
         * The date and time the segment was created in ISO 8601 format.
         */
        readonly created_at?: string;
        /**
         * The date and time the segment was last updated in ISO 8601 format.
         */
        readonly updated_at?: string;
        /**
         * The conditions of the segment. Static segments (tags) and fuzzy segments don't have conditions.
         */
        options?: {
            /**
             * Match type.
             */
            match?: 'any' | 'all';
            /**
             * Segment match conditions. There are multiple possible types, see the [condition types documentation](https://mailchimp.com/developer/marketing/docs/alternative-schemas/#segment-condition-schemas).
             */
            conditions?: Array<any>;
        };
        /**
         * The list id.
         */
        readonly list_id?: string;
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
            url: '/lists/{list_id}/segments',
            path: {
                'list_id': listId,
            },
            body: body,
        });
    }

    /**
     * Get segment info
     * Get information about a specific segment.
     * @returns any
     * @throws ApiError
     */
    public getListsIdSegmentsId({
        listId,
        segmentId,
        fields,
        excludeFields,
        includeCleaned,
        includeTransactional,
        includeUnsubscribed,
    }: {
        /**
         * The unique ID for the list.
         */
        listId: string,
        /**
         * The unique id for the segment.
         */
        segmentId: string,
        /**
         * A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
         */
        fields?: Array<string>,
        /**
         * A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
         */
        excludeFields?: Array<string>,
        /**
         * Include cleaned members in response
         */
        includeCleaned?: boolean,
        /**
         * Include transactional members in response
         */
        includeTransactional?: boolean,
        /**
         * Include unsubscribed members in response
         */
        includeUnsubscribed?: boolean,
    }): CancelablePromise<{
        /**
         * The unique id for the segment.
         */
        readonly id?: number;
        /**
         * The name of the segment.
         */
        name?: string;
        /**
         * The number of active subscribers currently included in the segment.
         */
        readonly member_count?: number;
        /**
         * The type of segment. Static segments are now known as tags. Learn more about [tags](https://mailchimp.com/help/getting-started-tags?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).
         */
        readonly type?: 'saved' | 'static' | 'fuzzy';
        /**
         * The date and time the segment was created in ISO 8601 format.
         */
        readonly created_at?: string;
        /**
         * The date and time the segment was last updated in ISO 8601 format.
         */
        readonly updated_at?: string;
        /**
         * The conditions of the segment. Static segments (tags) and fuzzy segments don't have conditions.
         */
        options?: {
            /**
             * Match type.
             */
            match?: 'any' | 'all';
            /**
             * Segment match conditions. There are multiple possible types, see the [condition types documentation](https://mailchimp.com/developer/marketing/docs/alternative-schemas/#segment-condition-schemas).
             */
            conditions?: Array<any>;
        };
        /**
         * The list id.
         */
        readonly list_id?: string;
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
            url: '/lists/{list_id}/segments/{segment_id}',
            path: {
                'list_id': listId,
                'segment_id': segmentId,
            },
            query: {
                'fields': fields,
                'exclude_fields': excludeFields,
                'include_cleaned': includeCleaned,
                'include_transactional': includeTransactional,
                'include_unsubscribed': includeUnsubscribed,
            },
        });
    }

    /**
     * Delete segment
     * Delete a specific segment in a list.
     * @returns any An error generated by the Mailchimp API.
     * @throws ApiError
     */
    public deleteListsIdSegmentsId({
        listId,
        segmentId,
    }: {
        /**
         * The unique ID for the list.
         */
        listId: string,
        /**
         * The unique id for the segment.
         */
        segmentId: string,
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
            url: '/lists/{list_id}/segments/{segment_id}',
            path: {
                'list_id': listId,
                'segment_id': segmentId,
            },
        });
    }

    /**
     * Update segment
     * Update a specific segment in a list.
     * @returns any
     * @throws ApiError
     */
    public patchListsIdSegmentsId({
        listId,
        segmentId,
        body,
    }: {
        /**
         * The unique ID for the list.
         */
        listId: string,
        /**
         * The unique id for the segment.
         */
        segmentId: string,
        body: {
            /**
             * The name of the segment.
             */
            name: string;
            /**
             * An array of emails to be used for a static segment. Any emails provided that are not present on the list will be ignored. Passing an empty array for an existing static segment will reset that segment and remove all members. This field cannot be provided with the `options` field.
             */
            static_segment?: Array<string>;
            /**
             * The [conditions of the segment](https://mailchimp.com/help/save-and-manage-segments/). Static and fuzzy segments don't have conditions.
             */
            options?: {
                /**
                 * Match type.
                 */
                match?: 'any' | 'all';
                /**
                 * An array of segment conditions.
                 */
                conditions?: Array<Array<any>>;
            };
        },
    }): CancelablePromise<{
        /**
         * The unique id for the segment.
         */
        readonly id?: number;
        /**
         * The name of the segment.
         */
        name?: string;
        /**
         * The number of active subscribers currently included in the segment.
         */
        readonly member_count?: number;
        /**
         * The type of segment. Static segments are now known as tags. Learn more about [tags](https://mailchimp.com/help/getting-started-tags?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).
         */
        readonly type?: 'saved' | 'static' | 'fuzzy';
        /**
         * The date and time the segment was created in ISO 8601 format.
         */
        readonly created_at?: string;
        /**
         * The date and time the segment was last updated in ISO 8601 format.
         */
        readonly updated_at?: string;
        /**
         * The conditions of the segment. Static segments (tags) and fuzzy segments don't have conditions.
         */
        options?: {
            /**
             * Match type.
             */
            match?: 'any' | 'all';
            /**
             * Segment match conditions. There are multiple possible types, see the [condition types documentation](https://mailchimp.com/developer/marketing/docs/alternative-schemas/#segment-condition-schemas).
             */
            conditions?: Array<any>;
        };
        /**
         * The list id.
         */
        readonly list_id?: string;
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
            url: '/lists/{list_id}/segments/{segment_id}',
            path: {
                'list_id': listId,
                'segment_id': segmentId,
            },
            body: body,
        });
    }

    /**
     * Batch add or remove members
     * Batch add/remove list members to static segment
     * @returns any
     * @throws ApiError
     */
    public postListsIdSegmentsId({
        body,
        listId,
        segmentId,
    }: {
        body: {
            /**
             * An array of emails to be used for a static segment. Any emails provided that are not present on the list will be ignored. A maximum of 500 members can be sent.
             */
            members_to_add?: Array<string>;
            /**
             * An array of emails to be used for a static segment. Any emails provided that are not present on the list will be ignored. A maximum of 500 members can be sent.
             */
            members_to_remove?: Array<string>;
        },
        /**
         * The unique ID for the list.
         */
        listId: string,
        /**
         * The unique id for the segment.
         */
        segmentId: string,
    }): CancelablePromise<{
        /**
         * An array of objects, each representing a new member that was added to the static segment.
         */
        members_added?: Array<{
            /**
             * The MD5 hash of the lowercase version of the list member's email address.
             */
            readonly id?: string;
            /**
             * Email address for a subscriber.
             */
            email_address?: string;
            /**
             * An identifier for the address across all of Mailchimp.
             */
            readonly unique_email_id?: string;
            /**
             * Type of email this member asked to get ('html' or 'text').
             */
            email_type?: string;
            /**
             * Subscriber's current status.
             */
            status?: 'subscribed' | 'unsubscribed' | 'cleaned' | 'pending' | 'transactional';
            /**
             * An individual merge var and value for a member.
             */
            merge_fields?: Record<string, any>;
            /**
             * The key of this object's properties is the ID of the interest in question.
             */
            interests?: Record<string, boolean>;
            /**
             * Open and click rates for this subscriber.
             */
            readonly stats?: {
                /**
                 * A subscriber's average open rate.
                 */
                readonly avg_open_rate?: number;
                /**
                 * A subscriber's average clickthrough rate.
                 */
                readonly avg_click_rate?: number;
            };
            /**
             * IP address the subscriber signed up from.
             */
            readonly ip_signup?: string;
            /**
             * The date and time the subscriber signed up for the list in ISO 8601 format.
             */
            readonly timestamp_signup?: string;
            /**
             * The IP address the subscriber used to confirm their opt-in status.
             */
            readonly ip_opt?: string;
            /**
             * The date and time the subscriber confirmed their opt-in status in ISO 8601 format.
             */
            readonly timestamp_opt?: string;
            /**
             * Star rating for this member, between 1 and 5.
             */
            readonly member_rating?: number;
            /**
             * The date and time the member's info was last changed in ISO 8601 format.
             */
            readonly last_changed?: string;
            /**
             * If set/detected, the [subscriber's language](https://mailchimp.com/help/view-and-edit-contact-languages/).
             */
            language?: string;
            /**
             * [VIP status](https://mailchimp.com/help/designate-and-send-to-vip-contacts/) for subscriber.
             */
            vip?: boolean;
            /**
             * The list member's email client.
             */
            readonly email_client?: string;
            /**
             * Subscriber location information.
             */
            location?: {
                /**
                 * The location latitude.
                 */
                latitude?: number;
                /**
                 * The location longitude.
                 */
                longitude?: number;
                /**
                 * The time difference in hours from GMT.
                 */
                readonly gmtoff?: number;
                /**
                 * The offset for timezones where daylight saving time is observed.
                 */
                readonly dstoff?: number;
                /**
                 * The unique code for the location country.
                 */
                readonly country_code?: string;
                /**
                 * The timezone for the location.
                 */
                readonly timezone?: string;
            };
            /**
             * The most recent Note added about this member.
             */
            readonly last_note?: {
                /**
                 * The note id.
                 */
                readonly note_id?: number;
                /**
                 * The date and time the note was created in ISO 8601 format.
                 */
                readonly created_at?: string;
                /**
                 * The author of the note.
                 */
                readonly created_by?: string;
                /**
                 * The content of the note.
                 */
                readonly note?: string;
            };
            /**
             * The number of tags applied to this member.
             */
            readonly tags_count?: number;
            /**
             * The tags applied to this member.
             */
            tags?: Array<{
                /**
                 * The tag id.
                 */
                readonly id?: number;
                /**
                 * The name of the tag
                 */
                readonly name?: string;
            }>;
            /**
             * The list id.
             */
            readonly list_id?: string;
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
         * An array of objects, each representing an existing list member that got deleted from the static segment.
         */
        members_removed?: Array<{
            /**
             * The MD5 hash of the lowercase version of the list member's email address.
             */
            readonly id?: string;
            /**
             * Email address for a subscriber.
             */
            email_address?: string;
            /**
             * An identifier for the address across all of Mailchimp.
             */
            readonly unique_email_id?: string;
            /**
             * Type of email this member asked to get ('html' or 'text').
             */
            email_type?: string;
            /**
             * Subscriber's current status.
             */
            status?: 'subscribed' | 'unsubscribed' | 'cleaned' | 'pending' | 'transactional';
            /**
             * An individual merge var and value for a member.
             */
            merge_fields?: Record<string, any>;
            /**
             * The key of this object's properties is the ID of the interest in question.
             */
            interests?: Record<string, boolean>;
            /**
             * Open and click rates for this subscriber.
             */
            readonly stats?: {
                /**
                 * A subscriber's average open rate.
                 */
                readonly avg_open_rate?: number;
                /**
                 * A subscriber's average clickthrough rate.
                 */
                readonly avg_click_rate?: number;
            };
            /**
             * IP address the subscriber signed up from.
             */
            readonly ip_signup?: string;
            /**
             * The date and time the subscriber signed up for the list in ISO 8601 format.
             */
            readonly timestamp_signup?: string;
            /**
             * The IP address the subscriber used to confirm their opt-in status.
             */
            readonly ip_opt?: string;
            /**
             * The date and time the subscriber confirmed their opt-in status in ISO 8601 format.
             */
            readonly timestamp_opt?: string;
            /**
             * Star rating for this member, between 1 and 5.
             */
            readonly member_rating?: number;
            /**
             * The date and time the member's info was last changed in ISO 8601 format.
             */
            readonly last_changed?: string;
            /**
             * If set/detected, the [subscriber's language](https://mailchimp.com/help/view-and-edit-contact-languages/).
             */
            language?: string;
            /**
             * [VIP status](https://mailchimp.com/help/designate-and-send-to-vip-contacts/) for subscriber.
             */
            vip?: boolean;
            /**
             * The list member's email client.
             */
            readonly email_client?: string;
            /**
             * Subscriber location information.
             */
            location?: {
                /**
                 * The location latitude.
                 */
                latitude?: number;
                /**
                 * The location longitude.
                 */
                longitude?: number;
                /**
                 * The time difference in hours from GMT.
                 */
                readonly gmtoff?: number;
                /**
                 * The offset for timezones where daylight saving time is observed.
                 */
                readonly dstoff?: number;
                /**
                 * The unique code for the location country.
                 */
                readonly country_code?: string;
                /**
                 * The timezone for the location.
                 */
                readonly timezone?: string;
            };
            /**
             * The most recent Note added about this member.
             */
            readonly last_note?: {
                /**
                 * The note id.
                 */
                readonly note_id?: number;
                /**
                 * The date and time the note was created in ISO 8601 format.
                 */
                readonly created_at?: string;
                /**
                 * The author of the note.
                 */
                readonly created_by?: string;
                /**
                 * The content of the note.
                 */
                readonly note?: string;
            };
            /**
             * The number of tags applied to this member.
             */
            readonly tags_count?: number;
            /**
             * The tags applied to this member.
             */
            tags?: Array<{
                /**
                 * The tag id.
                 */
                readonly id?: number;
                /**
                 * The name of the tag
                 */
                readonly name?: string;
            }>;
            /**
             * The list id.
             */
            readonly list_id?: string;
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
         * An array of objects, each representing an array of email addresses that could not be added to the segment or removed and an error message providing more details.
         */
        errors?: Array<{
            /**
             * Email addresses added to the static segment or removed
             */
            email_addresses?: Array<string>;
            /**
             * The error message indicating why the email addresses could not be added or updated.
             */
            error?: string;
        }>;
        /**
         * The total number of items matching the query, irrespective of pagination.
         */
        total_added?: number;
        /**
         * The total number of items matching the query, irrespective of pagination.
         */
        total_removed?: number;
        /**
         * The total number of items matching the query, irrespective of pagination.
         */
        error_count?: number;
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
            url: '/lists/{list_id}/segments/{segment_id}',
            path: {
                'list_id': listId,
                'segment_id': segmentId,
            },
            body: body,
        });
    }

    /**
     * List members in segment
     * Get information about members in a saved segment.
     * @returns any
     * @throws ApiError
     */
    public getListsIdSegmentsIdMembers({
        listId,
        segmentId,
        fields,
        excludeFields,
        count = 10,
        offset,
        includeCleaned,
        includeTransactional,
        includeUnsubscribed,
    }: {
        /**
         * The unique ID for the list.
         */
        listId: string,
        /**
         * The unique id for the segment.
         */
        segmentId: string,
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
         * Include cleaned members in response
         */
        includeCleaned?: boolean,
        /**
         * Include transactional members in response
         */
        includeTransactional?: boolean,
        /**
         * Include unsubscribed members in response
         */
        includeUnsubscribed?: boolean,
    }): CancelablePromise<{
        /**
         * An array of objects, each representing a specific list member.
         */
        members?: Array<{
            /**
             * The MD5 hash of the lowercase version of the list member's email address.
             */
            readonly id?: string;
            /**
             * Email address for a subscriber.
             */
            readonly email_address?: string;
            /**
             * An identifier for the address across all of Mailchimp.
             */
            readonly unique_email_id?: string;
            /**
             * Type of email this member asked to get ('html' or 'text').
             */
            email_type?: string;
            /**
             * Subscriber's current status.
             */
            status?: 'subscribed' | 'unsubscribed' | 'cleaned' | 'pending' | 'transactional';
            /**
             * A dictionary of merge fields where the keys are the merge tags. See the [Merge Fields documentation](https://mailchimp.com/developer/marketing/docs/merge-fields/#structure) for more about the structure.
             */
            merge_fields?: Record<string, any>;
            /**
             * The key of this object's properties is the ID of the interest in question.
             */
            interests?: Record<string, boolean>;
            /**
             * Open and click rates for this subscriber.
             */
            readonly stats?: {
                /**
                 * A subscriber's average open rate.
                 */
                readonly avg_open_rate?: number;
                /**
                 * A subscriber's average clickthrough rate.
                 */
                readonly avg_click_rate?: number;
            };
            /**
             * IP address the subscriber signed up from.
             */
            readonly ip_signup?: string;
            /**
             * The date and time the subscriber signed up for the list in ISO 8601 format.
             */
            readonly timestamp_signup?: string;
            /**
             * The IP address the subscriber used to confirm their opt-in status.
             */
            readonly ip_opt?: string;
            /**
             * The date and time the subscriber confirmed their opt-in status in ISO 8601 format.
             */
            readonly timestamp_opt?: string;
            /**
             * Star rating for this member, between 1 and 5.
             */
            readonly member_rating?: number;
            /**
             * The date and time the member's info was last changed in ISO 8601 format.
             */
            readonly last_changed?: string;
            /**
             * If set/detected, the [subscriber's language](https://mailchimp.com/help/view-and-edit-contact-languages/).
             */
            language?: string;
            /**
             * [VIP status](https://mailchimp.com/help/designate-and-send-to-vip-contacts/) for subscriber.
             */
            vip?: boolean;
            /**
             * The list member's email client.
             */
            readonly email_client?: string;
            /**
             * Subscriber location information.
             */
            location?: {
                /**
                 * The location latitude.
                 */
                latitude?: number;
                /**
                 * The location longitude.
                 */
                longitude?: number;
                /**
                 * The time difference in hours from GMT.
                 */
                readonly gmtoff?: number;
                /**
                 * The offset for timezones where daylight saving time is observed.
                 */
                readonly dstoff?: number;
                /**
                 * The unique code for the location country.
                 */
                readonly country_code?: string;
                /**
                 * The timezone for the location.
                 */
                readonly timezone?: string;
            };
            /**
             * The most recent Note added about this member.
             */
            readonly last_note?: {
                /**
                 * The note id.
                 */
                readonly note_id?: number;
                /**
                 * The date and time the note was created in ISO 8601 format.
                 */
                readonly created_at?: string;
                /**
                 * The author of the note.
                 */
                readonly created_by?: string;
                /**
                 * The content of the note.
                 */
                readonly note?: string;
            };
            /**
             * The list id.
             */
            readonly list_id?: string;
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
            url: '/lists/{list_id}/segments/{segment_id}/members',
            path: {
                'list_id': listId,
                'segment_id': segmentId,
            },
            query: {
                'fields': fields,
                'exclude_fields': excludeFields,
                'count': count,
                'offset': offset,
                'include_cleaned': includeCleaned,
                'include_transactional': includeTransactional,
                'include_unsubscribed': includeUnsubscribed,
            },
        });
    }

    /**
     * Add member to segment
     * Add a member to a static segment.
     * @returns any
     * @throws ApiError
     */
    public postListsIdSegmentsIdMembers({
        listId,
        segmentId,
        body,
    }: {
        /**
         * The unique ID for the list.
         */
        listId: string,
        /**
         * The unique id for the segment.
         */
        segmentId: string,
        body: {
            /**
             * Email address for a subscriber.
             */
            email_address: string;
        },
    }): CancelablePromise<{
        /**
         * The MD5 hash of the lowercase version of the list member's email address.
         */
        readonly id?: string;
        /**
         * Email address for a subscriber.
         */
        readonly email_address?: string;
        /**
         * An identifier for the address across all of Mailchimp.
         */
        readonly unique_email_id?: string;
        /**
         * Type of email this member asked to get ('html' or 'text').
         */
        email_type?: string;
        /**
         * Subscriber's current status.
         */
        status?: 'subscribed' | 'unsubscribed' | 'cleaned' | 'pending' | 'transactional';
        /**
         * A dictionary of merge fields where the keys are the merge tags. See the [Merge Fields documentation](https://mailchimp.com/developer/marketing/docs/merge-fields/#structure) for more about the structure.
         */
        merge_fields?: Record<string, any>;
        /**
         * The key of this object's properties is the ID of the interest in question.
         */
        interests?: Record<string, boolean>;
        /**
         * Open and click rates for this subscriber.
         */
        readonly stats?: {
            /**
             * A subscriber's average open rate.
             */
            readonly avg_open_rate?: number;
            /**
             * A subscriber's average clickthrough rate.
             */
            readonly avg_click_rate?: number;
        };
        /**
         * IP address the subscriber signed up from.
         */
        readonly ip_signup?: string;
        /**
         * The date and time the subscriber signed up for the list in ISO 8601 format.
         */
        readonly timestamp_signup?: string;
        /**
         * The IP address the subscriber used to confirm their opt-in status.
         */
        readonly ip_opt?: string;
        /**
         * The date and time the subscriber confirmed their opt-in status in ISO 8601 format.
         */
        readonly timestamp_opt?: string;
        /**
         * Star rating for this member, between 1 and 5.
         */
        readonly member_rating?: number;
        /**
         * The date and time the member's info was last changed in ISO 8601 format.
         */
        readonly last_changed?: string;
        /**
         * If set/detected, the [subscriber's language](https://mailchimp.com/help/view-and-edit-contact-languages/).
         */
        language?: string;
        /**
         * [VIP status](https://mailchimp.com/help/designate-and-send-to-vip-contacts/) for subscriber.
         */
        vip?: boolean;
        /**
         * The list member's email client.
         */
        readonly email_client?: string;
        /**
         * Subscriber location information.
         */
        location?: {
            /**
             * The location latitude.
             */
            latitude?: number;
            /**
             * The location longitude.
             */
            longitude?: number;
            /**
             * The time difference in hours from GMT.
             */
            readonly gmtoff?: number;
            /**
             * The offset for timezones where daylight saving time is observed.
             */
            readonly dstoff?: number;
            /**
             * The unique code for the location country.
             */
            readonly country_code?: string;
            /**
             * The timezone for the location.
             */
            readonly timezone?: string;
        };
        /**
         * The most recent Note added about this member.
         */
        readonly last_note?: {
            /**
             * The note id.
             */
            readonly note_id?: number;
            /**
             * The date and time the note was created in ISO 8601 format.
             */
            readonly created_at?: string;
            /**
             * The author of the note.
             */
            readonly created_by?: string;
            /**
             * The content of the note.
             */
            readonly note?: string;
        };
        /**
         * The list id.
         */
        readonly list_id?: string;
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
            url: '/lists/{list_id}/segments/{segment_id}/members',
            path: {
                'list_id': listId,
                'segment_id': segmentId,
            },
            body: body,
        });
    }

    /**
     * Remove list member from segment
     * Remove a member from the specified static segment.
     * @returns any An error generated by the Mailchimp API.
     * @throws ApiError
     */
    public deleteListsIdSegmentsIdMembersId({
        listId,
        segmentId,
        subscriberHash,
    }: {
        /**
         * The unique ID for the list.
         */
        listId: string,
        /**
         * The unique id for the segment.
         */
        segmentId: string,
        /**
         * The MD5 hash of the lowercase version of the list member's email address.
         */
        subscriberHash: string,
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
            url: '/lists/{list_id}/segments/{segment_id}/members/{subscriber_hash}',
            path: {
                'list_id': listId,
                'segment_id': segmentId,
                'subscriber_hash': subscriberHash,
            },
        });
    }

    /**
     * Search for tags on a list by name.
     * Search for tags on a list by name. If no name is provided, will return all tags on the list.
     * @returns any
     * @throws ApiError
     */
    public searchTagsByName({
        listId,
        name,
    }: {
        /**
         * The unique ID for the list.
         */
        listId: string,
        /**
         * The search query used to filter tags.  The search query will be compared to each tag as a prefix, so all tags that have a name starting with this field will be returned.
         */
        name?: string,
    }): CancelablePromise<{
        /**
         * A list of matching tags.
         */
        readonly tags?: Array<any>;
        /**
         * The total number of items matching the query regardless of pagination.
         */
        readonly total_items?: number;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/lists/{list_id}/tag-search',
            path: {
                'list_id': listId,
            },
            query: {
                'name': name,
            },
        });
    }

    /**
     * List members info
     * Get information about members in a specific Mailchimp list.
     * @returns any
     * @throws ApiError
     */
    public getListsIdMembers({
        listId,
        fields,
        excludeFields,
        count = 10,
        offset,
        emailType,
        status,
        sinceTimestampOpt,
        beforeTimestampOpt,
        sinceLastChanged,
        beforeLastChanged,
        uniqueEmailId,
        vipOnly,
        interestCategoryId,
        interestIds,
        interestMatch,
        sortField,
        sortDir,
        sinceLastCampaign,
        unsubscribedSince,
    }: {
        /**
         * The unique ID for the list.
         */
        listId: string,
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
         * The email type.
         */
        emailType?: string,
        /**
         * The subscriber's status.
         */
        status?: 'subscribed' | 'unsubscribed' | 'cleaned' | 'pending' | 'transactional' | 'archived',
        /**
         * Restrict results to subscribers who opted-in after the set timeframe. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
         */
        sinceTimestampOpt?: string,
        /**
         * Restrict results to subscribers who opted-in before the set timeframe. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
         */
        beforeTimestampOpt?: string,
        /**
         * Restrict results to subscribers whose information changed after the set timeframe. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
         */
        sinceLastChanged?: string,
        /**
         * Restrict results to subscribers whose information changed before the set timeframe. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
         */
        beforeLastChanged?: string,
        /**
         * A unique identifier for the email address across all Mailchimp lists.
         */
        uniqueEmailId?: string,
        /**
         * A filter to return only the list's VIP members. Passing `true` will restrict results to VIP list members, passing `false` will return all list members.
         */
        vipOnly?: boolean,
        /**
         * The unique id for the interest category.
         */
        interestCategoryId?: string,
        /**
         * Used to filter list members by interests. Must be accompanied by interest_category_id and interest_match. The value must be a comma separated list of interest ids present for any supplied interest categories.
         */
        interestIds?: string,
        /**
         * Used to filter list members by interests. Must be accompanied by interest_category_id and interest_ids. "any" will match a member with any of the interest supplied, "all" will only match members with every interest supplied, and "none" will match members without any of the interest supplied.
         */
        interestMatch?: 'any' | 'all' | 'none',
        /**
         * Returns files sorted by the specified field.
         */
        sortField?: 'timestamp_opt' | 'timestamp_signup' | 'last_changed',
        /**
         * Determines the order direction for sorted results.
         */
        sortDir?: 'ASC' | 'DESC',
        /**
         * Filter subscribers by those subscribed/unsubscribed/pending/cleaned since last email campaign send. Member status is required to use this filter.
         */
        sinceLastCampaign?: boolean,
        /**
         * Filter subscribers by those unsubscribed since a specific date. Using any status other than unsubscribed with this filter will result in an error.
         */
        unsubscribedSince?: string,
    }): CancelablePromise<{
        /**
         * An array of objects, each representing a specific list member.
         */
        members?: Array<{
            /**
             * The MD5 hash of the lowercase version of the list member's email address.
             */
            readonly id?: string;
            /**
             * Email address for a subscriber.
             */
            email_address?: string;
            /**
             * An identifier for the address across all of Mailchimp.
             */
            readonly unique_email_id?: string;
            /**
             * As Mailchimp evolves beyond email, you may eventually have contacts without email addresses. While the `id` is the MD5 hash of their email address, this `contact_id` is agnostic of contact’s inclusion of an email address.
             */
            readonly contact_id?: string;
            /**
             * The contact's full name.
             */
            readonly full_name?: string;
            /**
             * The ID used in the Mailchimp web application. View this member in your Mailchimp account at `https://{dc}.admin.mailchimp.com/lists/members/view?id={web_id}`.
             */
            readonly web_id?: number;
            /**
             * Type of email this member asked to get ('html' or 'text').
             */
            email_type?: string;
            /**
             * Subscriber's current status.
             */
            status?: 'subscribed' | 'unsubscribed' | 'cleaned' | 'pending' | 'transactional' | 'archived';
            /**
             * A subscriber's reason for unsubscribing.
             */
            unsubscribe_reason?: string;
            /**
             * Indicates whether a contact consents to 1:1 messaging.
             */
            readonly consents_to_one_to_one_messaging?: boolean;
            /**
             * A dictionary of merge fields where the keys are the merge tags. See the [Merge Fields documentation](https://mailchimp.com/developer/marketing/docs/merge-fields/#structure) for more about the structure.
             */
            merge_fields?: Record<string, any>;
            /**
             * The key of this object's properties is the ID of the interest in question.
             */
            interests?: Record<string, boolean>;
            /**
             * Open and click rates for this subscriber.
             */
            readonly stats?: {
                /**
                 * A subscriber's average open rate.
                 */
                readonly avg_open_rate?: number;
                /**
                 * A subscriber's average clickthrough rate.
                 */
                readonly avg_click_rate?: number;
                /**
                 * Ecommerce stats for the list member if the list is attached to a store.
                 */
                readonly ecommerce_data?: {
                    /**
                     * The total revenue the list member has brought in.
                     */
                    readonly total_revenue?: number;
                    /**
                     * The total number of orders placed by the list member.
                     */
                    readonly number_of_orders?: number;
                    /**
                     * The three-letter ISO 4217 code for the currency that the store accepts.
                     */
                    readonly currency_code?: string;
                };
            };
            /**
             * IP address the subscriber signed up from.
             */
            readonly ip_signup?: string;
            /**
             * The date and time the subscriber signed up for the list in ISO 8601 format.
             */
            readonly timestamp_signup?: string;
            /**
             * The IP address the subscriber used to confirm their opt-in status.
             */
            readonly ip_opt?: string;
            /**
             * The date and time the subscribe confirmed their opt-in status in ISO 8601 format.
             */
            readonly timestamp_opt?: string;
            /**
             * Star rating for this member, between 1 and 5.
             */
            readonly member_rating?: number;
            /**
             * The date and time the member's info was last changed in ISO 8601 format.
             */
            readonly last_changed?: string;
            /**
             * If set/detected, the [subscriber's language](https://mailchimp.com/help/view-and-edit-contact-languages/).
             */
            language?: string;
            /**
             * [VIP status](https://mailchimp.com/help/designate-and-send-to-vip-contacts/) for subscriber.
             */
            vip?: boolean;
            /**
             * The list member's email client.
             */
            readonly email_client?: string;
            /**
             * Subscriber location information.
             */
            location?: {
                /**
                 * The location latitude.
                 */
                latitude?: number;
                /**
                 * The location longitude.
                 */
                longitude?: number;
                /**
                 * The time difference in hours from GMT.
                 */
                readonly gmtoff?: number;
                /**
                 * The offset for timezones where daylight saving time is observed.
                 */
                readonly dstoff?: number;
                /**
                 * The unique code for the location country.
                 */
                readonly country_code?: string;
                /**
                 * The timezone for the location.
                 */
                readonly timezone?: string;
                /**
                 * The region for the location.
                 */
                readonly region?: string;
            };
            /**
             * The marketing permissions for the subscriber.
             */
            marketing_permissions?: Array<{
                /**
                 * The id for the marketing permission on the list
                 */
                marketing_permission_id?: string;
                /**
                 * The text of the marketing permission.
                 */
                text?: string;
                /**
                 * If the subscriber has opted-in to the marketing permission.
                 */
                enabled?: boolean;
            }>;
            /**
             * The most recent Note added about this member.
             */
            readonly last_note?: {
                /**
                 * The note id.
                 */
                readonly note_id?: number;
                /**
                 * The date and time the note was created in ISO 8601 format.
                 */
                readonly created_at?: string;
                /**
                 * The author of the note.
                 */
                readonly created_by?: string;
                /**
                 * The content of the note.
                 */
                readonly note?: string;
            };
            /**
             * The source from which the subscriber was added to this list.
             */
            readonly source?: string;
            /**
             * The number of tags applied to this member.
             */
            readonly tags_count?: number;
            /**
             * Returns up to 50 tags applied to this member. To retrieve all tags see [Member Tags](https://mailchimp.com/developer/marketing/api/list-member-tags/).
             */
            tags?: Array<{
                /**
                 * The tag id.
                 */
                readonly id?: number;
                /**
                 * The name of the tag
                 */
                readonly name?: string;
            }>;
            /**
             * The list id.
             */
            readonly list_id?: string;
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
         * The list id.
         */
        list_id?: string;
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
            url: '/lists/{list_id}/members',
            path: {
                'list_id': listId,
            },
            query: {
                'fields': fields,
                'exclude_fields': excludeFields,
                'count': count,
                'offset': offset,
                'email_type': emailType,
                'status': status,
                'since_timestamp_opt': sinceTimestampOpt,
                'before_timestamp_opt': beforeTimestampOpt,
                'since_last_changed': sinceLastChanged,
                'before_last_changed': beforeLastChanged,
                'unique_email_id': uniqueEmailId,
                'vip_only': vipOnly,
                'interest_category_id': interestCategoryId,
                'interest_ids': interestIds,
                'interest_match': interestMatch,
                'sort_field': sortField,
                'sort_dir': sortDir,
                'since_last_campaign': sinceLastCampaign,
                'unsubscribed_since': unsubscribedSince,
            },
        });
    }

    /**
     * Add member to list
     * Add a new member to the list.
     * @returns any
     * @throws ApiError
     */
    public postListsIdMembers({
        listId,
        body,
        skipMergeValidation,
    }: {
        /**
         * The unique ID for the list.
         */
        listId: string,
        body: {
            /**
             * Email address for a subscriber.
             */
            email_address: string;
            /**
             * Type of email this member asked to get ('html' or 'text').
             */
            email_type?: string;
            /**
             * Subscriber's current status.
             */
            status: 'subscribed' | 'unsubscribed' | 'cleaned' | 'pending' | 'transactional';
            /**
             * A dictionary of merge fields where the keys are the merge tags. See the [Merge Fields documentation](https://mailchimp.com/developer/marketing/docs/merge-fields/#structure) for more about the structure.
             */
            merge_fields?: Record<string, any>;
            /**
             * The key of this object's properties is the ID of the interest in question.
             */
            interests?: Record<string, boolean>;
            /**
             * If set/detected, the [subscriber's language](https://mailchimp.com/help/view-and-edit-contact-languages/).
             */
            language?: string;
            /**
             * [VIP status](https://mailchimp.com/help/designate-and-send-to-vip-contacts/) for subscriber.
             */
            vip?: boolean;
            /**
             * Subscriber location information.
             */
            location?: {
                /**
                 * The location latitude.
                 */
                latitude?: number;
                /**
                 * The location longitude.
                 */
                longitude?: number;
            };
            /**
             * The marketing permissions for the subscriber.
             */
            marketing_permissions?: Array<{
                /**
                 * The id for the marketing permission on the list
                 */
                marketing_permission_id?: string;
                /**
                 * If the subscriber has opted-in to the marketing permission.
                 */
                enabled?: boolean;
            }>;
            /**
             * IP address the subscriber signed up from.
             */
            ip_signup?: string;
            /**
             * The date and time the subscriber signed up for the list in ISO 8601 format.
             */
            timestamp_signup?: string;
            /**
             * The IP address the subscriber used to confirm their opt-in status.
             */
            ip_opt?: string;
            /**
             * The date and time the subscribe confirmed their opt-in status in ISO 8601 format.
             */
            timestamp_opt?: string;
            /**
             * The tags that are associated with a member.
             */
            tags?: Array<string>;
        },
        /**
         * If skip_merge_validation is true, member data will be accepted without merge field values, even if the merge field is usually required. This defaults to false.
         */
        skipMergeValidation?: boolean,
    }): CancelablePromise<{
        /**
         * The MD5 hash of the lowercase version of the list member's email address.
         */
        readonly id?: string;
        /**
         * Email address for a subscriber.
         */
        email_address?: string;
        /**
         * An identifier for the address across all of Mailchimp.
         */
        readonly unique_email_id?: string;
        /**
         * As Mailchimp evolves beyond email, you may eventually have contacts without email addresses. While the `id` is the MD5 hash of their email address, this `contact_id` is agnostic of contact’s inclusion of an email address.
         */
        readonly contact_id?: string;
        /**
         * The contact's full name.
         */
        readonly full_name?: string;
        /**
         * The ID used in the Mailchimp web application. View this member in your Mailchimp account at `https://{dc}.admin.mailchimp.com/lists/members/view?id={web_id}`.
         */
        readonly web_id?: number;
        /**
         * Type of email this member asked to get ('html' or 'text').
         */
        email_type?: string;
        /**
         * Subscriber's current status.
         */
        status?: 'subscribed' | 'unsubscribed' | 'cleaned' | 'pending' | 'transactional' | 'archived';
        /**
         * A subscriber's reason for unsubscribing.
         */
        unsubscribe_reason?: string;
        /**
         * Indicates whether a contact consents to 1:1 messaging.
         */
        readonly consents_to_one_to_one_messaging?: boolean;
        /**
         * A dictionary of merge fields where the keys are the merge tags. See the [Merge Fields documentation](https://mailchimp.com/developer/marketing/docs/merge-fields/#structure) for more about the structure.
         */
        merge_fields?: Record<string, any>;
        /**
         * The key of this object's properties is the ID of the interest in question.
         */
        interests?: Record<string, boolean>;
        /**
         * Open and click rates for this subscriber.
         */
        readonly stats?: {
            /**
             * A subscriber's average open rate.
             */
            readonly avg_open_rate?: number;
            /**
             * A subscriber's average clickthrough rate.
             */
            readonly avg_click_rate?: number;
            /**
             * Ecommerce stats for the list member if the list is attached to a store.
             */
            readonly ecommerce_data?: {
                /**
                 * The total revenue the list member has brought in.
                 */
                readonly total_revenue?: number;
                /**
                 * The total number of orders placed by the list member.
                 */
                readonly number_of_orders?: number;
                /**
                 * The three-letter ISO 4217 code for the currency that the store accepts.
                 */
                readonly currency_code?: string;
            };
        };
        /**
         * IP address the subscriber signed up from.
         */
        readonly ip_signup?: string;
        /**
         * The date and time the subscriber signed up for the list in ISO 8601 format.
         */
        readonly timestamp_signup?: string;
        /**
         * The IP address the subscriber used to confirm their opt-in status.
         */
        readonly ip_opt?: string;
        /**
         * The date and time the subscribe confirmed their opt-in status in ISO 8601 format.
         */
        readonly timestamp_opt?: string;
        /**
         * Star rating for this member, between 1 and 5.
         */
        readonly member_rating?: number;
        /**
         * The date and time the member's info was last changed in ISO 8601 format.
         */
        readonly last_changed?: string;
        /**
         * If set/detected, the [subscriber's language](https://mailchimp.com/help/view-and-edit-contact-languages/).
         */
        language?: string;
        /**
         * [VIP status](https://mailchimp.com/help/designate-and-send-to-vip-contacts/) for subscriber.
         */
        vip?: boolean;
        /**
         * The list member's email client.
         */
        readonly email_client?: string;
        /**
         * Subscriber location information.
         */
        location?: {
            /**
             * The location latitude.
             */
            latitude?: number;
            /**
             * The location longitude.
             */
            longitude?: number;
            /**
             * The time difference in hours from GMT.
             */
            readonly gmtoff?: number;
            /**
             * The offset for timezones where daylight saving time is observed.
             */
            readonly dstoff?: number;
            /**
             * The unique code for the location country.
             */
            readonly country_code?: string;
            /**
             * The timezone for the location.
             */
            readonly timezone?: string;
            /**
             * The region for the location.
             */
            readonly region?: string;
        };
        /**
         * The marketing permissions for the subscriber.
         */
        marketing_permissions?: Array<{
            /**
             * The id for the marketing permission on the list
             */
            marketing_permission_id?: string;
            /**
             * The text of the marketing permission.
             */
            text?: string;
            /**
             * If the subscriber has opted-in to the marketing permission.
             */
            enabled?: boolean;
        }>;
        /**
         * The most recent Note added about this member.
         */
        readonly last_note?: {
            /**
             * The note id.
             */
            readonly note_id?: number;
            /**
             * The date and time the note was created in ISO 8601 format.
             */
            readonly created_at?: string;
            /**
             * The author of the note.
             */
            readonly created_by?: string;
            /**
             * The content of the note.
             */
            readonly note?: string;
        };
        /**
         * The source from which the subscriber was added to this list.
         */
        readonly source?: string;
        /**
         * The number of tags applied to this member.
         */
        readonly tags_count?: number;
        /**
         * Returns up to 50 tags applied to this member. To retrieve all tags see [Member Tags](https://mailchimp.com/developer/marketing/api/list-member-tags/).
         */
        tags?: Array<{
            /**
             * The tag id.
             */
            readonly id?: number;
            /**
             * The name of the tag
             */
            readonly name?: string;
        }>;
        /**
         * The list id.
         */
        readonly list_id?: string;
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
            url: '/lists/{list_id}/members',
            path: {
                'list_id': listId,
            },
            query: {
                'skip_merge_validation': skipMergeValidation,
            },
            body: body,
        });
    }

    /**
     * Get member info
     * Get information about a specific list member, including a currently subscribed, unsubscribed, or bounced member.
     * @returns any
     * @throws ApiError
     */
    public getListsIdMembersId({
        listId,
        subscriberHash,
        fields,
        excludeFields,
    }: {
        /**
         * The unique ID for the list.
         */
        listId: string,
        /**
         * The MD5 hash of the lowercase version of the list member's email address. This endpoint also accepts a list member's email address or contact_id.
         */
        subscriberHash: string,
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
         * The MD5 hash of the lowercase version of the list member's email address.
         */
        readonly id?: string;
        /**
         * Email address for a subscriber.
         */
        email_address?: string;
        /**
         * An identifier for the address across all of Mailchimp.
         */
        readonly unique_email_id?: string;
        /**
         * As Mailchimp evolves beyond email, you may eventually have contacts without email addresses. While the `id` is the MD5 hash of their email address, this `contact_id` is agnostic of contact’s inclusion of an email address.
         */
        readonly contact_id?: string;
        /**
         * The contact's full name.
         */
        readonly full_name?: string;
        /**
         * The ID used in the Mailchimp web application. View this member in your Mailchimp account at `https://{dc}.admin.mailchimp.com/lists/members/view?id={web_id}`.
         */
        readonly web_id?: number;
        /**
         * Type of email this member asked to get ('html' or 'text').
         */
        email_type?: string;
        /**
         * Subscriber's current status.
         */
        status?: 'subscribed' | 'unsubscribed' | 'cleaned' | 'pending' | 'transactional' | 'archived';
        /**
         * A subscriber's reason for unsubscribing.
         */
        unsubscribe_reason?: string;
        /**
         * Indicates whether a contact consents to 1:1 messaging.
         */
        readonly consents_to_one_to_one_messaging?: boolean;
        /**
         * A dictionary of merge fields where the keys are the merge tags. See the [Merge Fields documentation](https://mailchimp.com/developer/marketing/docs/merge-fields/#structure) for more about the structure.
         */
        merge_fields?: Record<string, any>;
        /**
         * The key of this object's properties is the ID of the interest in question.
         */
        interests?: Record<string, boolean>;
        /**
         * Open and click rates for this subscriber.
         */
        readonly stats?: {
            /**
             * A subscriber's average open rate.
             */
            readonly avg_open_rate?: number;
            /**
             * A subscriber's average clickthrough rate.
             */
            readonly avg_click_rate?: number;
            /**
             * Ecommerce stats for the list member if the list is attached to a store.
             */
            readonly ecommerce_data?: {
                /**
                 * The total revenue the list member has brought in.
                 */
                readonly total_revenue?: number;
                /**
                 * The total number of orders placed by the list member.
                 */
                readonly number_of_orders?: number;
                /**
                 * The three-letter ISO 4217 code for the currency that the store accepts.
                 */
                readonly currency_code?: string;
            };
        };
        /**
         * IP address the subscriber signed up from.
         */
        readonly ip_signup?: string;
        /**
         * The date and time the subscriber signed up for the list in ISO 8601 format.
         */
        readonly timestamp_signup?: string;
        /**
         * The IP address the subscriber used to confirm their opt-in status.
         */
        readonly ip_opt?: string;
        /**
         * The date and time the subscribe confirmed their opt-in status in ISO 8601 format.
         */
        readonly timestamp_opt?: string;
        /**
         * Star rating for this member, between 1 and 5.
         */
        readonly member_rating?: number;
        /**
         * The date and time the member's info was last changed in ISO 8601 format.
         */
        readonly last_changed?: string;
        /**
         * If set/detected, the [subscriber's language](https://mailchimp.com/help/view-and-edit-contact-languages/).
         */
        language?: string;
        /**
         * [VIP status](https://mailchimp.com/help/designate-and-send-to-vip-contacts/) for subscriber.
         */
        vip?: boolean;
        /**
         * The list member's email client.
         */
        readonly email_client?: string;
        /**
         * Subscriber location information.
         */
        location?: {
            /**
             * The location latitude.
             */
            latitude?: number;
            /**
             * The location longitude.
             */
            longitude?: number;
            /**
             * The time difference in hours from GMT.
             */
            readonly gmtoff?: number;
            /**
             * The offset for timezones where daylight saving time is observed.
             */
            readonly dstoff?: number;
            /**
             * The unique code for the location country.
             */
            readonly country_code?: string;
            /**
             * The timezone for the location.
             */
            readonly timezone?: string;
            /**
             * The region for the location.
             */
            readonly region?: string;
        };
        /**
         * The marketing permissions for the subscriber.
         */
        marketing_permissions?: Array<{
            /**
             * The id for the marketing permission on the list
             */
            marketing_permission_id?: string;
            /**
             * The text of the marketing permission.
             */
            text?: string;
            /**
             * If the subscriber has opted-in to the marketing permission.
             */
            enabled?: boolean;
        }>;
        /**
         * The most recent Note added about this member.
         */
        readonly last_note?: {
            /**
             * The note id.
             */
            readonly note_id?: number;
            /**
             * The date and time the note was created in ISO 8601 format.
             */
            readonly created_at?: string;
            /**
             * The author of the note.
             */
            readonly created_by?: string;
            /**
             * The content of the note.
             */
            readonly note?: string;
        };
        /**
         * The source from which the subscriber was added to this list.
         */
        readonly source?: string;
        /**
         * The number of tags applied to this member.
         */
        readonly tags_count?: number;
        /**
         * Returns up to 50 tags applied to this member. To retrieve all tags see [Member Tags](https://mailchimp.com/developer/marketing/api/list-member-tags/).
         */
        tags?: Array<{
            /**
             * The tag id.
             */
            readonly id?: number;
            /**
             * The name of the tag
             */
            readonly name?: string;
        }>;
        /**
         * The list id.
         */
        readonly list_id?: string;
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
            url: '/lists/{list_id}/members/{subscriber_hash}',
            path: {
                'list_id': listId,
                'subscriber_hash': subscriberHash,
            },
            query: {
                'fields': fields,
                'exclude_fields': excludeFields,
            },
        });
    }

    /**
     * Add or update list member
     * Add or update a list member.
     * @returns any
     * @throws ApiError
     */
    public putListsIdMembersId({
        listId,
        subscriberHash,
        body,
        skipMergeValidation,
    }: {
        /**
         * The unique ID for the list.
         */
        listId: string,
        /**
         * The MD5 hash of the lowercase version of the list member's email address. This endpoint also accepts a list member's email address or contact_id.
         */
        subscriberHash: string,
        body: {
            /**
             * Email address for a subscriber. This value is required only if the email address is not already present on the list.
             */
            email_address: string;
            /**
             * Subscriber's status. This value is required only if the email address is not already present on the list.
             */
            status_if_new: 'subscribed' | 'unsubscribed' | 'cleaned' | 'pending' | 'transactional';
            /**
             * Type of email this member asked to get ('html' or 'text').
             */
            email_type?: string;
            /**
             * Subscriber's current status.
             */
            status?: 'subscribed' | 'unsubscribed' | 'cleaned' | 'pending' | 'transactional';
            /**
             * A dictionary of merge fields where the keys are the merge tags. See the [Merge Fields documentation](https://mailchimp.com/developer/marketing/docs/merge-fields/#structure) for more about the structure.
             */
            merge_fields?: Record<string, any>;
            /**
             * The key of this object's properties is the ID of the interest in question.
             */
            interests?: Record<string, boolean>;
            /**
             * If set/detected, the [subscriber's language](https://mailchimp.com/help/view-and-edit-contact-languages/).
             */
            language?: string;
            /**
             * [VIP status](https://mailchimp.com/help/designate-and-send-to-vip-contacts/) for subscriber.
             */
            vip?: boolean;
            /**
             * Subscriber location information.
             */
            location?: {
                /**
                 * The location latitude.
                 */
                latitude?: number;
                /**
                 * The location longitude.
                 */
                longitude?: number;
            };
            /**
             * The marketing permissions for the subscriber.
             */
            marketing_permissions?: Array<{
                /**
                 * The id for the marketing permission on the list
                 */
                marketing_permission_id?: string;
                /**
                 * If the subscriber has opted-in to the marketing permission.
                 */
                enabled?: boolean;
            }>;
            /**
             * IP address the subscriber signed up from.
             */
            ip_signup?: string;
            /**
             * The date and time the subscriber signed up for the list in ISO 8601 format.
             */
            timestamp_signup?: string;
            /**
             * The IP address the subscriber used to confirm their opt-in status.
             */
            ip_opt?: string;
            /**
             * The date and time the subscriber confirmed their opt-in status in ISO 8601 format.
             */
            timestamp_opt?: string;
        },
        /**
         * If skip_merge_validation is true, member data will be accepted without merge field values, even if the merge field is usually required. This defaults to false.
         */
        skipMergeValidation?: boolean,
    }): CancelablePromise<{
        /**
         * The MD5 hash of the lowercase version of the list member's email address.
         */
        readonly id?: string;
        /**
         * Email address for a subscriber.
         */
        email_address?: string;
        /**
         * An identifier for the address across all of Mailchimp.
         */
        readonly unique_email_id?: string;
        /**
         * As Mailchimp evolves beyond email, you may eventually have contacts without email addresses. While the `id` is the MD5 hash of their email address, this `contact_id` is agnostic of contact’s inclusion of an email address.
         */
        readonly contact_id?: string;
        /**
         * The contact's full name.
         */
        readonly full_name?: string;
        /**
         * The ID used in the Mailchimp web application. View this member in your Mailchimp account at `https://{dc}.admin.mailchimp.com/lists/members/view?id={web_id}`.
         */
        readonly web_id?: number;
        /**
         * Type of email this member asked to get ('html' or 'text').
         */
        email_type?: string;
        /**
         * Subscriber's current status.
         */
        status?: 'subscribed' | 'unsubscribed' | 'cleaned' | 'pending' | 'transactional' | 'archived';
        /**
         * A subscriber's reason for unsubscribing.
         */
        unsubscribe_reason?: string;
        /**
         * Indicates whether a contact consents to 1:1 messaging.
         */
        readonly consents_to_one_to_one_messaging?: boolean;
        /**
         * A dictionary of merge fields where the keys are the merge tags. See the [Merge Fields documentation](https://mailchimp.com/developer/marketing/docs/merge-fields/#structure) for more about the structure.
         */
        merge_fields?: Record<string, any>;
        /**
         * The key of this object's properties is the ID of the interest in question.
         */
        interests?: Record<string, boolean>;
        /**
         * Open and click rates for this subscriber.
         */
        readonly stats?: {
            /**
             * A subscriber's average open rate.
             */
            readonly avg_open_rate?: number;
            /**
             * A subscriber's average clickthrough rate.
             */
            readonly avg_click_rate?: number;
            /**
             * Ecommerce stats for the list member if the list is attached to a store.
             */
            readonly ecommerce_data?: {
                /**
                 * The total revenue the list member has brought in.
                 */
                readonly total_revenue?: number;
                /**
                 * The total number of orders placed by the list member.
                 */
                readonly number_of_orders?: number;
                /**
                 * The three-letter ISO 4217 code for the currency that the store accepts.
                 */
                readonly currency_code?: string;
            };
        };
        /**
         * IP address the subscriber signed up from.
         */
        readonly ip_signup?: string;
        /**
         * The date and time the subscriber signed up for the list in ISO 8601 format.
         */
        readonly timestamp_signup?: string;
        /**
         * The IP address the subscriber used to confirm their opt-in status.
         */
        readonly ip_opt?: string;
        /**
         * The date and time the subscribe confirmed their opt-in status in ISO 8601 format.
         */
        readonly timestamp_opt?: string;
        /**
         * Star rating for this member, between 1 and 5.
         */
        readonly member_rating?: number;
        /**
         * The date and time the member's info was last changed in ISO 8601 format.
         */
        readonly last_changed?: string;
        /**
         * If set/detected, the [subscriber's language](https://mailchimp.com/help/view-and-edit-contact-languages/).
         */
        language?: string;
        /**
         * [VIP status](https://mailchimp.com/help/designate-and-send-to-vip-contacts/) for subscriber.
         */
        vip?: boolean;
        /**
         * The list member's email client.
         */
        readonly email_client?: string;
        /**
         * Subscriber location information.
         */
        location?: {
            /**
             * The location latitude.
             */
            latitude?: number;
            /**
             * The location longitude.
             */
            longitude?: number;
            /**
             * The time difference in hours from GMT.
             */
            readonly gmtoff?: number;
            /**
             * The offset for timezones where daylight saving time is observed.
             */
            readonly dstoff?: number;
            /**
             * The unique code for the location country.
             */
            readonly country_code?: string;
            /**
             * The timezone for the location.
             */
            readonly timezone?: string;
            /**
             * The region for the location.
             */
            readonly region?: string;
        };
        /**
         * The marketing permissions for the subscriber.
         */
        marketing_permissions?: Array<{
            /**
             * The id for the marketing permission on the list
             */
            marketing_permission_id?: string;
            /**
             * The text of the marketing permission.
             */
            text?: string;
            /**
             * If the subscriber has opted-in to the marketing permission.
             */
            enabled?: boolean;
        }>;
        /**
         * The most recent Note added about this member.
         */
        readonly last_note?: {
            /**
             * The note id.
             */
            readonly note_id?: number;
            /**
             * The date and time the note was created in ISO 8601 format.
             */
            readonly created_at?: string;
            /**
             * The author of the note.
             */
            readonly created_by?: string;
            /**
             * The content of the note.
             */
            readonly note?: string;
        };
        /**
         * The source from which the subscriber was added to this list.
         */
        readonly source?: string;
        /**
         * The number of tags applied to this member.
         */
        readonly tags_count?: number;
        /**
         * Returns up to 50 tags applied to this member. To retrieve all tags see [Member Tags](https://mailchimp.com/developer/marketing/api/list-member-tags/).
         */
        tags?: Array<{
            /**
             * The tag id.
             */
            readonly id?: number;
            /**
             * The name of the tag
             */
            readonly name?: string;
        }>;
        /**
         * The list id.
         */
        readonly list_id?: string;
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
            method: 'PUT',
            url: '/lists/{list_id}/members/{subscriber_hash}',
            path: {
                'list_id': listId,
                'subscriber_hash': subscriberHash,
            },
            query: {
                'skip_merge_validation': skipMergeValidation,
            },
            body: body,
        });
    }

    /**
     * Update list member
     * Update information for a specific list member.
     * @returns any
     * @throws ApiError
     */
    public patchListsIdMembersId({
        listId,
        subscriberHash,
        body,
        skipMergeValidation,
    }: {
        /**
         * The unique ID for the list.
         */
        listId: string,
        /**
         * The MD5 hash of the lowercase version of the list member's email address. This endpoint also accepts a list member's email address or contact_id.
         */
        subscriberHash: string,
        body: {
            /**
             * Email address for a subscriber.
             */
            email_address?: string;
            /**
             * Type of email this member asked to get ('html' or 'text').
             */
            email_type?: string;
            /**
             * Subscriber's current status.
             */
            status?: 'subscribed' | 'unsubscribed' | 'cleaned' | 'pending';
            /**
             * A dictionary of merge fields where the keys are the merge tags. See the [Merge Fields documentation](https://mailchimp.com/developer/marketing/docs/merge-fields/#structure) for more about the structure.
             */
            merge_fields?: Record<string, any>;
            /**
             * The key of this object's properties is the ID of the interest in question.
             */
            interests?: Record<string, boolean>;
            /**
             * If set/detected, the [subscriber's language](https://mailchimp.com/help/view-and-edit-contact-languages/).
             */
            language?: string;
            /**
             * [VIP status](https://mailchimp.com/help/designate-and-send-to-vip-contacts/) for subscriber.
             */
            vip?: boolean;
            /**
             * Subscriber location information.
             */
            location?: {
                /**
                 * The location latitude.
                 */
                latitude?: number;
                /**
                 * The location longitude.
                 */
                longitude?: number;
            };
            /**
             * The marketing permissions for the subscriber.
             */
            marketing_permissions?: Array<{
                /**
                 * The id for the marketing permission on the list
                 */
                marketing_permission_id?: string;
                /**
                 * If the subscriber has opted-in to the marketing permission.
                 */
                enabled?: boolean;
            }>;
            /**
             * IP address the subscriber signed up from.
             */
            ip_signup?: string;
            /**
             * The date and time the subscriber signed up for the list in ISO 8601 format.
             */
            timestamp_signup?: string;
            /**
             * The IP address the subscriber used to confirm their opt-in status.
             */
            ip_opt?: string;
            /**
             * The date and time the subscriber confirmed their opt-in status in ISO 8601 format.
             */
            timestamp_opt?: string;
        },
        /**
         * If skip_merge_validation is true, member data will be accepted without merge field values, even if the merge field is usually required. This defaults to false.
         */
        skipMergeValidation?: boolean,
    }): CancelablePromise<{
        /**
         * The MD5 hash of the lowercase version of the list member's email address.
         */
        readonly id?: string;
        /**
         * Email address for a subscriber.
         */
        email_address?: string;
        /**
         * An identifier for the address across all of Mailchimp.
         */
        readonly unique_email_id?: string;
        /**
         * As Mailchimp evolves beyond email, you may eventually have contacts without email addresses. While the `id` is the MD5 hash of their email address, this `contact_id` is agnostic of contact’s inclusion of an email address.
         */
        readonly contact_id?: string;
        /**
         * The contact's full name.
         */
        readonly full_name?: string;
        /**
         * The ID used in the Mailchimp web application. View this member in your Mailchimp account at `https://{dc}.admin.mailchimp.com/lists/members/view?id={web_id}`.
         */
        readonly web_id?: number;
        /**
         * Type of email this member asked to get ('html' or 'text').
         */
        email_type?: string;
        /**
         * Subscriber's current status.
         */
        status?: 'subscribed' | 'unsubscribed' | 'cleaned' | 'pending' | 'transactional' | 'archived';
        /**
         * A subscriber's reason for unsubscribing.
         */
        unsubscribe_reason?: string;
        /**
         * Indicates whether a contact consents to 1:1 messaging.
         */
        readonly consents_to_one_to_one_messaging?: boolean;
        /**
         * A dictionary of merge fields where the keys are the merge tags. See the [Merge Fields documentation](https://mailchimp.com/developer/marketing/docs/merge-fields/#structure) for more about the structure.
         */
        merge_fields?: Record<string, any>;
        /**
         * The key of this object's properties is the ID of the interest in question.
         */
        interests?: Record<string, boolean>;
        /**
         * Open and click rates for this subscriber.
         */
        readonly stats?: {
            /**
             * A subscriber's average open rate.
             */
            readonly avg_open_rate?: number;
            /**
             * A subscriber's average clickthrough rate.
             */
            readonly avg_click_rate?: number;
            /**
             * Ecommerce stats for the list member if the list is attached to a store.
             */
            readonly ecommerce_data?: {
                /**
                 * The total revenue the list member has brought in.
                 */
                readonly total_revenue?: number;
                /**
                 * The total number of orders placed by the list member.
                 */
                readonly number_of_orders?: number;
                /**
                 * The three-letter ISO 4217 code for the currency that the store accepts.
                 */
                readonly currency_code?: string;
            };
        };
        /**
         * IP address the subscriber signed up from.
         */
        readonly ip_signup?: string;
        /**
         * The date and time the subscriber signed up for the list in ISO 8601 format.
         */
        readonly timestamp_signup?: string;
        /**
         * The IP address the subscriber used to confirm their opt-in status.
         */
        readonly ip_opt?: string;
        /**
         * The date and time the subscribe confirmed their opt-in status in ISO 8601 format.
         */
        readonly timestamp_opt?: string;
        /**
         * Star rating for this member, between 1 and 5.
         */
        readonly member_rating?: number;
        /**
         * The date and time the member's info was last changed in ISO 8601 format.
         */
        readonly last_changed?: string;
        /**
         * If set/detected, the [subscriber's language](https://mailchimp.com/help/view-and-edit-contact-languages/).
         */
        language?: string;
        /**
         * [VIP status](https://mailchimp.com/help/designate-and-send-to-vip-contacts/) for subscriber.
         */
        vip?: boolean;
        /**
         * The list member's email client.
         */
        readonly email_client?: string;
        /**
         * Subscriber location information.
         */
        location?: {
            /**
             * The location latitude.
             */
            latitude?: number;
            /**
             * The location longitude.
             */
            longitude?: number;
            /**
             * The time difference in hours from GMT.
             */
            readonly gmtoff?: number;
            /**
             * The offset for timezones where daylight saving time is observed.
             */
            readonly dstoff?: number;
            /**
             * The unique code for the location country.
             */
            readonly country_code?: string;
            /**
             * The timezone for the location.
             */
            readonly timezone?: string;
            /**
             * The region for the location.
             */
            readonly region?: string;
        };
        /**
         * The marketing permissions for the subscriber.
         */
        marketing_permissions?: Array<{
            /**
             * The id for the marketing permission on the list
             */
            marketing_permission_id?: string;
            /**
             * The text of the marketing permission.
             */
            text?: string;
            /**
             * If the subscriber has opted-in to the marketing permission.
             */
            enabled?: boolean;
        }>;
        /**
         * The most recent Note added about this member.
         */
        readonly last_note?: {
            /**
             * The note id.
             */
            readonly note_id?: number;
            /**
             * The date and time the note was created in ISO 8601 format.
             */
            readonly created_at?: string;
            /**
             * The author of the note.
             */
            readonly created_by?: string;
            /**
             * The content of the note.
             */
            readonly note?: string;
        };
        /**
         * The source from which the subscriber was added to this list.
         */
        readonly source?: string;
        /**
         * The number of tags applied to this member.
         */
        readonly tags_count?: number;
        /**
         * Returns up to 50 tags applied to this member. To retrieve all tags see [Member Tags](https://mailchimp.com/developer/marketing/api/list-member-tags/).
         */
        tags?: Array<{
            /**
             * The tag id.
             */
            readonly id?: number;
            /**
             * The name of the tag
             */
            readonly name?: string;
        }>;
        /**
         * The list id.
         */
        readonly list_id?: string;
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
            url: '/lists/{list_id}/members/{subscriber_hash}',
            path: {
                'list_id': listId,
                'subscriber_hash': subscriberHash,
            },
            query: {
                'skip_merge_validation': skipMergeValidation,
            },
            body: body,
        });
    }

    /**
     * Archive list member
     * Archive a list member. To permanently delete, use the delete-permanent action.
     * @returns any An error generated by the Mailchimp API.
     * @throws ApiError
     */
    public deleteListsIdMembersId({
        listId,
        subscriberHash,
    }: {
        /**
         * The unique ID for the list.
         */
        listId: string,
        /**
         * The MD5 hash of the lowercase version of the list member's email address. This endpoint also accepts a list member's email address or contact_id.
         */
        subscriberHash: string,
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
            url: '/lists/{list_id}/members/{subscriber_hash}',
            path: {
                'list_id': listId,
                'subscriber_hash': subscriberHash,
            },
        });
    }

    /**
     * View recent activity 50
     * Get the last 50 events of a member's activity on a specific list, including opens, clicks, and unsubscribes.
     * @returns any
     * @throws ApiError
     */
    public getListsIdMembersIdActivity({
        listId,
        subscriberHash,
        fields,
        excludeFields,
        action,
    }: {
        /**
         * The unique ID for the list.
         */
        listId: string,
        /**
         * The MD5 hash of the lowercase version of the list member's email address. This endpoint also accepts a list member's email address or contact_id.
         */
        subscriberHash: string,
        /**
         * A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
         */
        fields?: Array<string>,
        /**
         * A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
         */
        excludeFields?: Array<string>,
        /**
         * A comma seperated list of actions to return.
         */
        action?: Array<string>,
    }): CancelablePromise<{
        /**
         * An array of objects, each representing a member event.
         */
        activity?: Array<{
            /**
             * The type of action recorded for the subscriber.
             */
            action?: string;
            /**
             * The date and time recorded for the action.
             */
            timestamp?: string;
            /**
             * For clicks, the URL the subscriber clicked on.
             */
            url?: string;
            /**
             * The type of campaign that was sent.
             */
            type?: string;
            /**
             * The web-based ID for the campaign.
             */
            campaign_id?: string;
            /**
             * If set, the campaign's title.
             */
            title?: string;
            /**
             * The ID of the parent campaign.
             */
            parent_campaign?: string;
        }>;
        /**
         * The MD5 hash of the lowercase version of the list member's email address.
         */
        readonly email_id?: string;
        /**
         * As Mailchimp evolves beyond email, you may eventually have contacts without email addresses. While the `email_id` is the MD5 hash of their email address, this `contact_id` is agnostic of contact’s inclusion of an email address.
         */
        readonly contact_id?: string;
        /**
         * The list id.
         */
        readonly list_id?: string;
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
            url: '/lists/{list_id}/members/{subscriber_hash}/activity',
            path: {
                'list_id': listId,
                'subscriber_hash': subscriberHash,
            },
            query: {
                'fields': fields,
                'exclude_fields': excludeFields,
                'action': action,
            },
        });
    }

    /**
     * View recent activity
     * Get a member's activity on a specific list, including opens, clicks, and unsubscribes.
     * @returns any
     * @throws ApiError
     */
    public getListsIdMembersIdActivityFeed({
        listId,
        subscriberHash,
        fields,
        excludeFields,
        count = 10,
        offset,
        activityFilters,
    }: {
        /**
         * The unique ID for the list.
         */
        listId: string,
        /**
         * The MD5 hash of the lowercase version of the list member's email address.
         */
        subscriberHash: string,
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
         * A comma-separated list of activity filters that correspond to a set of activity types, e.g "?activity_filters=open,bounce,click".
         */
        activityFilters?: Array<string>,
    }): CancelablePromise<{
        /**
         * An array of objects, each representing a contact event. There are multiple possible types, see the [activity schema documentation](https://mailchimp.com/developer/marketing/docs/alternative-schemas/#activity-schemas).
         */
        readonly activity?: Array<any>;
        /**
         * The MD5 hash of the lowercase version of the list member's email address.
         */
        readonly email_id?: string;
        /**
         * The list id.
         */
        readonly list_id?: string;
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
            url: '/lists/{list_id}/members/{subscriber_hash}/activity-feed',
            path: {
                'list_id': listId,
                'subscriber_hash': subscriberHash,
            },
            query: {
                'fields': fields,
                'exclude_fields': excludeFields,
                'count': count,
                'offset': offset,
                'activity_filters': activityFilters,
            },
        });
    }

    /**
     * List member tags
     * Get the tags on a list member.
     * @returns any
     * @throws ApiError
     */
    public getListMemberTags({
        listId,
        subscriberHash,
        fields,
        excludeFields,
        count = 10,
        offset,
    }: {
        /**
         * The unique ID for the list.
         */
        listId: string,
        /**
         * The MD5 hash of the lowercase version of the list member's email address. This endpoint also accepts a list member's email address or contact_id.
         */
        subscriberHash: string,
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
    }): CancelablePromise<{
        /**
         * A list of tags assigned to the list member.
         */
        tags?: Array<any>;
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
            url: '/lists/{list_id}/members/{subscriber_hash}/tags',
            path: {
                'list_id': listId,
                'subscriber_hash': subscriberHash,
            },
            query: {
                'fields': fields,
                'exclude_fields': excludeFields,
                'count': count,
                'offset': offset,
            },
        });
    }

    /**
     * Add or remove member tags
     * Add or remove tags from a list member. If a tag that does not exist is passed in and set as 'active', a new tag will be created.
     * @returns any An error generated by the Mailchimp API.
     * @throws ApiError
     */
    public postListMemberTags({
        listId,
        subscriberHash,
        body,
    }: {
        /**
         * The unique ID for the list.
         */
        listId: string,
        /**
         * The MD5 hash of the lowercase version of the list member's email address.
         */
        subscriberHash: string,
        body: {
            /**
             * A list of tags assigned to the list member.
             */
            tags: Array<{
                /**
                 * The name of the tag.
                 */
                name: string;
                /**
                 * The status for the tag on the member, pass in active to add a tag or inactive to remove it.
                 */
                status: 'inactive' | 'active';
            }>;
            /**
             * When is_syncing is true, automations based on the tags in the request will not fire
             */
            is_syncing?: boolean;
        },
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
            url: '/lists/{list_id}/members/{subscriber_hash}/tags',
            path: {
                'list_id': listId,
                'subscriber_hash': subscriberHash,
            },
            body: body,
        });
    }

    /**
     * List member events
     * Get events for a contact.
     * @returns any
     * @throws ApiError
     */
    public getListsIdMembersIdEvents({
        listId,
        subscriberHash,
        count = 10,
        offset,
        fields,
        excludeFields,
    }: {
        /**
         * The unique ID for the list.
         */
        listId: string,
        /**
         * The MD5 hash of the lowercase version of the list member's email address. This endpoint also accepts a list member's email address or contact_id.
         */
        subscriberHash: string,
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
    }): CancelablePromise<{
        /**
         * An array of objects, each representing an event.
         */
        events?: Array<{
            /**
             * The date and time the event occurred in ISO 8601 format.
             */
            readonly occurred_at?: string;
            /**
             * The name for this type of event ('purchased', 'visited', etc). Must be 2-30 characters in length
             */
            name?: string;
            /**
             * An optional list of properties
             */
            properties?: Record<string, string>;
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
            url: '/lists/{list_id}/members/{subscriber_hash}/events',
            path: {
                'list_id': listId,
                'subscriber_hash': subscriberHash,
            },
            query: {
                'count': count,
                'offset': offset,
                'fields': fields,
                'exclude_fields': excludeFields,
            },
        });
    }

    /**
     * Add event
     * Add an event for a list member.
     * @returns any An error generated by the Mailchimp API.
     * @throws ApiError
     */
    public postListMemberEvents({
        listId,
        subscriberHash,
        body,
    }: {
        /**
         * The unique ID for the list.
         */
        listId: string,
        /**
         * The MD5 hash of the lowercase version of the list member's email address. This endpoint also accepts a list member's email address or contact_id.
         */
        subscriberHash: string,
        body: {
            /**
             * The name for this type of event ('purchased', 'visited', etc). Must be 2-30 characters in length
             */
            name: string;
            /**
             * An optional list of properties
             */
            properties?: Record<string, string>;
            /**
             * Events created with the is_syncing value set to `true` will not trigger automations.
             */
            is_syncing?: boolean;
            /**
             * The date and time the event occurred in ISO 8601 format.
             */
            occurred_at?: string;
        },
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
            url: '/lists/{list_id}/members/{subscriber_hash}/events',
            path: {
                'list_id': listId,
                'subscriber_hash': subscriberHash,
            },
            body: body,
        });
    }

    /**
     * List member goal events
     * Get the last 50 Goal events for a member on a specific list.
     * @returns any
     * @throws ApiError
     */
    public getListsIdMembersIdGoals({
        listId,
        subscriberHash,
        fields,
        excludeFields,
    }: {
        /**
         * The unique ID for the list.
         */
        listId: string,
        /**
         * The MD5 hash of the lowercase version of the list member's email address. This endpoint also accepts a list member's email address or contact_id.
         */
        subscriberHash: string,
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
         * The last 50 Goal events triggered by a member.
         */
        goals?: Array<{
            /**
             * The id for a Goal event.
             */
            goal_id?: number;
            /**
             * The name/type of Goal event triggered.
             */
            event?: string;
            /**
             * The date and time the user last triggered the Goal event in ISO 8601 format.
             */
            last_visited_at?: string;
            /**
             * Any extra data passed with the Goal event.
             */
            data?: string;
        }>;
        /**
         * The list id.
         */
        readonly list_id?: string;
        /**
         * The MD5 hash of the lowercase version of the list member's email address.
         */
        readonly email_id?: string;
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
            url: '/lists/{list_id}/members/{subscriber_hash}/goals',
            path: {
                'list_id': listId,
                'subscriber_hash': subscriberHash,
            },
            query: {
                'fields': fields,
                'exclude_fields': excludeFields,
            },
        });
    }

    /**
     * List recent member notes
     * Get recent notes for a specific list member.
     * @returns any
     * @throws ApiError
     */
    public getListsIdMembersIdNotes({
        listId,
        subscriberHash,
        sortField,
        sortDir,
        fields,
        excludeFields,
        count = 10,
        offset,
    }: {
        /**
         * The unique ID for the list.
         */
        listId: string,
        /**
         * The MD5 hash of the lowercase version of the list member's email address.
         */
        subscriberHash: string,
        /**
         * Returns notes sorted by the specified field.
         */
        sortField?: 'created_at' | 'updated_at' | 'note_id',
        /**
         * Determines the order direction for sorted results.
         */
        sortDir?: 'ASC' | 'DESC',
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
    }): CancelablePromise<{
        /**
         * An array of objects, each representing a note resource.
         */
        notes?: Array<{
            /**
             * The note id.
             */
            readonly id?: number;
            /**
             * The date and time the note was created in ISO 8601 format.
             */
            readonly created_at?: string;
            /**
             * The author of the note.
             */
            readonly created_by?: string;
            /**
             * The date and time the note was last updated in ISO 8601 format.
             */
            readonly updated_at?: string;
            /**
             * The content of the note.
             */
            note?: string;
            /**
             * The unique id for the list.
             */
            readonly list_id?: string;
            /**
             * The MD5 hash of the lowercase version of the list member's email address.
             */
            readonly email_id?: string;
            /**
             * As Mailchimp evolves beyond email, you may eventually have contacts without email addresses. While the `email_id` is the MD5 hash of their email address, this `contact_id` is agnostic of contact’s inclusion of an email address.
             */
            readonly contact_id?: string;
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
         * The MD5 hash of the lowercase version of the list member's email address.
         */
        readonly email_id?: string;
        /**
         * The list id.
         */
        readonly list_id?: string;
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
            url: '/lists/{list_id}/members/{subscriber_hash}/notes',
            path: {
                'list_id': listId,
                'subscriber_hash': subscriberHash,
            },
            query: {
                'sort_field': sortField,
                'sort_dir': sortDir,
                'fields': fields,
                'exclude_fields': excludeFields,
                'count': count,
                'offset': offset,
            },
        });
    }

    /**
     * Add member note
     * Add a new note for a specific subscriber.
     * @returns any
     * @throws ApiError
     */
    public postListsIdMembersIdNotes({
        listId,
        subscriberHash,
        body,
    }: {
        /**
         * The unique ID for the list.
         */
        listId: string,
        /**
         * The MD5 hash of the lowercase version of the list member's email address.
         */
        subscriberHash: string,
        body: {
            /**
             * The content of the note. Note length is limited to 1,000 characters.
             */
            note?: string;
        },
    }): CancelablePromise<{
        /**
         * The note id.
         */
        readonly id?: number;
        /**
         * The date and time the note was created in ISO 8601 format.
         */
        readonly created_at?: string;
        /**
         * The author of the note.
         */
        readonly created_by?: string;
        /**
         * The date and time the note was last updated in ISO 8601 format.
         */
        readonly updated_at?: string;
        /**
         * The content of the note.
         */
        note?: string;
        /**
         * The unique id for the list.
         */
        readonly list_id?: string;
        /**
         * The MD5 hash of the lowercase version of the list member's email address.
         */
        readonly email_id?: string;
        /**
         * As Mailchimp evolves beyond email, you may eventually have contacts without email addresses. While the `email_id` is the MD5 hash of their email address, this `contact_id` is agnostic of contact’s inclusion of an email address.
         */
        readonly contact_id?: string;
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
            url: '/lists/{list_id}/members/{subscriber_hash}/notes',
            path: {
                'list_id': listId,
                'subscriber_hash': subscriberHash,
            },
            body: body,
        });
    }

    /**
     * Get member note
     * Get a specific note for a specific list member.
     * @returns any
     * @throws ApiError
     */
    public getListsIdMembersIdNotesId({
        listId,
        subscriberHash,
        noteId,
        fields,
        excludeFields,
    }: {
        /**
         * The unique ID for the list.
         */
        listId: string,
        /**
         * The MD5 hash of the lowercase version of the list member's email address. This endpoint also accepts a list member's email address or contact_id.
         */
        subscriberHash: string,
        /**
         * The id for the note.
         */
        noteId: string,
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
         * The note id.
         */
        readonly id?: number;
        /**
         * The date and time the note was created in ISO 8601 format.
         */
        readonly created_at?: string;
        /**
         * The author of the note.
         */
        readonly created_by?: string;
        /**
         * The date and time the note was last updated in ISO 8601 format.
         */
        readonly updated_at?: string;
        /**
         * The content of the note.
         */
        note?: string;
        /**
         * The unique id for the list.
         */
        readonly list_id?: string;
        /**
         * The MD5 hash of the lowercase version of the list member's email address.
         */
        readonly email_id?: string;
        /**
         * As Mailchimp evolves beyond email, you may eventually have contacts without email addresses. While the `email_id` is the MD5 hash of their email address, this `contact_id` is agnostic of contact’s inclusion of an email address.
         */
        readonly contact_id?: string;
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
            url: '/lists/{list_id}/members/{subscriber_hash}/notes/{note_id}',
            path: {
                'list_id': listId,
                'subscriber_hash': subscriberHash,
                'note_id': noteId,
            },
            query: {
                'fields': fields,
                'exclude_fields': excludeFields,
            },
        });
    }

    /**
     * Update note
     * Update a specific note for a specific list member.
     * @returns any
     * @throws ApiError
     */
    public patchListsIdMembersIdNotesId({
        listId,
        subscriberHash,
        noteId,
        body,
    }: {
        /**
         * The unique ID for the list.
         */
        listId: string,
        /**
         * The MD5 hash of the lowercase version of the list member's email address. This endpoint also accepts a list member's email address or contact_id.
         */
        subscriberHash: string,
        /**
         * The id for the note.
         */
        noteId: string,
        body: {
            /**
             * The content of the note. Note length is limited to 1,000 characters.
             */
            note?: string;
        },
    }): CancelablePromise<{
        /**
         * The note id.
         */
        readonly id?: number;
        /**
         * The date and time the note was created in ISO 8601 format.
         */
        readonly created_at?: string;
        /**
         * The author of the note.
         */
        readonly created_by?: string;
        /**
         * The date and time the note was last updated in ISO 8601 format.
         */
        readonly updated_at?: string;
        /**
         * The content of the note.
         */
        note?: string;
        /**
         * The unique id for the list.
         */
        readonly list_id?: string;
        /**
         * The MD5 hash of the lowercase version of the list member's email address.
         */
        readonly email_id?: string;
        /**
         * As Mailchimp evolves beyond email, you may eventually have contacts without email addresses. While the `email_id` is the MD5 hash of their email address, this `contact_id` is agnostic of contact’s inclusion of an email address.
         */
        readonly contact_id?: string;
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
            url: '/lists/{list_id}/members/{subscriber_hash}/notes/{note_id}',
            path: {
                'list_id': listId,
                'subscriber_hash': subscriberHash,
                'note_id': noteId,
            },
            body: body,
        });
    }

    /**
     * Delete note
     * Delete a specific note for a specific list member.
     * @returns any An error generated by the Mailchimp API.
     * @throws ApiError
     */
    public deleteListsIdMembersIdNotesId({
        listId,
        subscriberHash,
        noteId,
    }: {
        /**
         * The unique ID for the list.
         */
        listId: string,
        /**
         * The MD5 hash of the lowercase version of the list member's email address. This endpoint also accepts a list member's email address or contact_id.
         */
        subscriberHash: string,
        /**
         * The id for the note.
         */
        noteId: string,
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
            url: '/lists/{list_id}/members/{subscriber_hash}/notes/{note_id}',
            path: {
                'list_id': listId,
                'subscriber_hash': subscriberHash,
                'note_id': noteId,
            },
        });
    }

    /**
     * Delete list member
     * Delete all personally identifiable information related to a list member, and remove them from a list. This will make it impossible to re-import the list member.
     * @returns any An error generated by the Mailchimp API.
     * @throws ApiError
     */
    public postListsIdMembersHashActionsDeletePermanent({
        listId,
        subscriberHash,
    }: {
        /**
         * The unique ID for the list.
         */
        listId: string,
        /**
         * The MD5 hash of the lowercase version of the list member's email address.
         */
        subscriberHash: string,
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
            url: '/lists/{list_id}/members/{subscriber_hash}/actions/delete-permanent',
            path: {
                'list_id': listId,
                'subscriber_hash': subscriberHash,
            },
        });
    }

    /**
     * List merge fields
     * Get a list of all merge fields for an audience.
     * @returns any
     * @throws ApiError
     */
    public getListsIdMergeFields({
        listId,
        fields,
        excludeFields,
        count = 10,
        offset,
        type,
        required,
    }: {
        /**
         * The unique ID for the list.
         */
        listId: string,
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
         * The merge field type.
         */
        type?: string,
        /**
         * Whether it's a required merge field.
         */
        required?: boolean,
    }): CancelablePromise<{
        /**
         * An array of objects, each representing a merge field resource.
         */
        merge_fields?: Array<{
            /**
             * An unchanging id for the merge field.
             */
            readonly merge_id?: number;
            /**
             * The merge tag used for Mailchimp campaigns and [adding contact information](https://mailchimp.com/developer/marketing/docs/merge-fields/#add-merge-data-to-contacts).
             */
            tag?: string;
            /**
             * The name of the merge field (audience field).
             */
            name?: string;
            /**
             * The [type](https://mailchimp.com/developer/marketing/docs/merge-fields/#structure) for the merge field.
             */
            readonly type?: 'text' | 'number' | 'address' | 'phone' | 'date' | 'url' | 'imageurl' | 'radio' | 'dropdown' | 'birthday' | 'zip';
            /**
             * The boolean value if the merge field is required.
             */
            required?: boolean;
            /**
             * The default value for the merge field if `null`.
             */
            default_value?: string;
            /**
             * Whether the merge field is displayed on the signup form.
             */
            public?: boolean;
            /**
             * The order that the merge field displays on the list signup form.
             */
            display_order?: number;
            /**
             * Extra options for some merge field types.
             */
            options?: {
                /**
                 * In an address field, the default country code if none supplied.
                 */
                default_country?: number;
                /**
                 * In a phone field, the phone number type: US or International.
                 */
                phone_format?: string;
                /**
                 * In a date or birthday field, the format of the date.
                 */
                date_format?: string;
                /**
                 * In a radio or dropdown non-group field, the available options for contacts to pick from.
                 */
                choices?: Array<string>;
                /**
                 * In a text field, the default length of the text field.
                 */
                readonly size?: number;
            };
            /**
             * Extra text to help the subscriber fill out the form.
             */
            help_text?: string;
            /**
             * The ID that identifies this merge field's audience'.
             */
            readonly list_id?: string;
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
         * The list id.
         */
        readonly list_id?: string;
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
            url: '/lists/{list_id}/merge-fields',
            path: {
                'list_id': listId,
            },
            query: {
                'fields': fields,
                'exclude_fields': excludeFields,
                'count': count,
                'offset': offset,
                'type': type,
                'required': required,
            },
        });
    }

    /**
     * Add merge field
     * Add a new merge field for a specific audience.
     * @returns any
     * @throws ApiError
     */
    public postListsIdMergeFields({
        listId,
        body,
    }: {
        /**
         * The unique ID for the list.
         */
        listId: string,
        body: {
            /**
             * The merge tag used for Mailchimp campaigns and [adding contact information](https://mailchimp.com/developer/marketing/docs/merge-fields/#add-merge-data-to-contacts).
             */
            tag?: string;
            /**
             * The name of the merge field (audience field).
             */
            name: string;
            /**
             * The [type](https://mailchimp.com/developer/marketing/docs/merge-fields/#structure) for the merge field.
             */
            type: 'text' | 'number' | 'address' | 'phone' | 'date' | 'url' | 'imageurl' | 'radio' | 'dropdown' | 'birthday' | 'zip';
            /**
             * Whether the merge field is required to import a contact.
             */
            required?: boolean;
            /**
             * The default value for the merge field if `null`.
             */
            default_value?: string;
            /**
             * Whether the merge field is displayed on the signup form.
             */
            public?: boolean;
            /**
             * The order that the merge field displays on the list signup form.
             */
            display_order?: number;
            /**
             * Extra options for some merge field types.
             */
            options?: {
                /**
                 * In an address field, the default country code if none supplied.
                 */
                default_country?: number;
                /**
                 * In a phone field, the phone number type: US or International.
                 */
                phone_format?: string;
                /**
                 * In a date or birthday field, the format of the date.
                 */
                date_format?: string;
                /**
                 * In a radio or dropdown non-group field, the available options for contacts to pick from.
                 */
                choices?: Array<string>;
                /**
                 * In a text field, the default length of the text field.
                 */
                size?: number;
            };
            /**
             * Extra text to help the subscriber fill out the form.
             */
            help_text?: string;
        },
    }): CancelablePromise<{
        /**
         * An unchanging id for the merge field.
         */
        readonly merge_id?: number;
        /**
         * The merge tag used for Mailchimp campaigns and [adding contact information](https://mailchimp.com/developer/marketing/docs/merge-fields/#add-merge-data-to-contacts).
         */
        tag?: string;
        /**
         * The name of the merge field (audience field).
         */
        name?: string;
        /**
         * The [type](https://mailchimp.com/developer/marketing/docs/merge-fields/#structure) for the merge field.
         */
        readonly type?: 'text' | 'number' | 'address' | 'phone' | 'date' | 'url' | 'imageurl' | 'radio' | 'dropdown' | 'birthday' | 'zip';
        /**
         * The boolean value if the merge field is required.
         */
        required?: boolean;
        /**
         * The default value for the merge field if `null`.
         */
        default_value?: string;
        /**
         * Whether the merge field is displayed on the signup form.
         */
        public?: boolean;
        /**
         * The order that the merge field displays on the list signup form.
         */
        display_order?: number;
        /**
         * Extra options for some merge field types.
         */
        options?: {
            /**
             * In an address field, the default country code if none supplied.
             */
            default_country?: number;
            /**
             * In a phone field, the phone number type: US or International.
             */
            phone_format?: string;
            /**
             * In a date or birthday field, the format of the date.
             */
            date_format?: string;
            /**
             * In a radio or dropdown non-group field, the available options for contacts to pick from.
             */
            choices?: Array<string>;
            /**
             * In a text field, the default length of the text field.
             */
            readonly size?: number;
        };
        /**
         * Extra text to help the subscriber fill out the form.
         */
        help_text?: string;
        /**
         * The ID that identifies this merge field's audience'.
         */
        readonly list_id?: string;
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
            url: '/lists/{list_id}/merge-fields',
            path: {
                'list_id': listId,
            },
            body: body,
        });
    }

    /**
     * Get merge field
     * Get information about a specific merge field.
     * @returns any
     * @throws ApiError
     */
    public getListsIdMergeFieldsId({
        listId,
        mergeId,
        excludeFields,
        fields,
    }: {
        /**
         * The unique ID for the list.
         */
        listId: string,
        /**
         * The id for the merge field.
         */
        mergeId: string,
        /**
         * A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
         */
        excludeFields?: Array<string>,
        /**
         * A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
         */
        fields?: Array<string>,
    }): CancelablePromise<{
        /**
         * An unchanging id for the merge field.
         */
        readonly merge_id?: number;
        /**
         * The merge tag used for Mailchimp campaigns and [adding contact information](https://mailchimp.com/developer/marketing/docs/merge-fields/#add-merge-data-to-contacts).
         */
        tag?: string;
        /**
         * The name of the merge field (audience field).
         */
        name?: string;
        /**
         * The [type](https://mailchimp.com/developer/marketing/docs/merge-fields/#structure) for the merge field.
         */
        readonly type?: 'text' | 'number' | 'address' | 'phone' | 'date' | 'url' | 'imageurl' | 'radio' | 'dropdown' | 'birthday' | 'zip';
        /**
         * The boolean value if the merge field is required.
         */
        required?: boolean;
        /**
         * The default value for the merge field if `null`.
         */
        default_value?: string;
        /**
         * Whether the merge field is displayed on the signup form.
         */
        public?: boolean;
        /**
         * The order that the merge field displays on the list signup form.
         */
        display_order?: number;
        /**
         * Extra options for some merge field types.
         */
        options?: {
            /**
             * In an address field, the default country code if none supplied.
             */
            default_country?: number;
            /**
             * In a phone field, the phone number type: US or International.
             */
            phone_format?: string;
            /**
             * In a date or birthday field, the format of the date.
             */
            date_format?: string;
            /**
             * In a radio or dropdown non-group field, the available options for contacts to pick from.
             */
            choices?: Array<string>;
            /**
             * In a text field, the default length of the text field.
             */
            readonly size?: number;
        };
        /**
         * Extra text to help the subscriber fill out the form.
         */
        help_text?: string;
        /**
         * The ID that identifies this merge field's audience'.
         */
        readonly list_id?: string;
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
            url: '/lists/{list_id}/merge-fields/{merge_id}',
            path: {
                'list_id': listId,
                'merge_id': mergeId,
            },
            query: {
                'exclude_fields': excludeFields,
                'fields': fields,
            },
        });
    }

    /**
     * Update merge field
     * Update a specific merge field.
     * @returns any
     * @throws ApiError
     */
    public patchListsIdMergeFieldsId({
        listId,
        mergeId,
        body,
    }: {
        /**
         * The unique ID for the list.
         */
        listId: string,
        /**
         * The id for the merge field.
         */
        mergeId: string,
        body: {
            /**
             * The merge tag used for Mailchimp campaigns and [adding contact information](https://mailchimp.com/developer/marketing/docs/merge-fields/#add-merge-data-to-contacts).
             */
            tag?: string;
            /**
             * The name of the merge field (audience field).
             */
            name: string;
            /**
             * Whether the merge field is required to import a contact.
             */
            required?: boolean;
            /**
             * The default value for the merge field if `null`.
             */
            default_value?: string;
            /**
             * Whether the merge field is displayed on the signup form.
             */
            public?: boolean;
            /**
             * The order that the merge field displays on the list signup form.
             */
            display_order?: number;
            /**
             * Extra options for some merge field types.
             */
            options?: {
                /**
                 * In an address field, the default country code if none supplied.
                 */
                default_country?: number;
                /**
                 * In a phone field, the phone number type: US or International.
                 */
                phone_format?: string;
                /**
                 * In a date or birthday field, the format of the date.
                 */
                date_format?: string;
                /**
                 * In a radio or dropdown non-group field, the available options for members to pick from.
                 */
                choices?: Array<string>;
            };
            /**
             * Extra text to help the subscriber fill out the form.
             */
            help_text?: string;
        },
    }): CancelablePromise<{
        /**
         * An unchanging id for the merge field.
         */
        readonly merge_id?: number;
        /**
         * The merge tag used for Mailchimp campaigns and [adding contact information](https://mailchimp.com/developer/marketing/docs/merge-fields/#add-merge-data-to-contacts).
         */
        tag?: string;
        /**
         * The name of the merge field (audience field).
         */
        name?: string;
        /**
         * The [type](https://mailchimp.com/developer/marketing/docs/merge-fields/#structure) for the merge field.
         */
        readonly type?: 'text' | 'number' | 'address' | 'phone' | 'date' | 'url' | 'imageurl' | 'radio' | 'dropdown' | 'birthday' | 'zip';
        /**
         * The boolean value if the merge field is required.
         */
        required?: boolean;
        /**
         * The default value for the merge field if `null`.
         */
        default_value?: string;
        /**
         * Whether the merge field is displayed on the signup form.
         */
        public?: boolean;
        /**
         * The order that the merge field displays on the list signup form.
         */
        display_order?: number;
        /**
         * Extra options for some merge field types.
         */
        options?: {
            /**
             * In an address field, the default country code if none supplied.
             */
            default_country?: number;
            /**
             * In a phone field, the phone number type: US or International.
             */
            phone_format?: string;
            /**
             * In a date or birthday field, the format of the date.
             */
            date_format?: string;
            /**
             * In a radio or dropdown non-group field, the available options for contacts to pick from.
             */
            choices?: Array<string>;
            /**
             * In a text field, the default length of the text field.
             */
            readonly size?: number;
        };
        /**
         * Extra text to help the subscriber fill out the form.
         */
        help_text?: string;
        /**
         * The ID that identifies this merge field's audience'.
         */
        readonly list_id?: string;
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
            url: '/lists/{list_id}/merge-fields/{merge_id}',
            path: {
                'list_id': listId,
                'merge_id': mergeId,
            },
            body: body,
        });
    }

    /**
     * Delete merge field
     * Delete a specific merge field.
     * @returns any An error generated by the Mailchimp API.
     * @throws ApiError
     */
    public deleteListsIdMergeFieldsId({
        listId,
        mergeId,
    }: {
        /**
         * The unique ID for the list.
         */
        listId: string,
        /**
         * The id for the merge field.
         */
        mergeId: string,
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
            url: '/lists/{list_id}/merge-fields/{merge_id}',
            path: {
                'list_id': listId,
                'merge_id': mergeId,
            },
        });
    }

    /**
     * List webhooks
     * Get information about all webhooks for a specific list.
     * @returns any
     * @throws ApiError
     */
    public getListsIdWebhooks({
        listId,
    }: {
        /**
         * The unique ID for the list.
         */
        listId: string,
    }): CancelablePromise<{
        /**
         * An array of objects, each representing a specific list member.
         */
        webhooks?: Array<{
            /**
             * An string that uniquely identifies this webhook.
             */
            readonly id?: string;
            /**
             * A valid URL for the Webhook.
             */
            readonly url?: string;
            /**
             * The events that can trigger the webhook and whether they are enabled.
             */
            readonly events?: {
                /**
                 * Whether the webhook is triggered when a list subscriber is added.
                 */
                subscribe?: boolean;
                /**
                 * Whether the webhook is triggered when a list member unsubscribes.
                 */
                unsubscribe?: boolean;
                /**
                 * Whether the webhook is triggered when a subscriber's profile is updated.
                 */
                profile?: boolean;
                /**
                 * Whether the webhook is triggered when a subscriber's email address is cleaned from the list.
                 */
                cleaned?: boolean;
                /**
                 * Whether the webhook is triggered when a subscriber's email address is changed.
                 */
                upemail?: boolean;
                /**
                 * Whether the webhook is triggered when a campaign is sent or cancelled.
                 */
                campaign?: boolean;
            };
            /**
             * The possible sources of any events that can trigger the webhook and whether they are enabled.
             */
            readonly sources?: {
                /**
                 * Whether the webhook is triggered by subscriber-initiated actions.
                 */
                user?: boolean;
                /**
                 * Whether the webhook is triggered by admin-initiated actions in the web interface.
                 */
                admin?: boolean;
                /**
                 * Whether the webhook is triggered by actions initiated via the API.
                 */
                api?: boolean;
            };
            /**
             * The unique id for the list.
             */
            readonly list_id?: string;
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
         * The list id.
         */
        list_id?: string;
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
            url: '/lists/{list_id}/webhooks',
            path: {
                'list_id': listId,
            },
        });
    }

    /**
     * Add webhook
     * Create a new webhook for a specific list.
     * @returns any
     * @throws ApiError
     */
    public postListsIdWebhooks({
        listId,
        body,
    }: {
        /**
         * The unique ID for the list.
         */
        listId: string,
        body: {
            /**
             * A valid URL for the Webhook.
             */
            url?: string;
            /**
             * The events that can trigger the webhook and whether they are enabled.
             */
            events?: {
                /**
                 * Whether the webhook is triggered when a list subscriber is added.
                 */
                subscribe?: boolean;
                /**
                 * Whether the webhook is triggered when a list member unsubscribes.
                 */
                unsubscribe?: boolean;
                /**
                 * Whether the webhook is triggered when a subscriber's profile is updated.
                 */
                profile?: boolean;
                /**
                 * Whether the webhook is triggered when a subscriber's email address is cleaned from the list.
                 */
                cleaned?: boolean;
                /**
                 * Whether the webhook is triggered when a subscriber's email address is changed.
                 */
                upemail?: boolean;
                /**
                 * Whether the webhook is triggered when a campaign is sent or cancelled.
                 */
                campaign?: boolean;
            };
            /**
             * The possible sources of any events that can trigger the webhook and whether they are enabled.
             */
            sources?: {
                /**
                 * Whether the webhook is triggered by subscriber-initiated actions.
                 */
                user?: boolean;
                /**
                 * Whether the webhook is triggered by admin-initiated actions in the web interface.
                 */
                admin?: boolean;
                /**
                 * Whether the webhook is triggered by actions initiated via the API.
                 */
                api?: boolean;
            };
        },
    }): CancelablePromise<{
        /**
         * An string that uniquely identifies this webhook.
         */
        readonly id?: string;
        /**
         * A valid URL for the Webhook.
         */
        readonly url?: string;
        /**
         * The events that can trigger the webhook and whether they are enabled.
         */
        readonly events?: {
            /**
             * Whether the webhook is triggered when a list subscriber is added.
             */
            subscribe?: boolean;
            /**
             * Whether the webhook is triggered when a list member unsubscribes.
             */
            unsubscribe?: boolean;
            /**
             * Whether the webhook is triggered when a subscriber's profile is updated.
             */
            profile?: boolean;
            /**
             * Whether the webhook is triggered when a subscriber's email address is cleaned from the list.
             */
            cleaned?: boolean;
            /**
             * Whether the webhook is triggered when a subscriber's email address is changed.
             */
            upemail?: boolean;
            /**
             * Whether the webhook is triggered when a campaign is sent or cancelled.
             */
            campaign?: boolean;
        };
        /**
         * The possible sources of any events that can trigger the webhook and whether they are enabled.
         */
        readonly sources?: {
            /**
             * Whether the webhook is triggered by subscriber-initiated actions.
             */
            user?: boolean;
            /**
             * Whether the webhook is triggered by admin-initiated actions in the web interface.
             */
            admin?: boolean;
            /**
             * Whether the webhook is triggered by actions initiated via the API.
             */
            api?: boolean;
        };
        /**
         * The unique id for the list.
         */
        readonly list_id?: string;
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
            url: '/lists/{list_id}/webhooks',
            path: {
                'list_id': listId,
            },
            body: body,
        });
    }

    /**
     * Get webhook info
     * Get information about a specific webhook.
     * @returns any
     * @throws ApiError
     */
    public getListsIdWebhooksId({
        listId,
        webhookId,
    }: {
        /**
         * The unique ID for the list.
         */
        listId: string,
        /**
         * The webhook's id.
         */
        webhookId: string,
    }): CancelablePromise<{
        /**
         * An string that uniquely identifies this webhook.
         */
        readonly id?: string;
        /**
         * A valid URL for the Webhook.
         */
        readonly url?: string;
        /**
         * The events that can trigger the webhook and whether they are enabled.
         */
        readonly events?: {
            /**
             * Whether the webhook is triggered when a list subscriber is added.
             */
            subscribe?: boolean;
            /**
             * Whether the webhook is triggered when a list member unsubscribes.
             */
            unsubscribe?: boolean;
            /**
             * Whether the webhook is triggered when a subscriber's profile is updated.
             */
            profile?: boolean;
            /**
             * Whether the webhook is triggered when a subscriber's email address is cleaned from the list.
             */
            cleaned?: boolean;
            /**
             * Whether the webhook is triggered when a subscriber's email address is changed.
             */
            upemail?: boolean;
            /**
             * Whether the webhook is triggered when a campaign is sent or cancelled.
             */
            campaign?: boolean;
        };
        /**
         * The possible sources of any events that can trigger the webhook and whether they are enabled.
         */
        readonly sources?: {
            /**
             * Whether the webhook is triggered by subscriber-initiated actions.
             */
            user?: boolean;
            /**
             * Whether the webhook is triggered by admin-initiated actions in the web interface.
             */
            admin?: boolean;
            /**
             * Whether the webhook is triggered by actions initiated via the API.
             */
            api?: boolean;
        };
        /**
         * The unique id for the list.
         */
        readonly list_id?: string;
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
            url: '/lists/{list_id}/webhooks/{webhook_id}',
            path: {
                'list_id': listId,
                'webhook_id': webhookId,
            },
        });
    }

    /**
     * Delete webhook
     * Delete a specific webhook in a list.
     * @returns any An error generated by the Mailchimp API.
     * @throws ApiError
     */
    public deleteListsIdWebhooksId({
        listId,
        webhookId,
    }: {
        /**
         * The unique ID for the list.
         */
        listId: string,
        /**
         * The webhook's id.
         */
        webhookId: string,
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
            url: '/lists/{list_id}/webhooks/{webhook_id}',
            path: {
                'list_id': listId,
                'webhook_id': webhookId,
            },
        });
    }

    /**
     * Update webhook
     * Update the settings for an existing webhook.
     * @returns any
     * @throws ApiError
     */
    public patchListsIdWebhooksId({
        listId,
        webhookId,
        body,
    }: {
        /**
         * The unique ID for the list.
         */
        listId: string,
        /**
         * The webhook's id.
         */
        webhookId: string,
        body: {
            /**
             * A valid URL for the Webhook.
             */
            url?: string;
            /**
             * The events that can trigger the webhook and whether they are enabled.
             */
            events?: {
                /**
                 * Whether the webhook is triggered when a list subscriber is added.
                 */
                subscribe?: boolean;
                /**
                 * Whether the webhook is triggered when a list member unsubscribes.
                 */
                unsubscribe?: boolean;
                /**
                 * Whether the webhook is triggered when a subscriber's profile is updated.
                 */
                profile?: boolean;
                /**
                 * Whether the webhook is triggered when a subscriber's email address is cleaned from the list.
                 */
                cleaned?: boolean;
                /**
                 * Whether the webhook is triggered when a subscriber's email address is changed.
                 */
                upemail?: boolean;
                /**
                 * Whether the webhook is triggered when a campaign is sent or cancelled.
                 */
                campaign?: boolean;
            };
            /**
             * The possible sources of any events that can trigger the webhook and whether they are enabled.
             */
            sources?: {
                /**
                 * Whether the webhook is triggered by subscriber-initiated actions.
                 */
                user?: boolean;
                /**
                 * Whether the webhook is triggered by admin-initiated actions in the web interface.
                 */
                admin?: boolean;
                /**
                 * Whether the webhook is triggered by actions initiated via the API.
                 */
                api?: boolean;
            };
        },
    }): CancelablePromise<{
        /**
         * An string that uniquely identifies this webhook.
         */
        readonly id?: string;
        /**
         * A valid URL for the Webhook.
         */
        readonly url?: string;
        /**
         * The events that can trigger the webhook and whether they are enabled.
         */
        readonly events?: {
            /**
             * Whether the webhook is triggered when a list subscriber is added.
             */
            subscribe?: boolean;
            /**
             * Whether the webhook is triggered when a list member unsubscribes.
             */
            unsubscribe?: boolean;
            /**
             * Whether the webhook is triggered when a subscriber's profile is updated.
             */
            profile?: boolean;
            /**
             * Whether the webhook is triggered when a subscriber's email address is cleaned from the list.
             */
            cleaned?: boolean;
            /**
             * Whether the webhook is triggered when a subscriber's email address is changed.
             */
            upemail?: boolean;
            /**
             * Whether the webhook is triggered when a campaign is sent or cancelled.
             */
            campaign?: boolean;
        };
        /**
         * The possible sources of any events that can trigger the webhook and whether they are enabled.
         */
        readonly sources?: {
            /**
             * Whether the webhook is triggered by subscriber-initiated actions.
             */
            user?: boolean;
            /**
             * Whether the webhook is triggered by admin-initiated actions in the web interface.
             */
            admin?: boolean;
            /**
             * Whether the webhook is triggered by actions initiated via the API.
             */
            api?: boolean;
        };
        /**
         * The unique id for the list.
         */
        readonly list_id?: string;
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
            url: '/lists/{list_id}/webhooks/{webhook_id}',
            path: {
                'list_id': listId,
                'webhook_id': webhookId,
            },
            body: body,
        });
    }

    /**
     * List signup forms
     * Get signup forms for a specific list.
     * @returns any
     * @throws ApiError
     */
    public getListsIdSignupForms({
        listId,
    }: {
        /**
         * The unique ID for the list.
         */
        listId: string,
    }): CancelablePromise<{
        /**
         * List signup form.
         */
        signup_forms?: Array<{
            /**
             * Options for customizing your signup form header.
             */
            header?: {
                /**
                 * Header image URL.
                 */
                image_url?: string;
                /**
                 * Header text.
                 */
                text?: string;
                /**
                 * Image width, in pixels.
                 */
                image_width?: string;
                /**
                 * Image height, in pixels.
                 */
                image_height?: string;
                /**
                 * Alt text for the image.
                 */
                image_alt?: string;
                /**
                 * The URL that the header image will link to.
                 */
                image_link?: string;
                /**
                 * Image alignment.
                 */
                image_align?: 'none' | 'left' | 'center' | 'right';
                /**
                 * Image border width.
                 */
                image_border_width?: string;
                /**
                 * Image border style.
                 */
                image_border_style?: 'none' | 'solid' | 'dotted' | 'dashed' | 'double' | 'groove' | 'outset' | 'inset' | 'ridge';
                /**
                 * Image border color.
                 */
                image_border_color?: string;
                /**
                 * Image link target.
                 */
                image_target?: '_blank' | 'null';
            };
            /**
             * The signup form body content.
             */
            contents?: Array<{
                /**
                 * The content section name.
                 */
                section?: 'signup_message' | 'unsub_message' | 'signup_thank_you_title';
                /**
                 * The content section text.
                 */
                value?: string;
            }>;
            /**
             * An array of objects, each representing an element style for the signup form.
             */
            styles?: Array<{
                /**
                 * A string that identifies the element selector.
                 */
                selector?: 'page_background' | 'page_header' | 'page_outer_wrapper' | 'body_background' | 'body_link_style' | 'forms_buttons' | 'forms_buttons_hovered' | 'forms_field_label' | 'forms_field_text' | 'forms_required' | 'forms_required_legend' | 'forms_help_text' | 'forms_errors' | 'monkey_rewards_badge';
                /**
                 * A collection of options for a selector.
                 */
                options?: Array<{
                    /**
                     * A string that identifies the property.
                     */
                    property?: string;
                    /**
                     * A string that identifies value of the property.
                     */
                    value?: string;
                }>;
            }>;
            /**
             * Signup form URL.
             */
            signup_form_url?: string;
            /**
             * The signup form's list id.
             */
            readonly list_id?: string;
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
         * The list id.
         */
        list_id?: string;
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
            url: '/lists/{list_id}/signup-forms',
            path: {
                'list_id': listId,
            },
        });
    }

    /**
     * Customize signup form
     * Customize a list's default signup form.
     * @returns any
     * @throws ApiError
     */
    public postListsIdSignupForms({
        listId,
        body,
    }: {
        /**
         * The unique ID for the list.
         */
        listId: string,
        body: {
            /**
             * Options for customizing your signup form header.
             */
            header?: {
                /**
                 * Header image URL.
                 */
                image_url?: string;
                /**
                 * Header text.
                 */
                text?: string;
                /**
                 * Image width, in pixels.
                 */
                image_width?: string;
                /**
                 * Image height, in pixels.
                 */
                image_height?: string;
                /**
                 * Alt text for the image.
                 */
                image_alt?: string;
                /**
                 * The URL that the header image will link to.
                 */
                image_link?: string;
                /**
                 * Image alignment.
                 */
                image_align?: 'none' | 'left' | 'center' | 'right';
                /**
                 * Image border width.
                 */
                image_border_width?: string;
                /**
                 * Image border style.
                 */
                image_border_style?: 'none' | 'solid' | 'dotted' | 'dashed' | 'double' | 'groove' | 'outset' | 'inset' | 'ridge';
                /**
                 * Image border color.
                 */
                image_border_color?: string;
                /**
                 * Image link target.
                 */
                image_target?: '_blank' | 'null';
            };
            /**
             * The signup form body content.
             */
            contents?: Array<{
                /**
                 * The content section name.
                 */
                section?: 'signup_message' | 'unsub_message' | 'signup_thank_you_title';
                /**
                 * The content section text.
                 */
                value?: string;
            }>;
            /**
             * An array of objects, each representing an element style for the signup form.
             */
            styles?: Array<{
                /**
                 * A string that identifies the element selector.
                 */
                selector?: 'page_background' | 'page_header' | 'page_outer_wrapper' | 'body_background' | 'body_link_style' | 'forms_buttons' | 'forms_buttons_hovered' | 'forms_field_label' | 'forms_field_text' | 'forms_required' | 'forms_required_legend' | 'forms_help_text' | 'forms_errors' | 'monkey_rewards_badge';
                /**
                 * A collection of options for a selector.
                 */
                options?: Array<{
                    /**
                     * A string that identifies the property.
                     */
                    property?: string;
                    /**
                     * A string that identifies value of the property.
                     */
                    value?: string;
                }>;
            }>;
        },
    }): CancelablePromise<{
        /**
         * Options for customizing your signup form header.
         */
        header?: {
            /**
             * Header image URL.
             */
            image_url?: string;
            /**
             * Header text.
             */
            text?: string;
            /**
             * Image width, in pixels.
             */
            image_width?: string;
            /**
             * Image height, in pixels.
             */
            image_height?: string;
            /**
             * Alt text for the image.
             */
            image_alt?: string;
            /**
             * The URL that the header image will link to.
             */
            image_link?: string;
            /**
             * Image alignment.
             */
            image_align?: 'none' | 'left' | 'center' | 'right';
            /**
             * Image border width.
             */
            image_border_width?: string;
            /**
             * Image border style.
             */
            image_border_style?: 'none' | 'solid' | 'dotted' | 'dashed' | 'double' | 'groove' | 'outset' | 'inset' | 'ridge';
            /**
             * Image border color.
             */
            image_border_color?: string;
            /**
             * Image link target.
             */
            image_target?: '_blank' | 'null';
        };
        /**
         * The signup form body content.
         */
        contents?: Array<{
            /**
             * The content section name.
             */
            section?: 'signup_message' | 'unsub_message' | 'signup_thank_you_title';
            /**
             * The content section text.
             */
            value?: string;
        }>;
        /**
         * An array of objects, each representing an element style for the signup form.
         */
        styles?: Array<{
            /**
             * A string that identifies the element selector.
             */
            selector?: 'page_background' | 'page_header' | 'page_outer_wrapper' | 'body_background' | 'body_link_style' | 'forms_buttons' | 'forms_buttons_hovered' | 'forms_field_label' | 'forms_field_text' | 'forms_required' | 'forms_required_legend' | 'forms_help_text' | 'forms_errors' | 'monkey_rewards_badge';
            /**
             * A collection of options for a selector.
             */
            options?: Array<{
                /**
                 * A string that identifies the property.
                 */
                property?: string;
                /**
                 * A string that identifies value of the property.
                 */
                value?: string;
            }>;
        }>;
        /**
         * Signup form URL.
         */
        signup_form_url?: string;
        /**
         * The signup form's list id.
         */
        readonly list_id?: string;
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
            url: '/lists/{list_id}/signup-forms',
            path: {
                'list_id': listId,
            },
            body: body,
        });
    }

    /**
     * List locations
     * Get the locations (countries) that the list's subscribers have been tagged to based on geocoding their IP address.
     * @returns any
     * @throws ApiError
     */
    public getListsIdLocations({
        listId,
        fields,
        excludeFields,
    }: {
        /**
         * The unique ID for the list.
         */
        listId: string,
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
         * An array of objects, each representing a list's top subscriber locations.
         */
        locations?: Array<{
            /**
             * The name of the country.
             */
            readonly country?: string;
            /**
             * The ISO 3166 2 digit country code.
             */
            readonly cc?: string;
            /**
             * The percent of subscribers in the country.
             */
            readonly percent?: number;
            /**
             * The total number of subscribers in the country.
             */
            readonly total?: number;
        }>;
        /**
         * The unique id for the list.
         */
        list_id?: string;
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
            url: '/lists/{list_id}/locations',
            path: {
                'list_id': listId,
            },
            query: {
                'fields': fields,
                'exclude_fields': excludeFields,
            },
        });
    }

    /**
     * Get information about all surveys for a list
     * Get information about all available surveys for a specific list.
     * @returns any
     * @throws ApiError
     */
    public getListsIdSurveys({
        listId,
    }: {
        /**
         * The unique ID for the list.
         */
        listId: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/lists/{list_id}/surveys',
            path: {
                'list_id': listId,
            },
        });
    }

    /**
     * Get survey
     * Get details about a specific survey.
     * @returns any
     * @throws ApiError
     */
    public getListsIdSurveysId({
        listId,
        surveyId,
    }: {
        /**
         * The unique ID for the list.
         */
        listId: string,
        /**
         * The ID of the survey.
         */
        surveyId: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/lists/{list_id}/surveys/{survey_id}',
            path: {
                'list_id': listId,
                'survey_id': surveyId,
            },
        });
    }

}
