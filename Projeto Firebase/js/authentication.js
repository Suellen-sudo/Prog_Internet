const baseURL = "http://127.0.0.1:5500/"

/*
*loginfirebase
* Realiza a autentificação do usuário no Firebase
* @param {string} email: email do usuário
* @param {string} senha:senha do usuário
* @return {object} objeto com o usuário logado
*/

function loginFirebase(email,senha){
    firebase
    .auth()
    .signInWithEmailAndPassword(email,senha)
    .then(result => {
        alert(`Bem Vindo, ${JSON.stringify(result.user.email)}`)
        window.location.href=`${baseURL}/home.html`
    })
    .catch(error => {
        alert(`Erro ao efetuar o login: ${error.message}`)
    })

}