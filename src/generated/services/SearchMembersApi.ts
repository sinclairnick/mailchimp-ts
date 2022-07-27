/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class SearchMembersApi {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Search members
     * Search for list members. This search can be restricted to a specific list, or can be used to search across all lists in an account.
     * @returns any
     * @throws ApiError
     */
    public getSearchMembers({
        query,
        fields,
        excludeFields,
        listId,
    }: {
        /**
         * The search query used to filter results. Query should be a valid email, or a string representing a contact's first or last name.
         */
        query: string,
        /**
         * A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
         */
        fields?: Array<string>,
        /**
         * A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
         */
        excludeFields?: Array<string>,
        /**
         * The unique id for the list.
         */
        listId?: string,
    }): CancelablePromise<{
        /**
         * Exact matches of the provided search query.
         */
        exact_matches?: {
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
             * The total number of items matching the query regardless of pagination.
             */
            readonly total_items?: number;
        };
        /**
         * Partial matches of the provided search query.
         */
        full_search?: {
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
             * The total number of items matching the query regardless of pagination.
             */
            readonly total_items?: number;
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
            url: '/search-members',
            query: {
                'fields': fields,
                'exclude_fields': excludeFields,
                'query': query,
                'list_id': listId,
            },
        });
    }

}
