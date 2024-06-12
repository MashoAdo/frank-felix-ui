import { ToastPosition, toast } from "react-hot-toast"

export function showToaster(
  type: "success" | "error" | "loading",
  msg: string,
  duration = 3000,
  position = "top-center",
  id?: string,
) {
  const toastOptions = {
    position: position as ToastPosition,
    duration,
    id,
  }

  switch (type) {
    case "success":
      toast.success(msg, toastOptions)
      break

    case "error":
      toast.error(msg, toastOptions)
      break

    case "loading":
      toast.loading(msg, toastOptions)
      break

    default:
      toast.success(msg, toastOptions)
      break
  }
}
