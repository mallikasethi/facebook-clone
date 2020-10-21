// import React from "react";
// import "./Widgets.css";

// function Widgets() {
//   return (
//     <div className="widgets">
//       <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fonedirectionmusic%2Fposts%2F3144285892292850&width=500"
//        width="340" height="1500" style={{border:"none",overflow:"hidden"}} scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
//       <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fonedirectionmusic%2Fposts%2F3176091929112246&width=500" width="340" height="1500" style={{border:"none",overflow:"hidden"}} scrolling="no" frameborder="0"
//        allowTransparency="true" allow="encrypted-media"></iframe>
//        <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fonedirectionmusic%2Fposts%2F3175498572504915&width=500" width="340" height="1500" style={{border:"none",overflow:"hidden"}} scrolling="no" frameborder="0" 
//        allowTransparency="true" allow="encrypted-media"></iframe>
//     </div>
//   );
// }

// export default Widgets;

import React from "react";
import "./Widgets.css";

function Widgets() {
  return (
    <div className="widgets">
      <iframe
        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fonedirectionmusic%2Fposts%2F3144285892292850&width=340"
        width="340"
        height="100%"
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        frameborder="0"
        allowTransparency="true"
        allow="encrypted-media"
      ></iframe>
      <iframe
        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fonedirectionmusic%2Fposts%2F3176091929112246&width=500"
        width="340"
        height="100%"
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        frameborder="0"
        allowTransparency="true"
        allow="encrypted-media"
      ></iframe>
      <iframe
        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fonedirectionmusic%2Fposts%2F3175498572504915&width=340"
        width="340"
        height="100%"
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        frameborder="0"
        allowTransparency="true"
        allowFullScreen="true"
      ></iframe>
    </div>
  );
}

export default Widgets;
 
