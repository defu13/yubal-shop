import { useState } from "react";

export const useModal = (initialState = false) => {
    const [isOpen, setIsOpen] = useState(initialState);
    const [initialValues, setInitialValues] = useState({
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
            setInitialValues({
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
        setInitialValues({
            title: "",
            description: "",
            category: "",
            price: "",
            image: "",
        });
    };

    return {
        isOpen,
        isEditMode,
        initialValues,
        productId,
        handleOpen,
        handleClose,
    };
};
