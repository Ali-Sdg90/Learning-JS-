const obj = {
    firstName: ko.observable("Saba"),
    lastName: ko.observable("Sadeghi"),
    secCounter: ko.observable(0),
    changeLogArray: ko.observableArray([]),
    changeLogStr: ko.observable(""),
    newFriend: ko.observableArray([
        new friend("jesse ", "pinkman"),
        new friend("walter ", "white"),
    ]),
    newFriendLastName: ko.observable(""),
    newFriendName: ko.observable(""),
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
    obj.changeLogStr(obj.changeLogStr() + `${title} : ${value} <br>`);
}

function friend(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = firstName + " " + lastName;
    this.knowJS = ko.observable(false);
    this.favLib = ko.observable("");
    this.remove = function () {
        obj.newFriend.remove(this);
    };
}

obj.addFriend = function () {
    obj.newFriend.push(
        new friend(obj.newFriendName(), obj.newFriendLastName())
    );
};

ko.applyBindings(obj);
