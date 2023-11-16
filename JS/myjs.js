// Chiedi all’utente il suo nome, poi chiedi il suo cognome, poi chiedi il suo colore preferito. Infine scrivi sulla pagina nomecognomecolorepreferito23.

// prompt nome utente
const userNome = prompt ("Inserisci il tuo nome");

// prompt cognome utente
const userCognome = prompt ("Inserisci il tuo cognome");

// prompt colore preferito utente
const userColorePreferito = prompt ("Inserisci il tuo colore preferito");

// generazione password
const password = `${userNome}${userCognome}${userColorePreferito}23`;
// console.log(password);

// output password
document.getElementById("psw").innerHTML= `Ciao ${userNome} ${userCognome}, questa è la password generata per te: `  + password;