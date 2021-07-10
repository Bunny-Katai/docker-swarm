Docker Command Line Instructions

-Docker build image command
$> docker build -t lab3:latest .

-Deploy stack 
$> docker stack deploy -c docker-compose.yaml lab3-stack

-Scale out first stack to 7 instances/replicas
$> docker services scale lab3-stack_serviceOne=7

-Remove stack and delete containers
$> docker stack rm lab3-stack

-To Display the website in a browser
http://localhost:8080 for docker container 

http://localhost:3000 (serviceOne) for local machine

http://localhost:3001 (serviceTwo) for local machine
