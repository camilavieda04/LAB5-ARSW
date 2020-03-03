app= (function (){
    var lista = function (variable) {
        alert(variable + "sera1")
        if(variable != null){
            //alert(variable.length)
            var diccionario = variable.map(function(bp){
                //alert(bp.name)
                //alert(bp.points.length)
                return {key:bp.name, value:bp.points.length}
            })
            $("#tabla tbody").empty();
            diccionario.map(function(bp){
                var temp = '<tr><td id="nombreActor">'+bp.key+'</td><td id="puntos">'+bp.value+'</td></tr>';
                $("#tabla tbody").append(temp);
            })
            var sumPoints = diccionario.reduce(function(total, valor){
                return total + valor.value;
            }, 0)
            $("#totalPoints > h3").text("Total user points: " + sumPoints);
            //alert(sumPoints)
        }
    };
    var pintar = function(variable) {
        alert(variable)
        $("#titlebp").text("Current blueprint: " + variable.name);
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0, 0, c.width, c.height);
        ctx.beginPath();
        var anterior;
        variable.points.map(function(point) {
            alert(point.x)
            alert(point.y)
            if (!anterior) {
                anterior = point;
                ctx.moveTo(anterior.x, anterior.y);
            } else {
                ctx.lineTo(point.x, point.y);
                ctx.stroke();
            }
        });
      };
    return {
            prueba: function () {
                author = document.getElementById("fname").value;
                //alert(author)
                apimock.getBlueprintsByAuthor(author,lista);
            },
            draw: function (bp) {
                alert(bp)
                author = document.getElementById("fname").value;
                alert(author)
                obra = bp;
                alert(obra)
                apimock.getBlueprintsByNameAndAuthor(obra,author,pintar);
            }
        };
})();