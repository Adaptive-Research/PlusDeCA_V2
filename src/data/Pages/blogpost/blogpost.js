import React, {useState} from "react";
import MultiSelect from "react-multiple-select-dropdown-lite";
import "react-multiple-select-dropdown-lite/dist/index.css";

export function Categorys(props) {
    const [value, setvalue] = useState("");

    const handleOnchange = () => {
        setvalue((e) => e.target.value);
        console.log(value);
    };
    return (
        <form>
            <MultiSelect
                name="beast"
                id="select-beasts"
                onChange={props.change}
                options={props.Optioncategorys}
                singleSelect="true"
            />
        </form>

    );
}
