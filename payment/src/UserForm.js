import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';


const UserForm = () => {

	const [formData, setFormData] = useState({
		recipientToken: '',
		cardNumber: '',
		cardExpDate: '',
		cardCVV: '',
		currency: '',
		amount: '',
	});


	const [validated, setValidated] = useState(false);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const form = e.currentTarget;

		if (form.checkValidity() === false) {
			e.stopPropagation();
		} else {
			try {
				const response = await fetch('http://localhost:5000/api/data', {
					method: 'POST', // or 'GET' depending on your API endpoint
					headers: {
						'Content-Type': 'application/json', // Adjust content type as needed
					},
					body: JSON.stringify(formData), // Assuming formData is defined somewhere
				});

				if (!response.ok) {
					throw new Error('Network response was not ok');
				}

				const data = await response.json();
				console.log('Form submitted successfully:', data);
				Alert('Form submitted successfully')
			} catch (error) {
				console.error('Error submitting form:', error);
			}
		}

		setValidated(true);
	};


	return (

		<div>
			<Form noValidate validated={validated} onSubmit={handleSubmit}>

				<Form.Group controlId="cardNumber">
					<Form.Label>Card Number</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter card number"
						name="cardNumber"
						value={formData.cardNumber}
						onChange={handleInputChange}
						required
					/>
					<Form.Control.Feedback type="invalid">
						Please provide a valid card number.
					</Form.Control.Feedback>
				</Form.Group>

				<Form.Group controlId="cardExpDate">
					<Form.Label>Card Expiry Date</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter card expiry date"
						name="cardExpDate"
						value={formData.cardExpDate}
						onChange={handleInputChange}
						required
					/>
					<Form.Control.Feedback type="invalid">
						Please provide a valid expiry date.
					</Form.Control.Feedback>
				</Form.Group>

				<Form.Group controlId="cardCVV">
					<Form.Label>Card CVV</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter card CVV"
						name="cardCVV"
						value={formData.cardCVV}
						onChange={handleInputChange}
						required
					/>
					<Form.Control.Feedback type="invalid">
						Please provide a valid CVV.
					</Form.Control.Feedback>
				</Form.Group>

				<Form.Group controlId="currency">
					<Form.Label>Currency</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter currency"
						name="currency"
						value={formData.currency}
						onChange={handleInputChange}
						required
					/>
					<Form.Control.Feedback type="invalid">
						Please provide a valid currency.
					</Form.Control.Feedback>
				</Form.Group>

				<Form.Group controlId="amount">
					<Form.Label>Amount</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter amount"
						name="amount"
						value={formData.amount}
						onChange={handleInputChange}
						required
					/>
					<Form.Control.Feedback type="invalid">
						Please provide a valid amount.
					</Form.Control.Feedback>
				</Form.Group>

				<Button type="submit">Submit</Button>
			</Form>


		</div>

	)
}

export default UserForm