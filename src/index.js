module.exports = function toReadable (number) {
  let strReadable = '';
  if (number > 0) {
    let cent = Math.floor(number / 100);
    if (cent > 0) {
      if (number % 100 > 0) {
        strReadable += numberSwitcher(cent) + ' hundred ';
      } else {
        strReadable += numberSwitcher(cent) + ' hundred';
      }
    }
    if (number % 100 <= 19) {
      return strReadable += numberSwitcher(number % 100);
    } else if (number % 10 === 0) {
      return strReadable += numberSwitcher(number % 100 - number % 10);
    } else {
      return strReadable += numberSwitcher(number % 100 - number % 10) + ' ' + numberSwitcher(number % 10);
    }
  } else {
    strReadable = 'zero';
    return strReadable;
  }
};

const numberSwitcher = (num) => {
  switch (num) {
    case 0:
      return '';
    case 1:
      return 'one';
    case 2:
      return 'two';
    case 3:
      return 'three';
    case 4:
      return 'four';
    case 5:
      return 'five';
    case 6:
      return 'six';
    case 7:
      return 'seven';
    case 8:
      return 'eight';
    case 9:
      return 'nine';
    case 10:
      return 'ten';
    case 11:
      return 'eleven';
    case 12:
      return 'twelve';
    case 13:
      return 'thirteen';
    case 14:
      return 'fourteen';
    case 15:
      return 'fifteen';
    case 16:
      return 'sixteen';
    case 17:
      return 'seventeen';
    case 18:
      return 'eighteen';
    case 19:
      return 'nineteen';
    case 20: 
      return 'twenty';
    case 30:
      return 'thirty';
    case 40:
      return 'forty';
    case 50:
      return 'fifty';
    case 60:
      return 'sixty';
    case 70:
      return 'seventy';
    case 80:
      return 'eighty';
    case 90:
      return 'ninety';
  }
};
