export const fetchHelper = {
  async get() {
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    const url = process.env.REACT_APP_API_URL;

    const response = await fetch(url, {
      method: "GET",
      headers: headers,
    });
    return response.json();
  },
};
