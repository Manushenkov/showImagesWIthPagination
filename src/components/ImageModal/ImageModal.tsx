import {Modal} from '@mui/material'
import {Dispatch, memo} from 'react'
import './ImageModal.css'
import {ACTION, CloseModal, DeleteImage} from '../../types/actions'

interface ImageModalProps {
    isModalOpen: boolean,
    dispatch: Dispatch<CloseModal | DeleteImage>,
    url?: string,
    id?: number
}

const ImageModal = memo(({isModalOpen, dispatch, url, id}: ImageModalProps) => {
	const onCloseModal = () => {
		dispatch({type: ACTION.CLOSE_MODAL})
	}

	const onImageDelete = () => {
		dispatch({type: ACTION.DELETE_IMAGE, id})
		dispatch({type: ACTION.CLOSE_MODAL})
	}

	return <Modal
		open={isModalOpen}
		onClose={onCloseModal}
	>
		<div className={'image-modal'}>
			<img className={'image-modal__image'} src={url}/>
			<button className={'image-modal__button'} onClick={onImageDelete}>
                delete
			</button>
		</div>
	</Modal>
})

export default ImageModal