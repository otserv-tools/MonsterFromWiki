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

### Example of how file changes after running

#### Before
```xml
<?xml version="1.0" encoding="ISO-8859-1"?>
<monster name="Amazon" nameDescription="an amazon" race="blood" experience="60" speed="86" manacost="390">
	<health now="110" max="110"/>
	<look type="137" head="113" body="120" legs="95" feet="115" corpse="20323"/>
	<targetchange interval="4000" chance="10"/>
	<flags>
		<flag summonable="1"/>
		<flag attackable="1"/>
		<flag hostile="1"/>
		<flag illusionable="1"/>
		<flag convinceable="1"/>
		<flag pushable="0"/>
		<flag canpushitems="1"/>
		<flag canpushcreatures="0"/>
		<flag targetdistance="4"/>
		<flag staticattack="90"/>
		<flag runonhealth="0"/>
		<flag canwalkonenergy="0"/>
		<flag canwalkonfire="0"/>
		<flag canwalkonpoison="0"/>
	</flags>
	<attacks>
		<attack name="melee" interval="2000" min="0" max="-45"/>
		<attack name="physical" interval="2000" chance="15" range="5" min="0" max="-40">
			<attribute key="shootEffect" value="throwingknife"/>
		</attack>
	</attacks>
	<defenses armor="10" defense="10"/>
	<elements>
		<element physicalPercent="-5"/>
		<element deathPercent="-5"/>
	</elements>
	<voices interval="5000" chance="10">
		<voice sentence="Yeeee ha!"/>
		<voice sentence="Your head shall be mine!"/>
		<voice sentence="Your head will be mine!"/>
	</voices>
</monster>
```

#### After
```xml
<?xml version="1.0" encoding="ISO-8859-1"?>
<monster name="Amazon" nameDescription="an amazon" race="blood" experience="60" speed="86" manacost="390">
	<health now="110" max="110"/>
	<look type="137" head="113" body="120" legs="95" feet="115" corpse="20323"/>
	<targetchange interval="4000" chance="10"/>
	<flags>
		<flag summonable="1"/>
		<flag attackable="1"/>
		<flag hostile="1"/>
		<flag illusionable="1"/>
		<flag convinceable="1"/>
		<flag pushable="0"/>
		<flag canpushitems="1"/>
		<flag canpushcreatures="0"/>
		<flag targetdistance="4"/>
		<flag staticattack="90"/>
		<flag runonhealth="0"/>
		<flag canwalkonenergy="0"/>
		<flag canwalkonfire="0"/>
		<flag canwalkonpoison="0"/>
	</flags>
	<attacks>
		<attack name="melee" interval="2000" min="0" max="-45"/>
		<attack name="physical" interval="2000" chance="15" range="5" min="0" max="-40">
			<attribute key="shootEffect" value="throwingknife"/>
		</attack>
	</attacks>
	<defenses armor="10" defense="10"/>
	<elements>
		<element physicalPercent="-5"/>
		<element deathPercent="-5"/>
	</elements>
	<voices interval="5000" chance="10">
		<voice sentence="Yeeee ha!"/>
		<voice sentence="Your head shall be mine!"/>
		<voice sentence="Your head will be mine!"/>
	</voices>
<loot>
	<item name="Girlish Hair Decoration" chance="9903" />
	<item name="Small Ruby" chance="123" />
	<item name="Brown Bread" chance="29527" />
	<item name="Torch" chance="1010" />
	<item name="Protective Charm" chance="5240" />
	<item name="Gold Coin" chance="40126" countmax="20" />
	<item name="Sabre" chance="23150" />
	<item name="Skull" chance="79975" countmax="2" />
	<item name="Dagger" chance="80089" />
	<item name="Crystal Necklace" chance="255" />
</loot>
</monster>
```

