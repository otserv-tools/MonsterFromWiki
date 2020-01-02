# MonsterFromWiki

## Generate loot based on wiki data

Data is taken from [TibiaWikiApi](https://github.com/benjaminkomen/TibiaWikiApi) by [benjaminkomen](https://github.com/benjaminkomen).

### Running instructions

1. Run `git clone git@github.com:otserv-tools/MonsterFromWiki.git`.

2. Navigate to the project directory and run `npm install`.

3. Add creature `XML` files in `./creatures`. The name of the file must be the name of the creature. Capitalization does not matter, but words must be separated by spaces. Only `XML` files are supported.

4. Execute

```
ts-node src/main.ts
```

3. The script will insert `<loot>...</loot>` into each `XML` file, **unless**:
   - The creature already has `<loot>` tags.
   - The API does not contain loot information for the creature.

### Options
```
-f, --creaturefolder <folder>    The folder where creature files are stored.
-r, --userevscriptsys            Handles creatures in revscriptsys format instead of XML format.
-h, --help                       Shows this help text.
```

### Examples of file naming
#### Valid names:

```lua
Demon.xml
DEMON.xml
Cave Rat.xml
cave rat.xml
```

#### Invalid names:

```lua
cave_rat.xml
cave-rat.xml
```
