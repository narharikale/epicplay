function VerticalVideoCard({ video }){
    return (
        <div>
            <img key={ video._id } src={`https://i.ytimg.com/vi_webp/${video.thumbnail_id}/movieposter.webp`} alt="broken" />
        </div>
    )
}

export { VerticalVideoCard }