const ot = require("opentype.js");
const handleInput = require('./utils/handle_input');
const getDict = require('./utils/getDict.js');
const path = require('path');
const INPUT_FILE = './input';

// let fontFile = fse.readFileSync('/Users/haoweisun/Desktop/ui/每日福利/HYYakuHei-75.otf'); 
ot.load('./test/font/FZLTCHJW.TTF', function(err, font) {
  if (err) {
      alert('Could not load font: ' + err);
  } else {
    const ps = handleInput(path.join(process.cwd(), INPUT_FILE));
    const dict = getDict(font);

    function saveFont (fileContent) {
      let _glyphs = []
      fileContent.toString().split('').forEach(char => {
        let unicode = char.codePointAt();
        _glyphs.push(dict[unicode]);
      });

      
      var _newFont = new ot.Font({
        familyName : 'OpenTypeSans',
        styleName: 'Medium',
        unitsPerEm: 1000,
        ascender: 800,
        descender: -200,
        glyphs: _glyphs
      })
      try{
        _newFont.download();
      } catch(e) {
        console.error(e)
      }
    }

    ps.then(saveFont)
    
  }
});
console.log(`获取到了`)
