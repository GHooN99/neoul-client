import axios from "axios";
import { useRouter } from "next/router";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@hooks/useToast";
import { UNKNOWN_ERROR_MESSAGE } from "@libs/constants/ErrorMessage";
import { PagePath } from "@libs/constants/pagePath";
import { JoinErrorResponse } from "@remotes/auth";
import { authService } from "@remotes/auth/auth.service";
import {
  JOIN_ERROR_MESSAGE,
  JOIN_SUCCESS_MESSAGE,
} from "../libs/constants/ToastMessages";

export const useJoinMutation = () => {
  const router = useRouter();
  const openToast = useToast();

  return useMutation(authService.signUp(), {
    onSuccess: () => {
      openToast(JOIN_SUCCESS_MESSAGE);
      router.replace(PagePath.LOGIN);
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        if (!error.response?.data) {
          openToast(JOIN_ERROR_MESSAGE);
          return;
        }
        const errorMessage = error.response.data as JoinErrorResponse;
        openToast(`⚠️ ${errorMessage.details}`);
        return;
      }
      openToast(UNKNOWN_ERROR_MESSAGE);
    },
  });
};
