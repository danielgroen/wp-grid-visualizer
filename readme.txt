=== Grid visualizer ===

Plugin Name: Grid visualizer
Plugin URI: https://github.com/danielgroen/wp-grid-visualizer
Description: This is a lightweight plugin that allows you to use a css overlay grid for development purposes
Tags: css, grid, visualizer, visualized, visual, development, dev
Author: Daniel Groen
Author URI: https://danielgroen.nl/
Contributors: Daniel Groen
Requires at least: 4.1
Tested up to: 5.5
Stable tag: 20201015
Version: 20201015
Text Domain: grid-visualizer
License: GPL v2 or later


== Description ==

> Shows a grid over your site which you can customize by clicking `ctrl` + `;`

This is a lightweight plugin that allows you to use a css overlay grid for development purposes

**Features**

* Visualize a grid over your site
* Enable the grid-layover by clicking: ctrl + ;
* Override css-variables to change the grid
* A ready to use css mixin called grid()

**Privacy**

__User Data:__ This plugin does not collect any data.

__Services:__ This plugin does not connect to any third-party locations or services.


== Installation ==

**Installation**

1. Activate the plugin
2. add the following css vars to your own stylesheet:
```
:root {
  --grid-max-width: 'somevalue';
  --grid-count: 'somevalue';
  --grid-gap: 'somevalue';
  --grid-color: 'somevalue';
  --grid-left: 'somevalue';
  --grid-opacity: 'somevalue';
  --grid-zindex: 'somevalue';
  --grid-padding: 'somevalue';

  @media screen and (min-width: 1400px) {
    --grid-count: 'someOtherValue';
  }
}
```
3. optional if you are using scss. link in your stylesheet to the _grid.scss in this plugin. now you can use the mixin.

**Usage**

1. Enable the plugin
2. Override the available css-vars in your own stylesheet
3. Optional: link the _grid.scss in your stylesheet to use the scss mixin @grid()
4. Happy styling with your grid

== Changelog ==

*Thank you to everyone who shares feedback for Grid visualizer!*

**20201015**

* Inits the project
* Tests on WordPress 5.5

