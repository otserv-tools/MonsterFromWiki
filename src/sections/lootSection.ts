import { LootItem, JsonLootData, JsonLoot } from '../types';

export function compileLoot(lootData: JsonLootData, useRevScriptSys: boolean = false) {
  const { kills, loot } = lootData;

  const itemCountDict = createItemCountDict(loot);
  const lootItems: LootItem[] = [];

  loot
    .filter(_ => _.itemName !== 'Empty')
    .forEach(item => {
      const chance = parseInt(item.times, 10) / parseInt(kills, 10);
      const maxCount = itemCountDict[item.itemName];

      lootItems.push({
        id: item.itemName,
        chance: Math.round(chance * 100000),
        maxCount
      });
    });

  return useRevScriptSys ? compileLootRevScriptSys(lootItems) : compileLootXml(lootItems);
}

function compileLootRevScriptSys(loot: LootItem[]): string {
  let lua = 'monster.loot = {\n';

  loot.forEach(({ id, chance, maxCount }) => {
    lua += `\t{id = "${id}", chance = ${chance}, maxCount = ${maxCount}},\n`;
  });

  lua += '}\n';

  return lua;
}

function compileLootXml(loot: LootItem[]): string {
  let xml = '<loot>\n';

  loot.forEach(({ id, chance, maxCount }) => {
    const countMax = maxCount !== 1 ? `countmax="${maxCount}" ` : '';
    xml += `\t<item name="${id}" chance="${chance}" ${countMax}/>\n`;
  });

  xml += '</loot>\n';

  return xml;
}

function createItemCountDict(loot: JsonLoot[]) {
  return loot.reduce((lookupTable, item) => ({
    ...lookupTable,
    [item.itemName]: parseInt(item.amount?.split('-')[1], 10) || 1
  }));
}
