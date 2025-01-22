const express = require('express');
const app = express();

const statusDescriptions = {
  200: "OK: The request has succeeded. The meaning of this status depends on the HTTP method used.",
  201: "Created: The request has been fulfilled, resulting in the creation of a new resource.",
  204: "No Content: The server successfully processed the request, but there is no content to send.",
  400: "Bad Request: The server cannot process the request due to client-side errors (e.g., malformed syntax).",
  401: "Unauthorized: Authentication is required and has failed or has not been provided.",
  403: "Forbidden: The client does not have access rights to the content.",
  404: "Not Found: The server has not found anything matching the request URI. This is often caused by a missing page or resource.",
  405: "Method Not Allowed: The method specified in the request is not allowed for the resource.",
  429: "Too Many Requests: The user has sent too many requests in a given amount of time.",
  500: "Internal Server Error: The server encountered an unexpected condition that prevented it from fulfilling the request.",
  502: "Bad Gateway: The server received an invalid response from the upstream server.",
  503: "Service Unavailable: The server is currently unavailable (e.g., overloaded or down for maintenance).",
  504: "Gateway Timeout: The server did not receive a timely response from the upstream server."
};

app.get('/status-info', (req, res) => {
  const code = parseInt(req.query.code);

  if (!code || !statusDescriptions[code]) {
    return res.status(400).json({
      status: 400,
      message: "Invalid or unsupported status code. Please provide a valid HTTP status code."
    });
  }

  res.json({
    status: code,
    message: statusDescriptions[code]
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Status Code API is running on http://localhost:${PORT}`);
});
