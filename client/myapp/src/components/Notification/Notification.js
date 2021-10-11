// import React from "react";
// import {
//   NotificationContainer,
//   NotificationManager,
// } from "react-notifications";

// export const Notification = () => {
//   createNotification = (type) => {
//     return () => {
//       switch (type) {
//         case "info":
//           NotificationManager.info("Info message");
//           break;
//         case "success":
//           NotificationManager.success("Success message", "Title here");
//           break;
//         case "warning":
//           NotificationManager.warning(
//             "Warning message",
//             "Close after 3000ms",
//             3000
//           );
//           break;
//         case "error":
//           NotificationManager.error("Error message", "Click me!", 5000, () => {
//             alert("callback");
//           });
//           break;
//       }
//     };
//   };
// };
import { NotificationManager } from 'react-notifications'
import 'react-notifications/lib/notifications.css'
//import { useSession } from  'react-use-session';

export function createNotification(type, message, title = 'demo ') {
  console.log(type,message,"eooooooooooooooooooooooooooooooooooooooo");
  switch (type) {
    case 'info':
      NotificationManager.info(message, title, 5000)
      break
    case 'success':
      NotificationManager.success(message, title, 5000)
      break
    case 'warning':
      NotificationManager.warning(message, title, 5000)
      break
    case 'error':
      NotificationManager.error(message, title, 5000)
      break
  }
}