import {Tweet} from "./Tweet"

function App() {
  return (
    <div>
      <p>I'm App component</p>
      <div className="tweet-container">
      <Tweet name="Betsy" content="Je vais bien" like={300} />
      <Tweet name="Ludmi" content="Cool" like={200} />
      <Tweet name="Aly" content="Super" like={150} />
      <Tweet name="Anne" content="Fun" like={100} />
      </div>
    </div>
  );
}

export default App ; 