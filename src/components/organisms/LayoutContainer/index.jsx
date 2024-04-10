/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SCREEN_URL } from "../../../libs/constants";
import Footer from "../Footer";
import Header from "../Header";

const LayoutContainer = ({
  component: Component,
  isHeader,
  isRedirect,
  isFooter,
  title,
}) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const dataUser = JSON.parse(localStorage.getItem("data_user"));

  document.title = title + " • Instagram";

  useEffect(() => {
    if ((!token || !dataUser) && isRedirect) return navigate(SCREEN_URL.LOGIN);
    if (token && dataUser && !isRedirect) return navigate(SCREEN_URL.HOME);
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userCurrent = JSON.parse(localStorage.getItem("data_user"));

    if (!token || !userCurrent || Object.keys(userCurrent).length <= 0) return;
  }, []);

  return (
    <div>
      <div>
        {isHeader && <Header />}
        <Component />
        {isFooter && <Footer />}
      </div>
    </div>
  );
};

export default LayoutContainer;
