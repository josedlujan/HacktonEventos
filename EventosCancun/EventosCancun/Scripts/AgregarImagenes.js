$(document).ready(function () {
    $('#jqxFileUpload').jqxFileUpload({ width: 300, uploadUrl: '../../UploadFiles.asmx/Upload', fileInputName: 'fileToUpload' });
    ObtenerImagenes();
    $('#jqxFileUpload').on('uploadEnd', function (event) {
        windowlocation.reload();
    });


});

ObtenerImagenes = function () {
    $.ajax({
        url: "/eventos/ImagenesEvento",
        data: { id: $("#IdEvento").val() },
        succes: function (result) {
        },
        error: function (xhr, ajaxOptions, thrownError) {
            if (xhr.responseText == "") {
            }

        },
        complete: function (result) {
            var idevento = $("#IdEvento").val()
            for (i = 0; i < result.responseJSON.length; i++) {
                var idDiv = "slide" + i;
                $("#ImagenesSlider").append('<div id="' + idDiv + '"></div>');
                $("#" + idDiv).append('<img u="image" src="../../uploads' + result.responseJSON[i] + '" />')
            }
            var options = {
                $DragOrientation: 3,                               
                $ArrowNavigatorOptions: {                       
                    $Class: $JssorArrowNavigator$,              
                    $ChanceToShow: 2,                           
                    $AutoCenter: 0,                             
                    $Steps: 1                                   
                }
            };
            var jssor_slider1 = new $JssorSlider$("slider1_container", options);
        },
        contentType: 'application/json;charset=utf-8',
        cache: false

    })
}
