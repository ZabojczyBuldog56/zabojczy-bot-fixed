const Discord = require('discord.js');
const client = new Discord.Client('');

client.on('ready', () => {
  console.log('Gotow do pracy z Discordem, uruchamianie pomyslnie zakonczone.');
  client.user.setGame('18 serwerow, jak to w ogole mozliwe? | zb!help | zb!invite');
});

// Create an event listener for messages
client.on('message', message => {
  // If the message is "what is my avatar"
  if (message.content.startsWith('zb!avatar')) {
    // Send the user's avatar URL
    message.reply(message.author.avatarURL);
  }
});

client.on('message', message => {
  // Ignore messages that aren't from a guild
  if (!message.guild) return;
  // If the message content starts with "!kick"
  if (message.content.startsWith('zb!kick')) {
    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/stable/class/MessageMentions
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * Kick the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         */
        member.kick('Zlamanie regulaminu/testowanie').then(() => {
          // We let the message author know we were able to kick the person
           let kickCompleteEmbed = new Discord.RichEmbed()
           .setTitle('Wyrzucono pomyslnie czlonka:')
           .setDescription('${user.tag} z powodu: ${reason}')
           .setColor('#6AED13')
          .setTimestamp();     
        message.channel.send(kickCompleteEmbed);
        }).catch(err => {
          // An error happened
          // This is generally due to the bot not being able to kick the member,
          // either due to missing permissions or role hierarchy
      let kickUnableErrorEmbed = new Discord.RichEmbed()
     .setTitle('Cos sie posypalo.')
     .setDescription('Bot nie mogl wyrzucic czlonka ze wzgledow nieznanych dla bota.')
     .setColor('#ED2913')
     .setTimestamp();
     message.channel.send(kickUnableErrorEmbed);
          // Log the error
          console.error(err);
        });
      } else {
      }
    // Otherwise, if no user was mentioned
    } else {
      // The mentioned user isn't in this guild
        let kickNonMentionErrorEmbed = new Discord.RichEmbed()
     .setTitle('Nie oznaczyles czlonka.')
     .setDescription('Bot nie mogl wyrzucic czlonka ze wzgledow na nieoznaczenie czlonka.')
     .setColor('#ED2913')
     .setTimestamp();
      message.reply(kickNonMentionErrorEmbed);
    }
    if (!message.member.hasPermission('KICK_MEMBERS')) {
        let kickPermErrorEmbed = new Discord.RichEmbed()
     .setTitle('Brakuje wymaganych permisji:')
     .setDescription('Wymagane permisje: `KICK_MEMBERS`')
     .setColor('#ED2913')
     .setTimestamp();
     message.channel.send(kickPermErrorEmbed);
   }
   }
});

// Log our bot in using the token from https://discordapp.com/developers/applications/me
client.login('NDg4MzM2OTY3OTc3OTI2NjU2.DqxXBw.SEBbqrI9_q-W6grsanNHWmMP63U');

// Create an event listener for messages
client.on('message', message => {
  // If the message is "ping"
  if (message.content.startsWith('zb!ping')) {
    // Send "pong" to the same channel
    message.channel.send('Pong! Wiadomosc testowa.');
  }
});

// Create an event listener for messages
client.on('message', message => {
  // If the message is "ping"
  if (message.content.startsWith('<@488336967977926656>')) {
    // Send "pong" to the same channel
    message.channel.send('Co ty chcesz ode mnie?! (komenda zb!help ci pomoze)');
  }
});


client.on('message', message => {
  // If the message is "ping"
  if (message.content.startsWith('zb!help')) {
    // Send "pong" to the same channel
    message.author.send('Komendy dla kazdego: avatar, help, cotojest, ping, supportserver, losulosu, invite, ban, kick, osu, say, meme (wiecej komend juz pozniej)'); 
    message.author.send('Komendy Global Administratorow Bota: reload'); 
    message.author.send('Komendy Hostera Bota: eval');
    message.channel.send('Dostepne komendy wyslalem ci na priv (jezeli masz zablokowane DMy nic na to nie poradze).');
  }
});


// Create an event listener for messages
client.on("message", (msg) => {
  if (!msg.content.startsWith("zb!")) return;
  const args = msg.content.slice(3).split(" "); // przyjmujac ze prefix ma 3 znaki
  const cmd = args.shift();
  switch (cmd) {
  case "cotojest": {
     switch (args[0]) {
     case "google": {
       return msg.channel.send('Google - najpopularniejsza wyszukiwarka internetowa uzywana na calym swiecie. Jej poprzednia nazwa byl BackRub. Dziala od 1998 roku.')
     }
     case "youtube": {
     return msg.channel.send('YouTube - portal dla kazdego, co lubi montowac, wstawiac filmy lub je ogladac.')
     }
     case "woi": {
     return msg.channel.send('Woi - byc moze nie wiesz, ale legendy glosza, ze tworzy on przerobki na poziomie Yakubixona.')
     }
     case "winda": {
     return msg.channel.send('Winda - urzadzenie sluzace do automatycznego przewozu osob poprzez wybieranie przyciskow na montowanym dashboardzie, ktory zwykle znajduje sie z boku windy. Czesto sie zdarza, ze winda ma drzwi z dwoch stron.')
     }
     case "zabojczybuldog56": {
     return msg.channel.send('ZabojczyBuldog56 - tworzy rozne poradniki, przeglady telefonow i inne. Chce dostac sie do dobrej szkoly sredniej. Ale to juz inna historia.')
     }
     case "supersoldier1999": {
     return msg.channel.send('SuperSoldier1999 - szkoda, ze wykasowal stary kanal, bo tam mial 5k subow i >1M wyswietlen.')
     }
     case "trawa": {
     return msg.channel.send('Trawa (a raczej trawnik) - pole, gdzie rosnie roslinnosc oraz sama trawa. Do podlewania mozna uzyc wody z konewki, badz deszczowki.')
     }
     case "jan xiom": {
     return msg.channel.send('Fraza znajduje sie na liscie zablokowanych. Powodem jest szkalowanie Polski.')
     }
     case "osu": {
     return msg.channel.send('Gra rytmiczna, w ktorej klikasz i... robisz wlasne mapki.')
     }
     case "discord": {
     return msg.channel.send('Komunikator nie tylko dla graczy.')
     }
     case "tiktok": {
     return msg.channel.send('Fraza znajduje sie na liscie zablokowanych. Powodem sa denerwujace reklamy.')
     }
     case "fratikbot": {
     return msg.channel.send('Multifunkcjonalny bot, w ktorym mozna zrobic... praktycznie wszystko. Juz majac 11 serwerow mial 50 komend (niestety, to nie to samo co ZabojczyBot.)')
     }
     //tak samo z innymi a potem
     default: { //je¿eli nie ma argumentów lub nieznany
       return msg.channel.send('Uzytkowanie: zb!cotojest <fraza do wyszukania> (nie uwzgledniaj nawiasow trojkatnych.) Prawie wszystkie frazy moga nie dzialac, tworca pracuje nad ich wyjasnieniami.');
     }
     }
  }
  case "komenda2": {
    //kod komendy2
  }
  //itd, mozna dopisac default by ewentualnie wyrzucic jak komenda jest nieznana
  }
});


// Create an event listener for messages
client.on("message", (msg) => {
  if (!msg.content.startsWith("zb!")) return;
  const args = msg.content.slice(3).split(" "); // przyjmujac ze prefix ma 3 znaki
  const cmd = args.shift();
  switch (cmd) {
  case "losulosu": {
     switch (args[0]) {
     case "1": {
       return msg.channel.send('1 przydatny ZabojczyBot (oj, trudne trudne sie wylosowalo...)')
     }
     case "2": {
     return msg.channel.send('2 kanaly tekstowe na Discordzie (oj, trudne trudne sie wylosowalo...)')
     }
     case "3": {
     return msg.channel.send('3 najdziwniejsze momenty w grach (oj, trudne trudne sie wylosowalo...)')
     }
     case "4": {
     return msg.channel.send('4 Schindlery Miconic 10 (oj, trudne trudne sie wylosowalo...)')
     }
     case "5": {
     return msg.channel.send('5 durnowatych malp w grach (oj, trudne trudne sie wylosowalo...)')
     }
     case "6": {
     return msg.channel.send('6 warszawskich przeciwnikow (oj, trudne trudne sie wylosowalo...)')
     }
     //tak samo z innymi a potem
     default: { //je¿eli nie ma argumentów lub nieznany
       return msg.channel.send('Uzytkowanie: zb!losulosu <zakres (aktualny: 1-6)> (nie uwzgledniaj nawiasow trojkatnych.) Przyklad: zb!losulosu 2');
     }
     }
  }
  case "komenda2": {
    //kod komendy2
  }
  //itd, mozna dopisac default by ewentualnie wyrzucic jak komenda jest nieznana
  }
});

// Create an event listener for messages
client.on('message', message => {
  // If the message is "ping"
  if (message.content.startsWith('zb!invite')) {
    // Send "pong" to the same channel
    message.channel.send('Zobacz wiadomosci prywatne, jezeli masz je zablokowane nic na to nie poradze.');
    message.author.send('Obczaj ten link, zeby zaprosic bota: https://discordapp.com/oauth2/authorize?client_id=488336967977926656&scope=bot&permissions=8 Jezeli zamierzasz uzywac bota na kanalach prywatnych, zaznacz uprawnienia Administratora.');
  }
});

client.on('message', message => {
  // Ignore messages that aren't from a guild
  if (!message.guild) return;

  // if the message content starts with "!ban"
  if (message.content.startsWith('zb!ban')) {
    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/stable/class/MessageMentions
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * Ban the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         * Read more about what ban options there are over at
         * https://discord.js.org/#/docs/main/stable/class/GuildMember?scrollTo=ban
         */
        member.ban({
          reason: 'Zostales wyrzucony z powodow wyznaczonych przez administracje',
        }).then(() => {
          // We let the message author know we were able to ban the person
          let banCompletedErrorEmbed = new Discord.RichEmbed()
          .setTitle('Pomyslnie zbanowano')
          .setDescription('Zbanowano: ', '${user.tag}', 'z powodu: ', '${reason}')
          .setColor('#6AED13')
          .setTimestamp();
     message.channel.send(banCompletedErrorEmbed);
        }).catch(err => {
          // An error happened
          // This is generally due to the bot not being able to ban the member,
          // either due to missing permissions or role hierarchy
          let banUnknownErrorEmbed = new Discord.RichEmbed()
          .setTitle('Cos sie posypalo.')
          .setDescription('Bot nie mogl wyrzucic czlonka, poniewaz nie zaznaczyles w konfiguracji bota mozliwosci banowania czlonkow. Edytuj role `ZabojczyBot 2` i zaznacz wymagana permisje. Pamietaj, ze nie mozesz banowac osob z rola wyzsza od ciebie lub rowna tobie.')
          .setColor('#ED2913')
          .setTimestamp();
     message.channel.send(banUnknownErrorEmbed);
          // Log the error
          console.error(err);
        });
      } else {
        // The mentioned user isn't in this guild
        let banNonGuildMemberErrorEmbed = new Discord.RichEmbed()
     .setTitle('Cos sie posypalo.')
     .setDescription('Bot nie mogl wyrzucic czlonka, poniewaz czlonek, ktorego zamierzasz zbanowac nie jest na twoim serwerze.')
     .setColor('#ED2913')
     .setTimestamp();
     message.channel.send(banNonGuildMemberErrorEmbed);
      }
    } else {
    // Otherwise, if no user was mentioned
      let banNonMentionErrorEmbed = new Discord.RichEmbed()
     .setTitle('Cos sie posypalo.')
     .setDescription('Bot nie mogl wyrzucic czlonka, poniewaz nie oznaczyles czlonka ktorego chcesz zbanowac.')
     .setColor('#ED2913')
     message.channel.send(banNonMentionErrorEmbed);
    }
     if (!message.member.hasPermission('BAN_MEMBERS')) {
       let banNoPermissionErrorEmbed = new Discord.RichEmbed()
     .setTitle('Brakuje wymaganych permisji.')
     .setDescription('Nie mozesz zbanowac czlonka, poniewaz nie posiadasz wymaganych permisji: `BAN_MEMBERS`')
     .setColor('#ED2913')
     message.channel.send(banNoPermissionErrorEmbed);
  }
  }
});

// Create an event listener for messages
client.on("message", (msg) => {
  if (!msg.content.startsWith("zb!")) return;
  const args = msg.content.slice(3).split(" "); // przyjmujac ze prefix ma 3 znaki
  const cmd = args.shift();
  switch (cmd) {
  case "zapytaj": {
     switch (args[0]) {
     case "Czy lubisz Niemcy?": {
     return msg.channel.send('Nie chce urazac ludzi tej narodowosci.')
     }
     case "Ile masz lat?": {
     return msg.channel.send('A co cie to?')
     }
     case "Jutro jest 11 listopada": {
     return msg.channel.send('Dlaczego ja tu nie widze zadnej flagi?')
     }
     case "Dostane kase?": {
     return msg.channel.send('Otrzymales: 20 :zielonabuldogomoneta:... hahaha wpadles')
     }
     case "Daiki Ito": {
     return msg.channel.send('Upadl na stoczni narciarskiej bo sobie chcial.')
     }
     case "Czy lubisz komputery?": {
     return msg.channel.send('~~majster na dzwigu au auuu zart xdd~~ Lubie komputery.')
     }
     //tak samo z innymi a potem
     default: { //je¿eli nie ma argumentów lub nieznany
       return msg.channel.send('Uzytkowanie: zb!zapytaj <pytanie>. Pamietaj, nie uwzgledniaj nawiasow trojkatnych. Przyklad: `zb!zapytaj Czy lubisz komputery?`.');
     }
     }
  }
  case "komenda2": {
    //kod komendy2
  }
  //itd, mozna dopisac default by ewentualnie wyrzucic jak komenda jest nieznana
  }
});

exports.run = async (client, message, args, level) => {// eslint-disable-line no-unused-vars
  if (!args || args.length < 1) return message.reply("Must provide a command to reload. Derp.");

  let response = await client.unloadCommand(args[0]);
  if (response) return message.reply(`Blad przy ladowaniu: ${response}`);

  response = client.loadCommand(args[0]);
  if (response) return message.reply(`Blad przy przeladowaniu: ${response}`);

  message.reply(`Komenda \`${args[0]}\` zostala odswiezona.`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Globalny Administrator Bota"
};

exports.help = {
  name: "reload",
  category: "System",
  description: "Odswiezanie komendy ostatnio zmodyfikowanej.",
  usage: "reload [command]"
};

// Create an event listener for messages
client.on("message", (msg) => {
  if (!msg.content.startsWith("zb!")) return;
  const args = msg.content.slice(3).split(" "); // przyjmujac ze prefix ma 3 znaki
  const cmd = args.shift();
  switch (cmd) {
  case "osu": {
     switch (args[0]) {
     case "zabojczybuldog": {
       return msg.channel.send('Staty hostera bota mozesz znalezc tu: https://osu.ppy.sh/users/13132757')
     }
     //tak samo z innymi a potem
     default: { //je¿eli nie ma argumentów lub nieznany
       return msg.channel.send('Uzytkowanie: zb!osu <uzytkownik> (nie uwzgledniaj nawiasow trojkatnych. Mozesz wpisac tylko jedna wartosc.) Przyklad: zb!osu owner. Jezeli chcesz, zeby bot wyswietlal twoje staty, podaj swoj nick na osu i link w formacie `osu.ppy.sh/users/12345678`.');
     }
     }
  }
  case "zapytaj": {
  }
  
  }
});

// Create an event listener for messages
client.on("message", (msg) => {
  if (!msg.content.startsWith("zb!")) return;
  const args = msg.content.slice(3).split(" "); // przyjmujac ze prefix ma 3 znaki
  const cmd = args.shift();
  switch (cmd) {
  case "pytanie": {
     switch (args[0]) {
     case "hitler": {
       return msg.channel.send('ty no nie wiem, jak tam twoj hitlerek')
     }
     case "niemcy": {
     return msg.channel.send('Juz wiem, o co ci kaman, chodzi ci o to, ze ~~niemcy to brudasy, bo zbieraja puszki~~')
     }
     case "wiek": {
     return msg.channel.send('A co cie to?')
     }
     case "niepodleglosc": {
     return msg.channel.send('Dlaczego ja tu nie widze zadnej flagi?')
     }
     case "kasa": {
     return msg.channel.send('Otrzymales: 20 :zielonabuldogomoneta:... hahaha wpadles')
     }
     case "daiki": {
     return msg.channel.send('Upadl na stoczni narciarskiej bo sobie chcial.')
     }
     case "komputer": {
     return msg.channel.send('~~majster na dzwigu au auuu zart xdd~~ Lubie komputery.')
     }
     //tak samo z innymi a potem
     default: { //je¿eli nie ma argumentów lub nieznany
       return msg.channel.send('Uzytkowanie: zb!zapytaj <pytanie>. Pamietaj, nie uwzgledniaj nawiasow trojkatnych. Przyklad: `zb!zapytaj Czy lubisz komputery?`.');
     }
     }
  }
  case "komenda2": {
    //kod komendy2
  }
  //itd, mozna dopisac default by ewentualnie wyrzucic jak komenda jest nieznana
  }
});

client.on('message', message => {
  if (message.content.startsWith('zb!say')) {
    let doCiecia = message.content
    let pociete = doCiecia.split('zb!say ') //gdybyœ zmienial nazwê komendy, tu te¿ musisz zmieniæ. spacja na koñcu jest wymagana!
    let wyslij = pociete[1]

    if (message.content.length > 1) {
    let outputEmbed = new Discord.RichEmbed()
     .setTitle('Bot przepisal nastepujacy tekst:')
     .setDescription(wyslij)
     .setColor('#5EBA3F')
     .setTimestamp();
     message.channel.send(outputEmbed);
  }
  }
});

client.on("message", message => {
  const args = message.content.split(" ").slice(1);
 
  if (message.content.startsWith("zb!eval")) {
    if(message.author.id !== '353067694565883915') return message.channel.send('Komenda dostepna tylko dla deweloperow bota. Wymagany poziom permisji: 8 (Glowny deweloper bota)');
    try {
      const code = args.join(" ");
      let evaled = eval(code);
 
      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);
 
      message.channel.send(clean(evaled), {code:"xl"});
    } catch (err) {
      message.channel.send(`Wykryto blad przy wykonywaniu kodu.`);
    }
  }
});

client.on("message", message => { 
     if (message.content.startsWith("zb!mem")) {
        const meme = 1 + Math.floor(Math.random() * 10);
        if (meme == 1) {
        const attachment = "https://media.discordapp.net/attachments/467954825083092992/501790687403180033/FB_IMG_1539091941074.jpg?width=393&height=468"
        message.channel.send(attachment);
        } if (meme == 2) {
        const attachment = "https://media.discordapp.net/attachments/472100694690627605/503941400065343489/FB_IMG_1540219113286.jpg?width=277&height=473"
        message.channel.send(attachment);
        } if (meme == 3) {
        const attachment = "https://cdn.discordapp.com/attachments/467954825083092992/498869823447760896/0_1_66627_Specjalne_mydlo_dla_zydow_i_murzynow_przez_BezBek.jpg"
        message.channel.send(attachment);
        } if (meme == 4) {
        const attachment = "https://cdn.discordapp.com/attachments/503869047964827649/504302224583819294/0_1_91963_Volksdeutchwagen_ein_volk_ein_wagen_ein_fuhrer_przez_loltracktor.gif"
        message.channel.send(attachment);
        } if (meme == 5) {
        const attachment = "https://cdn.discordapp.com/attachments/503869047964827649/504301971793117184/15349586520629.jpg"
        message.channel.send(attachment);
        } if (meme == 6) {
        const attachment = "https://cdn.discordapp.com/attachments/442753665208549376/504013340193062925/FB_IMG_1539773938905.jpg"
        message.channel.send(attachment);
        } if (meme == 7) {
        const attachment = "https://cdn.discordapp.com/attachments/442753665208549376/504012911736258580/filing_images_24efb747617d.png"
        message.channel.send(attachment);
        } if (meme == 8) {
        const attachment = "https://cdn.discordapp.com/attachments/442753665208549376/503507152447471616/unknown.png"
        message.channel.send(attachment);
        } if (meme == 9) {
        const attachment = "https://cdn.discordapp.com/attachments/419588999611678733/504023157922070549/44327476_505425593289033_7989022264462934016_n.png"
        message.channel.send(attachment);
        } if (meme == 10) {
        const attachment = "https://cdn.discordapp.com/attachments/419588999611678733/502239943654113281/FB_IMG_15398137047313738.jpg"
        message.channel.send(attachment);
        }
     }
});

client.on('message', message => {
  // Voice only works in guilds, if the message does not come from a guild,
  // we ignore it
  if (!message.guild) return;

  const isPlaying = false;

  if (message.content === 'zb!join') {
    // Only try to join the sender's voice channel if they are in one themselves
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { // Connection is an instance of VoiceConnection
          message.reply('Polaczono z czatem glosowym.');
        })
        .catch(console.log);
    } else {
      message.reply('Dolacz do czatu glosowego, zanim uzyjesz tej komendy.');
    }
  }
  
  if (message.content === 'zb!playmusic') {
    if (message.member.voiceChannel) {
    let isPlaying = true;
    let doCiecia = message.content
    let pociete = doCiecia.split('zb!playmusic ')
    let graj = pociete[1]
    const dispatcher = connection.playArbitraryInput(graj);
    message.channel.send('Odtwarzanie utworu: ', '**', graj, '**'); 
    } 
  }
  
  if (message.content === 'zb!pause') {
   if (isPlaying == true) {
    let isPlaying = false;
    dispatcher.pause();
    message.channel.send('Spauzowano :thumbsup:');
   } if (isPlaying == false) {
     let pausedEmbed = new Discord.RichEmbed()
     .setTitle('Nie mozesz spauzowac utworu.')
     .setDescription('Utwor jest spauzowany badz nie wpisales komendy: `zb!playmusic`.')
     .setColor('#ED2913')
     .setTimestamp();
     message.channel.send(pausedEmbed);
   }
  }

  if (message.content === 'zb!resume') {
    if (isPlaying == false) {
    let isPlaying = true;
    dispatcher.resume();
    message.channel.send('Ponowiono granie :thumbsup:');
    } if (isPlaying == true) {
    let pausedEmbed = new Discord.RichEmbed()
     .setTitle('Nie mozesz ponowic grania utworu aktualnie grajacego.')
     .setDescription('Utwor aktualnie jest grany badz nie wpisales komendy: `zb!pause`.')
     .setColor('#ED2913')
     .setTimestamp();
     message.channel.send(pausedEmbed);
    }
  }
  
  if (message.content === 'zb!stop') {
    if (isPlaying == true) {
    let isPlaying = false;
    dispatcher.end();
    message.channel.send('Zatrzymano :thumbsup:');
    } if (isPlaying == false) {
    let stopEmbed = new Discord.RichEmbed()
     .setTitle('Nie mozesz zatrzymac muzyki, poniewaz:')
     .setDescription('nie ustawiles muzyki. Przeciez to jest tak samo jak z gramofonami - jak nie ustawisz plyty, muzyka nie bedzie grala. Proste? Ustaw muzyke, wpisujac `zb!playmusic <URL muzyki na YT>`.')
     .setColor('#ED2913')
     .setTimestamp();
     message.channel.send(stopEmbed);
    }
  }
});

//modu³ kuli 8
client.on('message', message => {
     if (message.content.startsWith('zb!kula8')) {
         const odpowiedz = 1 + Math.floor(Math.random() * 8);
         let doCiecia = message.content
         let pociete = doCiecia.split('zb!kula8 ');
         let pytanie = pociete[1];
         
         if (odpowiedz == 1) {
             message.channel.send('A co ja jestem? Informacja?');
             console.log('Odpowiedz z ID: 1');
         }
         if (odpowiedz == 2) {
             message.channel.send('Jezeli mialbys wyzsza range, odpowiedzialbym ci.');
             console.log('Odpowiedz z ID: 2');
         }
         if (odpowiedz == 3) {
             message.channel.send('Nie dla psa, dla pana to.');
             console.log('Odpowiedz z ID: 3');
         }
         if (odpowiedz == 4) {
             message.channel.send('Tak.');
             console.log('Odpowiedz z ID: 4');
         }
         if (odpowiedz == 5) {
             message.channel.send('Nie.');
             console.log('Odpowiedz z ID: 5');
         }
         if (odpowiedz == 6) {
             message.channel.send('O co ci chodzi?');
             console.log('Odpowiedz z ID: 6');
         }
         if (odpowiedz == 7) {
             message.channel.send('Nie przesadzasz czasem?');
             console.log('Odpowiedz z ID: 7');
         }
         if (odpowiedz == 8) {
             message.channel.send('Teraz nie przeszkadzaj, mam wazna robote.');
             console.log('Odpowiedz z ID: 8');
         }
     }
});