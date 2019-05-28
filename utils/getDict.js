module.exports = (font) => {
  const {glyphs, length} = font.glyphs;
  const dict = {};

  for(let i = 0; i < length; i ++ ){
    let glyph = glyphs[i];
    if(glyph && glyph.unicode) {
      dict[glyph.unicode] = glyph;
    }
  }

  return dict
}