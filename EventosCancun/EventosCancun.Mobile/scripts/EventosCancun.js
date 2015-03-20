//Helpers
_.templateSettings = {
    evaluate: /\{\{(.+?)\}\}/g, 
    interpolate: /\{\{=(.+?)\}\}/g
};
////////////////////////////////////////

var EventosCancun = EventosCancun || {}

EventosCancun.Eventos = (function (e, $) {
    
    var eventos = function () {
        //View
        _templates = function () {
            var _default = function (item) {
                var _tmpl = _.template("<div><div><img href=''></img></div><div><span>{{=Nombre}}</span></div><div><span>{{=Fecha}}</span></div><div></div></div>");
                return _tmpl({Nombre: "Nombre_Test", Fecha: "Fecha_Test"});
            }

            var _templateType = {
                0: _default
            };

            var _renderTemplate = function (type, item) {
                return _templateType[type](item);
            };

            return {
                RenderTemplate: _renderTemplate
            }
        },

        _view = function (templates, items) {
            _renderView = function(){
                var _eventList = [];
                _.each(items, function(item){
                    _eventList.push(templates.RenderTemplate(0, item));
                });

                $("#Eventos").html(_eventList.join("\n"));
            };

            _refreshEvents = function () {
                _renderView();
            };

            return {
                RefreshEvents: _refreshEvents
            }
        },

        //controller
        _controller = function () {
            _getEvents = function () {
                return [{ Nombre: "Nombre_Test1", Fecha: "Fecha_Test1" }, { Nombre: "Nombre_Test2", Fecha: "Fecha_Test2" }];
            };

            return {
                GetEvents: _getEvents
            };
        },

        start = function () {
            var controller = new _controller();
            var templates = new _templates();
            var view = new _view(templates, controller.GetEvents());
            view.RefreshEvents();
        }

        return {
            Start: start
        };
    };

    if (e != null) {
        return e;
    }

    return eventos();
}(typeof EventosCancun.Eventos == "object" && EventosCancun.Eventos || null,
  typeof jQuery == "function" && jQuery || null));