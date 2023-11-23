import { Response } from "../lib/redux/news/common.ts";

type Options = {
  baseUrl: string;
  apiKey: string;
};

class HttpService {
  private readonly baseUrl: string;
  private readonly apiKey: string;

  constructor({ baseUrl, apiKey }: Options) {
    this.baseUrl = baseUrl;
    this.apiKey = apiKey;
  }

  async get(
    path: string,
    query?: Record<string, string | number>,
  ): Promise<Response> {
    const params = new URLSearchParams();

    if (query) {
      Object.keys(query).forEach((key) =>
        params.append(key, query[key].toString()),
      );
    }

    const result = await fetch(
      `${this.baseUrl}/${path}?apiKey=${this.apiKey}&${params.toString()}`,
      {
        method: "GET",
      },
    );

    return result.json() as Promise<Response>;
  }
}

export { HttpService };
