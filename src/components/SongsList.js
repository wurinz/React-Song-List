import React from 'react';
import { connect } from 'react-redux';
import { selectSong, addSong, deleteSong, selectEditSong } from '../actions';
import EditSong from './EditSong';
import { v4 } from 'uuid';

class SongsList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            duration: ''
        };
    }

    renderList() {
        const { songs, selectSong, deleteSong, selectEditSong } = this.props;

        return songs.map((song) => {
            return (
                <div key={song.title} className='item'>
                    <div className='itemTitle'>{song.title}, {song.duration}</div>
                    <div className='itemButtons'>
                        <button onClick={() =>{
                                selectSong(song);
                                console.log(song);
                            }} className='ui button primary'>                            
                            Select
                        </button>
                        <button onClick={() => {selectEditSong(song)}}>
                            Edit
                        </button>
                        <button onClick={() => {deleteSong(song.id)}} className='ui button primary'>
                            Remove
                        </button>                      
                    </div>
                </div>
            );
        });
    }

    render() {
        const { addSong } = this.props;
        const { title, duration } = this.state;

        return (
            <div>
                <div className="interactionFields"> 
                <form onClick={(e) => e.preventDefault()} className="songField">
                    <h2>Add song</h2>
                    <div className="field">
                            <label>Title</label>
                            <input
                                type="text"
                                value={title}
                                name="first-name"
                                placeholder="Title"
                                onChange={(e) => {
                                    this.setState({
                                        title: e.target.value
                                    })
                                }}/>
                    </div>
                    <div className="field">
                        <label>Duration</label>
                        <input
                            type="text"
                            value={duration}
                            name="last-name"
                            placeholder="Duration"
                            onChange={(e) => {
                                this.setState({
                                    duration: e.target.value
                                })
                            }}/>
                    </div>
                    <button
                        disabled={!title.length || !duration.length}
                        className="headerButton"
                        type="submit"
                        onClick={() => {
                        addSong({
                            id: v4(),
                            title: title,
                            duration: duration
                        });
                        this.setState({
                            title: '',
                            duration: ''
                        })
                    }}>Add song</button>
                </form>
                <EditSong songList={this.props.songs}/>
                </div>
                <div className='songsList'>
                    <h2>Songs</h2>
                    {this.renderList()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    songs: state.songs,
});

export default connect(mapStateToProps, {
    selectEditSong,
    selectSong,
    addSong,
    deleteSong
})(SongsList);



