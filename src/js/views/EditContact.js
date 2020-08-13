import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const EditContact = props => {
	const [state, setState] = useState({
		name: null,
		address: null,
		phone: null,
		email: null
	});

	return (
		<div className="container">
			<Context.Consumer>
				{({ actions, store }) => (
                    var contact = store.allContacts.find((element) => )
					<div>
						<h1 className="text-center mt-5">Edit contact</h1>
						<form>
							<div className="form-group">
								<label>Full Name</label>
								<input
									onChange={event => {
										setState({ ...state, name: event.target.value });
									}}
									type="text"
									className="form-control"
									placeholder="Full Name"
									defaultValue=""
								/>
							</div>
							<div className="form-group">
								<label>Email</label>
								<input
									onChange={event => {
										setState({ ...state, email: event.target.value });
									}}
									type="email"
									className="form-control"
									placeholder="Enter email"
								/>
							</div>
							<div className="form-group">
								<label>Phone</label>
								<input
									onChange={event => {
										setState({ ...state, phone: event.target.value });
									}}
									type="phone"
									className="form-control"
									placeholder="Enter phone"
								/>
							</div>
							<div className="form-group">
								<label>Address</label>
								<input
									onChange={event => {
										setState({ ...state, address: event.target.value });
									}}
									type="text"
									className="form-control"
									placeholder="Enter address"
								/>
							</div>
							<button
								// disabled={(!state.name && !state.address) && !state.phone || !state.email}
								onClick={() => {
									actions.editContact(
										state.name,
										state.address,
										state.phone,
										state.email,
										+props.match.params.index
									);
								}}
								type="button"
								className="btn btn-primary form-control">
								save
							</button>
							<Link className="mt-3 w-100 text-center" to="/">
								or get back to contacts
							</Link>
						</form>
					</div>
				)}
			</Context.Consumer>
		</div>
	);
};

EditContact.propTypes = {
	match: PropTypes.object
};
