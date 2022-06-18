# sanity-plugin-remove-bg-converter

## Installation

```
npm install --save sanity-plugin-remove-bg-converter
```

or

```
yarn add sanity-plugin-remove-bg-converter
```

## Usage
Add it as a plugin in sanity.config.ts (or .js):

```
 import {createConfig} from 'sanity'
 import {myPlugin} from 'sanity-plugin-remove-bg-converter'

 export const createConfig({
     /...
     plugins: [
         myPlugin({})
     ]
 })
```
## License

MIT © Rein Undheim
See LICENSE