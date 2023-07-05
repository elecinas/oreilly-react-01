import React, { useState } from "react";
import { Button } from "../Button";

export const ControlledFormPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [favoriteColor, setFavoriteColor] = useState("");
    return (
        <form>
            <h3>Please enter your information</h3>
            <div>
                <input 
                    type="text" 
                    placeholder="Name"
                    onChange={ e => setName(e.target.value) } 
                    value={name} />
            </div>
            <div>
                <input 
                    type="text" 
                    placeholder="Email"
                    onChange={ e => setEmail(e.target.value) } 
                    value={email} />
            </div>
            <div>
                <input 
                    type="text" 
                    placeholder="Favorite color"
                    onChange={ e => setFavoriteColor(e.target.value) } 
                    value={favoriteColor} />
            </div>
            <Button buttonColor="green" onClick={ e => {
                alert(`
                    Your name is ${name}
                    your email is ${email}
                    and your favorite color is ${favoriteColor}
                `);
                e.preventDefault();
            }}>Submit</Button>
        </form>
    );
}