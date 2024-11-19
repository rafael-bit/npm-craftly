import { render, screen, fireEvent } from '@testing-library/react';
import { Modal } from '../Modal';

describe('Modal', () => {
	it('renders when isOpen is true', () => {
		render(
			<Modal isOpen={true} onClose={() => { }}>
				Modal Content
			</Modal>
		);
		expect(screen.getByText('Modal Content')).toBeInTheDocument();
	});

	it('does not render when isOpen is false', () => {
		render(
			<Modal isOpen={false} onClose={() => { }}>
				{/* Adiciona children, mesmo que vazio */}
				Modal Content
			</Modal>
		);
		expect(screen.queryByText('Modal Content')).toBeNull();
	});

	it('calls onClose when close button is clicked', () => {
		const handleClose = jest.fn();
		render(
			<Modal isOpen={true} onClose={handleClose}>
				Modal Content
			</Modal>
		);
		fireEvent.click(screen.getByText('×'));
		expect(handleClose).toHaveBeenCalledTimes(1);
	});
});