
var loadFile = function(event) {
    var preview = document.getElementById('preview');
    preview.src = URL.createObjectURL(event.target.files[0]);
}

var saveFile = function(event) {
    console.log("save file clicked");

    console.log("preview link: " + $("#preview")[0].currentSrc);
    console.log("save file " + $("#file_name")[0].value);

    if ($("#preview")[0].currentSrc == "" || $("#file_name")[0].value == "") {
        alert("設定檔名，照相，然後按 I DO");
        return;
    }

    var link = document.createElement("a");
    link.setAttribute("href", $("#preview")[0].currentSrc);
    link.setAttribute("download", $("#file_name")[0].value);

    link.click();

    $("#file_name")[0].value = $("#file_name")[0].value.replace(/\d+/gi, function(x){return parseInt(x)+1;});

    $("#preview").remove();
    var newImg = $('<img id="preview">');
    newImg.appendTo($('body'));
}