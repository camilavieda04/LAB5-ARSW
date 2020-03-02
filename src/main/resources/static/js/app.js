app= (function (){
    var lista = function (variable) {
        if(variable != null){
            alert(variable.length)
            var diccionario = variable.map(function(bp){
                alert(bp.name)
                alert(bp.points.length)
                return {key:bp.name, value:bp.points.length}
            })
            alert(diccionario)
        }
    };
    return {
            prueba: function () {
                author = document.getElementById("fname").value;
                alert(author)
                apimock.getBlueprintsByAuthor(author,lista);
            }
        };
})();