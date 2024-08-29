import React, {useEffect, useRef, useState} from "react";

interface AutoResizableTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const AutoResizableTextarea: React.FC<AutoResizableTextareaProps> = (
    {
        value,
        onChange,
        ...props
    }) => {

    const textareaRef = useRef<HTMLTextAreaElement | null>(null);
    const [lineHeight, setLineHeight] = useState("36px");

    const autoResizeTextarea = () => {
        if (textareaRef.current) {
            if ("style" in textareaRef.current) {
                textareaRef.current.style.height = "auto";
                textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;

            }
            if ("scrollHeight" in textareaRef.current && textareaRef.current.scrollHeight > 36) {
                setLineHeight("24px");
            } else {
                setLineHeight("36px");
            }

        }
    };

    useEffect(() => {
        autoResizeTextarea();
    }, [value, lineHeight]);

    return (
        <textarea
            ref={textareaRef}
            value={value}
            onChange={onChange}
            rows={1}
            {...props}
            className={`resize-none whitespace-pre-line overflow-hidden ${props.className}`}
            style={{
                lineHeight: lineHeight,
            }}
        />
    );
};

export default AutoResizableTextarea;
