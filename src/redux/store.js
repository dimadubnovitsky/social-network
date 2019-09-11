// let store = {
//     _state: {
//         sidebarReducer: {
//             friends: [
//                 {
//                     id: 1,
//                     name: 'Valera',
//                     imageUrl: 'https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/face-with-rolling-eyes.png'
//                 },
//                 {
//                     id: 2,
//                     name: 'Zhenya',
//                     imageUrl: 'https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/grinning-face-with-smiling-eyes.png'
//                 },
//                 {
//                     id: 3,
//                     name: 'Kuzya',
//                     imageUrl: 'https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/smiling-face-with-sunglasses.png'
//                 },
//                 {
//                     id: 4,
//                     name: 'Sasha',
//                     imageUrl: 'https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/nerd-face.png'
//                 },
//             ]
//         },
//         usersReducer: {
//             posts: [
//                 {
//                     id: 1,
//                     text: 'Hi, how are you?',
//                     likes: 20,
//                     imageUrl: "https://yt3.ggpht.com/a/AGF-l7-mAPvYhyniYSdDCWN6H1GPtyKCDyMHnWI1KA=s800-mo-c-c0xffffffff-rj-k-no"
//                 },
//                 {
//                     id: 2,
//                     text: "It's my first post",
//                     likes: 10,
//                     imageUrl: "https://avatarfiles.alphacoders.com/855/85557.png"
//                 }
//             ],
//             newPostText: ''
//         },
//         dialogsPageReducer: {
//             messages: [
//                 {id: 1, message: 'Hi!'},
//                 {id: 2, message: 'Yo!'},
//                 {id: 3, message: 'How are you?'}
//             ],
//             dialogs: [
//                 {id: 1, name: 'Dima'},
//                 {id: 2, name: 'Valera'},
//                 {id: 3, name: 'Sasha'},
//                 {id: 4, name: 'Zhenya'},
//                 {id: 5, name: 'Kuzya'}
//             ],
//             newMessageText: ''
//         }
//     },
//     getState() {
//         return this._state;
//     },
//     _callback() {
//     },
//     subscribe(observer) {
//         this._callback = observer;
//     },
//     dispatch(action) {
//         if (action.type === 'ADD_POST') {
//             let newPost = {
//                 id: 3,
//                 text: this._state.usersReducer.newPostText,
//                 likes: 0
//             }
//             this._state.usersReducer.posts.push(newPost);
//             this._state.usersReducer.newPostText = '';
//             this._callback();
//         } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
//             this._state.usersReducer.newPostText = action.newText;
//             this._callback();
//         } else if (action.type === 'SEND-MESSAGE') {
//             let newMessage = {
//                 id: 4,
//                 message: this._state.dialogsPageReducer.newMessageText
//             }
//             this._state.dialogsPageReducer.messages.push(newMessage);
//             this._state.dialogsPageReducer.newMessageText = '';
//             this._callback();
//         } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
//             this._state.dialogsPageReducer.newMessageText = action.newText;
//             this._callback();
//         }
//     }
// }
//
// export default store;