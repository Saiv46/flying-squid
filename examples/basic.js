var mcServer=require("../");

mcServer.createMCServer({
  "motd": "A Minecraft Server \nRunning flying-squid",
  "port": 25565,
  "maxPlayers": 10,
  "onlineMode": true,
  "logging": true,
  "gameMode": 1,
  "generation": {
    "name":"diamond_square",
    "options":{
      "worldHeight":80
    }
  },
  "modpe": false
});
