# SocketIO & ReactJS Simple Chat

This design is not backend dependable, socket server design to accept socket and redis connection [Redis Adapter](https://socket.io/docs/v4/redis-adapter/)

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