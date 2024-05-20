export function getTextColor(backColorHex) {

    let r = parseInt(backColorHex.substring(0,2),16) / 255;
    let g = parseInt(backColorHex.substring(2,4),16) / 255;
    let b = parseInt(backColorHex.substring(4,6),16) / 255;

    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, l = (max + min) / 2;
    if (max === min) {
        h = 0;
    } else {
        var d = max - min;
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
            default: break;
            }
        h /= 6;
    }

    if ((h<0.55 && l>=0.5) || (h>=0.55 && l>=0.75)) {
        return '#000000';
    } else {
        return '#FFFFFF';
    }

  }
