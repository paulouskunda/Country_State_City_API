// 2xx Success
const HttpStatus_OK = {value: 200, message: "OK"}
const HttpStatus_CREATED =  {value: 201, message: "CREATED"}
const HttpStatus_ACCEPTED =  {value: 202, message: "ACCEPTED"}
const HttpStatus_NON_AUTHORITATIVE_INFORMATION =  {value: 203, message: "NON AUTHORITATIVE INFORMATION"}
const HttpStatus_NO_CONTENT =  {value: 204, message: "NO CONTENT"}

// 3xx
const HttpStatus_MULTIPLE_CHOICES = {value: 300, message: "MULTIPLE CHOICES"}
const HttpStatus_MOVED_PERMANENTLY =  {value: 301, message: "MOVED PERMANENTLY"}
const HttpStatus_FOUND =  {value: 302, message: "FOUND"}
const HttpStatus_SEE_OTHER =  {value: 304, message: "SEE OTHERS"}


// 4xx
const HttpStatus_BAD_REQUEST = {value: 400, message: "BAD REQUEST"}
const HttpStatus_UNAUTHORIZED = {value: 401, message: "UNAUTHORIZED"}
const HttpStatus_PAYMENT_REQUIRED = {value: 402, message: "PAYMENT REQUIRED"}
const HttpStatus_FORBIDDEN = {value: 403, message: "FORBIDDEN"}
const HttpStatus_NOT_FOUND = {value: 404, message: "NOT FOUND"}
const HttpStatus_METHOD_NOT_ALLOWED = {value: 405, message: "METHOD NOT ALLOWED"}
const HttpStatus_NOT_ACCEPTABLE = {value: 406, message: "NOT ACCEPTED"}
const HttpStatus_PROXY_AUTHENTICATION_REQUIRED = {value: 407, message: "PROXY AUTHENTICATION REQUIRED"}
const HttpStatus_REQUEST_TIMEOUT = {value: 408, message: "REQUEST TIMEOUT"}
const HttpStatus_CONFLICT = {value: 409, message: "CONFLICT"}


//5xx
const HttpStatus_INTERNAL_SERVER_ERROR = {value: 500, message: "INTERNAL SERVER ERROR"}
const HttpStatus_NOT_IMPLEMENTED = {value: 501, message: "NOT IMPLEMENTED"}
const HttpStatus_BAD_GATEWAY = {value: 502, message: "BAD GATEWAY"}
const HttpStatus_SERVICE_UNAVAILABLE = {value: 503, message: "SERVICE UNAVALIABLE"}
const HttpStatus_GATEWAY_TIMEOUT = {value: 504, message: "GATEWAY TIMEOUT"}

export const statusCodes = {
    HttpStatus_OK,
    HttpStatus_CREATED,
    HttpStatus_ACCEPTED,
    HttpStatus_NON_AUTHORITATIVE_INFORMATION,
    HttpStatus_NO_CONTENT,
    HttpStatus_MULTIPLE_CHOICES,
    HttpStatus_MOVED_PERMANENTLY,
    HttpStatus_FOUND,
    HttpStatus_SEE_OTHER,
    HttpStatus_BAD_REQUEST,
    HttpStatus_UNAUTHORIZED,
    HttpStatus_PAYMENT_REQUIRED,
    HttpStatus_FORBIDDEN,
    HttpStatus_NOT_FOUND,
    HttpStatus_METHOD_NOT_ALLOWED,
    HttpStatus_NOT_ACCEPTABLE,
    HttpStatus_PROXY_AUTHENTICATION_REQUIRED,
    HttpStatus_REQUEST_TIMEOUT,
    HttpStatus_CONFLICT,
    HttpStatus_INTERNAL_SERVER_ERROR,
    HttpStatus_NOT_IMPLEMENTED,
    HttpStatus_BAD_GATEWAY,
    HttpStatus_SERVICE_UNAVAILABLE,
    HttpStatus_GATEWAY_TIMEOUT
}