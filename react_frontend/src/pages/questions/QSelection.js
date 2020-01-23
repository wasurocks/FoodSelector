import React, { useContext } from "react";
import "../../styles/QSelection.css";
import { QuestionContext } from "../../QuestionContext";
import BackTab from "../../components/BackTab";
import RadioGroup from "../../components/RadioGroup";

export default props => {
    const context = useContext(QuestionContext);

    return (
        <div className="qselection">
            <BackTab />
            <div className="title">{props.text}</div>
            <RadioGroup
                className="radiogroup"
                type={props.type}
                values={props.values}
            />
        </div>
    );
}