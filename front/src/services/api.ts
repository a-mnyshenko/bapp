export const SignIn = async (email: string, password: string) => {
    const response = await fetch("http://localhost:4000/auth/signin", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    });
    return response.json();
}

export const SignUp = async (email: string, password: string) => {
    const response = await fetch("http://localhost:4000/auth/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    });
    return response.json();
}

export const SignUpConfirm = async (email: string, password: string) => {
    const response = await fetch("http://localhost:4000/auth/signup-confirm", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    });
    return response.json();
}