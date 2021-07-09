##Docker Command Line Instructions
-Docker build image command
$> docker build -t lab_two:latest .

-Docker run container command
$> docker run -d --rm --name myapp -p 8080:8080 lab_two:latest 

-To Display the website in a browser
http://localhost8080