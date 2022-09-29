import React from 'react'
import styles from "./donationSuccess.module.css";
import { RiCheckboxCircleFill } from "react-icons/ri";
import CustomButton from '../../components/customComponents/CustomButton';
import { useNavigate } from "react-router-dom"

export default function DonationSuccess() {
    const navigate = useNavigate()
    return (
        <div className={styles.container}>
            <RiCheckboxCircleFill
                className={styles.checkboxIcon}
                size={100}
            />
            <p className={styles.successMessege}>
                DONATION SUCCESSFUL
            </p>

            <CustomButton
                title={"GO BACK"}
                onClick={() => navigate("/", { replace: true })}
            />
        </div>
    )
}
