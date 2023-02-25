<?php

//Carregar estilos e scripts
function carregar_scripts()
{
    wp_enqueue_style('style', get_stylesheet_uri());

    wp_enqueue_style('custom style', get_stylesheet_directory_uri() . '/assets/scss/style.scss' );

    wp_enqueue_style('another custom style', get_stylesheet_directory_uri() . '/assets/css/style.css' );

    wp_enqueue_style('bootstrap', get_stylesheet_directory_uri() . '/assets/node_modules/bootstrap/compiler/css/bootstrap.css', false, '1.1', 'all');

    wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0', array(), null);

    wp_enqueue_script('bootstrap', get_stylesheet_directory_uri() . '/assets/node_modules/bootstrap/dist/js/bootstrap.js', array('jquery'), '1.0.0', true);

    wp_enqueue_script('popper', get_stylesheet_directory_uri() . '/assets/node_modules/@popperjs/core/dist/umd/popper.js', array('jquery'), '1.0.0', true);

    wp_enqueue_script('ajax', 'https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js', array('jquery'), '1.0.0', true);

    wp_enqueue_script('script', get_stylesheet_directory_uri() . '/assets/js/script.js', array('jquery'), '1.0', true);
}
add_action('wp_enqueue_scripts', 'carregar_scripts');

//Carregar Font Awesome
if (!function_exists('fa_custom_setup_kit')) {
    function fa_custom_setup_kit($kit_url = '')
    {
        foreach (['wp_enqueue_scripts'] as $action) {
            add_action(
                $action,
                function () use ($kit_url) {
                    wp_enqueue_script('font-awesome-kit', $kit_url, [], null, true);
                }
            );
        }
    }
}
fa_custom_setup_kit('https://kit.fontawesome.com/7a1245fc75.js');

//Imagens destacadas nos posts
function imagens_destacadas()
{
    add_theme_support('post-thumbnails');
}
add_action('after_setup_theme', 'imagens_destacadas');
