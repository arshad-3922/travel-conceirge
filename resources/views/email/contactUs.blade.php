<!DOCTYPE html>
<html>
<head>
    <title>Contact Us Email</title>
</head>

<body>
<h2>Hi Admin {{ $data['email'] }}</h2>
<br/>
<p>Has sent you a query through contact us.</p>
<p>Name: {{ $data['name'] }}</p>
<p>Message: {{ $data['message'] }}</p>
<br/>
<br/>
<br>
<br>
<p>Thanks</p>
<p>WWS - World Wide Shop</p>
</body>
</html>