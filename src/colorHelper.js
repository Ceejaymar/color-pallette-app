import chroma from 'chroma-js';

const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

const generatePalette = (starterPalette) => {
  const newPalette = {
    paletteName: starterPalette.paletteName,
    id: starterPalette.id,
    emoji: starterPalette.emoji,
    colors: {},
  };

  levels.forEach((level) => {
    newPalette.colors[level] = [];
  });

  const getRange = (hexColor) => {
    const endColor = '#fff';

    return [
      chroma(hexColor).darken(1.4).hex(),
      hexColor,
      endColor,
    ];
  };

  const generateScale = (hexColor, numOfColors) => (
    chroma.scale(getRange(hexColor)).mode('lab').colors(numOfColors)
  );

  starterPalette.colors.forEach((color) => {
    const scale = generateScale(color.color, 10).reverse();
    for (let i = 0; i < scale.length; i += 1) {
      newPalette.colors[levels[i]].push({
        name: `${color.name} ${levels[i]}`,
        id: color.name.toLowerCase().replace('/ /g', '-'),
        hex: scale[i],
        rgb: chroma(scale[i]).css(),
        rgba: chroma(scale[i]).css().replace('rgb', 'rgba').replace(')', ',1.0)'),
        hsl: chroma(scale[i]).css('hsl'),
      });
    }
  });
  return newPalette;
};

export { generatePalette };
