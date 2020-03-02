app= (function (){
    var lista = function (variable) {
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
            var valorTotal = diccionario.reduce(function(total, valor){
                return total.value + valor.value;
            })
            alert(valorTotal)
        }
    };
    return {
            prueba: function () {
                author = document.getElementById("fname").value;
                //alert(author)
                apimock.getBlueprintsByAuthor(author,lista);
            }
        };
})();