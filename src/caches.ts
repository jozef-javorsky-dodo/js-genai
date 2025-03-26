/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

// Code generated by the Google Gen AI SDK generator DO NOT EDIT.

import {ApiClient} from './_api_client';
import * as common from './_common';
import {BaseModule} from './_common';
import * as converters from './converters/_caches_converters';
import {PagedItem, Pager} from './pagers';
import * as types from './types';

export class Caches extends BaseModule {
  constructor(private readonly apiClient: ApiClient) {
    super();
  }

  /**
   * Lists cached content configurations.
   *
   * @param params - The parameters for the list request.
   * @return The paginated results of the list of cached contents.
   *
   * @example
   * ```ts
   * const cachedContents = await ai.caches.list({config: {'pageSize': 2}});
   * for (const cachedContent of cachedContents) {
   *   console.log(cachedContent);
   * }
   * ```
   */
  list = async (
    params: types.ListCachedContentsParameters = {},
  ): Promise<Pager<types.CachedContent>> => {
    return new Pager<types.CachedContent>(
      PagedItem.PAGED_ITEM_CACHED_CONTENTS,
      (x: types.ListCachedContentsParameters) => this.listInternal(x),
      await this.listInternal(params),
      params,
    );
  };

  /**
   * Creates a cached contents resource.
   *
   * @remarks
   * Context caching is only supported for specific models. See [Gemini
   * Developer API reference] (https://ai.google.dev/gemini-api/docs/caching?lang=node/context-cac)
   * and [Vertex AI reference] (https://cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-overview#supported_models)
   * for more information.
   *
   * @param params - The parameters for the create request.
   * @return The created cached content.
   *
   * @example
   * ```ts
   * const contents = ...; // Initialize the content to cache.
   * const response = await ai.caches.create({
   *   model: 'gemini-1.5-flash',
   *   config: {
   *    'contents': contents,
   *    'displayName': 'test cache',
   *    'systemInstruction': 'What is the sum of the two pdfs?',
   *    'ttl': '86400s',
   *  }
   * });
   * ```
   */
  async create(
    params: types.CreateCachedContentParameters,
  ): Promise<types.CachedContent> {
    let response: Promise<types.CachedContent>;
    let path: string = '';
    let queryParams: Record<string, string> = {};
    if (this.apiClient.isVertexAI()) {
      const body = converters.createCachedContentParametersToVertex(
        this.apiClient,
        params,
      );
      path = common.formatMap(
        'cachedContents',
        body['_url'] as Record<string, unknown>,
      );
      queryParams = body['_query'] as Record<string, string>;
      delete body['config'];
      delete body['_url'];
      delete body['_query'];

      response = this.apiClient
        .request({
          path: path,
          queryParams: queryParams,
          body: JSON.stringify(body),
          httpMethod: 'POST',
          httpOptions: params.config?.httpOptions,
        })
        .then((httpResponse) => {
          return httpResponse.json();
        }) as Promise<types.CachedContent>;

      return response.then((apiResponse) => {
        const resp = converters.cachedContentFromVertex(
          this.apiClient,
          apiResponse,
        );

        return resp as types.CachedContent;
      });
    } else {
      const body = converters.createCachedContentParametersToMldev(
        this.apiClient,
        params,
      );
      path = common.formatMap(
        'cachedContents',
        body['_url'] as Record<string, unknown>,
      );
      queryParams = body['_query'] as Record<string, string>;
      delete body['config'];
      delete body['_url'];
      delete body['_query'];

      response = this.apiClient
        .request({
          path: path,
          queryParams: queryParams,
          body: JSON.stringify(body),
          httpMethod: 'POST',
          httpOptions: params.config?.httpOptions,
        })
        .then((httpResponse) => {
          return httpResponse.json();
        }) as Promise<types.CachedContent>;

      return response.then((apiResponse) => {
        const resp = converters.cachedContentFromMldev(
          this.apiClient,
          apiResponse,
        );

        return resp as types.CachedContent;
      });
    }
  }

  /**
   * Gets cached content configurations.
   *
   * @param params - The parameters for the get request.
   * @return The cached content.
   *
   * @example
   * ```ts
   * await ai.caches.get({name: 'gemini-1.5-flash'});
   * ```
   */
  async get(
    params: types.GetCachedContentParameters,
  ): Promise<types.CachedContent> {
    let response: Promise<types.CachedContent>;
    let path: string = '';
    let queryParams: Record<string, string> = {};
    if (this.apiClient.isVertexAI()) {
      const body = converters.getCachedContentParametersToVertex(
        this.apiClient,
        params,
      );
      path = common.formatMap(
        '{name}',
        body['_url'] as Record<string, unknown>,
      );
      queryParams = body['_query'] as Record<string, string>;
      delete body['config'];
      delete body['_url'];
      delete body['_query'];

      response = this.apiClient
        .request({
          path: path,
          queryParams: queryParams,
          body: JSON.stringify(body),
          httpMethod: 'GET',
          httpOptions: params.config?.httpOptions,
        })
        .then((httpResponse) => {
          return httpResponse.json();
        }) as Promise<types.CachedContent>;

      return response.then((apiResponse) => {
        const resp = converters.cachedContentFromVertex(
          this.apiClient,
          apiResponse,
        );

        return resp as types.CachedContent;
      });
    } else {
      const body = converters.getCachedContentParametersToMldev(
        this.apiClient,
        params,
      );
      path = common.formatMap(
        '{name}',
        body['_url'] as Record<string, unknown>,
      );
      queryParams = body['_query'] as Record<string, string>;
      delete body['config'];
      delete body['_url'];
      delete body['_query'];

      response = this.apiClient
        .request({
          path: path,
          queryParams: queryParams,
          body: JSON.stringify(body),
          httpMethod: 'GET',
          httpOptions: params.config?.httpOptions,
        })
        .then((httpResponse) => {
          return httpResponse.json();
        }) as Promise<types.CachedContent>;

      return response.then((apiResponse) => {
        const resp = converters.cachedContentFromMldev(
          this.apiClient,
          apiResponse,
        );

        return resp as types.CachedContent;
      });
    }
  }

  /**
   * Deletes cached content.
   *
   * @param params - The parameters for the delete request.
   * @return The empty response returned by the API.
   *
   * @example
   * ```ts
   * await ai.caches.delete({name: 'gemini-1.5-flash'});
   * ```
   */
  async delete(
    params: types.DeleteCachedContentParameters,
  ): Promise<types.DeleteCachedContentResponse> {
    let response: Promise<types.DeleteCachedContentResponse>;
    let path: string = '';
    let queryParams: Record<string, string> = {};
    if (this.apiClient.isVertexAI()) {
      const body = converters.deleteCachedContentParametersToVertex(
        this.apiClient,
        params,
      );
      path = common.formatMap(
        '{name}',
        body['_url'] as Record<string, unknown>,
      );
      queryParams = body['_query'] as Record<string, string>;
      delete body['config'];
      delete body['_url'];
      delete body['_query'];

      response = this.apiClient
        .request({
          path: path,
          queryParams: queryParams,
          body: JSON.stringify(body),
          httpMethod: 'DELETE',
          httpOptions: params.config?.httpOptions,
        })
        .then((httpResponse) => {
          return httpResponse.json();
        }) as Promise<types.DeleteCachedContentResponse>;

      return response.then(() => {
        const resp = converters.deleteCachedContentResponseFromVertex();
        const typedResp = new types.DeleteCachedContentResponse();
        Object.assign(typedResp, resp);
        return typedResp;
      });
    } else {
      const body = converters.deleteCachedContentParametersToMldev(
        this.apiClient,
        params,
      );
      path = common.formatMap(
        '{name}',
        body['_url'] as Record<string, unknown>,
      );
      queryParams = body['_query'] as Record<string, string>;
      delete body['config'];
      delete body['_url'];
      delete body['_query'];

      response = this.apiClient
        .request({
          path: path,
          queryParams: queryParams,
          body: JSON.stringify(body),
          httpMethod: 'DELETE',
          httpOptions: params.config?.httpOptions,
        })
        .then((httpResponse) => {
          return httpResponse.json();
        }) as Promise<types.DeleteCachedContentResponse>;

      return response.then(() => {
        const resp = converters.deleteCachedContentResponseFromMldev();
        const typedResp = new types.DeleteCachedContentResponse();
        Object.assign(typedResp, resp);
        return typedResp;
      });
    }
  }

  /**
   * Updates cached content configurations.
   *
   * @param params - The parameters for the update request.
   * @return The updated cached content.
   *
   * @example
   * ```ts
   * const response = await ai.caches.update({
   *   name: 'gemini-1.5-flash',
   *   config: {'ttl': '7600s'}
   * });
   * ```
   */
  async update(
    params: types.UpdateCachedContentParameters,
  ): Promise<types.CachedContent> {
    let response: Promise<types.CachedContent>;
    let path: string = '';
    let queryParams: Record<string, string> = {};
    if (this.apiClient.isVertexAI()) {
      const body = converters.updateCachedContentParametersToVertex(
        this.apiClient,
        params,
      );
      path = common.formatMap(
        '{name}',
        body['_url'] as Record<string, unknown>,
      );
      queryParams = body['_query'] as Record<string, string>;
      delete body['config'];
      delete body['_url'];
      delete body['_query'];

      response = this.apiClient
        .request({
          path: path,
          queryParams: queryParams,
          body: JSON.stringify(body),
          httpMethod: 'PATCH',
          httpOptions: params.config?.httpOptions,
        })
        .then((httpResponse) => {
          return httpResponse.json();
        }) as Promise<types.CachedContent>;

      return response.then((apiResponse) => {
        const resp = converters.cachedContentFromVertex(
          this.apiClient,
          apiResponse,
        );

        return resp as types.CachedContent;
      });
    } else {
      const body = converters.updateCachedContentParametersToMldev(
        this.apiClient,
        params,
      );
      path = common.formatMap(
        '{name}',
        body['_url'] as Record<string, unknown>,
      );
      queryParams = body['_query'] as Record<string, string>;
      delete body['config'];
      delete body['_url'];
      delete body['_query'];

      response = this.apiClient
        .request({
          path: path,
          queryParams: queryParams,
          body: JSON.stringify(body),
          httpMethod: 'PATCH',
          httpOptions: params.config?.httpOptions,
        })
        .then((httpResponse) => {
          return httpResponse.json();
        }) as Promise<types.CachedContent>;

      return response.then((apiResponse) => {
        const resp = converters.cachedContentFromMldev(
          this.apiClient,
          apiResponse,
        );

        return resp as types.CachedContent;
      });
    }
  }

  private async listInternal(
    params: types.ListCachedContentsParameters,
  ): Promise<types.ListCachedContentsResponse> {
    let response: Promise<types.ListCachedContentsResponse>;
    let path: string = '';
    let queryParams: Record<string, string> = {};
    if (this.apiClient.isVertexAI()) {
      const body = converters.listCachedContentsParametersToVertex(
        this.apiClient,
        params,
      );
      path = common.formatMap(
        'cachedContents',
        body['_url'] as Record<string, unknown>,
      );
      queryParams = body['_query'] as Record<string, string>;
      delete body['config'];
      delete body['_url'];
      delete body['_query'];

      response = this.apiClient
        .request({
          path: path,
          queryParams: queryParams,
          body: JSON.stringify(body),
          httpMethod: 'GET',
          httpOptions: params.config?.httpOptions,
        })
        .then((httpResponse) => {
          return httpResponse.json();
        }) as Promise<types.ListCachedContentsResponse>;

      return response.then((apiResponse) => {
        const resp = converters.listCachedContentsResponseFromVertex(
          this.apiClient,
          apiResponse,
        );
        const typedResp = new types.ListCachedContentsResponse();
        Object.assign(typedResp, resp);
        return typedResp;
      });
    } else {
      const body = converters.listCachedContentsParametersToMldev(
        this.apiClient,
        params,
      );
      path = common.formatMap(
        'cachedContents',
        body['_url'] as Record<string, unknown>,
      );
      queryParams = body['_query'] as Record<string, string>;
      delete body['config'];
      delete body['_url'];
      delete body['_query'];

      response = this.apiClient
        .request({
          path: path,
          queryParams: queryParams,
          body: JSON.stringify(body),
          httpMethod: 'GET',
          httpOptions: params.config?.httpOptions,
        })
        .then((httpResponse) => {
          return httpResponse.json();
        }) as Promise<types.ListCachedContentsResponse>;

      return response.then((apiResponse) => {
        const resp = converters.listCachedContentsResponseFromMldev(
          this.apiClient,
          apiResponse,
        );
        const typedResp = new types.ListCachedContentsResponse();
        Object.assign(typedResp, resp);
        return typedResp;
      });
    }
  }
}
