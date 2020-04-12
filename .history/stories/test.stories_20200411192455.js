import React from "react";


export default {
    title: "My comps",
    component: Test,
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

