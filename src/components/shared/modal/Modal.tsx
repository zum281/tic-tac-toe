import React, { FunctionComponent as FC } from 'react'
import { CloseIcon } from '@components/shared/close-icon'
import { Container, Overlay, Close } from './Modal.style'

type Props = {
	onClose: () => void
	children: React.ReactNode
}

export const Modal: FC<Props> = ({ children, onClose }) => {
	return (
		<>
			<Overlay onClick={onClose} />
			<Container>
				<Close onClick={onClose} aria-label='Close'>
					<CloseIcon />
				</Close>
				{children}
			</Container>
		</>
	)
}
