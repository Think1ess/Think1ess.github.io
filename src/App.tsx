import React from "react";
import buddhaImage from "./assets/buddha.png";

function App() {
  const [input, setInput] = React.useState("");
  const [zenResponse, setZenResponse] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "deepseek-chat",
          messages: [
            {
              role: "system",
              content:
                "You are a zen master who provides wisdom and guidance in a calm, peaceful manner.",
            },
            { role: "user", content: input },
          ],
          stream: false,
        }),
      });

      const data = await response.json();
      setZenResponse(data.choices[0].message.content);
    } catch (error) {
      console.error("Error:", error);
      setZenResponse("The zen master is meditating. Please try again later.");
    } finally {
      setIsLoading(false);
      setInput("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <img src={buddhaImage} alt="Zen GPT" className="w-48 h-48 mx-auto mb-8" />
      <h1 className="text-4xl font-bold text-gray-800 mb-12">Zen GPT</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-2xl space-y-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask Buddha Everything..."
          className="w-full p-4 text-lg border-2 border-gray-200 rounded-lg"
          disabled={isLoading}
        />
        <button
          type="submit"
          className={`w-full p-4 text-lg bg-gray-800 text-white rounded-lg ${
            isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-700"
          }`}
          disabled={isLoading}
        >
          {isLoading ? "Seeking Wisdom..." : "Seek Wisdom"}
        </button>
      </form>
      {zenResponse && (
        <div className="mt-8 p-8 bg-white rounded-lg shadow w-full max-w-2xl text-center text-xl">
          {zenResponse}
        </div>
      )}
    </div>
  );
}

export default App;
