import { sendFormSuccess, sendFormError, renderingPictureError } from './utils.js';
import { onClosedImgUploadKey } from './upload-pictures-modal.js';

const URL = 'https://30.javascript.htmlacademy.pro/kekstagram/';

const getData = (method) => {
  fetch(`${URL}data`)

    .then((response) => {
      if (!response.ok) {
        throw new Error();
      }
      return response.json();
    })
    .then((data) => {
      method(data);
    })
    .catch(() => {
      renderingPictureError();
    });
};


const postData = (valid, sendData, closeModal, disabledButton, unblockButton, form) => {

  if (valid) {
    fetch(
      URL,
      {
        method: 'POST',
        body: sendData,
      },
      disabledButton(),
    )
      .then((response) => {
        if (response.ok) {
          closeModal();
          sendFormSuccess();
          form.reset();

        } else {
          throw new Error();
        }
      })
      .catch(() => {
        document.removeEventListener('keydown', onClosedImgUploadKey);
        sendFormError();
      })
      .finally(unblockButton, document.addEventListener('keydown', onClosedImgUploadKey));
  }
};

export { getData,postData };
