 2000  pwd
 2001  docker container run -d --name missao-trybe -p 4545:80 -v /home/lucas/Documentos/trybe-exercicios/m3_Back-End/bloco19_docker_utilizando_containers/dia03_docker_compose/exercicio_01
 2002  docker container run -d --name missao-trybe -p 4545:80 -v /home/lucas/Documentos/trybe-exercicios/m3_Back-End/bloco19_docker_utilizando_containers/dia03_docker_compose/exercicio_01:/usr/local/apache2/htdocs/ httpd:2.4
 2003  docker rm missao-trybe
 2004  docker container stop missao-trybe
 2005  docker rm missao-trybe
 2006  docker container run -d --name missao-trybe -p 4545:80 -v "/home/lucas/Documentos/trybe-exercicios/m3_Back-End/bloco19_docker_utilizando_containers/dia03_docker_compose/exercicio_01:/usr/local/apache2/htdocs/" httpd:2.4
 2007  code .
 2008  docker ps
 2009  docker container inspect ca3e610efc13
 2010  docker container stop missao-trybe
 2011  docker container rm  missao-trybe
 2012  pwd
 2013  docker images
 2014  ac826143758d
 2015  docker rmi ac826143758d
 2016  history > exercicio1.sh
