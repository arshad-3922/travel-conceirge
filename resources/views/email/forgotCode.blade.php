<!DOCTYPE html>
<html>
<head>
    <title>Forgot Password Email</title>
</head>

<body>
<h2>Welcome to the World Wide Shop {{ $user->email }}</h2>
<br/>
<center>Here is the new code for password upon your request:</center>
<br/>
<br/>
<center><h1>{{ $user->code }}</h1></center>
<br>
<br>
<center>Please use this new code for Reset password to log in to your account</center>
<br>
<br>
<p>Thanks</p>
<p>WWS - World Wide Shop</p>
</body>
</html>
