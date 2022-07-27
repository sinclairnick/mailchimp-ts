/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ConversationsApi {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @deprecated
     * List conversations
     * Get a list of conversations for the account. Conversations has been deprecated in favor of Inbox and these endpoints don't include Inbox data. Past Conversations are still available via this endpoint, but new campaign replies and other Inbox messages aren’t available using this endpoint.
     * @returns any
     * @throws ApiError
     */
    public getConversations({
        fields,
        excludeFields,
        count = 10,
        offset,
        hasUnreadMessages,
        listId,
        campaignId,
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
         * Whether the conversation has any unread messages.
         */
        hasUnreadMessages?: 'true' | 'false',
        /**
         * The unique id for the list.
         */
        listId?: string,
        /**
         * The unique id for the campaign.
         */
        campaignId?: string,
    }): CancelablePromise<{
        /**
         * A list of conversations.
         */
        conversations?: Array<{
            /**
             * A string that uniquely identifies this conversation.
             */
            readonly id?: string;
            /**
             * The total number of messages in this conversation.
             */
            readonly message_count?: number;
            /**
             * The unique identifier of the campaign for this conversation.
             */
            readonly campaign_id?: string;
            /**
             * The unique identifier of the list for this conversation.
             */
            readonly list_id?: string;
            /**
             * The number of unread messages in this conversation.
             */
            readonly unread_messages?: number;
            /**
             * A label representing the sender of this message.
             */
            readonly from_label?: string;
            /**
             * A label representing the email of the sender of this message.
             */
            readonly from_email?: string;
            /**
             * The subject of the message.
             */
            readonly subject?: string;
            /**
             * The most recent message in the conversation.
             */
            last_message?: {
                /**
                 * A label representing the sender of this message.
                 */
                readonly from_label?: string;
                /**
                 * A label representing the email of the sender of this message.
                 */
                readonly from_email?: string;
                /**
                 * The subject of this message.
                 */
                readonly subject?: string;
                /**
                 * The plain-text content of the message.
                 */
                readonly message?: string;
                /**
                 * Whether this message has been marked as read.
                 */
                read?: boolean;
                /**
                 * The date and time the message was either sent or received in ISO 8601 format.
                 */
                readonly timestamp?: string;
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
            url: '/conversations',
            query: {
                'fields': fields,
                'exclude_fields': excludeFields,
                'count': count,
                'offset': offset,
                'has_unread_messages': hasUnreadMessages,
                'list_id': listId,
                'campaign_id': campaignId,
            },
        });
    }

    /**
     * @deprecated
     * Get conversation
     * Get details about an individual conversation. Conversations has been deprecated in favor of Inbox and these endpoints don't include Inbox data. Past Conversations are still available via this endpoint, but new campaign replies and other Inbox messages aren’t available using this endpoint.
     * @returns any
     * @throws ApiError
     */
    public getConversationsId({
        conversationId,
        fields,
        excludeFields,
    }: {
        /**
         * The unique id for the conversation.
         */
        conversationId: string,
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
         * A string that uniquely identifies this conversation.
         */
        readonly id?: string;
        /**
         * The total number of messages in this conversation.
         */
        readonly message_count?: number;
        /**
         * The unique identifier of the campaign for this conversation.
         */
        readonly campaign_id?: string;
        /**
         * The unique identifier of the list for this conversation.
         */
        readonly list_id?: string;
        /**
         * The number of unread messages in this conversation.
         */
        readonly unread_messages?: number;
        /**
         * A label representing the sender of this message.
         */
        readonly from_label?: string;
        /**
         * A label representing the email of the sender of this message.
         */
        readonly from_email?: string;
        /**
         * The subject of the message.
         */
        readonly subject?: string;
        /**
         * The most recent message in the conversation.
         */
        last_message?: {
            /**
             * A label representing the sender of this message.
             */
            readonly from_label?: string;
            /**
             * A label representing the email of the sender of this message.
             */
            readonly from_email?: string;
            /**
             * The subject of this message.
             */
            readonly subject?: string;
            /**
             * The plain-text content of the message.
             */
            readonly message?: string;
            /**
             * Whether this message has been marked as read.
             */
            read?: boolean;
            /**
             * The date and time the message was either sent or received in ISO 8601 format.
             */
            readonly timestamp?: string;
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
            url: '/conversations/{conversation_id}',
            path: {
                'conversation_id': conversationId,
            },
            query: {
                'fields': fields,
                'exclude_fields': excludeFields,
            },
        });
    }

    /**
     * @deprecated
     * List messages
     * Get messages from a specific conversation. Conversations has been deprecated in favor of Inbox and these endpoints don't include Inbox data. Past Conversations are still available via this endpoint, but new campaign replies and other Inbox messages aren’t available using this endpoint.
     * @returns any
     * @throws ApiError
     */
    public getConversationsIdMessages({
        conversationId,
        fields,
        excludeFields,
        isRead,
        beforeTimestamp,
        sinceTimestamp,
    }: {
        /**
         * The unique id for the conversation.
         */
        conversationId: string,
        /**
         * A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
         */
        fields?: Array<string>,
        /**
         * A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
         */
        excludeFields?: Array<string>,
        /**
         * Whether a conversation message has been marked as read.
         */
        isRead?: 'true' | 'false',
        /**
         * Restrict the response to messages created before the set time. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
         */
        beforeTimestamp?: string,
        /**
         * Restrict the response to messages created after the set time. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
         */
        sinceTimestamp?: string,
    }): CancelablePromise<{
        /**
         * An array of objects, each representing a conversation messages resources.
         */
        conversation_messages?: Array<{
            /**
             * A string that uniquely identifies this message
             */
            readonly id?: string;
            /**
             * A string that identifies this message's conversation
             */
            readonly conversation_id?: string;
            /**
             * The list's web ID
             */
            readonly list_id?: number;
            /**
             * A label representing the sender of this message
             */
            readonly from_label?: string;
            /**
             * A label representing the email of the sender of this message
             */
            from_email?: string;
            /**
             * The subject of this message
             */
            subject?: string;
            /**
             * The plain-text content of the message
             */
            message?: string;
            /**
             * Whether this message has been marked as read
             */
            read?: boolean;
            /**
             * The date and time the message was either sent or received in ISO 8601 format.
             */
            readonly timestamp?: string;
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
         * A string that identifies this conversation.
         */
        conversation_id?: string;
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
            url: '/conversations/{conversation_id}/messages',
            path: {
                'conversation_id': conversationId,
            },
            query: {
                'fields': fields,
                'exclude_fields': excludeFields,
                'is_read': isRead,
                'before_timestamp': beforeTimestamp,
                'since_timestamp': sinceTimestamp,
            },
        });
    }

    /**
     * @deprecated
     * Get message
     * Get an individual message in a conversation. Conversations has been deprecated in favor of Inbox and these endpoints don't include Inbox data. Past Conversations are still available via this endpoint, but new campaign replies and other Inbox messages aren’t available using this endpoint.
     * @returns any
     * @throws ApiError
     */
    public getConversationsIdMessagesId({
        conversationId,
        messageId,
        fields,
        excludeFields,
    }: {
        /**
         * The unique id for the conversation.
         */
        conversationId: string,
        /**
         * The unique id for the conversation message.
         */
        messageId: string,
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
         * A string that uniquely identifies this message
         */
        readonly id?: string;
        /**
         * A string that identifies this message's conversation
         */
        readonly conversation_id?: string;
        /**
         * The list's web ID
         */
        readonly list_id?: number;
        /**
         * A label representing the sender of this message
         */
        readonly from_label?: string;
        /**
         * A label representing the email of the sender of this message
         */
        from_email?: string;
        /**
         * The subject of this message
         */
        subject?: string;
        /**
         * The plain-text content of the message
         */
        message?: string;
        /**
         * Whether this message has been marked as read
         */
        read?: boolean;
        /**
         * The date and time the message was either sent or received in ISO 8601 format.
         */
        readonly timestamp?: string;
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
            url: '/conversations/{conversation_id}/messages/{message_id}',
            path: {
                'conversation_id': conversationId,
                'message_id': messageId,
            },
            query: {
                'fields': fields,
                'exclude_fields': excludeFields,
            },
        });
    }

}
