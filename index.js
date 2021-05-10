const { Client } = require("discord-rpc");
const client = new Client({ transport: "ipc" });

client.on("ready", () => {
  console.log("Started the Mixtape RPC successfully!");

  client.setActivity({
    details: "A high-quality discord music bot that can play from",
    state: "Youtube, Spotify, Soundcloud, Bandcamp, and more!",
    startTimestamp: Date.now(),
    largeImageKey: "mixtape",
    largeImageText: "The only music bot you will ever need",
    smallImageKey: "blurple",
    smallImageText: "Give the experience a try today",
    buttons: [
      {
        label: "Invite Mixtape",
        url:
          "https://discord.com/oauth2/authorize?scope=bot&client_id=561151296170622976&permissions=3165184",
      },
      { label: "Join Server", url: "https://discord.gg/TUYc4nn" },
    ],
  });
});

client.login({ clientId: "841321180438986852" }).catch(console.error);
