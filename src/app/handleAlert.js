const handleAlert = ({ type, setAlert }) => {
  setAlert(type);
  setTimeout(() => {
    setAlert('');
  }, 2000);
};

export default handleAlert;
