/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styles from "./NotesList.module.css";

function NotesListItem({ text, changeHandler, id }) {
	return (
		<li>
			<a
				href="#"
				onClick={e => {
					e.preventDefault();
					changeHandler(id);
				}}
			>
				{text}
			</a>
		</li>
	);
}

export default function NotesList({ notes, changeHandler }) {
	return (
		<ul className={styles.list}>
			{notes.map(({ title, id }) => (
				<NotesListItem
					id={id}
					text={title}
					changeHandler={changeHandler}
				/>
			))}
		</ul>
	);
}
