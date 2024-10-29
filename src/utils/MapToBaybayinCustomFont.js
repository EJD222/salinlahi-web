// Baybayin character map
const baybayinCharacterList = {
    'A': '\u0041', 'B': '\u0042', 'D': '\u0044', 'E': '\u0045', 'G': '\u0047',
    'H': '\u0048', 'I': '\u0049', 'K': '\u004B', 'L': '\u004C', 'M': '\u004D',
    'N': '\u004E', 'O': '\u004F', 'P': '\u0050', 'R': '\u0052', 'S': '\u0053',
    'T': '\u0054', 'U': '\u0055', 'a': '\u0061', 'b': '\u0062', 'd': '\u0064',
    'e': '\u0065', 'g': '\u0067', 'h': '\u0068', 'i': '\u0069', 'k': '\u006B',
    'l': '\u006C', 'm': '\u006D', 'n': '\u006E', 'o': '\u006F', 'p': '\u0070',
    'r': '\u0072', 's': '\u0073', 't': '\u0074', 'u': '\u0075', 'w': '\u0077',
    'y': '\u0079', 'BA': '\uF000', 'ba': '\uF003', 'BE': '\uF001', 'be': '\uF002',
    'bi': '\uF004', 'BI': '\uF005', 'bo': '\uF006', 'BO': '\uF007', 'BU': '\uF007',
    'bu': '\uF03B', 'ka': '\uF008', 'ke': '\uF009', 'ki': '\uF00A', 'ko': '\uF00B',
    'ku': '\uF00C', 'da': '\uF00D', 'ra': '\uF00E', 'de': '\uF00F', 're': '\uF010',
    'di': '\uF011', 'ri': '\uF012', 'do': '\uF013', 'ro': '\uF014', 'du': '\uF015',
    'ru': '\uF016', 'ga': '\uF017', 'ge': '\uF018', 'gi': '\uF019', 'go': '\uF01A',
    'gu': '\uF01B', 'ha': '\uF01C', 'he': '\uF01D', 'hi': '\uF01E', 'ho': '\uF01F',
    'hu': '\uF020', 'la': '\uF021', 'le': '\uF022', 'li': '\uF023', 'lo': '\uF024',
    'lu': '\uF025', 'ma': '\uF026', 'me': '\uF027', 'mi': '\uF028', 'mo': '\uF029',
    'mu': '\uF02A', 'na': '\uF02B', 'ne': '\uF02C', 'ni': '\uF02D', 'no': '\uF02E',
    'nu': '\uF02F', 'ng': '\uF030', 'nga': '\uF031', 'nge': '\uF032', 'ngi': '\uF033',
    'ngo': '\uF034', 'ngu': '\uF035', 'pa': '\uF036', 'pe': '\uF037', 'pi': '\uF038',
    'po': '\uF039', 'pu': '\uF03A', 'sa': '\uF03C', 'se': '\uF03D', 'si': '\uF03E',
    'so': '\uF03F', 'su': '\uF040', 'ta': '\uF041', 'te': '\uF042', 'ti': '\uF043',
    'to': '\uF044', 'tu': '\uF045', 'wa': '\uF046', 'we': '\uF047', 'wi': '\uF048',
    'wo': '\uF049', 'wu': '\uF04A', 'ya': '\uF04B', 'ye': '\uF04C', 'yi': '\uF04D',
    'yo': '\uF04E', 'yu': '\uF04F', ',': '\u002C', '.': '\u002E', '!': '\u002E',
    '?': '\u002E', '-': '', ' ': ' ', // Preserve spaces
  };
  
  // Convert a string to Baybayin
  const mapToBaybayinCustomFont = (input) => {
    let baybayinString = '';
    let i = 0;
    const length = input.length;
  
    while (i < length) {
      let found = false;
  
      // Check for three-character combinations first
      if (i + 3 <= length) {
        const tripleChar = input.substring(i, i + 3).toLowerCase();
        if (baybayinCharacterList[tripleChar]) {
          baybayinString += baybayinCharacterList[tripleChar];
          i += 3;
          found = true;
        }
      }
  
      // Check for two-character combinations
      if (!found && i + 2 <= length) {
        const doubleChar = input.substring(i, i + 2).toLowerCase();
        if (baybayinCharacterList[doubleChar]) {
          baybayinString += baybayinCharacterList[doubleChar];
          i += 2;
          found = true;
        }
      }
  
      // Check for single-character mappings
      if (!found && i + 1 <= length) {
        const singleChar = input.substring(i, i + 1);
        if (baybayinCharacterList[singleChar]) {
          baybayinString += baybayinCharacterList[singleChar];
        } else {
          baybayinString += singleChar; // Preserve characters not in the map
        }
        i++;
      }
    }
  
    return baybayinString;
  };
  
  // Export the function to use in other components
  export { mapToBaybayinCustomFont };
  