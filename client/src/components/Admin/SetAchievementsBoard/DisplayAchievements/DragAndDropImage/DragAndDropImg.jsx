import { useCallback, useMemo } from "react";
import { useDropzone } from "react-dropzone";
import { useDispatch } from "react-redux";
import { newAchievementOnChangeReducer } from "../../../../../slices/achievementsBoardSlice";

const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  marginTop: "10px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#B2BEB5",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
};

const focusedStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

// Validation to check file size:
function fileSizeValidator(file) {
  if (file.size > 250000) {
    return {
      code: "image size too large",
      message: `Image size is larger than 250 Kb`,
    };
  } else if (file.size < 20000) {
    return {
      code: "image size too small",
      message: `Image size is smaller than 20 Kb`,
    };
  }

  return null;
}

// ******************************************************

const DragAndDropImg = () => {
  const dispatch = useDispatch();

  const onDrop = useCallback(
    (acceptedFiles) => {
      acceptedFiles.forEach((file) => {
        dispatch(
          newAchievementOnChangeReducer({
            name: "showImage",
            value: URL.createObjectURL(file),
          })
        );
        dispatch(
          newAchievementOnChangeReducer({
            name: "imageInputVal",
            value: file,
          })
        );
      });
    },
    [dispatch]
  );
  const {
    acceptedFiles,
    fileRejections,
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: {
      "image/jpeg": [],
      "image/png": [],
      "image/jpg": [],
    },
    maxFiles: 1,
    validator: fileSizeValidator,
    onDrop,
  });

  const acceptedFileItems = acceptedFiles.map((file) => (
    <li
      key={file.path}
      className="text-green-500 flex items-center justify-center"
    >
      {file.path} - {file.size / 1000} Kb
    </li>
  ));

  const fileRejectionItems = fileRejections.map(({ file, errors }) => (
    <li
      key={file.path}
      className="text-red-500 flex flex-col items-center justify-center"
    >
      {file.path} - {file.size / 1000} Kb
      <ul>
        {errors.map((e) => (
          <li key={e.code}>{e.message}</li>
        ))}
      </ul>
    </li>
  ));

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject]
  );

  return (
    <section className="container">
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} name="achievementImage" type="file" />
        <p className="text-lg font-bold">
          Drag and drop student image here, or click to select files
        </p>
        <em>(Only *.jpeg / *.jpg and *.png images will be accepted)</em>
        <em>Accepted size 20kb (min) - 250kb (max)</em>
      </div>
      <aside>
        <ul>{acceptedFileItems}</ul>
        <ul>{fileRejectionItems}</ul>
      </aside>
    </section>
  );
};

export default DragAndDropImg;
