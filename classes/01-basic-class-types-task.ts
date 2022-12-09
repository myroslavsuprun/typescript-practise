export class Rectangle {
  constructor(public width: number, public height: number) {
    this.log();
  }
 
  area(): number {
    return this.height * this.width;
  }
 
  private log(): void {
    console.log(`new Rectangle was create at ${new Date()}`)
  }
}
 
class Square extends Rectangle {
  constructor(public width: number, public color: string) {
    super(width, width);
  }
 
  paint(newColor: typeof this.color): void {
    this.color = newColor;
  }
}

const square = new Square(2, 'black');