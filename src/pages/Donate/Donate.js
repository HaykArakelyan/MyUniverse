import React, { useState, useEffect } from 'react';
import styles from "./donate.module.css";
import CustomInput from '../../components/customComponents/CustomInput';
import CustomButton from '../../components/customComponents/CustomButton';
import { useNavigate } from "react-router-dom"


export default function Donate() {

    const navigate = useNavigate()

    const [name, setName] = useState()
    const [cardNumber, setCardNumber] = useState()
    const [expiryDate, setExpiryDate] = useState()
    const [cvv, setCvv] = useState()
    const [balance, setBalance] = useState(0)

    const hanldeDonateButtonClick = () => {
        navigate("/donate/success", { replace: true })
        global.balance = global.balance + Number(balance);
    }

    return (
        <div className={styles.container}>
            <img
                src={process.env.PUBLIC_URL + "assets/credit_card.png"}
                className={styles.cardImage}
            />
            <div className={styles.dataInputFields}>
                <CustomInput
                    onChange={setCardNumber}
                    title={"CARD NUMBER"}
                    type={"number"}
                />
                <CustomInput
                    onChange={setName}
                    title={"PLACEHOLDER'S NAME"}
                    type={"text"}
                />
                <CustomInput
                    onChange={setExpiryDate}
                    title={"EXPIRY DATE"}
                    type={"month"}
                />
                <CustomInput
                    onChange={setCvv}
                    title={"CVV"}
                    type={"number"}
                />
                <CustomInput
                    onChange={setBalance}
                    title={"AMOUNT"}
                    type={"number"}
                />

                <CustomButton
                    disabled={!(cardNumber && name && expiryDate && cvv && balance)}
                    onClick={() => hanldeDonateButtonClick()}
                    title={"DONATE"}
                />
            </div>
        </div>
    )
}
