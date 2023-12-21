Success
<br>
<?php
function right($str, $length) {
     return substr($str, -$length);
}

print 'Host: ';
print $_SERVER['HTTP_HOST'];

print "<BR>SSL:'";

if (! isset($_SERVER['HTTP_X_SSL']) ) {
     print 'X-SSL does not exist' . "'";
} else {
     print $_SERVER['HTTP_X_SSL'] . "'";
}

print "<BR>Client IP:'";

if (! isset($_SERVER['HTTP_X_FORWARDED_FOR']) ) {
     print 'X-FORWARDED-FOR does not exist' . "'";
} else {
     print $_SERVER['HTTP_X_FORWARDED_FOR'] . "'";
}

print "<BR>S: ";
print substr(gethostname(),10,5);
?>

