export class HarryDatabase {
  createDb() {
    const products = [
      {
        id: 1,
        name: 'Harry Potter i kamen s ramena',
        description: 'Harry Potter i Kamen mudraca prva je od sedam knjiga iz serijala o Harryju Potteru autorice J. K. Rowling. Knjiga je prvi put objavljena 26. lipnja 1997. u izdanju Bloomsbury Publishinga, a kasnije je po njoj snimljen i istoimeni film. Kamen mudraca se smatra jednom od najprodavanijih knjiga ikada te je prvi dio najprodavanijeg serijala u povijesti pisane riječi. To je i najpopularnija od knjiga iz serijala po broju prodanih primjeraka - procjenjuje se da je u svijetu prodana u 107 milijuna primjeraka.',
        grade: 5,
        favorite: true,
        review: [
          {
          name: 'Milorad Pupopovac',
          title: 'Super knjiga volim konje.',
          grade: 5,
          description: "Super knjiga, šteta pa moram doma, izvest kornjačju na pašu. A onda, netom pred njegov jedanaesti rođendan, počela su stizati pisma! Tajanstvena pisma naslovljena na gospodina Harryja Pottera, opasna pisma koja mu tetak Vernon nikako nije želio pokazati, čarobna pisma ispisana smaragdnozelenom tintom, iz kojih bi Harry mogao saznati istinu! A istina je da Harryjevi roditelji nisu poginuli u prometnoj nesreći, i istina je da Harry Potter nije sasvim običan dječak, i istina je da na jesen ipak neće morati krenuti u peti razred obližnje škole.",
        },
        {
          name: 'Jadranka Pupopovac',
          title: 'Zbog ove knjige sam kupio bmw-a.',
          grade: 2,
          description: "Super knjiga, šteta pa moram doma, izvest kornjačju na pašu. A onda, netom pred njegov jedanaesti rođendan, počela su stizati pisma! Tajanstvena pisma naslovljena na gospodina Harryja Pottera, opasna pisma koja mu tetak Vernon nikako nije želio pokazati, čarobna pisma ispisana smaragdnozelenom tintom, iz kojih bi Harry mogao saznati istinu! A istina je da Harryjevi roditelji nisu poginuli u prometnoj nesreći, i istina je da Harry Potter nije sasvim običan dječak, i istina je da na jesen ipak neće morati krenuti u peti razred obližnje škole.",
        },
        {
          name: 'Kristian Pupopovac',
          title: 'Ne znan čitat.',
          grade: 4,
          description: "Super knjiga, šteta što ne znam čitat.",
        },
        ],
      },
      {
        id: 2,
        name: 'Harry Potter i odaja vlajni',
        description: 'Tijekom godine povećava se broj napada i sve više skamenjenih osoba, uključujući i Hermionu, završava u bolničkom krilu. kao vrhunac, na jednom je od zidova osvanula poruka da je Ginny Weasley odvedena u Odaju gdje će "njezin leš dovijeka ležati". Uz Ronovu pomoć Harry pronalazi ulaz u Odaju tajni gdje saznaje da je Ginny otvorila Odaju pod utjecajem Lorda Voldemorta, odnosno sjećanja na njega koje je bilo pohranjeno u njegovom starom dnevniku. Sjećanje na Voldemorta (Toma Riddlea) sve više jača dok krade životnu energiju od Ginny. Pokušava ubiti Harryja nahuškavanjem baziliska na njega, ali Dumbledore šalje Fawkesa, svog feniksa, da odnese Harryu Razredbeni klobuk u iz kojeg Harry izvlači mač Godrica Gryffindora. Fawkes osljepljuje baziliska i Harry ga ubija mačem. Riddleov je dnevnik uništen i Ginny se vraća u život. Skamenjeni se učenici također osvješćuju uz pomoć mandragora profesorice Sprout. Dnevnik je bio u posjedu Luciusa Malfoya, koji ga je uspio krišom podvaliti Ginny, ali za to nije bilo dokaza.',
        grade: 3,
        favorite: false,
      },
      {
        id: 3,
        name: 'Harry Potter i zatvorenik banana',
        description: 'Harry provodi treće ljeto kod Dursleyjevih. Harry dobiva mnoge rođendanske poklone, a i obavijest da može posjećivati Hogsmeade, selo pokraj Hogwartsa. Za to treba potpis skrbnika, ali mu tetak Vernon ne dopusti. Odlazi od Kalinina prilaza 4 s prtljagom. Moćni ga je autobus odvezao do Šupljeg kotlića, kafića u Londonu. Tamo je ostao tjedan dana do početka školske godine. Svaki je dan pregledavao Vatrenu munju, najbolju metlu na svijetu u dućanu u Zakutnoj ulici. Tamo su došli i Ron i Hermiona, Harryjevi najbolji prijatelji. Hermiona je kupila mačka zvanog Crookshanks (Krivonja). Ron je imao štakora Scabbersa (Šugonja) i tako je nastala mala svađica. Harry, Ron i Hermiona pošli su u Hogwarts Express, a tamo su vidjeli novog profesora Obrane od mračnih sila, R. J. Lupina. Dementori, čuvari čarobnjačkog zatvora Azkaban provalili su u Hogwarts Express da pronađu Siriusa Blacka, ubojicu koji je jednom kletvom ubio 13 ljudi. Sirius Black pobjegao je iz Azkabana. Dementori posjete školu i na početku Dumbledore objasni da je "posjet" za zaštitu. Ispostavi se da Harry ima čudnu sklonost prema dementorima.',
        grade: 2,
        favorite: false,
        review: [
          {
          name: 'Milorad Pupopovac',
          title: 'Super knjiga volim konje.',
          grade: 5,
          description: "Super knjiga, šteta pa moram doma, izvest kornjačju na pašu. A onda, netom pred njegov jedanaesti rođendan, počela su stizati pisma! Tajanstvena pisma naslovljena na gospodina Harryja Pottera, opasna pisma koja mu tetak Vernon nikako nije želio pokazati, čarobna pisma ispisana smaragdnozelenom tintom, iz kojih bi Harry mogao saznati istinu! A istina je da Harryjevi roditelji nisu poginuli u prometnoj nesreći, i istina je da Harry Potter nije sasvim običan dječak, i istina je da na jesen ipak neće morati krenuti u peti razred obližnje škole.",
        },
        {
          name: 'Jadranka Pupopovac',
          title: 'Zbog ove knjige sam kupio bmw-a.',
          grade: 5,
          description: "Super knjiga, šteta pa moram doma, izvest kornjačju na pašu. A onda, netom pred njegov jedanaesti rođendan, počela su stizati pisma! Tajanstvena pisma naslovljena na gospodina Harryja Pottera, opasna pisma koja mu tetak Vernon nikako nije želio pokazati, čarobna pisma ispisana smaragdnozelenom tintom, iz kojih bi Harry mogao saznati istinu! A istina je da Harryjevi roditelji nisu poginuli u prometnoj nesreći, i istina je da Harry Potter nije sasvim običan dječak, i istina je da na jesen ipak neće morati krenuti u peti razred obližnje škole.",
        },
        {
          name: 'Kristian Pupopovac',
          title: 'Ne znan čitat.',
          grade: 3,
          description: "Super knjiga, šteta što ne znam čitat.",
        },
        ],
      },
      {
        id: 4,
        name: 'Harry Potter i plameni pekar',
        description: 'Pred kraj još jednih otužnih ljetnih praznika, Harryja Pottera će iz jezivog sna prenuti oštra bol na čelu, baš na mjestu njegova čuvenog ožiljka. No njegova će zabrinutost nestati pred uzbuđenjem zbog najvećeg događaja sezone – velikog metlobojskog kupa! Harry i obitelj Weasleyevih uputit će se na borilište, zajedno s gotovo cijelim čarobnjačkim pukom, ali umjesto veselja i sporta dočekat će ih mučki napad Smrtonoša… Kad se Harry vrati u Hogwarts, tamo će ga dočekati novost o još jednom velikom događanju – natjecanju triju čarobnjačkih škola. U strahu od novih nevolja, profesori će pokušati poduzeti sve mjere opreza, no naravno da neće sve ići glatko… Četvrta godina školovanja u Hogwartsu, najpoznatijoj školi čarobnjaštva i vještičarenja, donijet će Harryju – a i svima koji posegnu za ovom knjigom – više opasnih uzbuđenja nego ijedna prethodna.',
        grade: 2,
        favorite: true,
        review: [
          {
          name: 'Milorad Pupopovac',
          title: 'Super knjiga volim konje.',
          grade: 5,
          description: "Super knjiga, šteta pa moram doma, izvest kornjačju na pašu. A onda, netom pred njegov jedanaesti rođendan, počela su stizati pisma! Tajanstvena pisma naslovljena na gospodina Harryja Pottera, opasna pisma koja mu tetak Vernon nikako nije želio pokazati, čarobna pisma ispisana smaragdnozelenom tintom, iz kojih bi Harry mogao saznati istinu! A istina je da Harryjevi roditelji nisu poginuli u prometnoj nesreći, i istina je da Harry Potter nije sasvim običan dječak, i istina je da na jesen ipak neće morati krenuti u peti razred obližnje škole.",
        },
        {
          name: 'Jadranka Pupopovac',
          title: 'Zbog ove knjige sam kupio bmw-a.',
          grade: 2,
          description: "Super knjiga, šteta pa moram doma, izvest kornjačju na pašu. A onda, netom pred njegov jedanaesti rođendan, počela su stizati pisma! Tajanstvena pisma naslovljena na gospodina Harryja Pottera, opasna pisma koja mu tetak Vernon nikako nije želio pokazati, čarobna pisma ispisana smaragdnozelenom tintom, iz kojih bi Harry mogao saznati istinu! A istina je da Harryjevi roditelji nisu poginuli u prometnoj nesreći, i istina je da Harry Potter nije sasvim običan dječak, i istina je da na jesen ipak neće morati krenuti u peti razred obližnje škole.",
        },
        {
          name: 'Kristian Pupopovac',
          title: 'Ne znan čitat.',
          grade: 4,
          description: "Super knjiga, šteta što ne znam čitat.",
        },
        ],
      },
      {
        id: 5,
        name: 'Harry Potter i piće iz feniksa',
        description: 'Nakon što se herojski natjecao na Tromagijskom turniru i uz to posvjedočio povratku lorda Voldemorta, Harry Potter privukao je neželjenu pažnju čarobnjačkog tabloida Dnevni prorok, koji koristi svaku priliku da mu se izruguje i baca sumnja na njegove riječi i djela. Ta se sjenka nepovjerenja nadvila i nad Dumbledorea, te će Ministarstvo magije poslati svoju gnjusnu predstavnicu da preuzme kontrolu nad najpoznatijom školom vještičarenja i čarobnjaštva, Hogwartsom. Peta će godina u Hogwartsu stoga započeti nizom katastrofa, a za Harryja će biti najteža činjenica što mu se čini da su ga tijekom ljeta izbjegavali i njegovi najbolji prijatelji. Kad mu se učini da je potpuno sam i napušten, na scenu će stupiti Red feniksa, skupina neobičnih i ekscentričnih čarobnjaka, u čije će ruke morati staviti vlastiti život i pridružiti se njihovoj borbi protiv Voldemorta… Harry Potter i Red feniksa donosi više uzbuđenja no ikad, a Harryjev će svijet postati mračniji i napetiji no što ste mogli očekivati.',
        grade: 2,
        favorite: true,
        review: [
          {
          name: 'Milorad Pupopovac',
          title: 'Super knjiga volim konje.',
          grade: 5,
          description: "Super knjiga, šteta pa moram doma, izvest kornjačju na pašu. A onda, netom pred njegov jedanaesti rođendan, počela su stizati pisma! Tajanstvena pisma naslovljena na gospodina Harryja Pottera, opasna pisma koja mu tetak Vernon nikako nije želio pokazati, čarobna pisma ispisana smaragdnozelenom tintom, iz kojih bi Harry mogao saznati istinu! A istina je da Harryjevi roditelji nisu poginuli u prometnoj nesreći, i istina je da Harry Potter nije sasvim običan dječak, i istina je da na jesen ipak neće morati krenuti u peti razred obližnje škole.",
        },
        {
          name: 'Jadranka Pupopovac',
          title: 'Zbog ove knjige sam kupio bmw-a.',
          grade: 2,
          description: "Super knjiga, šteta pa moram doma, izvest kornjačju na pašu. A onda, netom pred njegov jedanaesti rođendan, počela su stizati pisma! Tajanstvena pisma naslovljena na gospodina Harryja Pottera, opasna pisma koja mu tetak Vernon nikako nije želio pokazati, čarobna pisma ispisana smaragdnozelenom tintom, iz kojih bi Harry mogao saznati istinu! A istina je da Harryjevi roditelji nisu poginuli u prometnoj nesreći, i istina je da Harry Potter nije sasvim običan dječak, i istina je da na jesen ipak neće morati krenuti u peti razred obližnje škole.",
        },
        {
          name: 'Kristian Pupopovac',
          title: 'Ne znan čitat.',
          grade: 4,
          description: "Super knjiga, šteta što ne znam čitat.",
        },
        ],

      },
      {
        id: 6,
        name: 'Harry Potter i princ mješanih čevapa',
        description: 'Dok se Harry, Ron i Hermiona spremaju za šestu godinu školovanja u Hogwartsu, Red feniksa i Dumbledore nastavljaju bitku protiv sila zla i smrtonoša koji otvoreno teroriziraju svijet čarobnjaka. Ubojstva, nestanci, diverzije i ukleti ljudi postali su sasvim uobičajene pojave, a čak ni polaznici Hogwartsa (koji svi smatraju najsigurnijim mjestom) nisu potpuno sigurni od napada Voldemortovih pristaša. A s početkom nove školske godine i u Hogwartsu se zbivaju velike promjene: stiže novi profesor, dva predmeta dobivaju nove predavače, a učenici šeste godine imaju priliku polagati aparaciju. Tijekom bremenitih vremena profesori i polaznici pokušavaju održati prividan mir i sve teče uobičajenim čarobnjačkim redom. Bude se nove simpatije, Harry se ponovno zaljubljuje, a ljubavne komplikacije ne muče samo njega, već i njegove prijatelje. No situacija je sve teža.',
        grade: 2,
        favorite: true,

      },
      {
        id: 7,
        name: 'Harry Potter i darovi smrti',
        description: 'Kako bi jednom za svagda uništio Voldemorta, Harry mora pronaći sve njegove horkrukse – predmete u koje je Voldemort spremio dijelove svoje biti i tako si osigurao besmrtnost. Na tom putu Harry će morati odrasti, suočit će se s gubitkom i razotkrit će tajne iza života i smrti svojih najbližih prijatelja i najljućih neprijatelja',
        grade: 2,
        favorite: true,
        review: [
          {
          name: 'Milorad Pupopovac',
          title: 'Super knjiga volim konje.',
          grade: 5,
          description: "Super knjiga, šteta pa moram doma, izvest kornjačju na pašu. A onda, netom pred njegov jedanaesti rođendan, počela su stizati pisma! Tajanstvena pisma naslovljena na gospodina Harryja Pottera, opasna pisma koja mu tetak Vernon nikako nije želio pokazati, čarobna pisma ispisana smaragdnozelenom tintom, iz kojih bi Harry mogao saznati istinu! A istina je da Harryjevi roditelji nisu poginuli u prometnoj nesreći, i istina je da Harry Potter nije sasvim običan dječak, i istina je da na jesen ipak neće morati krenuti u peti razred obližnje škole.",
        },
        {
          name: 'Jadranka Pupopovac',
          title: 'Zbog ove knjige sam kupio bmw-a.',
          grade: 2,
          description: "Super knjiga, šteta pa moram doma, izvest kornjačju na pašu. A onda, netom pred njegov jedanaesti rođendan, počela su stizati pisma! Tajanstvena pisma naslovljena na gospodina Harryja Pottera, opasna pisma koja mu tetak Vernon nikako nije želio pokazati, čarobna pisma ispisana smaragdnozelenom tintom, iz kojih bi Harry mogao saznati istinu! A istina je da Harryjevi roditelji nisu poginuli u prometnoj nesreći, i istina je da Harry Potter nije sasvim običan dječak, i istina je da na jesen ipak neće morati krenuti u peti razred obližnje škole.",
        },
        {
          name: 'Kristian Pupopovac',
          title: 'Ne znan čitat.',
          grade: 4,
          description: "Super knjiga, šteta što ne znam čitat.",
        },
        ],
      },
    ];
    return { products };
  }
}

