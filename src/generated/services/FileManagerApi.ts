/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class FileManagerApi {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List stored files
     * Get a list of available images and files stored in the File Manager for the account.
     * @returns any
     * @throws ApiError
     */
    public getFileManagerFiles({
        fields,
        excludeFields,
        count = 10,
        offset,
        type,
        createdBy,
        beforeCreatedAt,
        sinceCreatedAt,
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
         * The file type for the File Manager file.
         */
        type?: string,
        /**
         * The Mailchimp account user who created the File Manager file.
         */
        createdBy?: string,
        /**
         * Restrict the response to files created before the set date. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
         */
        beforeCreatedAt?: string,
        /**
         * Restrict the response to files created after the set date. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
         */
        sinceCreatedAt?: string,
        /**
         * Returns files sorted by the specified field.
         */
        sortField?: 'added_date',
        /**
         * Determines the order direction for sorted results.
         */
        sortDir?: 'ASC' | 'DESC',
    }): CancelablePromise<{
        /**
         *  A list of files and images in an account.
         */
        files?: Array<{
            /**
             * The unique id of the file.
             */
            readonly id?: number;
            /**
             * The id of the folder.
             */
            folder_id?: number;
            /**
             * The type of file in the File Manager.
             */
            readonly type?: 'image' | 'file';
            /**
             * The name of the file.
             */
            name?: string;
            /**
             * The url of the full-size file.
             */
            readonly full_size_url?: string;
            /**
             * The url of the thumbnail preview.
             */
            readonly thumbnail_url?: string;
            /**
             * The size of the file in bytes.
             */
            readonly size?: number;
            /**
             * The date and time a file was added to the File Manager in ISO 8601 format.
             */
            readonly created_at?: string;
            /**
             * The username of the profile that uploaded the file.
             */
            readonly created_by?: string;
            /**
             * The width of the image.
             */
            readonly width?: number;
            /**
             * The height of an image.
             */
            readonly height?: number;
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
         * The total size of all File Manager files in bytes.
         */
        readonly total_file_size?: number;
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
            url: '/file-manager/files',
            query: {
                'fields': fields,
                'exclude_fields': excludeFields,
                'count': count,
                'offset': offset,
                'type': type,
                'created_by': createdBy,
                'before_created_at': beforeCreatedAt,
                'since_created_at': sinceCreatedAt,
                'sort_field': sortField,
                'sort_dir': sortDir,
            },
        });
    }

    /**
     * Add file
     * Upload a new image or file to the File Manager.
     * @returns any
     * @throws ApiError
     */
    public postFileManagerFiles({
        body,
    }: {
        body: {
            /**
             * The id of the folder.
             */
            folder_id?: number;
            /**
             * The name of the file.
             */
            name: string;
            /**
             * The base64-encoded contents of the file.
             */
            file_data: string;
        },
    }): CancelablePromise<{
        /**
         * The unique id of the file.
         */
        readonly id?: number;
        /**
         * The id of the folder.
         */
        folder_id?: number;
        /**
         * The type of file in the File Manager.
         */
        readonly type?: 'image' | 'file';
        /**
         * The name of the file.
         */
        name?: string;
        /**
         * The url of the full-size file.
         */
        readonly full_size_url?: string;
        /**
         * The url of the thumbnail preview.
         */
        readonly thumbnail_url?: string;
        /**
         * The size of the file in bytes.
         */
        readonly size?: number;
        /**
         * The date and time a file was added to the File Manager in ISO 8601 format.
         */
        readonly created_at?: string;
        /**
         * The username of the profile that uploaded the file.
         */
        readonly created_by?: string;
        /**
         * The width of the image.
         */
        readonly width?: number;
        /**
         * The height of an image.
         */
        readonly height?: number;
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
            url: '/file-manager/files',
            body: body,
        });
    }

    /**
     * Get file
     * Get information about a specific file in the File Manager.
     * @returns any
     * @throws ApiError
     */
    public getFileManagerFilesId({
        fileId,
        fields,
        excludeFields,
    }: {
        /**
         * The unique id for the File Manager file.
         */
        fileId: string,
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
         * The unique id of the file.
         */
        readonly id?: number;
        /**
         * The id of the folder.
         */
        folder_id?: number;
        /**
         * The type of file in the File Manager.
         */
        readonly type?: 'image' | 'file';
        /**
         * The name of the file.
         */
        name?: string;
        /**
         * The url of the full-size file.
         */
        readonly full_size_url?: string;
        /**
         * The url of the thumbnail preview.
         */
        readonly thumbnail_url?: string;
        /**
         * The size of the file in bytes.
         */
        readonly size?: number;
        /**
         * The date and time a file was added to the File Manager in ISO 8601 format.
         */
        readonly created_at?: string;
        /**
         * The username of the profile that uploaded the file.
         */
        readonly created_by?: string;
        /**
         * The width of the image.
         */
        readonly width?: number;
        /**
         * The height of an image.
         */
        readonly height?: number;
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
            url: '/file-manager/files/{file_id}',
            path: {
                'file_id': fileId,
            },
            query: {
                'fields': fields,
                'exclude_fields': excludeFields,
            },
        });
    }

    /**
     * Update file
     * Update a file in the File Manager.
     * @returns any
     * @throws ApiError
     */
    public patchFileManagerFilesId({
        fileId,
        body,
    }: {
        /**
         * The unique id for the File Manager file.
         */
        fileId: string,
        body: {
            /**
             * The id of the folder. Setting `folder_id` to `0` will remove a file from its current folder.
             */
            folder_id?: number;
            /**
             * The name of the file.
             */
            name?: string;
        },
    }): CancelablePromise<{
        /**
         * The unique id of the file.
         */
        readonly id?: number;
        /**
         * The id of the folder.
         */
        folder_id?: number;
        /**
         * The type of file in the File Manager.
         */
        readonly type?: 'image' | 'file';
        /**
         * The name of the file.
         */
        name?: string;
        /**
         * The url of the full-size file.
         */
        readonly full_size_url?: string;
        /**
         * The url of the thumbnail preview.
         */
        readonly thumbnail_url?: string;
        /**
         * The size of the file in bytes.
         */
        readonly size?: number;
        /**
         * The date and time a file was added to the File Manager in ISO 8601 format.
         */
        readonly created_at?: string;
        /**
         * The username of the profile that uploaded the file.
         */
        readonly created_by?: string;
        /**
         * The width of the image.
         */
        readonly width?: number;
        /**
         * The height of an image.
         */
        readonly height?: number;
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
            url: '/file-manager/files/{file_id}',
            path: {
                'file_id': fileId,
            },
            body: body,
        });
    }

    /**
     * Delete file
     * Remove a specific file from the File Manager.
     * @returns any An error generated by the Mailchimp API.
     * @throws ApiError
     */
    public deleteFileManagerFilesId({
        fileId,
    }: {
        /**
         * The unique id for the File Manager file.
         */
        fileId: string,
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
            url: '/file-manager/files/{file_id}',
            path: {
                'file_id': fileId,
            },
        });
    }

    /**
     * List folders
     * Get a list of all folders in the File Manager.
     * @returns any
     * @throws ApiError
     */
    public getFileManagerFolders({
        fields,
        excludeFields,
        count = 10,
        offset,
        createdBy,
        beforeCreatedAt,
        sinceCreatedAt,
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
         * The Mailchimp account user who created the File Manager file.
         */
        createdBy?: string,
        /**
         * Restrict the response to files created before the set date. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
         */
        beforeCreatedAt?: string,
        /**
         * Restrict the response to files created after the set date. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.
         */
        sinceCreatedAt?: string,
    }): CancelablePromise<{
        /**
         * A list of all folders in the File Manager.
         */
        folders?: Array<{
            /**
             * The unique id for the folder.
             */
            readonly id?: number;
            /**
             * The name of the folder.
             */
            name?: string;
            /**
             * The number of files in the folder.
             */
            readonly file_count?: number;
            /**
             * The date and time a file was added to the File Manager in ISO 8601 format.
             */
            readonly created_at?: string;
            /**
             * The username of the profile that created the folder.
             */
            readonly created_by?: string;
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
            url: '/file-manager/folders',
            query: {
                'fields': fields,
                'exclude_fields': excludeFields,
                'count': count,
                'offset': offset,
                'created_by': createdBy,
                'before_created_at': beforeCreatedAt,
                'since_created_at': sinceCreatedAt,
            },
        });
    }

    /**
     * Add folder
     * Create a new folder in the File Manager.
     * @returns any
     * @throws ApiError
     */
    public postFileManagerFolders({
        body,
    }: {
        body: {
            /**
             * The name of the folder.
             */
            name: string;
        },
    }): CancelablePromise<{
        /**
         * The unique id for the folder.
         */
        readonly id?: number;
        /**
         * The name of the folder.
         */
        name?: string;
        /**
         * The number of files in the folder.
         */
        readonly file_count?: number;
        /**
         * The date and time a file was added to the File Manager in ISO 8601 format.
         */
        readonly created_at?: string;
        /**
         * The username of the profile that created the folder.
         */
        readonly created_by?: string;
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
            url: '/file-manager/folders',
            body: body,
        });
    }

    /**
     * Get folder
     * Get information about a specific folder in the File Manager.
     * @returns any
     * @throws ApiError
     */
    public getFileManagerFoldersId({
        folderId,
        fields,
        excludeFields,
    }: {
        /**
         * The unique id for the File Manager folder.
         */
        folderId: string,
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
         * The unique id for the folder.
         */
        readonly id?: number;
        /**
         * The name of the folder.
         */
        name?: string;
        /**
         * The number of files in the folder.
         */
        readonly file_count?: number;
        /**
         * The date and time a file was added to the File Manager in ISO 8601 format.
         */
        readonly created_at?: string;
        /**
         * The username of the profile that created the folder.
         */
        readonly created_by?: string;
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
            url: '/file-manager/folders/{folder_id}',
            path: {
                'folder_id': folderId,
            },
            query: {
                'fields': fields,
                'exclude_fields': excludeFields,
            },
        });
    }

    /**
     * Update folder
     * Update a specific File Manager folder.
     * @returns any
     * @throws ApiError
     */
    public patchFileManagerFoldersId({
        folderId,
        body,
    }: {
        /**
         * The unique id for the File Manager folder.
         */
        folderId: string,
        body: {
            /**
             * The name of the folder.
             */
            name: string;
        },
    }): CancelablePromise<{
        /**
         * The unique id for the folder.
         */
        readonly id?: number;
        /**
         * The name of the folder.
         */
        name?: string;
        /**
         * The number of files in the folder.
         */
        readonly file_count?: number;
        /**
         * The date and time a file was added to the File Manager in ISO 8601 format.
         */
        readonly created_at?: string;
        /**
         * The username of the profile that created the folder.
         */
        readonly created_by?: string;
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
            url: '/file-manager/folders/{folder_id}',
            path: {
                'folder_id': folderId,
            },
            body: body,
        });
    }

    /**
     * Delete folder
     * Delete a specific folder in the File Manager.
     * @returns any An error generated by the Mailchimp API.
     * @throws ApiError
     */
    public deleteFileManagerFoldersId({
        folderId,
    }: {
        /**
         * The unique id for the File Manager folder.
         */
        folderId: string,
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
            url: '/file-manager/folders/{folder_id}',
            path: {
                'folder_id': folderId,
            },
        });
    }

}
