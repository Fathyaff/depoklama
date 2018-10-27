<?php

/**
 * Configuration for database connection
 *
 */

$host       = "localhost:3306";
$username   = "root";
$password   = "rootpw";
$dbname     = "depok_lama";
$dsn        = "mysql:host=$host;dbname=$dbname";
$options    = array(
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
              );
