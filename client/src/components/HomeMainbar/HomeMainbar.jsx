import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllQuestions } from "../../actions/question";
import Questionlist from "./QuestionList";
import logo from "../../assets/logo.png"; // your logo

function HomeMainbar() {
  const user = useSelector((state) => state.currentUserreducer);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const questionlist = useSelector((state) => state.questionsreducer.data);

  useEffect(() => {
    dispatch(fetchAllQuestions());
  }, [dispatch]);

  const checkauth = () => {
    if (user === null) {
      alert("Login or signup to ask a question");
      navigate("/auth");
    } else {
      navigate("/ask-question");
    }
  };

  return (
    <div
      className="relative min-h-screen w-full flex flex-col px-6 py-10"
      style={{
        backgroundImage: `url(${logo})`,
        backgroundSize: "1000px",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/90"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col flex-1">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          {location.pathname === "/" ? (
            <h1 className="text-3xl font-bold text-[#009dff]">Top Questions</h1>
          ) : (
            <h1 className="text-3xl font-bold text-[#009dff]">All Questions</h1>
          )}
          <button
            onClick={checkauth}
            className="px-5 py-2 rounded-md bg-[#009dff] text-white font-medium hover:bg-[#007acc] transition"
          >
            Ask Question
          </button>
        </div>

        {/* Questions */}
        <div className="flex-1 overflow-y-auto">
          {questionlist.length > 0 ? (
            <>
              <p className="text-gray-600 mb-3">
                {questionlist.length} questions
              </p>
              <Questionlist questionlist={questionlist} />
            </>
          ) : (
            <h1 className="text-gray-500 text-lg">Loading...</h1>
          )}
        </div>
      </div>
    </div>
  );
}

export default HomeMainbar;
