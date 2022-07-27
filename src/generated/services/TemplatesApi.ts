/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class TemplatesApi {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List templates
     * Get a list of an account's available templates.
     * @returns any
     * @throws ApiError
     */
    public getTemplates({
        fields,
        excludeFields,
        count = 10,
        offset,
        createdBy,
        sinceDateCreated,
        beforeDateCreated,
        type,
        category,
        folderId,
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
         * The Mailchimp account user who created the template.
         */
        createdBy?: string,
        /**
         * Restrict the response to templates created after the set date. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
         */
        sinceDateCreated?: string,
        /**
         * Restrict the response to templates created before the set date. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
         */
        beforeDateCreated?: string,
        /**
         * Limit results based on template type.
         */
        type?: string,
        /**
         * Limit results based on category.
         */
        category?: string,
        /**
         * The unique folder id.
         */
        folderId?: string,
        /**
         * Returns user templates sorted by the specified field.
         */
        sortField?: 'date_created' | 'date_edited' | 'name',
        /**
         * Determines the order direction for sorted results.
         */
        sortDir?: 'ASC' | 'DESC',
    }): CancelablePromise<{
        /**
         * All of an account's saved or custom templates.
         */
        templates?: Array<{
            /**
             * The individual id for the template.
             */
            readonly id?: number;
            /**
             * The type of template (user, base, or gallery).
             */
            readonly type?: string;
            /**
             * The name of the template.
             */
            name?: string;
            /**
             * Whether the template uses the drag and drop editor.
             */
            readonly drag_and_drop?: boolean;
            /**
             * Whether the template contains media queries to make it responsive.
             */
            readonly responsive?: boolean;
            /**
             * If available, the category the template is listed in.
             */
            readonly category?: string;
            /**
             * The date and time the template was created in ISO 8601 format.
             */
            readonly date_created?: string;
            /**
             * The date and time the template was edited in ISO 8601 format.
             */
            readonly date_edited?: string;
            /**
             * The login name for template's creator.
             */
            readonly created_by?: string;
            /**
             * The login name who last edited the template.
             */
            readonly edited_by?: string;
            /**
             * User templates are not 'deleted,' but rather marked as 'inactive.' Returns whether the template is still active.
             */
            readonly active?: boolean;
            /**
             * The id of the folder the template is currently in.
             */
            folder_id?: string;
            /**
             * If available, the URL for a thumbnail of the template.
             */
            readonly thumbnail?: string;
            /**
             * The URL used for [template sharing](https://mailchimp.com/help/share-a-template/).
             */
            readonly share_url?: string;
            /**
             * How the template's content is put together.
             */
            readonly content_type?: 'template' | 'multichannel' | 'html';
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
            url: '/templates',
            query: {
                'fields': fields,
                'exclude_fields': excludeFields,
                'count': count,
                'offset': offset,
                'created_by': createdBy,
                'since_date_created': sinceDateCreated,
                'before_date_created': beforeDateCreated,
                'type': type,
                'category': category,
                'folder_id': folderId,
                'sort_field': sortField,
                'sort_dir': sortDir,
            },
        });
    }

    /**
     * Add template
     * Create a new template for the account. Only Classic templates are supported.
     * @returns any
     * @throws ApiError
     */
    public postTemplates({
        body,
    }: {
        body: {
            /**
             * The name of the template.
             */
            name: string;
            /**
             * The id of the folder the template is currently in.
             */
            folder_id?: string;
            /**
             * The raw HTML for the template. We  support the Mailchimp [Template Language](https://mailchimp.com/help/getting-started-with-mailchimps-template-language/) in any HTML code passed via the API.
             */
            html: string;
        },
    }): CancelablePromise<{
        /**
         * The individual id for the template.
         */
        readonly id?: number;
        /**
         * The type of template (user, base, or gallery).
         */
        readonly type?: string;
        /**
         * The name of the template.
         */
        name?: string;
        /**
         * Whether the template uses the drag and drop editor.
         */
        readonly drag_and_drop?: boolean;
        /**
         * Whether the template contains media queries to make it responsive.
         */
        readonly responsive?: boolean;
        /**
         * If available, the category the template is listed in.
         */
        readonly category?: string;
        /**
         * The date and time the template was created in ISO 8601 format.
         */
        readonly date_created?: string;
        /**
         * The date and time the template was edited in ISO 8601 format.
         */
        readonly date_edited?: string;
        /**
         * The login name for template's creator.
         */
        readonly created_by?: string;
        /**
         * The login name who last edited the template.
         */
        readonly edited_by?: string;
        /**
         * User templates are not 'deleted,' but rather marked as 'inactive.' Returns whether the template is still active.
         */
        readonly active?: boolean;
        /**
         * The id of the folder the template is currently in.
         */
        folder_id?: string;
        /**
         * If available, the URL for a thumbnail of the template.
         */
        readonly thumbnail?: string;
        /**
         * The URL used for [template sharing](https://mailchimp.com/help/share-a-template/).
         */
        readonly share_url?: string;
        /**
         * How the template's content is put together.
         */
        readonly content_type?: 'template' | 'multichannel' | 'html';
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
            url: '/templates',
            body: body,
        });
    }

    /**
     * Get template info
     * Get information about a specific template.
     * @returns any
     * @throws ApiError
     */
    public getTemplatesId({
        templateId,
        fields,
        excludeFields,
    }: {
        /**
         * The unique id for the template.
         */
        templateId: string,
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
         * The individual id for the template.
         */
        readonly id?: number;
        /**
         * The type of template (user, base, or gallery).
         */
        readonly type?: string;
        /**
         * The name of the template.
         */
        name?: string;
        /**
         * Whether the template uses the drag and drop editor.
         */
        readonly drag_and_drop?: boolean;
        /**
         * Whether the template contains media queries to make it responsive.
         */
        readonly responsive?: boolean;
        /**
         * If available, the category the template is listed in.
         */
        readonly category?: string;
        /**
         * The date and time the template was created in ISO 8601 format.
         */
        readonly date_created?: string;
        /**
         * The date and time the template was edited in ISO 8601 format.
         */
        readonly date_edited?: string;
        /**
         * The login name for template's creator.
         */
        readonly created_by?: string;
        /**
         * The login name who last edited the template.
         */
        readonly edited_by?: string;
        /**
         * User templates are not 'deleted,' but rather marked as 'inactive.' Returns whether the template is still active.
         */
        readonly active?: boolean;
        /**
         * The id of the folder the template is currently in.
         */
        folder_id?: string;
        /**
         * If available, the URL for a thumbnail of the template.
         */
        readonly thumbnail?: string;
        /**
         * The URL used for [template sharing](https://mailchimp.com/help/share-a-template/).
         */
        readonly share_url?: string;
        /**
         * How the template's content is put together.
         */
        readonly content_type?: 'template' | 'multichannel' | 'html';
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
            url: '/templates/{template_id}',
            path: {
                'template_id': templateId,
            },
            query: {
                'fields': fields,
                'exclude_fields': excludeFields,
            },
        });
    }

    /**
     * Update template
     * Update the name, HTML, or `folder_id` of an existing template.
     * @returns any
     * @throws ApiError
     */
    public patchTemplatesId({
        templateId,
        body,
    }: {
        /**
         * The unique id for the template.
         */
        templateId: string,
        body: {
            /**
             * The name of the template.
             */
            name: string;
            /**
             * The id of the folder the template is currently in.
             */
            folder_id?: string;
            /**
             * The raw HTML for the template. We  support the Mailchimp [Template Language](https://mailchimp.com/help/getting-started-with-mailchimps-template-language/) in any HTML code passed via the API.
             */
            html: string;
        },
    }): CancelablePromise<{
        /**
         * The individual id for the template.
         */
        readonly id?: number;
        /**
         * The type of template (user, base, or gallery).
         */
        readonly type?: string;
        /**
         * The name of the template.
         */
        name?: string;
        /**
         * Whether the template uses the drag and drop editor.
         */
        readonly drag_and_drop?: boolean;
        /**
         * Whether the template contains media queries to make it responsive.
         */
        readonly responsive?: boolean;
        /**
         * If available, the category the template is listed in.
         */
        readonly category?: string;
        /**
         * The date and time the template was created in ISO 8601 format.
         */
        readonly date_created?: string;
        /**
         * The date and time the template was edited in ISO 8601 format.
         */
        readonly date_edited?: string;
        /**
         * The login name for template's creator.
         */
        readonly created_by?: string;
        /**
         * The login name who last edited the template.
         */
        readonly edited_by?: string;
        /**
         * User templates are not 'deleted,' but rather marked as 'inactive.' Returns whether the template is still active.
         */
        readonly active?: boolean;
        /**
         * The id of the folder the template is currently in.
         */
        folder_id?: string;
        /**
         * If available, the URL for a thumbnail of the template.
         */
        readonly thumbnail?: string;
        /**
         * The URL used for [template sharing](https://mailchimp.com/help/share-a-template/).
         */
        readonly share_url?: string;
        /**
         * How the template's content is put together.
         */
        readonly content_type?: 'template' | 'multichannel' | 'html';
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
            url: '/templates/{template_id}',
            path: {
                'template_id': templateId,
            },
            body: body,
        });
    }

    /**
     * Delete template
     * Delete a specific template.
     * @returns any An error generated by the Mailchimp API.
     * @throws ApiError
     */
    public deleteTemplatesId({
        templateId,
    }: {
        /**
         * The unique id for the template.
         */
        templateId: string,
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
            url: '/templates/{template_id}',
            path: {
                'template_id': templateId,
            },
        });
    }

    /**
     * View default content
     * Get the sections that you can edit in a template, including each section's default content.
     * @returns any
     * @throws ApiError
     */
    public getTemplatesIdDefaultContent({
        templateId,
        fields,
        excludeFields,
    }: {
        /**
         * The unique id for the template.
         */
        templateId: string,
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
         * The sections that you can edit in the template, including each section's default content.
         */
        sections?: Record<string, any>;
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
            url: '/templates/{template_id}/default-content',
            path: {
                'template_id': templateId,
            },
            query: {
                'fields': fields,
                'exclude_fields': excludeFields,
            },
        });
    }

}
