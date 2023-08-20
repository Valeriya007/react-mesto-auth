import PopupWithForm from "./PopupWithForm";

export default function EditDeletePopup({ isOpen, onClose, onSubmit, card }) {

    function handleSubmit(evt) {
        evt.preventDefault();
        onSubmit(card);
    }

    return (
        <PopupWithForm
            name='delete'
            title='Вы уверены?'
            button='Да'
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
        >
        </PopupWithForm>
    )
}