function text() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let myOBJ = JSON.parse(this.responseText);
            document.getElementById("id").innerHTML = myOBJ.id;
        }
    };
    xmlhttp.open("GET", "./data/sensordata.json", true);
    xmlhttp.send();
}