import { Dot } from './dot.model';
import { Line } from './line.model';

export class Rectangular {

  dot() {
    let obj1 = new Dot(2, 2);
    let obj2 = new Dot(8, 2);
    let obj3 = new Dot(2, 4);
    let obj4 = new Dot(8, 4);
    let obj5 = new Line(obj1, obj2);
    let obj6 = new Line(obj2, obj3);
    let obj7 = new Line(obj3, obj4);
    let obj8 = new Line(obj4, obj1);
  }
}