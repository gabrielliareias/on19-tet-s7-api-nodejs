///# Exercício de Casa 🏠 

//1. [ ] Criar uma promise que simule um envio de email ela precisa ter como parametro: 
//  - o email da destinataria
//  - mensagem que será enviada.

 //Regras de negocio:
 // a. Se o email for vazio a retornar um erro

 //---

 //2. [ ] Consumir a promise  de envio de email com sucesso.
 
 //Regras de negocio:
 
 //1. Antes de enviar o email precisa imprimir no terminal uma mensagem que o email está sendo enviado
 
 //2. Ao consumir a promise é necessário imprimir o seu resultado no terminal, seguindo o exemplo abaixo( Não precisa conter a mesma formatação ex: tracos, indentação, quebra de linhas etc...)
 
 //console:
 //```bash
 //  tentando enviar email...
 //  Para: beatriz@email.com
  // ---------------------------------------
  // Para conseguir realizar esse exercicio será necessário combinar todos os conhecimentos adquiridos em aula... 
   //email enviado com sucesso.
 //```
 
 //---
 
 //3. [ ] Consumir a promise de envio de email com erro.
 
 //console:
 //```bash
  // tentando enviar email...
 
  // falha ao enviar o email.
 //```
 

console.log("\nTentando enviar email...")

const acharEmail = (email) => {
   return new Promise((resolve, reject) => {
    setTimeout(() => {
       if (!email) {
         return reject("O email não pode ser vazio")
       }
       return resolve({
                 email: "email@email.com",
         
       })
     }, 1000)
   })
 }

 const imprimirEmail = (email) => {
   
 acharEmail(email) .then((usuaria) => {

    console.log(`
    Para: ${usuaria.email}
    Assunto: Entrega de exercícios semana 7
    Mensagem: Para conseguir realizar esse exercicio será necessário combinar todos os conhecimentos adquiridos em aula...
    `);
    setTimeout(() => {
        console.log("Email enviado com sucesso\n")
    }, 1000)

    
 return{usuaria} 
}).catch((err) => {
    console.error(err)
})
 };


 imprimirEmail("email@email.com")
 //imprimirEmail(null)


 