<?php

// Connect to MySQL
$host = "localhost";
$user = "X30397745";
$password = "X30397745";
$dbname = "X30397745";
$db = new mysqli($host, $user, $password, $dbname);
if ($db->connect_error) 
{
     die("Connection Failed: " . $db->connect_error);
}

// Clean up the given query (delete leading and trailing whitespace)

$search = $_REQUEST['query'];
trim($search);
$query = 'SELECT * FROM ' . $dbname . '.products WHERE Category = "' . $search . '";';
// print "The query is: " . $query;
// Execute the query

$result = $db->query($query);
if (!$result) {
    print "Error - the query could not be executed";
    $error = mysql_error();
    print "<p>" . $error . "</p>";
    exit;
}

// Display the results in a table

print "<table><caption> <h2> Search Results </h2> </caption>";

if ($result->num_rows > 0) 
{
    // output data of each row
    while($row = $result->fetch_assoc()) 
    {
        print "<tr>";
		print "<td colspan='2'><h3>" . $row["Brand"] . " " . $row["Make"] . " " . $row["Model"] . "</h3></td>";
		print "</tr>";
        print "<tr>";
        print "<td><img src='" . $row["Picture"] . "' alt='Item Picture' / ></td>";
        print "<td> Price: $" . $row["Price"] . "<br /><br /> Button Here </td>";
        print "</tr>";
        print "<tr>";
        print "<td colspan='2'> Details: <br/><br/> " . $row["Details"] . "</td>";
        print "</tr>";
    }
} 
else 
{
    print "<tr><td>No results found</td></tr>";
}

print "</table>";
?>
