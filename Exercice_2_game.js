import { of } from 'rxjs';
import { filter, map } from 'rxjs/operators';

const users = [
    { id: 1, name: 'alan', score: 50 },
    { id: 2, name: 'albert', score: 150 },
    { id: 3, name: 'xavier', score: 0 },
    { id: 4, name: 'benoit', score: 5 },
    { id: 5, name: 'phil', score: 17 },
    { id: 6, name: 'sophie', score: 45 },
    { id: 7, name: 'stephan', score: 900 },
    { id: 8, name: 'elie', score: 178 },
    { id: 9, name: 'tony', score: 15 },
    { id: 10, name: 'robert', score: 11 },
    { id: 11, name: 'gerard', score: 8 },
    { id: 12, name: 'sandra', score: 6 },
    { id: 13, name: 'caroline', score: 23 }
];

// Créez un Observable à partir de la liste d'utilisateurs 
const usersObservable = of(users)
  .pipe(
    // Triez les utilisateurs par ordre décroissant du score
    map(users => users.sort((a, b) => b.score - a.score)),

    // Filtrer les scores supérieurs à 100 = afficher que ceux supp
    map(users => users.filter(user => user.score > 100)),

    // Mettez la première lettre des users en majuscule
    // -> les trois points de suspension = propre à RxJS pour lister les éléments d'une liste ou d'un tableau
    // -> ça s'appelle "spread operator"
    map(users => users.map(user => ({ ...user, name: user.name.charAt(0).toUpperCase() + user.name.slice(1) })))
  );

// Souscrivez à l'Observable
usersObservable.subscribe({
  next: user => console.log('Liste des utilisateurs répondant à tous les critères :', user),
  complete: () => console.log('La liste est maintenant vide')
});