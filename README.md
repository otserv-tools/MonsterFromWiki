# Utilities for Open Tibia written in NodeJS

## Generate loot based on wiki data

Data is taken from [TibiaWikiApi](https://github.com/benjaminkomen/TibiaWikiApi) by [benjaminkomen](https://github.com/benjaminkomen).

### Running instructions

1. Add creature `XML` files in `./creatures`. The name of the file must be the name of the creature. Capitalization does not matter, but words must be separated by spaces. Only `XML` files are supported.

Valid names:

```lua
Demon.xml
DEMON.xml
Cave Rat.xml
cave rat.xml
```

Invalid names:

```lua
cave_rat.xml
cave-rat.xml
```

2. Execute

```
node main.js
```

3. The script will insert `<loot>...</loot>` into each `XML` file, **unless**:
   - The creature already has `<loot>` tags.
   - The API does not contain loot information for the creature.
