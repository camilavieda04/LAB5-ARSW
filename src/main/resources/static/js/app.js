app= (function (){
    var lista = function (variable) {
        alert(variable + "sera1")
        if(variable != null){
            var diccionario = variable.map(function(bp){
                return {key:bp.name, value:bp.points.length}
            })
            $("#tabla tbody").empty();
            diccionario.map(function(bp){
                var temp = '<tr><td id="nombreActor">'+bp.key+'</td><td id="puntos">'+bp.value+'</td><td type="button" onclick="app.draw(\''+bp.key+'\')">Open</td></tr>';
                $("#tabla tbody").append(temp);
            })
            var sumPoints = diccionario.reduce(function(total, valor){
                return total + valor.value;
            }, 0)
            $("#totalPoints > h3").text("Total user points: " + sumPoints);
        }
    };
    var pintar = function(variable) {
        $("#titlebp").text("Current blueprint: " + variable.name);
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0, 0, c.width, c.height);
        ctx.beginPath();
        var anterior;
        variable.points.map(function(points) {
            alert(anterior)
            if (!anterior) {
                anterior = points;
                ctx.moveTo(anterior.x, anterior.y);
            } else {
                ctx.lineTo(points.x, points.y);
                ctx.stroke();
            }
        });
      };
    return {
            prueba: function () {
                author = document.getElementById("fname").value;
                apimock.getBlueprintsByAuthor(author,lista);
            },
            draw: function (bp) {
                author = document.getElementById("fname").value;
                obra = bp;
                apimock.getBlueprintsByNameAndAuthor(obra,author,pintar);
            }
        };
})();