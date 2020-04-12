import React from "react";
import  from "../comps/CustomButton";

export default {
    title: "My comps",
    component: Button,
};

export const MyCustomButton = () => <CustomButton />;

export const MyCustomButtonWithOptions = () => <CustomButton
    color="#ffcf0f"
    text="OK"
    OnClick={OkayClick}
/>
export const MyHeader = () => <Header />;

export const MyInput = () => <Input />;

export const MyInputWithPlaceholder = () => <Input
    placeholder="Custom placeholder"
/>;

export const MyChat = () => <Chat />;

export const MyChatPage = () => <ChatPage />;

