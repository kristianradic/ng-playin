export class HarryDatabase {
  createDb() {
    const products = [
      {
        id: 1,
        name: 'Harry Potter i kamen mudraca',
        description: 'Harry Potter i Kamen mudraca prva je od sedam knjiga iz serijala o Harryju Potteru autorice J. K. Rowling. Knjiga je prvi put objavljena 26. lipnja 1997. u izdanju Bloomsbury Publishinga, a kasnije je po njoj snimljen i istoimeni film. Kamen mudraca se smatra jednom od najprodavanijih knjiga ikada te je prvi dio najprodavanijeg serijala u povijesti pisane riječi. To je i najpopularnija od knjiga iz serijala po broju prodanih primjeraka - procjenjuje se da je u svijetu prodana u 107 milijuna primjeraka.',
        grade: 5,
        favorite: true,
        /*         review: [{
                    grade: 5,
                    description: "Ovo je najgora knji<ga ikad koju san pročitala",
                }] */
      },
      {
        id: 2,
        name: 'Harry Potter i odaja tajni',
        description: 'Harry Potter i Kamen mudraca prva je od sedam knjiga iz serijala o Harryju Potteru autorice J. K. Rowling. Knjiga je prvi put objavljena 26. lipnja 1997. u izdanju Bloomsbury Publishinga, a kasnije je po njoj snimljen i istoimeni film. Kamen mudraca se smatra jednom od najprodavanijih knjiga ikada te je prvi dio najprodavanijeg serijala u povijesti pisane riječi. To je i najpopularnija od knjiga iz serijala po broju prodanih primjeraka - procjenjuje se da je u svijetu prodana u 107 milijuna primjeraka.',
        grade: 3,
        favorite: false,
      },
      {
        id: 3,
        name: 'Harry Potter i zatvorenik azkabana',
        description: 'Harry Potter i Kamen mudraca prva je od sedam knjiga iz serijala o Harryju Potteru autorice J. K. Rowling. Knjiga je prvi put objavljena 26. lipnja 1997. u izdanju Bloomsbury Publishinga, a kasnije je po njoj snimljen i istoimeni film. Kamen mudraca se smatra jednom od najprodavanijih knjiga ikada te je prvi dio najprodavanijeg serijala u povijesti pisane riječi. To je i najpopularnija od knjiga iz serijala po broju prodanih primjeraka - procjenjuje se da je u svijetu prodana u 107 milijuna primjeraka.',
        grade: 4,
        favorite: false,
      },
      {
        id: 4,
        name: 'Harry Potter i plameni pehar',
        description: 'Harry Potter i Kamen mudraca prva je od sedam knjiga iz serijala o Harryju Potteru autorice J. K. Rowling. Knjiga je prvi put objavljena 26. lipnja 1997. u izdanju Bloomsbury Publishinga, a kasnije je po njoj snimljen i istoimeni film. Kamen mudraca se smatra jednom od najprodavanijih knjiga ikada te je prvi dio najprodavanijeg serijala u povijesti pisane riječi. To je i najpopularnija od knjiga iz serijala po broju prodanih primjeraka - procjenjuje se da je u svijetu prodana u 107 milijuna primjeraka.',
        grade: 2,
        favorite: true,

      },
    ];
    return { products };
  }
}

