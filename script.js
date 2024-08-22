(function() {

    var pecas = [];
    var answer = []
    
    // inicializa os elementos
    function init() {
        for(var i = 1; i < 9; i++) {
            var peca = document.getElementById("#peca" + i);
            peca.addEventListener("click", movePeca);
            pecas.push(peca);
        }

        pecas.push(null);
        answer = pecas;

        render();
    }

    // renderiza o puzzle
    function render() {

        for(var i in pecas) {
            var peca = pecas[i];

            if(peca) {

            }
        }
    }

    function movePeca() {

    }

    function

}

)