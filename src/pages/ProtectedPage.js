import React from "react";
import { Navigate } from "react-router-dom";

export const ProtectedPage = () => {
    const isAuthed = true;
    return isAuthed
        ? (<h1>Only authed users should be able to see this</h1>)
        : (<Navigate to="/" />)
}