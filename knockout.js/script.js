const obj = {
    firstName: ko.observable("Saba"),
    lastName: ko.observable("Sadeghi"),
    secCounter: ko.observable(0),
    changeLogArray: ko.observableArray([]),
    changeLogStr: ko.observable(""),
};

setTimeout(() => {
    obj.firstName("Ali");
}, 1000);

obj.fullName = ko.computed(function () {
    return obj.firstName() + " " + obj.lastName();
});

let sec = 0;
setInterval(() => {
    obj.secCounter((sec += 0.5).toFixed(1));
}, 500);

obj.firstName.subscribe(function (value) {
    changeLog("firstName", value);
});
obj.lastName.subscribe(function (value) {
    changeLog("lastName", value);
});

function changeLog(title, value) {
    obj.changeLogArray.push(value);
    let tempLog = obj.changeLogArray().join(`<br>${title}:`);
    obj.changeLogStr(tempLog);
}

ko.applyBindings(obj);
