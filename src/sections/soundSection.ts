export function compileSounds(monster, useRevScriptSys = true) {
  return useRevScriptSys ? compileSoundsRevScriptSys(monster) : compileSoundsXml(monster);
}

const defaultInterval = 5000;
const defaultChance = 10;
const defaultYell = false;

function compileSoundsRevScriptSys(monster) {
  let sounds = `monster.voices = {\n\tinterval = ${defaultInterval},\n\tchance = ${defaultChance},\n`;

  monster.sounds.forEach(sound => {
    sounds += `\t{text = "${sound}", yell = ${defaultYell}},\n`;
  });
  sounds += '}\n';

  return sounds;
}

function compileSoundsXml(monster) {
  let sounds = `<voices interval=${defaultInterval} chance=${defaultChance}>\n`;

  monster.sounds.forEach(sound => {
    sounds += `\t<voice sentence="${sound}" />\n`;
  });

  sounds += '</voices>\n';

  return sounds;
}

/*
<voices interval="5000" chance="10">
		<voice sentence="Yeeee ha!" />
		<voice sentence="Your head shall be mine!" />
		<voice sentence="Your head will be mine!" />
	</voices>

*/

/*
	<loot>
		<item id="2050" chance="1005" /><!-- torch -->
		<item name="crystal necklace" chance="287" />
		<item name="small ruby" chance="161" />
		<item name="gold coin" countmax="20" chance="40000" />
		<item id="2229" countmax="2" chance="80000" /><!-- skull -->
		<item name="dagger" chance="80000" />
		<item name="sabre" chance="23000" />
		<item name="brown bread" chance="30333" />
		<item name="girlish hair decoration" chance="10000" />
		<item name="protective charm" chance="5000" />
	</loot>
*/
