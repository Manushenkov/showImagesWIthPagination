import React, {ChangeEvent, useEffect, useReducer} from 'react'
import './App.css'
import axios from 'axios'
import {Pagination} from '@mui/material'
import ImageModal from './components/ImageModal/ImageModal'
import getPageUrl from './helpers/getPageUrl/getPageUrl'
import AlbumIdInput from './components/AlbumIdInput/AlbumIdInput'
import ImagesContainer from './components/ImagesContainer/ImagesContainer'
import {ACTION, ActionType} from './types/actions'
import {imageData, stateSchema} from './types/stateSchema'

const reducer = (state: stateSchema, action: ActionType) => {
	switch (action.type) {
	case ACTION.LOAD_DATA:
		return {...state, imagesData: action.imagesData}

	case ACTION.OPEN_MODAL:
		return {
			...state,
			modalInfo: {
				isModalOpen: true,
				url: action.url,
				id: action.id
			}
		}

	case ACTION.CLOSE_MODAL:
		return {
			...state, modalInfo: {isModalOpen: false}
		}

	case ACTION.CHANGE_PAGE:
		return {
			...state, currentPage: action.page
		}

	case ACTION.CHANGE_FILTER:
		return {
			...state, filter: action.filter, currentPage: 1
		}

	case ACTION.DELETE_IMAGE:
		return {
			...state, imagesData: state.imagesData.filter(({id}) => id !== action.id)
		}

	default:
		return state
	}
}

const initialState = {
	imagesData: [],
	modalInfo: {
		isModalOpen: false,
		url: undefined,
		id: undefined,
	},
	currentPage: 1,
	filter: ''
}

function App() {
	const [state, dispatch] = useReducer(reducer, initialState)

	useEffect(() => {
		axios
			.get(getPageUrl(state.currentPage, state.filter))
			.then(({data}: { data: imageData[] }) => dispatch({type: ACTION.LOAD_DATA, imagesData: data}))
	}, [state.currentPage, state.filter])

	const handleChangePage = (_: ChangeEvent<unknown>, page: number) => dispatch({type: ACTION.CHANGE_PAGE, page})

	// I wrote this to log displayed images because there's no way to differentiate between their id's visually
	useEffect(() => {
		console.log(...state.imagesData.map(({id, albumId}) => ({id, albumId})))
	}, [state.imagesData])

	return (
		<div className="App">
			<div className='wrapper'>
				<AlbumIdInput value={state.filter} dispatch={dispatch}/>
				<ImagesContainer imagesData={state.imagesData} dispatch={dispatch}/>
				<Pagination
					className={'pagination'}
					count={100}
					page={state.currentPage}
					onChange={handleChangePage}
				/>
				<ImageModal
					isModalOpen={state.modalInfo.isModalOpen}
					url={state.modalInfo.url}
					id={state.modalInfo.id}
					dispatch={dispatch}
				/>
			</div>
		</div>
	)
}

export default App
