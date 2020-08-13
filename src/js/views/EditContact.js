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
<<<<<<< HEAD
				{({ actions, store }) => {
					var contact = store.allContacts.find(element => element.id == props.match.params.id);
					console.log(contact);

					return (
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
										defaultValue={contact.full_name}
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
										defaultValue={contact.email}
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
										defaultValue={contact.phone}
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
										defaultValue={contact.address}
									/>
								</div>
								<button
									// disabled={(!state.name && !state.address) && !state.phone || !state.email}
									onClick={() => {
										actions.editContact(
											state.name == null ? contact.full_name : state.name,
											state.address == null ? contact.address : state.address,
											state.phone == null ? contact.phone : state.phone,
											state.email == null ? contact.email : state.email,
											+props.match.params.id
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
					);
				}}
=======
				{({ actions, store }) => (

                    var contact = store.allContacts.find((element) => element.id == props.match.params.id);

                    return ()
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
									defaultValue={contact.full_name}
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
                                    defaultValue={contact.email}
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
                                    defaultValue={contact.phone}
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
                                    defaultValue={contact.address}
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
>>>>>>> 315ec1271dc75c0a6097d20ab21f2266b6ff349a
			</Context.Consumer>
		</div>
	);
};

EditContact.propTypes = {
	match: PropTypes.object
};
