<?php
/**
* Plugin Name: Grid visualizer
* Description: Visualize your grid for development purposes
* Version: 1.0
* Author: Daniël Groen
* Author URI: https://danielgroen.nl/
**/

// Create the container
add_action( 'wp_footer', function() { 
  echo '<div id="grid-visualizer"></div>'; 
  echo '<div id="grid-visualizer-onboarding"><div class="grid-onboarding-inner">To show the grid-layover, press <span class="primary grid-icon"></span> and <span class="secondary grid-icon"></span> simultaneously.</div></div>';
});

// Load the Assets
add_action('wp_enqueue_scripts', function() {
    wp_enqueue_script('gv-actions-js', plugin_dir_url( __FILE__ ) . '/js/javascript.js');
    wp_enqueue_style('gv-actions-css', plugin_dir_url( __FILE__ ) . '/css/style.css');
});

