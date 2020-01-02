export interface LootItem {
  id: string;
  chance: number;
  maxCount: number;
}

export interface JsonLoot {
  itemName: string;
  times: string;
  amount: string;
  total: string;
}

export interface JsonLootData {
  kills: string;
  name: string;
  loot: JsonLoot[];
}

export interface MonsterData {
  loot: [LootItem];
}

export interface Config {
  useRevScriptSys: boolean;
  creatureFolder: string;
  help: boolean;
}
