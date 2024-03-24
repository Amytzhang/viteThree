// 1. fetch.ts
import { createFetch, CreateFetchOptions, UseFetchOptions } from '@vueuse/core';
import { objectToSearch } from './objectToSearch.ts';

interface fetchParams {
  url: string;
  params?: Record<string, any>;
  data?: Record<string, any>;
}

class Fetch {
  instances;
  constructor(params: CreateFetchOptions) {
    const {
      baseUrl,
      combination = 'chain',
      fetchOptions = {
        mode: 'cors',
      },
      options,
    } = params;
    this.instances = createFetch({
      baseUrl,
      combination,
      options,
      fetchOptions,
    });
  }
  get(
    { url, params = {} }: fetchParams,
    featOptions: UseFetchOptions = {}
  ) {
    return this.instances(
      `${url}${objectToSearch(params) ? `?${objectToSearch(params)}` : ''}`,
      featOptions
    ).json();
  }
  post(
    { url, data, params = {} }: fetchParams,
    featOptions: UseFetchOptions = {}
  ) {
    return this.instances(
      `${url}${objectToSearch(params) ? `?${objectToSearch(params)}` : ''}`,
      featOptions
    )
      .post(data)
      .json();
  }
  put(
    { url, data, params = {} }: fetchParams,
    featOptions: UseFetchOptions = {}
  ) {
    return this.instances(
      `${url}${objectToSearch(params) ? `?${objectToSearch(params)}` : ''}`,
      featOptions
    )
      .put(data)
      .json();
  }
  patch(
    { url, data, params = {} }: fetchParams,
    featOptions: UseFetchOptions = {}
  ) {
    return this.instances(
      `${url}${objectToSearch(params) ? `?${objectToSearch(params)}` : ''}`,
      featOptions
    )
      .patch(data)
      .json();
  }
  delete(
    { url, params = {} }: fetchParams,
    featOptions: UseFetchOptions = {}
  ) {
    return this.instances(
      `${url}${objectToSearch(params) ? `?${objectToSearch(params)}` : ''}`,
      featOptions
    )
      .delete()
      .json();
  }
}

export default Fetch;
