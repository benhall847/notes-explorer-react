import React, { Component } from "react";
import Notes from "./Notes";

function NoteEditor({ title, note, changeHandler, saveHandler, id }) {
	return (
		<div>
			<div>{title}</div>
			<textarea
				value={note}
				onChange={e => {
					changeHandler(e.target.value);
				}}
			/>
			<button
				onClick={e => {
					saveHandler(e.target.id, e.target.value);
				}}
				value={note}
				id={id}
			>
				SAVE IT!
			</button>
		</div>
	);
}

export class NotesDetail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			editMode: false,
			noteDraft: props.note.text,
			id: props.note.id
		};
	}
	_editMode = () => {
		this.setState({
			editMode: !this.state.editMode
		});
	};
	static getDerivedStateFromProps(props, state) {
		if (props.note.id !== state.id) {
			return {
				id: props.note.id,
				noteDraft: props.note.text
			};
		} else {
			return null;
		}
	}
	_changeTheText = text => {
		this.setState({ noteDraft: text });
	};
	render() {
		const { note, changeHandler } = this.props;
		const { editMode, noteDraft } = this.state;
		return (
			<div>
				{editMode ? (
					<NoteEditor
						title={note.title}
						note={noteDraft}
						changeHandler={this._changeTheText}
						saveHandler={changeHandler}
						id={note.id}
					/>
				) : (
					<div>
						<div>{note.title}</div>
						{noteDraft}
					</div>
				)}
				<button
					onClick={() => {
						this._editMode();
					}}
				>
					EDIT IT!
				</button>
			</div>
		);
	}
}

export default NotesDetail;
