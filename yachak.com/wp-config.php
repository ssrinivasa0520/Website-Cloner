<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

/////////////////////////////////////

// These next few lines are all custom code for this site hosted at CenturyLink

// Require SSL for the login screens

// Place this code near the top of wp-config.php

define('FORCE_SSL_LOGIN', true); //set to false if issues arise
define('FORCE_SSL_ADMIN', true); //set to false if issues arise

if ($_SERVER['HTTP_X_SSL'] == 1){
    $_SERVER['HTTPS']='on';
                $https_indicator='s';
} else {

    $_SERVER['HTTPS']='off';
                $https_indicator='';
}


// make the fully-qualified URLs generated by Wordpress show the appropriate domain
define('WP_SITEURL', 'http' . $https_indicator . '://' . $_SERVER['HTTP_HOST']);
define('WP_HOME', 'http' . $https_indicator . '://' . $_SERVER['HTTP_HOST']);


// solve for Qualys Web Application Scan vulnerability: Framable Page

header("X-Frame-Options: SAMEORIGIN");



// end of custom code

/////////////////////////////////////

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', '#{DATABASE}#' );

/** MySQL database username */
define( 'DB_USER', '#{USERNAME}#' );

/** MySQL database password */
define( 'DB_PASSWORD', '#{PASSWORD}#' );

/** MySQL hostname */
define( 'DB_HOST', '#{HOST}#' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'N8N,tca|opwuXoM59>q/!ED|r@UO@qXXwn[J`DQSMh,<}EX6_{Ehq*I?Pp!4{*uM' );
define( 'LOGGED_IN_KEY',    '$HcKa,^P]<?^:Q,n35$^w>;OASd;E3))M%HHtxhd)1^f7fNt:/g|>{%]CMK0AR4`' );
define( 'NONCE_KEY',        'G0&+XQ|? 9b&{n69#H&2:`aM0V(8 4tNjwz9oThTXSrEN*e!WAVNs8zYNnHv7eVU' );
define( 'AUTH_SALT',        '$6~l3q5%6$)Aj/iBxf^C_{EmQzNKgZ T0&2{9s)BwAyAuGX/kqR,q}?bY9o|S~mf' );
define( 'SECURE_AUTH_SALT', 'F7lfW/h]cDgC@Ek[MNvL$$G%y8eUT1=8BlG,&Bu#?Wdni$p49}%CkTfeuO7.ac_e' );
define( 'LOGGED_IN_SALT',   ',$w)i_}snR?c(^.`h-BuW|6@+o;kzWTKkneY),Dhrx$Zk,y?@8lvS-e]l;1K&;>h' );
define( 'NONCE_SALT',       'z$G,T$iFs(IjxS#rC[WIpAfA|_88(B/hyX0fuRhNpk+MNx21!al3[<96tN~l$~xR' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );
define('WP_HOME','https://www.yachak.com');
define('WP_SITEURL','https://www.yachak.com');
define('WP_AUTO_UPDATE_CORE', false);

define('WP_MEMORY_LIMIT', '400M');
define( 'WP_MAX_MEMORY_LIMIT', '456M' );
@ini_set( 'max_input_vars' , 3000 );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
