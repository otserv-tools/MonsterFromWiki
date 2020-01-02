import { writeFile } from 'fs';
import { getCreatureData } from './endpoint';
import { Config } from './types';
import { parse as parsePath } from 'path';
import { compileLoot } from './sections/lootSection';

export const parseCreatureData = (config: Config, file: string) => async (_, data: string) => {
  const insertIndex = data.indexOf('</monster>');
  const creatureName = parsePath(file).name;

  const hasLoot = data.indexOf('<loot>') !== -1;
  if (hasLoot) {
    console.log(`[SKIPPING] Creature ${creatureName} (in ${file}) already has loot.`);
    return;
  }

  const { creatureData, lootData } = await getCreatureData(creatureName);

  const compiledLoot = compileLoot(creatureData, lootData, config.useRevScriptSys);

  if (compiledLoot === '') {
    console.log(`[SKIPPING] The database does not have loot information for ${creatureName} (in ${file}).`);
    return;
  }

  const code = splice(data, insertIndex, 0, compiledLoot);

  writeFile(file, code, () => console.log(`Finished Parsing '${file}'.`));
};

function splice(s: string, idx: number, rem: number, str: string) {
  return s.slice(0, idx) + str + s.slice(idx + Math.abs(rem));
}
