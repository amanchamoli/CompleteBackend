const express = require("express")
 
const app = express();

app.use(express.json());

const jokes = [
  {
    id: 1,
    title: "Programmer's Excuse",
    content: "Why do programmers prefer dark mode? Because light attracts bugs!"
  },
  {
    id: 2,
    title: "Debugging",
    content: "Debugging is like being the detective in a crime movie where you are also the criminal."
  },
  {
    id: 3,
    title: "Coffee First",
    content: "A programmer's favorite keyboard shortcut is Ctrl + Coffee."
  },
  {
    id: 4,
    title: "Wi-Fi Problems",
    content: "My Wi-Fi went down for five minutes, so I had to talk to my family. They seem like nice people."
  },
  {
    id: 5,
    title: "JavaScript Truth",
    content: "JavaScript developers don't make mistakes—they create unexpected features."
  },
  {
    id: 6,
    title: "AI Humor",
    content: "I asked AI to tell me a joke about humans. It said, 'You update your passwords but still use 123456 somewhere.'"
  },
  {
    id: 7,
    title: "Git Commit",
    content: "Git commit -m 'Final fix'... 15 commits later: 'Final final fix v2 really final'."
  }
];

app.get("/", (req, res) => {
    res.send("server start")
})

app.get("/api/jokes", (req, res)=> {
    res.send(jokes)
})
app.listen(3000, () => { 
    console.log("server is running in port 3000");
})