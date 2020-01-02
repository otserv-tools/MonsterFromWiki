import { readFile } from 'fs';
import glob from 'glob';
import { parseCreatureData } from './parseCreatureData';
import commandLineArgs from 'command-line-args';
import commandLineUsage from 'command-line-usage';
import { Config } from './types';

const creatureFolder = 'creatures';

const optionDefinitions = [
  {
    name: 'creaturefolder',
    alias: 'f',
    type: String,
    defaultOption: true,
    description: 'The folder where creature files are stored.'
  },
  {
    name: 'userevscriptsys',
    alias: 'r',
    type: Boolean,
    description: 'Handles creatures in revscriptsys format instead of XML format.'
  },
  { name: 'help', alias: 'h', type: Boolean, description: 'Shows this help dialog.' }
];

let config: any = commandLineArgs(optionDefinitions);

const sections = [
  {
    header: 'MonsterFromWiki',
    content: 'Generates Monster files from wiki data.'
  },
  {
    header: 'Options',
    optionList: optionDefinitions
  },
  {
    content: 'Project home: {underline https://github.com/otserv-tools/MonsterFromWiki}'
  }
];

if (config.help) {
  const usage = commandLineUsage(sections);
  console.log(usage);
} else {
  console.log('hmm', config.useRevScriptSys);
  config = {
    creatureFolder: config.creaturefolder || creatureFolder,
    useRevScriptSys: config.userevscriptsys || false
  };
  glob(`./${config.creatureFolder}/**/*.xml`, (_, files) => {
    files.forEach(file => readFile(file, 'utf8', parseCreatureData(config, file)));
  });
}
