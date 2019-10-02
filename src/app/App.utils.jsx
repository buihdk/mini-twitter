// eslint-disable-next-line import/prefer-default-export
export const handleAlert = ({ type, setAlert }) => {
  setAlert(type);
  setTimeout(() => {
    setAlert('');
  }, 2000);
};
