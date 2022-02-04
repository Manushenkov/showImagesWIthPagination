import {imageData} from './stateSchema'

export type SaveTests = { type: ACTION.LOAD_DATA; imagesData: imageData[] }
export type OpenModal = { type: ACTION.OPEN_MODAL; url: imageData['url'], id: imageData['id'] }
export type CloseModal = { type: ACTION.CLOSE_MODAL }
export type ChangePage = { type: ACTION.CHANGE_PAGE, page: number }
export type ChangeFilter = { type: ACTION.CHANGE_FILTER, filter: string }
export type DeleteImage = { type: ACTION.DELETE_IMAGE, id?: number }
export type ActionType = SaveTests | OpenModal | CloseModal | ChangePage | ChangeFilter | DeleteImage

export enum ACTION {
    LOAD_DATA = 'LOAD_DATA',
    OPEN_MODAL = 'OPEN_MODAL',
    CLOSE_MODAL = 'CLOSE_MODAL',
    CHANGE_PAGE = 'CHANGE_PAGE',
    CHANGE_FILTER = 'CHANGE_FILTER',
    DELETE_IMAGE = 'DELETE_IMAGE'
}