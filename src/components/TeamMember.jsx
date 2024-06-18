import "bootstrap-icons/font/bootstrap-icons.css";

function TeamMember({name, role, photo}) {



    return (
        <>
                <div className="containerTeam mt-6 mb-6" >
                    <div className="box relative">
                        <div className="imgBox">
                            <img className="rounded-full border-black border-4 shadow-black shadow-lg"
                                                     src={photo}
                                                     alt=""/></div>
                        <div className="content">
                            <h2>{name}<br/>
                                <span className="pt-12">{role}</span></h2>
                        </div>
                    </div>
                </div>

        </>

    )

}


export default TeamMember;