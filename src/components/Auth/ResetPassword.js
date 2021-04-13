import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { resetUserPassword } from "./helper";
const ResetPassword = () => {
  const { resetLink } = useParams();

  const [values, setValues] = useState({
    newPass: "",
    confirmNewPass: "",
    error: "",
    success: false,
  });

  const [visiblity,setVisiblity] = useState({
    newPass:false,
    confirmNewPass:false
  })

  const { newPass, confirmNewPass, error, success } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleSubmit = () => {
    if (newPass !== confirmNewPass) {
      setValues({ ...values, error: "Password does not match !!" });
      setTimeout(()=>{
        setValues({ ...values, error: "" });
      },4000);
    } else {
      setValues({ ...values, error: "" });
    }

    if(newPass === confirmNewPass)
    {
      resetUserPassword({ newPass, resetLink }).then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error });
          setTimeout(()=>{
            setValues({ ...values, error: "" });
          },4000);
        } else {
          setValues({ ...values, success: true });
        }
      });
    }
  };

  const errorMessage = () => {
    return (
      <div className="row">
        <div className="col-md-12 ">
          <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
          >
            <p><i class="fa fa-times" aria-hidden="true"></i>{'  '}{error}</p>
          </div>
        </div>
      </div>
    );
  };
  const successMessage = () => {
    return (
      <div className="row">
        <div className="col-md-12 ">
          <div
            className="alert alert-success"
            style={{ display: success ? "" : "none" }}
          >
            <p><i class="fa fa-check" aria-hidden="true"></i>{'  '}Password Changed Successfully</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div >
      <h1 style={{backgroundColor:"#0e101c"}} className="text-center jumbotron text-white">Change Password</h1>
      <div className="row">
        <div className="col-2"></div>
        <div className="col-8 mx-auto">
          <form className=" my-4 mx-auto" style={{maxWidth:"100%",width:"500px"}}>
            {errorMessage()}
            {successMessage()}
            <div className="form-group">
              <label for="exampleInputPassword1" className="text-white">New password</label>
              <div className="d-flex bg-white"
            style={{
              borderRadius: "4px",
              height: "45px",
              marginBottom: "10px",
              height: "50px",
            }}>
                <input
                  type={visiblity.newPass ? "text" : "password"}
                  className="auth-input"
                  name="newPass"
                  onChange={handleChange("newPass")}
                  id="exampleInputPassword1"
                  placeholder="Password"
                  style={{ outline: "none", paddingTop: "20px" }}
                />
                <i
                style={{ fontSize: "20px", color: "black" }}
                className={
                  !visiblity.newPass
                    ? "fa fa-eye-slash my-auto mx-2"
                    : "fa fa-eye my-auto mx-2"
                }
                aria-hidden="true"
                onClick={() => setVisiblity({...visiblity,newPass:(!visiblity.newPass)})}
                />
              </div>
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1" className="text-white">Confirm new password</label>
              <div className="d-flex bg-white"
            style={{
              borderRadius: "4px",
              height: "45px",
              marginBottom: "10px",
              height: "50px",
            }}>
                  <input
                     type={visiblity.confirmNewPass ? "text" : "password"}
                    className="auth-input"
                    name="confirmNewPass"
                    onChange={handleChange("confirmNewPass")}
                    id="exampleInputPassword1"
                    placeholder="Password"
                    style={{ outline: "none", paddingTop: "20px" }}
                  />
                  <i
                  style={{ fontSize: "20px", color: "black" }}
                  className={
                    !visiblity.confirmNewPass
                      ? "fa fa-eye-slash my-auto mx-2"
                      : "fa fa-eye my-auto mx-2"
                  }
                  aria-hidden="true"
                  onClick={() => setVisiblity({...visiblity,confirmNewPass:!visiblity.confirmNewPass})}
                  />                 
              </div>
            </div>
            <div className={success ? "d-none" : ""}>
             
              <p
            className="auth-input text-center"
            type="submit"
            style={{ marginTop: "20px" }}
            onClick={() => handleSubmit()}
          >Submit</p>
            </div>
          </form>
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
};

export default ResetPassword;
