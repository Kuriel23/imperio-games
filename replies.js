const { APIMessage, Structures } = require("discord.js");

class ExtAPIMessage extends APIMessage {
  resolveData() {
    if (this.data) return this;
    super.resolveData();
    const allowedMentions =
      this.options.allowedMentions ||
      this.target.client.options.allowedMentions ||
      {};
    if (allowedMentions.repliedUser != undefined) {
      if (this.data.allowed_mentions == undefined)
        this.data.allowed_mentions == {};
      Object.assign(this.data.allowed_mentions, {
        replied_user: allowedMentions.repliedUser
      });
    }
    if (this.options.replyTo != undefined) {
      Object.assign(this.data, {
        message_reference: { message_id: this.options.replyTo.id }
      });
    }
    return this;
  }
}

class Message extends Structures.get("Message") {
  inlineReply(content) {
    require("discord-inline-reply");
    return this.channel.send(content);
  }
}

Structures.extend("Message", () => Message);
