const obj = {
    firstName: ko.observable("Ali"),
    lastName: "Sadeghi",
};

setTimeout(() => {
    obj.firstName("Saba");
}, 500);

ko.applyBindings(obj);
