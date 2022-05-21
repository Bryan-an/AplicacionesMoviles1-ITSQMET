// La edad de Ana es 10 años menos que la edad de María. Pedro tiene 85 años, es decir 30 años más que la edad de María.
let pedroAge = 85;
let mariaAge = 85 - 30;
let anaAge = mariaAge - 10;

// 1.  ¿Cuántos años tiene Ana, María y Pedro?
console.log(
  `1. Ana tiene ${anaAge} años, María tiene ${mariaAge} años y Pedro tiene ${pedroAge} años.`
);

// 2. ¿La edad de María es igual a la edad de Ana?
let isEqual = mariaAge === anaAge;
console.log(
  `2. La edad de María ${isEqual ? "es" : "no es"} igual a la edad de Ana`
);

// 3. Si a la edad de Ana le incrementamos 10 años. ¿La edad de Ana sería igual que la edad de María?
isEqual = anaAge += 10 === mariaAge;
console.log(
  `3. La edad de Ana ${isEqual ? "es" : "no es"} igual a la edad de María`
);

// 4. Si a Pedro le asignamos la edad de María. ¿Cuántos años tendría Ana, Pedro y María?
pedroAge = mariaAge;
console.log(
  `4. Ana tiene ${anaAge} años, Pedro tiene ${pedroAge} años y María tiene ${mariaAge} años.`
);

// 5. Pedro niega tener esa edad.    Pista (En consola debería salir false)
console.log(`5. ${!pedroAge}`);
