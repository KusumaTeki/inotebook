// import React from "react";

// export default function Alert(props) {
//   return (
//     <>
//       <div
//         className="alert alert-warning alert-dismissible fade show"
//         role="alert">
//         {props.message}
//         <button
//           type="button"
//           className="btn-close"
//           data-bs-dismiss="alert"
//           aria-label="Close"></button>
//       </div>
//     </>
//   );
// }
import React from "react";

function Alert(props) {
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      <strong>{props.alert.msg}</strong> 
     
    </div>
  );
}

export default Alert;
