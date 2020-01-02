import fetch from 'node-fetch';

const baseUrl = 'https://tibiawiki.dev/api';

const toJson = (s: any): object => s.json();

interface ResponseData {
  creatureData: any;
  lootData: any;
}

export async function getCreatureData(creatureName: string): Promise<ResponseData> {
  const formattedCreatureName = toTitleCase(creatureName).replace(' ', '%20');

  const creatureEndpoint = `${baseUrl}/creatures/${formattedCreatureName}`;
  const lootEndpoint = `${baseUrl}/loot/${formattedCreatureName}`;

  const [creatureData, lootData] = await Promise.all([
    fetch(creatureEndpoint).then(toJson),
    fetch(lootEndpoint).then(toJson)
  ]);

  if (creatureData.error || lootData.error) {
    return undefined;
  }

  return {
    creatureData,
    lootData
  };
}

const toTitleCase = (s: string): string => {
  return s
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};
