# gitinfo-brunch

Adds git information about your build to a JSON file.

## Usage
Install the plugin via npm with `npm install --save gitinfo-brunch`.

Or, do manual install:

* Add `"gitinfo-brunch": "x.y.z"` to `package.json` of your brunch app.
  Pick a plugin version that corresponds to your minor (y) brunch version.
* If you want to use git version of plugin, add
`"gitinfo-brunch": "git+https://github.com/KATT/gitinfo-brunch.git"`.

__Note:__ The entry in your `package.json` file must come before any other plugins which process Javascript (such as javascript-brunch).

## Config

```coffee
plugins:
  gitinfo:
    fileName: 'version.json'
    outputDirectory: 'public'
    enabled: true
```
