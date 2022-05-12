import { useSnackbar } from "notistack"
import { useCallback } from "react";

export const useNotification = (...types: string[]) => {
    const { enqueueSnackbar } = useSnackbar();
    const useMessage = (variant: string) => useCallback(
        (text, restProps?) => {
            enqueueSnackbar(text, { variant, preventDuplicate: true, ...restProps });
        }, [variant]);
    return types.map(useMessage)
}