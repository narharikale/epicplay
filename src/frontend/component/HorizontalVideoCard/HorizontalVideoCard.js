function HorizontalVideoCard({ video }){
    return (
        <div>
            <img key={ video._id } src={`https://i.ytimg.com/vi_webp/${video._id}/movieposter.webp`} alt="broken" />
        </div>
    )
}

export { HorizontalVideoCard }