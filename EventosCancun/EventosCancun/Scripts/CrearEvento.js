$(document).ready(function () {
    $("#FechaControl").jqxDateTimeInput({ width: '250px', height: '25px' });
    $("#FechaFinControl").jqxDateTimeInput({ width: '250px', height: '25px' });
    
    $("#CreateEvent").click(function () {
        var initialDate = $('#FechaControl').jqxDateTimeInput('getDate');
        var endDate = $('#FechaFinControl').jqxDateTimeInput('getDate');
        var etiquetas = [];
        $('#ChecksEtiqueta input:checked').each(function () {
            etiquetas.push($(this).attr('value'));
        });
        var Evento = {
            Titulo: $("#Titulo").val(),
            Subtitulo: $("#SubTitulo").val(),
            Fecha: $.jqx.dataFormat.formatdate(initialDate, 'yyyy-MM-dd HH:mm:ss'),
            FechaFin: $.jqx.dataFormat.formatdate(endDate, 'yyyy-MM-dd HH:mm:ss'),
            EventoVIP: $("#EventoVip").is(':checked'),
            PaginaWeb: $("#PaginaWeb").val(),
            NumeroContacto: $("#NumeroContacto").val(),
            CorreoContacto: $("#CorreoContacto").val(),
            CorreoCliente: $("#CorreoCliente").val(),
            NombreCliente: $("#NombreCliente").val()
        }
        $.ajax({
            url: "/eventos/GuardarEvento",
            data: { 'evento': JSON.stringify(Evento), 'etiquetas': JSON.stringify(etiquetas) },
            succes: function (result) {
                window.location.replace("~/eventos");
            },
            error: function (xhr, ajaxOptions, thrownError) {
                if (xhr.responseText == "") {
                    window.location = "www.google.com";
                }

            },
            contentType: 'application/json;charset=utf-8',
            cache: false

        })
    })
});

