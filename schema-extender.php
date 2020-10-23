<?php
/**
* Plugin Name: Grid visualizer
* Description: Visualize your grid for development purpouses
* Version: 1.0
* Author: Daniël Groen
* Author URI: https://danielgroen.nl/
**/

// Create the container
add_action( 'wp_footer', function() { 
  echo '<div id="grid-visualizer"></div>'; 
  echo '<input type="checkbox" id="grid-switch">'; 
  echo '<div id="grid-visualizer-onboarding"><div class="grid-onboarding-inner">To show the grid-layover, press <span class="primary grid-icon"></span> and <span class="secondary grid-icon"></span> simultaneously or by clicking on this toggle.</div></div>';
});

// Load the Assets
add_action('wp_enqueue_scripts', function() {
    wp_enqueue_script('gv-actions-js', plugin_dir_url( __FILE__ ) . '/js/javascript.js');
    wp_enqueue_style('gv-actions-css', plugin_dir_url( __FILE__ ) . '/css/style.css');
});


function myplugin_deactivate() {
  echo "<script type=\"text/javascript\">
          localStorage.setItem('grid', 'invisible');
          localStorage.setItem('grid-onboarding', true);
        </script>";
}
register_deactivation_hook( __FILE__, 'myplugin_deactivate' );

