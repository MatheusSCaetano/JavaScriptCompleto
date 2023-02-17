/*
function testes(){
    return new Promise(function(resolve,reject){ // A função me retorna o objeto 'Promise' que já é do 'JS', onde o mesmo retorna ou rejeita a function;

        //const erro = false; //Variável erro que retorna falso;
        const erro = true;
        if(erro){
            reject('Erro...');
        }else{
            resolve('A promisse foi resolvida com sucesso');
        }
    })
}

//Para chamar:
// O then é chamado quando a function é 'aprovada';

testes().then(function(res){  //O 'then', que faz parte do objeto promise chama o 'res' que é o resultado que está armazendao dentro do 'resolve';

    alert(res);
}).catch(function(err){ //O 'catch' retorna o 'reject'; 
    alert(err);
})
*/

function teste(){
    return new Promise(function(resolve,reject){
        const erro = false; //or true;
        if(erro){
            reject('Erro...');
        }else{
            resolve('O cadastro foi aprovado.');
        }
    })
}

  /*  teste().then(function(res){
        alert(res);
    })*/

// Função assíncrona:
    async function testes_2(){ // Essa função só será executada quando a 'await' for executada.
        await teste().then(function(res){
            alert(res);
        });
        alert('Olá'); //Apenas será executado se tivermos um 'res';
    }
testes_2();

// O await apenas é executado após a 'Promise' ser aprovada;