AFRAME.registerComponent('voice-nav', {
    schema:{
    },
    init: function () {},
    increment: function () {
        this.el.emit('next',{},true);
    },
    decrement: function () {
        this.el.emit('back',{},true);
    },
    home: function () {
        this.el.emit('home',{},true);
    },
});