import React from "react";

const Teams = () => {
  const teams = [
    {
      name: "Code Paglus 💻",
      description:
        "People who write 100 console.logs before solving one bug 😂",
      members: ["Sohail", "Ravi", "Aisha", "Neha"],
    },
    {
      name: "Exam Survivors 📚",
      description: "Group of maggi-powered SEM warriors 🍜🔥",
      members: ["Aman", "Priya", "Farhan", "Sneha"],
    },
    {
      name: "Design Ninjas 🎨",
      description:
        "They can spend 2 hours choosing colors but 2 mins writing code 🎭",
      members: ["Rahul", "Zoya", "Kriti"],
    },
    {
      name: "Paglu QA 🤪",
      description:
        "Asking questions like ‘Why my WiFi only breaks during exams?’",
      members: ["Aditya", "Meera", "Sohail"],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-[#009dff] mb-8 text-center">
          Our Teams at Questionzer Paglu 🚀
        </h1>

        <div className="grid gap-6 sm:grid-cols-2">
          {teams.map((team, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow p-6 hover:shadow-md transition"
            >
              <h2 className="text-xl font-semibold text-[#7e1f86] mb-2">
                {team.name}
              </h2>
              <p className="text-gray-600 text-sm mb-4">{team.description}</p>
              <div className="flex -space-x-2">
                {team.members.map((member, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-[#009dff] text-white font-semibold text-sm border-2 border-white"
                  >
                    {member.charAt(0).toUpperCase()}
                  </div>
                ))}
              </div>
              <p className="mt-3 text-gray-500 text-xs">
                Members: {team.members.join(", ")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teams;
