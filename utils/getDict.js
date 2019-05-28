const ot = require("opentype.js");
module.exports = (font) => {
  const {glyphs, length} = font.glyphs;
  const dict = {};

  for(let i = 0; i < length; i ++ ){
    let glyph = glyphs[i];
    if(glyph && glyph.unicode) {
      let _glyph = new ot.Glyph(Object.assign(glyph, {
        name: glyph.unicode,
      })) 
      dict[glyph.unicode] = _glyph;
    }
  }

  return dict
}