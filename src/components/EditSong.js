import React from 'react';
import { connect } from 'react-redux';
import { combineReducers } from 'redux';
import { selectEditSong, selectSong, songs } from '../actions';
import { editSongAction } from "../actions";

class EditSong extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // title:  "",
            // duration: "",
            // id: "",
        };
    }

    static getDerivedStateFromProps(newProps, state) {         //без getDerivedStateFromProps не будет передаваться стейт в инпут
        const {title, duration, id} = newProps.editSong;
    
        console.log("getDerivedStateFromProps")
        console.log(newProps);


        if( id !== state.id ){ //!!!!!!!
            return {
                title,
                duration,
                id
            }
        } 
        return state;
    }    

    render() {
        // const { selectEditSong } = this.props.selectEditSong
        let { songList } = this.props
        let { editSongAction } = this.props

        return(
            <form className="songField">
                <h2>Edit song</h2>
                <div className="field">
                    <label>Title</label>
                    <input
                        type="text"
                        name="first-name"
                        placeholder="Title of edit song"
                        value={this.state.title}
                        onChange={(e) => {
                            // this.state.value = e.target.value
                            this.setState({
                                title: e.target.value
                            })
                        }}/>
                </div>
                <div className="field">
                    <label>Duration</label>
                    <input
                        type="text"
                        name="last-name"
                        placeholder="Duration of edit song"
                        value={this.state.duration}
                        onChange={(e) => {
                            this.setState({
                                duration: e.target.value
                            });
                            
                        }}
                    />
                </div>
                <button
                    className="headerButton"
                    type="submit"
                    onClick={(e) => {
                        e.preventDefault();                        
                        editSongAction({
                            ...this.state
                        });
                    }}>Submit edit</button>
            </form>
            
        );
    }
}

const mapStateToProps = (state) => ({
    editSong: state.selectEditSong
});

export default connect(mapStateToProps, {editSongAction})(EditSong); //первым аргументом в первых скобках принимается мэп стейт ту пропс, вторым мы диспатчим экшн. Во вторых скобках передаём название компоненты
