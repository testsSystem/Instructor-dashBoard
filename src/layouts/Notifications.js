import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { toggleNotfOff } from "../store/actions/notifications";

const SimpleSnackbar = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const {
    message,
    variant,
    open: openGlobal,
  } = useSelector((state) => state.notification);
  console.log({
    message,
    variant,
    open: openGlobal,
  });
  const handleClose = () => {
    setOpen(false);
    dispatch(toggleNotfOff());
  };

  useEffect(() => {
    openGlobal && setOpen(true);
  }, [openGlobal, variant, message]);
  console.log("first");

  return (
    <div>
      <Snackbar
        sx={{ height: "20%" }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        {openGlobal && (variant === "error" || variant === "warning") ? (
          <Alert
            variant="filled"
            severity={variant}
            style={{ minWidth: "150px" }}
          >
            {message || "something went wrong"}
          </Alert>
        ) : (
          <Alert
            variant="filled"
            severity={variant}
            style={{ minWidth: "150px" }}
          >
            {message || "success"}
          </Alert>
        )}
      </Snackbar>
    </div>
  );
};

export default SimpleSnackbar;
