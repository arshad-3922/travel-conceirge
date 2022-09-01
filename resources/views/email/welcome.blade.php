<!DOCTYPE html>
<html>
<head>
    <title>Welcome Email</title>
</head>
<body>
<h2>Welcome to the WWS {{ $data['email'] }}</h2>
<br/>
<center>Your Login Credential Are:</center>
<br/>
<center><h2>Email : {{ $data['email'] }}</h2></center>
<center><h2>Password : {{ $data['password'] }}</h2></center>    
<br>
<center>Please use this above credential to log in to your account</center>
<br>
<br>
<p>Thanks</p>
<h5>WWS - World Wide Shop</h5>
</body>
</html>
