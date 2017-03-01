(function(window, document, $, undefined) {
    'use strict';
    var Starter = function Starter(cockpit) {
        console.log("Loading starter plugin.");
        this.cockpit = cockpit;

        $("#controls").prepend(' argument: <input id="starter-argument" size="4" placeholder="1000"/>');
        $("#controls").prepend('<button id="starter">starter</button>');

        this.listen();
    };

    Starter.prototype.listen = function listen() {
        var animations = this;

        $('#starter').click(function(ev) {
            ev.preventDefault();
            var name = $("#starter-argument").val() || "1000";
            Starter.proc1(argument);
        });

    };

    Starter.prototype.proc1 = function config(argument) {

        this.cockpit.socket.emit("starter/proc1", {
            argument: argument
        });
    };

    window.Cockpit.plugins.push(Starter);

}(window, document, jQuery));
