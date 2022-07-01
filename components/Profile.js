import React, { useEffect,useState } from "react";
import Common from "./Common";
import web from "../images/ppicon.png";
import { useHistory } from "react-router-dom";

const Profile = () => {

    const history = useHistory();
    const [userData,setUserData] = useState({});
    const callProfilePage = async () => {
        try {
            const res = await fetch('/Profile', {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });

            const data = await res.json();
            console.log(data);
            setUserData(data);
            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }
        } catch (err) {
            console.log(err);
            history.push('/Login');
        }
    }

    useEffect(() => {
        callProfilePage();
    }, []);

    return (
        <>
            <div className="container-fluid card text-center gradient-custom-3">
                <h1 className="m-3">Welcome to your Profile, <b>{userData.name} </b></h1>
                <hr/>
                <form method="GET">
                    <div className="row">
                        <div className="col-md-3 m-5">
                            <img src={web} alt="pp" className="img-profile" />
                            <div className="name-profile my-3">
                                {userData.name} <br />
                                {userData.department}
                            </div>
                        </div>
                        <div className="col-md-5 ms-0 my-5">
                            <div className="row name-profile">
                                <div className="col-md-6">
                                    <label>Student</label>
                                </div>
                                <div className="col-md-6">
                                    <p>{userData.name}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <label>User ID</label>
                                </div>
                                <div className="col-md-6">
                                    <p>{userData._id}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <label>Name</label>
                                </div>
                                <div className="col-md-6">
                                    <p>{userData.name}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <label>Email</label>
                                </div>
                                <div className="col-md-6">
                                    <p>{userData.email}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <label>Phone</label>
                                </div>
                                <div className="col-md-6">
                                    <p>{userData.phone}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <label>Department</label>
                                </div>
                                <div className="col-md-6">
                                    <p>{userData.department}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* row1 end */}
                </form>
            </div>
        </>
    );
};

export default Profile;