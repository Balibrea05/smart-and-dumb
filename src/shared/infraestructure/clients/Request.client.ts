import { RequestOptions } from '@/shared/domain/interfaces/RequestOptions.interface';

export const RequestClient = async (
  url: string,
  { method, body, headers: customHeaders, token }: RequestOptions,
) => {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...customHeaders,
  };

  const config: RequestInit = {
    method,
    headers,
    ...(body ? { body: JSON.stringify(body) } : {}),
  };

  const response = await fetch(url, config);

  let data;

  try {
    data = await response.json();
  } catch (error) {
    throw new Error('Error parsing response JSON');
  }

  if (!response.ok) {
    throw new Error(
      `API request failed with status ${response.status}: ${JSON.stringify(data)}`,
    );
  }

  return data;
};
