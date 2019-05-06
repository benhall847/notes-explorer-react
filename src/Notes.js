import React, { Component } from "react";
import NotesList from "./NotesList";
import NotesDetail from "./NotesDetail";
import styles from "./Notes.module.css";

export class Notes extends Component {
	constructor(props) {
		super(props);
		this.state = {
			notes: [
				{
					id: "1",
					title: "first note",
					text: "this is an amazing note"
				},
				{
					id: "2",
					title: "second note",
					text: "this is an amazing note LOOK HOW GOOD IT IS"
				},
				{
					id: "3",
					title: "third note",
					text: "this is an amazing note I DONT LIKE IT"
				}
			],
			currentNote: null
		};
	}
	_changeTheNote = currentNote => {
		this.setState({ currentNote });
	};
	_updateTheNote = (idToUpdate, newText) => {
		console.log("YES");
		console.log(idToUpdate);
		console.log(newText);
		const updatedNotes = this.state.notes.map(eaNote => {
			if (eaNote.id === idToUpdate) {
				return {
					...eaNote,
					text: newText
				};
			} else {
				return { ...eaNote };
			}
		});
		this.setState({ notes: updatedNotes });
	};
	render() {
		const { app, list, detail } = styles;
		const selectedNote = this.state.notes.find(
			note => this.state.currentNote === note.id
		);

		return (
			<div className={app}>
				<div className={list}>
					<NotesList
						notes={this.state.notes}
						changeHandler={this._changeTheNote}
					/>
				</div>
				<div className={detail}>
					{this.state.currentNote ? (
						<NotesDetail
							note={selectedNote}
							changeHandler={this._updateTheNote}
						/>
					) : null}
				</div>
			</div>
		);
	}
}

export default Notes;
