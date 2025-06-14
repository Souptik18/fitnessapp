import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { homeContext } from "../Layout/Layout";
import { auth } from "@/firebase";
import { applyActionCode } from "firebase/auth";

function Verify() {
  const [loading, setLoading] = useState(true);
  const urlParams = new URLSearchParams(window.location.search);
  const oobCode = urlParams.get("oobCode");
  const { Loader } = useContext(homeContext);
  const navigate = useNavigate();

  useEffect(() => {
    const verifyAccount = async () => {
      try {
        await applyActionCode(auth, oobCode);
        toast.success("Account verified successfully", {
          position: "top-right",
          autoClose: 1800,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
        setTimeout(() => {
          navigate("/home");
        }, 2200);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };

    verifyAccount();
  }, [oobCode, navigate]);

  if (loading) {
    return <div className="text-center ">Verifying account...</div>;
  }

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="text-center">
        <Loader />
        <ToastContainer />
      </div>
    </div>
  );
}

export default Verify;
