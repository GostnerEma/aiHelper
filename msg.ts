type msg = {
  "status": "success" | "error" | "partial", // More descriptive than boolean
  "message": string,                         // High-level response message
  "data": any | null,                        // Response payload when successful
  "errors": {                                // Only present when status is "error" or "partial"
    "validation": [                          // Categorized errors
      {
        "field": string,
        "code": string,                      // Specific error code for this field
        "message": string,
        "context": {                         // Rich context for debugging/display
          "value": any,
          "constraint": string,
          // Additional context specific to error type
        }
      }
    ],
    "business": [...],                       // Business logic errors
    "server": [...]                          // Server errors if exposed
  },
  "meta": {
    "timestamp": string,
    "requestId": string,
    "statusCode": number,                    // HTTP status code mirror
    "pagination": {                          // When applicable
      "page": number,
      "pageSize": number,
      "totalItems": number,
      "totalPages": number
    }
  }
}