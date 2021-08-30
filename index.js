const { Client } = require("discord-rpc");
const client = new Client({ transport: "ipc" });

client.on("ready", () => {
  console.log("Started the Mixtape RPC successfully!");

  client.setActivity({
    details: "The perfect way to play your favorite tunes.",
    state: "Supports YouTube, Spotify, Apple Music, and Souncloud",
    startTimestamp: Date.now(),
    largeImageKey: "mixtape",
    largeImageText: "The perfect way to play your favorite tunes.",
    smallImageKey: "blurple",
    smallImageText: "Give the experience a try today",
    buttons: [
      {
        label: "Invite Mixtape",
        url:
          "https://discord.com/api/oauth2/authorize?client_id=561151296170622976&permissions=36785152&scope=bot",
      },
      { label: "Join Server", url: "https://discord.gg/TUYc4nn" },
    ],
  });
});

client.login({ clientId: "841334938766540811" }).catch(console.error);
