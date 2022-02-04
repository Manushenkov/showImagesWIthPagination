import './AlbumIdInput.css'
import React, {ChangeEvent, Dispatch, memo} from 'react'
import {ACTION, ChangeFilter} from '../../types/actions'

interface AlbumIdInputProps {
    value: string
    dispatch: Dispatch<ChangeFilter>
}

const AlbumIdInput = memo(({value, dispatch}: AlbumIdInputProps) => {
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		dispatch({type: ACTION.CHANGE_FILTER, filter: e.target.value})
	}

	return <>
		<label className={'albumId-label'}>albumId</label>
		<input onChange={handleChange} value={value} className={'albumId-input'} type='text'/>
	</>
})

export default AlbumIdInput