// import React from "react";

// function AboutMainbar() {
//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100 px-6">
//       <div className="bg-white rounded-xl shadow-lg p-8 max-w-3xl">
//         <h1 className="text-3xl font-bold text-[#009dff] mb-4 text-center">
//           About Questionizer Paglu 😜
//         </h1>

//         {/* Intro */}
//         <p className="text-gray-700 mb-4 leading-relaxed text-center">
//           Hi, I’m <span className="font-semibold">Sohail Alam</span> 👋. I’m
//           just a SEM student (yes, still eating maggi at midnight 🍜) trying to
//           build an application where people can ask questions and give answers.
//           Basically: Google + Paglu ={" "}
//           <span className="text-[#7e1f86] font-semibold">
//             Questionizer Paglu
//           </span>{" "}
//           😂
//         </p>

//         {/* Funny explanation */}
//         <p className="text-gray-700 mb-4 leading-relaxed text-center">
//           Life is full of doubts 🤔… like “Should I attend class today?” or “Why
//           my code only works after adding console.log?” — don’t worry, here you
//           can ask *anything*. Someone out there has the answer. Or at least a
//           funnier doubt than yours 🤯😂.
//         </p>

//         {/* Features */}
//         <h2 className="text-xl font-semibold text-[#009dff] mb-2">
//           What you can do here:
//         </h2>
//         <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
//           <li>Ask any question (serious or paglu ones, both accepted 😏)</li>
//           <li>Answer others’ questions (show off your genius 🧠)</li>
//           <li>Search & browse endless knowledge + bakwaas 📚</li>
//           <li>Vote to highlight best answers (or funniest ones 😂)</li>
//           <li>Earn reputation points → flex to your friends 💪</li>
//           <li>Join a community where everyone is half smart, half paglu 🤝</li>
//         </ul>

//         {/* Extra funny section */}
//         <h2 className="text-xl font-semibold text-[#009dff] mb-2">
//           Why “Paglu”?
//         </h2>
//         <p className="text-gray-700 mb-4 leading-relaxed">
//           Because we all are a little paglu inside. Some people forget sem exam
//           dates, some people still use `alert("Hello World")` in 2025, and some
//           people think Ctrl+C → Ctrl+V is coding 💻😂. This site celebrates that
//           madness 🎉.
//         </p>

//         {/* Motivational part */}
//         <h2 className="text-xl font-semibold text-[#009dff] mb-2">
//           Our Goal 🚀
//         </h2>
//         <p className="text-gray-700 mb-6 leading-relaxed">
//           We want to build a platform where learning feels less boring and more
//           fun. Whether you are debugging a serious code issue, asking a silly
//           life question, or just here to laugh at someone’s “paglu” doubt —
//           you’ll find your tribe here ❤️.
//         </p>

//         {/* Outro */}
//         <p className="text-gray-700 leading-relaxed text-center font-medium">
//           Welcome to <span className="text-[#7e1f86]">Questionizer Paglu</span>{" "}
//           — where questions meet answers, and paglus meet their gang 🤪🔥.
//           Remember: No question is stupid here… unless it’s about pineapple on
//           pizza 🍍🍕😂.
//         </p>
//       </div>
//     </div>
//   );
// }

// export default AboutMainbar;

import React from "react";

function AboutMainbar() {
  return (
    <div className="flex items-center min-h-screen px-6">
      {/* Card with fixed height */}
      <div className="bg-white w-full h-auto md:h-[100vh] flex flex-col">
        {/* Header (stays visible) */}
        <h1 className="text-3xl font-bold text-[#009dff] px-8 pt-8 pb-4 border-b text-center">
          About Questionizer Paglu 😜
        </h1>

        {/* Scrollable content */}
        <div
          className="flex-1 px-8 py-6 "
          style={{
            scrollbarWidth: "thin", // Firefox thin scrollbar
            scrollbarColor: "#009dff #f1f5f9", // Firefox colors
          }}
        >
          {/* Intro */}
          <p className="text-gray-700 leading-relaxed ">
            Hi, I’m <span className="font-semibold">Sohail Alam</span> 👋. I’m a
            SEM student trying to build a fun Q&A app. Simple goal: you ask,
            someone answers — sab milke smart (and a little paglu) banenge 😅.
          </p>

          {/* Fun explanation */}
          <p className="text-gray-700 leading-relaxed ">
            Got doubts like “Why does my code only work after adding
            console.log?” or “Should I attend class today?” — yaha pucho!
            Someone will help (or laugh first, then help) 🤓😂.
          </p>

          {/* Features */}
          <div>
            <h2 className="text-xl font-semibold text-[#009dff] mb-2">
              What you can do:
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Ask any question — serious or paglu 😏</li>
              <li>Answer others’ questions and flex your brain 🧠</li>
              <li>Search & browse community knowledge 📚</li>
              <li>Vote good questions & answers to the top 👍</li>
              <li>Earn reputation points — bragging rights! 💪</li>
              <li>Join a friendly, slightly paglu community 🤝</li>
            </ul>
          </div>

          {/* Why Paglu */}
          <div>
            <h2 className="text-xl font-semibold text-[#009dff] mb-2">
              Why “Paglu”?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Because we all do paglu things: forgetting exam dates, using{" "}
              <code>alert()</code> in 2025, or treating Ctrl+C/Ctrl+V as coding
              💻😂. This app celebrates learning with a smile.
            </p>
          </div>

          {/* Goal */}
          <div>
            <h2 className="text-xl font-semibold text-[#009dff] mb-2">
              Our Goal 🚀
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Make learning less boring, more fun. Whether you’re debugging
              tough code, asking silly questions, or just here for laughs —
              you’ll find your tribe here ❤️.
            </p>
          </div>

          {/* Outro */}
          <p className="text-gray-700 leading-relaxed  font-medium">
            Welcome to{" "}
            <span className="text-[#7e1f86]">Questionizer Paglu</span> — where
            questions meet answers, and paglus meet their gang 🤪🔥. (P.S.
            pineapple on pizza? we’ll allow the debate 🍍🍕)
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMainbar;
