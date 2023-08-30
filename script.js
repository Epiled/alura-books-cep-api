async function buscaEndereco(cep) {
    const mensagemErro = document.querySelector('#erro');
    try {
        const consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const consultaCepConvetido = await consultaCEP.json();
        if(consultaCEP.erro) {
            throw new Error('CEP inválido');
        }
        const cidade = document.querySelector('#cidade');
        const logradouro = document.querySelector('#endereco');
        const estado = document.querySelector('#estado');
        const bairro = document.querySelector('#bairro');

        cidade.value = consultaCepConvetido.localidade;
        logradouro.value = consultaCepConvetido.logradouro;
        estado.value = consultaCepConvetido.uf;
        bairro.value = consultaCepConvetido.bairro;

        console.log(consultaCepConvetido);
    } catch {
        mensagemErro.innerHTML = '<p>CEP inválido. Tente novamente</p>';
        console.log('CEP não existe');
    }
}

const cep = document.querySelector('#cep');
cep.addEventListener('focusout', () => buscaEndereco(cep.value));
// buscaEndereco('01001000');
