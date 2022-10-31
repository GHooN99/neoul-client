import axios from "axios";
import { useRouter } from "next/router";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@hooks/useToast";
import { UNKNOWN_ERROR_MESSAGE } from "@libs/constants/ErrorMessages";
import { authService } from "@remotes/auth/auth.service";
import {
  LOGIN_ERROR_MESSAGE,
  LOGIN_SUCCESS_MESSAGE,
} from "../libs/constants/ToastMessages";

export const useLoginMutation = () => {
  const router = useRouter();
  const openToast = useToast();

  return useMutation(authService.signIn(), {
    onSuccess: (response) => {
      // set Cookie ?

      openToast(LOGIN_SUCCESS_MESSAGE);
      router.replace("/list");
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        openToast(LOGIN_ERROR_MESSAGE);
        return;
      }
      openToast(UNKNOWN_ERROR_MESSAGE);
    },
  });
};
