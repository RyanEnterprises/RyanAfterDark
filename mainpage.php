<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CookieLand</title>
</head>
<body>
    <h1>CookieLand</h1>
    <h2>Free Cookies for Everyone!</h2>
    <p>
        <?php
            if (isset($_COOKIE['visits'])) {
                echo "You have visited this page " . $_COOKIE['visits'] . " times.";
            } else {
                echo "You have not visited this page before.";
            }
        ?>
    </p>
    <p>
        <a href="mainpage.php">Back to main page</a>
    </p>
    $_COOKIE['visits'] = $_COOKIE['visits'] + 1;
    setcookie('visits', $_COOKIE['visits']);
    $_COOKIE['visits'] = $_COOKIE['visits'] + 1;
    setcookie('visits', $_COOKIE['visits']);
    $_COOKIE['visits'] = $_COOKIE['visits'] + 1;
    setcookie('visits', $_COOKIE['visits']);
    $_COOKIE['visits'] = $_COOKIE['visits'] + 1;
    setcookie('visits', $_COOKIE['visits']);
    $_COOKIE['visits'] = $_COOKIE['visits'] + 1;
    setcookie('visits', $_COOKIE['visits']);
    $_COOKIE['visits'] = $_COOKIE['visits'] + 1;
    setcookie('visits', $_COOKIE['visits']);
    $_COOKIE['visits'] = $_COOKIE['visits'] + 1;
    setcookie('visits', $_COOKIE['visits']);
    $_COOKIE['visits'] = $_COOKIE['visits'] + 1;
    setcookie('visits', $_COOKIE['visits']);
    $_COOKIE['visits'] = $_COOKIE['visits'] + 1;
    setcookie('visits', $_COOKIE['visits']);
    $_COOKIE['visits'] = $_COOKIE['visits'] + 1;
    setcookie('visits', $_COOKIE['visits']);
    $_COOKIE['visits'] = $_COOKIE['visits'] + 1;
    setcookie('visits', $_COOKIE['visits']);
    $_COOKIE['visits'] = $_COOKIE['visits'] + 1;
    setcookie('visits', $_COOKIE['visits']);


</body>
</html>