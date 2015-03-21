$(document).ready(function () {
    $("#FechaControl").jqxDateTimeInput({ width: '250px', height: '25px' });
    $("#FechaFinControl").jqxDateTimeInput({ width: '250px', height: '25px' });
    
    $("#CreateEvent").click(function (e) {
        if (e.preventDefault) {
            e.preventDefault();
        } else {
            e.returnValue = false;
        }
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
        };

        var p = $.ajax({
            data: { 'evento': JSON.stringify(Evento), 'etiquetas': JSON.stringify(etiquetas) }, 
            type: 'POST',
            traditional: true,  
            url: '/eventos/GuardarEvento'         
        });
        $.when(p).done(
            function (data) {
                if (data.RedirectUrl)
                {
                    window.location.href = data.RedirectUrl; 
                }              
            })
        $.when(p).fail(function (xhr, statusText, error) {
        });
       
    })
});

