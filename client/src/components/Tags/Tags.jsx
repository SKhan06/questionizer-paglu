import React, { useState } from "react";

const Tags = () => {
  const tags = [
    "javascript",
    "reactjs",
    "python",
    "node.js",
    "css",
    "paglu-logic",
  ];

  const data = {
    javascript: [
      {
        q: "Why does `console.log` fix my bugs? 🤔",
        a: "Because it’s not debugging, it’s log therapy 🪄.",
      },
      { q: "What is `==` vs `===`?", a: "`==` is paglu, `===` is sensible." },
      {
        q: "Why is NaN not equal to NaN?",
        a: "Because even NaN doesn’t trust itself 😅.",
      },
      {
        q: "Why is `typeof null` = object?",
        a: "Old JS bug — we just live with it 😂.",
      },
      {
        q: "Why array length changes if I assign `arr[99]`?",
        a: "Because JS arrays are like elastic paglu rubber bands.",
      },
      {
        q: "Why `0.1 + 0.2 !== 0.3`?",
        a: "Because floating point is drunk 🥴.",
      },
      {
        q: "Why `undefined` and `null` both exist?",
        a: "So beginners can stay confused longer 😏.",
      },
      {
        q: "Why my promise never resolves?",
        a: "Because you forgot `return`… paglu move!",
      },
      {
        q: "Why does setTimeout(0) not run instantly?",
        a: "Event loop says: chill bro, I’ll get there ⏳.",
      },
      {
        q: "Is JavaScript single-threaded?",
        a: "Yes, but async makes it feel like paglu multitasking.",
      },
    ],

    reactjs: [
      {
        q: "Why my app re-renders infinitely?",
        a: "Check your `useEffect` dependencies paglu 🌀.",
      },
      {
        q: "Why state updates are async?",
        a: "So React can batch updates smartly.",
      },
      {
        q: "Why I see 'key' warning in lists?",
        a: "Because React hates nameless children 😅.",
      },
      {
        q: "Why props are read-only?",
        a: "Props are gifts 🎁, don’t open and repack them!",
      },
      {
        q: "Why useState doesn’t update immediately?",
        a: "Because React batches updates like Maggi noodles.",
      },
      {
        q: "Why I get 'Too many re-renders' error?",
        a: "You called `setState` inside render. Paglu loop!",
      },
      {
        q: "Why my component unmounts suddenly?",
        a: "React is cleaning up — not ghosting you 😜.",
      },
      {
        q: "Why useContext is helpful?",
        a: "Because prop-drilling is pure paglu torture.",
      },
      {
        q: "Why Suspense exists?",
        a: "So we can wait for data without going paglu.",
      },
      {
        q: "Why hooks can’t be in loops?",
        a: "React says: follow rules or stay paglu forever 🧐.",
      },
    ],

    python: [
      {
        q: "Why indentation error kills my code?",
        a: "Python: ‘Respect spaces, bro!’",
      },
      {
        q: "Why `is` vs `==` is confusing?",
        a: "Because Python is deep, not paglu… sometimes 😅.",
      },
      {
        q: "Why list slicing is so cool?",
        a: "Because `[start:end]` feels like magic ✨.",
      },
      {
        q: "Why dictionary has curly braces?",
        a: "Because Python loves looking like JSON.",
      },
      {
        q: "Why GIL exists?",
        a: "Because Python doesn’t trust true threads 😜.",
      },
      {
        q: "Why Python is slower than C?",
        a: "Because it trades speed for paglu simplicity.",
      },
      {
        q: "Why `print` needs parentheses?",
        a: "Because Python 3 grew up and got serious 👓.",
      },
      { q: "Why `import antigravity` exists?", a: "Easter egg for paglus 🕊️." },
      { q: "Why Python is so loved?", a: "Because simple + powerful = ❤️." },
      {
        q: "Why pip install fails?",
        a: "Because you’re missing venv… classic paglu moment.",
      },
    ],

    "node.js": [
      {
        q: "Why my server crashes on error?",
        a: "Because you forgot try/catch paglu 🛑.",
      },
      {
        q: "Why Node is single-threaded?",
        a: "Because async I/O saves the day.",
      },
      {
        q: "Why npm installs random stuff?",
        a: "Because `package-lock.json` is your boss.",
      },
      { q: "Why require vs import?", a: "Old paglu vs modern ES6 fight." },
      {
        q: "Why `process.exit()` kills everything?",
        a: "Because it literally ends Node’s life 😂.",
      },
      {
        q: "Why express.js is so popular?",
        a: "Because it’s simple and less paglu than others.",
      },
      {
        q: "Why callback hell exists?",
        a: "Because async JS without promises is paglu spaghetti 🍝.",
      },
      {
        q: "Why JWT tokens are used?",
        a: "For stateless auth, not paglu cookies.",
      },
      {
        q: "Why cluster mode exists?",
        a: "To use all CPU cores like a beast 💪.",
      },
      {
        q: "Why CORS blocks me?",
        a: "Because browsers are overprotective moms 🚫.",
      },
    ],

    css: [
      { q: "Why my div won’t center?", a: "Use flexbox paglu 😅." },
      {
        q: "Why z-index doesn’t work?",
        a: "Because stacking context is paglu science.",
      },
      {
        q: "Why margin collapse happens?",
        a: "Because CSS loves surprises 🎁.",
      },
      { q: "Why 100% width overflows?", a: "Because you forgot box-sizing." },
      { q: "Why CSS Grid exists?", a: "Because Flexbox alone went paglu." },
      {
        q: "Why my font looks different?",
        a: "Because fallback fonts are sneaky.",
      },
      {
        q: "Why position: absolute is weird?",
        a: "Because it looks for nearest paglu ancestor.",
      },
      {
        q: "Why `!important` exists?",
        a: "Because CSS needed a nuclear button 🚨.",
      },
      {
        q: "Why hover doesn’t work on mobile?",
        a: "Because you can’t hover with thumbs 😜.",
      },
      {
        q: "Why media queries save life?",
        a: "Because without them, paglu UIs break on mobile 📱.",
      },
    ],

    "paglu-logic": [
      {
        q: "Why I study only night before exam?",
        a: "Because stress = instant energy drink 🧃.",
      },
      {
        q: "Why sem students eat Maggi at 2 AM?",
        a: "Because Maggi = fuel of paglus 🍜.",
      },
      {
        q: "Why WiFi only breaks before submission?",
        a: "Because universe is paglu.",
      },
      {
        q: "Why friends call me during online exam?",
        a: "Because misery loves company 📞.",
      },
      {
        q: "Why laptop hangs during viva?",
        a: "Because it’s paglu timing ⏳.",
      },
      {
        q: "Why project works only on my laptop?",
        a: "Because it’s allergic to deployment 😂.",
      },
      {
        q: "Why group study becomes group gossip?",
        a: "Because concentration = 404 not found.",
      },
      {
        q: "Why teachers give surprise test?",
        a: "Because they are secret paglus too 👩‍🏫.",
      },
      {
        q: "Why can’t I wake up at 6am?",
        a: "Because brain clock = paglu mode ⏰.",
      },
      {
        q: "Why my crush ignores my memes?",
        a: "Because true paglu pain 💔😂.",
      },
      {
        q: "Why I open laptop to study but end up on YouTube?",
        a: "Because ‘study’ tab = invisible 😅.",
      },
      {
        q: "Why does MS Teams crash only during attendance?",
        a: "Because paglu luck strikes at 9:00 AM sharp.",
      },
      {
        q: "Why pen ink finishes only during exams?",
        a: "Because pen = undercover paglu spy.",
      },
      {
        q: "Why my assignment looks same as my friend’s?",
        a: "Because Ctrl+C + Ctrl+V is friendship ❤️.",
      },
      {
        q: "Why I remember memes but not formulas?",
        a: "Because brain storage is paglu cloud 😂.",
      },
      {
        q: "Why I say ‘5 min break’ but come back after 2 hours?",
        a: "Because time = relative for paglus ⏳.",
      },
      {
        q: "Why sem results come on weekends?",
        a: "Because teachers want to ruin full holiday 😭.",
      },
      {
        q: "Why I start gym before exams?",
        a: "Because procrastination needs new hobbies 💪.",
      },
      {
        q: "Why my group leader disappears on project deadline?",
        a: "Because it’s paglu tradition 👻.",
      },
      {
        q: "Why I keep 100 tabs open?",
        a: "Because every tab = false hope of productivity 🤯.",
      },
      {
        q: "Why college canteen samosa tastes better during exams?",
        a: "Because hunger + stress = 5⭐️ food.",
      },
      {
        q: "Why power cut happens during online viva?",
        a: "Because nature is the biggest paglu 🌩️.",
      },
      {
        q: "Why I get new ideas only while bathing?",
        a: "Because bathroom = official paglu think tank 🚿.",
      },
      {
        q: "Why I install VS Code extensions but never code?",
        a: "Because customizing editor feels like progress 😏.",
      },
      {
        q: "Why WiFi works fine until I open Zoom?",
        a: "Because WiFi hates classes as much as we do 😅.",
      },
    ],
  };

  const [selectedTag, setSelectedTag] = useState("javascript");

  return (
    <div className="flex flex-col gap-6 p-6 bg-gray-100 min-h-screen">
      {/* Tags container */}
      <div className="bg-white rounded-lg shadow p-4">
        <h2 className="text-xl font-semibold text-[#009dff] mb-3">
          Select a Tag
        </h2>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-3 py-1 rounded-md text-sm font-medium transition ${
                selectedTag === tag
                  ? "bg-[#009dff] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Q&A section with fixed height + scroll */}
      <div className="bg-white rounded-lg shadow h-[90vh] flex flex-col">
        {/* Sticky header */}
        <div className="sticky top-0 bg-white p-4 border-b z-10">
          <h2 className="text-lg font-semibold text-[#7e1f86]">
            Questions tagged with{" "}
            <span className="text-[#009dff]">{selectedTag}</span>
          </h2>
        </div>

        {/* Scrollable list */}
        <div className="overflow-y-auto p-4 flex-1">
          {data[selectedTag]?.length > 0 ? (
            <ul className="space-y-4">
              {data[selectedTag].map((item, i) => (
                <li
                  key={i}
                  className="p-3 border rounded-md hover:bg-gray-50 transition"
                >
                  <p className="font-semibold text-gray-800 mb-1">
                    Q: {item.q}
                  </p>
                  <p className="text-gray-600">👉 {item.a}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No questions found for this tag 😅</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tags;
