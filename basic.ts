
//== BASICS ==//

/**
 * (1) x est une chaîne, car nous l'avons initialisé
 */
let x = "hello world";

/**
 * (2)  la réaffectation est bonne
 */
x = "hello mars";

/**
 * (3) mais si on essaie de changer de type
 */
// x = 42;

/**
 * (4) regardons const. Le type est littéralement "bonjour le monde"
 */
// const y = "hello world";

/**
 * C'est ce qu'on appelle un "type de littéral de chaîne". y ne peut jamais être réaffecté car c'est un const,
 * afin que nous puissions le considérer comme ne contenant qu'une valeur qui est littéralement la chaîne "hello world"
 * et aucune autre valeur possible
 */

/**
 * (5) parfois nous devons déclarer une variable sans l'initialiser
 */
// let z;
// z = 41;
// z = "abc"; // (6) oh no! This isn't good

/**
 *  Si nous regardons le type de z, c'est `any`. C'est le type le plus flexible
 * dans TypeScript (pensez-y comme un `let` JavaScript)
 */

/**
 * (7) nous pourrions améliorer cette situation en fournissant une annotation de type
 * lorsque nous déclarons notre variable
 */
// let zz: number;
// zz = 41;
// zz = "abc";

//== SIMPLE ARRAYS ==//

/**
 * (8) les types de tableaux simples peuvent être exprimés en utilisant []
 */
// let aa: number[] = [];
// aa.push(33);
// aa.push("abc");

/**
 * (9) nous pouvons même définir un tuple, qui a une longueur fixe
 */
// let bb: [number, string, string, number] = [
//   123,
//   "Fake Street",
//   "Nowhere, USA",
//   10110
// ];

// bb = [1, 2, 3];

/**
 * (10)  Les valeurs de tuple nécessitent souvent des annotations de type ( : [nombre, nombre])
 */
// const xx = [32, 31]; // number[];
// const yy: [number, number] = [32, 31];

//== OBJECTS ==//

/**
 * (11) les types d'objets peuvent être exprimés en utilisant {} et les noms de propriété
 */
// let cc: { houseNumber: number; streetName: string };
// cc = {
//   streetName: "Fake Street",
//   houseNumber: 123
// };

// cc = {
//   houseNumber: 33
// };

/**
 * (12) Vous pouvez utiliser l'opérateur facultatif (?) pour
 * indique que quelque chose peut ou non être là
 */
// let dd: { houseNumber: number; streetName?: string };
// dd = {
//   houseNumber: 33
// };

// (13) si on veut réutiliser ce type, on peut créer une interface
// interface Address {
//   houseNumber: number;
//   streetName?: string;
//   nom_rue ? : chaîne ;
// }
// // aet y faire référence par son nom
// soit ee : adresse ={ houseNumber: 33 };

//== UNION & INTERSECTION ==//

/**
 * (14) Union types
 * Parfois, nous avons un type qui peut être l'une de plusieurs choses
 */

// export interface HasPhoneNumber {
//   name: string;
//   phone: number;
// }

// export interface HasEmail {
//   name: string;
//   email: string;
// }

// let contactInfo: HasEmail | HasPhoneNumber =
//   Math.random() > 0.5
//     ? {
//         // we can assign it to a HasPhoneNumber
//         name: "Mike",
//         phone: 3215551212
//       }
//     : {
//         // or a HasEmail
//         name: "Mike",
//         email: "mike@example.com"
//       };

// contactInfo.name; // NOTE:  nous ne pouvons accéder qu'à la propriété .name (ce que HasPhoneNumber et HasEmail ont en commun)


/**
 * (15) Intersection types
 */
// let otherContactInfo: HasEmail & HasPhoneNumber = {
//   // we _must_ initialize it to a shape that's asssignable to HasEmail _and_ HasPhoneNumber
//   name: "Mike",
//   email: "mike@example.com",
//   phone: 3215551212
// };

// otherContactInfo.name; //REMARQUE : nous pouvons accéder à n'importe quoi sur _l'un ou l'autre_ type
// otherContactInfo.email;
// otherContactInfo.phone;

export default {};