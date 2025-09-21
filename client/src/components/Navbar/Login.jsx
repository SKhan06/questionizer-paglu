// import React from "react";
// import { Link } from "react-router-dom";
// // import Avatar from "./Avatar"; // adjust path if needed
// import Avatar from "../Avatar/Avatar";
// import LoginModal from "./LoginModal";

// const Login = ({ User, handleLogout }) => {
//   const loginModalRef = React.useRef();
//   const [isLoginModalOpen, setIsLoginModalOpen] = React.useState(false);
//   // Inline styles
//   const styles = {
//     container: {
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "flex-end",
//       gap: "15px",
//       padding: "10px 20px",
//       backgroundColor: "#ffffff",
//       borderBottom: "1px solid #e0e0e0",
//       fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
//     },
//     link: {
//       textDecoration: "none",
//       fontSize: "16px",
//       color: "#333",
//       padding: "8px 14px",
//       borderRadius: "6px",
//       transition: "all 0.3s ease",
//     },
//     logoutBtn: {
//       backgroundColor: "#f44336",
//       color: "white",
//       border: "none",
//       cursor: "pointer",
//       padding: "8px 14px",
//       borderRadius: "6px",
//       transition: "background 0.3s ease",
//     },
//   };
//   const handleLogin = (show) => {
//     if (show) {
//       setIsLoginModalOpen(true);
//       // Logic to open the login modal
//       console.log("Open login modal");
//     } else {
//       setIsLoginModalOpen(false);
//     }
//   };
//   return (
//     <div style={styles.container}>
//       {User === null ? (
//         <Link
//           to="/Auth"
//           style={styles.link}
//           onMouseOver={(e) => (e.target.style.color = "#009dff")}
//           onMouseOut={(e) => (e.target.style.color = "#333")}
//           onClick={() => {
//             handleLogin(true);
//           }}
//         >
//           Log in
//         </Link>
//       ) : (
//         <>
//           <Avatar
//             backgroundColor="#009dff"
//             px="15px"
//             py="10px"
//             borderRadius="50%"
//             color="white"
//             width="40px"
//             height="40px"
//           >
//             <Link
//               to={`/Users/${User?.result?._id}`}
//               style={{ color: "white", textDecoration: "none" }}
//             >
//               {User.result.name.charAt(0).toUpperCase()}
//             </Link>
//           </Avatar>
//           <button
//             style={styles.logoutBtn}
//             onClick={handleLogout}
//             onMouseOver={(e) => (e.target.style.backgroundColor = "#d32f2f")}
//             onMouseOut={(e) => (e.target.style.backgroundColor = "#f44336")}
//           >
//             Log out
//           </button>
//         </>
//       )}
//     </div>
//         // {isLoginModalOpen && ()
//   );
// };

// export default Login;

import React, { useState } from "react";
import { Link } from "react-router-dom";
// import Avatar from "./Avatar";
import Avatar from "../Avatar/Avatar";

import LoginModal from "./LoginModal";

const Login = ({ User, handleLogout, handleLogin }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        gap: "15px",
        padding: "10px 20px",
      }}
    >
      {User === null ? (
        <>
          <button
            style={{
              background: "none",
              border: "none",
              fontSize: "16px",
              color: "#333",
              cursor: "pointer",
            }}
            onClick={() => setShowModal(true)}
          >
            Log in
          </button>
          <LoginModal
            isOpen={showModal}
            onClose={() => setShowModal(false)}
            onLogin={handleLogin}
          />
        </>
      ) : (
        <>
          <Avatar
            backgroundColor="#009dff"
            color="white"
            borderRadius="50%"
            width="40px"
            height="40px"
          >
            <Link
              to={`/Users/${User?.result?._id}`}
              style={{ color: "white", textDecoration: "none" }}
            >
              {User.result.name.charAt(0).toUpperCase()}
            </Link>
          </Avatar>
          <button
            style={{
              backgroundColor: "#f44336",
              color: "white",
              border: "none",
              borderRadius: "6px",
              padding: "8px 14px",
              cursor: "pointer",
            }}
            onClick={handleLogout}
          >
            Log out
          </button>
        </>
      )}
    </div>
  );
};

export default Login;
