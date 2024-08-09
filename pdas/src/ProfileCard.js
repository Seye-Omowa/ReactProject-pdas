function ProfileCard({title, handle, image, content}) {
    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-3by3">
                    <img src={image} alt="pda logo" />
                </figure>
            </div>
            
            <div className="card-content">
                <div className="media">
                    <div className="media-left">
                        <figure className="image is-48x48">
                            <img src={image} alt="pda logo"/>
                        </figure>
                    </div>
                    <div className="media-content">
                        <p className="title is-4">{title}</p>
                        <p className="title is-6">{handle}</p>
                    </div>
                </div>
                <div className="content">
                    <p>{content}</p>
                </div>
            </div>


        </div>
    )
}

export default ProfileCard;