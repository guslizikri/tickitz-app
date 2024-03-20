import React, { useState, useEffect } from "react";
import useApi from "../../utils/axios";

import { Link } from "react-router-dom";
import Header from "../../components/Header";
import ProfileCard from "../../components/Profile";
import FormProfile from "../../components/FormProfile";
import NavProfile from "../../components/NavProfile";
import NavProfileMobile from "../../components/NavProfileMobile";

import { useNavigate } from "react-router-dom";
import TableAdmin from "../../components/TableAdmin";

function Profile() {
  const api = useApi();

  //   get profile user
  const [profile, setProfile] = useState(null);

  const getUser = (e) => {
    api
      .get("user")
      .then(({ data }) => {
        setProfile(data.data[0]);
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
  console.log(profile);
  return (
    <div className="">
      <Header />
      <section className="relative bg-slate-200">
        <NavProfileMobile />

        <main className=" lg:container min-h-screen p-8 flex gap-5 justify-center">
          {profile && (
            <ProfileCard fullname={profile.fullname} img={profile.img} />
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
