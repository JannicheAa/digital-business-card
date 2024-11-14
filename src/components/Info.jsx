
export default function Info(){
    return (
        <div>
            <img className="profile-picture" src="./images/profile-picture.png" />
            <div className="person-details">
                <h1>Laura Smith</h1>
                <p className="job-title">Frontend developer</p>
                <p>laurasmith.website</p>
                <div className="btn-container">
                    <button className="btn-mail">
                        <img className="btn-icon" src="./images/mail.png" />
                        Mail
                    </button>
                    <button className="btn-linkedin">
                        <img className="btn-icon" src="./images/linkedin-small-icon.png" />
                        LinkedIn
                    </button>
                </div>
            </div>
        </div>
    )
}