<?php

namespace App;

if ( is_plugin_active( 'wordpress-helfi-hds-wp/hds-wp.php' ) ) {
    add_action( 'after_setup_theme', __NAMESPACE__ . '\\declare_hds_wp_theme_support', 10 );

    add_action( 'wp_head', __NAMESPACE__ . '\\inline_hds_wp_color_scheme' );
    add_action( 'admin_head', __NAMESPACE__ . '\\inline_hds_wp_color_scheme' );

    add_action( 'wp_enqueue_scripts', __NAMESPACE__ . '\\enqueue_hds_wp_public_styles', 101 );
    add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\\enqueue_hds_wp_editor_styles', 101 );
}

function declare_hds_wp_theme_support(): void {
    add_theme_support(
        'hds-wp',
        array(
            'assets' => array(
                'scripts' => true,
                'styles' => true,
                'fonts' => true,
                'favicon' => true,
            ),
            'widgets' => true,
            'blocks' => true,
            'cpt' => array(
                'faq' => true,
            ),
        )
    );
}

function enqueue_hds_wp_public_styles(): void {
    wp_enqueue_style('testbed-hds-wp', asset('styles/hds-wp.css')->uri(), ['sage/app.css'], null);
}

function enqueue_hds_wp_editor_styles(): void {
    wp_enqueue_style('testbed-hds-wp', asset('styles/hds-wp.css')->uri(), false, null);
}

function inline_hds_wp_color_scheme(): void {
?>
<style>
:root {
    --primary-color: #c2a251;
    --primary-color-light: #f7f2e4;
    --primary-color-medium: #e8d7a7;
    --primary-color-dark: #9e823c;
    --primary-content-color: #1a1a1a;
    --primary-content-secondary-color: #ffffff;
    --secondary-color: #e8f3fc;
    --secondary-content-color: #1a1a1a;
    --accent-color: #fd4f00;
}
</style>
<?php
}
