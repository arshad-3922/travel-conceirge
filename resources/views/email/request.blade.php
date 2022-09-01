<!DOCTYPE html>
<html>
<head>
    <title>Contact Us Email</title>
</head>

<body>
<h2>Hi Admin {{ $data['email'] }}</h2>
<br/>
<p>Has sent you a query through contact us.</p>
<p>First Name: {{ $data['first_name'] }}</p>
<p>Last Name: {{ $data['last_name'] }}</p>
<p>Phone Number: {{ $data['phone_number'] }}</p>
<p>Contact Method: {{ $data['contact_method'] }}</p>
<p>Contact Day: {{ $data['contact_day'] }}</p>
<p>Contact Time: {{ $data['contact_time'] }}</p>
<p>Message: {{ $data['message'] }}</p>
<br>
<br>
<p>Thanks</p>
<p>Apto Beauty</p>
</body>
</html>