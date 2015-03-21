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
            var d = new Date();

            var _default = function (item) {
                var _tmpl = _.template("<div class='read-event' id='{{=ID}}'><div><img href=''></img></div><div><span>{{=Titulo}}</span></div><div><span>{{=Fecha}} - {{=FechaFin}}</span></div><div></div></div>");
                return _tmpl({ ID: item.ID, Titulo: item.Titulo, Fecha: Date(item.Fecha), FechaFin: Date(item.FechaFin) });
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
            $("#Eventos").on("click", "read-event", function (event) {
                var params = { id: $(this).id };
            });

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
                $.ajax({
                    async: false,
                    type: 'GET', // we are sending data so this is POST
                    url: 'http://localhost:44440/eventos',
                    success: function (result) {
                        debugger;
                    },
                    error: function (err, x, t) {
                        debugger;
                    }
                });



                return [{ "ID": 1, "Titulo": "Evento 1", "Subtitulo": "El primer evento del programa", "Fecha": "\/Date(1393650000000)\/", "FechaFin": null, "EventoVIP": false, "PaginaWeb": "google.com", "NumeroContacto": "Numero del contacto", "CorreoContacto": "123123123", "CorreoCliente": "asdasd@asda.com", "NombreCliente": "nombre del cliente", "EtiquetasEvento": [], "EventoURLs": [] }, { "ID": 10, "Titulo": "evento 2", "Subtitulo": "Segundo event", "Fecha": "\/Date(1444712400000)\/", "FechaFin": null, "EventoVIP": false, "PaginaWeb": "googel.com", "NumeroContacto": "numero del otro c", "CorreoContacto": "asdasda@asdas.com", "CorreoCliente": "asdasd@asdadsasd.com", "NombreCliente": "nombre del  cliente", "EtiquetasEvento": [], "EventoURLs": [] }, { "ID": 71, "Titulo": "sdf", "Subtitulo": "subt", "Fecha": "\/Date(1426654800000)\/", "FechaFin": "\/Date(1426654800000)\/", "EventoVIP": false, "PaginaWeb": "", "NumeroContacto": "", "CorreoContacto": "", "CorreoCliente": "", "NombreCliente": "", "EtiquetasEvento": [], "EventoURLs": [] }];
            };

            return {
                GetEvents: _getEvents
            };
        },

        start = function () {
            var controller = new _controller();
            var templates = new _templates();

            $.when(controller.GetEvents()).done(function (events) {
                var view = new _view(templates, controller.GetEvents());
                view.RefreshEvents();
            });
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