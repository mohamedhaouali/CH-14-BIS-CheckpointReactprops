import React from 'react';
import PropTypes from 'prop-types';

function Profile(props) {
    console.log(props.handleClick);
    return (
        <div>
            <p className="Name" >
                <h1 style={{ color: "red" }}> Name :</h1>
                <span>{props.FullName}</span>
            </p>
            <p className="bio">
                <h1 style={{ color: "red" }}> Bio :</h1>
                <span>{props.Bio}</span>
            </p>

            <p className="Profession">
                <h1 style={{ color: "red" }}> Profession: </h1>
                <span>{props.Profession}</span>
            </p>

            <p className="children">
                {props.children}
            </p>

            <button style={{ background: "#008CBA", fontSize: "20px", color: "white" }} onClick={() => props.handleClick(props.FullName)}>Click</button>


        </div >
    );
};

export default Profile;


const ProfileComponent = (props) => {
    return (<div><p>{props.fullName} - {props.bio} - {props.profession}</p></div>);
};

ProfileComponent.defaultProps = {
    fullName: "Mohamed Haouali",
    bio: "Versatile Software Engineer training engineer with a solid management background,  I design and build websites, Android web and mobile applications. Passionate",
    profession: "Software development engineer"

}
/*
PersonComponent.propTypes = {
                    fullName: PropTypes.string,
                bio: PropTypes.string,
                profession: PropTypes.string

};
                */
ProfileComponent.propTypes = {
    person: PropTypes.shape({
        fullName: PropTypes.string.isRequired,
        bio: PropTypes.string,
        profession: PropTypes.string

    })
}





