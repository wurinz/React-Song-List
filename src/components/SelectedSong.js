import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

const SongDetail = ({ selectedSong }) => {
    if (!selectedSong) {
        return null;
    }
    return <div className="selectedSongContainer">
        <h4>You chose this song:</h4>
        <h3>{selectedSong.title} , {selectedSong.duration}</h3>
    </div>
    
}

const mapStateToProps = (state) => ({
    selectedSong: state.selectedSong,
    songs: state.songs
})

export default connect(mapStateToProps)(SongDetail); // вызывается каждый раз когда состояние хранилища меняется
//первый параметр - текущее значение хранилища Redux, второй параметр (если его объявляют) - объект свойств, передеанных компоненту

