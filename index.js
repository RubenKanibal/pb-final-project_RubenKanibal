console.clear()
console.log("WILLKOMMEN IN DER KLASSENKAMPF ARENA");
console.log();

class Fighter {
    constructor(name, power, money) {
        this.name = name;
        this.power = power;
        this.money = money;
        this.skills = [];
    }

    learnAttackSkill(attack) {
        if(this.money >= attack.moneyLoss) {
            this.skills.push(attack);
            this.money -= attack.moneyLoss;
            console.log(this.name + " hat soeben die Attacke \"" + attack.name + "\" gekauft! Viel Spaß mit deiner neuen Attacke!")
            console.log();
        }

        else if(this.power <= 0) {
            console.log(this.name + " möchte noch eine Attacke kaufen, wurde aber bereits eliminiert! STRENG DICH MEHR AN IM NÄCHSTEN LEBEN!")
            console.log();
        }

        else {
            console.log(this.name + " möchte die Attacke \"" + attack.name + "\" kaufen, hat aber kein Geld für diese Attacke! GEH ARBEITEN!"); 
            console.log();
        }
    }

    showStatus() {
        console.log(this.name + " Status:");
        console.log("- Kraft: " + this.power);
        console.log("- Geld: " + this.money);
        console.log();
    }

    attack(skillAuswahl, opfer) {
        let skill = this.skills[skillAuswahl];

        if (!skill) {
            console.log(this.name + " hat keinen Skill an dieser Position!");
            console.log();
        }

        else if ((geringVerdiener.includes(this) && geringVerdiener.includes(opfer)) || (capitalist.includes(this) && capitalist.includes(opfer))) {
            console.log(this.name + " darf nicht " + opfer.name + " angreifen! Er ist dein Freund!");
            console.log();
        }

        else if(opfer.power <= 0) {
            console.log(this.name + " kann " + opfer.name + " nicht agreifen. " + opfer.name + " wurde bereits eliminiert! ");
            console.log();
        }

        else {
        console.log(this.name + " hat " + opfer.name + " mit \"" + skill.name + "\" angegriffen!");
        console.log();
        opfer.damage(skill.damage);
        /* this.power += 1000;
        this.money += 1000; */
        }
    }

    damage(schaden) {
        this.power -= schaden;
        console.log(this.name + " wurde " + schaden + " Schaden zugefügt!");
        console.log();
        if (this.power <= 0) {
        eliminatedGeringVerdiener.push(this.name)
        console.log(this.name + " eliminiert!");
        console.log();
        }
    }

    
}

class AttackSkill {
    constructor(name, damage, moneyLoss) {
        this.name = name;
        this.damage = damage;
        this.moneyLoss = moneyLoss;
    }
}


// FIGHTERS:
let investmentbanker = new Fighter("Investmentbanker", 1000000, 1000000);
let börsenmakler = new Fighter("Börsenmakler", 1000000, 1000000);
let christianLindner = new Fighter("Christian Lindner", 1000000, 1000000);

let linksGrünVersiffterGutmensch = new Fighter("Links-Grün-Versiffter-Gutmensch", 1, 1);
let klimakleber = new Fighter("Klima-Kleber", 1, 1);
let ökoHippie = new Fighter("Öko-Hippie", 1, 1);
/* let hartz4Familie = new Fighter("Hartz IV Familie", 1, 1);
let alleinerziehendeMutter = new Fighter("Alleinerziehende Mutter", 1, 1); */
let rentner = new Fighter("Rentner", 1, 1);

// FIGHTER-KLASSEN:
let capitalist = [investmentbanker, börsenmakler, christianLindner];
let geringVerdiener = [linksGrünVersiffterGutmensch, klimakleber, ökoHippie, /* hartz4Familie, alleinerziehendeMutter,  */rentner];

// ATTACK-SKILL:
let mitSuvÜberfahren = new AttackSkill("Mit SUV überfahren", 1000, 100);
let gentrifizieren = new AttackSkill("Gentrifizieren", 1000, 100);
let löhneSenken = new AttackSkill("Löhne Senken", 1000, 100);
let rentenSenken = new AttackSkill("Renten Senken", 1000, 100);
let mehrBraunkohleAbbauen = new AttackSkill("Mehr Braunkohle Abbauen", 1000, 100);

let aufStrasseKleben = new AttackSkill("Auf Strasse Kleben", 1, 1);
let anBaumKetten = new AttackSkill("An Baum Ketten", 1, 1);
let petitionUnterschreiben = new AttackSkill("Petition Unterschreiben", 1, 1);
let wählenGehen = new AttackSkill("Wählen Gehen", 1, 1);

// ELIMINIERTE FIGHTERS:
let eliminatedGeringVerdiener = [];
let eliminatedCapitalits = [];

// SPIELVERLAUF:
klimakleber.learnAttackSkill(mitSuvÜberfahren);
klimakleber.learnAttackSkill(löhneSenken);
klimakleber.learnAttackSkill(aufStrasseKleben);
klimakleber.attack(0, christianLindner);
christianLindner.learnAttackSkill(mitSuvÜberfahren);
christianLindner.attack(0, klimakleber);
christianLindner.showStatus();
klimakleber.showStatus();
linksGrünVersiffterGutmensch.learnAttackSkill(petitionUnterschreiben);
linksGrünVersiffterGutmensch.attack(0, christianLindner);
christianLindner.learnAttackSkill(löhneSenken);
christianLindner.attack(1, linksGrünVersiffterGutmensch);
christianLindner.showStatus();
linksGrünVersiffterGutmensch.showStatus();
rentner.learnAttackSkill(wählenGehen);
rentner.attack(0, christianLindner);
christianLindner.learnAttackSkill(gentrifizieren);
christianLindner.attack(2, rentner);
christianLindner.showStatus();
rentner.showStatus();
ökoHippie.learnAttackSkill(mitSuvÜberfahren);
ökoHippie.learnAttackSkill(anBaumKetten);
ökoHippie.attack(0, christianLindner);
christianLindner.learnAttackSkill(mehrBraunkohleAbbauen);
christianLindner.attack(3, ökoHippie);


// GAME-OVER NACHRICHT:
if(eliminatedGeringVerdiener.length == 4) {
    console.log("HURRA!!! Kapitalisten haben gewonnen! Alle Geringverdiener wurden eliminiert! Lang lebe der faire Wettbewerb!!!");
    console.log();
}

if(eliminatedCapitalits.length == 3) {
    console.log("WOW...Geringverdiener haben gewonnen?!");
    console.log();
}

console.log("Eliminierte Geringverdiener: ", eliminatedGeringVerdiener);
console.log();
console.log("Eliminierte Kapitalisten: ", eliminatedCapitalits);
console.log();


