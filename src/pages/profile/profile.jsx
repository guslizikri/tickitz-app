import React, { useState, useEffect } from "react";
import useApi from "../../utils/axios";
import Header from "../../components/Header";
import ProfileCard from "../../components/Profile";
import FormProfile from "../../components/FormProfile";
import NavProfile from "../../components/NavProfile";
import NavProfileMobile from "../../components/NavProfileMobile";
import { useDispatch, useSelector } from "react-redux";
import { getprofile } from "../../store/reducer/user";
import defaultProfile from "../../assets/img/profile-default.png";

function Profile() {
  const api = useApi();
  const { profile } = useSelector((s) => s.users);
  const dispatch = useDispatch();

  const getUser = (e) => {
    api
      .get("user")
      .then(({ data }) => {
        dispatch(getprofile(data.data[0]));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //   end profile user
  useEffect(() => {
    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="">
      <Header />
      <section className="relative bg-slate-200">
        <NavProfileMobile />

        <main className=" lg:container min-h-screen p-8 flex gap-5 justify-center">
          {profile && (
            <ProfileCard
              fullname={profile.fullname ? profile.fullname : "Your Name"}
              img={profile.img ? profile.img : defaultProfile}
            />
          )}
          <div className="hidden md:block setting w-3/4">
            <NavProfile />
            <div className="hidden md:block">
              <FormProfile />
            </div>
          </div>
        </main>
      </section>
    </div>
  );
}

export default Profile;
