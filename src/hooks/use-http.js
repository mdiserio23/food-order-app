import { useState, useCallback } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const sendRequest = useCallback(async (request, applyFunction) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(request.url, {
        body: request.body ? JSON.stringify(request.body) : null,
        method: request.method ? request.method : "GET",
        headers: request.headers ? request.headers : {},
      });

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();
      applyFunction(data);

    } catch (err) {
      setError(err.message || "something went wrong");
    }
    setIsLoading(false);
  }, []);

  return { isLoading, error, sendRequest };
};

export default useHttp;
