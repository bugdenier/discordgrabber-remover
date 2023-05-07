# Discord Grabber Remover
Keep your account safe!


<div align= "center">
  
## How do I check if I'm infected?
  
</div>

° Verify the file "index.js" in Discord Desktop Core, there should contain only: 
```js
module.exports = require('./core.asar')"
```
° If you have something else, you're probably infected.

## How to prevent this?

- Bad actors often use arguments such as: "can you test my game?", "I work as a developer of some application, can you evaluate?". 
- Anyway, never run any files from some strange person. 
- If it's a friend sending it to you, always make sure their account wasn't taken over by some malicious user as well, it happens a lot!

### How to use remover?

- Download the archives in github;
- Download NodeJS;
- Run the command from console: "npm i Glob";
- And run "node index.js";
- If you receive the message "Success", ready everything went well, otherwise something is preventing the remover from acting.
