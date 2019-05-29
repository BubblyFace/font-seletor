const ot = require("opentype.js");
const path = require('path');

const handleInput = require('../utils/handle_input');
const getDict = require('../utils/getDict.js');

module.exports = function(options) {
  let [fontPath, inputPath, savePath] = options;

  ot.load(fontPath, function(err, font) {
    if (err) {
        console.error('Could not load font: ' + err);
    } else {
      const ps = handleInput(path.join(process.cwd(), inputPath));
      const dict = getDict(font);

      let { ascender, descender, unitsPerEm, styleName } = font;
      ps.then(saveFont)

      function saveFont (fileContent) {
        let _glyphs = []
        fileContent.toString().split('').forEach(char => {
          let unicode = char.codePointAt();
          _glyphs.push(dict[unicode]);
        });
  
        var _newFont = new ot.Font({
          familyName : savePath,
          styleName: styleName || 'Medium',
          unitsPerEm: unitsPerEm,
          ascender: ascender,
          descender: descender,
          glyphs: _glyphs
        })
        try{
          _newFont.download();
        } catch(e) {
          console.error(e)
        }
      }
    }
  });
}
