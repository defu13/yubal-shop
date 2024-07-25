import GenericModal from "../GenericModal/GenericModal";
import "./ProductModal.css";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import {
    createProduct,
    updateProduct,
} from "../../redux/reducers/productsSlice";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

const ProductModal = ({
    isOpen,
    onClose,
    initialValues,
    productId,
    isEditMode,
}) => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.products);
    const {
        register,
        handleSubmit,
        formState: { errors },
        trigger,
        reset,
    } = useForm({ defaultValues: initialValues });

    useEffect(() => {
        if (isEditMode && initialValues) {
            reset(initialValues);
        }
    }, [isEditMode, initialValues, reset]);

    useEffect(() => {
        if (!isOpen) {
            reset(initialValues);
        }
    }, [isOpen, reset, initialValues]);

    const onSubmit = (data) => {
        let productToHandle = {
            id: productId,
            ...data,
        };

        if (isEditMode) {
            const existingProduct = products.find(
                (product) => product.id === productId
            );
            if (existingProduct) {
                productToHandle.rating = existingProduct.rating;
            }
            dispatch(
                updateProduct({
                    id: productId,
                    updatedProduct: productToHandle,
                })
            );
            toast.success("Producto guardado correctamente");
        } else {
            productToHandle.rating = {
                rate: "",
                count: "",
            };
            dispatch(createProduct(productToHandle));
            toast.success("Producto creado correctamente");
        }
        onClose();
    };

    const shortTextValidation = {
        required: "Este campo es obligatorio",
        minLength: {
            value: 3,
            message: "Debe tener al menos 3 caracteres",
        },
        maxLength: {
            value: 50,
            message: "Debe tener como maximo 50 caracteres",
        },
    };

    return (
        <GenericModal isOpen={isOpen} onClose={onClose}>
            <h2>{isEditMode ? "Editar Producto" : "Crear Producto"}</h2>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="create-product-form"
            >
                <label htmlFor="name">Nombre</label>
                <input
                    className="create-product-input"
                    name="title"
                    placeholder="Nombre del Producto"
                    {...register("title", shortTextValidation)}
                    onBlur={() => trigger("title")}
                />
                {errors.title && (
                    <p className="error-message">{errors.title.message}</p>
                )}
                <label htmlFor="description">Descripción</label>
                <textarea
                    className="create-product-input"
                    name="description"
                    placeholder="Descripción del producto"
                    {...register("description", {
                        required: "Este campo es obligatorio",
                        minLength: {
                            value: 3,
                            message: "Debe tener al menos 3 caracteres",
                        },
                        maxLength: {
                            value: 200,
                            message: "Debe tener como maximo 200 caracteres",
                        },
                    })}
                    onBlur={() => trigger("description")}
                />
                {errors.description && (
                    <p className="error-message">
                        {errors.description.message}
                    </p>
                )}
                <label htmlFor="category">Categoría</label>
                <input
                    className="create-product-input"
                    name="category"
                    placeholder="Categoría"
                    {...register("category", shortTextValidation)}
                    onBlur={() => trigger("category")}
                />
                {errors.category && (
                    <p className="error-message">{errors.category.message}</p>
                )}
                <label htmlFor="price">Precio</label>
                <input
                    type="text"
                    className="create-product-input"
                    name="price"
                    placeholder="Precio"
                    {...register("price", {
                        required: "Este campo es obligatorio",
                        pattern: {
                            value: /^[0-9]+(\.[0-9]{1,2})?$/,
                            message: "Introduce un precio válido, (Ejemplo: 10.25)",
                        },
                    })}
                    onBlur={() => trigger("price")}
                />
                {errors.price && (
                    <p className="error-message">{errors.price.message}</p>
                )}
                <label htmlFor="image">URL de la imagen</label>
                <input
                    className="create-product-input"
                    name="image"
                    placeholder="URL de la imagen (opcional)"
                    {...register("image", {
                        pattern: {
                            value: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i,
                            message: "Introduce una URL válida",
                        },
                    })}
                    onBlur={() => trigger("image")}
                />
                {errors.image && (
                    <p className="error-message">{errors.image.message}</p>
                )}
                <button type="submit" className="create-product-button">
                    {isEditMode ? "Guardar" : "Crear"}
                </button>
            </form>
        </GenericModal>
    );
};

export default ProductModal;
