import '../styles/styles.css';
import { ChangeEvent, useState } from 'react';

export const RegisterPage = () => {
    const [registerData, setRegisterData] = useState({
        name: 'edgard',
        email: 'thevilos@gmail.com',
        password1: '123456',
        password2: '123456',
    });

    const { email, name, password1, password2 } = registerData;

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.target);
    }

    return (
        <div>
            <h1>RegisterPage</h1>

            <form>
                <input 
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={onChange}
                />

                <input 
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={onChange}
                />

                <input 
                    type="password"
                    placeholder="Password"
                    value={password1}
                    onChange={onChange}
                />

                <input 
                    type="password"
                    placeholder="Repeat Password"
                    value={password2}
                    onChange={onChange}
                />

                <button type="submit">Create</button>
            </form>
        </div>
    )
}
