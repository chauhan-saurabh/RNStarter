export const contentType = 'Application/json';

export function restClient() {
  const url = Axios.create({
    baseURL: BASE_URL,
    headers: {
      'Content-Type': contentType,
    },
  });
  return url;
}
