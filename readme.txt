=== Grid visualizer ===

Plugin Name: Grid visualizer
Plugin URI: https://github.com/danielgroen/wp-grid-visualizer
Description: This is a lightweight plugin that allows you to use a css overlay grid for development purposes
Tags: css, grid, visualizer, visualized, visual, development, dev
Author: Daniel Groen
Author URI: https://danielgroen.nl/
Contributors: specialk
Requires at least: 4.1
Tested up to: 5.5
Stable tag: 20201015
Version: 20201015
Text Domain: grid-visualizer
Domain Path: /languages
License: GPL v2 or later


== Description ==

> Shows a grid over your site which you can customize

This is a lightweight plugin that allows you to use a css overlay grid for development purposes

**Features**

* Show a grid over your site
* Enable the layover by clicking ctrl + ;
* override variables to change the grid


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
**Usage**

1. Enable the plugin
2. override css vars if you want to
3. Happy styling with your grid

== Changelog ==

*Thank you to everyone who shares feedback for Grid visualizer!*

**20201015**

* Inits the project
* Tests on WordPress 5.5

