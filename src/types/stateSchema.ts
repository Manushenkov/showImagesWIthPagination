export type imageData = {
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string
}

export type stateSchema = {
    imagesData: imageData[]
    modalInfo: {
        isModalOpen: boolean
        url?: imageData['url']
        id?: imageData['id']
    }
    currentPage: number
    filter: string
}