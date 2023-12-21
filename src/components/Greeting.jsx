import { useState } from "preact/hooks"

export default function Greeting({ messages }) {
  const randomMessage = () =>
    messages[Math.floor(Math.random() * messages.length)]

  const [greeting, setGreeting] = useState(messages[0])

  return (
    <div>
      <h3>
        {greeting}! Welcome to my blog. Here I will talk about my journey in
        learning to code and other topics that I find interesting. Thank you for
        visiting!
      </h3>
      <button onClick={() => setGreeting(randomMessage())}>New Greeting</button>
    </div>
  )
}
