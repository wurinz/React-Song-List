// import { combineReducers } from "redux";
// import {v4} from 'uuid'; //пакет генерирует айдишники

// const SONGS = [
//     {title: 'No Scrubs', duration: '4:05', id: v4()}, //4 объекта 4 айдишника
//     {title: 'Macarena', duration: '2:30', id: v4()},
//     {title: 'All Star', duration: '3:15', id: v4()},
//     {title: 'I want it The way', duration: '1:45', id: v4()},
// ];

// const songsReducer = (songs = SONGS, action) => {
//     if (action.type === 'SONG_ADDED') {
//         return [...songs, action.payload];
//     } else if (action.type === 'SONG_DELETED'){
//         return songs.filter(song => song.id !== action.payload);
//     } else if (action.type === 'SONG_EDITED'){
//         return songs.map((song) => {          //используем map когда нужно изменить массив
//             if(song.id === action.payload.id){
//                 return {
//                     ...action.payload //если id эрея совпадает с id edit'a - мы возвращаем деструктурированный объект песни
//                 }
//             }

//             return song;
//         })
//     }
//     return songs;
// }

// const selectedSongReducer = (selectedSong = null, action) => {
//     if (action.type === 'SONG_SELECTED') {
//         return action.payload;
//     }
//     return selectedSong;
// };

// const selectEditSongReducer = (selectedEditSong = {title: '', duration: ''}, action) => {
//     if(action.type === 'EDIT_SONG_SELECTED'){
//         return action.payload;
//     }
//     return selectedEditSong;
// }


// // const deletedSongReducer = (songs = SONGS, action) => {
//     // if(action.type === 'SONG_DELETED'){
//     //     // console.log(action.payload.title);
//     //     // console.log(songs[0].title);

//     //     console.log(songs);
//     //     return songs.filter(song => song.title !== action.payload.title);
//     // }
//     // return songs;
// // }



// export default combineReducers({
//     selectEditSong: selectEditSongReducer,
//     songs: songsReducer,
//     selectedSong: selectedSongReducer,
// });

import { combineReducers } from "redux";
import {v4} from "uuid";

const SONGS = [
    {title: 'No Scrubs', duration: '4:05', id: v4()},
    {title: 'Macarena', duration: '2:30', id: v4()},
    {title: 'All Star', duration: '3:15', id: v4()},
    {title: 'I want it The way', duration: '1:45', id: v4()},
];

const songsReducer = (songs = SONGS, action) => {
    console.log('fo')
    if (action.type === 'SONG_ADDED') {
        return [...songs, action.payload];
    } else if (action.type === 'SONG_DELETED') {
        return songs.filter((song) => song.id !== action.payload);
    } else if (action.type === 'SONG_EDIT') {
        return songs.map((song) => {
            if (song.id === action.payload.id) {
                return {
                    ...action.payload
                };
            }
            console.log('o')
            return song;
        });
    }

    return songs;
}

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};

const selectEditSongReducer = (selectedEditSong = {title: '', duration: ''}, action) => {
    if (action.type === 'EDIT_SONG_SELECTED') {
        return action.payload;
    }

    return selectedEditSong;
}

export default combineReducers({
    selectEditSong: selectEditSongReducer,
    songs: songsReducer,
    selectedSong: selectedSongReducer,
});

