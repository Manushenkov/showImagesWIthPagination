import getPageUrl from './getPageUrl'

describe('get page url helper', () => {
	const BASE_URL = 'https://jsonplaceholder.typicode.com/photos'

	it('should return correct url with no filter and default pages', () => {
		const expectedUrl = BASE_URL + '/?_start=0&_limit=20'

		expect(getPageUrl(1)).toEqual(expectedUrl)
	})

	it('should return correct url with a filter', () => {
		const expectedUrl = BASE_URL + '/?albumId=44&_start=180&_limit=20'

		expect(getPageUrl(10, '44')).toEqual(expectedUrl)
	})
})
