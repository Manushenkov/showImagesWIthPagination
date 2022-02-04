const PICTURES_URL = 'https://jsonplaceholder.typicode.com/photos'
const pageSize = 20

const getPageUrl = (page: number, albumIdFilterValue?: string) => {
	let albumIdFilter = ''
	
	if (albumIdFilterValue) {
		albumIdFilter = `albumId=${albumIdFilterValue}&`
	}

	return PICTURES_URL + `/?${albumIdFilter}_start=${(page - 1) * pageSize}&_limit=${pageSize}`
}

export default getPageUrl