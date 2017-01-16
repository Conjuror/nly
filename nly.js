
var saveFile = function(event) {
    console.log("save file " + $("#file_name")[0].value);

    if (event.target.files[0] == "" || $("#file_name")[0].value == "") {
        alert("設定檔名，然後照相");
        return;
    }

    var link = document.createElement("a");
    link.setAttribute("href", URL.createObjectURL(event.target.files[0]));
    link.setAttribute("download", $("#file_name")[0].value);

    link.click();

    $("#file_name")[0].value = $("#file_name")[0].value.replace(/\d+/gi, function(x){
        return ("00000"+(parseInt(x)+1).toString()).substr(-5);
    });
}