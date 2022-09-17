
import React from "react";
const FullBody = () => {


    return (
        <div className="flex justify-center items-center w-full h-screen text-slate-200">
            <div className='bg-slate-800 w-6/12 h-[500px] border-black p-6 px-8 rounded-xl'>
                <h1 className="text-center text-2xl font-bold mb-6 ">Github User Profile</h1>
                {/* input start  */}
                <div className="w-full flex justify-center">
                    <form className=" flex w-4/6 justify-between">
                        <input id="input" type="text" placeholder="Enter your github username" className="flex-6 w-8/12 bg-slate-700 p-2 px-4 outline-none rounded-full" />
                        <button id="btn" className="w-3/12 bg-slate-100 text-slate-800 font-bold p-2 rounded-full " >Submit</button>
                    </form>
                </div>
                {/* Input end */}
                <div className="mt-6" >
                    <div className="w-full flex justify-between">
                        <img id="image" src='https://avatars.githubusercontent.com/u/73392705?v=4' alt="user" className="w-3/12 rounded-full  " />
                        <div className="w-8/12 ">
                            <div className=" flex justify-between mb-4">
                                <div>
                                    <p id="name" className="text-3xl font-semibold">Saiful islam</p>
                                    <p id="userName" className="text-sm my-1">saifulislam05</p>
                                </div>
                                <p id="joinDate">joined 21050545</p>
                            </div>
                            <div>
                                <p id="bio" className="text-md my-2">sorry we are not getting anything of you bio</p>
                            </div>
                            <div className="flex justify-between w-full text-center">
                                <div className="">
                                    <h1 >Total Repositories</h1>
                                    <b id="repos">19</b>
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
