"use client";
import styled from "styled-components";
import { useContext, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { UserContext } from "@/app/context/usercontext";
import Loading from "@/app/loading";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const FormWrapper = styled.form`
  background: #ffffff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  width: 100%;
  max-width: 400px;
  box-sizing: border-box;
  text-align: center;
`;

const Title = styled.h2`
  margin-bottom: 1.5rem;
  color: #333;
  font-size: 1.8rem;
`;

const OtpContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const OtpInput = styled.input`
  width: 3rem;
  height: 3rem;
  text-align: center;
  font-size: 1.5rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  transition: border-color 0.3s;

  &:focus {
    border-color: #005bb5;
    outline: none;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: #005bb5;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #004494;
  }
`;

const VerifyEmailPage = () => {
  const [otp, setOtp] = useState("");
  const context = useContext(UserContext);
  const { loading, setLoading } = context;
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation: Check if OTP is empty
    if (!otp || otp.length < 6) {
      toast.error("Please enter a valid 6-digit OTP.");
      return;
    }

    setLoading(true);
    axios
      .post(`/api/users/verifyemail`, { otp })
      .then((res) => {
        console.log(res);
        toast.success("Email Verified");
        router.push("/pages/login");
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.message);
        setLoading(false);
      });
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <title>Verify Email - Foodify</title>
      <Container>
        <FormWrapper onSubmit={handleSubmit}>
          <Title>Verify Email</Title>
          <OtpContainer>
            {[...Array(6)].map((_, index) => (
              <OtpInput
                key={index}
                type="text"
                maxLength="1"
                value={otp[index] || ""}
                onChange={(e) => {
                  const val = e.target.value;
                  if (/^[0-9]$/.test(val) || val === "") {
                    setOtp((prevOtp) =>
                      prevOtp.substring(0, index) +
                      val +
                      prevOtp.substring(index + 1)
                    );
                    if (e.target.nextSibling) {
                      e.target.nextSibling.focus();
                    }
                  }
                }}
              />
            ))}
          </OtpContainer>
          <Button type="submit">Verify</Button>
        </FormWrapper>
      </Container>
    </>
  );
};

export default VerifyEmailPage;
