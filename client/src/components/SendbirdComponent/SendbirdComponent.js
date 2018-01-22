// import React, {Component} from "react";
// // import Sendbird from "../../SendBird.min.js";
// // import Sendbird from "sendbird";
// // import sbWidget from "../../widget.SendBird.js";
// import Sendbird from "../../sendbird/src/js/sendbird";
// import "../../sendbird/src/js/widget.js";


// class SendbirdComponent extends Component {

//   // componentWillMount() {
//   //   console.log(window);
//   // }

//   componentDidMount() {
//     const w = window;
//     console.log(w.sbWidget);

//     var appId = "FB7BB4B3-4917-4831-B2E0-EB94FB4A4BD7";
//     var userId = "";
//     var nickname = "";


//   // //WHERE IS "sbWidget" defined??  Is this supposed to read: "sbWidgetToggle"
//     w.sbWidget.startWithConnect(appId, userId, nickname, function() {     
//   //   // on sign in
//   //     const githubHandler = document.getElementByClassName("githubHandler");
//   //     const userFullName = document.getElementByClassName("userFullName");
       
//   //   // get user info from database
//   //      // use first and last as nickname
//   //     console.log("userFullName = " + userFullName );
//   //     // use github name as userId
//   //     console.log("githubHandler = " + githubHandler);
//   //     nickname = userFullName;
//   //     userId = githubHandler;

//     });
//   }


//   render () {
//     return(
//       <div>
//         <div id="sb_widget"></div>
       
//         </div>
//     );
//   }
// }
  
// export default SendbirdComponent;



  //   console.log(Sendbird);

  //   const sb = New Sendbird({
  //     const appId = "FB7BB4B3-4917-4831-B2E0-EB94FB4A4BD7"
  //   });
      
  //   sb.connect( appId, userId, nickname, function() {
  //    // on sign in
  //     const githubHandler = document.getElementByClassName("githubHandler");
  //     const userFullName = document.getElementByClassName("userFullName");
       
  //     // get user info from database
  //         // use first and last as nickname
  //     console.log("userFullName = " + userFullName );
  //       // use github name as userId
  //     console.log("githubHandler = " + githubHandler);

  //     nickname = userFullName;
  //     userId = githubHandler;
  //   });
  // }