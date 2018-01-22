// //React Library imports:
// //=============================
// import React, { Component } from 'react';

// //Componenet imports:
// //=============================
// //import { View } from 'react-native';
// import { Col, Row, Container } from "../Grid";

// //import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements'
// import { InputBox, FormBtn } from "../../components/Form";
// import SendBird from 'sendbird';


// //=================================================================================
// class SendbirdLogin extends Component {
    
//     // static navigationOptions = {
//     //     title: 'LOGIN'
//     // }

//     constructor(props) {
//         super(props);
//         this.state = {
//             userId: '',
//             nickname: '',
//             error: ''
//         }
//     }

//     _userIdChanged = (userId) => {
//         this.setState({ userId });
//     }

//     _nicknameChanged = (nickname) => {
//         this.setState({ nickname });
//     }

//     _onButtonPress = () => {
//         const { userId, nickname } = this.state;
//         const sb = new SendBird({ "appId": "FB7BB4B3-4917-4831-B2E0-EB94FB4A4BD7" });
//         sb.connect(userId, (user, error) => {
//             if (error) {
//                 this.setState({ error });
//             } else {
//                 sb.updateCurrentUserInfo(nickname, null, (user, error) => {
//                     if (error) {
//                         this.setState({ error });
//                     } else {
//                         this.setState({
//                             userId: '',
//                             nickname: '',
//                             error: ''
//                         }, () => {
//                             this.props.navigation.navigate('Menu');
//                         });
//                     }
//                 })
//             }
//         })
//     }

//     render() {
//         return (
//             <Container>
//                 <Row style={{backgroundColor: '#fff', flex: 1}}>
                  
//                   <Col size ="md-4" style={styles.containerStyle}>
//                         <InputBox
//                             label="User ID"
//                             placeholder="user id"
//                             value={this.state.userId}
//                             onChangeText={this._userIdChanged}
//                         />
//                     </Col>

//                     <Col size ="md-4" style={styles.containerStyle}>
//                         <InputBox
//                             label="Nickname"
//                             placeholder="nickname"
//                             value={this.state.nickname}
//                             onChangeText={this._nicknameChanged}
//                         />
//                     </Col>

//                     <Col size ="md-4" style={styles.containerStyle}>
//                         <FormBtn
//                             style={{backgroundColor: '#2096f3'}}
//                             title='Connect' 
//                             onPress={this._onButtonPress}
//                         />
//                     </Col>

//                     <Col size ="md-4" style={styles.containerStyle}>
//                         <div>{this.state.error}</div>
//                     </Col>

//                 </Row>
//             </Container>
//         )
//     }
// }

// const styles = {
//     containerStyle: {
//         marginTop: 10
//     }
// }

// export default SendbirdLogin;