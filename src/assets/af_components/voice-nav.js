AFRAME.registerComponent('voice-nav', {
    schema:{
    },
    init: function () {},
    increment: function () {
        console.log("voice-nav: next");
        this.el.emit('next',{},true);
    },
    decrement: function () {
        console.log("voice-nav: back");
        this.el.emit('back',{},true);
    },
    home: function () {
        console.log("voice-nav: home");
        this.el.emit('home',{},true);
    },
});