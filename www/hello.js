/*global cordova, module*/

module.exports = {
    myAction: function (name, successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "Hello", "myAction", [name]);
    }
};
