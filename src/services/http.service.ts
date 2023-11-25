type Options = {
  baseUrl: string;
  apiKey: string;
};

type GetRequestOptions = {
  absoluteUrl: boolean;
};

class HttpService {
  private readonly baseUrl: string;
  private readonly apiKey: string;

  constructor({ baseUrl, apiKey }: Options) {
    this.baseUrl = baseUrl;
    this.apiKey = apiKey;
  }

  async get<T>(
    path: string,
    query?: Record<string, string | number>,
    options?: GetRequestOptions,
  ): Promise<T> {
    const params = new URLSearchParams();

    if (query) {
      Object.keys(query).forEach((key) =>
        params.append(key, query[key].toString()),
      );
    }

    const url = options?.absoluteUrl
      ? `${path}&${params.toString()}`
      : `${this.baseUrl}/${path}?apiKey=${this.apiKey}&${params.toString()}`;

    const result = await fetch(url, {
      method: "GET",
    });

    return result.json() as Promise<T>;
  }
}

export { HttpService };
