(function() {

    var pecas = [];
    var answer = [];
    
    // inicializa os elementos
    function init() {
        for(var i = 1; i < 9; i++) {
            var peca = document.querySelector("#peca" + i);
            peca.addEventListener("click", movePeca);
            pecas.push(peca);
        }

        pecas.push(null); //peça em branco para o movimento
        answer = pecas;

        render();
    }

    // renderiza o puzzle
    function render() {

        for(var i in pecas) {

            var peca = pecas[i];

            // definição da posição de cada peça
            if(peca) {

				peca.style.left = (i%3) * 225 + 10 + "px"; 

				if(i < 3) {
					peca.style.top = "15px";
				} else if(i < 6) {
					peca.style.top = "245px";
				} else {
					peca.style.top = "475px"
				}
			}
        }
    }

    function movePeca() {

    }

    function randomGame(model) {

        var newModel;
        var count = 0;

        do {

            newModel = [];

            while(newModel.length < model.length) {
                var i = Math.floor(Math.random() * model.length) //número aleatório entre 0 e 8
            
                // verifica se a posição está livre
                if(newModel.indexOf(model[i] < 0)) {
                    newModel.push(model[i]);
                }
            }

            count++;
            console.log(count); //verifica quantos jogos foram criados até ter uma ordem válida
        
        } while(!verify(newModel));

        return newModel;
    }

    function verify() {
        
        for(var i in pecas) {
            
            var a = pecas[i];
            var b = answer[i];

            if(a != b) {return false;}
        }

        return true;
    }

    function start () {

    }

    function end() {

    }


    init();

} ());