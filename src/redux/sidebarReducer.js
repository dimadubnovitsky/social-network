let initialState = {
    friends: [
        {
            id: 1,
            name: 'Valera',
            imageUrl: 'https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/face-with-rolling-eyes.png'
        },
        {
            id: 2,
            name: 'Zhenya',
            imageUrl: 'https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/grinning-face-with-smiling-eyes.png'
        },
        {
            id: 3,
            name: 'Kuzya',
            imageUrl: 'https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/smiling-face-with-sunglasses.png'
        },
        {
            id: 4,
            name: 'Sasha',
            imageUrl: 'https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/nerd-face.png'
        },
    ]
}

const sidebarReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default sidebarReducer;