# SocketIO & ReactJS Simple Chat

#### Requirements:

- For mac users, download: [Docker Mac](https://docs.docker.com/docker-for-mac/install/)
- For windows users, download: [Docker Windows](https://docs.docker.com/desktop/windows/install/)

##### Folder Structure

    - SimpleChat
	    - client
	    - socketIO
	    - .env
	    - docker-compose.yml
	    - Realtime UML.png

#### How to run

 - Docker run in build and detach mode
	 - `docker-compose up --build -d`
 - Docker down
	 - `docker-compose down -v`
- Checking docker container log
	- `docker logs --tail -1 {container name or id}`
### How to use
 - Hit enter to join the room
 - Room must be required in order to send message