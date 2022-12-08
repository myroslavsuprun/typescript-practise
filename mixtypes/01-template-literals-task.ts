export { };


type Style = 'none' | 'dotted' | 'dashed' | 'solid';
type Color = 'Red' | 'Green' | 'Blue' | 'Black' | 'White';
 
// border-style
type BorderStyle = `${Style} ${Lowercase<Color>}`;
 
let borderStyle: BorderStyle = 'solid red';
let borderStyle2: BorderStyle = 'dashed white';