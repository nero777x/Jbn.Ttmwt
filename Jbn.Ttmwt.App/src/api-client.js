/* tslint:disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v12.0.13.0 (NJsonSchema v9.13.17.0 (Newtonsoft.Json v9.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------
// ReSharper disable InconsistentNaming
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ApiClient = /** @class */ (function () {
    function ApiClient(baseUrl, http) {
        this.jsonParseReviver = undefined;
        this.http = http ? http : window;
        this.baseUrl = baseUrl ? baseUrl : "";
    }
    /**
     * @return Success
     */
    ApiClient.prototype.getExistingDevices = function () {
        var _this = this;
        var url_ = this.baseUrl + "/api/Devices";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };
        return this.http.fetch(url_, options_).then(function (_response) {
            return _this.processGetExistingDevices(_response);
        });
    };
    ApiClient.prototype.processGetExistingDevices = function (response) {
        var _this = this;
        var status = response.status;
        var _headers = {};
        if (response.headers && response.headers.forEach) {
            response.headers.forEach(function (v, k) { return _headers[k] = v; });
        }
        ;
        if (status === 200) {
            return response.text().then(function (_responseText) {
                var result200 = null;
                result200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                return result200;
            });
        }
        else if (status !== 200 && status !== 204) {
            return response.text().then(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve(null);
    };
    /**
     * @return Success
     */
    ApiClient.prototype.getExistingPatients = function () {
        var _this = this;
        var url_ = this.baseUrl + "/api/Patients";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };
        return this.http.fetch(url_, options_).then(function (_response) {
            return _this.processGetExistingPatients(_response);
        });
    };
    ApiClient.prototype.processGetExistingPatients = function (response) {
        var _this = this;
        var status = response.status;
        var _headers = {};
        if (response.headers && response.headers.forEach) {
            response.headers.forEach(function (v, k) { return _headers[k] = v; });
        }
        ;
        if (status === 200) {
            return response.text().then(function (_responseText) {
                var result200 = null;
                result200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                return result200;
            });
        }
        else if (status !== 200 && status !== 204) {
            return response.text().then(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve(null);
    };
    /**
     * @return Success
     */
    ApiClient.prototype.getExistingProctors = function () {
        var _this = this;
        var url_ = this.baseUrl + "/api/Proctors";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };
        return this.http.fetch(url_, options_).then(function (_response) {
            return _this.processGetExistingProctors(_response);
        });
    };
    ApiClient.prototype.processGetExistingProctors = function (response) {
        var _this = this;
        var status = response.status;
        var _headers = {};
        if (response.headers && response.headers.forEach) {
            response.headers.forEach(function (v, k) { return _headers[k] = v; });
        }
        ;
        if (status === 200) {
            return response.text().then(function (_responseText) {
                var result200 = null;
                result200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                return result200;
            });
        }
        else if (status !== 200 && status !== 204) {
            return response.text().then(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve(null);
    };
    /**
     * @return Success
     */
    ApiClient.prototype.deleteRecord = function (recordId) {
        var _this = this;
        var url_ = this.baseUrl + "/api/Records/{recordId}";
        if (recordId === undefined || recordId === null)
            throw new Error("The parameter 'recordId' must be defined.");
        url_ = url_.replace("{recordId}", encodeURIComponent("" + recordId));
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            method: "DELETE",
            headers: {}
        };
        return this.http.fetch(url_, options_).then(function (_response) {
            return _this.processDeleteRecord(_response);
        });
    };
    ApiClient.prototype.processDeleteRecord = function (response) {
        var status = response.status;
        var _headers = {};
        if (response.headers && response.headers.forEach) {
            response.headers.forEach(function (v, k) { return _headers[k] = v; });
        }
        ;
        if (status === 200) {
            return response.text().then(function (_responseText) {
                return;
            });
        }
        else if (status !== 200 && status !== 204) {
            return response.text().then(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve(null);
    };
    /**
     * @return Success
     */
    ApiClient.prototype.getRecords = function () {
        var _this = this;
        var url_ = this.baseUrl + "/api/Records";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };
        return this.http.fetch(url_, options_).then(function (_response) {
            return _this.processGetRecords(_response);
        });
    };
    ApiClient.prototype.processGetRecords = function (response) {
        var _this = this;
        var status = response.status;
        var _headers = {};
        if (response.headers && response.headers.forEach) {
            response.headers.forEach(function (v, k) { return _headers[k] = v; });
        }
        ;
        if (status === 200) {
            return response.text().then(function (_responseText) {
                var result200 = null;
                result200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                return result200;
            });
        }
        else if (status !== 200 && status !== 204) {
            return response.text().then(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve(null);
    };
    /**
     * @param submission (optional)
     * @return Success
     */
    ApiClient.prototype.postTest = function (submission) {
        var _this = this;
        var url_ = this.baseUrl + "/api/Tests";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(submission);
        var options_ = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        };
        return this.http.fetch(url_, options_).then(function (_response) {
            return _this.processPostTest(_response);
        });
    };
    ApiClient.prototype.processPostTest = function (response) {
        var _this = this;
        var status = response.status;
        var _headers = {};
        if (response.headers && response.headers.forEach) {
            response.headers.forEach(function (v, k) { return _headers[k] = v; });
        }
        ;
        if (status === 200) {
            return response.text().then(function (_responseText) {
                var result200 = null;
                result200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                return result200;
            });
        }
        else if (status !== 200 && status !== 204) {
            return response.text().then(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve(null);
    };
    return ApiClient;
}());
export { ApiClient };
var SwaggerException = /** @class */ (function (_super) {
    __extends(SwaggerException, _super);
    function SwaggerException(message, status, response, headers, result) {
        var _this = _super.call(this) || this;
        _this.isSwaggerException = true;
        _this.message = message;
        _this.status = status;
        _this.response = response;
        _this.headers = headers;
        _this.result = result;
        return _this;
    }
    SwaggerException.isSwaggerException = function (obj) {
        return obj.isSwaggerException === true;
    };
    return SwaggerException;
}(Error));
export { SwaggerException };
function throwException(message, status, response, headers, result) {
    if (result !== null && result !== undefined)
        throw result;
    else
        throw new SwaggerException(message, status, response, headers, null);
}
//# sourceMappingURL=api-client.js.map