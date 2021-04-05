const {toBin, toOct, toHex} = require('./boh.js');

test('2 em binário é igual a 10',()=>{ expect( toBin(2) ).toBe('10'); } );
test('8 em octal é igual a 10',()=>{ expect( toOct(8) ).toBe('10'); } );
test('16 em hexadecimal é igual a 10', ()=>{ expect( toHex(16) ).toBe('10'); } );
