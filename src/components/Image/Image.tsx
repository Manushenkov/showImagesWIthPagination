import {Dispatch} from 'react'
import {ACTION, OpenModal} from '../../types/actions'
import {imageData} from '../../types/stateSchema'

interface ImageContainerProps extends Omit<imageData, 'title' | 'albumId'> {
    dispatch: Dispatch<OpenModal>
}

const Image = ({id, url, thumbnailUrl, dispatch}: ImageContainerProps) => {
	const openModal = () => {
		dispatch({type: ACTION.OPEN_MODAL, url, id})
	}
	
	return <img onClick={openModal} src={thumbnailUrl}/>
}

export default Image