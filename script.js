// (function() {

    var pecas = [];
    var answer = [];

    // var telaInicio = document.querySelector("#tela-inicio");
	// 	telaInicio.addEventListener("click", comecaJogo, false);

	// var telaFinal = document.querySelector("#tela-final");

    
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
					peca.style.top = "475px";
				}
			}
        }
    }

    function randomGame(model) {

        var newModel;
        var count = 0;

        do {

            newModel = [];

            while(newModel.length < model.length) {
                var i = Math.floor(Math.random() * model.length) //número aleatório entre 0 e 8
                console.log(i);

                // verifica se a posição está livre
                if(newModel.indexOf(model[i] < 0)) {
                    newModel.push(model[i]);
                }
            }

            count++;
            console.log(count); //verifica quantos jogos foram criados até ter uma ordem válida
        
        } while(!verifyGame(newModel));

        return newModel;
    }

    function verifyGame(array) {
        console.log(array);
        var inversoes = 0;
        var elements = array.length();

        for(var i = 0; i < elements - 1; i++) {
            for(var j = i + 1; j < elements; j++) {
                if(array[i] && array[j] && array[i].dataset.value < array[j].dataset.value) {
                    inversoes++;
                }
            }
        }

        return inversoes % 2 === 0; //se for par, o jogo é válido
    }

    function verify() {
        
        for(var i in pecas) {
            
            var a = pecas[i];
            var b = answer[i];

            if(a != b) {return false;}
        }

        return true;
    }

    function movePeca() {

    }

    function start () {
        pecas = randomGame(pecas);
        render();
    }

    function end() {

    }

    init();

// } ());