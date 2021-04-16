export const selectSong = (song) => {
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};

export const deleteSong = (title) => {
    return {
        type: 'SONG_DELETED',
        payload: title
    };
};

export const addSong = (song) => {
   return {
       type: 'SONG_ADDED',
       payload: song
   }
}

export const selectEditSong = (song) => {
    console.log(song)
    return {
        type: 'EDIT_SONG_SELECTED',
        payload: song
    };
}

export const editSongAction = (song) => {
    console.log("action if fired");
    console.log(song);
    return {
        type: 'SONG_EDIT',
        payload: song
    }
}
