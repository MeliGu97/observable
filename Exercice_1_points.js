import { of } from "rxjs";
import { max } from "rxjs/operators"

// Liste de points
const source = of(
    { x: 10.5, y: -10.6 },
    { x: 5.5, y: 8.3 },
    { x: -7.3, y: 3.3 },
    { x: 8.9, y: -2.6 }
);

// Fonction pour calculer la distance d'un point par rapport à O(0,0)

const calculateDistance = point => Math.sqrt(point.x ** 2 + point.y ** 2);
console.log("toto:");

// Opérateur max() pour trouver le point le plus éloigné
source.pipe(
    max((point1, point2) => {
        const distance1 = calculateDistance(point1);
        const distance2 = calculateDistance(point2);
        return distance1 - distance2;
    })
).subscribe(maxPoint => {
    console.log("Le point le plus éloigné est :", maxPoint);
});