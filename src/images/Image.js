function Image({id, url}) {
    return (
        <div className="image-container">
            <img className="image" src={url} alt="val.alt_description" />
        </div>
    )
}

export default Image