import Image from '../Image/Image'
import {Dispatch} from 'react'
import './ImagesContainer.css'
import {OpenModal} from '../../types/actions'
import {imageData} from '../../types/stateSchema'

interface ImagesContainerProps {
    imagesData: imageData[]
    dispatch: Dispatch<OpenModal>
}

const ImagesContainer = ({imagesData, dispatch}: ImagesContainerProps) => {
	return (
		<div className={'images-container'}>
			{imagesData.map((data) => <Image {...data} dispatch={dispatch} key={data.id}/>)}
		</div>
	)
}

export default ImagesContainer