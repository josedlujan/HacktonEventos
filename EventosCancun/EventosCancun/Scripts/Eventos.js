$(document).ready(function () {
    // prepare the data
    var source =
        {
            datatype: "json",
            datafields: [
                 { name: 'ID', type: 'int' },
                 { name: 'Titulo', type: 'string' },
                 { name: 'Subtitulo', type: 'string' },
                 { name: 'Fecha', type: 'date' },
                 { name: 'PaginaWeb', type: 'string' },
                 { name: 'NombreCliente', type: 'string' },
                 { name: 'CorreoCliente', type: 'string' },
            ],
            url: 'Eventos/ObtenerTodosEventos',
            loadComplete: function () {
                for (m = 0; m < 10; m++) {
                    $("#grid").jqxGrid('setrowheight', m, 50);
                }
                $("#grid").jqxGrid('hidecolumn', "ID");
                $("#grid").jqxGrid('autoheight', true);
            }
        };
    var dataAdapter = new $.jqx.dataAdapter(source);
    // initialize jqxGrid
    $("#grid").jqxGrid(
        {

            source: dataAdapter,
            columns: [
                //{ text: "ID", datafield: "ID" },
                { text: "Images", datafield: "NumeroContacto", width: 60, cellsrenderer: imagerenderer },
                { text: "Titulo", datafield: "Titulo" },
                { text: "Sub Titulo", datafield: "Subtitulo" },
                { text: "Fecha", datafield: "Fecha", cellsformat: 'd' },
                { text: "Pagina Web", datafield: "PaginaWeb" },
                { text: "Nombre Cliente", datafield: "NombreCliente" },
                { text: "Correo Cliente", datafield: "CorreoCliente" },
                { text: "Agregar Imagenes", datafield: "AgregarImagenes", cellsrenderer: AgregarImagenesRenderer },
                { text: "Editar", datafield: "Edit", cellsrenderer: EditRenderer },
                { text: "Borrar", datafield: "Delete", cellsrenderer: DeleteRenderer }

            ],
            autoheight: true,
            autowidth: true
        });



}
);

var imagerenderer = function (row, datafield, value) {
    return '<img style="margin-left: 5px;" height="60" width="50" src="http://www.septimacaja.com/wp-content/uploads/marvel-45x45.jpg"/>';
}
var EditRenderer = function (row, datafield, value) {
    var datarow = $("#grid").jqxGrid('getrowdata', row);
    return "<a href = /eventos/editar/" + datarow.ID + ">Editar Evento </a>";
}

var DeleteRenderer = function (row, datafield, value) {
    var datarow = $("#grid").jqxGrid('getrowdata', row);
    return "<a href ='/eventos/BorrarEvento/" + datarow.ID + "'>Eliminar Evento</a>";
}

var AgregarImagenesRenderer = function (row, datafield, value) {
    var datarow = $("#grid").jqxGrid('getrowdata', row);
    return "<a href ='/eventos/AgregarImagenes/" + datarow.ID + "'>Agregar Imagenes</a>";
}
