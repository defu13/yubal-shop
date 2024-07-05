import { useState } from "react";

export const useModal = (initialState = false) => {
    const [isOpen, setIsOpen] = useState(initialState);
    const [formValues, setFormValues] = useState({
        title: "",
        description: "",
        category: "",
        price: "",
        image: "",
    });
    const [isEditMode, setIsEditMode] = useState(false);
    const [productId, setProductId] = useState(null);

    const handleOpen = (product = null) => {
        if (product) {
            setFormValues({
                title: product.title,
                description: product.description,
                category: product.category,
                price: product.price,
                image: product.image,
            });
            setIsEditMode(true);
            setProductId(product.id);
        } else {
            resetForm();
            setIsEditMode(false);
            setProductId(null);
        }
        setIsOpen(true);
    };
    const handleClose = () => {
        setIsOpen(false);
        resetForm();
        setIsEditMode(false);
        setProductId(null);
    };

    const resetForm = () => {
        setFormValues({
            title: "",
            description: "",
            category: "",
            price: "",
            image: "",
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
    };

    return {
        isOpen,
        isEditMode,
        formValues,
        productId,
        handleOpen,
        handleClose,
        handleChange,
    };
};
