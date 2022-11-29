const tg = window.Telegram.WebApp;

export function useTelegram() {


    const onClose = () => {
        tg.close()
    }

    const onToggleButton = () => {
        if(tg.MainButton.isVisible) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }                                 /* кнопка в телеграме */
    }

    return {
        onToggleButton,
        onClose,
        tg,
        user: tg.initDataUnsafe?.user,    /* данные о пользователи */
    }
}