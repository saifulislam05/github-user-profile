import React, { useEffect } from 'react';
import { useState } from 'react';

const FullBody = () => {

    const [inputVal, setInputVal] = useState('');
    const [userData, setUserData] = useState(Object);


    // set input value
    const handleValue = e => {
        setInputVal(e.target.value)
    }

    useEffect(() => {
        handleSubmit();
    })
    var api = `https://api.github.com/users/${inputVal}`

    const handleSubmit = (e) => {
        e.preventDefault();
    const getUserData = async () => {
        const response = await fetch(api);
        const jsonData = await response.json();
        if (jsonData && jsonData.message !== "Not Found") {
            setUserData(jsonData);
            console.log(jsonData);
        } else if (inputVal !== "") {
            console.log("Username dose not exist");
        }
        else {
            setUserData({})
        }
        }
        getUserData()
    }


    console.log(userData.name);
    

    return (
        <div className="flex justify-center items-center w-full h-screen text-slate-200">
            <div className='bg-slate-800 md:w-6/12 h-[500px] border-black p-6 px-8 rounded-xl'>
                <h1 className="text-center text-2xl font-bold mb-6 ">Github User Profile</h1>
                {/* input start  */}
                <div className="w-full flex justify-center">
                    <form className=" flex w-4/6 justify-between">
                        <input
                            id="input"
                            type="text"
                            placeholder="Enter your github username"
                            className="flex-6 w-8/12 bg-slate-700 p-2 px-4 outline-none rounded-full"
                            onChange={e => handleValue(e)}
                            onKeyUp={e => handleValue(e)}
                            onPaste={e => handleValue(e)}
                        />
                        <button id="btn" className="w-3/12 bg-slate-100 text-slate-800 font-bold p-2 rounded-full" onClick={handleSubmit} >Submit</button>
                    </form>
                </div>

                {/*-------------------------- Data output after fetching ------------------------------- */}
                
                <div className="mt-6" >
                    <div className="w-full flex justify-between">
                        {/* user Image  */}
                        {userData.avatar_url && <img id="image" src={userData.avatar_url} alt="user" className="w-3/12 rounded-full  " />}
                        <div className="w-8/12 ">
                            <div className=" flex justify-between mb-4">
                                <div>
                                    {/* Name of the user */}
                                    {userData.name && <p id="name" className="text-3xl font-semibold">{userData.name ? userData.name : `Saiful islam`}</p>}
                                    {/* Username of the user  */}
                                    {userData.login && <p id="userName" className="text-sm my-1">{userData.login}</p>}
                                </div>
                                {/* Joined date at github date */}
                                {userData.created_at &&
                                    <p id="joinDate"> joined <br />{new Date(userData.created_at).toLocaleDateString()}</p>}
                            </div>
                            <div>
                                    {/* Bio/description of the user  */}
                                {userData.bio && <p id="bio" className="text-md my-2">{userData.bio}</p>}
                            </div>
                            <div className="flex justify-between w-full text-center">
                                <div className="">
                                    <h1 >Total Repositories</h1>0
                                    <b id="repos">{userData.repos_url?.id}</b>
                                </div>
                                <div className="">
                                    <h1>Followers</h1>
                                    <b id="followers">2</b>
                                </div>
                                <div>
                                    <h1>Following</h1>
                                    <b id="follwing">70</b>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div >
                        <p className="font-bold text-center text-lg pt-4">Repositories</p>
                        <div className="flex w-full flex-wrap justify-center">
                            <div>repository 1</div>
                            <div>repository 1</div>
                            <div>repository 1</div>
                            <div>repository 1</div>
                            <div>repository 1</div>
                            <div>repository 1</div>
                            <div>repository 1</div>
                            <div>repository 1</div>
                            <div>repository 1</div>
                            <div>repository 1</div>
                            <div>repository 1</div>
                            <div>repository 1</div>
                            <div>repository 1</div>
                            <div>repository 1</div>
                            <div>repository 1</div>
                            <div>repository 1</div>
                            <div>repository 1</div>
                        </div>

                    </div>

                </div>

            </div>


        </div>
    );
}

export default FullBody;
