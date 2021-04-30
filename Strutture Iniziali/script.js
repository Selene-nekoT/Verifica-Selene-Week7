
    let nome;

        function chiediNome() {
        nome = prompt("Come ti chiami?").toUpperCase();
        }

        function primaFunzione() {
            const currentDate = new Date();
            let seconds = currentDate.getSeconds();

            let isPari;
            (seconds % 2 === 0) ? isPari = " Secondi pari!" : isPari = " Secondi dispari!";

            alert("Hello " + nome + ". You connected at " + seconds + " Seconds." + isPari);
        }

        function EsemioSomma() {
        let myValue = "prova";
            myValue = 5;  //cast automatico
        }

        function isWeekend() {
        let today = new Date().getDay();
            let messaggio;
            switch (today)
            {
                case 1:
                messaggio= "I Hate Mondays!";
                break;
                case 3:
                messaggio= "Wendsday, almost there!!";
                break;
                default:
                messaggio= "BAD DAY!";
                break;
            }
            alert(messaggio);
        }

        function cicloFor() {
        let result = 0;
            for (let i = 1; i < 5; i++) {
        result += i;
            }
            console.log(result);
        }

        function cicloWhile() {
        let i = 0;
            
            
            while (i <= 20) {
        //console.log(i);
        document.getElementById("stampa").innerHTML += " * ";
                i++;
            }
        }

        function stampaArray() {
        let frutta = ['banana', 'pera', 'mela', 1, new Date(), ['A','B','C']];
            for (let i = 0; i < frutta.length + 1; i++) {
        console.log(frutta[i]);
            }
        }

        function filterArray() {
        let cestino = ['banana', 'mela', 'ananas', 'bongo', 'arancino', 'ancora'];
            const search = cestino.filter((item) => item.startsWith('a'));
            alert(search.length);
            for (let it in search) {
        console.log(search[it]);
            }
        }

        function ClasseJS() {
        let p = new Persona('Mario', 'Rossi');
            console.log(p.firstName);
            console.log(p.lastName);
            console.log(p.GetFullName());
        }


        class Persona {
        constructor(firstName, lastName) {
        this.firstName = firstName;
                this.lastName = lastName;
            }
            set FirstName(value) {this.firstName = value}
            get FirstName() { return this.firstName }
            set LastName(value) {this.lastName = value}
            get LastName() { return this.lastName }

            GetFullName() {
                return this.firstName + ' '+ this.lastName;
            }
        }

