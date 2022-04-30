export const getFilterdVideos = (videos , categoryName) => {
    if(categoryName === 'All') return videos;
    return videos.filter(video => video.category === categoryName )
}